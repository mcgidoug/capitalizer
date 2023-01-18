// query selectors
let capButton = document.querySelector("#cap-button");

// functions
// ============================================================================
function capitalizeText() {
  // Get the input field by its id
  let inputField = document.getElementById("inputField");
  // Get the current text in the input field
  let text = inputField.value;
  // Capitalize the text
  let capitalizedText = text.toUpperCase();
  // Update the input field with the capitalized text
  inputField.value = capitalizedText;
}

// event listeners
// ============================================================================
capButton.addEventListener("click", capitalizeText);
