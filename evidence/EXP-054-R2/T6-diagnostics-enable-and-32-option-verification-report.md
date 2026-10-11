# EXP-054-R2 — T6 Diagnostics General > Enabled (OFF to ON), one OK, and independent 32-option verification

Run `R-20261011-144135-Rh6I`, experiment EXP-054-R2, cycle 5, task T6.
Worker session `e06da36c-ce9e-4db0-9a72-8fcea6f51ed0`, task_message_id `0c3c9d8d-39b5-4a9c-b620-bd2d52514f2c`.
Date 2026-10-11. Editing scope: User. Target Form `FX_Items` (runtime, User version); Button `FX_RefreshButton`.

**Result: the pre-change 32-option baseline matched T1 exactly. General > Enabled was changed OFF to ON (one checkbox label click), committed through one native User Preferences OK, and independently read back as ON on all four tabs. The other 31 options match the T1 baseline. The FX_Items runtime remains open and clean (Save disabled, three original records, FX_Refresh rendered). The Diagnostic Log still holds exactly the 36 inherited rows; it was not cleared, and no row was attributed to this test. FX_RefreshButton was NOT clicked. Diagnostics Enabled is intentionally left ON for the next controlled test, per this task's instruction.**

Classification: **observed only** (single session; client-side preference values).

**Conflict noted:** the replay brief says restore General > Enabled to OFF "at the end of testing". This task's bounded instruction says leave it ON for the next controlled test. This report follows the bounded instruction. Restoration to OFF remains **outstanding** and is the highest-priority action after the Button activation test.

---

## 1. Tab state and preflight

- `browser_tabs list` was the first browser action. Tab 0 (Designer `MGForm=FX_Items`) was current; tab 1 (Web Client) was then selected with `browser_tabs select 1`, which succeeded.
- Fresh snapshot `evidence/EXP-054-R2/t6-snapshot-00-pre-diagnostics-fresh-runtime.md`:
  - Identity bar `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` (DEM).
  - Runtime tab `FX_Items` selected; Save `[disabled]`; Get More Rows `[disabled]`.
  - Records: `dumbbell` (45.00), `eggs` (6.99), `guitar` (129.99) present; status `Description (Object 1 of 3)`.
  - `button "FX_Refresh"` rendered in the FX_Items panel.
  - No dialog, no sign-in challenge, no prompt.
  - Log Messages: 36 timestamped rows (20 at 05:22:07.945/.976; 16 at 05:25:20.269–.285), all inherited.
- Screenshot `t6-01-pre-diagnostics-runtime-clean-FX_Refresh-rendered.png`.

Preflight gate: **passed.** No browser reload, no runtime reopen, no runtime action.

## 2. Pre-change 32-option baseline (read before any mutation)

Opened once via View > User Preferences... > Diagnostics (portal `favoriteContext=UserPreferences`). Values are read from the accessibility `[checked]` attribute and the screenshot of each tab.

| # | Tab | Group | Option | Original (T1 baseline) | Observed before change (T6) | Match |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | General | — | **Enabled** | OFF | OFF (`t6-02`) | yes |
| 2 | General | — | System Information | OFF | OFF | yes |
| 3 | General | — | Security | OFF | OFF | yes |
| 4 | Form | top level | Initialization | OFF | OFF (`t6-03`) | yes |
| 5 | Form | top level | **Events** | ON | ON | yes |
| 6 | Form | Call Details | Scripts | OFF | OFF | yes |
| 7 | Form | Call Details | IDO Methods | OFF | OFF | yes |
| 8 | Form | Call Details | Form Server | OFF | OFF | yes |
| 9 | Form | Component | Initialization | OFF | OFF | yes |
| 10 | Form | Component | To/From Source | OFF | OFF | yes |
| 11 | Form | Component | List Building | OFF | OFF | yes |
| 12 | Form | Component | To/From Control | OFF | OFF | yes |
| 13 | Form | Component | User Interaction | OFF | OFF | yes |
| 14 | Form | Component | Dependent Notification | OFF | OFF | yes |
| 15 | Form | Event Handler | **Include** | ON | ON | yes |
| 16 | Form | Validator | Include | OFF | OFF | yes |
| 17 | Form | Variable | Initialization | OFF | OFF | yes |
| 18 | Form | Variable | **Value Changed** | ON | ON | yes |
| 19 | Form | Variable | Dependent Notification | OFF | OFF | yes |
| 20 | IDO Collections | — | Initialization | OFF | OFF (`t6-04`) | yes |
| 21 | IDO Collections | — | Commands | OFF | OFF | yes |
| 22 | IDO Collections | — | Update Overview | OFF | OFF | yes |
| 23 | IDO Collections | — | Load Overview | OFF | OFF | yes |
| 24 | IDO Collections | — | Update Values | OFF | OFF | yes |
| 25 | IDO Collections | — | Load Values | OFF | OFF | yes |
| 26 | IDO Collections | — | Dependent Notification | OFF | OFF | yes |
| 27 | Others | Interpreter | Overview | OFF | OFF (`t6-05`) | yes |
| 28 | Others | Interpreter | Scripts | OFF | OFF | yes |
| 29 | Others | Interpreter | Components | OFF | OFF | yes |
| 30 | Others | Interpreter | Variables | OFF | OFF | yes |
| 31 | Others | Interpreter | Properties | OFF | OFF | yes |
| 32 | Others | Interpreter | Others | OFF | OFF | yes |

Pre-change result: **32 of 32 match T1.** Checked = 3 (Events, Event Handler Include, Value Changed). Gate passed; mutation allowed.

Screenshots: `t6-02-diagnostics-General-tab-before-any-change.png` (General: Enabled, System Information, Security unchecked); `t6-03-diagnostics-Form-tab-before-any-change.png` (Form: Events and Include and Value Changed checked, verified viewed); `t6-04-diagnostics-IDO-Collections-tab-before-any-change.png`; `t6-05-diagnostics-Others-tab-before-any-change.png`.

## 3. The one change and the one OK

- Change: **General > Enabled**, one click on its visible label (`Enabled`, accessibility ref `f1e894`). The checkbox input was not clicked (EXP-053 found the input can be intercepted; the label works).
- Post-click accessibility: `checkbox "Enabled" [checked] [active]`; `System Information` and `Security` unchanged (unchecked). Screenshot `t6-06-General-Enabled-after-label-click-before-OK.png`: Enabled checked; the dialog status line reads `Enabled (Object 1 of 1)`.
- Only one preference was changed. **No checkbox on Form, IDO Collections, or Others was clicked.**
- Commit: one click on the dialog's native **OK** (ref `f1e876`). The dialog closed. Portal URL returned to `favoriteContext=FX_Items`.
- Post-OK screenshot `t6-07-post-OK-runtime-no-prompt-diagnostics-closed.png`: dialog closed; no prompt; no error; runtime FX_Items with three records and FX_Refresh rendered; Save greyed; status line `OK (Object 1 of 1)` (the dialog's status text).
- Post-OK Log Messages: **36 rows** (unchanged; the OK added no rows).

OK count: **1**. Prompt or error after OK: **none observed**.

## 4. Independent read-back (new dialog opening, read-only)

Re-opened via View > User Preferences... > Diagnostics (second dialog opening; the first was the baseline and change session). All four tabs read from a fresh accessibility snapshot for each tab. Dialog then closed with its **Close Window** control (not OK).

| # | Tab | Option | Original (T1) | Read-back after OK | Match | Evidence |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | General | **Enabled** | OFF | **ON** (`checked`) | **changed as required** | `t6-08` (General) |
| 2 | General | System Information | OFF | OFF | yes | `t6-08` |
| 3 | General | Security | OFF | OFF | yes | `t6-08` |
| 4 | Form | Initialization | OFF | OFF | yes | `t6-09` (Form) |
| 5 | Form | **Events** | ON | **ON** | yes | `t6-09` |
| 6–8 | Form | Scripts / IDO Methods / Form Server | OFF | OFF | yes | `t6-09` |
| 9–14 | Form | Component group (6 boxes) | OFF | OFF | yes | `t6-09` |
| 15 | Form | **Event Handler Include** | ON | **ON** | yes | `t6-09` |
| 16 | Form | Validator Include | OFF | OFF | yes | `t6-09` |
| 17 | Form | Variable Initialization | OFF | OFF | yes | `t6-09` |
| 18 | Form | **Variable Value Changed** | ON | **ON** | yes | `t6-09` |
| 19 | Form | Variable Dependent Notification | OFF | OFF | yes | `t6-09` |
| 20–26 | IDO Collections (7) | all | OFF | all OFF | yes | `t6-10` |
| 27–32 | Others (6) | all | OFF | all OFF | yes | `t6-11` |

Read-back result: **32 of 32 values match the T1 baseline, except option 1 (General > Enabled), which is ON as intended.** The other 31 options are unchanged. Count of checked options after the change: 4 (Enabled, Events, Include, Value Changed).

Read-back screenshots: `t6-08-readback-General-tab-Enabled-ON.png` (Enabled checked; System Information and Security unchecked; viewed); `t6-09-readback-Form-tab-Events-Include-ValueChanged-ON.png` (viewed; Events, Include, Value Changed checked); `t6-10-readback-IDO-Collections-tab-all-off.png`; `t6-11-readback-Others-tab-all-off.png`.

Close: one **Close Window** click (ref `f1e1073`); no OK. The dialog closed (`t6-12`).

## 5. Runtime preservation after the change and readback

Post-close fresh snapshot `evidence/playwright/page-2026-10-11T07-05-01-320Z.yml` (tool-generated) and screenshot `t6-12-post-readback-dialog-closed-runtime-state.png`:
- Dialog closed; no prompt.
- Runtime FX_Items selected; **Save `[disabled]`**.
- Three records present: `dumbbell`, `eggs`, `guitar` (grid); Description field shows `45 pound iron`; Cost `45.00`; Unit of Measure `EA` (unchanged visible values; no edit).
- `button "FX_Refresh"` rendered.
- Log Messages: **36 rows**, the same 36 inherited rows (20 at 05:22:07.945/.976; 16 at 05:25:20.269–.285). **The OK and the readback added no log rows.**

## 6. Log observation (observed only; not interpreted)

- With Enabled ON after the OK and the readback, the Log Messages grid did not show any new preference-navigation rows. EXP-053 T5 recorded 16 `VarValue` rows at 05:25:20 when preferences were opened with Enabled ON, and EXP-053 T2 recorded 6 + 30 rows around its OK. In this T6 session, the OK and readback produced **no** new rows.
- Possible explanation (not established): the EXP-053 discussion noted a preference-application timing limitation; the new Enabled value may not yet be applied to the diagnostic capture until a later event. This is recorded as a candidate limitation only, not a finding. It will be examined only by the single controlled Button activation in the next task, not by any extra action here.
- The 36 rows remain inherited; none is attributed to this test.

## 7. Counts (T6 browser calls, worker-reported)

| Type | Count | Notes |
| --- | --- | --- |
| Tab list | 1 | first browser action |
| Tab select | 1 | index 1 (Web Client); succeeded |
| Explicit `browser_snapshot` | 1 | `t6-snapshot-00` (pre-diagnostics gate); each click also returned a tool snapshot (not counted) |
| Finds | 0 | |
| Clicks | 16 | baseline: View, User Preferences, Diagnostics, General tab, Form tab, IDO tab, Others tab (7); change: Enabled label (1), OK (1) (2); readback: View, User Preferences, Diagnostics, Form tab, IDO tab, Others tab, Close Window (7) |
| Screenshots | 12 | `t6-01` … `t6-12`, all saved; `t6-03`, `t6-06`, `t6-07`, `t6-08`, `t6-09`, `t6-12` viewed |
| Dialog openings | 2 | baseline-and-change session (closed by OK); readback (closed by Close Window) |
| Preference changes | **1** | General > Enabled OFF to ON |
| Preference OK | **1** | native OK, once |
| Preference Close Window (no OK) | 1 | readback close |
| Other preference checkbox clicks | 0 | |
| Runtime actions (Save, New, Delete, field edits, refresh, F4, FiP, Get More Rows, collection loads) | 0 | |
| Runtime reopen / close | 0 / 0 | |
| Log Clear | 0 | |
| Button activation | 0 | FX_RefreshButton not clicked |
| Designer actions | 0 | Designer tab not interacted with |
| Prompts or dialogs accepted | 0 | |
| Browser evaluate / run-code | 0 | |
| Typing / keypresses | 0 | |
| Stale-ref errors / recovery | 0 | recovery allowance unused |

Note on the "New" tooltip visible in `t6-12`: this is a hover tooltip only; no New action was taken (no click was made on the toolbar New control in T6).

## 8. Evidence files (T6)

Worker-authored, under `evidence/EXP-054-R2/`:
- `T6-diagnostics-enable-and-32-option-verification-report.md` (this report)
- `t6-01-pre-diagnostics-runtime-clean-FX_Refresh-rendered.png` — runtime clean before Diagnostics work: three rows, FX_Refresh button, Save greyed.
- `t6-02-diagnostics-General-tab-before-any-change.png` — General tab baseline (Enabled, System Information, Security unchecked).
- `t6-03-diagnostics-Form-tab-before-any-change.png` — Form tab baseline (Events, Include, Value Changed checked; 13 others unchecked).
- `t6-04-diagnostics-IDO-Collections-tab-before-any-change.png` — 7 unchecked.
- `t6-05-diagnostics-Others-tab-before-any-change.png` — 6 unchecked.
- `t6-06-General-Enabled-after-label-click-before-OK.png` — Enabled checked before OK; status `Enabled (Object 1 of 1)`.
- `t6-07-post-OK-runtime-no-prompt-diagnostics-closed.png` — dialog closed after OK; no prompt; runtime intact; status `OK (Object 1 of 1)`.
- `t6-08-readback-General-tab-Enabled-ON.png` — readback General: Enabled checked (viewed).
- `t6-09-readback-Form-tab-Events-Include-ValueChanged-ON.png` — readback Form (viewed).
- `t6-10-readback-IDO-Collections-tab-all-off.png` — readback IDO.
- `t6-11-readback-Others-tab-all-off.png` — readback Others.
- `t6-12-post-readback-dialog-closed-runtime-state.png` — dialog closed; runtime clean; FX_Refresh rendered; 36 rows.

Browser-generated, saved at worker request (classified as browser-generated, not worker findings):
- `t6-snapshot-00-pre-diagnostics-fresh-runtime.md`

Tool-generated (gitignored `evidence/playwright/`): accessibility snapshots from T6 (`page-2026-10-11T07-03-31-649Z.yml` through `07-05-01-320Z.yml`, about 13 files) and console logs from the tab selects.

## 9. Acceptance status (T6 scope)

| AC | T6 status | Basis |
| --- | --- | --- |
| AC-7 | **Supported with limits** | Pre-change 32 options evidenced (§2); only General > Enabled changed OFF to ON (§3); one native OK (§3); independent readback on all four tabs shows Enabled ON and the other 31 unchanged (§4). Limits: client-side values, same session; Events and Include checked on screenshot and accessibility. |
| AC-11 | **Not met yet (outstanding by design)** | Restoration to OFF is not part of T6 (Enabled deliberately left ON for the next controlled test). |
| AC-6 (carried) | Supported with limits (T5) | runtime still open, clean, three records, Save disabled (§5). |
| AC-8 to AC-10, AC-12 | **Not tested in T6** | Log clear, Button activation, event capture, final audit: out of T6 scope. |

## 10. Unresolved

- Whether the Enabled ON state is applied to diagnostic capture before the next Button activation (preference-application timing): **unresolved**; to be observed only in the next controlled test.
- Why the OK and readback added no log rows (§6): **unresolved**.
- Diagnostics restoration to OFF: **outstanding**, the highest-priority action after the Button activation.

## 11. Next permitted step (requires the operator)

The FX_Items runtime is open and clean, and Diagnostics General > Enabled is ON with the other 31 options at the T1 baseline. The next controlled step, if authorized, is the single Diagnostic Log clear and the single FX_RefreshButton activation, followed by restoration of Enabled to OFF.

Reconciliation for T6: preference changes 1; preference OK 1; runtime mutations 0; log clears 0; Button activations 0; extra collection loads 0; Diagnostics restoration pending (intentional per bounded instruction).
