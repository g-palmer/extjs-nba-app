Ext.define('NBA.store.Players', {
  extend: 'Ext.data.Store',
  requires: 'NBA.model.Player',
  model: 'NBA.model.Player',

  autoLoad: true

});