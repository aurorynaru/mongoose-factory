(function () {
  "use strict";

  // ---- Config ----
  // Must match the Form: the C# class (FX_ServiceDesk.cs.txt) and the Global variable that holds each result.
  var FORM_NAME = "FX_ServiceDesk";
  var RESULT_VAR = "FX_vSDResult";
  var TIMEOUT_MS = 20000;
  // The first call from a just-opened Form can reach the server without its argument (BLD-018); the first load
  // tries again after each of these delays before it shows the sign-in screen or an error.
  var START_RETRY_MS = [1500, 3000];
  var DEBUG = true; // false hides the [FX_ServiceDesk] console lines
  var PREFS_KEY = "FX_ServiceDesk.prefs"; // last view and filters, this browser only
  // The session token for this browser tab, written by the FX_ServiceDeskLogin page (BLD-018). Never logged.
  var SESSION_KEY = "FX_ServiceDesk.session";
  var OPEN_LOGIN_EVENT = "FX_OpenLogin"; // FX_ServiceDesk event handler: Run Form FX_ServiceDeskLogin
  var VIEWS = { work: "My work", projects: "Projects", issues: "Issues", board: "Board", dashboard: "Dashboard" };
  var CLOSED_DAYS = 14; // the board's closed column shows only tickets closed this recently
  // Server stamps (created, updated, resolved, comment posted) arrive as UTC text with no offset: CreateDate and the C#
  // script's DateTime.Now both read UTC in this tenant (BLD-015 step 8). Due dates are calendar dates, not stamps.
  var SERVER_TIME_UTC = true;
  // Fallbacks only: the C# script sends the FX_Tickets inline lists with the load (types, categories, resolutions).
  var TYPES = ["Incident", "Service request", "Problem", "Change", "Task"];
  var CATEGORIES = ["Hardware", "Software", "Access", "Network", "Facilities", "Other"];
  var RESOLUTIONS = ["Fixed", "Workaround", "Duplicate", "Won't do", "Cannot reproduce"];
  var RESOLVED = "RESOLVED"; // the move that needs a Resolution (the C# script checks it too)
  var HISTORY_FIELDS = { Status: "status", Assignee: "assignee", Priority: "priority" };
  var RECENT_ACTIVITY = 5;   // My work's Recent activity
  var DASH_PERIODS = [7, 30, 90];
  var OLDEST_OPEN = 10;
  // Chart colours: the dataviz reference categorical slots 1-5, in fixed order (validated, light surface).
  // Text never wears them; each mark sits beside a legend entry with its number.
  var SERIES = ["#2a78d6", "#eb6834", "#1baf7a", "#eda100", "#e87ba4"];
  var TYPE_ICON = { "Incident": "incident", "Service request": "request", "Problem": "problem", "Change": "change", "Task": "task" };
  var PROJECT_COLORS = ["#2b5ce6", "#1d7a4f", "#b4531a", "#7c3aed", "#0e7490", "#be185d"];
  var AVATAR_COLORS = ["#2b5ce6", "#1d7a4f", "#b4531a", "#7c3aed", "#0e7490", "#be185d", "#4d5b70", "#8a5a00"];

  // ---- State ----
  var data = null; // the FX_SDLoad result: agents, projects, statuses, priorities, transitions, tickets, comments, history
  var state = {
    busy: false,
    me: null,          // AgentID of the signed-in person (the server reads it from the session)
    token: "",         // the session token (SESSION_KEY)
    signedOut: false,  // true while the sign-in screen is showing
    starting: false,   // true until the first load has an answer (START_RETRY_MS)
    startTries: 0,     // retries used by the first load
    view: "work",
    project: "",       // ProjectKey filter for Issues and Board ("" = all)
    selected: "",      // TicketID shown in the Issues detail pane
    queueTab: "todo",
    issues: { tab: "all", q: "", status: "", priority: "", assignee: "" },
    board: { q: "", assignee: "", type: "" },
    saving: {},        // TicketID -> true while its status is being saved
    drafts: {},        // TicketID -> unsent comment text
    editing: "",       // TicketID in Edit mode in the detail pane
    edit: null,        // that ticket's unsaved field values (page keys) and field errors
    dashDays: 30       // Dashboard period (DASH_PERIODS)
  };

  // ---- Helpers ----
  var $ = function (id) { return document.getElementById(id); };
  var statusLine = $("FX_Status");
  var view = $("FX_View");
  var statusTimer = null;

  function log() {
    if (!DEBUG) { return; }
    console.log.apply(console, ["[" + FORM_NAME + "]"].concat(Array.prototype.slice.call(arguments)));
  }

  function esc(value) {
    return String(value == null ? "" : value).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function icon(name) { return '<svg aria-hidden="true"><use href="#i-' + name + '"/></svg>'; }

  function setStatus(text, kind) {
    clearTimeout(statusTimer);
    statusLine.textContent = text || "";
    statusLine.className = "FX_Status" + (kind ? " is-" + kind : "");
    if (kind === "ok") { statusTimer = setTimeout(function () { setStatus(""); }, 4000); }
  }

  function setBusy(busy) {
    state.busy = busy;
    $("FX_Refresh").disabled = busy;
  }

  function loadPrefs() {
    try {
      var saved = JSON.parse(localStorage.getItem(PREFS_KEY) || "{}");
      if (VIEWS[saved.view]) { state.view = saved.view; }
      state.project = saved.project || "";
      state.queueTab = saved.queueTab === "doing" ? "doing" : "todo";
      if (DASH_PERIODS.indexOf(saved.dashDays) >= 0) { state.dashDays = saved.dashDays; }
      if (saved.issues) { Object.assign(state.issues, saved.issues); }
      if (saved.board) { Object.assign(state.board, saved.board); }
    } catch (e) { log("prefs unreadable", e); }
  }

  function savePrefs() {
    try {
      localStorage.setItem(PREFS_KEY, JSON.stringify({
        view: state.view, project: state.project, queueTab: state.queueTab,
        issues: state.issues, board: state.board, dashDays: state.dashDays
      }));
    } catch (e) { /* private mode or blocked storage: the page works without it */ }
  }

  // Lookups
  function byKey(list, key, value) {
    for (var i = 0; i < list.length; i++) { if (list[i][key] === value) { return list[i]; } }
    return null;
  }
  function agent(id) { return id ? byKey(data.agents, "id", id) : null; }
  function agentName(id) { var a = agent(id); return a ? a.name : (id || "Unassigned"); }
  function status(code) { return byKey(data.statuses, "code", code) || { code: code, name: code, category: "To do", order: 999, closed: false }; }
  function priority(code) { return byKey(data.priorities, "code", code) || { code: code, name: code, order: 999 }; }
  function project(key) { return byKey(data.projects, "key", key); }
  function projectColor(key) {
    var i = data.projects.map(function (p) { return p.key; }).indexOf(key);
    return PROJECT_COLORS[(i < 0 ? 0 : i) % PROJECT_COLORS.length];
  }
  function isDone(t) { return status(t.status).category === "Done"; }
  function isOpen(t) { return !isDone(t); }

  // Dates: the C# script sends ISO text (yyyy-MM-ddTHH:mm:ss); yyyyMMdd is accepted too, in case the raw IDO text gets through.
  // A trailing Z means UTC (see markStamps); without it the text is a local calendar date/time.
  function parseDate(text) {
    if (!text) { return null; }
    var m = /^(\d{4})-?(\d{2})-?(\d{2})(?:[T ](\d{2}):(\d{2})(?::(\d{2})(?:\.\d+)?)?)?(Z)?/.exec(text);
    if (!m) { return null; }
    var parts = [+m[1], +m[2] - 1, +m[3], +(m[4] || 0), +(m[5] || 0), +(m[6] || 0)];
    return m[7] ? new Date(Date.UTC.apply(null, parts)) : new Date(parts[0], parts[1], parts[2], parts[3], parts[4], parts[5]);
  }
  // Marks the server stamps of tickets and comments as UTC, once, as they arrive from the C# script.
  function markStamps(rows, fields) {
    if (!SERVER_TIME_UTC) { return rows; }
    rows.forEach(function (row) {
      fields.forEach(function (f) { if (row[f] && !/Z$/.test(row[f])) { row[f] += "Z"; } });
    });
    return rows;
  }
  function markTickets(tickets) { return markStamps(tickets, ["created", "updated", "resolvedOn"]); }
  function markComments(comments) { return markStamps(comments, ["created"]); }
  function markHistory(history) { return markStamps(history, ["created"]); }
  function startOfDay(d) { return new Date(d.getFullYear(), d.getMonth(), d.getDate()); }
  function addDays(d, n) { var x = new Date(d); x.setDate(x.getDate() + n); return x; }
  function weekStart(d) { var day = (d.getDay() + 6) % 7; return addDays(startOfDay(d), -day); } // Monday
  var fmtShort = new Intl.DateTimeFormat(undefined, { month: "short", day: "numeric" });
  var fmtLong = new Intl.DateTimeFormat(undefined, { year: "numeric", month: "short", day: "numeric" });
  var fmtToday = new Intl.DateTimeFormat(undefined, { weekday: "long", month: "long", day: "numeric" });
  var fmtRel = new Intl.RelativeTimeFormat(undefined, { numeric: "auto" });
  function dateText(text, long) { var d = parseDate(text); return d ? (long ? fmtLong : fmtShort).format(d) : ""; }
  function ago(text) {
    var d = parseDate(text);
    if (!d) { return ""; }
    var mins = Math.round((d - new Date()) / 60000);
    if (Math.abs(mins) < 60) { return fmtRel.format(mins, "minute"); }
    var hours = Math.round(mins / 60);
    if (Math.abs(hours) < 24) { return fmtRel.format(hours, "hour"); }
    return fmtRel.format(Math.round(hours / 24), "day");
  }
  function isLate(t) {
    var due = parseDate(t.due);
    return !!due && isOpen(t) && due < startOfDay(new Date());
  }

  // Sorting
  function ticketNo(id) { var m = /-(\d+)$/.exec(id || ""); return m ? +m[1] : 0; }
  function byQueue(a, b) { // highest priority, then earliest due (no due date last)
    var p = priority(a.priority).order - priority(b.priority).order;
    if (p) { return p; }
    var da = parseDate(a.due), db = parseDate(b.due);
    if (da && db) { return da - db; }
    return da ? -1 : db ? 1 : ticketNo(a.id) - ticketNo(b.id);
  }
  function byUpdated(a, b) { return (parseDate(b.updated) || 0) - (parseDate(a.updated) || 0); }

  // Small pieces of markup
  function initials(name) {
    var parts = String(name || "?").replace(/[._-]/g, " ").trim().split(/\s+/);
    return ((parts[0] || "?").charAt(0) + (parts.length > 1 ? parts[parts.length - 1].charAt(0) : "")).toUpperCase();
  }
  function avatarColor(id) {
    var h = 0;
    for (var i = 0; i < id.length; i++) { h = (h * 31 + id.charCodeAt(i)) | 0; }
    return AVATAR_COLORS[Math.abs(h) % AVATAR_COLORS.length];
  }
  function avatar(id, size) {
    var cls = "FX_Avatar" + (size ? " FX_Avatar--" + size : "");
    if (!id) { return '<span class="' + cls + ' FX_Avatar--none" title="Unassigned" role="img" aria-label="Unassigned">–</span>'; }
    var name = agentName(id);
    return '<span class="' + cls + '" style="background:' + avatarColor(id) + '" title="' + esc(name) + '" role="img" aria-label="' + esc(name) + '">' + esc(initials(name)) + "</span>";
  }
  function statusPill(code, id) {
    var s = status(code);
    var kind = s.category === "Done" ? "done" : s.category === "In progress" ? (/wait/i.test(s.code) ? "wait" : "doing") : "todo";
    return '<span class="FX_Pill FX_Pill--' + kind + '"' + (id ? ' id="' + esc(id) + '"' : "") + ">" + esc(s.name) + "</span>";
  }
  function typeIcon(type) {
    var key = TYPE_ICON[type] || "task";
    return '<span class="FX_Type FX_Type--' + key + '" title="' + esc(type) + '">' + icon("t-" + key) + '<span class="FX_Sr">' + esc(type) + "</span></span>";
  }
  function flag(code) { return '<span class="FX_Flag FX_Flag--' + esc(code) + '">' + icon("flag") + esc(priority(code).name) + "</span>"; }
  function due(t) {
    if (!t.due) { return ""; }
    var late = isLate(t);
    return '<span class="FX_Due' + (late ? " is-late" : "") + '">' + (late ? "Overdue · " : "Due ") + esc(dateText(t.due)) + "</span>";
  }
  function empty(iconName, title, text) {
    return '<div class="FX_Empty">' + icon(iconName) + "<b>" + esc(title) + "</b>" + (text ? "<span>" + esc(text) + "</span>" : "") + "</div>";
  }
  function options(list, selected, first) {
    var html = first ? '<option value="">' + esc(first) + "</option>" : "";
    list.forEach(function (o) {
      html += '<option value="' + esc(o.value) + '"' + (o.value === selected ? " selected" : "") + ">" + esc(o.label) + "</option>";
    });
    return html;
  }
  function plural(n, one, many) { return n + " " + (n === 1 ? one : many); }

  // Activity: comments and FX_TicketHistory rows as one list, newest first.
  function activity(comments, history) {
    return comments.map(function (c) { return { kind: "comment", ticket: c.ticket, who: c.author, created: c.created, row: c }; })
      .concat(history.map(function (h) { return { kind: "change", ticket: h.ticket, who: h.by, created: h.created, row: h }; }))
      .sort(function (a, b) { return (parseDate(b.created) || 0) - (parseDate(a.created) || 0) || (b.row.id || 0) - (a.row.id || 0); });
  }
  function historyValue(field, value) {
    if (field === "Status") { return value ? status(value).name : "None"; }
    if (field === "Priority") { return value ? priority(value).name : "None"; }
    if (field === "Assignee") { return value ? agentName(value) : "Unassigned"; }
    return value || "None";
  }
  function changeText(h) {
    return esc(historyValue(h.field, h.oldValue)) + ' <span aria-hidden="true">→</span><span class="FX_Sr"> to</span> ' + esc(historyValue(h.field, h.newValue));
  }

  // Ticket sets
  function inProject(t) { return !state.project || t.project === state.project; }
  function activeProjects() { return data.projects.filter(function (p) { return p.active; }); }
  function statusesInOrder() { return data.statuses.slice().sort(function (a, b) { return a.order - b.order; }); }
  function prioritiesInOrder() { return data.priorities.slice().sort(function (a, b) { return a.order - b.order; }); }
  function activeAgents() { return data.agents.filter(function (a) { return a.active; }); }
  function types() { return data.types && data.types.length ? data.types : TYPES; }
  function categories() { return data.categories && data.categories.length ? data.categories : CATEGORIES; }
  function resolutions() { return data.resolutions && data.resolutions.length ? data.resolutions : RESOLUTIONS; }
  function textOptions(list) { return list.map(function (x) { return { value: x, label: x }; }); }
  function agentOptions() { return activeAgents().map(function (a) { return { value: a.id, label: a.name }; }); }
  function needMe() { return state.me ? "" : "Sign in first."; }

  // Status rules: the moves listed in FX_StatusTransitions. The C# script refuses any other move; the page checks first
  // so the Board and the detail pane can say why without a round trip.
  function allowedMoves(from) {
    return (data.transitions || []).filter(function (m) { return m.from === from; }).map(function (m) { return m.to; });
  }
  function refusal(from, to) {
    var allowed = allowedMoves(from);
    if (allowed.indexOf(to) >= 0) { return ""; }
    return "Can't move from " + status(from).name + " to " + status(to).name + ". " + status(from).name +
      (allowed.length ? " can move to: " + allowed.map(function (c) { return status(c).name; }).join(", ") + "." : " has no allowed moves.");
  }

  // ---- Server bridge ----
  // The only place that talks to Mongoose. The C# method writes {"ok":true,...} or {"ok":false,"message":"..."}
  // to RESULT_VAR; the invoke callback's own value is not used (it came back as 0, EXP-131/132).
  // done(error, result, failed): on a refusal, failed is the whole result (its errors name the fields).
  function callServer(method, args, done) {
    if (typeof WSForm === "undefined") {
      done("Open this page inside the " + FORM_NAME + " Form.");
      return;
    }
    var started = Date.now();
    var finished = false;
    log("call", method, args.filter(function (a) { return a !== state.token; })); // the token stays out of the console
    var timer = setTimeout(function () {
      finished = true;
      log("timeout", method, TIMEOUT_MS + " ms");
      done("No response from " + method + " after " + TIMEOUT_MS / 1000 + " s. Try again.");
    }, TIMEOUT_MS);
    WSForm.invoke.apply(WSForm, [method].concat(args, [function () {
      WSForm.getVarValue(RESULT_VAR, function (value) {
        if (finished) { return; }
        finished = true;
        clearTimeout(timer);
        var result;
        try { result = JSON.parse(value); } catch (e) {
          log("unreadable", method, value);
          done(method + " returned unreadable data: " + String(value).slice(0, 200));
          return;
        }
        log("result", method, (Date.now() - started) + " ms", result);
        if (result && result.signin && !state.starting) { showSignIn(result.message); }
        if (!result || result.ok !== true) { done((result && result.message) || method + " failed with no message.", null, result || {}); return; }
        done(null, result);
      });
    }]));
  }

  // ---- Feature: load ----
  function loadAll() {
    if (state.busy) { return; }
    setBusy(true);
    if (!data) { view.innerHTML = '<div class="FX_Skeleton" aria-hidden="true"><span></span><span></span><span></span></div>'; }
    setStatus("Loading tickets…");
    callServer("FX_SDLoad", [state.token], function (err, result, failed) {
      setBusy(false);
      if (err && state.starting && state.startTries < START_RETRY_MS.length) {
        setTimeout(loadAll, START_RETRY_MS[state.startTries++]);
        return;
      }
      var starting = state.starting;
      state.starting = false;
      if (err && starting && failed && failed.signin) { showSignIn(failed.message); return; }
      if (err) {
        setStatus(err, "error");
        if (!data) { view.innerHTML = empty("alert", "The tickets couldn't be loaded.", "Use Refresh to try again."); }
        return;
      }
      markTickets(result.tickets);
      markComments(result.comments);
      result.history = markHistory(result.history || []);
      result.transitions = result.transitions || [];
      data = result;
      state.me = result.me;
      if (state.view === "issues" && state.selected) { revealTicket(state.selected); }
      setStatus("");
      render();
    });
  }

  // ---- Feature: session (BLD-018) ----
  function readToken() {
    try { return sessionStorage.getItem(SESSION_KEY) || ""; } catch (e) { return ""; }
  }
  function clearToken() {
    state.token = "";
    try { sessionStorage.removeItem(SESSION_KEY); } catch (e) { /* nothing stored */ }
  }

  // The sign-in screen covers the app: no session, an ended or expired one, or after Sign out.
  function showSignIn(message) {
    clearToken();
    state.signedOut = true;
    state.me = null;
    data = null;
    view.innerHTML = "";
    $("FX_GateText").textContent = message || "Sign in to see and work on tickets.";
    $("FX_App").setAttribute("inert", "");
    $("FX_Gate").hidden = false;
    $("FX_GateSignIn").focus();
  }

  function openLogin() {
    var note = $("FX_GateNote");
    if (typeof WSForm === "undefined" || typeof WSForm.generate !== "function") {
      note.textContent = "Open the FX_ServiceDeskLogin form from the Mongoose menu.";
      return;
    }
    note.textContent = "Opening the sign-in page…";
    WSForm.generate(OPEN_LOGIN_EVENT, function () { note.textContent = "The sign-in page is open in its own tab."; });
  }

  // A token written by the sign-in page after this page opened (same tab): pick it up and load.
  function retryToken() {
    var token = readToken();
    if (!token) { $("FX_GateNote").textContent = "Not signed in yet. Sign in first, then come back here."; return; }
    state.token = token;
    state.signedOut = false;
    $("FX_Gate").hidden = true;
    $("FX_App").removeAttribute("inert");
    loadAll();
  }

  function signOut() {
    if (state.editing || create || Object.keys(state.drafts).some(function (id) { return String(state.drafts[id]).trim(); })) {
      if (!window.confirm("You have unsaved changes. Sign out anyway?")) { return; }
    }
    var token = state.token;
    state.editing = ""; state.edit = null; state.drafts = {};
    callServer("FX_SDSignOut", [token], function (err) {
      if (err) { log("sign out", err); } // the token is dropped here anyway
    });
    showSignIn("You're signed out.");
  }

  // ---- Feature: change status (detail pane, board drag, Move to…) ----
  // Moving to Resolved asks for a Resolution first (the dialog calls back with it).
  function changeStatus(ticketId, newStatus, resolution) {
    var t = byKey(data.tickets, "id", ticketId);
    if (!t || t.status === newStatus || state.saving[ticketId]) { return; }
    var from = status(t.status).name, to = status(newStatus).name;
    var why = needMe() || refusal(t.status, newStatus);
    if (why) { setStatus(ticketId + " is still " + from + ". " + why, "error"); render(); return; }
    if (newStatus === RESOLVED && !resolution) { askResolution(t, newStatus); return; }
    state.saving[ticketId] = true;
    render();
    setStatus("Moving " + ticketId + " to " + to + "…");
    callServer("FX_SDSetStatus", [ticketId, newStatus, resolution || "", state.token], function (err, result) {
      delete state.saving[ticketId];
      if (err) {
        setStatus(ticketId + " is still " + from + ". " + err, "error");
        render();
        return;
      }
      saved(result, ticketId + " moved to " + to + ".");
    });
  }

  // A saved ticket from FX_SDSetStatus / FX_SDUpdateTicket: its row, its history, and a warning if a history row failed.
  function saved(result, message) {
    replaceTicket(result.ticket);
    if (result.history) { replaceHistory(result.ticket.id, result.history); }
    if (result.warning) { setStatus(message + " " + result.warning, "error"); } else { setStatus(result.message || message, "ok"); }
    render();
  }

  function replaceTicket(ticket) {
    markTickets([ticket]);
    for (var i = 0; i < data.tickets.length; i++) {
      if (data.tickets[i].id === ticket.id) { data.tickets[i] = ticket; return; }
    }
    data.tickets.push(ticket);
  }

  function replaceHistory(ticketId, rows) {
    data.history = data.history.filter(function (h) { return h.ticket !== ticketId; }).concat(markHistory(rows));
  }

  // Resolution dialog (index.html #FX_ResolveDialog)
  var resolveDialog = $("FX_ResolveDialog");
  function askResolution(t, newStatus) {
    resolveDialog.setAttribute("data-ticket", t.id);
    resolveDialog.setAttribute("data-status", newStatus);
    $("FX_ResolveTitle").textContent = "Resolve " + t.id;
    $("FX_ResolvePick").innerHTML = options(textOptions(resolutions()), "", "Choose a resolution…");
    $("FX_ResolvePick").removeAttribute("aria-invalid");
    $("FX_ResolveError").textContent = "";
    render(); // puts a status select back to the saved value while the dialog is open
    resolveDialog.showModal();
    $("FX_ResolvePick").focus();
  }
  resolveDialog.addEventListener("submit", function (e) {
    e.preventDefault();
    var pick = $("FX_ResolvePick").value;
    if (!pick) {
      $("FX_ResolveError").textContent = "Pick a resolution.";
      $("FX_ResolvePick").setAttribute("aria-invalid", "true");
      $("FX_ResolvePick").focus();
      return;
    }
    resolveDialog.close();
    changeStatus(resolveDialog.getAttribute("data-ticket"), resolveDialog.getAttribute("data-status"), pick);
  });
  $("FX_ResolvePick").addEventListener("change", function () { $("FX_ResolvePick").removeAttribute("aria-invalid"); $("FX_ResolveError").textContent = ""; });
  $("FX_ResolveCancel").addEventListener("click", function () { resolveDialog.close(); });

  // ---- Form fields (Edit mode and Create issue) ----
  // A labelled control with its error under it; the error is tied to the control with aria-describedby.
  function control(tag, id, name, attrs, inner, err) {
    var a = ' id="' + id + '" name="' + name + '"' + (attrs ? " " + attrs : "") + (err ? ' aria-invalid="true" aria-describedby="' + id + '_err"' : "");
    return tag === "input" ? "<input" + a + ">" : "<" + tag + a + ">" + inner + "</" + tag + ">";
  }
  function field(label, id, name, tag, attrs, inner, errors, hint, wide) {
    var err = errors[name];
    return '<div class="FX_Field' + (wide ? " FX_Wide" : "") + '"><label for="' + id + '">' + label + "</label>" +
      control(tag, id, name, attrs, inner, err) +
      (hint ? '<small class="FX_Hint" id="' + id + '_hint">' + esc(hint) + "</small>" : "") +
      (err ? '<p class="FX_FieldError" id="' + id + '_err">' + esc(err) + "</p>" : "") + "</div>";
  }
  // Typing in a field marked invalid clears its message (the next Save checks again).
  function clearFieldError(el) {
    if (el.getAttribute("aria-invalid") !== "true") { return; }
    el.removeAttribute("aria-invalid");
    el.removeAttribute("aria-describedby");
    var err = document.getElementById(el.id + "_err");
    if (err) { err.remove(); }
  }
  function focusError(root) {
    var bad = root.querySelector("[aria-invalid=true]");
    if (bad) { bad.focus(); }
  }

  // ---- Feature: edit a ticket (detail pane Edit mode) ----
  var EDIT_FIELDS = ["summary", "description", "assignee", "priority", "due", "category", "labels"];
  function storedValue(t, k) { return k === "due" ? String(t.due || "").slice(0, 10) : String(t[k] || ""); }

  function startEdit(t) {
    state.editing = t.id;
    state.edit = { values: {}, errors: {}, message: "" };
    EDIT_FIELDS.forEach(function (k) { state.edit.values[k] = storedValue(t, k); });
    renderDetail();
    $("FX_EditSummary").focus();
  }
  function stopEdit() { state.editing = ""; state.edit = null; }
  // Leaving Edit mode with unsaved changes would lose them: the other ticket waits until Save or Cancel.
  function editBlocks(nextId) {
    var t = state.editing && byKey(data.tickets, "id", state.editing);
    if (!t || nextId === t.id) { return false; }
    var dirty = EDIT_FIELDS.some(function (k) { return String(state.edit.values[k] || "").trim() !== storedValue(t, k); });
    if (!dirty) { stopEdit(); return false; }
    setStatus("Save or cancel your changes to " + t.id + " first.", "error");
    var form = $("FX_EditForm");
    if (form) { form.querySelector("button[type=submit]").focus(); }
    return true;
  }

  function saveEdit(form) {
    var id = state.editing, t = byKey(data.tickets, "id", id);
    if (!t) { stopEdit(); render(); return; }
    var v = state.edit.values, errors = {};
    EDIT_FIELDS.forEach(function (k) { v[k] = String(v[k] || "").trim(); });
    if (!v.summary) { errors.summary = "Summary is required."; }
    state.edit.errors = errors;
    state.edit.message = needMe();
    if (state.edit.message || Object.keys(errors).length) { renderDetail(); focusError(view); return; }
    var changed = {};
    EDIT_FIELDS.forEach(function (k) { if (v[k] !== storedValue(t, k)) { changed[k] = v[k]; } });
    if (!Object.keys(changed).length) { stopEdit(); setStatus("Nothing changed.", "ok"); render(); return; }
    var button = form.querySelector("button[type=submit]");
    button.disabled = true;
    button.textContent = "Saving…";
    callServer("FX_SDUpdateTicket", [id, JSON.stringify(changed), state.token], function (err, result, failed) {
      if (state.editing !== id) { return; }
      if (err) {
        state.edit.errors = (failed && failed.errors) || {};
        state.edit.message = err;
        renderDetail();
        focusError(view);
        return;
      }
      stopEdit();
      saved(result, id + " saved.");
    });
  }

  // ---- Feature: create a ticket (top bar Create issue, #FX_CreateDialog) ----
  var createDialog = $("FX_CreateDialog");
  var create = null; // { values, errors, message } while the dialog is open
  var CREATE_FIELDS = ["project", "type", "summary", "description", "priority", "assignee", "reporter", "due", "category", "labels"];

  function openCreate() {
    if (!data) { return; }
    var firstProject = state.project || (activeProjects()[0] || {}).key || "";
    create = { values: { project: firstProject, type: types()[0], summary: "", description: "", priority: "MEDIUM", assignee: "",
      reporter: state.me || "", due: "", category: "", labels: "" }, errors: {}, message: "" };
    renderCreate();
    createDialog.showModal();
    $("FX_NewSummary").focus();
  }

  function nextNumberHint(key) {
    var p = project(key);
    return p ? "Gets the next number: " + p.key + "-" + p.nextNo : "";
  }

  function renderCreate() {
    var v = create.values, e = create.errors, req = ' <i>required</i>';
    var projects = activeProjects().map(function (p) { return { value: p.key, label: p.name + " (" + p.key + ")" }; });
    var prios = prioritiesInOrder().map(function (p) { return { value: p.code, label: p.name }; });
    createDialog.innerHTML =
      '<form class="FX_DialogForm" id="FX_CreateForm" novalidate>' +
        '<div class="FX_DialogHead"><h2 id="FX_CreateTitle">Create issue</h2>' +
          '<button type="button" class="FX_IconBtn" data-close-dialog aria-label="Close">' + icon("close") + "</button></div>" +
        '<div class="FX_DialogBody">' +
          (create.message ? '<p class="FX_FormError" role="alert">' + esc(create.message) + "</p>" : "") +
          '<div class="FX_FormGrid">' +
            field("Project" + req, "FX_NewProject", "project", "select", 'class="FX_Select"', options(projects, v.project, "Choose a project…"), e, nextNumberHint(v.project)) +
            field("Type", "FX_NewType", "type", "select", 'class="FX_Select"', options(textOptions(types()), v.type), e) +
            field("Summary" + req, "FX_NewSummary", "summary", "input", 'class="FX_Input" type="text" maxlength="200" autocomplete="off" value="' + esc(v.summary) + '"', "", e, "", true) +
            field("Description", "FX_NewDescription", "description", "textarea", 'class="FX_Text" maxlength="2000"', esc(v.description), e, "", true) +
            field("Priority", "FX_NewPriority", "priority", "select", 'class="FX_Select"', options(prios, v.priority), e) +
            field("Assignee", "FX_NewAssignee", "assignee", "select", 'class="FX_Select"', options(agentOptions(), v.assignee, "Unassigned"), e) +
            field("Reporter" + req, "FX_NewReporter", "reporter", "select", 'class="FX_Select"', options(agentOptions(), v.reporter, "Choose a reporter…"), e) +
            field("Due date", "FX_NewDue", "due", "input", 'class="FX_Input" type="date" value="' + esc(v.due) + '"', "", e) +
            field("Category", "FX_NewCategory", "category", "select", 'class="FX_Select"', options(textOptions(categories()), v.category, "None"), e) +
            field("Labels", "FX_NewLabels", "labels", "input", 'class="FX_Input" type="text" maxlength="200" autocomplete="off" placeholder="e.g. laptop, urgent…" value="' + esc(v.labels) + '"', "", e, "Separate labels with commas.") +
          "</div></div>" +
        '<div class="FX_DialogFoot"><button type="button" class="FX_Ghost" data-close-dialog>Cancel</button>' +
          '<button type="submit" class="FX_Btn">Create</button></div>' +
      "</form>";
  }

  function submitCreate(form) {
    var v = create.values, errors = {};
    CREATE_FIELDS.forEach(function (k) { v[k] = String(v[k] || "").trim(); });
    if (!v.project) { errors.project = "Pick a project."; }
    if (!v.summary) { errors.summary = "Summary is required."; }
    if (!v.reporter) { errors.reporter = "Pick a reporter."; }
    create.errors = errors;
    create.message = needMe();
    if (create.message || Object.keys(errors).length) { renderCreate(); focusError(createDialog); return; }
    var button = form.querySelector("button[type=submit]");
    button.disabled = true;
    button.textContent = "Creating…";
    callServer("FX_SDCreateTicket", [JSON.stringify(v), state.token], function (err, result, failed) {
      if (!create) { return; }
      if (err) {
        create.errors = (failed && failed.errors) || {};
        create.message = err;
        renderCreate();
        focusError(createDialog);
        return;
      }
      replaceTicket(result.ticket);
      if (result.projects) { data.projects = result.projects; }
      create = null;
      createDialog.close();
      setStatus(result.ticket.id + " created.", "ok");
      openTicket(result.ticket.id);
    });
  }

  createDialog.addEventListener("input", function (e) {
    if (create && e.target.name) { create.values[e.target.name] = e.target.value; delete create.errors[e.target.name]; clearFieldError(e.target); }
  });
  createDialog.addEventListener("change", function (e) {
    if (!create || !e.target.name) { return; }
    create.values[e.target.name] = e.target.value;
    delete create.errors[e.target.name];
    clearFieldError(e.target);
    if (e.target.name === "project") { // the hint shows the number the ticket will get
      var hint = $("FX_NewProject_hint");
      if (hint) { hint.textContent = nextNumberHint(e.target.value); } else { renderCreate(); $("FX_NewProject").focus(); }
    }
  });
  createDialog.addEventListener("submit", function (e) { e.preventDefault(); submitCreate(e.target); });
  // Close button, Cancel and Escape close it; a click beside the dialog doesn't, so typed text isn't lost by accident.
  createDialog.addEventListener("click", function (e) {
    if (e.target.closest("[data-close-dialog]")) { createDialog.close(); }
  });
  createDialog.addEventListener("close", function () { create = null; createDialog.innerHTML = ""; $("FX_CreateBtn").focus(); });

  // ---- Feature: add comment ----
  function addComment(form) {
    var ticketId = form.getAttribute("data-ticket");
    var box = form.querySelector("textarea");
    var internal = form.querySelector("input[type=checkbox]").checked;
    var error = form.querySelector(".FX_FieldError");
    var text = box.value.trim();
    if (!text) { error.textContent = "Write a comment first."; box.focus(); return; }
    if (!state.me) { error.textContent = "Sign in before commenting."; return; }
    error.textContent = "";
    var button = form.querySelector("button[type=submit]");
    button.disabled = true;
    button.textContent = "Adding…";
    callServer("FX_SDAddComment", [ticketId, text, internal ? "1" : "0", state.token], function (err, result) {
      if (err) {
        button.disabled = false;
        button.textContent = "Add comment";
        error.textContent = "The comment wasn't added. " + err;
        return;
      }
      data.comments = data.comments.filter(function (c) { return c.ticket !== ticketId; }).concat(markComments(result.comments));
      delete state.drafts[ticketId];
      setStatus("Comment added to " + ticketId + ".", "ok");
      render();
      var list = $("FX_CommentList");
      if (list) { list.lastElementChild && list.lastElementChild.scrollIntoView({ block: "nearest" }); }
    });
  }

  // ---- Render: frame ----
  function render() {
    if (!data) { return; }
    renderFrame();
    if (state.view === "work") { renderWork(); }
    else if (state.view === "projects") { renderProjects(); }
    else if (state.view === "issues") { renderIssues(); }
    else if (state.view === "dashboard") { renderDashboard(); }
    else { renderBoard(); }
    savePrefs();
  }

  function renderFrame() {
    document.querySelectorAll(".FX_Nav a").forEach(function (a) {
      if (a.getAttribute("data-view") === state.view) { a.setAttribute("aria-current", "page"); } else { a.removeAttribute("aria-current"); }
    });
    var open = data.tickets.filter(isOpen).length;
    $("FX_OpenCount").innerHTML = open + '<span class="FX_Sr"> open</span>';
    var p = state.project && project(state.project);
    $("FX_Crumb").textContent = VIEWS[state.view] + (p && (state.view === "issues" || state.view === "board") ? " · " + p.name : "");
    document.title = VIEWS[state.view] + " · Service Desk";

    var projects = activeProjects();
    $("FX_ProjectList").innerHTML = projects.length ? projects.map(function (pr) {
      return '<li><button type="button" data-project="' + esc(pr.key) + '" aria-pressed="' + (pr.key === state.project) + '" title="' + esc(pr.name) + '">' +
        '<span class="FX_Dot" style="background:' + projectColor(pr.key) + '"></span><span class="FX_Name">' + esc(pr.name) + '</span><span class="FX_Key">' + esc(pr.key) + "</span></button></li>";
    }).join("") : '<li class="FX_SideEmpty">No projects yet. A lead adds them in the FX_Projects form.</li>';

    var me = agent(state.me);
    $("FX_Me").innerHTML = avatar(state.me || "") + "<div>" +
      "<b>" + esc(me ? me.name : state.me || "") + "</b><small>" + esc(me ? me.role + (me.team ? " · " + me.team : "") : "") + "</small></div>" +
      '<button type="button" class="FX_IconBtn" id="FX_SignOut" aria-label="Sign out" title="Sign out">' + icon("signout") + "</button>";
    $("FX_TopAvatar").innerHTML = me ? esc(initials(me.name)) : "";
    $("FX_TopAvatar").style.background = me ? avatarColor(me.id) : "";
  }

  // ---- Render: My work ----
  function renderWork() {
    var now = new Date(), today = startOfDay(now), wkStart = weekStart(now), wkEnd = addDays(wkStart, 7);
    var me = agent(state.me);
    var mine = data.tickets.filter(function (t) { return state.me && t.assignee === state.me; });
    var mineOpen = mine.filter(isOpen);
    var dueWeek = mineOpen.filter(function (t) { var d = parseDate(t.due); return d && d >= wkStart && d < wkEnd; });
    var resolvedWeek = mine.filter(function (t) { var d = parseDate(t.resolvedOn); return isDone(t) && d && d >= wkStart && d < wkEnd; });
    var late = mineOpen.filter(isLate);
    var hour = now.getHours();
    var hello = hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";
    var first = me ? me.name.split(" ")[0] : "";

    function kpi(kind, iconName, label, value, hot) {
      return '<div class="FX_Card FX_Kpi FX_Kpi--' + kind + (hot ? " is-hot" : "") + '"><span class="FX_KpiIcon">' + icon(iconName) + "</span><span>" + esc(label) + "</span><b>" + (state.me ? value : "–") + "</b></div>";
    }

    var queueCat = state.queueTab === "doing" ? "In progress" : "To do";
    var queue = data.tickets.filter(function (t) { return status(t.status).category === queueCat; }).sort(byQueue);
    var todoCount = data.tickets.filter(function (t) { return status(t.status).category === "To do"; }).length;
    var doingCount = data.tickets.filter(function (t) { return status(t.status).category === "In progress"; }).length;
    var unassigned = data.tickets.filter(function (t) { return isOpen(t) && !t.assignee; })
      .sort(function (a, b) { return (parseDate(a.created) || 0) - (parseDate(b.created) || 0); }).slice(0, 5);
    var recent = activity(data.comments, data.history).slice(0, RECENT_ACTIVITY);

    view.innerHTML =
      '<div class="FX_Hello"><div><p>' + esc(fmtToday.format(now)) + "</p><h1>" + esc(hello + (first ? ", " + first : "")) + "</h1></div>" +
      "</div>" +
      '<section class="FX_Kpis" aria-label="Your numbers">' +
        kpi("mine", "inbox", "Assigned to me", mineOpen.length) +
        kpi("due", "clock", "Due this week", dueWeek.length) +
        kpi("resolved", "check", "Resolved this week", resolvedWeek.length) +
        kpi("late", "alert", "Overdue", late.length, late.length > 0) +
      "</section>" +
      '<div class="FX_WorkGrid">' +
        '<section class="FX_Card" aria-labelledby="FX_QueueTitle"><div class="FX_CardHead"><h2 id="FX_QueueTitle">Team queue</h2>' +
          '<a class="FX_Link" href="#issues" data-go="issues">View all issues</a></div>' +
          '<div class="FX_Tabs FX_Tabs--card" role="group" aria-label="Team queue">' +
            '<button type="button" data-queue="todo" aria-pressed="' + (state.queueTab === "todo") + '">To do<span class="FX_Count">' + todoCount + "</span></button>" +
            '<button type="button" data-queue="doing" aria-pressed="' + (state.queueTab === "doing") + '">In progress<span class="FX_Count">' + doingCount + "</span></button>" +
          "</div>" +
          (queue.length ? '<ul class="FX_Rows">' + queue.slice(0, 8).map(queueRow).join("") + "</ul>"
            : empty("check", "Nothing here.", queueCat === "To do" ? "No tickets are waiting to be picked up." : "Nobody is working on a ticket right now.")) +
        "</section>" +
        '<div class="FX_Stack">' +
          '<section class="FX_Card" aria-labelledby="FX_UnTitle"><div class="FX_CardHead"><h2 id="FX_UnTitle">Unassigned</h2></div>' +
            (unassigned.length ? unassigned.map(function (t) {
              return '<div class="FX_Mini">' + typeIcon(t.type) + '<p><button type="button" class="FX_Link" data-open="' + esc(t.id) + '">' + esc(t.id) + "</button> " +
                '<q>' + esc(t.summary) + "</q><small>Opened " + esc(ago(t.created)) + " · " + esc(priority(t.priority).name) + "</small></p></div>";
            }).join("") : empty("check", "Every open ticket has an owner.")) +
          "</section>" +
          '<section class="FX_Card" aria-labelledby="FX_ActTitle"><div class="FX_CardHead"><h2 id="FX_ActTitle">Recent activity</h2></div>' +
            (recent.length ? recent.map(function (a) {
              var on = ' on <button type="button" class="FX_Link" data-open="' + esc(a.ticket) + '">' + esc(a.ticket) + "</button>";
              return '<div class="FX_Mini">' + avatar(a.who, "s") + "<p><b>" + esc(agentName(a.who)) + "</b>" +
                (a.kind === "comment" ? " commented" + on + "<q>" + esc(a.row.text) + "</q>" : " changed " + esc(a.row.field.toLowerCase()) + on + "<q>" + changeText(a.row) + "</q>") +
                "<small>" + esc(ago(a.created)) + (a.kind === "comment" && a.row.internal ? ' · <span class="FX_Internal">Internal</span>' : "") + "</small></p></div>";
            }).join("") : empty("chat", "No activity yet.", "Changes and comments show here.")) +
          "</section>" +
        "</div>" +
      "</div>" +
      '<section class="FX_Section" aria-labelledby="FX_YpTitle"><h2 id="FX_YpTitle">Your projects</h2>' +
        (activeProjects().length ? '<div class="FX_ProjectsRow">' + activeProjects().map(projectCard).join("") + "</div>"
          : empty("projects", "No projects yet.", "A lead adds projects in the FX_Projects form; they show here.")) + "</section>";
  }

  function queueRow(t) {
    return '<li><button type="button" class="FX_Row" data-open="' + esc(t.id) + '">' + typeIcon(t.type) +
      '<span class="FX_RowMain"><b>' + esc(t.summary) + '</b><span class="FX_Id">' + esc(t.id) + " · " + esc((project(t.project) || {}).name || t.project) + "</span></span>" +
      statusPill(t.status) + (due(t) || '<span class="FX_Due">No due date</span>') + avatar(t.assignee, "s") + "</button></li>";
  }

  // ---- Render: Projects ----
  function projectCard(p) {
    var tickets = data.tickets.filter(function (t) { return t.project === p.key; });
    var open = tickets.filter(isOpen).length, late = tickets.filter(isLate).length;
    return '<button type="button" class="FX_Project" data-project-card="' + esc(p.key) + '">' +
      '<span class="FX_ProjectTop"><span class="FX_ProjectBadge" style="background:' + projectColor(p.key) + '">' + esc(p.key) + "</span>" +
      "<span><b>" + esc(p.name) + "</b><small>" + esc(p.key) + "</small></span></span>" +
      (p.description ? "<p>" + esc(p.description) + "</p>" : "") +
      '<span class="FX_ProjectLead">' + (p.lead ? avatar(p.lead, "s") + "Lead: " + esc(agentName(p.lead)) : "No lead") + "</span>" +
      '<span class="FX_ProjectStats"><span><b>' + open + "</b> open</span><span" + (late ? ' class="is-late"' : "") + "><b>" + late + "</b> overdue</span></span></button>";
  }

  function renderProjects() {
    var list = activeProjects();
    view.innerHTML = '<div class="FX_ViewHead"><h1>Projects</h1></div>' +
      (list.length ? '<div class="FX_ProjectsRow FX_ProjectsRow--page">' + list.map(projectCard).join("") + "</div>"
        : empty("projects", "No active projects.", "Add one in the FX_Projects Form."));
  }

  // ---- Render: Issues ----
  function issueTabs() {
    var base = data.tickets.filter(inProject), week = addDays(new Date(), -7);
    return {
      all: base,
      mine: base.filter(function (t) { return state.me && t.assignee === state.me; }),
      recent: base.filter(function (t) { var d = parseDate(t.updated); return d && d >= week; }),
      resolved: base.filter(isDone)
    };
  }

  function matchesSearch(t, q) {
    if (!q) { return true; }
    q = q.toLowerCase();
    return t.id.toLowerCase().indexOf(q) >= 0 || String(t.summary).toLowerCase().indexOf(q) >= 0;
  }

  function filteredIssues() {
    var f = state.issues;
    var list = issueTabs()[f.tab] || [];
    var total = list.length;
    list = list.filter(function (t) {
      if (!matchesSearch(t, f.q)) { return false; }
      if (f.status && t.status !== f.status) { return false; }
      if (f.priority && t.priority !== f.priority) { return false; }
      if (f.assignee === "@me" && t.assignee !== state.me) { return false; }
      if (f.assignee === "@none" && t.assignee) { return false; }
      if (f.assignee && f.assignee.charAt(0) !== "@" && t.assignee !== f.assignee) { return false; }
      return true;
    }).sort(byUpdated);
    return { list: list, total: total };
  }

  function renderIssues() {
    var f = state.issues, tabs = issueTabs(), p = state.project && project(state.project);
    var tabDefs = [["all", "All issues"], ["mine", "Assigned to me"], ["recent", "Recently updated"], ["resolved", "Resolved"]];
    view.innerHTML =
      '<div class="FX_ViewHead"><h1>' + (p ? esc(p.name) + " issues" : "Issues") + "</h1>" +
        (p ? '<button type="button" class="FX_Ghost" data-clear-project>Show all projects</button>' : "") + "</div>" +
      '<div class="FX_Tabs" role="group" aria-label="Issue lists">' + tabDefs.map(function (d) {
        return '<button type="button" data-tab="' + d[0] + '" aria-pressed="' + (f.tab === d[0]) + '">' + d[1] + '<span class="FX_Count">' + tabs[d[0]].length + "</span></button>";
      }).join("") + "</div>" +
      '<div class="FX_Filters">' +
        '<label class="FX_Sr" for="FX_IssueQ">Search issues</label><input id="FX_IssueQ" class="FX_Input" type="search" placeholder="Search ID or summary…" autocomplete="off" spellcheck="false" value="' + esc(f.q) + '">' +
        '<label class="FX_Sr" for="FX_IssueStatus">Status</label><select id="FX_IssueStatus" class="FX_Select" data-filter="status">' +
          options(statusesInOrder().map(function (s) { return { value: s.code, label: s.name }; }), f.status, "Any status") + "</select>" +
        '<label class="FX_Sr" for="FX_IssuePriority">Priority</label><select id="FX_IssuePriority" class="FX_Select" data-filter="priority">' +
          options(prioritiesInOrder().map(function (s) { return { value: s.code, label: s.name }; }), f.priority, "Any priority") + "</select>" +
        '<label class="FX_Sr" for="FX_IssueAssignee">Assignee</label><select id="FX_IssueAssignee" class="FX_Select" data-filter="assignee">' +
          options([{ value: "@me", label: "Me" }, { value: "@none", label: "Unassigned" }].concat(data.agents.map(function (a) { return { value: a.id, label: a.name }; })), f.assignee, "Anyone") + "</select>" +
        '<span class="FX_Shown" id="FX_Shown" aria-live="polite"></span>' +
      "</div>" +
      '<div class="FX_Split"><section class="FX_Card FX_List" aria-label="Tickets"><ul class="FX_Rows" id="FX_IssueList"></ul></section>' +
      '<section class="FX_Card FX_Detail" id="FX_DetailPane" aria-label="Ticket details"></section></div>';
    renderIssueList();
  }

  function renderIssueList() {
    var r = filteredIssues();
    $("FX_Shown").textContent = "Showing " + r.list.length + " of " + r.total;
    if (!r.list.some(function (t) { return t.id === state.selected; })) { state.selected = r.list.length ? r.list[0].id : ""; }
    $("FX_IssueList").innerHTML = r.list.length ? r.list.map(function (t) {
      return '<li><button type="button" class="FX_Item" data-select="' + esc(t.id) + '" aria-current="' + (t.id === state.selected) + '">' + typeIcon(t.type) +
        '<span class="FX_RowTitle" title="' + esc(t.summary) + '">' + esc(t.summary) + "</span>" + avatar(t.assignee, "s") +
        '<span class="FX_ItemMeta"><span class="FX_Id">' + esc(t.id) + "</span>" + flag(t.priority) + statusPill(t.status) + due(t) + "</span></button></li>";
    }).join("") : "<li>" + empty("search", "No tickets match.", "Change the tab, search or filters.") + "</li>";
    renderDetail();
  }

  function renderDetail() {
    var pane = $("FX_DetailPane");
    var t = state.selected && byKey(data.tickets, "id", state.selected);
    if (!t) { pane.innerHTML = empty("issues", "Select a ticket", "Its details and activity show here."); return; }
    if (state.editing && state.editing !== t.id) { stopEdit(); }
    var p = project(t.project), saving = !!state.saving[t.id], editing = state.editing === t.id;
    var items = activity(data.comments.filter(function (c) { return c.ticket === t.id; }), data.history.filter(function (h) { return h.ticket === t.id; }));
    var labels = String(t.labels || "").split(",").map(function (s) { return s.trim(); }).filter(Boolean);
    var allowed = allowedMoves(t.status);
    function fact(label, value) { return "<dt>" + label + "</dt><dd>" + (value || '<span class="FX_Id">None</span>') + "</dd>"; }
    var statusOptions = statusesInOrder().map(function (s) {
      var ok = s.code === t.status || allowed.indexOf(s.code) >= 0;
      return { value: s.code, label: s.name + (ok ? "" : " (not allowed)") };
    });

    pane.innerHTML =
      '<div class="FX_DetailCrumb"><span>' + esc(p ? p.name : t.project) + '</span><span aria-hidden="true">/</span><span>' + esc(t.id) + "</span></div>" +
      '<div class="FX_DetailHead"><h2 class="FX_DetailTitle">' + esc(t.summary) + "</h2>" +
        '<label class="FX_Field"><span>Status</span><select class="FX_Select" data-set-status="' + esc(t.id) + '"' + (saving ? " disabled" : "") + ">" +
          options(statusOptions, t.status) + "</select></label>" +
        (editing ? "" : '<button type="button" class="FX_Ghost FX_EditBtn" data-edit="' + esc(t.id) + '">' + icon("edit") + "<span>Edit</span></button>") + "</div>" +
      '<div class="FX_DetailPills">' + statusPill(t.status) + '<span class="FX_Pill FX_Pill--plain">' + typeIcon(t.type) + esc(t.type) + "</span>" + flag(t.priority) + (saving ? '<span class="FX_Id">Saving…</span>' : "") + "</div>" +
      (editing ? editForm(t) :
      '<div class="FX_DetailBody"><div>' +
        "<h3>Description</h3>" + (t.description ? '<p class="FX_Desc">' + esc(t.description) + "</p>" : '<p class="FX_Desc FX_Id">No description.</p>') +
        activitySection(t, items) +
        "</div>" +
        '<dl class="FX_Facts">' +
          fact("Assignee", t.assignee ? avatar(t.assignee, "s") + esc(agentName(t.assignee)) : "") +
          fact("Priority", flag(t.priority)) +
          fact("Reporter", t.reporter ? avatar(t.reporter, "s") + esc(agentName(t.reporter)) : "") +
          fact("Due date", t.due ? due(t) : "") +
          fact("Category", t.category ? '<span class="FX_Chip">' + esc(t.category) + "</span>" : "") +
          fact("Labels", labels.map(function (l) { return '<span class="FX_Chip">' + esc(l) + "</span>"; }).join(" ")) +
          (t.resolution ? fact("Resolution", esc(t.resolution) + (t.resolvedOn ? " · " + esc(dateText(t.resolvedOn)) : "")) : "") +
        "</dl></div>") +
      '<p class="FX_DetailFoot">Created ' + esc(dateText(t.created, true)) + (t.updated ? " · Updated " + esc(ago(t.updated)) : "") + "</p>";
  }

  function editForm(t) {
    var v = state.edit.values, e = state.edit.errors;
    var prios = prioritiesInOrder().map(function (p) { return { value: p.code, label: p.name }; });
    var assignees = agentOptions();
    if (v.assignee && !assignees.some(function (a) { return a.value === v.assignee; })) { assignees.push({ value: v.assignee, label: agentName(v.assignee) + " (inactive)" }); }
    return '<form class="FX_EditForm" id="FX_EditForm" data-ticket="' + esc(t.id) + '" novalidate aria-label="Edit ' + esc(t.id) + '">' +
      (state.edit.message ? '<p class="FX_FormError" role="alert">' + esc(state.edit.message) + "</p>" : "") +
      '<div class="FX_FormGrid">' +
        field('Summary <i>required</i>', "FX_EditSummary", "summary", "input", 'class="FX_Input" type="text" maxlength="200" autocomplete="off" value="' + esc(v.summary) + '"', "", e, "", true) +
        field("Description", "FX_EditDescription", "description", "textarea", 'class="FX_Text" maxlength="2000"', esc(v.description), e, "", true) +
        field("Assignee", "FX_EditAssignee", "assignee", "select", 'class="FX_Select"', options(assignees, v.assignee, "Unassigned"), e) +
        field("Priority", "FX_EditPriority", "priority", "select", 'class="FX_Select"', options(prios, v.priority), e) +
        field("Due date", "FX_EditDue", "due", "input", 'class="FX_Input" type="date" value="' + esc(v.due) + '"', "", e) +
        field("Category", "FX_EditCategory", "category", "select", 'class="FX_Select"', options(textOptions(categories()), v.category, "None"), e) +
        field("Labels", "FX_EditLabels", "labels", "input", 'class="FX_Input" type="text" maxlength="200" autocomplete="off" value="' + esc(v.labels) + '"', "", e, "Separate labels with commas.", true) +
      "</div>" +
      '<div class="FX_EditBar"><button type="button" class="FX_Ghost" data-cancel-edit>Cancel</button><button type="submit" class="FX_Btn">Save changes</button></div>' +
      "</form>";
  }

  function activitySection(t, items) {
    return '<section class="FX_Comments" aria-labelledby="FX_ActHead"><h3 id="FX_ActHead">Activity (' + items.length + ")</h3>" +
      '<form class="FX_Compose" data-ticket="' + esc(t.id) + '" novalidate>' +
        '<label class="FX_Sr" for="FX_CommentBox">Add a comment</label>' +
        '<textarea id="FX_CommentBox" class="FX_Text" name="comment" maxlength="2000" placeholder="Add a comment…">' + esc(state.drafts[t.id] || "") + "</textarea>" +
        '<p class="FX_FieldError" aria-live="polite"></p>' +
        '<div class="FX_ComposeBar"><label class="FX_Switch"><input type="checkbox" name="internal"> Internal (agents only)</label>' +
        '<button type="submit" class="FX_Btn">Add comment</button></div></form>' +
      '<ol class="FX_Activity" id="FX_CommentList">' + items.map(function (a) {
        if (a.kind === "comment") {
          var c = a.row;
          return '<li class="FX_Comment' + (c.internal ? " is-internal" : "") + '">' + avatar(c.author, "s") + "<div><b>" + esc(agentName(c.author)) + "</b> <small>" + esc(ago(c.created)) + "</small>" +
            (c.internal ? ' <span class="FX_Internal">Internal</span>' : "") + "<p>" + esc(c.text) + "</p></div></li>";
        }
        var h = a.row;
        return '<li class="FX_Change"><span class="FX_ChangeIcon">' + icon(h.field === "Status" ? "board" : h.field === "Priority" ? "flag" : "work") + "</span><div><b>" + esc(agentName(h.by)) + "</b> changed " +
          esc(h.field.toLowerCase()) + ' <span class="FX_ChangeValues">' + changeText(h) + "</span> <small>" + esc(ago(h.created)) + "</small></div></li>";
      }).join("") +
        '<li class="FX_Change"><span class="FX_ChangeIcon">' + icon("issues") + "</span><div><b>" + esc(agentName(t.reporter || t.createdBy)) + "</b> created the ticket <small>" + esc(ago(t.created)) + "</small></div></li>" +
      "</ol></section>";
  }

  // ---- Render: Board ----
  function boardTickets() {
    var f = state.board, cutoff = addDays(startOfDay(new Date()), -CLOSED_DAYS);
    return data.tickets.filter(function (t) {
      if (!inProject(t) || !matchesSearch(t, f.q)) { return false; }
      if (f.assignee === "@me" && t.assignee !== state.me) { return false; }
      if (f.assignee === "@none" && t.assignee) { return false; }
      if (f.type && t.type !== f.type) { return false; }
      if (status(t.status).closed) { var d = parseDate(t.resolvedOn || t.updated); return !!d && d >= cutoff; }
      return true;
    });
  }

  function renderBoard() {
    var f = state.board, p = state.project && project(state.project);
    view.innerHTML =
      '<div class="FX_ViewHead"><h1>' + (p ? esc(p.name) + " board" : "Board") + "</h1>" +
        (p ? '<button type="button" class="FX_Ghost" data-clear-project>Show all projects</button>' : "") + "</div>" +
      '<div class="FX_Filters">' +
        '<label class="FX_Sr" for="FX_BoardQ">Search the board</label><input id="FX_BoardQ" class="FX_Input" type="search" placeholder="Search ID or summary…" autocomplete="off" spellcheck="false" value="' + esc(f.q) + '">' +
        '<label class="FX_Sr" for="FX_BoardAssignee">Assignee</label><select id="FX_BoardAssignee" class="FX_Select" data-board-filter="assignee">' +
          options([{ value: "@me", label: "Me" }, { value: "@none", label: "Unassigned" }], f.assignee, "Anyone") + "</select>" +
        '<label class="FX_Sr" for="FX_BoardType">Type</label><select id="FX_BoardType" class="FX_Select" data-board-filter="type">' +
          options(textOptions(types()), f.type, "Any type") + "</select>" +
        '<span class="FX_Shown">Drag a card, or use its menu, to change its status. Only the allowed moves work.</span>' +
      "</div>" +
      '<div class="FX_Board" id="FX_BoardCols"></div>';
    renderBoardCols();
  }

  function renderBoardCols() {
    var tickets = boardTickets();
    $("FX_BoardCols").innerHTML = statusesInOrder().map(function (s) {
      var cards = tickets.filter(function (t) { return t.status === s.code; }).sort(byQueue);
      return '<section class="FX_Col" data-col="' + esc(s.code) + '" aria-labelledby="FX_Col_' + esc(s.code) + '">' +
        '<div class="FX_ColHead">' + statusPill(s.code, "FX_Col_" + s.code) +
        (s.closed ? "<small>Last " + CLOSED_DAYS + " days</small>" : "") + '<span class="FX_Count">' + cards.length + "</span></div>" +
        '<ul class="FX_ColBody">' + (cards.length ? cards.map(boardCard).join("") : '<li class="FX_ColEmpty">No tickets</li>') + "</ul></section>";
    }).join("");
  }

  function boardCard(t) {
    var p = project(t.project);
    return '<li class="FX_Ticket' + (state.saving[t.id] ? " is-saving" : "") + '" draggable="true" data-card="' + esc(t.id) + '">' +
      '<div class="FX_TicketTop"><span class="FX_Dot" style="background:' + projectColor(t.project) + '"></span>' + esc(p ? p.name : t.project) +
        '<button type="button" class="FX_IconBtn" data-move="' + esc(t.id) + '" aria-haspopup="menu" aria-expanded="false" aria-label="Move ' + esc(t.id) + ' to another status">' + icon("dots") + "</button></div>" +
      '<button type="button" class="FX_Link" data-open="' + esc(t.id) + '">' + esc(t.summary) + "</button>" +
      (t.category ? '<span><span class="FX_Chip">' + esc(t.category) + "</span></span>" : "") +
      '<div class="FX_TicketFoot">' + typeIcon(t.type) + '<span class="FX_Id">' + esc(t.id) + "</span>" + flag(t.priority) + due(t) + avatar(t.assignee, "s") + "</div></li>";
  }

  // ---- Render: Dashboard ----
  // Everything is counted here from the load (tickets with created/resolved dates, statuses, priorities, agents).
  // The period (7/30/90 days, ending today) and the Project filter apply to every card and chart.
  // Overdue here uses the request's rule: open, and past its due date or older than its priority's ResolveHours.
  // My work, Issues and Board keep phase 3's meaning (past the due date). "Open now" and "Overdue" at the start of the
  // period are estimates from created/resolved dates (the history table only starts with phase 4).
  function dashLate(t, when) {
    var due = parseDate(t.due);
    if (due && due < startOfDay(when)) { return true; }
    var created = parseDate(t.created), hours = priority(t.priority).resolveHours;
    return !!created && hours > 0 && created.getTime() + hours * 3600000 < when.getTime();
  }
  function openAt(t, when) {
    var created = parseDate(t.created), resolved = parseDate(t.resolvedOn);
    return !!created && created < when && (!resolved || resolved >= when) && (isOpen(t) || !!resolved);
  }
  function between(d, from, to) { return !!d && d >= from && d < to; }
  function dayKey(d) { return d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate(); }

  function dashNumbers() {
    var days = state.dashDays, now = new Date(), today = startOfDay(now);
    var end = addDays(today, 1), start = addDays(today, -(days - 1)), prevStart = addDays(start, -days);
    var base = data.tickets.filter(inProject);
    var n = {
      days: days, now: now, start: start, end: end, base: base,
      created: base.filter(function (t) { return between(parseDate(t.created), start, end); }),
      createdPrev: base.filter(function (t) { return between(parseDate(t.created), prevStart, start); }),
      resolved: base.filter(function (t) { return between(parseDate(t.resolvedOn), start, end); }),
      resolvedPrev: base.filter(function (t) { return between(parseDate(t.resolvedOn), prevStart, start); }),
      open: base.filter(isOpen),
      openPrev: base.filter(function (t) { return openAt(t, start); })
    };
    n.late = n.open.filter(function (t) { return dashLate(t, now); });
    n.latePrev = n.openPrev.filter(function (t) { return dashLate(t, start); });
    // per day, for the line chart
    var index = {};
    n.series = [];
    for (var i = 0; i < days; i++) {
      var d = addDays(start, i);
      index[dayKey(d)] = i;
      n.series.push({ day: d, created: 0, resolved: 0 });
    }
    n.created.forEach(function (t) { var i = index[dayKey(parseDate(t.created))]; if (i != null) { n.series[i].created++; } });
    n.resolved.forEach(function (t) { var i = index[dayKey(parseDate(t.resolvedOn))]; if (i != null) { n.series[i].resolved++; } });
    return n;
  }

  var lastDash = null; // the numbers on screen, reused by the chart hover (no recount per pointer move)
  function renderDashboard() {
    var n = lastDash = dashNumbers(), p = state.project && project(state.project);
    var span = "previous " + n.days + " days";
    view.innerHTML =
      '<div class="FX_ViewHead"><div><h1>Dashboard</h1><p class="FX_Sub">' + esc(p ? p.name : "All projects") + " · " +
        esc(fmtShort.format(n.start)) + " – " + esc(fmtShort.format(n.now)) + "</p></div></div>" +
      '<div class="FX_Filters">' +
        '<div class="FX_Segment" role="group" aria-label="Period">' + DASH_PERIODS.map(function (d) {
          return '<button type="button" data-dash-days="' + d + '" aria-pressed="' + (state.dashDays === d) + '">Last ' + d + " days</button>";
        }).join("") + "</div>" +
        '<label class="FX_Sr" for="FX_DashProject">Project</label><select id="FX_DashProject" class="FX_Select" data-dash-project>' +
          options(activeProjects().map(function (x) { return { value: x.key, label: x.name }; }), state.project, "All projects") + "</select>" +
      "</div>" +
      '<section class="FX_Kpis FX_Kpis--dash" aria-label="Key numbers">' +
        dashKpi("total", "issues", "Total tickets", "Created in the period", n.created.length, n.createdPrev.length, span, 0) +
        dashKpi("resolved", "check", "Resolved", "Resolved in the period", n.resolved.length, n.resolvedPrev.length, span, 1) +
        dashKpi("open", "inbox", "Open now", "Not in a Done status", n.open.length, n.openPrev.length, n.days + " days ago (estimate)", -1) +
        dashKpi("late", "alert", "Overdue", "Open, and past due or older than the priority's resolve time", n.late.length, n.latePrev.length, n.days + " days ago (estimate)", -1) +
      "</section>" +
      '<div class="FX_DashGrid">' +
        '<section class="FX_Card FX_Chart" aria-labelledby="FX_LineTitle">' + lineChart(n) + "</section>" +
        '<section class="FX_Card FX_Chart" aria-labelledby="FX_DonutTitle">' + donutChart(n) + "</section>" +
        '<section class="FX_Card FX_Chart" aria-labelledby="FX_OldTitle">' + oldestOpen(n) + "</section>" +
        '<section class="FX_Card FX_Chart" aria-labelledby="FX_AgentTitle">' + agentBars(n) + "</section>" +
      "</div>";
  }

  // good: 1 = up is good, -1 = up is bad, 0 = neither
  function dashKpi(kind, iconName, label, note, value, before, span, good) {
    var diff = value - before, pct = before ? Math.round(diff / before * 100) : null;
    var tone = !diff || !good ? "" : (diff > 0) === (good > 0) ? " is-good" : " is-bad";
    var change = diff === 0 ? "No change vs " + span
      : '<span class="FX_Delta' + tone + '">' + icon(diff > 0 ? "up" : "down") + '<span class="FX_Sr">' + (diff > 0 ? "Up " : "Down ") + "</span>" +
        Math.abs(diff) + (pct != null ? " (" + (pct > 0 ? "+" : "") + pct + "%)" : "") + "</span> vs " + span;
    return '<div class="FX_Card FX_Kpi FX_Kpi--' + kind + '"><span class="FX_KpiIcon">' + icon(iconName) + "</span>" +
      '<span title="' + esc(note) + '">' + esc(label) + '</span><b class="FX_Num">' + value + "</b>" +
      '<small class="FX_KpiChange">' + change + '</small><small class="FX_KpiNote">' + esc(note) + "</small></div>";
  }

  function chartHead(id, title, sub, legend) {
    return '<div class="FX_CardHead FX_CardHead--chart"><div><h2 id="' + id + '">' + esc(title) + '</h2><p class="FX_Sub">' + esc(sub) + "</p></div>" + (legend || "") + "</div>";
  }

  // "Ticket activity": created and resolved per day, two lines, one y axis. Hover shows the day's numbers.
  var LINE = { w: 720, h: 240, l: 34, r: 76, t: 14, b: 28 };
  function lineChart(n) {
    var s = n.series, max = 0;
    s.forEach(function (d) { max = Math.max(max, d.created, d.resolved); });
    var step = Math.max(1, Math.ceil(max / 4)), top = step * 4;
    var x = function (i) { return LINE.l + (s.length < 2 ? 0 : i * (LINE.w - LINE.l - LINE.r) / (s.length - 1)); };
    var y = function (v) { return LINE.t + (1 - v / top) * (LINE.h - LINE.t - LINE.b); };
    function path(key) { return s.map(function (d, i) { return (i ? "L" : "M") + x(i).toFixed(1) + " " + y(d[key]).toFixed(1); }).join(""); }
    var totalC = n.created.length, totalR = n.resolved.length;
    var grid = "";
    for (var g = 0; g <= 4; g++) {
      var gy = y(g * step).toFixed(1);
      grid += '<line class="FX_Grid" x1="' + LINE.l + '" x2="' + (LINE.w - LINE.r) + '" y1="' + gy + '" y2="' + gy + '"/>' +
        '<text class="FX_Axis" x="' + (LINE.l - 8) + '" y="' + gy + '" text-anchor="end" dominant-baseline="middle">' + g * step + "</text>";
    }
    var ticks = "", every = Math.max(1, Math.round((s.length - 1) / 5));
    for (var i = 0; i < s.length; i += every) {
      ticks += '<text class="FX_Axis" x="' + x(i).toFixed(1) + '" y="' + (LINE.h - 8) + '" text-anchor="middle">' + esc(fmtShort.format(s[i].day)) + "</text>";
    }
    // direct labels at the line ends, pushed apart when they would overlap
    var last = s.length - 1, yc = y(s[last].created), yr = y(s[last].resolved);
    if (Math.abs(yc - yr) < 14) { var mid = (yc + yr) / 2, createdAbove = yc <= yr; yc = mid + (createdAbove ? -7 : 7); yr = mid + (createdAbove ? 7 : -7); }
    var legend = '<ul class="FX_Legend">' +
      '<li><span class="FX_Swatch FX_Swatch--line" style="background:' + SERIES[0] + '"></span>Created <b class="FX_Num">' + totalC + "</b></li>" +
      '<li><span class="FX_Swatch FX_Swatch--line" style="background:' + SERIES[1] + '"></span>Resolved <b class="FX_Num">' + totalR + "</b></li></ul>";
    return chartHead("FX_LineTitle", "Ticket activity", "Tickets created and resolved per day", legend) +
      '<div class="FX_ChartBody FX_LineWrap">' +
        '<svg class="FX_LineSvg" viewBox="0 0 ' + LINE.w + " " + LINE.h + '" role="img" aria-label="Line chart: ' + totalC + " created and " + totalR + " resolved in the last " + n.days + ' days. The numbers per day are in the table below." data-chart="line">' +
          grid + ticks +
          '<path class="FX_Area" d="' + path("created") + "L" + x(last).toFixed(1) + " " + y(0) + "L" + x(0) + " " + y(0) + 'Z" fill="' + SERIES[0] + '"/>' +
          '<path class="FX_Line" d="' + path("resolved") + '" stroke="' + SERIES[1] + '"/>' +
          '<path class="FX_Line" d="' + path("created") + '" stroke="' + SERIES[0] + '"/>' +
          '<text class="FX_EndLabel" x="' + (x(last) + 8) + '" y="' + yc.toFixed(1) + '" dominant-baseline="middle">Created</text>' +
          '<text class="FX_EndLabel" x="' + (x(last) + 8) + '" y="' + yr.toFixed(1) + '" dominant-baseline="middle">Resolved</text>' +
          '<g class="FX_Hover" hidden><line class="FX_Cross" y1="' + LINE.t + '" y2="' + (LINE.h - LINE.b) + '"/>' +
            '<circle class="FX_Dot2" r="4.5" fill="' + SERIES[1] + '"/><circle class="FX_Dot1" r="4.5" fill="' + SERIES[0] + '"/></g>' +
          '<rect class="FX_HitArea" x="' + LINE.l + '" y="' + LINE.t + '" width="' + (LINE.w - LINE.l - LINE.r) + '" height="' + (LINE.h - LINE.t - LINE.b) + '"/>' +
        "</svg>" +
        '<div class="FX_Tip" hidden></div>' +
      "</div>" +
      '<details class="FX_TableToggle"><summary>Show the numbers per day</summary><div class="FX_TableScroll"><table class="FX_Table"><thead><tr><th scope="col">Day</th><th scope="col">Created</th><th scope="col">Resolved</th></tr></thead><tbody>' +
        s.map(function (d) { return "<tr><td>" + esc(fmtShort.format(d.day)) + '</td><td class="FX_Num">' + d.created + '</td><td class="FX_Num">' + d.resolved + "</td></tr>"; }).join("") +
      "</tbody></table></div></details>";
  }

  // Crosshair + tooltip for the line chart
  function lineHover(svg, clientX) {
    var n = lastDash || dashNumbers(), s = n.series, box = svg.getBoundingClientRect();
    var vx = (clientX - box.left) / box.width * LINE.w;
    var i = s.length < 2 ? 0 : Math.round((vx - LINE.l) / ((LINE.w - LINE.l - LINE.r) / (s.length - 1)));
    i = Math.max(0, Math.min(s.length - 1, i));
    var max = 0;
    s.forEach(function (d) { max = Math.max(max, d.created, d.resolved); });
    var top = Math.max(1, Math.ceil(max / 4)) * 4;
    var x = LINE.l + (s.length < 2 ? 0 : i * (LINE.w - LINE.l - LINE.r) / (s.length - 1));
    var y = function (v) { return LINE.t + (1 - v / top) * (LINE.h - LINE.t - LINE.b); };
    var g = svg.querySelector(".FX_Hover");
    g.hidden = false;
    g.querySelector(".FX_Cross").setAttribute("x1", x);
    g.querySelector(".FX_Cross").setAttribute("x2", x);
    g.querySelector(".FX_Dot1").setAttribute("cx", x);
    g.querySelector(".FX_Dot1").setAttribute("cy", y(s[i].created));
    g.querySelector(".FX_Dot2").setAttribute("cx", x);
    g.querySelector(".FX_Dot2").setAttribute("cy", y(s[i].resolved));
    var tip = svg.parentNode.querySelector(".FX_Tip");
    tip.innerHTML = "<b>" + esc(fmtLong.format(s[i].day)) + "</b>" +
      '<span><i class="FX_Swatch" style="background:' + SERIES[0] + '"></i>Created <b class="FX_Num">' + s[i].created + "</b></span>" +
      '<span><i class="FX_Swatch" style="background:' + SERIES[1] + '"></i>Resolved <b class="FX_Num">' + s[i].resolved + "</b></span>";
    tip.hidden = false;
    var px = x / LINE.w * box.width;
    tip.style.left = Math.min(Math.max(0, px + 12), box.width - tip.offsetWidth) + "px";
    tip.style.top = "8px";
  }
  function lineHoverEnd(svg) {
    svg.querySelector(".FX_Hover").hidden = true;
    svg.parentNode.querySelector(".FX_Tip").hidden = true;
  }

  // "Tickets by status": the period's new tickets by their current status; total in the middle, counts in the legend.
  function donutChart(n) {
    var list = statusesInOrder(), total = n.created.length, r = 64, c = 2 * Math.PI * r, gap = total > 1 ? 2 : 0, offset = 0;
    var counts = list.map(function (s) { return n.created.filter(function (t) { return t.status === s.code; }).length; });
    var rings = list.map(function (s, i) {
      if (!counts[i]) { return ""; }
      var len = counts[i] / total * c, dash = Math.max(0.5, len - gap);
      var seg = '<circle class="FX_Seg" r="' + r + '" cx="90" cy="90" stroke="' + SERIES[i % SERIES.length] + '" stroke-dasharray="' + dash.toFixed(2) + " " + (c - dash).toFixed(2) +
        '" stroke-dashoffset="' + (-offset).toFixed(2) + '"><title>' + esc(s.name) + ": " + counts[i] + "</title></circle>";
      offset += len;
      return seg;
    }).join("");
    return chartHead("FX_DonutTitle", "Tickets by status", "The " + plural(total, "ticket", "tickets") + " created in the period, by status now") +
      '<div class="FX_ChartBody FX_DonutWrap">' +
        '<svg class="FX_Donut" viewBox="0 0 180 180" role="img" aria-label="Donut chart of ' + total + ' tickets by status; the counts are in the list beside it.">' +
          '<circle class="FX_Track" r="' + r + '" cx="90" cy="90"/>' + '<g transform="rotate(-90 90 90)">' + rings + "</g>" +
          '<text class="FX_DonutTotal" x="90" y="86" text-anchor="middle">' + total + '</text><text class="FX_DonutLabel" x="90" y="108" text-anchor="middle">tickets</text>' +
        "</svg>" +
        '<ul class="FX_Legend FX_Legend--list">' + list.map(function (s, i) {
          return '<li><span class="FX_Swatch" style="background:' + SERIES[i % SERIES.length] + '"></span>' + esc(s.name) +
            '<b class="FX_Num">' + counts[i] + '</b><small class="FX_Num">' + (total ? Math.round(counts[i] / total * 100) : 0) + "%</small></li>";
        }).join("") + "</ul>" +
      "</div>";
  }

  // "Resolved per agent": one bar per agent (resolved in the period, by assignee) and its share.
  function agentBars(n) {
    var total = n.resolved.length, counts = {};
    n.resolved.forEach(function (t) { var k = t.assignee || ""; counts[k] = (counts[k] || 0) + 1; });
    var rows = activeAgents().map(function (a) { return { id: a.id, count: counts[a.id] || 0 }; });
    Object.keys(counts).forEach(function (k) { if (!rows.some(function (r) { return r.id === k; })) { rows.push({ id: k, count: counts[k] }); } });
    rows.sort(function (a, b) { return b.count - a.count || agentName(a.id).localeCompare(agentName(b.id)); });
    var max = Math.max(1, rows.reduce(function (m, r) { return Math.max(m, r.count); }, 0));
    return chartHead("FX_AgentTitle", "Resolved per agent", plural(total, "ticket", "tickets") + " resolved in the period, by assignee") +
      (rows.length ? '<ul class="FX_Bars">' + rows.map(function (r) {
        var share = total ? Math.round(r.count / total * 100) : 0, w = r.count / max * 100;
        return "<li>" + avatar(r.id, "s") + '<span class="FX_BarName"><b>' + esc(r.id ? agentName(r.id) : "Unassigned") + "</b><small>" + plural(r.count, "ticket", "tickets") + " resolved</small></span>" +
          '<svg class="FX_Bar" viewBox="0 0 100 10" preserveAspectRatio="none" aria-hidden="true"><rect class="FX_BarTrack" width="100" height="10"/>' +
            (r.count ? '<rect width="' + Math.max(2, w).toFixed(1) + '" height="10" fill="' + SERIES[0] + '"><title>' + esc(agentName(r.id)) + ": " + r.count + "</title></rect>" : "") + "</svg>" +
          '<span class="FX_Num FX_Share">' + share + "%</span></li>";
      }).join("") + "</ul>" : empty("check", "No agents yet."));
  }

  // "Oldest open tickets": open tickets created in the period, oldest first.
  function oldestOpen(n) {
    var start = n.start;
    var list = n.base.filter(function (t) { return isOpen(t) && between(parseDate(t.created), start, n.end); })
      .sort(function (a, b) { return (parseDate(a.created) || 0) - (parseDate(b.created) || 0); }).slice(0, OLDEST_OPEN);
    return chartHead("FX_OldTitle", "Oldest open tickets", "Open tickets created in the period, oldest first") +
      (list.length ? '<div class="FX_TableScroll"><table class="FX_Table FX_Table--rows"><thead><tr><th scope="col">Ticket</th><th scope="col">Summary</th><th scope="col">Priority</th><th scope="col">Assignee</th><th scope="col" class="FX_Right">Age</th></tr></thead><tbody>' +
        list.map(function (t) {
          var age = Math.max(0, Math.floor((n.now - parseDate(t.created)) / 86400000));
          return '<tr data-open-row="' + esc(t.id) + '"><td><button type="button" class="FX_Link" data-open="' + esc(t.id) + '">' + esc(t.id) + "</button></td>" +
            '<td class="FX_Clip" title="' + esc(t.summary) + '">' + esc(t.summary) + "</td><td>" + flag(t.priority) + "</td>" +
            '<td><span class="FX_Who">' + avatar(t.assignee, "s") + esc(t.assignee ? agentName(t.assignee) : "Unassigned") + "</span></td>" +
            '<td class="FX_Right FX_Num">' + plural(age, "day", "days") + "</td></tr>";
        }).join("") + "</tbody></table></div>"
        : empty("check", "No open tickets from this period."));
  }

  // ---- Move to… menu (keyboard route for the board) ----
  var menu = $("FX_MoveMenu");
  var menuOpener = null;

  function openMoveMenu(button) {
    var t = byKey(data.tickets, "id", button.getAttribute("data-move"));
    if (!t) { return; }
    menuOpener = button;
    var allowed = allowedMoves(t.status);
    menu.innerHTML = "<p>Move " + esc(t.id) + " to</p>" + statusesInOrder().map(function (s) {
      var current = s.code === t.status, blocked = !current && allowed.indexOf(s.code) < 0;
      return '<button type="button" role="menuitem" data-move-to="' + esc(s.code) + '" data-ticket="' + esc(t.id) + '"' +
        (current || blocked ? ' aria-disabled="true"' : "") + (blocked ? " data-blocked" : "") + ">" +
        statusPill(s.code) + (current ? '<span class="FX_Id">Current</span>' : blocked ? '<span class="FX_Id">Not allowed</span>' : "") + "</button>";
    }).join("");
    menu.hidden = false;
    var r = button.getBoundingClientRect();
    var top = Math.min(r.bottom + 4, window.innerHeight - menu.offsetHeight - 8);
    var left = Math.min(r.left, window.innerWidth - menu.offsetWidth - 8);
    menu.style.top = Math.max(8, top) + "px";
    menu.style.left = Math.max(8, left) + "px";
    button.setAttribute("aria-expanded", "true");
    var firstItem = menu.querySelector('[role=menuitem]:not([aria-disabled="true"])');
    if (firstItem) { firstItem.focus(); }
  }

  function closeMoveMenu(returnFocus) {
    if (menu.hidden) { return; }
    menu.hidden = true;
    if (menuOpener) {
      menuOpener.setAttribute("aria-expanded", "false");
      if (returnFocus && document.body.contains(menuOpener)) { menuOpener.focus(); }
    }
    menuOpener = null;
  }

  menu.addEventListener("click", function (e) {
    var item = e.target.closest("[data-move-to]");
    if (item && item.hasAttribute("data-blocked")) { // say why, the same way the Board drop and the detail pane do
      closeMoveMenu(true);
      changeStatus(item.getAttribute("data-ticket"), item.getAttribute("data-move-to"));
      return;
    }
    if (!item || item.getAttribute("aria-disabled") === "true") { return; }
    closeMoveMenu(false);
    changeStatus(item.getAttribute("data-ticket"), item.getAttribute("data-move-to"));
  });

  menu.addEventListener("keydown", function (e) {
    var items = Array.prototype.slice.call(menu.querySelectorAll("[role=menuitem]"));
    var i = items.indexOf(document.activeElement);
    if (e.key === "Escape") { e.preventDefault(); closeMoveMenu(true); }
    else if (e.key === "ArrowDown") { e.preventDefault(); items[(i + 1) % items.length].focus(); }
    else if (e.key === "ArrowUp") { e.preventDefault(); items[(i - 1 + items.length) % items.length].focus(); }
    else if (e.key === "Tab") { closeMoveMenu(false); }
  });

  document.addEventListener("click", function (e) {
    if (!menu.hidden && !menu.contains(e.target) && !e.target.closest("[data-move]")) { closeMoveMenu(false); }
  });

  // ---- Navigation ----
  function go(name, ticketId) {
    state.view = VIEWS[name] ? name : "work";
    if (ticketId) { state.selected = ticketId; }
    var hash = "#" + state.view + (state.view === "issues" && state.selected ? "/" + state.selected : "");
    if (location.hash !== hash) { history.replaceState(null, "", hash); }
    setMenu(false);
    render();
    view.scrollTop = 0;
  }

  // A ticket opened by link, search or click must be in the list: clear the filters that would hide it.
  function revealTicket(id) {
    var t = byKey(data.tickets, "id", id);
    if (!t) { return false; }
    if (!filteredIssues().list.some(function (x) { return x.id === id; })) {
      state.issues = { tab: "all", q: "", status: "", priority: "", assignee: "" };
      if (state.project && state.project !== t.project) { state.project = ""; }
    }
    return true;
  }

  function openTicket(id) {
    if (editBlocks(id) || !revealTicket(id)) { return; }
    go("issues", id);
    var row = view.querySelector('[data-select="' + CSS.escape(id) + '"]');
    if (row) { row.scrollIntoView({ block: "nearest" }); }
  }

  function fromHash() {
    var m = /^#(\w+)(?:\/(.+))?$/.exec(location.hash);
    if (m && VIEWS[m[1]]) {
      state.view = m[1];
      if (m[2]) { state.selected = decodeURIComponent(m[2]); }
    }
  }

  function setMenu(open) {
    var app = $("FX_App");
    app.classList.toggle("is-menu-open", open);
    $("FX_Scrim").hidden = !open;
    $("FX_MenuBtn").setAttribute("aria-expanded", String(open));
    if (open) { $("FX_SideClose").focus(); }
  }

  // ---- Wiring ----
  $("FX_Refresh").addEventListener("click", loadAll);
  $("FX_CreateBtn").addEventListener("click", openCreate);
  $("FX_MenuBtn").addEventListener("click", function () { setMenu(true); });
  $("FX_SideClose").addEventListener("click", function () { setMenu(false); $("FX_MenuBtn").focus(); });
  $("FX_Scrim").addEventListener("click", function () { setMenu(false); });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && $("FX_App").classList.contains("is-menu-open")) { setMenu(false); $("FX_MenuBtn").focus(); }
  });

  $("FX_SearchForm").addEventListener("submit", function (e) {
    e.preventDefault();
    if (!data) { return; }
    state.issues = { tab: "all", q: $("FX_SearchBox").value.trim(), status: "", priority: "", assignee: "" };
    var exact = byKey(data.tickets, "id", state.issues.q.toUpperCase());
    go("issues", exact ? exact.id : "");
  });

  $("FX_Side").addEventListener("click", function (e) {
    var link = e.target.closest("[data-view]");
    if (link) { e.preventDefault(); go(link.getAttribute("data-view")); return; }
    var p = e.target.closest("[data-project]");
    if (p && data) {
      var key = p.getAttribute("data-project");
      state.project = state.project === key ? "" : key;
      go(state.view === "board" ? "board" : "issues");
    }
  });

  $("FX_Side").addEventListener("click", function (e) {
    if (e.target.closest && e.target.closest("#FX_SignOut")) { signOut(); }
  });
  $("FX_GateSignIn").addEventListener("click", openLogin);
  $("FX_GateRetry").addEventListener("click", retryToken);

  view.addEventListener("click", function (e) {
    var el;
    if ((el = e.target.closest("[data-move]"))) { menu.hidden || menuOpener !== el ? openMoveMenu(el) : closeMoveMenu(true); return; }
    if ((el = e.target.closest("[data-open]"))) { openTicket(el.getAttribute("data-open")); return; }
    if ((el = e.target.closest("[data-go]"))) { e.preventDefault(); go(el.getAttribute("data-go")); return; }
    if ((el = e.target.closest("[data-project-card]"))) { state.project = el.getAttribute("data-project-card"); go("issues"); return; }
    if ((el = e.target.closest("[data-clear-project]"))) { state.project = ""; render(); return; }
    if ((el = e.target.closest("[data-queue]"))) { state.queueTab = el.getAttribute("data-queue"); render(); return; }
    if ((el = e.target.closest("[data-tab]"))) { state.issues.tab = el.getAttribute("data-tab"); render(); return; }
    if ((el = e.target.closest("[data-edit]"))) { var et = byKey(data.tickets, "id", el.getAttribute("data-edit")); if (et) { startEdit(et); } return; }
    if ((el = e.target.closest("[data-cancel-edit]"))) { stopEdit(); renderDetail(); var eb = view.querySelector("[data-edit]"); if (eb) { eb.focus(); } return; }
    if ((el = e.target.closest("[data-dash-days]"))) { state.dashDays = +el.getAttribute("data-dash-days"); render(); return; }
    if ((el = e.target.closest("[data-open-row]"))) { openTicket(el.getAttribute("data-open-row")); return; }
    if ((el = e.target.closest("[data-select]"))) {
      if (editBlocks(el.getAttribute("data-select"))) { return; }
      state.selected = el.getAttribute("data-select");
      history.replaceState(null, "", "#issues/" + state.selected);
      view.querySelectorAll("[data-select]").forEach(function (b) { b.setAttribute("aria-current", String(b === el)); });
      renderDetail();
      if (window.matchMedia("(max-width: 1000px)").matches) { $("FX_DetailPane").scrollIntoView({ block: "start" }); }
    }
  });

  view.addEventListener("input", function (e) {
    if (e.target.id === "FX_IssueQ") { state.issues.q = e.target.value; renderIssueList(); savePrefs(); }
    else if (e.target.id === "FX_BoardQ") { state.board.q = e.target.value; renderBoardCols(); savePrefs(); }
    else if (e.target.id === "FX_CommentBox") { state.drafts[e.target.closest("form").getAttribute("data-ticket")] = e.target.value; }
    else if (state.edit && e.target.name && e.target.closest("#FX_EditForm")) { state.edit.values[e.target.name] = e.target.value; delete state.edit.errors[e.target.name]; clearFieldError(e.target); }
  });

  view.addEventListener("change", function (e) {
    var t = e.target;
    if (t.hasAttribute("data-filter")) { state.issues[t.getAttribute("data-filter")] = t.value; renderIssueList(); savePrefs(); }
    else if (t.hasAttribute("data-board-filter")) { state.board[t.getAttribute("data-board-filter")] = t.value; renderBoardCols(); savePrefs(); }
    else if (t.hasAttribute("data-set-status")) { changeStatus(t.getAttribute("data-set-status"), t.value); }
    else if (t.hasAttribute("data-dash-project")) { state.project = t.value; render(); }
    else if (state.edit && t.name && t.closest("#FX_EditForm")) { state.edit.values[t.name] = t.value; delete state.edit.errors[t.name]; clearFieldError(t); }
  });

  view.addEventListener("submit", function (e) {
    var form = e.target.closest(".FX_Compose");
    if (form) { e.preventDefault(); addComment(form); return; }
    if (e.target.id === "FX_EditForm") { e.preventDefault(); saveEdit(e.target); }
  });

  view.addEventListener("keydown", function (e) {
    // Ctrl/Cmd+Enter sends a comment
    if (e.target.id === "FX_CommentBox" && e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      addComment(e.target.closest("form"));
    }
  });

  // Dashboard line chart: crosshair and tooltip follow the pointer
  view.addEventListener("pointermove", function (e) {
    var svg = e.target.closest && e.target.closest("[data-chart=line]");
    if (svg) { lineHover(svg, e.clientX); }
  });
  view.addEventListener("pointerout", function (e) {
    var svg = e.target.closest && e.target.closest("[data-chart=line]");
    if (svg && !svg.contains(e.relatedTarget)) { lineHoverEnd(svg); }
  });

  // Board drag and drop (pointer users; "Move to…" is the keyboard route)
  var dragId = "";
  view.addEventListener("dragstart", function (e) {
    var card = e.target.closest && e.target.closest("[data-card]");
    if (!card) { return; }
    dragId = card.getAttribute("data-card");
    card.classList.add("is-dragging");
    var dragged = byKey(data.tickets, "id", dragId), allowed = dragged ? allowedMoves(dragged.status) : [];
    view.querySelectorAll("[data-col]").forEach(function (c) {
      var code = c.getAttribute("data-col");
      c.classList.toggle("is-blocked", !!dragged && code !== dragged.status && allowed.indexOf(code) < 0);
    });
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", dragId);
  });
  view.addEventListener("dragend", function (e) {
    var card = e.target.closest && e.target.closest("[data-card]");
    if (card) { card.classList.remove("is-dragging"); }
    view.querySelectorAll(".FX_Col.is-over, .FX_Col.is-blocked").forEach(function (c) { c.classList.remove("is-over", "is-blocked"); });
    dragId = "";
  });
  view.addEventListener("dragover", function (e) {
    var col = dragId && e.target.closest("[data-col]");
    if (!col) { return; }
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    view.querySelectorAll(".FX_Col.is-over").forEach(function (c) { if (c !== col) { c.classList.remove("is-over"); } });
    col.classList.add("is-over");
  });
  view.addEventListener("drop", function (e) {
    var col = dragId && e.target.closest("[data-col]");
    if (!col) { return; }
    e.preventDefault();
    col.classList.remove("is-over");
    changeStatus(dragId, col.getAttribute("data-col"));
  });

  // Unsaved input (a comment draft, Edit mode, the Create issue dialog): warn before it is lost.
  window.addEventListener("beforeunload", function (e) {
    var unsent = !!state.editing || !!create || Object.keys(state.drafts).some(function (id) { return String(state.drafts[id]).trim(); });
    if (unsent) { e.preventDefault(); e.returnValue = ""; }
  });

  window.addEventListener("hashchange", function () {
    var before = state.view + "/" + state.selected;
    fromHash();
    if (data && state.view + "/" + state.selected !== before) {
      if (state.view === "issues" && state.selected) { revealTicket(state.selected); }
      render();
    }
  });

  loadPrefs();
  fromHash();
  state.token = readToken();
  function start() {
    if (!state.token) { showSignIn(); return; }
    state.starting = true;
    state.startTries = 0;
    loadAll();
  }
  // An invoke sent before the Form is ready never reaches the server (BLD-002); MG.onReady waits for it.
  if (typeof MG !== "undefined" && typeof MG.onReady === "function") {
    MG.onReady(start);
  } else {
    start();
  }
})();
