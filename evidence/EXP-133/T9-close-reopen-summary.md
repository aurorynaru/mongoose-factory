# EXP-133 T9 — Designer close attempt and stop (2026-10-26)

Outcome: **STOPPED at the close step.** The ordinary Form-tab close control was clicked once. The Form did not close; an in-page Mongoose "Error" dialog appeared and the Designer console rose from 2 to 3 errors. Per the bounded instruction (stop on an unexpected dialog or console increase), no reopen, no retry, no OK click, no Save and no other action was taken. The reopen, retained-definition readbacks (components, references, variables, script, assets, Global variable) were **not performed** in T9.

## Pre-close state (observed)

- Active Designer tab: `FX_LoginPortal` (selected; FX_BridgeTest tab present, untouched).
- Scope: footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`; Form Version `User version for user anton.ramos@3mworks.com.ph`; Name `FX_LoginPortal`.
- Script Language: `Visual C#` (Form tab, Behavior).
- Save: `button "Save" [disabled]` (snapshot `evidence/playwright/page-2026-10-25T16-32-21-847Z.yml`, line 10–11).
- Components: `Pane (00)` > `FX_LoginControl` (UserControl, Pane 0, Tab 0), one row (snapshot lines 258–273; screenshot `t9-00`).
- No dialog open. Console footer 2 errors / 0 warnings (baseline).
- Screenshot: `evidence/EXP-133/t9-00-pre-close-fx-loginportal-user-visual-csharp-save-disabled.png`.

## The close attempt (observed)

- One click on `button "closable FX_LoginPortal"` (the ordinary Form-tab close control, ref from the fresh snapshot).
- Result: the FX_LoginPortal tab remained in the tab list and stayed selected. The Form did not close.
- An in-page alert dialog appeared: title `Error`, text `The server event processing returned an error. If this persists, contact your system administrator.`, single `OK` button (snapshot lines 442–445; screenshot `t9-01`). This is an in-page Mongoose message, not a browser-native dialog.
- Console footer changed from **2 errors / 0 warnings** to **3 errors / 0 warnings**.
- New console entry (`evidence/playwright/console-2026-10-25T16-32-14-643Z.log` line 3): `[ERROR] Failed to load resource: the server responded with a status of 400 () @ https://mgapse1ap.mtmgf.se1.mongoosepaas.io/WSWebClient/Designer/Form/GenerateServerEvent:0`. Lines 1–2 are the two pre-existing "Permissions policy violation: unload" entries (baseline).
- The 400 response on `Designer/Form/GenerateServerEvent` is the server event that the close triggered. Its cause is not established; the message is generic.
- Save remained disabled in the post-click snapshot (`page-2026-10-25T16-32-36-667Z.yml`, line 10–11). Save was not clicked.

## Why the task stopped here

- Bounded instruction: "STOP immediately on an unexpected dialog, console increase, ambiguous reopening or other guard failure". Both an unexpected dialog and a console increase occurred.
- Not done: the OK click on the Error dialog. Clicking it would continue the server-event flow, which is recovery, and the brief forbids recovery attempts. The dialog is therefore left open for the coordinator's disposition.
- Not done: a second close attempt, a Save, a reopen, any readback that needs the Form to be reopened, any runtime step.

## Action ledger (T9 so far)

- Tab list 2 (initial, plus no second list); tab select 1 (index 0, `FX_LoginPortal`).
- Fresh snapshot 1 (initial, untargeted, depth 4) and snapshot 1 (full, after select).
- Clicks 2: Properties panel Form tab (view only) 1; Form-tab close control 1 (the attempted close; mutation attempt, not completed).
- Finds 0; greps on saved snapshots 6 (read only); Read on console log and snapshots 3.
- Screenshots 2 (`t9-00`, `t9-01`) plus this summary.
- Typed 0; key presses 0; browser JavaScript 0; recovery 0; `Ref not found` 0.
- Mutations: Designer Save 0; Form close completed 0 (attempted 1, did not complete); reopen 0; runtime open 0; Sign in 0; runtime close 0; source edit 0; asset edit 0; variable change 0; component change 0; Regenerate Form 0; Delete Form Definition 0; metadata-cache action 0.
- Console: baseline 2 errors / 0 warnings → final 3 errors / 0 warnings (+1 at the close click). Warnings 0.

## Evidence files written by T9

- `evidence/EXP-133/t9-00-pre-close-fx-loginportal-user-visual-csharp-save-disabled.png`: pre-close identity, scope, Visual C#, Save disabled, one FX_LoginControl. Proves the state before the close click. Does not prove the server-side state.
- `evidence/EXP-133/t9-01-after-form-tab-close-click-error-dialog-console-3.png`: the Error dialog over the still-open FX_LoginPortal Designer, Save disabled, Visual C# and the scope visible. Proves that the close did not complete and that the dialog appeared. Does not identify the server-side cause.
- `evidence/EXP-133/T9-close-reopen-summary.md` (this file).
- Tool-written and disclosed, not authored by me: `evidence/playwright/page-2026-10-25T16-32-21-847Z.yml`, `evidence/playwright/page-2026-10-25T16-32-36-667Z.yml`, `evidence/playwright/console-2026-10-25T16-32-14-643Z.log`.

## Limits

- The close did not complete. Whether the server holds a partially processed close state is unknown.
- The Error text is generic. The cause is not identified, and no diagnostic log was read.
- Reopen-based retention (AC-8) is not tested in T9.
- Generated variables after the Save remain unresolved (no Form-level category was visible in T8; not re-checked in T9).
- Global `FX_vLoginResult` resolution is not investigated (out of scope).
