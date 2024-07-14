const joinWaitListFormEl = document.querySelector('.join-waitlist-form');
const joinWaitListEmailAddressEl = joinWaitListFormEl.elements['email'];

// Base URL for your domain
const baseUrl = window.location.origin;

// Regular expression for validating email addresses
const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// Function to join the wait list
async function joinWaitList(email) {
  const response = await fetch(`${baseUrl}/wait-list`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  });

  if (response.ok) {
    console.log('Successfully joined the waitlist');
  } else {
    console.error('Failed to join the waitlist');
  }
}

joinWaitListEmailAddressEl.addEventListener('input', () => {
  const { value } = joinWaitListEmailAddressEl;

  if (value.trim() === '' || !emailRegExp.test(value.trim())) {
    joinWaitListEmailAddressEl.setCustomValidity(
      'Please input a valid email address',
    );
  } else {
    joinWaitListEmailAddressEl.setCustomValidity('');
  }

  joinWaitListEmailAddressEl.reportValidity();
});

joinWaitListFormEl.addEventListener('submit', (e) => {
  e.preventDefault();

  const emailAddressVal = joinWaitListEmailAddressEl.value.trim();

  if (emailAddressVal === '' || !emailRegExp.test(emailAddressVal)) {
    joinWaitListEmailAddressEl.setValidity(
      'Please enter a valid email address',
    );
    joinWaitListEmailAddressEl.reportValidity();
    return;
  }

  joinWaitList(emailAddressVal);
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
