//server/server.js
var express = require('express');
var router = require('./routes/routes.js')
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var port = process.env.NODE_ENV || 8080;

var app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../client'));
app.use(express.static(path.join(__dirname, '../client')));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: false}));

mongoose.connect('mongodb://<seking31>:<pass13word>@ds133670.mlab.com:33670/saramean');

app.use('/', router);

app.listen(port, function() {
 console.log('running at localhost: ' + port);
});

module.exports=app;
