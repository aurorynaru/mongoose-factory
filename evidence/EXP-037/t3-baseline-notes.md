# EXP-037 — T3 target Form open and identity/Button baseline notes

Date: 2026-10-10
Run: R-20261010-093704-fZNX · Cycle 2 · Task T3
Worker session: `739c57f6-5187-451a-a0b9-e0c67297eeb3` (task_message_id `aa9e27b8-6818-476b-a19c-de7e0db7033f`)
Scope of this task: open `FX_SingleButtonLab01`, verify identity and the Button baseline, select the Button (selection only). **No property edit, no inline editor, no Event Handlers inspection or configuration, no Primary assignment, no Save, no close/reopen, no runtime activation, no second Designer, no scope change.**

## Result summary

| Check | Result | Evidence |
|---|---|---|
| Starting Designer | Designer tab (index 1) from T2, Form-less, Save disabled, status bar User scope. Web Client tab (index 0) was briefly current; re-selected the Designer. | `t3-01-preflight-designer-snapshot.md` (captured while the Web Client was current; read only the tab list), `t3-02-designer-preflight-snapshot.md` (Designer, after selection) |
| Selection path | Top-bar **Form** menu → recent-forms entry `FX_SingleButtonLab01` (one click). Supported Designer path (same as EXP-036 T11). Not a cold URL: the `MGForm` parameter was set by the menu selection. | `t3-03-form-menu-open-snapshot.md`, `t3-04-form-menu-recent-list-viewport.png`, `t3-05-after-recent-select-snapshot.md` |
| Recent-forms entries | `FX_SingleButtonLab01` appears **once** in the list. The list does not show scope, so scope identity comes from the Version property and status bar (see below). | `t3-04-form-menu-recent-list-viewport.png` (viewed) |
| Form tab | One tab: heading `FX_SingleButtonLab01` (selected, closable control present). | `t3-05-after-recent-select-snapshot.md` lines 210–214 |
| Form Name | `FX_SingleButtonLab01` (Properties, Design > Name). | `t3-05-after-recent-select-snapshot.md` lines 253, 362 |
| **Form version identity** (Form properties, Version row) | `User version for user anton.ramos@3mworks.com.ph` (full value from snapshot; the viewport truncates to `User version for us…`). | `t3-05-after-recent-select-snapshot.md` line 277; `t3-06-form-opened-viewport.png` |
| Form properties | Device Type `Default`; Form Type `Normal`; Is Master `True`; Caption blank. | `t3-05-after-recent-select-snapshot.md` lines 285–301; `t3-06-form-opened-viewport.png` |
| **Designer editing-scope footer** (separate from Version) | `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` | `t3-05-after-recent-select-snapshot.md` line 340; `t3-06-form-opened-viewport.png` (bottom-left) |
| Clean state | Save `[disabled]`; Regenerate Form disabled; Undo disabled; no dialog or alert in the tree. | `t3-05`, `t3-10-button-selected-snapshot.md` lines 10–13, 52–53 |
| Components (complete) | Root `Pane (00)` with exactly **one** child row: `FX_SingleButton01`, Type `PushButton`, Data Source blank, Pane `0`, Container blank, Tab `0`, Event to generate blank, Component Class blank. | `t3-09-components-expanded-snapshot.md` lines 251–280; `t3-11-button-selected-property-grid-viewport.png` (viewed) |
| Canvas | One blue button captioned `Factory Test Button` at roughly (450–565, 250–285), inside the grid; no other visible control. | `t3-06-form-opened-viewport.png`, `t3-11-…png` (viewed) |
| Button identity (selected) | Properties header `FX_SingleButton01 (Button)`; Name `FX_SingleButton01`. | `t3-10-button-selected-snapshot.md` lines 289, 319; `t3-11-…png` |
| Button Caption | `Factory Test Button` (read-only; not edited). Literal vs string-resource representation **not established**. | `t3-10-…snapshot.md` lines 335; `t3-11-…png` |
| Button style Type | Grid `PushButton` (not the literal word "Button"). Component type reading "Button" comes from the header `(Button)` and the Toolbox row, as in EXP-036. | `t3-10-…snapshot.md` lines 346; `t3-11-…png` |
| Button other props | From Device Master `True`. Appearance, Behavior, Data Source, **Events**, Help, Inheritance, Layout, Miscellaneous groups **collapsed and not read**. | `t3-10-…snapshot.md` lines 361–412; `t3-11-…png` |

## Form-version vs scope-footer distinction (explicit)

- **Confirmed Form-version identity:** the Form's Properties row `Version` reads `User version for user anton.ramos@3mworks.com.ph`. This is the Form-definition identity the brief asks for (User-scoped version, user anton.ramos@3mworks.com.ph).
- **Designer editing-scope footer:** `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`. This is the Designer's current editing scope. It is **not** itself proof of which Form version is loaded. The two readings agree here, but they are separate observations.
- Neither reading proves database state or that no other version exists. The recent-forms entry shows only a name.

## Discrepancies and limits

1. **Form Layout (Form-level `Layout` group) not read.** The Form tab's Layout group was not expanded, so the Form-level layout value (EXP-036 recorded `GridLeft` only at wizard page 1) is unverified here. The rendered Button position (Pane 0, Tab 0) is recorded.
2. **Events group not expanded.** Button Events > Primary and the Form Event Handlers list were **not inspected**, per the T3 instruction. This is the next task's inventory.
3. **Caption representation.** `Factory Test Button` is shown as rendered text; whether it is a literal or a string-resource key is not distinguished (as in EXP-036).
4. **Type wording.** Grid value is `PushButton`; the brief expects `Type=Button`. Recorded as `PushButton` with component type `Button` from the header, consistent with EXP-036 T13.
5. **Recent-forms list** contains other FX_ Forms (`FX_ComponentRecoveryLab03`, `FX_ComponentRecoveryLab02`, `FX_StaticCaptionLab04`, `FX_StaticNoColonLab01`, `FX_StaticCaptionLab01`, `FX_FormPropertyLab13`, `FX_ButtonCaptionLab01`, `FX_FormVariableLab05`) and `FormSync`. These were **not** opened or touched.

## Counts (T3)

| Item | Count |
|---|---|
| Form open (recent-forms selection) | 1 |
| Form menu open | 1 |
| Designer tab select | 1 (browser navigation; from the Web Client tab) |
| Expand Panel (Details) | 1 (view control) |
| Components tab select | 1 (view control) |
| Components grid Expand | 1 (view control) |
| Components row selection (`FX_SingleButton01`) | 1 (selection only) |
| Form close | 0 |
| Form reopen | 0 (the open is the first load in this task) |
| Save | 0 |
| Regenerate | 0 |
| Property edit / inline editor | 0 |
| Event Handlers tab open | 0 |
| Primary assignment | 0 |
| Scope change | 0 |
| Designer launch | 0 in T3 (cumulative 1 of 1 from T2) |
| Runtime Button activation | 0 |
| Browser JavaScript authored by worker | 0 |
| Authentication | 0 |
| Cold `MGForm` URL navigation | 0 |
| Preference change | 0 |

## Recovery allowance

- Fresh untargeted snapshot used for recovery: **0 of 1**.
- Corrected visible inspection used for recovery: **0 of 1**.
- Planned reads: `t3-01` (tab list and snapshot while the Web Client was current), `t3-02`, `t3-03`, `t3-05`, `t3-07`, `t3-08`, `t3-09`, `t3-10`. No `Ref ... not found` or timeout occurred, so none of these counts as recovery.

## Stable state at end of T3

- Tab 1 (Designer): `FX_SingleButtonLab01` open and selected, clean (Save disabled), User footer, `FX_SingleButton01` selected in the Components grid and in the Properties panel, Details panel expanded with the Components tab active. No dialog, no browser prompt, no unsaved-change prompt.
- Tab 0 (Web Client): not re-snapshotted in T3 (it was the current tab briefly at the start); no action taken on it.

## Assessment for the next task

The Form is safely identified (name, User version, User footer) and the Button identity and Caption are visible and unchanged. It is **ready for a separate read-only Event Handlers and Button Events > Primary inventory**, with these prerequisites: that task should start from a fresh tab snapshot, expand the Button's Events group as a view control only, and must not assign Primary or open a handler editor unless separately authorized.
