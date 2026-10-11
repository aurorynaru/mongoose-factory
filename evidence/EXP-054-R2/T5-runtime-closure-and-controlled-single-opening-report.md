# EXP-054-R2 — T5 inherited runtime closure, one controlled Select Form opening, and preservation verification

Run `R-20261011-144135-Rh6I`, experiment EXP-054-R2, cycle 4, task T5 (bounded instruction: runtime closure and single opening only).
Worker session `e06da36c-ce9e-4db0-9a72-8fcea6f51ed0`, task_message_id `f1a0209b-59d4-4749-a925-c6169e7fd72f`.
Date 2026-10-11. Editing scope: User. Target Form `FX_Items` (User version). Button `FX_RefreshButton`.

**Result: the inherited runtime FX_Items tab was closed once (clean gate passed, no prompt); the saved FX_Items Form was opened exactly once through Web Client Open > Select Form; the immediate and settled states show the FX_Refresh button rendered, the three original records (dumbbell, eggs, guitar) with their original visible values, the status `Description (Object 1 of 3)`, and Save disabled. No manual refresh, collection load, Button activation, log clear, Diagnostics change, or Save occurred. The Diagnostic Log still holds the 36 inherited rows, unchanged, and was not cleared or attributed to this test.**

Classification: **observed only** (single browser session; rendered UI and accessibility).

---

## 1. Tab selection and pre-closure gate

- `browser_tabs list` was the first browser action (tab 0 = Designer `MGForm=FX_Items`; tab 1 = Web Client `favoriteContext=FX_Items`).
- `browser_tabs select 1` succeeded on the first attempt after the list. The Web Client is now the current tab.
- Fresh untargeted snapshot `evidence/EXP-054-R2/t5-snapshot-00-pre-closure-fresh-runtime.md` (one snapshot; no recovery needed):
  - Identity bar `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; DEM badge. No sign-in or configuration screen.
  - Runtime tab `FX_Items` selected; close control `Close Panel FX_Items` (ref `f1e101`).
  - Save `[disabled]`; Get More Rows `[disabled]`. No dialog. No portal banner.
  - Records: `dumbbell` / `45 pound iron` / `45.00` / `EA` (row 1, current), `eggs` / `cage free` / `6.99` / `DZ` (row 2), `guitar` / `natural acoustic` / `129.99` / `EA` (row 3). Visible fields: Item `dumbbell`, Description `45 pound iron`, Cost `45.00`, Unit of Measure `EA`.
- Screenshot `t5-01-pre-closure-runtime-FX_Items-clean-three-records.png`: runtime FX_Items with three grid rows, first-record values, Save greyed, identity bar, DevTools Log Messages with the inherited rows.

**Gate result: passed.** The runtime is clean, Save is disabled, there is no prompt or authentication challenge, and the three records match the T1 baseline (`dumbbell / 45 pound iron / 45.00 / EA`, `eggs / cage free / 6.99 / DZ`, `guitar / natural acoustic / 129.99 / EA`).

## 2. The one inherited runtime closure

- Action: one click on the native `Close Panel FX_Items` control (ref `f1e101`, from the fresh gate snapshot). Not the browser tab.
- Post-closure snapshot `evidence/playwright/page-2026-10-11T07-00-34-375Z.yml` and screenshot `t5-02-post-closure-runtime-FX_Items-tab-absent-no-prompt.png`:
  - The FX_Items tab is **absent**: no `tab [selected]` with FX_Items; no `Close Panel` control.
  - The runtime area is blank (the Explorer shell remains).
  - **No unsaved-change prompt, no dialog, no sign-in screen.** Save `[disabled]`.
  - Identity bar still `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`. The Web Client remains authenticated.
  - DevTools Log Messages still present; inherited rows not cleared.

Closure count: **1**.

## 3. The one controlled Select Form opening

- Action 1: click the toolbar **Open** button (ref `f1e25`, from the post-closure snapshot). Dialog `Select Form` opened (`playwright/page-2026-10-11T07-00-42-390Z.yml`).
- The dialog contents (accessibility, verbatim): Filter textbox `FX_Items` (active), Filter By `Name`, Case Sensitive and Starts With unchecked, one grid row with Caption `FX_Items` and Name `FX_Items`, buttons OK / Cancel / Help.
- Action 2: one click on the row's Name cell (ref `f1e705`). Screenshot `t5-03-select-form-dialog-FX_Items-row-selected-before-OK.png` shows the single row highlighted (Caption `FX_Items`, Name `FX_Items`) before OK.
- Action 3: one click on **OK** (ref `f1e731`). Dialog closed. This was the only OK in T5.

Identity confirmation through the visible dialog: the only row offered for the filter `FX_Items` was Caption `FX_Items` / Name `FX_Items`. The Form was not selected by any other route.

Opening count: **1**. No second opening, no retry, no other Form opened.

## 4. Immediate state (captured immediately after the single OK)

- Screenshot `t5-04-immediate-after-single-open-FX_Items-runtime.png`:
  - Runtime tab `FX_Items` visible with close control.
  - Three grid rows (1 `dumb…`, 2 `eggs`, 3 `guit…`); row 1 current.
  - Fields: Item `dumbbell` (grey, read-only style), Description `45 pound iron` (focused, text highlighted by the form's focus), Cost `45.00`, Unit of Measure `EA`.
  - **FX_Refresh button rendered** below the fields (about x 442–556, y 360–394).
  - Status line `Description (Object 1 of 3)`.
  - Save greyed; Get More Rows disabled (accessibility).
- Accessibility `evidence/EXP-054-R2/t5-05-immediate-accessibility-snapshot-runtime.md`: grid rows `dumbbell / 45 pound iron / 45.00 / EA`, `eggs / cage free / 6.99 / DZ`, `guitar / natural acoustic / 129.99 / EA`; `button "Save" [disabled]`; `button "Get More Rows" [disabled]`; status textbox `Description (Object 1 of 3)`; toolbar `button "Refresh"` (the native toolbar Refresh, **not clicked**); the rendered button `FX_Refresh` in the form panel.
- Log Messages count (timestamped rows, accessibility): **36**, the same 36 inherited rows as before the open. The open added no rows.

## 5. Settled state (after a 3-second wait; no action)

- `browser_wait_for` 3 seconds (no clicks).
- Screenshot `t5-06-settled-after-3s-FX_Items-runtime.png`: identical to the immediate state (three rows, same values, FX_Refresh button rendered, status `Description (Object 1 of 3)`, Save greyed).
- Accessibility `evidence/playwright/page-2026-10-11T07-01-08-512Z.yml`: grid values unchanged (`dumbbell`, `45.00`; `eggs`, `6.99`; `guitar`, `129.99`); `button "Save" [disabled]`; `button "Get More Rows" [disabled]`; status `Description (Object 1 of 3)`; no dialog; `find "FX_Refresh"` returned `button "FX_Refresh"` inside `tabpanel "FX_Items"`.
- Log Messages count: **36** (unchanged).

## 6. Verification against the T1 record baseline

| Check | T1 baseline | T5 settled | Match |
| --- | --- | --- | --- |
| Record 1 | dumbbell / 45 pound iron / 45.00 / EA | same (grid and fields) | yes |
| Record 2 | eggs / cage free / 6.99 / DZ | same (grid) | yes |
| Record 3 | guitar / natural acoustic / 129.99 / EA | same (grid) | yes |
| Loaded-record count | 3 (T1: "Object 1 of 3" not captured; the status line was not visible in T1 frame) | status `Description (Object 1 of 3)` | yes, supported indicator read |
| Save | disabled | disabled | yes |
| Button rendered and identifiable | not applicable in T1 | `FX_Refresh` button rendered; accessibility `button "FX_Refresh"` in the FX_Items panel | yes |
| Prompts / dialogs | none | none | yes |

Count note: the status line `Description (Object 1 of 3)` is the product's record indicator. It is read as the loaded-record count (three records). It is an indicator, not an independent database count.

## 7. Limits, unexpected behaviour, and what was NOT done

- **Form-level focus:** the Description field received focus with its text highlighted (`45 pound iron` selected) at open. This matches the EXP-053 observation for the same opening. No typing was performed. The field's visible value is unchanged.
- **No manual Refresh, F4, Filter-in-Place, Get More Rows, or collection load** was performed after the opening.
- **No Button activation** (FX_Refresh was not clicked).
- **No Diagnostics change** (User Preferences not opened).
- **No log clear.** The 36 inherited rows remain (20 EXP-053 FormEvent rows at 05:22:07.945 / .976 and 16 EXP-053 VarValue rows at 05:25:20.269–.285). They are not attributed to this test. The opening added **no** new log rows, consistent with Diagnostics General Enabled remaining OFF (EXP-054 T1 and EXP-053 T5 observations; not established as the cause).
- **No business-record edit.** The Description field was not typed in; no value changed.
- **No prompt, no sign-in, no portal banner, no stale-ref errors, no timeouts** in T5.

## 8. Counts (T5 browser calls, worker-reported)

| Type | Count | Notes |
| --- | --- | --- |
| Tab list | 1 | first browser action |
| Tab select | 1 | index 1 (Web Client); succeeded |
| Explicit `browser_snapshot` | 2 | `t5-snapshot-00-pre-closure-fresh-runtime.md`; `t5-05-immediate-accessibility-snapshot-runtime.md`. Each action also returned a tool-generated snapshot (not counted). |
| Finds | 1 | `FX_Refresh` (settled check) |
| Clicks | 4 | `Close Panel FX_Items` (**inherited runtime close: 1**); toolbar `Open` (**controlled open: 1**); Select Form row Name cell (selection, 1); Select Form `OK` (1) |
| Wait | 1 | 3 seconds (no action) |
| Screenshots | 5 | `t5-01`, `t5-02`, `t5-03`, `t5-04`, `t5-06` (all viewed) |
| **Inherited runtime closes** | **1** | |
| **Controlled Select Form openings** | **1** | |
| Manual refresh / F4 / Filter-in-Place / Get More Rows / extra collection loads | 0 | |
| Button activations | 0 | |
| Log clears | 0 | |
| Runtime mutations (Save, New, Delete, field edit) | 0 | |
| Diagnostics changes | 0 | |
| Designer actions | 0 | Designer tab not selected |
| Prompts or dialogs accepted | 0 | |
| Browser evaluate / run-code | 0 | |
| Typing / keypresses | 0 | |
| Stale-ref errors / recovery snapshots | 0 | recovery allowance unused |

## 9. Evidence files (T5)

Worker-authored, under `evidence/EXP-054-R2/`:
- `T5-runtime-closure-and-controlled-single-opening-report.md` (this report)
- `t5-01-pre-closure-runtime-FX_Items-clean-three-records.png` — clean gate: three rows, first-record values, Save greyed, identity bar, inherited DevTools rows. Does not show the status line (below the frame in this capture).
- `t5-02-post-closure-runtime-FX_Items-tab-absent-no-prompt.png` — FX_Items tab absent; runtime area blank; no prompt; identity bar present. Does not show the Designer.
- `t5-03-select-form-dialog-FX_Items-row-selected-before-OK.png` — Select Form dialog with filter `FX_Items`, one row (Caption/Name `FX_Items`) highlighted, OK clicked afterward. Does not show the post-OK state.
- `t5-04-immediate-after-single-open-FX_Items-runtime.png` — immediate state: three rows, values, FX_Refresh button rendered, status `Description (Object 1 of 3)`, Save greyed; the Description value highlighted by focus. Does not show the log rows beyond the first six.
- `t5-06-settled-after-3s-FX_Items-runtime.png` — settled state identical to t5-04.

Browser-generated, saved at worker request (classified as browser-generated, not worker findings):
- `t5-snapshot-00-pre-closure-fresh-runtime.md`
- `t5-05-immediate-accessibility-snapshot-runtime.md`

Tool-generated (gitignored `evidence/playwright/`): accessibility snapshots `page-2026-10-11T07-00-34-375Z.yml` (post-closure), `07-00-42-390Z.yml` (Select Form open), `07-00-49-311Z.yml` (row selected), `07-00-55-314Z.yml` (after OK), `07-01-08-512Z.yml` (settled); console log `console-2026-10-11T07-00-22-579Z.log` (on tab select).

## 10. Acceptance status (T5 scope)

| AC | T5 status | Basis |
| --- | --- | --- |
| AC-6 | **Supported with limits** | Clean inherited runtime closure (gate §1; closure §2, tab absent, no prompt). One Open > Select Form (§3; dialog identity visible; OK once). Immediate and settled (§4–§5): `FX_Refresh` rendered; three original records automatically present with unchanged values; status `Object 1 of 3`; Save disabled; no manual collection load. Limits: same session; the status line is a product indicator, not a database count; the Description focus-highlight at open (§7). |
| AC-10 (partial) | **Partially supported** (immediate and settled states, before any Button activation) | §4–§6: three records, values, Save disabled, no prompt, no unintended change. The post-click portion of AC-10 is not reached in T5. |
| AC-7, AC-8, AC-9, AC-11, AC-12 | **Not tested in T5** | Diagnostics enablement, log clear, Button activation, event capture, restoration, final audit: out of T5 scope |

## 11. Unresolved

- Whether the record count indicator reflects a native loaded-record count independent of the status string: **unresolved** (read as the displayed indicator only).
- Why the opening added no log rows while Diagnostics General Enabled is OFF: **unresolved** (carried from EXP-054 T1 and EXP-053 T5).
- Cross-session persistence and server-side load behaviour: **not tested**.

## 12. Next permitted step (requires the operator)

The FX_Items runtime Form is open and clean (Save disabled), with the Button rendered. The next step, if authorized, is the Diagnostics task: enable General > Enabled (after capturing the 32-option baseline, which is already recorded in T1), clear the log once, then one Button activation. None of these was performed in T5.

Reconciliation for T5: inherited runtime close 1; controlled runtime open 1; manual refresh 0; Button activations 0; log clears 0; runtime mutations 0; extra collection loads 0; Diagnostics changes 0.
