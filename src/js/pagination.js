import Pagination from 'tui-pagination'; // Імпорт бібліотеки
import 'tui-pagination/dist/tui-pagination.css'; // Імпорт CSS стилів
import { getFromLocalStorage } from './localStorageAPI';
import { refsLS } from './keyConstsLS';
import { renderBasketItem } from './renders/renderBasketShList';

// зробити реф
const paginationDiv = document.getElementById('pagination');

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

export function paganation(totalItems) {
  const options = {
    totalItems: totalItems,
    itemsPerPage: 3,
    visiblePages: 3,
    page: 1,
    centerAlign: false,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
    template: {
      page: '<a href="#" class="tui-page-btn">{{page}}</a>',
      currentPage:
        '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
      moveButton:
        '<a href="#" class="tui-page-btn tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</a>',
      disabledMoveButton:
        '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</span>',
      moreButton:
        '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
        '<span class="tui-ico-ellip">...</span>' +
        '</a>',
    },
  };
}
export const pagination = new Pagination(paginationDiv, options);

pagination.on('afterMove', event => {
  const data = btnClickTrendingPagination(event.page);
  renderBasketItem(data);
});
