'use strict';

const React = require('react');
const Redux = require('redux');
const ReactRedux = require('react-redux');

const BaseSupportor = require('./basesupportor.js');
const Enums = require('billund-enums');
const StateEnums = Enums.state;
const SupportorEnums = Enums.supportor;
const Util = require('../util/index.js');

/*
    注册api关联
 */
const API_ALIAS_CONFIG = {
    registerOwnReducer: 'registOwnReducer'
};

/**
 * 默认的reducer,什么都不处理直接返回
 *
 * @param {*} state - 对应的store数据
 * @param {Object} action - 变更action操作
 * @return {Object}
 */
function DEFAULT_REDUCER(state, action) {
    /*
        检查action的type,如果设置自有state的action,应当默认处理
     */
    if (action.type == StateEnums.LEGO_ACTION_TYPE_SET_OWN_STATE) {
        // 设置组件的自有state
        state = Util.extend({}, state, {
            [`${StateEnums.PREFIX_WIDGET_OWN_STATE_KEY}${action.id}`]: action.data
        });
    }
    return state;
}

/**
 * react全家桶的支持组件
 */
class ReactSupportor extends BaseSupportor {
    constructor() {
        super();
        this.currentReducer = DEFAULT_REDUCER;
        // 回放机制的action列表
        this.toDispatchActions = [];
        /*
            为什么放在这里执行？因为后面两项方法都依赖store的初始化
         */
        this.injectLegoWidgetId();
        this.initStore();
        this.parseWidgetConfigs();
        this.initWidgetProps();
        this.initExtraFunctions();

        this.tryDoSthDependentOnContext();
    }

    aliasApi() {
        super.aliasApi();
        Object.keys(API_ALIAS_CONFIG).forEach((newApi) => {
            const apiName = API_ALIAS_CONFIG[newApi];
            this[newApi] = this[apiName];
        });
    }

    /**
     * 注入lego的widgetId
     */
    injectLegoWidgetId() {
        const Provider = ReactRedux.Provider;
        Provider.prototype.getChildContext = function() {
            return {
                store: this.store,
                legoWidgetId: this.props.legoWidgetId
            };
        };
        Provider.childContextTypes.legoWidgetId = React.PropTypes.string;
    }

    /**
     * 初始化store
     */
    initStore() {
        /*
         *  默认没有reducer,留待后面进行替换
         *  这么做的原因是,reducer是与业务逻辑强关联的
         *  当注册reducer时一定已经通过require引入了当前的包了
         */
        this.store = Redux.createStore(DEFAULT_REDUCER, this.initialState,
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    }

    /**
     * 提供原生的向外的暴露方法
     */
    initExtraFunctions() {
        this.combineReducers = Redux.combineReducers;
        this.compose = Redux.compose;
    }

    /**
     * 注册组件自身的reducer
     * *Important*把组件自身发出的,可以解决的reducer写在这里
     *
     * @param  {String} id - 组件的id,动态拿到
     * @param  {Function} reducer - reducer处理函数
     */
    registOwnReducer(id, reducer) {
        const reducerKey = `${StateEnums.PREFIX_WIDGET_OWN_STATE_KEY}${id}`;
        /**
         * 对reducer进行装配，只处理我们对应组件的内容
         *
         * @param  {Object} state - 私有数据
         * @param  {Object} action - 动作
         * @return {Object}
         */
        function decoratedReducer(state, action) {
            const ownState = state[reducerKey];
            const newOwnState = reducer(ownState, action);
            // 按照约定,无法处理的action要返回原来的state
            if (ownState == newOwnState) {
                return state;
            }
            // 现在这种情况,是state已经被处理过
            return Util.extend({}, state, {
                [reducerKey]: newOwnState
            });
        }
        this.decorateReducer(decoratedReducer);
    }

    /**
     * 注册store配置
     *
     * @param  {Function} reducer - 注册reducers
     */
    [SupportorEnums.BROWSER_SUPPORTOR_REGIST_STORE_CONFIG](reducer) {
        this.decorateReducer(reducer);
    }

    /**
     * 注册router配置
     * important!!! 如果有这个方法，需要提前预设！
     * 这个api一定会被调用，因为也需要告知没有router的情况
     *
     * @param {Object} routerConfig - 配置
     */
    [SupportorEnums.BROWSER_SUPPORTOR_REGISTER_ROUTER_CONFIG](routerConfig) {
        const id2WidgetBridge = {};
        (this.widgetConfigs || []).forEach((config) => {
            const id = config.id;
            const widgetBridge = this.getWidgetBridgeById(id);
            if (!widgetBridge) return null;

            id2WidgetBridge[id] = widgetBridge;
        });

        // TODO React需要支持react-router
        Object.keys(id2WidgetBridge).forEach((id) => {
            id2WidgetBridge[id].initRouters();
        });
    }

    /**
     * 替换Reducers
     *
     * @param  {Function} reducer - 注册reducers
     */
    replaceReducer(reducer) {
        if (!this.store) return;

        const store = this.store;
        this.currentReducer = reducer;
        // 包装reducers,因为需要响应刷新action
        function reducerWrapper(state, action) {
            let newState = reducer(state, action);
            // 如果action是指定的刷新action
            if (action.type == StateEnums.LEGO_ACTION_TYPE_REFRESH) {
                newState = Util.extend({}, newState);
            }
            return newState;
        }
        store.replaceReducer(reducerWrapper);

        // 开始准备进行回放action,因为widget间的js不存在关联,所以无法保证加载顺序
        this.toDispatchActions = this.toDispatchActions.filter((action) => {
            const curState = store.getState();
            // 直接dispatch,以防有非幂等的reducer
            store.dispatch(action);
            const newState = store.getState();
            /*
               判断现有的reducer是否能够处理action,根据当前state与计算后的state的比较
               特别注意,我们只比较了内存地址,主要是出于性能方面的考量
               另外,对于redux有一个约定,如果你处理不了这个action,就需要返回默认的state!
             */
            const isHandled = !(newState === curState);
            // 经过处理的action就丢弃掉
            return !isHandled;
        });
    }

    /**
     * 装饰Reducers.本质上是将原来的reducer拿出来,然后再上面进行一层包装
     * 设计思路来自装饰器模式
     * 这个方法可能会在widget中使用,默认告诉别人如何处理它的数据
     *
     * @param  {Function} reducer - 注册reducer
     */
    decorateReducer(reducer) {
        if (!this.store) return;

        const prevReducer = this.currentReducer;

        function decoratedReducer(state, action) {
            const newState = prevReducer(state, action);
            return reducer(newState, action);
        }

        this.replaceReducer(decoratedReducer);
    }

    /**
     * 分发action的操作
     *
     * @param  {Object} action - 描述应用变化的普通对象
     */
    dispatch(action) {
        if (!this.store) return;

        const store = this.store;
        const curState = store.getState();
        store.dispatch(action);
        /*
           判断现有的reducer是否能够处理action,根据当前state与计算后的state的比较
           特别注意,我们只比较了内存地址,主要是出于性能方面的考量
           另外,对于redux有一个约定,如果你处理不了这个action,就需要返回默认的state!
         */
        const isHandled = !(store.getState() === curState);
        if (!isHandled) {
            this.toDispatchActions.push(action);
        }
    }

    /**
     * 获取当前的state
     *
     * @return {Object} - 当前的state
     */
    getState() {
        if (!this.store) return null;

        return this.store.getState();
    }

    /**
     * 注册store变更数据监听
     *
     * @param  {Function} onChangeListener - 改变时的监听
     */
    registStoreOnChangeListener(onChangeListener) {
        if (!this.store) return;

        const store = this.store;
        store.subscribe(() => {
            onChangeListener(store.getState());
        });
    }
}

module.exports = ReactSupportor;