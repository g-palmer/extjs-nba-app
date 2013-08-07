Ext.define('NBA.view.RebsChart', {
  extend: 'Ext.chart.Chart',
  alias: 'widget.rebsChart',
  store: 'SelectedPlayers',
  animate: true,
  axes: [
    {
      title: 'Career Rebounds',
      type: 'Numeric',
      position: 'left',
      fields: ['reb'],
      minimum: 0
    },
    {
      type: 'Category',
      position: 'bottom',
      fields: ['fullname']
    }
  ],
  series: [
    {
      type: 'column',
      axis: 'bottom',
      yField: 'reb',
      xField: 'lastname',
      label: {
        field: 'reb',
        contrast: true,
        font: '16px Helvetica, sans-serif',
        display: 'insideEnd',
        'text-anchor': 'middle',
        orientation: 'horizontal',
        renderer: Ext.util.Format.numberRenderer('0,0'),
        color: '#333'
      },
      renderer: function(sprite, record, attr, index, store) {
        var color = [
          'rgb(52,56,56)',
          'rgb(0,95,107)',
          'rgb(0,140,158)',
          'rgb(0,180,204)',
          'rgb(0,223,252)'][index % 5];
        return Ext.apply(attr, {
          fill: color
        });
      }
    }
  ]
});