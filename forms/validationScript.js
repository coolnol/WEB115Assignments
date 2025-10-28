// JavaScript code for form validation
document.addEventListener("DOMContentLoaded", function() {

  // Prevent form from submitting
  const form = document.getElementById("myForm");
  const inputField = document.getElementById("inputField");
  const message = document.createElement("p");
  form.appendChild(message);

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Retrieve the input field value
    const inputValue = inputField.value.trim();

    // Regular expression pattern for alphanumeric input
    const alphaNumPattern = /^[a-zA-Z0-9]+$/;

    // Check if the input value matches the pattern
    if (alphaNumPattern.test(inputValue)) {
      // Valid input: display confirmation and submit the form
      message.textContent = "Form submitted successfully! ✅";
      message.style.color = "green";
    } else {
      // Invalid input: display error message
      message.textContent = "Error: Please enter only letters and numbers.";
      message.style.color = "red";
    }
  });
});
