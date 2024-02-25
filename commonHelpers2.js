import{g as r,r as c}from"./assets/keyConstsLS-e1ae3af3.js";function m(s){const e=s.find(a=>a.name==="Amazon").url,t=s.find(a=>a.name==="Apple Books").url;return`
    <ul class="links-shop-list">
       <li class="link-shop-item">
         <a class="amazon-link" href="${e}" target="_blank" rel="noopener">
           <img class="img-amazon" src="/img/amazon.png" alt="amazon"></img>
         </a>
       </li>
       <li class="link-shop-item">
         <a
           class="apple-book-link"
           href="${t}"
           target="_blank"
           rel="noopener"
         >
           <img
             class="img-apple-books"
             src="/img/apple-books.png"
             alt="apple-books"
           ></img>
         </a>
       </li>
     </ul>`}function p({id:s,book_image:e,title:t,list_name:a,description:n,author:o,buy_links:l}){return`
    <li class="basket-item">
      <img class="basket-item-img" src="${e}" alt="${t}"/>
      <div class="basket-item-info">
<div class="first-item-part">
    <div class="title-category-container">
    <h2 class="title-basket-item">${t}</h2>
    <p class="category-basket-item">${a}</p>
    </div>
    <button class="delete-basket-item-btn" data-id="${s}">
      <svg class="trash-btn-icon" height="16" width="16">
                <use href="../img/icons.svg#icon-trash"></use>
              </svg></button>
</div>
    <p class="descr-basket-item">${n}</p>
    <div class="last-item-part">
    <p class="author-basket-item">${o}</p>
${m(l)}
     </div>
     </div>
    </li>`}const i={basketShoppingList:document.querySelector(".js-basket-list"),emptyCardContainer:document.querySelector(".js-background-container"),start:document.querySelector(".js-test")};function k(){i.basketShoppingList.innerHTML="";let s=r(c.booksInCart);if(console.log(s),!s||!s.length){i.emptyCardContainer.classList.remove("none");return}const t=s.map(p).join("");i.basketShoppingList.innerHTML=t}k();
//# sourceMappingURL=commonHelpers2.js.map
