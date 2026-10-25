# EXP-133 T3 — Script Language correction (Visual Basic → Visual C#)

Date: 2026-10-25 (task window; Designer clock rolled to 2026-10-26 during the task)
Scope: User (`ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`)
Form: `FX_LoginPortal` (Designer tab, `MGForm=FX_LoginPortal`), second tab `FX_BridgeTest` left open, untouched.

## Pre-change state (t3-00)

- Form Properties: Name `FX_LoginPortal`; Version `User version for user anton.ramos@3mworks.com.ph`; Device Type `Default`; Form Type `Normal`; Is Master `True`; Script Language `Visual Basic`.
- Components tree: `Pane (00)` only.
- Save: disabled (accessibility `[disabled]`; grey icon in capture).
- Status bar: `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`.
- Console baseline (Designer snapshot footer): 2 errors, 0 warnings.

## Language options (t3-01)

- Dropdown options offered: `Visual Basic` (selected), `Visual C#`. No confirmation dialog appeared.

## Change (t3-02)

- Selected `Visual C#` from the Script Language dropdown (one option click).
- Readback: Script Language `Visual C#`; Name, Version, ScopeType unchanged; Components `Pane (00)` only.
- At this point (immediately after the option click, Script Language editor still focused) a find on "Save" reported the Save button `[disabled]`.

## Dirty-state observation (t3-03, t3-04)

- After focus moved to the Details tab (Event Handlers click), the Save and Undo toolbar icons became enabled and a re-find on "Save" returned the button without `[disabled]`. The Regenerate Form button also became enabled. None of these were clicked.
- Interpretation: the Script Language change was committed (and the Form dirtied) when the editor lost focus, not at the moment of option selection. Single observation; timing not otherwise verified.
- The Form is therefore dirty and awaits the single ordinary Designer Save planned for T4. No Save was performed in T3.

## Generated-artifact inspection (read-only)

- Details > Event Handlers (t3-03): empty grids (no event handlers).
- Details > Variables (t3-04): root shows only `Global - Persistent` and `Global - Temporary` collapsed groups; no Form-level variable entries visible at the root. Group contents were not expanded.
- Details > Components (t3-02): `Pane (00)` only; no UserControl or generated UserCtrl variables.
- Form Script editor was not opened (no scripting action in T3). A generated Visual C# script scaffold, if any, is not established by T3 and must be read in T4.

## What this does and does not establish

- Establishes (single run, observed): the Form Script Language property offers Visual C#; selecting it and committing via focus change displays `Visual C#` and makes Save enabled; no confirmation dialog; no new Form, asset, variable or component appeared in the visible Designer trees.
- Does not establish: whether a Form Script scaffold was generated; that the language change is persisted (no Save performed); Visual C# compilation; any Global variable resolution.
