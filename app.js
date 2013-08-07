var express = require('express');
var app = express();
var http = require('http');
var path = require('path');
var mongoose = require('mongoose');
// var restfulgoose = require('restfulgoose');

// var db = mongoose.connect('mongodb://localhost/nba');

var playerSchema = mongoose.Schema({
  _id: mongoose.Schema.ObjectId,
  id: String,
  firstname: String,
  lastname: String,
  leag: String,
  gp: Number,
  minutes: Number,
  pts: Number,
  oreb: Number,
  dreb: Number,
  reb: Number,
  asts: Number,
  stl: Number,
  blk: Number,
  turnover: Number,
  pf: Number,
  fga: Number,
  fgm: Number,
  fta: Number,
  ftm: Number,
  tpa: Number,
  tpm: Number
});

var Player = mongoose.model('Player', playerSchema);

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/api/player', function(req, res) {
  Player.find(req.query, function(err, player) {
    if (err) console.log(err);
    var playerData = {
      'success': true,
      'results': player
    };
    res.send(JSON.stringify(playerData));
  });
});

app.get('/api/players/:id', function(req, res) {
  Player.find({id: req.params.id}, function(err, player) {
    if (err) console.log(err);
    var playerData = {
      'success': true,
      'results': player
    };
    res.send(JSON.stringify(playerData));
  });
});

app.get('/api/players', function(req, res) {
  Player.find({}, function(err, players) {
    if (err) console.log(err);
    var playersData = {
      'success': true,
      'total': players.length,
      'results': players
    };
    res.send(JSON.stringify(playersData));
  });
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
