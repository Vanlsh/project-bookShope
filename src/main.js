import './js/renders/renderNavCategoriesList';
import { handlerGalleryNav } from './js/handlerGalleryNav';
import { onModalButton } from './js/events/onModalButton';
import { onCloseModal } from './js/events/onCloseModal';
import { refs } from './js/refs';

const { ulCategoryContainer, modalBtn, modalClose, modalWrapper } = refs;

ulCategoryContainer.addEventListener('click', handlerGalleryNav);
modalBtn.addEventListener('click', onModalButton);
modalClose.addEventListener('click', onCloseModal);
modalWrapper.addEventListener('click', onCloseModal);
