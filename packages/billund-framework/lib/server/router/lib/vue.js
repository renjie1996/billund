'use strict';

const Vue = require('vue/dist/vue.common.js');
const VueRouter = require('vue-router');
Vue.use(VueRouter);

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
        widgets.forEach((widget) => {
            // 没有设置的话，代表默认首页出现
            const paths = widgets.paths || ['/'];
            if (paths.indexOf(path) !== -1) {
                route.components[widget.id] = true;
            }
        });
    });
    return routerConfig;
}

module.exports = {
    createRouter
};