// Querying DOM elements for the message form and its inputs
const messageForm = document.querySelector('.message-form');
const messageFirstNameElement = messageForm.elements['first-name'];
const messageLastNameElement = messageForm.elements['last-name'];
const messageFormEmailAddress = messageForm.elements['email-address'];
const messageFormComment = messageForm.elements['comment'];

// Base URL for your domain
const baseUrl = window.location.origin;

// Function to send a message
async function sendMessage(fullName, email, message) {
  const response = await fetch(`${baseUrl}/contact-us`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ fullName, email, message }),
  });

  if (response.ok) {
    console.log('Message sent successfully');
  } else {
    console.error('Failed to send message');
  }
}

// Regular expression for validating email addresses
const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// Adding input validation for the first name field
messageFirstNameElement.addEventListener('input', () => {
  let value = messageFirstNameElement.value;

  if (value.trim() === '') {
    messageFirstNameElement.setCustomValidity('Please input your first name');
  } else {
    messageFirstNameElement.setCustomValidity('');
  }

  messageFirstNameElement.reportValidity();
});

// Adding input validation for the last name field
messageLastNameElement.addEventListener('input', () => {
  const { value } = messageFirstNameElement;

  if (value.trim() === '') {
    messageLastNameElement.setCustomValidity('Please input your last name');
  } else {
    messageLastNameElement.setCustomValidity('');
  }

  messageLastNameElement.reportValidity();
});

// Adding input validation for the email address field
messageFormEmailAddress.addEventListener('input', () => {
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

  const firstNameVal = messageFirstNameElement.value.trim();

  if (firstNameVal === '') {
    messageFirstNameElement.setCustomValidity('Please input your first name');
    messageFirstNameElement.reportValidity();
    return;
  }

  const lastNameVal = messageLastNameElement.value.trim();

  if (lastNameVal === '') {
    messageLastNameElement.setCustomValidity('Please input your last name');
    messageLastNameElement.reportValidity();
    return;
  }

  const emailAddressVal = messageFormEmailAddress.value.trim();

  if (emailAddressVal === '' || !emailRegExp.test(emailAddressVal)) {
    messageFormEmailAddress.setCustomValidity(
      'Please input a valid email address',
    );
    messageFormEmailAddress.reportValidity();
    return;
  }

  const messageFormCommentVal = messageFormComment.value.trim();

  // Perform action in the backend with the form values
  const fullName = `${firstNameVal} ${lastNameVal}`;
  sendMessage(fullName, emailAddressVal, messageFormCommentVal);
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
