var express = require('express');
var app = express();
var path = require('path');

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});
alert("dsadas");
app.listen(process.env.PORT || 8080, function () {
    console.log('Node app is working!');
});