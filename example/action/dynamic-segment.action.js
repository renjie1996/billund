'use strict';

function* action() {
    this.legoConfig = {
        widgets: [{
                name: 'simple-vue-hello-widget',
                index: '000.000'
            },
            {
                name: 'simple-vue-hello-widget',
                paths: ['/hello/:name'],
                index: '000.001'
            },
            {
                name: 'simple-vue-hello-widget',
                paths: ['/static'],
                index: '000.002'
            },
            {
                name: 'simple-vue-hello-widget',
                paths: ['/dynamic/:years'],
                index: '000.003'
            },
            {
                name: 'simple-vue-hello-widget',
                paths: ['/attrs'],
                index: '000.004'
            }
        ],
        options: {
            staticResources: [{
                entry: 'billund-example/common.js'
            }, {
                entry: 'billund-example/dynamic-segment.js',
                styles: 'billund-example/dynamic-segment.css'
            }]
        },
        routerConfig: {
            mode: 'history',
            routes: [{
                    path: '/'
                },
                {
                    path: '/hello/:name',
                    props: true
                },
                {
                    path: '/static',
                    props: {
                        name: 'world'
                    }
                },
                {
                    path: '/dynamic/:years',
                    props: function dynamicPropsFn(route) {
                        const now = new Date();
                        return {
                            name: (now.getFullYear() + parseInt(route.params.years)) + '!'
                        };
                    }
                },
                {
                    path: '/attrs',
                    props: {
                        name: 'attrs'
                    }
                }
            ]
        }
    };
}

module.exports = {
    url: ['/', '/hello/:name', '/static', '/dynamic/:years', '/attrs'],
    action
};