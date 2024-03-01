import { getFromLocalStorage } from '../localStorageAPI';
import { removeBookFromCart } from '../helpers/removeBookFromCart';
import { addBookToCart } from '../helpers/addBookToCart';
import { refsLS } from '../keyConstsLS';
import { refs } from '../refs';
import {
  ADD,
  REMOVE,
  HIDDEN,
  TEXT_MODAL_BUTTON_ADD,
  TEXT_MODAL_BUTTON_REMOVE,
} from '../commonConst';
import { bookCounter } from '../bookCounter';

export function onModalButton(e) {
  const { type, id } = e.target.dataset;
  console.log(e.target.dataset);
  console.log(type);
  console.log(id);
  if (type === ADD) {
    addBookToCart(getFromLocalStorage(refsLS.categoryOpenInModal));
    e.target.setAttribute('data-type', REMOVE);
    e.target.textContent = TEXT_MODAL_BUTTON_REMOVE;
    refs.modalCongratulation.classList.remove(HIDDEN);
    refs.modalBtn.classList.add('clicked');
  } else {
    removeBookFromCart(id);
    e.target.setAttribute('data-type', ADD);
    e.target.textContent = TEXT_MODAL_BUTTON_ADD;
    refs.modalCongratulation.classList.add(HIDDEN);
    refs.modalBtn.classList.remove('clicked');
  }
  //Calculating books in Cart
  bookCounter();
}
