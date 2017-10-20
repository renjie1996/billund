'use strict';

const Enums = require('billund-enums');
const RenderTypeEnums = Enums.renderType;
const StateEnums = Enums.state;

const React = require('react');
const ReactDom = require('react-dom');
const ReactRedux = require('react-redux');
const Vue = require('vue');

/**
 * 启动操作,启动后会更改widgetBridge中的状态
 *
 * @param  {Object} widgetBridge - WidgetBridge的实例
 */
function render(widgetBridge) {
    if (!widgetBridge) return;
    if (widgetBridge.isStarted) return;

    /*
        根据渲染情况进行区分:
        1.react的话,使用react-redux的connect进行连接
        2.vue的话,使用包装渲染
     */
    const renderType = widgetBridge.renderType;
    if (renderType == RenderTypeEnums.RENDER_TYPE_VUE) {
        connectVueTemplateElement(widgetBridge);
    } else {
        connectReactElement(widgetBridge);
    }
    widgetBridge.isStarted = true;
    // 启动监听回调
    widgetBridge.onStart();
    // 启动强制刷新
    widgetBridge.store.dispatch({
        type: StateEnums.LEGO_ACTION_TYPE_REFRESH
    });
}

/**
 * 直接连接react 组件
 *
 * @param  {Object} widgetBridge - WidgetBridge的实例
 */
function connectReactElement(widgetBridge) {
    if (!widgetBridge.store) return;
    if (!widgetBridge.rootContainer) return;

    if (!(widgetBridge.initialProps && widgetBridge.template)) return;

    //  使用闭包进行调用
    function mapStateToProps(state) {
        return widgetBridge.mapStateToProps.call(widgetBridge, state);
    }

    /**
     * 连接store的一些配置
     */
    function connectStore() {
        const storeConfig = widgetBridge.storeConfig;
        if (!storeConfig) return;

        const ownReducer = storeConfig.ownReducer;
        if (ownReducer) {
            widgetBridge.supportor.registOwnReducer(widgetBridge.widgetId, ownReducer);
        }

        if (storeConfig.mapStateToProps) {
            widgetBridge.registMapStateToProps(storeConfig.mapStateToProps);
        }
    }
    /*
        1.先通过react-connect进行包装
        2.关联store
        3.与provider进行连接
     */
    const connectedElement = ReactRedux.connect(mapStateToProps)(widgetBridge.template);
    connectStore();

    ReactDom.render(React.createElement(
        ReactRedux.Provider, {
            store: widgetBridge.store,
            legoWidgetId: widgetBridge.widgetId
        },
        React.createElement(connectedElement, null)
    ), widgetBridge.rootContainer);
}

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

module.exports = render;