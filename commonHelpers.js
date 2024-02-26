import{g as l,r as i,a as n,s as g,m as H,b as _}from"./assets/burgerMenu-dfb98380.js";import{i as b,a as D}from"./assets/vendor-8cce9181.js";document.addEventListener("DOMContentLoaded",function(){const t=document.getElementById("scrollUpButton");window.addEventListener("scroll",function(){window.scrollY>100?t.style.display="block":t.style.display="none"}),t.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})})});const k={titleColor:"#FFFFFF",messageColor:"#FFFFFF",messageSize:"20px",position:"topRight",displayMode:"replace",closeOnEscape:!0,pauseOnHover:!1,maxWidth:432,messageSize:"20px",messageLineHeight:"24px"};function C(t){b.show({message:t,backgroundColor:"#EF4040",progressBarColor:"#FFE0AC",...k})}function U(t){b.show({message:t,backgroundColor:"#3db919",progressBarColor:"#FFE0AC",...k})}const W="https://books-backend.p.goit.global",R=1e3*30,u=D.create({baseURL:W,timeout:R});function j(t){return C(t.message),null}u.interceptors.response.use(t=>t,j);function V(){return u.get("/books/category-list").then(t=>t.data)}function q(){return u.get("/books/top-books").then(t=>t.data)}function z(t){return u.get("/books/category",{params:{category:t}}).then(e=>e.data)}function G(t){return u.get(`/books/${t}`).then(e=>e.data)}const{categoryName:P}=i;function X({list_name:t}){return`<li class="item-category"> <button class="${l(P)===t?"active":""}" type="button" data-category="${t}">${t}</button></li>`}const{ulCategoryContainer:y}=n,{categoryName:K}=i;function h(){const t=l(K),e=document.querySelector(`button[data-category="${t}"]`);e&&y&&(y.scrollTop=e.offsetTop-y.offsetTop-y.clientHeight/2+e.clientHeight/2)}async function Q(){try{const e=(await V()).map(X).join("");n.ulCategoryContainer.insertAdjacentHTML("beforeend",e),h()}catch(t){console.error("Error rendering Category list",t)}}Q();function Y(t){const o=t.split(" ");let a="",s=0;for(const c of o){const r=c.length;if(s+r+1>20){a+="...";break}a+=c+" ",s+=r+1}return a.trim()}function E(t){const{_id:e,book_image:o,title:a,author:s}=t;return`
<li class="books-item" data-id=${e}>
<div class="book-wrapper">
 <img class="book-image" src="${o}" alt="${s} ${a}" />
          <p class="book-image-message-text">QUICK VIEW</p>
</div>
        <h2 class="book-title">${Y(a)}</h2>
        <p class="book-author">${s}</p>
</li>     
  `}function v(t){const e=t.split(" "),o=`<span>${e.pop()}</span>`;e.push(o);const a=document.createElement("h1");return a.classList.add("title"),a.innerHTML=e.join(" "),a}function J(t){const e=l(i.booksInCart);return!e||!e.length?!1:e.some(o=>o._id===t)}const p="add",T="remove",B="is-open",f="hidden",w="add to shopping list",N="remove from the shopping list",{modalWrapper:Z,modalImg:tt,modalTitle:et,modalDescription:ot,modalText:at,modalLinks:nt,modalBtn:d,modalCongratulation:st}=n;async function rt(t){document.body.style.overflow="hidden";const e=await G(t);if(!e){document.body.style.overflow="";return}g(i.categoryOpenInModal,e);const{_id:o,book_image:a,description:s,author:c,title:r,buy_links:O}=e,m=J(o);nt.innerHTML=H(O),et.textContent=r,ot.textContent=c,at.textContent=s,tt.src=a,d.textContent=m?N:w,d.dataset.id=o,d.setAttribute("data-type",m?T:p),m?d.classList.add("clicked"):d.classList.remove("clicked"),Z.classList.add(B),m&&st.classList.remove(f)}function A(t){if(t.target===t.currentTarget)return;const e=t.target.dataset.id||t.target.closest("li[data-id]").dataset.id;rt(e)}function M(t){t.innerHTML='<div class="load-div"><span class="loader"></span></div>'}async function L(t){try{M(n.gallery);const e=await z(t);n.gallery.innerHTML="";const o=v(t);n.gallery.appendChild(o);const a=document.createElement("ul");a.classList.add("selected-category-list"),n.gallery.appendChild(a);const s=e.map(c=>E(c)).join("");a.innerHTML=s,a.addEventListener("click",A)}catch{C("Error rendering category. Please try again later.")}}function x(){document.querySelectorAll("button[data-category]").forEach(e=>e.classList.remove("active"))}function I(){window.innerWidth>=1422?window.scrollTo({top:0,behavior:"smooth"}):(n.gallery.style.minHeight=window.innerHeight+"px",n.gallery.scrollIntoView({behavior:"smooth",block:"start"}))}function it(t){I();const e=t.target.dataset.category,o=document.querySelector(`.item-category button[data-category="${e}"]`);x(),o.classList.add("active"),g(i.categoryName,e),L(e),h()}function ct({list_name:t,books:e}){const o=document.createElement("li");o.classList.add("category-books-item");const a=document.createElement("h3");a.classList.add("category-title"),a.textContent=t;const s=document.createElement("ul");s.classList.add("category-list"),s.innerHTML=e.map(E).join(""),s.addEventListener("click",A);const c=document.createElement("div");c.classList.add("category-div");const r=document.createElement("button");return r.classList.add("category-button"),r.setAttribute("type","button"),r.setAttribute("data-category",t),r.textContent="SEE MORE",r.addEventListener("click",it),o.append(a),o.append(s),o.append(c),c.append(r),o}async function F(){M(n.gallery);const t=await q();if(t&&t.length>0){n.gallery.innerHTML="";const e=t.map(ct),o=document.createElement("ul");o.classList.add("category-books-list"),o.append(...e),n.gallery.append(v("Best Sellers Books")),n.gallery.append(o)}else console.error("No results")}const{categoryName:lt}=i;function dt(t){if(t.target.nodeName!=="BUTTON")return;x(),t.target.classList.add("active"),I();const e=t.target.getAttribute("data-category");g(lt,e),e==="All categories"?F():L(e)}function gt(t){let e=l(i.booksInCart);if(e===null)e=[t];else if(e.some(a=>a._id===t._id)){console.log("This book already exists in your Cart!");return}else e.push(t);g(i.booksInCart,e),U("The book was successfully written to Cart!")}function ut(t){const{type:e,id:o}=t.target.dataset;e===p?(gt(l(i.categoryOpenInModal)),t.target.setAttribute("data-type",T),t.target.textContent=N,n.modalCongratulation.classList.remove(f),n.modalBtn.classList.add("clicked")):(_(o),t.target.setAttribute("data-type",p),t.target.textContent=w,n.modalCongratulation.classList.add(f),n.modalBtn.classList.remove("clicked"))}function S(t){t.target===t.currentTarget&&(document.body.style.overflow="",n.modalWrapper.classList.remove(B))}const{categoryName:mt}=i,{btnAllCategories:yt}=n;function pt(){const t=l(mt);t===null||t==="All categories"?(yt.classList.add("active"),F()):L(t)}function $(){g(i.categoryName,"All categories")}const{ulCategoryContainer:ft,modalBtn:Lt,modalClose:bt,modalWrapper:kt,logo:Ct,listNavigation:ht}=n;document.addEventListener("DOMContentLoaded",pt);ft.addEventListener("click",dt);Lt.addEventListener("click",ut);bt.addEventListener("click",S);kt.addEventListener("click",S);Ct.addEventListener("click",$);ht.children[0].addEventListener("click",$);
//# sourceMappingURL=commonHelpers.js.map
