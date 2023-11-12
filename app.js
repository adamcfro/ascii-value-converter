/**
 * Retrieves a value from the input field and displays the ascii value of the
 * character.
 *
 * @format
 * @param {Event} e - The event parameter
 */

function displayResults(e) {
  e.preventDefault();

  const results = document.querySelector("#results");
  while (results.firstChild) {
    results.firstChild.remove();
  }

  const val = e.target.firstChild.nextSibling.value;
  const text = createTextBox(val);
  results.appendChild(text);

  const enterValue = document.querySelector("#enter-value");
  enterValue.value = "";
}

/**
 * Takes a keyboard character, converts it to ascii, and returns it in a text
 * node.
 *
 * @param {string|number} val - A keyboard character
 * @returns {HTMLElement} - Returns a text node
 */
function createTextBox(val) {
  const asciiVal = String(val).charCodeAt(0);
  const text = document.createTextNode(asciiVal);
  const div = document.createElement("div");
  div.appendChild(text);
  div.id = "text-box";
  return div;
}

/**
 * Adds event listener to form and initializes app.
 */
function startApp() {
  const form = document.querySelector("#form");
  form.addEventListener("submit", displayResults);
}

startApp();
