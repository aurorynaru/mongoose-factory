# EXP-135 T1 — preflight gates (worker-authored evidence)

Run R-20261026-051803-zOUZ · EXP-135 · cycle 0 · task T1 · worker session `219de60e-870c-44ef-baa5-e1d9b28d5593` · task_message_id `11afabaf-30bc-4d83-b3cf-eea4624b0d71`.
Date: 2026-10-26 (system date). Web Client footer version 2026.10.03.

**Result: PAUSED at AC-2 (types gate unsupported by a permitted surface). No application mutation occurred.** AC-1 is supported with limits. The AC-2 collision check passed; the AC-2 IDO property-type check could not be performed compliantly. AC-3 to AC-10 were not evaluated.

## Tab inventory (read-only; tab list taken before every tab selection)

| Index | Surface | Observed at this task's start | Touched in T1 |
|---|---|---|---|
| 0 | Designer (`designer/Default.aspx`, DEM title) | Form loaded: vendor **IdoProjects** (Name `IdoProjects`, Version `Vendor Default version`, Save greyed); footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`; no error dialog | Selected and snapshotted; one screenshot. No click in the Designer. |
| 1 | Designer (`designer/Default.aspx`, DEM title) | Not inspected (not selected) | No |
| 2 | Designer (`designer/default.aspx`, DEM title) | Not inspected (not selected) | No |
| 3 | Web Client inside Infor OS portal tab "Mongoose" | Header `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; Sql Tables Form open (vendor, from an earlier task) with table row `FX_InventoryItems`, Schema `dbo`; open Form tabs: IDO Projects, IDOs, Sql Tables (all vendor, non-FX_) | Selected; Select Form dialog opened and cancelled (see below); no Form opened |

## Gate results

| Gate | Result | Evidence |
|---|---|---|
| Web Client account header | **Observed:** `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` | `t1-01-webclient-identity-initial-state.png` (header visible; no credential shown) |
| Designer editing scope (tab 0) | **Observed:** footer `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`; Save greyed | `t1-02-designer-tab0-user-scope-footer-initial.png`; snapshot |
| Designer liveness (tab 0) | Accessibility tree and rendered page responsive; no server-event error dialog. **The Edit-menu probe was not run** (no reason to suspect staleness; no Designer click made) | snapshot, `t1-02` |
| Designer tab that holds a non-FX_ Form | **Blocking concern:** tab 0 holds the vendor IdoProjects Form. The brief forbids saving a Designer session while a non-FX_ Form is loaded, and forbids closing unrelated Forms. A wizard-created FX_ Form opened from this Designer would share the session with that Form. Operator disposition needed (see record) | `t1-02` |
| Web Client session | Usable: no Session Expired modal, no sign-in form; header and toolbar responsive | `t1-01`, snapshots |
| Repository baseline | From the session-start git status snapshot (Bash unavailable in this worker; no git command run): branch `claude-harness`; HEAD `9197f7c` (EXP-135 approved brief); pre-existing modified and untracked `tools/claude-harness/*` files and `tools/claude-harness/briefs/EXP-119.brief.json`; none touched in T1 | session context |
| Required reading | AGENTS.md (full). EXP-130 sections 2–4 (lines 300–335 read). EXP-134 record (file `experiments/EXP-134-mock-inventory-data-layer-fx-inventoryitems-sql-ta.md`; status header and T1–T9 read; T10–T16 not read in T1; qualifications taken from its header and the commit `02883c2`). EXP-041-R3 and EXP-042-R3 (first ~450 and ~490 lines read, plus grep of wizard pages, Save Template, component table). `recipes/session/session-expiry-and-stale-designer.md` (full). `recipes/forms/create-basic-form.md` (full; Build-from-Scratch only) | Read tool results |

### AC-2 collision gate (Select Form inventory, Name filter)

Mechanism: Web Client toolbar **Open** (`f1e25`) → dialog **Select Form** (`f1e282`). Filter By = Name; **Case Sensitive** and **Starts With** unchecked (both checkboxes unchecked in every snapshot). Each query: click Filter textbox, Control+A, type with key events (`slowly: true`), wait 2 s, targeted dialog snapshot. Dialog closed with **Cancel** (`f1e339`). OK was not pressed (OK would activate a row).

| # | Query | Role | Settled rows | Snapshot excerpt |
|---|---|---|---|---|
| C1 | `FX_HelloWorld01` | Positive control, exact (existing FX_ Form) | **1 row:** `FX_HelloWorld01` / `FX_HelloWorld01` | `gridcell "FX_HelloWorld01"` (`f1e346`, `f1e348`) |
| T1 | `FX_InventoryEditor` | Target, exact, case-insensitive by default | **0 rows** (grid `f1e297` has no child rows; filter text `FX_InventoryEditor`) | grid empty |
| T2 | `inventoryeditor` | Target, lowercase infix | **0 rows** (filter text `inventoryeditor`) | grid empty |
| C2 | `inventory` | Attempted infix control | **0 rows** — **not a valid positive control** for this user's visible list (existing inventory-named Forms, e.g. MockInventory, are not in this user's visible list or do not match); reported as an observation only | grid empty |
| C3 | `helloworld` | Positive control, lowercase infix (existing FX_ Form) | **1 row:** `FX_HelloWorld01` / `FX_HelloWorld01` | `gridcell "FX_HelloWorld01"` (`f1e353`, `f1e355`) |

**Gate verdict (AC-2 collision): PASS for the visible inventory.** Exact and lowercase-infix lookups of `FX_InventoryEditor` return zero rows; the same mechanism returns FX_HelloWorld01 for both exact (C1) and lowercase-infix (C3) controls in this session. After Cancel, `find "Select Form"` returned no matches (dialog closed).

Limitations: the dialog shows Caption and Name only (no ScopeType or ScopeName column); there is no total count; scope-complete absence (Site Default, Group, other users) is not shown. Consistent with the operator-accepted limitation in EXP-041-R3.

Target-identifying evidence for this gate is the dialog snapshot text above (authorized read-only responses). No screenshot of the zero-row target state was taken.

### AC-2 IDO property-type gate: NOT SUPPORTED by a permitted surface

- Required: `FX_InventoryItems` in `FX_HelloWorldProject01`, alias `fxinv`, and six business properties with types FX_Item String 50 (PK), FX_Description String 255, FX_Warehouse String 100, FX_QuantityOnHand Decimal 12,2, FX_ReorderLevel Decimal 12,2, FX_Location String 100.
- The only surface in this Mongoose build that shows IDO property names, types and lengths is the **IDOs** Form (vendor, non-FX_). It is open as a background tab in the Web Client, but it is not the active tab, and the brief prohibits opening, editing, or saving non-FX_ Forms, and prohibits using the vendor IdoProjects Form for preflight. Selecting that tab was not done.
- The Form Wizard (the creation route) lists IDO property names only (page 2 "Properties — Primary Collection"; EXP-041-R3 T3/T4). It does not display SQL or Mongoose data types.
- The open **Sql Tables** Form (vendor, non-FX_) shows the physical table `FX_InventoryItems`, Schema `dbo`, Primary Key `PK_FX_InventoryItems` on FX_Item, index `IX_FX_InventoryItems_RowPointer`. Its Columns list (Sql Columns) would give types, but it requires a dialog inside the non-FX_ Form and was not opened.
- Carried forward from the EXP-134 record (not re-read in T1): the IDO was created with the six properties and types above (T12 IDO readback; T13 Sql Columns readback: nvarchar(50), nvarchar(255), nvarchar(100), decimal(12,2), decimal(12,2), nvarchar(100)).

**Verdict:** the identity of the table is observed on screen (Sql Tables, already open). The six IDO property types are **not observable through a permitted read-only surface in this task**. Per the bounded instruction, this gate is unsupported and the task pauses. The EXP-134 readback is recorded as carried-forward evidence only, not as an AC-2 pass.

## Zero-row IDO data state (AC-3)

Not evaluated in T1. The brief defers the authoritative zero-row read to the FX_InventoryEditor runtime, which does not yet exist. The EXP-134 record states no rows were inserted into `FX_InventoryItems`.

## Actions in T1 (in order)

1. Tab list (read-only).
2. Tab select 3 (Web Client); fresh snapshot (read-only).
3. Screenshot `t1-01` (read-only).
4. Tab list (read-only); tab select 0 (Designer); snapshot (read-only); screenshot `t1-02` (read-only).
5. Tab list (read-only); tab select 3; `find` "Open" (read-only).
6. Click toolbar **Open** (`f1e25`) — Select Form dialog opened.
7. `find` "Select Form" (read-only); targeted snapshot of dialog `f1e282` (read-only).
8. Query C1: click Filter (`f1e318`); Control+A; type `FX_HelloWorld01` (slowly); wait 2 s; targeted dialog snapshot.
9. Query T1: click Filter; Control+A; type `FX_InventoryEditor` (slowly); wait 2 s; targeted dialog snapshot.
10. Query T2: click Filter; Control+A; type `inventoryeditor` (slowly); wait 2 s; targeted dialog snapshot.
11. Query C2: click Filter; Control+A; type `inventory` (slowly); wait 2 s; targeted dialog snapshot.
12. Query C3: click Filter; Control+A; type `helloworld` (slowly); wait 2 s; targeted dialog snapshot.
13. Click **Cancel** (`f1e339`) — dialog closed; `find` "Select Form" confirmed no matches.

## Operation counts (T1)

| Operation | Count |
|---|---|
| Finish / wizard launch / wizard page action | **0 / 0 / 0** |
| Form open (Select Form OK) / Form close / Form reopen | **0 / 0 / 0** |
| Designer Save / New / Copy / Delete / Regenerate / Designer click | **0 / 0 / 0 / 0 / 0 / 0** |
| Designer tab Edit-menu probe | 0 (not run) |
| Create Form / SQL table / IDO / IDO project / property / global object / script | **0** |
| Records inserted, edited, or deleted | **0** |
| Metadata unload / FormSync / deployment / direct SQL / generated SQL | **0** |
| Select Form opened / filter queries / Cancel | 1 / 5 / 1 (no OK) |
| Filter clicks / Control+A / slow typing / 2 s waits | 5 / 5 / 5 / 5 |
| Targeted dialog snapshots / `find` calls | 6 / 3 |
| Screenshots written (worker-requested) | 2 (`t1-01`, `t1-02`) |
| Browser JavaScript, evaluate, run-code (worker-authored) | **0** (no such tool available to this worker; the `Ran Playwright code` lines are tool wrappers) |
| Ref-not-found errors / timeouts / recovery snapshots | **0 / 0 / 0** |
| Session Expired modal / portal navigation / sign-in / credential entry | **0 / 0 / 0 / 0** |
| Portal banner dismissals | 0 (none visible) |

## Files written in T1

- `evidence/EXP-135/t1-01-webclient-identity-initial-state.png`
- `evidence/EXP-135/t1-02-designer-tab0-user-scope-footer-initial.png`
- `evidence/EXP-135/t1-preflight-gates.md` (this file)
- `experiments/EXP-135-fx-inventoryeditor-creation-and-three-test-invento.md` (record; created in T1)

Tool-generated browser captures under `evidence/playwright/` are tool output, not worker-authored.

## Acceptance checks (T1)

| AC | T1 status | Basis | Limits |
|---|---|---|---|
| AC-1 | **PASS-LIMITED.** Account header, Designer User scope, DEM configuration, session usable, repository baseline recorded from the session snapshot. Reading recorded. | `t1-01`, `t1-02`, snapshots | Designer tab 0 holds a non-FX_ vendor Form (blocking concern for later Designer Saves). Edit-menu liveness probe not run. Tabs 1 and 2 not inspected. Baseline is the session-start snapshot (no git command possible). |
| AC-2 | **PARTIAL — PAUSED.** Collision check **PASS** for the visible inventory (C1, C3 controls; T1, T2 zero rows). Property-type check **NOT SUPPORTED** by a permitted surface. | Dialog snapshot excerpts above; `t1-02`; Sql Tables identity observed on screen | Visible inventory only (no scope column, no total). Type check blocked by the non-FX_ prohibition. |
| AC-3 | Not evaluated (runtime zero-row read follows creation) | — | — |
| AC-4 to AC-10 | Not evaluated (no creation, no runtime, no records) | — | — |

## Decision needed (operator)

1. **AC-2 types.** Choose one: (a) authorize a single read-only view of the already-open **IDOs** tab (select tab, read the FX_InventoryItems properties, no edit, no save, no close) as an explicit exception to the non-FX_ prohibition for this gate; (b) accept the EXP-134 T12/T13 readback as the AC-2 type evidence (carried forward, not re-read); (c) other.
2. **Designer with a non-FX_ Form.** Designer tab 0 holds the vendor IdoProjects Form. Choose one: (a) operator closes it or relaunches a fresh User-scope Designer that has no non-FX_ Form loaded before the wizard; (b) authorize one ordinary close of that clean vendor tab (no save).
