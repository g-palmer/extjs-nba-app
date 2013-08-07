Ext.define('NBA.Application', {
    name: 'NBA',

    extend: 'Ext.app.Application',

    models: [
      'Player'
    ],

    stores: [
      'Players',
      'SelectedPlayers'
    ],

    views: [],

    controllers: [
      'Players'
    ]

});
