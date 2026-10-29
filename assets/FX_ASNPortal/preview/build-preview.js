#!/usr/bin/env node
// Builds preview/index.preview.html: index.html with stub.js inlined after the UserControl.js include.
// Usage: node assets/FX_ASNPortal/preview/build-preview.js   (then open the output file in a browser)
"use strict";
const fs = require("fs");
const path = require("path");
const dir = __dirname;
const page = fs.readFileSync(path.join(dir, "..", "index.html"), "utf8");
const stub = fs.readFileSync(path.join(dir, "stub.js"), "utf8");
const marker = '<script type="text/javascript" src="../$app/scripts/UserControl.js"></script>';
if (!page.includes(marker)) { console.error("UserControl.js include not found in index.html; preview not built."); process.exit(1); }
fs.writeFileSync(path.join(dir, "index.preview.html"), page.replace(marker, () => "<script>\n" + stub + "</script>"));
console.log("Wrote " + path.join(dir, "index.preview.html"));
