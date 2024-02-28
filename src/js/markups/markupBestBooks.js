import { markupBookCard } from './markupOneBook';
import { onSeeMore } from '../events/onSeeMore';
import { onCardClick } from '../events/onCardClick';

export function markupBestSellersBooks({ list_name, books }) {
  const categoryItem = document.createElement('li');
  categoryItem.classList.add('category-books-item');

  const categoryTitle = document.createElement('h2');
  categoryTitle.classList.add('category-title');
  categoryTitle.textContent = list_name;

  const categoryList = document.createElement('ul');
  categoryList.classList.add('category-list');
  categoryList.innerHTML = books.map(markupBookCard).join('');
  categoryList.addEventListener('click', onCardClick);

  const categoryDiv = document.createElement('div');
  categoryDiv.classList.add('category-div');

  const categoryButton = document.createElement('button');
  categoryButton.classList.add('category-button');
  categoryButton.setAttribute('type', 'button');
  categoryButton.setAttribute('data-category', list_name);
  categoryButton.textContent = 'SEE MORE';
  categoryButton.addEventListener('click', onSeeMore);

  categoryItem.append(categoryTitle);
  categoryItem.append(categoryList);
  categoryItem.append(categoryDiv);
  categoryDiv.append(categoryButton);

  return categoryItem;
}
