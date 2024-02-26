import { getSelectedCategory } from '../api/books';
import { toastError } from '../components/toast';
import { markupBookCard } from '../markups/markupOneBook';
import { refs } from '../refs';
import { markupTitle } from '../markups/markupTitle';
import { onCardClick } from '../events/onCardClick';
import { renderLoader } from './renderLoader';
import { scrollGallery } from '../helpers/scrollGallery';

export async function renderCategory(category) {
  try {
    scrollGallery();
    renderLoader(refs.gallery);
    const data = await getSelectedCategory(category);
    refs.gallery.innerHTML = '';
    const titleElement = markupTitle(category);
    refs.gallery.appendChild(titleElement);

    // Створюємо елемент <ul> та додаємо його до галереї
    const ul = document.createElement('ul');
    ul.classList.add('selected-category-list');
    refs.gallery.appendChild(ul);

    // Створюємо розмітку кожної книги з використанням map
    const booksMarkup = data.map(book => markupBookCard(book)).join('');

    // Додаємо розмітку до елементу <ul>
    ul.innerHTML = booksMarkup;

    ul.addEventListener('click', onCardClick);
  } catch (error) {
    // Обробка помилок, якщо вони виникають під час виконання блоку try
    toastError('Error rendering category. Please try again later.');
  }
}
