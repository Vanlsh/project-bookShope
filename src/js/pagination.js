import Pagination from 'tui-pagination'; // Імпорт бібліотеки
import 'tui-pagination/dist/tui-pagination.css'; // Імпорт CSS стилів
import { getFromLocalStorage } from './localStorageAPI';
import { refsLS } from './keyConstsLS';
import { refsShoppingList } from './refsShoppingList';
import { renderBasketItem } from './renders/renderBasketShList';
import { options } from './optionsPagination';

export const pagination = new Pagination(
  refsShoppingList.paginationDiv,
  options
);

pagination.on('afterMove', event => {
  const data = btnClickTrendingPagination(event.page);
  renderBasketItem(data);
});

export function btnClickTrendingPagination(page) {
  const itemsPerPage = 3;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const pageBooks = getFromLocalStorage(refsLS.booksInCart).slice(
    startIndex,
    endIndex
  );
  return pageBooks;
}
