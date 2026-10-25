# EXP-132 T11 - AC-9 compliance audit summary (2026-10-25)

Harness header: `run_id=R-20261025-220702-YGFW`, `experiment_id=EXP-132`, `cycle_id=13`, `task=T11`, `worker_session_id=47b7a498-239a-4449-a928-d58d72069b46`, `task_message_id=af0c08cf-e3f6-4fdf-87c6-1995821873a9`.

Companion: `evidence/EXP-132/T11-final-evidence-manifest.md` (acceptance matrix, object inventory, accounting, confinement). This file does not repeat the manifest; it classifies deviations and states the AC-9 disposition.

## 1. Disposition

- **AC-9 is not passed by this audit.**
- **Supported only with explicit operator disposition.** The object inventory, lifecycle counts, browser totals and recovery usage reconcile against the controller audits. Two items cannot be closed by the audit alone: repository confinement (no Git access in this worker) and the source-review compliance of T8 and T2. Several strict requirements carry qualifications that the operator must decide on (section 5).
- **Observed functional result, for the record only:** one runtime activation displayed the literal `FX_ECHO:bridge-probe` in the output position and `0` in the status position (visible-evidence level, same session, one run). This is an observation, not an acceptance decision.
- **Final acceptance is reserved for the coordinator or operator.** This worker does not issue an unconditional EXP-132 decision.

## 2. Source-review compliance per task (controller trace)

Standard applied to every task: AGENTS.md and the governing record or prior summaries must be read before the first browser call. The controller trace is the evidence. Later reads do not establish an earlier pre-task read.

| Task | Reads before first browser call (controller order) | AGENTS.md read before browser | Record or governing summaries read before browser | Status |
| --- | --- | --- | --- | --- |
| T1 | AGENTS #1; EXP-131 manifest #8; EXP-131 record #9; EXP-128 sources #13, #16; EXP-130 metadata #15; EXP-131 t9-14 #17; EXP-131 T10 summary #20 (first browser call #21) | yes | EXP-131 sources yes; EXP-132 record did not exist (created at T1) | Compliant |
| T2 | T1 summary #1 (first browser call #2) | **no** | **no** (EXP-131 record read #42 and EXP-132 record read #135, both after browser calls) | **Not compliant with the per-task standard.** Read-only task; no mutation occurred before the gates |
| T3 | AGENTS #1; T2 completion summary #2; T2 source readback #3 (first browser call #4) | yes | EXP-132 record read #59 (after browser calls) | Partially compliant (record after browser) |
| T4 | AGENTS #1; T3 summary #2; record #3 (first browser call #4) | yes | yes | Compliant |
| T5 | AGENTS #1; T2 readback #2; T3 summary #3; T4 summary #4; record #5 (first browser call #6) | yes | yes | Compliant |
| T6 | AGENTS #1; record #2; T2 readback #3; T4 summary #4; T5 summary #5; EXP-128 HTML #6 (first browser call #7) | yes | yes | Compliant |
| T7 | AGENTS #1; record #2; T4 summary #3; T5 summary #4; T6 asset summary #5; T6 HTML readback #6 (first browser call #7) | yes | yes | Compliant |
| T8 | **none** (first row is a browser tab list, order 1) | **no** | **no** | **Not evidenced; treated as noncompliant pending operator disposition.** The saved T8 summary and the record contain no statement that pre-browser reads occurred. Later reads in T9 (order 3, T8 summary) do not prove a T8 pre-read |
| T9 | AGENTS #1; record #2; T8 summary #3; T6 HTML #4; T7 summary #5; EXP-131 T10 summary #6 (first browser call #7) | yes | yes | Compliant |
| T10 | AGENTS #1; record #2; T9 summary #3; T8 summary #4 (first browser call #5) | yes | yes | Compliant. EXP-131 closure record not read (disclosed; brief said "where applicable") |

## 3. Deviation classification

Classification key: **Procedural** = departs from a stated process rule but no state effect is recorded. **Accepted** = operator acceptance is recorded in the brief or record. **Unverified risk** = a possible effect that the evidence neither confirms nor excludes. **Evidence gap** = a required record or image is missing or overwritten. **Not a breach** = a flagged tool call that performed an in-scope or approved action.

| ID | Task | Event | Actual effect (controller and worker evidence) | Classification | Disposition needed |
| --- | --- | --- | --- | --- | --- |
| DV-01 | T1 | Targeted snapshot after recovery allowance exhausted (`e659`) | No state effect; worker stopped after the error | Procedural | Note |
| DV-02 | T1 | Coordinate Cancel at (959, 728) | Closed Global Objects dialog; no change | Accepted (brief T11 item 7) | None |
| DV-03 | T1 | Ctrl+A then Delete key in the Global Objects search box | Record: text cleared; list repopulated. Focus not read back before the key press. Neighbour rows unchanged in T1-T4 readbacks | Unverified risk | Optional read-only check |
| DV-04 | T1 | Escape ignored once by the dialog | None | Procedural (no effect) | None |
| DV-05 | T2 | AGENTS.md and the record not read before first browser call | No mutation in T2 | Evidence gap (per-task standard) | Operator (see D2) |
| DV-06 | T2 | 11 flagged `browser_type` calls (Select Form and Designer search filters, including the strings `Mock` and `InventoryPrototype`) | Filter text only; no Form selected or opened; no artifact change | Not a breach (in-scope absence checks) | None |
| DV-07 | T3 | Stop at variable gate (creation dialogs showed no Global or Persistent before commit) | No commit; correct stop | Procedural stop; resolved by amendment | None |
| DV-08 | T3 | Stale ref (`e275`), one fresh snapshot, one corrected inspection | No effect | Procedural (permitted recovery) | None |
| DV-09 | T4 | Stale ref on parent Global Objects OK (`e1098`), one fresh snapshot, one corrected OK | No double commit; one successful OK | Procedural (permitted recovery) | None |
| DV-10 | T4 | Typed `FX_vEcho` into the New dialog (flagged) | Approved creation name | Not a breach | None |
| DV-11 | T5 | Click on top Form navigation opened a Form-selection menu; Escape ineffective; next Edit click replaced it | No Form selected; Designer stayed on FX_BridgeTest | Procedural (no effect) | None |
| DV-12 | T5 | Worker action count 16 versus controller 21 | Worker breakdown listed 5 tab selects separately; sum equals 21 | Labelling only (resolved) | None |
| DV-13 | T5 | Typed FX_Echo assignment (flagged) | Approved edit; readback matches | Not a breach | None |
| DV-14 | T6 | Full-content replacement of `FX_Bridge/index.html` | Structure matches the approved design; whitespace identity unproven | Evidence gap (partial) | Operator (D8) |
| DV-15 | T6 | Parent Global Objects OK after the asset OK | Dialog-level finalisation; no object created | Accepted (brief T11 item 5) | None |
| DV-16 | T6 | Worker read count 42 versus controller 44 | Two reads not explained by the worker's breakdown | Evidence gap (unresolved) | Operator (D7) |
| DV-17 | T6 | Asset content not re-read between parent OK and Save | T8 later re-read the content after Save and reopen (same session) | Partly closed by T8 | None beyond AC-6 limits |
| DV-18 | T7 | Single Designer Save | Save-enabled cause before the click not explained | Not a breach; cause unresolved | Carried (section 5) |
| DV-19 | T8 | Duplicate screenshot filename `T8-09` | Output-tab image overwritten; not recoverable | Evidence gap | Operator (D9) |
| DV-20 | T8 | No pre-browser source reads recorded | See section 2 | Evidence gap (per-task standard) | Operator (D1) |
| DV-21 | T9 | Select Form filter did not refresh on fill; Backspace and retype used | One row; one Form opened | Procedural (permitted recovery; counted by worker) | None |
| DV-22 | T9 | Failed repository Edit (`String to replace not found`) | No write; no Mongoose effect | Procedural (repository only) | None |
| DV-23 | T9 | Flagged `browser_fill_form` and `browser_type` (Select Form filter) | Filter text only | Not a breach | None |
| DV-24 | T9 | Worker read count 11 versus controller 12 | Controller counts the 2 s `browser_wait_for` as a read; worker listed it under actions | Labelling only (resolved) | None |
| DV-25 | T10 | Designer gate read after closure instead of before | Designer state before closure rests on T9 end read and no intervening Designer action | Procedural deviation; AC-8 qualified | Operator (D3) |
| DV-26 | T10 | EXP-131 closure record not re-read | Closure used the control named in the brief | Procedural (disclosed) | None |

## 4. Worker and controller discrepancies (summary)

| Task | Discrepancy | Status |
| --- | --- | --- |
| T5 | Actions 16 (worker) versus 21 (controller) | Resolved: tab selects counted separately by the worker |
| T6 | Reads 42 (worker) versus 44 (controller) | Unresolved; controller total stands |
| T8 | Reads "about 68" (worker) versus 68 (controller) | Resolved (worker figure was approximate) |
| T9 | Reads 11 (worker) versus 12 (controller) | Resolved: wait classification |
| T10 | 3 actions and 8 reads (worker) versus 3 and 8 (controller) | Agrees |

Cumulative controller totals: **194 actions; 288 reads** (through T10). These match the brief's stated totals.

## 5. AC-9 criteria checklist

| Criterion (brief AC-9) | Result | Note |
| --- | --- | --- |
| Reconciles every modified FX_ object | Met | Manifest section 3. Modified: `FX_Echo` (T5), `FX_Bridge/index.html` (T6), `FX_vEcho` created (T4). Unchanged: `FX_BridgeControl`, UserCtrl variables, Form-level variables |
| Exactly one planned variable creation | Met | Controller T4 row 27 (New OK, once). No other creation in any audit |
| One Designer Save | Met | Controller T7 row 17. Pre-Save enabled cause unresolved |
| One Form close and reopen | Met | Controller T8 rows 11 and 22 |
| One runtime activation | Met | Controller T9 row 26. Runtime open T9 row 22; closure T10 row 11 |
| Browser action and read totals | Met | Manifest section 6; controller totals; worker discrepancies classified (section 4) |
| Recovery usage | Met | Manifest section 6.3. One post-allowance snapshot in T1 (DV-01) |
| Repository confinement | **Not verifiable here** | No Git access. Controller rows show EXP-132 writes only under `evidence/EXP-132/` and the record. Operator Git review required |
| Unresolved compile, callback, persistence and runtime questions retained | Met | Manifest section 5 |

**Verdict:** AC-9 can be supported only with explicit operator disposition of D1-D14 below. It is not supported unconditionally, because confinement and the T8 and T2 source-review items cannot be closed here. It is not "cannot be supported", because the reconciliation is complete except for those items.

## 6. Items requiring operator disposition

1. **D1 - T8 source-review compliance.** The controller trace shows no pre-browser read. No saved statement that such a read occurred was found. Accept as noncompliant, or provide independent evidence (none is available in the repository).
2. **D2 - T2 per-task source review.** AGENTS.md and the record were not read before the first browser call. T2 was read-only and no mutation occurred. Accept as a procedural gap.
3. **D3 - T10 pre-closure Designer gate.** Read after closure. Accept AC-8 as met with this qualification, or treat AC-8 as not fully met.
4. **D4 - AC-2 variable-type qualification.** The Global path was chosen by operator amendment; the repository docs associate `ThisForm.Variables` and `WSForm.getVarValue` with form variables (`docs/mongoose/guides/scripts.md` lines 86-96; `user-control.md` lines 204-206). Decide whether this limits reliance on the observed round trip. Any test of a Form-level alternative needs separate coordinator disposition.
5. **D5 - T1 recovery overrun** (one targeted snapshot after exhaustion) and the T1 coordinate Cancel (operator-accepted). Note.
6. **D6 - T1 Delete key** in the Global Objects search box. Optional read-only confirmation that no global variable was removed. The current evidence shows no removal but does not prove absence of one.
7. **D7 - Count discrepancies.** T6 read difference (42 versus 44); T5 and T9 classification notes. Accept the controller totals.
8. **D8 - T6 full-content asset rewrite.** Whitespace identity unproven. Accept the structural readback comparison.
9. **D9 - T8-09 overwritten screenshot.** Output-tab state unrecoverable. Accept as an evidence gap.
10. **D10 - Element-ID mapping.** Status and output positions were mapped by DOM order. Accept, or require a separately authorised read-only confirmation.
11. **D11 - Repository confinement.** Operator Git review of the record and `evidence/EXP-132/` as the only attributable EXP-132 changes. Note that `tools/claude-harness/` differences in the start-of-session status snapshot are unrelated to EXP-132 writes but must be confirmed by the operator.
12. **D12 - Open technical questions.** Compile success of revised FX_Echo; Global-object resolution (EXP-130 U-1); the `0` callback value (also seen in EXP-131); cross-session durability; the FX_vEcho tree-visibility change; the pre-Save Save-enabled cause. Accept as open, or decide whether a separately briefed follow-up is needed. None is authorised by EXP-132.
13. **D13 - Account identity.** "Operator-confirmed" rests on the EXP-131 T1 disposition. Confirm it still applies.
14. **D14 - Final EXP-132 acceptance.** Reserved to the coordinator or operator.

## 7. Prohibited-action checks (controller audits, all ten tasks)

- Browser JavaScript, evaluate or run-code calls by the worker: **0** (tool-generated `Ran Playwright code` blocks are not worker-authored).
- Regenerate Form, Delete Form Definition (toolbar), Unload, FormSync, metadata, cache, IDO or database operations: **0** (no matching click descriptions in any audit).
- Reads of `UserControl.js`: **0**.
- Opening of a Mock object, FX_InventoryPrototype01 or a $app asset: **0** (filters only; no matching Form was selected). The Global Objects Web Assets tree was expanded only at FX_Bridge.
- Coordinate clicks: one (T1 Cancel, DV-02). Mouse moves and wheel events: view-only, T2.
- Browser recovery beyond allowance: one post-exhaustion snapshot (T1, DV-01).
- Designer Form Saves: 1 (T7). Designer close and reopen: 1 each (T8). Runtime opens: 1 (T9). Runtime activations: 1 (T9). Runtime closures: 1 (T10). Dialog OKs: 5 in total (T4 New; T4 parent; T5 Script; T6 asset; T6 parent).

## 8. Observations to carry forward (not actions)

- The invoke-callback position displayed `0` in both EXP-131 and EXP-132 single runs, while the literal reached the page only through the getVarValue path. This is a two-run inference; its meaning was not diagnosed.
- The documented API text associates the approved calls with form variables. The success observation does not show which storage was used.
- The Compile Result Errors grid was empty in every check, which does not establish compilation. A future check would need the Output view captured after the change.
- Element IDs are not exposed through the accessibility tree. Mapping by DOM order is the only basis.
- Select Form and Designer filter fields did not refresh on fill in some tasks. Empty grids should not be treated as absence without a positive control in the same dialog.

## 9. Files written by this task

- `evidence/EXP-132/T11-final-evidence-manifest.md` (new)
- `evidence/EXP-132/T11-ac9-audit-summary.md` (new; this file)
- `experiments/EXP-132-fx-web-user-control-bridge-via-form-variable-readb.md` (status paragraph updated and a T11 section appended)
