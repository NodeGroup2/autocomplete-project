module.exports = wordSearch;

var fs = require('fs');
// var dictionary = require('./server.js/dictionary');
var dictionary = ['We', 'are', 'Esraa', 'Shireen', 'Marina', 'Marko', 'Shiry', 'Make', 'Sleep', 'End'];

function wordSearch(str){
  var prefix = new RegExp("^"+str+"([a-zA-Z])*");
  var prefixMatches = [];
  dictionary.forEach(function(word){
    var prefixInWord = prefix.test(word);
    if(prefixInWord){
      prefixMatches.push(word);
    }
  });
  return prefixMatches;
}
