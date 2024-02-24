//Function for generation markup of all Categories in the list
export function markupNavCatList({ list_name }) {
  return `<li class="item-category"> <button type="button" data-category="${list_name}">${list_name}</button></li>`;
}
