import Pagination from 'tui-pagination'; // Імпорт бібліотеки
import 'tui-pagination/dist/tui-pagination.css'; // Імпорт CSS стилів
// import { getFromLocalStorage } from './localStorageAPI';
import { getFromLocalStorage } from './localStorageAPI';
import { refsLS } from './keyConstsLS';

// зробити реф
const paginationDiv = document.getElementById('pagination');
let data = getFromLocalStorage(refsLS.booksInCart);

let totalItems = data.length;

export const markupPagination = {
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
const pagination = new Pagination(paginationDiv, markupPagination);

// Поточна сторінка, зараз вона 1
let currentPage = pagination.getCurrentPage();
console.log(currentPage);

// Перейти до певної сторінки, перемалювати список, (цільова сторінка)
// let pageTo = pagination.movePageTo(targetPage);
// console.log(pageTo);

//  скинути нумерацію сторінок, (перемалювати кількість елементів сторінки)
// let reset = pagination.reset(totalItems);
// pagination.reset();
// pagination.reset(100);

// Встановити кількість елементів на сторінці, (кількість предметів)
let itemBooks = pagination.setItemsPerPage(3);
console.log(itemBooks);
// Встановити загальну кількість елементів, (заг кількість елементів)
// let totalItemBooks = setTotalItems(itemCount);

// page - перенесена сторінка
// pagination.on('afterMove', event => {
//   const currentPage = event.page;
//   console.log(currentPage);
// });

// page - перенесена сторінка
// paganation.on('beforeMove', event => {
//   const currentPage = event.page;

//   if (currentPage === 10) {
//     return false;
//     // return true;
//   }
// });
