Ext.define('NBA.view.PlayerSearch', {
  extend: 'Ext.form.field.ComboBox',
  emptyText: 'Search players...',
  alias: 'widget.playerSearch',
  store: 'Players',
  queryMode: 'local',
  valueField: 'id',
  displayField: 'lastname',
  hideTrigger: true,
  tpl: Ext.create('Ext.XTemplate',
    '<tpl for=".">',
        '<div class="x-boundlist-item">{lastname}, {firstname}</div>',
    '</tpl>'
  ),
  displayTpl: Ext.create('Ext.XTemplate',
    '<tpl for=".">',
        '{lastname}, {firstname}',
    '</tpl>'
  )
});