#!/usr/bin/env node
// Compare an editor value read back from Mongoose with the local source file.
//
// Usage: node compare-readback.js <snapshot.yml> <source-file>
//   <snapshot.yml>  a Playwright MCP element snapshot saved to a file, e.g.
//                   browser_snapshot { target: "<editor ref>", filename: "evidence/BLD-NNN/x.yml" }
//   <source-file>   the file that was filled in (e.g. assets/FX_App/index.flat.html)
//
// Both sides are whitespace-normalized (runs of whitespace -> one space, trimmed), because the
// accessibility value collapses line breaks and the Script Editor adds its own indentation.
// The result therefore proves content identity, not byte identity (line endings, indentation).
//
// Exit codes: 0 equal, 1 different, 2 no editor value found in the snapshot.
"use strict";
const fs = require("fs");

const [snapshotPath, sourcePath] = process.argv.slice(2);
if (!snapshotPath || !sourcePath) {
  console.error("usage: node compare-readback.js <snapshot.yml> <source-file>");
  process.exit(2);
}

// Pick the longest textbox value in the snapshot: the editor, not File/Content Type fields.
function editorValue(yml) {
  let best = null;
  for (const line of yml.split(/\r?\n/)) {
    const m = line.match(/^\s*-\s+textbox\b[^:]*:\s+(.*)$/);
    if (!m) { continue; }
    let raw = m[1].trim();
    let value;
    if (raw.startsWith('"')) {
      try { value = JSON.parse(raw); } catch (e) { continue; }
    } else if (raw.startsWith("'")) {
      value = raw.slice(1, -1).replace(/''/g, "'");
    } else {
      value = raw;
    }
    if (best === null || value.length > best.length) { best = value; }
  }
  return best;
}

const normalize = (s) => s.replace(/\s+/g, " ").trim();
const value = editorValue(fs.readFileSync(snapshotPath, "utf8"));
if (value === null) {
  console.log("NO EDITOR VALUE: snapshot " + snapshotPath + " has no textbox value");
  process.exit(2);
}
const a = normalize(value);
const b = normalize(fs.readFileSync(sourcePath, "utf8"));
console.log("readback chars " + a.length + ", source chars " + b.length + ", equal " + (a === b));
if (a !== b) {
  let i = 0;
  while (i < a.length && i < b.length && a[i] === b[i]) { i++; }
  console.log("first difference at normalized char " + i);
  console.log("readback: ..." + a.slice(Math.max(0, i - 60), i + 80));
  console.log("source  : ..." + b.slice(Math.max(0, i - 60), i + 80));
  process.exit(1);
}
process.exit(0);
