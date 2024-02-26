import { renderBestSellerBooks } from '../renders/renderBestSellers';
import { getFromLocalStorage } from '../localStorageAPI';
import { renderCategory } from '../renders/renderCategoryBooks';
import { refsLS } from '../keyConstsLS';
const { categoryName } = refsLS;
import { refs } from '../refs';
const { btnAllCategories } = refs;
//винести в Рефс

export function onLoadAllBestSelBooks() {
  const getCategoryName = getFromLocalStorage(categoryName);
  if (getCategoryName === null || getCategoryName === 'All categories') {
    btnAllCategories.classList.add('active');

    renderBestSellerBooks();
  } else {
    renderCategory(getCategoryName);
  }
}
