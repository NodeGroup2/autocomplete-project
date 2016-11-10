var test = require('tape');
var readDictionary = require('../../src/readDictionary.js');

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
