var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var fs = require('fs');
var session = require('express-session');
var passport = require('passport');

var userRoutes = require('./routes/userRoutes');
var orgRoutes = require('./routes/orgRoutes');

var app = express();

app.set('port', process.env.PORT || 3004);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

//app.use(session({ secret: 'keyboard cat' }));
//app.use(passport.initialize());
//app.use(passport.session());
app.use(express.static(path.join(__dirname, 'src/views')));

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) next();
  else res.send(401);
}

app.use(function(req, res, next) {
  if (req.user) {
    res.cookie('user', JSON.stringify(req.user));
  }
  next();
});

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.send(500, { message: err.message });
});

app.use('/', userRoutes);
app.use('/', orgRoutes);


app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});