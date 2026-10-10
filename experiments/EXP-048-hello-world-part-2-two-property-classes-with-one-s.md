# EXP-048 — Hello World Part 2: Two Property Classes With One Save and Recovery

**Current status: T8 COMPLETE (documentation-only final audit; recommendation: accepted with limits, for coordinator review; see the T8 section and `evidence/EXP-048/t8-final-audit.md`). T1 COMPLETE (read-only preflight, existing-class baseline and both absence gates; gates ESTABLISHED for this session, UI level; no class created). T2 COMPLETE (one native New; FX_ItemBase configured with its five explicit fields and verified; row left PENDING; Save NOT invoked; FX_Cost NOT created; Form left OPEN with Save enabled for the pending row, awaiting a separately authorized second-record task). T3 COMPLETE (second native New, cumulative New = 2; no implicit commit observed; FX_Cost configured with its explicit fields including numeric Default Value 0; BOTH rows FX_ItemBase and FX_Cost pending; Save NOT invoked; Form left OPEN with Save enabled, awaiting the single shared Save task). T4 COMPLETE (ONE ordinary toolbar Save for FX_ItemBase and FX_Cost; Save invoked exactly once, no retry; settled UI: Save disabled, no message or prompt, pending stars cleared, both records present with their specified values; no close, reopen or recovery). AC-6 SUPPORTED at UI level (observed, same session). T7 COMPLETE (ONE fresh exact-name Filter-in-Place query for FX_Cost after the reopen, replacing the retained FX_ItemBase criterion: exactly one data row; Decimal, 18, 2, literal 0 in native field and grid cell, decimal, FX_sCost match the pre-Save and settled configuration; Base Class and Domain blank; Save disabled; no prompt. AC-9 SUPPORTED at UI level, same session.) T6 COMPLETE (ONE fresh exact-name Filter-in-Place query for FX_ItemBase after the reopen: exactly one data row; String, 20, nvarchar, FX_sItem match the pre-Save configuration; Base Class and Domain blank; Save disabled; no prompt. AC-8 SUPPORTED at UI level, same session.) T5 COMPLETE (ONE native close of the Property Classes tab, clean, no prompt; ONE reopen through Open and Select Form as IdoPropertyClasses; reopened in clean Filter-in-Place mode with blank criteria, Save disabled; no recovery query). AC-7 SUPPORTED at UI level (observed, same session; one limitation: no accessibility snapshot of the reopened form). AC-8 and AC-9 are NOT RUN (reserved for the separately authorized recovery task).**

Classification: **observed only (single session, UI level). NOT replay_verified.** Nothing here establishes database durability, cross-session persistence, or application of either class to an IDO property.

## Run identity

- Run `R-20261011-012552-sBdG`, experiment EXP-048, **cycle 0, task T1**, task_message_id `7a9b5561-817f-4025-ba00-a8748afafc06`, worker session `1dfccb89-2e8f-4980-9353-b101a842bd6b`.
- Date 2026-10-11 (system date). Mongoose Revision Date values read `10/10/2026`.
- Configuration `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` (identity bar `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`, visible in `T1-preflight-initial-state.png`). The "Site Developer" context named in the brief was not visible in the native UI and was not verified.
- Mode: LEARNING MODE; FX_-only scope extension (AGENTS.md, 2026-10-10). Editing scope User. Target FX_ItemBase, FX_Cost, FX_UMBase, FX_UM.
- Evidence directory `evidence/EXP-048/`. Concise evidence summary: `evidence/EXP-048/t1-evidence-summary.md`.
- **Record creation disclosure:** this record did not exist at the start of T1 (both a Read and a Glob for `experiments/EXP-048-*` found nothing). It was created by this worker in T1.
- Predecessors read before any browser action: EXP-043 (Filter-in-Place absence method, zero-row placeholder behaviour, FX_UMBase creation and recovery values), EXP-044 (exact-value and lowercase guard; case-insensitive coverage by inference; IDO Property Classes and Select Form notes), EXP-047 (blocked; Session Expired; FX_UMBase baseline) and EXP-047-R2 (FX_UM created, one Save, one close and reopen, one recovery; FX_UMBase and FX_UM checked out to the operator; asterisk meaning unresolved). `tools/` was not read.

## Final acceptance matrix (T1 scope)

> Superseded for the whole run by the T8 final audit (`evidence/EXP-048/t8-final-audit.md`, section 2). This matrix is retained as the T1 record. Its "NOT RUN" entries for AC-4 to AC-9 describe T1 only.

| AC | T1 status | Evidence | Limits |
| --- | --- | --- | --- |
| **AC-1** Preflight | **SUPPORTED (UI level, qualified).** Authenticated Web Client, no sign-in or configuration screen; DEM identity bar; one Mongoose tab; Property Classes runtime Form identified as `IdoPropertyClasses` (tab heading; URL `favoriteContext=IdoPropertyClasses`); Save disabled at start; no unrelated pending change; no placeholder; no dialog; no portal banner. The Designer was not opened, so the vendor Form definition was not read or edited. | `T1-preflight-initial-state.png`; start snapshot; `find` "Save" (disabled) | "Site Developer" context not visible or verified; Designer editing scope (User) not exposed on the runtime Form and not verified |
| **AC-2** Existing-class baseline | **SUPPORTED (single session, read-only).** FX_UMBase: String, 10, nvarchar, FX_sUM; Base Class blank; Domain fields blank; Locked By `anton.ramos@3mworks.com.ph`; Check In and Undo Check Out **enabled** (checked out to the operator). FX_UM: Base Class FX_UMBase; Domain IDO FX_UMs; Domain Property FX_UM; Domain List Properties FX_Description; inherited String / 10 / nvarchar / FX_sUM as displayed; Locked By operator; Check In and Undo Check Out **enabled**. Neither class was changed. | `T1-03`, `T1-06`, `T1-final-form-accessibility-FX_UM.yml`; `t1-evidence-summary.md` (baseline table) | Display values; stored values not inspected. Inherited values appear as displayed (as in EXP-047-R2). Preservation is by action-log and screenshot inference only. |
| **AC-3** Collision gate | **SUPPORTED for both targets (single session, UI level).** FX_ItemBase: FiP criterion `FX_ItemBase` (exact text, others blank), one F4: **zero data rows**; one unsaved blue-star placeholder (status `Base Class (IDO Property Classes 1 of 1)`). FX_Cost: FiP criterion `FX_Cost`, one F4: **zero data rows**; same placeholder pattern. Positive controls: `FX_UMBase` before the gate and again after gate A; `FX_UM` after gate B (each returned exactly one data row, no star). Each placeholder was replaced by the next FiP query without a prompt. | `T1-07`/`T1-08` (FX_ItemBase), `T1-09` (positive control), `T1-10`/`T1-11` (FX_Cost), `T1-12` (positive control) | Case-insensitive coverage **not typed** (operator-accepted inference from EXP-044 and EXP-047-R2). Prefix (`*`) form not run. Plain-text matching treated as exact by observation only. Zero-row result rests on the displayed grid and placeholder, not on an empty-grid accessibility snapshot. |
| **AC-4** First new class | **NOT RUN** (creation prohibited in T1). | — | — |
| **AC-5** Second new class | **NOT RUN** (creation prohibited in T1). | — | — |
| **AC-6** Single shared Save | **NOT RUN.** No New, no Save. | — | — |
| **AC-7** Runtime lifecycle | **NOT RUN.** No close, no reopen. The Form was left open. | — | — |
| **AC-8** FX_ItemBase recovery | **NOT RUN.** | — | — |
| **AC-9** FX_Cost recovery | **NOT RUN.** | — | — |
| **AC-10** Preservation and final audit | **PARTIAL (T1 only).** Controller audit reconciled below. Creation, Save, close, reopen and recovery counts are zero by design of T1. FX_UMBase and FX_UM values and checkout indications were re-read unchanged. | Operation counts below; `t1-evidence-summary.md` | Observed only. No checkout or check-in action was taken. Preservation qualified (no independent metadata check). |

## Gate verdict (T1)

- **FX_ItemBase: absence established** for this session (zero data rows for the exact criterion, same-session positive control returned its row).
- **FX_Cost: absence established** for this session (zero data rows for the exact criterion, same-session positive control returned its row).
- Creation is **permitted by both gates**, but **not performed**. T1 is the read-only preflight and gate task. A separately authorized T2 is required before any New, field configuration, Save, close or reopen.

## Observations (T1)

### Baseline (AC-2)

| Attribute | FX_UMBase | FX_UM |
| --- | --- | --- |
| Class Name | `FX_UMBase` | `FX_UM` |
| Base Class | blank | `FX_UMBase` |
| Description | blank | blank |
| Revision No / Revision Date | `1` / `10/10/2026` | `1` / `10/10/2026` |
| Locked By / Access As | `anton.ramos@3mworks.com.ph` / `G6R` | `anton.ramos@3mworks.com.ph` / `G6R` |
| Data Type / Length | `String` / `10` | `String` / `10` (inherited, as displayed) |
| Decimal Position / Default Value | blank / blank | blank / blank |
| Column Data Type | `nvarchar` | `nvarchar` (inherited, as displayed) |
| Label String ID | `FX_sUM` | `FX_sUM` (inherited, as displayed) |
| Domain IDO / Domain Property / Domain List Properties | blank / blank / blank | `FX_UMs` / `FX_UM` / `FX_Description` |
| Checkout indication | Check In and Undo Check Out enabled | Check In and Undo Check Out enabled |

- **Asterisk inventory (observed, meaning unresolved).** FX_UMBase browse record: form labels `*Data Type`, `*Length`, `*Column Data Type`, `*Label String ID`; grid headers `* Revision No`, `* Revision Date`, `*Data Type`, `*Length`, `*Column Data Type`, `*Label String ID`. FX_UM browse record: form labels `*Domain IDO Name`, `*Domain Property`, `*Domain List Properties`, `*Data Type`, `*Length`, `*Column Data Type`, `*Label String ID`. The meaning (required versus override) is **not established**; none is treated as an override indicator.

### Absence gates and positive controls (AC-3)

| Step | Criterion (exact text; others blank) | Settled result | Evidence |
| --- | --- | --- | --- |
| Baseline 1 (control) | `FX_UMBase` | 1 data row `FX_UMBase` | `T1-02`, `T1-03` |
| Baseline 2 (control) | `FX_UM` | 1 data row `FX_UM` | `T1-04`, `T1-06` |
| Gate A | `FX_ItemBase` | **0 data rows**; blue-star placeholder (Class Name blank, red asterisk on the Class Name label and grid header); Save disabled | `T1-07`, `T1-08`; `find` "Save" → `[disabled]` |
| Control 3 | `FX_UMBase` | 1 data row `FX_UMBase`, no star; placeholder replaced silently | `T1-09` |
| Gate B | `FX_Cost` | **0 data rows**; same blue-star placeholder pattern | `T1-10`, `T1-11` |
| Control 4 | `FX_UM` | 1 data row `FX_UM`, no star; placeholder replaced silently; Form left clean | `T1-12`, `T1-final-form-accessibility-FX_UM.yml` |

- The status counter reads `1 of 1` for a zero-row result because it counts the placeholder. The data-row count rests on the displayed grid.
- Criteria were captured before F4 for four of the six queries (`T1-02` FX_UMBase baseline, `T1-04` FX_UM baseline, `T1-07` gate A, `T1-10` gate B); each shows the intended criterion in Class Name and blank other criteria. The two positive controls (FX_UMBase after gate A, FX_UM after gate B) have no pre-F4 screenshot; their criterion is confirmed only by the settled result (the returned row carries the expected Class Name: `T1-09` shows FX_UMBase, `T1-12` shows FX_UM).
- **Retained criteria:** each query replaced the retained Class Name criterion. No other criterion was retained (the pre-F4 captures show them blank).

### Timing (UI)

- After F4 on the baseline queries, one immediate capture (`T1-05`) showed Filter in Place with blank detail fields and an unchecked row; the settled capture (`T1-06`) about two seconds later showed the FX_UM record loaded. The FX_UMBase baseline was read only after it settled. Recorded as observed UI timing; it is not a query failure.

### Interaction notes

- One ref-not-found error: the first toolbar Filter in Place click after a targeted snapshot (`Ref f1e38 not found`). The failed click executed nothing. One fresh untargeted snapshot (recovery allowance) showed the same toolbar ref, and one corrected click succeeded. Recovery snapshots used: 1 of 1. No further recovery was needed.

## Operations (T1, in order, controller audit summary)

| # | Action | Result |
| --- | --- | --- |
| 1 | `browser_tabs` list; untargeted snapshot; screenshot `T1-preflight-initial-state` | One Mongoose tab; FX_UM browse record; Save disabled |
| 2 | Click Filter in Place (`f1e38`) | FiP entered; FX_UM retained |
| 3 | `find` "Class Name:"; screenshot `T1-01`; plain fill `FX_UMBase`; Tab; screenshot `T1-02`; F4 | 1 row `FX_UMBase` |
| 4 | Targeted snapshot of tabpanel; screenshot `T1-03`; `find` "Filter in Place", "Check In"; targeted snapshot of form | FX_UMBase values and checkout enabled |
| 5 | Click Filter in Place (`f1e38`) | **Ref f1e38 not found** (no action executed) |
| 6 | Fresh untargeted snapshot (recovery) | Same toolbar ref present; Save disabled |
| 7 | Click Filter in Place (`f1e38`, corrected) | FiP entered |
| 8 | `find` "Class Name:"; plain fill `FX_UM`; Tab; screenshot `T1-04`; F4; screenshot `T1-05` (pre-settle); wait 2 s; `find` "Check In"; screenshot `T1-06` (settled) | 1 row `FX_UM` |
| 9 | Targeted snapshot of the form | FX_UM values and checkout enabled |
| 10 | `find` "Filter in Place"; click Filter in Place; `find` "Class Name:"; plain fill `FX_ItemBase`; Tab; screenshot `T1-07`; F4; wait 2 s; screenshot `T1-08` | **Gate A: 0 data rows**, placeholder |
| 11 | `find` "Filter in Place", `find` "Save" (disabled); click Filter in Place; `find` "Class Name:"; plain fill `FX_UMBase`; Tab; F4; wait 2 s; screenshot `T1-09` | Control 3: 1 row `FX_UMBase`; placeholder replaced |
| 12 | `find` "Filter in Place"; click; `find` "Class Name:"; plain fill `FX_Cost`; Tab; screenshot `T1-10`; F4; wait 2 s; screenshot `T1-11` | **Gate B: 0 data rows**, placeholder |
| 13 | `find` "Filter in Place"; click; `find` "Class Name:"; plain fill `FX_UM`; Tab; F4; wait 2 s; screenshot `T1-12` | Control 4: 1 row `FX_UM`; placeholder replaced; Form clean |
| 14 | `find` "dialog" (no match); `find` "Save" (`[disabled]`); `browser_tabs` list (one tab); targeted snapshot saved as `T1-final-form-accessibility-FX_UM.yml` | Clean end state |

## Operation counts (T1, reconciled to the action table)

| Operation | Count |
| --- | --- |
| Browser clicks (successful) | **6** (Filter in Place: 6 successful clicks, including the corrected click) |
| Browser click attempts that failed | **1** (`Ref f1e38 not found`; no action executed) |
| Plain fills (Class Name criteria) | **6** (`FX_UMBase`, `FX_UM`, `FX_ItemBase`, `FX_UMBase`, `FX_Cost`, `FX_UM`) |
| Tab presses | **6** (one after each fill) |
| F4 presses | **6** (baseline `FX_UMBase`, baseline `FX_UM`, gate A, control 3, gate B, control 4) |
| Wait calls (2 s each) | **5** |
| Untargeted snapshots / targeted snapshots | **2 / 4** (the second untargeted snapshot is the recovery snapshot) |
| `browser_find` calls | **16** |
| Screenshots (worker-requested PNG) | **13** (`T1-preflight-initial-state`, `T1-01` to `T1-12`) |
| Accessibility snapshot files saved | **1** (`T1-final-form-accessibility-FX_UM.yml`) |
| Tab listings | **2** (start, end) |
| **New** | **0** |
| **Save** | **0** (toolbar Save disabled throughout) |
| **Delete / Refresh / Get More Rows** | **0 / 0 / 0** |
| **Check In / Check Out / Undo Check Out** | **0 / 0 / 0** (buttons were read as enabled, not activated) |
| **Form close / reopen** | **0 / 0** |
| Designer, Explorer edits, metadata cache unload, FormSync, deployment | **0** |
| Property-class edits | **0** |
| Dialogs or prompts answered | **0** (none appeared) |
| Portal banner dismissals | **0** (none visible) |
| Login, logout, reload, navigation, session replacement | **0** |
| Worker-authored JavaScript, evaluate, run-code, direct SQL | **0** (the MCP tool wrappers report generated Playwright code for each action; the worker supplied none) |
| Ref-not-found errors / recovery snapshots / timeouts | **1 / 1 / 0** |

## Evidence files

| File | Visible identity / scope / result | Proves | Does not prove |
| --- | --- | --- | --- |
| `evidence/EXP-048/T1-preflight-initial-state.png` | Property Classes; FX_UM browse record; checkout buttons enabled; Save greyed; identity bar | AC-1 start state | Database state; Site Developer context |
| `evidence/EXP-048/T1-01-fip-entered-retained-criteria-FX_UM.png` | Filter in Place; FX_UM retained and selected | The inherited restrictive criterion before the first query | Any query result |
| `evidence/EXP-048/T1-02-baseline-criteria-FX_UMBase-before-f4.png` | Criterion `FX_UMBase`; other criteria blank | Baseline criterion before F4 | Result |
| `evidence/EXP-048/T1-03-baseline-FX_UMBase-after-f4-settled.png` | One row FX_UMBase; String, 10, nvarchar, FX_sUM; checkout enabled | AC-2 FX_UMBase values as displayed | Database state; Locked By in full (clipped in image) |
| `evidence/EXP-048/T1-04-baseline-criteria-FX_UM-before-f4.png` | Criterion `FX_UM`; other criteria blank | Baseline criterion before F4 | Result |
| `evidence/EXP-048/T1-05-baseline-FX_UM-after-f4-settled.png` | Immediate post-F4 capture: still Filter in Place, blank fields, unchecked row | That the first capture was pre-settle (timing) | FX_UM values (see T1-06) |
| `evidence/EXP-048/T1-06-baseline-FX_UM-settled-recheck.png` | One row FX_UM (checked out); Base Class FX_UMBase; Domain FX_UMs / FX_UM / FX_Description; String, 10, nvarchar, FX_sUM | AC-2 FX_UM values as displayed | Database state; asterisk meaning |
| `evidence/EXP-048/T1-07-gate-FX_ItemBase-criteria-before-f4.png` | Criterion `FX_ItemBase`; others blank | Gate A criterion before F4 | Result |
| `evidence/EXP-048/T1-08-gate-FX_ItemBase-after-f4-settled.png` | Zero data rows; blue-star placeholder; red asterisk on Class Name; Save greyed | AC-3 FX_ItemBase absence (UI, single session) | Completeness beyond the displayed result; case variants |
| `evidence/EXP-048/T1-09-positive-control-FX_UMBase-after-gate-f4-settled.png` | One row FX_UMBase, no star; placeholder replaced | Retrieval works after gate A; placeholder replaced silently | Database state |
| `evidence/EXP-048/T1-10-gate-FX_Cost-criteria-before-f4.png` | Criterion `FX_Cost`; others blank | Gate B criterion before F4 | Result |
| `evidence/EXP-048/T1-11-gate-FX_Cost-after-f4-settled.png` | Zero data rows; blue-star placeholder; Save greyed | AC-3 FX_Cost absence (UI, single session) | Completeness beyond the displayed result; case variants |
| `evidence/EXP-048/T1-12-positive-control-FX_UM-after-FX_Cost-gate-f4-settled.png` | One row FX_UM, checked out; status `1 of 1`; no placeholder; Save greyed | Retrieval works after gate B; Form left clean | Database state |
| `evidence/EXP-048/T1-final-form-accessibility-FX_UM.yml` | Accessibility snapshot of the form at T1 end (FX_UM) | Values and enabled checkout buttons in accessibility form | Toolbar state (outside the saved subtree) |
| `evidence/EXP-048/t1-evidence-summary.md` | Concise summary of the above | Index and limits | — |

Tool-generated snapshot and console logs (not worker-authored; outside `evidence/EXP-048/`): `evidence\playwright\console-2026-10-10T17-25-57-565Z.log`; `evidence\playwright\page-2026-10-10T17-26-30-553Z.yml`, `page-2026-10-10T17-27-05-318Z.yml`, `page-2026-10-10T17-27-18-839Z.yml`, `page-2026-10-10T17-27-37-584Z.yml`, `page-2026-10-10T17-27-49-098Z.yml`, `page-2026-10-10T17-27-58-300Z.yml`, `page-2026-10-10T17-28-06-715Z.yml`, `page-2026-10-10T17-28-13-864Z.yml`, `page-2026-10-10T17-28-24-332Z.yml`, `page-2026-10-10T17-28-31-956Z.yml`, `page-2026-10-10T17-28-39-675Z.yml`, and the untargeted snapshot logs written by the Playwright tool.

## Repository changes (T1)

- `experiments/EXP-048-hello-world-part-2-two-property-classes-with-one-s.md`: **created** (this record).
- `evidence/EXP-048/`: **created**: 13 PNG captures, `T1-final-form-accessibility-FX_UM.yml`, `t1-evidence-summary.md`.
- No other repository file was written. `tools/` was not read. Bash is disabled in this task, so `git status` was not run. The session-start git status (harness context) already listed `tools/learning-harness/*` as modified; those files were not touched by this worker and are not EXP-048 artifacts.

## Knowledge state (per finding)

| Finding | State |
| --- | --- |
| The Property Classes runtime Form is `IdoPropertyClasses` and was open, clean, with Save disabled at T1 start | **observed** (one run) |
| FX_UMBase: String, 10, nvarchar, FX_sUM; Base Class blank; checked out to the operator (Check In and Undo Check Out enabled) | **observed** (one run; consistent with EXP-043, EXP-047, EXP-047-R2) |
| FX_UM: Base Class FX_UMBase; Domain IDO FX_UMs; Domain Property FX_UM; Domain List Properties FX_Description; inherited String, 10, nvarchar, FX_sUM as displayed; checked out to the operator | **observed** (one run; consistent with EXP-047-R2 T3) |
| A FiP query for `FX_ItemBase` (exact text) returns zero data rows, with a placeholder, in this session | **observed** (one run, UI level) |
| A FiP query for `FX_Cost` (exact text) returns zero data rows, with a placeholder, in this session | **observed** (one run, UI level) |
| Same-session positive controls (`FX_UMBase`, `FX_UM`) return one row each after the absence gates | **observed** (one run) |
| A zero-row FiP query leaves a blue-star placeholder that the next FiP query replaces without a prompt | **observed** (one run; consistent with EXP-043 and EXP-047-R2) |
| Case-insensitive coverage for `FX_ItemBase` and `FX_Cost` | **not demonstrated** (operator-accepted inference only; no variant typed) |
| Asterisk meaning (required versus override) | **observed** pattern; meaning **unresolved** |
| Stored versus display-derived inherited values | **unresolved** |
| FX_UMBase and FX_UM checkout persistence beyond this session | **not tested** |
| Creation, Save, close, reopen, recovery of the two new classes | **not performed** (T1) |

## Open questions and blockers

1. **Next permitted action (requires separate authorization):** the coordinator or operator must authorize T2 (two native New operations, one per class, configuration of the explicit fields only, verification of both pending rows, one ordinary toolbar Save; then the close, reopen and per-class recovery in later tasks). T1 does not authorize creation.
2. **Checkout state for T2:** EXP-047-R2 observed that newly saved property classes are created checked out to the creating user. FX_UMBase and FX_UM are both still checked out to the operator. T2 will read this as a checkout state, not as a pending change, unless the operator decides otherwise.
3. **Asterisk meaning:** still unresolved. T2 must inventory asterisks on both new rows (AC-5) without assuming a meaning.
4. **Case-insensitive coverage:** remains by inference (operator decision, EXP-044 and EXP-047-R2).
5. **Record location:** the brief refers to `experiments/EXP-048-...md`, which did not exist before T1 (see Run identity). This record is the one created in T1.
6. Classification remains **observed only, NOT replay_verified**.

---

## T2 — One New; FX_ItemBase configured and verified; row left PENDING (Save NOT invoked)

- Task T2, cycle 1, task_message_id `ede777ba-4dc3-46b0-b484-6bc025b47e75`, worker session `1dfccb89-2e8f-4980-9353-b101a842bd6b`, run `R-20261011-012552-sBdG`. Date 2026-10-11 (system date).
- Scope: confirm the inherited Form is open and clean; one native New; configure FX_ItemBase's five explicit fields; verify; capture asterisks and pending indicators. **No Save, no FX_Cost, no close, no reopen, no recovery, no repeated absence query, no edit of FX_UM or FX_UMBase, no checkout or check-in.**
- Detailed observations: `evidence/EXP-048/t2-evidence-summary.md`.

### Result

- The single New produced one pending row (row 2, starred, status `2 of 2`). FX_ItemBase is configured: Class Name `FX_ItemBase`; Data Type `String`; Length `20`; Column Data Type `nvarchar`; Label String ID `FX_sItem`. Base Class and the Domain relationships are unassigned. Save is **enabled** and was not clicked. No dialog, prompt, validation message or implicit commit was observed.
- The **pending** indication is inferred from the star, the status counter, the enabled Save and the disabled Check In and Undo Check Out buttons (accessibility). No database read.

### Preflight (fresh untargeted snapshot)

| Check | Observed |
| --- | --- |
| Tab / Form | One Mongoose tab; Property Classes tab selected; URL `favoriteContext=IdoPropertyClasses` |
| Identity bar | `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` |
| Rows | One row FX_UM (checked out to the operator) |
| Save | `[disabled]` |
| Dialog, banner, placeholder | None |

### Actions (in order)

| # | Action | Result | Evidence |
| --- | --- | --- | --- |
| 1 | Fresh untargeted snapshot | Preflight as above | snapshot |
| 2 | ONE click on toolbar `New` (`f1e29`) | Row 2 added (starred, blank); status `Class Name (2 of 2)`; FX_UM unchanged | `T2-00` |
| 3 | `find` "Class Name:"; ONE plain fill `FX_ItemBase`; ONE Tab | Class Name `FX_ItemBase` | — |
| 4 | `find` "Data Type:"; ONE click on Data Type Open (`f1e519`); `find` "String"; ONE click on option `String` (`f1e910`) | Data Type `String` | — |
| 5 | `find` "Length:"; ONE plain fill `20`; ONE Tab | Length `20` | — |
| 6 | `find` "Column Data Type:"; ONE click on Open (`f1e556`); `find` "nvarchar"; ONE key-by-key type `nvar` (slowly) into combobox (`f1e555`); ONE F2 | List filtered to one entry `nvarchar` | `T2-01` |
| 7 | `find` "nvarchar"; ONE click on option `nvarchar` (`f1e1352`); ONE Tab | Column Data Type `nvarchar` | — |
| 8 | `find` "Label String ID:"; ONE plain fill `FX_sItem`; ONE Tab | Label String ID `FX_sItem`; focus moved to Input Mask (not typed) | — |
| 9 | Screenshot; targeted accessibility snapshot of the form (`T2-03`); `find` "Save" (enabled); `find` "dialog" (none) | All five values verified; Base Class and Domain empty; pending | `T2-02`, `T2-03` |

Errors: none (no Ref-not-found, no timeout, no validation message). Recovery snapshots: 0. The toolbar and form refs from the preflight snapshot were used directly.

### Pre-Save verification (AC-4)

| Value | Native control | Grid row 2 | Result |
| --- | --- | --- | --- |
| Class Name | textbox `FX_ItemBase` | `FX_ItemBase` | Matches |
| Data Type | combobox `String` | `String` | Matches |
| Length | textbox `20` | `20` | Matches |
| Column Data Type | combobox `nvarchar` | `nvarchar` | Matches |
| Label String ID | textbox `FX_sItem` | `FX_sItem` | Matches |
| Base Class; Domain IDO Name; Domain Property; Domain List Properties | empty | blank | Unassigned, as required |
| Decimal Position; Default Value | empty | blank | Not set (not specified for FX_ItemBase) |

- No other field was typed or clicked. Revision No `1`, Revision Date `10/10/2026`, Locked By `anton.ramos@3mworks.com.ph` and Access As `G6R` appeared on the new row; the worker did not type them. The system population is inferred.

### Asterisk inventory (observed; meaning not assumed)

- Form labels with an asterisk on the pending row: `*Class Name` (red), `*Data Type`, `*Length`, `*Column Data Type`, `*Label String ID`.
- Grid headers with an asterisk: `* Class Name`, `* Revision No`, `* Revision Date`, `*Data Type`, `*Length`, `*Column Data Type`, `*Label String ID`.
- No asterisk on the Base Class, Domain or Decimal Position labels in this view.
- Comparison (T1): the saved FX_UMBase record carried asterisks on the same four labels (`*Data Type`, `*Length`, `*Column Data Type`, `*Label String ID`). The inherited FX_UM record carried asterisks on the Domain labels instead. Meaning (required, override or other) is **unresolved**.

### Preservation (qualified)

- FX_UM: its values and enabled checkout buttons were read unchanged in the pre-Save accessibility snapshot. No action targeted FX_UM.
- FX_UMBase: not displayed in this Form state after the T1 queries and not re-queried. **Not independently verified in T2.** Qualified by the action log: no action targeted FX_UMBase.

### Operation counts (T2)

| Operation | Count |
| --- | --- |
| New | **1** |
| Save | **0** (enabled, not invoked) |
| Close / reopen / recovery / absence queries | **0 / 0 / 0 / 0** |
| Check In / Check Out / Undo | **0 / 0 / 0** |
| Fields edited | **5** (the five explicit FX_ItemBase fields) |
| Browser mutations | **14**: 5 clicks (New; Data Type Open; `String`; Column Data Type Open; `nvarchar`); 3 plain fills (Class Name, Length, Label String ID); 1 key-by-key type (`nvar`); 1 F2; 4 Tab |
| Reads | 10 `browser_find`; 2 explicit snapshots (1 untargeted preflight, 1 targeted pre-Save); tool-generated snapshot logs accompany actions |
| Screenshots | 3 (`T2-00`, `T2-01`, `T2-02`) |
| Errors / Ref-not-found / timeouts / recovery snapshots | **0 / 0 / 0 / 0** |
| Prompts or dialogs answered | **0** |
| Portal banner dismissals | **0** |
| Worker-authored JavaScript, evaluate, run-code, direct SQL | **0** (the tool wrapper's generated code for the two Open clicks targeted element ids internally; the worker supplied refs only) |

### Evidence (T2)

| File | Visible identity / scope / result | Proves | Does not prove |
| --- | --- | --- | --- |
| `evidence/EXP-048/T2-00-after-single-new-click-placeholder.png` | Row 2 starred and blank; FX_UM row 1; status `Class Name (2 of 2)` | One pending row added by the single New | Field values |
| `evidence/EXP-048/T2-01-column-data-type-nvar-f2-lookup.png` | Row 2 `FX_ItemBase`; String; 20; Column Data Type list filtered to one `nvarchar` | Prefix filter and single match before selection | That nvarchar was committed |
| `evidence/EXP-048/T2-02-FX_ItemBase-staged-pre-verification.png` | Starred row `FX_ItemBase`; String, 20, nvarchar, FX_sItem; Base Class and Domain empty; status `Input Mask (2 of 2)`; Save enabled; no dialog | AC-4 visual values with the pending row | Accessibility values (see T2-03); persistence |
| `evidence/EXP-048/T2-03-FX_ItemBase-pre-save-accessibility.yml` | Form accessibility tree: control values; row-2 grid cells; Check In and Undo Check Out `[disabled]` | AC-4 control and grid values; no Base Class or Domain assignment | Persistence; the origin of system-populated fields |

Evidence summary: `evidence/EXP-048/t2-evidence-summary.md`.

### Acceptance checks (T2)

| AC | T2 status | Limits |
| --- | --- | --- |
| AC-1 | **Supported (qualified)**: identity, Save disabled, no dialog at T2 start | Site Developer context not visible; User Designer scope not exposed in the runtime Form |
| AC-2 | **Carried from T1** (not repeated) | Display values; not stored values |
| AC-3 | **Carried from T1** (gates established; not repeated) | Single session; case variants by inference |
| AC-4 | **Supported** (FX_ItemBase, pre-Save; control and grid values) | UI level; pending inferred |
| AC-5 | **NOT RUN** (FX_Cost not created) | — |
| AC-6 | **Open**: one New is recorded; the single shared Save has not occurred | — |
| AC-7 to AC-9 | **NOT RUN** | — |
| AC-10 | **Partial** (T2 counts reconciled to controller actions and screenshots) | Observed only |

### Final browser state (T2)

- One Mongoose tab, selected. Property Classes runtime tab open, selected, in browse mode.
- Grid: row 1 FX_UM (checked out to the operator, unchanged); row 2 FX_ItemBase (starred, pending, unsaved).
- Save **enabled** (not clicked); status `Input Mask (IDO Property Classes 2 of 2)`; Input Mask focused and empty. No dialog, prompt or portal banner.
- **The pending FX_ItemBase row is intentionally left unsaved for the subsequent second-record task.** A later Save would commit it, so the next task must decide the next step with the operator before any further action.

### Repository changes (T2)

- `experiments/EXP-048-hello-world-part-2-two-property-classes-with-one-s.md`: edited (status line; this T2 section).
- `evidence/EXP-048/T2-00-…png`, `T2-01-…png`, `T2-02-…png`, `T2-03-…yml`, `t2-evidence-summary.md`: created.
- No other repository file was written. `tools/` was not read.

### Knowledge state (T2)

| Finding | State |
| --- | --- |
| One native New adds one pending row beside the inherited FX_UM row | **observed** (one run) |
| The FX_ItemBase row accepts String, 20, nvarchar and FX_sItem through native controls, and the grid mirrors them | **observed** (one run; pre-Save) |
| The Column Data Type prefix `nvar` with F2 yields one `nvarchar` option (as in EXP-043) | **observed** (one run) |
| The pending row shows Check In and Undo Check Out `[disabled]` in the accessibility tree; Save enabled | **observed** (one run) |
| Revision No, Revision Date, Locked By and Access As are populated on the new row without typing | **observed**; origin **inferred** |
| Asterisk meaning (required versus override) | **observed** pattern; meaning **unresolved** |
| Persistence of FX_ItemBase (Save not invoked) | **not performed** |

### Open questions and next permitted action

1. **Next permitted action (requires separate authorization):** the second-record task. It would create FX_Cost through one more native New, configure it, verify both pending rows, and then invoke the single shared toolbar Save. FX_ItemBase must not be saved, closed or discarded before that decision.
2. The FX_ItemBase row is pending. The operator should confirm that leaving it pending is acceptable until the shared Save task.
3. Asterisk meaning is unresolved; AC-5 must inventory both rows together without assuming a meaning.
4. Classification remains **observed only, NOT replay_verified**.

---

## T3 — Second New; FX_Cost configured; BOTH rows pending (Save NOT invoked)

- Task T3, cycle 2, task_message_id `a0cf1592-672c-4aad-b5ec-d3349b269025`, worker session `1dfccb89-2e8f-4980-9353-b101a842bd6b`, run `R-20261011-012552-sBdG`. Date 2026-10-11 (system date).
- Scope: confirm FX_ItemBase still staged; one native New; implicit-commit check; configure FX_Cost; verify both pending rows. **No Save, no close, no reopen, no recovery or absence query, no edit of FX_UM or FX_UMBase, no checkout or check-in, no metadata lifecycle action.**
- Detailed observations: `evidence/EXP-048/t3-evidence-summary.md`.

### Result

- The second New (cumulative New = 2) added row 3 as a pending row. FX_ItemBase (row 2) **remained starred** (pending) with its values; FX_UM (row 1) unstarred and unchanged. Save **enabled**. No dialog, prompt, validation message or implicit commit was observed. The exclusion of an implicit commit rests on the pending star and the enabled Save; neither is a database read.
- FX_Cost is configured: Class Name `FX_Cost`; Data Type `Decimal`; Length `18`; Decimal Position `2`; Default Value `0` (a literal zero, not blank or null); Column Data Type `decimal`; Label String ID `FX_sCost`. Base Class and Domain fields are unassigned.
- Both rows are **pending simultaneously** before Save.

### Preflight (fresh untargeted snapshot; `T3-00`)

| Check | Observed |
| --- | --- |
| Tab / Form | One Mongoose tab; Property Classes selected; URL `favoriteContext=IdoPropertyClasses` |
| Identity bar | `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` |
| FX_ItemBase (row 2) | Starred; Class Name `FX_ItemBase`; String; 20; nvarchar; FX_sItem; Base Class and Domain empty |
| FX_UM (row 1) | Unstarred; checked out to the operator; values unchanged |
| Save | Enabled |
| Dialog, banner | None |

### Actions (in order)

| # | Action | Result | Evidence |
| --- | --- | --- | --- |
| 1 | Fresh untargeted snapshot; screenshot `T3-00` | Preflight as above | `T3-00` |
| 2 | ONE click on toolbar `New` (`f1e31`) | Row 3 added (starred, blank); status `3 of 3` | `T3-01` |
| 3 | Implicit-commit check: `find` "FX_ItemBase"; `find` "Save"; `find` "Class Name:"; screenshot `T3-01` | Row 2 still starred with values; Save enabled; no dialog | `T3-01` |
| 4 | Plain fill `FX_Cost` into Class Name (`f1e533`); ONE Tab | Class Name `FX_Cost` | — |
| 5 | Click Data Type Open (`f1e606`); click option `Decimal` (`f1e1013`) | Data Type `Decimal` | — |
| 6 | Plain fill `18` into Length (`f1e615`); ONE Tab | Length `18` | — |
| 7 | Plain fill `2` into Decimal Position (`f1e624`); ONE Tab | Decimal Position `2` | — |
| 8 | Plain fill `0` into Default Value (`f1e633`); ONE Tab | Default Value `0` (literal) | — |
| 9 | Click Column Data Type Open (`f1e643`); key-by-key type `decim` (`f1e642`); ONE F2; screenshot `T3-02`; click option `decimal` (`f1e1456`); ONE Tab | Column Data Type `decimal`; one-entry filtered list | `T3-02` |
| 10 | Plain fill `FX_sCost` into Label String ID (`f1e703`); ONE Tab | Label String ID `FX_sCost` | — |
| 11 | Screenshot `T3-03`; targeted accessibility snapshot `T3-04`; `find` "Save" (enabled); `find` "dialog" (none); tab list (one tab) | Both rows pending; values verified | `T3-03`, `T3-04` |

Errors: none (no Ref-not-found, no timeout, no validation message). Recovery snapshots: 0 in T3 (none were needed). The single T1 recovery allowance had been consumed in T1 (controller order 28) and was not available in T3.

### Pre-Save verification (AC-4, AC-5)

| Field | FX_ItemBase (row 2) | FX_Cost (row 3) | Result |
| --- | --- | --- | --- |
| Class Name | `FX_ItemBase` | `FX_Cost` | Matches |
| Data Type | `String` | `Decimal` | Matches |
| Length | `20` | `18` | Matches |
| Decimal Position | blank (not specified) | `2` | Matches (FX_Cost) |
| Default Value | blank (not specified) | `0` (literal zero: textbox `"0"` and grid cell `"0"`) | Matches; distinguished from blank |
| Column Data Type | `nvarchar` | `decimal` | Matches |
| Label String ID | `FX_sItem` | `FX_sCost` | Matches |
| Base Class; Domain IDO Name; Domain Property; Domain List Properties | empty | empty | Unassigned, as required |

- Revision No `1`, Revision Date `10/10/2026`, Locked By `anton.ramos@3mworks.com.ph` and Access As `G6R` appear on row 3 without being typed. System population is inferred.

### Asterisk inventory (observed; meaning not assumed)

- FX_Cost form labels with an asterisk: `*Class Name` (red), `*Data Type`, `*Length`, `*Decimal Position`, `*Default Value`, `*Column Data Type`, `*Label String ID`. Domain labels carry no asterisk on this row.
- Grid headers with an asterisk: `* Class Name`, `* Revision No`, `* Revision Date`, `*Data Type`, `*Length`, `*Decimal Position`, `*Default Value`, `*Column Data Type`, `*Label String ID`.
- FX_ItemBase (T2) showed the same four labels starred (`*Data Type`, `*Length`, `*Column Data Type`, `*Label String ID`). FX_Cost adds `*Decimal Position` and `*Default Value`. Why these two appear only on FX_Cost is not established. The meaning (required, override or other) of all asterisks is **unresolved**.

### Preservation (qualified)

- FX_UM: unchanged in the pre-Save accessibility snapshot; checkout buttons unchanged; not acted on.
- FX_UMBase: not displayed in this Form state and not re-queried. **Not independently verified in T3.** Qualified by the action log (no action targeted FX_UMBase).

### Operation counts (T3 and cumulative)

| Operation | T3 | Cumulative (T1–T3) |
| --- | --- | --- |
| New | **1** | **2** (FX_ItemBase, FX_Cost) |
| Save | **0** | **0** |
| Close / reopen | **0 / 0** | **0 / 0** |
| Recovery queries | 0 | 0 |
| Absence queries | 0 | 2 gates + 2 positive controls (T1) |
| Check In / Check Out / Undo | 0 | 0 |
| Browser mutations | 18: 5 clicks (New; Data Type Open; `Decimal`; Column Data Type Open; `decimal`); 5 plain fills; 1 key-by-key type (`decim`); 1 F2; 6 Tab | — |
| Reads | 13 `browser_find`; 2 explicit snapshots (1 untargeted, 1 targeted); 1 tab listing | — |
| Screenshots / accessibility files | 4 (`T3-00` to `T3-03`) / 1 (`T3-04`) | — |
| Errors / Ref-not-found / timeouts / recovery snapshots | **0 / 0 / 0 / 0** | — |
| Prompts or dialogs answered | **0** | — |
| Portal banner dismissals | **0** | — |
| Worker-authored JavaScript, evaluate, run-code, direct SQL | **0** (the tool wrapper's generated code for each action; the worker supplied refs only) | — |

### Evidence (T3)

| File | Visible identity / scope / result | Proves | Does not prove |
| --- | --- | --- | --- |
| `evidence/EXP-048/T3-00-preflight-FX_ItemBase-pending-before-second-New.png` | Row 2 FX_ItemBase starred with String/20/nvarchar/FX_sItem; Save enabled; status `2 of 2` | FX_ItemBase still staged before the second New | Persistence |
| `evidence/EXP-048/T3-01-after-second-New-both-rows-visible.png` | Rows: FX_UM unstarred; FX_ItemBase starred; row 3 starred and blank; status `3 of 3` | One second New added a pending row; no implicit commit observed (row 2 still starred) | Stored state of row 2 |
| `evidence/EXP-048/T3-02-FX_Cost-column-data-type-decim-f2-lookup.png` | Row 3 Decimal, 18, 2, 0; Column Data Type filtered to one `decimal` | Prefix filter and the single match; numeric 0 visible | That `decimal` was committed |
| `evidence/EXP-048/T3-03-both-rows-pending-FX_Cost-staged-pre-save.png` | Rows 2 and 3 both starred; FX_Cost form Decimal, 18, 2, 0, decimal, FX_sCost; Save enabled | AC-5 visual values; both pending rows present together | Accessibility values (see T3-04); persistence |
| `evidence/EXP-048/T3-04-pre-save-accessibility-both-rows.yml` | Form accessibility tree; grid rows for all three records; Check In and Undo Check Out `[disabled]` | AC-4 and AC-5 control and grid values; numeric zero distinguished from blank | Persistence; origin of system-populated fields |

Evidence summary: `evidence/EXP-048/t3-evidence-summary.md`.

### Acceptance checks (T3)

| AC | T3 status | Limits |
| --- | --- | --- |
| AC-1 | Carried from T1; re-checked at T3 start (identity, Save enabled, no dialog) | Site Developer context not visible |
| AC-2 | Carried from T1 (not repeated) | Display values, not stored values |
| AC-3 | Carried from T1 (not repeated) | Single session; case variants by inference |
| AC-4 | **Carried from T2 and re-confirmed** for FX_ItemBase in the pre-Save grid | UI level; pending inferred |
| AC-5 | **Supported** for FX_Cost (pre-Save): values, numeric zero, both rows present, asterisks inventoried | UI level; pending inferred |
| AC-6 | **Open**: two New operations recorded; both definitions verified pending; the single shared Save has **not** been invoked (by design of T3) | Settled-state checks wait for the Save task |
| AC-7 to AC-9 | **NOT RUN** | — |
| AC-10 | **Partial** (counts reconciled to controller actions and screenshots) | Observed only |

### Final browser state (T3)

- One Mongoose tab, selected. Property Classes runtime tab open, selected, in browse mode with a pending new row (row 3) and FX_ItemBase (row 2) pending.
- Grid: row 1 FX_UM (unstarred, checked out to the operator, unchanged); row 2 FX_ItemBase (starred, pending); row 3 FX_Cost (starred, pending).
- Save **enabled** and **not clicked**. Status `Input Mask (IDO Property Classes 3 of 3)`; Input Mask focused and empty. No dialog, prompt or portal banner. The Form has not been closed or reopened since T2.
- **Both new records remain uncommitted.** Uncertainty: the star and the enabled Save are the only native evidence; a database read would be needed to confirm no commit has occurred, and that is out of scope.

### Repository changes (T3)

- `experiments/EXP-048-hello-world-part-2-two-property-classes-with-one-s.md`: edited (status line; this T3 section).
- `evidence/EXP-048/T3-00-…png`, `T3-01-…png`, `T3-02-…png`, `T3-03-…png`, `T3-04-…yml`, `t3-evidence-summary.md`: created.
- No other repository file was written. `tools/` was not read.

### Knowledge state (T3)

| Finding | State |
| --- | --- |
| A second native New adds a third pending row and leaves the earlier pending row starred (no implicit commit visible in the UI) | **observed** (one run); commit state **not** independently verified |
| FX_Cost accepts Decimal, 18, 2, 0, decimal and FX_sCost through native controls and the grid; Default Value is a literal zero | **observed** (one run; pre-Save) |
| Column Data Type prefix `decim` with F2 yields one `decimal` option | **observed** (one run) |
| Both rows are pending and Save is enabled before the shared Save | **observed** (one run; UI level) |
| Asterisk meanings (required versus override) and why `*Decimal Position` and `*Default Value` appear only on FX_Cost | **unresolved** |
| Persistence of either class (Save not invoked) | **not performed** |

### Open questions and next permitted action

1. **Next permitted action (requires separate authorization):** the single shared toolbar Save for both rows, followed by the close, reopen and per-class recovery in later tasks. The coordinator or operator must authorize it.
2. The operator should confirm that both rows may remain pending until that task. Neither should be discarded or re-queried in the meantime.
3. Classification remains **observed only, NOT replay_verified**.

---

## T4 — ONE shared toolbar Save for FX_ItemBase and FX_Cost (Save invoked once; settled UI verified)

- Task T4, cycle 3, task_message_id `22d94684-295f-4b8a-8fc9-f80d8267222d`, worker session `1dfccb89-2e8f-4980-9353-b101a842bd6b`, run `R-20261011-012552-sBdG`. Date 2026-10-11 (system date).
- Scope: confirm preconditions; invoke the ordinary toolbar Save **exactly once**; capture the immediate and settled state; document differences. **No New, no close, no reopen, no recovery query, no class edit, no metadata lifecycle action, no check-in or checkout, no Save retry.**
- Detailed observations: `evidence/EXP-048/t4-evidence-summary.md`.

### Result

- The single Save settled **cleanly** in the UI: Save **disabled**; no message, error, validation text or dialog; the pending stars on FX_ItemBase (row 2) and FX_Cost (row 3) cleared; both records are present with their specified values; the Class Name form-label and grid-header asterisks cleared; Check In and Undo Check Out enabled on the displayed FX_Cost record.
- **AC-6 is supported at UI level** (observed, same session): two New operations (T2 and T3), both definitions verified pending before the Save, exactly one ordinary toolbar Save, and a settled state with both intended records and no pending indicator, prompt or error. No metadata lifecycle action was taken.
- The Save result is not ambiguous: no retry, and no further action is required to establish the settled state.

### Preconditions (confirmed before Save; fresh untargeted snapshot `T4-00`)

| Check | Observed |
| --- | --- |
| Form | Property Classes selected; URL `favoriteContext=IdoPropertyClasses`; one Mongoose tab |
| Identity | `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` |
| Rows | FX_UM (row 1, unstarred, checked out); FX_ItemBase (row 2, starred); FX_Cost (row 3, starred) |
| FX_ItemBase | String; 20; nvarchar; FX_sItem; Base Class and Domain blank |
| FX_Cost | Decimal; 18; 2; **0 (literal)**; decimal; FX_sCost; Base Class and Domain blank |
| Save | Enabled |
| Dialog / prompt / banner | None |
| Implicit commit | Not indicated; both rows pending |

### Action (the only mutation in T4)

| # | Action | Result | Evidence |
| --- | --- | --- | --- |
| 1 | Fresh untargeted snapshot; `find` "dialog" (none); `find` "Save" (enabled); screenshot `T4-00` | Preconditions as above | `T4-00` |
| 2 | **ONE click on toolbar `Save` (`f1e28`)** | Returned without error; no timeout; no ref error | — |
| 3 | Screenshot `T4-01`; `find` "dialog" (none); `find` "Save" (`[disabled]`, tooltip `Save`) | Immediate: Save disabled; no message; no prompt | `T4-01` |
| 4 | Wait 2 s; accessibility snapshot `T4-02`; screenshot `T4-03`; `find` "dialog" (none); tab list (one tab) | Settled state verified | `T4-02`, `T4-03` |

Save invocations: **1**. Retries: **0**. Recovery snapshots: **0**. Errors: **0**.

### Settled state and differences from pre-Save

| Attribute | Pre-Save | Settled | Difference |
| --- | --- | --- | --- |
| Save | Enabled | Disabled | Changed (expected) |
| Pending stars (rows 2, 3) | Present | Absent | Changed (expected) |
| Class Name form label (FX_Cost) | Red asterisk | Plain | Asterisk removed |
| Grid header Class Name | `* Class Name` | `Class Name` | Asterisk removed |
| Check In / Undo Check Out (displayed FX_Cost) | Disabled | Enabled | Changed (saved record shown as checked out to the operator; not acted on) |
| FX_ItemBase values | String / 20 / nvarchar / FX_sItem | identical | None |
| FX_Cost values | Decimal / 18 / 2 / 0 / decimal / FX_sCost | identical (Default Value remains `0`; no display change such as `0.00`) | None |
| Base Class and Domain fields (both new records) | blank | blank | None |
| Revision No / Revision Date / Locked By / Access As (both) | 1 / 10/10/2026 / operator / G6R | identical | None |
| Status bar | `Input Mask (IDO Property Classes 3 of 3)` | identical | None |

- **Asterisks, settled:** the form labels and grid headers that were starred before the Save remain starred (`*Data Type`, `*Length`, `*Decimal Position`, `*Default Value`, `*Column Data Type`, `*Label String ID`, and the Revision headers). The only asterisk that cleared is the Class Name label and header, which was the add-mode marker. Meaning (required versus override) remains **unresolved**.

### Preservation (qualified)

- **FX_UM:** row 1 values and checkout indication unchanged in the settled grid. No action targeted FX_UM.
- **FX_UMBase:** not displayed in this Form state since T1, and not re-queried (no further queries permitted in T4). **Not independently verified in T4.** Qualified by the action log: no T4 action targeted FX_UMBase.

### Cumulative action counts (EXP-048, T1–T4)

| Operation | Cumulative |
| --- | --- |
| New | **2** (FX_ItemBase in T2; FX_Cost in T3) |
| Save (toolbar) | **1** (shared; in T4) |
| Form close / reopen | **0 / 0** |
| Recovery (exact-name) queries | **0** |
| Class Name F4 queries (T1) | 6: 2 baseline reads, 2 absence gates (FX_ItemBase, FX_Cost), 2 positive controls after the gates |
| Check In / Check Out / Undo | 0 |
| Metadata lifecycle, unload, FormSync, deployment, Designer, SQL | 0 |
| Dialogs or prompts answered | 0 |
| T1 ref-not-found errors | 1 (recovery used; one corrected click) |
| T4 browser mutations | 1 (the Save click) |

### Evidence (T4)

| File | Visible identity / scope / result | Proves | Does not prove |
| --- | --- | --- | --- |
| `evidence/EXP-048/T4-00-preflight-both-pending-before-shared-Save.png` | Rows 2 and 3 starred; FX_Cost values; Save enabled; status `3 of 3`; no dialog | Preconditions visible before the single Save | Persistence |
| `evidence/EXP-048/T4-01-immediate-after-single-shared-Save.png` | Save greyed; stars cleared; Class Name asterisk cleared; checkout buttons enabled; `Save` tooltip; no dialog | Immediate response: no message, no prompt, Save disabled | Stored state (no success text is shown by this UI) |
| `evidence/EXP-048/T4-02-settled-after-shared-Save-accessibility.yml` | Settled accessibility tree: Save `[disabled]`; grid rows FX_UM, FX_ItemBase, FX_Cost with full cell values; FX_Cost form values | AC-6 settled values and Save state (UI level) | Database state |
| `evidence/EXP-048/T4-03-settled-after-shared-Save-both-records.png` | Settled view: three rows, no stars, Save greyed, FX_Cost values, status `3 of 3` | Settled visual state for AC-6 | FX_ItemBase form values (grid only); persistence |

Evidence summary: `evidence/EXP-048/t4-evidence-summary.md`.

### Acceptance checks (T4)

| AC | T4 status | Limits |
| --- | --- | --- |
| AC-1 | Carried (identity, Save enabled and no dialog re-confirmed at T4 start) | Site Developer context not visible |
| AC-2 | Carried from T1 (not repeated) | Display values |
| AC-3 | Carried from T1 (not repeated) | Single session; case variants by inference |
| AC-4 | Carried from T2 and T3; re-confirmed pre-Save in T4 | UI level |
| AC-5 | Carried from T3; re-confirmed pre-Save in T4 (numeric zero distinguished from blank) | UI level |
| **AC-6** | **SUPPORTED** (UI level, one run): two New operations; both definitions verified pending; exactly one ordinary toolbar Save; settled state with both records, Save disabled, no pending indicator, no message or prompt, no lifecycle action | Settled values are the Web Client's display; "committed" is inferred from the disabled Save and cleared stars; no database read |
| AC-7 | **NOT RUN** (no close or reopen in T4) | — |
| AC-8 | **NOT RUN** (no recovery query in T4) | — |
| AC-9 | **NOT RUN** (no recovery query in T4) | — |
| AC-10 | **Partial** (counts reconciled to controller actions and screenshots; final audit awaits the close, reopen and recovery tasks) | Observed only |

### Final browser state (T4)

- One Mongoose tab, selected. Property Classes runtime tab open, selected, in browse mode (Filter-in-Place not active).
- Grid: row 1 FX_UM (checked out to the operator; unchanged); row 2 FX_ItemBase (saved; no star); row 3 FX_Cost (saved; no star; displayed record, with Check In and Undo Check Out enabled).
- **Save disabled.** Status `Input Mask (IDO Property Classes 3 of 3)`. No dialog, prompt, banner or unsaved-change indication.
- The Form has **not** been closed or reopened since T4 began, and no recovery query has been run. The next permitted action is a separately authorized close, reopen and per-class recovery task.

### Repository changes (T4)

- `experiments/EXP-048-hello-world-part-2-two-property-classes-with-one-s.md`: edited (status line; this T4 section).
- `evidence/EXP-048/T4-00-…png`, `T4-01-…png`, `T4-03-…png`, `T4-02-…yml`, `t4-evidence-summary.md`: created.
- No other repository file was written. `tools/` was not read. Bash is disabled in this task, so `git status` was not run; the session-start status is unchanged by this worker.

### Knowledge state (T4)

| Finding | State |
| --- | --- |
| One ordinary toolbar Save on the Property Classes Form, issued after both definitions were verified pending, settles with Save disabled and no message or prompt | **observed** (one run; same session; UI level) |
| After the Save, FX_ItemBase and FX_Cost show their pending stars cleared and their specified values unchanged | **observed** (one run; UI level) |
| The Class Name add-mode asterisk clears after the Save; other required-looking asterisks remain | **observed** (one run); meaning **unresolved** |
| Check In and Undo Check Out become enabled for the saved FX_Cost record (shown as checked out to the operator) | **observed** (one run); not acted on |
| Default Value `0` shows as `0` (no display change) after the Save | **observed** (one run) |
| Stored values, persistence beyond this session, and database durability | **not tested** |

### Open questions and next permitted action

1. **Next permitted action (requires separate authorization):** the close, reopen and per-class recovery task: one native close of the Property Classes Form tab; one reopen through Select Form; one exact-name recovery query for FX_ItemBase and one for FX_Cost, each after clearing retained criteria.
2. **Checkout decision (operator):** after the Save, FX_Cost shows Check In and Undo Check Out enabled, and the grid shows Locked By the operator for FX_ItemBase (its own buttons were not displayed). FX_UM and FX_UMBase were checked out before this task. Whether any of these is checked in is outside this experiment.
3. **Asterisk meaning** remains unresolved.
4. Classification remains **observed only, NOT replay_verified**.

---

## T5 — ONE native close and ONE reopen of Property Classes (no recovery query)

- Task T5, cycle 4, task_message_id `20e7186a-a679-4ad7-bb92-835f18ab0d1a`, worker session `1dfccb89-2e8f-4980-9353-b101a842bd6b`, run `R-20261011-012552-sBdG`. Date 2026-10-11 (system date).
- Scope: verify the clean pre-close state; ONE close through the native Form-tab control; ONE reopen through toolbar Open and Select Form as IdoPropertyClasses; verify clean Filter-in-Place mode. **No recovery query, no New, no Save, no edit, no check-in or checkout, no metadata lifecycle action, no refresh, no re-authentication.**
- Detailed observations: `evidence/EXP-048/t5-evidence-summary.md`.

### Result

- **AC-7 is supported at UI level, with one evidence limitation.** The Property Classes tab was removed by one native close with no save or discard prompt. One reopen through Select Form returned `IdoPropertyClasses` in Filter-in-Place mode, with all criteria blank, Save disabled, no data record loaded, and no dialog or unexpected message.
- The limitation: no accessibility snapshot of the reopened form was captured. A stale ref (`f1e100`, from the pre-close snapshot) returned `Ref not found`, and the T1 recovery allowance is exhausted, so no recovery snapshot was taken. Reopened-state checks rest on screenshots and read-only `find` queries.

### Pre-close state (`T5-00`)

| Check | Observed |
| --- | --- |
| Form | Property Classes selected; URL `favoriteContext=IdoPropertyClasses` |
| Identity | `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` |
| Save | Disabled |
| Rows | FX_UM (row 1), FX_ItemBase (row 2), FX_Cost (row 3); all checked; no stars |
| FX_Cost (displayed) | Decimal; 18; 2; 0; decimal; FX_sCost |
| Dialog / prompt / banner | None |

Decision: clean; close permitted.

### Actions (in order)

| # | Action | Result | Evidence |
| --- | --- | --- | --- |
| 1 | `find` "dialog"; `find` "portal-notification"; screenshot `T5-00` | Clean; no prompt or banner | `T5-00` |
| 2 | **ONE click on `Close Panel Property Classes` (`f1e101`)** | Returned without error | `T5-01` |
| 3 | Screenshot `T5-01`; `find` "dialog" (none); `find` "Property Classes" (none) | Tab removed; toolbar greyed; no save or discard prompt | `T5-01` |
| 4 | Fresh untargeted snapshot (Open `f1e25` enabled) | Empty state confirmed | — |
| 5 | **ONE click on toolbar `Open` (`f1e25`)** | Select Form dialog opened: filter `PropertyClass`; one row `Property Classes` / `IdoPropertyClasses` highlighted | `T5-02` |
| 6 | `find` "Select Form"; screenshot `T5-02`; `find` "OK" (`f1e1023`) | Dialog identity confirmed | `T5-02` |
| 7 | **ONE click on OK (`f1e1023`)** | Form reopened | — |
| 8 | Wait 2 s; screenshot `T5-03`; `find` "Save" (disabled); `find` "Filter in Place" (status); `find` "dialog" (none); `find` "FX_" (no data text); tab list (one tab) | Reopened clean in FiP mode | `T5-03` |
| 9 | Accessibility snapshot of the form using `f1e100` | **`Ref f1e100 not found`** (stale; pre-close ref). No action executed. Recovery not attempted (allowance exhausted). | — |

### Reopened state (AC-7)

| Check | Observed |
| --- | --- |
| Selected Form | `Property Classes` with the FiP icon; URL `favoriteContext=IdoPropertyClasses`; opened through Select Form, Name `IdoPropertyClasses` |
| Mode | Filter in Place (status `Filter in Place`) |
| Criteria | Class Name empty and focused; every other criterion empty; no retained restrictive criterion |
| Grid | One row, number `1`, checkbox unchecked, Class Name empty. No star. `find` "FX_" → no match, so no record data is loaded |
| Interpretation | A clean FiP criteria row. It is not a data record (no class value, no record checkout or Revision values, FiP status not `n of n`) and not an add-mode placeholder (no star) |
| Save | Disabled |
| Dialog / prompt / message | None |

- The T1 retained-criterion behaviour did not recur: the prior FX_UM criterion from T4 was not retained after the reopen.

### Preservation (qualified)

- FX_UM, FX_ItemBase and FX_Cost: no action targeted any record. Their values are **not displayed** after the reopen (the grid is a blank criteria row), so their post-reopen values are **not verified** in T5. They are supported by the T4 settled accessibility evidence and the action log only.
- FX_UMBase: not displayed and not re-queried in T5. **Not independently verified.**
- No checkout, check-in or Undo action was taken.

### Operation counts (T5 and cumulative)

| Operation | T5 | Cumulative (T1–T5) |
| --- | --- | --- |
| New | 0 | **2** (FX_ItemBase, FX_Cost) |
| Save (toolbar) | 0 | **1** (shared; T4) |
| Form close | **1** | **1** |
| Form reopen | **1** | **1** |
| Recovery (exact-name) queries | **0** | **0** |
| Check In / Check Out / Undo | 0 | 0 |
| Metadata lifecycle, unload, FormSync, deployment, Designer | 0 | 0 |
| Dialogs or prompts answered | 0 | 0 |
| Errors | 1 (stale ref `f1e100`; no action executed; no recovery) | 2 (T1 ref error, recovered; T5 stale ref, not recovered) |

T5 browser mutations: **3 clicks** (close; Open; OK). Reads: 10 `browser_find`; 2 untargeted snapshots (before and after the close); 1 failed targeted snapshot; 1 tab list; 1 wait. Screenshots: 4 (`T5-00` to `T5-03`).

### Evidence (T5)

| File | Visible identity / scope / result | Proves | Does not prove |
| --- | --- | --- | --- |
| `evidence/EXP-048/T5-00-pre-close-clean-three-records-saved.png` | Rows FX_UM, FX_ItemBase, FX_Cost unstarred; FX_Cost values; Save greyed; status `3 of 3`; no dialog | Clean pre-close state | Stored state; FX_ItemBase accessibility values |
| `evidence/EXP-048/T5-01-post-close-tab-removed-no-prompt.png` | Property Classes tab removed; Form area empty; toolbar greyed; no prompt | AC-7: the tab disappeared after one native close, with no save or discard prompt | Persistence beyond the earlier shared Save |
| `evidence/EXP-048/T5-02-select-form-dialog-open.png` | Select Form: filter `PropertyClass`; `Property Classes` / `IdoPropertyClasses` highlighted | AC-7: Select Form identity before reopen | That the reopen succeeded (see T5-03) |
| `evidence/EXP-048/T5-03-reopened-IdoPropertyClasses-FiP-blank-criteria.png` | Reopened; FiP icon; status `Filter in Place`; blank criteria; one unchecked empty row; Save greyed; no dialog | AC-7: reopened as IdoPropertyClasses in clean FiP mode without restrictive criteria | Query results (none run); FX_UM, FX_ItemBase, FX_Cost values (not displayed) |

Evidence summary: `evidence/EXP-048/t5-evidence-summary.md`.

### Acceptance checks (T5)

| AC | T5 status | Limits |
| --- | --- | --- |
| AC-1 | Carried; identity, Save and absence of prompts re-confirmed at T5 start | Site Developer context not visible |
| AC-2 | Carried from T1; not repeated | Display values |
| AC-3 | Carried from T1; not repeated | Single session; case variants by inference |
| AC-4, AC-5 | Carried from T2, T3 and T4 | UI level |
| AC-6 | Carried from T4 (supported at UI level) | Settled values are the display; "committed" inferred |
| **AC-7** | **SUPPORTED (UI level, one run)**: one native close, tab removed, no prompt; one reopen via Select Form as IdoPropertyClasses; clean FiP mode, no restrictive criteria, Save disabled, no unexpected message | Limitation: no accessibility snapshot of the reopened form (stale ref; allowance exhausted); reopened values not displayed |
| AC-8 | **NOT RUN** (reserved for the separately authorized recovery task) | — |
| AC-9 | **NOT RUN** (reserved for the separately authorized recovery task) | — |
| AC-10 | **Partial** (counts reconciled to controller actions and screenshots; final audit awaits AC-8 and AC-9) | Observed only |

### Final browser state (T5)

- One Mongoose tab, selected. The Property Classes runtime tab is open (reopened through Select Form), in Filter-in-Place mode with blank criteria and one empty, unchecked criteria row. No data record is loaded in the grid.
- Save disabled. No dialog, prompt, banner, unsaved-change indication or message. The Select Form dialog is closed.
- The Form has now been closed once and reopened once. **No further close, reopen or recovery query has been performed.**
- Records FX_UM, FX_ItemBase and FX_Cost were not modified in T5. FX_UMBase was not displayed or re-queried.

### Repository changes (T5)

- `experiments/EXP-048-hello-world-part-2-two-property-classes-with-one-s.md`: edited (status line; this T5 section).
- `evidence/EXP-048/T5-00-…png`, `T5-01-…png`, `T5-02-…png`, `T5-03-…png`, `t5-evidence-summary.md`: created.
- No other repository file was written. `tools/` was not read.

### Knowledge state (T5)

| Finding | State |
| --- | --- |
| A native Form-tab close of Property Classes after a settled Save removes the tab with no save or discard prompt | **observed** (one run; same session; UI level) |
| Reopen through toolbar Open and Select Form returns IdoPropertyClasses in Filter-in-Place mode with blank criteria and Save disabled | **observed** (one run) |
| The reopened criteria row is a clean FiP row, not a data record or placeholder | **observed** (one run; screenshot and read-only finds; no accessibility snapshot) |
| No retained restrictive criterion after the reopen (unlike the T1 pattern) | **observed** (one run) |
| Post-reopen values of FX_UM, FX_ItemBase, FX_Cost and FX_UMBase | **not verified** (not displayed; recovery not run) |
| Database durability, cross-session persistence, application to an IDO property | **not tested** |

### Open questions and next permitted action

1. **Next permitted action (requires separate authorization):** the recovery task. One fresh exact-name query for FX_ItemBase and one for FX_Cost, each after clearing the criteria, with the comparison against the pre-Save values (AC-8 and AC-9). The recovery task should begin with a fresh untargeted snapshot, since the T1 allowance is exhausted and a stale ref was seen here.
2. **Evidence gap (AC-7):** no accessibility snapshot of the reopened form. The coordinator may accept AC-7 at its current level, or authorize a fresh snapshot in the recovery task.
3. The operator's checkout decision for FX_ItemBase and FX_Cost (Locked By the operator after the Save) remains open.
4. Classification remains **observed only, NOT replay_verified**.

---

## T6 — ONE exact-name recovery query for FX_ItemBase after the reopen (AC-8)

- Task T6, cycle 5, task_message_id `62cf0dd7-ebdc-45ce-ab16-c0e22deb00e9`, worker session `1dfccb89-2e8f-4980-9353-b101a842bd6b`, run `R-20261011-012552-sBdG`. Date 2026-10-11 (system date).
- Scope: ONE native exact-name Filter-in-Place query for FX_ItemBase, verified against the pre-Save configuration. **No FX_Cost query, no close, no reopen, no New, no Save, no record edit, no metadata lifecycle action, no check-in or checkout, no corrective recovery snapshot.**
- Detailed observations: `evidence/EXP-048/t6-evidence-summary.md`.

### Result

- **AC-8 is supported at UI level** (observed, same session). The single F4 returned **exactly one** FX_ItemBase data row (checked, no star), status `Base Class (IDO Property Classes 1 of 1)`. Data Type `String`, Length `20`, Column Data Type `nvarchar` and Label String ID `FX_sItem` match the T2 pre-Save configuration. Base Class and all Domain relationships are blank. Save is **disabled**. No unsaved-change indication, dialog or message appeared.
- Formatting and asterisk differences from the pre-Save configuration: no effective-value differences. The pending star and the add-mode red asterisk on Class Name are gone, and Check In / Undo Check Out are enabled (operator-held checkout). The starred labels (`*Data Type`, `*Length`, `*Column Data Type`, `*Label String ID`) are the same four starred before the Save.

### Preflight (fresh untargeted snapshot)

| Check | Observed |
| --- | --- |
| Form | Property Classes; URL `favoriteContext=IdoPropertyClasses` |
| Mode | Filter in Place; blank criteria; Class Name focused and empty; no retained restrictive criterion |
| Grid | One empty unchecked criteria row; no data |
| Save | Disabled |
| Dialog | None |

### Actions (in order)

| # | Action | Result | Evidence |
| --- | --- | --- | --- |
| 1 | Fresh untargeted snapshot | Preflight as above | snapshot |
| 2 | `find` "dialog" (none); screenshot `T6-00` | Clean before query | `T6-00` |
| 3 | ONE plain fill `FX_ItemBase` into Class Name (`f1e432`) | Criterion entered | — |
| 4 | ONE Tab; screenshot `T6-01` | Criterion `FX_ItemBase` visible; other criteria blank; status `Filter in Place` | `T6-01` |
| 5 | **ONE F4** | Query executed | — |
| 6 | Wait 3 s (no repeat query); screenshot `T6-02`; `find` "Save" (disabled); `find` "Label String ID:" (refs); `find` "dialog" (none) | One data row; Save disabled | `T6-02` |
| 7 | Targeted accessibility snapshot of tabpanel `f1e88` (ref from the current-DOM find) | Field values and Check In / Undo Check Out enabled | `T6-03` |
| 8 | `browser_tabs` list | One Mongoose tab | — |

Errors: none in T6. No stale reference occurred. Recovery snapshots: 0. Corrective inspections: 0.

### Recovered vs pre-Save configuration (AC-8)

| Field | Pre-Save (T2) | Post-Save (T4) | Recovered (T6) | Match |
| --- | --- | --- | --- | --- |
| Class Name | `FX_ItemBase` | `FX_ItemBase` | `FX_ItemBase` | Yes |
| Data Type | `String` | `String` | `String` | Yes |
| Length | `20` | `20` | `20` | Yes |
| Column Data Type | `nvarchar` | `nvarchar` | `nvarchar` | Yes (display text) |
| Label String ID | `FX_sItem` | `FX_sItem` | `FX_sItem` | Yes |
| Base Class; Domain IDO; Domain Property; Domain List Properties; Domain Additional Settings | blank | blank | blank | Yes |
| Decimal Position; Default Value | blank (not specified) | blank | blank | Yes |
| Revision No / Revision Date / Locked By / Access As | `1` / `10/10/2026` / operator / `G6R` | identical | identical | Yes |

### Formatting, pending indicators and asterisks

| Item | Pre-Save (pending) | Settled (T4) | Recovered (T6) |
| --- | --- | --- | --- |
| Row star | Starred | Cleared | Not starred |
| Class Name form label | Red asterisk | Plain | Plain |
| Labels `*Data Type`, `*Length`, `*Column Data Type`, `*Label String ID` | Starred | Starred | Starred |
| Grid headers starred | Class Name, Revision No, Revision Date, and the four starred data labels | Class Name cleared; others starred | Class Name cleared; others starred |
| Check In / Undo Check Out | Disabled | Enabled (FX_Cost displayed in T4) | Enabled (FX_ItemBase displayed in T6) |

- Asterisk meaning (required versus override) remains **unresolved**. No meaning is inferred.
- One observed inconsistency, recorded not interpreted: the grid's last column header read `Hidden` in the T6 untargeted snapshot but `UI hidden` in the T6 targeted accessibility snapshot and in the T5 pre-close snapshot.

### Preservation (qualified)

- FX_UMBase and FX_UM: not displayed in this query and not re-queried. Checkout indications not visible in the settled view. **Not independently verified in T6.** Supported by the action log only (no T6 action targeted them).
- FX_Cost: not queried (by instruction). **Not verified in T6.**
- No record was modified.

### Operation counts (T6 and cumulative)

| Operation | T6 | Cumulative (T1–T6) |
| --- | --- | --- |
| New | 0 | **2** |
| Save (toolbar) | 0 | **1** (T4) |
| Form close / reopen | 0 / 0 | **1 / 1** (T5) |
| Recovery (exact-name) queries | **1** (FX_ItemBase, one F4) | **1**; FX_Cost recovery outstanding |
| Check In / Check Out / Undo | 0 | 0 |
| Metadata lifecycle, unload, FormSync, deployment, Designer | 0 | 0 |
| Dialogs or prompts answered | 0 | 0 |
| Errors | 0 | T1: 1 (recovered); T5: 1 stale ref (not recovered) |

T6 browser mutations: **3** (one criterion fill, one Tab, one F4). T6 reads: 4 `browser_find`; 1 untargeted snapshot; 1 targeted accessibility snapshot; 1 tab list; 1 wait (3 s). Screenshots: 3 PNG (`T6-00`, `T6-01`, `T6-02`) and 1 accessibility YAML (`T6-03`).

### Evidence (T6)

| File | Visible identity / scope / result | Proves | Does not prove |
| --- | --- | --- | --- |
| `evidence/EXP-048/T6-00-pre-query-FiP-blank-criteria-before-FX_ItemBase.png` | FiP mode; blank criteria; unchecked empty row; Save greyed; no dialog | Clean state before the query | Any result |
| `evidence/EXP-048/T6-01-criterion-FX_ItemBase-before-single-F4.png` | Criterion `FX_ItemBase`; others blank; status `Filter in Place`; criteria echo row | The exact criterion before the single F4 | The result |
| `evidence/EXP-048/T6-02-settled-after-single-F4-FX_ItemBase.png` | One data row FX_ItemBase, checked, no star; String, 20, nvarchar, FX_sItem; status `1 of 1`; Save greyed | AC-8 recovered values as displayed; settled Save state | Stored values; persistence; FX_Cost |
| `evidence/EXP-048/T6-03-settled-FX_ItemBase-recovery-accessibility.yml` | Tabpanel accessibility tree: values as properties; Base Class and Domain comboboxes empty; Check In and Undo Check Out enabled | AC-8 values and blank relationships as accessibility properties | Stored values; origin of system-populated fields |

Evidence summary: `evidence/EXP-048/t6-evidence-summary.md`.

### Acceptance checks (T6)

| AC | T6 status | Limits |
| --- | --- | --- |
| AC-1 | Carried; re-confirmed at T6 start (identity, FiP mode, blank criteria, Save disabled, no dialog) | Site Developer context not visible |
| AC-2 | Carried from T1 | Display values |
| AC-3 | Carried from T1 | Single session; case variants by inference |
| AC-4, AC-5 | Carried from T2, T3 and T4 | UI level |
| AC-6 | Carried from T4 (supported at UI level) | "Committed" inferred from the disabled Save and cleared stars |
| AC-7 | Carried from T5 (supported at UI level; accessibility-snapshot limitation) | — |
| **AC-8** | **SUPPORTED** (same session, UI level): one exact-name query returned exactly one FX_ItemBase data record; all five configured attributes match; Base Class and Domain blank; Save disabled; no unsaved-change indication or unexpected message | Display and accessibility values only; no database read; not replay verification |
| AC-9 | **NOT RUN** (FX_Cost recovery outstanding) | — |
| AC-10 | **Partial** (counts reconciled to controller actions and screenshots through T6; final audit awaits AC-9) | Observed only |

### Final browser state (T6)

- One Mongoose tab, selected. Property Classes runtime tab open (reopened through Select Form), in Filter in Place status with **the FX_ItemBase exact-name criterion still entered** and one data row FX_ItemBase (checked, no star) displayed.
- Save **disabled**. Status `Base Class (IDO Property Classes 1 of 1)`. No dialog, prompt, banner or unsaved-change indication.
- The Form has not been closed or reopened in T6. No FX_Cost query has been run. No record was modified.

### Repository changes (T6)

- `experiments/EXP-048-hello-world-part-2-two-property-classes-with-one-s.md`: edited (status line; this T6 section).
- `evidence/EXP-048/T6-00-…png`, `T6-01-…png`, `T6-02-…png`, `T6-03-…yml`, `t6-evidence-summary.md`: created.
- No other repository file was written. `tools/` was not read.

### Knowledge state (T6)

| Finding | State |
| --- | --- |
| One FiP exact-name query for FX_ItemBase after the reopen returns exactly one data row with the configured values | **observed** (one run; same session; UI level) |
| Base Class and Domain relationships remain blank for the recovered FX_ItemBase | **observed** (one run) |
| The pending star and add-mode asterisk clear after the shared Save and remain cleared after the reopen | **observed** (one run) |
| Check In and Undo Check Out enabled for FX_ItemBase after the reopen (operator-held checkout) | **observed** (one run); not acted on |
| Asterisk meaning (required versus override) | **observed** pattern; meaning **unresolved** |
| Column-header label `Hidden` versus `UI hidden` between two reads | **observed** inconsistency; cause **unresolved** |
| Stored values; database durability; cross-session persistence; application to an IDO property | **not tested** |

### Open questions and next permitted action

1. **Next permitted action (requires separate authorization):** one exact-name FiP query for FX_Cost (AC-9), after clearing the FX_ItemBase criterion. The recovery task should begin with a fresh untargeted snapshot, as the T1 allowance is spent.
2. Operator checkout decision for FX_ItemBase and FX_Cost (both show Locked By the operator after the Save) remains open.
3. Asterisk meaning remains unresolved.
4. Classification remains **observed only, NOT replay_verified**.

---

## T7 — ONE exact-name recovery query for FX_Cost after the reopen (AC-9)

- Task T7, cycle 6, task_message_id `f60f83fa-4b53-4676-9120-43d8a857b5bf`, worker session `1dfccb89-2e8f-4980-9353-b101a842bd6b`, run `R-20261011-012552-sBdG`. Date 2026-10-11 (system date).
- Scope: ONE native exact-name Filter in Place query for FX_Cost, verified against the T3 pre-Save and T4 settled configuration. **No FX_ItemBase query, no other class, no close, no reopen, no New, no Save, no record edit, no metadata lifecycle action, no check-in or checkout, no corrective recovery snapshot.**
- Detailed observations: `evidence/EXP-048/t7-evidence-summary.md`.

### Result

- **AC-9 is supported at UI level** (observed, same session). The single F4 returned **exactly one** FX_Cost data row (checked, no star), status `Base Class (IDO Property Classes 1 of 1)`. Data Type `Decimal`, Length `18`, Decimal Position `2`, Default Value **`0` in both the native field and the grid cell** (literal numeric zero, not blank or null), Column Data Type `decimal` and Label String ID `FX_sCost` match the pre-Save configuration. Base Class and all Domain relationships are blank. Save is **disabled**. No unsaved-change indication, dialog or message appeared.
- Numeric display: Default Value and Decimal Position display as `0` and `2`, with no display formatting change (for example `0.00`) compared with T3 and T4.

### Preflight and criterion handling

| Check | Observed |
| --- | --- |
| Form | Property Classes; URL `favoriteContext=IdoPropertyClasses`; one Mongoose tab |
| Displayed record at start | FX_ItemBase (browse mode, the T6 recovered record); Save disabled; no dialog |
| Filter in Place | ONE click on toolbar `Filter in Place` (`f1e38`) |
| Retained criteria on FiP entry | Class Name `FX_ItemBase` retained and selected; **every other criterion blank** (`T7-01`) |
| Criterion replacement | ONE plain fill `FX_Cost` into Class Name (`f1e446`), ONE Tab |
| Criterion before F4 | `FX_Cost` only; all other criteria blank (`T7-02`) |

### Actions (in order)

| # | Action | Result | Evidence |
| --- | --- | --- | --- |
| 1 | Fresh untargeted snapshot | Preflight as above | snapshot |
| 2 | `find` "dialog" (none); screenshot `T7-00` | Clean; FX_ItemBase displayed | `T7-00` |
| 3 | **ONE click on toolbar `Filter in Place` (`f1e38`)** | FiP entered; retained FX_ItemBase criterion | `T7-01` |
| 4 | `find` "Class Name:" (confirms the retained criterion and refs) | Class Name `FX_ItemBase` | — |
| 5 | ONE plain fill `FX_Cost` (`f1e446`); ONE Tab; screenshot `T7-02` | Criterion `FX_Cost` only | `T7-02` |
| 6 | **ONE F4** | Query executed | — |
| 7 | Wait 3 s (no repeat query); screenshot `T7-03` | One data row FX_Cost | `T7-03` |
| 8 | `find` "Save" (disabled); `find` "Default Value:" (current refs); `find` "dialog" (none); targeted accessibility snapshot of tabpanel `f1e102` | Values verified; Save disabled | `T7-04` |
| 9 | `browser_tabs` list | One Mongoose tab | — |

Errors: none in T7. No stale reference occurred. Recovery snapshots: 0. Corrective inspections: 0.

### Recovered vs T3 pre-Save and T4 settled (AC-9)

| Field | T3 pre-Save | T4 settled | T7 recovered | Match |
| --- | --- | --- | --- | --- |
| Class Name | `FX_Cost` | `FX_Cost` | `FX_Cost` | Yes |
| Data Type | `Decimal` | `Decimal` | `Decimal` | Yes |
| Length | `18` | `18` | `18` | Yes |
| Decimal Position | `2` | `2` | `2` | Yes |
| Default Value | `0` (textbox and grid cell `"0"`) | `0` | `0` (textbox `"0"`, grid cell `"0"`) | Yes; literal zero in both |
| Column Data Type | `decimal` | `decimal` | `decimal` | Yes (display text) |
| Label String ID | `FX_sCost` | `FX_sCost` | `FX_sCost` | Yes |
| Base Class; Domain IDO; Domain Property; Domain List Properties; Domain Additional Settings | blank | blank | blank | Yes |
| Revision No / Revision Date / Locked By / Access As | `1` / `10/10/2026` / operator / `G6R` | same | same | Yes |

### Formatting, pending indicators and asterisks

| Item | T3 pre-Save | T4 settled | T7 recovered |
| --- | --- | --- | --- |
| Row star (pending) | Starred | Cleared | Not starred |
| Form label `Class Name:` | Red asterisk (add-mode) | Plain | Plain |
| Form labels starred | `*Data Type`, `*Length`, `*Decimal Position`, `*Default Value`, `*Column Data Type`, `*Label String ID` | same | same |
| Grid headers starred | Class Name, the Revision headers and the six data headers | Class Name cleared; others starred | Class Name cleared; others starred |
| Check In / Undo Check Out | Disabled (pending) | Enabled | Enabled (operator-held checkout indication; not acted on) |

- No asterisk was added or removed between the T4 settled state and the T7 recovery. The only change from pre-Save is the removal of the add-mode Class Name asterisk and the pending star.
- Asterisk meaning (required versus override) remains **unresolved**. The cause of the starred `Decimal Position` and `Default Value` labels (present on FX_Cost's Decimal row only) is not established.

### Preservation (qualified)

- FX_UMBase and FX_UM: not displayed in this query and not re-queried. **Not independently verified in T7.** Supported by the action log only.
- FX_ItemBase: not queried in T7 (by instruction); its T6 recovery is its most recent observation and is not re-verified here.
- No record was modified; no checkout, check-in or Undo action was taken.

### Operation counts (T7 and cumulative)

| Operation | T7 | Cumulative (T1–T7) |
| --- | --- | --- |
| New | 0 | **2** (FX_ItemBase in T2; FX_Cost in T3) |
| Save (toolbar) | 0 | **1** (shared; T4) |
| Form close / reopen | 0 / 0 | **1 / 1** (T5) |
| Recovery (exact-name) queries | **1** (FX_Cost, one F4) | **2 distinct**: FX_ItemBase (T6), FX_Cost (T7) |
| Check In / Check Out / Undo | 0 | 0 |
| Metadata lifecycle, unload, FormSync, deployment, Designer | 0 | 0 |
| Dialogs or prompts answered | 0 | 0 |
| Errors | 0 | T1: 1 (recovered); T5: 1 stale ref (not recovered) |

T7 browser actions: 1 click (Filter in Place); 1 fill (criterion); 1 Tab; 1 F4; 1 wait (3 s). Reads: 5 `browser_find`; 1 untargeted snapshot; 1 targeted accessibility snapshot; 1 tab list. Screenshots: 4 PNG (`T7-00` to `T7-03`) and 1 accessibility YAML (`T7-04`).

### Evidence (T7)

| File | Visible identity / scope / result | Proves | Does not prove |
| --- | --- | --- | --- |
| `evidence/EXP-048/T7-00-pre-state-FX_ItemBase-displayed-before-FiP.png` | FX_ItemBase displayed in browse mode; `1 of 1`; Save greyed; no dialog | Starting state | Any FX_Cost result |
| `evidence/EXP-048/T7-01-FiP-reentered-retained-FX_ItemBase-criterion.png` | FiP; retained `FX_ItemBase` selected; all other criteria blank | The retained criterion that was replaced; no other retained criteria | Any query result |
| `evidence/EXP-048/T7-02-criterion-FX_Cost-only-before-single-F4.png` | Criterion `FX_Cost` only; other criteria blank; status `Filter in Place` | The exact sole criterion before the single F4 | The result |
| `evidence/EXP-048/T7-03-settled-after-single-F4-FX_Cost.png` | One checked data row FX_Cost; Decimal, 18, 2, 0, decimal, FX_sCost; status `1 of 1`; Save greyed | AC-9 recovered values as displayed; settled Save state | Stored values; persistence |
| `evidence/EXP-048/T7-04-settled-FX_Cost-recovery-accessibility.yml` | Tabpanel accessibility: FX_Cost values; textbox `Default Value:` `"0"`; grid cell `"0"`; blank relationships; starred labels | AC-9 values, numeric zero in native field and grid cell, blank relationships | Stored values; origin of system-populated fields |

Evidence summary: `evidence/EXP-048/t7-evidence-summary.md`.

### Acceptance checks (T7)

| AC | T7 status | Limits |
| --- | --- | --- |
| AC-1 | Carried; re-confirmed at T7 start (identity, Save disabled, no dialog) | Site Developer context not visible |
| AC-2 | Carried from T1 | Display values |
| AC-3 | Carried from T1 | Single session; case variants by inference |
| AC-4, AC-5 | Carried from T2, T3 and T4 | UI level |
| AC-6 | Carried from T4 | "Committed" inferred from the disabled Save and cleared stars |
| AC-7 | Carried from T5 (accessibility-snapshot limitation of T5 remains) | — |
| AC-8 | Carried from T6 (supported at UI level) | — |
| **AC-9** | **SUPPORTED** (same session, UI level): one exact-name query returned exactly one FX_Cost data record; all six configured attributes match; Default Value numeric zero in native field and grid cell; Base Class and Domain blank; Save disabled; no unsaved-change indication or unexpected message | Display and accessibility values only; no database read; not replay verification |
| AC-10 | **Partial**: counts reconcile to controller actions and screenshots through T7 (two New, one Save, one close, one reopen, two distinct recovery queries, two target absences). Final audit and the repository inventory still to be completed | Observed only |

### Final browser state (T7)

- One Mongoose tab, selected. Property Classes runtime tab open (reopened through Select Form), in Filter in Place status with **the FX_Cost exact-name criterion entered** and one data row FX_Cost (checked, no star) displayed.
- Save **disabled**. Status `Base Class (IDO Property Classes 1 of 1)`. No dialog, prompt, banner or unsaved-change indication.
- The Form has not been closed or reopened in T7. No further recovery query has been run. No record was modified.

### Repository changes (T7)

- `experiments/EXP-048-hello-world-part-2-two-property-classes-with-one-s.md`: edited (status line; this T7 section).
- `evidence/EXP-048/T7-00-…png`, `T7-01-…png`, `T7-02-…png`, `T7-03-…png`, `T7-04-…yml`, `t7-evidence-summary.md`: created.
- No other repository file was written. `tools/` was not read.

### Knowledge state (T7)

| Finding | State |
| --- | --- |
| One FiP exact-name query for FX_Cost after the reopen returns exactly one data row with the configured values, in the same session | **observed** (one run; UI level) |
| Default Value numeric zero is shown as `0` in both the native field and the grid cell after the reopen | **observed** (one run); stored representation **not inspected** |
| No display formatting change for numeric values (for example `0.00`) across pre-Save, settled and recovered views | **observed** (one run) |
| Retained restrictive criterion replaced; no other criterion retained on FiP re-entry | **observed** (one run) |
| Asterisk meaning (required versus override); cause of starred Decimal-only labels | **unresolved** |
| Stored values; database durability; cross-session persistence; application to an IDO property | **not tested** |

### Open questions and next permitted action

1. **AC-10 final audit** (repository inventory and reconciliation of all counts, including the documentation changes listed above) requires separate authorization, or can be completed as the next documentation-only task if the coordinator directs it.
2. Operator checkout decision for FX_UMBase, FX_UM, FX_ItemBase and FX_Cost remains open. All four show Locked By the operator or Check In enabled; none has been acted on.
3. Asterisk meaning remains unresolved.
4. The T5 accessibility-snapshot limitation for AC-7 remains. The coordinator may accept AC-7 at its current level.
5. Classification remains **observed only, NOT replay_verified**.

---

## T8 — Documentation-only final audit and acceptance matrix (no browser calls)

- Task T8, cycle 7, task_message_id `c7d22d87-7655-4914-b1ff-3544c268cc58`, worker session `1dfccb89-2e8f-4980-9353-b101a842bd6b`, run `R-20261011-012552-sBdG`. Date 2026-10-11 (system date).
- Scope: read the record and the t1–t7 summaries; re-open the decisive screenshots (`T1-03`, `T4-01`, `T5-03`) and the accessibility files; reconcile against the controller audits `harness-audit-T1.md` to `T7.md`. **No browser calls; no Mongoose change; no record, class or checkout touched.** Read, Grep and Glob only.
- Full audit: `evidence/EXP-048/t8-final-audit.md`.

### Recommendation

**Accepted with limits, for coordinator review.** Every AC is supportable at the level stated below. The qualifications the coordinator should decide on are listed under "Outstanding qualifications".

### Acceptance matrix (summary)

| AC | Status | Key evidence | Limit |
| --- | --- | --- | --- |
| AC-1 | Supported (qualified) | `T1-preflight-initial-state.png`, `T5-02` | Site Developer context and User Designer scope not exposed on the runtime Form |
| AC-2 | Supported (baseline); preservation qualified | `T1-03`, `T1-09` (FX_UMBase); `T1-06`, `T1-12`, `T1-final-form-accessibility-FX_UM.yml` (FX_UM) | FX_UMBase's T1 accessibility read was inline, not saved |
| AC-3 | Supported for both targets | `T1-07`/`T1-08` (FX_ItemBase); `T1-10`/`T1-11` (FX_Cost); controls `T1-09`, `T1-12` | Case variants by inference; zero-row result rests on the grid and placeholder |
| AC-4 | Supported | `T2-02`, `T2-03` (re-confirmed `T3-04`) | Pending state inferred from star and Save |
| AC-5 | Supported | `T3-03`, `T3-04`; numeric zero `"0"` in textbox and grid | Stored representation not inspected |
| AC-6 | Supported (UI level) | Controller: New at T2 order 2 and T3 order 4; Save at T4 order 6; `T3-01`, `T4-00`, `T4-01`, `T4-02`, `T4-03` | Non-commit of the first row is inferred (see qualification 1) |
| AC-7 | Supported (UI level) | `T5-00`, `T5-01`, `T5-02`, `T5-03`; read-only finds | No accessibility snapshot of the reopened form (qualification 2) |
| AC-8 | Supported (same session, UI level) | `T6-01`, `T6-02`, `T6-03` | Display and accessibility values only |
| AC-9 | Supported (same session, UI level) | `T7-02`, `T7-03`, `T7-04` | Same as AC-8; numeric zero confirmed in textbox and grid |
| AC-10 | Supported (reconciled); preservation qualified | `t8-final-audit.md` §3–§7; controller audits | Preservation of FX_UMBase after T1 not verified (qualification 3) |

### Action reconciliation (controller-verified)

| Required item | Count | Where |
| --- | --- | --- |
| New operations | **2** | T2 order 2; T3 order 4 |
| Shared Save | **1** (only Save click in the run) | T4 order 6 |
| Form-tab close | **1** | T5 order 6 |
| Reopen through Select Form | **1** | T5 orders 12 (toolbar Open) and 17 (OK) |
| Post-reopen FX_ItemBase recovery F4 | **1** | T6 order 8 |
| Post-reopen FX_Cost recovery F4 | **1** | T7 order 12 |
| T1 baseline and collision-gate F4 (kept separate) | **6** | T1 orders 20, 34, 49, 59, 70, 79 |
| Recovery snapshot (T1 allowance) | **1**, consumed | T1 order 28 |

Stale references were not product actions. T1 order 27 (`Ref f1e38 not found`) and T5 order 21 (`Ref f1e100 not found`) executed nothing. The T1 read of the record path before creation (order 4) was read-only. The T5 documentation Edit that failed on a non-unique anchor (order 31) changed no file.

Confirmed absent in the controller logs: a second Save, an additional New, any record delete, any Check In / Check Out / Undo click, any Designer click, any metadata unload, FormSync or deployment, a second close or reopen, and any refresh, navigation or sign-in.

### Comparison of definitions

- **FX_ItemBase** (String, 20, nvarchar, FX_sItem): identical in pre-Save (`T2-03`), settled (`T4-02`) and recovered (`T6-03`) states. The pending star and the add-mode Class Name asterisk cleared at the shared Save. Check In and Undo Check Out moved from disabled (pending) to enabled (operator-held). Starred labels `*Data Type`, `*Length`, `*Column Data Type`, `*Label String ID` are unchanged across all three states.
- **FX_Cost** (Decimal, 18, 2, 0, decimal, FX_sCost): identical in pre-Save (`T3-04`), settled (`T4-02`) and recovered (`T7-04`) states. Default Value is the literal `0` in the textbox and the grid cell in all three states. No numeric formatting change such as `0.00`. Starred labels are unchanged across the three states, and include `*Decimal Position` and `*Default Value`, which FX_ItemBase does not show. The cause is not established.

### Preservation

- **FX_UMBase:** observed at T1 (`T1-03`, `T1-09`). Not displayed after T1 in any screenshot or snapshot. **Not independently verified after T1.** Supported by the action log only.
- **FX_UM:** observed at T1 (`T1-06`, `T1-12`). Grid row values and Locked By unchanged in `T2-03`, `T3-04` and the settled `T4-02`. Not displayed after T4. **Verified through the settled post-Save state at T4.**

### Repository inventory

- Worker-authored: `experiments/EXP-048-…md` (created T1; edited T2–T8); `evidence/EXP-048/`: 34 PNG, 6 accessibility YAML, 7 task summaries, `t8-final-audit.md`.
- Controller-generated, not worker-authored: `evidence/EXP-048/harness-audit-T1.md` to `T7.md`.
- Tool-generated Playwright logs under `evidence/playwright/` (17:25–17:46 UTC and later): outside `evidence/EXP-048/`; not worker-authored; for the harness to assess.
- Pre-existing working-tree changes (session-start status): `tools/learning-harness/*` files were already modified before this experiment. They were not touched or read by this worker. Their current state was **not re-verified** in T8 (Bash disabled).
- No other repository file was written by this worker.

### Outstanding qualifications (for coordinator review)

1. **AC-6 non-commit inference.** The first row's non-commit by the second New rests on the retained pending star and the enabled Save (T3-01, T3-03, T4-00). No success message is shown by the UI and no database read was made.
2. **AC-7 accessibility gap.** No accessibility snapshot of the reopened form. The T5 snapshot failed on a stale ref; the recovery allowance is spent. Accept at the current level or waive.
3. **FX_UMBase preservation after T1 unverified.** The only later observation is T1-09.
4. **FX_UM preservation verified only to T4**, and its checkout button state after T1 was not observed.
5. **Checkout states.** FX_UMBase and FX_UM were checked out to the operator before EXP-048. FX_ItemBase and FX_Cost show checked out to the operator after the shared Save. Nothing was checked in or undone. Any check-in is an operator decision outside this experiment.

Not blocking: asterisk meaning is unresolved; stored values, SQL casing and the stored form of numeric zero were not inspected; Site Developer context and User Designer scope not exposed; case-insensitive coverage by inference. A header label difference (`Hidden` in one FiP snapshot, `UI hidden` in browse snapshots) and mode-dependent header asterisks were observed; the mode dependence is an observation, not a verified explanation.

### Exclusions (expressly not claimed)

Database durability; cross-session persistence or recovery; cache eviction or metadata unload; runtime behaviour of either class; application of FX_ItemBase or FX_Cost to any IDO property; replay verification. All findings are observed same-session UI-level behaviour.

### Documentation changes (T8)

- `experiments/EXP-048-hello-world-part-2-two-property-classes-with-one-s.md`: status line; a superseded note on the T1-scope matrix; a corrected T3 sentence on the T1 recovery allowance; this T8 section.
- `evidence/EXP-048/t8-final-audit.md`: created.

### Knowledge state (T8)

| Finding | State |
| --- | --- |
| Two New operations, one shared Save, one close, one reopen, two post-reopen recovery queries, and six pre-creation queries, all as controller-logged | **observed** (controller-verified; same session) |
| FX_ItemBase and FX_Cost values identical across pre-Save, settled and recovered states, with numeric zero shown as literal `0` | **observed** (same session, UI level) |
| First-row non-commit after the second New | **observed** as an indicator; commit state **unresolved** (no database read) |
| FX_UMBase preservation after T1 | **unresolved** (not verified) |
| FX_UM preservation through the settled state at T4 | **observed** (same session) |
| Asterisk meaning; cause of Decimal-only asterisks | **unresolved** |
| Durability, cross-session persistence, cache eviction, IDO application, replay verification | **not tested; excluded** |

### Final browser state (T8)

No browser calls were made in T8. The state is unchanged from the end of T7: one Mongoose tab; Property Classes open as IdoPropertyClasses in Filter in Place mode with the FX_Cost exact-name criterion entered and one checked data row, FX_Cost. Save disabled; no dialog, prompt or banner. The Form has not been closed or reopened in T8.

### Next permitted action

Coordinator review of the recommendation and the five outstanding qualifications. Any further work (for example, an accessibility snapshot of the reopened form, or a check-in decision) requires separate authorization. No further experiment is started.

## Outcome (operator, 2026-10-11)

**Accepted with limits** (run R-20261011-012552-sBdG, completed/accepted in cycle 8, 8 of 12 worker tasks). Observed only, not replay-verified. Created, tenant-wide, for later cleanup:
- **Property class `FX_ItemBase`:** String, Length 20, Column Data Type nvarchar, Label String ID FX_sItem; no Base Class and no domain. Revision 1, checked out to the operator.
- **Property class `FX_Cost`:** Decimal, Length 18, Decimal Position 2, Default Value 0, Column Data Type decimal, Label String ID FX_sCost; no Base Class and no domain. Revision 1, checked out to the operator.

They were created by two News and one shared Save (T2–T4), then recovered after one close and one reopen (T5) and one exact-name query each (T6, T7). The strings FX_sItem and FX_sCost were not created (planned for the FX_Items Form step). The unload step (Unload All Global Form Objects) was deliberately not run (operator call). The EXP-047-R2 AC-9 follow-up is closed: T1 re-read FX_UMBase (String/10/nvarchar/FX_sUM) and FX_UM, both still checked out to the operator.

Operator screenshot review:
- `T6-02`: after the reopen and query, exactly one FX_ItemBase row with String/20/nvarchar/FX_sItem; Base Class and domain blank; checked out.
- `T7-03`: after the reopen and query, exactly one FX_Cost row with Decimal/18/2/0/decimal/FX_sCost; Base Class and domain blank; checked out.

Learned (observed):
1. **What the asterisk means:**
   - On these classes, which have no Base Class, every locally set field label carries an asterisk (`*Data Type`, `*Length`, `*Decimal Position`, `*Default Value`, `*Column Data Type`, `*Label String ID`).
   - On FX_UM (EXP-047-R2), which has a Base Class, only the locally set domain fields carried one.
   - The asterisk therefore marks a value defined on this class (an override when a base exists), not a required field. This is a candidate interpretation, consistent across two experiments.
2. **One Save for several records:** two pending property-class rows created with two News are committed by one toolbar Save, with no implicit commit when the second New is clicked.
3. **Created checked out:** new property classes are created checked out to the creator. Check In and Undo Check Out are disabled while the row is pending and enabled after the Save.
4. **Column Data Type lookups:** Column Data Type values were picked through the F2 lookup (`nvar`, `decim`).

Limits:
- Only the same session, at the UI level.
- No database read.
- All four FX_ property classes are still checked out (FX_UMBase, FX_UM, FX_ItemBase, FX_Cost).

Next in Part 2 (section 7): the FX_Items table, IDO and Form through the Data Maintenance wizard, using properties FX_Item (FX_ItemBase), FX_Description, FX_Cost (FX_Cost) and FX_UM (FX_UM).
