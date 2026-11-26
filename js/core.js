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
function buildSide(){
  side.innerHTML = GROUPS.map(g=>`<section class="grp" style="--gc:var(--c-${g.id})"><h2>${esc(g.name)}</h2><ul>${
    Object.entries(TOPICS).filter(([,t])=>t.group===g.id).map(([id,t])=>`<li><a href="#${id}" data-nav="${id}">${esc(t.title)}</a></li>`).join("")
  }</ul></section>`).join("") + `<a class="side-link" href="#map" data-nav="map" data-mm="root">Mind map<small>Navigate every concept and its links</small></a><a class="side-link" href="#glossary" data-nav="glossary">Glossary<small>Key terms per framework, with sources</small></a>`;
}
buildSide();
function markActive(h){document.querySelectorAll("[data-nav]").forEach(a=>{if(a.dataset.nav===h)a.setAttribute("aria-current","page");else a.removeAttribute("aria-current");});}
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
    case "table": return `<section class="block"><h2>${esc(s.h)}</h2><div class="tbl-wrap"><table><thead><tr>${s.head.map(h=>`<th scope="col">${esc(h)}</th>`).join("")}</tr></thead><tbody>${s.rows.map(r=>`<tr>${r.map((c,i)=>i===0?`<th scope="row">${esc(c)}</th>`:`<td>${esc(c)}</td>`).join("")}</tr>`).join("")}</tbody></table></div></section>`;
    case "note": return `<aside class="note"><h3>${esc(s.h)}</h3><p>${esc(s.x)}</p></aside>`;
    case "pi": return `<section class="block"><h2>The grid</h2>${piGrid(null)}</section>`;
    case "gloss": return `<section class="block"><h2>${esc(s.h)}</h2><p class="sec-sub">Key terms with their source. Definitions are paraphrased; follow the source for the official wording.</p>${glTable(s.fw,GLOSSARY[s.fw].terms)}<p class="gl-srch">Sources</p>${glSources(s.fw)}</section>`;
    case "rolemap": return `<section class="block"><h2>${esc(s.h)}</h2><div class="seg" role="group" aria-label="Frameworks to show">${s.cols.map((c,i)=>`<button aria-pressed="true" data-act="rm-col" data-col="${i}">${esc(c)}</button>`).join("")}</div><p class="legend"><span>Select frameworks to show or hide them.</span><span><b>≈</b> partial match</span><span><b>–</b> no direct equivalent</span></p><div class="tbl-wrap"><table class="rolemap"><thead><tr><th scope="col">Role archetype</th>${s.cols.map((c,i)=>`<th scope="col" data-col="${i}"><a href="#${s.links[i]}">${esc(c)}</a></th>`).join("")}</tr></thead><tbody>${s.rows.map(r=>`<tr><th scope="row">${esc(r[0])}<small>${esc(r[1])}</small></th>${r.slice(2).map((c,i)=>`<td data-col="${i}">${rmCell(c)}</td>`).join("")}</tr>`).join("")}</tbody></table></div></section>`;
  }
  return "";
}
