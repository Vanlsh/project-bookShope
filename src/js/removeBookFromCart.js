import { setToLocalStorage, getFromLocalStorage } from './localStorageAPI';

import { refsLS } from './keyConstsLS';

let booksInCart = refsLS.booksInCart;

function removeBookFromCart(bookId) {
  //Get arr from Local Storage
  booksInCart = getFromLocalStorage('booksInCart');

  if (booksInCart === null) {
    return;
  }
  //Filtering and checking the unique books
  const newBook = booksInCart.filter(book => book._id !== bookId);

  //Update data in Local Storage
  setToLocalStorage('booksInCart', newBook);
  console.log(`The book with id ${bookId} was remove from cart`);
}
