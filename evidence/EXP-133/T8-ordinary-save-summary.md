# EXP-133 T8 — Single ordinary Designer Form Save (2026-10-26)

Scope: one ordinary Designer Form Save for `FX_LoginPortal`, then read-only verification. No close/reopen, runtime, Sign in, source edit, asset edit, variable create/alter/delete, component change or regeneration.

## Pre-Save state (observed)

- Active Designer tab: `FX_LoginPortal` (second tab `FX_BridgeTest` open, untouched).
- Scope: footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`; Form Version `User version for user anton.ramos@3mworks.com.ph`.
- Script Language: `Visual C#` (Properties > Form > Behavior).
- Save: enabled (accessibility tree `button "Save"` without `[disabled]`).
- Console footer: 2 errors, 0 warnings.
- Components (Details > Components): `Pane (00)` > `FX_LoginControl`, Type `UserControl`, Pane 0, Tab 0. One component only.
- Variables (Details > Variables): root groups `Global - Persistent` and `Global - Temporary` only; no Form-level category; no `UserCtrl*` entry.
- Screenshots: `t8-00` (Form and Variables), `t8-01` (Components grid with `FX_LoginControl`).

## The one ordinary Save (observed)

- One click on the Designer top-toolbar Save (ordinary Form Save control, not Delete Form Definition, not Regenerate Form).
- Immediate response: in-page notification `Form [FX_LoginPortal] and global object(s) were saved.` (read from the snapshot `evidence/playwright/page-2026-10-25T16-27-42-179Z.yml`, lines ~450–451). The notification had already faded by the time the screenshot `t8-02` was taken; the screenshot shows the Save and Undo icons greyed and the Save tooltip only.
- Save state after: `button "Save" [disabled]` in every later snapshot (`page-…-27-42`, `-28-15`, `-28-37`, `-28-45`, `-29-02`, `-29-13`).
- No browser-native dialog, no in-page error dialog. Console footer 2 errors / 0 warnings on every read after the Save (no increase).
- Identity after Save: `FX_LoginPortal` still the active Form tab; scope still User / anton.ramos@3mworks.com.ph; Script Language Visual C#.

## Post-Save readbacks (observed, same session)

1. **Variables tree** (`t8-03`, snapshot `page-…-28-15-926Z.yml` after Expand-all): root groups still only `Global - Persistent` and `Global - Temporary`. No `Form -` category. `find "UserCtrl"` returned no match before expansion; grep of the expanded snapshot for `UserCtrl`, `Form - ` returned no match. Within `Global - Persistent` the visible window shows `ccvw_*`, `FX_vEcho`, `gbgc_*`, `IncludeBadgeStatusVar`, `IsDiagnosticsTimerElapsed`, `LoginFoundUser`, `lse_*`, `lsm1_*` (virtualised window; not the full list). `FX_vLoginResult` is **not** in that visible window, consistent with the T5 observation (`t5-09`); the Details window is therefore not a complete inventory of Global objects.
2. **Components** (`t8-01` before Save; snapshot `page-…-28-37-303Z.yml` after): `FX_LoginControl` UserControl, Pane 0, Tab 0 — still one component, no duplicate.
3. **FX_LoginControl Component properties** (`t8-04`, snapshot `page-…-28-45-788Z.yml`): Name `FX_LoginControl`; Type `UserControl`; From Device Master True; Specific Attributes > `User Control Name` = `V(UserCtrl_userControl1_USER)` (the stale pre-rename default name — **not re-keyed** to `FX_LoginControl` after this Save). The component selector at the top of the Properties panel still displays `userControl1_USER (ActivexControl)` (display label, the same lag noted in T6).
4. **Edit User Control References** (read-only open of the User Control Name dialog; `t8-05`): Windows section `Assembly Name` `<Not Applicable>`, `Use Web Control` **checked**; Web section `Control URL` = `FX_Login/index.html`; Relative/Absolute URL radio not selected, `Web User Control Asset` radio selected. Closed with **Cancel** (no change). After Cancel: Save still `[disabled]`, no dialog.

## Generated-variable inventory after the Save

| Name | Category | Observed? | Note |
|---|---|---|---|
| `UserCtrl_FX_LoginControl` | Form | No | Not visible |
| `UserCtrlAsm_FX_LoginControl` | Form | No | Not visible |
| `UserCtrlUrl_FX_LoginControl` | Form | No | Not visible |
| `UserCtrl_userControl1_USER` | Form (stale default) | No | Not visible |
| `UserCtrlAsm_userControl1_USER` | Form (stale default) | No | Not visible |
| `UserCtrlUrl_userControl1_USER` | Form (stale default) | No | Not visible |
| Any other Form-level variable | — | No | No Form-level category at root |

Net: **no Mongoose-generated Form-level variable was observed in the same session after the Save.** This differs from the EXP-131 precedent (a `Form - Persistent` category appeared, with the renamed and stale sets). The EXP-131 record does not state whether that category was read before or after a close/reopen. Whether generated variables appear only after a close/reopen, or were not generated at all, is **unresolved**; the T9 close/reopen readback is the next opportunity to re-check. No variable was created, altered, renamed or deleted.

## Action ledger (T8)

- Tab list 1; tab select 1 (index 0, `FX_LoginPortal`).
- Fresh untargeted snapshot 1 (initial).
- Clicks 9: Details Components tab 2, toolbar Save 1 (ordinary Designer Form Save), Details Variables tab 1, Variables tree Expand-all 1 (view), FX_LoginControl row 1 (select only), Properties Component tab 1, User Control Name Open Edit Property Dialog 1 (read-only open), dialog Cancel 1.
- Finds 2 (`UserCtrl`, `Form -`; both no match).
- Screenshots 6 (`t8-00` to `t8-05`).
- Typed text 0; key presses 0; browser JavaScript 0; recovery 0; `Ref not found` errors 0.
- Mutations: ordinary Designer Form Save **1**; Designer close/reopen 0; runtime open 0; Sign in 0; runtime close 0; Global objects 0; assets 0; variables 0; components 0; Form Script edits 0; Regenerate Form 0; Delete Form Definition 0.

## Evidence files written by T8

- `evidence/EXP-133/t8-00-designer-pre-save-fx-loginportal-user-visual-csharp.png`
- `evidence/EXP-133/t8-01-pre-save-components-tree-fx-logincontrol-usercontrol.png`
- `evidence/EXP-133/t8-02-after-single-ordinary-save-notification-save-disabled.png`
- `evidence/EXP-133/t8-03-after-save-variables-tab-root-categories.png`
- `evidence/EXP-133/t8-04-after-save-component-properties-user-control-name-stale-expression.png`
- `evidence/EXP-133/t8-05-after-save-user-control-references-readback-before-cancel.png`
- `evidence/EXP-133/T8-ordinary-save-summary.md` (this file)
- Tool-written (disclosed, not authored): `evidence/playwright/page-2026-10-25T16-27-31-127Z.yml`, `…16-27-42-179Z.yml`, `…16-27-52-428Z.yml`, `…16-28-15-926Z.yml`, `…16-28-37-303Z.yml`, `…16-28-41-364Z.yml`, `…16-28-45-788Z.yml`, `…16-29-02-048Z.yml`, `…16-29-13-277Z.yml`; console log `evidence/playwright/console-2026-10-25T16-27-20-665Z.log`.

## Limits

- The Save notification is read from the accessibility snapshot, not from a screenshot (the toast had faded in `t8-02`).
- The Variables tree was read in-session only; no close/reopen was performed (T9 scope). A virtualised tree window cannot prove absence of every variable; the root-level category check is the strongest local evidence.
- The Save is not proven to have persisted to the server beyond the notification and the disabled Save state; persistence across close/reopen is **unresolved** until T9.
- `UserCtrl_userControl1_USER` remains the User Control Name expression; not edited, per instruction.
- The Global `FX_vLoginResult` resolution by `ThisForm.Variables` / `WSForm.getVarValue` is not investigated (out of scope).
