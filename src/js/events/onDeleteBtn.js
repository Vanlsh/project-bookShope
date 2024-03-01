import { refsShoppingList } from '../refsShoppingList';
import { removeBookFromCart } from '../helpers/removeBookFromCart';
import { getFromLocalStorage } from '../localStorageAPI';
import { refsLS } from '../keyConstsLS';
import { pagination } from '../pagination';
import { renderBasketItem } from '../renders/renderBasketShList';
import { bookCounter } from '../bookCounter';

export function onDeleteBtn(event) {
  const deleteButton = event.target.closest('button');
  if (!deleteButton) {
    return;
  }
  removeBookFromCart(deleteButton.dataset.id);
  //Calculating books in Cart
  bookCounter();
  //
  const listItem = event.target.closest('li');
  listItem.remove();
  let data = getFromLocalStorage(refsLS.booksInCart);
  console.log(data.length);
  const isCardEmpty = !data || !data.length;
  if (isCardEmpty) {
    refsShoppingList.paginationDiv.classList.add('visually-hidden');
    renderBasketItem();
    return;
  }
  pagination.reset(data.length);
  const page = Math.ceil(data.length / 3);
  pagination.movePageTo(page);
  if (data.length <= 3) {
    refsShoppingList.paginationDiv.classList.add('visually-hidden');
  }
}
