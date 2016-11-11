var http = require('http');
var handler = require('./handler.js');
var dictionaryFile = require('./readDictionary.js');

var server = http.createServer(handler);

function startServer() {
  dictionaryFile.readDictionary(null,null, function() {
  server.listen(3000, function(){
    console.log("Dictionary loaded and the server is listening to port 3000. Ready to accept requests");
  });
})
}

startServer();
