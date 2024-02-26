import { refs } from '../refs';
const { ulCategoryContainer } = refs;
import { refsLS } from '../keyConstsLS';
const { categoryName } = refsLS;
import { getFromLocalStorage } from '../localStorageAPI';

//scrolling Elem in Categories list container after reload  page
export function scrollHighlightElem() {
  const getCategoryName = getFromLocalStorage(categoryName);
  console.log(getCategoryName);
  const highlightedElement = document.querySelector(
    `button[data-category="${getCategoryName}"]`
  );
  console.log(highlightedElement);
  if (highlightedElement) {
    if (ulCategoryContainer) {
      ulCategoryContainer.scrollTop =
        highlightedElement.offsetTop -
        ulCategoryContainer.offsetTop -
        ulCategoryContainer.clientHeight / 2 +
        highlightedElement.clientHeight / 2;
    }
  }
}
