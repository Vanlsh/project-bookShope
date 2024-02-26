import './js/renders/renderNavCategoriesList';
import { handlerGalleryNav } from './js/handlerGalleryNav';
import { onModalButton } from './js/events/onModalButton';
import { refs } from './js/refs';

const { ulCategoryContainer, modalBtn } = refs;

ulCategoryContainer.addEventListener('click', handlerGalleryNav);
modalBtn.addEventListener('click', onModalButton);
