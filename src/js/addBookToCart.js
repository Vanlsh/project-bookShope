import { setToLocalStorage, getFromLocalStorage } from './localStorageAPI';
import { refsLS } from './keyConstsLS';

let booksInCart = refsLS.booksInCart;

function addBookToCart(book) {
  // get array from Local Storage
  booksInCart = getFromLocalStorage('booksInCart');
  //if local Storage doesn`t have arraay, create new arr with obj "book"
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
    }
  }
  //Save update arr in Local Storage
  setToLocalStorage('booksInCart', booksInCart);
  console.log('The book was successfully written to Cart'); // insted of this notification in console we can use Izi Toast
}
