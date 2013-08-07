Ext.define('NBA.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires:[
        'NBA.view.PlayersList',
        'NBA.view.PlayerSearch',
        'NBA.view.PointsChart',
        'NBA.view.RebsChart',
        'NBA.view.AstsChart',
        'NBA.view.GamesPlayedChart',
        'NBA.view.D3test'
    ],

    layout: {
        type: 'border',
        padding: '0 5 5 5'
    },

    items: [{
      region: 'north',
      id: 'app-header',
      xtype: 'box',
      height: 40,
      html: 'NBA Career Stats thru 2009'
    },{
      region: 'west',
      xtype: 'panel',
      title: 'Select players',
      id: 'left-side',
      flex: 1,
      collapsible: true,
      animCollapse: true,
      layout: {
        type: 'fit',
        align: 'stretch'
      },
      autoScroll: true,
      dockedItems: {
        // xtype: 'playerSearch'
      },
      items: {
        xtype: 'playersList'
      }
    },{
      region: 'center',
      title: 'charts, charts, charts',
      xtype: 'panel',
      layout: {
        type: 'hbox',
        align: 'stretch'
      },
      id: 'strong-side',
      flex: 5,

      // getting basic d3 chart to display inside extjs container
      // items: [{
      //   xtype: 'd3test'
      // }]

      items: [{
        xtype: 'container',
        flex: 1,
        layout: {
          type: 'vbox',
          align: 'stretch'
        },
        items: [{
          xtype: 'gamesPlayedChart',
          flex: 1
        },{
          xtype: 'pointsChart',
          flex: 1
        }]
      },{
        xtype: 'container',
        flex: 1,
        layout: {
          type: 'vbox',
          align: 'stretch'
        },
        items: [{
          xtype: 'rebsChart',
          flex: 1
        },{
          xtype: 'astsChart',
          flex: 1
        }]
      }]
    }]

});
