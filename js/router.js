"use strict";
/* ---------- Router ---------- */
const VIEW_TITLES={home:"Library",map:"Mind map",glossary:"Glossary",practices:"Best practices"};
let firstRoute=true;
function route(){
  const h=(location.hash||"").slice(1)||"home";
  closeNav();
  if(qIn.value&&document.activeElement!==qIn)qIn.value="";
  if(h==="map")renderMap();
  else if(h==="glossary")renderGlossary();
  else if(h==="practices")renderPractices();
  else if(TOPICS[h])renderTopic(h);
  else renderHome();
  const key=TOPICS[h]||VIEW_TITLES[h]?h:"home";
  markActive(key);
  document.title=(TOPICS[key]?TOPICS[key].title.replace(/®/g,""):VIEW_TITLES[key])+" – PM Toolbox";
  window.scrollTo(0,0);
  if(!firstRoute)focusHeading();
  firstRoute=false;
}
window.addEventListener("hashchange",()=>{qIn.value="";route();});
route();

/* Offline support when served over HTTP(S), e.g. GitHub Pages */
if("serviceWorker" in navigator&&/^https?:$/.test(location.protocol)){
  window.addEventListener("load",()=>navigator.serviceWorker.register("sw.js").catch(()=>{}));
}
