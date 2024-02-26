(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();const d=document.querySelector(".charity-list"),u=document.querySelectorAll(".charity-slide"),c=document.querySelector(".charity-btn"),f=6;let s=0,i="up";c.addEventListener("click",g);function p(o){const e=-o*52;d.style.transform=`translateY(${e}px)`}function g(){i==="up"?(s++,s>=u.length-f&&(s=u.length-f,i="down",c.style.transform="rotate(180deg)")):(s--,s<1&&(s=0,i="up",c.style.transform="rotate(0deg)")),p(s)}function h(o,e){localStorage.setItem(o,JSON.stringify(e))}function y(o){try{const e=localStorage.getItem(o);return e===null?(console.log(`The data with the key: "${o}" was not found in Local Storage`),null):JSON.parse(e)}catch(e){return console.error(`An error occurred when trying to read data from Local Starage ${e}`),null}}const m={theme:"theme",booksInCart:"booksInCart",categoryName:"categoryName",categoryOpenInModal:"openCategory"};function k(o){const e=o.find(n=>n.name==="Amazon").url,a=o.find(n=>n.name==="Apple Books").url;return`
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
     </ul>`}function b(o){let e=y(m.booksInCart);if(e===null)return;const a=e.filter(n=>n._id!==o);h(m.booksInCart,a),console.log(`The book with id ${o} was remove from cart`)}export{b as a,y as g,k as m,m as r,h as s};
//# sourceMappingURL=removeBookFromCart-bca3d6fe.js.map
