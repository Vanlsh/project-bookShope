import { renderBestSellerBooks } from './renders/renderBestSellers';
import { renderCategory } from './renders/renderCategoryBooks';

export function handlerGalleryNav(evt) {
  if (evt.target.nodeName !== 'BUTTON') return;

  const attributeValue = evt.target.getAttribute('data-category');

  if (attributeValue === 'All categories') {
    renderBestSellerBooks();
  } else {
    renderCategory(attributeValue);
  }
}
