'use strict';
/*
	browser端的action打包配置,根据action里面引用widget进行打包
 */
const fs = require('fs');
const _ = require('lodash');
const path = require('path');
const webpack = require('webpack');
const HappyPack = require('happypack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const actionParser = require('billund-source-parser').action;
const configParser = require('billund-source-parser').config;
const billundEnums = require('billund-enums');
const billundUtils = require('billund-utils');

const packageJSON = require('../../package.json');
const rootDir = path.dirname(path.resolve(__dirname, '../../package.json'));
const legoConfig = packageJSON.legoconfig;

const resourceResolver = require('./resourceresolver.js');
const webpackUtil = require('../common/webpack.util.js');

const supportorPreProcessor = path.resolve(rootDir, legoConfig.supportorpreprocessor);
const DIST_PATH = resourceResolver.DIST_PATH;
const env = process.env;

const plugins = [
    new webpack.LoaderOptionsPlugin({
        options: {
            postcss() {
                // 处理css兼容性代码，无须再写-webkit之类的浏览器前缀
                return [
                    require('postcss-initial')({
                        reset: 'all' // reset only inherited rules
                    }),
                    require('autoprefixer')({
                        browsers: ['> 5%']
                    })
                ];
            }
        }
    }),
    new webpack.optimize.CommonsChunkPlugin({
        name: 'common',
        filename: 'common.js',
        minChunks: Infinity
    }),
    new ExtractTextPlugin({
        filename: '[name].css',
        disable: false,
        allChunks: true
    }),
    new HappyPack({
        cache: true,
        loaders: [{
            loader: 'babel-loader',
            options: {
                presets: ['es2015', 'react', 'stage-0'],
                cacheDirectory: true
            }
        }]
    })
];
if (env === 'product') {
    plugins.push(new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('production')
        }
    }));
    plugins.push(new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }));
}

/**
 * 生成action的入口
 *
 * @return {Object}
 */
function getActionEntries() {
    const actionDir = path.resolve(rootDir, legoConfig.actiondir);
    const actions = billundUtils.common.getFilteredFiles(actionDir, {
        nameRegex: new RegExp(legoConfig.actionRegExp)
    });

    const ret = {};
    actions.forEach((action) => {
        const fileContent = fs.readFileSync(action, 'UTF-8');
        const staticResources = actionParser.extractStaticResources(fileContent);
        if (!(staticResources && staticResources.length)) {
            console.warn(`${action} didn't has staticResources at all.`);
            return true;
        }
        staticResources.forEach((resource) => {
            resource = resourceResolver.transformStaticResourceToAbsolutePath(resource);
            if (!ret[resource]) {
                ret[resource] = [];
            }
            ret[resource].push(action);
        });
    });
    return ret;
}

/**
 * 生成静态的entry
 *
 * @return {Object}
 */
function getStaticEntries() {
    const entry = {};
    const staticDir = path.resolve(rootDir, legoConfig.staticjsdir);
    const entries = billundUtils.common.getFilteredFiles(staticDir, {
        nameRegex: /\.js$/
    });
    entries.forEach((file) => {
        const relativePath = path.relative(staticDir, file);
        const distAbsolutePath = resourceResolver.transfromSourceToAbsolutePath(relativePath);
        entry[distAbsolutePath] = [file];
    });
    return entry;
}

/**
 * 组合所有entry,主要是将action的内容合并到静态内容中
 *
 * @return {Object}
 */
function combineEntries() {
    const staticEntries = getStaticEntries();
    const actionEntries = getActionEntries();
    /*
        进行combo,每一个action的去寻找他们对应static的key,然后拼接
        洗key,然后通过处理成相对路径
        然后更新公用包
     */
    Object.keys(actionEntries).forEach((aboslutePath) => {
        if (!(staticEntries && staticEntries[aboslutePath])) return true;
        let rets = staticEntries[aboslutePath];
        if (_.isString(rets)) {
            rets = [rets];
        }
        rets = rets.concat(actionEntries[aboslutePath]);

        staticEntries[aboslutePath] = rets;
    });

    const entry = {};
    Object.keys(staticEntries).forEach((staticEntry) => {
        const key = resourceResolver.transformToRelativePath(staticEntry);
        entry[key] = staticEntries[staticEntry];
    });
    const commonChunkName = legoConfig.commonchunkname || 'common';
    entry[commonChunkName] = [supportorPreProcessor];
    return entry;
}

/**
 * 生成组件名称和路径的mapping关系
 *
 * @return {Object}
 */
function generateWidgetNameToPath() {
    const widgetConfigPath = path.resolve(rootDir, legoConfig.widgetconfig);
    const widgets = require(widgetConfigPath).widgets || [];
    const entry = {};

    widgets.forEach((widget) => {
        const isRelativePath = widget.indexOf('.') === 0;
        const widgetPath = isRelativePath ? path.resolve(rootDir, widget) : require.resolve(widget);

        const fileContent = fs.readFileSync(widgetPath, 'UTF-8');
        const widgetName = configParser.extractWidgetName(fileContent);
        if (!widgetName) return true;
        entry[widgetName] = widgetPath;
    });
    return entry;
}

module.exports = {
    entry: combineEntries(),
    output: {
        filename: '[name].js',
        path: resourceResolver.DIST_PATH,
        publicPath: resourceResolver.PUBLIC_PATH,
        chunkFilename: '[name].[chunkhash].js'
    },
    cache: true,
    resolve: {
        extensions: ['.js', '.jsx', '.vue', '.less']
    },
    externals: {
        react: billundEnums.external.REACT_ROOT_EXTERNAL,
        redux: billundEnums.external.REDUX_ROOT_EXTERNAL,
        'react-redux': billundEnums.external.REACT_REDUX_ROOT_EXTERNAL,
        'react-dom': billundEnums.external.REACT_DOM_ROOT_EXTERNAL,
        'react-addons-css-transition-group': billundEnums.external.REACT_CSS_TRANSITION_GROUP_ROOT_EXTERNAL,
        vue: billundEnums.external.VUE_ROOT_EXTERNAL,
        vuex: billundEnums.external.VUEX_ROOT_EXTERNAL,
        'vue-router': billundEnums.external.VUE_ROUTER_ROOT_EXTERNAL
    },
    module: {
        rules: [{
            include: [supportorPreProcessor],
            loader: 'billund-supportor-preprocessor-loader'
        }, {
            test: new RegExp(legoConfig.actionRegExp),
            exclude: /node_modules\//,
            use: [{
                loader: 'babel-loader'
            }, {
                loader: 'billund-action-loader',
                options: {
                    widgetNameToPath: generateWidgetNameToPath()
                }
            }]
        }, {
            include: webpackUtil.covertToAllMatchedIncludes(webpackUtil.getWidgetPaths()),
            exclude: /node_modules\//,
            use: [{
                loader: 'babel-loader'
            }, {
                loader: 'billund-config-loader',
                options: {
                    include: 'static'
                }
            }]
        }, {
            test: /\.(js)$/,
            exclude: /node_modules\//,
            use: require.resolve('happypack/loader.js')

        }, {
            test: /\.(jsx)$/,
            use: require.resolve('happypack/loader.js')
        }, {
            test: /\.vue$/,
            use: [{
                loader: 'vue-loader',
                options: {
                    loaders: {
                        less: ExtractTextPlugin.extract({
                            use: [{
                                loader: 'css-loader'
                            }, {
                                loader: 'postcss-loader'
                            }, {
                                loader: 'less-loader'
                            }],
                            fallback: 'vue-style-loader' // <- this is a dep of vue-loader, so no need to explicitly install if using npm3
                        }),
                        css: ExtractTextPlugin.extract({
                            use: 'css-loader',
                            fallback: 'vue-style-loader' // <- this is a dep of vue-loader, so no need to explicitly install if using npm3
                        })
                    }
                }
            }]
        }, {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                use: [{
                    loader: 'css-loader'
                }],
                fallback: 'style-loader'
            })
        }, {
            test: /\.less$/,
            test: /\.less$/,
            use: ExtractTextPlugin.extract({
                use: [{
                    loader: 'css-loader'
                }, {
                    loader: 'less-loader'
                }],
                fallback: 'style-loader'
            })
        }, {
            test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
            loader: 'url-loader',
            options: {
                limit: 5000
            }
        }]
    },
    target: 'web',
    plugins,
    // devServer
    devServer: {
        contentBase: DIST_PATH,
        historyApiFallback: false,
        hot: true,
        port: 9074,
        publicPath: resourceResolver.PUBLIC_PATH,
        noInfo: false,
        proxy: {
            '/app/*': {
                target: 'http://localhost:9074',
                bypass(req) {
                    const pkgName = packageJSON.name;

                    return req.url.replace(`/app/${pkgName}`, '');
                }
            }
        }
    }
};
