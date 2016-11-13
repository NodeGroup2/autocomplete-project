var autocomplete = (function() {
  // global app variables
  var inputField = document.querySelector(".input_field");
  var suggestionElements = document.querySelectorAll(".suggestion_element");
  var inputSaved = '';
  var inputLast = '';

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
    input = inputField.value.split(' ');
    inputLast = input.pop();
    inputSaved = input.join(' ');
    var url = '/search/' + inputLast;
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status == 200) {
        clearListItems();
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
      suggestionElements[i].innerHTML =  inputSaved + ' ' + '<span class="match">'+match+'</span>';
    })
  }

  // Event listeners for clicking all suggested elements
  function addListenersToMatchItems() {
    var match_items = document.querySelectorAll('.suggestion_element');
    for (var i = 0; i < match_items.length; i++) {
      (function(i) {
        match_items[i].addEventListener("click", function(e) {
          e.preventDefault();
          inputLast = e.target.textContent;
          inputField.value = (inputSaved.length) ? inputSaved + ' ' + inputLast : inputLast;
        });
      })(i);
    }
  };

  addListenersToMatchItems();

  // Create object holding global variables for testing purposes
   return {
     inputField : inputField,
     suggestionElements : suggestionElements,
     inputSaved : inputSaved,
     inputLast : inputLast
   };
})();
