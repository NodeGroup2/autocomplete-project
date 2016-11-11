var fs = require('fs');
var dictionaryFile = require('./readDictionary.js');

function wordSearch (str){
  var prefix = new RegExp("^"+str+"([a-zA-Z])*", "i");
  var prefixMatches = [];

  dictionaryFile.dictionary.forEach(function(word){
    var prefixInWord = prefix.test(word);
    if (prefixMatches.length === 5) {
      return prefixMatches;
    }
    if(prefixInWord){
      prefixMatches.push(word);
    }
  });
  // console.log('up to 5 matches: ',prefixMatches);
  return prefixMatches;
}


module.exports = wordSearch;


// server--->h
