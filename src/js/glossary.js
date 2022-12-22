import {fetchAndOutputTranslation} from './fetchInfo.js';

// Get a reference to the form element
let form = document.querySelector('form');

// Listen for the submit event on the form
form.addEventListener('submit', event => {
  // Prevent the default behavior of the form submission
  event.preventDefault();

  // Get the values of the input elements
  let language = document.querySelector('input[name="origin"]').value;
  let mathWord = document.querySelector('input[name="word"]').value;

  // Call the fetchAndOutputTranslation function with the user-entered values
  fetchAndOutputTranslation(language, mathWord);
});

