'use strict';

const Enums = require('billund-enums');
const RenderTypeEnums = Enums.renderType;
const StateEnums = Enums.state;

const React = require('react');
const ReactDom = require('react-dom');
const ReactRedux = require('react-redux');

const VueRender = require('./render/vue.js');

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
        VueRender(widgetBridge);
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

module.exports = render;