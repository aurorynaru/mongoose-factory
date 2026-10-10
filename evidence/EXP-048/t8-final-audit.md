# EXP-048 T8 — Final documentation audit and acceptance matrix

Run `R-20261011-012552-sBdG`, cycle 7, task T8, task_message_id `c7d22d87-7655-4914-b1ff-3544c268cc58`, worker session `1dfccb89-2e8f-4980-9353-b101a842bd6b`. Date 2026-10-11 (system date).

Scope: documentation only. **No browser calls, no Mongoose state change.** Sources: the EXP-048 record (T1–T7), the t1–t7 evidence summaries, the screenshots and accessibility files (re-opened where a claim depends on them), and the seven controller-generated audits `harness-audit-T1.md` … `harness-audit-T7.md`. Read, Grep and Glob were used; no shell. Classification of all findings: **observed, same-session, UI level only.** Excluded and not claimed: database durability, cross-session persistence, cache eviction or unload, IDO property assignment of either class, and replay verification.

## 1. Outcome recommendation

**Accepted with limits, for coordinator review.** Every AC is supportable at the level stated in §2. Five qualifications matter for acceptance and are listed in §8. The most consequential is the AC-6 implicit-commit exclusion, which rests on UI indicators rather than a database read.

## 2. Acceptance matrix (AC-1 to AC-10)

| AC | Status | Supporting evidence (paths) | Limits |
| --- | --- | --- | --- |
| **AC-1** Preflight | **Supported** (qualified) | `T1-preflight-initial-state.png` (identity bar `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; FX_UM browse; Save greyed; no dialog). Form identity: tab heading `Property Classes`, URL `favoriteContext=IdoPropertyClasses`, Select Form Name `IdoPropertyClasses` (`T5-02`). Vendor definition: the controller log shows no Designer click in T1–T7. | "Site Developer" context not visible. The User Designer scope is not exposed on the runtime Form and was not verified. "Vendor definition untouched" is supported by the action log, not by a Designer read. |
| **AC-2** Existing-class baseline | **Supported** for the baseline; **preservation qualified** (§6) | FX_UMBase: `T1-03` (String, 10, nvarchar, FX_sUM; Base Class blank; Domain blank; Locked By operator; Check In and Undo Check Out enabled); `T1-09` (same values, post-gate). FX_UM: `T1-06` (Base Class FX_UMBase; Domain IDO FX_UMs; Domain Property FX_UM; Domain List Properties FX_Description; String, 10, nvarchar, FX_sUM as displayed; checkout enabled); `T1-final-form-accessibility-FX_UM.yml`. | FX_UMBase's accessibility read at T1 (controller order 21) was returned inline and **not saved to a file**. The FX_UMBase baseline therefore rests on the screenshots. Values are display values, not stored values. |
| **AC-3** Collision gate | **Supported** for both targets (UI level, single session) | FX_ItemBase: criterion `T1-07`; zero data rows with a blue-star add-mode placeholder, status `1 of 1` (`T1-08`). FX_Cost: criterion `T1-10`; zero data rows, same placeholder (`T1-11`). Positive controls: FX_UMBase after gate A (`T1-09`); FX_UM after gate B (`T1-12`). | Case variants not typed (operator-accepted inference). Prefix form not run. Zero-row result rests on the displayed grid and placeholder, not an accessibility snapshot of an empty grid. The `1 of 1` counter includes the placeholder. |
| **AC-4** First new class (FX_ItemBase, pre-Save) | **Supported** | `T2-02` (starred row; String, 20, nvarchar, FX_sItem; Base Class and Domain empty); `T2-03` (accessibility: textbox and grid cells for all five values; Check In and Undo Check Out `[disabled]`); reconfirmed in `T3-04`. | Pending state inferred from the star, the status counter and the enabled Save. Revision/Locked By/Access As were system-populated (not typed); origin inferred. |
| **AC-5** Second new class (FX_Cost, pre-Save) | **Supported** | `T3-03` (both rows starred; FX_Cost form Decimal, 18, 2, 0, decimal, FX_sCost); `T3-04` (textbox `Default Value` value `"0"`; grid cell `"0"`; blank cells show no text). Asterisks inventoried (§5). | Numeric zero is distinguished from blank by the accessibility value; the stored representation is not inspected. |
| **AC-6** Single shared Save | **Supported** (UI level) | Controller: New clicks at T2 order 2 and T3 order 4 (exactly two); Save click at T4 order 6 (exactly one). `T3-01` (after the second New, row 2 still starred; Save enabled; no dialog). `T4-00` (both rows pending before Save). `T4-01` (immediate: Save greyed; stars cleared; no message or prompt). `T4-02` (settled accessibility). `T4-03` (settled view). | "Not implicitly committed" is an **inference** from the retained pending star and the enabled Save after the second New. No database read. This is the judgment the coordinator should confirm (§8.1). |
| **AC-7** Runtime lifecycle | **Supported** (UI level; accessibility limitation) | Close: `T5-00` (pre-close clean; three rows; Save greyed) → one click on `Close Panel Property Classes` (controller order 6) → `T5-01` (tab removed; toolbar greyed; no Save or discard prompt). Reopen: `T5-02` (Select Form `IdoPropertyClasses` highlighted) → one click on toolbar Open (order 12) and one on OK (order 17) → `T5-03` (IdoPropertyClasses; status `Filter in Place`; Class Name empty and focused; all other criteria empty; one unchecked empty row, no star; Save greyed; no dialog). Read-only: `find` "FX_" → no data text. | **No accessibility snapshot of the reopened form.** The T5 snapshot failed (`Ref f1e100 not found`, controller order 21) and no recovery snapshot was taken. The clean-row interpretation rests on the screenshot, the FiP status, the empty Class Name and the absence of data text. Per the T8 brief, AC-7 is treated as supported by screenshots and read-only observations. |
| **AC-8** FX_ItemBase recovery | **Supported** (same session, UI level) | Query: criterion `T6-01` (`FX_ItemBase` only); one F4 (controller order 8); settled `T6-02` (one checked data row; status `1 of 1`; Save greyed). Values: `T6-03` (String; 20; nvarchar; FX_sItem; Base Class and Domain empty; Check In and Undo enabled). | Display and accessibility values only. The transient state between F4 and the 3 s wait was not sampled. |
| **AC-9** FX_Cost recovery | **Supported** (same session, UI level) | Criterion `T7-02` (`FX_Cost` only; other criteria blank after replacing the retained FX_ItemBase criterion, `T7-01`); one F4 (controller order 12); settled `T7-03` (one checked data row; status `1 of 1`); values `T7-04` (Decimal; 18; 2; textbox `"0"`; grid `"0"`; decimal; FX_sCost; Base Class and Domain empty). | Same as AC-8. Numeric zero is confirmed in both the native field and the grid cell. Stored representation not inspected. |
| **AC-10** Preservation and final audit | **Supported** (reconciled); **preservation qualified** | This document; the counts in §3 reconciled to the controller audits (§4) and to the screenshots. The repository inventory is in §7. | Observed only. Preservation of FX_UMBase after T1 is not independently verified; FX_UM is verified only through T4 (§6). Working-tree state not re-verified (§7). |

## 3. Cumulative action reconciliation (T1–T7)

Counts are from the controller audits (`harness-audit-T*.md`). "Mutating actions" are clicks, typed entries, and key presses. Waits, snapshots, finds, screenshots and tab listings are listed separately.

| Stage | Mutating actions (controller) | Detail | Snapshots | Finds | Screenshots | Other |
| --- | --- | --- | --- | --- | --- | --- |
| T1 | 25 | 7 clicks (6 successful; 1 failed on `Ref f1e38`); 6 typed criteria; 6 Tab; 6 F4 | 6 (2 untargeted per the T1 record; 4 targeted; the controller log does not record the target argument) | 16 | 13 | 5 waits; 2 tab listings; 1 failed Read (see §4) |
| T2 | 14 | 5 clicks (New; Data Type Open; `String`; Column Open; `nvarchar`); 4 typed (3 fills, 1 slow `nvar`); 4 Tab; 1 F2 | 2 | 10 | 3 | — |
| T3 | 18 | 5 clicks (second New; Data Type Open; `Decimal`; Column Open; `decimal`); 6 typed (5 fills, 1 slow `decim`); 6 Tab; 1 F2 | 2 | 13 | 4 | 1 tab listing |
| T4 | **1** | 1 click: the shared toolbar Save | 2 | 5 | 3 | 1 wait; 1 tab listing |
| T5 | 3 | 3 clicks: close; toolbar Open; Select Form OK | 3 (1 failed) | 10 | 4 | 1 wait; 1 tab listing |
| T6 | 3 | 1 typed criterion (FX_ItemBase); 1 Tab; 1 F4 | 2 | 4 | 3 | 1 wait; 1 tab listing |
| T7 | 4 | 1 click (Filter in Place); 1 typed criterion (FX_Cost); 1 Tab; 1 F4 | 2 | 5 | 4 | 1 wait; 1 tab listing |

**Required reconciliation:**

| Required item | Count | Where |
| --- | --- | --- |
| New operations | **2** | T2 order 2; T3 order 4 |
| Records created | **2** (FX_ItemBase; FX_Cost) | T2 and T3 |
| Shared Save | **1** (after both pending definitions were verified) | T4 order 6 |
| Form-tab close | **1** | T5 order 6 |
| Reopen through Select Form | **1** (toolbar Open + Select Form OK) | T5 orders 12 and 17 |
| Post-reopen FX_ItemBase recovery F4 | **1** | T6 order 8 |
| Post-reopen FX_Cost recovery F4 | **1** | T7 order 12 |
| T1 baseline and collision-gate F4 (kept separate) | **6** | T1 orders 20, 34, 49, 59, 70, 79: baseline FX_UMBase; baseline FX_UM; gate FX_ItemBase; control FX_UMBase; gate FX_Cost; control FX_UM |
| Total F4 across the run | 8 (6 pre-creation + 2 post-reopen) | — |

Confirmed absent in the controller logs for T1–T7: no second Save; no additional New; no record delete (no `Delete` element activated); no Check In, Check Out or Undo Check Out click; no Designer click; no metadata unload, FormSync, deployment or Web Designer action; no second close or reopen; no refresh, navigation or sign-in.

## 4. Errors, stale references and non-product failures

| Event | Controller order | Classification | Treatment |
| --- | --- | --- | --- |
| T1 toolbar Filter in Place click: `Ref f1e38 not found` | T1 order 27 | Stale reference. **No product action executed.** | One fresh untargeted snapshot (order 28; the single recovery allowance), then one corrected click on the snapshot's ref (order 29, succeeded). The allowance is spent. |
| T5 targeted snapshot of the reopened form: `Ref f1e100 not found` | T5 order 21 | Stale reference (pre-close ref). **No product action executed.** | Not recovered (allowance exhausted). Recorded as the AC-7 accessibility limitation. |
| T1 Read of the EXP-048 record path before the record existed: `File does not exist` | T1 order 4 | Read-only failure. Not a product action. | The worker then created the record in T1 (see the record's run identity). |
| T5 documentation Edit: "Found 2 matches" (non-unique anchor) | T5 order 31 | Documentation tool error. Not a product action; no file changed. | Retried with a unique anchor (order 32, succeeded). |

Errors in T2, T3, T4, T6 and T7: none. No validation message, timeout, prompt or authentication challenge occurred in any stage.

## 5. Record-state comparison for FX_ItemBase and FX_Cost

### FX_ItemBase

| Attribute | Pre-Save (T2-02, T2-03; T3-00, T3-04) | Settled post-Save (T4-01, T4-02) | Recovered (T6-02, T6-03) | Change |
| --- | --- | --- | --- | --- |
| Class Name | FX_ItemBase | FX_ItemBase | FX_ItemBase | None |
| Data Type; Length | String; 20 | String; 20 | String; 20 | None |
| Column Data Type | nvarchar | nvarchar | nvarchar | None (display text) |
| Label String ID | FX_sItem | FX_sItem | FX_sItem | None |
| Decimal Position; Default Value | blank | blank | blank | None |
| Base Class; Domain IDO; Domain Property; Domain List Properties; Domain Additional Settings | blank | blank | blank | None |
| Row star (pending) | Starred | Cleared | Not starred | Cleared at shared Save |
| Class Name form-label asterisk | Red add-mode asterisk | Plain | Plain | Cleared |
| Starred form labels | `*Data Type`, `*Length`, `*Column Data Type`, `*Label String ID` | Same four | Same four | None |
| Check In / Undo Check Out | Disabled (pending) | Not displayed for this row (the displayed record was FX_Cost; FX_ItemBase shows Locked By operator in the grid) | **Enabled** (operator-held checkout indication) | Changed from pending to held; not acted on |
| Locked By / Revision | operator; 1; 10/10/2026 | same | same | None |

### FX_Cost

| Attribute | Pre-Save (T3-03, T3-04) | Settled post-Save (T4-01, T4-02, T4-03) | Recovered (T7-03, T7-04) | Change |
| --- | --- | --- | --- | --- |
| Class Name | FX_Cost | FX_Cost | FX_Cost | None |
| Data Type | Decimal | Decimal | Decimal | None |
| Length; Decimal Position | 18; 2 | 18; 2 | 18; 2 | None |
| **Default Value** | Textbox `"0"`; grid cell `"0"` | Textbox `"0"`; grid `"0"` | Textbox `"0"`; grid `"0"` | None. Literal zero in both places; not blank or null |
| Column Data Type | decimal | decimal | decimal | None (display text) |
| Label String ID | FX_sCost | FX_sCost | FX_sCost | None |
| Base Class; Domain fields | blank | blank | blank | None |
| Numeric display | `2`, `18`, `0` | identical | identical | No formatting change such as `0.00` |
| Row star (pending) | Starred (both rows) | Cleared | Not starred | Cleared at shared Save |
| Class Name form-label asterisk | Red add-mode asterisk | Plain | Plain | Cleared |
| Starred form labels | `*Data Type`, `*Length`, `*Decimal Position`, `*Default Value`, `*Column Data Type`, `*Label String ID` | Same six | Same six | None |
| Check In / Undo Check Out | Disabled (pending) | **Enabled** (displayed record) | **Enabled** | Changed from pending to held; not acted on |

## 6. Preservation of FX_UMBase and FX_UM

| Class | Baseline (before any mutation) | Later observations | Verified preservation | Qualification |
| --- | --- | --- | --- | --- |
| **FX_UMBase** | `T1-03` (String, 10, nvarchar, FX_sUM; checkout enabled); inline accessibility (not saved) | `T1-09` (post gate A; same values; checkout enabled). **No later observation**: FX_UMBase does not appear in any grid or screenshot from T1 control 4 onward (T2-03, T3-04, T4-02, T5, T6, T7 grids show FX_UM and the new rows only) | **Not independently verified after T1** | No mutation targeted FX_UMBase after T1 (controller log). The last observed checkout state is T1's enabled Check In / Undo Check Out. |
| **FX_UM** | `T1-06` and `T1-12` (Base Class, Domain fields, String, 10, nvarchar, FX_sUM; checkout enabled); `T1-final-form-accessibility-FX_UM.yml` | Grid row 1 in `T2-03` (pre-Save), `T3-04` (pre-Save) and `T4-02` (settled post-Save): values identical; Locked By `anton.ramos@3mworks.com.ph`; row checked. Not displayed after T4 (T5–T7 reopen and recovery queries concern the new rows) | **Verified through the settled post-Save state at T4** (grid values and Locked By) | Not verified after the T5 reopen or the T6/T7 recovery queries. The FX_UM checkout button state was not observed after T1 (the grid shows Locked By only). |

No record outside the EXP-048 scope was touched. No checkout state was changed by any worker action. Neither class's metadata lifecycle was changed.

## 7. Repository inventory

Bash is disabled in this task, so `git status` could not be run. This inventory is built from Glob and from the records. The session-start git status (harness context) is the only baseline available.

| Path | Owner | State | Notes |
| --- | --- | --- | --- |
| `experiments/EXP-048-hello-world-part-2-two-property-classes-with-one-s.md` | Worker (this run) | Created in T1; edited in T2–T8 | The only experiment record. Its T1 header states that the record did not exist at T1 start. |
| `evidence/EXP-048/*.png` | Worker | **34** PNG: T1 13; T2 3; T3 4; T4 3; T5 4; T6 3; T7 4 | Created by the browser tool at worker request |
| `evidence/EXP-048/*.yml` | Worker (accessibility snapshots) | **6**: `T1-final-form-accessibility-FX_UM.yml`, `T2-03`, `T3-04`, `T4-02`, `T6-03`, `T7-04` | `T5-04` was not written (failed snapshot) |
| `evidence/EXP-048/t1-evidence-summary.md` … `t7-evidence-summary.md` | Worker | **7** summaries | — |
| `evidence/EXP-048/t8-final-audit.md` | Worker (this document) | Created in T8 | — |
| `evidence/EXP-048/harness-audit-T1.md` … `T7.md` | **Controller-generated, not worker-authored** | Present; read in T8; not edited | Source of the §3 and §4 counts |
| `evidence/playwright/*` (tool-generated console and page snapshot logs, timestamps 2026-10-10T17:25–17:46 UTC and later) | Playwright tool, not worker-authored | Outside `evidence/EXP-048/` | The harness should assess them for confinement |
| `tools/…` (README, EXP-035 brief, harness config example, shadow CLI, runner, shadow test) | Pre-existing | Listed as modified at session start. **Not touched by this worker; not re-verified in T8; `tools/` was not read.** | Unverified working-tree state, disclosed |

Worker-authored repository writes in T1–T8: the EXP-048 experiment record, and the files under `evidence/EXP-048/` listed above. No other repository file was written by this worker. No AGENTS.md, recipe, IDO, Form, Designer or metadata artifact was modified.

## 8. Outstanding qualifications for coordinator review

1. **AC-6 implicit-commit exclusion** rests on the retained pending star and the enabled Save after the second New (T3-01, T3-03, T4-00). The UI does not show a success message. No database read was performed. The T3 record documents this judgment.
2. **AC-7 accessibility gap.** No accessibility snapshot of the reopened form (T5 controller order 21 failed on a stale ref; the allowance is spent). The reopened state rests on `T5-03` and read-only finds. The coordinator may accept AC-7 at its current level or waive the gap.
3. **FX_UMBase preservation after T1 is not verified.** The only later observation is T1-09. Preservation is supported by the action log alone.
4. **FX_UM preservation is verified only through the settled post-Save state at T4** (grid values and Locked By). Its checkout button state after T1 was not observed.
5. **Checkout states.** Four classes show checkout indications: FX_UMBase and FX_UM (checked out to the operator before EXP-048), and FX_ItemBase and FX_Cost (checked out to the operator after the shared Save). No check-in or undo was performed. The operator decides whether any should be checked in. This is outside EXP-048.

Further, not blocking, qualifications: asterisk meaning (required versus override) is unresolved, and the cause of the `*Decimal Position` and `*Default Value` asterisks appearing only on FX_Cost is not established. Stored values, the SQL casing of `nvarchar`/`decimal`, and the stored representation of numeric zero were not inspected. The "Site Developer" context and the User Designer scope were not exposed on the runtime Form. Case-insensitive coverage is by inference. Grid-header asterisks differ between filter-in-place and browse modes (observed in the T6 start snapshot against T6-03), and the `Hidden` / `UI hidden` header label differed in that same comparison; the mode dependence is an observation, not a verified explanation.

## 9. Exclusions (expressly not claimed)

Database durability; cross-session persistence or recovery; cache eviction or metadata unload; runtime behaviour of either class; application of FX_ItemBase or FX_Cost to any IDO property; replay verification. All findings are observed same-session UI-level behaviour.
