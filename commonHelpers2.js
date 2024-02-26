import{b as m,g as o,r,m as d}from"./assets/burgerMenu-28a44666.js";const a={basketShoppingList:document.querySelector(".js-basket-list"),emptyCardContainer:document.querySelector(".js-background-container"),deleteBtn:document.querySelectorAll(".delete-basket-item-btn")};function p(t){const e=t.target.closest("button");if(!e)return;m(e.dataset.id),t.target.closest("li").remove();let i=o(r.booksInCart);(!i||!i.length)&&a.emptyCardContainer.classList.remove("none")}function b({_id:t,book_image:e,title:s,list_name:i,description:n,author:c,buy_links:l}){return`
    <li class="basket-item">
      <img class="basket-item-img" src="${e}" alt="${s}"/>
      <div class="basket-item-info">
<div class="first-item-part">
    <div class="title-category-container">
    <h2 class="title-basket-item">${s}</h2>
    <p class="category-basket-item">${i}</p>
    </div>
    <button class="delete-basket-item-btn" data-id="${t}">
      <svg class="trash-btn-icon" height="16" width="16">
                <use href="/img/icons.svg#icon-trash"></use>
              </svg></button>
</div>
    <p class="descr-basket-item">${n}</p>
    <div class="last-item-part">
    <p class="author-basket-item">${c}</p>
${d(l)}
     </div>
     </div>
    </li>`}function k(){a.basketShoppingList.innerHTML="";let t=o(r.booksInCart);if(!t||!t.length){a.emptyCardContainer.classList.remove("none");return}const s=t.map(b).join("");a.basketShoppingList.innerHTML=s}k();a.basketShoppingList.addEventListener("click",p);
//# sourceMappingURL=commonHelpers2.js.map
