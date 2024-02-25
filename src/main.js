import './js/renders/renderNavCategoriesList';
import { handlerGalleryNav } from './js/handlerGalleryNav';
import { refs } from './js/refs';

const { ulCategoryContainer } = refs;

ulCategoryContainer.addEventListener('click', handlerGalleryNav);
