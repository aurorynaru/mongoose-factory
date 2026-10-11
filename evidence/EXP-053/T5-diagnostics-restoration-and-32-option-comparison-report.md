# EXP-053 T5 — Restoration of General > Enabled to the T1 original, and read-only 32-option comparison (AC-8)

Run `R-20261011-131100-lCZw`, experiment EXP-053, cycle 4, task T5. Worker session `d8ab6b32-de4d-4dd5-ae58-c979edc1c3f6`, task_message_id `226b4106-b340-46bf-bc81-9c34c1829ab2`. Date 2026-10-11. Configuration `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`. Target Form `FX_Items` (User-scoped).

**Result: AC-8 PASSED for the same-session UI read-back.** General > Enabled was restored from ON to OFF (its T1 original) through the native label, confirmed once with the ordinary OK, and a fresh read-only reopen of Diagnostics shows all 32 visible options identical to the T1 baseline. The only option that differed from the T2 configured state was Enabled, and it now matches T1. Form Events, Form Event Handler Include, and Form Variable Value Changed were not clicked and remain as in T1.

Classification: **observed only** (single session, UI and accessibility read-back). Not replay_verified. No database-level persistence, cross-session, or causal claim.

## 1. Pre-change check (T2 expected state)

Fresh Web Client tab 1 selected. Runtime FX_Items open (three rows, `Description (Object 1 of 3)`, Save disabled, tab `Close Panel FX_Items` present). Diagnostic Log open on Log Messages.

- View > User Preferences... > Diagnostics opened (General tab selected).
- General > **Enabled `[checked]`** (ON), System Information unchecked, Security unchecked. This matches the T2 configured state, so no discrepancy. Screenshot `t5-01`.
- The other 31 options were not read before the change. The reopen in §3 compares all 32 options against T1, so any difference introduced before this task would surface there.

## 2. Restoration (one change, one OK)

1. Click on the visible `Enabled` label (ref f1e892). The checkbox input was **not** clicked; T2 showed that the input is intercepted by an ExtJS overlay, and the brief directs using the label. The click executed without timeout.
2. Postcondition check (targeted dialog snapshot): `checkbox "Enabled"` no longer `[checked]`. Screenshot `t5-02` (viewed): Enabled unchecked; System Information and Security unchecked; the dialog's status text reads `Enabled (Object 1 of 1)` (dialog focus indicator, not a data change).
3. Native OK (ref f1e698) clicked **once**. The dialog closed; URL returned to `favoriteContext=FX_Items`; the runtime FX_Items tab remained open and unchanged.

Only one option was changed in T5: General > Enabled, ON → OFF. No other option was clicked.

## 3. Read-only reopen and 32-option comparison (AC-8 check)

Reopened via View > User Preferences... > Diagnostics. Each tab was read by targeted snapshot of the dialog and a screenshot; no checkbox was clicked; the dialog was closed by its Close Window (X) control with no edit pending.

| # | Tab | Option (accessibility name) | T1 original | Final (T5 reopen) | Match |
| --- | --- | --- | --- | --- | --- |
| 1 | General | Enabled | OFF | **OFF** (`checkbox "Enabled"` unchecked, f1e1071) | Yes (restored) |
| 2 | General | System Information | OFF | OFF (f1e1076) | Yes |
| 3 | General | Security | OFF | OFF (f1e1081) | Yes |
| 4 | Form | Initialization (top level) | OFF | OFF (f1e1102) | Yes |
| 5 | Form | **Events** (top level) | **ON** | **ON** (f1e1107) | Yes |
| 6 | Form | Call Details > Scripts | OFF | OFF (f1e1112) | Yes |
| 7 | Form | Call Details > IDO Methods | OFF | OFF (f1e1117) | Yes |
| 8 | Form | Call Details > Form Server | OFF | OFF (f1e1122) | Yes |
| 9 | Form | Component > Initialization | OFF | OFF (f1e1127) | Yes |
| 10 | Form | Component > To/From Source | OFF | OFF (f1e1132) | Yes |
| 11 | Form | Component > List Building | OFF | OFF (f1e1137) | Yes |
| 12 | Form | Component > To/From Control | OFF | OFF (f1e1142) | Yes |
| 13 | Form | Component > User Interaction | OFF | OFF (f1e1147) | Yes |
| 14 | Form | Component > Dependent Notification | OFF | OFF (f1e1152) | Yes |
| 15 | Form | Event Handler > **Include** | **ON** | **ON** (f1e1157) | Yes |
| 16 | Form | Validator > Include | OFF | OFF (f1e1162) | Yes |
| 17 | Form | Variable > Initialization | OFF | OFF (f1e1167) | Yes |
| 18 | Form | Variable > **Value Changed** | **ON** | **ON** (f1e1172) | Yes |
| 19 | Form | Variable > Dependent Notification | OFF | OFF (f1e1177) | Yes |
| 20 | IDO Collections | Initialization | OFF | OFF (f1e1183) | Yes |
| 21 | IDO Collections | Commands | OFF | OFF (f1e1188) | Yes |
| 22 | IDO Collections | Update Overview | OFF | OFF (f1e1193) | Yes |
| 23 | IDO Collections | Load Overview | OFF | OFF (f1e1198) | Yes |
| 24 | IDO Collections | Update Values | OFF | OFF (f1e1203) | Yes |
| 25 | IDO Collections | Load Values | OFF | OFF (f1e1208) | Yes |
| 26 | IDO Collections | Dependent Notification | OFF | OFF (f1e1213) | Yes |
| 27 | Others | Interpreter > Overview | OFF | OFF (f1e1222) | Yes |
| 28 | Others | Interpreter > Scripts | OFF | OFF (f1e1227) | Yes |
| 29 | Others | Interpreter > Components | OFF | OFF (f1e1232) | Yes |
| 30 | Others | Interpreter > Variables | OFF | OFF (f1e1237) | Yes |
| 31 | Others | Interpreter > Properties | OFF | OFF (f1e1242) | Yes |
| 32 | Others | Interpreter > Others | OFF | OFF (f1e1247) | Yes |

Totals: **32 options compared; 32 match the T1 baseline; 0 differences.** Form group mapping for the duplicate names (`Include` ×2, `Initialization` ×3, `Dependent Notification` ×2) follows the T1 layout: the checked Include is the Event Handler one (f1e1157), the unchecked Include is the Validator one (f1e1162), and the three Initialization and two Dependent Notification boxes are identified by their group in the screenshot `t5-04`.

Screenshots (all viewed):
- `t5-03` (`evidence/EXP-053/t5-03-verify-reopened-General-tab-Enabled-OFF.png`): General tab; Enabled, System Information, Security all unchecked; Diagnostics selected in the category list. Proves the General values. Does not prove stored values.
- `t5-04` (`evidence/EXP-053/t5-04-verify-reopened-Form-tab-Events-Include-ValueChanged-ON.png`): Form tab; Events checked (top level); Event Handler Include checked; Validator Include unchecked; Value Changed checked; all other boxes unchecked; the group headings are visible, so the mapping is confirmed visually. Proves the Form values and their groups.
- `t5-05` (`evidence/EXP-053/t5-05-verify-reopened-IDO-Collections-tab-unchanged-from-T1.png`): IDO Collections; all seven unchecked.
- `t5-06` (`evidence/EXP-053/t5-06-verify-reopened-Others-tab-unchanged-from-T1.png`): Others > Interpreter; all six unchecked.

Accessibility evidence: the four tabs were read by targeted dialog snapshots (refs listed in the table above). The snapshots are inline tool output; they were not saved to a file by the worker.

## 4. Log and runtime observations during T5 (not part of the T4 opening)

- Opening User Preferences (the first View > User Preferences click at approximately 05:25:20) added **16 `VarValue` rows** to the Log Messages grid, timestamps 05:25:20.269 through 05:25:20.285. Names: `VarValue (StdCurFormPage)` and `VarValue (StdLastFormPage)`, `Changing from … to …, VariableType=Form Persistent=False`. These rows are **preference-navigation entries, not part of the controlled FX_Items opening**, as the brief anticipates. They are not attributed to the T4 opening.
- No new rows with timestamps after 05:25:20.285 were visible in the grid at the verification reopen snapshot. The OK click and the dialog closes did not produce visible rows in that snapshot. This is an observation of the rendered grid only.
- The original 20 T4 `FormEvent (FX_Items)` rows (05:22:07.945 and 05:22:07.976) remain in the grid, unchanged. `T4-controlled-opening-diagnostic-sequence.md` is not modified.
- The runtime FX_Items tab was **not** closed or reopened; it remains open and selected, with three records and Save disabled (checked at the end).

## 5. Final browser state

- Web Client tab 1 selected. Identity DEM. Runtime FX_Items tab present and selected (`find` `Close Panel FX_Items` returned the tab control). Diagnostic Log open on Log Messages.
- No User Preferences dialog open (`find` `User Preferences` returned no matches). No unsaved-change prompt, no browser-native dialog.
- Designer tab 0 untouched.

## 6. Action audit (T5)

- Clicks 13: View ×2; User Preferences... ×2; Diagnostics category ×2; **Enabled label ×1 (restoration)**; **OK ×1 (restoration confirmation)**; Form tab ×1; IDO Collections tab ×2 (one for the read, one re-selected for its screenshot); Others tab ×1; Close Window ×1.
- **Diagnostics option mutations: 1** (General > Enabled ON → OFF).
- **Diagnostics confirmations with OK: 1.**
- Diagnostics checkbox-input clicks: 0 (the label path was used directly; no input click was attempted in T5).
- Other Diagnostics option changes: 0. Events, Event Handler Include, Value Changed: 0 clicks.
- Read-only reopen of the Diagnostics page: 1 (ended by Close Window X, no OK).
- Tab list 1; tab select 1 (Web Client, at the start of T5); untargeted pre-check snapshot 1.
- Snapshots: 9 worker-issued (2 untargeted: pre-check, post-OK; 7 targeted to the dialog).
- Finds: 6 (`User Preferences`, `Diagnostics`, `User Preferences...`, `Diagnostics`, `Close Panel FX_Items`, `User Preferences` after close). All read-only.
- Screenshots: 6 (`t5-01` to `t5-06`).
- Waits: 0. Key presses: 0. Typing: 0. Mouse wheel: 0.
- Log clears: **0**. FX_Items opens: **0**. FX_Items closes: **0**. Collection loads (Refresh, F4, FiP, Get More Rows): **0**. Runtime data mutations: **0**. Designer actions: **0**. Designer saves: **0**. Initial Command changes: **0**. Reloads, navigations, reauthentications, browser restarts: **0**.
- Prompts or unsaved-change dialogs answered: 0. Browser-native dialogs accepted: 0.
- Browser evaluate or run-code calls: 0 (the `Ran Playwright code` lines are the tool's own generated locator snippets for each UI action).
- Timeouts: **0**. Ref-not-found: **0**. Errors: **0**. Authentication challenges: 0. Recoveries: 0.

Tool-generated (not worker-authored) browser files under `evidence/playwright/` for the T5 window: `console-2026-10-11T05-25-11-541Z.log`, `page-2026-10-11T05-25-16-796Z.yml`, `page-2026-10-11T05-25-20-523Z.yml`, `page-2026-10-11T05-25-24-731Z.yml`, `page-2026-10-11T05-25-33-465Z.yml`, `page-2026-10-11T05-25-40-006Z.yml`, `page-2026-10-11T05-25-44-128Z.yml`, `page-2026-10-11T05-25-47-917Z.yml`, `page-2026-10-11T05-25-51-805Z.yml`, `page-2026-10-11T05-25-55-833Z.yml`, `page-2026-10-11T05-26-00-796Z.yml`, `page-2026-10-11T05-26-04-529Z.yml`, `page-2026-10-11T05-26-08-983Z.yml`, `page-2026-10-11T05-26-14-952Z.yml`.

## 7. Limitations

- The "original" values are the values visibly established in T1 (Web Client display), not stored values. No database or server-side read was performed.
- The restoration is a client-side preference change confirmed by OK and by a same-session reopen. Persistence across sessions was not tested.
- The grid row count is observed in rendered DOM only; server-side log content is not established.
- Restoration used the label path directly. The checkbox input was intercepted by an ExtJS overlay in T2, and T5 did not attempt the input. This is a suspected environment rendering blocker, not a product finding.

## 8. Discrepancies and errors

None. Pre-change state matched T2. The label click produced the expected unchecked state on the first attempt. OK applied on the first attempt. The reopen matched T1 on all 32 options.
