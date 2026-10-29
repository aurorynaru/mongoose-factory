(function () {
  "use strict";

  // ---- Config ----
  // The prompt text follows the skill templates exactly, so mongoose-builder reads it as a filled template:
  //   .claude/skills/mongoose-builder/templates/build-request-prompt.md   (mode "build")
  //   .claude/skills/mongoose-builder/templates/change-request-prompt.md  (mode "change")
  // When a template changes, change buildPrompt() / changePrompt() here to match.
  var DRAFT_KEY = "fx-request-builder-v1";
  var APPS_URL = "/api/apps"; // served by tools/serve.js; read-only facts from assets/
  var DEBUG = false;          // true logs [FX_Request] lines in the browser console

  var FIELD_TYPES = ["text", "number", "decimal", "date", "yes-no"];

  // Build prefix (AGENTS.md § Build prefix): a letter, at least one more letter or digit, then "_".
  var DEFAULT_PREFIX = "FX_";
  var PREFIX_RE = /^[A-Za-z][A-Za-z0-9]+_$/;
  var APP_PREFIX_RE = /^[A-Za-z][A-Za-z0-9]+_/; // the prefix at the start of an app folder name

  // Final scope for Forms (AGENTS.md § Build mode). Group/Site steps are from docs/mongoose/guides/
  // editing-scope-and-versions.md and web-designer.md and are unverified in this tenant.
  var SCOPE_LATER = " Claude builds and checks it in User scope first, then saves it to this scope as a last, separate step." +
    " That step needs Site Developer editing permission and hasn't been tried in this tenant yet, so it runs as a small probe first." +
    " IDOs, tables, strings, themes and assets have no scope: they are tenant-wide either way.";
  var SCOPE_HINTS = {
    User: "Only your account sees the Form. Every build so far used User scope.",
    Group: "Everyone in the group sees the Form." + SCOPE_LATER,
    Site: "Every user on the site sees the Form." + SCOPE_LATER
  };

  // How a Form in section 4b connects to another Form, with its knowledge state:
  // tile = mongoose-builder playbooks/portal-shell.md §4 (observed, EXP-115–118); button = Run Form, used in the
  // portal work (events-and-scripts.md) but not checked on its own; embedded = not tried in this tenant.
  var CONNECT_ORDER = ["standalone", "tile", "button", "embedded"];
  var CONNECT = {
    standalone: { text: "on its own", hint: "Opened from the Web Client like any other Form." },
    tile: { text: "tile in another Form's grid", hint: "A small Form repeated once per row of the other Form's grid. This has worked once here (FX_ItemsTile in FX_CustomerPortal)." },
    button: { text: "opened by a button on another Form", hint: "A button on the other Form opens this one, as a popup or in its place. Used in the portal work but not checked on its own here, so it runs as a small probe first." },
    embedded: { text: "embedded in another Form's region", hint: "Shown live inside a region of the other Form. Not tried in this tenant: it runs as a small probe first, and Claude may suggest a tile or a button instead." }
  };

  // ---- State ----
  var state = {
    mode: "build",
    apps: [],           // from /api/apps
    tables: [],         // section 4a cards, read back from the page on every refresh
    forms: []           // section 4b cards, likewise
  };

  // ---- Helpers ----
  var buildForm = document.getElementById("FX_BuildForm");
  var changeForm = document.getElementById("FX_ChangeForm");
  var promptBox = document.getElementById("FX_Prompt");
  var problemList = document.getElementById("FX_Problems");
  var statusLine = document.getElementById("FX_Status");
  var railList = document.getElementById("FX_Rail");
  var readyPill = document.getElementById("FX_Ready");
  var promptMeta = document.getElementById("FX_PromptMeta");
  var copyButton = document.getElementById("FX_Copy");
  var resetButton = document.getElementById("FX_Reset");

  function log() {
    if (!DEBUG) { return; }
    console.log.apply(console, ["[FX_Request]"].concat(Array.prototype.slice.call(arguments)));
  }

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) { node.className = className; }
    if (text !== undefined) { node.textContent = text; }
    return node;
  }

  function setStatus(text) {
    statusLine.textContent = text || "";
  }

  function box(checked) {
    return checked ? "[x]" : "[ ]";
  }

  // "Label: value" on one line; a multi-line value starts on the next line. A blank keeps "Label:" (= ask me).
  function line(label, value) {
    value = (value || "").trim();
    if (!value) { return label + ":"; }
    return value.indexOf("\n") >= 0 ? label + ":\n" + value : label + ": " + value;
  }

  // One "- item" per non-empty line of a textarea.
  function bullets(text) {
    return (text || "").split("\n").map(function (s) { return s.trim(); }).filter(Boolean).map(function (s) { return "- " + s; });
  }

  // Plain object of a form's values: checkbox groups become arrays, everything else a string.
  function readForm(form) {
    var data = {};
    Array.prototype.forEach.call(form.elements, function (input) {
      if (!input.name || input.closest("[data-list]")) { return; }
      if (input.type === "checkbox" && form.querySelectorAll('input[type="checkbox"][name="' + input.name + '"]').length > 1) {
        data[input.name] = data[input.name] || [];
        if (input.checked) { data[input.name].push(input.value); }
      } else if (input.type === "checkbox") {
        data[input.name] = input.checked;
      } else if (input.type === "radio") {
        if (input.checked) { data[input.name] = input.value; } else if (!(input.name in data)) { data[input.name] = ""; }
      } else {
        data[input.name] = input.value;
      }
    });
    return data;
  }

  function writeForm(form, data) {
    Array.prototype.forEach.call(form.elements, function (input) {
      if (!input.name || !(input.name in data) || input.closest("[data-list]")) { return; }
      var value = data[input.name];
      if (input.type === "checkbox") {
        input.checked = Array.isArray(value) ? value.indexOf(input.value) >= 0 : !!value;
      } else if (input.type === "radio") {
        input.checked = input.value === value;
      } else {
        input.value = value;
      }
    });
  }

  // The prefix to show in labels: the typed one when valid, otherwise the default.
  function shownPrefix(d) {
    var p = (d.prefix || "").trim();
    return PREFIX_RE.test(p) ? p : DEFAULT_PREFIX;
  }

  function applyPrefix(p) {
    Array.prototype.forEach.call(document.querySelectorAll("[data-prefix]"), function (node) { node.textContent = p; });
    Array.prototype.forEach.call(document.querySelectorAll("[data-placeholder]"), function (input) {
      input.placeholder = input.getAttribute("data-placeholder").replace("{p}", p);
    });
  }

  // Scope controls: group name only for Group, the approval switch only for Group or Site.
  function updateScope(form, d) {
    var scope = d.scope || "User";
    form.querySelector("[data-scope-hint]").textContent = SCOPE_HINTS[scope];
    form.querySelector("[data-scope-group]").hidden = scope !== "Group";
    form.querySelector("[data-scope-approve]").hidden = scope === "User";
  }

  // Prompt text for the scope lines (same wording in both templates).
  function scopeText(d) {
    if (d.scope === "Group") { return "Group" + (d.scopeGroup.trim() ? " " + d.scopeGroup.trim() : " (group name:)"); }
    return d.scope === "Site" ? "Site" : "User";
  }

  function scopeApprovalText(d) {
    if (!d.scope || d.scope === "User") { return "not needed (User scope)"; }
    return d.scopeApproved ? "yes" : "no, ask me first";
  }

  function scopeProblems(d, where, add) {
    if (d.scope === "Group" && !d.scopeGroup.trim()) { add(where + "name the group for Group scope.", "scopeGroup"); }
    if (d.scope === "Group" || d.scope === "Site") {
      if (!d.scopeApproved) { add(where + "the " + d.scope + " save isn't approved, so Claude will stop and ask before that step.", "scopeApproved", true); }
    }
  }

  function findApp(name) {
    for (var i = 0; i < state.apps.length; i++) { if (state.apps[i].app === name) { return state.apps[i]; } }
    return null;
  }

  // ---- Draft (this browser only; the page works without it) ----
  function saveDraft() {
    try {
      localStorage.setItem(DRAFT_KEY, JSON.stringify({
        mode: state.mode, build: readForm(buildForm), change: readForm(changeForm), tables: state.tables, forms: state.forms
      }));
    } catch (e) { log("draft not saved", e); }
  }

  function loadDraft() {
    try {
      var draft = JSON.parse(localStorage.getItem(DRAFT_KEY) || "null");
      if (!draft) { return; }
      state.mode = draft.mode === "change" ? "change" : "build";
      state.tables = draft.tables || [tableFromOldDraft(draft)];
      state.forms = draft.forms || [formFromOldDraft(draft)];
      writeForm(buildForm, draft.build || {});
      writeForm(changeForm, draft.change || {});
      setStatus("Draft restored from this browser.");
    } catch (e) { log("draft not loaded", e); }
  }

  // Drafts saved before sections 4a and 4b had cards kept one table and one Form in the build form,
  // with their rows in rows.fields and rows.buttons.
  function tableFromOldDraft(draft) {
    var b = draft.build || {};
    var card = emptyCard("tables");
    card.existing = b.idoExisting || "";
    card.relations = b.relations || "";
    card.calculated = b.calculated || "";
    card.testRows = b.testRows || "";
    card.fields = (draft.rows || {}).fields || [];
    return card;
  }

  function formFromOldDraft(draft) {
    var b = draft.build || {};
    var card = emptyCard("forms");
    card.layout = b.layout || "";
    card.layoutOther = b.layoutOther || "";
    card.fields = b.formFields || "";
    card.readOnly = b.readOnly || "";
    card.dropdowns = b.dropdowns || "";
    card.buttons = (draft.rows || {}).buttons || [];
    return card;
  }

  // ---- Repeating rows: table fields (4a cards) and Form buttons (4b cards) ----
  // [property, control, example placeholder]. The examples follow the stock-count example used in index.html.
  var ROW_COLUMNS = {
    fields: [["name", "text", "e.g. CountedQty"], ["type", "select"], ["length", "text", "e.g. 18,2"], ["required", "check"], ["key", "check"], ["default", "text", "e.g. 0"]],
    buttons: [["caption", "text", "e.g. Save count"], ["action", "text", "e.g. Saves the row"], ["result", "text", 'e.g. "Count saved"']]
  };

  // One table row; each control's aria-label is its property name. onRemove(tr) runs when × is clicked.
  function makeRow(list, row, onRemove) {
    var tr = el("tr");
    ROW_COLUMNS[list].forEach(function (col) {
      var td = el("td");
      var input;
      if (col[1] === "select") {
        input = el("select");
        FIELD_TYPES.forEach(function (t) { var o = el("option", "", t); o.value = t; input.appendChild(o); });
        input.value = row[col[0]] || FIELD_TYPES[0];
      } else if (col[1] === "check") {
        input = el("input");
        input.type = "checkbox";
        input.checked = !!row[col[0]];
      } else {
        input = el("input");
        input.value = row[col[0]] || "";
        if (col[2]) { input.placeholder = col[2]; }
      }
      input.setAttribute("aria-label", col[0]);
      input.addEventListener(col[1] === "text" ? "input" : "change", function () {
        row[col[0]] = col[1] === "check" ? input.checked : input.value;
        refresh();
      });
      td.appendChild(input);
      tr.appendChild(td);
    });
    var remove = el("button", "FX_Remove", "×");
    remove.type = "button";
    remove.title = "Remove this row";
    remove.addEventListener("click", function () { onRemove(tr); });
    var removeCell = el("td");
    removeCell.appendChild(remove);
    tr.appendChild(removeCell);
    return tr;
  }

  // ---- Cards: one per table (section 4a) and one per Form (section 4b) ----
  // The cards in the page are the source of truth: readCards() rebuilds state.tables / state.forms on every
  // refresh, and renderCards() rebuilds the page from a list (start-up, add, remove, clear).
  var CARDS = {
    tables: { list: "FX_TableCards", template: "FX_TableCardTemplate", rows: "fields", name: "table", label: "Table", show: "ido" },
    forms: { list: "FX_FormCards", template: "FX_FormCardTemplate", rows: "buttons", name: "form", label: "Form", show: "form" }
  };

  function emptyCard(kind) {
    return kind === "forms" ? { connect: "standalone", buttons: [] } : { fields: [] };
  }

  function removeTableRow(tr) {
    tr.remove();
    refresh();
  }

  function renderCards(kind, cards) {
    var cfg = CARDS[kind];
    var list = document.getElementById(cfg.list);
    var template = document.getElementById(cfg.template);
    list.innerHTML = "";
    cards.forEach(function (card, index) {
      var node = template.content.firstElementChild.cloneNode(true);
      Array.prototype.forEach.call(node.querySelectorAll("[data-key]"), function (input) {
        var key = input.getAttribute("data-key");
        input.name = cfg.name + (index + 1) + "_" + key; // unique per card, so problems can jump to it
        if (input.type === "radio") { input.checked = card[key] === input.value; } else if (key in card) { input.value = card[key]; }
      });
      var body = node.querySelector('[data-list="' + cfg.rows + '"] tbody');
      (card[cfg.rows] || []).forEach(function (row) { body.appendChild(makeRow(cfg.rows, row, removeTableRow)); });
      node.querySelector("[data-card-add-row]").addEventListener("click", function () {
        body.appendChild(makeRow(cfg.rows, {}, removeTableRow));
        body.querySelector("tr:last-child input").focus();
        refresh();
      });
      var remove = node.querySelector("[data-card-remove]");
      remove.hidden = cards.length < 2;
      remove.addEventListener("click", function () {
        var now = readCards(kind);
        now.splice(index, 1);
        renderCards(kind, now);
        setStatus(cfg.label + " " + (index + 1) + " removed.");
        refresh();
      });
      list.appendChild(node);
    });
  }

  function readCards(kind) {
    var cfg = CARDS[kind];
    return Array.prototype.map.call(document.getElementById(cfg.list).children, function (node) {
      var card = {};
      card[cfg.rows] = [];
      Array.prototype.forEach.call(node.querySelectorAll("[data-key]"), function (input) {
        var key = input.getAttribute("data-key");
        if (input.type !== "radio") { card[key] = input.value; } else if (input.checked) { card[key] = input.value; } else if (!(key in card)) { card[key] = ""; }
      });
      Array.prototype.forEach.call(node.querySelectorAll('[data-list="' + cfg.rows + '"] tbody tr'), function (tr) {
        var row = {};
        Array.prototype.forEach.call(tr.querySelectorAll("input, select"), function (input) {
          row[input.getAttribute("aria-label")] = input.type === "checkbox" ? input.checked : input.value;
        });
        card[cfg.rows].push(row);
      });
      return card;
    });
  }

  function addCard(kind) {
    var cards = readCards(kind);
    cards.push(emptyCard(kind));
    renderCards(kind, cards);
    refresh();
    var name = document.getElementById(CARDS[kind].list).lastElementChild.querySelector('[data-key="name"]');
    name.closest(".FX_FormCard").scrollIntoView({ behavior: "smooth", block: "start" });
    name.focus({ preventScroll: true });
  }

  // Every name of one kind in the request: the cards (when their section is shown) first, then the
  // section 3 field (formName / idoName), without repeats.
  function cardNames(kind, d) {
    var names = [];
    var push = function (n) { n = (n || "").trim(); if (n && names.indexOf(n) < 0) { names.push(n); } };
    if (shown(CARDS[kind].show, d)) { state[kind].forEach(function (c) { push(c.name); }); }
    (d[kind === "forms" ? "formName" : "idoName"] || "").split(/[,\n]/).forEach(push);
    return names;
  }

  function fillNameList(id, names) {
    var list = document.getElementById(id);
    list.innerHTML = "";
    names.forEach(function (n) { var o = el("option"); o.value = n; list.appendChild(o); });
  }

  // Card titles, the Form connection hint and fields, and the name suggestions.
  function updateCards(d) {
    ["tables", "forms"].forEach(function (kind) {
      Array.prototype.forEach.call(document.getElementById(CARDS[kind].list).children, function (node, i) {
        var c = state[kind][i];
        node.querySelector("[data-card-title]").textContent = CARDS[kind].label + " " + (i + 1) + (c.name.trim() ? ": " + c.name.trim() : "");
        if (kind !== "forms") { return; }
        var connect = CONNECT[c.connect] ? c.connect : "standalone";
        node.querySelector("[data-connect-hint]").textContent = CONNECT[connect].hint;
        node.querySelector("[data-connect-detail]").hidden = connect === "standalone";
      });
    });
    fillNameList("FX_FormNameList", cardNames("forms", d));
    fillNameList("FX_TableNameList", cardNames("tables", d));
  }

  // ---- Prefill from assets/ (GET /api/apps) ----
  function loadApps() {
    fetch(APPS_URL).then(function (res) {
      if (!res.ok) { throw new Error("HTTP " + res.status); }
      return res.json();
    }).then(function (apps) {
      state.apps = apps;
      log("apps", apps);
      fillAppSelects();
      showFacts();
    }).catch(function (err) {
      log("apps not loaded", err);
      setStatus("Could not read the apps in assets/ (" + err.message + "). Start the page with: cd assets && npm run preview");
    });
  }

  function fillAppSelects() {
    Array.prototype.forEach.call(document.querySelectorAll("[data-apps]"), function (select) {
      var keep = select.value;
      select.innerHTML = "";
      var none = el("option", "", "-- pick an app --");
      none.value = "";
      select.appendChild(none);
      state.apps.forEach(function (a) {
        var option = el("option", "", a.app + (a.title ? " (" + a.title + ")" : ""));
        option.value = a.app;
        select.appendChild(option);
      });
      select.value = keep;
    });
    restoreSelects();
  }

  // Select values saved in the draft can only be set once their options exist.
  var pendingSelects = null;
  function restoreSelects() {
    if (!pendingSelects) { return; }
    if (pendingSelects.existingApp) { buildForm.elements.existingApp.value = pendingSelects.existingApp; }
    if (pendingSelects.app) { changeForm.elements.app.value = pendingSelects.app; }
    pendingSelects = null;
    showFacts();
    refresh();
  }

  // Build mode: picking an existing app sets the prefix to the app's own (a change keeps its build's prefix)
  // and fills only the empty names in section 3.
  function prefillBuildNames() {
    var a = findApp(buildForm.elements.existingApp.value);
    if (!a) { return; }
    var appPrefix = (a.app.match(APP_PREFIX_RE) || [])[0];
    if (appPrefix && buildForm.elements.prefix.value !== appPrefix) {
      buildForm.elements.prefix.value = appPrefix;
      setStatus("Prefix set to " + appPrefix + " from " + a.app + ".");
    }
    if (!buildForm.elements.formName.value && a.scriptClass) { buildForm.elements.formName.value = a.scriptClass; }
    if (!buildForm.elements.assetFolder.value && a.pageFiles.indexOf("index.html") >= 0) { buildForm.elements.assetFolder.value = a.app + "/index.html"; }
    refresh();
  }

  // Change mode: suggestions for Target and Where, plus what the repo copy of the app contains.
  function showFacts() {
    var a = findApp(changeForm.elements.app.value);
    var targets = document.getElementById("FX_TargetList");
    var wheres = document.getElementById("FX_WhereList");
    var facts = document.getElementById("FX_Facts");
    targets.innerHTML = "";
    wheres.innerHTML = "";
    facts.innerHTML = "";
    facts.hidden = !a;
    if (!a) { return; }

    var targetValues = a.pageFiles.map(function (f) { return a.app + "/" + f; });
    if (a.scriptFile) { targetValues.push((a.scriptClass || a.app) + " form script (" + a.scriptFile + ")"); }
    var whereValues = a.scriptMethods.map(function (m) { return m + " method"; })
      .concat(a.headings.map(function (h) { return '"' + h.trim() + '" section'; }))
      .concat(a.sections);
    targetValues.forEach(function (v) { var o = el("option"); o.value = v; targets.appendChild(o); });
    whereValues.forEach(function (v) { var o = el("option"); o.value = v; wheres.appendChild(o); });

    facts.appendChild(el("b", "", "Read from assets/" + a.app + " (the repo copy, not the tenant; the live version may differ)"));
    var dl = el("dl");
    [
      ["Files", a.files.join(", ")],
      ["Form script class", a.scriptClass],
      ["C# methods", a.scriptMethods.join(", ")],
      ["Result variable", a.resultVars.join(", ")],
      ["Page calls", a.pageCalls.join(", ")]
    ].forEach(function (pair) {
      if (!pair[1]) { return; }
      dl.appendChild(el("dt", "", pair[0]));
      dl.appendChild(el("dd", "", pair[1]));
    });
    facts.appendChild(dl);
    facts.appendChild(el("p", "FX_Hint", "Pick a Target and a Where from the suggestions (start typing), or type your own."));
  }

  // ---- Section 4 visibility (build mode) ----
  function updateSections(data) {
    var any = false;
    Array.prototype.forEach.call(buildForm.querySelectorAll("[data-show-for]"), function (fs) {
      var show = fs.getAttribute("data-show-for").split(" ").some(function (t) { return data.type.indexOf(t) >= 0; });
      fs.hidden = !show;
      any = any || show;
    });
    document.getElementById("FX_NoDetails").hidden = any;
    var changing = data.type.indexOf("changeFx") >= 0;
    document.getElementById("FX_ExistingWrap").hidden = !changing;
    document.getElementById("FX_GuideWarn").hidden = !(data.guide !== "none" && data.evidence === "light");
    applyPrefix(shownPrefix(data));
  }

  function shown(type, data) {
    return data.type.indexOf(type) >= 0;
  }

  // ---- Prompt: new build (build-request-prompt.md) ----
  function buildPrompt(d) {
    var out = ["/mongoose-builder", ""];
    var t = function (key) { return box(d.type.indexOf(key) >= 0); };
    var p = shownPrefix(d);

    out.push("## 1. Goal (required)");
    out.push(line("What I want, in one or two sentences", d.goal));
    out.push(line("Who uses it and for what", d.users));
    out.push("");

    out.push("## 2. Build type (required, pick one or more)");
    out.push(t("form") + " new Form            " + t("ido") + " new IDO + SQL table     " + t("portal") + " new portal / shell (Flex) Form");
    out.push(t("dashboard") + " dashboard / chart   " + t("webpage") + " web page (HTML/JS/CSS asset)   " + t("changeFx") + " change an existing factory object (built with this prefix)");
    out.push(t("changeNonFx") + " change an existing object the factory didn't build (name it in section 6)");
    out.push(line('New Forms are built as Flex Forms. Write "Classic" here if you want a Classic Form instead', d.classic ? "Classic" : ""));
    if (shown("changeFx", d) && d.existingApp) { out.push(line("Existing app to change", d.existingApp)); }
    out.push("");

    out.push("## 3. Names");
    out.push(line("Prefix (every new object name starts with it; keep FX_ unless you want another)", d.prefix));
    out.push(line("Form name(s) (" + p + "…)", cardNames("forms", d).join(", ")));
    out.push(line("IDO / table name(s) (" + p + "…)", cardNames("tables", d).join(", ")));
    out.push(line("Asset folder (" + p + "…/index.html)", d.assetFolder));
    out.push("Leave blank and Claude will propose names in the plan for you to approve.");
    out.push("");

    var details = [];
    if (shown("ido", d)) {
      details.push("### 4a. IDOs / tables (one block per table)");
      state.tables.forEach(function (t, i) { details.push.apply(details, tableBlock(t, i, p)); });
    }
    if (shown("form", d)) {
      details.push("### 4b. Forms (one block per Form)");
      state.forms.forEach(function (f, i) { details.push.apply(details, formBlock(f, i, p)); });
    }
    if (shown("portal", d)) {
      details.push("### 4c. Portal / shell");
      details.push("Pages (e.g. sign-in, home, list, cart) and what each shows:");
      var pages = bullets(d.pages);
      details.push.apply(details, pages.length ? pages : ["-"]);
      details.push(line("Menu / navigation items → which page", d.menu));
      details.push(line("Header content (title, logo, user name)", d.header));
      details.push("Sign-in needed? " + box(d.signIn === "no") + " no  " + box(d.signIn === "yes") + " yes — users come from:" + ((d.signInSource || "").trim() ? " " + d.signInSource.trim() : ""));
      details.push(line("Tiles / cards (which data, which fields on a tile, click action)", d.tiles));
      details.push("");
    }
    if (shown("dashboard", d) || shown("webpage", d)) {
      details.push("### 4d. Web page / dashboard");
      details.push(line("Data shown (which IDO or API, which fields)", d.dataShown));
      details.push(line("KPI cards / charts / tables (what each one counts or shows)", d.widgets));
      details.push(line("Filters, sorting, refresh", d.filters));
      details.push(line("API calls (endpoint + verb). Only approved calls run; new ones need my approval here", d.apiCalls));
      details.push("");
    }
    if (details.length) {
      out.push("## 4. Details by type", "");
      out.push.apply(out, details);
    }

    out.push("## 5. Look and feel");
    out.push(line("Mock screenshot / reference (attach or give a path)", d.mock));
    out.push(line('Colors / theme / fonts (or "match <an existing page>")', d.theme));
    out.push("Must work on: " + ["desktop", "tablet", "phone"].map(function (v) { return box(d.device.indexOf(v) >= 0) + " " + v; }).join("  "));
    out.push("");

    out.push("## 6. Scope, approvals and limits");
    out.push(line("Final scope for Forms (User / Group <name> / Site) — default User; Group or Site is saved only after the User-scope version passes", scopeText(d)));
    out.push(line("Group/Site save approved", scopeApprovalText(d)));
    out.push(line('Existing objects the factory didn\'t build that may be changed (name each one, or "none")', d.nonFx));
    out.push(line("Other tenant-wide steps allowed (FormSync, deployment, metadata cache unload) — default none", d.tenantWide));
    out.push(line("Outbound calls allowed (exact endpoint + verb) — default none beyond those already approved", d.outbound));
    out.push(line("Data I must not touch", d.noTouch));
    out.push("");

    out.push("## 7. Done means (required)");
    out.push("I will accept it when (list what I can see or do at runtime):");
    var done = bullets(d.done);
    out.push.apply(out, done.length ? done : ["- ", "- "]);
    out.push("");

    out.push("## 8. Anything else");
    out.push(line("Known problems, deadlines, things to avoid", d.other));
    out.push("");

    out.push("## 9. Evidence and guide");
    out.push("Evidence: " + d.evidence);
    out.push("Guide with pictures: " + d.guide);
    return out.join("\n");
  }

  // One "#### Table N" block of section 4a.
  function tableBlock(t, index, p) {
    var out = ["#### Table " + (index + 1)];
    var text = function (v) { return (v || "").trim(); };
    out.push(line("Table / IDO name (" + p + "…)", t.name));
    out.push(line('Is the data in an existing IDO? (name it, or "new")', t.existing));
    out.push("Fields — one per line: name | type (text / number / decimal / date / yes-no) | length or precision | required? | key? | default");
    var fields = (t.fields || []).filter(function (r) { return text(r.name); });
    if (fields.length === 0) { out.push("-", "-"); }
    fields.forEach(function (r) {
      out.push("- " + [text(r.name), r.type || "", text(r.length), r.required ? "required" : "optional", r.key ? "key" : "not key", text(r["default"])].join(" | "));
    });
    out.push(line("Relations / lookups (field → other table or IDO)", t.relations));
    out.push(line("Calculated fields (formula in words)", t.calculated));
    out.push(line("Test rows to create (fake data only)", t.testRows));
    out.push("");
    return out;
  }

  // One "#### Form N" block of section 4b. "Connects to" and "Linked by" only appear for a connected Form,
  // so a blank there still means "ask me".
  function formBlock(f, index, p) {
    var out = ["#### Form " + (index + 1)];
    var connect = CONNECT[f.connect] ? f.connect : "standalone";
    var text = function (v) { return (v || "").trim(); };
    out.push(line("Form name (" + p + "…)", f.name));
    out.push(line("Data it shows (IDO)", f.ido));
    out.push(line("How it connects (" + CONNECT_ORDER.map(function (k) { return CONNECT[k].text; }).join(" / ") + ")", CONNECT[connect].text));
    if (connect !== "standalone") {
      out.push(line("Connects to (which Form)", f.parent));
      out.push(line("Linked by (what it passes or filters on)", f.link));
    }
    var layouts = ["grid + detail", "grid only", "detail only"].map(function (l) { return box(f.layout === l) + " " + l; });
    out.push("Layout: " + layouts.join("   ") + "   " + box(f.layout === "other") + " other:" + (text(f.layoutOther) ? " " + text(f.layoutOther) : ""));
    out.push("Fields shown, in order (with captions as the user should see them):");
    var shownFields = bullets(f.fields);
    out.push.apply(out, shownFields.length ? shownFields : ["-"]);
    out.push(line("Read-only fields", f.readOnly));
    out.push(line("Dropdowns / validation (field → allowed values or source)", f.dropdowns));
    out.push(line("Second grid on this Form (another IDO, e.g. the selected row's lines)", f.secondGrid));
    out.push("Buttons — one per line: caption | what happens when clicked | what the user sees after");
    var buttons = (f.buttons || []).filter(function (r) { return text(r.caption); });
    if (buttons.length === 0) { out.push("-"); }
    buttons.forEach(function (r) { out.push("- " + [text(r.caption), text(r.action), text(r.result)].join(" | ")); });
    out.push("");
    return out;
  }

  // Card checks: every name starts with the prefix and is used by one card only; each connected Form
  // points at a Form of this request.
  function cardProblems(kind, d, prefix, add) {
    var cfg = CARDS[kind];
    var seen = {};
    var forms = cardNames("forms", d);
    state[kind].forEach(function (c, i) {
      var where = "Section " + (kind === "forms" ? "4b" : "4a") + ", " + cfg.label + " " + (i + 1) + ": ";
      var field = cfg.name + (i + 1) + "_";
      var name = (c.name || "").trim();
      var parent = (c.parent || "").trim();
      if (name && prefix && name.indexOf(prefix) !== 0) { add(where + name + " doesn't start with " + prefix + ".", field + "name", true); }
      if (name && seen[name]) { add(where + name + " is also the name of " + cfg.label + " " + seen[name] + ".", field + "name", true); }
      if (name && !seen[name]) { seen[name] = i + 1; }
      if (kind !== "forms" || !c.connect || c.connect === "standalone") { return; }
      if (!parent) {
        add(where + "say which Form it connects to, or Claude will ask.", field + "parent", true);
      } else if (parent === name) {
        add(where + "it can't connect to itself.", field + "parent", true);
      } else if (forms.indexOf(parent) < 0) {
        add(where + parent + " isn't a Form in this request. Adding a tile, button or region to an existing Form changes that Form (sections 2 and 6).", field + "parent", true);
      }
    });
  }

  // Each problem names the field it is about, so the list can jump there.
  function buildProblems(d) {
    var problems = [];
    var add = function (text, field, warn) { problems.push({ text: text, field: field, warn: !!warn }); };
    if (!d.goal.trim()) { add("Section 1: say what you want.", "goal"); }
    if (d.type.length === 0) { add("Section 2: pick at least one build type.", "type"); }
    if (bullets(d.done).length === 0) { add("Section 7: list at least one thing you will check at runtime.", "done"); }
    var prefix = d.prefix.trim();
    if (!PREFIX_RE.test(prefix)) {
      add("Section 3: the prefix must be a letter, then letters or digits, then _ (for example FX_ or ACME_).", "prefix");
    } else {
      ["formName", "idoName", "assetFolder"].forEach(function (name) {
        var value = d[name].trim();
        if (value && value.indexOf(prefix) !== 0) { add("Section 3: " + value + " doesn't start with " + prefix + ". Changing an object the factory didn't build needs your approval in section 6.", name, true); }
      });
    }
    ["tables", "forms"].forEach(function (kind) {
      if (shown(CARDS[kind].show, d)) { cardProblems(kind, d, PREFIX_RE.test(prefix) ? prefix : "", add); }
    });
    scopeProblems(d, "Section 6: ", add);
    if (shown("changeNonFx", d) && !d.nonFx.trim()) { add("Section 6: name the object(s) the factory didn't build that may be changed.", "nonFx"); }
    if (shown("changeFx", d) && !d.existingApp && !d.formName.trim() && !d.assetFolder.trim()) { add("Section 2/3: name the existing factory object to change.", "existingApp", true); }
    if ((shown("dashboard", d) || shown("webpage", d)) && d.apiCalls.trim() && !d.outbound.trim()) {
      add("Section 6: the API calls in 4d run only if approved. List them under Outbound calls, or Claude will ask.", "outbound", true);
    }
    if (d.guide !== "none" && d.evidence === "light") { add("Section 9: a guide with pictures needs full evidence.", "guide", true); }
    return problems;
  }

  // ---- Prompt: targeted change (change-request-prompt.md) ----
  function changePrompt(d) {
    return [
      "/mongoose-builder",
      "Change request (keep everything else as it is)",
      "",
      line("Target", d.target),
      line("Where", d.where),
      line("Change", d.change),
      line("Why (optional)", d.why),
      line("Don't touch", d.dontTouch),
      line("Scope (User / Group <name> / Site) — default User; Group or Site is saved only after the User-scope version passes", scopeText(d)),
      line("Group/Site save approved", scopeApprovalText(d)),
      line("Done means", d.done)
    ].join("\n");
  }

  function changeProblems(d) {
    var problems = [];
    if (!d.target.trim()) { problems.push({ text: "Target: name the object to change (pick an app to get suggestions).", field: "target" }); }
    if (!d.change.trim()) { problems.push({ text: "Change: say what should be different.", field: "change" }); }
    if (!d.done.trim()) { problems.push({ text: "Done means: say what you will see at runtime.", field: "done" }); }
    if (!d.dontTouch.trim()) { problems.push({ text: 'Don\'t touch is blank: Claude keeps everything else as it is, but naming what must not change (or "everything else") is clearer.', field: "dontTouch", warn: true }); }
    scopeProblems(d, "Scope: ", function (text, field, warn) { problems.push({ text: text, field: field, warn: !!warn }); });
    return problems;
  }

  // ---- Problems, section rail and ready badge ----
  function activeForm() {
    return state.mode === "build" ? buildForm : changeForm;
  }

  // First visible control for a field name (a checkbox group gives its first box).
  function fieldInput(form, name) {
    var input = form.elements[name];
    if (input && input.length !== undefined && !input.tagName) { input = input[0]; }
    return input && !input.closest("[hidden]") ? input : null;
  }

  function jumpTo(form, name) {
    var input = fieldInput(form, name);
    if (!input) { return; }
    input.closest("fieldset").scrollIntoView({ behavior: "smooth", block: "start" });
    input.focus({ preventScroll: true });
  }

  // Rebuilt only when the list changes: leaving a field fires "change", and rebuilding then would swallow
  // the click on a problem that caused it.
  var shownProblems = "";
  function renderProblems(problems) {
    var form = activeForm();
    var key = state.mode + JSON.stringify(problems);
    if (key === shownProblems) { return; }
    shownProblems = key;
    problemList.innerHTML = "";
    problems.forEach(function (p) {
      var li = el("li", p.warn ? "is-warn" : "");
      var button = el("button", "", p.text);
      button.type = "button";
      button.addEventListener("click", function () { jumpTo(form, p.field); });
      li.appendChild(button);
      problemList.appendChild(li);
    });
    var missing = problems.filter(function (p) { return !p.warn; }).length;
    var warns = problems.length - missing;
    if (missing) {
      readyPill.className = "FX_Ready is-missing";
      readyPill.textContent = missing + (missing === 1 ? " required item left" : " required items left");
    } else if (warns) {
      readyPill.className = "FX_Ready is-warn";
      readyPill.textContent = "Ready, " + warns + (warns === 1 ? " thing" : " things") + " worth a look";
    } else {
      readyPill.className = "FX_Ready is-ready";
      readyPill.textContent = "Ready to copy";
    }
  }

  // A section counts as filled once any of its controls holds something other than its default
  // (so the pre-selected User scope and the FX_ prefix don't count).
  function sectionFilled(fieldset) {
    return Array.prototype.some.call(fieldset.querySelectorAll("input, textarea, select"), function (input) {
      if (input.closest("[hidden]")) { return false; }
      if (input.type === "checkbox" || input.type === "radio") { return input.checked && !input.defaultChecked; }
      if (input.tagName === "SELECT") { return input.selectedIndex > 0; }
      return input.value.trim() !== "" && input.value !== input.defaultValue;
    });
  }

  function renderRail(problems) {
    var form = activeForm();
    var status = {};
    problems.forEach(function (p) {
      var input = fieldInput(form, p.field);
      var fs = input && input.closest("fieldset");
      if (fs && status[fs.id] !== "is-missing") { status[fs.id] = p.warn ? "is-warn" : "is-missing"; }
    });
    railList.innerHTML = "";
    Array.prototype.forEach.call(form.querySelectorAll("fieldset[data-nav]"), function (fs) {
      if (fs.hidden) { return; }
      var nav = fs.getAttribute("data-nav").split("|");
      var link = el("a", status[fs.id] || (sectionFilled(fs) ? "is-filled" : ""));
      link.href = "#" + fs.id;
      if (nav[0]) { link.appendChild(el("span", "FX_Num", nav[0])); }
      link.appendChild(el("span", "", nav[1]));
      link.addEventListener("click", function (e) {
        e.preventDefault();
        fs.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      var li = el("li");
      li.appendChild(link);
      railList.appendChild(li);
    });
  }

  // ---- Render ----
  function refresh() {
    var problems;
    if (state.mode === "build") {
      var d = readForm(buildForm);
      state.tables = readCards("tables");
      state.forms = readCards("forms");
      updateCards(d);
      updateSections(d);
      updateScope(buildForm, d);
      promptBox.textContent = buildPrompt(d);
      problems = buildProblems(d);
    } else {
      var c = readForm(changeForm);
      updateScope(changeForm, c);
      promptBox.textContent = changePrompt(c);
      problems = changeProblems(c);
    }
    renderProblems(problems);
    renderRail(problems);
    var text = promptBox.textContent;
    promptMeta.textContent = text.split("\n").length + " lines, " + text.length + " characters";
    saveDraft();
  }

  function setMode(mode) {
    state.mode = mode;
    buildForm.hidden = mode !== "build";
    changeForm.hidden = mode !== "change";
    Array.prototype.forEach.call(document.querySelectorAll("[data-mode][role=tab]"), function (tab) {
      tab.setAttribute("aria-selected", String(tab.getAttribute("data-mode") === mode));
    });
    setStatus("");
    refresh();
  }

  // ---- Output actions ----
  function copyPrompt() {
    var text = promptBox.textContent;
    var hasErrors = problemList.querySelectorAll("li:not(.is-warn)").length > 0;
    var done = function () {
      setStatus(hasErrors ? "Copied, but the red items above are still blank: Claude will ask about them." : "Copied. Paste it into Claude Code.");
      flashCopied();
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done, function (err) {
        log("clipboard refused", err);
        selectPrompt();
      });
    } else {
      selectPrompt();
    }
  }

  // The Copy button reads "Copied" for a moment and the prompt outline flashes once.
  var copiedTimer = null;
  function flashCopied() {
    var label = copyButton.querySelector("span");
    label.textContent = "Copied";
    copyButton.classList.add("is-done");
    promptBox.classList.remove("is-flash");
    void promptBox.offsetWidth; // restart the animation
    promptBox.classList.add("is-flash");
    clearTimeout(copiedTimer);
    copiedTimer = setTimeout(function () {
      label.textContent = "Copy prompt";
      copyButton.classList.remove("is-done");
    }, 1600);
  }

  function selectPrompt() {
    var range = document.createRange();
    range.selectNodeContents(promptBox);
    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
    setStatus("The browser blocked Copy. The prompt is selected: press Ctrl+C.");
  }

  function downloadPrompt() {
    var stamp = new Date().toISOString().slice(0, 10);
    var blob = new Blob(["```text\n" + promptBox.textContent + "\n```\n"], { type: "text/markdown" });
    var a = el("a");
    a.href = URL.createObjectURL(blob);
    a.download = "request-" + state.mode + "-" + stamp + ".md";
    document.body.appendChild(a);
    a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 0);
    setStatus("Downloaded " + a.download + ".");
  }

  // Clear takes two clicks: the first arms the button for a few seconds, the second clears.
  var RESET_ARM_MS = 3000;
  var resetTimer = null;
  function disarmReset() {
    clearTimeout(resetTimer);
    resetTimer = null;
    resetButton.classList.remove("is-armed");
    resetButton.querySelector("span").textContent = "Clear form";
  }

  function resetForm() {
    if (!resetTimer) {
      resetButton.classList.add("is-armed");
      resetButton.querySelector("span").textContent = "Click again to clear";
      resetTimer = setTimeout(disarmReset, RESET_ARM_MS);
      return;
    }
    disarmReset();
    if (state.mode === "build") {
      buildForm.reset();
      renderCards("tables", [emptyCard("tables")]);
      renderCards("forms", [emptyCard("forms")]);
    } else {
      changeForm.reset();
      showFacts();
    }
    setStatus("Form cleared.");
    refresh();
  }

  // ---- Wiring ----
  Array.prototype.forEach.call(document.querySelectorAll("[data-mode][role=tab]"), function (tab) {
    tab.addEventListener("click", function () { setMode(tab.getAttribute("data-mode")); });
  });
  [buildForm, changeForm].forEach(function (form) {
    form.addEventListener("input", refresh);
    form.addEventListener("change", refresh);
    form.addEventListener("submit", function (e) { e.preventDefault(); });
  });
  buildForm.elements.existingApp.addEventListener("change", prefillBuildNames);
  changeForm.elements.app.addEventListener("change", showFacts);
  document.getElementById("FX_AddTable").addEventListener("click", function () { addCard("tables"); });
  document.getElementById("FX_AddForm").addEventListener("click", function () { addCard("forms"); });
  copyButton.addEventListener("click", copyPrompt);
  document.getElementById("FX_Download").addEventListener("click", downloadPrompt);
  resetButton.addEventListener("click", resetForm);
  resetButton.addEventListener("blur", disarmReset);

  loadDraft();
  try {
    var saved = JSON.parse(localStorage.getItem(DRAFT_KEY) || "null");
    if (saved) { pendingSelects = { existingApp: (saved.build || {}).existingApp, app: (saved.change || {}).app }; }
  } catch (e) { log("draft selects not read", e); }
  renderCards("tables", state.tables.length ? state.tables : [emptyCard("tables")]);
  renderCards("forms", state.forms.length ? state.forms : [emptyCard("forms")]);
  setMode(state.mode);
  loadApps();
})();
