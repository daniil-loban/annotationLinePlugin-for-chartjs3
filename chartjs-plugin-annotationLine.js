/*!
 * chartjs-plugin-annotation-line v3.0.0
 * (c) 2017-2022 chartjs-plugin-annotation-line contributors
 * Released under the MIT license
 */

(function (global, factory) {
typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('chart.js/helpers'), require('chart.js')) :
typeof define === 'function' && define.amd ? define(['chart.js/helpers', 'chart.js'], factory) :
(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global["chartjs-plugin-annotation-line"] = factory(global.Chart.helpers, global.Chart));
})(this, (function (helpers, chart_js) { 'use strict';


const annotationLinePlugin = {
  id: 'annotationline',
  renderAnnotationLine: function(chartInstance, line) {
      let datasetMeta = chartInstance.getDatasetMeta(line.datasetIndex);
      let context = chartInstance.ctx;
      let datasetModel = datasetMeta.data[line.dataIndex]

      const xBarCenter = datasetModel.x
      const barWidth = datasetModel.width;
      const xStart = xBarCenter - (barWidth / 2) - 4;
      const xEnd = xBarCenter + (barWidth / 2) + 4;

      const yAxisID = datasetMeta.yAxisID;
      const yCoordinate = chartInstance.scales[yAxisID].getPixelForValue(line.yCoordinate);

      context.beginPath();
      context.strokeStyle = line.color;
      context.lineWidth = line.width;
      context.moveTo(xStart, yCoordinate);
      context.lineTo(xEnd, yCoordinate);
      context.stroke();

      if (typeof line.label !== typeof undefined) {
          context.textAlign = 'center';
          context.fillStyle = line.color;
          context.fillText(line.label, yCoordinate, xEnd + 7);
      }
  },

  afterDatasetsDraw: function(chart, easing) {
      const { lines } = chart.config._config
      if (chart.data.datasets.length < 1) {
          return;
      }
      if (lines) {
          lines.map(line => {
              this.renderAnnotationLine(chart, line);
          });
      }
  }
};

chart_js.Chart.register(annotationLinePlugin);

return annotationLinePlugin;

}));
