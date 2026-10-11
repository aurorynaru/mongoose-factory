# EXP-058 T3 — migration of sequence 0 Prompt to FX_Test (unsaved; no sequence 1 move; no Save)

Run `R-20261011-175814-gBsz`, experiment EXP-058, cycle 2, task T3.
Worker session `58915b7d-301b-463b-b9b2-c6b7146c1118`; task_message_id `eb8b32c5-2026-427d-8c64-d278c91376b3`.
Date: 2026-10-11. Editing scope: User (`ScopeName: anton.ramos@3mworks.com.ph`). Target Form `FX_Items`.

## 0. Outcome

- **Sequence 0 Prompt moved to `FX_Test`: observed, unsaved.** The change is visible in the grid, in the Event readback, and in the screenshot.
- **Entry method: native editable combobox entry.** `FX_Test` was **not** offered by the Event picker, so it was typed into the Event combobox's editable input.
- **Sequence 1 Set Values: NOT moved** (per instruction).
- **FX_RefreshButton: NOT changed.** No Save invoked. Designer is now dirty (Save and Undo enabled) with the Prompt migration pending a Save decision.
- **Safe to proceed to sequence 1?** The intermediate state is consistent and no prerequisite failed, so the same route can be used next. The sequence 1 move, the FX_RefreshButton change, and the single Save are still required, and the Save must not happen until all are validated. See §8.

## 1. Pre-mutation gate (fresh snapshot; read-only)

- `browser_tabs list` first (tab 0 current Designer; tab 1 runtime). No select was needed (tab 0 already current).
- Fresh snapshot `t3-snapshot-00-designer-fresh-pre-migration.md`: one Form tab `FX_Items`; Form Name `FX_Items`; Version `User version for user anton.ramos@3mworks.com.ph`; footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`; Save, Regenerate Form, Undo, Redo `[disabled]`; no dialog.
- Event Handlers tab opened (view only). Snapshot `t3-snapshot-01-event-handlers-grid-pre-migration.md`:
  - one group `StdFormRefreshCompleted` (line 296);
  - row seq `0`, Response Type `Prompt`, Disabled `false`, Parameters `PROMPT(Hello World) ICON(DEFAULT) RESPONSE(OK()) DEFAULTRESPONSE(OK)` (lines 298–301);
  - row seq `1`, `Set Values`, Disabled `false`, `SETVARVALUES(FX_VarTest=P(FX_Description))` (lines 305–308);
  - **no `FX_Test` group or row**.
- Screenshot `t3-01-pre-migration-handler-grid-one-group-two-actions.png`: the one group and both enabled rows are visible.
- All prerequisites matched. Proceeded.

## 2. Sequence 0 Prompt: selection and readback before change

- Clicked the Prompt grid cell (row seq 0; selection only). Snapshot `t3-snapshot-02-prompt-row-selected-properties-pre-change.md`.
- Details > Event To Handle readback: **Event `StdFormRefreshCompleted`** (line 339); Sequence `0`; Disabled `False`; Type `Prompt`; Parameters `PROMPT(Hello World) ICON(DEFAULT) RESPONSE(OK()) DEFAULTRESPONSE(OK)`.
- Screenshot `t3-02-prompt-row-selected-event-StdFormRefreshCompleted-pre-change.png`.

## 3. Event dropdown: was FX_Test offered?

- Clicked the Event value's dropdown arrow (one click). The combobox expanded (`combobox [expanded] [active]`, text `StdFormRefreshCompleted`, `listbox` with `option [selected]` on `StdFormRefreshCompleted`, snapshot `t3-snapshot-03-event-dropdown-open-options.md`, line 391).
- The listbox contains only built-in `Std*` events. The first option is `StdAppLaunchInbox` (line 398). No option begins with `FX_`, and no option is a non-`Std` name (anchored search: 0 matches).
- Because the list is alphabetical and `FX_` sorts before `Std`, a custom `FX_Test` event would have appeared at the top if it were offered. **`FX_Test` was not offered by the picker.**
- Screenshot `t3-03-event-combobox-dropdown-open-no-FX_Test-offered.png`. It shows the Event input with `StdFormRefreshCompleted` selected inside the open list. The input is editable (the text is highlighted as an input value).

## 4. Native editable entry of FX_Test

- Typed `FX_Test` into the Event combobox (`combobox` ref `e1513`, `submit=false`; the typed text replaced the selected `StdFormRefreshCompleted`). Snapshot `t3-snapshot-04-event-combobox-typed-FX_Test-before-commit.md`: combobox text `FX_Test` (line 392); grid still showed `StdFormRefreshCompleted` (line 296); Save still `[disabled]`. Screenshot `t3-04-intermediate-event-typed-FX_Test-before-commit.png`.
- **Commit method: Tab key (one press).** Enter was deliberately not used: the open list highlighted `StdFormRefreshCompleted`, and Enter could select that item instead of the typed value.
- Post-commit snapshot `t3-snapshot-05-after-tab-commit-event-state.md`: a new group `FX_Test` appeared above `StdFormRefreshCompleted` (line 296); the StdFormRefreshCompleted group contained only the Set Values row (lines 300–305); the Event readback reads `FX_Test` (line 336); **Save enabled** (line 11, no `[disabled]`); Undo enabled.
- Screenshot `t3-05-intermediate-after-prompt-event-commit-grid-FX_Test-group.png`: the FX_Test group is collapsed (⊞) at this point, so its child row is hidden. The StdFormRefreshCompleted group shows Set Values only.

## 5. Verifying the Prompt action's identity under FX_Test

- Grid Expand (toolbar, view only; ref `e1243`): snapshot `t3-snapshot-06-after-view-expand-grid-groups.md`. The FX_Test group now shows one row: seq `0`, `Prompt`, Disabled `false`, `PROMPT(Hello World) ICON(DEFAULT) RESPONSE(OK()) DEFAULTRESPONSE(OK)` (lines 296–301). The StdFormRefreshCompleted group shows one row: seq `1`, `Set Values`, Disabled `false`, `SETVARVALUES(FX_VarTest=P(FX_Description))` (lines 305–310).
- The Expand click cleared the handler selection, so the Event To Handle readback was empty in that snapshot. The Prompt row was re-selected (one click on its grid cell; selection only). Snapshot `t3-snapshot-07-prompt-row-under-FX_Test-selected-readback.md`: `[active]` Prompt row under `FX_Test` (line 299); Event Handler readback **`FX_Test`** (line 341); Sequence `0` (line 356); Disabled `False` (line 362); Type `Prompt` (line 377); Parameters `PROMPT(Hello World) ICON(DEFAULT) RESPONSE(OK()) DEFAULTRESPONSE(OK)` (line 386).
- No dialog and no open dropdown (grep count 0).
- Screenshot `t3-06-post-change-prompt-under-FX_Test-expanded-set-values-remains-under-StdFormRefreshCompleted.png`: FX_Test (expanded) > `0 Prompt false PROMPT(Hello World)…`; StdFormRefreshCompleted > `1 Set Values false SETVARVALUES(FX_VarTest=P(FX_Description))`; Event `FX_Test`, Sequence 0, Disabled False; Save and Undo enabled.

## 6. Verification before any further step

| Check | Result |
| --- | --- |
| Exactly one `FX_Test` group | yes (one group, line 296 of snapshot 06) |
| FX_Test group contains the Prompt action (seq 0) | yes; one row; not duplicated |
| StdFormRefreshCompleted group still contains a handler | yes: Set Values (seq 1) only; the Prompt has left it |
| Prompt parameters, seq, Disabled, Type unchanged | yes: summary identical; Sequence 0; Disabled False; Type Prompt |
| Set Values parameters, seq, Disabled unchanged | yes: seq 1, Disabled false, `SETVARVALUES(FX_VarTest=P(FX_Description))` |
| Handler actions total | 2 (one FX_Test, one StdFormRefreshCompleted) |
| FX_Test picker-offered | **no**; accepted by native editable entry |
| Save enabled (dirty) | yes (expected; no Save invoked) |
| FX_RefreshButton changed | no (not touched) |
| Dialog open | none |

## 7. Action audit (T3)

| Action | Count |
| --- | --- |
| Tab lists | 1 |
| Tab selects | 0 |
| Designer snapshots saved | 8 (`t3-snapshot-00` to `-07`) |
| Screenshots saved | 6 (`t3-01`–`t3-06`) |
| Clicks (Event Handlers tab; Prompt row; Event dropdown arrow; grid Expand; Prompt row re-selection) | 5 |
| Event combobox typing | 1 (`FX_Test`; no Enter) |
| Key presses | 1 (Tab, to commit) |
| Metadata-changing actions | **1**: the Event association of the Prompt action (`StdFormRefreshCompleted` → `FX_Test`) |
| Designer Save | 0 |
| Regenerate, Undo, Redo | 0 |
| Sequence 1 change | 0 |
| FX_RefreshButton change | 0 |
| Form open, close, reopen | 0 |
| Runtime tab selection, click, activation, prompt, dismissal, typing | 0 |
| Diagnostics, User Preferences, cache, FormSync, SQL, scripts, browser JavaScript | 0 |
| Ref-not-found errors | 0 |
| Fresh-snapshot recovery allowance used | 0 |

## 8. Unexpected states, tool-locator disclosure, and safety

1. **Tool-generated locators differed from the refs I passed.** The wrapper reports the locator it actually used. Two actions disclose this:
   - The dropdown-arrow click was passed ref `e1436`, but the tool wrapper reported `page.locator('.mg-arrow-cell-icon').first().click()`. The resulting state identified the Event combobox (`combobox [expanded] [active]` with `StdFormRefreshCompleted` selected, §3), and the later commit shows that combobox was the one changed. The identity is therefore established by the resulting state, not by the wrapper's selector.
   - The Expand click was passed ref `e1243`, but the wrapper reported `page.locator('#button-4895').click()`. The result was the Event Handlers grid's group expansion (FX_Test expanded). No other panel changed in the screenshots.
   - The typing action was passed the Event combobox ref `e1513`, but the wrapper reported `getByRole('tabpanel', { name: 'Event Handlers' }).getByLabel('', { exact: true }).fill('FX_Test')`. The result was `FX_Test` in the Event combobox (snapshot 04, line 392) and the committed Event readback `FX_Test`. The identity is established by the resulting state.
2. The FX_Test group collapsed after the commit, and the Expand toggle cleared the handler row selection. Both are view-state effects; both were verified and recorded.
3. The Designer console count is 4 errors (up from 3 before T2's Pane selection; unchanged through T3). Source still unidentified.
4. No unexpected association: the Prompt left StdFormRefreshCompleted and joined FX_Test; no duplicate row; no new handler; no action added or removed.

## 9. Evidence files written (T3)

Under `evidence/EXP-058/`:
- `T3-sequence0-prompt-migration-report.md` (this report).
- Snapshots: `t3-snapshot-00-designer-fresh-pre-migration.md`, `t3-snapshot-01-event-handlers-grid-pre-migration.md`, `t3-snapshot-02-prompt-row-selected-properties-pre-change.md`, `t3-snapshot-03-event-dropdown-open-options.md`, `t3-snapshot-04-event-combobox-typed-FX_Test-before-commit.md`, `t3-snapshot-05-after-tab-commit-event-state.md`, `t3-snapshot-06-after-view-expand-grid-groups.md`, `t3-snapshot-07-prompt-row-under-FX_Test-selected-readback.md`.
- Screenshots: `t3-01-pre-migration-handler-grid-one-group-two-actions.png`; `t3-02-prompt-row-selected-event-StdFormRefreshCompleted-pre-change.png`; `t3-03-event-combobox-dropdown-open-no-FX_Test-offered.png`; `t3-04-intermediate-event-typed-FX_Test-before-commit.png`; `t3-05-intermediate-after-prompt-event-commit-grid-FX_Test-group.png`; `t3-06-post-change-prompt-under-FX_Test-expanded-set-values-remains-under-StdFormRefreshCompleted.png`.

No other files were written in T3.

## 10. Acceptance status (T3 scope)

| AC | Status after T3 | Basis |
| --- | --- | --- |
| AC-3 (partial: sequence 0 only) | Sequence 0 supported with limits: Prompt under FX_Test with original parameters, seq, Disabled; picker did not offer FX_Test (native entry used); sequence 1 still pending; exactly two handler actions in total after T4 | `t3-snapshot-06`, `t3-snapshot-07`, `t3-06`, `t3-03` |
| AC-4 | Not tested (requires FX_RefreshButton Primary change and full pre-Save comparison) | — |
| AC-5 onward | Not tested | — |

Limits: the post-change readback is the same Designer session; the Event readback is from the handler's Details panel, not a saved state; the tool-locator discrepancies in §8.1 are disclosed; the Designer is dirty (uncommitted).

## 11. Knowledge state (T3)

| Finding | State |
| --- | --- |
| Event picker for a handler's Event did not offer `FX_Test` (rendered list contains only built-in `Std*` events, alphabetical, first entry `StdAppLaunchInbox`; exact option count not established) | observed (single session) |
| Editable Event combobox accepts typed `FX_Test`; commit by Tab moves the Prompt into the FX_Test group | observed (single session) |
| Enter as commit key not tested (deliberately avoided: highlighted list item risk) | not tested |
| Prompt's parameters and seq/Disabled unchanged after the move | observed (single session; summary-level only; the parameters dialog was not reopened) |
| Designer dirty with Save enabled after the Prompt move | observed (single session) |
| Replay-verified findings | none |

## 12. Next permitted step (NOT STARTED)

The sequence 1 Set Values action is the next migration (same route: select its row, open the Event combobox, type `FX_Test`, commit with Tab, verify). This needs an explicit coordinator or operator instruction. Then FX_RefreshButton Primary (one change), the full pre-Save comparison, and only then the single Save. The Designer must not be saved in the meantime.
