# PM Toolbox

A static web app for consultants: the main project management frameworks, people and roles, RAID, and related concepts in one place, with a navigable mind map and a sourced glossary with real-life examples.

No backend, no build step, no tracking. Everything runs in the browser.

## Features

- **Library**: topic pages for PMI/PMBOK, PRINCE2, Agile/Scrum, SAFe and Lean/Kanban. People and roles covers RACI, RAPID, the power–interest matrix and a cross-framework role map. RAID covers risks, assumptions, issues and dependencies. Related concepts covers ITIL, OKR, KPI, the PRINCE2 business justification chain, TOGAF, PMO governance and the strategic alignment cascade.
- **Mind map**: radial, drill-down view of every topic, section and glossary term. Dashed links connect terms that share a name across frameworks, refer to each other in their definitions or examples, or relate to other topics. Each glossary term shows its source and a worked example.
- **Glossary**: 265 terms across 12 glossaries, each with a paraphrased definition, a source reference and an example. You can filter by text or framework.
- **Search** across all topics and glossary entries.
- **Offline**: installable as a PWA when served over HTTPS.

## Run locally

Open `index.html` in a browser; it works from the file system. To test the service worker, serve it over HTTP instead:

```bash
npm start            # http://localhost:8080
# or
python3 -m http.server 8080
```

## Project structure

```
index.html                 Page shell; loads CSS and scripts in order
css/styles.css             All styles; light and dark themes via CSS variables
js/data/topics.js          Groups and topic content (sections: p, list, steps, table, note, pi, rolemap)
js/data/glossary.js        Framework glossaries: sources and [term, definition, sourceRef]
js/data/glossary-examples.js  Examples for framework glossary terms, keyed by term
js/data/glossary-concepts.js  Glossaries for related concepts, with examples inline
js/data/compare.js         "Frameworks side by side" table
js/core.js                 Utilities, sidebar, section renderer
js/glossary.js             Merges glossary data, glossary tables and the Glossary page
js/views.js                Home, topic pages, search, role-map column toggles
js/mindmap.js              Mind map model, cross-references, layout, rendering, interaction
js/router.js               Hash routing, page titles, focus handling, service worker registration
sw.js, manifest.webmanifest, icons/   PWA support
tests/app.test.js          Smoke and content-integrity tests (jsdom)
scripts/build-single.mjs   Bundles everything into dist/pm-toolbox.html
```

Scripts are plain (non-module) scripts loaded in order, so the app also runs from `file://`.

## Editing content

- **Add a topic**: add an entry to `TOPICS` in `js/data/topics.js` with `group`, `title`, `tagline`, `sections` and `related`. It appears in the sidebar, home index, search and mind map automatically.
- **Add a glossary term**: append `[term, definition, sourceRef]` to the framework in `js/data/glossary.js` and its example to `js/data/glossary-examples.js`. For related concepts, use `[term, definition, sourceRef, example]` in `js/data/glossary-concepts.js`. `sourceRef` is a source key, optionally with a locator, e.g. `"S:Sprint Planning"`.
- **Add a glossary to a topic**: add it to `GLOSSARY` and list the topic id in `GL_ORDER` in `js/glossary.js`.
- Cross-references in the mind map are computed automatically from term names and acronyms found in definitions and examples.
- After changing cached files, bump `CACHE` in `sw.js` so installed copies update.

Run `npm test` after edits: the tests check that every page renders, every link points to an existing topic, and every glossary term has a definition, a valid source and an example.

## Single-file version

```bash
npm run build:single   # writes dist/pm-toolbox.html
```

## Deploy to GitHub Pages

The workflow in `.github/workflows/pages.yml` deploys on every push to `main`. One-time setup: **Settings → Pages → Build and deployment → Source: GitHub Actions**. `ci.yml` runs the tests on pushes and pull requests.

## Content and copyright

Definitions are short paraphrases written for this toolbox, not official wording. PMI, PeopleCert (PRINCE2, ITIL), Scaled Agile and The Open Group hold copyright on their glossaries; follow the source links for exact text. The Scrum Guide and the Kanban Guide are published under CC BY-SA 4.0. Examples use fictional organizations such as Fjordbank. PMBOK, PRINCE2, SAFe, ITIL and TOGAF are trademarks of their respective owners.

No licence has been chosen for this repository yet.
