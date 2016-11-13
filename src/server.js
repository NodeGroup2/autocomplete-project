var http = require('http');
var handler = require('./handler.js');
var dictionaryFile = require('./readDictionary.js');

var server = http.createServer(handler);
var port = process.env.PORT || 3000;

function startServer() {
  dictionaryFile.readDictionary(null,null, function() {
  server.listen(port, function(){
    console.log("Dictionary loaded, server listening to port 3000, ready to accept requests");
  });
})
}

startServer();
