import{b as m,g as n,r,m as d}from"./assets/burgerMenu-b34b7cb6.js";const a={basketShoppingList:document.querySelector(".js-basket-list"),emptyCardContainer:document.querySelector(".js-background-container"),deleteBtn:document.querySelectorAll(".delete-basket-item-btn")};function p(t){const e=t.target.closest("button");if(!e)return;m(e.dataset.id),t.target.closest("li").remove();let i=n(r.booksInCart);(!i||!i.length)&&a.emptyCardContainer.classList.remove("none")}const b="/project-bookShope/assets/icons-074a4c48.svg";function k({_id:t,book_image:e,title:s,list_name:i,description:o,author:c,buy_links:l}){return`
    <li class="basket-item">
      <img class="basket-item-img" src="${e}" alt="${s}" width="100" height="142" loading="lazy"/>
      <div class="basket-item-info">
<div class="first-item-part">
    <div class="title-category-container">
    <h2 class="title-basket-item">${s}</h2>
    <p class="category-basket-item">${i}</p>
    </div>
    <button aria-label="Removing icon" class="delete-basket-item-btn" data-id="${t}">
      <svg class="trash-btn-icon" height="16" width="16">
                <use href="${b}#icon-trash"></use>
              </svg></button>
</div>
    <p class="descr-basket-item">${o}</p>
    <div class="last-item-part">
    <p class="author-basket-item">${c}</p>
${d(l)}
     </div>
     </div>
    </li>`}function g(){a.basketShoppingList.innerHTML="";let t=n(r.booksInCart);if(!t||!t.length){a.emptyCardContainer.classList.remove("none");return}const s=t.map(k).join("");a.basketShoppingList.innerHTML=s}g();a.basketShoppingList.addEventListener("click",p);
//# sourceMappingURL=commonHelpers2.js.map
