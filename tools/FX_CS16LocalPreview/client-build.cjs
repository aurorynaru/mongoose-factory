"use strict";

const crypto = require("node:crypto");
const fs = require("node:fs/promises");
const path = require("node:path");

const CLIENT_URL = "https://cdn.jsdelivr.net/gh/woahhcrackers/Global-Strike@456b15f96e96e238b206262b96209aaf08568c93/sf-gs.html";
const CLIENT_SHA256 = "6a6c20e7956d12708aacab9729054546a08de67ceb76f82c9298f345a8710443";
const CACHE_FILE = path.join(__dirname, ".cache", "FX_CS16-sf-gs.html");

async function loadPinnedClient(cacheFile = CACHE_FILE) {
  let content;
  try { content = await fs.readFile(cacheFile); }
  catch (error) {
    if (error.code !== "ENOENT") throw error;
    const response = await fetch(CLIENT_URL, { signal: AbortSignal.timeout(60000), redirect: "error" });
    if (!response.ok) throw new Error("Pinned client download returned HTTP " + response.status);
    content = Buffer.from(await response.arrayBuffer());
    verifyClient(content);
    await fs.mkdir(path.dirname(cacheFile), { recursive: true });
    await fs.writeFile(cacheFile, content, { flag: "wx" });
  }
  verifyClient(content);
  return content.toString("utf8");
}

function verifyClient(content) {
  if (crypto.createHash("sha256").update(content).digest("hex") !== CLIENT_SHA256) {
    throw new Error("Pinned client checksum mismatch. The build was stopped before applying any adaptation.");
  }
}

function replaceOnce(source, original, replacement, label) {
  if (source.split(original).length !== 2) throw new Error("Pinned client anchor mismatch: " + label);
  return source.replace(original, replacement);
}

function replaceBetween(source, start, end, replacement, label) {
  const from = source.indexOf(start);
  const to = source.indexOf(end, from + start.length);
  if (from < 0 || to < 0 || source.indexOf(start, from + start.length) !== -1) throw new Error("Pinned client section mismatch: " + label);
  return source.slice(0, from) + replacement + source.slice(to);
}

function buildClient(source, origin) {
  verifyClient(Buffer.from(source, "utf8"));
  const preview = new URL(origin);
  if (preview.protocol !== "http:" || preview.hostname !== "127.0.0.1") throw new Error("Client preview must use the loopback HTTP origin");
  const configURL = JSON.stringify(preview.origin + "/FX_CS16Local/config");
  let result = replaceBetween(source, "async function loadConfig(){", "function signalUrl(A)",
    "async function loadConfig(){const r=await fetch(" + configURL + ",{cache:\"no-store\"});const c=await r.json();if(!r.ok)throw new Error(c.error||\"Own-server configuration failed\");return c}", "owned configuration");
  result = replaceBetween(result, "async connect(){return new Promise", "sendto(A){", `async connect(){return new Promise((resolve,reject)=>{
this.resolve=resolve;this.reject=reject;this.onPhase("signalling","Connecting to your server…");
this.timeout=setTimeout(()=>this.fail("Timed out connecting to your server."),45000);
const socket=new WebSocket(this.signalUrl);this.ws=socket;let work=Promise.resolve();
socket.onopen=()=>this.initConnection();
socket.onmessage=event=>{work=work.then(async()=>{
const message=JSON.parse(event.data);
if(message.event==="error")throw new Error(message.data?.message||"Own-server signaling failed");
if(message.event==="offer"){
this.initConnection();this.onPhase("negotiating");await this.peer.setRemoteDescription(message.data);
for(const transceiver of this.peer.getTransceivers())if(transceiver.receiver.track.kind==="audio")transceiver.direction="inactive";
await this.peer.setLocalDescription(await this.peer.createAnswer());this.wsSend("answer",this.peer.localDescription);
this.wasRemote=true;for(const candidate of this.candidates)await this.peer.addIceCandidate(candidate);this.candidates=[];
}else if(message.event==="candidate"){
if(this.wasRemote)await this.peer.addIceCandidate(message.data);else this.candidates.push(message.data);
}
}).catch(error=>this.fail(error.message));};
socket.onerror=()=>this.fail("Could not reach your server through the local preview broker.");
socket.onclose=()=>{if(this.resolve)this.fail("Your server closed the connection.");};
})}`, "direct ticket-broker signaling");
  result = replaceOnce(result, "checkForUpdate(setUpdateStatus).then(applyUpdateIfIdle)", "Promise.resolve()", "no upstream auto-update");
  result = replaceOnce(result, "custom=loadCustom(),servers=[...builtIn,...custom]", "custom=[],servers=[...builtIn,...custom]", "fresh owned room list");
  result = replaceOnce(result, "},init();</script>", "},init().catch(error=>setStatus(\"Own-server setup failed: \"+error.message,true));</script>", "visible startup errors");
  return result;
}

module.exports = { CLIENT_URL, CLIENT_SHA256, CACHE_FILE, loadPinnedClient, verifyClient, buildClient };
