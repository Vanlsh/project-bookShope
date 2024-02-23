import { setToLocalStorage, getFromLocalStorage } from './localStorageAPI';

function removeBookFromCart(bookId) {
  //Get arr from Local Storage
  let booksInCart = getFromLocalStorage('booksInCart');

  if (booksInCart === null) {
    return;
  }
  //Find the index of book for it`s id
  const index = booksInCart.findIndex(book => book._id === bookId);

  //if book doesn`t fnd
  if (index === -1) {
    console.log(`The book with id: "${bookId}" was not found`);
    return;
  }
  //Delete book from the arr by it`s index
  booksInCart.splice(index, 1);

  //Update data in Local Storage
  setToLocalStorage('booksInCart', booksInCart);
  console.log(`The book with id ${bookId} was remove from cart`);
}

removeBookFromCart('642fd89ac8cf5ee957f12361');
