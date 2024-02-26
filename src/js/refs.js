export const refs = {
  ulCategoryContainer: document.querySelector('#listContainer'),
  gallery: document.querySelector('.js-gallery'),
  loader: document.querySelector('.load-div'),
  btnAllCategories: document.querySelector(
    'button[data-category="All categories"]'
  ),
  modalWrapper: document.querySelector('.js-modal-wrapper'),
  modalImg: document.querySelector('.js-modal-img'),
  modalTitle: document.querySelector('.js-modal-title'),
  modalDescription: document.querySelector('.js-modal-description'),
  modalText: document.querySelector('.js-modal-text'),
  modalLinks: document.querySelector('.js-modal-links-icon'),
  modalBtn: document.querySelector('.js-modal-btn'),
  modalCongratulation: document.querySelector('.js-modal-congratulation'),
  modalClose: document.querySelector('.js-icon-close'),
  openButton: document.querySelector('.header-open-button'),
  closeButton: document.querySelector('.header-close-button'),
  menuWrapper: document.querySelector('.burger-wraper'),
  headerContainer: document.querySelector('.header-container'),
  body: document.querySelector('body'),
  menuLinks: document.querySelectorAll('.burger-list'),
  currentPage: window.location.pathname,
  menuItems: document.querySelectorAll('.burger-list-ithem')
};
