"use strict";
Object.assign(GLOSSARY,GL_NEW);
Object.entries(GLOSSARY).forEach(([fw,G])=>G.terms.forEach(t=>{if(!t[3]&&GL_EX[fw])t[3]=GL_EX[fw][t[0]]||"";}));
const GL_ORDER=["pmbok","prince2","scrum","safe","kanban","itil","togaf","okr","kpi","business-justification","pmo-governance","strategic-cascade"];
GL_ORDER.forEach(fw=>TOPICS[fw].sections.push({t:"gloss",h:"Glossary",fw}));
function glRef(fw,ref){const i=ref.indexOf(":");const id=i<0?ref:ref.slice(0,i),loc=i<0?"":ref.slice(i+1);const S=GLOSSARY[fw].sources[id];
  const name=S.u?`<a href="${S.u}" target="_blank" rel="noopener" title="${esc(S.t)}">${esc(S.s)}</a>`:`<span title="${esc(S.t)}">${esc(S.s)}</span>`;
  return name+(loc?`, ${esc(loc)}`:"");}
function glTable(fw,terms){return `<div class="tbl-wrap"><table class="gl"><thead><tr><th scope="col">Term</th><th scope="col">Definition (paraphrased)</th><th scope="col">Source</th></tr></thead><tbody>${terms.map(([a,b,r,x])=>`<tr><th scope="row">${esc(a)}</th><td data-label="Definition">${esc(b)}${x?`<p class="gl-ex"><span>Example:</span> ${esc(x)}</p>`:""}</td><td class="gl-ref" data-label="Source">${glRef(fw,r)}</td></tr>`).join("")}</tbody></table></div>`;}
function glSources(fw){const S=GLOSSARY[fw].sources;return `<ul class="gl-src">${Object.values(S).map(s=>`<li>${s.u?`<a href="${s.u}" target="_blank" rel="noopener">${esc(s.t)}</a>`:esc(s.t)}${s.p?". "+esc(s.p):""}.</li>`).join("")}</ul>`;}
const GL_NOTE="Definitions are short paraphrases written for this toolbox, not the official wording. PMI, PeopleCert (PRINCE2, ITIL), Scaled Agile and The Open Group publish their glossaries under copyright, so follow the source links for the exact text; books are cited without links. The Scrum Guide and the Kanban Guide are free to read in full under a Creative Commons licence. Examples use fictional organizations such as Fjordbank, a regional bank.";
let glQ="", glF="all";
function renderGlossary(){
  main.innerHTML=`<div class="wrap"><header class="topic-head" style="--gc:var(--c-frameworks)"><span class="tab">Reference</span><h1>Glossary</h1><p class="tagline">Key terms of each framework, with the publication that defines them.</p></header>
  <aside class="note" style="--gc:var(--c-frameworks)"><h3>About these definitions</h3><p>${esc(GL_NOTE)}</p></aside>
  <div class="gl-tools"><label class="sr" for="glq">Filter terms</label><input id="glq" class="f" type="search" placeholder="Filter terms, e.g. backlog, tolerance" value="${esc(glQ)}">
  <div class="seg" role="group" aria-label="Framework"><button data-glf="all" aria-pressed="${glF==="all"}">All</button>${GL_ORDER.map(fw=>`<button data-glf="${fw}" aria-pressed="${glF===fw}">${esc(TOPICS[fw].title.replace(/®/g,""))}</button>`).join("")}</div></div>
  <div id="glOut"></div></div>`;
  drawGloss();
}
function drawGloss(){
  const q=glQ.trim().toLowerCase();let total=0;
  const html=GL_ORDER.filter(fw=>glF==="all"||glF===fw).map(fw=>{
    const terms=GLOSSARY[fw].terms.filter(t=>!q||(t[0]+" "+t[1]+" "+(t[3]||"")).toLowerCase().includes(q));total+=terms.length;
    if(!terms.length)return "";
    return `<section class="block" style="--gc:var(--c-${TOPICS[fw].group})"><h2 class="gl-h"><a href="#${fw}">${esc(TOPICS[fw].title)}</a> <small>${terms.length} term${terms.length===1?"":"s"}</small></h2>${glTable(fw,terms)}<p class="gl-srch">Sources</p>${glSources(fw)}</section>`;
  }).join("");
  $("#glOut").innerHTML=total?html:`<div class="empty">No term matches “${esc(glQ)}”. Try a shorter word or choose All.</div>`;
}
document.addEventListener("input",e=>{if(e.target.id==="glq"){glQ=e.target.value;drawGloss();}});
document.addEventListener("click",e=>{const b=e.target.closest("[data-glf]");if(!b)return;glF=b.dataset.glf;document.querySelectorAll("[data-glf]").forEach(x=>x.setAttribute("aria-pressed",String(x.dataset.glf===glF)));drawGloss();});
