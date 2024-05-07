document.addEventListener('DOMContentLoaded', function() {
  const themeSelector = document.getElementById('theme-selector');
  const bodyElement = document.body; 
  const logo = document.querySelector('.logo'); 

  function changeTheme() {
      if (themeSelector.value === 'dark') {
          bodyElement.classList.add('dark');
          logo.src = "./byui-logo_dark.png"; 
      } else {
          bodyElement.classList.remove('dark');
          logo.src = './byui-logo_blue.jpeg';
      }
  }

  themeSelector.addEventListener('change', changeTheme);
});

