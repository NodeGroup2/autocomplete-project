var http = require('http');
var handler = require('./handler.js');
var dictionaryFile = require('./readDictionary.js');

var server = http.createServer(handler);

function startServer() {
  dictionaryFile.readDictionary(null,null, function() {
  server.listen(3000, function(){
    console.log("The server is listening to port 3000, ready to accept requests");
  });
})
}

startServer();
