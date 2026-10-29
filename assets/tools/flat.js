#!/usr/bin/env node
// Writes the flush-left install copies of one app, the files that are pasted into Mongoose.
// Indented sources overflowed the Script Editor's line storage (EXP-138), so every line is left-trimmed.
//
// Usage (from this folder):  npm run flat -- FX_ASNPortal
//   index.html -> index.flat.html, app.css -> app.flat.css, app.js -> app.flat.js,
//   <Name>.cs.txt -> <Name>.flat.cs.txt (each one only if the source exists)
"use strict";
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const app = process.argv[2];
if (!app) {
  console.error("usage: npm run flat -- <AppFolder>   e.g. npm run flat -- FX_ASNPortal");
  process.exit(1);
}
const dir = path.join(ROOT, app);
if (!fs.existsSync(dir)) {
  console.error(`No folder ${dir}`);
  process.exit(1);
}

const pairs = [["index.html", "index.flat.html"], ["app.css", "app.flat.css"], ["app.js", "app.flat.js"]];
for (const f of fs.readdirSync(dir)) {
  if (f.endsWith(".cs.txt") && !f.endsWith(".flat.cs.txt")) { pairs.push([f, f.replace(/\.cs\.txt$/, ".flat.cs.txt")]); }
}

let written = 0;
for (const [src, out] of pairs) {
  const file = path.join(dir, src);
  if (!fs.existsSync(file)) { continue; }
  const text = fs.readFileSync(file, "utf8").replace(/\r\n/g, "\n");
  fs.writeFileSync(path.join(dir, out), text.split("\n").map((l) => l.replace(/^[ \t]+/, "")).join("\n"), "utf8");
  console.log(`${app}/${src} -> ${out}`);
  written++;
}
if (written === 0) {
  console.error(`Nothing to flatten in ${app} (no index.html, app.css, app.js or *.cs.txt).`);
  process.exit(1);
}
