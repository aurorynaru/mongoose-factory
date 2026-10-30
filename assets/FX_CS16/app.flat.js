(function () {
"use strict";

// ---- Config ----
// BLD-003: the single-file Global-Strike client (11.7 MB) is served by jsDelivr as text/plain,
// so we fetch it and inject it into the iframe as a text/html blob. All of the game's server
// calls are absolute URLs (probuildingsupplies.com), so it runs from a blob document too
// (local probe 2026-10-29: boots, joins a room, renders at 94-98 FPS).
var GAME_URL = "https://cdn.jsdelivr.net/gh/woahhcrackers/Global-Strike@main/sf-gs.html";
var FETCH_TIMEOUT_MS = 60000; // 11.7 MB page; the local probe fetched it in about 5 s
var DEBUG = true; // false hides the [FX_CS16] console lines

// ---- State ----
var state = { loading: false, blobUrl: "" };

// ---- Helpers ----
var statusLine = document.getElementById("FX_Status");
var gameFrame = document.getElementById("FX_Game");

function log() {
if (!DEBUG) { return; }
console.log.apply(console, ["[FX_CS16]"].concat(Array.prototype.slice.call(arguments)));
}

function setStatus(text, kind) {
statusLine.textContent = text || "";
statusLine.className = kind ? "is-" + kind : "";
}

// ---- Feature: load the game ----
function loadGame() {
if (state.loading) { return; }
state.loading = true;
document.getElementById("FX_Reload").disabled = true;
setStatus("Fetching the game page (11.7 MB)…");
var started = Date.now();
var controller = new AbortController();
var timer = setTimeout(function () { controller.abort(); }, FETCH_TIMEOUT_MS);
fetch(GAME_URL, { signal: controller.signal })
.then(function (res) {
if (!res.ok) { throw new Error("HTTP " + res.status); }
return res.text();
})
.then(function (text) {
clearTimeout(timer);
if (state.blobUrl) { URL.revokeObjectURL(state.blobUrl); }
state.blobUrl = URL.createObjectURL(new Blob([text], { type: "text/html" }));
gameFrame.src = state.blobUrl;
state.loading = false;
document.getElementById("FX_Reload").disabled = false;
setStatus("Game page loaded (" + ((Date.now() - started) / 1000).toFixed(1) + " s). Pick a server and a name, then Play. First launch downloads about 278 MB of game data.");
log("game page loaded", (Date.now() - started) + " ms");
})
.catch(function (err) {
clearTimeout(timer);
state.loading = false;
document.getElementById("FX_Reload").disabled = false;
setStatus("Could not load the game page: " + err.message + " — click Restart game.", "error");
log("load failed", err);
});
}

function restartGame() {
gameFrame.src = "about:blank";
if (state.blobUrl) { URL.revokeObjectURL(state.blobUrl); state.blobUrl = ""; }
loadGame();
}

// ---- Wiring ----
document.getElementById("FX_Reload").addEventListener("click", restartGame);
// The page's first action must wait for the Form (BLD-002); in the local preview MG is undefined.
if (typeof MG !== "undefined" && typeof MG.onReady === "function") {
MG.onReady(loadGame);
} else {
loadGame();
}
})();