export function markupBestSellersBooks(list_name, books) {
  const categoryItem = document.createElement('li');
  categoryItem.classList.toggle('category-books-item');
  const categoryTitle = document.createElement('h3');
  categoryTitle.classList.toggle('category-title');
  categoryTitle.textContent = `${list_name}`;
  const categoryList = document.createElement('ul');
  categoryList.textContent = `${books.map(createBookCardMarkup).join('')}`;
  const categoryButton = document.createElement('button');
  categoryButton.classList.toggle('category-button');
  categoryButton.setAttribute('type', 'button');
  categoryButton.textContent = 'SEE MORE';
}
