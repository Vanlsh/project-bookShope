import { renderBestSellerBooks } from './renderBestSellers';
import { toastError } from '../components/toast';
document.addEventListener('DOMContentLoaded', onLoadAllBestSelBooks);
function onLoadAllBestSelBooks() {
  if (renderBestSellerBooks()) {
    return;
  } else {
    toastError('Unfortunately, we can`t find the "Best Sellers Books"!');
  }
}
