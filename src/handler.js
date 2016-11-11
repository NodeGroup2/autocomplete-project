var wordSearch = require('./wordSearch.js');
var dictionary = require('./readDictionary.js');

var handler = function(request,response){
  var prefix = (request.url).split('/')[1]; //wra lslash
  // var method = request.method;
  // if (endpoint === "/"){}
  var matches = JSON.stringify(wordSearch(prefix));
  console.log('matches: ',matches);
  response.writeHead(200, { "content-type": "application/json"} );
  response.end(matches);
};
module.exports = handler;
