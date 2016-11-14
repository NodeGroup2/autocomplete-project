var autocomplete = (function() {
  // global app variables
  var inputField = document.querySelector(".input_field");
  var suggestionElements = document.querySelectorAll(".suggestion_element");
  var searchBtn = document.querySelector(".search_btn");
  var inputSaved = '';
  var inputLast = '';
  var matches = '';
  var input = '';

  inputField.onkeyup = function() {
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
    if(matches.length === 0){
      inputSaved = inputField.value;
      suggestionElements[0].innerHTML =  '<span>'+inputSaved+'</span>';
    }
    matches.forEach(function(match, i){
      suggestionElements[i].innerHTML =  inputSaved + ' ' + '<span class="match">'+match+'</span>';
      addListenersToMatchItems();
    })
  }

  // Event listeners for clicking all suggested elements
  function addListenersToMatchItems() {
    var match_items = document.querySelectorAll('.match');
    for (var i = 0; i < match_items.length; i++) {
      match_items[i].onclick = function(e) {
        e.preventDefault();
        inputLast = e.target.textContent;
        inputField.value = inputSaved + (inputSaved ? ' ' : '') + inputLast + ' ';
        inputField.focus();
      };
    }
  };

  searchBtn.onclick = function() {
    redirectToGoogle();
  }

  inputField.onkeypress = function(e) {
    if (e.keyCode == 13) {
      redirectToGoogle();
    }
  }

  function redirectToGoogle() {
    var inputValue = (inputField.value).replace(/\s/g, '+');
    if (inputValue) {
      var googleLink = "https://www.google.co.uk/?#q=" + inputValue;
      window.open(googleLink);
    }
  }

  // Create object holding global variables for testing purposes
   return {
     inputField : inputField,
     suggestionElements : suggestionElements,
     inputSaved : inputSaved,
     inputLast : inputLast,
     matches : matches,
     clearListItems : clearListItems,
     updateDOM : updateDOM,
     sendRequest : sendRequest
   };
})();
