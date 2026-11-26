// Bundles index.html, its stylesheet and scripts into one self-contained file:
// dist/pm-toolbox.html. Useful for sharing the app as a single download.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";

let html = readFileSync("index.html", "utf8");
html = html.replace(/<link rel="stylesheet" href="([^"]+)">/g,
  (_, href) => `<style>\n${readFileSync(href, "utf8")}</style>`);
html = html.replace(/<script src="([^"]+)"><\/script>/g,
  (_, src) => `<script>\n${readFileSync(src, "utf8").replace(/<\/script/gi, "<\\/script")}</script>`);
// The service worker and manifest only make sense when hosted.
html = html.replace(/<link rel="manifest"[^>]*>\n?/, "").replace(/<link rel="icon"[^>]*>\n?/, "");
mkdirSync("dist", { recursive: true });
writeFileSync("dist/pm-toolbox.html", html);
console.log(`dist/pm-toolbox.html written (${(html.length / 1024).toFixed(0)} kB)`);
