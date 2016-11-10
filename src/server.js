var http = require('http');
var handler = require('handler.js');
var server = http.createServer(handler);

server.listen(3000, function(){
  console.log("The server is listening to port 3000, ready to accept requests");
});
