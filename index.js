import{a as l,S as g,i as a}from"./assets/vendor-C1DvvBV_.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const p="58245982-ec026596cf420c6452e114522";l.defaults.baseURL="https://pixabay.com/api/";function y(o){return l.get("",{params:{key:p,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const c=document.querySelector(".gallery"),u=document.querySelector(".loader"),h=new g(".gallery a",{captionsData:"alt",captionDelay:250});function b(o){const r=o.map(({webformatURL:i,largeImageURL:n,tags:e,likes:t,views:s,comments:m,downloads:d})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${n}">
          <img class="gallery-image" src="${i}" alt="${e}" />
        </a>
        <ul class="info">
          <li class="info-item"><b>Likes</b>${t}</li>
          <li class="info-item"><b>Views</b>${s}</li>
          <li class="info-item"><b>Comments</b>${m}</li>
          <li class="info-item"><b>Downloads</b>${d}</li>
        </ul>
      </li>`).join("");c.insertAdjacentHTML("beforeend",r),h.refresh()}function L(){c.innerHTML=""}function S(){u.classList.remove("is-hidden")}function q(){u.classList.add("is-hidden")}const f=document.querySelector(".form");f.addEventListener("submit",w);function w(o){o.preventDefault();const r=o.currentTarget.elements["search-text"].value.trim();if(!r){a.warning({message:"Please enter a search query.",position:"topRight"});return}L(),S(),y(r).then(({hits:i})=>{if(i.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(i)}).catch(i=>{a.error({message:`Something went wrong: ${i.message}`,position:"topRight"})}).finally(()=>{q(),f.reset()})}
//# sourceMappingURL=index.js.map
