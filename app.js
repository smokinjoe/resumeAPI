var express = require('express');
var bodyParser = require('body-parser');

// configuring Mongoose
var dbConfig = require('./config/db');
var mongoose = require('mongoose');
mongoose.connect(dbConfig.url);

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// define models
// JOE: this is probably going into the resume route?
var Resume = require('./models/resume');

// define routes
var routes = require('./routes/index');
var resume = require('./routes/resume');
app.use('/api/v1', routes);
app.use('/api/v1/resume', resume);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500).json({
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500).json({
    message: err.message,
    error: {}
  });
});


module.exports = app;
