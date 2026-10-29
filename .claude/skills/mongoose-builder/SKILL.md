---
name: mongoose-builder
description: Build or change Infor Mongoose applications through the browser using this repo's proven procedures. Use when the user asks to create, update or add features to a Mongoose form, portal, shell/Flex form, dashboard, chart, KPI page, tile grid, login page, web user control (HTML/JS/CSS asset), form script (VB/C#), event handler, IDO, SQL table, property, join, validator, theme or image, or asks "how do I build X in Mongoose". Covers intake, the build prefix (FX_ by default), approval gates for objects the factory doesn't own, step-by-step build with saves, persistence checks and a build record.
---

# Mongoose builder

This skill turns the factory's learning (EXP-001…139, `recipes/`, `docs/mongoose/guides/`) into a build
workflow. The playbooks in `playbooks/` hold the procedures. Load **only** the ones the request needs.

## Hard rules (from AGENTS.md; always apply)
- **Account check first.** Read the Web Client header or the Designer status bar. If it's the read-only Mock account and the build mutates anything, stop.
- **Build prefix:** the request's Prefix, or `FX_` when it names none (AGENTS.md § Build prefix). It must be a letter, at least one more letter or digit, then `_`; otherwise ask. In this skill and its playbooks, `FX_` in a rule or a name pattern (`FX_<App>`, `FX_v…`, `FX_s…`) means the build prefix. Reference builds (`FX_Orders`, `FX_HelloWorld` …) are real objects and keep their names.
- **Factory-owned objects** (build prefix **and** created by the factory: listed in a build/experiment record, or created by this build): create and modify them freely under build mode.
- **Every other object**, including an existing object that only happens to start with the prefix:
  - Any create/alter/delete needs the operator's explicit approval **for that object, in this task**. Record it in the build record.
  - Prefer User scope or a copy with the build prefix (`playbooks/extending-existing-forms.md`).
- **Tenant-wide operations** need explicit approval: Unload All Global Form Objects, FormSync, deployment, Site/Group-scope saves, schema changes on tables that are not factory-owned.
- **Data:** never touch production data. Use fake test rows only.
- **Credentials:** use the `SECRET_MONGOOSE_*` placeholders only. Never read the secrets file or show credentials.
- **Mutations:** one at a time, with **Save after each small step**. Inspect before any retry, and never replay blindly.
- **How code is written and facts are checked:** apply `.claude/skills/mongoose-dx/SKILL.md` (developer experience first, never guess identifiers or behavior, report verified / unknown / proposed).
- **Done means proven.** "Done" requires Save → close/reopen readback → runtime check. No visible error is not proof.

## Workflow
1. **Intake.** Copy `templates/build-brief.md` to `builds/BLD-NNN-<slug>.md`, using the next free number (`ls builds`). Fill it in with the user:
   - goal;
   - build prefix (default `FX_`). For a prefix other than `FX_`, list the tenant's existing objects that already start with it, for the object types this build touches; they are not factory-owned;
   - target objects, each marked new (build prefix), factory-owned, or existing other (needs approval);
   - data source;
   - acceptance checks;
   - approvals needed;
   - rollback.
   Ask only what you can't infer. If the user sent a filled `templates/build-request-prompt.md`, copy its answers in; a blank there means ask, never default. A filled `templates/change-request-prompt.md` is a targeted change: show the exact diff first and change nothing outside it.
2. **Design.** **New Forms are Flex Forms by default** (operator decision, 2026-10-29): Designer → New → Category **Flex** (`playbooks/portal-shell.md` §1). Use a Classic Form only when the request says so. If a feature needs a wizard that exists only under Classic (for example Multi-View grid + detail), say so in the plan and ask before switching. Web pages are always three files, `index.html` + `app.css` + `app.js`; C# form scripts are one file with a fixed, readable layout (`playbooks/web-user-controls.md` § File layout, § C# form script layout). Pick the route per feature from the capability map below. Reuse existing FX_ objects (theme FX_HelloWorld, project FX_HelloWorldProject01, strings `FX_s*`) where they fit; they are factory-owned under `FX_`, so reusing one in a build with another prefix is fine, but changing one keeps its `FX_` name. List the objects to create or change.
3. **Plan with gates.** Show the user the step list and mark:
   - (a) the approvals for objects that are not factory-owned;
   - (b) the tenant-wide operations;
   - (c) the steps marked **unverified** in the playbooks, which run as small probe steps first.
   Wait for approval.
4. **Build.** Drive the browser (Playwright MCP, `playbooks/browser-and-session.md`):
   - one change, then a readback, then Save;
   - screenshots into `evidence/BLD-NNN/` at the level the request sets: **full** (default) or **light** (`playbooks/browser-and-session.md` § Evidence levels);
   - on a server-event error or session expiry, stop, recover per the playbook, re-inspect and continue.
5. **Verify.** Close/reopen in the Designer and read the values back. Then open the runtime, Refresh, and exercise the feature. For data changes, re-read through the data Form.
   - For any full-content fill (asset, script), save the editor snapshot to a file and run `tools/compare-readback.js` against the source. Do this before the change (rollback baseline), before OK, and after reopen. "Looks right" is not a readback.
6. **Record.** Complete the build record:
   - objects created/changed;
   - approvals;
   - evidence, with what each screenshot proves;
   - deviations;
   - cleanup/rollback list.

   If a new procedure worked, propose a recipe update or a knowledge-state upgrade. Don't silently edit verified recipes.
7. **Guide (when the request asks for one).** For a production-ready build, the request can ask for a guide with pictures as PDF or Word (.docx). It needs **full** evidence. Write it after step 5 has passed, per `playbooks/browser-and-session.md` § Build guide.

## Capability map: "I want…" → playbook
| I want… | Playbook |
|---|---|
| a new table / IDO / property / join / calculated (derived) field | `playbooks/data-layer.md` |
| a data-entry form (grid + detail), fields, captions, pictures | `playbooks/forms.md` |
| buttons that do things, validation logic, recalculation, variables, VB/C# scripts | `playbooks/events-and-scripts.md` |
| a portal / app shell with header, menu, pages, sign-in, tiles, cart, navigation | `playbooks/portal-shell.md` |
| a dashboard / chart / KPI page | `playbooks/dashboards-and-charts.md` (+ `web-user-controls.md` for rich custom pages) |
| a custom HTML/JS/CSS page inside Mongoose that reads/writes IDOs | `playbooks/web-user-controls.md` |
| a login page / user table / roles | `playbooks/login-and-security.md` |
| dropdowns from another table, validators, drill-downs, component classes | `playbooks/validation-and-classes.md` |
| colours, fonts, themes, images, logos | `playbooks/look-and-feel.md` |
| to call an Infor ION API or an external HTTP API from a form script, or to run/schedule a background task | `playbooks/api-calls-and-background-tasks.md` (+ `events-and-scripts.md`) |
| to change an existing form or portal the factory didn't build | `playbooks/extending-existing-forms.md` (+ the feature playbook) |
| browser driving, Designer launch, session expiry, evidence | `playbooks/browser-and-session.md` (always skim it before the first browser step) |

Background reference: `docs/mongoose/guides/INDEX.md` (product docs, **unverified** until exercised).

## Knowledge states (respect them in plans)
- **verified:** replayed twice with persistence. Use as is.
- **observed:** worked once. Use it, but read back every step.
- **unverified:** documentation only. Run it as a small probe, then confirm before building on it.

Not yet exercised here, so treat these as unverified:
- extending/modifying forms the factory didn't build;
- builds with a prefix other than `FX_` (the tenant check for existing objects with the new prefix has not been run yet);
- Form Extensions / Extend Form wizard;
- Group/Site scope saves;
- Gauge/Aggregate/DataView bindings;
- REST/ION API wizards (calling ION from a C# script is observed);
- background tasks beyond one-off RPT+DATAVIEW submits: recurring schedules, IDOMTH/SP tasks, tasks that call APIs (one-off RPT submit is observed, EXP-145; see `api-calls-and-background-tasks.md`);
- IDO extension classes (.NET);
- FormSync/deployment;
- form copy;
- database-level durability (all evidence so far is UI-level).

## Reference builds to copy from (all User scope, operator's account)
- **Forms:** FX_HelloWorld01, FX_UMs, FX_Items (pictures, import, theme button), FX_Orders (joins, derived total, script recalculation).
- **Chart:** FX_OrdersChart.
- **Portal:** FX_CustomerPortal (Flex portal: header, menu, pages, tiles, drag-to-cart, checkout), with tile form FX_ItemsTile.
- **Dashboard:** FX_InventoryDashboard (web-user-control dashboard over FX_InventoryItems; dark theme).
- **Login:** FX_LoginPortal + FX_LoginUsers (hashed login).
- **API probe:** FX_ApiProbe (C# script calls the ION API through IONAPIMethods, and httpbin through HttpWebRequest).
