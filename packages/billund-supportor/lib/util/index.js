'use strict';

const Util = require('./dom.js');

function extend(obj) {
    let args = Array.prototype.slice.call(arguments, 1);
    args.forEach((source) => {
        if (source) {
            for (let prop in source) {
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
    let nativeKeys = Object.keys;
    if (nativeKeys) {
        return nativeKeys(obj);
    }

    let keyArr = [];
    for (let key in obj)
        if (has(obj, key)) {
            keyArr.push(key);
        }
    return keyArr;
}

function isObject(obj) {
    let type = typeof obj;
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
    return function() {
        if (--n < 1) {
            return func.apply(this, arguments);
        }
    };
}

const isArray = Array.isArray || function(obj) {
    return Object.prototype.toString.call(obj) == '[object Array]';
};

function isFunction(obj) {
    return obj && (Object.prototype.toString.call(obj) == '[object Function]');
}

function removeDom(dom) {
    if (!dom) {
        return;
    }
    if (dom.parentNode != null) {
        dom.parentNode.removeChild(dom);
    }
}

let addEventListener = (function() {
    let _events = document.addEventListener ? 'addEventListener' : 'attachEvent';
    return function(el, type, fn) {
        el[_events]((document.addEventListener ? '' : 'on') + type, fn);
    };
})();

let removeEventListener = (function() {
    let _events = document.removeEventListener ? 'removeEventListener' : 'detachEvent';
    return function(el, type, fn) {
        el[_events](type, fn);
    };
})();

/**
 * 初始化getComputedStyle方法
 */
function initGetComputedStyle() {
    try {
        getComputedStyle(undefined);
    } catch (e) {
        let nativeGetComputedStyle = getComputedStyle;
        window.getComputedStyle = function(element) {
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
    let klass = node.className;
    let svg = klass && klass.baseVal !== undefined;
    if (value === undefined) {
        return svg ? klass.baseVal : klass;
    }
    svg ? (klass.baseVal = value) : (node.className = value);
}

/**
 * 简单版的增加className方法
 *
 * @param  {HtmlElement} node - html节点
 * @param  {String} value - 设值
 */
function addClass(node, value) {
    let originCls = className(node);
    // 直接加入,不判断hasClass
    className(node, originCls + ' ' + value);
}

module.exports = {
    extend,
    has,
    keys,
    isObject,
    isString,
    isFunction,
    isArray,
    after,
    showDiv: Util.showDiv,
    hideDiv: Util.hideDiv,
    removeDom,
    addEventListener,
    removeEventListener,
    initGetComputedStyle,
    addClass
};