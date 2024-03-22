// Логіка для другої сторінки

import { onDeleteBtn } from './events/onDeleteBtn';
import { refsShoppingList } from './refsShoppingList';
import { renderBasketItem } from './renders/renderBasketShList';
import { getFromLocalStorage } from './localStorageAPI';
import { refsLS } from './keyConstsLS';
import { btnClickTrendingPagination, pagination } from './pagination';
import { bookCounter } from './bookCounter';

refsShoppingList.basketShoppingList.addEventListener('click', onDeleteBtn);

function render() {
  const length = getFromLocalStorage(refsLS.booksInCart).length;
  //Calculating books in Cart
  bookCounter();
  //
  pagination.reset(length);
  const data = btnClickTrendingPagination(1);
  renderBasketItem(data);
  if (length <= 3) {
    refsShoppingList.paginationDiv.classList.add('visually-hidden');
  }
}

render();
