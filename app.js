// query selectors
let capButton = document.querySelector("#cap-button");
let lowerButton = document.querySelector("#lower-button");

// functions
// ============================================================================
function capitalizeText() {
  // Get the input field by its id
  let upperInputField = document.getElementById("upper-input-field");
  // Get the current text in the input field
  let text = upperInputField.value;
  // Capitalize the text
  let capitalizedText = text.toUpperCase();
  // Update the input field with the capitalized text
  upperInputField.value = capitalizedText;
}

function lowercaseText() {
  // Get the input field by its id
  let lowerInputField = document.getElementById("lower-input-field");
  // Get the current text in the input field
  let text = lowerInputField.value;
  // Capitalize the text
  let capitalizedText = text.toLowerCase();
  // Update the input field with the capitalized text
  lowerInputField.value = capitalizedText;
}

// event listeners
// ============================================================================
capButton.addEventListener("click", capitalizeText);
lowerButton.addEventListener("click", lowercaseText);
