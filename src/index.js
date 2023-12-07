// Per Scholas Software Engineering Bootcamp
// ALAB 316.4.1: Form Validation
// P1. Introduction
// Tasks:
//  - Review Default Files: HTML & CSS
//  - Research & Utilize Appropriate HTML Attributes & JS event listeners that meet requirements

// P2. General Requirements
// Tasks:
//  - Build & Display the appropriate error message
//      - Must return:
//          - Error type
//          - Description
//          - Input element
//              - where the error originates from
//  - If requirements for fail, the form should not submit

// Registration Form Element
const registration = document.getElementById("registration");
// Login Registration Form Element
const login = document.getElementById("login");
const formContainer = document.querySelector(".form-container");

// div containing the error message
const errorDisplay = document.getElementById("errorDisplay");

// Function for Handling Form Clicks
// e = event
function handleFormClick(e) {
  const input = e.target;
  //   console.log(input);
  // Finds the closest element ancestor based on any id
  let formType;

  const closestForm = input.closest("[id]");
  if (closestForm) {
    switch (closestForm.id) {
      case "registration":
        formType = "registration";
        break;
      case "login":
        formType = "login";
        break;
    }
    // console.log("Form Type: ", formType);
  }
  // Function for Handling Registration Inputs and display error message
  // e = event
  const name = closestForm.elements["name"];
  const email = closestForm.elements["email"];
  const password = closestForm.elements["password"];
  const passwordCheck = closestForm.elements["passwordCheck"];

  let errorType;
  let errorLocation;
  let errorDescription;
  const errorMessage = `Form Type: ${formType}
     Error Location: ${errorLocation}
     Error Type: ${errorType}
     Error Description: ${errorDescription} 
    `;
  errorDisplay.textContent = errorMessage;
}

// eventListener: Error Display
formContainer.addEventListener("click", handleFormClick);

// P3. Registration Form Validation Requirements
// Tasks:

// 1. Registration Form - Username Validation:
// The username cannot be blank.
// The username must be at least four characters long.
// The username must contain at least two unique characters.
// The username cannot contain any special characters or whitespace.

// 2. Registration Form - Email Validation:
// The email must be a valid email address.
// The email must not be from the domain "example.com."

// 3. Registration Form - Password Validation:
// Passwords must be at least 12 characters long.
// Passwords must have at least one uppercase and one lowercase letter.
// Passwords must contain at least one number.
// Passwords must contain at least one special character.
// Passwords cannot contain the word "password" (uppercase, lowercase, or mixed).
// Passwords cannot contain the username.
// Both passwords must match.

// 4. Registration Form - Terms and Conditions:
// The terms and conditions must be accepted.

// 5. Registration Form - Form Submission:
// Usually, we would send this information to an external API for processing. In our case, we are
// going to process and store the data locally for practice purposes.
// If all validation is successful, store the username, email, and password using localStorage.
// If you are unfamiliar with localStorage, that is okay! Reference the documentation's
// "Description" and "Examples" sections to learn how to implement it. If you run into issues
// speak with a peer or one of your instructors.
// Consider how you want to store the user data, keeping in mind that there will be quite a
// few users registering for the site. Perhaps you want to store it with an array of user
// objects; or maybe an object whose keys are the usernames themselves.
// Valid usernames should be converted to all lowercase before being stored.
// Valid emails should be converted to all lowercase before being stored.
// Clear all form fields after successful submission and show a success message.

// 6. Registration Form - Username Validation (Part Two):
// Now that we are storing usernames, create an additional validation rule for them...
// Usernames must be unique ("that username is already taken" error). Remember that
// usernames are being stored all lowercase, so "learner" and "Learner" are not unique.
