var wordSearch = require('./wordSearch.js');
var fs = require('fs');
// var StringDecoder = require('string_decoder').StringDecoder;
// var dictionary = require('./readDictionary.js');

var handler = function(request,response){
  if (request.url == '/' || request.url == '/index.html') {

    fs.readFile(__dirname + '/../public/index.html','utf-8', function(error, file) {
    if (error) {
      console.log (error);
      return;
    }
    // var decoder = new StringDecoder('utf8');
    response.writeHead(200, { "content-type": "text/html"} );
    response.end(file);
  });

} else if (request.url == '/styles.css') {

  fs.readFile(__dirname + '/../public/styles.css', function(error, file) {
  if (error) {
    console.log (error);
    return;
  }
  response.writeHead(200, { "content-type": "text/css"} );
  response.end(file);
});

} else if (request.url == '/normalize.css') {

  fs.readFile(__dirname + '/../public/normalize.css', function(error, file) {
  if (error) {
    console.log (error);
    return;
  }
  response.writeHead(200, { "content-type": "text/css"} );
  response.end(file);
});

} else if (request.url == '/public/app.js') {

  fs.readFile(__dirname + '/../public/app.js', function(error, file) {
  if (error) {
    console.log (error);
    return;
  }
  response.writeHead(200, { "content-type": "text/javascript"} );
  response.end(file);
});

} else if (request.url) {
  var prefix = (request.url).split('/search/')[1];
  var matches = JSON.stringify(wordSearch(prefix));
  response.writeHead(200, { "content-type": "application/json"} );
  response.end(matches);

} else {
  response.writeHead(404, { "content-type": "text/html" });
  response.write('<h1>404 Page Requested Cannot be Found</h1>');
  response.end();
}

};

module.exports = handler;
