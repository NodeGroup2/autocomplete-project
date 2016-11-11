var fs = require('fs');

// var dictionary = ['We', 'are', 'Esraa', 'Shireen', 'Marina', 'Marko', 'Shiry', 'Make', 'Sleep', 'End'];

function readDictionary(dataBasePath, separator, cb){
  dataBasePath = dataBasePath || '/dictionary.txt';
  separator = separator || /\r?\n/;
  fs.readFile(__dirname + dataBasePath, 'utf8', function(err, data){
    if(err) {
      console.log(err);
      return;
    }
    module.exports.dictionary = data.split(separator).filter(function(x){return x !== ''});
    cb();
 });
}
module.exports = {
  readDictionary,
  dictionary: null
}
