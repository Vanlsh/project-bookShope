import { getSelectedCategory } from '../api/books';

const basketShoppingList = document.querySelector('.basket-list');
const start = document.querySelector('.test');
start.addEventListener('click', renderBasketItem);

async function renderBasketItem() {
  const data = await getSelectedCategory('Paperback Nonfiction');
  console.log(data);
  const books = data.map(markupBasketItem).join();
  basketShoppingList.innerHTML = books;
}

function markupBasketItem({
  book_image,
  title,
  list_name,
  description,
  author,
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
    <button class="delete-basket-item-btn">
      <svg class="trash-btn-icon" height="16" width="16">
                <use href="../img/icons.svg#icon-trash"></use>
              </svg></button>
</div>
    <p class="descr-basket-item">${description}</p>
    <div class="last-item-part">
    <p class="author-basket-item">${author}</p>
     <ul class="links-shop-list">
     <li class="link-shop-item">
     <a class="apple-book-link"></a>
     </li>
     <li class="link-shop-item">
      <a class="amazon-link"></a>
      </li>
     </ul>
     </div>
     </div>
    </li>`;
}

const titleParagraphs = document.querySelectorAll('.title-basket-item');
titleParagraphs.forEach(paragraph => {
  const text = paragraph.textContent;
  const lineHeight = parseInt(getComputedStyle(paragraph).lineHeight);
  const maxHeight = lineHeight * 1;
  if (paragraph.offsetHeight > maxHeight) {
    let index = Math.floor(maxHeight / lineHeight);
    while (paragraph.offsetHeight > maxHeight) {
      index--;
      paragraph.textContent = text.split(' ').slice(0, index).join(' ') + '...';
    }
  }
});
