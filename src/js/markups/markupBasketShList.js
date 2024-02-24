import { getSelectedCategory } from '../api/books';

const basketShoppingList = document.querySelector('.basket-list');
const start = document.querySelector('.test');
start.addEventListener('click', renderBasketItem);

async function renderBasketItem() {
  const data = await getSelectedCategory('Paperback Nonfiction');

  console.log(data);

  data.forEach(book => {
    const markup = markupBasketItem(
      book.book_image,
      book.title,
      book.category,
      book.description,
      book.author
    );
    basketShoppingList.insertAdjacentHTML('beforeend', markup);
  });
}

function markupBasketItem(book_image, title, category, description, author) {
  return `
    <li class="basket-item">
      <img class="basket-item-img" src="${book_image}" alt="${title}"/>
      <div>
<div>
    <div>
    <h2 class="title-basket-item">${title}</h2>
    <p class="category-basket-item">${category}</p>
    </div>    
    <button class="delete-basket-item-btn"></button>
</div>
    <p class="descr-basket-item">${description}</p>
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
    </li>
  `;
}
