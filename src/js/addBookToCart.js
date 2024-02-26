import { setToLocalStorage, getFromLocalStorage } from './localStorageAPI';
import { refsLS } from './keyConstsLS';
import { toastSuccess } from './components/toast';
import { refs } from './refs';

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
      console.log('This book already exists in your Cart!');
      return;
    } else {
      //Add book to arr
      booksInCart.push(book);
      refs.modalBtn.classList.add('clicked');
    }
  }
  //Save update arr in Local Storage
  setToLocalStorage(refsLS.booksInCart, booksInCart);
  toastSuccess('The book was successfully written to Cart!');
}
