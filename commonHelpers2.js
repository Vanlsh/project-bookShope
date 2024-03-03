import{m,g as r,r as c,b as u}from"./assets/restGallary-0989b75a.js";import{P as b}from"./assets/vendor-d8b4b001.js";const a={basketShoppingList:document.querySelector(".js-basket-list"),emptyCardContainer:document.querySelector(".js-background-container"),deleteBtn:document.querySelectorAll(".delete-basket-item-btn"),paginationDiv:document.getElementById("pagination")},h="/project-bookShope/assets/icons-074a4c48.svg";function v({_id:t,book_image:e,title:i,list_name:s,description:o,author:l,buy_links:d}){return`
    <li class="basket-item">
      <img class="basket-item-img" src="${e}" alt="${i}" width="100" height="142" loading="lazy"/>
      <div class="basket-item-info">
<div class="first-item-part">
    <div class="title-category-container">
    <h2 class="title-basket-item">${i}</h2>
    <p class="category-basket-item">${s}</p>
    </div>
    <button aria-label="Removing icon" class="delete-basket-item-btn" data-id="${t}">
      <svg class="trash-btn-icon" height="16" width="16">
                <use href="${h}#icon-trash"></use>
              </svg></button>
</div>
    <p class="descr-basket-item">${o}</p>
    <div class="last-item-part">
    <p class="author-basket-item">${l}</p>
${m(d)}
     </div>
     </div>
    </li>`}function p(t){if(a.basketShoppingList.innerHTML="",a.paginationDiv.classList.add("visually-hidden"),!t||!t.length){a.emptyCardContainer.classList.remove("none");return}const i=t.map(v).join("");a.basketShoppingList.innerHTML=i,a.paginationDiv.classList.remove("visually-hidden")}const k={itemsPerPage:3,visiblePages:2,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn tui-page-number">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-page-number tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn  tui-page-number tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}},n=new b(a.paginationDiv,k);n.on("afterMove",t=>{const e=g(t.page);p(e)});function g(t){const i=(t-1)*3,s=i+3;return r(c.booksInCart).slice(i,s)}function y(t){const e=t.target.closest("button");if(!e)return;u(e.dataset.id),t.target.closest("li").remove();let s=r(c.booksInCart);if(console.log(s.length),!s||!s.length){a.paginationDiv.classList.add("visually-hidden"),p();return}n.reset(s.length);const l=Math.ceil(s.length/3);n.movePageTo(l),s.length<=3&&a.paginationDiv.classList.add("visually-hidden")}a.basketShoppingList.addEventListener("click",y);function f(){const t=r(c.booksInCart).length;n.reset(t);const e=g(1);p(e),t<=3&&a.paginationDiv.classList.add("visually-hidden")}f();
//# sourceMappingURL=commonHelpers2.js.map
