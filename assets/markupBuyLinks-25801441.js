(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function l(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=l(e);fetch(e.href,o)}})();const m=document.querySelector(".charity-list"),u=document.querySelectorAll(".charity-slide"),c=document.querySelector(".charity-btn"),f=6;let n=0,i="up";c.addEventListener("click",p);function d(r){const t=-r*52;m.style.transform=`translateY(${t}px)`}function p(){i==="up"?(n++,n>=u.length-f&&(n=u.length-f,i="down",c.style.transform="rotate(180deg)")):(n--,n<1&&(n=0,i="up",c.style.transform="rotate(0deg)")),d(n)}const g={theme:"theme",booksInCart:"booksInCart",categoryName:"categoryName",categoryOpenInModal:"openCategory"};function y(r,t){localStorage.setItem(r,JSON.stringify(t))}function h(r){try{const t=localStorage.getItem(r);return t===null?(console.log(`The data with the key: "${r}" was not found in Local Storage`),null):JSON.parse(t)}catch(t){return console.error(`An error occurred when trying to read data from Local Starage ${t}`),null}}function S(r){const t=r.find(s=>s.name==="Amazon").url,l=r.find(s=>s.name==="Apple Books").url;return`
    <ul class="links-shop-list">
       <li class="link-shop-item">
         <a class="amazon-link" href="${t}" target="_blank" rel="noopener">
           <img class="img-amazon" src="/img/amazon.png" alt="amazon"></img>
         </a>
       </li>
       <li class="link-shop-item">
         <a
           class="apple-book-link"
           href="${l}"
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
     </ul>`}export{h as g,S as m,g as r,y as s};
//# sourceMappingURL=markupBuyLinks-25801441.js.map
