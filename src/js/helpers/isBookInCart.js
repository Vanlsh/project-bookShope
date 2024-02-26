import { getFromLocalStorage } from '../localStorageAPI';
import { refsLS } from '../keyConstsLS';

export function isBookInCart(id) {
  const books = getFromLocalStorage(refsLS.booksInCart);
  if (!books || !books.length) return false;
  return books.some(books => books._id === id);
}
