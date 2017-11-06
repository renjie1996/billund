'use strict';

const isDev = (process.env.LEGO_ENV === 'development' || process.env.BILLUND_ENV === 'development');

const _ = require('lodash');
const Vue = require('vue/dist/vue.common.js');
const Enums = require('billund-enums');
const StateEnums = Enums.state;

// 目前使用直接创建的方法,因为我们自己已经实现了bigpipe
const renderer = require('vue-server-renderer').createRenderer({
    cache: require('lru-cache')({
        max: 1000,
        maxAge: 1000 * 60 * 60
    })
});

/**
 * 渲染组件内容
 *
 * @param  {Object} context - koa上下文
 * @param  {Object} widget - 组件
 * @param  {Object} data - 渲染数据
 * @return {String}
 */
function* render(context, widget, data) {
    const vueConfig = widget.template;
    if (!vueConfig) throw new Error(`name:${widget.name} missing template!`);

    // 如果是测试环境的话,去掉serverKey方法,因为有热更新的需求
    if (isDev) vueConfig.serverCacheKey = null;
    // 判断是否是合理的数据类型
    isValidProps(data) || (data = {});

    const provider = createProvider(context, widget, data);

    return yield new Promise((resolve, reject) => {
        renderer.renderToString(provider, (error, html) => {
            if (error) {
                console.error(`id:${widget.id},name:${widget.name} render error!
                                ${error.stack}`);
                reject(error);
                return;
            }
            resolve(html);
        });
    });
}

/**
 * 确认是否是合理的数据类型
 *
 * @param  {Object}  data - 数据
 * @return {Boolean}
 */
function isValidProps(data) {
    return data && _.isObject(data);
}

const getEmptyComponent = (function() {
    let element = null;
    return function() {
        if (!element) {
            element = {
                render(h) {
                    return h('i', {
                        'class': {
                            'empty-component': true
                        }
                    });
                }
            };
        }
        return element;
    };
}());

/**
 * 获取基本的组件信息
 *
 * @param  {Object} widget - 组件信息
 * @return {Object}
 */
function getBaseComponent(widget) {
    return {
        components: {
            'wrapped-element': widget.template
        },
        computed: {
            widgetProps() {
                return this.$store.getters[StateEnums.WIDGET_VUEX_GETTERS_PREFIX + widget.id];
            }
        },
        render(h) {
            const attrs = this.$attrs || {}; // for router
            const props = this.widgetProps;
            return h('wrapped-element', {
                props: Object.assign({}, props, attrs),
                attrs
            });
        }
    };
}

/**
 * 创建组件级的store-module
 *
 * @param  {Object} widget - 组件信息
 * @param  {Object} props - 获取到的数据
 */
function registerWidgetStore(widget, props) {
    /*
        因为vue的特性，需要对存在的字段加入setter,getter,所以我们需要对那些不存在的字段做一个兼容
    */
    const declareProps = widget.template.props || {};
    const tplProps = {};

    const defaultPropKeys = _.isArray(declareProps) ? declareProps : Object.keys(declareProps);

    defaultPropKeys.forEach((propKey) => {
        const prop = declareProps[propKey];
        if (!(_.isObject(prop) && prop.default !== undefined)) {
            tplProps[propKey] = null;
            return true;
        }
        tplProps[propKey] = undefined;
    });

    props = _.extend({}, tplProps, props);

    widget.store.registerModule(StateEnums.PREFIX_WIDGET_OWN_STATE_KEY + widget.id, {
        state: props,
        getters: {
            [StateEnums.WIDGET_VUEX_GETTERS_PREFIX + widget.id](state) {
                return state;
            }
        }
    });
}

/**
 * 在外围创建一个根节点,包装我们自己的容器
 *
 * @param  {Object} context - koa上下文
 * @param  {Object} widget - 组件信息
 * @param  {Object} props - 数据
 * @return {Object}
 */
function createProvider(context, widget, props) {
    /*
        目前，用store来进行所有数据的串联，因为我们要用同一个router
     */
    registerWidgetStore(widget, props);
    const needRouter = !!widget.router;
    if (needRouter) {
        const app = new Vue({
            router: widget.router,
            store: widget.store,
            render(h) {
                return h('router-view', {
                    props: {
                        name: widget.id
                    }
                });
            }
        });
        widget.router.push(widget.router.pushUrl);
        return app;
    }
    return new Vue(Object.assign(getBaseComponent(widget), {
        store: widget.store
    }));
}

module.exports = {
    render,
    getBaseComponent,
    getEmptyComponent
};