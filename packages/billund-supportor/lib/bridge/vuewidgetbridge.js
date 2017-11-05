'use strict';

const render = require('./render/index.js');
const BaseWidgetBridge = require('./basewidgetbridge.js');
const Util = require('../util/index.js');

const Enums = require('billund-enums');
const StateEnums = Enums.state;

/**
 * vue的桥接组件
 */
class VueWidgetBridge extends BaseWidgetBridge {
    /**
     * 初始化组件的属性
     *
     * @param  {Object} props - 对应的内容
     */
    initProps(props) {
        if (!Util.isObject(props)) return;

        this.initialProps = props;
        this.prevProps = props;

        this.propsInited = true;
        if (this.onPropsInited && this.onPropsInited.length) {
            this.onPropsInited.forEach((fn) => {
                fn && fn(props);
            });
        }
    }

    /**
     * 校验启动条件,满足条件就启动
     */
    wait4Start() {
        if (this.isStarted) return;

        Promise.all([this.wait4Component(), this.wait4Router()]).then(() => {
            this.createWidgetStore();
        }).then(() => {
            render(this);
        });
    }

    /**
     * 获取组件的私有state
     *
     * @return {Object}
     */
    getOwnState() {
        const widgetId = this.widgetId;
        const store = this.store;
        const state = store.state || {};
        return state[StateEnums.PREFIX_WIDGET_OWN_STATE_KEY + widgetId] || {};
    }

    createWidgetStore() {
        const self = this;
        /*
            因为vue的特性，需要对存在的字段加入setter,getter,所以我们需要对那些不存在的字段做一个兼容
        */
        const declareProps = this.template.props || {};
        const tplProps = {};

        const defaultPropKeys = Util.isArray(declareProps) ? declareProps : Object.keys(declareProps);

        defaultPropKeys.forEach((propKey) => {
            const prop = declareProps[propKey];
            if (!(Util.isObject(prop) && prop.default !== undefined)) {
                tplProps[propKey] = null;
                return true;
            }
            tplProps[propKey] = undefined;
        });

        const props = Util.extend({}, tplProps, this.initialProps);

        // 这里可以尝试注册自己的module,module名称就是
        this.supportor.registOwnModule(this.widgetId, {
            state: props,
            getters: {
                [StateEnums.WIDGET_VUEX_GETTERS_PREFIX + self.widgetId](state, getters, rootState) {
                    return self.mapStateToProps(rootState);
                }
            }
        });
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
            const self = this;
            this.getComponentPromise = new Promise((resolve) => {
                const after = Util.after(2, () => {
                    this.baseComponent = {
                        widgetId: this.widgetId,
                        components: {
                            'wrapped-element': self.template
                        },
                        computed: {
                            widgetProps() {
                                return this.$store.getters[StateEnums.WIDGET_VUEX_GETTERS_PREFIX + self.widgetId];
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
                    resolve(this.baseComponent);
                });
                this.registerOnPropsInitedListener(after);
                this.registeronTemplateRegisterListener(after);
            });
        }
        return this.getComponentPromise;
    }
}

module.exports = VueWidgetBridge;