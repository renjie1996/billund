'use strict';

require('es6-promise').polyfill();
const Vue = require('vue');
const Vuex = require('vuex');
const VueRouter = require('vue-router');
const BaseSupportor = require('./basesupportor.js');
const Enums = require('billund-enums');
const WidgetEnums = Enums.widget;
const StateEnums = Enums.state;
const SupportorEnums = Enums.supportor;
const Util = require('../util/index.js');

/**
   重刷字段,以此来让整个store更新,目的是在onStart方法里 我们会将mapStateToProps方法注册,然后触发更新重新渲染一次，
   以防有漏过什么事件
 */
const KEY_REFRESH_COUNT = 'refreshCount';

/*
    注册api关联
 */
const API_ALIAS_CONFIG = {
    registerOwnModule: 'registOwnModule'
};

/**
 * vue的前端支持组件
 */
class VueSupportor extends BaseSupportor {
    constructor() {
        super();
        this.storeConfig = null;
        /*
            为什么放在这里执行？因为后面两项方法都依赖store的初始化
         */
        this.useVuePlugins();
        this.initStore();
        this.parseWidgetConfigs();
        this.initWidgetProps();
        this.initExtraFunctions();

        this.tryDoSthDependentOnContext();
    }

    useVuePlugins() {
        Vue.use(Vuex);
        Vue.use(VueRouter);
    }

    aliasApi() {
        super.aliasApi();
        Object.keys(API_ALIAS_CONFIG).forEach((newApi) => {
            const apiName = API_ALIAS_CONFIG[newApi];
            this[newApi] = this[apiName];
        });
    }

    /**
     * 初始化vuex的store
     */
    initStore() {
        const initialState = Util.extend({}, this.initialState, {
            [KEY_REFRESH_COUNT]: 0
        });
        /**
         * 构建基础的module对象
         *
         * @return {Object}
         */
        function buildInitialModules() {
            const ret = {};
            const configs = window[WidgetEnums.WIDGET_CONFIGS] || [];
            configs.forEach((config) => {
                ret[`${StateEnums.PREFIX_WIDGET_OWN_STATE_KEY}${config.id}`] = {};
            });
            return ret;
        }

        const storeConfig = this.storeConfig = {
            modules: buildInitialModules(),
            actions: {
                [StateEnums.LEGO_ACTION_TYPE_REFRESH](context) {
                    context.commit(StateEnums.LEGO_ACTION_TYPE_REFRESH);
                }
            },
            mutations: {
                [StateEnums.LEGO_ACTION_TYPE_REFRESH](state) {
                    state[KEY_REFRESH_COUNT]++;
                }
            }
        };

        this.store = new Vuex.Store(Util.extend({}, storeConfig, {
            state: initialState
        }));
        this.doSthTricky();
    }

    /**
     * 替换原来的hotUpdate的实现,因为需要cache内容
     */
    doSthTricky() {
        this.store.legoOriginalHotUpdate = this.store.hotUpdate;
        this.store.hotUpdate = this.hotUpdate.bind(this);
    }

    /**
     * 提供原生的向外的暴露方法
     */
    initExtraFunctions() {
        /*
         * 我们将dispatch直接暴露出来，因为好像没有什么好做的，action可能会返回promise,导致我们无法比较mutation是否成功
         * 目前根据webpack的打包方式，也不会导致js分批次到达
         */
        this.dispatch = this.store.dispatch;
    }

    /**
     * 向外层的vuex注册module,注意因为我们存在组件嵌套关系，所以可能有多个module.需要extend
     *
     * @param  {String} id - 组件id
     * @param  {Object} newModule - module内容
     */
    registOwnModule(id, newModule) {
        if (!Util.isObject(newModule)) return;

        const moduleId = StateEnums.PREFIX_WIDGET_OWN_STATE_KEY + id;
        const modules = this.storeConfig.modules || {};
        const prevModule = modules[moduleId] ? modules[moduleId] : {};

        const moduleState = Util.extend({}, prevModule.state, newModule.state);
        /*
            action,mutations,getter用来register的时候只要加新的
            但是cache时需要拿完整的数据
         */
        const toInsertModule = {
            state: moduleState,
            actions: newModule.actions,
            mutations: newModule.mutations,
            getters: newModule.getters
        };
        const toStoredModule = {
            state: moduleState,
            actions: Util.extend({}, prevModule.mutations, newModule.mutations),
            mutations: Util.extend({}, prevModule.mutations, newModule.mutations),
            getters: Util.extend({}, prevModule.getters, newModule.getters)
        };

        this.storeConfig.modules = Util.extend({}, modules, {
            [moduleId]: toStoredModule
        });

        this.store.registerModule(moduleId, toInsertModule);
    }

    /**
     * 注册store配置,包括actions,mutations,getters
     *
     * @param  {Object} config - 注册对应的mutation
     */
    [SupportorEnums.BROWSER_SUPPORTOR_REGIST_STORE_CONFIG](config) {
        this.hotUpdate(config);
    }

    /**
     * 注册router配置
     * important!!! 如果有这个方法，需要提前预设！
     *
     * @param {Object} routerConfig - 配置
     */
    [SupportorEnums.BROWSER_SUPPORTOR_REGISTER_ROUTER_CONFIG](routerConfig) {
        /*
            1.这个api会被loader在Supportor初始化后调用，可以放心使用id2PathsMapping
            2.因为目前在我们组件的设计中，每个组件是一个独立的element tree，所以需要为每一个组件来划分出router配置
         */
        if (!(routerConfig && routerConfig.routes && routerConfig.routes.length)) return;

        const routes = routerConfig.routes;
        const allPaths = routes.map((route) => {
            return route.path;
        });

        // 兼容rootPath
        const rootPathIndex = allPaths.findIndex((p) => {
            return p === '/';
        });
        if (rootPathIndex === -1) {
            allPaths.push({
                path: '/'
            });
        }

        Object.keys(this.id2PathsMapping).forEach((id) => {
            const widgetBridge = this.getWidgetBridgeById(id);
            if (!widgetBridge) return;

            // 没有设置的话，代表默认首页出现
            const paths = this.id2PathsMapping[id] || ['/'];
            const rs = routes.map((route) => {
                return Object.assign({}, route, {
                    shouldShow: paths.indexOf(route.path) !== -1
                });
            });

            widgetBridge.initRouterConfig(Object.assign({}, routerConfig, {
                routes: rs
            }));
        });
    }

    /**
     * 页面级别注册自己的配置,包括actions,mutations,getters
     *
     * @param  {Object} config - 注册对应的mutation
     */
    hotUpdate(config) {
        if (!Util.isObject(config)) return;

        const prevOptions = this.storeConfig || {};
        const prevActions = prevOptions.actions || {};
        const prevMutations = prevOptions.mutations || {};
        const prevGetters = prevOptions.getters || {};

        // mixin,根节点的action和mutation与getters不可重复，module的允许重复
        const newActions = Util.extend({}, prevActions, config.actions);
        const newMutations = Util.extend({}, prevMutations, config.mutations);
        const newGetters = Util.extend({}, prevGetters, config.getters);

        const newStoreConfig = {
            actions: newActions,
            mutations: newMutations,
            getters: newGetters
        };

        this.storeConfig = Util.extend({}, this.storeConfig, newStoreConfig);

        /*
            收集getters
         */
        const collectedGetters = {};
        const modules = this.storeConfig.modules || {};
        Object.keys(modules).forEach((moduleId) => {
            const moduleInfo = modules[moduleId];
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
    getState() {
        if (!this.store) return null;

        return this.store.state;
    }

    /**
     * 注册store变更数据监听
     *
     * @param  {Function} onChangeListener - 改变时的监听,参数分别是mutation与state
     */
    registStoreOnChangeListener(onChangeListener) {
        if (!this.store) return;

        const store = this.store;
        store.subscribe(onChangeListener);
    }
}

module.exports = VueSupportor;