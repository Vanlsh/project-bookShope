import { renderCategory } from '../renders/renderCategoryBooks';
import { removeBntNavStyles } from '../helpers/removeBntNavStyles';
import { refsLS } from '../keyConstsLS';
import { setToLocalStorage } from '../localStorageAPI';

export function onSeeMore(event) {
  const categoryName = event.target.dataset.category;
  const btnCategoryTitle = document.querySelector(
    `.item-category button[data-category="${categoryName}"]`
  );
  removeBntNavStyles();
  btnCategoryTitle.classList.add('active');
  setToLocalStorage(refsLS.categoryName, categoryName);
  renderCategory(categoryName);
}
