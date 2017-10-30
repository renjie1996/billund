'use strict';

require('es6-promise').polyfill();
window.regeneratorRuntime = require('regenerator-runtime');
// https://www.npmjs.com/package/browser-cookies
const Cookies = require('browser-cookies');
const qs = require('qs');

const co = require('co');
const Enums = require('billund-enums');
const WidgetEnums = Enums.widget;
const StateEnums = Enums.state;
const RenderEnums = Enums.render;
const SupportorEnums = Enums.supportor;
const RenderTypeEnums = Enums.renderType;

const ReactWidgetBridge = require('../bridge/reactwidgetbridge');
const VueWidgetBridge = require('../bridge/vuewidgetbridge');
const Util = require('../util/index.js');

/*
    注册api关联
 */
const API_ALIAS_CONFIG = {
    registerMapStateToProps: 'registMapStateToProps',
    registerOnStartListener: 'registOnStartListener',
    registerOnFailListener: 'registOnFailListener',
    registerOnChangeListener: 'registOnChangeListener'
};

/**
 * 基础的前端支持组件
 */
class BaseFESupportor {
    constructor() {
        // lego不能初始化两次
        if (window[SupportorEnums.BROWSER_SUPPORTOR]) {
            console.error(`duplicate init fe supportor!please check the billund-supportor version!`);
            return;
        }
        /*
            基础中间件
         */
        this.registBaseMiddlewares();
        /*
            数据相关
         */
        this.initialState = window[StateEnums.INITIAL_STATE] || {};
        this.store = null; // store根据具体类型初始化
        /*
            组件相关
         */
        // 重要的组件
        this.importantWidgets = [];
        // 失败的组件
        this.fallbackWidgets = [];
        // widgetName到widget实例们的关联
        this.name2Widgets = {};
        // widgetName到widget-module的关联
        this.name2WidgetModules = {};
        // 关于widgetBridge缓存
        this.widgetBridgeCache = {};
        // 收集到的参数
        this.collectedParams = {};
        // 是否页面已经展示
        this.hasTakedViewToFrontEnd = false;
        // 组件id和渲染类型的mapping
        this.id2RenderTypeMapping = {};
        // 组件的id和单页面路径的映射
        this.id2PathsMapping = {};
        // 一些与上下文强相关的事件是否已经处理
        this.sthDependentOnContextProcessed = false;

        const self = this;
        /**
         * 实例中的启动方法
         */
        function init() {
            Util.initGetComputedStyle();
            // 先进行启动,尝试展示pageView
            self.tryTakeViewToFrontEnd();
            // 记录id与渲染类型的对应关系
            self.remId2RenderType();
            // 关联api
            self.aliasApi();
        }

        init();
    }

    aliasApi() {
        Object.keys(API_ALIAS_CONFIG).forEach((newApi) => {
            const apiName = API_ALIAS_CONFIG[newApi];
            this[newApi] = this[apiName];
        });
    }

    /**
     * 挂载基本的中间件
     */
    registBaseMiddlewares() {
        const self = this;
        this.cookies = Cookies;

        function querystring() {
            const search = window.location.search || '';
            if (search.indexOf('?') == -1) return '';
            return search.slice(1, search.length);
        }

        this.querystring = querystring();

        function query() {
            const str = self.querystring;
            return qs.parse(str);
        }

        this.query = query();
    }

    /**
     * 记录id与renderType的对应关系
     */
    remId2RenderType() {
        const configs = window[WidgetEnums.WIDGET_CONFIGS] || [];
        configs.forEach((config) => {
            this.id2RenderTypeMapping[config.id] = config.renderType;
        });
    }

    /**
     * 尝试展示当前的pageview
     */
    tryTakeViewToFrontEnd() {
        const self = this;
        /**
         * 抓取重要模块，判断是否应该启动
         */
        function extractImportantWidgets() {
            self.importantWidgets = window[WidgetEnums.WIDGETS_IMPORTANT] || [];
            const successImportantWidgets = window[WidgetEnums.WIDGETS_IMPORTANT_SUCCESSED] || [];
            successImportantWidgets.forEach((widgetId) => {
                self.shouldTakeViewToFrontEnd(widgetId);
            });
        }
        extractImportantWidgets();
        // 兜底,如果3000ms后还没有启动
        window.setTimeout(() => {
            this.takeViewToFrontEnd();
        }, 3000);
    }

    /**
     * 解析与组件配置的内容
     */
    parseWidgetConfigs() {
        const configs = window[WidgetEnums.WIDGET_CONFIGS] || [];
        const self = this;

        /**
         * 关联widget的id与name
         *
         * @param  {String} id - 组件id
         * @param  {String} name  - 组件name
         */
        function relatedWidget2Name(id, name) {
            if (!self.name2Widgets[name]) {
                self.name2Widgets[name] = [];
            }
            let widgetBridge = self.getWidgetBridgeById(id);
            if (!widgetBridge) return;

            self.name2Widgets[name].push(widgetBridge);
        }

        /**
         * 关联组件的id与paths
         *
         * @param  {String} id - 组件id
         * @param  {Array} paths  - 路径列表
         */
        function relatedWidgetId2Paths(id, paths) {
            self.id2PathsMapping[id] = paths;
        }

        /**
         * 单个widgetConfig的初始化操作
         *
         * @param  {Object} config - 目前字段如下:
         * {
         *     id: [String],// widget的id
         *     name: [String],// widget的名称,
         *     renderType: [Number]//   渲染类型
         * }
         */
        function parseWidgetConfig(config) {
            if (!(config && config.id)) return;

            const widgetBridge = self.getWidgetBridgeById(config.id);
            if (!widgetBridge) return;

            widgetBridge.initConfig(config);
        }

        configs.forEach((config) => {
            parseWidgetConfig(config);
            relatedWidget2Name(config.id, config.name);
            relatedWidgetId2Paths(config.id, config.paths);
        });
    }

    /**
     * 注册上下文预处理器
     *
     * @param  {GeneratorFunction} fn - 预处理器函数
     */
    [SupportorEnums.BROWSER_SUPPORTOR_REGIST_PREPROCESSOR_NAME](fn) {
        if (!fn) return;
        const self = this;

        co(function*() {
            return yield fn(self);
        }).then(() => {
            self.doSthDependentOnContext();
        }).catch((err) => {
            if (!err) return;
            console.log(err.stack);
        });
    }

    /**
     * 注册store配置
     */
    [SupportorEnums.BROWSER_SUPPORTOR_REGIST_STORE_CONFIG]() {
        throw new Error(`you should impletement ${SupportorEnums.BROWSER_SUPPORTOR_REGIST_STORE_CONFIG} function.`);
    }

    /**
     * 注册router配置
     * important!!! 如果有这个方法，需要提前预设！
     */
    [SupportorEnums.BROWSER_SUPPORTOR_REGISTER_ROUTER_CONFIG]() {
        throw new Error(`you should impletement ${SupportorEnums.BROWSER_SUPPORTOR_REGISTER_ROUTER_CONFIG} function.`);
    }

    /**
     * 尝试执行一些与上下文强相关的事,是useContextPreProcessor的兜底
     */
    tryDoSthDependentOnContext() {
        window.setTimeout(() => {
            const processedByMe = this.doSthDependentOnContext();
            if (processedByMe) {
                console.warn(`passing 1000ms without call useContextPreProcessor,so run directly.maybe you should regist a context pre-processor`);
            }
        }, 1000);
    }

    /**
     * 执行一些与上下文强相关的事情,可能强依赖预处理的注册
     *
     * @return {Boolean} - 是否被调用方法处理
     */
    doSthDependentOnContext() {
        if (this.sthDependentOnContextProcessed) return false;

        this.sthDependentOnContextProcessed = true;
        this.loadFallWidgets();
        return true;
    }

    /**
     * 解析失败模块
     */
    loadFallWidgets() {
        const self = this;
        let isExecuted = false;
        /**
         * 解析失败的模块
         */
        function resolve() {
            // 确认只支持一次
            if (isExecuted) return;

            isExecuted = true;
            self.fallbackWidgets = window[WidgetEnums.WIDGETS_FALLBACK] || [];
            self.traversalFallWidgets();
        }
        /**
         * domContentLoaded监听,过或不过能接收
         *
         * @return {Function}
         */
        function domReady() {
            const fns = [];
            let listener = null;
            const hack = document.documentElement.doScroll;
            const domContentLoaded = 'DOMContentLoaded';
            let loaded = (hack ? /^loaded|^c/ : /^loaded|^i|^c/).test(document.readyState);

            if (!loaded) {
                Util.addEventListener(window, domContentLoaded, listener = function() {
                    Util.removeEventListener(window, domContentLoaded, listener);
                    loaded = 1;
                    while ((listener = fns.shift())) {
                        listener();
                    }
                });
            }
            return function(fn) {
                loaded ? setTimeout(fn, 0) : fns.push(fn);
            };
        }

        // 先判断是否已经是load的了,如果是的话直接执行
        if (document.readyState === 'complete') {
            window.setTimeout(() => {
                resolve();
            }, 5);
            return;
        }

        domReady()(() => {
            window.setTimeout(() => {
                resolve();
            }, 1500);
        });

        Util.addEventListener(window, 'load', () => {
            window.setTimeout(() => {
                resolve();
            }, 5);
        });
    }

    /**
     * widget的props初始化操作
     */
    initWidgetProps() {
        const widgetProps = window[WidgetEnums.WIDGET_PROPS] || [];
        const self = this;

        function pushProps(config) {
            self.parseWidgetProp.call(self, config);
        }

        widgetProps.forEach(pushProps);

        // 将props接收对象向全局暴露
        window[WidgetEnums.WIDGET_PROPS] = {
            push: pushProps
        };
    }

    /**
     * 初始化widget的props信息
     *
     * @param  {Object} config - 目前字段如下:
     * {
     *      id: [String],// widget的id,
     *      meta: [Object], // widget的元数据信息
     *      props: [Object]// widget的props
     * }
     */
    parseWidgetProp(config) {
        if (!(config && config.id)) return;

        // 查看之前是否有对应的widget配置
        const widgetBridge = this.getWidgetBridgeById(config.id);
        if (!widgetBridge) return;

        widgetBridge.initProps(Object.assign({}, config.meta, config.props));
    }

    /**
     * 遍历失败的模块
     */
    traversalFallWidgets() {
        /*
            尝试遍历过滤失败的模块，满足以下两个条件的才能运行

            1.widget-module已经注册
            2.参数满足条件
         */
        this.fallbackWidgets = this.fallbackWidgets.filter((widget) => {
            const name = widget.name;
            const widgetModule = this.name2WidgetModules[name];
            if (!widgetModule) return true;

            const requireParams = widget.fallbackParams;
            const params = Util.extend({}, widget.params, this.collectedParams);
            const meetRequireParams = this.isMeetRequireParams(params, requireParams);
            if (!meetRequireParams) return true;

            this.executeWidget(widget.id, widgetModule, params, widget.meta).then(() => {
                // 尝试去将页面放入前端
                this.shouldTakeViewToFrontEnd(widget.id);
            });
        });
    }

    /**
     * 检查参数是否满足条件
     *
     * @param  {Object} params  - 可以发送的参数
     * @param  {Array} requireParams - 要求的参数和校验规则
     * @return {Boolean} - 是否满足条件
     */
    isMeetRequireParams(params, requireParams) {
        if (!(requireParams && requireParams.length)) return true;

        return requireParams.every((requireParam) => {
            /*
                这里现在可以支持一些校验规则
                requireParam可以用 {paramname}!0!false!''!null来判断
            */
            requireParam = requireParam.split('!');
            const value = params[requireParam[0]];
            if (value === undefined) return false;

            const rules = requireParam.slice(1);
            if (!(rules && rules.length)) return true;

            return rules.every((rule) => {
                if (rule === '0') return value !== 0 || value !== '0';
                if (rule === '""' || rule === '\'\'') return value !== '';
                if (rule === 'null') return value !== null;
                if (rule === 'false') return value !== false;
                return true;
            });
        });
    }

    /**
     * 执行单个widget
     *
     * @param  {String} id - 当在页面上时的widgetId
     * @param  {Object} widgetModule - widget的module内容
     * @param  {Object} params - 参数
     * @param  {Object} meta - 组件的元数据
     * @return {Promise}
     */
    executeWidget(id, widgetModule, params, meta) {
        params = params || {};
        /*
            判断有没有dataGenerator
            1.没有,直接将params作为数据传入
            2.有 作为dataGenerator使用
         */
        const self = this;

        return co(function*() {
            const hasDataGenerator = !!widgetModule.dataGenerator;
            let props = params;
            if (hasDataGenerator) {
                props = yield widgetModule.dataGenerator.call(self, params);
            }

            window.setTimeout(() => {
                self.parseWidgetProp({
                    id,
                    meta,
                    props
                });
            }, 5);

            return props;
        }).catch((err) => {
            if (!err) err = new Error(`unknown error`);
            console.log(err.stack);
            throw err;
        });
    }

    /**
     * 将已经存在的重要模块出栈,如果全部存在了,那么将页面展示到前端
     *
     * @param  {String} id - 组件id
     */
    shouldTakeViewToFrontEnd(id) {
        if (this.hasTakedViewToFrontEnd) return;

        this.importantWidgets = this.importantWidgets.filter((widgetId) => {
            return id != widgetId;
        });
        if (this.importantWidgets.length) return;

        this.takeViewToFrontEnd();
    }

    /**
     * 将页面展示给前端
     */
    takeViewToFrontEnd() {
        if (this.hasTakedViewToFrontEnd) return;

        const contentPage = document.getElementById(RenderEnums.ID_MAIN_PAGE);
        if (contentPage) {
            Util.showDiv(contentPage);
        }
        if (window.performance && window.performance.timing) {
            window[RenderEnums.FIRST_SHOW_POINT] = new Date() - window.performance.timing.navigationStart;
        }
        this.hasTakedViewToFrontEnd = true;
    }

    /**
     * 根据id查找对应的widget信息
     * 如果没有的话会尝试初始化
     * !important(保证对应的store已经初始化)
     *
     * @param  {String} id - widget的id
     * @return {Object} - 组件信息
     */
    getWidgetBridgeById(id) {
        // 先尝试从缓存中获取
        let widgetBridge = this.widgetBridgeCache[id];
        if (widgetBridge) return widgetBridge;

        // 这里需要确保store已经初始化
        let renderType = this.id2RenderTypeMapping[id] || RenderTypeEnums.RENDER_TYPE_REACT;
        const WidgetClass = renderType == RenderTypeEnums.RENDER_TYPE_VUE ? VueWidgetBridge : ReactWidgetBridge;
        widgetBridge = new WidgetClass(id, this.store, this.initialState, this);
        this.widgetBridgeCache[id] = widgetBridge;
        return widgetBridge;
    }

    /**
     * 根据name查找对应的widget们的信息
     *
     * @param  {String} name - widget的名称
     * @return {Array}
     */
    getWidgetBridgesByName(name) {
        return this.name2Widgets[name] || [];
    }

    /**
     * 分发action的操作
     */
    dispatch() {
        throw new Error(`you should impletement dispatch function.`);
    }

    /**
     * 获取当前的state
     */
    getState() {
        throw new Error(`you should impletement getState function.`);
    }

    /**
     * 注册store变更数据监听
     */
    registStoreOnChangeListener() {
        throw new Error(`you should impletement registStoreOnChangeListener function.`);
    }

    /**
     * 注册widget的mapStateToProps方法,是通过name来注册的
     *
     * @param  {String} name - widget的名称
     * @param  {Function} mapStateToProps - 函数名称
     */
    registMapStateToProps(name, mapStateToProps) {
        const relatedWidgets = this.getWidgetBridgesByName(name);

        relatedWidgets.forEach((widget) => {
            if (!widget) return true;

            widget.registMapStateToProps(mapStateToProps);
        });
    }

    /**
     * 根据名称注册widget的onStartListener回调,启动了会立即调用(多个相同组件会被调用多次)
     *
     * @param  {String} name - widget的名称
     * @param  {Function} onStartListener - 启动函数
     */
    registOnStartListener(name, onStartListener) {
        const relatedWidgets = this.getWidgetBridgesByName(name);
        relatedWidgets.forEach((widget) => {
            if (!widget) return true;

            widget.registOnStartListener(onStartListener);
        });
    }

    /**
     * 注册widget的onFailListener回调,从注册开始,超过一定时间仍然没有启动组件,认定为失败
     *
     * @param  {String} name - widget的名称
     * @param  {Function} onFailListener - 组件失败的回调方法
     * @param {Object} option - 对应的失败配置,目前字段如下:
     * {
     *     timeout: [Number] //  超时毫秒数
     * }
     */
    registOnFailListener(name, onFailListener, option) {
        const relatedWidgets = this.getWidgetBridgesByName(name);
        relatedWidgets.forEach((widget) => {
            if (!widget) return true;

            widget.registOnFailListener(onFailListener, option);
        });
    }

    /**
     * 注册widget的onChangeListener回调
     *
     * @param  {String} name - widget的名称
     * @param  {Function} onChangeListener - 组件props变更回调方法
     */
    registOnChangeListener(name, onChangeListener) {
        const relatedWidgets = this.getWidgetBridgesByName(name);
        relatedWidgets.forEach((widget) => {
            if (!widget) return true;

            widget.registOnChangeListener(onChangeListener);
        });
    }

    /**
     * 注册组件模块
     *
     * @param  {Object} widgetModule - 组件内容
     */
    registWidgetModule(widgetModule) {
        if (!(widgetModule && widgetModule.name)) return;

        const name = widgetModule.name;
        const relatedWidgets = this.getWidgetBridgesByName(name);
        relatedWidgets.forEach((widget) => {
            if (!widget) return true;

            widget.registWidgetModule(widgetModule);
        });
        // 记录到mapping中
        this.name2WidgetModules[name] = widgetModule;
        // 尝试遍历失败的模块
        this.traversalFallWidgets();
    }

    /**
     *  设置参数函数，设置后会去检查是否应该执行调用方法
     *
     *  1:只有一个参数时的情况
     *  Object data = {
     *      "key1":   "val1"
     *      "key2":   "val2"
     *  }
     * 2:两个参数时的情况 key,value
     */
    setSharedParams() {
        let argsLength = arguments.length;
        if (!argsLength) {
            return;
        }
        //  大于两个参数时,以key value形式加入,忽视其他参数
        if (argsLength > 1) {
            let paraObj = {};
            paraObj[arguments[0]] = arguments[1];
            arguments[0] = paraObj;
        }

        this.collectedParams = Util.extend(this.collectedParams, arguments[0]);
        // 尝试遍历失败的模块
        this.traversalFallWidgets();
    }

    /**
     * 获取组件的初始化状态,但是很有可能拿不到(bigpipe)
     * 建议在组件自身的回调里使用
     *
     * @param  {String} id - 组件id
     * @return {Object}
     */
    getWidgetBridgeInitialProps(id) {
        let widgetBridge = this.getWidgetBridgeById(id);
        if (!widgetBridge) return {};

        return widgetBridge.getInitialProps() || {};
    }

    /**
     * 获取组件的私有state状态.
     *
     * @param  {String} id - 组件id
     * @return {Object}
     */
    getWidgetBridgeOwnState(id) {
        let widgetBridge = this.getWidgetBridgeById(id);
        if (!widgetBridge) return {};

        return widgetBridge.getOwnState() || {};
    }

    /**
     * 获取组件的容器
     *
     * @param  {String} id - 组件id
     * @return {HtmlElement}
     */
    getWidgetBridgeContainer(id) {
        let widgetBridge = this.getWidgetBridgeById(id);
        if (!widgetBridge) return null;

        return widgetBridge.getContainer();
    }

    /**
     * 隐藏widget模块
     *
     * @param  {String|Array} widgetNames - 组件名称
     */
    hideWidgets(widgetNames) {
        if (Util.isString(widgetNames)) {
            widgetNames = [widgetNames];
        }
        if (!(Util.isArray(widgetNames)) && widgetNames.length) return;

        widgetNames.forEach((widgetName) => {
            const containers = document.querySelectorAll(`[data-widget-name="${widgetName}"]`);
            if (!(containers && containers.length)) return true;

            Array.prototype.slice.call(containers).forEach((container) => {
                Util.hideDiv(container);
            });
        });
    }

    /**
     * 展示widget模块
     *
     * @param  {String|Array} widgetNames - 组件名称
     */
    showWidgets(widgetNames) {
        if (Util.isString(widgetNames)) {
            widgetNames = [widgetNames];
        }
        if (!(Util.isArray(widgetNames)) && widgetNames.length) return;

        widgetNames.forEach((widgetName) => {
            const containers = document.querySelectorAll(`[data-widget-name="${widgetName}"]`);
            if (!(containers && containers.length)) return true;

            Array.prototype.slice.call(containers).forEach((container) => {
                Util.showDiv(container);
            });
        });
    }
}

module.exports = BaseFESupportor;