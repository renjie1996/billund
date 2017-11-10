'use strict';

const actionBinder = require('./modules/actionbinder.js');
const widgetsPool = require('./modules/widgetspool.js');
const worker = require('./html/index.js');

/**
 * 初始化函数
 *
 * @param  {Object} config - 初始化配置,字段如下:
 * {
 * 		actionDir: [String], // action的文件夹名称
 * 		actionNameRegex: [Regex|String], // action名称的正则
 *      widgetDir: [String], // widget的文件夹名称
 *      widgetNameRegex: [Regex|String] // 名称的正则
 *      supportorPath: [String], // 支持组件路径
 *      vendors: [Object], // dll文件的路径(取决于你自己的解析方式),一般会有react|vue两个字段
 *      renderPlugins: [Object] // 渲染插件,一般会有header和body两个字段,对应不同的位置
 * }
 * @return {GenerateFunction}
 */
function init(config) {
    actionBinder.bindActionRouter({
        actionDir: config.actionDir,
        nameRegex: config.actionNameRegex
    });
    widgetsPool.bindWidgets({
        widgetDir: config.widgetDir,
        nameRegex: config.widgetNameRegex
    });
    worker.init(config);

    /**
     * 判断当前的处理action是否是lego处理
     *
     * @param  {Object}  context - 上下文对象
     * @return {Boolean}
     */
    function isLegoType(context) {
        return context && context.legoConfig;
    }

    /**
     * lego的核心处理方法入口
     *
     * @param {GenerateFunction} next
     */
    function* doRender(next) {
        try {
            yield next;
            if (!isLegoType(this)) return;

            // 真正的执行方法
            yield worker.execute(this);
        } catch (e) {
            /*
            	lego并不真正的处理错误,而是继续向外抛,直到有人处理
             */
            console.error(`lego didn't deal this error,please confirm it's dealed by outside.
            				${e.stack}`);
            throw e;
        }
    }
    return function* combineLego(next) {
        yield doRender.call(this, actionBinder.router.call(this, next));
    };
}

module.exports = {
    init,
    updateWidgets: widgetsPool.updateWidgets
};
