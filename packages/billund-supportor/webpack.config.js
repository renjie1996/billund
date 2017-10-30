'use strict';

const path = require('path');

module.exports = {
    entry: './lib/index.js',
    output: {
        path: path.resolve(__dirname, './built'),
        filename: 'billund-supportor.js',
        library: 'BillundSupportor',
        libraryTarget: 'umd'
    },
    externals: {
        react: {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react'
        },
        redux: {
            root: 'Redux',
            commonjs2: 'redux',
            commonjs: 'redux',
            amd: 'redux'
        },
        'react-redux': {
            root: 'ReactRedux',
            commonjs2: 'react-redux',
            commonjs: 'react-redux',
            amd: 'react-redux'
        },
        'react-dom': {
            root: 'ReactDom',
            commonjs2: 'react-dom',
            commonjs: 'react-dom',
            amd: 'react-dom'
        },
        vue: {
            root: 'Vue',
            commonjs2: 'vue',
            commonjs: 'vue',
            amd: 'vue'
        },
        vuex: {
            root: 'Vuex',
            commonjs2: 'vuex',
            commonjs: 'vuex',
            amd: 'vuex'
        },
        'vue-router': {
            root: 'VueRouter',
            commonjs2: 'vue-router',
            commonjs: 'vue-router',
            amd: 'vue-router'
        }
    },
    module: {
        rules: [{
            test: /\.(js)$/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['es2015', 'stage-0'],
                    plugins: [
                        'add-module-exports',
                        'transform-object-assign',
                        'array-includes'
                    ]
                }
            }]
        }]
    }
};
