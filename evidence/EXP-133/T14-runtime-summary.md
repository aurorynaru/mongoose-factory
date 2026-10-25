# EXP-133 T14 — Runtime FX_LoginPortal: one fixed fake submission (2026-10-26)

Outcome: **the runtime FX_LoginPortal rendered in the Web Client, one Sign in was activated, and FX_LoginResult displayed `received`** (single observed run). The runtime Form was left open as the current Web Client Form for T15. No close, Save, navigation, reload, Designer interaction or source edit was performed. No Session Expired modal appeared in this task.

## Step 0 — Preflight and account gate (observed)

- Tab list (read-only) first: tab 0 = stale Designer (`FX_LoginPortal`, not touched); tab 1 = Web Client (`Mongoose`).
- Tab select index 1 (Web Client) succeeded. Fresh untargeted snapshot.
- Header: `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`. Explorer rendered; no dialog; no sign-in content; no Form tab open; Session Expired absent.
- Console baseline (page footer): **8 errors / 10 warnings**. (T13 recorded 3/10 at its gate; the counter is per page context and changed between tasks. This task's baseline is 8/10.)
- Gate passed. Screenshot: `t14-00-webclient-gate-explorer-account-config-no-form-open.png`.

## Step 1 — Open the saved Form once (observed)

1. Form menu click; the menu showed `Open` (Close and Save Changes disabled).
2. `Open` click; the Select Form dialog showed **one row**, Caption `FX_LoginPortal` and Name `FX_LoginPortal`. Filter text `FX_LoginPortal` was already present from an earlier session; not retyped. Screenshot `t14-01-select-form-one-row-fx-loginportal-before-select.png`.
3. Name cell click on that row (accessibility `[active]` confirmed in a targeted read).
4. Select Form **OK** clicked once.
5. Result: the runtime FX_LoginPortal tab opened (tab label `FX_LoginPortal`, selected). The Web User Control rendered inside it. No Session Expired modal; no alert; no sign-in form.
6. Console: one new entry, `[VERBOSE] [DOM] Password field is not contained in a form` from `WSWebClient/dynamic/metadata/FX_Login/index.html?formId=1&name=FX_LoginControl&platform=web&theme=FX_HelloWorld&config=G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT:0`. Verbose level only; not counted in the error/warning footer. It shows the FX_LoginControl Web User Control being loaded from the FX_Login/index.html asset. It is a DOM advisory and was not investigated further.

**Session-expiry actions in T14: none.** The recovery procedure was not needed, so no navigation, dialog acknowledgment or re-login occurred.

## Step 2 — Pre-submission verification (observed)

- Screenshot `t14-02-runtime-fx-loginportal-rendered-pre-click-login-card-empty-result.png`: the FX_LoginPortal tab selected; the Web User Control frame shows **Username** label and empty input and the **Password** label with its input at the frame's lower edge. The frame is clipped; the **Sign in** button sits below the visible area and is not visible in this capture. The button is present in the accessibility tree (one `Sign in` button).
- Result text: no `received` or other text in the frame before the click (the `FX_LoginResult` element is not in the accessibility tree while empty; its presence rests on the T4 source readback and the post-click display, not on a pre-click readback).
- Password masking before entry: the field is empty, so no masking is visible; masking was verified after entry (Step 3).
- Guards: control present; result empty; no unexpected dialog. Proceeded.

## Step 3 — Fixed fake pair only (observed)

- Username typed: `fx_probe` (typed into the Username textbox of the Web User Control).
- Password typed: the fixed approved fake value (typed into the Password textbox). The tool returned no snapshot for that action.
- Screenshot `t14-03-runtime-username-entered-password-masked-pre-signin.png`: the Username field shows `fx_probe`; the Password field shows **masked dots** (no plaintext visible).
- Console after typing: 8 errors / 10 warnings (unchanged).
- Disclosure: a later `find` (the `received` readback, Step 4) returned the accessibility node of the password textbox with its accessible value in the tool output, so the fixed fake password value appeared in this task's tool output. No further reads of the password field were made. A file-content count of the `evidence/` tree for the password value returned **0 matches** (`Grep` count mode; value not printed). No file in this experiment records the value.

## Step 4 — One Sign in activation (observed)

- Sign in button clicked **exactly once** (one click; no double-click; no repeat).
- The click scrolled the Web User Control frame, so the Sign in button and result became visible.
- Post-click result, observed in the accessibility tree: `FX_LoginResult` text = **`received`** (generic node below the Sign in button).
- Post-click screenshot `t14-04-runtime-post-single-signin-fx-loginresult-readback.png`: below the Sign in button the frame displays the text **`received`**; the Password field remains masked (dots); no alert or dialog is visible in the viewport.
- Alert check: a find for alert / Session Expired / expired text returned no alert element (only the frame's own Sign in node).
- Console after the click: footer **8 errors / 10 warnings** — unchanged from the pre-click baseline. No new console entries were reported by the tool after the click.
- Session expiry after the click: none observed.
- Limitation: the username field has scrolled out of the frame's visible area in the post-click screenshot; the username was visible and correct in `t14-03`.

## Step 5 — Form left open for T15 (observed)

- The runtime FX_LoginPortal tab remains the selected Web Client tab. No close, Save, navigation, reload, Designer split-button use, source edit, variable change or Regenerate. No dialog open.
- The stale Designer tab (tab 0) was not selected or touched.
- The runtime-close step (brief AC-9 closure) is deferred to T15 per the coordinator's bounded instruction for this task; it was **not** performed here.

## Counts

- Runtime Form opens: 1 (via Select Form OK).
- Sign in activations: **1**.
- Runtime closes: 0 (deferred to T15).
- Text entries: 2 (username `fx_probe`; password, fixed fake value).
- Clicks: 5 (Form menu; Open menu item; Select Form row; Select Form OK; Sign in).
- Browser actions total: 7 (5 clicks, 2 text entries) plus 1 tab select.
- Reads: tab list 1; tab select 1 (counted above); fresh untargeted snapshots 2 (gate; post-OK); targeted snapshots 2 (Select Form dialog `f1e137`); finds 7; screenshots 5; console-log read 1; experiment/evidence reads (Read) about 8.
- Key presses 0; navigate 0; native dialogs 0; waits 0; browser JavaScript written by the worker 0.
- Recovery: fresh-snapshot allowance 0 of 1 used; corrected inspection 0 of 1; Ref-not-found 0; session-expiry procedure not used.
- Mutations: Designer Save 0; Form close/reopen 0; asset, variable, component, Form Script and Global-object edits 0; Regenerate, Delete Form Definition, Unload, FormSync 0.

## Evidence files (T14)

- `evidence/EXP-133/t14-00-webclient-gate-explorer-account-config-no-form-open.png` — gate: header, Explorer, no Form open. Proves the account/configuration gate and the absence of an open Form before the step. Does not prove runtime behaviour.
- `evidence/EXP-133/t14-01-select-form-one-row-fx-loginportal-before-select.png` — Select Form dialog, one FX_LoginPortal row. Proves the saved Form is listed by its exact name in the Web Client picker (User scope not visible in this frame). Does not prove the Form's contents.
- `evidence/EXP-133/t14-02-runtime-fx-loginportal-rendered-pre-click-login-card-empty-result.png` — runtime FX_LoginPortal tab selected; Web User Control with Username and Password labels visible; Sign in clipped below the frame. Proves the runtime Form and control rendered. Does not prove the Sign in button's visibility in this frame (it is clipped), the FX_LoginResult element (not visible here), or the password masking (field empty).
- `evidence/EXP-133/t14-03-runtime-username-entered-password-masked-pre-signin.png` — username `fx_probe` visible; password masked as dots. Proves masking of the entered password presentation. Does not prove the attribute `type="password"` by itself (inferred from the T4 source readback and the masked display).
- `evidence/EXP-133/t14-04-runtime-post-single-signin-fx-loginresult-readback.png` — post-click: `received` shown below Sign in; password still masked; no alert in the viewport. Proves the displayed result of one run. Does not prove Global-variable resolution, server-side compilation or replay, nor cross-session persistence.
- `evidence/EXP-133/T14-runtime-summary.md` — this file.
- Experiment record: `experiments/EXP-133-minimal-fx-loginportal-with-client-validation-and-.md` (T14 section appended).

Tool-written and disclosed outside `evidence/EXP-133/` (automatic snapshot and console files): `evidence/playwright/page-2026-10-25T17-00-59-081Z.yml` (Form menu), `…17-01-04-777Z.yml` (Open), `…17-01-14-483Z.yml` (row click), `…17-01-22-202Z.yml` (Select Form OK), `…17-02-09-176Z.yml` (Sign in); console logs `evidence/playwright/console-2026-10-25T17-00-47-072Z.log`, `…17-00-47-073Z.log` (session-wide history; the VERBOSE entry is at line 46 of the first log). These are tool-named; the worker did not author them.

## Acceptance (T14 view)

- **AC-9 (runtime):** **observed single-run round trip**: pre-click login card (Username, Password, Sign in; FX_LoginResult not visibly populated); username `fx_probe`; masked password; one Sign in; visible `received`; no alert; console unchanged at 8/10. The runtime close (second half of AC-9) is **deferred to T15**. AC-9 is therefore partly met in T14.
- **AC-1 to AC-8:** unchanged from earlier tasks. T14 adds no new readback of the saved definition (the runtime rendering of the saved Form and its Web User Control is an additional observation).
- **AC-10:** not started (final manifest later).

## Knowledge state (T14)

- Select Form → OK opens the saved runtime FX_LoginPortal and renders the FX_LoginControl Web User Control in the Web Client: **observed** (one run; the first runtime render).
- Pre-click login card with empty result (result not visibly populated): **observed** (one run).
- Masked password presentation after entry: **observed** (screenshot; one run).
- One Sign in activation producing the visible literal `received` in FX_LoginResult: **observed** (one run). The literal is the value the Form-script / variable read path returns in the success branch; **Global-variable resolution by `ThisForm.Variables` / `WSForm.getVarValue` is unresolved** (out of scope; EXP-130 U-1). Compile success is **unresolved**. Replay, cross-session durability and real authentication: **not claimed**.
- No alert after Sign in: **observed** (one run).
- Clipped Sign in button in the pre-click frame: **observed** (layout limit of the small control frame; the button is reachable and was clicked by its accessibility ref).
- VERBOSE "Password field is not contained in a form" DOM advisory during the render: **observed**; **not** an error; not investigated.

## Limits and disclosures

- The fixed fake password value appeared once in tool output (a password-field accessibility node returned by a read after Sign in). It is recorded here only as a disclosure, not as a value. No evidence file contains it (count 0).
- The FX_LoginResult element and the Sign in button were not visible in the pre-click screenshot (frame clipping); the pre-click result emptiness rests on the accessibility tree lacking result text and the screenshot showing none.
- Client validation was not exercised (per brief). The two-argument `WSForm.invoke` path and the `getVarValue` callback were exercised only for the valid fake pair, as a single observed run.
- The T13 Session Expired cause remains unknown; it did not recur in this task (single run).
- The Web Client console footer baseline (8/10) differs from T13's gate (3/10); the difference is the per-context counter, recorded here, not a runtime change.
- The runtime Form is open at task end (intentional per T14 Step 5).
