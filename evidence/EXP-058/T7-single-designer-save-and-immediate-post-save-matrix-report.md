# EXP-058 T7 — pre-Save gate, the single native Designer Save, and the immediate post-Save AC-5 matrix

Run `R-20261011-175814-gBsz`, experiment EXP-058, cycle 8, task T7.
Worker session `58915b7d-301b-463b-b9b2-c6b7146c1118`; task_message_id `302f1d6a-af57-4ca9-9b41-cb6518eae9c9`.
Date: 2026-10-11. Editing scope: User (`ScopeName: anton.ramos@3mworks.com.ph`). Target Form `FX_Items`.

## 0. Outcome

- **One native Designer Save performed and succeeded.** Native confirmation `Form [FX_Items] and global object(s) were saved.` (accessibility tree, `t7-snapshot-07`). Save, Regenerate Form, Undo, and Redo are disabled afterward. No error dialog.
- **Designer state now:** the same FX_Items User-scoped Form is open and clean (Save disabled). FX_RefreshButton is selected. Details panel on Components. No dialog open. The Designer has **not** been closed or reopened in T7.
- **Immediate post-Save readback (AC-5 matrix, §4):** the single `FX_Test` group with both original actions in order and enabled; no `StdFormRefreshCompleted`; native FX_RefreshButton Primary `FX_Test`; Initial Command `Refresh`; FX_VarTest definition unchanged.
- **Unresolved discrepancy (preserved per amendment):** the Components grid "Event to generate" for FX_RefreshButton still reads `StdFormRefresh` immediately after the Save. Per the amendment it is excluded from the pre-Save comparison and **must equal `FX_Test` after the separate close/reopen**. It has not been checked against that requirement yet.
- **Separate close/reopen verification: NOT authorized within T7.** It requires the next authorization.

## 1. Amendment record (cycle 8)

As stated in the T7 bounded instruction, the amended AC-4 gate:
- accepts the native FX_RefreshButton Events > Primary value `FX_Test` before Save;
- excludes the Components grid "Event to generate" value from the pre-Save comparison;
- requires that grid value to equal `FX_Test` after the later Designer close/reopen.

Limitation: this worker received the amendment through the T7 bounded instruction. The full operator amendment text was not separately available to this worker. Recorded in the experiment record (§T7).

## 2. Pre-Save gate (read-only; fresh snapshot `t7-snapshot-00`)

| Check | Observed | Evidence |
| --- | --- | --- |
| Tab list before selection | tab 0 current (Designer); tab 1 runtime (not touched) | tab list |
| Identity | Form `FX_Items`; footer `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph` | `t7-snapshot-00` line 760 (footer) |
| Save enabled (dirty) | `button "Save" [ref=e16]` enabled | `t7-snapshot-00` line 11 |
| Dialogs | none | `t7-snapshot-00`, `t7-snapshot-04` |
| Session challenge / error | none | all snapshots |
| Handler group | one `FX_Test`: seq 0 Prompt (`false`, `PROMPT(Hello World) ICON(DEFAULT) RESPONSE(OK()) DEFAULTRESPONSE(OK)`), seq 1 Set Values (`false`, `SETVARVALUES(FX_VarTest=P(FX_Description))`) | `t7-snapshot-04` lines 297–309 |
| No `StdFormRefreshCompleted` | plain search: 0 matches | `t7-snapshot-04` |
| FX_RefreshButton native Events > Primary | `FX_Test` | `t7-snapshot-06` line 907 |
| FX_RefreshButton Name, Caption, Type, Binding Type, Size, Location | `FX_RefreshButton`, `FX_Refresh`, PushButton, None, `14.25; 1.89`, `12.1666666666667; 5.25` | `t7-snapshot-06` lines 545, 591, 602, 817, 1055, 1063 |
| Grid "Event to generate" | `StdFormRefresh` (excluded by amendment; unresolved) | `t7-snapshot-05` line 511 |

Gate outcome: **passed**. Save performed once after the gate passed.

## 3. Interaction log (T7)

- Accidental view-state change: a click intended for the Event Handlers tab was reported by the tool as `#tool-5000` and collapsed the Details panel. Restored by one view-only click on the Details expand control (ref `e1041`; the tool reported `getByLabel('Expand Panel')`). Restoration confirmed by screenshot `t7-02` and by the restored tablist in `t7-snapshot-03`. No metadata change resulted.
- Event Handlers tab, Components tab, FX_RefreshButton row, and Form and Variables tabs were view or selection only.
- **The Save:** toolbar Save clicked once (ref `e16`; the tool reported `#ext-element-57`). The resulting UI state (native confirmation text, Save disabled) identifies that the Save executed. Save clicks: **1**.

## 4. Immediate post-Save AC-5 matrix (no reopen; `t7-snapshot-07` to `-13`)

| Item | Pre-Save (gate) | Post-Save readback | Result |
| --- | --- | --- | --- |
| Save result | Save enabled | native toast `Form [FX_Items] and global object(s) were saved.` (`t7-snapshot-07` line 1141) | **saved** |
| Save / Regenerate / Undo / Redo | enabled / enabled / enabled / disabled | all **disabled** (`t7-snapshot-07` lines 10–55) | **clean** |
| Error dialog | none | none | **no error** |
| Identity & scope | FX_Items, User, anton.ramos | same (`t7-snapshot-07` line 1133; `t7-snapshot-09` line 662) | unchanged |
| Initial Command | Refresh | `Refresh` (`t7-snapshot-09` line 519) | unchanged |
| Handler group | one FX_Test, 2 actions | one `FX_Test`, seq 0 Prompt `false` + seq 1 Set Values `false`, same summaries (`t7-snapshot-08` lines 298–310) | unchanged |
| StdFormRefreshCompleted | absent | absent (plain search 0 matches; `t7-snapshot-08`) | unchanged |
| FX_RefreshButton Primary | FX_Test | `FX_Test` (`t7-snapshot-13` line 861) | unchanged |
| FX_RefreshButton other properties | per T6/T5 | Caption `FX_Refresh`, PushButton, Size `14.25; 1.89`, Location `12.1666666666667; 5.25` (`t7-snapshot-13`) | unchanged |
| FX_VarTest definition | Form - Temporary, Persistent False, Global False, `~LIT~()` | same (`t7-snapshot-10` lines 301–303, 465–492) | unchanged |
| Grid "Event to generate" (FX_RefreshButton) | StdFormRefresh | StdFormRefresh (`t7-snapshot-11` line 511; `t7-04`) | **unresolved; excluded by amendment; must equal FX_Test after reopen** |
| Other 16 components (post-Save) | per T1/T2/T6 | **not re-read after the Save in T7** (limitation) | not verified post-Save |

## 5. Screenshots and what they prove

- `t7-03-immediate-after-single-save-clean-state.png`: Save and Undo greyed; FX_RefreshButton selected in Properties (Caption `FX_Refresh`, Type PushButton); grid shows `StdFormRefresh` in "Event to generate"; User footer. **Does not show the toast** (the native confirmation is in the accessibility tree only).
- `t7-04-post-save-component-tab-primary-FX_Test-grid-StdFormRefresh-discrepancy.png`: same clean state; grid `StdFormRefresh`. **The Primary row is outside the visible frame**; the native Primary `FX_Test` rests on `t7-snapshot-13` line 861.
- `t7-01`, `t7-02`: restoration checks after the accidental collapse (Details panel layout); Variables tab active.

## 6. Action counts (T7)

| Action | Count |
| --- | --- |
| Tab lists | 1 |
| Tab selects | 0 |
| Designer clicks (total) | 12: 1 accidental (Details collapse); 1 Details restore; Event Handlers tab ×2; Components tab ×2; FX_RefreshButton row ×2; Form tab ×1; Variables tab ×1; Component tab ×1; **Save ×1** |
| **Designer Save** | **1** (the only Save) |
| Metadata-committing actions | 1 (the Save) |
| Regenerate, Undo, Redo | 0 |
| Handler, action, parameter, sequence, or enabled-state edits | 0 |
| FX_RefreshButton property edits | 0 |
| Typing / key presses | 0 / 0 |
| Dialogs opened | 0 |
| Designer close or reopen | 0 |
| Runtime tab selection, click, activation, prompt, typing | 0 |
| Snapshots saved | 14 (`t7-snapshot-00` to `-13`) |
| Screenshots saved | 4 (`t7-01`, `t7-02`, `t7-03`, `t7-04`) |
| Ref-not-found errors | 0 |
| Recovery allowance used | 0 |

Tool-locator disclosures (wrapper locator reported differently from the ref passed):
- `#tool-5000` for the Event Handlers tab ref `e355` (the click collapsed the Details panel);
- `getByLabel('Expand Panel')` for the restore ref `e1041`;
- `#ext-element-57` for the Save ref `e16`.
The Save and restore were identified by their resulting UI state, as in T3–T5.

## 7. Unexpected states

1. Accidental Details panel collapse (view state), restored and disclosed (§3).
2. The grid "Event to generate" value persists as `StdFormRefresh` through the Save (unresolved; amended exclusion).
3. The native toast is in the accessibility tree but not visible in the viewport capture.
4. Designer console: 4 errors (unchanged since T2; source unidentified; no diagnostics used).

## 8. Acceptance status (T7 scope)

- **AC-4 (amended):** pre-Save gate passed on the amended criteria: native Primary `FX_Test`; other button properties match the baseline; the grid "Event to generate" discrepancy is excluded by the amendment and preserved as unresolved. The other comparisons were established in T6 and not re-read in T7.
- **AC-5 (immediate):** Save succeeded once; Save disabled; no error dialog; post-Save readback of the handler group, absence of StdFormRefreshCompleted, native Primary `FX_Test`, Initial Command, and the FX_VarTest definition. **Supported with limits:** the toast is not visible in the screenshot; the SaveChanges response body was not captured; the other 16 components were not re-read after the Save.
- **AC-6 through AC-11:** not tested in T7. The close/reopen, runtime, and refresh steps follow in later tasks.

## 9. Designer state at end of T7

- FX_Items open as the sole Form tab; clean; Save disabled; Regenerate Form, Undo, Redo disabled.
- Details panel open on Components; FX_RefreshButton selected; Properties on Component tab.
- No dialog. No browser-native dialog. Runtime tab untouched.

## 10. Knowledge state (T7)

| Finding | State |
| --- | --- |
| Single native Designer Save succeeded (native confirmation; Save disabled afterward) | observed (single session) |
| Post-Save native Primary `FX_Test` and handler group (two actions, no old group) | observed (single session; Designer-session, not a durability claim) |
| Grid "Event to generate" `StdFormRefresh` immediately after Save | observed; cause unresolved; must equal `FX_Test` after reopen |
| FX_VarTest definition unchanged after Save | observed (single session) |
| Other 16 components post-Save | not observed in T7 |
| Replay-verified findings | none |

## 11. Repository confinement (T7)

Written by this worker in T7: `evidence/EXP-058/T7-single-designer-save-and-immediate-post-save-matrix-report.md`; `evidence/EXP-058/t7-snapshot-00` to `t7-snapshot-13`; `evidence/EXP-058/t7-01`, `t7-02`, `t7-03`, `t7-04` (PNGs); the EXP-058 experiment record (T7 section and status line). Tool-generated, gitignored captures under `evidence/playwright/` are not worker-authored.
