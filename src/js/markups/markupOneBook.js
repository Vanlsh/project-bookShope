import { truncateTextByWord } from "../helpers/truncateTextByWord";


export function markupBookCard(book) {
  const { _id: id, book_image: image, title, author } = book;
  return `
<li class="books-item" data-id=${id}>
<div class="book-wrapper">
 <img class="book-image" src="${image}" alt="${author} ${title}"/>
          <p class="book-image-message-text">QUICK VIEW</p>
</div>
        <h2 class="book-title">${truncateTextByWord(title)}</h2>
        <p class="book-author">${author}</p>
</li>     
  `;
}
