'use strict';

const Util = require('../util/index.js');
const render = require('./render.js');

/**
 * widget在前端的配置管理基类
 */
class BaseWidgetBridge {
    /**
     * 初始化函数
     *
     * @param {String} id - 组件id
     * @param {Object} store - redux的store
     * @param {Object} initialState - 初始的状态
     * @param {Object} supportor - 支持组件
     */
    constructor(id, store, initialState, supportor) {
        this.widgetId = id;
        this.store = store;
        this.initialState = initialState;
        this.supportor = supportor;
        // warpper element
        this.rootContainer = document.getElementById(id);
        if (!this.rootContainer) {
            console.warn(`missing container who's id match widget name`);
        }
        this.initialProps = null;
        this.prevProps = null;
        this.routerConfig = null; // router配置
        this.isStarted = false;
        /*
           留待插入的mapStateToProps方法
           因为可能js先到达的话,那么这个时候先注册了mapState方法,那么就不是initialProps了
         */
        this.toInsertMapStateToProps = null;
        //  start与change的监听,允许注册多个
        this.onStartListeners = [];
        this.onChangeListeners = [];
    }

    /**
     * 接受对应的配置
     *
     * @param  {Object} config - 对应的配置,里面的参数如下:
     * {
     *     id: [String],//    widgetId
     *     renderType: [Number]//   渲染类型
     * }
     */
    initConfig(config) {
        if (!Util.isObject(config)) return;

        this.renderType = config.renderType;
    }

    /**
     * 接受对应的配置
     *
     * @param  {Object} routerConfig - 对应的路由配置,里面的参数如下:
     */
    initRouterConfig(routerConfig) {
        this.routerConfig = routerConfig;
    }

    /**
     * 初始化组件的属性
     *
     * @param  {Object} props - 对应的内容
     */
    initProps(props) {
        throw new Error(`you should implement initProps method.`);
    }

    /**
     * 获取组价的初始状态
     *
     * @return {Object}
     */
    getInitialProps() {
        const ret = this.initialProps || {};
        return Util.extend({}, ret);
    }

    /**
     * 获取组件的私有state
     *
     * @return {Object}
     */
    getOwnState() {
        throw new Error(`you should implement getOwnState method.`);
    }

    /**
     * 获取组价的容器
     *
     * @return {HtmlElement}
     */
    getContainer() {
        return this.rootContainer;
    }

    /**
     * 提供给connect的统一实现,会返回组件渲染需要的props
     *
     * @param  {Object} state - 来自store的state
     * @return {Object} - 渲染用的数据
     */
    mapStateToProps(state) {
        const self = this;
        /*
            默认去调用我们自己的mapStateToProps,会多传入ownState参数,initialProps参数
            我们始终不会去更改initialProps参数,目的是希望能支持时间旅行
         */
        const ownState = this.getOwnState();
        const initialProps = this.initialProps;
        //  默认会去调用prototype上的,如果有自己的实现会优先调用
        const selfMapStateToProps = this.selfMapStateToProps;
        const newProps = selfMapStateToProps(state, ownState, initialProps);
        //  判断新的props与老的props的内存地址,如果不同,则更新props,并且触发onChange
        if (newProps != this.prevProps) {
            // 如果有回调监听,那么执行
            if (this.onChangeListeners && this.onChangeListeners.length) {
                this.onChangeListeners.forEach((fn) => {
                    fn && fn(newProps, self.prevProps, initialProps);
                });
            }
            this.prevProps = newProps;
        }
        return newProps;
    }

    /**
     * 默认对MapStateToProps的拓展实现,有必要的话需要外部注册实现
     *
     * @param  {*} state - 来自store的数据
     * @param  {*} ownState - 来自store的数据,但是是在组件的私有key下的
     * @param  {Object} initialProps - 初始化的props
     * @return {Object} - 给组件使用的props
     */
    selfMapStateToProps(state, ownState, initialProps) {
        // 优先返回ownState
        return ownState || initialProps;
    }

    /**
     * 启动后的回调
     */
    onStart() {
        const self = this;
        // 判断,是否有留待插入的mapStateToProps
        if (this.toInsertMapStateToProps) {
            this.selfMapStateToProps = this.toInsertMapStateToProps;
            this.toInsertMapStateToProps = null;
        }
        if (this.onStartListeners && this.onStartListeners.length) {
            this.onStartListeners.forEach((fn) => {
                fn && fn(self.prevProps);
            });
        }
    }

    /**
     * 对widgetBridge注册启动监听,如果已经启动会直接调用
     *
     * @param  {Function} fn - 成功启动后的回调函数
     */
    registOnStartListener(fn) {
        if (!fn) return;

        if (!this.isStarted) {
            // 尚未启动,加入start队列,等待调用
            this.onStartListeners.push(fn);
            return;
        }
        // 已经启动了,直接调用
        const props = this.prevProps;
        window.setTimeout(() => {
            fn(props);
        }, 5);
    }

    /**
     * 对widgetBridge注册失败listener,如果已经启动不做任何处理
     * 如果还未启动,在一定时间内仍然没有启动的话,认定为失败,那么会回调这个监听
     *
     * @param  {Function} fn - 成功启动后的回调函数
     * @param {Object} option - 对应的失败配置,目前字段如下:
     * {
     *     timeout: [Number] //  超时毫秒数
     * }
     */
    registOnFailListener(fn, option) {
        if (!fn) return;

        if (this.isStarted) return;

        const self = this;

        option = Util.extend({
            timeout: 5000
        }, option);
        window.setTimeout(() => {
            if (self.isStarted) return;
            // 执行失败回调
            fn();
        }, option.timeout);
    }

    /**
     * 当组件的props发生变化时的调用函数
     *
     * @param  {Function} fn - 当变化后调用的函数
     */
    registOnChangeListener(fn) {
        if (!fn) return;
        // 加入等待队列
        this.onChangeListeners.push(fn);
    }

    /**
     * 提供外部注册mapStateToProps的方法
     *
     * @param  {Function} fn - 对应的selfMapStateToProps
     */
    registMapStateToProps(fn) {
        if (!fn) return;
        //  如果已经启动了,那么直接替换,将覆盖原来的prototype中的方法
        if (this.isStarted) {
            this.selfMapStateToProps = fn;
            return;
        }
        //  还没启动,先存起来,一会插入
        this.toInsertMapStateToProps = fn;
    }

    /**
     * 注册组件的代码js
     *
     * @param  {Object} widgetModule - 组件内容
     */
    registWidgetModule(widgetModule) {
        this.template = widgetModule.template;
        this.storeConfig = widgetModule.storeConfig;
        // 尝试启动
        this.shouldStart();
    }

    /**
     * 校验启动组件,满足条件就进行启动
     */
    shouldStart() {
        if (this.isStarted) return;
        // 检查数据是否已经到达
        if (!this.initialProps) return;
        // 检查template是否已经到达
        if (!this.template) return;

        render(this);
    }
}

module.exports = BaseWidgetBridge;