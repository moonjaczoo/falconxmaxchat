var express = require('express');
var app = express();
var path = require('path');
var http = require('http');

var ports = process.env.PORT || 8080;
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

http.listen(ports, function () {
    
    console.log('Node app is working!');
});