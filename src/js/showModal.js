import { refs } from './refs';
import { getById } from './api/books';
import { refsLS } from './keyConstsLS';
import { setToLocalStorage } from './localStorageAPI';
import { isBookInCart } from './helpers/isBookInCart';
import { markupBuyLinks } from './markups/markupBuyLinks';
import {
  ADD,
  REMOVE,
  TEXT_MODAL_BUTTON_ADD,
  TEXT_MODAL_BUTTON_REMOVE,
  IS_OPEN,
  HIDDEN,
} from './commonConst';

const {
  modalWrapper,
  modalImg,
  modalTitle,
  modalDescription,
  modalText,
  modalLinks,
  modalBtn,
  modalCongratulation,
} = refs;

export async function showModal(id) {
  document.body.style.overflow = 'hidden';
  const data = await getById(id);
  if (!data) {
    document.body.style.overflow = '';
    return;
  }
  setToLocalStorage(refsLS.categoryOpenInModal, data);

  const { _id, book_image, description, author, title, buy_links } = data;
  const isInCart = isBookInCart(_id);

  modalLinks.innerHTML = markupBuyLinks(buy_links);
  modalTitle.textContent = title;
  modalDescription.textContent = author;
  modalText.textContent = description;
  modalImg.src = book_image;
  modalBtn.textContent = isInCart
    ? TEXT_MODAL_BUTTON_REMOVE
    : TEXT_MODAL_BUTTON_ADD;

  modalBtn.dataset.id = _id;
  modalBtn.setAttribute('data-type', isInCart ? REMOVE : ADD);
  modalWrapper.classList.add(IS_OPEN);

  if (isInCart) modalCongratulation.classList.remove(HIDDEN);
}
