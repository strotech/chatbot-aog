var express=require('express');
var app=express();
var bodyParser = require('body-parser');

//configure body-parser for express
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// routes 
var routes=require('./routes.js');
app.use('/', routes);

module.exports = app