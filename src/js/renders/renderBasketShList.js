import { markupBasketItem } from '../markups/markupBasketShList';
import { getFromLocalStorage } from '../localStorageAPI';
import { refsShoppingList } from '../refsShoppingList';
import { refsLS } from '../keyConstsLS';

export function renderBasketItem() {
  refsShoppingList.basketShoppingList.innerHTML = '';
  let data = getFromLocalStorage(refsLS.booksInCart);
  const isCardEmpty = !data || !data.length;

  if (isCardEmpty) {
    refsShoppingList.emptyCardContainer.classList.remove('none');
    return;
  }
  const books = data.map(markupBasketItem).join('');
  refsShoppingList.basketShoppingList.innerHTML = books;
}
