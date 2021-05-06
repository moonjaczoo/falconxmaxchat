var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

				io.on('connection', function(socket){
				console.log('NEW USER CONNECTED !');
				var myroom = socket.handshake.query.uid;
				console.log(myroom);
				socket.join(myroom);


				socket.on('disconnect', () => {
				console.log('USER DISCONNECTED !');
				socket.leave(myroom);
				})
				socket.on('msg', function(data) {
				console.log("Success______________________. ✔");
				io.sockets.in(myroom).emit('msg',{message: data.message,room: data.room,name :data.name});	    			    		
				});
				});






app.listen(8080, function(){
console.log('💥 YOUR WEBSOCKET IS RUNING 💥');
});