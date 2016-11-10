module.exports = wordSearch;

var fs = require('fs');
var dictionary = require('./server.js/dictionary');
// var dictionary = ['We', 'are', 'Esraa', 'Shireen', 'Marina', 'Marko', 'Shiry', 'Make', 'Sleep', 'End'];

function wordSearch(str){
  var arr = [];
  dictionary.forEach(function(word){
    if(word.startsWith(str)){
      arr.push(word);
    }
  });
  return arr;
}
