// load the http module
var http = require('http');

// configure our http server
var server = http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello AchiStar !! \n");
})

//localhost:8000
server.listen(8000)
console.log("server listening on port 8000 : http://127.0.0.1:8000/");






























