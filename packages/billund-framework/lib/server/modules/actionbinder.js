'use strict';

const _ = require('lodash');
const legoUtils = require('billund-utils');
const router = require('koa-router')();
let routerIns = null;

/**
 * 绑定对应的action到routers中
 *
 * @param  {Object} config - 对应的配置项目,字段如下:
 * {
 *      actionDir: [String], // action的文件夹名称
 *      nameRegex: [Regex|String] // 名称的正则
 *      fallbackUrl: [String] // 降级的url
 * }
 */
function bindActionRouter(config) {
    if (!(config && config.actionDir)) throw new Error('missing actionDir config in lego framework');

    const actions = legoUtils.common.getFilteredFiles(config.actionDir, {
        nameRegex: config.nameRegex
    });

    const url2Path = {};

    /**
     * 向router中注册url & action
     *
     * @param  {String} url - router的路径
     * @param  {GeneratorFunction} action - 执行函数
     */
    function registUrlToAction(url, action) {
        if (!(url && action)) return;

        if (url2Path[url]) throw new Error(`duplicate define router url: ${url}`);

        url2Path[url] = true;
        router.register(url, ['get', 'post'], [action]);
    }

    actions.forEach((action) => {
        let actionConfig = null;
        try {
            actionConfig = require(action);
        } catch (e) {
            console.error(e);
            return true;
        }

        // 如果没有要的属性,就过滤掉
        if (!(actionConfig && actionConfig.url)) return true;

        const urls = _.isArray(actionConfig.url) ? actionConfig.url : [actionConfig.url];

        urls.forEach((url) => {
            registUrlToAction(url, actionConfig.action);
        });
    });
    routerIns = router.routes();
}

module.exports = {
    router: routerIns,
    bindActionRouter
};