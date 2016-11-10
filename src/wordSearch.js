var fs = require('fs');
var dictionary = require('./readDictionary.js').dictionary;

function wordSearch (str){
  var prefix = new RegExp("^"+str+"([a-zA-Z])*");
  var prefixMatches = [];

  dictionary.forEach(function(word){
    var prefixInWord = prefix.test(word);
    if(prefixInWord){
      prefixMatches.push(word);
    }
  });
  console.log(prefixMatches);
  return prefixMatches;
}


module.exports = wordSearch;


// server--->h
