# BLD-018 — Service desk: sign in / create account

Status: done
Date: 2026-10-31
Account (checked at start): to be checked at the first browser step | Designer scope: must read `ScopeType: User`
before any work (a launch can inherit Site scope, BLD-017)
Evidence: full   Guide: none
Final scope for Forms: Site for `FX_ServiceDeskLogin` and `FX_ServiceDesk` (both used by everyone); User for admin
Forms   Group/Site save approved: yes (operator chat, 2026-10-31, see Approvals)
Build prefix: FX_   Existing tenant objects already starting with it (not factory-owned): n/a (default prefix; each new
name gets an absence check)

Request: operator chat, 2026-10-31: "I need a log in / create account page too … just use a generic log in /
create account page, make sure to use the web frontend-design, web-design-guidelines and the mocks images for font,
color spacing etc reference C:\AI\mongoose-factory\mocks\service-desk". Answers (question form, 2026-10-31): own
username + password; anyone can sign up and is active at once; a **separate login Form**; one fake test account.

## Goal
People open the Service Desk login Form, sign in with a username and password or create an account, and land in
the Service Desk app as that person. The app no longer asks "Who are you?"; the server works out who is signed in,
so nobody can act as someone else by picking a name. Sign out ends the session.

## Objects
| Object | Type | New / factory-owned / other | Scope | Change |
|---|---|---|---|---|
| `FX_AgentAccounts` | SQL table + IDO (project FX_ServiceDeskProject) | new (FX_) | tenant-wide | AgentID nvarchar 30 PK (class FX_AgentID), PasswordHash nvarchar 64, PasswordSalt nvarchar 32, Iterations int, CreatedOn datetime, LastSignIn datetime (no lockout columns: operator removed the lock feature) |
| `FX_AgentSessions` | SQL table + IDO | new (FX_) | tenant-wide | TokenHash nvarchar 64 PK, AgentID nvarchar 30, CreatedOn, ExpiresOn, EndedOn (datetime) |
| `FX_ServiceDeskLogin` | Flex Form, one Fill region, UserControl, C# script | new (FX_) | User → Site | sign-in / sign-up page host |
| `FX_ServiceDeskLogin/index.html`, `app.css`, `app.js` | Web User Control Assets | new (FX_) | User → Site | the login page |
| `FX_vSDLoginResult` | Global variable | new (FX_) | User → Site | result of each login-script call |
| `FX_ServiceDesk` C# script + assets | Form script, assets | factory-owned (BLD-015/016/017) | Site (and User for testing) | every method takes the session token instead of `me`; the "Who are you?" picker becomes the signed-in user + Sign out; "Your projects" empty state |
| FX_Agents rows | data | factory-owned table | data | sign-up inserts rows (Role Agent, Active Yes) |
| `fx.test.agent` | fake account | new test data | data | created by the sign-up check, deleted at the end unless you want it kept |

Not changed: FX_Tickets / FX_Projects / FX_Agents Forms (still User-scope admin screens), Mongoose security.

## How it works (design)
1. **Login page** (`FX_ServiceDeskLogin`): one card with two tabs, **Sign in** and **Create account**.
   - Sign in: username, password (show/hide), "Sign in" button. Wrong username or password gives one generic
     message: "Username or password is incorrect. Check both and try again." No lockout (operator: "remove the lock feature when they get 5
     wrong attemps", 2026-10-31).
   - Create account: username (3–30, lowercase letters, digits, `.` `_` `-`), display name, team, password
     (at least 10 characters, with a strength hint), confirm password. Errors show next to each field. Success
     signs the person in straight away (your choice: active at once, role Agent).
   - Look: the Service Desk tokens from `app.css` (colours, radius, spacing, type scale) checked against the mocks;
     the brand mark from the app's sidebar. frontend-design for open choices; web-design-guidelines review with
     fixes recorded; media queries for phone, tablet, desktop.
2. **Passwords**: never stored or logged. Each account gets a random 16-byte salt; the hash is PBKDF2
   (`Rfc2898DeriveBytes`, 100,000 iterations, SHA-256 if this .NET has it, else SHA-1 — the probe decides and the
   record says which). Compared in constant time. This is an **app-level** login on top of Mongoose sign-in, not a
   replacement for Mongoose security.
3. **Sessions**: sign-in creates a random 32-byte token. The server stores only its SHA-256 (`FX_AgentSessions`,
   12-hour expiry); the page keeps the token in `sessionStorage` for the browser tab. Sign out ends it.
4. **Hand-off to the app**: after sign-in the login page asks Mongoose to open `FX_ServiceDesk`. Both pages are
   served from the same Mongoose address, so `FX_ServiceDesk` reads the same token from `sessionStorage`.
5. **Service Desk app**: every script method (`FX_SDLoad`, `FX_SDSetStatus`, `FX_SDUpdateTicket`,
   `FX_SDCreateTicket`, `FX_SDAddComment`) takes the token instead of `me`; the server resolves the active agent or
   answers "Your session has ended. Sign in again." The app shows a sign-in prompt (with a button that opens the
   login Form) when there is no valid session, and a Sign out item under the user's name.
6. **Your existing agent row** has no password, and sign-up refuses names that already exist (otherwise anyone
   could claim it). The operator's old agent row is deleted (operator: "you can delete my account too so I have to
   create my own", 2026-10-31); the operator creates their own account through Create account. Leads are made by changing Role in the FX_Agents Form.

## Approvals required (fill before building)
| Tenant-wide operation | Why | Rollback | Operator approval (quote + date) |
|---|---|---|---|
| Site-scope save of `FX_ServiceDeskLogin` + its 3 assets + `FX_vSDLoginResult` | everyone uses the login | revert those Site versions | "approved … the rest its fine / you can test" (chat, 2026-10-31) |
| Site-scope re-save of `FX_ServiceDesk` (script) + its changed assets | the app must check sessions for everyone | reinstall the BLD-017 versions (`evidence/BLD-017/rollback/`) at Site | same quote |
| Unload All Global Form Objects when switching scope | docs require it | none needed | same quote |

## Plan (each step ends with a Save and a readback)
1. Account and scope check; absence checks for the new names.
2. Local work: login page (3 files), login C# script, app/script changes, preview stubs; headless preview at
   1440 / 1024 / 768 / 390 px; web-design-guidelines review and fixes; `npm run flat`.
3. Tables + IDOs `FX_AgentAccounts`, `FX_AgentSessions` (Maintenance wizard, Create Form: No); check in; read back.
4. **Probe A, open a Form from a page** (unverified): on a scratch FX_ Form, try the route that opens
   `FX_ServiceDesk` (a Form event handler of type Run Form, fired from the script with `ThisForm.GenerateEvent`;
   if that fails, `WSForm.generate` from the page). **Stop and report if neither works**, with a fallback: the login
   page shows "You're signed in — open Service Desk from the menu".
5. **Probe B, PBKDF2 + session hand-off** (unverified): the login script compiles with `Rfc2898DeriveBytes`; a token
   written by one page is read by the other in the same tab.
6. Build `FX_ServiceDeskLogin` in User scope (Form, UserControl, script, assets, variable); Save, reopen, readbacks.
7. Install the changed `FX_ServiceDesk` script and assets — first as a **User version** so only you see it while
   testing (others keep today's Site version).
8. Checks in User scope: sign-up of `fx.test.agent`, sign in, wrong password, sign out, expired
   or missing session in the app, every app action with the session; desktop, tablet, phone.
9. Site saves (approved above): login Form + globals, then FX_ServiceDesk + changed assets; reopen readbacks at
   Site; back to User; then delete the temporary User version of FX_ServiceDesk so you use the Site version again.
10. Check with your second account in the other browser: create an account, sign in, use the app.
11. Clean up `fx.test.agent` (account, sessions, agent row); delete the operator's old FX_Agents row (approved); record.

Steps relying on **unverified** knowledge: 4, 5, 9 (second Site save; the first is observed in BLD-017).

## Acceptance checks
- AC-1: the login Form opens for any user; Create account with valid input creates the agent and signs in; invalid
  input shows a message next to the field and creates nothing; an existing username is refused.
- AC-2: Sign in with the right password opens the Service Desk as that person; a wrong password shows the generic
  message (no lockout).
- AC-3: the app has no "Who are you?" picker; every change is recorded under the signed-in person; without a valid
  session the app shows the sign-in prompt and the server refuses changes.
- AC-4: no password or hash appears in the page, the result variable, the console or the evidence; FX_AgentAccounts
  holds only salt + PBKDF2 hash.
- AC-5: desktop, tablet and phone layouts work; the record lists the web-design-guidelines findings and fixes.
- AC-6: a second account can create an account and sign in (operator's check).

## Rollback / cleanup
- Delete Form FX_ServiceDeskLogin (User and Site), its assets and variable; delete tables/IDOs FX_AgentAccounts,
  FX_AgentSessions.
- FX_ServiceDesk: reinstall the BLD-017 script and assets (`evidence/BLD-017/rollback/`) at Site. The pre-BLD-018 Site
  versions (same content, captured as the step 9 baseline) are in `evidence/BLD-018/rollback/`.
- Test data: fx.test.agent rows (deleted in step 11). Temporary admin Forms FX_AgentAccounts, FX_AgentSessions (User
  scope; remove with Form › Definition › Revert Form Definition, which deletes a User-only Form).

## Build log
- 2026-10-31: brief written; waiting for approval.
- 2026-10-31: **approved** with two changes: "approved but remove the lock feature when they get 5 wrong attemps,
  you can delete my account too so I have to create my own. the rest its fine / you can test". Lockout removed from
  the design; deleting the operator's FX_Agents row added to step 11.
- 2026-10-31: **step 2, local work** (no tenant change).
  - New `assets/FX_ServiceDeskLogin/`: `index.html`, `app.css`, `app.js`, `FX_ServiceDeskLogin.cs.txt` (methods
    `FX_SLSignIn`, `FX_SLSignUp`, `FX_SLCheck`; PBKDF2-SHA256 100,000 iterations, 16-byte salt, 32-byte token stored as
    SHA-256, 12 h), `preview/stub.js` (fake accounts only).
  - Changed `assets/FX_ServiceDesk/`: the C# script takes the session token in every method (`FX_Me(token)`), new
    `FX_SDSignOut`, refusal `{"ok":false,"signin":true}`; `app.js` drops the Me picker, adds the sign-in screen
    (`FX_Gate`, app `inert` behind it), Sign out, token kept out of the console; "Your projects" empty states (sidebar
    and My work); `index.html` gate + sign-out icon; `app.css` gate and rail layout. BLD-017 script copy kept for
    rollback in `evidence/BLD-017/rollback/`.
  - Event names the pages expect (built in steps 4 and 6–7): `FX_OpenServiceDesk` on FX_ServiceDeskLogin (Run Form
    FX_ServiceDesk) and `FX_OpenLogin` on FX_ServiceDesk (Run Form FX_ServiceDeskLogin).
  - Both scripts compile locally against stubs of the Mongoose types (.NET Framework 4 csc); the tenant compile is
    probe B. No line over 100 characters.
  - Headless preview test (`evidence/BLD-018/preview-test.js`): **23/23 pass**: empty sign-in errors and focus, wrong
    password and unknown user give the same message, password cleared, mixed-case username, app opens with no picker,
    token never in the console, sign out → sign-in screen and token removed, create account client errors (4), taken
    name refused, strength meter, new account lands in the app, expired session and no token → sign-in screen, no page
    errors.
  - Screenshots: `p01-login-1440.png`, `p02-signup-errors-1440.png`, `p03-login-mongoose-pane-960x560.png`,
    `p04-signup-mongoose-pane-960x560.png` (sign-up with errors fits the 560 px Form area with no scroll after the fixes
    below), `p05-login-768.png`, `p06-signup-390.png`, `p07-app-gate-960x560.png`, `p08-app-signed-in-empty-1440.png`,
    `p09-app-rail-1024.png` (sign-out icon under the avatar in the icon rail).
  - Fixes found by looking at the screenshots and the test: the gate's `display:grid` overrode `hidden` and blocked
    every click (`.FX_Gate[hidden]`); back ticket cards cut their text (spaced); heading repeated the tab label ("Sign
    in" → "Welcome back"); a field error pushed the Team input down (`align-content: start`); sign-up scrolled in the
    960×560 pane (passwords side by side, short-pane rules, brand panel hidden below 640 px height).
  - Design (frontend-design): the brief fixes the look (app tokens + mocks), so colours, radius and the system font
    stack are the app's; no web fonts (no outbound calls). The one distinct element is the brand panel's stack of
    ticket cards in the app's own pill and type styles.
  - web-design-guidelines review (rules fetched 2026-10-31):
    | Finding | Fix |
    |---|---|
    | FX_ServiceDeskLogin.cs.txt / app: "Username or password is incorrect." gives no next step | "… Check both and try again." |
    | (all other rules) labels, `autocomplete`/`name`, spellcheck off on username, icon buttons labelled, errors inline + first error focused, hover/focus states, alert `role="alert"`, status `aria-live` | pass |
    Kept on purpose: sentence case (as BLD-015); no skip link on the login page (one form, the brand panel is
    `aria-hidden`); the submit button shows "Signing in…" text instead of a spinner; no unsaved-changes warning on the
    login page (nothing to lose but typed credentials).
- 2026-10-31: **step 1, account and scope.** Designer status bar `ScopeType: User`, the operator's own account (not
  the Mock account). Absence: IDOs FX_AgentAccounts and FX_AgentSessions not found; positive control FX_Agents found
  (`01-ido-positive-control-fx-agents.png`).
- 2026-10-31: **step 3, tables + IDOs** (Form › Definition › New › New Data › Maintenance; project
  FX_ServiceDeskProject; Create Scripts unchecked; Create Form? No → "Table and IDO created.").
  - `FX_AgentAccounts` (alias fxacc): AgentID nvarchar 30 PK; PasswordHash nvarchar 64 Req; PasswordSalt nvarchar 32
    Req; Iterations int Req; LastSignIn datetime (`02-accounts-wizard-page1.png`, `03-accounts-created.png`).
  - `FX_AgentSessions` (alias fxses): TokenHash nvarchar 64 PK; AgentID nvarchar 30 Req; ExpiresOn datetime Req;
    EndedOn datetime (`04-sessions-wizard-page1.png`, `05-sessions-created.png`).
  - Both checked in (Web Client IdoCollections → Check In → Revision 2); Properties tab lists the columns plus the
    system columns (`06-FX_AgentAccounts-checked-in-properties.png`, `06-FX_AgentSessions-checked-in-properties.png`).
  - Wizard lessons: pick the Category by visible text; fill the SQL type cell with `fill('nvarchar')` + Tab and never
    open its list (opening it then Tab committed "ABIdType" once; corrected before Next).
- 2026-10-31: **step 6, FX_ServiceDeskLogin in User scope.** Deviation: probe A runs on the real login Form, not on a
  scratch Form (it is FX_, User scope, and as cheap to undo).
  - Flex Basic wizard: Name FX_ServiceDeskLogin, Unit Pixel, Save Template unchecked (`07-login-form-wizard-page1.png`,
    `08-login-form-open.png`); FlexLayout reduced to one Fill region (`09-flexlayout-one-fill-region.png`); Size
    960; 560; Script Language Visual C#. Saved.
  - Assets: Web Assets had no FX_ServiceDeskLogin folder (`10-webassets-absence.png`); created `index.html`,
    `app.css`, `app.js`, each filled from its `.flat` copy; readback before OK `equal true` for all three
    (`11-login-index-before-ok.yml`, `12-login-appcss-before-ok.yml`, `13-login-appjs-before-ok.yml`) → OK → Global
    Objects OK → Save (Save disabled afterwards; the notice wasn't caught).
  - Variable `FX_vSDLoginResult` (Edit › Variable → +): Persistent True, Global True → Save.
  - UserControl `FX_ServiceDeskLoginControl` (`14-usercontrol-placed.png`; rename by the visible Name row) → User
    Control Name ellipsis → Control URL **FX_ServiceDeskLogin/index.html**, Web User Control Asset
    (`15-usercontrol-url-picked.png`) → OK → regen prompt OK → Save. User Control Name
    `V(UserCtrl_FX_ServiceDeskLoginControl)`.
  - Script: template class on line 7 (`16-script-editor-before.png`); Ctrl+A, Delete, insertText of
    `FX_ServiceDeskLogin.flat.cs.txt`; Monaco readback equal (419 lines) → ▶ → **"Built with 0 errors"**
    (`17-script-compile.png`). **Probe B, compile half: passes** (`Rfc2898DeriveBytes` with `HashAlgorithmName.SHA256`
    compiles in the tenant). OK → Save, no error box.
  - Handler (first Run Form handler set up by the factory, **observed**): Details › Event Handlers › + → type
    `FX_OpenServiceDesk` → Enter → Response › Type list → **Run Form** → Parameters … → Event Handler Parameters ›
    Specify Form Run Options › Form typed `FX_ServiceDesk`, Container Type Default (`18-runform-params.png`) → OK →
    grid `FX_OpenServiceDesk 0 Run Form false FX_ServiceDesk( )` → Save.
  - Close (no prompt) → reopen from the Form menu recent list: Version "User version for user [operator]", Flex,
    Visual C#, Unit Pixel, Size 960; 560, `ScopeType: User` (`19-login-form-reopened.png`); script Monaco readback
    equal (387 non-blank lines); assets after reopen equal: index.html 7,075, app.css 9,278, app.js 9,247 chars
    (`asset-readback.js`, whitespace-normalized like compare-readback.js).
- 2026-10-31: **step 7, changed FX_ServiceDesk as the operator's User version** (Site version untouched).
  - Before: FX_ServiceDesk opened in `ScopeType: User` showed "Site Default version" (`20-app-before-user-version.png`);
    the script in the editor equalled the BLD-017 rollback copy (866 non-blank lines), and each asset's editor value
    equalled its BLD-017 rollback copy before it was replaced; the assets were the operator's User versions.
  - Script: Ctrl+A, Delete, insertText of `FX_ServiceDesk.flat.cs.txt` → Monaco readback equal (920 lines) → ▶
    "Built with 0 errors" (`21-app-script-compile.png`) → OK → Save. The grid still said "Site Default version" until
    the Form was closed and reopened: then **"User version for user [operator]"**. Saving a Site-only Form in User
    scope creates the User version (**observed**).
  - Assets index.html, app.css, app.js refilled from the `.flat` copies; compare-readback before OK **equal**
    (`22-app-index-before-ok.yml`, `23-app-appcss-before-ok.yml`, `24-app-appjs-before-ok.yml`) → OK → Global
    Objects OK → Save.
  - Handler `FX_OpenLogin` → Run Form `FX_ServiceDeskLogin`, Default container (`25-openlogin-params.png`) → Save.
  - Close → reopen: "User version for user [operator]", handler FX_OpenLogin listed, script equal (920 lines), assets
    after reopen equal and "User version": index.html 8,605, app.css 34,735, app.js 82,424 chars
    (`26-app-user-version-reopened.png`).
- 2026-10-31: **step 8, User-scope runtime checks (in progress).**
  - The Web Client's Select Form list didn't show FX_ServiceDeskLogin until a portal reload (as in BLD-015); banner
    closed with ×. Screenshot `27-runtime-login-first-load.png`: the login page fills the Form tab.
    - Evidence handling: the first capture showed the account email in the Web Client header (inside the Mongoose
      frame, which the page-level mask doesn't reach) and was **deleted**; retaken with a mask on the frame's
      `text=/@/` as well; crop checked.
  - **Sign-up** `fx.test.agent` (fake password, never written down): `FX_SLSignUp` ok in 688 ms (PBKDF2 runs in the
    tenant). **Probe B, server half: passes.** The page showed "Welcome back, FX Test Agent", then
    `WSForm.generate("FX_OpenServiceDesk")` opened FX_ServiceDesk in a new tab. **Probe A: passes** (Run Form handler
    fired from the page).
  - **Token hand-off:** the app frame read the 64-character token from sessionStorage (same tab, same origin).
    **Probe B, hand-off half: passes.**
  - **Defect found:** the app's first `FX_SDLoad(token)` reached the server *without its argument*: an error box
    "Error during execution of Form script … method [FX_SDLoad] Exception message: Missing parameter does not have a
    default value", and the page timed out after 20 s (`29-runtime-app-mask.png`). Seen on the Run Form open and
    on a plain Select Form open. The same call by hand a minute later returned ok as fx.test.agent. BLD-015/016
    never saw it because their first call took no argument. A later open answered at once, so it is
    **intermittent** (observed 2 of 3 opens).
  - **Fix** (both pages): `FX_SDLoad(string token = null)` and `FX_SLCheck(string token = null)` so a dropped
    argument returns "sign in" instead of raising; the page's first load / session check retries after 1.5 s and
    3 s before it shows the sign-in screen (app) or forgets the token (login). Stubs got `?dropfirst=1`; preview
    test **25/25** (two new cases). Both scripts compile locally; flat copies regenerated (FX_Tickets flat
    unchanged, `cmp`).
  - Reinstalled (User scope): FX_ServiceDesk script (baseline = previous install, Monaco readback equal, "Built with
    0 errors", `30-app-script-fix-compile.png`) and app.js (`31-app-appjs-fix-before-ok.yml` equal);
    FX_ServiceDeskLogin script (`32-login-script-fix-compile.png`) and app.js (`33-login-appjs-fix-before-ok.yml`
    equal). Each saved. Browser HTTP cache refreshed with `fetch(..., {cache: "reload"})`; the server served the new
    files.
  - After the fix: reopen → `FX_SDLoad` ok in 267 ms; app shows FX Test Agent · Agent · QA, empty states, no picker
    (`34-runtime-app-signed-in.png`).
  - Server refusals with a fake or empty token: `FX_SDCreateTicket` and `FX_SDAddComment` → `{ok:false, signin:true,
    "Your session has ended. Sign in again."}`. The load result has no PasswordHash, PasswordSalt or TokenHash.
  - Sign out → `FX_SDSignOut` ok, gate "You're signed out.", token removed, app `inert`
    (`35-runtime-signed-out-gate.png`) → "Open the sign-in page" → **FX_OpenLogin** opened FX_ServiceDeskLogin.
  - Wrong password and unknown user → the same "Username or password is incorrect. Check both and try again.",
    password field cleared (`36-runtime-wrong-password.png`); correct password with mixed-case username →
    `FX_SLSignIn` ok (601 ms) → app loaded as FX Test Agent. The password never appeared in the console.
  - **UX issue:** Run Form opens a *new* tab each time, so app → login → app left two FX_ServiceDesk tabs (the old
    one still on the gate). Probe next: Goto Form instead of Run Form.
  - **Goto Form probe (observed, passes).** FX_OpenServiceDesk (login Form) and FX_OpenLogin (FX_ServiceDesk)
    changed from Run Form to **Goto Form**, same Event Handler Parameters dialog, Form kept
    (`37-gotoform-params.png`), saved; reopen readback `FX_OpenLogin 0 Goto Form false FX_ServiceDeskLogin( )`
    (`38-app-openlogin-goto-reopened.png`). Runtime: login "Open Service Desk" replaced the login tab with
    FX_ServiceDesk; then open app → sign out → sign-in page → sign in left exactly one FX_ tab at each step, the
    last one signed in as FX Test Agent. Goto Form replaces the current Form in its tab; Run Form opens another.
    - Recovery note: the first FX_OpenLogin attempt changed the Type and saved, then its final readback line timed
      out; the fresh inspection showed the change already done, so it was not repeated.
  - Layouts in the Web Client: 1024×768 app, login and sign-up fit the pane with no scroll
    (`39-runtime-app-1024.png`, `40-runtime-login-1024.png`, `41-runtime-signup-1024.png`); 390×844 sign-up stacks
    to one column and scrolls inside the pane, no horizontal scroll (`42-runtime-signup-390.png`).
  - **Stale CSS found at 1024:** the rail showed the sidebar's "No projects yet…" text with a scrollbar. Cause:
    the browser still had the BLD-016 app.css (33,586 chars) while the server had the new one (34,735); assets are
    served `private, max-age=120` with Last-Modified, and the old copy was still used. Fix: both `index.html` load
    `app.css?v=bld018` and `app.js?v=bld018` (the endpoint ignores the query; each new value is a new cache entry).
    Preview check 5/5; both index.html reinstalled (User; `43-app-index-v-before-ok.yml`,
    `44-login-index-v-before-ok.yml` equal) → Save. Runtime: requests went to the `?v=bld018` files and the rail is
    clean (`45-runtime-app-1024-rail.png`). **Rule for later installs: bump `?v=` whenever app.css or app.js
    changes.**
  - Not exercised: a successful write with a session (create/move/comment) — there are no projects yet after the
    BLD-017 cleanup. The write methods use the same `FX_Me(token)` check that the refusals above went through.
- 2026-10-31: **step 9, Site saves: BLOCKED (nothing saved at Site).**
  - Impersonation → Site Default (`46-impersonation-site-default.png`) → Unload All Global Form Objects → Form menu
    recent FX_ServiceDeskLogin → error "Unable to load form FX_ServiceDeskLogin. The form 'FX_ServiceDeskLogin' was
    not found. It is either missing, or there is no version of the form that matches your current credentials."
  - Corrected attempt (the BLD-017 order): Impersonation → User (operator; the scope name was checked in code against
    the Web Client header, not printed) → unload → opened FX_ServiceDeskLogin (opens fine in User) → close → Impersonation
    → Site Default → unload → reopen → **same error** (`47-site-login-form-not-found.png`; status bar blurred).
  - So the BLD-017 route (a User-only Form opens at Site with its User content, then Save makes the Site version) did
    not repeat for this Form. Why FX_ServiceDesk opened at Site and this Form doesn't is unknown.
  - FX_ServiceDesk was **not** re-saved at Site on purpose: the new app needs a session token from the login page, so
    a Site app without a Site login page would lock every other user out. Other users still run the BLD-017 Site
    version (no sign-in) unchanged.
  - Left state: Designer back in `ScopeType: User` as the operator, unloaded, no dialog open. Web Client unchanged.
- 2026-11-01: **step 9 resumed, Site saves done (observed).**
  - The operator put the FX_ServiceDeskLogin Form at Site themselves: "I just did your route of changing to site scope
    loading and unloading a bunch of times" (chat, 2026-11-01). So the BLD-017 cache route does work, but not on the
    first try. Opening it then showed `{"Success": false, "Message": "Error processing metadata request: path not
    found"}`: the page's assets had no Site version.
  - Designer relaunched (Site Default) → unload → FX_ServiceDeskLogin Properties "Site Default version".
  - Web Assets at Site listed only `$app`, `FX_ServiceDesk`, `mongoose`, `sohoComponents`, `sohoxi`. Created
    `FX_ServiceDeskLogin/index.html`, `app.css`, `app.js` (+ → name → OK; the **first OK click after Tab is ignored,
    the second works**), each "Site Default version", filled from the `.flat` copies; compare-readback before OK
    equal (`48-site-login-index-before-ok.yml`, `49-…appcss…`, `50-…appjs…`) → Save. Variable `FX_vSDLoginResult`
    created at Site (Persistent True, Global True by default) → Save.
  - Close → unload → reopen at Site: Form "Site Default version"; script equal to `FX_ServiceDeskLogin.flat.cs.txt`
    (422 lines, has the `token = null` default); assets all "Site Default version" and equal; variable Site, True/True.
  - Runtime: login page renders (`51-runtime-login-site-assets.png`).
  - **FX_ServiceDesk Site re-save** (only after the login worked): Site version baseline = BLD-017 (script equal to
    the rollback copy, each asset equal to its rollback copy before the fill). Script replaced (987 lines, equal) →
    "Built with 0 errors" (`52-site-app-script-compile.png`) → Save. Assets index.html (?v=bld018), app.css, app.js
    refilled, compare-readback equal (`53`–`55-site-app-*-before-ok.yml`) → Save. The Site version had **no** event
    handlers: added `FX_OpenLogin` → Type Goto Form → Save → (session expired during a usage pause; re-login via
    portal SSO, configuration picker OK, fresh Designer; the saved Type survived) → Parameters Form
    `FX_ServiceDeskLogin` (`56-site-openlogin-params.png`) → Save.
  - Close → unload → reopen at Site: "Site Default version", script equal (989 lines), assets "Site Default version"
    and equal (index 8,717 / css 34,735 / js 83,146), handler `FX_OpenLogin 0 Goto Form false FX_ServiceDeskLogin( )`
    (`57-site-app-reopened-handler.png`).
  - Runtime: FX_ServiceDeskLogin → "Open Service Desk" → Goto Form replaced the tab with FX_ServiceDesk, signed in
    as FX Test Agent, no picker, no error box (`58-runtime-site-login-to-app.png`). The operator still has User
    versions, so this is not yet proof of what other users see (step 10).
  - Back to User (operator, checked against the header) → unload. FX_ServiceDesk now opens as "Site Default
    version" in User scope (the operator's User Form version is gone, as in BLD-017); FX_ServiceDeskLogin still opens
    as "User version for user [operator]". The operator's User versions of both apps' assets and variables were not
    touched. Form › Definition offers **Revert Form Definition**; not used yet (asks first).
- 2026-11-01: **operator's User versions removed** (operator: "Remove them (Recommended)", question answer, 2026-11-01).
  - FX_ServiceDeskLogin Form, User scope → Form › Definition › **Revert Form Definition** → "Warning: found customized
    global object(s)… Are you sure you want to remove the User version for user [operator] of form
    FX_ServiceDeskLogin?" → OK → Properties now "Site Default version".
  - Web Assets in User scope: the trash button deletes **only the current scope's version** (probe on
    FX_ServiceDeskLogin/index.html: "Are you sure you want to delete Web Asset …?" → Yes → OK → Save → unload →
    the file is listed again as "Site Default version"). Then the other five (login app.css, app.js; app
    index.html, app.css, app.js) the same way → Save → unload: all six "Site Default version". (In the open dialog
    a deleted file disappears from the tree until Save + unload.)
  - Variables FX_vSDLoginResult and FX_vSDResult (User versions) deleted the same way ("Are you sure you want to
    delete variable …?") → Save → unload: both "Site Default version", Persistent True, Global True.
  - Runtime with Site versions only: login "continue" panel → Open Service Desk → app signed in (no error box) →
    Sign out → gate "You're signed out.", token removed → "Open the sign-in page" → FX_ServiceDeskLogin sign-in form
    (`59-runtime-site-only-signout-to-login.png`, email masked).
  - State now: every BLD-018 Form, asset and variable exists only as a Site Default version; the operator sees
    exactly what other users see. Next: step 10 (operator's second account), step 11 cleanup.
- 2026-11-01: **step 10 passed (operator):** "Yes account creation works, log in sign out all works" (chat,
  2026-11-01), from a second account.
- 2026-11-01: **change: brand panel removed** (operator: "remove this part of the log in/create accout … page", with a
  screenshot of the left panel; chat, 2026-11-01).
  - `index.html`: the `FX_Story` aside (brand, "Every request in one queue.", three sample tickets) and the icons only
    it used are gone; the card's own "Service Desk" brand now shows at every width (hidden only on panes under 640 px
    high, as before). `app.css`: one centered card, panel/ticket/pill rules and the 1000 px query removed;
    `?v=bld018b`. app.js and the script unchanged.
  - Preview: `preview-test.js` 25/25; layouts 1920×800, 1024×560, 390×844 with no horizontal scroll
    (`60`–`62-preview-login-no-panel-*.png`).
  - Site install (Site save of these assets approved, step 9): Site Default → unload → index.html (baseline 7,187 =
    the step 9 install) and app.css (baseline 9,278) refilled, compare-readback before OK equal
    (`63-site-login-index-nopanel-before-ok.yml`, `64-…appcss…`) → Save → close → unload → reopen: all three assets
    "Site Default version" and equal (index 5,356 / css 6,538 / js 9,636). Back to User (operator) → unload.
  - Runtime: the login page loads `app.css?v=bld018b`, no brand panel, card centered (`65-runtime-login-no-panel.png`).
- 2026-11-01: **step 11, cleanup** (operator: "yes do the cleanup", chat, 2026-11-01). Designer User scope, operator
  checked against the Web Client header.
  - Temporary admin Forms (Classic Multi-View, BLD-017 route: Form › Definition › New → Category "Classic /
    WinStudio classic form wizards" → Wizard "Multi-View" → Name and Data Source = the IDO name → Save Template
    unchecked → "Process Completed Successfully" → "User version for user [operator]"): `FX_AgentAccounts` with
    AgentID, Iterations, LastSignIn only (PasswordHash and PasswordSalt moved back with `<` on the properties page),
    `FX_AgentSessions` with AgentID, EndedOn, ExpiresOn only (TokenHash moved back). No hash or token was displayed.
    Select Form listed them only after a Web Client reload, and its filter updates only on typed keys (fill() does
    not filter).
  - Before-readbacks: `66-before-agentaccounts.txt` (2 rows), `67-before-agentsessions.txt` (6),
    `68-before-agents.txt` (3).
  - Deletes, each row: select by row number, checked against the selected record → toolbar Delete → "Selected records
    will be permanently deleted upon Save." → OK → Save → Refresh → count down by one; the loop stopped on any other
    prompt.
    - FX_AgentAccounts: fx.test.agent (2 → 1).
    - FX_AgentSessions: the four fx.test.agent sessions (6 → 2).
    - FX_Agents: fx.test.agent (3 → 2), then [operator old agent], the row with no account (2 → 1).
  - Readback after closing and reopening each Form + Refresh: FX_AgentAccounts 1 row, FX_AgentSessions 2 rows, FX_Agents
    1 row, all the operator's current account. No fx.test.agent row anywhere.
  - Not re-run: an app sign-in after the cleanup (only the operator knows their Service Desk password). The deleted
    rows were test data the app no longer references; the operator's account, agent row and sessions are untouched.
  - The two temporary Forms are kept as User-scope admin screens, as in BLD-017 (they show no secrets).
    Delete Form Definition is never used (standing rule, `playbooks/forms.md`).
  - `assets/.bld018tmp/` (pre-BLD-018 Site copies of the FX_ServiceDesk script and assets, the step 9 baseline) moved to
    `evidence/BLD-018/rollback/`. No credentials in them.
- 2026-11-01: **record.** Status: done. AC-1, AC-2, AC-3 (runtime, steps 8–10), AC-4 (no secret in the page,
  variable, console or evidence; the admin Forms leave the hash columns out), AC-5 (preview 1440/1024/768/390 and
  the no-panel layouts), AC-6 (operator's second account) all pass.
- 2026-11-01: **change: resolved dates in local time** (operator asked whether dates are still off; plan approved,
  2026-11-01, including the Site save of the FX_ServiceDesk assets and the unloads).
  - Finding: the tenant clock is UTC (BLD-015 step 8). Created/updated/comment/history stamps were already converted
    (BLD-015), but `resolvedOn` (set by the script with `DateTime.Now`, sent with a time) was read as a local calendar
    date. At UTC+8 a ticket resolved 00:00–07:59 local showed the previous day in the detail, "Resolved this week",
    the board's closed column and the dashboard.
  - `app.js`: `markTickets` also marks `resolvedOn` as UTC; config comment updated. `index.html`: `app.js?v=bld018c`.
    Preview stub sends resolved stamps as UTC. Script, tables, login page unchanged. Server-side session expiry and
    LastSignIn compare UTC with UTC and were already right; Web Client admin Forms still show raw UTC values.
  - Checks: Node, `parseDate("2026-11-01T23:30:00Z")` → Nov 2 07:30 at UTC+8 (was Nov 1 23:30); `preview-test.js`
    25/25; preview Resolution lines SUP-5 "Fixed · Oct 31", FAC-3 "Fixed · Oct 23" as expected.
  - Site install: Impersonation Site Default → unload → app.js (baseline 83,146) and index.html (baseline 8,717)
    refilled, compare-readback before OK equal (`69-site-app-appjs-resolved-utc-before-ok.yml`,
    `70-site-app-index-resolved-utc-before-ok.yml`) → Save after each → unload → readback: all three assets "Site
    Default version" and equal (index 8,718 / css 34,735 / js 83,157). Back to User (operator, checked against the
    header) → unload.
  - Runtime: FX_ServiceDesk in the Web Client loads `app.js?v=bld018c`, sign-in prompt (no session in that tab), no
    page errors. Not checked live: resolving a ticket signed in (needs the operator's Service Desk sign-in).

## Deviations
1. **The login Form wouldn't open at Site** at first. The operator got there by switching scope and loading/unloading
   the global objects several times. Then the page showed `Error processing metadata request: path not found`: the
   three assets and the variable existed only as User versions. Each global object needed its own Site version
   (the same as BLD-017); after that the page loaded.
2. **The Site version of FX_ServiceDesk had no event handlers**: the User-scope `FX_OpenLogin` handler did not carry
   over. It was added again at Site.
3. **The operator's User versions were removed** (answer, 2026-11-01): Revert Form Definition for the login Form;
   for assets and variables, the trash button in User scope deletes only the User version.
4. **Brand panel removed** after step 10 at the operator's request (index.html + app.css only, `?v=bld018b`).
5. **The temporary admin Forms were kept** (User scope, no hash columns) instead of deleted.
6. **No lockout** (operator removed the 5-attempt lock before the build).

## Objects created or changed
- Tables + IDOs (tenant-wide, project FX_ServiceDeskProject): `FX_AgentAccounts`, `FX_AgentSessions`.
- Form `FX_ServiceDeskLogin`: Site Default version only (Flex, UserControl, C# script, handler `FX_OpenServiceDesk`
  = Goto Form FX_ServiceDesk).
- Assets `FX_ServiceDeskLogin/index.html`, `app.css`, `app.js` and global variable `FX_vSDLoginResult`: Site Default
  versions only.
- Form `FX_ServiceDesk`: Site version's script (token-based methods) and assets replaced; handler `FX_OpenLogin` = Goto
  Form FX_ServiceDeskLogin added. Assets and `FX_vSDResult`: Site Default versions only.
- New admin Forms (User, operator): `FX_AgentAccounts`, `FX_AgentSessions`.
- Data: sign-up created the operator's account (FX_AgentAccounts + FX_Agents row). Deleted: all fx.test.agent rows
  and [operator old agent] (before-readbacks 66–68).

## Playbook proposals (applied 2026-11-01 at the operator's request: forms.md, browser-and-session.md, web-user-controls.md, events-and-scripts.md, portal-shell.md, extending-existing-forms.md, login-and-security.md, SKILL.md)
- `forms.md` § Group or Site scope: every global object a Form uses (Web User Control Assets, global variables) needs
  its own Site version. A Site Form whose asset is missing shows `Error processing metadata request: path not found`
  in the page area. Observed twice (BLD-017, BLD-018).
- `forms.md` § Group or Site scope: event handlers added in User scope are not in the Site version. Check the Event
  Handlers grid at Site and add the missing ones. Observed (BLD-018).
- `forms.md` § Group or Site scope: getting a User-only Form to open at Site can take several rounds of scope switch +
  Unload All Global Form Objects (operator's report). Unverified as a procedure.
- `extending-existing-forms.md` / `forms.md`: Revert Form Definition removes this scope's Form version (warns about
  customized global objects). For a User-only Form it removes the Form. In Web Assets and Variables, the trash
  button deletes only the current scope's version; after Save + unload the next scope's version shows. Observed.
- `browser-and-session.md`: in Designer "New" name dialogs the first OK after Tab can be ignored; check that the
  dialog closed and click OK again. Form Wizard Selection lists are `.mg-tile.x-combo-list-item` tiles, not
  `.x-boundlist-item`. Select Form's filter needs typed keys. Web Client tab close: mouse-click the tab's
  `.x-tab-close-btn` (a DOM click does nothing).
- `portal-shell.md`: to move between two Forms from a page, use an event handler of type **Goto Form** (it replaces
  the tab); Run Form opens a second tab. Observed (BLD-018).
- `web-user-controls.md`: bump `?v=` on every app.css/app.js change; the browser cache otherwise serves the old file.
  The first `WSForm.invoke` from a just-opened Form can arrive without its argument; retry it after 1.5 s and 3 s
  instead of treating the result as a failure (BLD-018 step 8).
- `browser-and-session.md` § Evidence: in the Web Client the user's email is inside the Mongoose iframe; mask
  `frameLocator(<mongoose iframe>).locator('text=/@/')` as well as the top page before any screenshot.
- `forms.md`: a temporary Multi-View admin Form over a table with secrets can leave those columns out on the wizard's
  properties page (`<`), so cleanup never displays them. Observed (BLD-018).
