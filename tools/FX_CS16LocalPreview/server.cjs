"use strict";

const http = require("node:http");
const https = require("node:https");
const fs = require("node:fs/promises");
const path = require("node:path");
const { buildClient, loadPinnedClient } = require("./client-build.cjs");

const DEFAULT_BACKEND = "https://cs16backend-production.up.railway.app";
const ASSET_ROOT = path.resolve(__dirname, "../../assets/FX_CS16Local");
const TIMEOUT_MS = 60000; // Existing launcher and backend handshake window.

function backendIdentity(value) {
  const url = new URL(value);
  if (url.username || url.password || url.search || url.hash || url.pathname !== "/") throw new Error("Backend URL must be an origin without credentials, paths, or query parameters");
  if (url.protocol !== "https:" && !(url.protocol === "http:" && url.hostname === "127.0.0.1")) throw new Error("Use HTTPS for Railway, or HTTP 127.0.0.1 for a local backend");
  return url;
}

async function createPreview(options = {}) {
  const backend = backendIdentity(options.backendURL || DEFAULT_BACKEND);
  const adminToken = options.adminToken;
  if (typeof adminToken !== "string" || adminToken.length < 32) throw new Error("Set CS16_ADMIN_TOKEN in the preview process, or start with Start-Preview.ps1 to enter it privately");
  const originalClient = options.clientSource || await loadPinnedClient();
  const assetRoot = options.assetRoot || ASSET_ROOT;
  const sockets = new Set();
  const controllers = new Set();
  let origin;
  let gameHTML;

  function safeMessage(error) { return String(error.message || error).split(adminToken).join("[redacted]"); }
  function json(response, status, data) {
    response.writeHead(status, { "Content-Type": "application/json", "Cache-Control": "no-store" });
    response.end(JSON.stringify(data));
  }
  function trusted(request) {
    return request.headers.host === new URL(origin).host &&
      (!request.headers.origin || request.headers.origin === origin);
  }
  async function upstreamJSON(route, method = "GET") {
    const controller = new AbortController();
    controllers.add(controller);
    const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
    try {
      const response = await fetch(new URL(route, backend), {
        method, headers: { Authorization: "Bearer " + adminToken }, redirect: "error", signal: controller.signal
      });
      const chunks = [];
      let length = 0;
      for await (const chunk of response.body) {
        length += chunk.length;
        if (length > 65536) { controller.abort(); throw new Error("Backend JSON exceeded the preview limit"); }
        chunks.push(chunk);
      }
      let value;
      try { value = JSON.parse(Buffer.concat(chunks).toString("utf8")); }
      catch { throw new Error("Backend returned invalid JSON (HTTP " + response.status + ")"); }
      if (!response.ok) throw new Error(value.error || "Backend HTTP " + response.status);
      return value;
    } finally { clearTimeout(timer); controllers.delete(controller); }
  }

  function proxyAsset(request, response) {
    const headers = { Authorization: "Bearer " + adminToken };
    if (request.headers.range) {
      if (!/^bytes=\d*-\d*$/.test(request.headers.range)) { json(response, 400, { error: "Invalid asset range" }); return; }
      headers.Range = request.headers.range;
    }
    const transport = backend.protocol === "https:" ? https : http;
    const upstream = transport.request(new URL("/cs16/gamefiles.zip", backend), { method: request.method, headers }, result => {
      if (![200, 206, 304].includes(result.statusCode)) {
        result.resume();
        json(response, 502, { error: "Backend game assets returned HTTP " + result.statusCode });
        return;
      }
      const forwarded = { "Cache-Control": "no-cache" };
      for (const name of ["content-type", "content-length", "etag", "last-modified", "accept-ranges", "content-range"]) {
        if (result.headers[name] !== undefined) forwarded[name] = result.headers[name];
      }
      response.writeHead(result.statusCode, forwarded);
      result.on("error", () => response.destroy());
      result.pipe(response);
    });
    upstream.setTimeout(TIMEOUT_MS, () => upstream.destroy(new Error("Backend asset stream became idle")));
    upstream.on("error", error => {
      if (!response.headersSent) json(response, 502, { error: safeMessage(error) });
      else response.destroy();
    });
    response.on("close", () => { if (!response.writableEnded) upstream.destroy(); });
    upstream.end();
  }

  const server = http.createServer(async (request, response) => {
    response.setHeader("Referrer-Policy", "no-referrer");
    response.setHeader("X-Content-Type-Options", "nosniff");
    response.setHeader("Content-Security-Policy", "frame-ancestors 'self'");
    if (!trusted(request)) { json(response, 403, { error: "Local preview origin/Host rejected" }); return; }
    try {
      const url = new URL(request.url, origin);
      if (!["GET", "HEAD"].includes(request.method)) { json(response, 405, { error: "Method not supported" }); return; }
      if (url.pathname === "/") { response.writeHead(302, { Location: "/FX_CS16Local/index.html" }); response.end(); return; }
      if (url.pathname === "/$app/scripts/UserControl.js") {
        response.writeHead(200, { "Content-Type": "text/javascript" });
        response.end("/* Local preview: no Mongoose APIs or authentication are simulated. */"); return;
      }
      if (url.pathname === "/FX_CS16Local/game.html") {
        response.writeHead(200, { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store" });
        response.end(gameHTML); return;
      }
      if (url.pathname === "/FX_CS16Local/config") {
        const status = await upstreamJSON("/api/status");
        if (!status.tcpProxyReady || !status.backendHTTPReady) throw new Error(status.tcpProxyError || status.backendError || "Backend readiness is incomplete");
        const map = /^[A-Za-z0-9_]+$/.test(status.configuredMap || "") ? status.configuredMap : "de_dust2";
        const slots = Number(status.maxPlayers);
        if (!Number.isInteger(slots) || slots < 2 || slots > 16) throw new Error("Unexpected backend player limit");
        json(response, 200, {
          gamefiles: origin + "/FX_CS16Local/gamefiles.zip",
          servers: [{ id: "dust2", name: "FX_CS16 | " + map, map, slots,
            signal: origin.replace(/^http:/, "ws:") + "/FX_CS16Local/socket",
            probe: origin + "/FX_CS16Local/ready", status: origin + "/FX_CS16Local/status" }]
        }); return;
      }
      if (url.pathname === "/FX_CS16Local/status") { json(response, 200, { servers: [] }); return; }
      if (url.pathname === "/FX_CS16Local/ready") {
        const status = await upstreamJSON("/api/status");
        json(response, status.backendHTTPReady && status.tcpProxyReady ? 200 : 503, { ready: !!status.backendHTTPReady && !!status.tcpProxyReady }); return;
      }
      if (url.pathname === "/FX_CS16Local/gamefiles.zip") { proxyAsset(request, response); return; }
      const staticFiles = { "/FX_CS16Local/index.html": ["index.html", "text/html; charset=utf-8"],
        "/FX_CS16Local/app.js": ["app.js", "text/javascript; charset=utf-8"], "/FX_CS16Local/app.css": ["app.css", "text/css; charset=utf-8"] };
      const file = staticFiles[url.pathname];
      if (!file) { json(response, 404, { error: "Preview route not found" }); return; }
      const content = await fs.readFile(path.join(assetRoot, file[0]));
      response.writeHead(200, { "Content-Type": file[1], "Content-Length": content.length, "Cache-Control": "no-store" });
      response.end(request.method === "HEAD" ? undefined : content);
    } catch (error) {
      if (!response.headersSent) json(response, 502, { error: safeMessage(error) }); else response.destroy();
    }
  });

  server.on("connection", socket => { sockets.add(socket); socket.on("close", () => sockets.delete(socket)); });
  server.on("upgrade", async (request, socket, head) => {
    let upstreamRequest;
    let upstreamSocket;
    const abort = new AbortController();
    const timer = setTimeout(() => abort.abort(), TIMEOUT_MS);
    socket.on("error", () => {});
    socket.on("close", () => { clearTimeout(timer); abort.abort(); upstreamRequest?.destroy(); upstreamSocket?.destroy(); });
    try {
      const route = new URL(request.url, origin);
      if (!trusted(request) || request.method !== "GET" || route.pathname !== "/FX_CS16Local/socket" || route.search) {
        socket.end("HTTP/1.1 403 Forbidden\r\nConnection: close\r\n\r\n"); return;
      }
      const session = await upstreamJSON("/api/session", "POST");
      if (socket.destroyed) return;
      const target = new URL(session.websocketPath, backend);
      if (target.origin !== backend.origin || target.pathname !== "/cs16/dust2/websocket") throw new Error("Backend returned an unexpected session route");
      const headers = { Connection: "Upgrade", Upgrade: "websocket",
        "Sec-WebSocket-Version": request.headers["sec-websocket-version"], "Sec-WebSocket-Key": request.headers["sec-websocket-key"] };
      // This is a server-to-server request with an authorized, one-use ticket.
      // Do not forward browser Origin or the permanent admin token to the socket.
      const transport = backend.protocol === "https:" ? https : http;
      upstreamRequest = transport.request(target, { headers, signal: abort.signal });
      upstreamRequest.on("upgrade", (response, connection, backendHead) => {
        clearTimeout(timer);
        upstreamSocket = connection;
        if (socket.destroyed) { connection.destroy(); return; }
        const accept = response.headers["sec-websocket-accept"];
        if (!accept) { connection.destroy(); socket.destroy(); return; }
        socket.write("HTTP/1.1 101 Switching Protocols\r\nUpgrade: websocket\r\nConnection: Upgrade\r\nSec-WebSocket-Accept: " + accept + "\r\n\r\n");
        if (backendHead.length) socket.write(backendHead);
        if (head.length) connection.write(head);
        connection.on("error", () => socket.destroy());
        connection.on("close", () => socket.destroy());
        socket.pipe(connection).pipe(socket);
      });
      upstreamRequest.on("response", response => { response.resume(); clearTimeout(timer); socket.end("HTTP/1.1 502 Bad Gateway\r\nConnection: close\r\n\r\nBackend refused the signaling connection."); });
      upstreamRequest.on("error", () => { clearTimeout(timer); socket.destroy(); });
      upstreamRequest.end();
    } catch {
      clearTimeout(timer);
      if (!socket.destroyed) socket.end("HTTP/1.1 502 Bad Gateway\r\nConnection: close\r\n\r\nCould not create an authorized backend session.");
    }
  });

  await new Promise((resolve, reject) => { server.once("error", reject); server.listen(options.port || 0, "127.0.0.1", resolve); });
  origin = "http://127.0.0.1:" + server.address().port;
  try { gameHTML = buildClient(originalClient, origin); }
  catch (error) { server.close(); throw error; }
  return { origin, server, async close() {
    for (const controller of controllers) controller.abort();
    for (const socket of sockets) socket.destroy();
    await new Promise(resolve => server.close(resolve));
  } };
}

if (require.main === module) {
  const port = Number(process.env.FX_CS16_PREVIEW_PORT || 0);
  if (!Number.isInteger(port) || port < 0 || port > 65535) { console.error("Invalid FX_CS16_PREVIEW_PORT"); process.exit(1); }
  createPreview({ backendURL: process.env.CS16_BACKEND_URL || DEFAULT_BACKEND, adminToken: process.env.CS16_ADMIN_TOKEN, port })
    .then(preview => {
      console.info("[FX_CS16Local] Open " + preview.origin + "/FX_CS16Local/index.html");
      console.info("[FX_CS16Local] Backend: " + (process.env.CS16_BACKEND_URL || DEFAULT_BACKEND) + "; admin token stays server-side.");
      const stop = () => preview.close().then(() => process.exit(0));
      process.once("SIGINT", stop); process.once("SIGTERM", stop);
    }).catch(error => { console.error("[FX_CS16Local] " + error.message); process.exitCode = 1; });
}

module.exports = { createPreview, backendIdentity, DEFAULT_BACKEND };
