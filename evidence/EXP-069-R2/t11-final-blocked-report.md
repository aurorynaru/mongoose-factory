# EXP-069-R2 — Final report (T11): BLOCKED at AC-5 and AC-6 (partial), AC-7 failed on the no-dialog criterion

Documentation-only task. **T11 made zero browser calls and zero Mongoose changes.** Written 2026-10-13, run `R-20261013-113227-AVrk`, cycle 10 (T11), task_message_id `3464d50c-0bcb-4bcd-a1bd-44da74702d73`, worker session `0e4883ae-9b5a-4e81-a572-6a63c451337d`.

Experiment record: `experiments/EXP-069-R2-hello-world-part-4-section-9-um-property-class-extension-right-click.md` (sections T1–T10 and the T11 summary).

## 1. Outcome

- **Status: BLOCKED.** Not accepted. Not replay_verified.
- The Details/Add/Find right-click menu **never appeared** at runtime (checks 1, 2 and 3). The Details drill-down to FX_UMs on EA was **not performed**.
- The extension was created once (T3 Yes; the Property Class Extension editor opened, no timeout). Its four target fields were set and read back before confirmation (T4), and the editor was confirmed once with OK (T4, no visible message).
- In the later recovery readback (T10), the extension's Add/Details Form (`FX_UMs`), Find Form (`FX_UMs`) and Property (`FX_UM`) persisted, but its **Right-Click Menu was blank** rather than `StdDetailsAddFind`.
- The FX_UM extension editor was **deliberately left open and unconfirmed** at the end of T10 (see section 4). Operator disposition is required.
- Classification of all findings: **observed or unresolved only.** Nothing is replay_verified. No cross-session durability is claimed beyond the observed close/reopen recoveries.

## 2. Acceptance matrix (AC-1 to AC-8)

| AC | Final status | Decisive evidence (existing paths) | Limitations |
| --- | --- | --- | --- |
| **AC-1** Sources, session, baseline | **Met, with limits.** Sources reviewed (AGENTS.md; hello-world-pt4.md §9 lines 228–247; EXP-069 record and T4 report; EXP-045, EXP-048 and EXP-068-R2 read partially, as disclosed in the record). Session usable (re-login 0). FX_Items open in the Designer, User scope, clean (`t1-00`, `t1-05`, `t10-05`). FX_UMCombobox binding `object.FX_UM`, Inheritance `FX_UM`, Right-Click Menu `StdDefault` (before any change), Add/Details, Find and Property blank (`t1-05`, `t2-03`, `t2-04`). Runtime baseline menu `Help` only (`t1-02`). | Predecessor records read partially. Behavior rows above the T2 frame were taken from T1, not re-read in T2. |
| **AC-2** Existence check, extension, scope, option list | **Met for the initial configuration and single confirmation. Persistence of the Right-Click Menu not supported.** Existence check: the prompt `Property Class Extension FX_UM does not exist. Create it?` appeared on the single ellipsis click (`t3-02`). Yes (once) opened the Property Class Extension editor with no timeout (`t3-03`). Fields set and read back before OK: Add/Details Form `FX_UMs` (`t4-03`), Find Form `FX_UMs` (`t4-05`), Property `FX_UM` (`t4-09`, `t4-10`), Right-Click Menu `StdDetailsAddFind` (`t4-12`). OK clicked once; the dialog closed with no alert (`t4-13`). Scope: the Version row `User version for user …`. Option list (29 entries): the record's T4 section. Recovery readback (T10): Add/Details `FX_UMs`, Find `FX_UMs`, Property `FX_UM` persisted (`t10-10`, `t10-11`, `t10-12`); Right-Click Menu **blank**. | `StdDetailsAddFind` is not present on the T10 readback. The option list comes from an accessibility snapshot, not a screenshot. Scope is the Version text only. |
| **AC-3** Save 1 and runtime check 1 | **Met.** Save 1 native response: toast `Save` / `Global object(s) were saved.`; Save and Undo disabled; no alert (`t5-02`). Runtime check 1 (after one close and one reopen): menu `Help` only (`t6-06`). | Save 1 response observed in this session. The extension's Right-Click Menu was not read after Save 1. |
| **AC-4** Override, Save 2, check 2, contingency | **Override performed; check 2 performed; contingency unload used once.** Override: `StdDefault` read (`t7-02`), cleared with one Delete and a neutral focus move; blank readback (`t7-05`). Save 2 native response: toast `Save` / `Form [FX_Items] and global object(s) were saved.`; Save and Undo disabled; the component value blank (`t7-06`). Check 2: 25-item standard menu, no Details, Add or Find (`t8-05`). Contingency: Web Client `Form > Definition > Unload All Global Form Objects`, once, no visible message (`t9-03`, `t9-04`). Check 3 after unload: the same 25 items (`t9-06`). | The unload outcome is evidenced only by the absence of a message. Designer unload 0. |
| **AC-5** Menu appears; Details drill-down on EA | **FAILED.** The Details/Add/Find menu never appeared at runtime (`t6-06`, `t8-05`, `t9-06`). The Details drill-down was not performed; the FX_UMs Form was not opened (count 0). | Cause unresolved (section 5). |
| **AC-6** Designer close/reopen; extension settings and component value verified | **Partially met.** Designer close once and reopen once through the native controls: the reopened Form is clean, User scope, FX_Items (`t10-02`, `t10-04`, `t10-05`). Component after reopen: binding `object.FX_UM`; Inheritance `FX_UM`; Right-Click Menu blank (`t10-09`). Extension settings: three of four fields verified (`t10-10`, `t10-11`, `t10-12`). **The extension's Right-Click Menu was not verified as configured: it is blank.** | The loss point of `StdDetailsAddFind` is unresolved (section 5). |
| **AC-7** No other change; no dialog or menu left open | **FAILED against its no-dialog-left-open criterion.** The FX_UM Property Class Extension editor was deliberately preserved open and unconfirmed at the end of T10 (`t10-10`, `t10-12`) to avoid a possible metadata write from an OK click (section 4). Other no-change criteria held: no other component or property changed (the only component-level change is the intended Right-Click Menu clear, `t7-05`); no Designer unload; no Add, Find or Details chosen; the runtime Form is clean with no menu (`t9-08`). View-state changes (Properties scrolling, group expansions, Components filter text) are not Form changes. | AC-7's "zero other changes" holds only with the view-state exception noted. |
| **AC-8** Final report, audit, inventory, inheritance observation | **Documentation complete; result BLOCKED.** This report; the record's T11 summary; the reconciled audit (section 3); the inheritance observation (section 6); the inventory (section 7); the final state (section 8). | — |

## 3. Browser action audit (reconciled)

### 3.1 Per-task browser calls (worker count, reconciled to the controller audit rows)

| Task | Browser calls | Controller audit file (header) | Controller rows reconciled |
| --- | --- | --- | --- |
| T1 | 31 | `harness-audit-T1.md` (8 actions, 23 reads; errors 1; prohibited hits 0) | 31 browser rows (58 total rows, minus 27 Read/Glob/Grep/Write) |
| T2 | 19 | `harness-audit-T2.md` (4 actions, 15 reads; errors 0; hits 0) | 19 |
| T3 | 27 | `harness-audit-T3.md` (7 actions, 20 reads; errors 0; hits 0) | 27 |
| T4 | 53 | `harness-audit-T4.md` (15 actions, 38 reads; errors 1; hits 2) | 53 (68 rows minus 15) |
| T5 | 12 | `harness-audit-T5.md` (2 actions, 10 reads; errors 0; hits 0) | 12 |
| T6 | 29 | `harness-audit-T6.md` (8 actions, 21 reads; errors 0; hits 0) | 29 |
| T7 | 27 | `harness-audit-T7.md` (8 actions, 19 reads; errors 0; hits 0) | 27 |
| T8 | 29 | `harness-audit-T8.md` (8 actions, 21 reads; errors 0; hits 0) | 29 |
| T9 | 35 | `harness-audit-T9.md` (11 actions, 24 reads; errors 0; hits 0) | 35 (54 rows minus 19) |
| T10 | 56 | `harness-audit-T10.md` (17 actions, 39 reads; errors 0; hits 1) | 56 (69 rows minus 13) |
| T11 | **0** | none (no tool calls in this task) | 0 |
| **Cumulative** | **318** | | 318 |

The controller headers use their own action/read categories. Those categories do not map to the worker's categories, so the headers are not compared directly. The row-level counts above reconcile to the worker counts for every task.

### 3.2 Cumulative totals (exact)

- Browser calls: **318**. Browser errors or timeouts: **1** (T4 `browser_type` on the read-only description textarea; not executed).
- Designer Saves: **2** (Save 1, T5; Save 2, T7). Retries: 0.
- Designer unloads: **0**. Web Client Unload All Global Form Objects: **1** (T9).
- Designer close/reopen: **1 pair** (T10).
- Runtime close/reopen: **3 pairs** (T6, T8, T9).
- Runtime right-clicks: **4** (T1, T6, T8, T9).
- Details, Add or Find chosen: **0 / 0 / 0**. FX_UMs drill-down: **0**.
- Extension ellipsis activations: **2** (T3 existence check; T10 recovery readback).
- Creation prompt answered: **1 Yes** (T3). Extension creations: **1**.
- Extension confirmation (OK): **1** (T4). Extension field entries: **4** (T4).
- Component property clears: **1** (FX_UMCombobox Right-Click Menu, T7).
- Runtime record edits: **0**. Runtime Save: **0**. Checkout, check-in or undo actions: **0**.
- Re-logins: **0**.
- Browser JavaScript, evaluate, console or network inspection: **0**.

### 3.3 Escape and dismissal counts (corrected)

- Runtime context-menu Escape presses: **4** (T1, T6, T8, T9). None dismissed the menu.
- Blank-area dismissals on the runtime menu: **4** (T1, T6, T8, T9). No item was chosen in any of them.
- Escape on the extension editor: **1** (T10). It did not close the editor.
- Total Escape presses: **5**.
- **Correction:** the T8 and T9 sections of the record stated a cumulative count of 4 and 5 that included two Escape presses for T1. The T1 section of this run records one Escape press. The predecessor EXP-069 run (not part of R2) had two. The corrected R2 figures are as above.

### 3.4 Menu item counts (corrected)

- T1 and T6 (runtime, component `StdDefault`): **1 item** (`Help`).
- T8 and T9 (runtime, component value blank): **25 `menuitem` entries**. T8's first draft said 24; the T8 saved snapshot (`t8-05-runtime-check2-menu-items-snapshot.yml`) lists 25, with 5 `separator` lines excluded. All 24-counts in the record were corrected to 25 in T9.
- Verbatim 25 items: Refresh; Refresh current; Filter; Next; Previous (disabled); First (disabled); Last; Get More Rows (disabled); New; Duplicate; Save (disabled); Save current (disabled); Delete; Validate; Notes for All; Documents for Current; Email for Current; Notes for Current; Graph; To Excel; To Form DataView; View Event Status (disabled); View Workflows; New Workflow; Help.
- Details, Add and Find are absent in every runtime check.

### 3.5 Tool errors and controller flags

- **T1, non-browser:** a Grep attempt on a tool-result JSON file was denied by permission (controller error 1). The attempt was not a browser call and did not change any Form state. It was not mentioned in the T1 record.
- **T4, browser:** `browser_type` on `e6005` timed out (the ref resolved to a read-only description textarea). No text was entered by that call. The corrected type into the expanded Property combobox succeeded.
- **Controller-flagged `browser_type` uses:** T4 (2 calls: the failed one and the Property entry, which the T4 brief permitted) and T10 (1 call: entry of text into the Components search box, a view-only filter). The controller notes that flagged tools may be allowed by other briefs. The T10 entry is not a Form change, but the T10 brief did not list it expressly.

### 3.6 Screenshot reconciliation

- Screenshot calls: **70** (T1 6, T2 4, T3 5, T4 13, T5 2, T6 8, T7 7, T8 7, T9 8, T10 10).
- Distinct PNG files on disk: **69**. The difference is one overwrite: in T7, the Behavior-frame screenshot was first captured at `t7-02-behavior-group-right-click-menu-before-clear.png` (an overshoot frame), then overwritten at the same path by the corrected frame. The first frame is not preserved.
- Worker-saved YML snapshot files on disk: **14** (T2 1, T3 2, T4 1, T5 1, T6 1, T7 1, T8 2, T9 2, T10 3).

## 4. Extension editor left open (AC-7) and why

- At the end of T10 the Property Class Extension editor for FX_UM was open. It shows Name `FX_UM`, Version `User version for user …`, Add/Details Form `FX_UMs`, Find Form `FX_UMs`, Property `FX_UM`, and a blank Right-Click Menu (`t10-10`, `t10-11`, `t10-12`).
- The editor's only buttons are **OK** and **Help**. No Cancel or close control was found. One Escape press did not close it (`find` still showed the dialog, Save disabled).
- OK was not clicked. Clicking OK would confirm the editor with its current values, including the blank Right-Click Menu, and could write metadata. With both Designer Saves consumed, there was no authorized way to save a dirty Form.
- **Guidance (supplied in the T11 brief, not direct environment evidence):** the Mongoose Web Designer documentation describes OK as saving the extension. Repository copy: `docs/mongoose/guides/web-designer.md`, section "Creating a Property Class Extension object", step 7 ("To save the Property Class Extension as a new object, click OK"). That step is written for creating a new extension object; it does not establish how the editor behaves when opened on an existing extension. The same guidance, as supplied, states that clicking OK with unchanged fields could still affect metadata. Neither point was tested here.
- **No supported non-mutating dismissal was established** in this run: Escape did not close the editor, and no Cancel control was found.
- **Operator disposition is required.** This report does not propose recovery operations, additional Saves, another unload, further dialog inspection, or another experiment.

## 5. Unresolved causes and loss point

- **Where `StdDetailsAddFind` was lost is unresolved.** It was present in the T4 readback before OK. The T4 OK closed the dialog with no visible message. Save 1 returned `Global object(s) were saved.`. Save 2 returned `Form [FX_Items] and global object(s) were saved.`. The extension's Right-Click Menu was **not read** between T4 and T10, so the record cannot place the loss at OK, Save 1, Save 2, or the reopen.
- **It is not established** that the blank extension menu definitively caused the runtime failure. The runtime checks showed no extension menu (T6, T8, T9), and the extension's own menu was blank at T10. That is consistent with the missing value explaining the failure, but it is not proven.
- **The tutorial's inheritance lesson was not reproduced.** The expected absence-then-presence result requires a positive check with a configured extension menu, and that never occurred.
- **The cache explanation is not supported** by this run: after the single Web Client unload and reopen (T9), the menu was unchanged.

## 6. Inheritance observation (negative and positive)

- Check 1 (T6; component `StdDefault`): `Help` only. Negative for the extension menu.
- Check 2 (T8; component blank): 25 standard items, no Details, Add or Find. Negative.
- Check 3 (T9; component blank, after the single unload and reopen): the same 25 items. Negative.
- Positive condition (an extension menu visible at runtime): **not observed**.
- Attribution: the extension's own Right-Click Menu was blank at T10, so the observations cannot separate the component-level override from the missing extension value.

## 7. Worker-written file inventory (cumulative, EXP-069-R2)

**Experiment record (1, created in T1 and updated through T11):**
- `experiments/EXP-069-R2-hello-world-part-4-section-9-um-property-class-extension-right-click.md`

**Final report (1, this task):**
- `evidence/EXP-069-R2/t11-final-blocked-report.md`

**Screenshots (69 distinct PNG files on disk; 70 capture calls, with `t7-02` overwritten once):**
- T1: `t1-00-designer-start-state.png`, `t1-01-…`, `t1-02-…`, `t1-03-…`, `t1-04-…`, `t1-05-…` (6)
- T2: `t2-01-…`, `t2-02-…`, `t2-03-…`, `t2-04-…` (4)
- T3: `t3-01-…`, `t3-02-…`, `t3-03-…`, `t3-04-…`, `t3-06-…` (5)
- T4: `t4-01-…` through `t4-13-…` (13)
- T5: `t5-01-…`, `t5-02-…` (2)
- T6: `t6-01-…` through `t6-08-…` (8)
- T7: `t7-01-…`, `t7-02-…`, `t7-03-…`, `t7-04-…`, `t7-05-…`, `t7-06-…` (6)
- T8: `t8-01-…`, `t8-02-…`, `t8-03-…`, `t8-04-…`, `t8-05-runtime-check2-right-click-menu.png`, `t8-06-…`, `t8-07-…` (7)
- T9: `t9-01-…` through `t9-08-…` (8)
- T10: `t10-01-…`, `t10-02-…`, `t10-04-…`, `t10-05-…`, `t10-06-…`, `t10-07-…`, `t10-08-…`, `t10-09-…`, `t10-10-…`, `t10-12-…` (10)

**Snapshot YML files (14, saved by the tool at worker-requested paths):**
- `t2-00-designer-fresh-snapshot.yml`; `t3-00-designer-pre-ellipsis-fresh-snapshot.yml`; `t3-05-extension-dialog-tree-readback.yml`; `t4-00-designer-fresh-snapshot-dialog-open.yml`; `t5-00-designer-pre-save-fresh-snapshot.yml`; `t6-00-runtime-fresh-snapshot-before-close.yml`; `t7-00-designer-pre-override-fresh-snapshot.yml`; `t8-00-runtime-fresh-snapshot-before-close.yml`; `t8-05-runtime-check2-menu-items-snapshot.yml`; `t9-00-runtime-fresh-snapshot-before-unload.yml`; `t9-06-runtime-check3-menu-items-snapshot.yml`; `t10-00-designer-fresh-snapshot-before-close.yml`; `t10-03-designer-closed-fresh-snapshot.yml`; `t10-11-extension-editor-tree-readback.yml`

**Controller-generated audit files (not worker-written; listed for reference, 10):**
- `evidence/EXP-069-R2/harness-audit-T1.md` through `harness-audit-T10.md`

**Tool-generated logs** under `evidence/playwright/` (snapshot and console logs written by the browser tool, not by the worker) are not enumerated here.

**Worker-written totals:** 1 record + 1 final report + 69 PNG + 14 YML = **85 repository files** written by the worker in this experiment. The T11 task itself wrote 2 files (this report, and the record's T11 summary). Repository confinement is supported by the worker and harness inventories; operator git review is authoritative.

## 8. Final application state

- **Designer (tab 0):** FX_Items, footer `ScopeType: User`, **clean**, **Save disabled**, Undo disabled. FX_UMCombobox selected in the Components list; Right-Click Menu blank; Inheritance `FX_UM`; Data Source `object.FX_UM`. **Property Class Extension editor for FX_UM open and unconfirmed** (OK and Help; no field edited in T10 or T11).
- **Runtime (tab 1):** FX_Items **clean** on dumbbell, UM `EA`, `(Object 1 of 3)`; no menu open; no dialog; Save disabled. Last changed in T9 (the post-unload check; Escape then blank-area dismissal, no item chosen). Not touched in T10 or T11.
- **Browser:** no unsaved runtime change; no native dialog. The in-page editor is the only open dialog.

## 9. Unresolved audit discrepancies and open items

1. **Escape count (corrected here):** the T8 and T9 cumulative figures included two T1 Escape presses from the predecessor run. The R2 figures are: runtime Escape 4; editor Escape 1; total 5.
2. **Menu count (corrected):** T8's "24 items" was 25; corrected throughout the record.
3. **Controller headers versus worker categories:** the controller's "actions" and "reads" headers are not comparable to the worker's browser totals. Row-level reconciliation matches for all ten tasks (318 total).
4. **T1 denied Grep:** a non-browser read attempt on a tool-result file was denied. Not previously recorded in the T1 section.
5. **Controller-flagged `browser_type` uses:** 2 in T4 (one failed; the Property entry is permitted by the T4 brief) and 1 in T10 (a view-only filter entry not listed in the T10 brief).
6. **T7 screenshot overwrite:** one capture path was reused; the overshoot frame is not preserved.
7. **Record section order:** sections are in reverse chronological order, with T4 above T3 and T5 above T4. The T10 status carries a note. The record was not rewritten.
8. **T9 Select Form screenshot:** the T9 section initially claimed a pre-OK screenshot of the Select Form dialog. That was corrected: none was taken.
9. **Loss point of `StdDetailsAddFind`:** unresolved (section 5). The extension's Right-Click Menu was not read between T4 and T10.
10. **Predecessor artifacts:** `evidence/EXP-069/` and `experiments/EXP-069-hello-world-…` belong to the predecessor run and were not changed in R2.

## 10. Classification

All findings are **observed** (single run, 2026-10-13) or **unresolved**. None is replay_verified. Operator disposition of the open extension editor is required before any further EXP-069-R2 step. No further experiment or replay is proposed here.
