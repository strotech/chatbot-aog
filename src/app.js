var express=require('express');
const Sentry = require('@sentry/node');
var app=express();
var bodyParser = require('body-parser');

Sentry.init({ dsn: 'https://7a71c49c396a4093af6c086702617fa2@o380166.ingest.sentry.io/5205698' });
app.use(Sentry.Handlers.requestHandler());

//configure body-parser for express
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// routes 
var routes=require('./routes.js');
app.use('/', routes);

app.use(Sentry.Handlers.errorHandler());
// eslint-disable-next-line no-unused-vars
app.use(function onError(err, req, res, next) {
    // The error id is attached to `res.sentry` to be returned
    // and optionally displayed to the user for support.
    res.statusCode = 500;
    res.end(res.sentry + "\n");
});

module.exports = app