(function () {
  "use strict";

  // ---- Config ----
  // Must match the Form: the C# class methods and the Global variable that holds each result.
  var FORM_NAME = "FX_App";
  var RESULT_VAR = "FX_vAppResult";
  var TIMEOUT_MS = 20000;
  var DEBUG = true; // false hides the [FX_App] console lines

  // ---- State ----
  var state = { busy: false };

  // ---- Helpers ----
  var statusLine = document.getElementById("FX_Status");

  function log() {
    if (!DEBUG) { return; }
    console.log.apply(console, ["[" + FORM_NAME + "]"].concat(Array.prototype.slice.call(arguments)));
  }

  function setStatus(text, kind) {
    statusLine.textContent = text || "";
    statusLine.className = kind ? "is-" + kind : "";
  }

  function setBusy(busy) {
    state.busy = busy;
    document.getElementById("FX_Refresh").disabled = busy;
  }

  // ---- Server bridge ----
  // The only place that talks to Mongoose. The C# method writes {"ok":true,...} or {"ok":false,"message":"..."}
  // to RESULT_VAR; the invoke callback's own value is not used (it came back as 0, EXP-131/132).
  function callServer(method, args, done) {
    if (typeof WSForm === "undefined") {
      done("Open this page inside the " + FORM_NAME + " Form.");
      return;
    }
    var started = Date.now();
    var finished = false;
    log("call", method, args);
    var timer = setTimeout(function () {
      finished = true;
      log("timeout", method, TIMEOUT_MS + " ms");
      done("No response from " + method + " after " + TIMEOUT_MS / 1000 + " s. Try again.");
    }, TIMEOUT_MS);
    WSForm.invoke.apply(WSForm, [method].concat(args, [function () {
      WSForm.getVarValue(RESULT_VAR, function (value) {
        if (finished) { return; }
        clearTimeout(timer);
        var result;
        try { result = JSON.parse(value); } catch (e) {
          log("unreadable", method, value);
          done(method + " returned unreadable data: " + String(value).slice(0, 200));
          return;
        }
        log("result", method, (Date.now() - started) + " ms", result);
        if (!result || result.ok !== true) { done((result && result.message) || method + " failed with no message."); return; }
        done(null, result);
      });
    }]));
  }

  // ---- Feature: hello ----
  function loadHello() {
    setBusy(true);
    setStatus("Loading...");
    callServer("FX_Hello", [], function (err, result) {
      setBusy(false);
      if (err) { setStatus(err, "error"); return; }
      setStatus("");
      document.getElementById("FX_Message").textContent = result.message;
    });
  }

  // ---- Wiring ----
  document.getElementById("FX_Refresh").addEventListener("click", loadHello);
  // An invoke sent before the Form is ready never reaches the server (BLD-002); MG.onReady waits for it.
  if (typeof MG !== "undefined" && typeof MG.onReady === "function") {
    MG.onReady(loadHello);
  } else {
    loadHello();
  }
})();
