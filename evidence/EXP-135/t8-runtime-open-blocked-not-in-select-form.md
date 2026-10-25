# EXP-135 T8 — Runtime open and empty-data verification (BLOCKED before open)

> **Superseded by T9 (cycle 12).** After a fresh Portal navigation and Mongoose launch, the exact-name Select Form lookup listed FX_InventoryEditor (1 row) and the runtime gate passed with the limitations recorded in `t9-runtime-open-zero-row-gate.md`. The "not in list" result below reflects a stale client list. The text is retained unchanged as the T8 record.

Run `R-20261026-051803-zOUZ` · cycle 10 · task T8 · worker session `1a629cda-63d0-4073-9d1d-fdd83a6bd23b` · task_message_id `abd1e2f2-7d8e-41dc-91b9-1a2e6f97ac34` · date 2026-10-26.

## Outcome

**Stopped before runtime open.** FX_InventoryEditor could not be located through the Web Client Select Form route, so it was not opened. No Form was opened, no Refresh was run, no record was created, and the zero-row gate (AC-3 / AC-7) is **not evaluated**. The T7 Designer state is unchanged.

Observed contradiction: the Designer created and saved the Form (T3, T6) and reopened it from the server-backed recent list (T7), but the Web Client Select Form list does not include it. Two explanations remain open and are not distinguished by this task (see Open questions).

## Gate results

| Gate | Result | Evidence |
|---|---|---|
| Tab list, then tab 3 select (Web Client) | Succeeded (list first, then select 3) | Tab list output in task |
| Account header | `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` | `t8-01`, `t8-02`, fresh snapshot |
| Usable session | Yes. No "Session Expired" modal, no sign-in page, no recovery used | Fresh snapshots |
| Prior open Forms preserved | Yes. Panels IDO Projects, IDOs, Sql Tables still present; Sql Tables selected, showing `FX_InventoryItems` / `dbo` / PK `PK_FX_InventoryItems` | `find "Close Panel"` (6 matches, 3 panels); `t8-02` |
| Select Form route opened | Yes, once, by the toolbar Open button (`Open`, ref f1e25). No Form opened from it | `find "Select Form"` → dialog present |
| Exact-name lookup `FX_InventoryEditor` (Name, contains, not case-sensitive) | **0 rows** (grid empty after the typed filter and after a 3-second wait; re-checked with find) | Dialog snapshot, post-type and post-wait |
| Positive control `FX_` prefix | Grid repopulated with FX_ Forms, including `FX_HelloWorld01` (Caption and Name). **`FX_InventoryEditor` is not in the list.** Its sorted slot (between `FX_HelloWorld01` and `FX_Items`, by Caption) is empty | Dialog snapshot after `FX_` filter; Playwright snapshot `evidence\playwright\page-2026-10-25T21-50-15-428Z.yml` |
| Cancel the dialog | Done once. Dialog gone (`find "Select Form"` → no matches). No Form opened | `t8-02` |

## Interpretation (not proven)

- The filter works: real key events reloaded the grid (the `FX_` prefix reloaded it and returned the positive control). The lookup is not ineffective.
- The list is not empty or incomplete in an obvious way: it contains 40+ FX_ Forms, sorted by Caption.
- Therefore FX_InventoryEditor is **not present in this Web Client's Select Form list**. That is a lookup failure for the task. It is not established that the Form is absent from the server.
- Hypothesis (unverified, consistent with precedent): the Web Client's Form list was loaded before the Form was created in the Designer and is not refreshed in the current page session. Precedent: EXP-002 (`experiments/EXP-002-create-basic-form.md` lines 33–34, 63) rediscovered a Designer-created Form in Select Form only after a **full portal page reload**. A reload is not permitted in T8.
- Alternative (less likely): the Form was not persisted server-side. The T6 save notification ("Form [FX_InventoryEditor] and global object(s) were saved.") argues against this, but T7 readback was Designer-side only. A reload or another server-backed check is needed to separate the two.

## Action inventory (T8)

- Browser: tab list 1; tab select 1 (tab 3); fresh snapshots 4 (initial, dialog, dialog post-type, dialog post-`FX_`); screenshots 2; finds 4; clicks 2 (toolbar Open; Cancel); typing actions 2 (`FX_InventoryEditor`, then `FX_`, each slowly); Ctrl+A 2; waits 2 (3 s each).
- Ref-not-found errors: 0. Recovery snapshots/inspections used: 0. Session-expiry recovery: 0.
- Form opened: **0**. OK clicked: **0**. Refresh: **0**. New clicked: **0**. Field entry: **0**. Record Save: **0**. Record insert: **0**.
- Web Client close/reopen of runtime Form: **0**. Navigation or page reload: **0**.
- Designer (tab 0, FX_InventoryEditor): not selected, not inspected, not saved, not closed in T8. Remains loaded and clean from T7.
- Designer tabs 1 and 2, vendor Forms, Mock objects, FX_InventoryPrototype01: not touched.
- Finish / wizard: 0. Designer Save: 0. IDO, table, metadata, FormSync, unload, deployment, or SQL action: 0.
- Worker-authored browser JavaScript: **0**. The tool wrapper logs ("Ran Playwright code") are the MCP click/type implementation, not worker-authored scripts.
- Repository reads: `experiments/EXP-135-...md` (T1–T7 record), `recipes/forms/create-basic-form.md` (grep), `recipes/` and `experiments/` grep for Select Form caching. No edits to recipes or other experiment records.

## Evidence files (this task)

| File | Shows | Does not prove |
|---|---|---|
| `evidence/EXP-135/t8-01-webclient-identity-prior-open-forms-preserved.png` | Web Client header `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`, panels IDO Projects, IDOs, Sql Tables; no dialog. Taken before any action in T8 | Anything about FX_InventoryEditor; Select Form contents |
| `evidence/EXP-135/t8-02-webclient-select-form-no-fx-inventoryeditor-after-cancel.png` | After Cancel: the same three panels (Sql Tables selected, `FX_InventoryItems`); no Select Form dialog; header identity | Absence of FX_InventoryEditor from the server; why the list omits it. The FX_ list result itself is in the dialog snapshot, not in this image |
| This file | Gate results, dialog observations, action counts | Database-level state; cross-session durability |

Snapshot text for the `FX_` filter (named in the table above) is the decisive read for the lookup. The screenshot does not show it.

## Acceptance (T8 scope)

- AC-1 (identity and session, Web Client): **supported** for this task (header, usable session, no modal). Designer User-scope footer was not re-observed in T8; it was observed in T7 (`t7-01`).
- AC-2 (collision, live Select Form): exact-name lookup returned 0 rows and FX_ prefix list did not include FX_InventoryEditor. **Not supported as a success.** The Form that must be located is not in the list, so the runtime route cannot proceed.
- AC-3 (zero-row runtime gate): **not evaluated.** No runtime Form opened.
- AC-7 (runtime open and empty state): **not evaluated / not supported.** Blocked.
- AC-8 to AC-10: not evaluated.

## Open questions and blocker

1. **Blocker:** FX_InventoryEditor is not listed in the Web Client Select Form list. Required: a permitted way to refresh the Web Client's Form list (the EXP-002 precedent is one full portal page reload of tab 3) or a fresh session. This task does not authorize a reload or navigation. Note that a reload also closes the three vendor panels in the Web Client (IDO Projects, IDOs, Sql Tables). No data or Designer changes result, but these panels are lost.
2. Decide whether one portal page reload is authorized. If yes, the next task must re-check the Select Form list with exact name `FX_InventoryEditor` (positive control `FX_HelloWorld01`) before opening anything, and must confirm the Web Client header and usable session first.
3. If the Form still does not appear after a reload, the server-side persistence question (unresolved alternative above) is open. The Designer side cannot settle it alone. Operator disposition needed.
4. Recovery accounting: no recovery used this task. Session expiry: none. Stale refs: none.
5. No recipe was promoted. Knowledge states in the experiment record stay as they were; the new finding is recorded as observed in one session.
