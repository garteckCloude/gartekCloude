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

// Handling form submission
messageForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const firstName = messageForm.elements['first-name'];

  if (firstName.value.trim() === '') {
    firstName.setCustomValidity('Please input your first name');
    firstName.reportValidity();
    return;
  }

  const emailAddress = messageForm.elements['email-address'];

  if (
    emailAddress.value.trim() === '' ||
    !emailRegExp.test(emailAddress.value)
  ) {
    emailAddress.setCustomValidity('Please input a valid email address');
    emailAddress.reportValidity();
    return;
  }

  // Perform action in the backend with the form values
  alert('form submitted');
});

// Querying DOM elements for the off-screen menu toggle button and close button
const toggleBtn = document.querySelector('.menu-toggle-btn');
const offScreenMenu = document.querySelector('.off-screen-menu');
const closeOffScreenMenu = document.querySelector('.close-off-screen-menu-btn');

// Toggle off-screen menu visibility when the toggle button is clicked
toggleBtn.addEventListener('click', (e) => {
  const { currentTarget } = e;
  const { menuState } = currentTarget.dataset;

  if (menuState === 'hidden') {
    offScreenMenu.dataset.menuState = 'visible';
    closeOffScreenMenu.dataset.menuState = 'visible';
    toggleBtn.dataset.menuState = 'visible';
  }

  if (menuState === 'visible') {
    offScreenMenu.dataset.menuState = 'hidden';
    closeOffScreenMenu.dataset.menuState = 'hidden';
    toggleBtn.dataset.menuState = 'hidden';
  }
});

// Toggle off-screen menu visibility when the close button is clicked
closeOffScreenMenu.addEventListener('click', (e) => {
  const { currentTarget } = e;
  const { menuState } = currentTarget.dataset;

  if (menuState === 'hidden') {
    offScreenMenu.dataset.menuState = 'visible';
    closeOffScreenMenu.dataset.menuState = 'visible';
    toggleBtn.dataset.menuState = 'visible';
  }

  if (menuState === 'visible') {
    offScreenMenu.dataset.menuState = 'hidden';
    closeOffScreenMenu.dataset.menuState = 'hidden';
    toggleBtn.dataset.menuState = 'hidden';
  }
});
