# EXP-133 T5 — Global persistent variable FX_vLoginResult (2026-10-25/26)

Scope: one Global Object `FX_vLoginResult` created through Edit > Variable > Global Objects > blue "+" > New. No Designer Form Save, no close/reopen, no runtime action, no component, no Form Script edit, no asset edit, no generated-variable change.

## Pre-mutation state (observed)

- Designer tab `FX_LoginPortal` selected (fresh snapshot, tab list read first). Header `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`. Properties: Name `FX_LoginPortal`, Version `User version for user anton.ramos@3mworks.com.ph`, Script Language `Visual C#`.
- Save button not disabled (enabled, dirty from T2–T4). Undo/Redo disabled.
- Console footer: 2 errors / 0 warnings (unchanged on every snapshot in T5).
- `FX_BridgeTest` tab open and not touched.
- Evidence: `t5-00-designer-before-global-variable-fx-loginportal.png`.

## Absence check before creation (observed; tenant-wide absence not proven)

- Global Objects dialog (opened from Edit > Variable) sorted list shows `FX_vEcho` immediately followed by `gbgc_bg`; no `FX_vLoginResult` in the gap where it would sort (`t5-01`).
- Filter text `LoginResult` was typed into the dialog search box (`t5-02`). The list did **not** refresh (same filter-refresh limitation recorded in EXP-132). The result therefore rests on the sorted-list adjacency, not on a validated filter in this session. T1 had a validated search with the `FX_vEcho` positive control (`t1-11`–`t1-13`, `T1-preflight-summary.md`).
- T1 and T4 found no `FX_vLoginResult` in the Global list; T5 agrees. Case-insensitive search: `vloginresult` (lower case) returned no rows in T1 (`t1-13`).
- Limit: the Global list may be virtualised and may not show every tenant-wide Global object (the EXP-130 `vInventoryJson` gap). Tenant-wide absence remains unproven.

## Creation (observed)

1. Blue "+" (leftmost bottom toolbar button of the Global Objects Variables pane, ref e885) opened a `New` dialog with only a `Name:` field (`t5-03`). Name is the only pre-commit field, consistent with EXP-132.
2. Name typed as `FX_vLoginResult` (`t5-04`, pre-OK): field reads `FX_vLoginResult`.
3. New dialog OK (one click). The list then shows `FX_vLoginResult` selected between `FX_vEcho` and `gbgc_bg`. Properties (`t5-05`):
   - Name: `FX_vLoginResult`
   - Description: blank
   - Value: blank
   - Persistent: `True`
   - Global: `True`
   - Version: `User version for user anton.ramos@3mworks.com.ph` (full text read from the accessibility tree; the on-screen cell truncates it)
4. Parent Global Objects OK (one click, dialog-level commit, not a Designer Form Save). The dialog closed without an error dialog (`t5-06`). Designer Save remained enabled (not disabled in the find readback; not clicked).

## Read-only reopen (observed)

- Edit > Variable reopened the Global Objects dialog (`t5-07`). `FX_vLoginResult` appears once in the sorted list, between `FX_vEcho` and `gbgc_bg`. It is rendered in blue text; the meaning of the colour is not interpreted here (unresolved).
- Selecting the row (view only) showed the same properties (`t5-08`): Name `FX_vLoginResult`; Value blank; Persistent `True`; Global `True`; Version `User version for user anton.ramos@3mworks.com.ph`.
- Dialog closed with **Cancel** (not OK), so no further commit.

## Designer Details > Variables check (observed)

- Designer Details > Variables > `Global - Persistent` expanded (view only, `t5-09`). The visible window reads `ccvw_OutputFormatInlineAll`, `ccvw_PrinterName`, `FX_vEcho`, `gbgc_bg`. `FX_vLoginResult` is **not** listed in that window.
- This matches the EXP-132 observation: the new Global object appeared in the Global Objects list after commit but not in the Designer tree right after commit. Per the brief, no second variable was created. Tree visibility is expected to be delayed or refreshed by the later ordinary Save; that is not proven here.

## Final Designer state (observed)

- `FX_LoginPortal` remains the active Form tab, User scope, Script Language `Visual C#`.
- Save enabled (dirty; not clicked). No dialog open. Console 2 errors / 0 warnings.
- Not done (by instruction): ordinary Designer Form Save; close/reopen; runtime open; Sign in; `FX_LoginControl` insertion; Form Script edit; asset edits; any generated-variable change.

## Action ledger (T5, approximate)

- Tab list 1; tab select 1.
- Snapshots 3 (one untargeted at start; two dialog-scoped refreshes `e619`).
- Clicks 10: Edit 2; Variable menu item 2; blue "+" 1; New dialog OK 1; parent Global Objects OK 1; Global Objects row select 1; Global Objects Cancel 1; Designer `Global - Persistent` group row 1.
- Text entries 2: filter `LoginResult` (view filter, did not refresh); Name field `FX_vLoginResult`.
- Finds about 16 (read-only).
- Screenshots 10 (`t5-00` to `t5-09`).
- Browser JavaScript 0. Recovery usage 0 (no ref-not-found errors).
- Notes: the "Variable" menu item opens the Global Objects dialog directly (no submenu was needed).

## Mutation accounting

- Global Objects created: 1 (`FX_vLoginResult`). Other variables created, renamed or deleted: 0. Form-level variables created: 0. UserCtrl variables touched: 0.
- Dialog commits: New OK 1; parent Global Objects OK 1. Read-only reopen Cancel 1.
- Designer Form Saves 0; close/reopen 0; runtime open/Sign in/close 0; components 0; Form Script edits 0; asset edits 0.
- Top-toolbar Delete, Regenerate Form, Unload, FormSync, metadata operations: 0.

## Evidence (T5)

- `t5-00-designer-before-global-variable-fx-loginportal.png`: pre-mutation Designer, User scope, Visual C#, console 2/0 (not an absence proof on its own).
- `t5-01-global-objects-dialog-opened-from-edit-variable-readonly-state.png`: Global Objects opened; sorted list shows `FX_vEcho` → `gbgc_bg` with no `FX_vLoginResult`.
- `t5-02-global-objects-search-loginresult-precreate-absence.png`: filter text typed; list did not refresh (limitation).
- `t5-03-new-global-object-dialog-precommit-name-only.png`: New dialog with Name only.
- `t5-04-new-dialog-name-fx-vloginresult-before-ok.png`: name typed, before New OK.
- `t5-05-after-new-ok-fx-vloginresult-in-global-dialog.png`: new object selected; Name, blank Value, Persistent True, Global True, Version visible.
- `t5-06-designer-after-parent-global-objects-ok-before-readonly-reopen.png`: Designer after parent OK; dialog closed; Save enabled; Designer tree still collapsed.
- `t5-07-global-objects-readonly-reopen-fx-vloginresult-list.png`: reopened read-only; one `FX_vLoginResult` in the list.
- `t5-08-global-objects-readonly-fx-vloginresult-properties.png`: reopened read-only properties (Name, Value blank, Persistent, Global, Version); closed with Cancel after this capture.
- `t5-09-designer-details-variables-global-persistent-after-cancel.png`: Designer `Global - Persistent` window; `FX_vLoginResult` not listed.

## Limitations

- Absence before creation is supported by the rendered sorted list only; the filter did not refresh (repeat of EXP-132). Tenant-wide absence not proven.
- The Designer tree did not show `FX_vLoginResult` in this session after commit. Persistence after an ordinary Designer Save: not tested here (T6).
- Meaning of the blue text colour in the Global list: not interpreted.
- Global versus `ThisForm.Variables` / `WSForm.getVarValue` resolution: out of scope and not investigated (EXP-130 U-1).
- Not claimed: runtime behaviour, compile success, cross-session durability, replay verification, real authentication.
