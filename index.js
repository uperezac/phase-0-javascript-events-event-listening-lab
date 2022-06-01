/* survey.js */

// Grab references to the elements we need.
const body = document.getElementById('js-body');
const spinner = document.getElementById('js-spinner');
const input = document.getElementById('js-breed-input');
const button = document.getElementById('js-submit-button');

// Register event listener for our body to handle our
// custom "loading" event.
body.addEventListener('loading', handleLoadingEvent);

// Register event listeners for our form.
input.addEventListener('input', handleInputEvent);
button.addEventListener('click', handleSubmitEvent);

// If "detail" is true, then we're loading and the spinner should show.
// Otherwise, it should hide.
function handleLoadingEvent(event) {
  spinner.hidden = !event.detail;
}

// Enable or disable the submit button based on form validation.
function handleInputEvent(event) {
  button.disabled = !event.target.value.length;
}

// Submit form data
function handleSubmitEvent(event) {
  // Prevent the default form submission behavior.
  event.preventDefault();

  // Dispatch a loading event before submitting.
  button.dispatchEvent(
    new CustomEvent('loading', { bubbles: true, detail: true })
  );

  // Simulate a form submission that takes five seconds
  // to return a result.
  setTimeout(() => {
    // When the form submission returns, dispatch an event
    // to say we're no longer loading.
    button.dispatchEvent(
      new CustomEvent('loading', { bubbles: true, detail: false })
    );
  }, 5000);
}