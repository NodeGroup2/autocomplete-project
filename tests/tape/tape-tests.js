var test = require('tape');
var readDictionary = require('../../src/readDictionary.js').readDictionary;
var dictionaryFile = require('../../src/readDictionary.js');
var wordSearch = require('../../src/wordSearch.js');
var handler = require('../../src/handler.js');

// Mock test
test('Description for your test', function(t) {
  t.pass('just testing everything works');
  t.end();
});

// Read Dictionary function tests
test('Empty dictionary array on empty file', function(t) {
  readDictionary('/../tests/tape/emptyFile.txt',null,function() {
    t.deepEqual(dictionaryFile.dictionary, []);
    t.end();
  });
})

test("Dictionary loading from database.txt", function(t) {
  readDictionary('/../tests/tape/database.txt',null,function() {
    t.deepEqual(dictionaryFile.dictionary, ['We', 'are', 'Marina', 'and', 'Shireen']);
    t.end();
  });
})

test('Dictionary length', function(t) {
  readDictionary('/../src/dictionary.txt',null,function() {
    t.deepEqual(dictionaryFile.dictionary.length,10000);
    t.end();
  });
})

//Word Search function tests
test('Search for t in dictionary', function(t) {
    t.deepEqual(wordSearch("t"),['the','to', 'that','this','time']);
    t.end();
});


test('search for a hell in dictionary', function(t) {
    t.deepEqual(wordSearch('hell'),['hello','hell']);
    t.end();
});


test('search for lkjkfjh in dictionary, result should be empty', function(t) {
    t.deepEqual(wordSearch('lkjkfjh'),[]);
    t.end();
});
test('search for "" in dictionary, result should be empty array', function(t) {
    t.deepEqual(wordSearch(''),[]);
    t.end();
});
test('search for " " in dictionary, result should be empty array', function(t) {
    t.deepEqual(wordSearch(' '),[]);
    t.end();
});
