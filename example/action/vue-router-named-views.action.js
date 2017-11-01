'use strict';

function* action() {
    this.legoConfig = {
        widgets: [{
                name: 'simple-vue-foo-widget',
                weight: 100
            },
            {
                name: 'simple-vue-bar-widget',
                paths: ['/other']
            },
            {
                name: 'simple-vue-baz-widget',
                paths: ['/other']
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
            base: '/vue-router-named-views/',
            routes: [{
                path: '/'
            }, {
                path: '/other'
            }]
        }
    };
}

module.exports = {
    url: ['/vue-router-named-views/', '/vue-router-named-views/other'],
    action
};