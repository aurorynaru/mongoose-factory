(function () {
  "use strict";

  // Let Node exercise the actual wire parser without a browser or copied logic.
  if (typeof module !== "undefined" && module.exports) {
    module.exports = { queryPacket: queryPacket, parseInfo: parseInfo };
    return;
  }

  var tokenInput = document.getElementById("FX_Token");
  var button = document.getElementById("FX_Test");
  var status = document.getElementById("FX_Status");
  var result = document.getElementById("FX_Result");
  var TIMEOUT_MS = 60000;

  function setStatus(message, kind) { status.textContent = message; status.className = kind || ""; }

  function queryPacket() {
    var text = new TextEncoder().encode("info 49\n\0");
    var packet = new Uint8Array(4 + text.length);
    packet.fill(255, 0, 4);
    packet.set(text, 4);
    return packet;
  }

  function parseInfo(bytes) {
    if (bytes.length < 6 || !bytes.slice(0, 4).every(function (v) { return v === 255; })) { throw new Error("The game returned an unsupported or split query packet."); }
    var nativeText = new TextDecoder().decode(bytes.slice(4)).replace(/\0+$/, "");
    if (nativeText.indexOf("info\n") === 0) {
      var fields = Object.create(null);
      var parts = nativeText.slice(5).split("\\");
      for (var i = 1; i + 1 < parts.length; i += 2) { fields[parts[i]] = parts[i + 1]; }
      var nativeInfo = { name: fields.host, map: fields.map, folder: fields.gamedir, protocol: Number(fields.p), players: Number(fields.numcl), maxPlayers: Number(fields.maxcl) };
      if (!nativeInfo.name || !nativeInfo.map || nativeInfo.folder !== "cstrike" || nativeInfo.protocol !== 49 || !Number.isInteger(nativeInfo.players) || !Number.isInteger(nativeInfo.maxPlayers) || nativeInfo.maxPlayers < 1 || nativeInfo.players < 0 || nativeInfo.players > nativeInfo.maxPlayers) { throw new Error("Incomplete native Xash3D server-info reply."); }
      return nativeInfo;
    }
    var offset = bytes[4] === 73 ? 6 : 5;
    function text() {
      var end = bytes.indexOf(0, offset);
      if (end < 0) { throw new Error("Incomplete server-info reply."); }
      var value = new TextDecoder().decode(bytes.slice(offset, end));
      offset = end + 1;
      return value;
    }
    if (bytes[4] !== 73 && bytes[4] !== 109) { throw new Error("Unexpected game query response type " + bytes[4] + "."); }
    if (bytes[4] === 109) { text(); } // GoldSrc includes its address first.
    var info = { name: text(), map: text(), folder: text(), game: text() };
    if (bytes[4] === 73) { offset += 2; } // Source-format app ID.
    if (offset + 2 > bytes.length) { throw new Error("Missing player counts in server-info reply."); }
    info.players = bytes[offset];
    info.maxPlayers = bytes[offset + 1];
    if (info.folder !== "cstrike" || !info.map) { throw new Error("The reply did not identify a loaded Counter-Strike map."); }
    return info;
  }

  async function selectedRemote(peer) {
    var stats = await peer.getStats();
    var pair;
    stats.forEach(function (item) { if (item.type === "transport" && item.selectedCandidatePairId) { pair = stats.get(item.selectedCandidatePairId); } });
    if (!pair) { stats.forEach(function (item) { if (item.type === "candidate-pair" && item.nominated && item.state === "succeeded") { pair = item; } }); }
    return pair ? stats.get(pair.remoteCandidateId) : null;
  }

  async function run() {
    var token = tokenInput.value;
    if (token.length < 32) { setStatus("Enter the CS16_ADMIN_TOKEN you configured in Railway (at least 32 characters).", "fail"); return; }
    button.disabled = true;
    result.textContent = "";
    setStatus("Connecting to the game through Railway TCP… allow up to 60 seconds.");
    var details = {};
    var peer = new RTCPeerConnection({ iceServers: [] });
    var socket;
    var sendChannel;
    var receiveChannel;
    var sentAt;
    var challengeUsed = false;
    var controller = new AbortController();
    var resolveGame;
    var rejectGame;
    var gameReply = new Promise(function (resolve, reject) { resolveGame = resolve; rejectGame = reject; });
    gameReply.catch(function () {});
    var timer = setTimeout(function () { controller.abort(); rejectGame(new Error("The game query timed out. Inspect the Railway logs for native runtime, private UDP, and browser TCP states.")); }, TIMEOUT_MS);
    var pendingCandidates = [];
    var signalWork = Promise.resolve();
    var basePacket = queryPacket();

    function sendQueryWhenReady() {
      if (!sentAt && sendChannel && receiveChannel && sendChannel.readyState === "open" && receiveChannel.readyState === "open") {
        sentAt = performance.now();
        sendChannel.send(basePacket);
      }
    }

    peer.ondatachannel = function (event) {
      var channel = event.channel;
      channel.binaryType = "arraybuffer";
      if (channel.label === "read") { sendChannel = channel; }
      if (channel.label === "write") {
        receiveChannel = channel;
        channel.onmessage = function (message) {
          try {
            if (!(message.data instanceof ArrayBuffer)) { throw new Error("Expected a binary game packet."); }
            var bytes = new Uint8Array(message.data);
            if (bytes.length >= 9 && bytes.slice(0, 4).every(function (v) { return v === 255; }) && bytes[4] === 65 && !challengeUsed) {
              challengeUsed = true;
              var challenged = new Uint8Array(basePacket.length + 4);
              challenged.set(basePacket);
              challenged.set(bytes.slice(5, 9), basePacket.length);
              sendChannel.send(challenged);
              return;
            }
            resolveGame(parseInfo(bytes));
          } catch (error) { rejectGame(error); }
        };
      }
      channel.onopen = sendQueryWhenReady;
      channel.onerror = function () { rejectGame(new Error("A game data channel failed.")); };
      sendQueryWhenReady();
    };
    peer.onicecandidate = function (event) {
      if (event.candidate && socket && socket.readyState === WebSocket.OPEN) { socket.send(JSON.stringify({ event: "candidate", data: event.candidate.toJSON() })); }
    };
    peer.onconnectionstatechange = function () {
      details.connectionState = peer.connectionState;
      if (peer.connectionState === "failed") { rejectGame(new Error("The browser's TCP WebRTC connection failed.")); }
    };

    try {
      var response = await fetch("/api/session", { method: "POST", headers: { Authorization: "Bearer " + token }, signal: controller.signal });
      token = "";
      tokenInput.value = "";
      var session = await response.json();
      if (!response.ok) { throw new Error(session.error || "HTTP " + response.status); }
      details.advertisedEndpoint = session.endpoint;
      var websocketURL = new URL(session.websocketPath, location.href);
      websocketURL.protocol = location.protocol === "https:" ? "wss:" : "ws:";
      socket = new WebSocket(websocketURL);
      socket.onmessage = function (event) {
        signalWork = signalWork.then(async function () {
          var message = JSON.parse(event.data);
          if (message.event === "error") { throw new Error(message.data.message); }
          if (message.event === "candidate") {
            if (peer.remoteDescription) { await peer.addIceCandidate(message.data); } else { pendingCandidates.push(message.data); }
          }
          if (message.event === "offer") {
            await peer.setRemoteDescription(message.data);
            for (var i = 0; i < pendingCandidates.length; i++) { await peer.addIceCandidate(pendingCandidates[i]); }
            pendingCandidates = [];
            await peer.setLocalDescription(await peer.createAnswer());
            socket.send(JSON.stringify({ event: "answer", data: peer.localDescription }));
          }
        }).catch(rejectGame);
      };
      socket.onerror = function () { rejectGame(new Error("Backend signaling could not connect.")); };
      socket.onclose = function () { rejectGame(new Error("Backend signaling closed before verification finished.")); };
      details.game = await gameReply;
      details.gameQueryRoundTripMs = Math.round((performance.now() - sentAt) * 10) / 10;
      var remote = await selectedRemote(peer);
      if (!remote) { throw new Error("Game replied, but selected ICE transport statistics were unavailable."); }
      details.remoteCandidate = { address: remote.address || remote.ip, port: remote.port, protocol: remote.protocol, tcpType: remote.tcpType };
      if (remote.protocol !== "tcp" || remote.port !== session.endpoint.port || (remote.address || remote.ip) !== session.endpoint.host) { throw new Error("Game replied, but the selected endpoint did not match the Railway TCP proxy."); }
      details.result = "PASS_GAME_QUERY";
      setStatus("PASS — CS server-info reply received through Railway TCP.", "pass");
    } catch (error) {
      details.result = "NOT_VERIFIED";
      details.error = error.message;
      setStatus("Not verified: " + error.message, "fail");
    } finally {
      clearTimeout(timer);
      controller.abort();
      token = "";
      tokenInput.value = "";
      if (socket) { socket.onclose = null; socket.close(); }
      peer.close();
      result.textContent = JSON.stringify(details, null, 2);
      button.disabled = false;
    }
  }

  button.addEventListener("click", run);
})();
