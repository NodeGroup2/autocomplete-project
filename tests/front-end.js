var inputField = autocomplete.inputField;
var suggestionElements = autocomplete.suggestionElements;
var matches =  autocomplete.match;
var clearListItems = autocomplete.clearListItems;
var updateDOM = autocomplete.updateDOM;
var inputSaved = autocomplete.inputSaved;
var sendRequest = autocomplete.sendRequest;
var input = autocomplete.input;

QUnit.module("front-end tests", {
  beforeEach: function() {
    inputField.value = '';
    clearListItems();
  }
});

QUnit.test('closed suggestion list on empty input field', function(assert) {
  inputField.onkeyup();
  var listBox = document.querySelector('.suggestion_container');
  assert.ok(listBox.classList.contains("closed"), 'true passes');
});

QUnit.test('expanded suggestion list on keyup event', function(assert) {
  var listBox = document.querySelector('.suggestion_container');
  // mimicing typing in the input field
  inputField.value = "let's try something!"
  inputField.onkeyup();
  assert.notOk(listBox.classList.contains("closed"), 'false passes');
});

QUnit.test('showing single-word matches on typing a single word', function(assert) {
  inputField.value = "be";
  inputField.onkeyup();
  updateDOM(['beauty', 'beautify', 'beautification', 'beautiful', 'before']);
  for (var i = 0; i < suggestionElements.length; i++) {
    var item = suggestionElements[i];
    assert.ok(item.textContent, 'non-empty string passes');
  }
});

QUnit.test('showing no matches when input field is empty', function(assert) {
  inputField.value = "";
  inputField.onkeyup();
  for (var i = 0; i < suggestionElements.length; i++) {
    var item = suggestionElements[i];
    assert.notOk(item.textContent, 'empty string passes');
  }
});

// Mock autocomplete object doesn't work for this test
// QUnit.test('same number of words in the input field and suggestion list', function(assert) {
//   inputField.value = "so many words here be";
//   inputField.onkeyup();
//   console.log("inputSaved from testing ", inputSaved);
//   updateDOM(['beauty', 'beautify', 'beautification', 'beautiful', 'before'],inputSaved);
//   for (var i = 0; i < suggestionElements.length; i++) {
//     var item = suggestionElements[i];
//     console.log(item.textContent)
//     assert.equal(item.textContent.split(' ').length, inputField.value.split(' ').length,"comparing number of words");
//   }
// });
