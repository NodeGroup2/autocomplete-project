var dictionary;
var wordSearch = require('./wordSearch.js');
var readDictionary = require('./readDictionary.js').readDictionary;

var handler = function(request,response){
  var prefix = (request.url).split('/')[1]; //wra lslash
  // var method = request.method;
  // if (endpoint === "/"){}
  var matches = JSON.stringify(wordSearch(prefix));
};
module.exports = handler;
