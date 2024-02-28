import { setToLocalStorage, getFromLocalStorage } from '../localStorageAPI';

import { refsLS } from '../keyConstsLS';

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
}
