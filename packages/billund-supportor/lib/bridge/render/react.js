'use strict';

const React = require('react');
const ReactDom = require('react-dom');
const ReactRedux = require('react-redux');

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
    const connectedElement = ReactRedux.connect(mapStateToProps)(widgetBridge.baseComponent);
    connectStore();

    ReactDom.render(React.createElement(
        ReactRedux.Provider, {
            store: widgetBridge.store,
            legoWidgetId: widgetBridge.widgetId
        },
        React.createElement(connectedElement, null)
    ), widgetBridge.rootContainer);
}

module.exports = connectReactElement;