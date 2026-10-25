# EXP-133 T13 — Runtime FX_LoginPortal: STOPPED at Session Expired; session re-established (2026-10-26)

Outcome: **the runtime round trip was NOT performed.** The Select Form OK for FX_LoginPortal was followed by a Mongoose "Session Expired" modal before any runtime Form content was observed. Per the standing session-expiry procedure, the interrupted step was not resumed in this task. Pre-click state, masked password, Sign in, FX_LoginResult readback and runtime close were **not reached** (counts 0). The Web Client was re-established on the required account and configuration (no sign-in form appeared), and FX_LoginPortal is **not open** as a runtime Form at task end. The T14 premise (runtime Form open) is therefore not met.

## Step 0 — Account and configuration gate (before the runtime step)

- Tab list (read-only) first: tab 0 = stale Designer (`FX_LoginPortal`, untouched); tab 1 = Web Client (`Mongoose`).
- Tab select index 1 (Web Client). Fresh untargeted snapshot: header button `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; Explorer rendered; no dialog; no sign-in content.
- Web Client console baseline at gate: **3 errors / 10 warnings**.
- Gate passed (observed).

## Step 1 — Open the saved runtime Form (interrupted)

1. Form menu opened (one click). Its recent-forms list shows FX_BridgeTest, FX_CustomerPortal, FX_Orders, Test ION API Invoke, Access As, EX_Items, IDO Projects, FX_Items, FX_FlexProbe01, FX_OrdersChart. **FX_LoginPortal is not in the recent list** (observed, `evidence/playwright/page-2026-10-25T16-53-42-485Z.yml`).
2. Form menu > Open (one click) launched the Select Form dialog. Its filter textbox already contained `FX_LoginPortal` (carried from an earlier session, not typed in T13). The grid showed **one row**: Caption `FX_LoginPortal`, Name `FX_LoginPortal` (`evidence/playwright/page-2026-10-25T16-53-49-412Z.yml`).
3. One click on that row (row became `[active]`; `evidence/playwright/page-2026-10-25T16-53-58-753Z.yml`).
4. One click on Select Form **OK** (`evidence/playwright/page-2026-10-25T16-54-04-061Z.yml`). The snapshot showed **`alertdialog "Session Expired"`**: "Your session has expired." with OK. No FX_LoginPortal runtime content was observed in that snapshot.
5. Runtime step **stopped here** under the session-expiry procedure. Nothing was typed in any field. Password: never entered. Sign in: 0.

## Session-expiry procedure (standing authorization, 2026-10-13)

- Click the modal's OK, once (one click; `evidence/playwright/page-2026-10-25T16-54-12-175Z.yml`). After it, the Mongoose frame showed the Explorer again with no sign-in form (grep: no "Sign in", "Username", "Password", "CloudIdentities"). Console rose to 13 errors / 11 warnings (see console section).
- No sign-in form appeared in the tab, so the one permitted navigation was taken: `navigate` once to `https://mingle-portal.se1.inforcloudsuite.com/G6R8LJ9Q4E8C2Z8Y_DEM/`. This triggered a native **beforeunload ("leave page")** prompt on the Mongoose page (no in-page unsaved Form was open: the runtime Form had not opened). The prompt was **accepted once** (`browser_handle_dialog accept=true`) so that the authorized navigation could complete. This is disclosed as a dialog interaction.
- The navigation landed on the Infor OS portal (`System Administrator` workspace, `.../89e55a10-...?inforWorkspace=infor.common.sysadmin.productivity`). The Infor CloudIdentities **sign-in form did not appear**; no username, password, or tenant text was typed.
- The portal showed a `portal-notification` strip ("The DistributionIFSContactUs group does not have any active users…"). Standing rule applied: dismissed **once** with its own "Close notification" control (`f2e406`). The "here" link was **not** clicked.
- Opened the Mongoose app from the portal: navigation menu (one click) > search `Mongoose` (one text entry into the portal's menu search box; no credential) > the single `Mongoose` result under Applications (one click; LogicalId `lid://infor.mongoose.mongoose`).
- The configuration Sign In **did not appear**: Mongoose opened directly into the Web Client Explorer. Header read `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` (`evidence/playwright/page-2026-10-25T16-55-22-311Z.yml`; screenshot `t13-08`). No dialog. No Form tab open. **Session re-established** (account and configuration match; no sign-in performed).
- Per the procedure, the interrupted runtime step was **not resumed** in T13.

## Runtime observations — not reached (counts 0)

- Runtime FX_LoginPortal identity, login card, pre-click empty `FX_LoginResult`, masked password, Sign in activation, received readback, alert check, runtime close: **none observed or performed**.
- Whether the Select Form OK had begun to render the runtime Form behind the modal is **unknown**; after re-establishment, the Explorer shows no Form tab, so no runtime Form is open now.

## Console

- Web Client gate baseline: 3 errors / 10 warnings (`evidence/playwright/console-2026-10-25T16-53-34-496Z.log`).
- After the Session Expired OK: 7 errors / 10 warnings, then 13 / 11 during navigation (`evidence/playwright/console-2026-10-25T16-53-34-497Z.log` lines 49–59).
- New page context after the navigation (counter reset per page): 0 / 9 on the portal, then 7 / 10 on the re-opened Mongoose app, then 8 / 10 after the screenshot (`evidence/playwright/console-2026-10-25T16-54-41-523Z.log` lines 36–45).
- Classification (read from the log text): every new error line is `Permissions policy violation: unload is not allowed in this document` (same class as the 2 pre-existing "unload" entries in the Designer baseline), from `res/login/default-app.js`, `res/wswebform/wswebform-app.js` and `Scripts/yggdrasil-core.js`. New warnings: `MessageBrokerService: Site already loaded`, portal `WidgetLoaderComponent` deprecation notices, and an origin-trial notice. **No new error type other than the unload policy message was observed.** The rise is real, but it occurred during the session-expiry handling and page re-initialization, not during a runtime action. Cause of the unload entries: **unresolved**.

## Action ledger (T13)

- Tab list 1; tab select 1 (Web Client). Fresh untargeted snapshot 1 (gate). Targeted snapshot 1 (portal navigation menu, `f2e433`). Auto-snapshots from actions: several.
- Clicks 8: Form menu 1; Form > Open 1; Select Form row 1; Select Form OK 1; Session Expired OK 1; portal banner close 1; portal navigation menu 1; Mongoose search result link 1.
- Text entries 1: `Mongoose` into the portal menu search box (not a Mongoose field, not a credential).
- Navigate 1 (the permitted URL). Native dialog accepted 1 (beforeunload, after navigate).
- Waits 2 (3 s, 4 s). Finds 1 (`Sign in`, no match). Screenshot 1 (`t13-08`). Reads: grep/read on saved snapshots and console logs ~12.
- Typed into Mongoose fields 0. Credentials typed 0. Password entered 0. Sign in 0. Runtime open 0 (attempted via OK; not observed as rendered). Runtime close 0. Browser JavaScript written by the worker 0 (the tool-generated `Ran Playwright code` blocks are not worker code).
- Mutations: Designer Save 0; Form close/reopen 0; Form Script, asset, variable, component edits 0; Global objects 0; Regenerate, Delete Form Definition, Unload, FormSync 0. The stale Designer tab (tab 0) was not selected or touched in T13.
- Recovery: fresh-snapshot allowance 0 of 1 used; corrected inspection 0 of 1 used; Ref-not-found 0. Session-expiry procedure: modal OK once (1 of 1), navigation once (1 of 1), sign-in form not present so no Infor credential entry, configuration sign-in not required. Portal banner dismissal 1.

## Evidence files (T13)

- `evidence/EXP-133/t13-08-session-reestablished-webclient-explorer-account-config.png`: Web Client Mongoose Explorer after re-establishment. Shows the header `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`, the Explorer tree (My Folders, Master Explorer, Public Folders, User Folders), no Form tab, no dialog. **Proves** the account/config gate after re-establishment. **Does not prove** any runtime FX_LoginPortal behaviour, the server-side Form state, or a received result. The numbering starts at 08 because the T13 capture sequence was not renamed.
- `evidence/EXP-133/T13-runtime-session-expiry-stop.md`: this file.
- Experiment record: `experiments/EXP-133-minimal-fx-loginportal-with-client-validation-and-.md` (T13 section appended).
- Tool-written and disclosed outside `evidence/EXP-133/`: `evidence/playwright/page-2026-10-25T16-53-42-485Z.yml`, `…16-53-49-412Z.yml`, `…16-53-58-753Z.yml`, `…16-54-04-061Z.yml` (Session Expired snapshot), `…16-54-12-175Z.yml` (post-OK), `…16-54-25-882Z.yml`, `…16-54-41-560Z.yml` (navigation), `…16-54-53-250Z.yml` (portal), `…16-55-06-061Z.yml`, `…16-55-11-818Z.yml`, `…16-55-22-311Z.yml` (Mongoose re-opened); console logs `evidence/playwright/console-2026-10-25T16-53-34-496Z.log`, `…16-53-34-497Z.log`, `…16-54-41-523Z.log`. Session-wide console history; the snapshot names are tool-generated.

## Acceptance (T13 view)

- **AC-9 (runtime):** **not met / not reached.** No pre-click state, no entry, no Sign in, no received readback, no runtime close. The runtime step is interrupted by Session Expired and is not resumed in this task.
- **AC-1 to AC-8:** unchanged from earlier tasks. T13 adds only the account and configuration gate after re-establishment (`t13-08`).
- **AC-10:** not started (final manifest later).

## Knowledge state (T13)

- Session Expired modal appearing immediately after the Select Form OK for FX_LoginPortal: **observed** (one run). Cause (idle timeout is plausible; the Web Client had been idle since T11–T12): **unresolved**.
- Re-establishment by the procedure (OK, one navigation, beforeunload accepted, portal banner dismissed, Mongoose re-opened from the portal, no sign-in form, no config sign-in): **observed** (one run).
- FX_LoginPortal absent from the Form menu's recent list while present in Select Form: **observed** (one run).
- Runtime render, login card, FX_LoginResult, received round trip: **not observed**.
- The unload permissions-policy console entries recurring on page re-initialization: **observed**; cause **unresolved**.

## Open items for the coordinator (T14)

1. **FX_LoginPortal is not open as the runtime Form.** The T14 approach (split button from the runtime Form) needs the runtime Form to be opened again first. That is a separate authorization, since the interrupted runtime step must not be resumed in T13.
2. The runtime test (fixed fake pair, single Sign in, readback, close) still needs a fresh task. Its Select Form path and the observed session expiry should be considered: the Web Client may need a fresh gate first.
3. The stale Designer tab (tab 0, FX_LoginPortal, Save disabled at last read) was not touched and still holds the T9/T10/T11/T12 state.
4. Whether the Session Expired modal came from the Web Client idle timeout is unresolved.

## Stop

- Stopped at the T13 boundary after session re-establishment. The Web Client is on the Mongoose Explorer with the correct account and configuration; no dialog; no Form open. The Designer tab (tab 0) was not touched. No runtime Form is open, so the T13 requirement to leave FX_LoginPortal open is **not met**.
