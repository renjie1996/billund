'use strict';

/*
    server端的widget打包配置
 */
const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const configParser = require('billund-source-parser').config;
const webpackUtil = require('../common/webpack.util.js');

const packageJSON = require('../../package.json');
const rootDir = path.dirname(path.resolve(__dirname, '../../package.json'));
const legoConfig = packageJSON.legoconfig;
const widgetPaths = webpackUtil.getWidgetPaths();

/**
 * 生成忽略数组
 *
 * @return {Array}
 */
function getExternals() {
    /*
        指定几个较大的lib，主要是为了提升打包效率。
     */
    return [
        'lodash',
        'react',
        'react-addons-css-transition-group',
        'react-dom',
        'react-pure-render',
        'react-redux',
        'redux',
        'vue',
        'vue-server-renderer',
        'vuex',
        'vue-router'
    ];
}

/**
 * 生成入口
 *
 * @param {Array} paths - 组件全路径
 * @return {Object}
 */
function getEntries(paths) {
    paths = paths || [];
    const entry = {};

    paths.forEach((widgetPath) => {
        const fileContent = fs.readFileSync(widgetPath, 'UTF-8');
        const widgetName = configParser.extractWidgetName(fileContent);
        if (!widgetName) return true;
        entry[widgetName] = [widgetPath];
    });

    return entry;
}

module.exports = {
    entry: getEntries(widgetPaths),
    output: {
        path: path.join(rootDir, legoConfig.serverdist),
        filename: '[name].js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [{
            /*
                配置文件的打包
             */
            include: webpackUtil.covertToAllMatchedIncludes(widgetPaths),
            use: [{
                loader: 'babel-loader',
                options: {
                    babelrc: false,
                    presets: ['es2015-node', 'stage-0'],
                    cacheDirectory: false
                }
            }, {
                loader: 'billund-config-loader'
            }]
        }, {
            test: /\.(jsx)$/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['es2015-node', 'react', 'stage-0'],
                    cacheDirectory: true
                }
            }]
        }, {
            test: /\.(js)$/,
            exclude: /node_modules\/(?!@gfe)/,
            use: [{
                loader: 'babel-loader',
                options: {
                    babelrc: false,
                    presets: ['es2015-node', 'stage-0'],
                    cacheDirectory: true
                }
            }]
        }, {
            test: /\.vue$/,
            use: 'vue-loader'
        }, {
            test: /\.css$/,
            use: 'ignore-loader'
        }, {
            test: /\.css\.module/,
            use: 'ignore-loader'
        }, {
            test: /\.svg$/,
            use: 'ignore-loader'
        }, {
            test: /\.woff|ttf|woff2|eot$/,
            use: 'ignore-loader'
        }, {
            test: /\.less$/,
            use: 'ignore-loader'
        }, {
            test: /\.less\.module/,
            use: 'ignore-loader'
        }, {
            test: /\.(png|jpg|gif)$/,
            use: 'ignore-loader'
        }]
    },
    resolve: {
        // 添加后缀名顺序
        extensions: ['.js', '.jsx', '.vue', '.less']
    },
    // 对于引用的包,是使用package里的browser信息还是main信息
    target: 'node',
    devtool: false,
    // 因为是在服务器端打包,require这种操作还是交给node自己来解析
    externals: getExternals(),
    // 注入环境参数
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production'),
            'process.env.VUE_ENV': '"server"'
        })
    ]
};
