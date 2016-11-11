var fs = require('fs');
var dictionary = require('./readDictionary.js').dictionary;

function wordSearch (str){
  var prefix = new RegExp("^"+str+"([a-zA-Z])*", "i");
  var prefixMatches = [];

  dictionary.forEach(function(word){
    var prefixInWord = prefix.test(word);
    if (prefixMatches.length === 5) {
      return prefixMatches;
    }
    if(prefixInWord){
      prefixMatches.push(word);
    }
  });
  console.log('ihihihiu',prefixMatches);
  return prefixMatches;
}


module.exports = wordSearch;


// server--->h
