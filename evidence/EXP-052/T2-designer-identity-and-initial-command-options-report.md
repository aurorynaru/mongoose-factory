# EXP-052 T2 — Designer identity and Initial Command read-only preflight (cycle 1)

Run `R-20261011-122156-AVGD`, task T2, worker session `80110901-51e5-401b-b67c-96501827c2d0`, task_message_id `1bd5a768-f1aa-4a2f-a195-3bd3b258bbb8`. Date 2026-10-11. Configuration `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`. Experiment record: `experiments/EXP-052-hello-world-part-3-fx-items-runtime-filtering-and-.md`.

**Result: Designer identity established (Name=FX_Items, ScopeType=User, ScopeName=anton.ramos@3mworks.com.ph). Initial Command baseline captured as blank; option list recorded; `Refresh` is offered as the exact option. No property changed, no Save, no Designer close, no runtime interaction. Stopped for coordinator review.**

## Scope dialog (inherited, resolved by OK once)

- Before action (fresh snapshot S2, tab 0): modal `Identify Your Editing Scope`; Scope combobox `User`; User combobox `anton.ramos@3mworks.com.ph`; OK, Cancel, Help. Both values were the preselected ones.
- Action: OK, once (`e305`). Not Cancel. No value changed. No unload warning or prompt appeared.
- After (S2 re-snapshot): dialog gone; status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`; Save and Undo disabled.

## Form identity (verified before any property action)

Opened through the Designer Form menu recent-forms entry `FX_Items` (one click, position after the separator following Sign Out in the menu; the menu items have no accessible names, so the entry was identified from the screenshot `t2-01`). The Designer URL then carried `?MGForm=FX_Items` and the tab `FX_Items` was selected.

Properties (Form level, accessibility text):
- Name `FX_Items`
- Description (blank)
- Caption (blank)
- Version `User version for user anton.ramos@3mworks.com.ph` (truncated visually as `User version for us…`)
- Device Type `Default`
- Form Type `Normal`
- Is Master `True`

Status bar: `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`. Toolbar Save disabled; Undo disabled.

Screenshot `t2-02` (viewed): Designer tab `FX_Items`; Properties Name `FX_Items`; Version `User version for us…`; Device Type Default; Form Type Normal; Is Master True; status bar User scope; Save and Undo greyed. Shows the identity and clean state. Does not show the full Version string (the accessibility tree gives it) and does not prove the Form's ScopeType/ScopeName beyond the status bar and the Version text.

Note: the Designer canvas shows a design-time preview (starred row `1`, `* Item`, Cost `0.00`). That is the designer's own rendering, not a runtime state, and it is not treated as evidence of a persisted row.

## Behavior group and Initial Command baseline

- Selecting the `Behavior` row (one click) selected it but did not expand it (`t2-03` shows the row highlighted; description pane reads `Behavior`).
- One ArrowRight press on the selected row did not expand it either.
- Corrected attempt: the Properties panel's own Expand toolbar control (plus-box icon, one click). This expanded all property groups. Nothing was changed. The Behavior group then showed its rows.
- Screenshot `t2-04` (viewed): Behavior group expanded. Initial Command row shows a blank value with a dropdown arrow. Adjacent rows: Script Language `Visual Basic`; Close Box `True`; Minimize/Maximize `True`; Filter Form blank; Enable Advanced Filter `False`.

**Initial Command baseline (unchanged): blank (no visible value).** The accessibility tree exposes the value cell with no text. Interpretation: the property has no value set in this Form version, which would correspond to the default. The default is not established by this read; the transcript's narrated default is `Add` and was not treated as the observed value.

## Option list (read-only; no option selected)

The dropdown arrow was clicked once to open the list. Options actually offered, in order (accessibility `listbox` and screenshot `t2-05`):

| # | Offered option (exact text) | Transcript label (for comparison) |
| --- | --- | --- |
| 1 | `Refresh` | `Refresh` (exact match) |
| 2 | `Filter` | `Filter` (exact match) |
| 3 | `FilterInPlace` | `Filter-in-Place` (the UI text has no hyphens or spaces) |
| 4 | `Add` | `Add` (exact match) |
| 5 | `Event <eventname>` | `Event` (the UI shows a parameter placeholder) |

- `Refresh` is offered as the exact option: **confirmed**.
- In the open list, `Refresh` was shown highlighted (focus or hover highlight). The value cell stayed blank after closing the list, so no selection was committed. The highlight is not treated as a selection.
- The list was closed with one Escape key press. No option was clicked. Post-close screenshot `t2-06` (viewed): list closed; Initial Command value still blank; row highlighted; Save greyed.

## Designer state after T2 (fresh snapshot S8)

- Tab 0 `FX_Items` selected; Designer URL `?MGForm=FX_Items`.
- Save disabled; Undo disabled; no dialog; no open list; status bar User / anton.ramos.
- Initial Command value cell selected (accessibility `[active] [selected]`), value blank.
- Designer state: clean (no pending change visible).

## Baseline Form properties for later comparison (AC-7)

Recorded from the accessibility tree (S8) so the post-change check has a precise list:

| Group | Property | Baseline value |
| --- | --- | --- |
| Design | Name | `FX_Items` |
| Design | Description | blank |
| Design | Caption | blank |
| Design | Version | `User version for user anton.ramos@3mworks.com.ph` |
| Design | Device Type | `Default` |
| Design | Form Type | `Normal` |
| Design | Is Master | `True` |
| Appearance | Theme Class | blank |
| Appearance | Foreground Color | `#000000` |
| Appearance | Icon | blank |
| Behavior | **Initial Command** | **blank (target property)** |
| Behavior | Script Language | `Visual Basic` |
| Behavior | Close Box | `True` |
| Behavior | Minimize/Maximize Box | `True` |
| Behavior | Filter Form | blank |
| Behavior | Enable Advanced Filter | `False` |
| Help | Help Context ID | `-1` |
| Help | Help File Name | blank |
| Layout | Splitter | `Vertical` |
| Layout | Splitter Position | `11` |
| Layout | Pane 0 Scroll Bars | `Never` |
| Layout | Pane 1 Scroll Bars | `As Needed` |
| Layout | Unit | `Char` |
| Layout | Size | `69; 21` |
| Layout | Synchronize FlexLayout attributes | `True` |

Background Color, Background Image, and Form Pages were not read as values (blank or button-only in the tree).

## Counts (T2)

- Browser clicks 6: scope dialog OK 1; Designer Form-menu open 1; recent-forms FX_Items 1; Behavior row select 1; Properties Expand 1; Initial Command dropdown open 1.
- Key presses 2: ArrowRight 1 (no effect); Escape 1 (closed the list, no selection).
- Finds 5 (`Open` 0 matches; `Initial Command` 0, 0, 1 match; `Refresh` 1 match in list).
- Content snapshots 8 (S1 to S8). Some action results returned auto-generated snapshot files without inline content; those are not counted as inspections.
- Screenshots 6 captured: `t2-01`, `t2-02`, `t2-03`, `t2-04`, `t2-05`, `t2-06`.
- Ref-not-found 1: the targeted snapshot of the Properties tabpanel after the list closed. One fresh untargeted snapshot (S8) was taken and used as the corrected inspection; it confirmed the state. Recovery stayed inside the allowance.
- Timeouts 0 in T2.
- Save 0; Initial Command selection 0; property edits 0; Designer close 0; Designer reopen 0 (this was the first Form open in this session's Designer, not a reopen); Refresh 0; F4 0; Filter-in-Place 0; queries 0; New 0; Delete 0.
- Runtime (Web Client) interactions 0 (tab 1 not selected or acted on in T2).
- Scope changes 0. Scope-dialog Cancel 0. Unload-warning acceptances 0. Prompts answered 0 (none appeared).
- Portal banner dismissals 0 (none appeared).
- `tools/` not read. No `git` or shell command run.

## Limits

- Single session, UI level, accessibility text and screenshots. No database read.
- The Version text is truncated visually; full text is from accessibility only.
- The Form's own ScopeType/ScopeName are inferred from the status bar and the Version text, not from a separate Form-level scope property.
- The blank Initial Command value is not explained. It is not treated as proof of the default.
- The Designer recent-forms entry was identified from the screenshot, because the menu items expose no accessible names.
- The FilterInPlace option label differs from the transcript's hyphenated term; the exact UI text is recorded.
- The `Event <eventname>` option shows a placeholder; no event name was tested.

## Files written by the worker (T2)

- `evidence/EXP-052/T2-designer-identity-and-initial-command-options-report.md` (this report)
- `evidence/EXP-052/t2-01-designer-form-menu-open-readonly.png` (Form menu, recent-forms list)
- `evidence/EXP-052/t2-02-designer-FX_Items-form-identity-user-scope-clean.png` (identity, clean)
- `evidence/EXP-052/t2-03-designer-behavior-group-after-expand-attempt.png` (Behavior row selected, not expanded)
- `evidence/EXP-052/t2-04-designer-behavior-expanded-initial-command-baseline.png` (expanded; blank baseline)
- `evidence/EXP-052/t2-05-designer-initial-command-options-list-open-readonly.png` (options list open)
- `evidence/EXP-052/t2-06-designer-initial-command-baseline-after-list-closed-no-selection.png` (list closed; value blank)
- `experiments/EXP-052-hello-world-part-3-fx-items-runtime-filtering-and-.md` (updated)

Tool-generated, not worker-authored: `evidence/playwright/` snapshot and console files written by the browser tool during T2, including the snapshot files returned by tool results (for example `evidence/playwright/page-2026-10-11T04-24-24-306Z.yml`, `page-2026-10-11T04-24-39-757Z.yml`, `page-2026-10-11T04-24-49-938Z.yml`, `page-2026-10-11T04-25-06-424Z.yml`, `page-2026-10-11T04-25-17-598Z.yml`) and console logs.

## Final browser state

- Tab 0: Designer, `FX_Items` Form open (User version), clean, Initial Command blank and unchanged, no open list, no dialog. Scope unchanged.
- Tab 1: Web Client, not acted on in T2. It still shows the runtime `FX_Items` tab with three rows (T1 state).
- No browser-native dialog. No unsaved-change prompt.
