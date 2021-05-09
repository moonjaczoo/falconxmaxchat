var http = require("http");
var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0',
    mongoURL = process.env.OPENSHIFT_MONGODB_DB_URL || process.env.MONGO_URL,
    mongoURLLabel = "";
const server = http.createServer(
    (req ,res)=>{
        res.writeHead({
            "content-type":"text/html"
        });
        res.end("<h1>hello world </h1>");
    }
);

server.listen(port,function(){
    console.log("from server");
});