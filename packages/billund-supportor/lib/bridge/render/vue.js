'use strict';

const Vue = require('vue');
const VueRouter = require('vue-router');
const Enums = require('billund-enums');

const StateEnums = Enums.state;

/**
 * 链接vue的组件
 *
 * @param  {Object} widgetBridge - WidgetBridge的实例
 */
function connectVueTemplateElement(widgetBridge) {
    if (!widgetBridge.store) return;
    if (!widgetBridge.rootContainer) return;

    if (!(widgetBridge.initialProps)) return;
    /*
     * 创建一个组件,
     * el是rootContainer,data里会有一个legoWidgetId,然后store是使用module过的store
     */

    /*
     * vue2.0有一个比较坑的点,就是会把挂载的el整个替换掉,那么对于我们,就分为两种情况
     * 1:server端有渲染,那么找到那个div
     * 2:没有的话,创建一个临时div
     */
    let node = null;

    function findFirstChild(dom) {
        if (!dom) return null;
        if (!dom.childNodes) return null;
        return Array.prototype.slice.call(dom.childNodes).find((child) => {
            return child && (!(child.nodeName == '#text' && !/\S/.test(child.nodeValue)));
        });
    }

    node = findFirstChild(widgetBridge.rootContainer);
    if (!node) {
        node = document.createElement('div');
        widgetBridge.rootContainer.appendChild(node);
    }

    const needRouter = !!widgetBridge.routerConfig;
    if (needRouter) {
        const component = new Vue({
            components: {
                'wrapped-element': widgetBridge.template
            },
            computed: {
                widgetProps() {
                    return this.$store.getters[StateEnums.WIDGET_VUEX_GETTERS_PREFIX + widgetBridge.widgetId];
                }
            },
            render(h) {
                const props = this.widgetProps;
                return h('wrapped-element', {
                    props
                });
            }
        });
        const routerConfig = widgetBridge.routerConfig;

        routerConfig.routes = routerConfig.routes.map((route) => {
            return Object.assign(route, {
                component: route.showldShow ? component : ''
            });
        });
        new Vue({
            el: node,
            router: new VueRouter(routerConfig),
            data() {
                return {
                    legoWidgetId: widgetBridge.widgetId
                };
            },
            store: widgetBridge.store,
            mounted() {
                const storeConfig = widgetBridge.storeConfig;
                if (!storeConfig) return;
                const supportor = widgetBridge.supportor;
                if (!(supportor && supportor.registOwnModule)) return;

                supportor.registOwnModule(this.legoWidgetId, storeConfig);
            }
        });
        return;
    }

    new Vue({
        el: node,
        data() {
            return {
                legoWidgetId: widgetBridge.widgetId
            };
        },
        store: widgetBridge.store,
        components: {
            'wrapped-element': widgetBridge.template
        },
        computed: {
            widgetProps() {
                return this.$store.getters[StateEnums.WIDGET_VUEX_GETTERS_PREFIX + widgetBridge.widgetId];
            }
        },
        render(h) {
            const props = this.widgetProps;
            return h('wrapped-element', {
                props
            });
        },
        mounted() {
            const storeConfig = widgetBridge.storeConfig;
            if (!storeConfig) return;
            const supportor = widgetBridge.supportor;
            if (!(supportor && supportor.registOwnModule)) return;

            supportor.registOwnModule(this.legoWidgetId, storeConfig);
        }
    });
}

module.exports = connectVueTemplateElement;