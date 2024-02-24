import { getCategoryList } from '../api/books.js';
import { refs } from '../refs';
//Function for generation markup of all Categories in the list
function markupCatList({ list_name }) {
  return `<li class="itemCategory"> <button class="btnItemCategory" type="button">${list_name}</button></li>`;
}

//Function for added markup to the ul in th shop.html file
export async function renderCategoryList() {
  try {
    const categoryName = await getCategoryList();
    const categoryContainer = categoryName.map(markupCatList).join('');
    refs.ulCategoryContainer.insertAdjacentHTML('beforeend', categoryContainer);
  } catch (error) {
    console.error('Error rendering Category list', error);
  }
}
renderCategoryList();
