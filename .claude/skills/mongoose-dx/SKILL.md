---
name: mongoose-dx
description: Developer-experience and no-guessing rules for any code or config work in this repo. Use whenever writing or changing code here - Mongoose form scripts (C#/VB), Web User Control assets (HTML/JS/CSS), IDO/table/property definitions, ION or external API calls, WM REST paths and fields, the claude-harness / learning-harness TypeScript tools, scripts, playbooks or recipes - and whenever a requirement, identifier, API field, parameter, default value or Mongoose behavior is not confirmed by this repo or the tenant. Pairs with mongoose-builder (which owns the build workflow); this skill owns how code is written and how facts are checked and reported.
---

# Mongoose factory: developer experience, no guessing

Two rules come before everything else:
1. **Developer experience first.** Code someone else can read, run, debug and change without asking you.
2. **Never guess.** If a fact isn't confirmed by this repo, the tenant, or the operator, it is **unknown**. Say so, and ask.

This skill doesn't replace `AGENTS.md` or `mongoose-builder`. Their safety rules (build prefix, `FX_` by default; approvals, account check, secrets, evidence) still apply in full. For a build, follow `mongoose-builder`'s workflow and apply this skill while doing it.

## 1. Where facts come from (check in this order)

| Need | Source of truth in this repo | Still missing? |
|---|---|---|
| Mongoose procedure / UI behavior | `.claude/skills/mongoose-builder/playbooks/*`, `recipes/`, `experiments/EXP-*` (with their knowledge state) | Probe it in the tenant as a small step, or ask |
| IDO names, property names, method names | the asset/script that already uses them (`assets/**/*.cs.txt`), the experiment that created them, or a readback in the Designer / IDO form | Read it from the tenant before using it |
| Form, component, variable, handler names | the build record (`builds/BLD-*`) or experiment record, the playbook reference table (`web-user-controls.md`), a Designer readback | Read back in the Designer |
| JS ↔ C# bridge (`WSForm.*`, `ThisForm.*`, `IDOClient.*`) | calls already used in `assets/` | Treat any other API as unverified, and probe it |
| WM / ION REST paths, parameters, response fields | `docs/Api-Gateway/SCE-WM-REST-API.json` + the observed responses in EXP-150/151 | Ask; the meaning of a code or field is not in the spec unless the spec says it |
| Product documentation | `docs/mongoose/guides/`, `docs/mongoose/source/` | Documentation is **unverified** until exercised here |
| Harness TypeScript | the code in `tools/*/src`, `package.json` scripts, `harness.config.example.json` | Ask |
| Operator decisions, approvals | the operator, in this task (and the record that quotes them) | Ask; approvals don't carry over |

Other models' answers (for example the ChatGPT specialist) and your own memory are **unverified** too.

## 2. Never invent identifiers

Don't reference anything you haven't found in one of the sources above:
- IDO, property, method and table names; SQL columns;
- Form, component, variable, event-handler and string names;
- API paths, query parameters, `MethodParams` entries, JSON response fields, status-code meanings;
- config keys, environment variables, file paths, CLI flags, npm scripts;
- server IDs, suite names, warehouse names; credentials of any kind.

Before writing a name, find it: `grep` the repo, read the spec, or read it back in the tenant. Cite where it came from in the record (file and line, EXP number or screenshot).

**New identifiers** follow the project conventions:
- the build prefix (`FX_` unless the request names another, AGENTS.md § Build prefix) for every factory object, including methods, components, variables and strings added to existing objects;
- the patterns already used, with the build prefix in place of `FX_`: `FX_v…` (variables), `FX_s…` (strings), `FX_Btn…` (page buttons), `FX_…Control` (UserControl components), `FX_Call…` (C# methods called from a page).

If the name, value or contract of a new identifier depends on a requirement nobody has stated, ask before creating it.

**Examples are not values.** Placeholders in docs and plans look like `<WH>`, `<DataView name>`, `SECRET_MONGOOSE_USERNAME`. Never present a placeholder or example as the real project value. Never write a real secret, token, egress IP, DB server name or personal e-mail into code, records or evidence.

## 3. Ask instead of assuming

When something essential is missing or ambiguous:
1. Name exactly what is missing.
2. Search the sources in section 1.
3. Still unknown → **ask the operator** (AskUserQuestion, or a short direct question). Say what is missing and why it matters.
4. Pause the affected part of the work. Unrelated, already-clear parts may continue.

Options are welcome when you **label them as suggestions**: put the recommended one first, marked "(Recommended)". Never pick one silently. No default values (timeouts, page sizes, limits, colors, captions) are invented and shipped without saying so: either reuse a value already in the repo (e.g. 20 s invoke timeout, page size 25) and cite it, or propose it and get a yes.

Don't ask about what the repo already answers. Check first, so questions stay few and specific.

## 4. Verify before implementing

1. Read the files you'll touch and one similar existing file (the closest asset, script or module).
2. Note the conventions there: naming, comment density, error handling, status lines.
3. Confirm every identifier, interface and contract the change relies on (section 2).
4. List what's still unknown, and ask (section 3).
5. Implement the smallest change that does the job.
6. Validate with what exists:
   - **C# form script:** Compile in the Script Editor and read "Built with 0 errors" with a new timestamp.
   - **Asset:** compare the Designer readback with the repo copy (`node .claude/skills/mongoose-builder/tools/compare-readback.js <yml> <flat file>`).
   - **Runtime:** exercise it in the Web Client and read the result.
   - **TypeScript:** `npm run typecheck` and `npm test` in that tool's folder.
7. Report what was verified and what wasn't (section 7).

**Never claim a compile, test or runtime check passed unless you ran it and read the result.** No visible error is not success. If a step was skipped, say it was skipped.

## 5. Write for the next developer

- **Match the surrounding code.** The same idioms, naming and comment density as the nearest existing file. For example, a new page section copies `FX_ApiPage/index.html`'s status line, busy state and timeout pattern. A new C# method reuses existing helpers (`FX_Show`, `FX_Clip`, `FX_WmInvoke`) instead of a second copy.
- **Simple over clever.** No abstraction until there's a second real use. No new dependency or assembly reference unless the task needs it and it's confirmed to be available (e.g. `Newtonsoft.Json.dll` is proven in this sandbox; others aren't).
- **Clear names.** Say what the thing is or does (`FX_ListShipments`, `FX_BtnShipAll`), not `doIt` or `tmp2`.
- **Actionable errors.** Every failure path tells the reader what happened and what to do next:
  - JS: a status line, never a silent failure. E.g. "Open this page inside the FX_ApiProbe Form to call the API.", "No response from FX_X after 20 s."
  - C#: catch, then return `ex.GetType().Name + ": " + ex.Message`, plus the HTTP code and Infobar for API calls.
  - TS: an error message naming the input or config key that was wrong.
- **Separate files for web pages.** `index.html` (markup), `app.css` (styles), `app.js` (behaviour): never one file with everything inline. The layout of `app.js` (config → state → helpers → server bridge → features → wiring) is in `mongoose-builder/playbooks/web-user-controls.md` § File layout.
- **Readable C#.** One file per form script, laid out top to bottom: header → config → page actions → feature helpers → outside services → results (`mongoose-builder/playbooks/web-user-controls.md` § C# form script layout). One public method per page action, named for it (`FX_GenerateAsn`, `FX_CheckSku`). Each one validates its input first and has one `try/catch` that reports the error through the result variable (as `FX_Fail` does in `assets/FX_ASNPortal/FX_ASNPortal.cs.txt`).
- **Easy to debug.** A timeout and a status line on every `WSForm.invoke`, and one `log()` in `app.js` that records each server call (method, arguments, time taken, result or error) under `[FX_<App>]` in the browser console. Keep the response code and Infobar visible; don't swallow them. Comments explain *why* (a tenant quirk, an EXP number), not what the next line does.
- **Easy to install and re-run.** Keep the repo copy as the source, and the flush-left `.flat` copy for pasting into the Designer. Update both together.
- **Safe by default.** Hard-code verbs and paths in C# for API calls, validate page inputs (digits only, ranges), and keep tokens server side (SSO route). Show only the fields the page needs; personal data stays out of the UI and screenshots.

## 6. Keep changes scoped

- Change only what the task asks for. Don't refactor or restyle unrelated code, and don't rename existing identifiers without a reason the operator accepts.
- Don't change existing behavior (including another FX_ object's) without saying so and getting a yes.
- Prefer existing utilities and patterns to new ones. Keep backward compatibility. For example, an existing page button still calls the same method.
- Notice something else worth fixing (e.g. the old BG buttons overlapping FX_ApiProbe)? Report it as a suggestion; don't fix it on the side.
- Don't commit or push unless the operator asks.

## 7. Report: verified / unknown / proposed

Every report, record and plan sorts its claims into three groups, and never mixes them:
- **Verified:** confirmed by code you read, a compile/test you ran, a tenant readback or a runtime result. Cite the file, EXP/BLD number or evidence path. (In knowledge-state terms this is *observed* after one run and *verified* after repeat runs with persistence.)
- **Unknown:** not established yet. Say what would establish it.
- **Proposed:** your recommendation, waiting for approval.

Use the repo's knowledge states (`unverified` / `observed` / `verified` / `superseded`) in playbooks, recipes and experiment records, and don't upgrade a state without the evidence `AGENTS.md` requires.

## Final rule

If you don't know, ask. If you can't verify it, say so. Never invent information to make a change look complete.
