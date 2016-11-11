var autocomplete = (function() {
  // global app variables
  var inputField = document.querySelector(".input_field");
  var suggestionElements = document.querySelectorAll(".suggestion_element");

  // for (var i = 0; i < suggestionElements.length; i++) {
  //   var suggestion = suggestion[i];
  //   suggestion.addEventListener("click", function() {
  //     handleInput(this.id);
  //   });
  // };

  inputField.onkeyup = function() {
    if (inputField.value === '') {
      hideSuggestionList();
      clearListItems();
    }
    else {
      sendRequest();
      showSuggestionList(); // TODO : check for 0  or less than 5 elements.
    }
  }

  function showSuggestionList() {
    document.querySelector(".suggestion_container").classList.remove("closed");
  }

  function hideSuggestionList() {
    document.querySelector(".suggestion_container").classList.add("closed");
  }

  function clearListItems() {
    for (var i = 0; i < suggestionElements.length; i++) {
      var item = suggestionElements[i];
      item.textContent = "";
    }
  }

  function sendRequest() {
    var input = inputField.value.split(' ');
    var inputLast = input.pop();
    var inputSaved = input.join(' ');
    var url = '/' + inputLast;
    var xhr = new XMLHttpRequest();
    updateDOM(inputSaved);
    xhr.addEventListener('load', function() {
      var response = JSON.parse(xhr.responseText);
      var matches = []; // update with appropriate json object
      updateDOM(matches);
    })
  }

  function updateDOM(inputSaved) {
    var mockMatch = ['beauty','beautiful','beautify','beautification','beauties'];  // remove
    mockMatch.forEach(function(match, i){
      suggestionElements[i].textContent = inputSaved + ' ' + match;
    })
  }

  // Create object holding global variables for testing purposes
   return {
     inputField : inputField,
     suggestionElements : suggestionElements
   };
})();
