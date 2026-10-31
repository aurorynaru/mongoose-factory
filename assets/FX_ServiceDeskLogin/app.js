(function () {
  "use strict";

  // ---- Config ----
  // Must match the Form: the C# class (FX_ServiceDeskLogin.cs.txt), its Global result variable and the event handler
  // that opens the app (Run Form FX_ServiceDesk).
  var FORM_NAME = "FX_ServiceDeskLogin";
  var RESULT_VAR = "FX_vSDLoginResult";
  var OPEN_APP_EVENT = "FX_OpenServiceDesk";
  // The session token for this browser tab; FX_ServiceDesk/app.js reads the same key.
  var SESSION_KEY = "FX_ServiceDesk.session";
  var TIMEOUT_MS = 20000;
  // The first call from a just-opened Form can reach the server without its argument (BLD-018); the session
  // check tries again after each of these delays before it forgets the token.
  var START_RETRY_MS = [1500, 3000];
  var DEBUG = true; // false hides the [FX_ServiceDeskLogin] console lines (they never contain passwords or tokens)
  var USERNAME = /^[a-z0-9._-]{3,30}$/;
  var PASSWORD_MIN = 10;

  // ---- State ----
  var state = { mode: "signin", busy: false };

  // ---- Helpers ----
  var $ = function (id) { return document.getElementById(id); };

  function log() {
    if (!DEBUG) { return; }
    console.log.apply(console, ["[" + FORM_NAME + "]"].concat(Array.prototype.slice.call(arguments)));
  }

  function readToken() {
    try { return sessionStorage.getItem(SESSION_KEY) || ""; } catch (e) { return ""; }
  }
  function saveToken(token) {
    try { sessionStorage.setItem(SESSION_KEY, token); } catch (e) { log("sessionStorage blocked"); }
  }
  function clearToken() {
    try { sessionStorage.removeItem(SESSION_KEY); } catch (e) { /* nothing stored */ }
  }

  function showAlert(text) {
    $("FX_AlertText").textContent = text || "";
    $("FX_Alert").hidden = !text;
  }

  function setBusy(busy, label) {
    state.busy = busy;
    var btn = state.mode === "signin" ? $("FX_InSubmit") : $("FX_UpSubmit");
    btn.disabled = busy;
    btn.textContent = busy ? label : (state.mode === "signin" ? "Sign in" : "Create account");
  }

  function fieldError(input, message) {
    var id = input.id + "_err";
    var old = $(id);
    if (old) { old.remove(); }
    var hint = $(input.id + "_hint");
    if (!message) {
      input.removeAttribute("aria-invalid");
      input.setAttribute("aria-describedby", hint ? hint.id : "");
      if (hint) { hint.hidden = false; }
      return;
    }
    var err = document.createElement("small");
    err.className = "FX_Err";
    err.id = id;
    err.textContent = message;
    input.closest(".FX_Field").appendChild(err);
    input.setAttribute("aria-invalid", "true");
    input.setAttribute("aria-describedby", id);
    if (hint) { hint.hidden = true; }
  }

  function clearErrors(form) {
    form.querySelectorAll("input").forEach(function (i) { fieldError(i, ""); });
    showAlert("");
  }

  function focusFirstError(form) {
    var bad = form.querySelector('[aria-invalid="true"]');
    if (bad) { bad.focus(); }
  }

  // ---- Server bridge ----
  // The C# method writes {"ok":true,...} or {"ok":false,"message":"..."} to RESULT_VAR (the FX_ServiceDesk route).
  // Arguments are never logged: they carry the password.
  function callServer(method, args, done) {
    if (typeof WSForm === "undefined") { done("Open this page inside the " + FORM_NAME + " Form."); return; }
    var finished = false;
    var started = Date.now();
    log("call", method);
    var timer = setTimeout(function () {
      finished = true;
      done("No answer from the server after " + TIMEOUT_MS / 1000 + " s. Try again.");
    }, TIMEOUT_MS);
    WSForm.invoke.apply(WSForm, [method].concat(args, [function () {
      WSForm.getVarValue(RESULT_VAR, function (value) {
        if (finished) { return; }
        finished = true;
        clearTimeout(timer);
        var result;
        try { result = JSON.parse(value); } catch (e) { done(method + " returned unreadable data."); return; }
        log("result", method, (Date.now() - started) + " ms", result.ok === true ? "ok" : "refused");
        if (result.ok !== true) { done(result.message || method + " failed.", null, result); return; }
        done(null, result);
      });
    }]));
  }

  // ---- Feature: mode switch ----
  function setMode(mode) {
    state.mode = mode;
    var signin = mode === "signin";
    $("FX_TabIn").setAttribute("aria-pressed", String(signin));
    $("FX_TabUp").setAttribute("aria-pressed", String(!signin));
    $("FX_SignIn").hidden = !signin;
    $("FX_SignUp").hidden = signin;
    $("FX_Title").textContent = signin ? "Welcome back" : "Create your account";
    $("FX_Lead").textContent = signin ? "Use your Service Desk username and password." : "You can start working on tickets as soon as it's created.";
    document.title = (signin ? "Sign in" : "Create account") + " · Service Desk";
    showAlert("");
    (signin ? $("FX_InUser") : $("FX_UpUser")).focus();
  }

  // ---- Feature: open the app ----
  function openApp() {
    var note = $("FX_ResumeNote");
    if (typeof WSForm === "undefined" || typeof WSForm.generate !== "function") {
      note.textContent = "Open Service Desk from the Mongoose menu; you stay signed in in this tab.";
      return;
    }
    note.textContent = "Opening Service Desk…";
    WSForm.generate(OPEN_APP_EVENT, function () { note.textContent = "Service Desk is open in its own tab."; });
  }

  function signedIn(result) {
    saveToken(result.token);
    showResume(result.agent);
    openApp();
  }

  function showResume(agent) {
    $("FX_ResumeName").textContent = agent.name || agent.id;
    $("FX_Forms").hidden = true;
    $("FX_Resume").hidden = false;
    $("FX_ResumeOpen").focus();
  }

  function showForms() {
    $("FX_Resume").hidden = true;
    $("FX_Forms").hidden = false;
    setMode("signin");
  }

  // ---- Feature: sign in ----
  function submitSignIn(form) {
    if (state.busy) { return; }
    clearErrors(form);
    var user = form.username.value.trim().toLowerCase(), pass = form.password.value;
    if (!user) { fieldError(form.username, "Enter your username."); }
    if (!pass) { fieldError(form.password, "Enter your password."); }
    if (!user || !pass) { focusFirstError(form); return; }
    setBusy(true, "Signing in…");
    callServer("FX_SLSignIn", [user, pass], function (err, result) {
      setBusy(false);
      if (err) {
        form.password.value = "";
        showAlert(err);
        form.password.focus();
        return;
      }
      form.password.value = "";
      signedIn(result);
    });
  }

  // ---- Feature: create account ----
  function strength(pass) {
    var kinds = [/[a-z]/, /[A-Z]/, /\d/, /[^A-Za-z0-9]/].filter(function (r) { return r.test(pass); }).length;
    if (pass.length < PASSWORD_MIN) { return { width: Math.min(pass.length / PASSWORD_MIN, 1) * 33, cls: "", text: "At least 10 characters." }; }
    if (pass.length >= 14 || kinds >= 3) { return { width: 100, cls: "is-good", text: "Strong password." }; }
    return { width: 66, cls: "is-fair", text: "Fair. Longer is stronger." };
  }

  function submitSignUp(form) {
    if (state.busy) { return; }
    clearErrors(form);
    var v = {
      username: form.username.value.trim().toLowerCase(),
      name: form.name.value.trim(),
      team: form.team.value.trim(),
      password: form.password.value,
      confirm: form.confirm.value
    };
    form.username.value = v.username;
    if (!USERNAME.test(v.username)) { fieldError(form.username, "Use 3–30 lowercase letters, digits, dots, dashes or underscores."); }
    if (!v.name) { fieldError(form.name, "Enter your name."); }
    if (v.password.length < PASSWORD_MIN) { fieldError(form.password, "Use at least " + PASSWORD_MIN + " characters."); }
    if (v.confirm !== v.password) { fieldError(form.confirm, "The passwords don't match."); }
    if (form.querySelector('[aria-invalid="true"]')) { focusFirstError(form); return; }
    setBusy(true, "Creating account…");
    callServer("FX_SLSignUp", [v.username, v.name, v.team, v.password], function (err, result, failed) {
      setBusy(false);
      if (err) {
        var errors = (failed && failed.errors) || {};
        Object.keys(errors).forEach(function (k) { if (form[k]) { fieldError(form[k], errors[k]); } });
        if (!Object.keys(errors).length) { showAlert(err); }
        focusFirstError(form);
        return;
      }
      form.reset();
      updateMeter("");
      signedIn(result);
    });
  }

  function updateMeter(pass) {
    var s = strength(pass), bar = $("FX_MeterBar");
    bar.style.width = s.width + "%";
    bar.className = s.cls;
    $("FX_UpPass_hint").textContent = s.text;
  }

  // ---- Wiring ----
  document.querySelectorAll("[data-mode]").forEach(function (b) {
    b.addEventListener("click", function () { setMode(b.getAttribute("data-mode")); });
  });
  $("FX_SignIn").addEventListener("submit", function (e) { e.preventDefault(); submitSignIn(e.target); });
  $("FX_SignUp").addEventListener("submit", function (e) { e.preventDefault(); submitSignUp(e.target); });
  document.addEventListener("input", function (e) {
    if (e.target.getAttribute("aria-invalid") === "true") { fieldError(e.target, ""); }
    if (e.target.id === "FX_UpPass") { updateMeter(e.target.value); }
  });
  document.querySelectorAll("[data-reveal]").forEach(function (b) {
    b.addEventListener("click", function () {
      var input = $(b.getAttribute("data-reveal")), show = input.type === "password";
      input.type = show ? "text" : "password";
      b.setAttribute("aria-pressed", String(show));
      b.setAttribute("aria-label", show ? "Hide password" : "Show password");
      b.querySelector("use").setAttribute("href", show ? "#i-eye-off" : "#i-eye");
    });
  });
  $("FX_ResumeOpen").addEventListener("click", openApp);
  $("FX_ResumeOther").addEventListener("click", function () { clearToken(); showForms(); });

  // A token left in this tab: offer to continue when the server still accepts it.
  function start(tries) {
    var token = readToken();
    tries = tries || 0;
    if (!token) { $("FX_InUser").focus(); return; }
    callServer("FX_SLCheck", [token], function (err, result) {
      if (err && tries < START_RETRY_MS.length) {
        setTimeout(function () { start(tries + 1); }, START_RETRY_MS[tries]);
        return;
      }
      if (err) { clearToken(); $("FX_InUser").focus(); return; }
      showResume(result.agent);
    });
  }
  // An invoke sent before the Form is ready never reaches the server (BLD-002); MG.onReady waits for it.
  if (typeof MG !== "undefined" && typeof MG.onReady === "function") {
    MG.onReady(function () { start(0); });
  } else {
    start(0);
  }
})();
