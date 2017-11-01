(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-redux"), require("vue"), require("react-dom"), require("redux"), require("vue-router"), require("vuex"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-redux", "vue", "react-dom", "redux", "vue-router", "vuex"], factory);
	else if(typeof exports === 'object')
		exports["BillundSupportor"] = factory(require("react"), require("react-redux"), require("vue"), require("react-dom"), require("redux"), require("vue-router"), require("vuex"));
	else
		root["BillundSupportor"] = factory(root["React"], root["ReactRedux"], root["Vue"], root["ReactDom"], root["Redux"], root["VueRouter"], root["Vuex"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_11__, __WEBPACK_EXTERNAL_MODULE_29__, __WEBPACK_EXTERNAL_MODULE_30__, __WEBPACK_EXTERNAL_MODULE_31__, __WEBPACK_EXTERNAL_MODULE_32__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["BillundEnums"] = factory();
	else
		root["BillundEnums"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var REACT_ROOT_EXTERNAL = 'window React';

var REACT_DOM_ROOT_EXTERNAL = 'window ReactDom';

var REACT_CSS_TRANSITION_GROUP_ROOT_EXTERNAL = 'window ReactAddonsCssTransitionGroup';

var REDUX_ROOT_EXTERNAL = 'window Redux';

var REACT_REDUX_ROOT_EXTERNAL = 'window ReactRedux';

var VUE_ROOT_EXTERNAL = 'window Vue';

var VUEX_ROOT_EXTERNAL = 'window Vuex';

var VUE_ROUTER_ROOT_EXTERNAL = 'window VueRouter';

module.exports = {
    REACT_ROOT_EXTERNAL: REACT_ROOT_EXTERNAL,
    REACT_DOM_ROOT_EXTERNAL: REACT_DOM_ROOT_EXTERNAL,
    REACT_CSS_TRANSITION_GROUP_ROOT_EXTERNAL: REACT_CSS_TRANSITION_GROUP_ROOT_EXTERNAL,
    REDUX_ROOT_EXTERNAL: REDUX_ROOT_EXTERNAL,
    REACT_REDUX_ROOT_EXTERNAL: REACT_REDUX_ROOT_EXTERNAL,
    VUE_ROOT_EXTERNAL: VUE_ROOT_EXTERNAL,
    VUEX_ROOT_EXTERNAL: VUEX_ROOT_EXTERNAL,
    VUE_ROUTER_ROOT_EXTERNAL: VUE_ROUTER_ROOT_EXTERNAL
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 展示内容的div,不要在意拼错了...

var ID_MAIN_PAGE = 'lego-mian-page';
// 服务器当前时间ID
var ID_SERVER_TIME = '__LEGO_SERVER_TIME_';
// 页面上的version
var KEY_PAGE_VERSION = '__LEGO_PAGE_VERSION_';
// 测速点
var FIRST_SHOW_POINT = '__LEGO_FIRST_SHOW_POINT';

module.exports = {
    ID_MAIN_PAGE: ID_MAIN_PAGE,
    ID_SERVER_TIME: ID_SERVER_TIME,
    KEY_PAGE_VERSION: KEY_PAGE_VERSION,
    FIRST_SHOW_POINT: FIRST_SHOW_POINT
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// html的渲染方式

var RENDER_TYPE_HTML_TEMPLATE = 1;
// react的渲染方式
var RENDER_TYPE_REACT = 2;
// vue的渲染方式
var RENDER_TYPE_VUE = 3;

module.exports = {
    RENDER_TYPE_HTML_TEMPLATE: RENDER_TYPE_HTML_TEMPLATE,
    RENDER_TYPE_REACT: RENDER_TYPE_REACT,
    RENDER_TYPE_VUE: RENDER_TYPE_VUE
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 初始的state状态的key

var INITIAL_STATE = '__LEGO_INITIAL_STATE__';
// 设置自有state的ACTION_TYPE
var LEGO_ACTION_TYPE_SET_OWN_STATE = '__LEGO_ACTION_TYPE_SET_OWN_STATE__';
// WIDGET在state中的oneState的前缀
var PREFIX_WIDGET_OWN_STATE_KEY = '__WIDGET_ID_';
// 刷新的ACTION_TYPE
var LEGO_ACTION_TYPE_REFRESH = '__LEGO_ACTION_TYPE_REFRESH__';
// 拿取属性方法的前缀
var WIDGET_VUEX_GETTERS_PREFIX = '__legoGetOwnprops-';

module.exports = {
    INITIAL_STATE: INITIAL_STATE,
    LEGO_ACTION_TYPE_SET_OWN_STATE: LEGO_ACTION_TYPE_SET_OWN_STATE,
    PREFIX_WIDGET_OWN_STATE_KEY: PREFIX_WIDGET_OWN_STATE_KEY,
    LEGO_ACTION_TYPE_REFRESH: LEGO_ACTION_TYPE_REFRESH,
    WIDGET_VUEX_GETTERS_PREFIX: WIDGET_VUEX_GETTERS_PREFIX
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 对外暴露的全局的支持工具

var BROWSER_SUPPORTOR = '__LEGO_BROWSER_SUPPORTOR__';
// 支持组件的包名
var BROWSER_SUPPORTOR_PACKAGE_NAME = 'billund-supportor';
// 注册预处理的方法
var BROWSER_SUPPORTOR_REGIST_PREPROCESSOR_NAME = 'useContextPreProcessor';
// 注册store配置
var BROWSER_SUPPORTOR_REGIST_STORE_CONFIG = 'registStoreConfig';
// 注册router配置
var BROWSER_SUPPORTOR_REGISTER_ROUTER_CONFIG = 'registerRouterConfig';

module.exports = {
    BROWSER_SUPPORTOR: BROWSER_SUPPORTOR,
    BROWSER_SUPPORTOR_PACKAGE_NAME: BROWSER_SUPPORTOR_PACKAGE_NAME,
    BROWSER_SUPPORTOR_REGIST_PREPROCESSOR_NAME: BROWSER_SUPPORTOR_REGIST_PREPROCESSOR_NAME,
    BROWSER_SUPPORTOR_REGIST_STORE_CONFIG: BROWSER_SUPPORTOR_REGIST_STORE_CONFIG,
    BROWSER_SUPPORTOR_REGISTER_ROUTER_CONFIG: BROWSER_SUPPORTOR_REGISTER_ROUTER_CONFIG
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// widgets配置

var WIDGET_CONFIGS = '__LEGO_WIDGET_CONFIGS__';
// widgets的属性
var WIDGET_PROPS = '__LEGO_WIDGET_PROPS__';
// 最重要的模块列表
var WIDGETS_IMPORTANT = '__LEGO_WIDGETS_IMPORTANT__';
// 分组时小组的className
var CLASS_WIDGET_SUB = 'lego-widget-sub';
// 分组时的大组className
var CLASS_WIDGET_GROUP = 'lego-widget-group';
// 最重要的模块成功列表
var WIDGETS_IMPORTANT_SUCCESSED = '__LEGO_WIDGETS_IMPORTANT_SUCCESSED__';
// 对外暴露的全局的支持工具
var WIDGETS_FALLBACK = '__LEGO_WIDGETS_FALLBACK__';
// 降级模块的前缀
var FALLBACK_WIDGET_ID_PREFIX = 'lego-widget-fallback-';

module.exports = {
    WIDGET_CONFIGS: WIDGET_CONFIGS,
    WIDGET_PROPS: WIDGET_PROPS,
    WIDGETS_IMPORTANT: WIDGETS_IMPORTANT,
    CLASS_WIDGET_SUB: CLASS_WIDGET_SUB,
    CLASS_WIDGET_GROUP: CLASS_WIDGET_GROUP,
    WIDGETS_IMPORTANT_SUCCESSED: WIDGETS_IMPORTANT_SUCCESSED,
    WIDGETS_FALLBACK: WIDGETS_FALLBACK,
    FALLBACK_WIDGET_ID_PREFIX: FALLBACK_WIDGET_ID_PREFIX
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var renderType = __webpack_require__(2);
var state = __webpack_require__(3);
var widget = __webpack_require__(5);
var render = __webpack_require__(1);
var supportor = __webpack_require__(4);
var external = __webpack_require__(0);

module.exports = {
    renderType: renderType,
    state: state,
    widget: widget,
    render: render,
    supportor: supportor,
    external: external
};

/***/ })
/******/ ]);
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var Util = __webpack_require__(20);

function extend(obj) {
    var args = Array.prototype.slice.call(arguments, 1);
    args.forEach(function (source) {
        if (source) {
            for (var prop in source) {
                obj[prop] = source[prop];
            }
        }
    });
    return obj;
}

function has(obj, key) {
    return obj != null && Object.prototype.hasOwnProperty.call(obj, key);
}

function keys(obj) {
    if (!isObject(obj)) {
        return [];
    }
    var nativeKeys = Object.keys;
    if (nativeKeys) {
        return nativeKeys(obj);
    }

    var keyArr = [];
    for (var key in obj) {
        if (has(obj, key)) {
            keyArr.push(key);
        }
    }return keyArr;
}

function isObject(obj) {
    var type = typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
    return type === 'function' || type === 'object' && !!obj;
}

function isString(obj) {
    return Object.prototype.toString.call(obj) == '[object String]';
}

function after(n, func) {
    if (typeof func != 'function') {
        throw new TypeError('func shouldbe a function');
    }
    n = parseInt(n);
    return function () {
        if (--n < 1) {
            return func.apply(this, arguments);
        }
    };
}

var isArray = Array.isArray || function (obj) {
    return Object.prototype.toString.call(obj) == '[object Array]';
};

function isFunction(obj) {
    return obj && Object.prototype.toString.call(obj) == '[object Function]';
}

function removeDom(dom) {
    if (!dom) {
        return;
    }
    if (dom.parentNode != null) {
        dom.parentNode.removeChild(dom);
    }
}

var addEventListener = function () {
    var _events = document.addEventListener ? 'addEventListener' : 'attachEvent';
    return function (el, type, fn) {
        el[_events]((document.addEventListener ? '' : 'on') + type, fn);
    };
}();

var removeEventListener = function () {
    var _events = document.removeEventListener ? 'removeEventListener' : 'detachEvent';
    return function (el, type, fn) {
        el[_events](type, fn);
    };
}();

/**
 * 初始化getComputedStyle方法
 */
function initGetComputedStyle() {
    try {
        getComputedStyle(undefined);
    } catch (e) {
        var nativeGetComputedStyle = getComputedStyle;
        window.getComputedStyle = function (element) {
            try {
                return nativeGetComputedStyle(element);
            } catch (e) {
                return null;
            }
        };
    }
}

/**
 * copy自zepto的方法,如果value存在的话,就是为节点设置className,不存在的话就是拿取className
 *
 * @param  {HtmlElement} node - html节点
 * @param  {String} value - 设值
 * @return {String|Void}
 */
function className(node, value) {
    var klass = node.className;
    var svg = klass && klass.baseVal !== undefined;
    if (value === undefined) {
        return svg ? klass.baseVal : klass;
    }
    svg ? klass.baseVal = value : node.className = value;
}

/**
 * 简单版的增加className方法
 *
 * @param  {HtmlElement} node - html节点
 * @param  {String} value - 设值
 */
function addClass(node, value) {
    var originCls = className(node);
    // 直接加入,不判断hasClass
    className(node, originCls + ' ' + value);
}

module.exports = {
    extend: extend,
    has: has,
    keys: keys,
    isObject: isObject,
    isString: isString,
    isFunction: isFunction,
    isArray: isArray,
    after: after,
    showDiv: Util.showDiv,
    hideDiv: Util.hideDiv,
    removeDom: removeDom,
    addEventListener: addEventListener,
    removeEventListener: removeEventListener,
    initGetComputedStyle: initGetComputedStyle,
    addClass: addClass
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Util = __webpack_require__(1);
var render = __webpack_require__(4);

/**
 * widget在前端的配置管理基类
 */

var BaseWidgetBridge = function () {
    /**
     * 初始化函数
     *
     * @param {String} id - 组件id
     * @param {Object} store - redux的store
     * @param {Object} initialState - 初始的状态
     * @param {Object} supportor - 支持组件
     */
    function BaseWidgetBridge(id, store, initialState, supportor) {
        _classCallCheck(this, BaseWidgetBridge);

        this.widgetId = id;
        this.store = store;
        this.initialState = initialState;
        this.supportor = supportor;
        // warpper element
        this.rootContainer = document.getElementById(id);
        if (!this.rootContainer) {
            console.warn('missing container who\'s id match widget name');
        }
        this.initialProps = null;
        this.prevProps = null;
        this.propsInited = false;
        this.onPropsInited = [];

        this.routers = null; // router配置
        this.routersInited = false;
        this.onRouterInited = [];

        this.templateInited = false;
        this.onTemplateRegister = [];

        /*
           留待插入的mapStateToProps方法
           因为可能js先到达的话,那么这个时候先注册了mapState方法,那么就不是initialProps了
         */
        this.toInsertMapStateToProps = null;
        //  start与change的监听,允许注册多个
        this.onStartListeners = [];
        this.onChangeListeners = [];
        this.isStarted = false;

        this.getRouterPromise = null;
        this.getComponentPromise = null;

        this.wait4Start();
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


    _createClass(BaseWidgetBridge, [{
        key: 'initConfig',
        value: function initConfig(config) {
            if (!Util.isObject(config)) return;

            this.renderType = config.renderType;
        }

        /**
         * 初始化组件的属性
         *
         * @param  {Object} props - 对应的内容
         */

    }, {
        key: 'initProps',
        value: function initProps(props) {
            throw new Error('you should implement initProps method & set propsInited');
        }

        /**
         * 获取组价的初始状态
         *
         * @return {Object}
         */

    }, {
        key: 'getInitialProps',
        value: function getInitialProps() {
            var ret = this.initialProps || {};
            return Util.extend({}, ret);
        }

        /**
         * 注册当组件创建成功的方法
         *
         * @param  {Function} fn - 成功启动后的回调函数
         */

    }, {
        key: 'registerOnPropsInitedListener',
        value: function registerOnPropsInitedListener(fn) {
            if (!fn) return;

            if (!this.propsInited) {
                // props还未注册,加入队列,等待调用
                this.onPropsInited.push(fn);
                return;
            }

            // 已经启动了,直接调用
            window.setTimeout(function () {
                fn();
            }, 5);
        }
    }, {
        key: 'wait4Component',
        value: function wait4Component() {
            throw new Error('you should implement wait4Component function');
        }

        /**
         * 接受对应的配置
         *
         * @param  {Object} routers - 对应的路由配置,里面的参数如下:
         */

    }, {
        key: 'initRouters',
        value: function initRouters(routers) {
            if (this.routersInited) return;
            /*
                区分情况,可能并不存在router
             */
            if (routers) {
                this.routers = routers;
            } else {
                this.routers = null;
            }

            this.routersInited = true;
            if (this.onRouterInited && this.onRouterInited.length) {
                this.onRouterInited.forEach(function (fn) {
                    fn && fn(routers);
                });
            }
        }

        /**
         * 注册当组件路由创建成功的方法
         *
         * @param  {Function} fn - 成功启动后的回调函数
         */

    }, {
        key: 'registerOnRouterInitedListener',
        value: function registerOnRouterInitedListener(fn) {
            var _this = this;

            if (!fn) return;

            if (!this.routersInited) {
                // props还未注册,加入队列,等待调用
                this.onRouterInited.push(fn);
                return;
            }

            // 已经启动了,直接调用
            window.setTimeout(function () {
                fn(_this.routers);
            }, 5);
        }
    }, {
        key: 'wait4Router',
        value: function wait4Router() {
            var _this2 = this;

            if (!this.getRouterPromise) {
                this.getRouterPromise = new Promise(function (resolve) {
                    _this2.registerOnRouterInitedListener(function (routers) {
                        resolve(routers);
                    });
                });
            }
            return this.getRouterPromise;
        }

        /**
         * 注册组件的代码js
         *
         * @param  {Object} widgetModule - 组件内容
         */

    }, {
        key: 'registWidgetModule',
        value: function registWidgetModule(widgetModule) {
            if (this.templateInited) return;
            this.template = widgetModule.template;
            this.storeConfig = widgetModule.storeConfig;

            this.templateInited = true;

            if (this.onTemplateRegister && this.onTemplateRegister.length) {
                this.onTemplateRegister.forEach(function (fn) {
                    fn && fn();
                });
            }
        }

        /**
         * 注册当组件创建成功的方法
         *
         * @param  {Function} fn - 成功启动后的回调函数
         */

    }, {
        key: 'registeronTemplateRegisterListener',
        value: function registeronTemplateRegisterListener(fn) {
            if (!fn) return;

            if (!this.templateInited) {
                // template还未注册,加入队列,等待调用
                this.onTemplateRegister.push(fn);
                return;
            }

            // 已经启动了,直接调用
            window.setTimeout(function () {
                fn();
            }, 5);
        }

        /**
         * 获取组件的私有state
         *
         * @return {Object}
         */

    }, {
        key: 'getOwnState',
        value: function getOwnState() {
            throw new Error('you should implement getOwnState method.');
        }

        /**
         * 获取组价的容器
         *
         * @return {HtmlElement}
         */

    }, {
        key: 'getContainer',
        value: function getContainer() {
            return this.rootContainer;
        }

        /**
         * 提供给connect的统一实现,会返回组件渲染需要的props
         *
         * @param  {Object} state - 来自store的state
         * @return {Object} - 渲染用的数据
         */

    }, {
        key: 'mapStateToProps',
        value: function mapStateToProps(state) {
            var self = this;
            /*
                默认去调用我们自己的mapStateToProps,会多传入ownState参数,initialProps参数
                我们始终不会去更改initialProps参数,目的是希望能支持时间旅行
             */
            var ownState = this.getOwnState();
            var initialProps = this.initialProps;
            //  默认会去调用prototype上的,如果有自己的实现会优先调用
            var selfMapStateToProps = this.selfMapStateToProps;
            var newProps = selfMapStateToProps(state, ownState, initialProps);
            //  判断新的props与老的props的内存地址,如果不同,则更新props,并且触发onChange
            if (newProps != this.prevProps) {
                // 如果有回调监听,那么执行
                if (this.onChangeListeners && this.onChangeListeners.length) {
                    this.onChangeListeners.forEach(function (fn) {
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

    }, {
        key: 'selfMapStateToProps',
        value: function selfMapStateToProps(state, ownState, initialProps) {
            // 优先返回ownState
            return ownState || initialProps;
        }

        /**
         * 启动后的回调
         */

    }, {
        key: 'onStart',
        value: function onStart() {
            var self = this;
            // 判断,是否有留待插入的mapStateToProps
            if (this.toInsertMapStateToProps) {
                this.selfMapStateToProps = this.toInsertMapStateToProps;
                this.toInsertMapStateToProps = null;
            }
            if (this.onStartListeners && this.onStartListeners.length) {
                this.onStartListeners.forEach(function (fn) {
                    fn && fn(self.prevProps);
                });
            }
        }

        /**
         * 对widgetBridge注册启动监听,如果已经启动会直接调用
         *
         * @param  {Function} fn - 成功启动后的回调函数
         */

    }, {
        key: 'registOnStartListener',
        value: function registOnStartListener(fn) {
            if (!fn) return;

            if (!this.isStarted) {
                // 尚未启动,加入start队列,等待调用
                this.onStartListeners.push(fn);
                return;
            }
            // 已经启动了,直接调用
            var props = this.prevProps;
            window.setTimeout(function () {
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

    }, {
        key: 'registOnFailListener',
        value: function registOnFailListener(fn, option) {
            if (!fn) return;

            if (this.isStarted) return;

            var self = this;

            option = Util.extend({
                timeout: 5000
            }, option);
            window.setTimeout(function () {
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

    }, {
        key: 'registOnChangeListener',
        value: function registOnChangeListener(fn) {
            if (!fn) return;
            // 加入等待队列
            this.onChangeListeners.push(fn);
        }

        /**
         * 提供外部注册mapStateToProps的方法
         *
         * @param  {Function} fn - 对应的selfMapStateToProps
         */

    }, {
        key: 'registMapStateToProps',
        value: function registMapStateToProps(fn) {
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
         * 校验启动组件,满足条件就进行启动
         */

    }, {
        key: 'wait4Start',
        value: function wait4Start() {
            var _this3 = this;

            if (this.isStarted) return;

            this.wait4Component().then(function () {
                render(_this3);
            });
        }
    }]);

    return BaseWidgetBridge;
}();

module.exports = BaseWidgetBridge;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Enums = __webpack_require__(0);
var RenderTypeEnums = Enums.renderType;
var StateEnums = Enums.state;

var VueRender = __webpack_require__(17);
var ReactRender = __webpack_require__(16);

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
    var renderType = widgetBridge.renderType;
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

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

__webpack_require__(6).polyfill();
window.regeneratorRuntime = __webpack_require__(27);
// https://www.npmjs.com/package/browser-cookies
var Cookies = __webpack_require__(21);
var qs = __webpack_require__(24);

var co = __webpack_require__(22);
var Enums = __webpack_require__(0);
var WidgetEnums = Enums.widget;
var StateEnums = Enums.state;
var RenderEnums = Enums.render;
var SupportorEnums = Enums.supportor;
var RenderTypeEnums = Enums.renderType;

var ReactWidgetBridge = __webpack_require__(15);
var VueWidgetBridge = __webpack_require__(18);
var Util = __webpack_require__(1);

/*
    注册api关联
 */
var API_ALIAS_CONFIG = {
    registerMapStateToProps: 'registMapStateToProps',
    registerOnStartListener: 'registOnStartListener',
    registerOnFailListener: 'registOnFailListener',
    registerOnChangeListener: 'registOnChangeListener'
};

/**
 * 基础的前端支持组件
 */

var BaseFESupportor = function () {
    function BaseFESupportor() {
        _classCallCheck(this, BaseFESupportor);

        // lego不能初始化两次
        if (window[SupportorEnums.BROWSER_SUPPORTOR]) {
            console.error('duplicate init fe supportor!please check the billund-supportor version!');
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
        this.widgetConfigs = null;
        /*
            组件相关
         */
        // 重要的组件
        this.importantWidgets = [];
        // 成功的重要组件
        this.successImportantWidgets = [];
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

        var self = this;
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

    _createClass(BaseFESupportor, [{
        key: 'aliasApi',
        value: function aliasApi() {
            var _this = this;

            Object.keys(API_ALIAS_CONFIG).forEach(function (newApi) {
                var apiName = API_ALIAS_CONFIG[newApi];
                _this[newApi] = _this[apiName];
            });
        }

        /**
         * 挂载基本的中间件
         */

    }, {
        key: 'registBaseMiddlewares',
        value: function registBaseMiddlewares() {
            var self = this;
            this.cookies = Cookies;

            function querystring() {
                var search = window.location.search || '';
                if (search.indexOf('?') == -1) return '';
                return search.slice(1, search.length);
            }

            this.querystring = querystring();

            function query() {
                var str = self.querystring;
                return qs.parse(str);
            }

            this.query = query();
        }

        /**
         * 记录id与renderType的对应关系
         */

    }, {
        key: 'remId2RenderType',
        value: function remId2RenderType() {
            var _this2 = this;

            var configs = window[WidgetEnums.WIDGET_CONFIGS] || [];
            configs.forEach(function (config) {
                _this2.id2RenderTypeMapping[config.id] = config.renderType;
            });
        }

        /**
         * 尝试展示当前的pageview
         */

    }, {
        key: 'tryTakeViewToFrontEnd',
        value: function tryTakeViewToFrontEnd() {
            var _this3 = this;

            var self = this;
            /**
             * 抓取重要模块，判断是否应该启动
             */
            function extractImportantWidgets() {
                self.importantWidgets = window[WidgetEnums.WIDGETS_IMPORTANT] || [];
                self.successImportantWidgets = window[WidgetEnums.WIDGETS_IMPORTANT_SUCCESSED] || [];
                self.successImportantWidgets.forEach(function (widgetId) {
                    self.shouldTakeViewToFrontEnd(widgetId);
                });
            }
            extractImportantWidgets();
            // 兜底,如果3000ms后还没有启动
            window.setTimeout(function () {
                _this3.takeViewToFrontEnd();
            }, 3000);
        }

        /**
         * 解析与组件配置的内容
         */

    }, {
        key: 'parseWidgetConfigs',
        value: function parseWidgetConfigs() {
            var configs = this.widgetConfigs = window[WidgetEnums.WIDGET_CONFIGS] || [];
            var self = this;

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
                var widgetBridge = self.getWidgetBridgeById(id);
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

                var widgetBridge = self.getWidgetBridgeById(config.id);
                if (!widgetBridge) return;

                widgetBridge.initConfig(config);
            }

            configs.forEach(function (config) {
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

    }, {
        key: SupportorEnums.BROWSER_SUPPORTOR_REGIST_PREPROCESSOR_NAME,
        value: function value(fn) {
            if (!fn) return;
            var self = this;

            co( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return fn(self);

                            case 2:
                                return _context.abrupt('return', _context.sent);

                            case 3:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            })).then(function () {
                self.doSthDependentOnContext();
            }).catch(function (err) {
                if (!err) return;
                console.log(err.stack);
            });
        }

        /**
         * 注册store配置
         */

    }, {
        key: SupportorEnums.BROWSER_SUPPORTOR_REGIST_STORE_CONFIG,
        value: function value() {
            throw new Error('you should impletement ' + SupportorEnums.BROWSER_SUPPORTOR_REGIST_STORE_CONFIG + ' function.');
        }

        /**
         * 注册router配置
         * important!!! 如果有这个方法，需要提前预设！
         */

    }, {
        key: SupportorEnums.BROWSER_SUPPORTOR_REGISTER_ROUTER_CONFIG,
        value: function value() {
            throw new Error('you should impletement ' + SupportorEnums.BROWSER_SUPPORTOR_REGISTER_ROUTER_CONFIG + ' function.');
        }

        /**
         * 尝试执行一些与上下文强相关的事,是useContextPreProcessor的兜底
         */

    }, {
        key: 'tryDoSthDependentOnContext',
        value: function tryDoSthDependentOnContext() {
            var _this4 = this;

            window.setTimeout(function () {
                var processedByMe = _this4.doSthDependentOnContext();
                if (processedByMe) {
                    console.warn('passing 1000ms without call useContextPreProcessor,so run directly.maybe you should regist a context pre-processor');
                }
            }, 1000);
        }

        /**
         * 执行一些与上下文强相关的事情,可能强依赖预处理的注册
         *
         * @return {Boolean} - 是否被调用方法处理
         */

    }, {
        key: 'doSthDependentOnContext',
        value: function doSthDependentOnContext() {
            if (this.sthDependentOnContextProcessed) return false;

            this.sthDependentOnContextProcessed = true;
            this.loadFallWidgets();
            return true;
        }

        /**
         * 解析失败模块
         */

    }, {
        key: 'loadFallWidgets',
        value: function loadFallWidgets() {
            var self = this;
            var isExecuted = false;
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
                var fns = [];
                var _listener = null;
                var hack = document.documentElement.doScroll;
                var domContentLoaded = 'DOMContentLoaded';
                var loaded = (hack ? /^loaded|^c/ : /^loaded|^i|^c/).test(document.readyState);

                if (!loaded) {
                    Util.addEventListener(window, domContentLoaded, _listener = function listener() {
                        Util.removeEventListener(window, domContentLoaded, _listener);
                        loaded = 1;
                        while (_listener = fns.shift()) {
                            _listener();
                        }
                    });
                }
                return function (fn) {
                    loaded ? setTimeout(fn, 0) : fns.push(fn);
                };
            }

            // 先判断是否已经是load的了,如果是的话直接执行
            if (document.readyState === 'complete') {
                window.setTimeout(function () {
                    resolve();
                }, 5);
                return;
            }

            domReady()(function () {
                window.setTimeout(function () {
                    resolve();
                }, 1500);
            });

            Util.addEventListener(window, 'load', function () {
                window.setTimeout(function () {
                    resolve();
                }, 5);
            });
        }

        /**
         * widget的props初始化操作
         */

    }, {
        key: 'initWidgetProps',
        value: function initWidgetProps() {
            var widgetProps = window[WidgetEnums.WIDGET_PROPS] || [];
            var self = this;

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

    }, {
        key: 'parseWidgetProp',
        value: function parseWidgetProp(config) {
            if (!(config && config.id)) return;

            // 查看之前是否有对应的widget配置
            var widgetBridge = this.getWidgetBridgeById(config.id);
            if (!widgetBridge) return;

            widgetBridge.initProps(_extends({}, config.meta, config.props));
        }

        /**
         * 遍历失败的模块
         */

    }, {
        key: 'traversalFallWidgets',
        value: function traversalFallWidgets() {
            var _this5 = this;

            /*
                尝试遍历过滤失败的模块，满足以下两个条件的才能运行
                 1.widget-module已经注册
                2.参数满足条件
             */
            this.fallbackWidgets = this.fallbackWidgets.filter(function (widget) {
                var name = widget.name;
                var widgetModule = _this5.name2WidgetModules[name];
                if (!widgetModule) return true;

                var requireParams = widget.fallbackParams;
                var params = Util.extend({}, widget.params, _this5.collectedParams);
                var meetRequireParams = _this5.isMeetRequireParams(params, requireParams);
                if (!meetRequireParams) return true;

                _this5.executeWidget(widget.id, widgetModule, params, widget.meta).then(function () {
                    // 尝试去将页面放入前端
                    _this5.shouldTakeViewToFrontEnd(widget.id);
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

    }, {
        key: 'isMeetRequireParams',
        value: function isMeetRequireParams(params, requireParams) {
            if (!(requireParams && requireParams.length)) return true;

            return requireParams.every(function (requireParam) {
                /*
                    这里现在可以支持一些校验规则
                    requireParam可以用 {paramname}!0!false!''!null来判断
                */
                requireParam = requireParam.split('!');
                var value = params[requireParam[0]];
                if (value === undefined) return false;

                var rules = requireParam.slice(1);
                if (!(rules && rules.length)) return true;

                return rules.every(function (rule) {
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

    }, {
        key: 'executeWidget',
        value: function executeWidget(id, widgetModule, params, meta) {
            params = params || {};
            /*
                判断有没有dataGenerator
                1.没有,直接将params作为数据传入
                2.有 作为dataGenerator使用
             */
            var self = this;

            return co( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var hasDataGenerator, props;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                hasDataGenerator = !!widgetModule.dataGenerator;
                                props = params;

                                if (!hasDataGenerator) {
                                    _context2.next = 6;
                                    break;
                                }

                                _context2.next = 5;
                                return widgetModule.dataGenerator.call(self, params);

                            case 5:
                                props = _context2.sent;

                            case 6:

                                window.setTimeout(function () {
                                    self.parseWidgetProp({
                                        id: id,
                                        meta: meta,
                                        props: props
                                    });
                                }, 5);

                                return _context2.abrupt('return', props);

                            case 8:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            })).catch(function (err) {
                if (!err) err = new Error('unknown error');
                console.log(err.stack);
                throw err;
            });
        }

        /**
         * 将已经存在的重要模块出栈,如果全部存在了,那么将页面展示到前端
         *
         * @param  {String} id - 组件id
         */

    }, {
        key: 'shouldTakeViewToFrontEnd',
        value: function shouldTakeViewToFrontEnd(id) {
            if (this.hasTakedViewToFrontEnd) return;

            this.importantWidgets = this.importantWidgets.filter(function (widgetId) {
                return id != widgetId;
            });
            if (this.importantWidgets.length) return;

            this.takeViewToFrontEnd();
        }

        /**
         * 将页面展示给前端
         */

    }, {
        key: 'takeViewToFrontEnd',
        value: function takeViewToFrontEnd() {
            if (this.hasTakedViewToFrontEnd) return;

            var contentPage = document.getElementById(RenderEnums.ID_MAIN_PAGE);
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

    }, {
        key: 'getWidgetBridgeById',
        value: function getWidgetBridgeById(id) {
            // 先尝试从缓存中获取
            var widgetBridge = this.widgetBridgeCache[id];
            if (widgetBridge) return widgetBridge;

            // 这里需要确保store已经初始化
            var renderType = this.id2RenderTypeMapping[id] || RenderTypeEnums.RENDER_TYPE_REACT;
            var WidgetClass = renderType == RenderTypeEnums.RENDER_TYPE_VUE ? VueWidgetBridge : ReactWidgetBridge;
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

    }, {
        key: 'getWidgetBridgesByName',
        value: function getWidgetBridgesByName(name) {
            return this.name2Widgets[name] || [];
        }

        /**
         * 分发action的操作
         */

    }, {
        key: 'dispatch',
        value: function dispatch() {
            throw new Error('you should impletement dispatch function.');
        }

        /**
         * 获取当前的state
         */

    }, {
        key: 'getState',
        value: function getState() {
            throw new Error('you should impletement getState function.');
        }

        /**
         * 注册store变更数据监听
         */

    }, {
        key: 'registStoreOnChangeListener',
        value: function registStoreOnChangeListener() {
            throw new Error('you should impletement registStoreOnChangeListener function.');
        }

        /**
         * 注册widget的mapStateToProps方法,是通过name来注册的
         *
         * @param  {String} name - widget的名称
         * @param  {Function} mapStateToProps - 函数名称
         */

    }, {
        key: 'registMapStateToProps',
        value: function registMapStateToProps(name, mapStateToProps) {
            var relatedWidgets = this.getWidgetBridgesByName(name);

            relatedWidgets.forEach(function (widget) {
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

    }, {
        key: 'registOnStartListener',
        value: function registOnStartListener(name, onStartListener) {
            var relatedWidgets = this.getWidgetBridgesByName(name);
            relatedWidgets.forEach(function (widget) {
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

    }, {
        key: 'registOnFailListener',
        value: function registOnFailListener(name, onFailListener, option) {
            var relatedWidgets = this.getWidgetBridgesByName(name);
            relatedWidgets.forEach(function (widget) {
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

    }, {
        key: 'registOnChangeListener',
        value: function registOnChangeListener(name, onChangeListener) {
            var relatedWidgets = this.getWidgetBridgesByName(name);
            relatedWidgets.forEach(function (widget) {
                if (!widget) return true;

                widget.registOnChangeListener(onChangeListener);
            });
        }

        /**
         * 注册组件模块
         *
         * @param  {Object} widgetModule - 组件内容
         */

    }, {
        key: 'registWidgetModule',
        value: function registWidgetModule(widgetModule) {
            if (!(widgetModule && widgetModule.name)) return;

            var name = widgetModule.name;
            var relatedWidgets = this.getWidgetBridgesByName(name);
            relatedWidgets.forEach(function (widget) {
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

    }, {
        key: 'setSharedParams',
        value: function setSharedParams() {
            var argsLength = arguments.length;
            if (!argsLength) {
                return;
            }
            //  大于两个参数时,以key value形式加入,忽视其他参数
            if (argsLength > 1) {
                var paraObj = {};
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

    }, {
        key: 'getWidgetBridgeInitialProps',
        value: function getWidgetBridgeInitialProps(id) {
            var widgetBridge = this.getWidgetBridgeById(id);
            if (!widgetBridge) return {};

            return widgetBridge.getInitialProps() || {};
        }

        /**
         * 获取组件的私有state状态.
         *
         * @param  {String} id - 组件id
         * @return {Object}
         */

    }, {
        key: 'getWidgetBridgeOwnState',
        value: function getWidgetBridgeOwnState(id) {
            var widgetBridge = this.getWidgetBridgeById(id);
            if (!widgetBridge) return {};

            return widgetBridge.getOwnState() || {};
        }

        /**
         * 获取组件的容器
         *
         * @param  {String} id - 组件id
         * @return {HtmlElement}
         */

    }, {
        key: 'getWidgetBridgeContainer',
        value: function getWidgetBridgeContainer(id) {
            var widgetBridge = this.getWidgetBridgeById(id);
            if (!widgetBridge) return null;

            return widgetBridge.getContainer();
        }

        /**
         * 隐藏widget模块
         *
         * @param  {String|Array} widgetNames - 组件名称
         */

    }, {
        key: 'hideWidgets',
        value: function hideWidgets(widgetNames) {
            if (Util.isString(widgetNames)) {
                widgetNames = [widgetNames];
            }
            if (!Util.isArray(widgetNames) && widgetNames.length) return;

            widgetNames.forEach(function (widgetName) {
                var containers = document.querySelectorAll('[data-widget-name="' + widgetName + '"]');
                if (!(containers && containers.length)) return true;

                Array.prototype.slice.call(containers).forEach(function (container) {
                    Util.hideDiv(container);
                });
            });
        }

        /**
         * 展示widget模块
         *
         * @param  {String|Array} widgetNames - 组件名称
         */

    }, {
        key: 'showWidgets',
        value: function showWidgets(widgetNames) {
            if (Util.isString(widgetNames)) {
                widgetNames = [widgetNames];
            }
            if (!Util.isArray(widgetNames) && widgetNames.length) return;

            widgetNames.forEach(function (widgetName) {
                var containers = document.querySelectorAll('[data-widget-name="' + widgetName + '"]');
                if (!(containers && containers.length)) return true;

                Array.prototype.slice.call(containers).forEach(function (container) {
                    Util.showDiv(container);
                });
            });
        }
    }]);

    return BaseFESupportor;
}();

module.exports = BaseFESupportor;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, global) {var require;/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   4.1.1
 */

(function (global, factory) {
	 true ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.ES6Promise = factory());
}(this, (function () { 'use strict';

function objectOrFunction(x) {
  var type = typeof x;
  return x !== null && (type === 'object' || type === 'function');
}

function isFunction(x) {
  return typeof x === 'function';
}

var _isArray = undefined;
if (Array.isArray) {
  _isArray = Array.isArray;
} else {
  _isArray = function (x) {
    return Object.prototype.toString.call(x) === '[object Array]';
  };
}

var isArray = _isArray;

var len = 0;
var vertxNext = undefined;
var customSchedulerFn = undefined;

var asap = function asap(callback, arg) {
  queue[len] = callback;
  queue[len + 1] = arg;
  len += 2;
  if (len === 2) {
    // If len is 2, that means that we need to schedule an async flush.
    // If additional callbacks are queued before the queue is flushed, they
    // will be processed by this flush that we are scheduling.
    if (customSchedulerFn) {
      customSchedulerFn(flush);
    } else {
      scheduleFlush();
    }
  }
};

function setScheduler(scheduleFn) {
  customSchedulerFn = scheduleFn;
}

function setAsap(asapFn) {
  asap = asapFn;
}

var browserWindow = typeof window !== 'undefined' ? window : undefined;
var browserGlobal = browserWindow || {};
var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && ({}).toString.call(process) === '[object process]';

// test for web worker but not in IE10
var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';

// node
function useNextTick() {
  // node version 0.10.x displays a deprecation warning when nextTick is used recursively
  // see https://github.com/cujojs/when/issues/410 for details
  return function () {
    return process.nextTick(flush);
  };
}

// vertx
function useVertxTimer() {
  if (typeof vertxNext !== 'undefined') {
    return function () {
      vertxNext(flush);
    };
  }

  return useSetTimeout();
}

function useMutationObserver() {
  var iterations = 0;
  var observer = new BrowserMutationObserver(flush);
  var node = document.createTextNode('');
  observer.observe(node, { characterData: true });

  return function () {
    node.data = iterations = ++iterations % 2;
  };
}

// web worker
function useMessageChannel() {
  var channel = new MessageChannel();
  channel.port1.onmessage = flush;
  return function () {
    return channel.port2.postMessage(0);
  };
}

function useSetTimeout() {
  // Store setTimeout reference so es6-promise will be unaffected by
  // other code modifying setTimeout (like sinon.useFakeTimers())
  var globalSetTimeout = setTimeout;
  return function () {
    return globalSetTimeout(flush, 1);
  };
}

var queue = new Array(1000);
function flush() {
  for (var i = 0; i < len; i += 2) {
    var callback = queue[i];
    var arg = queue[i + 1];

    callback(arg);

    queue[i] = undefined;
    queue[i + 1] = undefined;
  }

  len = 0;
}

function attemptVertx() {
  try {
    var r = require;
    var vertx = __webpack_require__(33);
    vertxNext = vertx.runOnLoop || vertx.runOnContext;
    return useVertxTimer();
  } catch (e) {
    return useSetTimeout();
  }
}

var scheduleFlush = undefined;
// Decide what async method to use to triggering processing of queued callbacks:
if (isNode) {
  scheduleFlush = useNextTick();
} else if (BrowserMutationObserver) {
  scheduleFlush = useMutationObserver();
} else if (isWorker) {
  scheduleFlush = useMessageChannel();
} else if (browserWindow === undefined && "function" === 'function') {
  scheduleFlush = attemptVertx();
} else {
  scheduleFlush = useSetTimeout();
}

function then(onFulfillment, onRejection) {
  var _arguments = arguments;

  var parent = this;

  var child = new this.constructor(noop);

  if (child[PROMISE_ID] === undefined) {
    makePromise(child);
  }

  var _state = parent._state;

  if (_state) {
    (function () {
      var callback = _arguments[_state - 1];
      asap(function () {
        return invokeCallback(_state, child, callback, parent._result);
      });
    })();
  } else {
    subscribe(parent, child, onFulfillment, onRejection);
  }

  return child;
}

/**
  `Promise.resolve` returns a promise that will become resolved with the
  passed `value`. It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    resolve(1);
  });

  promise.then(function(value){
    // value === 1
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.resolve(1);

  promise.then(function(value){
    // value === 1
  });
  ```

  @method resolve
  @static
  @param {Any} value value that the returned promise will be resolved with
  Useful for tooling.
  @return {Promise} a promise that will become fulfilled with the given
  `value`
*/
function resolve$1(object) {
  /*jshint validthis:true */
  var Constructor = this;

  if (object && typeof object === 'object' && object.constructor === Constructor) {
    return object;
  }

  var promise = new Constructor(noop);
  resolve(promise, object);
  return promise;
}

var PROMISE_ID = Math.random().toString(36).substring(16);

function noop() {}

var PENDING = void 0;
var FULFILLED = 1;
var REJECTED = 2;

var GET_THEN_ERROR = new ErrorObject();

function selfFulfillment() {
  return new TypeError("You cannot resolve a promise with itself");
}

function cannotReturnOwn() {
  return new TypeError('A promises callback cannot return that same promise.');
}

function getThen(promise) {
  try {
    return promise.then;
  } catch (error) {
    GET_THEN_ERROR.error = error;
    return GET_THEN_ERROR;
  }
}

function tryThen(then$$1, value, fulfillmentHandler, rejectionHandler) {
  try {
    then$$1.call(value, fulfillmentHandler, rejectionHandler);
  } catch (e) {
    return e;
  }
}

function handleForeignThenable(promise, thenable, then$$1) {
  asap(function (promise) {
    var sealed = false;
    var error = tryThen(then$$1, thenable, function (value) {
      if (sealed) {
        return;
      }
      sealed = true;
      if (thenable !== value) {
        resolve(promise, value);
      } else {
        fulfill(promise, value);
      }
    }, function (reason) {
      if (sealed) {
        return;
      }
      sealed = true;

      reject(promise, reason);
    }, 'Settle: ' + (promise._label || ' unknown promise'));

    if (!sealed && error) {
      sealed = true;
      reject(promise, error);
    }
  }, promise);
}

function handleOwnThenable(promise, thenable) {
  if (thenable._state === FULFILLED) {
    fulfill(promise, thenable._result);
  } else if (thenable._state === REJECTED) {
    reject(promise, thenable._result);
  } else {
    subscribe(thenable, undefined, function (value) {
      return resolve(promise, value);
    }, function (reason) {
      return reject(promise, reason);
    });
  }
}

function handleMaybeThenable(promise, maybeThenable, then$$1) {
  if (maybeThenable.constructor === promise.constructor && then$$1 === then && maybeThenable.constructor.resolve === resolve$1) {
    handleOwnThenable(promise, maybeThenable);
  } else {
    if (then$$1 === GET_THEN_ERROR) {
      reject(promise, GET_THEN_ERROR.error);
      GET_THEN_ERROR.error = null;
    } else if (then$$1 === undefined) {
      fulfill(promise, maybeThenable);
    } else if (isFunction(then$$1)) {
      handleForeignThenable(promise, maybeThenable, then$$1);
    } else {
      fulfill(promise, maybeThenable);
    }
  }
}

function resolve(promise, value) {
  if (promise === value) {
    reject(promise, selfFulfillment());
  } else if (objectOrFunction(value)) {
    handleMaybeThenable(promise, value, getThen(value));
  } else {
    fulfill(promise, value);
  }
}

function publishRejection(promise) {
  if (promise._onerror) {
    promise._onerror(promise._result);
  }

  publish(promise);
}

function fulfill(promise, value) {
  if (promise._state !== PENDING) {
    return;
  }

  promise._result = value;
  promise._state = FULFILLED;

  if (promise._subscribers.length !== 0) {
    asap(publish, promise);
  }
}

function reject(promise, reason) {
  if (promise._state !== PENDING) {
    return;
  }
  promise._state = REJECTED;
  promise._result = reason;

  asap(publishRejection, promise);
}

function subscribe(parent, child, onFulfillment, onRejection) {
  var _subscribers = parent._subscribers;
  var length = _subscribers.length;

  parent._onerror = null;

  _subscribers[length] = child;
  _subscribers[length + FULFILLED] = onFulfillment;
  _subscribers[length + REJECTED] = onRejection;

  if (length === 0 && parent._state) {
    asap(publish, parent);
  }
}

function publish(promise) {
  var subscribers = promise._subscribers;
  var settled = promise._state;

  if (subscribers.length === 0) {
    return;
  }

  var child = undefined,
      callback = undefined,
      detail = promise._result;

  for (var i = 0; i < subscribers.length; i += 3) {
    child = subscribers[i];
    callback = subscribers[i + settled];

    if (child) {
      invokeCallback(settled, child, callback, detail);
    } else {
      callback(detail);
    }
  }

  promise._subscribers.length = 0;
}

function ErrorObject() {
  this.error = null;
}

var TRY_CATCH_ERROR = new ErrorObject();

function tryCatch(callback, detail) {
  try {
    return callback(detail);
  } catch (e) {
    TRY_CATCH_ERROR.error = e;
    return TRY_CATCH_ERROR;
  }
}

function invokeCallback(settled, promise, callback, detail) {
  var hasCallback = isFunction(callback),
      value = undefined,
      error = undefined,
      succeeded = undefined,
      failed = undefined;

  if (hasCallback) {
    value = tryCatch(callback, detail);

    if (value === TRY_CATCH_ERROR) {
      failed = true;
      error = value.error;
      value.error = null;
    } else {
      succeeded = true;
    }

    if (promise === value) {
      reject(promise, cannotReturnOwn());
      return;
    }
  } else {
    value = detail;
    succeeded = true;
  }

  if (promise._state !== PENDING) {
    // noop
  } else if (hasCallback && succeeded) {
      resolve(promise, value);
    } else if (failed) {
      reject(promise, error);
    } else if (settled === FULFILLED) {
      fulfill(promise, value);
    } else if (settled === REJECTED) {
      reject(promise, value);
    }
}

function initializePromise(promise, resolver) {
  try {
    resolver(function resolvePromise(value) {
      resolve(promise, value);
    }, function rejectPromise(reason) {
      reject(promise, reason);
    });
  } catch (e) {
    reject(promise, e);
  }
}

var id = 0;
function nextId() {
  return id++;
}

function makePromise(promise) {
  promise[PROMISE_ID] = id++;
  promise._state = undefined;
  promise._result = undefined;
  promise._subscribers = [];
}

function Enumerator$1(Constructor, input) {
  this._instanceConstructor = Constructor;
  this.promise = new Constructor(noop);

  if (!this.promise[PROMISE_ID]) {
    makePromise(this.promise);
  }

  if (isArray(input)) {
    this.length = input.length;
    this._remaining = input.length;

    this._result = new Array(this.length);

    if (this.length === 0) {
      fulfill(this.promise, this._result);
    } else {
      this.length = this.length || 0;
      this._enumerate(input);
      if (this._remaining === 0) {
        fulfill(this.promise, this._result);
      }
    }
  } else {
    reject(this.promise, validationError());
  }
}

function validationError() {
  return new Error('Array Methods must be provided an Array');
}

Enumerator$1.prototype._enumerate = function (input) {
  for (var i = 0; this._state === PENDING && i < input.length; i++) {
    this._eachEntry(input[i], i);
  }
};

Enumerator$1.prototype._eachEntry = function (entry, i) {
  var c = this._instanceConstructor;
  var resolve$$1 = c.resolve;

  if (resolve$$1 === resolve$1) {
    var _then = getThen(entry);

    if (_then === then && entry._state !== PENDING) {
      this._settledAt(entry._state, i, entry._result);
    } else if (typeof _then !== 'function') {
      this._remaining--;
      this._result[i] = entry;
    } else if (c === Promise$2) {
      var promise = new c(noop);
      handleMaybeThenable(promise, entry, _then);
      this._willSettleAt(promise, i);
    } else {
      this._willSettleAt(new c(function (resolve$$1) {
        return resolve$$1(entry);
      }), i);
    }
  } else {
    this._willSettleAt(resolve$$1(entry), i);
  }
};

Enumerator$1.prototype._settledAt = function (state, i, value) {
  var promise = this.promise;

  if (promise._state === PENDING) {
    this._remaining--;

    if (state === REJECTED) {
      reject(promise, value);
    } else {
      this._result[i] = value;
    }
  }

  if (this._remaining === 0) {
    fulfill(promise, this._result);
  }
};

Enumerator$1.prototype._willSettleAt = function (promise, i) {
  var enumerator = this;

  subscribe(promise, undefined, function (value) {
    return enumerator._settledAt(FULFILLED, i, value);
  }, function (reason) {
    return enumerator._settledAt(REJECTED, i, reason);
  });
};

/**
  `Promise.all` accepts an array of promises, and returns a new promise which
  is fulfilled with an array of fulfillment values for the passed promises, or
  rejected with the reason of the first passed promise to be rejected. It casts all
  elements of the passed iterable to promises as it runs this algorithm.

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = resolve(2);
  let promise3 = resolve(3);
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // The array here would be [ 1, 2, 3 ];
  });
  ```

  If any of the `promises` given to `all` are rejected, the first promise
  that is rejected will be given as an argument to the returned promises's
  rejection handler. For example:

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = reject(new Error("2"));
  let promise3 = reject(new Error("3"));
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // Code here never runs because there are rejected promises!
  }, function(error) {
    // error.message === "2"
  });
  ```

  @method all
  @static
  @param {Array} entries array of promises
  @param {String} label optional string for labeling the promise.
  Useful for tooling.
  @return {Promise} promise that is fulfilled when all `promises` have been
  fulfilled, or rejected if any of them become rejected.
  @static
*/
function all$1(entries) {
  return new Enumerator$1(this, entries).promise;
}

/**
  `Promise.race` returns a new promise which is settled in the same way as the
  first passed promise to settle.

  Example:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 2');
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // result === 'promise 2' because it was resolved before promise1
    // was resolved.
  });
  ```

  `Promise.race` is deterministic in that only the state of the first
  settled promise matters. For example, even if other promises given to the
  `promises` array argument are resolved, but the first settled promise has
  become rejected before the other promises became fulfilled, the returned
  promise will become rejected:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      reject(new Error('promise 2'));
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // Code here never runs
  }, function(reason){
    // reason.message === 'promise 2' because promise 2 became rejected before
    // promise 1 became fulfilled
  });
  ```

  An example real-world use case is implementing timeouts:

  ```javascript
  Promise.race([ajax('foo.json'), timeout(5000)])
  ```

  @method race
  @static
  @param {Array} promises array of promises to observe
  Useful for tooling.
  @return {Promise} a promise which settles in the same way as the first passed
  promise to settle.
*/
function race$1(entries) {
  /*jshint validthis:true */
  var Constructor = this;

  if (!isArray(entries)) {
    return new Constructor(function (_, reject) {
      return reject(new TypeError('You must pass an array to race.'));
    });
  } else {
    return new Constructor(function (resolve, reject) {
      var length = entries.length;
      for (var i = 0; i < length; i++) {
        Constructor.resolve(entries[i]).then(resolve, reject);
      }
    });
  }
}

/**
  `Promise.reject` returns a promise rejected with the passed `reason`.
  It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    reject(new Error('WHOOPS'));
  });

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.reject(new Error('WHOOPS'));

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  @method reject
  @static
  @param {Any} reason value that the returned promise will be rejected with.
  Useful for tooling.
  @return {Promise} a promise rejected with the given `reason`.
*/
function reject$1(reason) {
  /*jshint validthis:true */
  var Constructor = this;
  var promise = new Constructor(noop);
  reject(promise, reason);
  return promise;
}

function needsResolver() {
  throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
}

function needsNew() {
  throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
}

/**
  Promise objects represent the eventual result of an asynchronous operation. The
  primary way of interacting with a promise is through its `then` method, which
  registers callbacks to receive either a promise's eventual value or the reason
  why the promise cannot be fulfilled.

  Terminology
  -----------

  - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
  - `thenable` is an object or function that defines a `then` method.
  - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
  - `exception` is a value that is thrown using the throw statement.
  - `reason` is a value that indicates why a promise was rejected.
  - `settled` the final resting state of a promise, fulfilled or rejected.

  A promise can be in one of three states: pending, fulfilled, or rejected.

  Promises that are fulfilled have a fulfillment value and are in the fulfilled
  state.  Promises that are rejected have a rejection reason and are in the
  rejected state.  A fulfillment value is never a thenable.

  Promises can also be said to *resolve* a value.  If this value is also a
  promise, then the original promise's settled state will match the value's
  settled state.  So a promise that *resolves* a promise that rejects will
  itself reject, and a promise that *resolves* a promise that fulfills will
  itself fulfill.


  Basic Usage:
  ------------

  ```js
  let promise = new Promise(function(resolve, reject) {
    // on success
    resolve(value);

    // on failure
    reject(reason);
  });

  promise.then(function(value) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Advanced Usage:
  ---------------

  Promises shine when abstracting away asynchronous interactions such as
  `XMLHttpRequest`s.

  ```js
  function getJSON(url) {
    return new Promise(function(resolve, reject){
      let xhr = new XMLHttpRequest();

      xhr.open('GET', url);
      xhr.onreadystatechange = handler;
      xhr.responseType = 'json';
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.send();

      function handler() {
        if (this.readyState === this.DONE) {
          if (this.status === 200) {
            resolve(this.response);
          } else {
            reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
          }
        }
      };
    });
  }

  getJSON('/posts.json').then(function(json) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Unlike callbacks, promises are great composable primitives.

  ```js
  Promise.all([
    getJSON('/posts'),
    getJSON('/comments')
  ]).then(function(values){
    values[0] // => postsJSON
    values[1] // => commentsJSON

    return values;
  });
  ```

  @class Promise
  @param {function} resolver
  Useful for tooling.
  @constructor
*/
function Promise$2(resolver) {
  this[PROMISE_ID] = nextId();
  this._result = this._state = undefined;
  this._subscribers = [];

  if (noop !== resolver) {
    typeof resolver !== 'function' && needsResolver();
    this instanceof Promise$2 ? initializePromise(this, resolver) : needsNew();
  }
}

Promise$2.all = all$1;
Promise$2.race = race$1;
Promise$2.resolve = resolve$1;
Promise$2.reject = reject$1;
Promise$2._setScheduler = setScheduler;
Promise$2._setAsap = setAsap;
Promise$2._asap = asap;

Promise$2.prototype = {
  constructor: Promise$2,

  /**
    The primary way of interacting with a promise is through its `then` method,
    which registers callbacks to receive either a promise's eventual value or the
    reason why the promise cannot be fulfilled.
  
    ```js
    findUser().then(function(user){
      // user is available
    }, function(reason){
      // user is unavailable, and you are given the reason why
    });
    ```
  
    Chaining
    --------
  
    The return value of `then` is itself a promise.  This second, 'downstream'
    promise is resolved with the return value of the first promise's fulfillment
    or rejection handler, or rejected if the handler throws an exception.
  
    ```js
    findUser().then(function (user) {
      return user.name;
    }, function (reason) {
      return 'default name';
    }).then(function (userName) {
      // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
      // will be `'default name'`
    });
  
    findUser().then(function (user) {
      throw new Error('Found user, but still unhappy');
    }, function (reason) {
      throw new Error('`findUser` rejected and we're unhappy');
    }).then(function (value) {
      // never reached
    }, function (reason) {
      // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
      // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
    });
    ```
    If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
  
    ```js
    findUser().then(function (user) {
      throw new PedagogicalException('Upstream error');
    }).then(function (value) {
      // never reached
    }).then(function (value) {
      // never reached
    }, function (reason) {
      // The `PedgagocialException` is propagated all the way down to here
    });
    ```
  
    Assimilation
    ------------
  
    Sometimes the value you want to propagate to a downstream promise can only be
    retrieved asynchronously. This can be achieved by returning a promise in the
    fulfillment or rejection handler. The downstream promise will then be pending
    until the returned promise is settled. This is called *assimilation*.
  
    ```js
    findUser().then(function (user) {
      return findCommentsByAuthor(user);
    }).then(function (comments) {
      // The user's comments are now available
    });
    ```
  
    If the assimliated promise rejects, then the downstream promise will also reject.
  
    ```js
    findUser().then(function (user) {
      return findCommentsByAuthor(user);
    }).then(function (comments) {
      // If `findCommentsByAuthor` fulfills, we'll have the value here
    }, function (reason) {
      // If `findCommentsByAuthor` rejects, we'll have the reason here
    });
    ```
  
    Simple Example
    --------------
  
    Synchronous Example
  
    ```javascript
    let result;
  
    try {
      result = findResult();
      // success
    } catch(reason) {
      // failure
    }
    ```
  
    Errback Example
  
    ```js
    findResult(function(result, err){
      if (err) {
        // failure
      } else {
        // success
      }
    });
    ```
  
    Promise Example;
  
    ```javascript
    findResult().then(function(result){
      // success
    }, function(reason){
      // failure
    });
    ```
  
    Advanced Example
    --------------
  
    Synchronous Example
  
    ```javascript
    let author, books;
  
    try {
      author = findAuthor();
      books  = findBooksByAuthor(author);
      // success
    } catch(reason) {
      // failure
    }
    ```
  
    Errback Example
  
    ```js
  
    function foundBooks(books) {
  
    }
  
    function failure(reason) {
  
    }
  
    findAuthor(function(author, err){
      if (err) {
        failure(err);
        // failure
      } else {
        try {
          findBoooksByAuthor(author, function(books, err) {
            if (err) {
              failure(err);
            } else {
              try {
                foundBooks(books);
              } catch(reason) {
                failure(reason);
              }
            }
          });
        } catch(error) {
          failure(err);
        }
        // success
      }
    });
    ```
  
    Promise Example;
  
    ```javascript
    findAuthor().
      then(findBooksByAuthor).
      then(function(books){
        // found books
    }).catch(function(reason){
      // something went wrong
    });
    ```
  
    @method then
    @param {Function} onFulfilled
    @param {Function} onRejected
    Useful for tooling.
    @return {Promise}
  */
  then: then,

  /**
    `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
    as the catch block of a try/catch statement.
  
    ```js
    function findAuthor(){
      throw new Error('couldn't find that author');
    }
  
    // synchronous
    try {
      findAuthor();
    } catch(reason) {
      // something went wrong
    }
  
    // async with promises
    findAuthor().catch(function(reason){
      // something went wrong
    });
    ```
  
    @method catch
    @param {Function} onRejection
    Useful for tooling.
    @return {Promise}
  */
  'catch': function _catch(onRejection) {
    return this.then(null, onRejection);
  }
};

/*global self*/
function polyfill$1() {
    var local = undefined;

    if (typeof global !== 'undefined') {
        local = global;
    } else if (typeof self !== 'undefined') {
        local = self;
    } else {
        try {
            local = Function('return this')();
        } catch (e) {
            throw new Error('polyfill failed because global object is unavailable in this environment');
        }
    }

    var P = local.Promise;

    if (P) {
        var promiseToString = null;
        try {
            promiseToString = Object.prototype.toString.call(P.resolve());
        } catch (e) {
            // silently ignored
        }

        if (promiseToString === '[object Promise]' && !P.cast) {
            return;
        }
    }

    local.Promise = Promise$2;
}

// Strange compat..
Promise$2.polyfill = polyfill$1;
Promise$2.Promise = Promise$2;

return Promise$2;

})));

//# sourceMappingURL=es6-promise.map

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(23), __webpack_require__(2)))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var replace = String.prototype.replace;
var percentTwenties = /%20/g;

module.exports = {
    'default': 'RFC3986',
    formatters: {
        RFC1738: function (value) {
            return replace.call(value, percentTwenties, '+');
        },
        RFC3986: function (value) {
            return value;
        }
    },
    RFC1738: 'RFC1738',
    RFC3986: 'RFC3986'
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty;

var hexTable = (function () {
    var array = [];
    for (var i = 0; i < 256; ++i) {
        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
    }

    return array;
}());

var compactQueue = function compactQueue(queue) {
    var obj;

    while (queue.length) {
        var item = queue.pop();
        obj = item.obj[item.prop];

        if (Array.isArray(obj)) {
            var compacted = [];

            for (var j = 0; j < obj.length; ++j) {
                if (typeof obj[j] !== 'undefined') {
                    compacted.push(obj[j]);
                }
            }

            item.obj[item.prop] = compacted;
        }
    }

    return obj;
};

exports.arrayToObject = function arrayToObject(source, options) {
    var obj = options && options.plainObjects ? Object.create(null) : {};
    for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== 'undefined') {
            obj[i] = source[i];
        }
    }

    return obj;
};

exports.merge = function merge(target, source, options) {
    if (!source) {
        return target;
    }

    if (typeof source !== 'object') {
        if (Array.isArray(target)) {
            target.push(source);
        } else if (typeof target === 'object') {
            if (options.plainObjects || options.allowPrototypes || !has.call(Object.prototype, source)) {
                target[source] = true;
            }
        } else {
            return [target, source];
        }

        return target;
    }

    if (typeof target !== 'object') {
        return [target].concat(source);
    }

    var mergeTarget = target;
    if (Array.isArray(target) && !Array.isArray(source)) {
        mergeTarget = exports.arrayToObject(target, options);
    }

    if (Array.isArray(target) && Array.isArray(source)) {
        source.forEach(function (item, i) {
            if (has.call(target, i)) {
                if (target[i] && typeof target[i] === 'object') {
                    target[i] = exports.merge(target[i], item, options);
                } else {
                    target.push(item);
                }
            } else {
                target[i] = item;
            }
        });
        return target;
    }

    return Object.keys(source).reduce(function (acc, key) {
        var value = source[key];

        if (has.call(acc, key)) {
            acc[key] = exports.merge(acc[key], value, options);
        } else {
            acc[key] = value;
        }
        return acc;
    }, mergeTarget);
};

exports.assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function (acc, key) {
        acc[key] = source[key];
        return acc;
    }, target);
};

exports.decode = function (str) {
    try {
        return decodeURIComponent(str.replace(/\+/g, ' '));
    } catch (e) {
        return str;
    }
};

exports.encode = function encode(str) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) {
        return str;
    }

    var string = typeof str === 'string' ? str : String(str);

    var out = '';
    for (var i = 0; i < string.length; ++i) {
        var c = string.charCodeAt(i);

        if (
            c === 0x2D // -
            || c === 0x2E // .
            || c === 0x5F // _
            || c === 0x7E // ~
            || (c >= 0x30 && c <= 0x39) // 0-9
            || (c >= 0x41 && c <= 0x5A) // a-z
            || (c >= 0x61 && c <= 0x7A) // A-Z
        ) {
            out += string.charAt(i);
            continue;
        }

        if (c < 0x80) {
            out = out + hexTable[c];
            continue;
        }

        if (c < 0x800) {
            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        if (c < 0xD800 || c >= 0xE000) {
            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        i += 1;
        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
        out += hexTable[0xF0 | (c >> 18)]
            + hexTable[0x80 | ((c >> 12) & 0x3F)]
            + hexTable[0x80 | ((c >> 6) & 0x3F)]
            + hexTable[0x80 | (c & 0x3F)];
    }

    return out;
};

exports.compact = function compact(value) {
    var queue = [{ obj: { o: value }, prop: 'o' }];
    var refs = [];

    for (var i = 0; i < queue.length; ++i) {
        var item = queue[i];
        var obj = item.obj[item.prop];

        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; ++j) {
            var key = keys[j];
            var val = obj[key];
            if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
                queue.push({ obj: obj, prop: key });
                refs.push(val);
            }
        }
    }

    return compactQueue(queue);
};

exports.isRegExp = function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};

exports.isBuffer = function isBuffer(obj) {
    if (obj === null || typeof obj === 'undefined') {
        return false;
    }

    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_11__;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * 增加find的polyfill
 */

function arrayFind() {
    if (Array.prototype.find) return;

    Array.prototype.find = function (predicate) {
        'use strict';

        if (this == null) {
            throw new TypeError('Array.prototype.find called on null or undefined');
        }
        if (typeof predicate !== 'function') {
            throw new TypeError('predicate must be a function');
        }
        var list = Object(this);
        var length = list.length >>> 0;
        var thisArg = arguments[1];
        var value = void 0;

        for (var i = 0; i < length; i++) {
            value = list[i];
            if (predicate.call(thisArg, value, i, list)) {
                return value;
            }
        }
        return undefined;
    };
}

function arrayFindIndex() {
    if (!Array.prototype.findIndex) {
        Object.defineProperty(Array.prototype, 'findIndex', {
            value: function value(predicate) {
                if (this == null) {
                    throw new TypeError('"this" is null or not defined');
                }

                var o = Object(this);
                var len = o.length >>> 0;

                if (typeof predicate !== 'function') {
                    throw new TypeError('predicate must be a function');
                }
                var thisArg = arguments[1];
                var k = 0;
                while (k < len) {
                    var kValue = o[k];
                    if (predicate.call(thisArg, kValue, k, o)) {
                        return k;
                    }
                    k++;
                }
                return -1;
            }
        });
    }
}

arrayFind();
arrayFindIndex();

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var React = __webpack_require__(9);
var Redux = __webpack_require__(30);
var ReactRedux = __webpack_require__(10);

var BaseSupportor = __webpack_require__(5);
var Enums = __webpack_require__(0);
var StateEnums = Enums.state;
var SupportorEnums = Enums.supportor;
var Util = __webpack_require__(1);

/*
    注册api关联
 */
var API_ALIAS_CONFIG = {
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
        state = Util.extend({}, state, _defineProperty({}, '' + StateEnums.PREFIX_WIDGET_OWN_STATE_KEY + action.id, action.data));
    }
    return state;
}

/**
 * react全家桶的支持组件
 */

var ReactSupportor = function (_BaseSupportor) {
    _inherits(ReactSupportor, _BaseSupportor);

    function ReactSupportor() {
        _classCallCheck(this, ReactSupportor);

        var _this = _possibleConstructorReturn(this, (ReactSupportor.__proto__ || Object.getPrototypeOf(ReactSupportor)).call(this));

        _this.currentReducer = DEFAULT_REDUCER;
        // 回放机制的action列表
        _this.toDispatchActions = [];
        /*
            为什么放在这里执行？因为后面两项方法都依赖store的初始化
         */
        _this.injectLegoWidgetId();
        _this.initStore();
        _this.parseWidgetConfigs();
        _this.initWidgetProps();
        _this.initExtraFunctions();

        _this.tryDoSthDependentOnContext();
        return _this;
    }

    _createClass(ReactSupportor, [{
        key: 'aliasApi',
        value: function aliasApi() {
            var _this2 = this;

            _get(ReactSupportor.prototype.__proto__ || Object.getPrototypeOf(ReactSupportor.prototype), 'aliasApi', this).call(this);
            Object.keys(API_ALIAS_CONFIG).forEach(function (newApi) {
                var apiName = API_ALIAS_CONFIG[newApi];
                _this2[newApi] = _this2[apiName];
            });
        }

        /**
         * 注入lego的widgetId
         */

    }, {
        key: 'injectLegoWidgetId',
        value: function injectLegoWidgetId() {
            var Provider = ReactRedux.Provider;
            Provider.prototype.getChildContext = function () {
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

    }, {
        key: 'initStore',
        value: function initStore() {
            /*
             *  默认没有reducer,留待后面进行替换
             *  这么做的原因是,reducer是与业务逻辑强关联的
             *  当注册reducer时一定已经通过require引入了当前的包了
             */
            this.store = Redux.createStore(DEFAULT_REDUCER, this.initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
        }

        /**
         * 提供原生的向外的暴露方法
         */

    }, {
        key: 'initExtraFunctions',
        value: function initExtraFunctions() {
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

    }, {
        key: 'registOwnReducer',
        value: function registOwnReducer(id, reducer) {
            var reducerKey = '' + StateEnums.PREFIX_WIDGET_OWN_STATE_KEY + id;
            /**
             * 对reducer进行装配，只处理我们对应组件的内容
             *
             * @param  {Object} state - 私有数据
             * @param  {Object} action - 动作
             * @return {Object}
             */
            function decoratedReducer(state, action) {
                var ownState = state[reducerKey];
                var newOwnState = reducer(ownState, action);
                // 按照约定,无法处理的action要返回原来的state
                if (ownState == newOwnState) {
                    return state;
                }
                // 现在这种情况,是state已经被处理过
                return Util.extend({}, state, _defineProperty({}, reducerKey, newOwnState));
            }
            this.decorateReducer(decoratedReducer);
        }

        /**
         * 注册store配置
         *
         * @param  {Function} reducer - 注册reducers
         */

    }, {
        key: SupportorEnums.BROWSER_SUPPORTOR_REGIST_STORE_CONFIG,
        value: function value(reducer) {
            this.decorateReducer(reducer);
        }

        /**
         * 注册router配置
         * important!!! 如果有这个方法，需要提前预设！
         * 这个api一定会被调用，因为也需要告知没有router的情况
         *
         * @param {Object} routerConfig - 配置
         */

    }, {
        key: SupportorEnums.BROWSER_SUPPORTOR_REGISTER_ROUTER_CONFIG,
        value: function value(routerConfig) {
            var _this3 = this;

            var id2WidgetBridge = {};
            (this.widgetConfigs || []).forEach(function (config) {
                var id = config.id;
                var widgetBridge = _this3.getWidgetBridgeById(id);
                if (!widgetBridge) return null;

                id2WidgetBridge[id] = widgetBridge;
            });

            // TODO React需要支持react-router
            Object.keys(id2WidgetBridge).forEach(function (id) {
                id2WidgetBridge[id].initRouters();
            });
        }

        /**
         * 替换Reducers
         *
         * @param  {Function} reducer - 注册reducers
         */

    }, {
        key: 'replaceReducer',
        value: function replaceReducer(reducer) {
            if (!this.store) return;

            var store = this.store;
            this.currentReducer = reducer;
            // 包装reducers,因为需要响应刷新action
            function reducerWrapper(state, action) {
                var newState = reducer(state, action);
                // 如果action是指定的刷新action
                if (action.type == StateEnums.LEGO_ACTION_TYPE_REFRESH) {
                    newState = Util.extend({}, newState);
                }
                return newState;
            }
            store.replaceReducer(reducerWrapper);

            // 开始准备进行回放action,因为widget间的js不存在关联,所以无法保证加载顺序
            this.toDispatchActions = this.toDispatchActions.filter(function (action) {
                var curState = store.getState();
                // 直接dispatch,以防有非幂等的reducer
                store.dispatch(action);
                var newState = store.getState();
                /*
                   判断现有的reducer是否能够处理action,根据当前state与计算后的state的比较
                   特别注意,我们只比较了内存地址,主要是出于性能方面的考量
                   另外,对于redux有一个约定,如果你处理不了这个action,就需要返回默认的state!
                 */
                var isHandled = !(newState === curState);
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

    }, {
        key: 'decorateReducer',
        value: function decorateReducer(reducer) {
            if (!this.store) return;

            var prevReducer = this.currentReducer;

            function decoratedReducer(state, action) {
                var newState = prevReducer(state, action);
                return reducer(newState, action);
            }

            this.replaceReducer(decoratedReducer);
        }

        /**
         * 分发action的操作
         *
         * @param  {Object} action - 描述应用变化的普通对象
         */

    }, {
        key: 'dispatch',
        value: function dispatch(action) {
            if (!this.store) return;

            var store = this.store;
            var curState = store.getState();
            store.dispatch(action);
            /*
               判断现有的reducer是否能够处理action,根据当前state与计算后的state的比较
               特别注意,我们只比较了内存地址,主要是出于性能方面的考量
               另外,对于redux有一个约定,如果你处理不了这个action,就需要返回默认的state!
             */
            var isHandled = !(store.getState() === curState);
            if (!isHandled) {
                this.toDispatchActions.push(action);
            }
        }

        /**
         * 获取当前的state
         *
         * @return {Object} - 当前的state
         */

    }, {
        key: 'getState',
        value: function getState() {
            if (!this.store) return null;

            return this.store.getState();
        }

        /**
         * 注册store变更数据监听
         *
         * @param  {Function} onChangeListener - 改变时的监听
         */

    }, {
        key: 'registStoreOnChangeListener',
        value: function registStoreOnChangeListener(onChangeListener) {
            if (!this.store) return;

            var store = this.store;
            store.subscribe(function () {
                onChangeListener(store.getState());
            });
        }
    }]);

    return ReactSupportor;
}(BaseSupportor);

module.exports = ReactSupportor;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(6).polyfill();
var Vue = __webpack_require__(11);
var Vuex = __webpack_require__(32);
var VueRouter = __webpack_require__(31);
var BaseSupportor = __webpack_require__(5);
var Enums = __webpack_require__(0);
var WidgetEnums = Enums.widget;
var StateEnums = Enums.state;
var SupportorEnums = Enums.supportor;
var Util = __webpack_require__(1);

/**
   重刷字段,以此来让整个store更新,目的是在onStart方法里 我们会将mapStateToProps方法注册,然后触发更新重新渲染一次，
   以防有漏过什么事件
 */
var KEY_REFRESH_COUNT = 'refreshCount';

/*
    注册api关联
 */
var API_ALIAS_CONFIG = {
    registerOwnModule: 'registOwnModule'
};

/**
 * vue的前端支持组件
 */

var VueSupportor = function (_BaseSupportor) {
    _inherits(VueSupportor, _BaseSupportor);

    function VueSupportor() {
        _classCallCheck(this, VueSupportor);

        var _this = _possibleConstructorReturn(this, (VueSupportor.__proto__ || Object.getPrototypeOf(VueSupportor)).call(this));

        _this.storeConfig = null;
        /*
            为什么放在这里执行？因为后面两项方法都依赖store的初始化
         */
        _this.useVuePlugins();
        _this.initStore();
        _this.parseWidgetConfigs();
        _this.initWidgetProps();
        _this.initExtraFunctions();

        _this.tryDoSthDependentOnContext();
        return _this;
    }

    _createClass(VueSupportor, [{
        key: 'useVuePlugins',
        value: function useVuePlugins() {
            Vue.use(Vuex);
            Vue.use(VueRouter);
        }
    }, {
        key: 'aliasApi',
        value: function aliasApi() {
            var _this2 = this;

            _get(VueSupportor.prototype.__proto__ || Object.getPrototypeOf(VueSupportor.prototype), 'aliasApi', this).call(this);
            Object.keys(API_ALIAS_CONFIG).forEach(function (newApi) {
                var apiName = API_ALIAS_CONFIG[newApi];
                _this2[newApi] = _this2[apiName];
            });
        }

        /**
         * 初始化vuex的store
         */

    }, {
        key: 'initStore',
        value: function initStore() {
            var initialState = Util.extend({}, this.initialState, _defineProperty({}, KEY_REFRESH_COUNT, 0));
            /**
             * 构建基础的module对象
             *
             * @return {Object}
             */
            function buildInitialModules() {
                var ret = {};
                var configs = window[WidgetEnums.WIDGET_CONFIGS] || [];
                configs.forEach(function (config) {
                    ret['' + StateEnums.PREFIX_WIDGET_OWN_STATE_KEY + config.id] = {};
                });
                return ret;
            }

            var storeConfig = this.storeConfig = {
                modules: buildInitialModules(),
                actions: _defineProperty({}, StateEnums.LEGO_ACTION_TYPE_REFRESH, function (context) {
                    context.commit(StateEnums.LEGO_ACTION_TYPE_REFRESH);
                }),
                mutations: _defineProperty({}, StateEnums.LEGO_ACTION_TYPE_REFRESH, function (state) {
                    state[KEY_REFRESH_COUNT]++;
                })
            };

            this.store = new Vuex.Store(Util.extend({}, storeConfig, {
                state: initialState
            }));
            this.doSthTricky();
        }

        /**
         * 替换原来的hotUpdate的实现,因为需要cache内容
         */

    }, {
        key: 'doSthTricky',
        value: function doSthTricky() {
            this.store.legoOriginalHotUpdate = this.store.hotUpdate;
            this.store.hotUpdate = this.hotUpdate.bind(this);
        }

        /**
         * 提供原生的向外的暴露方法
         */

    }, {
        key: 'initExtraFunctions',
        value: function initExtraFunctions() {
            /*
             * 我们将dispatch直接暴露出来，因为好像没有什么好做的，action可能会返回promise,导致我们无法比较mutation是否成功
             * 目前根据webpack的打包方式，也不会导致js分批次到达
             */
            this.dispatch = this.store.dispatch;

            this.getEmptyComponent = function () {
                var element = null;
                return function () {
                    if (!element) {
                        element = {
                            render: function render(h) {
                                return h('i', {
                                    'class': {
                                        'empty-component': true
                                    }
                                });
                            }
                        };
                    }
                    return element;
                };
            }();
        }

        /**
         * 向外层的vuex注册module,注意因为我们存在组件嵌套关系，所以可能有多个module.需要extend
         *
         * @param  {String} id - 组件id
         * @param  {Object} newModule - module内容
         */

    }, {
        key: 'registOwnModule',
        value: function registOwnModule(id, newModule) {
            if (!Util.isObject(newModule)) return;

            var moduleId = StateEnums.PREFIX_WIDGET_OWN_STATE_KEY + id;
            var modules = this.storeConfig.modules || {};
            var prevModule = modules[moduleId] ? modules[moduleId] : {};

            var moduleState = Util.extend({}, prevModule.state, newModule.state);
            /*
                action,mutations,getter用来register的时候只要加新的
                但是cache时需要拿完整的数据
             */
            var toInsertModule = {
                state: moduleState,
                actions: newModule.actions,
                mutations: newModule.mutations,
                getters: newModule.getters
            };
            var toStoredModule = {
                state: moduleState,
                actions: Util.extend({}, prevModule.mutations, newModule.mutations),
                mutations: Util.extend({}, prevModule.mutations, newModule.mutations),
                getters: Util.extend({}, prevModule.getters, newModule.getters)
            };

            this.storeConfig.modules = Util.extend({}, modules, _defineProperty({}, moduleId, toStoredModule));

            this.store.registerModule(moduleId, toInsertModule);
        }

        /**
         * 注册store配置,包括actions,mutations,getters
         *
         * @param  {Object} config - 注册对应的mutation
         */

    }, {
        key: SupportorEnums.BROWSER_SUPPORTOR_REGIST_STORE_CONFIG,
        value: function value(config) {
            this.hotUpdate(config);
        }

        /**
         * 注册router配置
         * important!!! 如果有这个方法，需要提前预设！
         * 这个api一定会被调用，因为也需要告知没有router的情况
         *
         * @param {Object} routerConfig - 配置
         */

    }, {
        key: SupportorEnums.BROWSER_SUPPORTOR_REGISTER_ROUTER_CONFIG,
        value: function value(routerConfig) {
            var _this3 = this;

            var id2WidgetBridge = {};
            (this.widgetConfigs || []).forEach(function (config) {
                var id = config.id;
                var widgetBridge = _this3.getWidgetBridgeById(id);
                if (!widgetBridge) return null;

                id2WidgetBridge[id] = widgetBridge;
            });

            if (!(routerConfig && routerConfig.routes && routerConfig.routes.length)) {
                Object.keys(id2WidgetBridge).forEach(function (id) {
                    id2WidgetBridge[id].initRouters();
                });
                return;
            }

            var routes = routerConfig.routes;
            var rootPathIndex = routes.findIndex(function (route) {
                return route.path === '/';
            });
            if (rootPathIndex === -1) {
                routes.push({
                    path: '/'
                });
            }

            /*
                1.从ssr成功的组件中，获取对应的componentPromise
                2.成功后设置routers
             */

            var wait4SuccessComponents = this.successImportantWidgets.map(function (id) {
                return id2WidgetBridge[id].wait4Component();
            });

            Promise.all(wait4SuccessComponents).then(function (components) {
                routes.forEach(function (route) {
                    route.components = route.components || {};

                    var path = route.path;
                    Object.keys(_this3.id2PathsMapping).forEach(function (id) {
                        // 没有设置的话，代表默认首页出现
                        var paths = _this3.id2PathsMapping[id] || ['/'];
                        if (paths.indexOf(path) !== -1) {
                            var successComponent = components.find(function (component) {
                                return component.widgetId === id;
                            });
                            var component = successComponent || function () {
                                return id2WidgetBridge[id].wait4Component();
                            };
                            route.components[id] = component;
                        } else {
                            route.components[id] = _this3.getEmptyComponent();
                        }
                    });
                });
                var routers = new VueRouter(routerConfig);
                Object.keys(id2WidgetBridge).forEach(function (id) {
                    id2WidgetBridge[id].initRouters(routers);
                });
            });
        }

        /**
         * 页面级别注册自己的配置,包括actions,mutations,getters
         *
         * @param  {Object} config - 注册对应的mutation
         */

    }, {
        key: 'hotUpdate',
        value: function hotUpdate(config) {
            if (!Util.isObject(config)) return;

            var prevOptions = this.storeConfig || {};
            var prevActions = prevOptions.actions || {};
            var prevMutations = prevOptions.mutations || {};
            var prevGetters = prevOptions.getters || {};

            // mixin,根节点的action和mutation与getters不可重复，module的允许重复
            var newActions = Util.extend({}, prevActions, config.actions);
            var newMutations = Util.extend({}, prevMutations, config.mutations);
            var newGetters = Util.extend({}, prevGetters, config.getters);

            var newStoreConfig = {
                actions: newActions,
                mutations: newMutations,
                getters: newGetters
            };

            this.storeConfig = Util.extend({}, this.storeConfig, newStoreConfig);

            /*
                收集getters
             */
            var collectedGetters = {};
            var modules = this.storeConfig.modules || {};
            Object.keys(modules).forEach(function (moduleId) {
                var moduleInfo = modules[moduleId];
                if (!(moduleInfo && moduleInfo.getters)) return true;

                Util.extend(collectedGetters, moduleInfo.getters);
            });
            Util.extend(collectedGetters, this.storeConfig.getters);

            this.store.legoOriginalHotUpdate(Util.extend({}, newStoreConfig, {
                getters: collectedGetters
            }));
        }

        /**
         * 获取当前的state
         *
         * @return {Object} - 当前的state
         */

    }, {
        key: 'getState',
        value: function getState() {
            if (!this.store) return null;

            return this.store.state;
        }

        /**
         * 注册store变更数据监听
         *
         * @param  {Function} onChangeListener - 改变时的监听,参数分别是mutation与state
         */

    }, {
        key: 'registStoreOnChangeListener',
        value: function registStoreOnChangeListener(onChangeListener) {
            if (!this.store) return;

            var store = this.store;
            store.subscribe(onChangeListener);
        }
    }]);

    return VueSupportor;
}(BaseSupportor);

module.exports = VueSupportor;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BaseWidgetBridge = __webpack_require__(3);
var Util = __webpack_require__(1);

var Enums = __webpack_require__(0);
var StateEnums = Enums.state;

/**
 * react-widget的桥接类
 */

var ReactWidgetBridge = function (_BaseWidgetBridge) {
    _inherits(ReactWidgetBridge, _BaseWidgetBridge);

    function ReactWidgetBridge() {
        _classCallCheck(this, ReactWidgetBridge);

        return _possibleConstructorReturn(this, (ReactWidgetBridge.__proto__ || Object.getPrototypeOf(ReactWidgetBridge)).apply(this, arguments));
    }

    _createClass(ReactWidgetBridge, [{
        key: 'initProps',

        /**
         * 初始化组件的属性
         *
         * @param  {Object} props - 对应的内容
         */
        value: function initProps(props) {
            if (!Util.isObject(props)) return;

            var self = this;
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
                this.onPropsInited.forEach(function (fn) {
                    fn && fn(props);
                });
            }
        }

        /**
         * 获取组件的component-promise，目前主要用在vue-router中
         *
         * @return {Promise}
         */

    }, {
        key: 'wait4Component',
        value: function wait4Component() {
            var _this2 = this;

            if (!this.getComponentPromise) {
                /*
                    目前需要等待两个状态,promise才能resolved
                    1.widget.template
                    2.widget.props
                */
                this.getComponentPromise = new Promise(function (resolve) {
                    var after = Util.after(2, function () {
                        _this2.baseComponent = _this2.template;
                        resolve(_this2.baseComponent);
                    });
                    _this2.registerOnPropsInitedListener(after);
                    _this2.registeronTemplateRegisterListener(after);
                });
            }
            return this.getComponentPromise;
        }

        /**
         * 获取组件的私有state
         *
         * @return {Object}
         */

    }, {
        key: 'getOwnState',
        value: function getOwnState() {
            var widgetId = this.widgetId;
            var store = this.store;
            return store.getState()[StateEnums.PREFIX_WIDGET_OWN_STATE_KEY + widgetId] || {};
        }
    }]);

    return ReactWidgetBridge;
}(BaseWidgetBridge);

module.exports = ReactWidgetBridge;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(9);
var ReactDom = __webpack_require__(29);
var ReactRedux = __webpack_require__(10);

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
        var storeConfig = widgetBridge.storeConfig;
        if (!storeConfig) return;

        var ownReducer = storeConfig.ownReducer;
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
    var connectedElement = ReactRedux.connect(mapStateToProps)(widgetBridge.baseComponent);
    connectStore();

    ReactDom.render(React.createElement(ReactRedux.Provider, {
        store: widgetBridge.store,
        legoWidgetId: widgetBridge.widgetId
    }, React.createElement(connectedElement, null)), widgetBridge.rootContainer);
}

module.exports = connectReactElement;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Vue = __webpack_require__(11);
var Enums = __webpack_require__(0);

var StateEnums = Enums.state;

/**
 * 链接vue的组件
 *
 * @param  {Object} widgetBridge - WidgetBridge的实例
 */
function connectVueTemplateElement(widgetBridge) {
    if (!widgetBridge.store) return;
    if (!widgetBridge.rootContainer) return;

    if (!widgetBridge.initialProps) return;
    /*
     * 创建一个组件,
     * el是rootContainer,data里会有一个legoWidgetId,然后store是使用module过的store
     */

    /*
     * vue2.0有一个比较坑的点,就是会把挂载的el整个替换掉,那么对于我们,就分为两种情况
     * 1:server端有渲染,那么找到那个div
     * 2:没有的话,创建一个临时div
     */
    var node = null;

    function findFirstChild(dom) {
        if (!dom) return null;
        if (!dom.childNodes) return null;
        return Array.prototype.slice.call(dom.childNodes).find(function (child) {
            return child && !(child.nodeName == '#text' && !/\S/.test(child.nodeValue));
        });
    }

    node = findFirstChild(widgetBridge.rootContainer);
    if (!node) {
        node = document.createElement('div');
        widgetBridge.rootContainer.appendChild(node);
    }

    var needRouter = !!widgetBridge.routers;
    if (needRouter) {
        new Vue({
            el: node,
            router: widgetBridge.routers,
            data: function data() {
                return {
                    legoWidgetId: widgetBridge.widgetId
                };
            },

            store: widgetBridge.store,
            mounted: function mounted() {
                var storeConfig = widgetBridge.storeConfig;
                if (!storeConfig) return;
                var supportor = widgetBridge.supportor;
                if (!(supportor && supportor.registOwnModule)) return;

                supportor.registOwnModule(this.legoWidgetId, storeConfig);
            },
            render: function render(h) {
                return h('router-view', {
                    props: {
                        name: widgetBridge.widgetId
                    }
                });
            }
        });
        return;
    }
    new Vue(_extends({}, widgetBridge.baseComponent, {
        el: node,
        data: function data() {
            return {
                legoWidgetId: widgetBridge.widgetId
            };
        },

        store: widgetBridge.store,
        mounted: function mounted() {
            var storeConfig = widgetBridge.storeConfig;
            if (!storeConfig) return;
            var supportor = widgetBridge.supportor;
            if (!(supportor && supportor.registOwnModule)) return;

            supportor.registOwnModule(this.legoWidgetId, storeConfig);
        }
    }));
}

module.exports = connectVueTemplateElement;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var render = __webpack_require__(4);
var BaseWidgetBridge = __webpack_require__(3);
var Util = __webpack_require__(1);

var Enums = __webpack_require__(0);
var StateEnums = Enums.state;

/**
 * vue的桥接组件
 */

var VueWidgetBridge = function (_BaseWidgetBridge) {
    _inherits(VueWidgetBridge, _BaseWidgetBridge);

    function VueWidgetBridge() {
        _classCallCheck(this, VueWidgetBridge);

        return _possibleConstructorReturn(this, (VueWidgetBridge.__proto__ || Object.getPrototypeOf(VueWidgetBridge)).apply(this, arguments));
    }

    _createClass(VueWidgetBridge, [{
        key: 'initProps',

        /**
         * 初始化组件的属性
         *
         * @param  {Object} props - 对应的内容
         */
        value: function initProps(props) {
            if (!Util.isObject(props)) return;

            this.initialProps = props;
            this.prevProps = props;

            this.propsInited = true;
            if (this.onPropsInited && this.onPropsInited.length) {
                this.onPropsInited.forEach(function (fn) {
                    fn && fn(props);
                });
            }
        }

        /**
         * 校验启动条件,满足条件就启动
         */

    }, {
        key: 'wait4Start',
        value: function wait4Start() {
            var _this2 = this;

            if (this.isStarted) return;

            Promise.all([this.wait4Component(), this.wait4Router()]).then(function () {
                _this2.createWidgetStore();
            }).then(function () {
                render(_this2);
            });
        }

        /**
         * 获取组件的私有state
         *
         * @return {Object}
         */

    }, {
        key: 'getOwnState',
        value: function getOwnState() {
            var widgetId = this.widgetId;
            var store = this.store;
            var state = store.state || {};
            return state[StateEnums.PREFIX_WIDGET_OWN_STATE_KEY + widgetId] || {};
        }
    }, {
        key: 'createWidgetStore',
        value: function createWidgetStore() {
            var self = this;
            /*
                因为vue的特性，需要对存在的字段加入setter,getter,所以我们需要对那些不存在的字段做一个兼容
            */
            var declareProps = this.template.props || {};
            var tplProps = {};

            var defaultPropKeys = Util.isArray(declareProps) ? declareProps : Object.keys(declareProps);

            defaultPropKeys.forEach(function (propKey) {
                var prop = declareProps[propKey];
                if (!(Util.isObject(prop) && prop.default !== undefined)) {
                    tplProps[propKey] = null;
                    return true;
                }
                tplProps[propKey] = undefined;
            });

            var props = Util.extend({}, tplProps, this.initialProps);

            // 这里可以尝试注册自己的module,module名称就是
            this.supportor.registOwnModule(this.widgetId, {
                state: props,
                getters: _defineProperty({}, StateEnums.WIDGET_VUEX_GETTERS_PREFIX + self.widgetId, function (state, getters, rootState) {
                    return self.mapStateToProps(rootState);
                })
            });
        }

        /**
         * 获取组件的component-promise，目前主要用在vue-router中
         *
         * @return {Promise}
         */

    }, {
        key: 'wait4Component',
        value: function wait4Component() {
            var _this3 = this;

            if (!this.getComponentPromise) {
                /*
                目前需要等待两个状态,promise才能resolved
                1.widget.template
                2.widget.props
                */
                var self = this;
                this.getComponentPromise = new Promise(function (resolve) {
                    var after = Util.after(2, function () {
                        _this3.baseComponent = {
                            widgetId: _this3.widgetId,
                            components: {
                                'wrapped-element': self.template
                            },
                            computed: {
                                widgetProps: function widgetProps() {
                                    return this.$store.getters[StateEnums.WIDGET_VUEX_GETTERS_PREFIX + self.widgetId];
                                }
                            },
                            render: function render(h) {
                                var props = this.widgetProps;
                                return h('wrapped-element', {
                                    props: props
                                });
                            }
                        };
                        resolve(_this3.baseComponent);
                    });
                    _this3.registerOnPropsInitedListener(after);
                    _this3.registeronTemplateRegisterListener(after);
                });
            }
            return this.getComponentPromise;
        }
    }]);

    return VueWidgetBridge;
}(BaseWidgetBridge);

module.exports = VueWidgetBridge;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(12);
var Enums = __webpack_require__(0);
var RenderTypeEnums = Enums.renderType;
var WidgetEnums = Enums.widget;
var SupportorEnums = Enums.supportor;

var ReactSupportor = __webpack_require__(13);
var VueSupportor = __webpack_require__(14);

/**
 * 计算当前页面上的渲染配置
 *
 * @return {Object}
 */
function addupRenderType() {
    var configs = window[WidgetEnums.WIDGET_CONFIGS] || [];
    var react = 0;
    var vue = 0;

    configs.forEach(function (config) {
        var renderType = config.renderType;
        if (renderType == RenderTypeEnums.RENDER_TYPE_REACT) {
            react++;
        }
        if (renderType == RenderTypeEnums.RENDER_TYPE_VUE) {
            vue++;
        }
    });
    return {
        react: react,
        vue: vue
    };
}

/**
 * 初始化方法
 *
 * @return {Object}
 */
function init() {
    if (window[SupportorEnums.BROWSER_SUPPORTOR]) {
        console.warn('there are several different billund-supportor versions,please check.');
        return window[SupportorEnums.BROWSER_SUPPORTOR];
    }
    var renderTypeCounts = addupRenderType();
    var reactCount = renderTypeCounts.react;
    var vueCount = renderTypeCounts.vue;
    /*
    	判断vue和react的组件数量,来决定使用哪一个patch的supportor
    	1.两者数量都不为0的情况下,初始化较大的那个,并且给出警告
    	2.两者至少一个为0的情况下，初始化较大的那个，默认是react
     */
    var shouldUseReact = reactCount >= vueCount;
    if (reactCount && vueCount) {
        console.warn('The current page at the same time there are a variety of rendering types, we used ' + (shouldUseReact ? 'react-supportor' : 'vue-supportor'));
    }
    window[SupportorEnums.BROWSER_SUPPORTOR] = shouldUseReact ? new ReactSupportor() : new VueSupportor();
    return window[SupportorEnums.BROWSER_SUPPORTOR];
}

module.exports = init();

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * 展示dom
 *
 * @param  {HtmlElement} div - div元素
 */

function showDiv(div) {
    if (!div) {
        return;
    }
    if (div.style.display == 'none') {
        div.style.display = '';
    }
    if (getComputedStyle(div, '').getPropertyValue('display') == 'none') {
        div.style.display = 'block';
    }
}

/**
 * 隐藏dom
 *
 * @param  {HtmlElement} div - div元素
 */
function hideDiv(div) {
    if (!div) {
        return;
    }
    if (div.style.display != 'none') {
        div.style.display = 'none';
    }
    if (getComputedStyle(div, '').getPropertyValue('display') != 'none') {
        div.style.display = 'none';
    }
}

module.exports = {
    showDiv: showDiv,
    hideDiv: hideDiv
};

/***/ }),
/* 21 */
/***/ (function(module, exports) {

exports.defaults = {};

exports.set = function(name, value, options) {
  // Retrieve options and defaults
  var opts = options || {};
  var defaults = exports.defaults;

  // Apply default value for unspecified options
  var expires  = opts.expires  || defaults.expires;
  var domain   = opts.domain   || defaults.domain;
  var path     = opts.path     !== undefined ? opts.path     : (defaults.path !== undefined ? defaults.path : '/');
  var secure   = opts.secure   !== undefined ? opts.secure   : defaults.secure;
  var httponly = opts.httponly !== undefined ? opts.httponly : defaults.httponly;

  // Determine cookie expiration date
  // If succesful the result will be a valid Date, otherwise it will be an invalid Date or false(ish)
  var expDate = expires ? new Date(
      // in case expires is an integer, it should specify the number of days till the cookie expires
      typeof expires === 'number' ? new Date().getTime() + (expires * 864e5) :
      // else expires should be either a Date object or in a format recognized by Date.parse()
      expires
  ) : '';

  // Set cookie
  document.cookie = name.replace(/[^+#$&^`|]/g, encodeURIComponent)                // Encode cookie name
  .replace('(', '%28')
  .replace(')', '%29') +
  '=' + value.replace(/[^+#$&/:<-\[\]-}]/g, encodeURIComponent) +                  // Encode cookie value (RFC6265)
  (expDate && expDate.getTime() >= 0 ? ';expires=' + expDate.toUTCString() : '') + // Add expiration date
  (domain   ? ';domain=' + domain : '') +                                          // Add domain
  (path     ? ';path='   + path   : '') +                                          // Add path
  (secure   ? ';secure'           : '') +                                          // Add secure option
  (httponly ? ';httponly'         : '');                                           // Add httponly option
};

exports.get = function(name) {
  var cookies = document.cookie.split(';');

  // Iterate all cookies
  for(var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    var cookieLength = cookie.length;

    // Determine separator index ("name=value")
    var separatorIndex = cookie.indexOf('=');

    // IE<11 emits the equal sign when the cookie value is empty
    separatorIndex = separatorIndex < 0 ? cookieLength : separatorIndex;

    var cookie_name = decodeURIComponent(cookie.substring(0, separatorIndex).replace(/^\s+/, ''));

    // Return cookie value if the name matches
    if (cookie_name === name) {
      return decodeURIComponent(cookie.substring(separatorIndex + 1, cookieLength));
    }
  }

  // Return `null` as the cookie was not found
  return null;
};

exports.erase = function(name, options) {
  exports.set(name, '', {
    expires:  -1,
    domain:   options && options.domain,
    path:     options && options.path,
    secure:   0,
    httponly: 0}
  );
};

exports.all = function() {
  var all = {};
  var cookies = document.cookie.split(';');

  // Iterate all cookies
  for(var i = 0; i < cookies.length; i++) {
	  var cookie = cookies[i];
    var cookieLength = cookie.length;

	  // Determine separator index ("name=value")
	  var separatorIndex = cookie.indexOf('=');

	  // IE<11 emits the equal sign when the cookie value is empty
	  separatorIndex = separatorIndex < 0 ? cookieLength : separatorIndex;

    // add the cookie name and value to the `all` object
	  var cookie_name = decodeURIComponent(cookie.substring(0, separatorIndex).replace(/^\s+/, ''));
	  all[cookie_name] = decodeURIComponent(cookie.substring(separatorIndex + 1, cookieLength));
	}

  return all;
};


/***/ }),
/* 22 */
/***/ (function(module, exports) {


/**
 * slice() reference.
 */

var slice = Array.prototype.slice;

/**
 * Expose `co`.
 */

module.exports = co['default'] = co.co = co;

/**
 * Wrap the given generator `fn` into a
 * function that returns a promise.
 * This is a separate function so that
 * every `co()` call doesn't create a new,
 * unnecessary closure.
 *
 * @param {GeneratorFunction} fn
 * @return {Function}
 * @api public
 */

co.wrap = function (fn) {
  createPromise.__generatorFunction__ = fn;
  return createPromise;
  function createPromise() {
    return co.call(this, fn.apply(this, arguments));
  }
};

/**
 * Execute the generator function or a generator
 * and return a promise.
 *
 * @param {Function} fn
 * @return {Promise}
 * @api public
 */

function co(gen) {
  var ctx = this;
  var args = slice.call(arguments, 1)

  // we wrap everything in a promise to avoid promise chaining,
  // which leads to memory leak errors.
  // see https://github.com/tj/co/issues/180
  return new Promise(function(resolve, reject) {
    if (typeof gen === 'function') gen = gen.apply(ctx, args);
    if (!gen || typeof gen.next !== 'function') return resolve(gen);

    onFulfilled();

    /**
     * @param {Mixed} res
     * @return {Promise}
     * @api private
     */

    function onFulfilled(res) {
      var ret;
      try {
        ret = gen.next(res);
      } catch (e) {
        return reject(e);
      }
      next(ret);
    }

    /**
     * @param {Error} err
     * @return {Promise}
     * @api private
     */

    function onRejected(err) {
      var ret;
      try {
        ret = gen.throw(err);
      } catch (e) {
        return reject(e);
      }
      next(ret);
    }

    /**
     * Get the next value in the generator,
     * return a promise.
     *
     * @param {Object} ret
     * @return {Promise}
     * @api private
     */

    function next(ret) {
      if (ret.done) return resolve(ret.value);
      var value = toPromise.call(ctx, ret.value);
      if (value && isPromise(value)) return value.then(onFulfilled, onRejected);
      return onRejected(new TypeError('You may only yield a function, promise, generator, array, or object, '
        + 'but the following object was passed: "' + String(ret.value) + '"'));
    }
  });
}

/**
 * Convert a `yield`ed value into a promise.
 *
 * @param {Mixed} obj
 * @return {Promise}
 * @api private
 */

function toPromise(obj) {
  if (!obj) return obj;
  if (isPromise(obj)) return obj;
  if (isGeneratorFunction(obj) || isGenerator(obj)) return co.call(this, obj);
  if ('function' == typeof obj) return thunkToPromise.call(this, obj);
  if (Array.isArray(obj)) return arrayToPromise.call(this, obj);
  if (isObject(obj)) return objectToPromise.call(this, obj);
  return obj;
}

/**
 * Convert a thunk to a promise.
 *
 * @param {Function}
 * @return {Promise}
 * @api private
 */

function thunkToPromise(fn) {
  var ctx = this;
  return new Promise(function (resolve, reject) {
    fn.call(ctx, function (err, res) {
      if (err) return reject(err);
      if (arguments.length > 2) res = slice.call(arguments, 1);
      resolve(res);
    });
  });
}

/**
 * Convert an array of "yieldables" to a promise.
 * Uses `Promise.all()` internally.
 *
 * @param {Array} obj
 * @return {Promise}
 * @api private
 */

function arrayToPromise(obj) {
  return Promise.all(obj.map(toPromise, this));
}

/**
 * Convert an object of "yieldables" to a promise.
 * Uses `Promise.all()` internally.
 *
 * @param {Object} obj
 * @return {Promise}
 * @api private
 */

function objectToPromise(obj){
  var results = new obj.constructor();
  var keys = Object.keys(obj);
  var promises = [];
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var promise = toPromise.call(this, obj[key]);
    if (promise && isPromise(promise)) defer(promise, key);
    else results[key] = obj[key];
  }
  return Promise.all(promises).then(function () {
    return results;
  });

  function defer(promise, key) {
    // predefine the key in the result
    results[key] = undefined;
    promises.push(promise.then(function (res) {
      results[key] = res;
    }));
  }
}

/**
 * Check if `obj` is a promise.
 *
 * @param {Object} obj
 * @return {Boolean}
 * @api private
 */

function isPromise(obj) {
  return 'function' == typeof obj.then;
}

/**
 * Check if `obj` is a generator.
 *
 * @param {Mixed} obj
 * @return {Boolean}
 * @api private
 */

function isGenerator(obj) {
  return 'function' == typeof obj.next && 'function' == typeof obj.throw;
}

/**
 * Check if `obj` is a generator function.
 *
 * @param {Mixed} obj
 * @return {Boolean}
 * @api private
 */
function isGeneratorFunction(obj) {
  var constructor = obj.constructor;
  if (!constructor) return false;
  if ('GeneratorFunction' === constructor.name || 'GeneratorFunction' === constructor.displayName) return true;
  return isGenerator(constructor.prototype);
}

/**
 * Check for plain object.
 *
 * @param {Mixed} val
 * @return {Boolean}
 * @api private
 */

function isObject(val) {
  return Object == val.constructor;
}


/***/ }),
/* 23 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stringify = __webpack_require__(26);
var parse = __webpack_require__(25);
var formats = __webpack_require__(7);

module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(8);

var has = Object.prototype.hasOwnProperty;

var defaults = {
    allowDots: false,
    allowPrototypes: false,
    arrayLimit: 20,
    decoder: utils.decode,
    delimiter: '&',
    depth: 5,
    parameterLimit: 1000,
    plainObjects: false,
    strictNullHandling: false
};

var parseValues = function parseQueryStringValues(str, options) {
    var obj = {};
    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
    var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
    var parts = cleanStr.split(options.delimiter, limit);

    for (var i = 0; i < parts.length; ++i) {
        var part = parts[i];

        var bracketEqualsPos = part.indexOf(']=');
        var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;

        var key, val;
        if (pos === -1) {
            key = options.decoder(part, defaults.decoder);
            val = options.strictNullHandling ? null : '';
        } else {
            key = options.decoder(part.slice(0, pos), defaults.decoder);
            val = options.decoder(part.slice(pos + 1), defaults.decoder);
        }
        if (has.call(obj, key)) {
            obj[key] = [].concat(obj[key]).concat(val);
        } else {
            obj[key] = val;
        }
    }

    return obj;
};

var parseObject = function (chain, val, options) {
    var leaf = val;

    for (var i = chain.length - 1; i >= 0; --i) {
        var obj;
        var root = chain[i];

        if (root === '[]') {
            obj = [];
            obj = obj.concat(leaf);
        } else {
            obj = options.plainObjects ? Object.create(null) : {};
            var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
            var index = parseInt(cleanRoot, 10);
            if (
                !isNaN(index)
                && root !== cleanRoot
                && String(index) === cleanRoot
                && index >= 0
                && (options.parseArrays && index <= options.arrayLimit)
            ) {
                obj = [];
                obj[index] = leaf;
            } else {
                obj[cleanRoot] = leaf;
            }
        }

        leaf = obj;
    }

    return leaf;
};

var parseKeys = function parseQueryStringKeys(givenKey, val, options) {
    if (!givenKey) {
        return;
    }

    // Transform dot notation to bracket notation
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;

    // The regex chunks

    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;

    // Get the parent

    var segment = brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;

    // Stash the parent if it exists

    var keys = [];
    if (parent) {
        // If we aren't using plain objects, optionally prefix keys
        // that would overwrite object prototype properties
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) {
                return;
            }
        }

        keys.push(parent);
    }

    // Loop through children appending to the array until we hit depth

    var i = 0;
    while ((segment = child.exec(key)) !== null && i < options.depth) {
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
            if (!options.allowPrototypes) {
                return;
            }
        }
        keys.push(segment[1]);
    }

    // If there's a remainder, just add whatever is left

    if (segment) {
        keys.push('[' + key.slice(segment.index) + ']');
    }

    return parseObject(keys, val, options);
};

module.exports = function (str, opts) {
    var options = opts ? utils.assign({}, opts) : {};

    if (options.decoder !== null && options.decoder !== undefined && typeof options.decoder !== 'function') {
        throw new TypeError('Decoder has to be a function.');
    }

    options.ignoreQueryPrefix = options.ignoreQueryPrefix === true;
    options.delimiter = typeof options.delimiter === 'string' || utils.isRegExp(options.delimiter) ? options.delimiter : defaults.delimiter;
    options.depth = typeof options.depth === 'number' ? options.depth : defaults.depth;
    options.arrayLimit = typeof options.arrayLimit === 'number' ? options.arrayLimit : defaults.arrayLimit;
    options.parseArrays = options.parseArrays !== false;
    options.decoder = typeof options.decoder === 'function' ? options.decoder : defaults.decoder;
    options.allowDots = typeof options.allowDots === 'boolean' ? options.allowDots : defaults.allowDots;
    options.plainObjects = typeof options.plainObjects === 'boolean' ? options.plainObjects : defaults.plainObjects;
    options.allowPrototypes = typeof options.allowPrototypes === 'boolean' ? options.allowPrototypes : defaults.allowPrototypes;
    options.parameterLimit = typeof options.parameterLimit === 'number' ? options.parameterLimit : defaults.parameterLimit;
    options.strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults.strictNullHandling;

    if (str === '' || str === null || typeof str === 'undefined') {
        return options.plainObjects ? Object.create(null) : {};
    }

    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
    var obj = options.plainObjects ? Object.create(null) : {};

    // Iterate over the keys and setup the new object

    var keys = Object.keys(tempObj);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options);
        obj = utils.merge(obj, newObj, options);
    }

    return utils.compact(obj);
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(8);
var formats = __webpack_require__(7);

var arrayPrefixGenerators = {
    brackets: function brackets(prefix) { // eslint-disable-line func-name-matching
        return prefix + '[]';
    },
    indices: function indices(prefix, key) { // eslint-disable-line func-name-matching
        return prefix + '[' + key + ']';
    },
    repeat: function repeat(prefix) { // eslint-disable-line func-name-matching
        return prefix;
    }
};

var toISO = Date.prototype.toISOString;

var defaults = {
    delimiter: '&',
    encode: true,
    encoder: utils.encode,
    encodeValuesOnly: false,
    serializeDate: function serializeDate(date) { // eslint-disable-line func-name-matching
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};

var stringify = function stringify( // eslint-disable-line func-name-matching
    object,
    prefix,
    generateArrayPrefix,
    strictNullHandling,
    skipNulls,
    encoder,
    filter,
    sort,
    allowDots,
    serializeDate,
    formatter,
    encodeValuesOnly
) {
    var obj = object;
    if (typeof filter === 'function') {
        obj = filter(prefix, obj);
    } else if (obj instanceof Date) {
        obj = serializeDate(obj);
    } else if (obj === null) {
        if (strictNullHandling) {
            return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder) : prefix;
        }

        obj = '';
    }

    if (typeof obj === 'string' || typeof obj === 'number' || typeof obj === 'boolean' || utils.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder);
            return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder))];
        }
        return [formatter(prefix) + '=' + formatter(String(obj))];
    }

    var values = [];

    if (typeof obj === 'undefined') {
        return values;
    }

    var objKeys;
    if (Array.isArray(filter)) {
        objKeys = filter;
    } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (skipNulls && obj[key] === null) {
            continue;
        }

        if (Array.isArray(obj)) {
            values = values.concat(stringify(
                obj[key],
                generateArrayPrefix(prefix, key),
                generateArrayPrefix,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                formatter,
                encodeValuesOnly
            ));
        } else {
            values = values.concat(stringify(
                obj[key],
                prefix + (allowDots ? '.' + key : '[' + key + ']'),
                generateArrayPrefix,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                formatter,
                encodeValuesOnly
            ));
        }
    }

    return values;
};

module.exports = function (object, opts) {
    var obj = object;
    var options = opts ? utils.assign({}, opts) : {};

    if (options.encoder !== null && options.encoder !== undefined && typeof options.encoder !== 'function') {
        throw new TypeError('Encoder has to be a function.');
    }

    var delimiter = typeof options.delimiter === 'undefined' ? defaults.delimiter : options.delimiter;
    var strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults.strictNullHandling;
    var skipNulls = typeof options.skipNulls === 'boolean' ? options.skipNulls : defaults.skipNulls;
    var encode = typeof options.encode === 'boolean' ? options.encode : defaults.encode;
    var encoder = typeof options.encoder === 'function' ? options.encoder : defaults.encoder;
    var sort = typeof options.sort === 'function' ? options.sort : null;
    var allowDots = typeof options.allowDots === 'undefined' ? false : options.allowDots;
    var serializeDate = typeof options.serializeDate === 'function' ? options.serializeDate : defaults.serializeDate;
    var encodeValuesOnly = typeof options.encodeValuesOnly === 'boolean' ? options.encodeValuesOnly : defaults.encodeValuesOnly;
    if (typeof options.format === 'undefined') {
        options.format = formats['default'];
    } else if (!Object.prototype.hasOwnProperty.call(formats.formatters, options.format)) {
        throw new TypeError('Unknown format option provided.');
    }
    var formatter = formats.formatters[options.format];
    var objKeys;
    var filter;

    if (typeof options.filter === 'function') {
        filter = options.filter;
        obj = filter('', obj);
    } else if (Array.isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }

    var keys = [];

    if (typeof obj !== 'object' || obj === null) {
        return '';
    }

    var arrayFormat;
    if (options.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = options.arrayFormat;
    } else if ('indices' in options) {
        arrayFormat = options.indices ? 'indices' : 'repeat';
    } else {
        arrayFormat = 'indices';
    }

    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];

    if (!objKeys) {
        objKeys = Object.keys(obj);
    }

    if (sort) {
        objKeys.sort(sort);
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (skipNulls && obj[key] === null) {
            continue;
        }

        keys = keys.concat(stringify(
            obj[key],
            key,
            generateArrayPrefix,
            strictNullHandling,
            skipNulls,
            encode ? encoder : null,
            filter,
            sort,
            allowDots,
            serializeDate,
            formatter,
            encodeValuesOnly
        ));
    }

    var joined = keys.join(delimiter);
    var prefix = options.addQueryPrefix === true ? '?' : '';

    return joined.length > 0 ? prefix + joined : '';
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g =
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this;

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(28);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    if (typeof global.process === "object" && global.process.domain) {
      invoke = global.process.domain.bind(invoke);
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // Among the various tricks for obtaining a reference to the global
  // object, this seems to be the most reliable technique that does not
  // use indirect eval (which violates Content Security Policy).
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this
);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_29__;

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_30__;

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_31__;

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_32__;

/***/ }),
/* 33 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })
/******/ ]);
});