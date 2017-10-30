(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
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