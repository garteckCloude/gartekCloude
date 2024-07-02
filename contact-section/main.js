// Querying DOM elements for the message form and its inputs
const messageForm = document.querySelector('.message-form');
const messageFirstNameElement = messageForm.elements['first-name'];
const messageLastNameElement = messageForm.elements['last-name'];
const messageFormEmailAddress = messageForm.elements['email-address'];
const messageFormComment = messageForm.elements['comment'];
const messageFormSubmitBtn = document.querySelector('.message-form-submit-btn');

// Regular expression for validating email addresses
const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// Adding input validation for the first name field
messageFirstNameElement.addEventListener('input', (e) => {
  let value = messageFirstNameElement.value;

  if (value.trim() === '') {
    messageFirstNameElement.setCustomValidity('Please input your first name');
  } else {
    messageFirstNameElement.setCustomValidity('');
  }

  messageFirstNameElement.reportValidity();
});

// Adding input validation for the email address field
messageFormEmailAddress.addEventListener('input', (e) => {
  let value = messageFormEmailAddress.value;

  if (value.trim() === '' || !emailRegExp.test(value.trim())) {
    messageFormEmailAddress.setCustomValidity(
      'Please input a valid email address',
    );
  } else {
    messageFormEmailAddress.setCustomValidity('');
  }

  messageFormEmailAddress.reportValidity();
});
