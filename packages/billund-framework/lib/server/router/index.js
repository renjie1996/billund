'use strict';

const RENDER_TYPE = require('billund-enums').renderType;

let vueRouterUtil = null;

/**
 * 计算当前页面上的渲染配置
 *
 * @param  {Array} widgets - 对应的重要组件
 * @return {Object}
 */
function addupRenderType(widgets) {
    let react = 0;
    let vue = 0;

    widgets.forEach((widget) => {
        const renderType = widget.renderType;
        if (renderType == RENDER_TYPE.RENDER_TYPE_REACT) {
            react++;
        }
        if (renderType == RENDER_TYPE.RENDER_TYPE_VUE) {
            vue++;
        }
    });
    return {
        react,
        vue
    };
}

/**
 * 创建对应的router实例
 *
 * @param  {Object} context - koa上下文
 * @param  {Object} config - 配置
 * @param  {Array} widgets - 对应的重要组件
 */
function assemblyRouters(context, config, widgets) {
    const renderTypes = addupRenderType(widgets);
    /*
        react-router TODO;
        vue-router: 已经完成
     */
    let reactRouter = null;
    let vueRouter = null;
    if (renderTypes.vue > 0) {
        if (!vueRouterUtil) {
            vueRouterUtil = require('./lib/vue.js');
        }
        vueRouter = vueRouterUtil.createRouter(context, config, widgets);
    }

    widgets.forEach((widget) => {
        widget.router = widget.renderType == RENDER_TYPE.RENDER_TYPE_VUE ? vueRouter : reactRouter;
    });
}

module.exports = {
    assemblyRouters
};