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
    console.log('key pressed')
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
    console.log(url);
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status == 200) {
        console.log(xhr.responseText);
        var response = JSON.parse(xhr.responseText);
        var matches = response;
        updateDOM(matches, inputSaved);
      }
    };
    xhr.open('GET', url, true);
    xhr.send();
  }


  function updateDOM(matches, inputSaved) {
    matches.forEach(function(match, i){
      suggestionElements[i].innerHTML =
      inputSaved + ' ' + '<span style="color: rgb(45, 183, 233)" font-weight="bold">' + match + '</span>';
    })
  }

  // Create object holding global variables for testing purposes
   return {
     inputField : inputField,
     suggestionElements : suggestionElements
   };
})();
