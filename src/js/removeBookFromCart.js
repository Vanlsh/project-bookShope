import { setToLocalStorage, getFromLocalStorage } from './localStorageAPI';

import { refsLS } from './keyConstsLS';
import { refs } from './refs';

export function removeBookFromCart(bookId) {
  //Get arr from Local Storage
  let booksInCart = getFromLocalStorage(refsLS.booksInCart);

  if (booksInCart === null) {
    return;
  }
  //Filtering and checking the unique books
  const newBook = booksInCart.filter(book => book._id !== bookId);

  //Update data in Local Storage
  setToLocalStorage(refsLS.booksInCart, newBook);
  console.log(`The book with id ${bookId} was remove from cart`);
  refs.modalBtn.classList.remove('clicked');
}
