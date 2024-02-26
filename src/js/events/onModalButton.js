import { getFromLocalStorage } from '../localStorageAPI';
import { removeBookFromCart } from '../removeBookFromCart';
import { addBookToCart } from '../addBookToCart';
import { refsLS } from '../keyConstsLS';
import { refs } from '../refs';
import {
  ADD,
  REMOVE,
  HIDDEN,
  TEXT_MODAL_BUTTON_ADD,
  TEXT_MODAL_BUTTON_REMOVE,
} from '../commonConst';

export function onModalButton(e) {
  const { type, id } = e.target.dataset;
  if (type === ADD) {
    addBookToCart(getFromLocalStorage(refsLS.categoryOpenInModal));
    e.target.setAttribute('data-type', REMOVE);
    e.target.textContent = TEXT_MODAL_BUTTON_REMOVE;
    refs.modalCongratulation.classList.remove(HIDDEN);
  } else {
    removeBookFromCart(id);
    e.target.setAttribute('data-type', ADD);
    e.target.textContent = TEXT_MODAL_BUTTON_ADD;
    refs.modalCongratulation.classList.add(HIDDEN);
  }
}
