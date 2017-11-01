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
 * 渲染的帮助类
 */
class RenderUtil {
    constructor(widgets) {
        this.widgets = widgets;
        this.id2ComponentCreatedCb = {};
    }

    /**
     * 注册组件创建成功回调
     *
     * @param  {String} id - 组件id
     * @param  {Function} cb - 回调
     */
    registerComponentCreateedCb(id, cb) {
        this.id2ComponentCreatedCb[id] = cb;
    }

    /**
     * 生成vueComponet的Promise
     *
     * @return {Object}
     */
    getComponentPromises() {
        const ret = {};
        this.widgets.forEach((widget) => {
            ret[widget.id] = new Promise((resolve) => {
                this.registerComponentCreateedCb(widget.id, (component) => {
                    resolve(component);
                });
            });
        });
        return ret;
    }

    * render(context, widget, data) {
        const renderType = widget.renderType;
        if (renderType == RENDER_TYPE.RENDER_TYPE_VUE) {
            if (!vueRender) {
                vueRender = require('./lib/vue.js');
            }
            return yield vueRender(context, widget, data, this.id2ComponentCreatedCb[widget.id]);
        }
        if (!reactRender) {
            reactRender = require('./lib/react.js');
        }
        return reactRender(widget, data);
    }
}

module.exports = RenderUtil;