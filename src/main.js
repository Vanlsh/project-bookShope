import './js/renders/renderNavCategoriesList';
import { handlerGalleryNav } from './js/handlerGalleryNav';
import { refs } from './js/refs';
//Rendering bestsellers during window loading
import './js/renders/renderLoadAllCatBooks';
//
const { ulCategoryContainer } = refs;

ulCategoryContainer.addEventListener('click', handlerGalleryNav);
