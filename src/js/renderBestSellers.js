import { getTopBooks } from './api/books';
import { markupBestSellersBooks } from './markups/markupBestBooks';
import { refs } from './refs';

async function renderBestSellerBooks() {
  const bestsellers = await getTopBooks();
  const arr = bestsellers.map(markupBestSellersBooks);
  refs.gallery.append(...arr);
  console.log(arr);
}
renderBestSellerBooks();
