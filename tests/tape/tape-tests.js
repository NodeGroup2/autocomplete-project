var test = require('tape');
var readDictionary = require('../../src/readDictionary.js').readDictionary;
var wordSearch = require('../../src/wordSearch.js');

test('Description for your test', function(t) {
  t.pass('just testing everything works');
  t.end();
});

test('Empty dictionary array on empty file', function(t) {
  readDictionary('/../tests/tape/emptyFile.txt',null,function(err,database) {
    t.deepEqual(database, []);
    t.end();
  });
})

test('Dictionary loading', function(t) {
  readDictionary('/../tests/tape/database.txt',null,function(err,database) {
    t.deepEqual(database, ['We', 'are', 'Marina', 'and', 'Shireen']);
    t.end();
  });
})

test('Dictionary length', function(t) {
  readDictionary('/../tests/tape/dictionary.txt',null,function(err,database) {
    t.deepEqual(database.length,10000);
    t.end();
  });
})

// test('search for a word in a string', function(t) {
//     t.deepEqual(wordSearch('Shir'),['Shireen','Shiry']);
//     t.end();
// });
//
//
// test('search for a word in a string', function(t) {
//     t.deepEqual(wordSearch('Esraa'),['Esraa']);
//     t.end();
// });
//
//
// test('search for a word in a string', function(t) {
//     t.deepEqual(wordSearch('Ma'),['Marina','Marko','Make']);
//     t.end();
// });
//
//
// test('search for a word in a string', function(t) {
//     t.deepEqual(wordSearch('S'),['Shireen','Shiry','Sleep']);
//     t.end();
// });
