import { renderBestSellerBooks } from './renders/renderBestSellers';
import { renderCategory } from './renders/renderCategoryBooks';

export function handlerGalleryNav(evt) {
  if (evt.target.nodeName !== 'BUTTON') return;
  const buttons = document.querySelectorAll('button[data-category]');
  buttons.forEach(btn => btn.classList.remove('active'));
  evt.target.classList.add('active');

  const attributeValue = evt.target.getAttribute('data-category');
  if (attributeValue === 'All categories') {
    renderBestSellerBooks();
  } else {
    renderCategory(attributeValue);
  }
}
