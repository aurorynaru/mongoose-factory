#!/usr/bin/env node
// Local preview server for the FX_ pages in this folder. No install needed: Node 18+ only.
//
// Usage (from this folder):  npm run preview            -> http://127.0.0.1:8765/
//                            npm run preview -- 9000    -> another port
//
// It serves every app folder as it is, so you open the real index.html (no copied preview page).
// Mongoose's own bridge script, ../$app/scripts/UserControl.js, does not exist outside the tenant.
// When a page asks for it, the server answers with that app's preview/stub.js: a fake WSForm that
// returns test data. stub.js is preview-only and is never installed in Mongoose.
//
// Folders starting with "_" are tools, not apps: _request (the request builder) and _template (starter app).
// GET /api/apps returns what the request builder can pre-fill from this folder (read-only; nothing is
// read from the Mongoose tenant).
"use strict";
const http = require("http");
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const PORT = Number(process.argv[2]) || 8765;
const HOST = "127.0.0.1"; // this machine only
const BRIDGE = "/$app/scripts/UserControl.js";
const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
};

// App folders are the ones with an index.html (FX_Inventory, FX_ASNPortal, _template, ...).
function apps() {
  return fs.readdirSync(ROOT, { withFileTypes: true })
    .filter((d) => d.isDirectory() && fs.existsSync(path.join(ROOT, d.name, "index.html")))
    .map((d) => d.name)
    .sort();
}

function send(res, status, type, body) {
  res.writeHead(status, { "Content-Type": type, "Cache-Control": "no-store" });
  res.end(body);
}

function homePage() {
  const appRows = apps().filter((a) => !a.startsWith("_")).map((app) => {
    const stub = fs.existsSync(path.join(ROOT, app, "preview", "stub.js")) ? "test data" : "no stub.js: page shows its outside-Mongoose message";
    return `<li><a href="/${app}/index.html">${app}</a> <small>(${stub})</small></li>`;
  });
  return `<!doctype html><meta charset="utf-8"><title>FX pages preview</title>
<body style="font:15px system-ui;margin:32px"><h1>FX pages: local preview</h1>
<p><a href="/_request/index.html"><b>Request builder</b></a>: fill in a new build or a change, then copy the prompt into Claude Code.</p>
<h2>Apps</h2><ul>${appRows.join("")}</ul>
<p><a href="/_template/index.html">_template</a> <small>(starter app: copy it to start a new one)</small></p>
<p><small>Served from ${ROOT}. Edit a file, then reload the page.</small></p></body>`;
}

// ---- /api/apps: facts the request builder can pre-fill, read from the files in this folder ----
function readText(file) {
  try { return fs.readFileSync(file, "utf8"); } catch (e) { return ""; }
}

function matches(text, regex) {
  const found = [];
  for (const m of text.matchAll(regex)) { if (!found.includes(m[1])) { found.push(m[1]); } }
  return found;
}

function appFacts(app) {
  const dir = path.join(ROOT, app);
  const files = fs.readdirSync(dir).filter((f) => !f.includes(".flat.") && fs.statSync(path.join(dir, f)).isFile());
  const scriptFile = files.find((f) => f.endsWith(".cs.txt")) || "";
  const script = scriptFile ? readText(path.join(dir, scriptFile)) : "";
  const page = ["index.html", "app.js"].map((f) => readText(path.join(dir, f))).join("\n");
  return {
    app,
    files,
    pageFiles: files.filter((f) => /^(index\.html|app\.css|app\.js)$/.test(f)),
    title: (page.match(/<title>([^<]*)<\/title>/) || [])[1] || "",
    scriptFile,
    scriptClass: (script.match(/public class (\w+) : FormScript/) || [])[1] || "",
    scriptMethods: matches(script, /public (?:void|string) (\w+)\(/g),
    resultVars: matches(script, /Variables\("(\w+)"\)/g).concat(matches(script, /const string \w+ = "(FX_v\w+)"/g)),
    pageCalls: matches(page, /callServer\("(\w+)"/g),
    // "// ---- Part ----" comments in app.js / index.html / the C# script (see README § Code layout).
    sections: matches(page + "\n" + script, /\/\/ ---- ([^-\n][^\n]*?) ----/g),
    headings: matches(page, /<h2[^>]*>(?:<[^>]+>)*([^<]+)/g),
  };
}

// The app a bridge request belongs to: taken from the page that asked (Referer: /FX_App/index.html).
function stubFor(req) {
  const referer = req.headers.referer || "";
  const m = referer.match(/^https?:\/\/[^/]+\/([^/?#]+)\//);
  const app = m ? decodeURIComponent(m[1]) : "";
  const file = path.join(ROOT, app, "preview", "stub.js");
  if (app && fs.existsSync(file)) { return { app, body: fs.readFileSync(file) }; }
  return { app: app || "(unknown page)", body: null };
}

const server = http.createServer((req, res) => {
  const url = decodeURIComponent(req.url.split("?")[0]);
  if (url === "/") { return send(res, 200, TYPES[".html"], homePage()); }
  if (url === "/api/apps") {
    // Change targets include script-only folders (e.g. FX_Login), not just previewable apps.
    const list = fs.readdirSync(ROOT, { withFileTypes: true })
      .filter((d) => d.isDirectory() && /^FX_/.test(d.name))
      .filter((d) => fs.readdirSync(path.join(ROOT, d.name)).some((f) => f === "index.html" || f.endsWith(".cs.txt")))
      .map((d) => appFacts(d.name))
      .sort((a, b) => a.app.localeCompare(b.app));
    return send(res, 200, TYPES[".json"], JSON.stringify(list, null, 2));
  }

  if (url === BRIDGE) {
    const stub = stubFor(req);
    console.log(`bridge  ${stub.app} -> ${stub.body ? "preview/stub.js" : "no stub"}`);
    if (stub.body) { return send(res, 200, TYPES[".js"], stub.body); }
    return send(res, 200, TYPES[".js"], `console.warn("[preview] ${stub.app} has no preview/stub.js, so WSForm is not defined.");`);
  }

  const file = path.join(ROOT, url);
  if (!file.startsWith(ROOT + path.sep)) { return send(res, 403, "text/plain", "Outside the preview folder."); }
  fs.readFile(file, (err, body) => {
    if (err) {
      console.log(`404     ${url}`);
      return send(res, 404, "text/plain; charset=utf-8", `Not found: ${url}`);
    }
    send(res, 200, TYPES[path.extname(file).toLowerCase()] || "application/octet-stream", body);
  });
});

server.on("error", (err) => {
  if (err.code === "EADDRINUSE") {
    console.error(`Port ${PORT} is already in use. Stop the other server, or run: npm run preview -- ${PORT + 1}`);
  } else {
    console.error(err.message);
  }
  process.exit(1);
});

server.listen(PORT, HOST, () => {
  console.log(`Preview: http://${HOST}:${PORT}/   (Ctrl+C to stop)`);
  console.log(`  Request builder: http://${HOST}:${PORT}/_request/index.html`);
  for (const app of apps().filter((a) => !a.startsWith("_"))) { console.log(`  http://${HOST}:${PORT}/${app}/index.html`); }
});
