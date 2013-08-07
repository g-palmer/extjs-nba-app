Ext.define('NBA.controller.Players', {
    extend: 'Ext.app.Controller',
    init: function() {
      this.control({
        'playersList': {
          select: this.onPlayerSelect
        }
      });
    },

    onPlayerSelect: function(rowModel, selection) {
      var selectedPlayersStore = Ext.data.StoreManager.lookup('SelectedPlayers');
      selectedPlayersStore.add(selection);
    }
});
