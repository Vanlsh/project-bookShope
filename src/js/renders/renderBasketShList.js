import { markupBasketItem } from '../markups/markupBasketShList';
import { refsShoppingList } from '../refsShoppingList';

export function renderBasketItem(data) {
  refsShoppingList.basketShoppingList.innerHTML = '';
  refsShoppingList.paginationDiv.classList.add('visually-hidden');
  const isCardEmpty = !data || !data.length;
  if (isCardEmpty) {
    refsShoppingList.emptyCardContainer.classList.remove('none');
    return;
  }

  const books = data.map(markupBasketItem).join('');
  refsShoppingList.basketShoppingList.innerHTML = books;
  refsShoppingList.paginationDiv.classList.remove('visually-hidden');
}
