# EXP-067 — Hello World Part 4 Section 8a: Unload, then show FX_UMsDescription in a Static and Edit on the User-scope FX_Items Form

**Final outcome (T3, 2026-10-13): BLOCKED at AC-2. No mutation performed.** Both browser tabs display an in-page Mongoose `Session Expired` modal, left open. The required authenticated-session continuation is unavailable under this experiment's restrictions. AC-1 is incomplete (the effective Pane 1 boundary and the rendered Size and Location captures were not established). The Web Client unload count is 0 and the Designer unload count is 0. The binding picker was not reached. AC-3 to AC-7 were not attempted. Cumulative explicit browser calls: **75** (T1 63 + T2 12 + T3 0). Full report: `evidence/EXP-067/T3-final-blocked-report.md`. Nothing is replay_verified.

**Status history.** T2 (read-only preflight resolution) could not complete. Both browser tabs now show an in-page Mongoose `Session Expired` modal. The worker did not click OK and did not reauthenticate, refresh or restart. The Pane 1 boundary is **unresolved**: the native Pane row exposes no dimensions, and the rendered canvas clip (x ≈ 810) leaves the target right edge about 3 px inside it. The rendered Size and Location captures requested in T2 were not obtained. The unload pair, binding gate and every Form change are **not started**. Designer and runtime Forms were clean (Save disabled) at the last read. The preference `Unload IDO Metadata With Forms` was read as checked in T1 and is unchanged. Nothing is replay_verified.

**Earlier status (after T1, 2026-10-13): T1 COMPLETE. Read-only preflight, baseline and preference reading.** Baseline matched the expected state. The target area was free and inside the declared Form, with a caveat about the visible canvas edge.

## 1. Run identity

- Run `R-20261013-002531-dQHH`, experiment EXP-067, cycle 0, task **T1** (read-only preflight). Brief commits (session-start git): `1477a2b` (draft), `9c6e50e` (approved brief).
- Worker session `5f313844-ef7c-4b87-857e-e2a659f0f6c3`; task_message_id `6465fc12-6e50-45e9-9103-2e45172f8fc0`.
- LEARNING MODE. Editing scope **User**. Target Form `FX_Items`, ScopeName `anton.ramos@3mworks.com.ph`. Tenant-wide objects: none changed.
- Full T1 report: `evidence/EXP-067/T1-preflight-report.md`.

## 2. Objective (from the brief)

Follow `docs/mongoose/transcripts/hello-world-pt4.md` Section 8 steps 1–4 and 8–9 (09:18–11:04), adapted to FX_ names. Then refresh the cached metadata through the authorized unload pair (one Web Client, one Designer), and add:

- `FX_UMsDescriptionStatic`: Static, Caption `FX_sDescription` (existing string, observed in EXP-062-R2 T1), Layout Location `10.5; 42.5`, Size `14; 1.5`.
- `FX_UMsDescriptionEdit`: Edit, Binding Type Property, Binding `FX_UMsDescription`, Layout Location `12.5; 42.5`, Size `14; 1.89`.

Then one Designer Save, one Designer close/reopen, one runtime close/reopen, and the description check per record (EA → Each, DZ → Dozen). The Section 8 grid column is a later experiment. Findings are observed only.

Sources: tutorial Section 8 (lines 209–226) is in the record's reading list. The step 5–7 grid work is out of scope.

## 3. T1 results (observed only)

| Gate / check | Result | Evidence |
| --- | --- | --- |
| Tab list before any select | 2 tabs; tab 0 Designer (current), tab 1 Web Client | T1 report §2 |
| Designer identity: `FX_Items`; Version `User version for user anton.ramos@3mworks.com.ph`; footer `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph` | Passed | `t1-01`; accessibility snapshot (start) |
| Designer clean: Save, Regenerate Form, Undo, Redo disabled | Passed | `t1-01`; accessibility |
| Component list: 17 tree entries (2 Panes, FormCollectionGrid, 4 GridColumns, 10 Pane 01 components) | Observed | T1 report §3; `page-2026-10-12T16-26-30-788Z.yml` |
| `FX_UMsDescriptionStatic` and `FX_UMsDescriptionEdit` absent | Observed absent | T1 report §3 |
| Geometry: FX_UMCombobox Size `37.25; 2.15`, Location `7.75; 23.75`; FX_PictureStatic Size `20; 9`, Location `10.5; 21.5`; FX_RefreshButton Size `14.25; 1.89`, Location `12.1666666666667; 5.25`; Form Size `69; 21` (Unit Char) | Observed (accessibility readbacks; no screenshot shows the Layout rows) | T1 report §3, §8 |
| Target area (Static 10.5; 42.5 / 14; 1.5; Edit 12.5; 42.5 / 14; 1.89): no overlap with existing components; inside the declared Form (69 × 21) | **Free, inside declared Form.** Caveat (**the "about 3 px past" wording is superseded by T2**): the right edge at column 56.5 is about 3 px inside the visible canvas edge under the recalibrated 8.0 px model (T2 §3); the Pane 1 width is unconfirmed | T1 report §3; T2 report §3 |
| `Unload IDO Metadata With Forms` (User Preferences) | **Checked**; unchanged; dialog closed with `Close Window` (no Cancel button exists) | `t1-12`, `t1-13`; accessibility `[checked]` |
| Web Client runtime Forms | One `FX_Items` runtime Form (Object 1 of 3, dumbbell), **clean** (Save disabled). One `IDOs` tab (IDO Collections, not runtime; dirty state not read) | `t1-10`, `t1-13` |
| Runtime picture region | Renders a puppy image for dumbbell (EXP-062-R4 T13 recorded blank). Recorded only | `t1-10`, `t1-13` |

## 4. Action audit (T1, cumulative)

Preference read: **1** (unchanged). Web Client unloads: **0**. Designer unloads: **0**. Designer Save: **0**. Designer close/reopen: **0 / 0**. Runtime close/reopen: **0 / 0**. Component add (Toolbox drop): **0**. Component delete/rename/property change: **0 / 0 / 0**. Runtime record edits: **0**. Runtime Save: **0**. Check-in or undo checkout: **0**. Preference change: **0**. Browser JavaScript, console, network, direct URL, refresh or restart: **0**.

Non-mutating explicit browser calls: tab list **1**; tab selects **3**; untargeted/targeted snapshots **2 / 1**; finds **18**; clicks **17**; key presses **1**; mouse wheel **2**; screenshots **16** successful plus **2** timed out. Total explicit calls **63**. Designer view-state changes only (Details expanded, Components tree expanded, Properties expanded, selections). The full list is in the T1 report §6.

## 5. Acceptance matrix (T1 scope)

| AC | Status | Note |
| --- | --- | --- |
| AC-1 | **Supported for the baseline.** Sources reviewed; session usable; Designer FX_Items User scope and clean; component list recorded; geometry of the four items recorded; both new components absent; target area free and inside the declared Form (caveat above) | Geometry screenshots do not show the Size or Location rows; the values are accessibility readbacks. `t1-14` shows Form Layout splitter rows only; `t1-15` and `t1-16` do not show Size or Location |
| AC-2 | **Partial.** Preference read as checked and unchanged: supported. Unload steps and the binding gate are not performed (later tasks) | — |
| AC-3 to AC-8 | Not attempted | Out of T1 scope |

## 6. Decision points for the coordinator (before the mutation stage)

1. **Target right edge vs visible canvas.** *Superseded by T2 and T3:* the 8.1 px scale used here put the target about 3 px past the visible edge; the recalibrated 8.0 px scale puts it about 3 px inside (T2 §3; T3 §5). Under either scale the target right edge (column 56.5) is inside the declared Form width (69). Pane 1 is 58 columns only if derived as 69 − splitter 11, and that is not read natively. The original text follows for the audit trail: the visible canvas edge sits at about column 56.2, so the target is about 3 px past the visible edge. FX_UMCombobox already runs past it (columns to 61.0, clipped). The brief's stop rule covers "exceeds the Form". Recommendation: accept by declared geometry, and state the decision in the approval. Alternative: a one-column left shift, which needs an approved change to the brief's coordinates.
2. **Preference "close with Cancel".** The User Preferences dialog has no Cancel button (OK and Help only). T1 used the dialog's `Close Window` control, without OK. Recommendation: accept, and record the wording as a brief deviation.

## 7. Blockers

None for T1. The T1 scope is complete. The mutation stage (unload pair, binding gate, Static, Edit, Save, reopen, runtime) has not started and needs the coordinator's approval of §6.

## 7a. T2 — read-only preflight resolution (cycle 1; BLOCKED by session expiry)

Full report: `evidence/EXP-067/T2-preflight-resolution-report.md`. Task message `7c5b36da-0405-4723-9bf2-e08fcfdb018a`, worker session `5f313844-ef7c-4b87-857e-e2a659f0f6c3`.

- **Session event:** clicking the Pane (01) row raised a Designer `Session Expired` modal (`t2-01`). A tab-heading click on the Web Client IDOs tab raised the same modal there (`t2-02`). Both modals are in-page and remain open. OK was **not** clicked, because it would route to re-sign-in. Designer URL lost its `MGForm` query (cause unresolved).
- **Pane 1 (preflight item 1):** the native Pane (01) row exposes **no** Layout properties (also EXP-062-R4 T2). Pane 1 width is only derivable: Form width 69 − Splitter 11 = 58 columns (not observed natively).
- **Geometry model (calibrated; supersedes the T1 8.1 px scale):** x = 355 + 8.0 × column; y = 100 + 18.1 × row. This fits FX_PictureStatic (x 530, y 290), FX_RefreshButton (x ≈ 398, y 320), FX_UMCombobox (x ≈ 547, y 240) and the Designer canvas clip at **x ≈ 810**, where FX_UMCombobox (extending to column 61) is visibly clipped.
- **Target rectangles:** both new components span columns 42.5–56.5 (x 695–807). FX_UMsDescriptionStatic is rows 10.5–12.0 (y 290–317). FX_UMsDescriptionEdit is rows 12.5–14.39 (y 326–360). No overlap. Nearest existing: FX_PictureStatic right edge x 687 (8 px clearance); FX_UMCombobox bottom y 279. The right edge sits **about 3 px inside the visible clip**, inside the declared Form (56.5 < 69). The Pane 1 boundary is therefore **unresolved**, and under the brief's rule the run stops before any mutation.
- **Rendered Layout captures:** **not** obtained in T2 (the modal blocked Properties scrolling). The Size and Location values remain accessibility-only.
- **Web Client runtime Forms (preflight item 3):** `FX_Items` runtime Form (clean, Save disabled; not clicked in T2). `IDOs` (IdoCollections; clean, Save disabled, under the modal): Revision Num 2, Revision Date 10/10/2026, Locked By the operator, Check In and Undo Check Out enabled; Tables: FX_Items/fxitms/Primary Base/Inner and FX_UMs/fxum/Secondary/Left Outer with `fxum.[FX_UM] = fxitms.[FX_UM]`. No dirty Form.
- **Counts (T2):** tab list 1; tab selects 2; snapshots 3 (untargeted); finds 1; clicks 2; screenshots 3 (`t2-01` to `t2-03`). **T2 browser calls 12.** Mutations 0; unloads 0 / 0; Designer Save 0; close/reopen 0 / 0; drops 0; property changes 0; preference reads 0 in T2 (not repeated).
- **Cumulative (T1 + T2):** tab lists 2; tab selects 5; snapshots 6 (5 untargeted, 1 targeted); finds 19; clicks 19; key presses 1; wheel 2; screenshots 19 successful and 2 timed out; **explicit browser calls 75** (T1 63 + T2 12). Designer Save 0; unloads 0 / 0; Designer close/reopen 0 / 0; runtime close/reopen 0 / 0; Toolbox drops 0; component changes 0; record edits 0; runtime Save 0; check-in or undo 0; preference changes 0.
- **Worker-written files (T2):** `evidence/EXP-067/T2-preflight-resolution-report.md`; `evidence/EXP-067/t2-01-pane01-selected-properties.png`; `evidence/EXP-067/t2-02-webclient-idos-tab-readonly-save-disabled.png`; `evidence/EXP-067/t2-03-designer-session-expired-state-layout-visible.png`; this record (updated). Tool-written `evidence/playwright/` files are outside this path.
- **Next permitted step:** none for the mutation stage. The operator must re-establish the Mongoose session (outside this worker's scope). Then the coordinator must decide the Pane 1 boundary question (§6 item 1 and T2 report §9 item 2) before any Toolbox drop. The brief's stop rule applies until both are resolved.

## 7b. T3 — documentation-only final blocked report (cycle 2; zero browser calls)

Full report: `evidence/EXP-067/T3-final-blocked-report.md`. Task message `ec4ff6bf-b8ef-4275-b184-2ed637589aad`, worker session `5f313844-ef7c-4b87-857e-e2a659f0f6c3`.

- **Outcome: BLOCKED at AC-2** (per the T3 instruction). Both `Session Expired` modals remain open: Designer (`t2-01`, `t2-03`) and Web Client (`t2-02`). Neither was clicked, and no session restoration was attempted.
- **AC status:** AC-1 incomplete (Pane 1 boundary and rendered Size/Location captures not established). AC-2 blocked (preference checked and unchanged; Web Client unload 0; Designer unload 0; binding picker not reached; unload menu labels not observed). AC-3 to AC-7 not attempted. AC-8: documentation completed for the stop state.
- **Preference:** `Unload IDO Metadata With Forms` checked (T1), unchanged. The brief's Cancel was substituted by `Close Window`, since no Cancel exists; accepted by the coordinator.
- **Estimate vs verification:** the 3 px clearance is a computed estimate from a fitted model (±1 px). No placement was verified. The T1 "about 3 px past" wording is superseded (§3, §6, §10 above).
- **Web Client tab state:** the active tab changed from the `FX_Items` runtime (T2 start) to the `IDOs` tab (T2 click). The runtime tab was not closed and is clean at the last read.
- **Counts (cumulative):** browser calls **75** (T1 63 + T2 12 + T3 0); tab lists 2; tab selects 5; snapshots 6; finds 19; clicks 19; key presses 1; wheel 2; screenshots 21 (19 succeeded, 2 timed out). Preference reads 1 (unchanged); Web Client unloads 0; Designer unloads 0; Designer Save 0; Toolbox drops 0; component changes 0; runtime record edits 0; preference changes 0; check-in or undo 0. Controller audit verification: pending.
- **Worker-written files (T3):** `evidence/EXP-067/T3-final-blocked-report.md` (created); this record (updated). Full cumulative inventory: §11.
- **Next permitted step:** none in this experiment. Operator decisions are listed in `T3-final-blocked-report.md` §10.

## 8. Lessons carried forward from EXP-062-R2 / EXP-062-R4 (not verified in EXP-067)

- Layout readbacks use **row; column** for Location, and **width; height** for Size, in Char units (EXP-062-R4 T3). A Toolbox drop creates an oversized default Static (about 75; 21), so Size and Location must be set explicitly, before other properties.
- The Caption dropdown ellipsis creates a string only through its own prompt. The existing `FX_sDescription` must be chosen from the list, not typed.
- The Designer canvas can show raw IDs before Save (EXP-062-R4 T4–T5). A post-Save check is needed.
- The stale component list in the binding picker and the Properties header lag were observed in EXP-062-R4 (T6, T8). Re-read after the reopen before relying on either.

## 9. Worker-written file inventory (T1)

- `experiments/EXP-067-hello-world-part-4-section-8a-um-description-static-and-edit.md` (created; this record).
- `evidence/EXP-067/T1-preflight-report.md` (created).
- `evidence/EXP-067/t1-01` … `t1-16` (16 PNG files; names listed in the T1 report §10). Some names overstate content (`t1-06`, `t1-07`, `t1-08`, `t1-15`); the T1 report §8 states what each file shows.
- Tool-written, not worker-authored: `evidence/playwright/` accessibility snapshot files from this task (listed in the T1 report §10).

## 10. Knowledge state

| Finding | State |
| --- | --- |
| Designer identity FX_Items, User scope, clean | observed (one session) |
| Baseline component list and absence of the two new components | observed (one session) |
| Geometry readbacks for FX_UMCombobox, FX_PictureStatic, FX_RefreshButton, Form | observed (accessibility; no visual geometry screenshot) |
| Target area free; inside the declared Form; about 3 px **inside** the visible edge (T2 recalibration; the T1 "past" wording is superseded) | observed (computed estimate, not verified placement); Pane 1 boundary **unresolved** |
| `Unload IDO Metadata With Forms` checked and unchanged | observed (one session) |
| One clean runtime FX_Items Form (Object 1 of 3) | observed |
| Runtime picture renders an image for dumbbell | observed; cause **unresolved** |
| Preferences dialog has no Cancel | observed |
| Any replay or procedure status | not claimed; nothing replay_verified |

## 11. Worker-written file inventory (cumulative, T1–T3) and next permitted step

Repository files written by this worker (23 total):

- `experiments/EXP-067-…md` (created T1; updated T2 and T3)
- `evidence/EXP-067/T1-preflight-report.md`; `evidence/EXP-067/T2-preflight-resolution-report.md`; `evidence/EXP-067/T3-final-blocked-report.md`
- `evidence/EXP-067/t1-01` … `t1-16` (16 PNG) and `evidence/EXP-067/t2-01` … `t2-03` (3 PNG)

Tool-written `evidence/playwright/` snapshot and console files are outside this path and not exhaustively listed. The harness and operator git review are authoritative.

**Next permitted step:** none in this experiment. The T1 §6 decisions still apply to any future run. A future run needs the operator to restore the session first.

## Outcome (operator, 2026-10-13)

Blocked, not accepted, with no change made. Operator call under the standing authorization of 2026-10-11.

- Run R-20261013-002531-dQHH completed as blocked after 3 worker tasks.
  - During T2, both the Designer and the Web Client showed a Mongoose "Session Expired" modal.
  - The worker did not click OK, log in again or refresh, which is correct.
- Unloads: 0 of 2. The binding gate was not reached and no Form change was made.
- T1 results (accessibility readbacks):
  - FX_UMCombobox Size 37.25; 2.15, Location 7.75; 23.75.
  - FX_PictureStatic Size 20; 9, Location 10.5; 21.5.
  - FX_RefreshButton Size 14.25; 1.89, Location 12.17; 5.25.
  - Form Size 69; 21 (Char).
  - Unload IDO Metadata With Forms is checked, read only. The User Preferences dialog has no Cancel; it closes with "Close Window".
- Layout finding: the planned components (columns 42.5–56.5) are free and inside the declared Form. However, the right edge is only about 3 px inside the visible canvas clip, and the Pane 1 width is not exposed natively.
- Confinement (git status): only `evidence/EXP-067/` and this record were written by the run.
- Next: replay EXP-067-R2 after the operator logs in again. The replay narrows both components to 12 columns (42.5–54.5) to remove the edge doubt, and closes User Preferences with Close Window.
