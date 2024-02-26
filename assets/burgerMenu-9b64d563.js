(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function l(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(r){if(r.ep)return;r.ep=!0;const n=l(r);fetch(r.href,n)}})();const f=document.querySelector(".charity-list"),p=document.querySelectorAll(".charity-slide"),u=document.querySelector(".charity-btn"),y=6;let a=0,d="up";u.addEventListener("click",S);function g(o){const t=-o*52;f.style.transform=`translateY(${t}px)`}function S(){d==="up"?(a++,a>=p.length-y&&(a=p.length-y,d="down",u.style.transform="rotate(180deg)")):(a--,a<1&&(a=0,d="up",u.style.transform="rotate(0deg)")),g(a)}const e={ulCategoryContainer:document.querySelector("#listContainer"),gallery:document.querySelector(".js-gallery"),loader:document.querySelector(".load-div"),btnAllCategories:document.querySelector('button[data-category="All categories"]'),modalWrapper:document.querySelector(".js-modal-wrapper"),modalImg:document.querySelector(".js-modal-img"),modalTitle:document.querySelector(".js-modal-title"),modalDescription:document.querySelector(".js-modal-description"),modalText:document.querySelector(".js-modal-text"),modalLinks:document.querySelector(".js-modal-links-icon"),modalBtn:document.querySelector(".js-modal-btn"),modalCongratulation:document.querySelector(".js-modal-congratulation"),modalClose:document.querySelector(".js-icon-close"),openButton:document.querySelector(".header-open-button"),closeButton:document.querySelector(".header-close-button"),menuWrapper:document.querySelector(".burger-wraper"),headerContainer:document.querySelector(".header-container"),body:document.querySelector("body"),menuLinks:document.querySelectorAll(".burger-list"),currentPage:window.location.pathname,menuItems:document.querySelectorAll(".burger-list-ithem"),logo:document.querySelector(".js-header-logo"),listNavigation:document.querySelector(".js-header-navigation-list"),themeSwitcher:document.querySelector(".header-input"),body:document.body};function m(o,t){localStorage.setItem(o,JSON.stringify(t))}function h(o){try{const t=localStorage.getItem(o);return t===null?(console.log(`The data with the key: "${o}" was not found in Local Storage`),null):JSON.parse(t)}catch(t){return console.error(`An error occurred when trying to read data from Local Starage ${t}`),null}}const c={theme:"theme",booksInCart:"booksInCart",categoryName:"categoryName",categoryOpenInModal:"openCategory"};function k(o){const t=o.find(s=>s.name==="Amazon").url,l=o.find(s=>s.name==="Apple Books").url;return`
    <ul class="links-shop-list">
       <li class="link-shop-item">
         <a class="amazon-link" href="${t}" target="_blank" rel="noopener">
           <img class="img-amazon" src="./img/amazon.png" alt="amazon"></img>
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
             src="./img/apple-books.png"
             alt="apple-books"
           ></img>
         </a>
       </li>
     </ul>`}function v(o){let t=h(c.booksInCart);if(t===null)return;const l=t.filter(s=>s._id!==o);m(c.booksInCart,l),console.log(`The book with id ${o} was remove from cart`)}function L(){h(c.theme)==="dark"?(e.body.classList.remove("light"),e.body.classList.add("dark"),e.themeSwitcher.checked=!0):(e.body.classList.remove("dark"),e.body.classList.add("light"),e.themeSwitcher.checked=!1),document.body.classList.remove("theme-loading")}L();function b(){e.themeSwitcher.checked?(e.body.classList.remove("light"),e.body.classList.add("dark"),m(c.theme,"dark")):(e.body.classList.remove("dark"),e.body.classList.add("light"),m(c.theme,"light"))}e.themeSwitcher.addEventListener("change",function(){b()});document.addEventListener("DOMContentLoaded",function(){e.openButton.addEventListener("click",function(){e.menuWrapper.classList.add("menu-is-open"),e.headerContainer.classList.add("is-open"),e.body.style.overflow="hidden"}),e.closeButton.addEventListener("click",function(){e.menuWrapper.classList.remove("menu-is-open"),e.headerContainer.classList.remove("is-open"),e.body.style.overflow=""}),e.closeButton.addEventListener("click",function(){e.menuWrapper.classList.replace("menu-is-open","menu-is-closed")}),e.menuLinks.forEach(t=>{t.addEventListener("click",function(){e.menuWrapper.classList.remove("menu-is-open"),e.headerContainer.classList.remove("is-open"),e.body.style.overflow=""})});function o(){e.menuWrapper.classList.remove("menu-is-open"),e.headerContainer.classList.remove("is-open"),e.body.style.overflow=""}window.addEventListener("orientationchange",function(){o()})});export{e as a,v as b,h as g,k as m,c as r,m as s};
//# sourceMappingURL=burgerMenu-9b64d563.js.map
