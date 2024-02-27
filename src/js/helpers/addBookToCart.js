import { setToLocalStorage, getFromLocalStorage } from '../localStorageAPI';
import { refsLS } from '../keyConstsLS';

export function addBookToCart(book) {
  // get array from Local Storage
  let booksInCart = getFromLocalStorage(refsLS.booksInCart);
  //if local Storage doesn`t have array, create new arr with obj "book"
  if (booksInCart === null) {
    booksInCart = [book];
  } else {
    //We should check if book exists in booksInCart
    const isBookInCart = booksInCart.some(item => item._id === book._id);
    if (isBookInCart) {
      //We can add library iziToast
      return;
    } else {
      //Add book to arr
      booksInCart.push(book);
    }
  }
  //Save update arr in Local Storage
  setToLocalStorage(refsLS.booksInCart, booksInCart);
}
