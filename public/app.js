var inputField = document.querySelector(".input_field");

// var suggestionElements = document.querySelectorAll(".suggestion_element");
// for (var i = 0; i < suggestionElements.length; i++) {
//   var suggestion = suggestion[i];
//   button.addEventListener("click", function() {
//     handleInput(this.id);
//   });
// };


inputField.onkeyup = function() {
  sendRequest();
  showSuggestionList();
}

function showSuggestionList() {
  document.querySelector(".suggestion_container").classList.remove("closed");
}

function sendRequest() {
  var input = inputField.value.split(' ');
  var inputLast = input[input.length-1];
  var url = '/' + inputLast;
  var xhr = new XMLHttpRequest();
  xhr.addEventListener('load', function() {
    var response = JSON.parse(xhr.responseText);
    var matches = []; // update with appropriate json object
    updateDOM(matches);
  })
}

// function updateDOM(matches) {
//   matches.forEach(function(match){
//     document.querySelector()
//   })
// }
