"use strict";
/* ---------- Views ---------- */
const nTopics=()=>Object.keys(TOPICS).length;
const nTerms=()=>Object.values(GLOSSARY).reduce((n,g)=>n+g.terms.length,0);
function heroArt(){
  const d=[["frameworks",8,14],["people",58,2],["raid",34,58],["concepts",84,52],["bestpractices",60,86]];
  return `<svg class="hero-art" viewBox="0 0 140 120" aria-hidden="true">
  <circle cx="70" cy="60" r="46" class="ring"/><circle cx="70" cy="60" r="30" class="ring"/>
  ${d.map(([g,x,y],i)=>`<g class="bubble b${i}" style="--gc:var(--c-${g})"><circle cx="${x+14}" cy="${y+14}" r="14"/><svg x="${x+6}" y="${y+6}" width="16" height="16" viewBox="0 0 24 24"><path d="${GICON[g]}"/></svg></g>`).join("")}</svg>`;
}
function renderHome(){
  main.innerHTML = `<div class="wrap">
  <section class="hero">
    <div class="hero-text">
    <p class="eyebrow">Project management field guide</p>
    <h1>Frameworks, roles and controls in one place.</h1>
    <p>Look up the principles, roles and artefacts of the main project management frameworks, follow the links between them on a mind map, and see how leading organizations run projects.</p>
    <div class="btns"><a class="btn primary" href="#map" data-mm="root">Explore the mind map</a><a class="btn tonal" href="#practices">Best practices</a><a class="btn outlined" href="#pmbok">Browse frameworks</a></div>
    <div class="stats"><span><b>${nTopics()}</b> topics</span><span><b>${nTerms()}</b> glossary terms</span><span><b>${GROUPS.length}</b> areas</span></div>
    </div>${heroArt()}
  </section>
  <div class="index">${GROUPS.map(g=>`<section class="card" style="--gc:var(--c-${g.id})"><h2>${icon(g.id,"big")}${esc(g.name)}</h2><ul>${
    Object.entries(TOPICS).filter(([,t])=>t.group===g.id).map(([id,t])=>`<li><a href="#${id}">${esc(t.title)}</a><span>${esc(t.tagline)}</span></li>`).join("")
  }</ul></section>`).join("")}</div>
  <h2 class="sec">Frameworks side by side</h2>
  <p class="sec-sub">A quick way to choose, or to combine them in a hybrid approach.</p>
  <div class="tbl-wrap"><table><thead><tr><th scope="col">Framework</th><th scope="col">Best for</th><th scope="col">Planning style</th><th scope="col">Key roles</th><th scope="col">Change handled through</th></tr></thead><tbody>${
    COMPARE.map(r=>`<tr><th scope="row"><a href="#${r[1]}">${esc(r[0])}</a></th><td data-label="Best for">${esc(r[2])}</td><td data-label="Planning style">${esc(r[3])}</td><td data-label="Key roles">${esc(r[4])}</td><td data-label="Change handled through">${esc(r[5])}</td></tr>`).join("")
  }</tbody></table></div>
  <p class="foot">PMBOK, PRINCE2, SAFe, ITIL and TOGAF are trademarks of their respective owners. Summaries are paraphrased for quick reference; check the official publications for full detail.</p>
  </div>`;
}

function renderTopic(id){
  const t=TOPICS[id];
  const rel=(t.related||[]).concat(t.group==="frameworks"?["role-map"]:[]).filter(r=>TOPICS[r]);
  const peers=Object.keys(TOPICS).filter(k=>TOPICS[k].group===t.group),pi=peers.indexOf(id);
  const prev=peers[pi-1],next=peers[pi+1];
  const hue=t.bp?`--gc:${t.bp.hue};`:`--gc:var(--c-${t.group});`;
  main.innerHTML = `<article class="topic wrap" style="${hue}">
    <header class="topic-head">${t.bp?`<span class="org-mark lg" aria-hidden="true">${esc(t.bp.mark)}</span>`:""}<span class="tab">${icon(t.group)}${esc(GN[t.group])}</span><h1>${esc(t.title)}</h1><p class="tagline">${esc(t.tagline)}</p>${t.bp?`<p class="chips-row">${t.bp.themes.map(x=>`<span class="chip tonal">${esc(x)}</span>`).join("")}</p>`:""}<p class="topic-actions"><a class="btn small tonal" href="#map" data-mm="t:${id}">Show in mind map</a>${t.bp?`<a class="btn small outlined" href="#practices">All best practices</a>`:""}</p></header>
    <nav class="toc" aria-label="On this page"></nav>
    ${t.sections.map(sec).join("")}
    ${rel.length?`<section class="block related-block"><h2>Related topics</h2><div class="related">${rel.map(r=>`<a href="#${r}">${esc(TOPICS[r].title)}</a>`).join("")}</div></section>`:""}
    <nav class="pager" aria-label="More in ${esc(GN[t.group])}">${prev?`<a href="#${prev}"><small>Previous</small>${esc(TOPICS[prev].title)}</a>`:"<span></span>"}${next?`<a class="next" href="#${next}"><small>Next</small>${esc(TOPICS[next].title)}</a>`:"<span></span>"}</nav>
  </article>`;
  buildToc();
}
/** "On this page" chips: jump to a section and highlight the one being read. */
function buildToc(){
  const toc=main.querySelector(".toc"),hs=[...main.querySelectorAll(".block:not(.related-block) > h2")];
  if(!toc)return;
  if(hs.length<3){toc.remove();return;}
  hs.forEach((h,i)=>{h.parentElement.id="sec-"+i;});
  toc.innerHTML=hs.map((h,i)=>`<a href="#sec-${i}" data-sec="sec-${i}">${esc(h.textContent)}</a>`).join("");
  toc.addEventListener("click",e=>{const a=e.target.closest("a[data-sec]");if(!a)return;e.preventDefault();document.getElementById(a.dataset.sec).scrollIntoView({behavior:(window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches)?"auto":"smooth"});});
  if("IntersectionObserver" in window){
    const io=new IntersectionObserver(es=>es.forEach(en=>{if(en.isIntersecting){toc.querySelectorAll("a").forEach(l=>l.removeAttribute("aria-current"));const l=toc.querySelector(`[data-sec="${en.target.id}"]`);if(l)l.setAttribute("aria-current","true");}}),{rootMargin:"-20% 0px -70% 0px"});
    hs.forEach(h=>io.observe(h.parentElement));
  }
}

/* Best practices overview: filterable cards by organization and theme */
const BP_ICON={"Delivery":"M13 3a9 9 0 0 0-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0 0 13 21a9 9 0 0 0 0-18z","Culture and teams":GICON.people,"Decisions":"M12 2 2 7l10 5 10-5-10-5zm0 11.5L4.5 9.8V15L12 19l7.5-4V9.8L12 13.5z","Risk and quality":GICON.raid,"Innovation":GICON.concepts,"Governance":"M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"};
let bpTheme="all";
const bpIds=()=>Object.keys(TOPICS).filter(k=>TOPICS[k].group==="bestpractices");
function renderPractices(){
  const ids=bpIds();
  main.innerHTML=`<div class="wrap practices"><header class="topic-head" style="--gc:var(--c-bestpractices)"><span class="tab">${icon("bestpractices")}Best Practices</span><h1>Best practices from leading organizations</h1><p class="tagline">What well-known companies and public bodies say about how they run projects. Filter by theme, then open an organization for the details and sources.</p></header>
  <div class="themes" role="group" aria-label="Themes">${BP_THEMES.map(th=>{const n=ids.filter(i=>TOPICS[i].bp.themes.includes(th)).length;return `<button class="theme" data-theme="${esc(th)}" aria-pressed="false"><svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path d="${BP_ICON[th]}"/></svg><span>${esc(th)}</span><b>${n}</b></button>`;}).join("")}</div>
  <div class="filter-bar"><button class="chip filter" data-theme="all" aria-pressed="true">All organizations (${ids.length})</button><span id="bpCount" class="muted" aria-live="polite"></span></div>
  <div class="bp-grid" id="bpGrid"></div>
  <p class="foot">Summaries paraphrase public material and are not endorsed by the organizations. Figures that organizations report about themselves are self-reported. Always check the linked sources.</p></div>`;
  bpTheme="all";
  drawPractices();
}
function drawPractices(){
  const ids=bpIds().filter(i=>bpTheme==="all"||TOPICS[i].bp.themes.includes(bpTheme));
  $("#bpGrid").innerHTML=ids.map(i=>{const t=TOPICS[i];return `<a class="bp-card" href="#${i}" style="--gc:${t.bp.hue}"><span class="org-mark" aria-hidden="true">${esc(t.bp.mark)}</span><h2>${esc(t.title)}</h2><p class="bp-head">${esc(t.bp.headline)}</p><p>${esc(t.tagline)}</p><span class="chips-row">${t.bp.themes.map(x=>`<span class="chip tonal${x===bpTheme?" on":""}">${esc(x)}</span>`).join("")}</span></a>`;}).join("");
  $("#bpCount").textContent=bpTheme==="all"?"":`Showing ${ids.length} for “${bpTheme}”`;
  main.querySelectorAll("[data-theme]").forEach(b=>b.setAttribute("aria-pressed",String(b.dataset.theme===bpTheme)));
}
document.addEventListener("click",e=>{const b=e.target.closest("[data-theme]");if(!b||!$("#bpGrid"))return;bpTheme=bpTheme===b.dataset.theme?"all":b.dataset.theme;drawPractices();});

/* Search */
function flat(t){
  const parts=[t.title,t.tagline];
  t.sections.forEach(s=>{if(s.x)parts.push(s.x);if(s.h)parts.push(s.h);if(s.i)s.i.forEach(p=>parts.push(p.join(": ")));if(s.rows)s.rows.forEach(r=>parts.push(r.join(" ")));if(s.t==="pi")QUADS.forEach(q=>parts.push(q.name+": "+q.desc));if(s.t==="gloss")GLOSSARY[s.fw].terms.forEach(g=>parts.push(g[0]+": "+g[1]+" Example: "+(g[3]||"")));});
  return parts.join(" \n ");
}
let INDEX=null;
const searchIndex=()=>INDEX||(INDEX=Object.entries(TOPICS).map(([id,t])=>({id,t,text:flat(t)})));
function renderSearch(q){
  const ql=q.toLowerCase();
  const hits=searchIndex().map(o=>{const tl=o.text.toLowerCase();const i=tl.indexOf(ql);if(i<0)return null;let n=0,p=tl.indexOf(ql);while(p>=0){n++;p=tl.indexOf(ql,p+ql.length);}const titleHit=o.t.title.toLowerCase().includes(ql);return {o,i,score:n+(titleHit?50:0)};}).filter(Boolean).sort((a,b)=>b.score-a.score);
  const snip=(text,i)=>{const s=Math.max(0,i-70),e=Math.min(text.length,i+q.length+90);const before=esc(text.slice(s,i)),hit=esc(text.slice(i,i+q.length)),after=esc(text.slice(i+q.length,e));return (s>0?"…":"")+before+"<mark>"+hit+"</mark>"+after+(e<text.length?"…":"");};
  main.innerHTML=`<div class="wrap"><h1 class="page-title">Results for “${esc(q)}”</h1><p class="sec-sub">${hits.length} topic${hits.length===1?"":"s"} found.</p>${
    hits.length?`<ul class="results">${hits.map(h=>`<li><a href="#${h.o.id}">${esc(h.o.t.title)}</a> <span class="chip">${esc(GN[h.o.t.group])}</span><p>${snip(h.o.text,h.i)}</p></li>`).join("")}</ul>`
    :`<div class="empty">No topic mentions “${esc(q)}”. Try a shorter word, such as “risk”, “sprint” or “board”.</div>`}</div>`;
}
const qIn=$("#q");
qIn.addEventListener("input",debounce(()=>{const v=qIn.value.trim();if(v.length>=2){renderSearch(v);markActive("");}else if(!v)route();},120));
qIn.addEventListener("keydown",e=>{if(e.key==="Escape"){qIn.value="";route();}});

/* Role map: show or hide framework columns (keeps at least one visible) */
document.addEventListener("click",e=>{
  const c=e.target.closest('[data-act="rm-col"]');if(!c)return;
  const on=c.getAttribute("aria-pressed")==="true";
  const shown=main.querySelectorAll('[data-act="rm-col"][aria-pressed="true"]').length;
  if(on&&shown<=1)return;
  c.setAttribute("aria-pressed",String(!on));
  main.querySelectorAll(`table [data-col="${c.dataset.col}"]`).forEach(el=>{el.hidden=on;});
});

/* Light/dark toggle and keyboard shortcut for search */
(function(){
  const btn=$("#themeBtn");if(!btn)return;
  const root=document.documentElement;
  const dark=()=>root.dataset.theme?root.dataset.theme==="dark":(window.matchMedia&&matchMedia("(prefers-color-scheme: dark)").matches);
  try{const t=localStorage.getItem("pm-theme");if(t)root.dataset.theme=t;}catch(_){}
  const sync=()=>{btn.setAttribute("aria-pressed",String(dark()));btn.setAttribute("aria-label",dark()?"Switch to light theme":"Switch to dark theme");};
  btn.addEventListener("click",()=>{const n=dark()?"light":"dark";root.dataset.theme=n;try{localStorage.setItem("pm-theme",n);}catch(_){}sync();});
  sync();
  document.addEventListener("keydown",e=>{if(e.key==="/"&&!/INPUT|TEXTAREA/.test(document.activeElement.tagName)){e.preventDefault();qIn.focus();}});
})();
