import { getTopBooks } from '../api/books';
import { markupBestSellersBooks } from '../markups/markupBestBooks';
import { refs } from '../refs';
import { markupTitle } from '../markups/markupTitle';
import { renderLoader } from './renderLoader';


export async function renderBestSellerBooks() {
  renderLoader(refs.gallery);
  const bestsellers = await getTopBooks();
  if (bestsellers && bestsellers.length > 0) {
    refs.gallery.innerHTML = '';
    const bestsellersArr = bestsellers.map(markupBestSellersBooks);
    const bestsellersList = document.createElement('ul');
    bestsellersList.classList.add('category-books-list');

    bestsellersList.append(...bestsellersArr);

    refs.gallery.append(markupTitle('Best Sellers Books'));
    refs.gallery.append(bestsellersList);
  } else {
    console.error('No results');
  }
}
