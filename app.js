var WebSocketServer = require("ws").Server
var http = require("http")
var express = require("express")
var app = express()
var port = process.env.PORT || 1111

app.use(express.static(__dirname + "/"));

var server = http.createServer(app);
server.listen(1111);

console.log("http server listening on %d", 1111);

var wss = new WebSocketServer({server: server});
console.log("websocket server created");

wss.on("connection", function(ws) {
 console.log("websocket connection open");
  ws.on("message", function(msg) {
    console.log(msg);
  });
  ws.on("close", function() {
    console.log("websocket connection close");
  });
});