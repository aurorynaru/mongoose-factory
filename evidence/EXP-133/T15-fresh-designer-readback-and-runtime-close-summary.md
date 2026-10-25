# EXP-133 T15 — Fresh Designer readback and runtime close (reconstructed, 2026-10-26)

Status: **reconstructed after the fact.** The T15 worker stopped at the agent turn limit (150) before writing its final report. This summary was written in the documentation-only continuation (T16 bounded instruction, no browser tool) from:

- `evidence/EXP-133/harness-audit-T15.md` (controller-generated audit: 48 actions, 71 reads, 1 error, turns=151, "No terminal event; audit may be partial"). Not worker prose.
- The saved `t15-*` screenshots (19 of 25 were viewed in this continuation; see the inventory below).
- The saved Playwright accessibility snapshots and console logs stamped in the T15 window (17-06-20 to 17-14-31).

No worker narrative from T15 was available and none is relied on. Anything not directly visible in a file is marked unverified.

## 1. Outcome in one paragraph

A fresh Designer window for `FX_LoginPortal` was opened from the Web Client (Open designer in a new window, split button) and identified as `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`. In that window the saved definition showed: Save disabled; Script Language `Visual C#`; one `FX_LoginControl` UserControl (Pane 0); Use Web Control checked with Control URL `FX_Login/index.html`; the `FX_ProcessLogin` method in the Script Editor with an empty Errors grid; `FX_vLoginResult` (Global, Persistent, User version); both Web User Control assets with source readable. The Form-level variables now include **six** `UserCtrl*` names, including a stale `*_userControl1_USER` set (see section 6, operator disposition). The runtime FX_LoginPortal tab, still open from T14, was closed once (t15-24 shows the Web Client on Explorer with no Form tab and no dialog). No Save, Sign in, Form-tab close or definition commit was recorded in the audit.

## 2. Action sequence (from the audit, condensed)

| Audit order(s) | Action (audit element label) | Result |
| --- | --- | --- |
| 1–2 | Tab list; Grep | Web Client identified (tab 1) |
| 3–5 | Tab select; snapshot; find | Web Client selected; t15-00 captured |
| 6–7 | Screenshot t15-00; Read | Runtime FX_LoginPortal visible, pre-Designer gate |
| 8–13 | Hover x2 (Designer toolbar candidates); screenshots t15-01, t15-02 | Tooltip checks (not viewed in T16) |
| 14 | Click "Open designer in a new window" (Designer split button) | New Designer window opened |
| 15–16 | Tab list; tab select | New Designer tab selected |
| 17–20 | Snapshot; screenshot t15-03; click OK on "Identify Your Editing Scope" (Scope User, anton.ramos preselected) | Scope identified; OK on the scope dialog only |
| 21–22 | Snapshot; screenshot t15-04 | FX_LoginPortal, Save disabled |
| 23–26 | Click Behavior group row (view expansion); find; Grep; Read t15-04 | Property view only |
| 27 | Coordinate click (target not recorded) | Unknown target; no Save or commit recorded |
| 28–33 | find; snapshot; Expand Details; Components tab; screenshot t15-05 | Components grid |
| 34–37 | Grep; Read snapshot; Expand Components grid; screenshot t15-05 (**overwrote the first t15-05 capture**) | Expanded grid |
| 40–45 | Select FX_LoginControl row (select only); find; Grep; Read; screenshot t15-06 | Component properties |
| 46–49 | Coordinate click; find; screenshot t15-07; Read | Behavior group expanded, search |
| 50–57 | Mouse wheel; find x2; coordinate click (target not recorded); snapshot; screenshot t15-08 | Specific Attributes expanded |
| 58–65 | Mouse move; wheel x2; screenshot t15-09; Read; coordinate click (target not recorded) | Scrolled view; screenshot t15-09 **overwritten by the second capture (audit 63)** |
| 66–68 | find; screenshot t15-10; Read | User Control Name expression read |
| 69–73 | Coordinate click (target not recorded); find; snapshot; screenshot t15-11; Read | Edit User Control References opened read-only |
| 74–77 | Cancel (Edit User Control References, read-only); find x3 | No commit |
| 78–81 | Edit menu; find; Form Script menu item; screenshot t15-12 | Script Editor opened read-only |
| 82–86 | Read; **click "Compile Result" header (ref e1653 not found, audit 83)**; fresh snapshot (84); click Expand Compile Result (85); screenshot t15-13 | Recovery: see section 9 |
| 87–91 | Read; find; Errors tab click; screenshot t15-14; Read | Errors grid read |
| 93 | Cancel (Script Editor, no change) | No commit |
| 95–99 | Variables tab; screenshot t15-15; Grep; Read snapshot; Expand (view) | Variables root and Form-level expansion |
| 100–103 | Grep; screenshot t15-16; Read; find | Form - Persistent expanded |
| 104–111 | Edit menu; find; Variable menu item; find; FX_vLoginResult row (select only); screenshot t15-17; Read; find | Global Objects read-only |
| 112 | Cancel (Global Objects, no commit) | No commit |
| 113–117 | Edit menu; find; Web User Control Assets menu item; find; screenshot t15-18; Read | Web Assets dialog read-only |
| 118–131 | find; click FX_Login folder (expand view); Grep; ArrowRight; click script folder; ArrowRight; find x2; click index.html (select); screenshot t15-19; Read; coordinate click (target not recorded) | Tree expanded, index.html selected |
| 132–136 | find; screenshot t15-20; Read; find; Cancel (Edit Browser File, index.html, no commit) | index.html source read |
| 137–144 | find; click app.js (select); coordinate click (target not recorded); find; screenshot t15-21; Read; find; Cancel (Edit Browser File, app.js, no commit) | app.js source read |
| 145 | Cancel (Web Assets parent dialog, no commit) | No commit |
| 146–148 | find; screenshot t15-22; Read | Final Designer state, Save disabled, no dialog |
| 149–151 | Tab list; tab select; snapshot | Web Client selected |
| 152–153 | Screenshot t15-23; Read | Runtime pre-close state |
| 154 | Click "Close Panel FX_LoginPortal control on runtime Form tab" (ordinary close, no save) | Runtime Form closed |
| 155–157 | Screenshot t15-24; find; Read | Explorer, no Form, no dialog |
| 158–159 | Grep x2 | Evidence reads |
| 160 | Edit to `experiments/EXP-133-minimal-fx-loginportal-with-client-validation-and-.md` (audit reports ok; content not determinable from the audit; see manifest) | Reported ok |
| 161 | Grep | Post-edit check |

Counts (from the table and audit): tab actions 3 lists, 3 selects; clicks 36 in total (of which 7 coordinate clicks with targets not recorded in the audit: orders 27, 46, 53, 65, 69, 131, 139); hovers 2; key presses 2 (ArrowRight, orders 122 and 125); screenshots 27 calls (25 distinct filenames; t15-05 and t15-09 each written twice); snapshots 6 (orders 4, 17, 21, 71, 84, 151); the controller's own totals are 48 actions and 71 reads, which do not reconcile to these categories and are recorded as reported.

No `browser_type` action, no typed text and no Sign in click appear in the T15 audit (audit "Exact values: []", "Spelled strings: []", "Key sequence" limited to two ArrowRight presses).

## 3. Account, scope and Form identity (new Designer window)

- Scope dialog (`t15-03`): Scope `User`, User `anton.ramos@3mworks.com.ph`, preselected. OK clicked once (audit 20). This is scope identification, not a definition commit.
- Designer status bar (`t15-04`, `t15-05`, `t15-22`): `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`.
- Form properties (`t15-05`): Name `FX_LoginPortal`; Version `User version for us…` (truncated); Device Type `Default`; Form Type `Normal`; Is Master `True`; Behavior > Script Language `Visual C#`.
- Tab title `FX_LoginPortal` (`t15-04`, `t15-05`, `t15-22`).
- Save: `t15-04` shows the Save icon greyed. Accessibility snapshots from 17-06-40 through 17-14-31 consistently show `button "Save" [disabled]` in the Designer. Observed.

Proof level: the scope dialog, status bar and Form tab title are visible in the screenshots; the Save state is observed in the accessibility text. The window is a new Designer window, so the read was made against a freshly opened Designer instance. Whether the window loaded the server-saved definition, or a cached copy, is **unverified**.

## 4. Components

- `t15-05` (Components grid expanded): `Pane (00)` > `FX_LoginControl`, Type `UserControl`, Pane `0`, Tab `0`. One component. No duplicate visible.
- `t15-10` (component Properties, Specific Attributes): `User Control Name` expression reads `V(UserCtrl_FX_Log…` (truncated). The accessibility snapshot at 17-11-05 and later reads the full expression as `V(UserCtrl_FX_LoginControl)`.
- **Discrepancy with T8.** The T8 record (`t8-04`) observed `V(UserCtrl_userControl1_USER)` after the Save, which the T8 summary says was **not re-keyed** by that Save. In this fresh window the expression reads the FX_ name. The timing of the change (Save, reopen, or the Designer instance) is **unresolved**.
- `t15-11` (Edit User Control References, read-only, then Cancel): Windows section `Use Web Control` checked; Web section Assembly Name blank, Class Override blank; Control URL `FX_Login/index.html`; Web User Control Asset radio. Cancel clicked (audit 74).

Proof level: component identity, the single component, Use Web Control and Control URL are observed in this instance. The stale-vs-rekeyed timing is unresolved.

## 5. Form Script (Script Editor, read-only)

- `t15-12` (Script Editor, Visual C#): lines 1–3 `using System; using Mongoose.IDO.Protocol; using Mongoose.Scripting;`; line 6–8 class `public class FX_LoginPortal : FormScript` with the `// Methods go here` comment block at lines 10–12; the method at lines 14–20; lines 22–23 close the class and namespace. The editor numbers lines to 25 (24–25 blank). The T7 record said "24-line source"; the method text itself matches T7 exactly.
- Method as displayed (lines 14–20):
  - `public string FX_ProcessLogin(string username, string password) {`
  - `string code = "received";`
  - `if (username == null || password == null) { code = "missing"; }`
  - `else if (string.IsNullOrWhiteSpace(username) || string.IsNullOrWhiteSpace(password)) { code = "empty"; }`
  - `ThisForm.Variables("FX_vLoginResult").Value = code;`
  - `return code;`
  - `}`
- Neither argument is assigned to a variable, returned, logged or displayed. (Source-structure reading of the displayed text.)
- `t15-13` (Compile Result expanded): Output tab blank.
- `t15-14` (Errors tab): column headers `Line`, `Column`, `Error` only; **no rows**. Recorded only as an empty grid. It is not compile proof.
- Cancel clicked (audit 93). No commit.

Proof level: the in-session source as displayed in a fresh Designer instance (observed). Compile success: **unresolved**.

## 6. Variables and generated artifacts

- `t15-15` (Details > Variables, collapsed): root groups `Form - Persistent`, `Global - Persistent`, `Global - Temporary`.
- `t15-16` (Form - Persistent expanded) and the accessibility snapshot at 17-11-22 (lines 249–270) list six Form-level generated variables:

| Variable (as displayed) | Family | Status |
| --- | --- | --- |
| `UserCtrl_FX_LoginControl` | UserCtrl | matches the FX_LoginControl component; authorized by the operator's 2026-10-26 disposition (FX_LoginControl only) |
| `UserCtrlAsm_FX_LoginControl` | UserCtrlAsm | same as above |
| `UserCtrlUrl_FX_LoginControl` | UserCtrlUrl | same as above |
| `UserCtrl_userControl1_USER` | UserCtrl | **stale**: from the pre-rename name; non-FX_ prefix; not covered by the disposition as written |
| `UserCtrlAsm_userControl1_USER` | UserCtrlAsm | **stale**, same |
| `UserCtrlUrl_userControl1_USER` | UserCtrlUrl | **stale**, same |

- The brief requires a stop for operator disposition when a generated non-FX_ artifact would violate the FX_ boundary. The three `*_userControl1_USER` variables are such artifacts. **Not deleted, altered or renamed** (T15 made no change to them). Operator disposition is required (see the manifest).
- Earlier record: T8 (`t8-03`) reported no `UserCtrl*` variables after the Save; T6 and T7 reported none before it. The fresh window shows six. Whether they were generated by the T8 Save, a later reopen, or the Designer instance is **unresolved**.
- Global Objects (`t15-17`): see section 7.

## 7. FX_vLoginResult (Global Objects, read-only)

- `t15-17`: Global Objects dialog; row `FX_vLoginResult` selected. Properties: Name `FX_vLoginResult`; Description blank; Value blank; Persistent `True`; Global `True`; Version `User version for user an…` (truncated). The list around it shows `FX_vEcho` and `gbgc_bg`; this is a visible window, not a full inventory.
- Cancel clicked (audit 112). No commit.

Proof level: the properties match AC-5 for the displayed instance. The list is not a tenant-wide inventory. Global resolution by `ThisForm.Variables` / `WSForm.getVarValue` is out of scope and **unresolved**.

## 8. Web User Control assets (read-only)

- `t15-18`: Web Assets top level `$app`, `FX_Bridge`, `FX_Login`, `mongoose`, `sohoComponents`, `sohoxi`.
- `t15-19`: `FX_Login` > `script` > `app.js`; `FX_Login` > `index.html` (selected). Properties: Name `FX_Login/index.html`; Content `text/html`; Version `User version for user an…`. No third asset under `FX_Login` is visible in the tree. `FX_Bridge` not expanded.
- `t15-20` (Edit Browser File, index.html, read-only; partial view): `<script type="text/javascript" src="../$app/scripts/UserControl.js"></script>` (the dependency, unchanged); inline `<style>` (`.fx-login-card`, `#FX_LoginResult`); `<div class="fx-login-card">`; `<label>Username <input type="text" id="FX_LoginUsername" /></label>`; `<label>Password <input type="password" id="FX_LoginPassword" /></label>`; `<button type="button" id="FX_LoginSignIn">Sign in</button>`; `<div id="FX_LoginResult"></div>`; `<script type="text/javascript" src="script/app.js"></script>`. Cancel clicked (audit 136). No commit.
- `t15-21` (Edit Browser File, app.js, read-only; partial view): `signInButton.addEventListener("click", …)`; `usernameInput.value.trim()`; length checks against `MIN_USERNAME_LENGTH` (3) and `MIN_PASSWORD_LENGTH` (6) with fixed messages and `return`; `WSForm.invoke("FX_ProcessLogin", username, password, function () { WSForm.getVarValue("FX_vLoginResult", function (value) { resultElement.textContent = value; }); });`. The top of the file (the `MIN_*` declarations and element lookups) is not in this capture; it is covered by the T4 readback (`T4-web-user-control-assets-summary.md`). Cancel clicked (audit 144). No commit.
- Parent Web Assets dialog: Cancel (audit 145). No commit.

Proof level: the two asset sources as displayed in a fresh Designer instance (observed). Both files are the same content as the T4 readback. No stylesheet or third asset is visible. Relative references are visible as text, not executed.

## 9. Recovery and console

- Audit order 83: click on the Compile Result header failed with `Ref e1653 not found`. The fresh untargeted snapshot (audit 84) was the fresh-snapshot allowance (1 of 1). The corrected click (audit 85, Expand Panel button for Compile Result) was the corrected attempt (1 of 1). It succeeded.
- No other recovery.
- Console: the Designer window's log `console-2026-10-25T17-06-58-836Z.log` (new page context, 190 ms and 3117 ms entries) shows two `Permissions policy violation: unload` ERROR lines. `console-2026-10-25T17-06-20-207Z.log` is the session-wide history (contains the T9 `GenerateServerEvent` 400, the T10 `GetEditMenuState` 400, the T14 unload entries and the T14 VERBOSE DOM advisory). Because the log is session history, a T15-only delta cannot be isolated from these files. No entry of a new error class is visible in the T15-window logs. The per-snapshot footer counts were not recorded in the audit and were not parsed. **Console change during T15: not established from the saved files beyond the above.**

## 10. Runtime close (AC-9 closure)

- `t15-23` (Web Client, pre-close): the FX_LoginPortal runtime tab selected; the Web User Control frame shows a masked password field (dots), the `Sign in` button and the text `received` below it. The Username field is scrolled out of the frame, as in T14 (`t14-04`). Header `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`. This capture is a re-observation of the T14 post-click state; **no Sign in was clicked in T15**.
- Audit 154: click on "Close Panel FX_LoginPortal control on runtime Form tab (ordinary close, no save)".
- `t15-24` (after close): Web Client on Explorer; header with the same account and configuration; no Form tab; no dialog. **Runtime close observed.** Limits: the screenshot does not show whether a save prompt appeared and was dismissed; the audit records no prompt and no further click; the audit's post-close find (order 156) result is not recorded.

Proof level: the runtime Form was closed once and the Web Client shows no open Form and no dialog after it. This is the second half of AC-9. The first half (pre-click card, single Sign in, visible `received`) is T14 evidence.

## 11. Acceptance status from T15

- AC-2: supported in this window (Form identity, Visual C#, User scope, Save disabled). Classic-versus-Mock-Flex deviation remains recorded from T2.
- AC-3: asset inventory and source readback in this window (two files, relative references, card, `FX_LoginResult`, input types, Sign in). No CSS or extra asset visible.
- AC-4: source readback in this window (partial view; full text covered by T4).
- AC-5: Global `FX_vLoginResult` properties in this window (Persistent True, Global True, blank Value, User version).
- AC-6: one `FX_LoginControl`, Use Web Control and Control URL `FX_Login/index.html` observed. **Partly:** six Form-level UserCtrl variables, three of them stale non-FX_ names, require operator disposition.
- AC-7: method source and empty Errors grid observed in this window. Compile success unresolved.
- AC-8: **not met as specified.** The required single ordinary Designer close and reopen was **not** completed (T9 close failed; T10 to T12 did not complete a close). The fresh Designer window is an observation that the saved definition displays in a new instance with Save disabled, the same method, assets, Global variable, component reference and generated variables. Whether this is a server reload is **unverified**. The claim is limited to "a new Designer window showed the same definition in this session".
- AC-9: runtime close observed (`t15-24`). The round trip is the T14 single-run observation; not proof of Global-object resolution.
- AC-10: see `T16-final-evidence-manifest.md`.

## 12. Deviations and limitations specific to T15

1. Worker stopped at the turn limit before the final report; this summary is reconstructed from the audit and screenshots.
2. Designer opened via "Open designer in a new window" rather than the brief's recent-forms reopen. This was the operator-approved route for T15 but it is not the single ordinary close/reopen the brief requires (AC-8).
3. Seven coordinate clicks (orders 27, 46, 53, 65, 69, 131, 139) with targets not recorded. Save remained disabled in every subsequent accessibility snapshot, and no commit is recorded, but these clicks cannot be attributed to named controls from the audit alone.
4. Screenshots `t15-05` and `t15-09` were each written twice; the saved files are the second captures (orders 37 and 63). The first captures are not preserved.
5. Stale Designer tab from T9 (tab 0 in T14) and the `FX_BridgeTest` tab were not touched per the audit; their current state is **unknown** (not visible in the T15 audit's tab list).
6. Audit order 160: an Edit to the experiment record was reported ok. Its content is not determinable from the audit, and the record as read in T16 contains no T15 section and an unchanged status line.
7. Screenshots not viewed in T16 (file exists; not inspected): `t15-01`, `t15-02` (hover tooltip checks), `t15-06` to `t15-09` (component properties, Behavior, Specific Attributes).
8. The T15 Designer snapshot at 17-14-01 contains two empty `alert` role nodes (lines 1024–1025). They were not interpreted. Empty ARIA alert regions are not evidence of an alert; this is not verified.

## 13. Knowledge state (T15)

- Fresh Designer window for the saved Form, scope and Form identity: **observed** (one instance).
- Save disabled in the fresh window: **observed** (accessibility, repeated).
- Visual C# method, empty Errors grid, Output blank: **observed**. Compile success: **unresolved**.
- Two assets and source readback in the fresh window: **observed** (partial views plus T4).
- FX_vLoginResult properties in the fresh window: **observed**.
- Component reference (Use Web Control, Control URL): **observed**.
- Six Form-level UserCtrl variables, including three stale non-FX_ names: **observed**. Their origin and timing: **unresolved**.
- `User Control Name` re-keyed to `V(UserCtrl_FX_LoginControl)` by the fresh window: **observed**. Contrast with T8: **unresolved**.
- Runtime close: **observed** (`t15-24`).
- Retention through an ordinary close and reopen (AC-8): **not observed** (close not completed).
- Global resolution, compile success, replay, cross-session durability, real authentication: **not claimed**.
