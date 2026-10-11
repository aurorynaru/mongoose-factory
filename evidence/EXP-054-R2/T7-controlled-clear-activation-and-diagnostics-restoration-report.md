# EXP-054-R2 — T7 one Diagnostic Log clear, one FX_RefreshButton activation, and Diagnostics restoration (General Enabled ON to OFF)

Run `R-20261011-144135-Rh6I`, experiment EXP-054-R2, cycle 6, task T7.
Worker session `e06da36c-ce9e-4db0-9a72-8fcea6f51ed0`, task_message_id `a7c4b0be-cdf1-42f2-b1cd-5fce40cd8256`.
Date 2026-10-11. Editing scope: User. Target Form `FX_Items` (runtime, User version); Button `FX_RefreshButton`.

**Result:**
- **Part A:** the Log Messages grid was cleared with one native Clear (tooltip `Clear`) and verified visibly empty (zero rows) before activation.
- **Part B:** FX_Refresh was activated once. The Diagnostic Log then showed **16 FormEvent rows** (all `FX_Items`), including `StdFormRefresh` and `StdFormRefreshCompleted` (verbatim text and timestamps in `T7-diagnostic-sequence-verbatim-after-single-FX_Refresh-activation.md`). No EventHandler rows appeared. The three records kept their original visible values and Save stayed disabled.
- **Part C:** General > Enabled was restored from ON to **OFF** with one native OK. An independent read-only reopen shows all 32 options match the T1 baseline (Enabled OFF; Form Events ON; Event Handler Include ON; Value Changed ON; the other 28 OFF). **Restoration is verified.**

Classification: **observed only** (single browser session; rendered UI and accessibility; client-side preference values; the log shows rows but does not establish server-side completeness or causation).

---

## 1. Tab state and pre-test gate

- `browser_tabs list` was the first browser action (tab 0 Designer, current; tab 1 Web Client).
- `browser_tabs select 1` succeeded. Fresh snapshot `t7-snapshot-01-pre-clear-fresh-web-client-runtime.md`:
  - Identity bar `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`.
  - FX_Items runtime tab selected; Save `[disabled]`; Get More Rows `[disabled]`; button `FX_Refresh` rendered.
  - Records `dumbbell / 45 pound iron / 45.00 / EA`, `eggs / cage free / 6.99 / DZ`, `guitar / natural acoustic / 129.99 / EA` present; no dialog; no prompt.
  - Inherited log: 36 timestamped rows (the 20 EXP-053 FormEvent rows at 05:22:07.945/.976 and 16 EXP-053 VarValue rows at 05:25:20.269–.285), recorded as pre-test messages and not attributed to this test.
- Screenshot `t7-01-pre-clear-inherited-log-36-rows-runtime-clean.png`.
- Diagnostics General Enabled was ON (T6 readback). Not toggled before the test.

Gate: **passed.**

## 2. Part A — one Clear, empty baseline

- Hover on the DevTools X-shaped control (ref `f1e234`; screenshot `t7-02-hover-DevTools-X-control-tooltip-before-clear.png` shows the hover state, but the tooltip itself is **not visible in that screenshot**). A `find "Clear"` then returned `tooltip [ref=f1e684]: Clear` while the control was hovered. The tooltip was identified through the accessibility tree, not the screenshot.
- **One click** on that control (ref `f1e234`). This was the only Clear.
- Post-clear screenshot `t7-03-post-single-clear-Log-Messages-visibly-empty-baseline.png` (viewed): the Log Messages grid shows only its header row (`Time | Source | Type | Message`) and no data rows.
- Post-clear accessibility `t7-04-cleared-log-baseline-accessibility-snapshot.md`: **0** timestamped rows (grep for `gridcell "\d\d:\d\d"`, `FormEvent`, `VarValue`, `EventHandler`: 0 matches).

Baseline: **visibly empty and verified** (`AC-8`). Clear count: **1**.

## 3. Part B — one FX_Refresh activation

- Fresh ref for the button from `t7-04` (`button "FX_Refresh" [ref=f1e190]`).
- **One click** (the only activation). No further click, refresh, F4, Filter-in-Place, Get More Rows, runtime opening, or collection load.
- Immediate state (from the click's returned snapshot `playwright/page-2026-10-11T07-08-01-119Z.yml`; screenshot `t7-05-immediate-after-single-FX_Refresh-activation.png`):
  - 16 log rows present; status textbox `FX_Refresh (Object 1 of 3)` (was `Description (Object 1 of 3)` before the click; the focus moved to the button).
  - Button `FX_Refresh` `[active]`.
  - Records: `dumbbell` / `45.00`; `eggs` / `6.99`; `guitar` / `129.99` (grid); Save `[disabled]`; Get More Rows `[disabled]`.
- Settled state after 3 s with no action (`t7-06-settled-after-3s-accessibility-snapshot-runtime-and-log.md`; screenshot `t7-07-settled-after-3s-runtime-and-log-first-rows.png`, viewed): the same 16 rows; the same records; Save disabled; status `FX_Refresh (Object 1 of 3)`.

The 16 rows, in display order, with verbatim text, timestamps (07:08:00.855 ×5; 07:08:00.949 ×11), and handler counts (`num handlers for event 0, num executed 0` on every result row) are in `T7-diagnostic-sequence-verbatim-after-single-FX_Refresh-activation.md` Part A. Summary:
- `StdFormRefresh` (starting, 07:08:00.855) … `StdFormRefresh` (result 0, 07:08:00.949) — appears: **yes** (start and result).
- `StdFormRefreshCompleted` (starting and result, 07:08:00.949) — appears: **yes**.
- No `EventHandler` rows.
- Missing relative to a full open: `StdFormPredisplay` and `StdFormInitCompleted` are absent (no Form open occurred in this interval; the Form was already open).

Activation count: **1**. Clear count: **1**.

Attribution: the 16 rows were produced after the clear and after the single click, with no other operation by this worker in that interval. Attribution to the click is by timing and FX_Items name only. No isolated causation is claimed.

Preference-application timing limitation: **not triggered**. FormEvent rows did appear after the single activation with Enabled ON. The candidate limitation from EXP-053 is therefore not needed to explain this result.

## 4. Part C — restoration of General > Enabled, ON to OFF

Pre-change state: General Enabled `[checked]` (ON), System Information and Security unchecked (verified in `t7-08-restoration-preferences-General-tab-before-change-fresh.md`).

1. View (click), User Preferences... (click), Diagnostics (click). These opened the dialog on the General tab. This navigation added **20 VarValue rows** to the log at **07:08:44.703** (`StdCurFormPage` / `StdLastFormPage` changes; see §6). They are not FormEvent rows and are outside the activation interval (about 44 s after the 07:08:00 rows).
2. Enabled label (ref `f1e1342`), one click: post-click accessibility shows `checkbox "Enabled"` **without** `[checked]`; System Information and Security unchanged (`t7-09-restoration-General-Enabled-unchecked-before-OK.png`).
3. **One native OK** (ref `f1e1104`). Dialog closed; status `OK (Object 1 of 1)`; runtime Save `[disabled]`; FX_Refresh present (`t7-10-restoration-post-OK-dialog-closed-runtime-state.png`; accessibility `playwright/page-2026-10-11T07-08-59-838Z.yml`).

OK count (restoration): **1**. Prompt or error after OK: **none**.

## 5. Independent readback (second dialog opening, read-only; Close Window, no OK)

View > User Preferences > Diagnostics reopened; all four tabs read from accessibility and screenshot; closed with Close Window (ref `f1e1355`).

| # | Tab | Option | T1 baseline | Readback after restoration | Match |
| --- | --- | --- | --- | --- | --- |
| 1 | General | **Enabled** | OFF | **OFF** (no `[checked]`) | yes (`t7-12`) |
| 2 | General | System Information | OFF | OFF | yes |
| 3 | General | Security | OFF | OFF | yes |
| 4 | Form | Initialization | OFF | OFF | yes (`t7-13`) |
| 5 | Form | **Events** | ON | **ON** | yes |
| 6–8 | Form | Scripts / IDO Methods / Form Server | OFF | OFF | yes |
| 9–14 | Form | Component (6) | OFF | OFF | yes |
| 15 | Form | **Event Handler Include** | ON | **ON** | yes |
| 16 | Form | Validator Include | OFF | OFF | yes |
| 17 | Form | Variable Initialization | OFF | OFF | yes |
| 18 | Form | **Variable Value Changed** | ON | **ON** | yes |
| 19 | Form | Variable Dependent Notification | OFF | OFF | yes |
| 20–26 | IDO Collections (7) | all | OFF | all OFF (`t7-14`) | yes |
| 27–32 | Others (6) | all | OFF | all OFF (`t7-15`) | yes |

**Readback result: 32 of 32 options match the T1 inventory.** Checked count = 3 (Events, Event Handler Include, Value Changed), as at baseline.

Readback opening added **no** new log rows (log stayed at 36 timestamped rows; see §6).

## 6. Log rows after the activation (observed; not interpreted as test evidence)

After the restoration, the grid showed 36 timestamped rows in total: the 16 FormEvent rows from 07:08:00 (Part B) and **20 new VarValue rows at 07:08:44.703** (from the Part C dialog opening with Enabled still ON, before the OK).

- Observed: the 20 VarValue rows are preference-navigation rows (`VarValue (StdCurFormPage)` / `VarValue (StdLastFormPage)` changes). They are not FormEvent rows and are not part of the activation interval.
- **Unresolved discrepancy:** in T6, the first Diagnostics opening (Enabled OFF) and the readback after OK (Enabled ON) produced no new rows. In T7, the opening with Enabled ON produced 20 VarValue rows. The cause is not established; the difference may relate to the Enabled state at the time of opening, but this worker does not infer that.
- The 16 FormEvent rows are unchanged in the grid after these rows appeared.

## 7. Final preservation check (runtime)

Fresh snapshot after restoration `t7-16-final-preservation-runtime-and-log-after-restoration.md`; screenshot `t7-17-final-preservation-runtime-and-log-after-restoration.png` (viewed):
- Dialog closed; no prompt.
- FX_Items runtime tab selected; **Save `[disabled]`**.
- Records: `dumbbell / 45.00`; `eggs / 6.99`; `guitar / 129.99` present (grid); Description `45 pound iron`, Cost `45.00`, Unit of Measure `EA` (visible fields). No business-field edit.
- `button "FX_Refresh"` rendered.
- Status bar after the dialog closed is **blank** (the `Object 1 of 3` indicator is not visible in this final frame); the indicator was visible before the restoration (`t7-06`, `t7-07`).

## 8. Counts (T7 browser calls, worker-reported)

| Type | Count | Notes |
| --- | --- | --- |
| Tab list | 1 | first browser action |
| Tab select | 1 | index 1 (Web Client) |
| Explicit `browser_snapshot` | 7 | `t7-snapshot-00` (Designer tab), `t7-snapshot-01` (pre-clear runtime), `t7-04` (cleared baseline), `t7-06` (settled), `t7-08` (pre-restoration General), `t7-11` (readback General), `t7-16` (final). Each click also returned a tool snapshot, not counted. |
| Finds | 1 | `Clear` (tooltip identification) |
| Hovers | 1 | DevTools X control (`f1e234`), to read the tooltip |
| Clicks | 14 | Clear 1; FX_Refresh activation 1; restoration: View, User Preferences, Diagnostics, Enabled label, OK (5); readback: View, User Preferences, Diagnostics, Form tab, IDO tab, Others tab, Close Window (7) |
| Waits | 1 | 3 seconds (no action) |
| Screenshots | 12 | `t7-01`, `t7-02`, `t7-03`, `t7-05`, `t7-07`, `t7-09`, `t7-10`, `t7-12`, `t7-13`, `t7-14`, `t7-15`, `t7-17` (all viewed) |
| Log Clears | **1** | |
| Button activations | **1** | |
| Controlled runtime openings (this task) | 0 | none in T7 |
| Designer Saves (this task) | 0 | |
| Manual refresh / F4 / FiP / Get More Rows / collection loads | 0 | |
| Runtime mutations (Save, New, Delete, field edits) | 0 | |
| Preference changes | **1** | General Enabled ON to OFF |
| Preference OK | **1** | native OK (restoration) |
| Preference Close Window (no OK) | 1 | readback |
| Other preference checkbox clicks | 0 | |
| Prompts or dialogs accepted | 0 | |
| Browser evaluate / run-code | 0 | |
| Keypresses / typing | 0 | |
| Stale-ref errors / recovery snapshots | 0 | recovery allowance unused |

## 9. Evidence files (T7)

Worker-authored, under `evidence/EXP-054-R2/`:
- `T7-controlled-clear-activation-and-diagnostics-restoration-report.md` (this report)
- `T7-diagnostic-sequence-verbatim-after-single-FX_Refresh-activation.md` (Part A verbatim rows; Part B interpretation)
- `t7-01-pre-clear-inherited-log-36-rows-runtime-clean.png` — pre-clear gate; runtime clean; inherited log visible (first rows).
- `t7-02-hover-DevTools-X-control-tooltip-before-clear.png` — hover on the X control; **tooltip not visible in this frame** (identified via accessibility `find`).
- `t7-03-post-single-clear-Log-Messages-visibly-empty-baseline.png` — Log Messages grid header only; no rows (viewed).
- `t7-05-immediate-after-single-FX_Refresh-activation.png` — immediate post-click frame (viewed): first six log rows visible (`07:08:00.855` ×5 and `07:08:00.949` for StdObjectSelectCurrentCompleted start); status `FX_Refresh (Object 1 of 3)`; FX_Refresh button and three records visible. Rows 7–16 are in the accessibility file only.
- `t7-07-settled-after-3s-runtime-and-log-first-rows.png` — settled; first six rows visible (`07:08:00.855` ×5 and `07:08:00.949`); status `FX_Refresh (Object 1 of 3)` (viewed).
- `t7-09-restoration-General-Enabled-unchecked-before-OK.png` — Enabled unchecked before OK.
- `t7-10-restoration-post-OK-dialog-closed-runtime-state.png` — dialog closed after OK; runtime intact.
- `t7-12-readback-General-tab-Enabled-OFF.png` — readback General.
- `t7-13-readback-Form-tab-Events-Include-ValueChanged-ON.png` — readback Form.
- `t7-14-readback-IDO-Collections-tab-all-off.png` — readback IDO.
- `t7-15-readback-Others-tab-all-off.png` — readback Others.
- `t7-17-final-preservation-runtime-and-log-after-restoration.png` — final runtime; log tail; status blank.

Browser-generated, saved at worker request (not worker findings): `t7-snapshot-00-pre-clear-fresh-designer.md`, `t7-snapshot-01-pre-clear-fresh-web-client-runtime.md`, `t7-04-cleared-log-baseline-accessibility-snapshot.md`, `t7-06-settled-after-3s-accessibility-snapshot-runtime-and-log.md`, `t7-08-restoration-preferences-General-tab-before-change-fresh.md`, `t7-11-readback-fresh-Diagnostics-General-tab.md`, `t7-16-final-preservation-runtime-and-log-after-restoration.md`.

Tool-generated (gitignored `evidence/playwright/`): accessibility snapshots `page-2026-10-11T07-07-38-722Z.yml` through `07-09-34-123Z.yml` (about 17 files) and console logs.

## 10. Acceptance status (T7 scope)

| AC | T7 status | Basis |
| --- | --- | --- |
| AC-8 | **Supported** | Inherited 36 rows distinguished (§1); one native Clear, verified visibly empty grid (§2; `t7-03`, `t7-04`); exactly one FX_Refresh activation (§3); no extra clears, runtime openings, or refreshes. |
| AC-9 | **Supported with limits** | Verbatim sequence of 16 FormEvent rows with event names, text, order, timestamps, and handler counts in `T7-diagnostic-sequence-…md` Part A. `StdFormRefresh` and `StdFormRefreshCompleted` both appear (start and result), identified precisely. Limits: attribution by timing and name only; no EventHandler rows; 10 of 16 rows verified in accessibility only (grid showed six); no date displayed. |
| AC-10 | **Supported with limits** | Immediate and settled states: three records and values unchanged, Save disabled, no prompt, no unintended modification (§3, §7). Limit: the `Object 1 of 3` indicator is not visible in the final frame after the dialog closed. |
| AC-11 | **Supported** (same session, client-side) | General Enabled ON to OFF through one native OK (§4); independent four-tab readback matches T1 for all 32 options (§5). |
| AC-7 | **Supported** (carried from T6) | Pre-change 32-option baseline (T6) and the ON change. |
| AC-12 | **Reconciled in the final record** | See the experiment record and §8 counts. |

## 11. Unresolved

- Why the Diagnostics opening with Enabled ON added 20 VarValue rows in T7 but none in T6 (readback after OK): **unresolved**.
- Whether the 16 FormEvent rows were produced by the Button's Primary Event (StdFormRefresh) or by another internal path: **unresolved**; timing and name only.
- Why the FX_Items status line showed `Object 1 of 3` before restoration but is blank after the dialog closed: **unresolved**; the record count is not independently confirmed beyond the earlier indicator and the three visible rows.
- Cross-session persistence, server-side trace completeness, and whether the EXP-053 preference-application timing limitation applies: **not tested**.
