// Smoke and content-integrity tests. Run with: npm test
const { test } = require("node:test");
const assert = require("node:assert/strict");
const path = require("node:path");
const { JSDOM, ResourceLoader, VirtualConsole } = require("jsdom");

const INDEX = path.join(__dirname, "..", "index.html");

/** Only load local files; skip Google Fonts and other network resources. */
class LocalOnly extends ResourceLoader {
  fetch(url, options) {
    return url.startsWith("file:") ? super.fetch(url, options) : null;
  }
}

async function loadApp(hash = "") {
  const errors = [];
  const vc = new VirtualConsole();
  vc.on("jsdomError", e => { if (!/Not implemented/.test(e.message)) errors.push(e); });
  const dom = await JSDOM.fromFile(INDEX, {
    runScripts: "dangerously", resources: new LocalOnly(), pretendToBeVisual: true, virtualConsole: vc,
    beforeParse(w) { w.scrollTo = () => {}; if (hash) w.location.hash = hash; }
  });
  await new Promise(r => dom.window.addEventListener("load", r));
  return { w: dom.window, d: dom.window.document, errors, data: name => dom.window.eval(name) };
}
const go = (w, hash) => new Promise(r => { w.location.hash = hash; setTimeout(r, 20); });

test("every topic page renders without errors", async () => {
  const { w, d, errors, data } = await loadApp();
  for (const id of Object.keys(data("TOPICS"))) {
    await go(w, id);
    assert.ok(d.querySelector("main h1"), `no heading on #${id}`);
  }
  assert.deepEqual(errors, []);
});

test("topic cross-links and comparison table point to existing topics", async () => {
  const { data } = await loadApp();
  const topics = data("TOPICS");
  for (const [id, t] of Object.entries(topics)) {
    for (const r of t.related || []) assert.ok(topics[r], `${id} links to missing topic ${r}`);
    assert.ok(data("GN")[t.group], `${id} has unknown group ${t.group}`);
  }
  for (const row of data("COMPARE")) assert.ok(topics[row[1]], `comparison row ${row[0]} has no topic`);
});

test("every glossary term has a definition, a valid source and an example", async () => {
  const { data } = await loadApp();
  const G = data("GLOSSARY");
  let count = 0;
  for (const fw of data("GL_ORDER")) {
    assert.ok(G[fw], `missing glossary ${fw}`);
    const names = new Set();
    for (const [term, def, ref, ex] of G[fw].terms) {
      count++;
      assert.ok(def && def.length > 10, `${fw}/${term}: definition missing`);
      assert.ok(G[fw].sources[ref.split(":")[0]], `${fw}/${term}: unknown source ${ref}`);
      assert.ok(ex && ex.length > 10, `${fw}/${term}: example missing`);
      assert.ok(!names.has(term), `${fw}/${term}: duplicate term`);
      names.add(term);
    }
  }
  assert.ok(count > 250, `expected 250+ terms, found ${count}`);
});

test("glossary page filters by text and framework", async () => {
  const { w, d } = await loadApp("glossary");
  const rows = () => d.querySelectorAll(".gl tbody tr").length;
  const all = rows();
  const q = d.querySelector("#glq");
  q.value = "backlog"; q.dispatchEvent(new w.Event("input", { bubbles: true }));
  assert.ok(rows() > 0 && rows() < all);
  q.value = ""; q.dispatchEvent(new w.Event("input", { bubbles: true }));
  d.querySelector('[data-glf="scrum"]').click();
  assert.equal(rows(), 25);
});

test("search finds topics and highlights the match", async () => {
  const { w, d } = await loadApp();
  const q = d.querySelector("#q");
  q.value = "tolerance"; q.dispatchEvent(new w.Event("input", { bubbles: true }));
  await new Promise(r => setTimeout(r, 200));
  assert.ok(d.querySelectorAll(".results li").length >= 2);
  assert.ok(d.querySelector(".results mark"));
});

test("mind map: overview, drill-down, examples and cross-references", async () => {
  const { w, d, data } = await loadApp("map");
  assert.equal(d.querySelectorAll(".mm-node").length, 1 + data("GROUPS").length + Object.keys(data("TOPICS")).length);
  const nodes = data("NODES");
  const term = [...nodes.values()].find(n => n.gloss && n.fw === "prince2" && n.label === "Tolerance");
  data("setFocus")(term.id);
  assert.ok(d.querySelector(".mm-node.k-example"), "example node shown");
  assert.ok(d.querySelectorAll(".mm-node.r-also").length > 0, "cross-reference nodes shown");
  assert.match(d.querySelector("#mmPanel").textContent, /Source:/);
});

test("cross-references are symmetric", async () => {
  const { data } = await loadApp();
  const X = data("XREF");
  for (const [id, x] of X) {
    for (const o of x.out) assert.ok(X.get(o).in.includes(id), `${id} -> ${o} has no back-link`);
    for (const s of x.same) assert.ok(X.get(s).same.includes(id), `${id} same-name link not mutual`);
  }
});

test("best practices: ten organizations, filterable overview, sourced pages, TOGAF title", async () => {
  const { w, d, data, errors } = await loadApp("practices");
  const ids = Object.keys(data("TOPICS")).filter(k => data("TOPICS")[k].group === "bestpractices");
  assert.equal(ids.length, 11);
  assert.ok(!ids.includes("bp-pmalliance"));
  assert.equal(d.querySelectorAll(".bp-card").length, 11);
  assert.ok(d.querySelectorAll(".bp-card .org-mark svg").length >= 9, "logos shown");
  d.querySelector('.theme[data-theme="SAFe / scaling"]').click();
  const n = d.querySelectorAll(".bp-card").length;
  assert.ok(n > 0 && n < 11);
  for (const id of ids) {
    await go(w, id);
    const t = data("TOPICS")[id];
    assert.ok(t.sections.some(s => s.t === "links" && s.i.length), `${id} has no sources`);
    assert.ok(d.querySelector(".src-list a, .note"), `${id} renders`);
    assert.ok(t.sections.some(s => s.t === "dd" && s.dos.length >= 3 && s.donts.length >= 3), `${id} lacks dos and don'ts`);
    assert.ok(t.sections.some(s => s.h === "Adoption strategy"), `${id} lacks strategy`);
  }
  assert.equal(data("TOPICS").togaf.title, "TOGAF®");
  assert.deepEqual(errors, []);
});

test("RAID across frameworks: one row per RAID element, one cell per framework", async () => {
  const { d, data, errors } = await loadApp("raid-map");
  const rows = [...d.querySelectorAll("table.rolemap tbody tr")];
  assert.deepEqual(rows.map(r => r.querySelector("th").childNodes[0].textContent), ["Risks", "Assumptions", "Issues", "Dependencies"]);
  rows.forEach(r => assert.equal(r.querySelectorAll("td").length, 6));
  assert.match(d.querySelector("table.rolemap thead th").textContent, /RAID element/);
  assert.equal(data("TOPICS")["raid-map"].group, "raid");
  assert.deepEqual(errors, []);
});
