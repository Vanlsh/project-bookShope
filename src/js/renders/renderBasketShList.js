import { markupBasketItem } from '../markups/markupBasketShList';
import { refsLS } from '../keyConstsLS';
import { getFromLocalStorage } from '../localStorageAPI';
import { refsShoppingList } from '../refsShoppingList';

export function renderBasketItem() {
  refsShoppingList.basketShoppingList.innerHTML = '';

  let data = getFromLocalStorage(refsLS.booksInCart);
  console.log(data);
  const isCardEmpty = !data || !data.length;
  if (isCardEmpty) {
    refsShoppingList.emptyCardContainer.classList.remove('none');
    return;
  }

  const books = data.map(markupBasketItem).join('');
  refsShoppingList.basketShoppingList.innerHTML = books;
}
