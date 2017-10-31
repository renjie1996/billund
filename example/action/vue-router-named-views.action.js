'use strict';

function* action() {
    this.legoConfig = {
        widgets: [{
                name: 'simple-vue-foo-widget',
                weight: 100
            },
            {
                name: 'simple-vue-bar-widget',
                paths: ['/other'],
                weight: 100
            },
            {
                name: 'simple-vue-baz-widget',
                paths: ['/other'],
                weight: 100
            }
        ],
        options: {
            staticResources: [{
                entry: 'billund-example/common.js'
            }, {
                entry: 'billund-example/vue-router-named-views.js',
                styles: 'billund-example/vue-router-named-views.css'
            }]
        },
        routerConfig: {
            mode: 'history',
            routes: [{
                path: '/'
            }, {
                path: '/other'
            }]
        }
    };
}

module.exports = {
    url: ['/', '/other'],
    action
};