import { getTopBooks } from './api/books';
import { markupBestSellersBooks } from './markups/markupBestBooks';
import { refs } from './refs';

async function renderBestSellerBooks() {
  const bestsellers = await getTopBooks();

  const bestsellersArr = bestsellers.map(markupBestSellersBooks);
  const bestsellersList = document.createElement('ul');
  bestsellersList.classList.add('category-books-list');
  const bestsellersTitle = document.createElement('h1');

  bestsellersList.append(...bestsellersArr);
  bestsellersTitle.textContent = 'Best Sellers Books';

  refs.gallery.append(bestsellersTitle);
  refs.gallery.append(bestsellersList);
}
renderBestSellerBooks();
