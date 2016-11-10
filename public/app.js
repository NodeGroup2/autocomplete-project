var inputField = document.querySelector(".input_field");

inputField.onkeyup = sendRequest;

function sendRequest() {
  var input = inputField.value;
  console.log(input);
}
