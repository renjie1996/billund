'use strict';

const _ = require('lodash');
const fs = require('fs');
const ejs = require('ejs');
const WIDGET = require('billund-enums').widget;
const RENDER = require('billund-enums').render;

const templatePathCache = {};

/**
 * 分组并且排序组件列表
 *
 * @param  {Array} widgets - 组件配置信息
 * @return {Array} - 返回group与sort后的结果
 */
function groupAndSortWidgets(widgets) {
    widgets = widgets || [];
    // 分组,根据group值
    let widgetGroups = _.groupBy(widgets, (widget) => {
        return widget.group;
    });
    // 接着,根据groups来进行排序
    let groups = Object.keys(widgetGroups);
    groups = _.sortBy(groups, (group) => {
        return parseInt(group);
    });
    return groups.map((group) => {
        return widgetGroups[group];
    });
}

/**
 * 创建子组件二级页面
 *
 * @param  {Object} widget - 组件
 * @return {String}
 */
function createSubWidgetSection(widget) {
    if (!widget) return '';

    const html = widget.result && widget.result.result && widget.result.result.results || '';
    return `<div class="${WIDGET.CLASS_WIDGET_SUB}" id="${widget.id}" data-widget-name="${widget.name}">${html}</div>`;
}

/**
 * 创建子组件的集合group-html
 *
 * @param  {Array}  subs - 数组
 * @param  {Boolean} isActive - 是否可以立即展示
 * @return {String}
 */
function createWidgetGroup(subs, isActive) {
    if (!(subs && subs.length)) return '';
    const subNames = [];
    const subHtmls = [];
    subs.forEach((sub) => {
        if (!sub) return true;
        if (sub.name) {
            subNames.push(sub.name);
        }
        if (sub.html) {
            subHtmls.push(sub.html);
        }
    });
    const groupIndex = subs[0].groupId;
    const groupCls = `${WIDGET.CLASS_WIDGET_GROUP}-${groupIndex}`;

    return `<div class="${WIDGET.CLASS_WIDGET_GROUP} ${groupCls} ${isActive ? 'active' : ''}" data-widget-names="${subNames.join(',')}">
                ${subHtmls.join('')}
            </div>`;
}

/**
 * 创建widget html完整内容
 *
 * @param  {String} content - 内容
 * @param  {Boolean} shouldHidden - 是否应该隐藏
 * @return {String} - html内容
 */
function createMainPage(content, shouldHidden) {
    content = content || '';
    shouldHidden = shouldHidden || false;
    return `<div id="${RENDER.ID_MAIN_PAGE}" style="position: relative;min-height: 100%;${shouldHidden ? 'display:none;' : ''}">
                ${content}
            </div>`;
}

function getTemplateStr(templatePath) {
    let htmlStr = templatePathCache[templatePath];
    if (!htmlStr) {
        htmlStr = fs.readFileSync(templatePath, {
            encoding: 'utf-8'
        });
        templatePathCache[templatePath] = htmlStr;
    }
    return htmlStr;
}

/**
 * 根据widget生成html内容
 *
 * @param  {Object} config - 对应配置
 * @return {Object}
 */
module.exports = function*(config) {
    config = config || {};
    const options = config.options || {};

    const widgets = config.widgets || [];
    const mostImportantWidgets = config.mostImportantWidgets || [];
    const successWidgets = config.executeResults.success || [];

    const subWidgetsArr = groupAndSortWidgets(widgets);
    const widgetGroupArr = subWidgetsArr.map((subWidgets) => {
        // 先进行排序,根据sub值
        subWidgets = _.sortBy(subWidgets, (subWidget) => {
            return subWidget.sub;
        });
        const hasSuccessSub = _.some(subWidgets, (subWidget) => {
            return successWidgets.indexOf(subWidget) != -1;
        });
        let groupId = '';
        const results = subWidgets.map((subWidget) => {
            groupId = subWidget.group;
            return {
                name: subWidget.name,
                html: createSubWidgetSection(subWidget),
                groupId
            };
        });
        return {
            groupId,
            html: createWidgetGroup(results, hasSuccessSub)
        };
    });
    /*
        判断,是否有自定义的模板需求
     */
    let content = '';
    if (options.widgetContentTemplatePath) {
        const renData = {};
        widgetGroupArr.forEach((item) => {
            renData[`group${item.groupId}`] = item.html;
        });
        content = ejs.render(getTemplateStr(options.widgetContentTemplatePath), renData);
    } else {
        content = widgetGroupArr.map((item) => {
            return item.html;
        }).join('');
    }

    const shouldHidden = (!config.allowShowEvenFailed) && (mostImportantWidgets.length > successWidgets.length);
    return {
        result: createMainPage(content, shouldHidden)
    };
};