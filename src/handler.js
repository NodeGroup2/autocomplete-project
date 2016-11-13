var wordSearch = require('./wordSearch.js');
var fs = require('fs');
// var StringDecoder = require('string_decoder').StringDecoder;
// var dictionary = require('./readDictionary.js');

var path = {
  '/' : '/../public/index.html',
  '/index.html' : '/../public/index.html',
  '/styles.css' : '/../public/styles.css',
  '/normalize.css': '/../public/normalize.css',
  '/public/app.js': '/../public/app.js'
}

var handler = function(request,response){
  var endpoint = request.url.split('.')[1] || "html";
  var searchInput = (request.url).split('/search/');
  if (path[request.url]) {
    fs.readFile(__dirname + path[request.url],'utf-8', function(error, file) {
    if (error) {
      console.log (error);
      return;
    }
    response.writeHead(200, { "content-type": "text/" + (endpoint == 'js' ? 'javascript' : endpoint)} );
    response.end(file);
    });
  } else if (searchInput.length > 1) {
    var matches = JSON.stringify(wordSearch(searchInput[1]));
    response.writeHead(200, { "content-type": "application/json"} );
    response.end(matches);
  } else {
    response.writeHead(404, { "content-type": "text/html" });
    response.write('<h1>404 Page Requested Cannot be Found</h1>');
    response.end();
  }
};

module.exports = handler;
