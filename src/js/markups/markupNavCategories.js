import { getFromLocalStorage } from '../localStorageAPI';
import { refsLS } from '../keyConstsLS';
const { categoryName } = refsLS;

export function markupNavCatList({ list_name }) {
  const getCategoryName = getFromLocalStorage(categoryName);
  //Ignore  / adds active class to Category list and rending gallery
  const isActive = getCategoryName === list_name ? 'active' : '';
  return `<li class="item-category"> <button class="${isActive}" type="button" data-category="${list_name}">${list_name}</button></li>`;
}
