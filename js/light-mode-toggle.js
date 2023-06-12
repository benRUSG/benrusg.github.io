// check for saved 'lightMode' in localStorage
let lightMode = localStorage.getItem('lightMode'); 

const darkModeToggle = document.querySelector('#dark-mode-toggle');

const enableDarkMode = () => {
  // 1. Add the class to the body
  document.body.classList.add('lightmode');
  // 2. Update lightMode in localStorage
  localStorage.setItem('lightMode', 'enabled');
}

const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove('lightmode');
  // 2. Update lightMode in localStorage 
  localStorage.setItem('lightMode', null);
}
 
// If the user already visited and enabled lightMode
// start things off with it on
if (lightMode === 'enabled') {
  enableDarkMode();
}

// When someone clicks the button
darkModeToggle.addEventListener('click', () => {
  // get their lightMode setting
  lightMode = localStorage.getItem('lightMode'); 
  
  // if it not current enabled, enable it
  if (lightMode !== 'enabled') {
    enableDarkMode();
  // if it has been enabled, turn it off  
  } else {  
    disableDarkMode(); 
  }
});
