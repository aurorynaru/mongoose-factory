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

  // ---- State ----
  var state = {
    mode: "build",
    apps: [],           // from /api/apps
    rows: { fields: [], buttons: [] }
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

  function findApp(name) {
    for (var i = 0; i < state.apps.length; i++) { if (state.apps[i].app === name) { return state.apps[i]; } }
    return null;
  }

  // ---- Draft (this browser only; the page works without it) ----
  function saveDraft() {
    try {
      localStorage.setItem(DRAFT_KEY, JSON.stringify({
        mode: state.mode, build: readForm(buildForm), change: readForm(changeForm), rows: state.rows
      }));
    } catch (e) { log("draft not saved", e); }
  }

  function loadDraft() {
    try {
      var draft = JSON.parse(localStorage.getItem(DRAFT_KEY) || "null");
      if (!draft) { return; }
      state.mode = draft.mode === "change" ? "change" : "build";
      state.rows = draft.rows || state.rows;
      writeForm(buildForm, draft.build || {});
      writeForm(changeForm, draft.change || {});
      setStatus("Draft restored from this browser.");
    } catch (e) { log("draft not loaded", e); }
  }

  // ---- Repeating rows: IDO fields and form buttons ----
  var ROW_COLUMNS = {
    fields: [["name", "text"], ["type", "select"], ["length", "text"], ["required", "check"], ["key", "check"], ["default", "text"]],
    buttons: [["caption", "text"], ["action", "text"], ["result", "text"]]
  };

  function renderRows(list) {
    var body = document.querySelector('[data-list="' + list + '"] tbody');
    body.innerHTML = "";
    state.rows[list].forEach(function (row, index) {
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
      remove.addEventListener("click", function () {
        state.rows[list].splice(index, 1);
        renderRows(list);
        refresh();
      });
      var removeCell = el("td");
      removeCell.appendChild(remove);
      tr.appendChild(removeCell);
      body.appendChild(tr);
    });
  }

  function addRow(list) {
    state.rows[list].push(list === "fields" ? { type: FIELD_TYPES[0] } : {});
    renderRows(list);
    var inputs = document.querySelectorAll('[data-list="' + list + '"] tbody tr:last-child input');
    if (inputs.length) { inputs[0].focus(); }
    refresh();
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

  // Build mode: picking an existing app fills only the empty names in section 3.
  function prefillBuildNames() {
    var a = findApp(buildForm.elements.existingApp.value);
    if (!a) { return; }
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
  }

  function shown(type, data) {
    return data.type.indexOf(type) >= 0;
  }

  // ---- Prompt: new build (build-request-prompt.md) ----
  function buildPrompt(d) {
    var out = ["/mongoose-builder", ""];
    var t = function (key) { return box(d.type.indexOf(key) >= 0); };

    out.push("## 1. Goal (required)");
    out.push(line("What I want, in one or two sentences", d.goal));
    out.push(line("Who uses it and for what", d.users));
    out.push("");

    out.push("## 2. Build type (required, pick one or more)");
    out.push(t("form") + " new Form            " + t("ido") + " new IDO + SQL table     " + t("portal") + " new portal / shell (Flex) Form");
    out.push(t("dashboard") + " dashboard / chart   " + t("webpage") + " web page (HTML/JS/CSS asset)   " + t("changeFx") + " change an existing FX_ object");
    out.push(t("changeNonFx") + " change an existing non-FX_ object (name it in section 6)");
    out.push(line('New Forms are built as Flex Forms. Write "Classic" here if you want a Classic Form instead', d.classic ? "Classic" : ""));
    if (shown("changeFx", d) && d.existingApp) { out.push(line("Existing FX_ app to change", d.existingApp)); }
    out.push("");

    out.push("## 3. Names");
    out.push(line("Form name(s) (FX_…)", d.formName));
    out.push(line("IDO / table name (FX_…)", d.idoName));
    out.push(line("Asset folder (FX_…/index.html)", d.assetFolder));
    out.push("Leave blank and Claude will propose names in the plan for you to approve.");
    out.push("");

    var details = [];
    if (shown("ido", d)) {
      details.push("### 4a. IDO / table");
      details.push(line('Is the data in an existing IDO? (name it, or "new")', d.idoExisting));
      details.push("Fields — one per line: name | type (text / number / decimal / date / yes-no) | length or precision | required? | key? | default");
      var fields = state.rows.fields.filter(function (r) { return (r.name || "").trim(); });
      if (fields.length === 0) { details.push("-", "-"); }
      fields.forEach(function (r) {
        details.push("- " + [r.name.trim(), r.type || "", (r.length || "").trim(), r.required ? "required" : "optional", r.key ? "key" : "not key", (r["default"] || "").trim()].join(" | "));
      });
      details.push(line("Relations / lookups (field → other table or IDO)", d.relations));
      details.push(line("Calculated fields (formula in words)", d.calculated));
      details.push(line("Test rows to create (fake data only)", d.testRows));
      details.push("");
    }
    if (shown("form", d)) {
      details.push("### 4b. Form");
      var layouts = ["grid + detail", "grid only", "detail only"].map(function (l) { return box(d.layout === l) + " " + l; });
      details.push("Layout: " + layouts.join("   ") + "   " + box(d.layout === "other") + " other:" + ((d.layoutOther || "").trim() ? " " + d.layoutOther.trim() : ""));
      details.push("Fields shown, in order (with captions as the user should see them):");
      var shownFields = bullets(d.formFields);
      details.push.apply(details, shownFields.length ? shownFields : ["-"]);
      details.push(line("Read-only fields", d.readOnly));
      details.push(line("Dropdowns / validation (field → allowed values or source)", d.dropdowns));
      details.push("Buttons — one per line: caption | what happens when clicked | what the user sees after");
      var buttons = state.rows.buttons.filter(function (r) { return (r.caption || "").trim(); });
      if (buttons.length === 0) { details.push("-"); }
      buttons.forEach(function (r) { details.push("- " + [r.caption.trim(), (r.action || "").trim(), (r.result || "").trim()].join(" | ")); });
      details.push("");
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
    out.push(line('Colors / theme / fonts (or "match FX_… ")', d.theme));
    out.push("Must work on: " + ["desktop", "tablet", "phone"].map(function (v) { return box(d.device.indexOf(v) >= 0) + " " + v; }).join("  "));
    out.push("");

    out.push("## 6. Approvals and limits");
    out.push(line('Existing non-FX_ objects that may be changed (name each one, or "none")', d.nonFx));
    out.push(line("Tenant-wide steps allowed (Group/Site save, FormSync, deployment, cache unload) — default none", d.tenantWide));
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

  // Each problem names the field it is about, so the list can jump there.
  function buildProblems(d) {
    var problems = [];
    var add = function (text, field, warn) { problems.push({ text: text, field: field, warn: !!warn }); };
    if (!d.goal.trim()) { add("Section 1: say what you want.", "goal"); }
    if (d.type.length === 0) { add("Section 2: pick at least one build type.", "type"); }
    if (bullets(d.done).length === 0) { add("Section 7: list at least one thing you will check at runtime.", "done"); }
    ["formName", "idoName", "assetFolder"].forEach(function (name) {
      var value = d[name].trim();
      if (value && !/^FX_/.test(value)) { add("Section 3: " + value + " doesn't start with FX_. Changing a non-FX_ object needs your approval in section 6.", name, true); }
    });
    if (shown("changeNonFx", d) && !d.nonFx.trim()) { add("Section 6: name the non-FX_ object(s) that may be changed.", "nonFx"); }
    if (shown("changeFx", d) && !d.existingApp && !d.formName.trim() && !d.assetFolder.trim()) { add("Section 2/3: name the existing FX_ object to change.", "existingApp", true); }
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
      line("Done means", d.done)
    ].join("\n");
  }

  function changeProblems(d) {
    var problems = [];
    if (!d.target.trim()) { problems.push({ text: "Target: name the object to change (pick an app to get suggestions).", field: "target" }); }
    if (!d.change.trim()) { problems.push({ text: "Change: say what should be different.", field: "change" }); }
    if (!d.done.trim()) { problems.push({ text: "Done means: say what you will see at runtime.", field: "done" }); }
    if (!d.dontTouch.trim()) { problems.push({ text: 'Don\'t touch is blank: Claude keeps everything else as it is, but naming what must not change (or "everything else") is clearer.', field: "dontTouch", warn: true }); }
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

  function renderProblems(problems) {
    var form = activeForm();
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

  // A section counts as filled once any of its controls holds something other than its default.
  function sectionFilled(fieldset) {
    return Array.prototype.some.call(fieldset.querySelectorAll("input, textarea, select"), function (input) {
      if (input.closest("[hidden]")) { return false; }
      if (input.type === "checkbox" || input.type === "radio") { return input.checked; }
      if (input.tagName === "SELECT") { return input.selectedIndex > 0; }
      return input.value.trim() !== "";
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
      updateSections(d);
      promptBox.textContent = buildPrompt(d);
      problems = buildProblems(d);
    } else {
      var c = readForm(changeForm);
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
      state.rows = { fields: [], buttons: [] };
      renderRows("fields");
      renderRows("buttons");
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
  Array.prototype.forEach.call(document.querySelectorAll("[data-add]"), function (button) {
    button.addEventListener("click", function () { addRow(button.getAttribute("data-add")); });
  });
  copyButton.addEventListener("click", copyPrompt);
  document.getElementById("FX_Download").addEventListener("click", downloadPrompt);
  resetButton.addEventListener("click", resetForm);
  resetButton.addEventListener("blur", disarmReset);

  loadDraft();
  try {
    var saved = JSON.parse(localStorage.getItem(DRAFT_KEY) || "null");
    if (saved) { pendingSelects = { existingApp: (saved.build || {}).existingApp, app: (saved.change || {}).app }; }
  } catch (e) { log("draft selects not read", e); }
  renderRows("fields");
  renderRows("buttons");
  setMode(state.mode);
  loadApps();
})();
