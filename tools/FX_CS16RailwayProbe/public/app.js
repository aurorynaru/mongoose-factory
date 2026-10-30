(function () {
  "use strict";

  var button = document.getElementById("FX_Test");
  var status = document.getElementById("FX_Status");
  var result = document.getElementById("FX_Result");
  var TEST_TIMEOUT_MS = 60000;

  function setStatus(message, kind) {
    status.textContent = message;
    status.className = kind || "";
  }

  async function request(url, options) {
    var response = await fetch(url, options);
    var body = await response.json();
    if (!response.ok) { throw new Error(body.error || "HTTP " + response.status); }
    return body;
  }

  function waitForGathering(peer, signal) {
    return new Promise(function (resolve, reject) {
      function cleanup() {
        peer.removeEventListener("icegatheringstatechange", check);
        signal.removeEventListener("abort", aborted);
      }
      function check() {
        if (peer.iceGatheringState === "complete") { cleanup(); resolve(); }
      }
      function aborted() { cleanup(); reject(new Error("Candidate gathering timed out.")); }
      peer.addEventListener("icegatheringstatechange", check);
      signal.addEventListener("abort", aborted, { once: true });
      if (signal.aborted) { aborted(); } else { check(); }
    });
  }

  async function selectedPair(peer) {
    var stats = await peer.getStats();
    var pair;
    stats.forEach(function (item) {
      if (item.type === "transport" && item.selectedCandidatePairId) {
        pair = stats.get(item.selectedCandidatePairId);
      }
    });
    if (!pair) {
      stats.forEach(function (item) {
        if (item.type === "candidate-pair" && item.state === "succeeded" && item.nominated) { pair = item; }
      });
    }
    return pair ? { pair: pair, remote: stats.get(pair.remoteCandidateId) } : null;
  }

  async function runTest() {
    button.disabled = true;
    result.textContent = "";
    setStatus("Connecting… allow up to 60 seconds.");
    var controller = new AbortController();
    var timer = setTimeout(function () { controller.abort(); }, TEST_TIMEOUT_MS);
    var peer = new RTCPeerConnection({ iceServers: [] });
    var channel = peer.createDataChannel("FX_CS16_probe", { ordered: false, maxRetransmits: 0 });
    var challenge = "FX_CS16:" + crypto.randomUUID();
    var sentAt;
    var expectedEndpoint;
    var details = {};
    var resolveEcho;
    var rejectEcho;
    var echoed = new Promise(function (resolve, reject) { resolveEcho = resolve; rejectEcho = reject; });
    // Errors may occur while HTTP signaling is still pending.
    echoed.catch(function () {});
    controller.signal.addEventListener("abort", function () { rejectEcho(new Error("Connection timed out. Check the TCP proxy target, public address, and service logs.")); }, { once: true });
    channel.onopen = function () {
      sentAt = performance.now();
      channel.send(challenge);
    };
    channel.onmessage = function (event) {
      if (event.data !== challenge) { rejectEcho(new Error("The echo payload did not match.")); return; }
      resolveEcho(performance.now() - sentAt);
    };
    channel.onerror = function () { rejectEcho(new Error("The data channel reported an error.")); };
    peer.onconnectionstatechange = function () {
      details.connectionState = peer.connectionState;
      if (peer.connectionState === "failed") { rejectEcho(new Error("WebRTC could not establish the TCP connection.")); }
    };
    try {
      var config = await request("/config", { signal: controller.signal });
      if (!config.ready) { throw new Error(config.error); }
      await peer.setLocalDescription(await peer.createOffer());
      await waitForGathering(peer, controller.signal);
      var reply = await request("/offer", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify(peer.localDescription), signal: controller.signal
      });
      expectedEndpoint = reply.endpoint;
      details.advertisedEndpoint = expectedEndpoint;
      await peer.setRemoteDescription(reply.answer);
      details.echoRoundTripMs = Math.round((await echoed) * 10) / 10;
      var selected = await selectedPair(peer);
      if (!selected || !selected.remote) { throw new Error("Echo succeeded, but this browser did not expose the selected candidate. TCP verification is incomplete."); }
      details.remoteCandidate = {
        address: selected.remote.address || selected.remote.ip,
        port: selected.remote.port, protocol: selected.remote.protocol,
        candidateType: selected.remote.candidateType, tcpType: selected.remote.tcpType
      };
      details.selectedPairState = selected.pair.state;
      if (selected.remote.protocol !== "tcp") { throw new Error("Echo succeeded, but the selected connection was not TCP."); }
      if (selected.remote.port !== expectedEndpoint.port || (selected.remote.address || selected.remote.ip) !== expectedEndpoint.host) {
        throw new Error("Echo succeeded, but the selected endpoint did not match the advertised TCP proxy.");
      }
      details.result = "PASS";
      setStatus("PASS — TCP selected and matching data echoed back.", "pass");
    } catch (error) {
      details.result = "NOT VERIFIED";
      details.error = error.message;
      setStatus("Not verified: " + error.message, "fail");
    } finally {
      clearTimeout(timer);
      controller.abort();
      result.textContent = JSON.stringify(details, null, 2);
      console.info("[FX_CS16RailwayProbe]", details);
      channel.close();
      peer.close();
      button.disabled = false;
    }
  }

  button.addEventListener("click", runTest);
  request("/config").then(function (config) {
    if (!window.RTCPeerConnection) { throw new Error("This browser does not support WebRTC."); }
    if (!config.ready) { throw new Error(config.error); }
    setStatus("Ready. Run the connection test.");
    button.disabled = false;
  }).catch(function (error) { setStatus(error.message + " Reload this page after updating Railway.", "fail"); });
})();
