import{m as c,g as m,r as l}from"./assets/markupBuyLinks-bc5117fd.js";function p({id:t,book_image:a,title:s,list_name:i,description:r,author:n,buy_links:o}){return`
    <li class="basket-item">
      <img class="basket-item-img" src="${a}" alt="${s}"/>
      <div class="basket-item-info">
<div class="first-item-part">
    <div class="title-category-container">
    <h2 class="title-basket-item">${s}</h2>
    <p class="category-basket-item">${i}</p>
    </div>
    <button class="delete-basket-item-btn" data-id="${t}">
      <svg class="trash-btn-icon" height="16" width="16">
                <use href="../img/icons.svg#icon-trash"></use>
              </svg></button>
</div>
    <p class="descr-basket-item">${r}</p>
    <div class="last-item-part">
    <p class="author-basket-item">${n}</p>
${c(o)}
     </div>
     </div>
    </li>`}const e={basketShoppingList:document.querySelector(".js-basket-list"),emptyCardContainer:document.querySelector(".js-background-container"),start:document.querySelector(".js-test")};function d(){e.basketShoppingList.innerHTML="";let t=m(l.booksInCart);if(console.log(t),!t||!t.length){e.emptyCardContainer.classList.remove("none");return}const s=t.map(p).join("");e.basketShoppingList.innerHTML=s}d();
//# sourceMappingURL=commonHelpers2.js.map
