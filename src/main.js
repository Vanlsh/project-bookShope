import './js/renders/renderNavCategoriesList';
import { handlerGalleryNav } from './js/handlerGalleryNav';
import { refs } from './js/refs';
//Rendering bestsellers during window loading
import { onLoadAllBestSelBooks } from './js/events/onLoadAllBestSellers';
//
const { ulCategoryContainer } = refs;

ulCategoryContainer.addEventListener('click', handlerGalleryNav);

document.addEventListener('DOMContentLoaded', onLoadAllBestSelBooks);
