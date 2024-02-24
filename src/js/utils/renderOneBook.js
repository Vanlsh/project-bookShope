import { getSelectedCategory } from '../api/books';
import { toastError } from '../components/toast';
import { markupBookCard } from '../markups/markupOneBook';

const gallery = document.querySelector('.js-gallery');

export async function renderCategory(category) {
  try {
    const data = await getSelectedCategory(category);

    // Створюємо розмітку кожної книги з використанням map
    const booksMarkup = data.map(book => markupBookCard(book)).join('');

    // Додаємо розмітку до елементу DOM з класом 'js-gallery'
    gallery.innerHTML = booksMarkup;
  } catch (error) {
    // Обробка помилок, якщо вони виникають під час виконання блоку try
    toastError('Error rendering category. Please try again later.');
  }
}
