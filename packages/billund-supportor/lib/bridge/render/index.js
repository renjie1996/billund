'use strict';

const Enums = require('billund-enums');
const RenderTypeEnums = Enums.renderType;
const StateEnums = Enums.state;

const VueRender = require('./vue.js');
const ReactRender = require('./react.js');

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
        ReactRender(widgetBridge);
    }
    widgetBridge.isStarted = true;
    // 启动监听回调
    widgetBridge.onStart();
    // 启动强制刷新
    widgetBridge.store.dispatch({
        type: StateEnums.LEGO_ACTION_TYPE_REFRESH
    });
}

module.exports = render;