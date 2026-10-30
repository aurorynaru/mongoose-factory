"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const http = require("node:http");
const crypto = require("node:crypto");
const fs = require("node:fs/promises");
const os = require("node:os");
const path = require("node:path");
const { spawnSync } = require("node:child_process");
const { createPreview, backendIdentity } = require("./server.cjs");
const { buildClient, loadPinnedClient, CLIENT_SHA256 } = require("./client-build.cjs");
const FIXTURE_TOKEN = "FX_CS16_LOCAL_TEST_FIXTURE_NOT_A_DEPLOYMENT_SECRET";

async function fixture(t, original) {
  const calls = [];
  const backendSockets = new Set();
  const backend = http.createServer((req, res) => {
    calls.push({ route: req.url, method: req.method, authorized: req.headers.authorization === "Bearer " + FIXTURE_TOKEN });
    if (req.headers.authorization !== "Bearer " + FIXTURE_TOKEN) { res.writeHead(401).end(); return; }
    if (req.url === "/api/status") {
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ tcpProxyReady: true, backendHTTPReady: true, configuredMap: "de_dust2", maxPlayers: "16" }));
    } else if (req.url === "/api/session") {
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ websocketPath: "/cs16/dust2/websocket?ticket=FIXTURE_ONE_USE_TICKET" }));
    } else if (req.url === "/cs16/gamefiles.zip") {
      res.writeHead(200, { "Content-Type": "application/zip", "Content-Length": 4, ETag: '"fixture-zip"' });
      res.end(req.method === "HEAD" ? undefined : Buffer.from([1, 2, 0, 255]));
    } else { res.writeHead(404).end(); }
  });
  backend.on("connection", socket => { backendSockets.add(socket); socket.on("close", () => backendSockets.delete(socket)); });
  let socketRequest;
  backend.on("upgrade", (req, socket) => {
    socketRequest = { path: req.url, origin: req.headers.origin, authorization: req.headers.authorization };
    if (req.url !== "/cs16/dust2/websocket?ticket=FIXTURE_ONE_USE_TICKET") { socket.end("HTTP/1.1 401 Unauthorized\r\n\r\n"); return; }
    const accept = crypto.createHash("sha1").update(req.headers["sec-websocket-key"] + "258EAFA5-E914-47DA-95CA-C5AB0DC85B11").digest("base64");
    socket.write("HTTP/1.1 101 Switching Protocols\r\nUpgrade: websocket\r\nConnection: Upgrade\r\nSec-WebSocket-Accept: " + accept + "\r\n\r\n");
    const packet = Buffer.from("FIXTURE_SOCKET_RELAY");
    socket.write(Buffer.concat([Buffer.from([0x81, packet.length]), packet]));
    socket.on("error", () => {});
    socket.on("data", () => {});
  });
  await new Promise(resolve => backend.listen(0, "127.0.0.1", resolve));
  const preview = await createPreview({ backendURL: "http://127.0.0.1:" + backend.address().port, adminToken: FIXTURE_TOKEN, clientSource: original });
  t.after(async () => { await preview.close(); for (const socket of backendSockets) socket.destroy(); await new Promise(resolve => backend.close(resolve)); });
  return { preview, calls, get socketRequest() { return socketRequest; } };
}

test("pin and guarded client adaptation preserve JavaScript syntax", async t => {
  const original = await loadPinnedClient();
  assert.equal(crypto.createHash("sha256").update(original).digest("hex"), CLIENT_SHA256);
  const output = buildClient(original, "http://127.0.0.1:12345");
  assert.match(output, /http:\/\/127\.0\.0\.1:12345\/FX_CS16Local\/config/);
  assert.match(output, /const socket=new WebSocket\(this.signalUrl\)/);
  assert.doesNotMatch(output, /checkForUpdate\(setUpdateStatus\)\.then\(applyUpdateIfIdle\)/);
  assert.doesNotMatch(output, /connectSignalling\(B.toString\(\)/);
  assert.throws(() => buildClient(original + " ", "http://127.0.0.1:12345"), /checksum/);
  assert.throws(() => buildClient(original, "http://0.0.0.0:12345"), /loopback/);
  const scripts = [...output.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/gi)].map(match => match[1]);
  const directory = await fs.mkdtemp(path.join(os.tmpdir(), "FX_CS16_client_syntax-"));
  for (let i = 0; i < scripts.length; i++) {
    const filename = path.join(directory, "client-" + i + ".mjs");
    await fs.writeFile(filename, scripts[i]);
    const checked = spawnSync(process.execPath, ["--check", filename], { encoding: "utf8" });
    assert.equal(checked.status, 0, checked.stderr);
  }
});

test("broker only exposes own configuration and proxies assets without exposing admin", async t => {
  const run = await fixture(t, await loadPinnedClient());
  const response = await fetch(run.preview.origin + "/FX_CS16Local/config");
  assert.equal(response.status, 200);
  const config = await response.json();
  assert.equal(config.servers.length, 1);
  assert.equal(config.servers[0].name, "FX_CS16 | de_dust2");
  assert.equal(config.servers[0].signal, run.preview.origin.replace("http:", "ws:") + "/FX_CS16Local/socket");
  assert.ok(!JSON.stringify(config).includes(FIXTURE_TOKEN));
  const head = await fetch(config.gamefiles, { method: "HEAD" });
  assert.equal(head.headers.get("content-length"), "4");
  assert.equal(head.headers.get("etag"), '"fixture-zip"');
  const downloaded = await fetch(config.gamefiles);
  assert.deepEqual(Buffer.from(await downloaded.arrayBuffer()), Buffer.from([1, 2, 0, 255]));
  assert.ok(run.calls.every(call => call.authorized));
  const secretFile = await fetch(run.preview.origin + "/.env");
  assert.equal(secretFile.status, 404);
});

test("broker rejects foreign browser origins and Host rebinding", async t => {
  const run = await fixture(t, await loadPinnedClient());
  const foreign = await fetch(run.preview.origin + "/FX_CS16Local/config", { headers: { Origin: "https://other.example" } });
  assert.equal(foreign.status, 403);
  const rebound = await new Promise((resolve, reject) => {
    const req = http.get(run.preview.origin + "/FX_CS16Local/config", { headers: { Host: "other.example" } }, res => { res.resume(); resolve(res.statusCode); });
    req.on("error", reject);
  });
  assert.equal(rebound, 403);
  assert.equal(run.calls.length, 0);
  assert.throws(() => backendIdentity("http://external.example"), /HTTPS/);
  assert.throws(() => backendIdentity("https://name:secret@backend.example"), /credentials/);
});

test("WebSocket broker mints a ticket server-side and relays actual frames", async t => {
  const run = await fixture(t, await loadPinnedClient());
  const received = await new Promise((resolve, reject) => {
    const socket = new WebSocket(run.preview.origin.replace("http:", "ws:") + "/FX_CS16Local/socket");
    const timer = setTimeout(() => { socket.close(); reject(new Error("fixture signaling timeout")); }, 5000);
    socket.onmessage = event => { clearTimeout(timer); socket.close(); resolve(event.data); };
    socket.onerror = () => { clearTimeout(timer); reject(new Error("fixture WebSocket failed")); };
  });
  assert.equal(received, "FIXTURE_SOCKET_RELAY");
  assert.equal(run.calls.filter(call => call.route === "/api/session" && call.method === "POST").length, 1);
  assert.equal(run.socketRequest.origin, undefined);
  assert.equal(run.socketRequest.authorization, undefined);
});
