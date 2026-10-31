// Preview only (never installed): a fake WSForm so the login page runs in a normal browser.
// Each method answers what FX_ServiceDeskLogin.cs.txt writes to FX_vSDLoginResult. Fake accounts only:
// "sam.lee" with password "correct-horse" exists; "agent.anna" is an agent without an account (taken).
// The token is shared with FX_ServiceDesk's stub through sessionStorage, as in the tenant.
(function () {
  var vars = {};
  var accounts = { "sam.lee": { name: "Sam Lee", password: "correct-horse" } };
  var agents = { "agent.anna": "Anna Agent", "sam.lee": "Sam Lee" };
  var sessions = JSON.parse(sessionStorage.getItem("FX_preview.sessions") || "{}");
  function keep() { sessionStorage.setItem("FX_preview.sessions", JSON.stringify(sessions)); }
  function token() { var t = ""; for (var i = 0; i < 64; i++) { t += "0123456789abcdef"[Math.floor(Math.random() * 16)]; } return t; }
  function set(result) { vars.FX_vSDLoginResult = JSON.stringify(result); }
  function start(id) { var t = token(); sessions[t] = id; keep(); return { ok: true, token: t, agent: { id: id, name: agents[id] } }; }

  var methods = {
    FX_SLSignIn: function (u, p) {
      var a = accounts[u];
      set(a && a.password === p ? start(u) : { ok: false, message: "Username or password is incorrect. Check both and try again." });
    },
    FX_SLSignUp: function (u, name, team, p) {
      var errors = {};
      if (!/^[a-z0-9._-]{3,30}$/.test(u)) { errors.username = "Use 3-30 lowercase letters, digits, dots, dashes or underscores."; }
      else if (agents[u] || accounts[u]) { errors.username = "This username is taken. Pick another."; }
      if (!name) { errors.name = "Enter your name."; }
      if (p.length < 10) { errors.password = "Use at least 10 characters."; }
      if (Object.keys(errors).length) { set({ ok: false, message: "Check the highlighted fields.", errors: errors }); return; }
      accounts[u] = { name: name, password: p }; agents[u] = name;
      set(start(u));
    },
    FX_SLCheck: function (t) {
      var id = sessions[t];
      set(id ? { ok: true, agent: { id: id, name: agents[id] || id } } : { ok: false, message: "No session." });
    }
  };

  // ?dropfirst=1 drops the first call's arguments, as the tenant did for a just-opened Form (BLD-018).
  var dropFirst = new URLSearchParams(location.search).get("dropfirst") === "1";
  window.WSForm = {
    invoke: function () {
      var args = Array.prototype.slice.call(arguments), name = args.shift(), cb = args.pop();
      if (dropFirst) { dropFirst = false; args = []; }
      setTimeout(function () { methods[name].apply(null, args); cb(0); }, 450);
    },
    getVarValue: function (name, cb) { setTimeout(function () { cb(vars[name]); }, 10); },
    generate: function (event, cb) {
      console.log("[stub] generate", event);
      setTimeout(function () { if (cb) { cb(); } location.href = "../FX_ServiceDesk/index.html"; }, 300);
    }
  };
})();
