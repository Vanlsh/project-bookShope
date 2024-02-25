import{b as l}from"./assets/books-eed7060a.js";import"./assets/vendor-8cce9181.js";function c(s){const t=s.find(a=>a.name==="Amazon").url,e=s.find(a=>a.name==="Apple Books").url;return`
    <ul class="links-shop-list">
       <li class="link-shop-item">
         <a class="amazon-link" href="${t}" target="_blank" rel="noopener">
           <img class="img-amazon" src="/img/amazon.png" alt="amazon"></img>
         </a>
       </li>
       <li class="link-shop-item">
         <a
           class="apple-book-link"
           href="${e}"
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
     </ul>`}function r({id:s,book_image:t,title:e,list_name:a,description:i,author:o,buy_links:n}){return`
    <li class="basket-item">
      <img class="basket-item-img" src="${t}" alt="${e}"/>
      <div class="basket-item-info">
<div class="first-item-part">
    <div class="title-category-container">
    <h2 class="title-basket-item">${e}</h2>
    <p class="category-basket-item">${a}</p>
    </div>
    <button class="delete-basket-item-btn" data-id="${s}">
      <svg class="trash-btn-icon" height="16" width="16">
                <use href="../img/icons.svg#icon-trash"></use>
              </svg></button>
</div>
    <p class="descr-basket-item">${i}</p>
    <div class="last-item-part">
    <p class="author-basket-item">${o}</p>
${c(n)}
     </div>
     </div>
    </li>`}const m=document.querySelector(".basket-list"),p=document.querySelector(".test");p.addEventListener("click",k);async function k(){const s=await l("Paperback Nonfiction");console.log(s);const t=s.map(r).join("");m.innerHTML=t}
//# sourceMappingURL=commonHelpers2.js.map
