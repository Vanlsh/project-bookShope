import { renderBestSellerBooks } from './renders/renderBestSellers';
import { renderCategory } from './renders/renderCategoryBooks';
import { getCategoryList } from './api/books';
const cattegoryList = await getCategoryList();
const arrNameCategory = cattegoryList.map(itemName => itemName.list_name);

export function getSpecificCategory(evt) {
  if (evt.target.nodeName === 'BUTTON') {
    const attributeValue = evt.target.getAttribute('data-category');
    if (attributeValue === 'All categories') {
      renderBestSellerBooks();
    } else if (arrNameCategory.includes(attributeValue)) {
      renderCategory(attributeValue);
    }
  }
}
