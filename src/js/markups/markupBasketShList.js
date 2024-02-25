import { getSelectedCategory } from '../api/books';

const basketShoppingList = document.querySelector('.basket-list');
const start = document.querySelector('.test');
start.addEventListener('click', renderBasketItem);

async function renderBasketItem() {
  const data = await getSelectedCategory('Paperback Nonfiction');
  console.log(data);
  const books = data.map(markupBasketItem).join('');
  basketShoppingList.innerHTML = books;
}

function markupBasketItem({
  book_image,
  title,
  list_name,
  description,
  author,
  buy_links,
}) {
  const amazon = buy_links.find(item => item.name === 'Amazon').url;
  const appleBooks = buy_links.find(item => item.name === 'Apple Books').url;

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
     <a class="amazon-link" href="${amazon}" target="_blank" rel="noopener">
     <img class="img-amazon" src="/img/amazon.png" alt="amazon"></img></a>
     </li>
     <li class="link-shop-item">
      <a class="apple-book-link" href="${appleBooks}" target="_blank" rel="noopener">
      <img class="img-apple-books" src="/img/apple-books.png" alt="apple-books"></img>
      </a>
      </li>
     </ul>
     </div>
     </div>
    </li>`;
}
