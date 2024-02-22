export function markupBookCard(book) {
  const { _id: id, book_image: image, title, author } = book;
  return `
<li class="books-item" data-id=${id}>
<div>
 <img class="book-image" src="${image}" alt="${author} ${title}"/>
          <p class="book-image-message-text">Quick view</p>
</div>
        <h2 class="book-title">${title}</h2>
        <p class="book-author">${author}</p>
</li>     
  `;
}
