# EXP-138 T7 - Runtime readiness for FX_LoginPortal (AC-6), no Sign In, 2026-10-26

Scope of T7: establish the runtime FX_LoginPortal Form in the Web Client and confirm AC-6. **Not performed:** any Sign In or click on the Sign in button, any fixture value typed, any FX_ProcessLogin call, any edit, any Save, any Designer action, any compile, any credential entry. The Designer tab (tab 1) was not selected or touched in T7.

## Preconditions and gates

- Tab list (read-only) first: tab 0 = Web Client (`favoriteContext=FX_LoginUsers`), tab 1 = Designer (`MGForm=FX_LoginPortal`). Tab 0 selected; fresh snapshot.
- Account header on the Web Client before any action (`t7-01`): `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`. FX_LoginUsers tab open with the fake `fx_probe` row visible; Save disabled; no dialog; no Session Expired modal; no sign-in page.
- Reason for the reload: the Web Client page was loaded before the T5 Save of FX_LoginPortal. EXP-133 (T2) and EXP-135 (T8) recorded a stale Web Client Form store, and EXP-133 T14 had opened FX_LoginPortal in this client before the corrected script was saved. So the client could hold an older definition. This was the single EXP-135 T9 portal-reload route permitted for T7.

## Portal reload (route used once)

| Step | Observed |
|---|---|
| Top-level navigation of tab 0 to `https://mingle-portal.se1.inforcloudsuite.com/G6R8LJ9Q4E8C2Z8Y_DEM/` (the EXP-135 T9 and session-procedure portal URL) | Done once. |
| `beforeunload` dialog (empty message) | Appeared; accepted once. |
| Portal home (`System Administrator`) | Loaded. No sign-in page; no Session Expired modal. |
| Portal banner (DistributionIFSContactUs) | Visible; dismissed once with its own Close notification button. Its links were not clicked. |
| Navigation menu, search `Mongoose`, result `Mongoose OS` | Opened once; the link was clicked once. Mongoose Web Client loaded (`favoriteContext=FX_LoginUsers` replaced by the Explorer). |
| Authentication recovery | 0. Session re-establishment 0. |

Portal reload count: **1 of 1 permitted.**

## Runtime Form open (ordinary Web Client route)

- Form menu > Open (menu item `Open`) once.
- Select Form dialog: the filter text was prefilled with `FX_LoginUsers` from an earlier use. Replaced with `FX_LoginPortal` by a fill; the grid did not refresh until one End press in the focused filter box (caret only). One row: Caption `FX_LoginPortal`, Name `FX_LoginPortal`.
- Row selected once; OK once. Cancel 0.
- Result: the runtime tab `FX_LoginPortal` opened (`t7-03`). URL now carries `favoriteContext=FX_LoginPortal`.

## Runtime observations (before any interaction)

- Account header (`t7-02`, `t7-03`, `t7-04`): `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`.
- Form tab `FX_LoginPortal` selected; Form toolbar Save disabled, New and Delete disabled.
- Web User Control: nested iframe `mg_frameext-comp-1230` inside the Form's iframe. Accessibility refs are available in the frame: textbox `Username`, textbox `Password`, button `Sign in`. The WUC frame exposes accessibility refs, so no coordinate interaction was needed.
- Result text: none in the accessibility tree of the frame before any interaction (no fixture value was entered and no Sign in was activated).
- Layout observation: at the default size the WUC frame is **184 x 106 CSS px** and its content is **306 x 178 CSS px**. The Sign in button box is at y 115 to 136, below the visible frame height. In `t7-03` the Sign in button is therefore not visible in the viewport (only the Username and Password fields are). The button is present in the DOM and reachable by ref.
- Clipping resolved in view only: a hover on the Sign in ref (no click) scrolled the frame so that Sign in is visible (`t7-04`). No layout or size was changed (out of scope).
- Console (`evidence/playwright/console-2026-10-26T16-09-04-898Z.log`, lines 36 to 43): page footer 5 errors, 10 warnings. The 5 errors are `Permissions policy violation: unload is not allowed in this document` (the same class seen in EXP-133 and EXP-135). One new VERBOSE entry at line 43: `[DOM] Password field is not contained in a form` from `FX_Login/index.html?formId=75&name=FX_LoginControl&platform=web&theme=FX_HelloWorld&config=G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`. Not an error from the login logic. Recorded as observed; not investigated further.

## Evidence files (T7)

- `evidence/EXP-138/T7-runtime-readiness-summary.md` (this file)
- `evidence/EXP-138/t7-01-webclient-pre-reload-fx-loginusers-account-header.png`: Web Client on FX_LoginUsers before the reload. Shows the account header and the fx_probe row. Proves the pre-reload identity. Does not prove anything about FX_LoginPortal.
- `evidence/EXP-138/t7-02-webclient-after-portal-reload-mongoose-explorer-account-header.png`: Web Client Explorer after the portal reload and Mongoose launch. Shows the account header and no Form open. Proves the account context was re-established. Does not prove the runtime Form.
- `evidence/EXP-138/t7-03-runtime-fx-loginportal-username-password-signin-visible-no-attempt.png`: runtime FX_LoginPortal tab; Username and Password fields visible; Sign in clipped below the frame's visible area at the default size. Proves the runtime Form and the two fields. Does NOT show the Sign in button in the viewport.
- `evidence/EXP-138/t7-04-runtime-fx-loginportal-after-hover-scroll-signin-button-in-view-no-click.png`: the same runtime Form after a hover on the Sign in ref (no click). Shows Sign in visible in the frame, the Sign in button not activated, and the account header. Proves Sign in is visible after an in-frame scroll. Does not prove the saved script runs (no Sign In attempt).
- Tool-written under `evidence/playwright/` (disclosed, not worker-written): page snapshots `page-2026-10-26T16-09-04-922Z.yml` (before reload), `page-2026-10-26T16-09-12-863Z.yml`, `page-2026-10-26T16-09-18-198Z.yml`, `page-2026-10-26T16-09-22-461Z.yml`, `page-2026-10-26T16-09-25-362Z.yml`, `page-2026-10-26T16-09-31-196Z.yml`, `page-2026-10-26T16-09-42-379Z.yml`, `page-2026-10-26T16-09-46-130Z.yml`, `page-2026-10-26T16-09-55-896Z.yml`, `page-2026-10-26T16-10-01-784Z.yml`, `page-2026-10-26T16-10-05-913Z.yml`, `page-2026-10-26T16-10-23-734Z.yml`, and the console log `console-2026-10-26T16-09-04-898Z.log`.

## Mutation and action ledger (T7)

- Designer Save 0. Designer edits 0. Form Script fills 0. Script Editor opens 0. OK 0. Cancel 0.
- Form close 0. Form reopen 0 (the runtime Form was opened once from Select Form; it is not a Designer reopen).
- Portal reload 1 (permitted maximum 1). Portal banner dismissal 1. beforeunload accepted 1.
- Runtime Form open 1 (Select Form OK 1; Select Form row click 1; Select Form filter fill 1; End press 1 in the filter box, caret only).
- Sign In activations 0. Fixture values typed 0. Credential entries 0. FX_ProcessLogin invocations 0. Runtime Save 0.
- Hover (ref) on Sign in 1; no click on any control in the WUC.
- Variables, components, Captions, events, layout 0 changed. FX_LoginUsers, FX_Login assets, FX_vLoginResult definition 0 changed.
- Browser JavaScript authored by the worker 0. Session recovery 0. Recovery episodes (ref errors) 0. Stale-ref retries 0. Coordinate interactions 0.
- Tool-generated wrappers appear in tool output ("Ran Playwright code"); these are produced by the browser tool, not authored by the worker.

## Acceptance checks supported by T7

- **AC-6: met, with a qualification.** The runtime FX_LoginPortal opened after the one permitted portal reload, with the account context re-established (`anton.ramos@3mworks.com.ph`, `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`). Username and Password fields are visible and the Sign in button is present; at the default frame size the Sign in button is clipped and became visible only after an in-frame scroll (`t7-04`). Qualification for the operator: the default frame size hides the Sign in button.
- AC-7 to AC-9: not evaluated (no Sign In).
- AC-10: holds so far (no FX_LoginUsers, FX_Login asset or FX_vLoginResult edit; no fixture value typed).
- AC-11: not evaluated in full (final audit at the end of EXP-138).

## Interpretation (limits)

- The runtime Form loaded after the portal reload. That shows the Form renders the FX_LoginControl Web User Control. It does not show which Form Script version the runtime uses (that would be shown only by the Sign In outcome in AC-7 to AC-9). A stale client definition is therefore not excluded by T7.
- The Designer tab (tab 1) was not re-read in T7. It was left clean at T6 (Save and Undo disabled, FX_LoginPortal active).
- Whether the saved FX_LoginPortal script (T5 Save) compiles and returns the six result codes is still not established by T7. The first Sign In attempt (AC-7) is the first runtime test of the script.

## Readiness for the first authorized Sign In attempt

- The runtime Form is open in the Web Client, the account context is correct, the Username and Password fields and the Sign in button are reachable by accessibility ref, and no dialog is open.
- The Sign in button needs an in-frame scroll (or a ref-based action that scrolls) before a click; a ref hover was used in T7 without a click.
- Not authorized in T7: any Sign In attempt, any typed value.
