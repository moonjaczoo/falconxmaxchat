var express = require('express');
var app = express();
var path = require('path');




app.listen(process.env.PORT || 8080, function () {
    
    console.log('Node app is working!');
});