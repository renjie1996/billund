'use strict';

const isDev = (process.env.LEGO_ENV === 'development' || process.env.BILLUND_ENV === 'development');

const debug = require('debug');
const log = debug('billund-vue-router:error');
const compareVersions = require('compare-versions');
const Vue = require('vue/dist/vue.common.js');
const VueRouter = require('vue-router');
Vue.use(VueRouter);

const VueRender = require('../../render/lib/vue.js');

function normalizeBase(base) {
    // make sure there's the starting slash
    if (base.charAt(0) !== '/') {
        base = '/' + base;
    }
    // remove trailing slash
    return base.replace(/\/$/, '');
}

/**
 * 创建对应的vue-router实例
 *
 * @param  {Object} context - koa上下文
 * @param  {Object} config - 配置
 * @param  {Array} widgets - 对应的重要组件
 * @return {Object} router实例
 */
function createRouter(context, config, widgets) {
    if (!config.routerConfig) return null;

    const routerConfig = config.routerConfig;
    if (!(routerConfig.routes && routerConfig.routes.length)) return null;

    const routes = routerConfig.routes;
    const rootPathIndex = routes.findIndex((route) => {
        return route.path === '/';
    });
    if (rootPathIndex === -1) {
        routes.push({
            path: '/'
        });
    }

    routes.forEach((route) => {
        route.components = route.components || {};

        const path = route.path;
        const props = route.props;
        if (props) {
            route.props = {};
            if (isDev && (compareVersions(Vue.version, '2.4.0') !== 1)) {
                log(`error: for vue version below 2.4.0 so that you can't use route prop`);
            }
        }
        widgets.forEach((widget) => {
            // 没有设置的话，代表默认首页出现
            const paths = widget.paths || ['/'];
            if (paths.indexOf(path) !== -1) {
                route.components[widget.id] = VueRender.getBaseComponent(widget);
                if (props) {
                    route.props[widget.id] = props;
                }
            } else {
                route.components[widget.id] = VueRender.getEmptyComponent();
            }
        });
    });
    const router = new VueRouter(routerConfig);

    let pushUrl = '/';
    if (routerConfig.mode === 'history') {
        pushUrl = context.url;
        if (routerConfig.base) {
            pushUrl = pushUrl.replace(normalizeBase(routerConfig.base), '');
        }
        pushUrl = pushUrl || '/';
    }
    router.pushUrl = pushUrl;
    return router;
}

module.exports = {
    createRouter
};