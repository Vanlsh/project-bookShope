import { getSelectedCategory } from './api/books';
import { markupBasketItem } from './markups/markupBasketShList';
import { addBookToCart } from './addBookToCart';
import { refsLS } from './keyConstsLS';
import { getFromLocalStorage } from './localStorageAPI';

const basketShoppingList = document.querySelector('.basket-list');
const start = document.querySelector('.test');
start.addEventListener('click', renderBasketItem);

export function renderBasketItem() {
  basketShoppingList.innerHTML = '';

  let data = getFromLocalStorage(refsLS.booksInCart);
  console.log(data);
  const emptyCardContainer = document.querySelector('.js-background-container');
  const isCardEmpty = !data || !data.length;
  if (isCardEmpty) {
    emptyCardContainer.classList.remove('none');
    return;
  }

  const books = data.map(markupBasketItem).join('');
  basketShoppingList.innerHTML = books;
}

async function foo() {
  let data = await getSelectedCategory('Paperback Nonfiction');
  data.forEach(book => {
    addBookToCart(book);
  });
}

// foo();
