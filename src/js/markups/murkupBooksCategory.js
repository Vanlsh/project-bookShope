export function markupBooksCategory(list_name, books) {
  const categoryBooksTitle = document.createElement('h1');
  categoryBooksTitle.classList.toggle('category-books-title');
  categoryBooksTitle.textContent = `${list_name}`;
  const categoryBooksTitleSpan = document.createElement('span');
  categoryBooksTitleSpan.classList.toggle('category-books-title-span');
  const categoryBooksList = document.createElement('ul');
  categoryBooksList.classList.toggle('category-books-list');
  categoryBooksList.textContent = `${books.map(createBookCardMarkup).join('')}`;
}

function markupBooksCategory(results) {
  const { list_name, books } = results;
  return `<h1 class="category-books-title">${list_name} <span class="category-books-title-span"></span></h1>
 <ul class="category-books-list">
 ${books.map(createBookCardMarkup).join('')}
 </ul>`;
}
