'use strict';

const BaseWidgetBridge = require('./basewidgetbridge.js');
const Util = require('../util/index.js');

const Enums = require('billund-enums');
const StateEnums = Enums.state;

/**
 * react-widget的桥接类
 */
class ReactWidgetBridge extends BaseWidgetBridge {
    /**
     * 初始化组件的属性
     *
     * @param  {Object} props - 对应的内容
     */
    initProps(props) {
        if (!Util.isObject(props)) return;

        const self = this;
        this.initialProps = props;
        this.prevProps = props;
        // 将自身的小属性放入store
        this.store.dispatch({
            type: StateEnums.LEGO_ACTION_TYPE_SET_OWN_STATE,
            id: self.widgetId,
            data: props
        });

        this.propsInited = true;
        if (this.onPropsInited && this.onPropsInited.length) {
            this.onPropsInited.forEach((fn) => {
                fn && fn(props);
            });
        }
    }

    /**
     * 获取组件的component-promise，目前主要用在vue-router中
     *
     * @return {Promise}
     */
    wait4Component() {
        if (!this.getComponentPromise) {
            /*
                目前需要等待两个状态,promise才能resolved
                1.widget.template
                2.widget.props
            */
            this.getComponentPromise = new Promise((resolve) => {
                const after = Util.after(2, () => {
                    this.baseComponent = this.template;
                    resolve(this.baseComponent);
                });
                this.registerOnPropsInitedListener(after);
                this.registeronTemplateRegisterListener(after);
            });
        }
        return this.getComponentPromise;
    }

    /**
     * 获取组件的私有state
     *
     * @return {Object}
     */
    getOwnState() {
        const widgetId = this.widgetId;
        const store = this.store;
        return store.getState()[StateEnums.PREFIX_WIDGET_OWN_STATE_KEY + widgetId] || {};
    }
}

module.exports = ReactWidgetBridge;