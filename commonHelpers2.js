import"./assets/charitableFunds-69d54ffe.js";import{i as l,a as c}from"./assets/vendor-8cce9181.js";const p={titleColor:"#FFFFFF",messageColor:"#FFFFFF",messageSize:"20px",position:"topRight",displayMode:"replace",closeOnEscape:!0,pauseOnHover:!1,maxWidth:432,messageSize:"20px",messageLineHeight:"24px"};function m(s){l.show({message:s,backgroundColor:"#EF4040",progressBarColor:"#FFE0AC",...p})}const g="https://books-backend.p.goit.global",k=1e3*30,o=c.create({baseURL:g,timeout:k});function u(s){return m(s.message),null}o.interceptors.response.use(s=>s,u);function d(s){return o.get("/books/category",{params:{category:s}}).then(t=>t.data)}function b(s){const t=s.find(e=>e.name==="Amazon").url,a=s.find(e=>e.name==="Apple Books").url;return`
    <ul class="links-shop-list">
       <li class="link-shop-item">
         <a class="amazon-link" href="${t}" target="_blank" rel="noopener">
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
     </ul>`}function h({id:s,book_image:t,title:a,list_name:e,description:i,author:n,buy_links:r}){return`
    <li class="basket-item">
      <img class="basket-item-img" src="${t}" alt="${a}"/>
      <div class="basket-item-info">
<div class="first-item-part">
    <div class="title-category-container">
    <h2 class="title-basket-item">${a}</h2>
    <p class="category-basket-item">${e}</p>
    </div>
    <button class="delete-basket-item-btn" data-id="${s}">
      <svg class="trash-btn-icon" height="16" width="16">
                <use href="../img/icons.svg#icon-trash"></use>
              </svg></button>
</div>
    <p class="descr-basket-item">${i}</p>
    <div class="last-item-part">
    <p class="author-basket-item">${n}</p>
${b(r)}
     </div>
     </div>
    </li>`}const f=document.querySelector(".basket-list"),F=document.querySelector(".test");F.addEventListener("click",v);async function v(){const s=await d("Paperback Nonfiction");console.log(s);const t=s.map(h).join("");f.innerHTML=t}
//# sourceMappingURL=commonHelpers2.js.map
