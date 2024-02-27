// Логіка для другої сторінки

import { onDeleteBtn } from './events/onDeleteBtn';
import { refsShoppingList } from './refsShoppingList';
import { renderBasketItem } from './renders/renderBasketShList';
import { getFromLocalStorage } from './localStorageAPI';
import { refsLS } from './keyConstsLS';
import { btnClickTrendingPagination, pagination } from './pagination';

refsShoppingList.basketShoppingList.addEventListener('click', onDeleteBtn);

function render() {
  const length = getFromLocalStorage(refsLS.booksInCart).length;
  pagination.reset(length);
  const data = btnClickTrendingPagination(1);
  renderBasketItem(data);
}

render();
