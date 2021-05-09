var http = require("http");

const server = http.createServer(
    (req ,res)=>{
        res.writeHead({
            "content-type":"text/html"
        });
        res.end("<h1>hello world </h1>");
    }
);

server.listen(8000,function(){
    console.log("from server");
});