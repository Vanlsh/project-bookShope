import { refs } from '../refs';
const { ulCategoryContainer } = refs;
import { refsLS } from '../keyConstsLS';
const { categoryName } = refsLS;
import { getFromLocalStorage } from '../localStorageAPI';

//scrolling Elem in Categories list container after reload  page
export function scrollHighlightElem() {
  const getCategoryName = getFromLocalStorage(categoryName);
  const highlightedElement = document.querySelector(
    `button[data-category="${getCategoryName}"]`
  );
  if (highlightedElement && ulCategoryContainer) {
    ulCategoryContainer.scrollTop =
      highlightedElement.offsetTop -
      ulCategoryContainer.offsetTop -
      ulCategoryContainer.clientHeight / 2 +
      highlightedElement.clientHeight / 2;
  }
}
