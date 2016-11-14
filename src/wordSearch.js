var fs = require('fs');
var dictionaryFile = require('./readDictionary.js');

function wordSearch (str){
  if(str === " " || str === ""){
    return [];
  }
  var prefix = new RegExp("^"+str+"(\s)*([a-z]+)\'?([a-z]*)$", "i");
  var prefixMatches = [];

  dictionaryFile.dictionary.forEach(function(word){
    try{
      var prefixInWord = prefix.test(word);
    } catch(err){
      return;
    }
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
