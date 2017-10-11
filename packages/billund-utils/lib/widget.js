'use strict';

const _ = require('lodash');

/**
 * 提取重要的组件
 *
 * @param  {Array} widgets - 组件列表,每一个元素需要有如下字段
 * {
 *      name: [String], // 组件的名称
 *      weight: [Number] // 组件权重,不是必要的
 * }
 * @return {[type]}          [description]
 */
function extractImportantWidgets(widgets) {
    widgets = widgets || [];
    const importantWidgets = _.filter(widgets, (widget) => {
        return parseFloat(widget.weight) > 0;
    });
    // 接着,根据weight对widgets进行分组
    const weight2Widgets = _.groupBy(importantWidgets, (widget) => {
        return widget.weight;
    });

    const weights = Object.keys(weight2Widgets);
    const maxWeight = _.maxBy(weights, (weight) => {
        return parseFloat(weight);
    });

    let mostImportantWidgets = weight2Widgets[maxWeight];
    // 如果没有最大权重模块,默认就是全部组件
    if (!(mostImportantWidgets && mostImportantWidgets.length)) {
        mostImportantWidgets = widgets.slice(0, widgets.length);
    }
    return mostImportantWidgets;
}

module.exports = {
    extractImportantWidgets
};