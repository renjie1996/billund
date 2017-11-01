'use strict';

const WIDGET = require('billund-enums').widget;

/**
 * 生成对应的pageTitle
 *
 * @param {Object} config - 对应的配置
 * @return {Object}
 */
module.exports = function*(config) {
    config = config || {};
    const widgets = config.widgets || [];
    const scripts = widgets.map((widget) => {
        const widgetConfig = {
            id: widget.id,
            name: widget.name,
            paths: widget.paths,
            renderType: widget.renderType
        };
        return `
        	<script class="lego-widget-config">
        		window.${WIDGET.WIDGET_CONFIGS} || (window.${WIDGET.WIDGET_CONFIGS} = []);
        		window.${WIDGET.WIDGET_CONFIGS}.push(${JSON.stringify(widgetConfig)});
        	</script>
        `;
    });
    return {
        result: scripts.join('')
    };
};
