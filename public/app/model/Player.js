Ext.define('NBA.model.Player', {
  extend: 'Ext.data.Model',
  idProperty: 'id',

  fields: [
    {
      name: 'id',
      type: 'string'
    },
    {
      name: 'firstname',
      type: 'string'
    },
    {
      name: 'lastname',
      type: 'string'
    },
    {
      name: 'fullname',
      type: 'string',
      convert: function(v, r) {
        return r.get('firstname') + ' ' + r.get('lastname');
      }
    },
    {
      name: 'leag',
      type: 'string'
    },
    {
      name: 'gp',
      type: 'int'
    },
    {
      name: 'minutes',
      type: 'int'
    },
    {
      name: 'pts',
      type: 'int'
    },
    {
      name: 'oreb',
      type: 'int'
    },
    {
      name: 'dreb',
      type: 'int'
    },
    {
      name: 'reb',
      type: 'int'
    },
    {
      name: 'asts',
      type: 'int'
    },
    {
      name: 'stl',
      type: 'int'
    },
    {
      name: 'blk',
      type: 'int'
    },
    {
      name: 'turnover',
      type: 'int'
    },
    {
      name: 'pf',
      type: 'int'
    },
    {
      name: 'fga',
      type: 'int'
    },
    {
      name: 'fgm',
      type: 'int'
    },
    {
      name: 'fta',
      type: 'int'
    },
    {
      name: 'ftm',
      type: 'int'
    },
    {
      name: 'tpa',
      type: 'int'
    },
    {
      name: 'tpm',
      type: 'int'
    }
  ],

  proxy: {
    type: 'ajax',
    url: 'app/data/career-stats.json',
    reader: {
      type: 'json',
      root: 'results',
      totalProperty: 'total'
    }
  }
});