import { refsLS } from './keyConstsLS';
import { refs } from './refs';
import { getFromLocalStorage } from './localStorageAPI';

export function bookCounter() {
  const booksInLS = getFromLocalStorage(refsLS.booksInCart);
  if (booksInLS !== null && booksInLS.length > 0) {
    refs.bookCounters.forEach(bookCounter => {
      bookCounter.classList.remove('visually-hidden');
      bookCounter.innerText = booksInLS.length;
    });
  } else {
    refs.bookCounters.forEach(bookCounter => {
      bookCounter.classList.add('visually-hidden');
    });
  }
}
