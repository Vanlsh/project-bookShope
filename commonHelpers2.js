import"./assets/charitableFunds-7385a04c.js";function l(t){const e=t.find(s=>s.name==="Amazon").url,a=t.find(s=>s.name==="Apple Books").url;return`
    <ul class="links-shop-list">
       <li class="link-shop-item">
         <a class="amazon-link" href="${e}" target="_blank" rel="noopener">
           <img class="img-amazon" src="/img/amazon.png" alt="amazon"></img>
         </a>
       </li>
       <li class="link-shop-item">
         <a
           class="apple-book-link"
           href="${a}"
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
     </ul>`}function c({id:t,book_image:e,title:a,list_name:s,description:n,author:i,buy_links:r}){return`
    <li class="basket-item">
      <img class="basket-item-img" src="${e}" alt="${a}"/>
      <div class="basket-item-info">
<div class="first-item-part">
    <div class="title-category-container">
    <h2 class="title-basket-item">${a}</h2>
    <p class="category-basket-item">${s}</p>
    </div>
    <button class="delete-basket-item-btn" data-id="${t}">
      <svg class="trash-btn-icon" height="16" width="16">
                <use href="../img/icons.svg#icon-trash"></use>
              </svg></button>
</div>
    <p class="descr-basket-item">${n}</p>
    <div class="last-item-part">
    <p class="author-basket-item">${i}</p>
${l(r)}
     </div>
     </div>
    </li>`}const m={theme:"theme",booksInCart:"booksInCart"};function p(t){try{const e=localStorage.getItem(t);return e===null?(console.log(`The data with the key: "${t}" was not found in Local Storage`),null):JSON.parse(e)}catch(e){return console.error(`An error occurred when trying to read data from Local Starage ${e}`),null}}const o={basketShoppingList:document.querySelector(".js-basket-list"),emptyCardContainer:document.querySelector(".js-background-container"),start:document.querySelector(".js-test")};function g(){o.basketShoppingList.innerHTML="";let t=p(m.booksInCart);if(console.log(t),!t||!t.length){o.emptyCardContainer.classList.remove("none");return}const a=t.map(c).join("");o.basketShoppingList.innerHTML=a}g();
//# sourceMappingURL=commonHelpers2.js.map
