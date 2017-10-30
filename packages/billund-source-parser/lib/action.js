'use strict';

const babylon = require('babylon');
const traverse = require('babel-traverse').default;
const babelTypes = require('babel-types');

/**
 * 抓取代码中的组件内容
 *
 * @param  {String} source - 源代码
 * @param  {Object} state - 状态对象,有如下几个字段:
 * {
 *     widgetNames: [Array] // 对应文件所在的文件夹名称
 * }
 * @return {Array}
 */
function extractWidgetInfos(source, state) {
    state = state || {};
    const widgetNames = state.widgetNames;
    if (!(widgetNames && widgetNames.length)) {
        console.error(`missing widgetNames params in action source parser.`);
        return [];
    }
    const collectInfos = [];
    /*
        进行ast解析，然后进行遍历,寻找有类似此类的配置
        {
            name: [String][required], // 组件的名称
            weight: [Number][optional] // 组件的权重
        }
     */
    const ast = babylon.parse(source);
    traverse(ast, {
        ObjectExpression(path) {
            const properties = path.node.properties || [];
            const nameProperty = properties.find((property) => {
                return property.key.name === 'name' || property.key.value === 'name';
            });
            if (!nameProperty) return;

            const weightProperty = properties.find((property) => {
                return property.key.name === 'weight' || property.key.value === 'weight';
            });
            const weight = weightProperty ? weightProperty.value.value : 0;
            collectInfos.push({
                name: nameProperty.value.value,
                weight
            });
        }
    });
    // 开始过滤,需要确保name都在weightNames中存在,因为有错误抓取的可能性
    return collectInfos.filter((obj) => {
        return widgetNames.indexOf(obj.name) != -1;
    });
}

/**
 * 从properties中抓取actionPath的值
 *
 * @param  {Array} properties - 属性队列
 * @return {Array}
 */
function extractActionPathFromProperties(properties) {
    const urlProperty = properties.find((property) => {
        return property.key.name === 'url';
    });
    if (!urlProperty) return [];
    /*
        目前对value有多种类型支持
        1: String
        2: Array
     */
    const value = urlProperty.value;
    const isStringValue = babelTypes.isLiteral(value) || babelTypes.isStringLiteral(value);
    const isArrayValue = babelTypes.isArrayExpression(value);
    if (!(isStringValue || isArrayValue)) return [];

    if (isStringValue) {
        return [value.value];
    } else {
        return (value.elements || []).map((element) => {
            if (!element) return '';
            if (!(babelTypes.isLiteral(element) || babelTypes.isStringLiteral(element))) return '';

            return element.value;
        }).filter((val) => {
            return !!val;
        });
    }
}

/**
 * 抓取action的路径
 *
 * @param  {String} source - 源代码
 * @param  {Object} state - 状态对象,有如下几个字段:
 * {
 *
 * }
 * @return {Array}
 */
function extractActionPath(source, state) {
    if (!source) return '';

    const ast = babylon.parse(source);
    let actionPath = [];
    traverse(ast, {
        MemberExpression(nodePath) {
            const isModuleExports = nodePath.node.object.name == 'module' && nodePath.node.property.name == 'exports';
            if (!isModuleExports) return;

            const parentPath = nodePath.findParent((pa) => pa.isAssignmentExpression());
            const exportsObj = parentPath.node.right;
            if (!babelTypes.isObjectExpression(exportsObj)) throw new Error('sorry, for lego action please export an object.');

            const properties = exportsObj.properties || [];
            actionPath = extractActionPathFromProperties(properties);
        },
        ExportDefaultDeclaration(nodePath) {
            const properties = nodePath.node.properties || [];
            actionPath = extractActionPathFromProperties(properties);
        }
    });

    return actionPath;
}

/**
 * 抓取store的配置
 *
 * @param  {String} source - 源代码
 * @param  {Object} state - 状态对象,有如下几个字段:
 * {
 *
 * }
 * @return {String}
 */
function extractStoreConfig(source, state) {
    if (!source) return '';

    const ast = babylon.parse(source);
    let storeConfigStr = '';

    traverse(ast, {
        ObjectExpression(path) {
            const properties = path.node.properties || [];
            const configProperty = properties.find((property) => {
                return property.key.name === 'storeConfig' || property.key.value === 'storeConfig';
            });
            if (!configProperty) return;

            const value = configProperty.value;
            storeConfigStr = source.substring(value.start, value.end);
        }
    });

    return storeConfigStr;
}

/**
 * 抓取router的配置
 *
 * @param  {String} source - 源代码
 * @param  {Object} state - 状态对象,有如下几个字段:
 * {
 *
 * }
 * @return {String}
 */
function extractRouterConfig(source, state) {
    if (!source) return '';

    const ast = babylon.parse(source);
    let routerConfigStr = '';

    traverse(ast, {
        ObjectExpression(path) {
            const properties = path.node.properties || [];
            const configProperty = properties.find((property) => {
                return property.key.name === 'routerConfig' || property.key.value === 'routerConfig';
            });
            if (!configProperty) return;

            const value = configProperty.value;
            routerConfigStr = source.substring(value.start, value.end);
        }
    });

    return routerConfigStr;
}

/**
 * 抓取代码中的静态资源内容
 *
 * @param  {String} source - 源代码
 * @param  {Object} state - 状态对象,有如下几个字段:
 * {
 *    
 * }
 * @return {Array}
 */
function extractStaticResources(source, state) {
    if (!source) return [];

    const ast = babylon.parse(source);
    const rets = [];
    /*
        目前做的简单一些,判断是带有entry字段的对象都进行打包
        因为webpack外部还要进行判断
        还需要进行调用unique，通过shadowequal
     */
    traverse(ast, {
        ObjectExpression(path) {
            const properties = path.node.properties || [];
            const entryProperty = properties.find((property) => {
                return property.key.name === 'entry';
            });
            if (!entryProperty) return;

            const value = entryProperty.value.value;
            if (rets.indexOf(value) != -1) return;

            rets.push(value);
        }
    });

    return rets;
}

/**
 * 抓取代码中的静态资源内容
 *
 * @param  {String} source - 源代码
 * @param  {Object} state - 状态对象,有如下几个字段:
 * {
 *    
 * }
 * @return {Array}
 */
function extractStaticStyles(source, state) {
    if (!source) return [];

    const ast = babylon.parse(source);
    const rets = [];
    /*
        目前做的简单一些,判断是带有styles字段的对象都进行打包
        因为webpack外部还要进行判断
        还需要进行调用unique，通过shadowequal
     */
    traverse(ast, {
        ObjectExpression(path) {
            const properties = path.node.properties || [];
            const styleProperty = properties.find((property) => {
                return property.key.name === 'styles';
            });
            if (!styleProperty) return;

            const value = styleProperty.value.value;
            if (rets.indexOf(value) != -1) return;

            rets.push(value);
        }
    });

    return rets;
}

module.exports = {
    extractWidgetInfos,
    extractActionPath,
    extractStoreConfig,
    extractRouterConfig,
    extractStaticResources,
    extractStaticStyles
};
