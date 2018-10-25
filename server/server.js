//server/server.js
var express = require('express');
var router = require('./routes/routes.js')
var path = require('path');
var port = process.env.NODE_ENV || 8080;

var app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../client'));
app.use(express.static(path.join(__dirname, '../client')));

app.use('/', router);

app.listen(port, function() {
 console.log('running at localhost: ' + port);
});
