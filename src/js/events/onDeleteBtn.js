import { refsShoppingList } from '../refsShoppingList';
import { removeBookFromCart } from '../helpers/removeBookFromCart';
import { getFromLocalStorage } from '../localStorageAPI';
import { refsLS } from '../keyConstsLS';
import { pagination } from '../pagination';
export function onDeleteBtn(event) {
  const deleteButton = event.target.closest('button');
  if (!deleteButton) {
    return;
  }
  removeBookFromCart(deleteButton.dataset.id);
  const listItem = event.target.closest('li');
  listItem.remove();
  let data = getFromLocalStorage(refsLS.booksInCart);
  const isCardEmpty = !data || !data.length;
  if (isCardEmpty) {
    refsShoppingList.emptyCardContainer.classList.remove('none');

    return;
  }
  pagination.reset(data.length);
  const page = Math.ceil(data.length / 3);
  pagination.movePageTo(page);
}
