import{a as A,i as w,S as b}from"./assets/vendor-DEenWwFD.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();async function E(e,r,n=15){if(!e)throw new Error("Search query cannot be empty.");const i="47428145-66711742d009cc5b9838094e7",t="https://pixabay.com/api/",o={key:i,q:e,image_type:"photo",orientation:"horizontal",safesearch:"true",page:r,per_page:n};return(await A.get(t,{params:o})).data}function S(e){return e.map(({largeImageURL:r,webformatURL:n,tags:i,likes:t,views:o,comments:a,downloads:h})=>`<li class="img-item">
          <a class="gallery-link" href="${r}">
          <img 
              class="gallery-image" 
              src=${n} 
              alt="${i}" width=360 height=152
              />
      </a>
          <ul class="list-text">
            <li class="item-text">
              <h2 class="title-img">Likes</h2>
              <p class="text-info">${t}</p>
            </li>
            <li class="item-text">
              <h2 class="title-img">Views</h2>
              <p class="text-info">${o}</p>
            </li>
            <li class="item-text">
              <h2 class="title-img">Comments</h2>
              <p class="text-info">${a}</p>
            </li>
            <li class="item-text">
              <h2 class="title-img">Downloads</h2>
              <p class="text-info">${h}</p>
            </li>
          </ul>
        </li>`).join("")}const x="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAETSURBVHgBrVVbDoJADCwEwq83kaN4I+UkHgGP4mH4YTGslFBB2e0UYZImG9rO7KMtRBG0bXd1rvMW49gYTxYjTxK6eU+PNKUnKeh7Kjl2yKGiyCtCmHf+upMRHItO8je5WWQPORQ5gjwqopE7586YcB3zJTIt6kBiiR5ONtc0TRnw1ewbBbouTMLfYyJCjnJVgZgIIl/mZQSQ53k1BPNybCYGNxYb+1A+FPgVEQELOSMlI4aREFwjmE4gs4lt+mSePVBgSS7XsnwTKKJVg1YtWgkv/bDRLKWoNpoEDYShUVESQChGRsVnc5rIVqzIBUeIRMmPEIHke0Q08lUfyFjwPuE6P1l++kT+smV8jJhPgk27ljfw3ToafivEMQAAAABJRU5ErkJggg==",d=document.querySelector(".form-search"),g=document.querySelector(".gallery"),l=document.querySelector(".loader"),s=document.querySelector(".load-more");l.style.display="none";s.style.display="none";let p="",u=1;const y=15;let m;d.addEventListener("submit",B);s.addEventListener("click",P);async function B(e){if(e.preventDefault(),l.style.display="block",g.innerHTML="",s.style.display="none",p=e.target.elements.text.value.trim(),!p){c("Please write a query for search"),l.style.display="none";return}u=1,await f()}async function P(){u+=1,await f()}async function f(){l.style.display="block";try{const e=await E(p,u,y);if(e.totalHits===0){c("Sorry, there are no images matching your search query. Please try again!"),s.style.display="none";return}I(e.hits),R(),u*y>=e.totalHits?(s.style.display="none",c("We're sorry, but you've reached the end of search results.")):s.style.display="block",d.reset()}catch{c("An unexpected error occurred. Please try again later."),s.style.display="none"}finally{l.style.display="none"}}function c(e){w.error({iconUrl:x,position:"topRight",backgroundColor:"#EF4040",iconColor:"#FAFAFB",imageWidth:24,messageColor:"#FAFAFB",message:e})}function I(e){const r=S(e);g.insertAdjacentHTML("beforeend",r),L()}function L(){m?m.refresh():m=new b(".gallery a",{captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",animationSpeed:250,className:"simpl-lightbox"})}function R(){const{height:e}=g.firstElementChild.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
