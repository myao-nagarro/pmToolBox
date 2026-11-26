"use strict";
/* ---------- Utilities ---------- */
const $ = (s,el=document)=>el.querySelector(s);
const main = $("#main");
const side = $("#side");
const esc = s => String(s==null?"":s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
/** Run fn at most once per `ms` of quiet input. */
const debounce=(fn,ms)=>{let t;return (...a)=>{clearTimeout(t);t=setTimeout(()=>fn(...a),ms);};};
/** Move keyboard focus to the page heading after a view change, without scrolling. */
function focusHeading(){const h=main.querySelector("h1");if(!h)return;h.setAttribute("tabindex","-1");h.focus({preventScroll:true});}

/* ---------- Sidebar ---------- */
const GICON={
  frameworks:"M22 11V3h-7v3H9V3H2v8h7V8h2v10h4v3h7v-8h-7v3h-2V8h2v3z",
  people:"M16 11c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5C15 14.17 10.33 13 8 13zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z",
  raid:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z",
  concepts:"M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z",
  bestpractices:"M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
};
const icon=(g,cls="")=>`<svg class="ic ${cls}" viewBox="0 0 24 24" aria-hidden="true"><path d="${GICON[g]||GICON.frameworks}"/></svg>`;
function buildSide(){
  side.innerHTML = GROUPS.map(g=>`<section class="grp" style="--gc:var(--c-${g.id})"><h2><button class="grp-btn" aria-expanded="false" aria-controls="grp-${g.id}">${icon(g.id)}<span>${esc(g.name)}</span><svg class="ic chev" viewBox="0 0 24 24" aria-hidden="true"><path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z"/></svg></button></h2><ul id="grp-${g.id}" hidden>${
    Object.entries(TOPICS).filter(([,t])=>t.group===g.id).map(([id,t])=>`<li><a href="#${id}" data-nav="${id}">${esc(t.title)}</a></li>`).join("")
  }</ul></section>`).join("") + `<a class="side-link" href="#practices" data-nav="practices">Best practices overview<small>How leading organizations run projects</small></a><a class="side-link" href="#map" data-nav="map" data-mm="root">Mind map<small>Navigate every concept and its links</small></a><a class="side-link" href="#glossary" data-nav="glossary">Glossary<small>Key terms per framework, with sources</small></a>`;
}
buildSide();
/** Accordion: only one category is open at a time. */
function openGroup(sec){
  side.querySelectorAll(".grp").forEach(g=>{const o=g===sec,b=g.querySelector(".grp-btn");b.setAttribute("aria-expanded",String(o));g.querySelector("ul").hidden=!o;});
}
side.addEventListener("click",e=>{const b=e.target.closest(".grp-btn");if(!b)return;const sec=b.closest(".grp");openGroup(b.getAttribute("aria-expanded")==="true"?null:sec);});
function markActive(h){document.querySelectorAll("[data-nav]").forEach(a=>{if(a.dataset.nav===h)a.setAttribute("aria-current","page");else a.removeAttribute("aria-current");});
  const cur=side.querySelector('.grp a[aria-current="page"]');if(cur)openGroup(cur.closest(".grp"));}
/** Collapse the whole sidebar on wide screens to give the content more room. */
(function(){
  const btn=$("#sideBtn"),shell=$(".shell");if(!btn)return;
  const set=c=>{shell.classList.toggle("side-collapsed",c);btn.setAttribute("aria-expanded",String(!c));try{localStorage.setItem("pm-side",c?"0":"1");}catch(_){}};
  try{if(localStorage.getItem("pm-side")==="0"){shell.classList.add("side-collapsed");btn.setAttribute("aria-expanded","false");}}catch(_){}
  btn.addEventListener("click",()=>set(!shell.classList.contains("side-collapsed")));
})();
const menuBtn=$("#menuBtn");
function closeNav(){side.classList.remove("open");menuBtn.setAttribute("aria-expanded","false");}
menuBtn.addEventListener("click",()=>{const o=side.classList.toggle("open");menuBtn.setAttribute("aria-expanded",String(o));});
side.addEventListener("click",e=>{if(e.target.closest("a"))closeNav();});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeNav();});

/* ---------- Section renderer ---------- */
const QUADS = [
{k:"HL",name:"Keep satisfied",desc:"High power, low interest. Consult on key decisions; don’t overload with detail."},
{k:"HH",name:"Manage closely",desc:"High power, high interest. Engage fully and often; involve in decisions."},
{k:"LL",name:"Monitor",desc:"Low power, low interest. Minimal effort; watch for changes."},
{k:"LH",name:"Keep informed",desc:"Low power, high interest. Regular updates; useful allies and early warnings."}
];
function piGrid(list){
  return `<div class="pi" role="group" aria-label="Power–interest grid"><div class="ylab">Power: low to high</div>${
    QUADS.map(q=>{
      const people = list ? list.filter(s=>s.power+s.interest===q.k) : null;
      return `<div class="q${q.k==="HH"?" hot":""}"><h3>${q.name}</h3><p>${q.desc}</p>${people?`<div class="chips">${people.map(s=>`<span class="chip ${s.attitude==="Supporter"?"sup":s.attitude==="Resistor"?"res":""}">${esc(s.name)}</span>`).join("")||`<span class="chip" style="opacity:.6">None yet</span>`}</div>`:""}</div>`;
    }).join("")
  }<div class="xlab">Interest: low to high</div></div>`;
}
/** Cells carry their column name so tables can turn into stacked cards on narrow containers. */
const lab=h=>` data-label="${esc(h)}"`;
function rmCell(c){
  if(c.startsWith("–"))return `<span class="rm-none">${esc(c)}</span>`;
  if(c.startsWith("≈ "))return `<span class="rm-part"><b title="Partial match">≈</b>${esc(c.slice(2))}</span>`;
  return esc(c);
}
function sec(s){
  switch(s.t){
    case "p": return `<p class="prose">${esc(s.x)}</p>`;
    case "list": return `<section class="block"><h2>${esc(s.h)}</h2><dl class="terms">${s.i.map(([a,b])=>`<div><dt>${esc(a)}</dt><dd>${esc(b)}</dd></div>`).join("")}</dl></section>`;
    case "steps": return `<section class="block"><h2>${esc(s.h)}</h2><ol class="steps">${s.i.map(([a,b])=>`<li><strong>${esc(a)}</strong><span>${esc(b)}</span></li>`).join("")}</ol></section>`;
    case "table": return `<section class="block"><h2>${esc(s.h)}</h2><div class="tbl-wrap"><table><thead><tr>${s.head.map(h=>`<th scope="col">${esc(h)}</th>`).join("")}</tr></thead><tbody>${s.rows.map(r=>`<tr>${r.map((c,i)=>i===0?`<th scope="row">${esc(c)}</th>`:`<td${lab(s.head[i])}>${esc(c)}</td>`).join("")}</tr>`).join("")}</tbody></table></div></section>`;
    case "links": return `<section class="block"><h2>${esc(s.h)}</h2><ul class="src-list">${s.i.map(([a,b,u])=>`<li>${u?`<a href="${esc(u)}" target="_blank" rel="noopener">${esc(a)}<svg class="ic ext" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg></a>`:esc(a)}<span>${esc(b)}</span></li>`).join("")}</ul></section>`;
    case "note": return `<aside class="note"><h3>${esc(s.h)}</h3><p>${esc(s.x)}</p></aside>`;
    case "pi": return `<section class="block"><h2>The grid</h2>${piGrid(null)}</section>`;
    case "gloss": return `<section class="block"><h2>${esc(s.h)}</h2><p class="sec-sub">Key terms with their source. Definitions are paraphrased; follow the source for the official wording.</p>${glTable(s.fw,GLOSSARY[s.fw].terms)}<p class="gl-srch">Sources</p>${glSources(s.fw)}</section>`;
    case "rolemap": return `<section class="block"><h2>${esc(s.h)}</h2><div class="seg" role="group" aria-label="Frameworks to show">${s.cols.map((c,i)=>`<button aria-pressed="true" data-act="rm-col" data-col="${i}">${esc(c)}</button>`).join("")}</div><p class="legend"><span>Select frameworks to show or hide them.</span><span><b>≈</b> partial match</span><span><b>–</b> no direct equivalent</span></p><div class="tbl-wrap"><table class="rolemap"><thead><tr><th scope="col">Role archetype</th>${s.cols.map((c,i)=>`<th scope="col" data-col="${i}"><a href="#${s.links[i]}">${esc(c)}</a></th>`).join("")}</tr></thead><tbody>${s.rows.map(r=>`<tr><th scope="row">${esc(r[0])}<small>${esc(r[1])}</small></th>${r.slice(2).map((c,i)=>`<td data-col="${i}"${lab(s.cols[i])}>${rmCell(c)}</td>`).join("")}</tr>`).join("")}</tbody></table></div></section>`;
  }
  return "";
}
