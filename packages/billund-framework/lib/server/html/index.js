'use strict';

const path = require('path');
const _ = require('lodash');
const ejs = require('ejs');
const fs = require('fs');

const legoUtils = require('billund-utils');

const parallel = require('../../util/parallel');
const widgetUtil = require('./util/widgetutil');
const store = require('../store/index');
const router = require('../router/index');
const renderUtil = require('../render/index');

const isDev = (process.env.LEGO_ENV === 'development' || process.env.BILLUND_ENV === 'development');

/*
    渲染插件
 */
const baseMetaPlugin = require('./renderplugins/basemeta/index.js');
const pageTitlePlugin = require('./renderplugins/pagetitle/index.js');
const DEFAULT_HEADER_PLUGINS = [baseMetaPlugin, pageTitlePlugin];

const widgetContentPlugin = require('./renderplugins/widgetcontents/index.js');
const initialStatePlugin = require('./renderplugins/initialstate/index.js');
const iosFixedStylePlugin = require('./renderplugins/iosfixedstyle/index.js');
const mostImportantWidgetsTagPlugin = require('./renderplugins/mostimportantwidgetstag/index.js');
const widgetConfigsPlugin = require('./renderplugins/widgetconfigs/index.js');
const widgetPropsPlugin = require('./renderplugins/widgetprops/index.js');
const backAutoRefreshPlugin = require('./renderplugins/backautorefresh/index.js');
const DEFAULT_BODY_PLUGINS = [
    widgetContentPlugin,
    initialStatePlugin,
    iosFixedStylePlugin,
    mostImportantWidgetsTagPlugin,
    widgetConfigsPlugin,
    widgetPropsPlugin,
    backAutoRefreshPlugin
];
const DEFAULT_TEMPLATE_PATH = path.resolve(__dirname, '../../../resources/html/default.html');

const widgetCaches = require('lru-cache')({
    max: 1000,
    maxAge: 1000 * 60 * 60
});
const baseopt = {};
const templatePathCache = {};

/**
 * 初始化方法
 *
 * @param  {Object} config - 配置对象:
 * {
 *      vendors: [Object], // dll文件的路径(取决于你自己的解析方式),一般会有react|vue两个字段
 *      renderPlugins: [Object] // 渲染插件,一般会有header和body两个字段,对应不同的位置
 * }
 */
function init(config) {
    if (!(config && config.vendors)) throw new Error('missing vendors for billund');

    _.extend(baseopt, config);
    // 自动增添组件
    const renderPlugins = baseopt.renderPlugins || {};
    const headerPlugins = DEFAULT_HEADER_PLUGINS.concat(renderPlugins.header || []);
    const bodyPlugins = DEFAULT_BODY_PLUGINS.concat(renderPlugins.body || []);
    baseopt.renderPlugins = {
        header: headerPlugins,
        body: bodyPlugins
    };
}

/**
 * 生成html的核心方法,将核心模块先输出回浏览器，然后次要模块全部降级
 *
 * @param {Object} context - 上下文
 */
function* execute(context) {
    const legoConfig = context.legoConfig;
    /*
        进行一些基本的准备工作,例如区分核心非核心模块，自动填充静态资源，创建store等
     */
    const widgets = widgetUtil.convertWidgets(legoConfig.widgets || []);
    const mostImportantWidgets = legoUtils.widget.extractImportantWidgets(widgets);
    const otherWidgets = _.difference(widgets, mostImportantWidgets);
    const staticResources = exportStaticResources(legoConfig, widgets);

    store.assemblyStore(legoConfig, mostImportantWidgets);
    router.assemblyRouters(context, legoConfig, mostImportantWidgets);

    const combineResults = yield {
        important: renderMostImportantWidgets(context, mostImportantWidgets),
        other: renderOtherWidgets(context, otherWidgets)
    };

    const successWidgets = combineResults.important.successWidgets;
    const failWidgets = _.extend(combineResults.important.failWidgets, combineResults.other);

    const pluginConfig = {
        allowShowEvenFailed: !!legoConfig.allowShowEvenFailed,
        storeData: legoConfig.storeData || {},
        widgets,
        mostImportantWidgets,
        executeResults: {
            success: _.values(successWidgets),
            fail: _.values(failWidgets)
        },
        staticResources,
        options: legoConfig.options
    };
    /*
        接着，就是运行的核心流程了,通过各种plugins来生成html
        分为两种种plugins:
        header,
        body

        每个plugins暴露出来的都是一个GeneratorFunction,接收两个参数
        1.config - 当前执行配置，有以下几个基本字段:
            storeData: [Object], // 传给前端的全局数据,
            widgets: [Array], // widgets的配置结果，里面还包括了执行结果
            mostImportantWidgets: [Array], // 重要的widget执行模块
            executeResults: [Object], // 模块执行的结果,有success和fail两个字段,分别对应数组，数组元素就是widget
            staticResources: [Array], // 引用的静态资源,以entry和styles为区分
            options: [Object], // 对应的可选配置，可以自由拓展
        2.context - 上下文

        都要求返回一个Object内容,字段如下:
        {
            1.result: [String] // 字符串,会添加到html上
        }
     */
    const plugins = baseopt.renderPlugins;
    const headerPlugins = plugins.header || [];
    const bodyPlugins = plugins.body || [];

    const headerTasks = headerPlugins.map((fn) => {
        return function*() {
            return yield fn(pluginConfig, context);
        };
    });
    const bodyTasks = bodyPlugins.map((fn) => {
        return function*() {
            return yield fn(pluginConfig, context);
        };
    });

    const renderResult = yield {
        header: parallel(headerTasks, {
            fallback: null,
            timeout: 2000
        }),
        body: parallel(bodyTasks, {
            fallback: null,
            timeout: 2000
        })
    };

    let headerResults = renderResult.header;
    headerResults = headerResults.map((result) => {
        if (!(result && result.result)) return '';
        return result.result.result;
    });

    let bodyResults = renderResult.body;
    bodyResults = bodyResults.map((result) => {
        if (!(result && result.result)) return '';
        return result.result.result;
    });

    const templateStr = getTemplateStr(legoConfig);
    const templateData = legoConfig.htmlConfig && legoConfig.htmlConfig.data || {};
    context.body = ejs.render(templateStr, Object.assign(templateData, {
        headerResult: headerResults.join(''),
        bodyResult: bodyResults.join('')
    }));
}

function getTemplateStr(legoConfig) {
    const templatePath = legoConfig.htmlConfig && legoConfig.htmlConfig.path || DEFAULT_TEMPLATE_PATH;
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
 * 输出静态资源列表
 *
 * @param {Object} config - 对应lego的配置
 * @param {Array}  widgets - widget列表
 * @return {Array}
 */
function exportStaticResources(config, widgets) {
    const options = config.options || {};
    const ret = options.staticResources || [];
    const vendors = baseopt.vendors;

    const renderTypeCountMap = widgetUtil.addupRenderTypeCount(widgets);
    if (renderTypeCountMap.react > 0) {
        ret.unshift({
            entry: vendors.react
        });
    }
    if (renderTypeCountMap.vue > 0) {
        ret.unshift({
            entry: vendors.vue
        });
    }
    return ret;
}

/**
 * 渲染widgets(并发执行)
 *
 * @param  {Object} context - 执行上下文
 * @param  {Array} widgets - widgets的配置数组
 * @return {Object} - 分别对应成功和失败的结果
 */
function* renderMostImportantWidgets(context, widgets) {
    const tasks = buildWidgetTasks(context, widgets, false);
    const ret = yield tasks;

    const successWidgets = {};
    const failWidgets = {};

    Object.keys(ret).forEach((id) => {
        const widget = ret[id];
        if (!(widget && widget.result)) return true;

        const isSuccess = widget.result.result.resultType === 'success';
        (isSuccess ? successWidgets : failWidgets)[id] = widget;
    });
    return {
        successWidgets,
        failWidgets
    };
}

function* renderOtherWidgets(context, widgets) {
    const tasks = buildWidgetTasks(context, widgets, true);
    return yield tasks;
}

/**
 * 构建渲染并发执行重要组件的任务
 *
 * @param {Object} context - 执行上下文
 * @param {Array} widgets - widgets的配置数组
 * @param {Boolean} mustFail - 要求模块必须以失败的形式返回
 * @return {Object} widget-id与任务执行的对象
 */
function buildWidgetTasks(context, widgets, mustFail) {
    const result = {};
    widgets.forEach((widget) => {
        function* fn() {
            const paramMiss = pickoutMissParam(widget.params, widget.requireParams);
            widget.paramMiss = paramMiss;
            const meetCon = (!mustFail) && (!widget.mustFail) && !(paramMiss && paramMiss.length);
            // 根据结果来进行判断如何执行
            const genFn = meetCon ? wrapToSuccGen(context, widget) : wrapToFailGen(widget);
            let ret = yield parallel(genFn, {
                timeout: 2000,
                fallback: null
            });
            /*
                1.运行了failGen,无论结果如何,直接返回
                2.运行了succGen,执行成功,那么返回结果
                3.运行了succGen,执行失败,那么调用failGen,尝试返回结果
             */

            if (meetCon && (ret.error)) {
                const newRet = yield parallel(wrapToFailGen(widget), {
                    timeout: 2000,
                    fallback: null
                });
                ret = _.extend(newRet, {
                    error: ret.error
                });
            }
            return _.extend(widget, {
                result: ret
            });
        }
        result[widget.id] = fn;
    });
    return result;
}

/**
 * 抓取不满足条件的参数
 *
 * @param  {Object} params - 当前已有参数信息
 * @param  {Array} requireParams - 需要的参数字段
 * @return {Array} - 缺少的参数
 */
function pickoutMissParam(params, requireParams) {
    params = params || {};
    requireParams = requireParams || [];

    return _.filter(requireParams, (requireParam) => {
        /*
            这里现在可以支持一些校验规则
            requireParam可以用 {paramname}!0!false!''!null来判断
         */
        requireParam = requireParam.split('!');
        const value = params[requireParam[0]];
        if (_.isUndefined(value)) return true;

        const rules = requireParam.slice(1);
        if (!(rules && rules.length)) return false;

        const matchAllRules = _.every(rules, (rule) => {
            if (rule === '0') return value !== 0 || value !== '0';
            if (rule === '""' || rule === '\'\'') return value !== '';
            if (rule === 'null') return !_.isNull(value);
            if (rule === 'false') return value !== false;
            return true;
        });

        return !matchAllRules;
    });
}

/**
 * 将widget包装成为一个成功调用函数
 *
 * @param {Object} context - koa上下文
 * @param  {Object} widget - widget配置
 * @return {Function}
 */
function wrapToSuccGen(context, widget) {
    return function*() {
        // 参数需要clone下,以免被widget的数据执行函数修改了
        const params = _.clone(widget.params);

        /*
            1.尝试计算serverCachekey
            2.尝试去cache里取值
            3.有值的话直接返回，但是不要更新cache的内容
            4.如果没有值，正常拉取，最后根据是否有cacheKey来决定是否需要更新内存
         */
        const shouldUseCache = !isDev && widget.serverCacheKey;
        let computedServerCacheKey = '';
        try {
            if (shouldUseCache) {
                computedServerCacheKey = `widgetName:${widget.name}|cacheKey:${widget.serverCacheKey(widget.params, widget.meta)}`;
            }
        } catch (e) {
            console.warm(`compute serverCacheKey error:${e.stack}`);
        }

        const cachedResult = computedServerCacheKey && widgetCaches.get(computedServerCacheKey);
        if (cachedResult && cachedResult.data && cachedResult.results) {
            return {
                resultType: 'success',
                fromType: 'cache',
                id: widget.id,
                name: widget.name,
                meta: cachedResult.meta,
                data: cachedResult.data,
                results: cachedResult.results
            };
        }

        // 先执行数据方法,把数据上下文传入
        if (!widget.dataGenerator) {
            widget.dataGenerator = function*(params) {
                return params || {};
            };
        }
        const dataGen = widget.dataGenerator.call(context, params);
        const meta = widget.meta || {};
        const data = yield dataGen;
        /*
            meta与data一起进行用以渲染，data的优先级更高
         */
        const results = yield renderUtil.render(context, widget, Object.assign({}, meta, data));

        if (computedServerCacheKey) {
            widgetCaches.set(computedServerCacheKey, {
                meta: widget.meta,
                data,
                results
            });
        }
        return {
            resultType: 'success',
            fromType: 'normal',
            id: widget.id,
            name: widget.name,
            meta,
            data,
            results
        };
    };
}

/**
 * 将widget转换成一个失败任务
 *
 * @param  {Object} widget - widget配置
 * @return {Function}
 */
function wrapToFailGen(widget) {
    return function*() {
        const params = widget.params || {};
        // 只记录存在的字段
        const retParams = {};
        Object.keys(params).forEach((key) => {
            key && (!_.isUndefined(params[key])) && (retParams[key] = params[key]);
        });

        return {
            resultType: 'fallback',
            id: widget.id,
            name: widget.name,
            meta: widget.meta || {},
            params: retParams,
            fallbackParams: widget.paramMiss || []
        };
    };
}

module.exports = {
    init,
    execute
};