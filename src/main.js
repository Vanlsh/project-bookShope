import './js/renders/renderNavCategoriesList';
import { handlerGalleryNav } from './js/events/handlerGalleryNav';
import { onModalButton } from './js/events/onModalButton';
import { onCloseModal } from './js/events/onCloseModal';
import { refs } from './js/refs';
import { onLoadAllBestSelBooks } from './js/events/onLoadAllBestSellers';

const { ulCategoryContainer, modalBtn, modalClose, modalWrapper } = refs;

document.addEventListener('DOMContentLoaded', onLoadAllBestSelBooks);

ulCategoryContainer.addEventListener('click', handlerGalleryNav);
modalBtn.addEventListener('click', onModalButton);
modalClose.addEventListener('click', onCloseModal);
modalWrapper.addEventListener('click', onCloseModal);
