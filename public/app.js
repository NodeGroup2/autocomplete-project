var autocomplete = (function() {
  // global app variables
  var inputField = document.querySelector(".input_field");
  var suggestionElements = document.querySelectorAll(".suggestion_element");
  var inputSaved = '';
  var inputLast = '';

  inputField.onkeyup = function() {
    console.log('key pressed')

    if (inputField.value === '') {
      hideSuggestionList();
      clearListItems();
    }
    else if((/^(\s*)([a-z]+)/i).test(inputField.value)){
      sendRequest();
      showSuggestionList();
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
    console.log(url);
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status == 200) {
        console.log(xhr.responseText);
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
    console.log(inputSaved);
    if(matches.length === 0){
      inputSaved = inputField.value;
      suggestionElements[0].innerHTML =  '<span>'+inputSaved+'</span>';
    }
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
