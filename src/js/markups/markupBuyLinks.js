// Маркап для посилань на amazon та apple books

export function markupBuyLinks(buy_links) {
  const amazon = buy_links.find(item => item.name === 'Amazon').url;
  const appleBooks = buy_links.find(item => item.name === 'Apple Books').url;
  return `
    <ul class="links-shop-list">
       <li class="link-shop-item">
         <a class="amazon-link" href="${amazon}" target="_blank" rel="noopener">
           <img class="img-amazon" src="./img/amazon.png" alt="amazon"></img>
         </a>
       </li>
       <li class="link-shop-item">
         <a
           class="apple-book-link"
           href="${appleBooks}"
           target="_blank"
           rel="noopener"
         >
           <img
             class="img-apple-books"
             src="./img/apple-books.png"
             alt="apple-books"
           ></img>
         </a>
       </li>
     </ul>`;
}
