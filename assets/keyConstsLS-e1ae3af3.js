(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function d(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=d(e);fetch(e.href,r)}})();const f=document.querySelector(".charity-list"),a=document.querySelectorAll(".charity-slide"),l=document.querySelector(".charity-btn"),u=6;let n=0,c="up";l.addEventListener("click",m);function g(o){const t=-o*52;f.style.transform=`translateY(${t}px)`}function m(){c==="up"?(n++,n>=a.length-u&&(n=a.length-u,c="down",l.style.transform="rotate(180deg)")):(n--,n<1&&(n=0,c="up",l.style.transform="rotate(0deg)")),g(n)}function y(o,t){localStorage.setItem(o,JSON.stringify(t))}function p(o){try{const t=localStorage.getItem(o);return t===null?(console.log(`The data with the key: "${o}" was not found in Local Storage`),null):JSON.parse(t)}catch(t){return console.error(`An error occurred when trying to read data from Local Starage ${t}`),null}}const h={theme:"theme",booksInCart:"booksInCart",categoryName:"categoryName"};export{p as g,h as r,y as s};
//# sourceMappingURL=keyConstsLS-e1ae3af3.js.map