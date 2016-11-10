module.exports = readDictionary;

var fs = require('fs');

function readDictionary(dataBasePath, separator, cb){
  dataBasePath = dataBasePath || '/database.txt';
  separator = separator || /\r?\n/;
  fs.readFile(__dirname + dataBasePath, 'utf8', function(err, data){
    if(err) {
      console.log(err);
      return;
    }
    cb(null, data.split(separator).filter(function(x){return x !== ''}));
 });
}
