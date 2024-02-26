import { renderBestSellerBooks } from './renders/renderBestSellers';
import { renderCategory } from './renders/renderCategoryBooks';
import { removeBntNavStyles } from './helpers/removeBntNavStyles';
import { setToLocalStorage } from './localStorageAPI';
import { refsLS } from './keyConstsLS';
import { scrollGallery } from './helpers/scrollGallery';
const { categoryName } = refsLS;

export function handlerGalleryNav(evt) {
  if (evt.target.nodeName !== 'BUTTON') return;
  removeBntNavStyles();
  evt.target.classList.add('active');
  scrollGallery();
  const attributeValue = evt.target.getAttribute('data-category');
  //save the Name of Nav Category to LS
  setToLocalStorage(categoryName, attributeValue);

  if (attributeValue === 'All categories') {
    renderBestSellerBooks();
  } else {
    renderCategory(attributeValue);
  }
}
