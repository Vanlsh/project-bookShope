import { getCategoryList } from '../api/books.js';
import { refs } from '../refs.js';
import { markupNavCatList } from '../markups/markupNavCategories.js';
import { scrollHighlightElem } from '../helpers/scrollElemInCategoryList.js';

//Function for added markup to the ul in th shop.html file
export async function renderNavCategoryList() {
  try {
    const categoryName = await getCategoryList();
    const categoryContainer = categoryName.map(markupNavCatList).join('');
    refs.ulCategoryContainer.insertAdjacentHTML('beforeend', categoryContainer);
    //scrolling Elem in Categories list container after reload  page
    scrollHighlightElem();
    //
  } catch (error) {
    console.error('Error rendering Category list', error);
  }
}
renderNavCategoryList();
