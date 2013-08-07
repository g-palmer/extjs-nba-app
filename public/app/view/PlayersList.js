Ext.define('NBA.view.PlayersList', {
  extend: 'Ext.grid.Panel',
  alias: 'widget.playersList',
  store: 'Players',
  hideHeaders: true,
  columns: [
    {
      menuDisabled: true,
      flex: 1,
      dataIndex: 'lastname',
      renderer: function(value, p, r) {
        return r.data['lastname'] + ', ' + r.data['firstname'];
      }
    }
  ]
});