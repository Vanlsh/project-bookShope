  const openButton = document.querySelector('.header-open-button');
  const closeButton = document.querySelector('.header-close-button');
  const menuWrapper = document.querySelector('.burger-wraper');
  const headerContainer = document.querySelector('.header-container');
  const body = document.querySelector('body');

document.addEventListener('DOMContentLoaded', function () {


  openButton.addEventListener('click', function() {
    menuWrapper.classList.add('menu-is-open');
    headerContainer.classList.add('is-open');
    body.style.overflow = 'hidden'; 

   
    headerContainer.style.backgroundColor = 'var(--item-background-color)';
  });

  closeButton.addEventListener('click', function() {
    menuWrapper.classList.remove('menu-is-open');
    headerContainer.classList.remove('is-open');
    body.style.overflow = '';
  });

  closeButton.addEventListener('click', function() {
    menuWrapper.classList.replace('menu-is-open', 'menu-is-closed');
  });

    const menuLinks = document.querySelectorAll('.burger-list a');
    
    
  menuLinks.forEach(link => {
    link.addEventListener('click', function() {
      menuWrapper.classList.remove('menu-is-open');
      headerContainer.classList.remove('is-open');
      body.style.overflow = '';
    });
  });
});
