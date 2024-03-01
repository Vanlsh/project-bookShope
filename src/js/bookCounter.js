import { refsLS } from './keyConstsLS';
import { refs } from './refs';
import { getFromLocalStorage } from './localStorageAPI';

export function bookCounter() {
  const booksInLS = getFromLocalStorage(refsLS.booksInCart).length;
  console.log(booksInLS);
  if (booksInLS > 0) {
    refs.bookCounter.classList.remove('visually-hidden');
    refs.bookCounter.innerText = booksInLS;
  } else {
    refs.bookCounter.classList.add('visually-hidden');
  }
}
