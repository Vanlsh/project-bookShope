import { refs } from './refs';  

document.addEventListener('DOMContentLoaded', function () {

  refs.openButton.addEventListener('click', function() {
    refs.menuWrapper.classList.add('menu-is-open');
    refs.headerContainer.classList.add('is-open');
    refs.body.style.overflow = 'hidden'; 
  });

  refs.closeButton.addEventListener('click', function() {
    refs.menuWrapper.classList.remove('menu-is-open');
    refs.headerContainer.classList.remove('is-open');
    refs.body.style.overflow = '';
  });

  refs.closeButton.addEventListener('click', function() {
    refs.menuWrapper.classList.replace('menu-is-open', 'menu-is-closed');
  });
    
  refs.menuLinks.forEach(link => {
    link.addEventListener('click', function() {
      refs.menuWrapper.classList.remove('menu-is-open');
      refs.headerContainer.classList.remove('is-open');
      refs.body.style.overflow = '';
    });
  });


function hideBurgerMenu() {
    refs.menuWrapper.classList.remove('menu-is-open');
    refs.headerContainer.classList.remove('is-open');
    refs.body.style.overflow = '';
}

// Додаємо обробник події для зміни орієнтації
window.addEventListener("orientationchange", function() {
    hideBurgerMenu();
});
});


// Функція для встановлення активного стилю для пункту меню
refs.menuItems.forEach(function(item) {
  let link = item.querySelector('.burger-list-link');
  let linkPath = link.getAttribute('href').split('/').pop();
  let currentPagePath = refs.currentPage.split('/').pop();
  if (linkPath === currentPagePath) {
    item.classList.remove('burger-list-ithem');
    item.classList.add('burger-list-active');
  }
});




