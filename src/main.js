import './js/renders/renderNavCategoriesList';
import { refs } from './js/refs';
import { renderCategory } from './js/renders/renderCategoryBooks';
import { getCategoryList } from './js/api/books';
const { ulCategoryContainer } = refs;
const cattegoryList = await getCategoryList();
const arrNameCategory = cattegoryList.map(itemName => itemName.list_name);

ulCategoryContainer.addEventListener('click', getSpecificCategory);

function getSpecificCategory(evt) {
  if (evt.target.nodeName === 'BUTTON') {
    const attributeValue = evt.target.getAttribute('data-category');
    if (attributeValue === 'All categories') {
      console.log('Rendering Best Sellers Books!');
    } else if (arrNameCategory.includes(attributeValue)) {
      renderCategory(attributeValue);
    }
  }
}
