'use strict';

const _ = require('lodash');
const Vue = require('vue/dist/vue.common.js');
const Vuex = require('vuex');
Vue.use(Vuex);

const Enums = require('billund-enums');
const StateEnums = Enums.state;

/**
 * 创建store
 *
 * @param  {Object} config - 配置
 * @param  {Array} widgets - 对应的重要组件
 * @return {Object}
 */
function createStore(config, widgets) {
    const storeData = config.storeData || {};
    const storeConfig = config.storeConfig || {};

    const modules = {};
    (widgets || []).forEach((widget) => {
        modules[`${StateEnums.PREFIX_WIDGET_OWN_STATE_KEY}${widget.id}`] = {};
    });

    return new Vuex.Store(_.extend({}, storeConfig, {
        state: storeData,
        modules
    }));
}

module.exports = {
    createStore
};
