import { markupBuyLinks } from '../markups/markupBuyLinks';

export function markupBasketItem({
  _id,
  book_image,
  title,
  list_name,
  description,
  author,
  buy_links,
}) {
  return `
    <li class="basket-item">
      <img class="basket-item-img" src="${book_image}" alt="${title}"/>
      <div class="basket-item-info">
<div class="first-item-part">
    <div class="title-category-container">
    <h2 class="title-basket-item">${title}</h2>
    <p class="category-basket-item">${list_name}</p>
    </div>
    <button class="delete-basket-item-btn" data-id="${_id}">
      <svg class="trash-btn-icon" height="16" width="16">
                <use href="../img/icons.svg#icon-trash"></use>
              </svg></button>
</div>
    <p class="descr-basket-item">${description}</p>
    <div class="last-item-part">
    <p class="author-basket-item">${author}</p>
${markupBuyLinks(buy_links)}
     </div>
     </div>
    </li>`;
}
