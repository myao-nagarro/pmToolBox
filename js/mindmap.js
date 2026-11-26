"use strict";
/* ---------- Mind map ---------- */
const GDESC={frameworks:"End-to-end ways of running projects, programmes and services.",people:"Who does what, who decides, and who needs to be engaged.",raid:"Controls for risks, assumptions, issues and dependencies.",concepts:"Ideas that connect projects to strategy, value and architecture.",bestpractices:"How leading companies and organizations run projects, with sources."};
const KW={
  pmbok:["pmbok","pmi","sponsor","wbs","baseline","charter"],
  prince2:["prince2","project board","senior user","senior supplier","executive","stage boundary"],
  scrum:["scrum","sprint","product owner","backlog","definition of done"],
  safe:["safe","release train","pi planning","wsjf","planning interval"],
  kanban:["kanban","wip","flow","lean","cycle time"],
  itil:["itil","service desk","incident","service level","sla","service owner"],
  raci:["raci","accountab","responsible"],
  rapid:["decide","decision","veto","rapid"],
  "power-interest":["stakeholder"],
  "role-map":["role"],
  risk:["risk"],
  assumptions:["assumption"],
  issues:["issue","off-specification","exception"],
  dependencies:["dependenc"],
  okr:["okr","key result"],
  kpi:["kpi","metric","measure","indicator"],
  "business-justification":["business case","benefit","justification"],
  togaf:["architect","togaf"],
  "pmo-governance":["governance","stage gate","tolerance","pmo","escalat"],
  "strategic-cascade":["strateg","portfolio","alignment"]
};
const NODES=new Map();
function addNode(n){n.children=[];NODES.set(n.id,n);if(n.parent)NODES.get(n.parent).children.push(n.id);return n;}
addNode({id:"root",label:"Project management toolbox",kind:"root",group:null,desc:"Every framework and concept in this toolbox. Select a branch to open it; the dashed nodes lead to related ideas in other frameworks."});
GROUPS.forEach(g=>addNode({id:"g:"+g.id,label:g.name,kind:"group",group:g.id,parent:"root",desc:GDESC[g.id]||""}));
Object.entries(TOPICS).forEach(([tid,t])=>{
  const tn=addNode({id:"t:"+tid,label:t.title,kind:"topic",group:t.group,topic:tid,parent:"g:"+t.group,desc:t.tagline});
  t.sections.forEach((s,si)=>{
    const base={group:t.group,topic:tid};
    if(s.t==="p")return;
    if(s.t==="note"){addNode({...base,id:`n:${tid}:${si}`,label:s.h,kind:"item",desc:s.x,parent:tn.id});return;}
    const sid=`s:${tid}:${si}`;
    addNode({...base,id:sid,label:s.t==="pi"?"The grid":s.h,kind:"section",desc:"",parent:tn.id});
    if(s.t==="gloss"){GLOSSARY[s.fw].terms.forEach((g,k)=>{const id=`i:${tid}:${si}:${k}`;addNode({...base,id,label:g[0],kind:"item",desc:g[1],parent:sid,fw:s.fw,ref:g[2],ex:g[3],gloss:true});if(g[3])addNode({...base,id:id+":ex",label:"Example",kind:"example",desc:g[3],parent:id});});return;}
    let items=[];
    if(s.i)items=s.i;
    else if(s.t==="table")items=s.rows.map(r=>[r[0],s.head.slice(1).map((h,k)=>r[k+1]?h+": "+r[k+1]:"").filter(Boolean).join(". ")]);
    else if(s.t==="dd")items=s.dos.map(([a,b])=>["Do: "+a,b]).concat(s.donts.map(([a,b])=>["Don’t: "+a,b]));
    else if(s.t==="pi")items=QUADS.map(q=>[q.name,q.desc]);
    else if(s.t==="gloss")items=GLOSSARY[s.fw].terms.map(g=>[g[0],g[1]]);
    else if(s.t==="rolemap")items=s.rows.map(r=>[r[0],r[1]+" "+s.cols.map((c,k)=>c+": "+r[k+2].replace(/^≈ /,"≈")).join(". ")+"."]);
    items.forEach(([a,b],k)=>addNode({...base,id:`i:${tid}:${si}:${k}`,label:a,kind:"item",desc:b,parent:sid}));
  });
});
NODES.forEach(n=>{if(n.kind==="section")n.desc=n.children.map(c=>NODES.get(c).label).join(", ")+".";});
const LABELS=new Map();
NODES.forEach(n=>{if(n.kind==="item"||n.kind==="section"){const k=n.label.toLowerCase();if(!LABELS.has(k))LABELS.set(k,[]);LABELS.get(k).push(n.id);}});
/* Cross-references between glossary terms */
const GSTOP=new Set(["value","project","product","service","output","outcome","user","customer","event","practice","enterprise","flow","change","metric","target","baseline","capability","governance","issue","story","feature","iteration","sponsor","principle","view"]);
const XREF=new Map();
(function(){
  const G=[...NODES.values()].filter(n=>n.gloss);
  const rx=s=>s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");
  G.forEach(n=>{const pats=[];const base=n.label.replace(/\s*\([^)]*\)\s*/g," ").trim();const acr=(n.label.match(/\(([^)]+)\)/)||[])[1];
    if(base.length>=3&&!GSTOP.has(base.toLowerCase()))pats.push(new RegExp("\\b"+rx(base)+"s?\\b","i"));
    if(acr&&/^[A-Z&]{2,}$/.test(acr))pats.push(new RegExp("\\b"+rx(acr)+"s?\\b"));
    n.pats=pats;XREF.set(n.id,{same:[],out:[],in:[]});});
  G.forEach(n=>{
    const x=XREF.get(n.id);const text=n.desc+" "+(n.ex||"");const lab=n.label.toLowerCase();
    G.forEach(m=>{if(m!==n&&m.fw!==n.fw&&m.label.toLowerCase()===lab)x.same.push(m.id);});
    const hits=G.filter(m=>m!==n&&m.label.toLowerCase()!==lab&&m.pats.some(p=>p.test(text)));
    hits.sort((a,b)=>(a.fw===n.fw?0:1)-(b.fw===n.fw?0:1));
    const seen=new Set();
    hits.forEach(m=>{const k=m.label.toLowerCase();if(seen.has(k)||x.out.length>=8)return;seen.add(k);x.out.push(m.id);});
  });
  XREF.forEach((x,id)=>x.out.forEach(o=>XREF.get(o).in.push(id)));
})();
function seeAlso(id){
  const n=NODES.get(id);const out=[];
  if(n.gloss){const x=XREF.get(id);const text=(n.label+" "+n.desc).toLowerCase();
    const kw=Object.entries(KW).map(([tid,ws])=>[tid,ws.filter(w=>text.includes(w)).length]).filter(([tid,c])=>c>0&&tid!==n.topic).sort((a,b)=>b[1]-a[1]).slice(0,2).map(([tid])=>"t:"+tid);
    return [...new Set([...x.same,...x.out,...x.in.slice(0,4),...kw])].slice(0,10);}
  if(n.kind==="topic"){const t=TOPICS[n.topic];(t.related||[]).concat(t.group==="frameworks"?["role-map"]:[]).forEach(r=>{if(TOPICS[r])out.push("t:"+r);});}
  else if(n.kind==="section"||n.kind==="item"){
    (LABELS.get(n.label.toLowerCase())||[]).forEach(o=>{const t=NODES.get(o).topic;if(o!==id&&t!==n.topic&&!out.some(x=>NODES.get(x).topic===t))out.push(o);});
    const text=(n.label+" "+n.desc).toLowerCase();
    Object.entries(KW).map(([tid,ws])=>[tid,ws.filter(w=>text.includes(w)).length]).filter(([tid,s])=>s>0&&tid!==n.topic).sort((a,b)=>b[1]-a[1]).forEach(([tid])=>out.push("t:"+tid));
  }
  return [...new Set(out)].slice(0,6);
}
function pathTo(id){const p=[];let n=NODES.get(id);while(n){p.unshift(n.id);n=n.parent?NODES.get(n.parent):null;}return p;}

let mmFocus="root", mmZoom=1, mmPan={x:0,y:0}, mmEls=new Map(), mmStage=null, mmWorld=null, mmSvg=null;
const VW=1000, VH=680;
function nodeColor(n){return n.group?`var(--c-${n.group})`:"var(--ink)";}
function mmLayout(){
  const f=NODES.get(mmFocus);const out=[{id:mmFocus,x:0,y:0,role:"focus"}];const edges=[];
  const rx=VW/2-95, ry=VH/2-40;
  if(mmFocus==="root"){
    const total=f.children.reduce((s,g)=>s+Math.max(1,NODES.get(g).children.length),0);
    let a=-Math.PI/2;
    f.children.forEach(g=>{
      const kids=NODES.get(g).children;const span=2*Math.PI*Math.max(1,kids.length)/total;const mid=a+span/2;
      out.push({id:g,x:Math.cos(mid)*rx*0.42,y:Math.sin(mid)*ry*0.42,role:"child"});edges.push([mmFocus,g,false]);
      kids.forEach((k,i)=>{const ang=a+span*(i+0.5)/kids.length;out.push({id:k,x:Math.cos(ang)*rx,y:Math.sin(ang)*ry,role:"grand"});edges.push([g,k,false]);});
      a+=span;
    });
  }else{
    const kids=f.children, many=kids.length>12, sa=many?[]:seeAlso(mmFocus).filter(s=>!kids.includes(s)&&s!==f.parent);
    if(many){
      const fr=kids.length>26?[0.46,0.73,1]:[0.6,1];const wsum=fr.reduce((a,b)=>a+b,0);let idx=0;
      fr.forEach((r,ri)=>{const n=ri===fr.length-1?kids.length-idx:Math.round(kids.length*r/wsum);
        for(let j=0;j<n;j++){const k=kids[idx+j];const ang=-Math.PI/2+2*Math.PI*(j+(ri%2?0.5:0))/n;out.push({id:k,x:Math.cos(ang)*rx*r,y:Math.sin(ang)*ry*r,role:"child"});edges.push([mmFocus,k,false]);}
        idx+=n;});
    }else{
    const k1=sa.length?(kids.length?0.55:0.62):0.72;
    kids.forEach((k,i)=>{const ang=-Math.PI/2+2*Math.PI*i/kids.length;out.push({id:k,x:Math.cos(ang)*rx*k1,y:Math.sin(ang)*ry*k1,role:"child"});edges.push([mmFocus,k,false]);});
    const off=kids.length?Math.PI/Math.max(kids.length,sa.length):0;
    sa.forEach((k,i)=>{const ang=-Math.PI/2+off+2*Math.PI*i/sa.length;out.push({id:k,x:Math.cos(ang)*rx,y:Math.sin(ang)*ry,role:"also"});edges.push([mmFocus,k,true]);});
    }
    if(f.parent&&f.parent!=="root"&&!out.some(o=>o.id===f.parent)){out.push({id:f.parent,x:-rx*0.98,y:-ry*0.95,role:"up"});edges.push([mmFocus,f.parent,false]);}
  }
  return {out,edges};
}
function renderMap(){
  main.innerHTML=`<div class="mm-wrap">
    <div class="mm-main">
      <nav class="mm-crumbs" aria-label="Mind map path" id="mmCrumbs"></nav>
      <div class="mm-stage" id="mmStage" aria-label="Mind map. Select a node to open it.">
        <div class="mm-world" id="mmWorld"><svg class="mm-svg" id="mmSvg" width="1" height="1" aria-hidden="true"></svg></div>
        <div class="mm-tools"><button class="btn small" data-mmz="in" aria-label="Zoom in">+</button><button class="btn small" data-mmz="out" aria-label="Zoom out">−</button><button class="btn small" data-mmz="fit">Fit</button></div>
      </div>
      <p class="legend mm-legend"><span>Solid lines lead deeper into a topic.</span><span>Dashed nodes link to terms that share a name, refer to each other, or relate to other topics.</span><span>Drag to pan, scroll or use the buttons to zoom. Keys: Esc goes up a level, Home returns to the overview, + and − zoom, 0 fits.</span></p>
    </div>
    <aside class="mm-panel" id="mmPanel" aria-live="polite"></aside>
  </div>`;
  mmStage=$("#mmStage");mmWorld=$("#mmWorld");mmSvg=$("#mmSvg");mmEls=new Map();
  bindStage();mmFit();drawMap(false);
}
function mmFit(){const W=mmStage.clientWidth,H=mmStage.clientHeight;mmZoom=Math.min(1.1,W/(VW+40),H/(VH+40));mmPan={x:0,y:0};applyView();}
function applyView(){mmWorld.style.transform=`translate(${mmPan.x}px,${mmPan.y}px) scale(${mmZoom})`;}
function drawMap(animate){
  const {out,edges}=mmLayout();const pos=new Map(out.map(o=>[o.id,o]));
  const keep=new Set(out.map(o=>o.id));
  mmEls.forEach((el,id)=>{if(!keep.has(id)){el.remove();mmEls.delete(id);}});
  out.forEach(o=>{
    const n=NODES.get(o.id);let el=mmEls.get(o.id);
    if(!el){el=document.createElement("button");el.type="button";el.dataset.node=o.id;mmWorld.appendChild(el);mmEls.set(o.id,el);
      if(animate){const pr=pos.get(mmFocus);el.style.transform=`translate(-50%,-50%) translate(${pr.x}px,${pr.y}px)`;el.getBoundingClientRect();}}
    el.className=`mm-node k-${n.kind} r-${o.role}`;
    el.style.setProperty("--gc",nodeColor(n));
    const pre=o.role==="also"&&n.topic&&n.kind!=="topic"?`<small>${esc(TOPICS[n.topic].title)}</small>`:o.role==="up"?`<small>Back to</small>`:"";
    const cnt=n.children.length&&o.role!=="focus"&&!n.gloss?`<i>${n.children.length}</i>`:"";
    el.innerHTML=n.kind==="example"?`<small>Example</small><span>${esc(n.desc)}</span>`:`${pre}<span>${esc(n.label)}</span>${cnt}`;
    el.setAttribute("aria-label",(o.role==="focus"?"Current: ":o.role==="also"?"Related: ":o.role==="up"?"Back to: ":"")+n.label+(n.children.length?`, ${n.children.length} branches`:""));
    el.style.transform=`translate(-50%,-50%) translate(${o.x}px,${o.y}px)`;
  });
  mmSvg.innerHTML=edges.map(([a,b,d])=>{const p=pos.get(a),q=pos.get(b);const mx=(p.x+q.x)/2,my=(p.y+q.y)/2;const dx=q.x-p.x,dy=q.y-p.y;const cx=mx-dy*0.12,cy=my+dx*0.12;const n=NODES.get(b);
    return `<path d="M${p.x.toFixed(1)} ${p.y.toFixed(1)} Q${cx.toFixed(1)} ${cy.toFixed(1)} ${q.x.toFixed(1)} ${q.y.toFixed(1)}" class="${d?"dash":""}" style="stroke:${nodeColor(n.group?n:NODES.get(a))}"/>`;}).join("");
  renderPanel();
}
function renderPanel(){
  const n=NODES.get(mmFocus);const path=pathTo(mmFocus);
  $("#mmCrumbs").innerHTML=path.map((id,i)=>i===path.length-1?`<span aria-current="location">${esc(NODES.get(id).label)}</span>`:`<button class="crumb" data-focus="${id}">${esc(NODES.get(id).label)}</button><span aria-hidden="true">/</span>`).join("");
  const sa=seeAlso(mmFocus);
  const kindName={root:"Overview",group:"Group",topic:"Topic",section:"Section",item:n.gloss?"Glossary term":"Concept",example:"Example"}[n.kind];
  $("#mmPanel").innerHTML=`<div style="--gc:${nodeColor(n)}" class="mm-card">
    <p class="mm-kind">${kindName}${n.group?` in ${esc(GN[n.group])}`:""}${n.topic&&n.kind!=="topic"?`, ${esc(TOPICS[n.topic].title)}`:""}</p>
    <h2>${esc(n.label)}</h2>
    ${n.desc?`<p class="mm-desc">${esc(n.desc)}</p>`:""}
    <div class="btns">${n.topic?`<a class="btn small" href="#${n.topic}">Open ${esc(TOPICS[n.topic].title)} page</a>`:""}${n.parent?`<button class="btn small" data-focus="${n.parent}">Up one level</button>`:""}</div>
    ${n.children.filter(c=>NODES.get(c).kind!=="example").length?`<h3>Branches</h3><ul class="mm-list">${n.children.filter(c=>NODES.get(c).kind!=="example").map(c=>`<li><button data-focus="${c}">${esc(NODES.get(c).label)}</button></li>`).join("")}</ul>`:""}
    ${n.ref?`<p class="mm-src">Source: ${glRef(n.fw,n.ref)}</p>`:""}
    ${n.ex?`<div class="mm-ex"><b>Example</b><p>${esc(n.ex)}</p></div>`:""}
    ${XREF.has(mmFocus)?(()=>{const x=XREF.get(mmFocus);const blk=(h,ids)=>ids.length?`<h3>${h}</h3><ul class="mm-list">${ids.map(c=>{const m=NODES.get(c);return `<li><button data-focus="${c}">${esc(m.label)} <small>in ${esc(TOPICS[m.topic].title)}</small></button></li>`;}).join("")}</ul>`:"";return blk("Same term in other glossaries",x.same)+blk("Refers to",x.out)+blk("Referred to by",x.in);})():""}
    ${!XREF.has(mmFocus)&&sa.length?`<h3>Related elsewhere</h3><ul class="mm-list">${sa.map(c=>{const m=NODES.get(c);return `<li><button data-focus="${c}">${esc(m.label)}${m.kind!=="topic"?` <small>in ${esc(TOPICS[m.topic].title)}</small>`:""}</button></li>`;}).join("")}</ul>`:""}
  </div>`;
}
function setFocus(id,fromNode){
  if(!NODES.has(id))return;mmFocus=id;
  if(!mmStage||!document.body.contains(mmStage))return;
  mmPan={x:0,y:0};applyView();drawMap(true);
  if(fromNode){const el=mmEls.get(id);if(el)el.focus({preventScroll:true});}
}
function bindStage(){
  let drag=null;
  mmStage.addEventListener("pointerdown",e=>{if(e.target.closest("button"))return;drag={x:e.clientX,y:e.clientY,px:mmPan.x,py:mmPan.y};mmStage.setPointerCapture(e.pointerId);mmStage.classList.add("grab");});
  mmStage.addEventListener("pointermove",e=>{if(!drag)return;mmPan={x:drag.px+e.clientX-drag.x,y:drag.py+e.clientY-drag.y};applyView();});
  const end=()=>{drag=null;mmStage.classList.remove("grab");};
  mmStage.addEventListener("pointerup",end);mmStage.addEventListener("pointercancel",end);
  mmStage.addEventListener("wheel",e=>{
    e.preventDefault();
    const r=mmStage.getBoundingClientRect();
    zoomAt(e.deltaY<0?1.1:1/1.1,e.clientX-r.left-r.width/2,e.clientY-r.top-r.height/2);
  },{passive:false});
  mmStage.addEventListener("keydown",e=>{
    if(e.target.closest("input,textarea"))return;
    const n=NODES.get(mmFocus);
    if(e.key==="Escape"&&n.parent){e.preventDefault();setFocus(n.parent,true);}
    else if(e.key==="Home"){e.preventDefault();setFocus("root",true);}
    else if(e.key==="+"||e.key==="="){zoomAt(1.2,0,0);}
    else if(e.key==="-"){zoomAt(1/1.2,0,0);}
    else if(e.key==="0"){mmFit();}
  });
}
/** Zoom by factor k, keeping the point (cx,cy) relative to the stage centre fixed. */
function zoomAt(k,cx,cy){
  const z=Math.min(2.5,Math.max(0.3,mmZoom*k));const f=z/mmZoom;
  mmPan={x:cx-(cx-mmPan.x)*f,y:cy-(cy-mmPan.y)*f};mmZoom=z;applyView();
}
document.addEventListener("click",e=>{
  const z=e.target.closest("[data-mmz]");
  if(z){if(z.dataset.mmz==="fit")mmFit();else zoomAt(z.dataset.mmz==="in"?1.2:1/1.2,0,0);return;}
  const nd=e.target.closest("[data-node]");
  if(nd){if(nd.dataset.node!==mmFocus)setFocus(nd.dataset.node,true);return;}
  const f=e.target.closest("[data-focus]");
  if(f){setFocus(f.dataset.focus,false);const el=mmEls.get(f.dataset.focus);if(el)el.focus({preventScroll:true});return;}
  const go=e.target.closest("[data-mm]");
  if(go){if(location.hash==="#map")setFocus(go.dataset.mm,false);else mmFocus=go.dataset.mm;}
});
let mmResize;
window.addEventListener("resize",()=>{clearTimeout(mmResize);mmResize=setTimeout(()=>{if(mmStage&&document.body.contains(mmStage))mmFit();},150);});
