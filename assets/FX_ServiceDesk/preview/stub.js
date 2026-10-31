// Preview only (never installed): a fake WSForm so index.html runs in a normal browser.
// Each method returns what the C# method in FX_ServiceDesk.cs.txt writes to FX_vSDResult. Made-up test data only,
// matching the phase 1-2 test rows (requests/service-desk/phase-1-setup.md, phase-2-tickets.md), plus generated
// tickets over the last 90 days so the Dashboard charts have something to draw (phase 4).
// Sessions (BLD-018): the last argument of every method is the session token from sessionStorage, written by the
// FX_ServiceDeskLogin preview (its stub keeps the sessions in "FX_preview.sessions"). ?as=agent.anna starts a session
// for that agent without the login page; ?expire=1 answers every call with "session ended".
// URL switches for testing: ?fail=write (writes fail),
// ?fail=history (the change saves but its history row doesn't), ?empty=1 (no tickets).
(function () {
  var params = new URLSearchParams(location.search);
  var vars = {};

  // Stamps are UTC text with no offset, as the tenant sends them (BLD-015 step 8); calendar dates stay local.
  function iso(daysAgo, hour) {
    var d = new Date();
    d.setDate(d.getDate() - daysAgo);
    d.setHours(hour == null ? 9 : hour, 15, 0, 0);
    return d.toISOString().slice(0, 19);
  }
  function day(daysAgo) {
    var d = new Date();
    d.setDate(d.getDate() - daysAgo);
    var p = function (n) { return (n < 10 ? "0" : "") + n; };
    return d.getFullYear() + "-" + p(d.getMonth() + 1) + "-" + p(d.getDate()) + "T00:00:00";
  }
  function now() { return new Date().toISOString().slice(0, 19); }
  function copy(x) { return JSON.parse(JSON.stringify(x)); }

  var types = ["Incident", "Service request", "Problem", "Change", "Task"];
  var categories = ["Hardware", "Software", "Access", "Network", "Facilities", "Other"];
  var resolutions = ["Fixed", "Workaround", "Duplicate", "Won't do", "Cannot reproduce"];
  var agents = [
    { id: "agent.anna", name: "Anna Agent", team: "Service Desk", role: "Agent", active: true },
    { id: "agent.ben", name: "Ben Agent", team: "Service Desk", role: "Agent", active: true },
    { id: "lead.carla", name: "Carla Lead", team: "Service Desk", role: "Lead", active: true },
    { id: "tech.dev", name: "Dev Tech", team: "Facilities", role: "Agent", active: true }
  ];
  var projects = [
    { key: "SUP", name: "IT Support", description: "Hardware, software and access requests", lead: "lead.carla", nextNo: 6, active: true },
    { key: "FAC", name: "Facilities", description: "Building and office requests", lead: "tech.dev", nextNo: 4, active: true }
  ];
  var statuses = [
    { code: "OPEN", name: "Open", category: "To do", order: 10, closed: false },
    { code: "INPROG", name: "In progress", category: "In progress", order: 20, closed: false },
    { code: "WAITING", name: "Waiting for customer", category: "In progress", order: 30, closed: false },
    { code: "RESOLVED", name: "Resolved", category: "Done", order: 40, closed: false },
    { code: "CLOSED", name: "Closed", category: "Done", order: 50, closed: true }
  ];
  var priorities = [
    { code: "CRITICAL", name: "Critical", order: 10, responseHours: 1, resolveHours: 4 },
    { code: "HIGH", name: "High", order: 20, responseHours: 4, resolveHours: 24 },
    { code: "MEDIUM", name: "Medium", order: 30, responseHours: 8, resolveHours: 72 },
    { code: "LOW", name: "Low", order: 40, responseHours: 24, resolveHours: 120 }
  ];
  // The request's 10 test rows (phase 4, table 1)
  var transitions = [["OPEN", "INPROG"], ["OPEN", "WAITING"], ["INPROG", "WAITING"], ["WAITING", "INPROG"], ["INPROG", "RESOLVED"],
    ["WAITING", "RESOLVED"], ["RESOLVED", "CLOSED"], ["RESOLVED", "INPROG"], ["RESOLVED", "OPEN"], ["CLOSED", "OPEN"]]
    .map(function (m) { return { from: m[0], to: m[1] }; });

  function ticket(id, type, summary, description, status, priority, reporter, assignee, category, labels, due, resolvedOn, resolution, created, updated) {
    return { id: id, project: id.split("-")[0], type: type, summary: summary, description: description, status: status, priority: priority,
      reporter: reporter, assignee: assignee, category: category, labels: labels, due: due, resolvedOn: resolvedOn, resolution: resolution,
      created: created, updated: updated, createdBy: reporter, updatedBy: assignee || reporter };
  }
  var tickets = [
    ticket("SUP-1", "Incident", "Laptop won't start", "Power light blinks twice, then nothing. Tried another charger.", "INPROG", "HIGH", "agent.ben", "agent.anna", "Hardware", "laptop, urgent", day(1), "", "", iso(6, 8), iso(0, 8)),
    ticket("SUP-2", "Service request", "Need access to the shared drive", "New starter in Finance needs read access to the Finance share.", "OPEN", "MEDIUM", "lead.carla", "agent.anna", "Access", "onboarding", day(-3), "", "", iso(3, 10), iso(2, 11)),
    ticket("SUP-3", "Problem", "VPN drops every hour", "Several people report the VPN disconnecting on the hour since the last update.", "WAITING", "CRITICAL", "agent.anna", "agent.ben", "Network", "vpn", day(-1), "", "", iso(5, 14), iso(1, 16)),
    ticket("SUP-4", "Incident", "Printer on floor 2 jams", "", "OPEN", "LOW", "agent.ben", "", "Hardware", "", "", "", "", iso(9, 9), iso(9, 9)),
    ticket("SUP-5", "Change", "Update the antivirus policy", "Roll out the new exclusion list to all laptops.", "RESOLVED", "MEDIUM", "lead.carla", "agent.anna", "Software", "policy", day(2), iso(1, 15), "Fixed", iso(12, 9), iso(1, 15)),
    ticket("FAC-1", "Incident", "Meeting room light flickers", "Room B2, the ceiling light over the table.", "INPROG", "MEDIUM", "agent.anna", "tech.dev", "Facilities", "room-b2", day(4), "", "", iso(8, 13), iso(3, 9)),
    ticket("FAC-2", "Service request", "New desk chair for reception", "", "OPEN", "HIGH", "lead.carla", "", "Facilities", "", day(-5), "", "", iso(2, 15), iso(2, 15)),
    ticket("FAC-3", "Task", "Replace the kitchen water filter", "Quarterly filter change.", "CLOSED", "LOW", "tech.dev", "tech.dev", "Facilities", "kitchen", day(10), iso(9, 23), "Fixed", iso(20, 9), iso(8, 10))
  ];

  // Generated history of the last 90 days (seeded, so every preview load is the same)
  var seed = 42;
  function rnd() { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; }
  function pick(list) { return list[Math.floor(rnd() * list.length)]; }
  var SUMMARIES = {
    SUP: ["Password reset for a new starter", "Outlook keeps asking for the password", "Second monitor not detected", "Install the PDF editor",
      "Wi-Fi slow in the east wing", "Teams calls drop after 10 minutes", "Phone doesn't sync mail", "Access to the sales dashboard",
      "Keyboard keys sticking", "Laptop fan very loud", "Shared calendar not updating", "Request a docking station"],
    FAC: ["Heating too low in room A1", "Door badge reader broken", "Coffee machine leaking", "Book the big meeting room cleaning",
      "Window blind stuck", "Replace the light in the stairwell", "Desk drawer lock jammed", "Move two desks to the 3rd floor"]
  };
  if (params.get("empty") === "1") { tickets = []; }
  else {
    for (var g = 0; g < 70; g++) {
      var key = rnd() < 0.65 ? "SUP" : "FAC", proj = projects[key === "SUP" ? 0 : 1];
      var age = Math.floor(rnd() * 90) + 1, prio = pick(["CRITICAL", "HIGH", "MEDIUM", "MEDIUM", "LOW", "LOW"]);
      var assignee = rnd() < 0.12 ? "" : key === "FAC" ? pick(["tech.dev", "tech.dev", "agent.anna"]) : pick(["agent.anna", "agent.ben", "agent.ben", "lead.carla"]);
      var done = rnd() < (age > 20 ? 0.85 : 0.45), resolvedAgo = done ? Math.max(0, age - 1 - Math.floor(rnd() * Math.min(age, 9))) : -1;
      var status = done ? (resolvedAgo > 7 ? "CLOSED" : "RESOLVED") : pick(["OPEN", "OPEN", "INPROG", "INPROG", "WAITING"]);
      var id = key + "-" + proj.nextNo++;
      tickets.push(ticket(id, pick(types), pick(SUMMARIES[key]), "", status, prio, pick(["agent.anna", "agent.ben", "lead.carla"]), assignee,
        key === "FAC" ? "Facilities" : pick(categories.slice(0, 4)), "", rnd() < 0.6 ? day(age - 2 - Math.floor(rnd() * 10)) : "",
        done ? day(resolvedAgo) : "", done ? pick(resolutions) : "", iso(age, 8 + Math.floor(rnd() * 9)), iso(done ? resolvedAgo : Math.floor(rnd() * age), 12)));
    }
  }

  var comments = [
    { id: 1, ticket: "SUP-1", author: "agent.anna", text: "Picked this up. I'll swap the battery first.", internal: false, created: iso(2, 9) },
    { id: 2, ticket: "SUP-1", author: "agent.ben", text: "Spare battery is in the cabinet, second shelf.", internal: true, created: iso(1, 10) },
    { id: 3, ticket: "SUP-2", author: "lead.carla", text: "Manager approved by email.", internal: false, created: iso(2, 11) },
    { id: 4, ticket: "SUP-2", author: "agent.anna", text: "Waiting for the AD group to sync.", internal: true, created: iso(0, 8) },
    { id: 5, ticket: "FAC-1", author: "tech.dev", text: "Ordered a new ballast, arrives Thursday.", internal: false, created: iso(3, 9) },
    { id: 6, ticket: "FAC-1", author: "agent.anna", text: "Thanks, I've told the team to use B3 until then.", internal: false, created: iso(1, 14) }
  ];
  var nextComment = 7;
  var history = [
    { id: 1, ticket: "SUP-1", field: "Assignee", oldValue: "", newValue: "agent.anna", by: "lead.carla", created: iso(3, 9) },
    { id: 2, ticket: "SUP-1", field: "Status", oldValue: "OPEN", newValue: "INPROG", by: "agent.anna", created: iso(2, 9) },
    { id: 3, ticket: "SUP-3", field: "Priority", oldValue: "HIGH", newValue: "CRITICAL", by: "lead.carla", created: iso(2, 15) },
    { id: 4, ticket: "SUP-3", field: "Status", oldValue: "INPROG", newValue: "WAITING", by: "agent.ben", created: iso(1, 16) }
  ];
  var nextHistory = 5;

  function find(id) { return tickets.filter(function (t) { return t.id === id; })[0]; }
  function statusOf(code) { return statuses.filter(function (x) { return x.code === code; })[0]; }
  function category(code) { var s = statusOf(code); return s && s.category; }
  function activeAgent(id) { return agents.some(function (a) { return a.id === id && a.active; }); }
  function fail(message, errors) { var r = { ok: false, message: message }; if (errors) { r.errors = errors; } return r; }
  function addHistory(id, changes, me) {
    if (!changes.length) { return null; }
    if (params.get("fail") === "history") { return "The change was saved, but its history row wasn't. (preview: ?fail=history)"; }
    changes.forEach(function (c) { history.push({ id: nextHistory++, ticket: id, field: c[0], oldValue: c[1] || "", newValue: c[2] || "", by: me, created: now() }); });
    return null;
  }
  function savedResult(t, warning) {
    var r = { ok: true, ticket: copy(t), history: copy(history.filter(function (h) { return h.ticket === t.id; })) };
    if (warning) { r.warning = warning; }
    return r;
  }
  // The same checks as FX_CheckTicketFields in the C# script
  function checkFields(input, errors, forCreate) {
    var v = {};
    function has(k) { return forCreate || Object.prototype.hasOwnProperty.call(input, k); }
    function get(k) { return String(input[k] || "").trim(); }
    if (has("summary")) { v.summary = get("summary"); if (!v.summary) { errors.summary = "Summary is required."; } }
    if (has("description")) { v.description = get("description"); }
    if (forCreate) {
      v.type = get("type") || "Incident";
      if (types.indexOf(v.type) < 0) { errors.type = "Pick a type."; }
      v.reporter = get("reporter");
      if (!activeAgent(v.reporter)) { errors.reporter = "Pick an active agent."; }
    }
    if (has("priority")) { v.priority = get("priority") || (forCreate ? "MEDIUM" : ""); if (!priorities.some(function (p) { return p.code === v.priority; })) { errors.priority = "Pick a priority."; } }
    if (has("assignee")) { v.assignee = get("assignee"); if (v.assignee && !activeAgent(v.assignee)) { errors.assignee = "Pick an active agent or Unassigned."; } }
    if (has("due")) { var d = get("due"); if (d && !/^\d{4}-\d{2}-\d{2}$/.test(d)) { errors.due = "Use a date like 2026-11-03."; } v.due = d ? d + "T00:00:00" : ""; }
    if (has("category")) { v.category = get("category"); if (v.category && categories.indexOf(v.category) < 0) { errors.category = "Pick a category."; } }
    if (has("labels")) { v.labels = get("labels"); }
    return v;
  }

  var methods = {
    FX_SDLoad: function () {
      return { ok: true, me: arguments[0], agents: agents, projects: copy(projects), statuses: statuses,
        priorities: priorities, transitions: transitions, types: types, categories: categories, resolutions: resolutions,
        tickets: copy(tickets), comments: copy(comments), history: copy(history) };
    },
    FX_SDSetStatus: function (id, status, resolution, me) {
      if (params.get("fail") === "write") { return fail("FX_SDSetStatus failed. (preview: ?fail=write)"); }
      if (!activeAgent(me)) { return fail("Pick who you are (Me) first."); }
      var t = find(id);
      if (!t) { return fail("Ticket " + id + " wasn't found. Refresh and try again."); }
      if (!category(status)) { return fail("Status " + status + " doesn't exist in FX_Statuses."); }
      if (t.status === status) { return fail(id + " is already " + statusOf(status).name + "."); }
      var allowed = transitions.filter(function (m) { return m.from === t.status; }).map(function (m) { return m.to; });
      if (allowed.indexOf(status) < 0) {
        return fail("Can't move from " + statusOf(t.status).name + " to " + statusOf(status).name + ". " + statusOf(t.status).name +
          (allowed.length ? " can move to: " + allowed.map(function (c) { return statusOf(c).name; }).join(", ") + "." : " has no allowed moves."));
      }
      if (status === "RESOLVED" && resolutions.indexOf(resolution) < 0) { return fail("Moving to Resolved needs a resolution.", { resolution: "Pick a resolution." }); }
      var from = t.status, wasDone = category(from) === "Done", isDone = category(status) === "Done";
      t.status = status;
      if (isDone && !wasDone) { t.resolvedOn = now(); }
      if (!isDone && wasDone) { t.resolvedOn = ""; t.resolution = ""; }
      if (status === "RESOLVED") { t.resolution = resolution; }
      t.updated = now();
      t.updatedBy = me;
      return savedResult(t, addHistory(id, [["Status", from, status]], me));
    },
    FX_SDUpdateTicket: function (id, json, me) {
      if (params.get("fail") === "write") { return fail("FX_SDUpdateTicket failed. (preview: ?fail=write)"); }
      if (!activeAgent(me)) { return fail("Pick who you are (Me) first."); }
      var t = find(id);
      if (!t) { return fail("Ticket " + id + " wasn't found. Refresh and try again."); }
      var errors = {}, v = checkFields(JSON.parse(json || "{}"), errors, false);
      if (Object.keys(errors).length) { return fail("Check the highlighted fields.", errors); }
      var changes = [];
      Object.keys(v).forEach(function (k) {
        if (String(t[k] || "") === v[k]) { return; }
        if (k === "assignee") { changes.push(["Assignee", t.assignee, v[k]]); }
        if (k === "priority") { changes.push(["Priority", t.priority, v[k]]); }
        t[k] = v[k];
      });
      t.updated = now();
      t.updatedBy = me;
      return savedResult(t, addHistory(id, changes, me));
    },
    FX_SDCreateTicket: function (json, me) {
      if (params.get("fail") === "write") { return fail("FX_SDCreateTicket failed. (preview: ?fail=write)"); }
      if (!activeAgent(me)) { return fail("Pick who you are (Me) first."); }
      var input = JSON.parse(json || "{}");
      if (!String(input.reporter || "").trim()) { input.reporter = me; }
      var errors = {}, v = checkFields(input, errors, true);
      var p = projects.filter(function (x) { return x.key === input.project; })[0];
      if (!input.project) { errors.project = "Pick a project."; } else if (!p) { errors.project = "Project doesn't exist."; } else if (!p.active) { errors.project = "Project isn't active."; }
      if (Object.keys(errors).length) { return fail("Check the highlighted fields.", errors); }
      var t = ticket(p.key + "-" + p.nextNo++, v.type, v.summary, v.description, "OPEN", v.priority, v.reporter, v.assignee, v.category, v.labels, v.due, "", "", now(), now());
      t.createdBy = me;
      tickets.push(t);
      return { ok: true, ticket: copy(t), projects: copy(projects) };
    },
    FX_SDAddComment: function (id, text, internal, author) {
      if (params.get("fail") === "write") { return fail("FX_SDAddComment failed. (preview: ?fail=write)"); }
      if (!find(id)) { return fail("Ticket " + id + " wasn't found. Refresh and try again."); }
      comments.push({ id: nextComment++, ticket: id, author: author, text: text, internal: internal === "1", created: now() });
      return { ok: true, comments: comments.filter(function (c) { return c.ticket === id; }) };
    }
  };

  var sessions = JSON.parse(sessionStorage.getItem("FX_preview.sessions") || "{}");
  if (params.get("as")) {
    var t = "f".repeat(64);
    sessions[t] = params.get("as");
    sessionStorage.setItem("FX_preview.sessions", JSON.stringify(sessions));
    sessionStorage.setItem("FX_ServiceDesk.session", t);
  }
  // Agents created by the login preview's sign-up are added to the list (as the C# sign-up adds an FX_Agents row).
  Object.keys(sessions).forEach(function (k) {
    var id = sessions[k];
    if (!agents.some(function (a) { return a.id === id; })) { agents.push({ id: id, name: id, team: "", role: "Agent", active: true }); }
  });

  // ?dropfirst=1 drops the first call's arguments, as the tenant did for a just-opened Form (BLD-018).
  var dropFirst = params.get("dropfirst") === "1";
  window.WSForm = {
    invoke: function () {
      var args = Array.prototype.slice.call(arguments);
      var name = args.shift();
      var cb = args.pop();
      if (dropFirst) { dropFirst = false; args = []; }
      setTimeout(function () {
        var token = args.pop(), me = params.get("expire") === "1" ? null : sessions[token];
        var result;
        if (name === "FX_SDSignOut") { delete sessions[token]; sessionStorage.setItem("FX_preview.sessions", JSON.stringify(sessions)); result = { ok: true }; }
        else if (!me) { result = { ok: false, signin: true, message: "Your session has ended. Sign in again." }; }
        else { result = methods[name] ? methods[name].apply(null, args.concat([me])) : { ok: false, message: "Unknown method " + name + " (add it to preview/stub.js)" }; }
        vars.FX_vSDResult = JSON.stringify(result);
        cb(0);
      }, 300);
    },
    getVarValue: function (name, cb) { setTimeout(function () { cb(vars[name]); }, 50); },
    generate: function (event, cb) {
      console.log("[stub] generate", event);
      setTimeout(function () { if (cb) { cb(); } location.href = "../FX_ServiceDeskLogin/index.html"; }, 300);
    }
  };
})();
