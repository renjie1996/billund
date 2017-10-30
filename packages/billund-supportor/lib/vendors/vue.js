'use strict';

require('es6-promise').polyfill();
import vue from 'vue/dist/vue.common.js';
import vuex from 'vuex';
import vueRouter from 'vue-router';
window['Vue'] = window['lego-vue'] = vue;
window['Vuex'] = window['lego-vuex'] = vuex;
window['VueRouter'] = window['lego-vue-router'] = vueRouter;
