import './js/renders/renderNavCategoriesList';
import { getSpecificCategory } from './js/getSpecificNameCategory';
import { refs } from './js/refs';

const { ulCategoryContainer } = refs;

ulCategoryContainer.addEventListener('click', getSpecificCategory);
