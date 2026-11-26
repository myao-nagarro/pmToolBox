"use strict";
/* ---------- Views ---------- */
function renderHome(){
  main.innerHTML = `<div class="wrap">
  <section class="hero">
    <h1>Frameworks, roles and controls in one place.</h1>
    <p>Look up the principles, roles and artefacts of the main project management frameworks, and follow the links between them on a mind map.</p>
    <div class="btns"><a class="btn primary" href="#map" data-mm="root">Explore the mind map</a><a class="btn" href="#pmbok">Browse frameworks</a></div>
  </section>
  <div class="index">${GROUPS.map(g=>`<section style="--gc:var(--c-${g.id})"><h2>${esc(g.name)}</h2><ul>${
    Object.entries(TOPICS).filter(([,t])=>t.group===g.id).map(([id,t])=>`<li><a href="#${id}">${esc(t.title)}</a><span>${esc(t.tagline)}</span></li>`).join("")
  }</ul></section>`).join("")}</div>
  <h2 class="sec">Frameworks side by side</h2>
  <p class="sec-sub">A quick way to choose, or to combine them in a hybrid approach.</p>
  <div class="tbl-wrap"><table><thead><tr><th scope="col">Framework</th><th scope="col">Best for</th><th scope="col">Planning style</th><th scope="col">Key roles</th><th scope="col">Change handled through</th></tr></thead><tbody>${
    COMPARE.map(r=>`<tr><th scope="row"><a href="#${r[1]}">${esc(r[0])}</a></th><td>${esc(r[2])}</td><td>${esc(r[3])}</td><td>${esc(r[4])}</td><td>${esc(r[5])}</td></tr>`).join("")
  }</tbody></table></div>
  <p class="foot">PMBOK, PRINCE2, SAFe, ITIL and TOGAF are trademarks of their respective owners. Summaries are paraphrased for quick reference; check the official publications for full detail.</p>
  </div>`;
}

function renderTopic(id){
  const t=TOPICS[id];
  const rel=(t.related||[]).concat(t.group==="frameworks"?["role-map"]:[]).filter(r=>TOPICS[r]);
  main.innerHTML = `<article class="topic wrap" style="--gc:var(--c-${t.group})">
    <header class="topic-head"><span class="tab">${esc(GN[t.group])}</span><h1>${esc(t.title)}</h1><p class="tagline">${esc(t.tagline)}</p><p class="topic-actions"><a class="btn small" href="#map" data-mm="t:${id}">Show in mind map</a></p></header>
    ${t.sections.map(sec).join("")}
    ${rel.length?`<section class="block"><h2>Related topics</h2><div class="related">${rel.map(r=>`<a href="#${r}">${esc(TOPICS[r].title)}</a>`).join("")}</div></section>`:""}
  </article>`;
}

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
