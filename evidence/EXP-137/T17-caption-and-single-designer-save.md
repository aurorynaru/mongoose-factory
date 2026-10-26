# EXP-137 T17 — Form Caption `FX_LoginUsers` and single ordinary Designer Save

Date: 2026-10-26. Run `R-20261026-104057-G85J`, cycle 21, task T17. Worker session `b0074ef8-29f6-4f0c-a1d8-09adae262105`.
Scope: A1 steps 4 and 5 only (Caption on the Form, one ordinary Designer Save). No close/reopen, no runtime, no record insert, no check-in, no wizard, no Save Template, no FormSync, no metadata unload, no vendor Form change, no component change.

## 1. Pre-edit guards (passed)

- Tab list (read-only), then tab 1 selected (Designer). Fresh untargeted snapshot taken.
- Open Form tab: `FX_LoginUsers` (URL `designer/default.aspx?MGForm=FX_LoginUsers`); the `IDOs` tab is present but not selected.
- Form Properties (Form tab selected): Name `FX_LoginUsers`; Caption blank; Version `User version for user <account>`; Device Type Default; Form Type Normal; Is Master True.
- Footer: `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` (`t17-00`).
- Primary Collection (Details > Collections, read-only tab selection, `t17-01`): `Primary Collection: FX_LoginUsers`.
- No dialog, no unsaved-change prompt, no session-expired modal, no Infor sign-in page. Save and Undo disabled before the edit.
- The Components tab left by T16 was not edited. Pane (00) remained the selected row; its trash control was not clicked.

## 2. Caption workflow (exact sequence and what happened)

| # | Action | Result |
|---|---|---|
| a | Click the Caption value cell (accessibility ref `e534`, inside the Form Properties Caption row) | The tool reported it executed `.mg-arrow-cell-icon`, i.e. the Caption **dropdown arrow**, not the text area. The string-resource combobox expanded with a list (`ApplyFullTextIndexScriptQuestion`, `CatalogNotExistNotice`, ...). Value still blank. Screenshot `t17-02`. No item was selected. |
| b | Click the Caption label cell (`e529`) to dismiss the list | The list closed; value still blank; Save still disabled. This was an empty-value blur and changed nothing. Screenshot `t17-03`. |
| c | Click the Caption value cell again (`e534`) | Reported `#ext-element-160`; the combobox expanded again with focus in the inline input (`combobox [expanded] [active]`). No item selected. Screenshot `t17-04`. |
| d | Press Control+A | Selected the current (blank) inline input content. |
| e | Type the literal value into the combobox input (tool used `#mg-gc-combo5038-inputEl`, filled `FX_LoginUsers`, no submit key) | Input displayed `FX_LoginUsers`, uncommitted, list still open. Screenshot `t17-05`. |
| f | Click the Caption label cell (`e529`) to commit by blur | List closed; Caption value cell reads `FX_LoginUsers`; Save and Undo enabled. Screenshot `t17-06`. |
| g | Fresh untargeted snapshot | Caption gridcell reads `FX_LoginUsers`; no combobox expanded; no dialog; Name `FX_LoginUsers`; User scope footer. |

- Enter: 0. Escape: 0. Tab: 0. Dropdown/list item selected: 0. String-resource option chosen: 0.
- Commit method: blur by clicking the Caption label cell, as specified. The value cell was reached by the Caption combobox; note the tool-generated locators targeted the arrow icon and the inline element. The edit was made on the Form-level Caption row only (Properties panel header Name `FX_LoginUsers`, treeitem Caption).

## 3. Single ordinary Designer Save

- Save clicked **once** (toolbar Save, ref `e31332`, from the fresh snapshot after the blur). Count: **1**.
- Immediate response: toast `Save` / `Form [FX_LoginUsers] and global object(s) were saved.` with a Close control; toolbar Save and Undo disabled (`t17-07`). The toast is an in-page notification, not a browser-native dialog.
- Settled state after 4 seconds (`t17-08`): toast gone; Save and Undo disabled; Caption `FX_LoginUsers`; Name `FX_LoginUsers`; Version `User version for us...`; Form Type Normal; Is Master True; footer `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`.
- The notification wording "global object(s) were saved" is generic, as in EXP-135 T6. The global objects included are not identified; no unrelated global object was intentionally changed.

## 4. Counts (T17)

- Caption commits (effective value change): **1** (`FX_LoginUsers`). Caption dropdown opens: 2 (both via the value-cell route; the first was dismissed by label blur with no change).
- Designer Save: **1**. Save retries: 0.
- Close / reopen of the Form: 0. Runtime open: 0. Record insert: 0. Check-in / check-out: 0. Wizard Finish: 0. Save Template: 0. Create Form prompt: 0. FormSync / metadata unload / deployment: 0.
- Component, binding or vendor edits: 0. Component-tree expansion attempts: 0 (not attempted in T17).
- Keyboard: Control+A x1; Enter 0; Escape 0; Tab 0.
- Clicks: Designer tab select, Details Collections tab (read-only), Caption value cell x2, Caption label cell x2, Save x1 = 6 browser clicks, plus one fill and one Ctrl+A.
- Recovery: fresh snapshot x3 (after tab select, after blur, after commit) and one corrected targeted snapshot (scoped to a tab element by mistake, then one untargeted). No Ref-not-found error occurred.
- Coordinate clicks: 0. Browser JavaScript authored by worker: 0. The tool wrappers print generated `Ran Playwright code` blocks; they are tool output. The `deny_browser_javascript` flag is still not verifiable by the worker.
- Screenshots: `t17-00` to `t17-08` (nine; all viewed).

## 5. Acceptance status after T17

- Caption on the Form: **observed** (Caption `FX_LoginUsers`, committed by blur, shown in the settled state).
- Designer Save: **observed** once, with the Form-specific notification `Form [FX_LoginUsers] ... saved`.
- Server persistence: **not established**. Save disabled and the save toast do not prove persistence; close/reopen is a later task.
- Bindings: not verified in T17 (per instruction, no component-tree expansion).
- Exactly-one Form inventory: not re-checked in T17 (no Select Form opened).

## 6. Unresolved items / qualifications

1. The Caption value cell's accessible reference resolved to the string-resource dropdown arrow, so the first edit route opened the list. It was dismissed with no selection. The second route opened the same list, then the inline input accepted the literal text. The result matched the requirement, but the tool's click target was not the text area as the instruction described.
2. The "global object(s)" wording is unexplained, as in EXP-135 T6.
3. Persistence, exact-one inventory, and binding readbacks remain pending.
4. The Details panel was expanded/collapsed during navigation; this is UI state only, not a Form property change.
