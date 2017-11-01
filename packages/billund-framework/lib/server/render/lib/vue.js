'use strict';

const isDev = (process.env.LEGO_ENV === 'development' || process.env.BILLUND_ENV === 'development');

const _ = require('lodash');
const Vue = require('vue/dist/vue.common.js');
const VueRouter = require('vue-router');

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
 * @param  {Object} widget - 组件
 * @param  {Object} data - 渲染数据
 * @param  {Function} onComponentCreated - 当组件创建的回调
 * @return {String}
 */
function* render(context, widget, data, onComponentCreated) {
    const vueConfig = widget.template;
    if (!vueConfig) throw new Error(`name:${widget.name} missing template!`);

    // 如果是测试环境的话,去掉serverKey方法,因为有热更新的需求
    if (isDev) vueConfig.serverCacheKey = null;
    // 判断是否是合理的数据类型
    isValidProps(data) || (data = {});

    const provider = createProvider(context, widget, data, onComponentCreated);

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
 * 在外围创建一个根节点,包装我们自己的容器
 *
 * @param  {Object} widget - 组件信息
 * @param  {Object} props - 数据
 * @param  {Function} onComponentCreated - 当组件创建的回调
 * @return {Object}
 */
function createProvider(context, widget, props) {
    const needRouter = !!widget.router;
    if (needRouter) {
        const component = {
            components: {
                'wrapped-element': widget.template
            },
            render(h) {
                return h('wrapped-element', {
                    props
                });
            }
        };
        widget.router.routes.forEach((route) => {
            route.components = route.components || {};
            if (route.components[widget.id]) {
                route.components[widget.id] = component;
            } else {
                route.components[widget.id] = getEmptyComponent;
            }
        });
        const router = new VueRouter(widget.router);
        const app = new Vue({
            router,
            store: widget.store,
            render(h) {
                return h('router-view', {
                    props: {
                        name: widget.id
                    }
                });
            }
        });
        router.push(context.url);
        return app;
    }
    return new Vue({
        store: widget.store,
        components: {
            'wrapped-element': widget.template
        },
        render(h) {
            return h('wrapped-element', {
                props
            });
        }
    });
}

module.exports = render;