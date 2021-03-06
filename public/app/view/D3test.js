Ext.define('NBA.view.D3test', {
  extend: 'Ext.window.Window',
  alias: 'widget.d3test',
  title: 'Some charts should go here',
  layout: 'fit',
  autoShow: true,
  html: '<div id="chart"></div>',
  listeners: {
    afterrender: function(window) {
      var data = [4, 8, 15, 16, 23, 42];

      var chart = d3.select("#chart").append("svg")
        .attr("class", "chart")
        .attr("width", 420)
        .attr("height", 20 * data.length);

      var x = d3.scale.linear()
        .domain([0, d3.max(data)])
        .range([0, 420]);

      chart.selectAll("rect")
        .data(data)
        .enter().append("rect")
        .attr("y", function(d, i) { return i * 20; })
        .attr("width", x)
        .attr("height", 20);
    }
  }
});