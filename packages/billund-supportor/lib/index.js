'use strict';

require('./common/polyfill.js');
const Enums = require('billund-enums');
const RenderTypeEnums = Enums.renderType;
const WidgetEnums = Enums.widget;
const SupportorEnums = Enums.supportor;

const ReactSupportor = require('./supportor/reactsupportor.js');
const VueSupportor = require('./supportor/vuesupportor.js');

/**
 * 计算当前页面上的渲染配置
 *
 * @return {Object}
 */
function addupRenderType() {
    const configs = window[WidgetEnums.WIDGET_CONFIGS] || [];
    let react = 0;
    let vue = 0;

    configs.forEach((config) => {
        const renderType = config.renderType;
        if (renderType == RenderTypeEnums.RENDER_TYPE_REACT) {
            react++;
        }
        if (renderType == RenderTypeEnums.RENDER_TYPE_VUE) {
            vue++;
        }
    });
    return {
        react,
        vue
    };
}

/**
 * 初始化方法
 *
 * @return {Object}
 */
function init() {
    if (window[SupportorEnums.BROWSER_SUPPORTOR]) {
        console.warn(`there are several different billund-supportor versions,please check.`);
        return window[SupportorEnums.BROWSER_SUPPORTOR];
    }
    const renderTypeCounts = addupRenderType();
    const reactCount = renderTypeCounts.react;
    const vueCount = renderTypeCounts.vue;
    /*
    	判断vue和react的组件数量,来决定使用哪一个patch的supportor
    	1.两者数量都不为0的情况下,初始化较大的那个,并且给出警告
    	2.两者至少一个为0的情况下，初始化较大的那个，默认是react
     */
    const shouldUseReact = reactCount >= vueCount;
    if (reactCount && vueCount) {
        console.warn(`The current page at the same time there are a variety of rendering types, we used ${shouldUseReact ? 'react-supportor' : 'vue-supportor'}`);
    }
    window[SupportorEnums.BROWSER_SUPPORTOR] = shouldUseReact ? new ReactSupportor() : new VueSupportor();
    return window[SupportorEnums.BROWSER_SUPPORTOR];
}

module.exports = init();
