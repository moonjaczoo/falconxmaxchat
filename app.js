var express = require('express');
var app = express();
var path = require('path');
var http = require('http');

var port = process.env.PORT || 8080;


http.listen(port, function () {
    
    console.log('Node app is working!');
});