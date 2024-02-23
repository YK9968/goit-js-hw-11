import{i as p,S as g}from"./assets/vendor-5b791d57.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();function d(){const i="42471453-a4a004408e33f852748a0909e",s="https://pixabay.com/api/",a=m.value,r=`${s}?key=${i}&q=${a}&image_type=photo&orientation=horizontal&safesearch=${!0}`;return fetch(r).then(o=>{if(!o.ok)throw new Error(`Problem ${o.status}`);return o.json()}).catch(o=>{console.log(o)})}function h(i){const s=i.map(({webformatURL:a,largeImageURL:n,tags:e,likes:t,views:r,comments:o,downloads:f})=>`<li class="image-search">
        <a href="${n}">
        <img class="gallery-image" src="${a}" alt="${e}"/>
        </a>
        <ul class="gallery-image-info">
          <li class="image-items">
            <p class="image-info-items"><span class="image-items-text">Likes</span>${t}</p>
            <p class="image-info-items"><span class="image-items-text">Views</span>${r}</p>
            <p class="image-info-items"><span class="image-items-text">Comments</span>${o}</p>
            <p class="image-info-items"><span class="image-items-text">Downloads</span>${f}</p>
          </li>
        </ul>
      </li>`).join("");l.innerHTML=s,u.classList.remove("loader")}const y="/goit-js-hw-11/assets/error-1e41ecdc.svg",l=document.querySelector(".gallery-list"),m=document.querySelector("input"),c=document.querySelector("form"),u=document.querySelector(".form-container div");c.addEventListener("submit",L);function L(i){if(i.preventDefault(),l.innerHTML="",m.value.trim()===""){c.reset();return}u.classList.add("loader"),d().then(s=>{s.total===0&&p.error({iconUrl:y,messageColor:"#ffffff",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",position:"topRight",messageSize:16,maxWidth:902,layout:2,maxWidth:380,theme:"dark"}),h(s.hits),new g(".gallery-list a",{captionsData:"alt",captionDelay:250}).refresh()}),c.reset()}
//# sourceMappingURL=commonHelpers.js.map
