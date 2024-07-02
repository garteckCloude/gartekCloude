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
