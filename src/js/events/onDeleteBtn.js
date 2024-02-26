import { refsShoppingList } from '../refsShoppingList';
import { removeBookFromCart } from '../removeBookFromCart';
import { getFromLocalStorage } from '../localStorageAPI';
import { refsLS } from '../keyConstsLS';

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
  }
}
