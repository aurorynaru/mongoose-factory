# EXP-058 T4 — migration of sequence 1 Set Values to FX_Test; pre-Save grouping (unsaved)

Run `R-20261011-175814-gBsz`, experiment EXP-058, cycle 3, task T4.
Worker session `58915b7d-301b-463b-b9b2-c6b7146c1118`; task_message_id `efbd9736-3632-45c9-a147-2fc5c5481472`.
Date: 2026-10-11. Editing scope: User (`ScopeName: anton.ramos@3mworks.com.ph`). Target Form `FX_Items`.

## 0. Outcome

- **Sequence 1 Set Values moved from `StdFormRefreshCompleted` to `FX_Test`: observed, unsaved.**
- **Pre-Save AC-3 grouping: established.** One `FX_Test` group contains exactly two enabled actions in order: seq 0 Prompt, seq 1 Set Values. No `StdFormRefreshCompleted` group remains. Exactly two handler actions in total.
- **Entry method: native editable Event combobox, typed `FX_Test`, committed with one Tab press.** No Enter. No picker click.
- **Picker observation (new relative to T3):** in this run the Event picker **did list `FX_Test`** as its first option (accessibility option cell `FX_Test`, `t4-snapshot-02`, line 400). In T3 it did not. The route used was still typed entry, as instructed.
- **Designer state: dirty, Save enabled, Undo enabled, Redo disabled, no dialog.** No Save invoked. FX_RefreshButton not touched. No Form close or reopen. No runtime tab access.

## 1. Pre-mutation gate (fresh snapshot; read-only)

- `browser_tabs list` first; tab 0 current (Designer), tab 1 runtime. No select needed.
- Fresh snapshot `t4-snapshot-00-designer-fresh-pre-sequence1.md`:
  - Identity: Form Name `FX_Items`; footer `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph` (line 662); Version `User version for user anton.ramos@3mworks.com.ph` (line 446).
  - Save enabled (line 11: `button "Save" [ref=e16]`, not disabled) — expected dirty state from T3.
  - No dialog.
  - `FX_Test` group (line 296) contains only seq 0 Prompt (lines 298–301; Disabled false; `PROMPT(Hello World) ICON(DEFAULT) RESPONSE(OK()) DEFAULTRESPONSE(OK)`).
  - `StdFormRefreshCompleted` group (line 305) contains only seq 1 Set Values (lines 307–310; Disabled false; `SETVARVALUES(FX_VarTest=P(FX_Description))`).
- All preconditions matched. Proceeded.

## 2. Sequence 1 Set Values: selection and pre-change readback

- Clicked the Set Values grid cell (selection only).
- Snapshot `t4-snapshot-01-sequence1-selected-readback-pre-change.md`:
  - Event `StdFormRefreshCompleted` (line 341);
  - Sequence `1` (line 356);
  - Disabled `False` (line 362);
  - Type `Set Values` (line 377);
  - Parameters `SETVARVALUES(FX_VarTest=P(FX_Description))` (line 386).
- Screenshot `t4-01-sequence1-selected-pre-change-event-StdFormRefreshCompleted.png`.

## 3. Event dropdown (opened once; no value change)

- Clicked the Event value's dropdown arrow (ref `e950`, one click).
- Snapshot `t4-snapshot-02-event-dropdown-open-sequence1.md`: `combobox [expanded] [active]` with text `StdFormRefreshCompleted` (line 394 area) and listbox. **First option: `FX_Test`** (line 400). The list then continues with `StdAppLaunchInbox` and the built-in `Std*` events. Exactly one `FX_` option (`FX_Test`).
- Screenshot `t4-02-event-dropdown-open-sequence1-FX_Test-listed.png`: the picker is scrolled to `StdFormRefreshCompleted` (highlighted), so the `FX_Test` entry is not visible in the image; its presence is established by the accessibility tree only.

## 4. Native editable entry of FX_Test, then Tab commit

- Typed `FX_Test` into the Event combobox (ref `e1027`, `submit=false`). Snapshot `t4-snapshot-03-event-combobox-typed-FX_Test-before-commit-sequence1.md`:
  - combobox text `FX_Test` (line 394);
  - grid still showed Set Values under `StdFormRefreshCompleted` (lines 305–310); grouping unchanged, uncommitted.
  - Screenshot `t4-03-intermediate-sequence1-event-typed-FX_Test-before-commit.png`.
- Pressed **Tab** once (commit). Enter not used.
- Snapshot `t4-snapshot-04-after-tab-commit-sequence1-grouping.md` and screenshot `t4-04-after-tab-commit-sequence1-grid-grouping-as-rendered.png`:
  - **The `StdFormRefreshCompleted` group header is no longer rendered** (`grep "StdFormRefreshCompleted"` in this snapshot returns **no matches**).
  - One `FX_Test` group (line 296) with two rows: `0 Prompt false PROMPT(...)` (lines 298–301) and `1 Set Values false SETVARVALUES(FX_VarTest=P(FX_Description))` (lines 305–308).
  - The selected row's Event readback reads `FX_Test`, Sequence 1, Disabled False (lines 338–359).
  - Save enabled; Undo enabled; Redo disabled.
- Interpretation of the intermediate-to-final movement: before the commit, Set Values was in the `StdFormRefreshCompleted` group (with its own header row, T4 snapshot 03). After the commit, that header is gone and the Set Values row sits beneath the `FX_Test` group. The header absence plus the Event readback `FX_Test` establish the move; the grid screenshot shows the result.

## 5. Verification of the completed grouping

| Check | Result | Evidence |
| --- | --- | --- |
| Exactly one `FX_Test` group | yes | `t4-snapshot-04` line 296 (one `cell "FX_Test"`) |
| Group contains the two original actions in order (seq 0 Prompt, seq 1 Set Values) | yes | `t4-snapshot-04` lines 298–308; screenshot `t4-04` |
| No duplicate or additional handler action | yes: exactly two rows, no extra rows | `t4-snapshot-04`, `t4-snapshot-10` |
| No `StdFormRefreshCompleted` handler remains | yes: grep for `StdFormRefreshCompleted` in the grid returns no match in `t4-snapshot-04` and `t4-snapshot-10` | grep, `t4-snapshot-04`, `t4-snapshot-10` |
| Handler actions total | 2 | as above |
| Prompt: seq 0, Disabled false, Type Prompt, parameters | yes (readback) | `t4-snapshot-05` (line 338 Event `FX_Test`; 353 Sequence 0; 359 Disabled False; 374 Type Prompt; 383 Parameters) |
| Set Values: seq 1, Disabled false, Type Set Values, parameters | yes (readback) | `t4-snapshot-08` (line 338 Event `FX_Test`; 353 Sequence 1; 359 Disabled False; 374 Type Set Values; 383 Parameters) |
| Prompt parameters dialog (read-only; Cancel) | Message Text `Hello World`; OK the only checked response | `t4-snapshot-06` (lines 706, 727); screenshot `t4-05`; Cancel → `t4-snapshot-07` (no dialog) |
| Set Values parameters dialog (read-only; Cancel) | Variables `FX_VarTest=P(FX_Description)`; Components/Properties blank | `t4-snapshot-09` (line 706); screenshot `t4-06`; Cancel → `t4-snapshot-10` (no dialog) |
| Save enabled (dirty), no dialog, no open dropdown | yes | `t4-snapshot-10` line 11; `t4-07` |

Final grid screenshot: `t4-07-final-grouping-FX_Test-two-actions-save-enabled-dirty.png`. It shows the `FX_Test` group expanded with both rows (Prompt false; Set Values false, selected), the Set Values Event readback `FX_Test`, Sequence 1, Disabled False, and Save enabled. It does not show a `StdFormRefreshCompleted` group, and the Set Values parameters are visible only in the row text. The parameters dialogs are shown in `t4-05` and `t4-06`.

## 6. Tool-locator disclosures (wrapper-reported locators differed from refs passed)

Each action's identity was confirmed by its resulting UI state, not by the wrapper's locator:

1. Dropdown arrow: ref `e950` was passed; the wrapper reported `page.locator('.mg-arrow-cell-icon').first().click()`. The result was the Event combobox expanded with `StdFormRefreshCompleted` (the Set Values row's Event), so the arrow activated the correct control.
2. Typing: ref `e1027` was passed; the wrapper reported `getByRole('tabpanel', { name: 'Event Handlers' }).getByLabel('', { exact: true }).fill('FX_Test')`. The result was the combobox text `FX_Test` (snapshot 03, line 394), and the commit produced the Set Values Event `FX_Test`.
3. Prompt Parameters button (`e1544`): the wrapper reported an unscoped `getByRole('tabpanel'…).getByRole('button', { name: 'Open Edit Property Dialog' })`. The opened dialog's Message Text was `Hello World`, matching the Prompt row, so the target was correct.
4. Set Values Parameters button (`e2007`): same wrapper form. The dialog's Variables text was `FX_VarTest=P(FX_Description)`, matching the Set Values row.
5. Cancel buttons (`e1808`, `e2127`): the wrapper reported `getByRole('button', { name: 'Cancel' })`. Each dialog closed (no dialog in the following snapshot).

## 7. Action audit (T4)

| Action | Count |
| --- | --- |
| Tab lists | 1 |
| Tab selects | 0 |
| Designer snapshots saved | 11 (`t4-snapshot-00` to `-10`) |
| Screenshots saved | 7 (`t4-01` to `t4-07`) |
| Designer clicks | 8: Set Values row select; dropdown arrow; Prompt row select; Prompt Parameters open; Prompt Cancel; Set Values row select; Set Values Parameters open; Set Values Cancel |
| Event combobox typing | 1 (`FX_Test`; no Enter) |
| Key presses | 1 (Tab, commit) |
| **Metadata-changing actions** | **1**: the Set Values Event association (`StdFormRefreshCompleted` → `FX_Test`) |
| Parameters dialogs opened | 2; closed by Cancel: 2; committed by OK: 0 |
| Designer Save | 0 |
| Regenerate, Undo, Redo | 0 |
| FX_RefreshButton change | 0 |
| Prompt or Set Values parameter, sequence, Disabled, Type change | 0 |
| Form open, close, reopen | 0 |
| Runtime tab selection, click, activation, prompt, dismissal, typing | 0 |
| Diagnostics, User Preferences, cache, FormSync, SQL, scripts, browser JavaScript | 0 |
| Ref-not-found errors | 0 |
| Fresh-snapshot recovery allowance used | 0 |

## 8. Unexpected or noteworthy states

1. **Picker now offers `FX_Test`.** In T3 the Event picker listed only built-in `Std*` events. In T4 it listed `FX_Test` first. The likely reason is that `FX_Test` is now an event used in this Form, but this is **not established** by any test. The route used in T4 was still the typed entry, as the brief instructed. The picker-offered route is not evaluated in this run.
2. **Rendered grouping changed shape.** The `StdFormRefreshCompleted` header disappeared after the commit, because no rows remain under it. This is consistent with the group being removed rather than emptied, but the Designer metadata has not been saved, so the removal is a UI-state observation only.
3. **Console:** 4 errors, unchanged since T2 (source unidentified; no diagnostics used).
4. No dialog, no unexpected prompt, no duplicate row, no altered parameter.

## 9. AC-3 status (pre-Save grouping)

**Fully established before Save** on these checks: one `FX_Test` group; both original actions in order; enabled (Disabled false) for both; parameters verified by readback (Prompt: Hello World/OK only; Set Values: `FX_VarTest=P(FX_Description)`); exactly two handler actions; no `StdFormRefreshCompleted` handler; committed by native editable entry with Tab; intermediate and final grids captured.

Residual limits (AC-3 as written holds pre-Save; these do not block it):
- Parameter values read through the accessibility tree and dialog text; the icon and Default Button options are not re-verified here (visual only, as in EXP-055).
- No server-side confirmation; the grouping exists in the Designer session only until the single Save (not yet performed).
- Both Parameters dialogs were opened read-only and closed with Cancel; no OK was used.

## 10. Evidence files written (T4)

Under `evidence/EXP-058/`:
- `T4-sequence1-set-values-migration-and-pre-save-grouping-report.md` (this report).
- Snapshots `t4-snapshot-00` to `t4-snapshot-10` (11 files): `t4-snapshot-00-designer-fresh-pre-sequence1.md`, `t4-snapshot-01-sequence1-selected-readback-pre-change.md`, `t4-snapshot-02-event-dropdown-open-sequence1.md`, `t4-snapshot-03-event-combobox-typed-FX_Test-before-commit-sequence1.md`, `t4-snapshot-04-after-tab-commit-sequence1-grouping.md`, `t4-snapshot-05-prompt-row-under-FX_Test-readback.md`, `t4-snapshot-06-prompt-parameters-dialog-readback-read-only.md`, `t4-snapshot-07-after-prompt-parameters-cancel.md`, `t4-snapshot-08-set-values-row-under-FX_Test-readback.md`, `t4-snapshot-09-set-values-parameters-dialog-readback-read-only.md`, `t4-snapshot-10-final-grouping-after-cancels-dirty-state.md`.
- Screenshots: `t4-01-sequence1-selected-pre-change-event-StdFormRefreshCompleted.png`; `t4-02-event-dropdown-open-sequence1-FX_Test-listed.png`; `t4-03-intermediate-sequence1-event-typed-FX_Test-before-commit.png`; `t4-04-after-tab-commit-sequence1-grid-grouping-as-rendered.png`; `t4-05-prompt-parameters-dialog-readback-before-cancel.png`; `t4-06-set-values-parameters-dialog-readback-before-cancel.png`; `t4-07-final-grouping-FX_Test-two-actions-save-enabled-dirty.png`.

No other file was written in T4.

## 11. Knowledge state (T4)

| Finding | State |
| --- | --- |
| Sequence 1 Set Values moved to FX_Test by typed editable entry + Tab commit | observed (single session) |
| Final pre-Save grouping: one FX_Test group, seq 0 Prompt and seq 1 Set Values, both enabled, no StdFormRefreshCompleted, exactly two handler actions | observed (single session; pre-Save) |
| Event picker offered `FX_Test` in T4 (not offered in T3) | observed; cause unresolved |
| Prompt and Set Values parameter readbacks after the move | observed (single session; dialogs read and cancelled) |
| Designer dirty, Save enabled, not saved | observed |
| Replay-verified findings | none |

## 12. Next permitted step (NOT STARTED)

Per the coordinator's sequence: FX_RefreshButton Primary `StdFormRefresh` → `FX_Test` (one change), then the full before-Save comparison against the T1/T2 baseline, then the single Designer Save. None of these was performed in T4. The Designer must not be saved until all of them are validated.
