import { markupBasketItem } from '../markups/markupBasketShList';
import { refsShoppingList } from '../refsShoppingList';

export function renderBasketItem(data) {
  refsShoppingList.basketShoppingList.innerHTML = '';
  const isCardEmpty = !data || !data.length;
  if (isCardEmpty) {
    refsShoppingList.emptyCardContainer.classList.remove('none');
    return;
  }
  const books = data.map(markupBasketItem).join('');
  refsShoppingList.basketShoppingList.innerHTML = books;
}
