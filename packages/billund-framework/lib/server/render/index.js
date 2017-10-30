'use strict';

const RENDER_TYPE = require('billund-enums').renderType;
let vueRender = null;
let reactRender = null;

/**
 * 一些预处理方法
 */
function doInit() {
    process.env.REACT_ENV = 'server';
    // 设置VUE_ENV enviroment variable to "server",作用是在服务端取消对数据对象的监控,能够增强性能
    process.env.VUE_ENV = 'server';
}
doInit();

/**
 * 渲染组件内容
 *
 * @param  {Object} widget - 组件
 * @param  {Object} data - 渲染数据
 * @param  {Object} routerConfig - 路由信息配置
 * @return {String}
 */
function* render(widget, data, routerConfig) {
    const renderType = widget.renderType;
    if (renderType == RENDER_TYPE.RENDER_TYPE_VUE) {
        if (!vueRender) {
            vueRender = require('./lib/vue.js');
        }
        return yield vueRender(widget, data, routerConfig);
    }
    if (!reactRender) {
        reactRender = require('./lib/react.js');
    }
    return reactRender(widget, data);
}

module.exports = render;