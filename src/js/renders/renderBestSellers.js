import { getTopBooks } from '../api/books';
import { markupBestSellersBooks } from '../markups/markupBestBooks';
import { refs } from '../refs';
import { markupTitle } from '../markups/markupTitle';
import { showLoader, hideLoader } from '../loader';
import { renderLoader } from './renderLoader';
import { scrollGallery } from '../helpers/scrollGallery';

export async function renderBestSellerBooks() {
  scrollGallery();
  renderLoader(refs.gallery);
  const bestsellers = await getTopBooks();
  refs.gallery.innerHTML = '';
  const bestsellersArr = bestsellers.map(markupBestSellersBooks);
  const bestsellersList = document.createElement('ul');
  bestsellersList.classList.add('category-books-list');

  bestsellersList.append(...bestsellersArr);

  refs.gallery.append(markupTitle('Best Sellers Books'));
  refs.gallery.append(bestsellersList);
}
