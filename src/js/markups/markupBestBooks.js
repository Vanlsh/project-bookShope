import { markupBookCard } from './markupOneBook';

export function markupBestSellersBooks({ list_name, books }) {
  console.log(books);
  const categoryItem = document.createElement('li');
  categoryItem.classList.add('category-books-item');
  const categoryTitle = document.createElement('h3');
  categoryTitle.classList.add('category-title');
  categoryTitle.textContent = list_name;
  const categoryList = document.createElement('ul');
  categoryList.innerHTML = books.map(markupBookCard).join('');
  const categoryButton = document.createElement('button');
  categoryButton.classList.add('category-button');
  categoryButton.setAttribute('type', 'button');
  categoryButton.textContent = 'SEE MORE';
  return categoryItem;
}
