import { getSelectedCategory } from './api/books';
import { markupBasketItem } from './markups/markupBasketShList';
import { addBookToCart } from './addBookToCart';
import { refsLS } from './keyConstsLS';
import { getFromLocalStorage } from './localStorageAPI';
import { refsShoppingList } from './refsShoppingList';

refsShoppingList.start.addEventListener('click', renderBasketItem);

export function renderBasketItem() {
  refsShoppingList.basketShoppingList.innerHTML = '';

  let data = getFromLocalStorage(refsLS.booksInCart);
  console.log(data);
  const isCardEmpty = !data || !data.length;
  if (isCardEmpty) {
    refsShoppingList.emptyCardContainer.classList.remove('none');
    return;
  }

  const books = data.map(markupBasketItem).join('');
  refsShoppingList.basketShoppingList.innerHTML = books;
}

async function foo() {
  let data = await getSelectedCategory('Paperback Nonfiction');
  data.forEach(book => {
    addBookToCart(book);
  });
}

foo();
