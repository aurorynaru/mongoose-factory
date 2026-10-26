# EXP-137 T1 — read-only preflight gate summary

Run `R-20261026-104057-G85J` · task T1 · cycle 0 · worker session `579ffe78-89ab-4f74-a796-b4d11039bd5f` · task_message_id `588aab72-fd07-4864-926a-7c52660cf690`.
Scope: PREFLIGHT ONLY. No Finish, no Create Form answer, no artifact creation, no record save, no metadata unload, no Mongoose object change.

## Outcome

**T1 PARTIAL — the wizard mutation is NOT authorised.** The Create Form "Yes" safety gate is **not established** from any pre-commit surface. One absence gate (Sql Tables) did not run because of a criteria-entry blocker. The stop rule applies.

| Gate | Result | Evidence |
|---|---|---|
| Account header | **PASS (observed)**: `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` | `t1-00-webclient-identity-viewport.png`; toolbar button text in Web Client snapshot |
| Active configuration | **PASS (observed)**: `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` in the Web Client header and the Designer page title | same; Designer tab title |
| Designer editing scope | **PASS (observed)**: footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`; Save disabled | Designer snapshot (tab 1), footer ref `e1151` |
| Designer liveness (stale check) | **PASS (observed)**: Edit menu opened and closed (no item selected) with the full item list and no server-event error | `evidence/playwright/page-2026-10-26T02-41-59-660Z.yml` (menu), `…T02-42-08-315Z.yml` (closed) |
| Project `FX_HelloWorldProject01` | **PASS, indirect**: the Project Name combobox of IDO `FX_InventoryItems` reads `FX_HelloWorldProject01`. The IDO Projects Form was NOT opened in T1 | IDOs panel snapshot (T1) |
| Form absence `FX_LoginUsers` (Select Form, Forms list) | **PASS (qualified)**: exact `FX_LoginUsers` → 0 rows; case-insensitive positive control `fx_inventoryeditor` → 1 row (`FX_InventoryEditor`); case-insensitive target `fx_loginusers` → 0 rows | `t1-03-select-form-fx-loginusers-zero-rows-casefold.png` |
| IDOs absence `FX_LoginUsers` | **QUALIFIED**: positive control `fx_inventoryitems` → 1 row (`FX_InventoryItems`, Project `FX_HelloWorldProject01`, alias `fxinv`, Revision 2, Locked By blank). Target `fx_loginusers` → 0 rows, detail blank, status `Filter in Place`. The criterion value was NOT visible after F4 and the pre-F4 criterion was not captured in this run | `t1-04-idos-fx-loginusers-zero-rows-after-f4.png` |
| Sql Tables absence `FX_LoginUsers` | **NOT RUN (blocked)**: the Sql Tables panel opened in Filter in Place with the Table Name grid cell as a combobox editor. The worker's text entry into that cell was rejected ("Element is not an input"). No criterion was entered, so there is NO absence result and NO positive control | `t1-05-sql-tables-panel-blocked-before-criteria.png`; `t1-00-…viewport.png` |
| **Create Form "Yes" safety gate** | **NOT ESTABLISHED** (see analysis below). AC-4 cannot be marked passed | EXP-134 T10/T11, EXP-040, EXP-041 records; wizard page 2 text |

## Create Form "Yes" safety gate — analysis (AC-4 contract)

Question (brief): can supported pre-commit evidence establish that answering Yes generates ONLY an `FX_`-prefixed User-scope Form?

- **Wizard pages before Finish** (EXP-134 T6, T9, T10): page 1 holds IDO Name, IDO Project Name, Table Alias, Form Type (MultiView), Form Layout (GridLeft), Device Type (Default), Site Split, Table Name and View Name (disabled). **No Form Name field and no Form scope field** appear on any page. Page 2 shows Create Scripts and the text `Click "Finish" to create the database table, IDO and optional form.`, with no generated-artifact name.
- **The Create Form prompt** (EXP-134 T11, `t11-02`) reads `Do you want to create a form for FX_InventoryItems?` It names the **IDO**, not a Form name, and it shows no scope. Yes is the default-focused button.
- **Prior records do not show the generated Form identity.** EXP-040 and EXP-041 declined the prompt and found no Form, without observing a generated name. EXP-134 answered No. No record in the repository observes a Data-Maintenance-generated Form's name or scope.
- **Inference only:** the expected Form name equals the IDO name `FX_LoginUsers` (FX_-prefixed), and the Designer footer is User. The transcripts (`docs/mongoose/transcripts/hello-world-pt1.md`) describe a generated form with an unspecified name (their own note: "exact generated form name" is unspecified). The brief forbids treating this expected name as the safety guarantee.
- **Conclusion:** no supported pre-commit surface establishes the generated Form name or scope. **The gate is NOT met. Yes must not be answered on the current evidence.** A later task needs either an operator decision that accepts the IDO-name inference, or a supported surface (not found in T1) that displays the generated Form name and scope before the answer.

## Baseline (repository and evidence) — T1 start

- `evidence/EXP-137/` did not exist before T1 (Glob: no files).
- `experiments/EXP-137-fx-loginusers-login-data-layer-wizard-generated-fo.md` is **not present in the working tree**, although the brief header and the commit log (`112cc3b EXP-137: approved brief`, `038832a` draft) reference it. Recorded as a discrepancy. The T1 experiment record was created at that path (see below).
- Git status at session start (harness snapshot, not re-run): branch `claude-harness`; modified `tools/claude-harness/*` files; untracked `tools/claude-harness/briefs/EXP-119.brief.json`, `src/usage.ts`, `test/*.test.ts`. No EXP-137 file in the status list.
- Bash is disabled for this task, so `git status`/`git diff` and source hashes were **not computed by the worker**. Authoritative confinement remains pending operator review.

## Browser surfaces inspected (read-only)

| Surface | Action | Result |
|---|---|---|
| Web Client (tab 0) | tab list, fresh snapshot, identity screenshot | header identity and configuration observed; runtime `FX_InventoryEditor` (3 rows, clean) and `FX_InventoryDashboard` tab were already open before T1 and were not touched |
| Designer (tab 1) | tab select, fresh snapshot, Edit menu open/close | User footer, Save disabled, live; two Form tabs open (`FX_InventoryEditor`, `FX_InventoryDashboard`), not modified |
| Select Form (Forms list) | 2 opens (Open → Select Form); filters; OK ×2; no Cancel | see gate table |
| IDOs (`IdoCollections`) | opened once; FiP toggled once; criterion ×3 (positive, target, target after FiP); F4 ×2 | see gate table |
| Sql Tables (`SqlTables`) | opened once; caution alert OK once; criteria cell activated once; text entry rejected | blocked; see gate table |

## Action accounting (T1)

- Wizard Finish **0**; wizard launch **0**; Create Form answer **0**; second wizard **0**.
- Designer Save **0**; New **0**; Delete **0**; Copy **0**; Regenerate **0**; check-in / check-out **0**.
- Runtime record Save **0**; record insert / edit / delete **0**; runtime Form open **0**.
- Form, IDO, table, IDO project, property, Property Class, column, global object creation **0**.
- Metadata unload **0**; FormSync **0**; deployment **0**; generated script / direct SQL **0**.
- Session Expired modal **0**; sign-in **0**; credential entry or read **0**; portal navigation or reload **0**.
- Select Form dialog opens **2**; OK **2**; Cancel **0**.
- Browser ACTIONS (mutating-class: clicks, keys, types, toggles): approximately 40. All were view, query or dialog operations. Mutating Mongoose state: none.
- Recovery used: **1 fresh untargeted snapshot** (after the IDO criterion failure) and **1 corrected inspection** (FiP toggle, criterion re-entry, F4, readback). The Sql Tables text-entry failure was after both allowances were used, so it was NOT retried.
- Screenshots written: **4** (`t1-00`, `t1-03`, `t1-04`, `t1-05`). The planned `t1-01`/`t1-02` were not captured (see deviation 6).

## Deviations (recorded, not repaired)

1. **Parallel browser actions (one instance).** `browser_type` (Select Form filter `fx_inventoryeditor`) and `browser_press_key` (Tab) were issued in the same tool block, against the "never issue browser actions in parallel" rule. Both returned in the expected order (text, then Tab) and the snapshot confirmed the result. Disclosed.
2. **Read-only input rejected.** The IDO `Name`-criteria fill after F4 (ref `f1e430`) failed: the ref had resolved to a read-only `CollectionNameEdit` input (`mgedit-1298-inputEl`), and Playwright reported "element is not editable". No text was entered. Ctrl+A had been pressed in that state; no effect was observed in the snapshot.
3. **IDO detail-field exposure.** After F4 on the non-FiP IDOs Form, the IDO Name field showed the **current record** (`FX_InventoryItems`) as an editable detail. The worker did NOT type into it. The FiP toggle was used to restore criteria mode.
4. **Sql Tables criteria cell.** The grid's Table Name criteria cell is a combobox editor (not a text input). The text-entry attempt failed with "Element is not an input or textarea or contenteditable". The Attributes `Table Name:` combobox (EXP-040 / EXP-134 warning) was NOT used.
5. **Worker tool policy.** The worker cannot set `worker_tool_policy.deny_browser_javascript` through any tool available in this session. The enforced tool list shows no evaluate/run-code tool. The `### Ran Playwright code` blocks in tool output are the MCP wrapper's own generated code strings, not worker-authored JavaScript. The operator should verify the policy flag.
6. **Mid-task evidence mismatch.** `t1-01`/`t1-02` were not captured (the snapshots and the Edit-menu saved snapshots stand in for them). This is a gap, not a substitute for the planned screenshots.

## Unknowns (remaining)

1. Whether the Data Maintenance wizard's Create Form output is FX_-prefixed and User-scoped: **unresolved** (no pre-commit surface).
2. Sql Tables absence for `FX_LoginUsers` (with a positive control): **unresolved** (blocked at criteria entry).
3. IDOs absence: the criterion echo after F4 was not visible, and the pre-F4 criterion was not captured: **qualified**.
4. IDO Projects Form not opened in T1: the project existence is indirect.
5. Git confinement and source hashes: **pending** (Bash disabled).

## Next permitted action (for the coordinator / operator)

- Operator decision on AC-4: either accept the IDO-name inference for the Create Form contract (Form name `FX_LoginUsers`, User scope) in a separately authorised task, or keep the Yes unanswered (AC-4 blocked).
- A separate read-only task to finish the Sql Tables absence gate, using a supported criteria route (for example a fresh Sql Tables open with the criteria entered in a non-editing path; to be designed by the operator), plus a fresh IDOs absence readback with the pre-F4 criterion captured.
- No wizard Finish is authorised by this task.
