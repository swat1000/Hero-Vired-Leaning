var httpServer = require("http");

const {text} = require("strem/consumers");

var server = httpServer.createServer(function(req, res){
    res.writeHead(200, {"Content-Type":"text/plain"});
    res.end("Lets finish the server call");
});

server.listen(7000)