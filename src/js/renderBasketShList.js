import { getSelectedCategory } from './api/books';
import { markupBasketItem } from './markups/markupBasketShList';

const basketShoppingList = document.querySelector('.basket-list');
const start = document.querySelector('.test');
start.addEventListener('click', renderBasketItem);

async function renderBasketItem() {
  const data = await getSelectedCategory('Paperback Nonfiction');
  console.log(data);
  const books = data.map(markupBasketItem).join('');
  basketShoppingList.innerHTML = books;
}
