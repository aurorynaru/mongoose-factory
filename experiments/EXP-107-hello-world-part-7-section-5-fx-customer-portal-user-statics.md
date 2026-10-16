# EXP-107 - Hello World Part 7 Section 5: FX_CustomerPortal user-region Statics (StaticCustIcon, StaticCustID) and readback

Status: **T6 done (observed): one Form-tab close and one recent-forms reopen; both Statics read back under FlexLayoutHeader > Region01: user with the values listed in T6; Form open and clean. The T3 left/right canvas attribution is superseded (see the T3 correction and T6). Not declared EXPERIMENT_COMPLETE; the operator decides acceptance.** The latest task (T6, below) is the read-only readback plus this documentation update. Earlier: T3 (StaticCustID placed, configured and saved once), T2 (StaticCustIcon), and T1-R2 (gate with one Form open). The earlier T1 and T1-R status is kept for the audit trail:
- **Earlier T1 (authentication task):** the Web Client tab had logged out; the session-expiry procedure ran once (top-level navigation to the portal URL); the Infor CloudIdentities Sign In click timed out twice ("waiting for element to be visible, enabled and stable"). The Designer tab was not inspected.
- **T1-R (gate recovery task, after the operator restored authentication manually):** the Designer tab shows User scope and Save disabled, but the canvas is empty and the Properties tree is empty. FX_CustomerPortal is **not observed as open**, so the Components tree, the user region and the absence checks could not be recorded. Per the T1-R instruction the Form was not opened.

No Mongoose change was made in either task. Acceptance checks AC-1 to AC-6 are **not yet evaluated** beyond the observations below.

Brief commits: `8e7626c` (draft), `27d53a8` (draft fix), `d9c3279` (approved).
Source sections read before the first browser action: `AGENTS.md`; `docs/mongoose/transcripts/hello-world-pt7.md` lines 165-182 (Section 5, 07:31-08:51); `recipes/components/add-component-from-toolbox.md`; `recipes/components/configure-basic-component.md`; `recipes/session/session-expiry-and-stale-designer.md`; Outcome (operator) sections of EXP-106 (lines 865-886), EXP-105 (383-403) and EXP-101 (254-273).

Note: this record did not exist in the working tree at the start of T1; it was created by this task.

## Scope of this run (brief summary)

- Planned work: two Statics in FlexLayoutHeader > Region01: user on User-scope Form FX_CustomerPortal.
  - T2: StaticCustIcon, Bitmap File Name FX_CustomerIcon.png, Justification Right, Size 4; 1.5, No Colon True; one Designer Save.
  - T3: StaticCustID, Theme Class FX_WhiteHeader, Justification Left, Size 10; 1.5, No Colon True; binding rows read-only (Binding Type Variable / Customer ID is deferred to Part 8); one Designer Save.
  - T4: one ordinary close and reopen, readback.
- Not in scope: Regenerate Form, any Data Source binding, global objects, other Forms, runtime actions.

## T1 - Read-only gate (this run)

### Sequence (observed)

1. Browser tabs listed (read-only, before any selection): 0 = current tab, "Logout Successful" (Infor SLO signout page); 1 = Infor Mongoose Application Development Framework (Designer URL, `mode=designer`, configgroup G6R8LJ9Q4E8C2Z8Y_Mongoose_DEM).
2. Snapshot of tab 0: the page is the Infor "Logout Successful" card ("You have been successfully logged out. You can now close all browser windows."). No Mongoose "Session Expired" modal and no sign-in form were present in this tab.
3. Screenshot `evidence/EXP-107/t1-01-tab0-web-client-logout-successful.png` (first attempt timed out at "taking page screenshot"; the retry succeeded). Shows the logout card only.
4. Session-expiry procedure (worker preamble), step 2: no modal, so no OK click. One top-level navigation of tab 0 to `https://mingle-portal.se1.inforcloudsuite.com/G6R8LJ9Q4E8C2Z8Y_DEM/`. The tab then showed "Infor OS Portal" and redirected to the Infor CloudIdentities Sign In page (tab title "Infor CloudIdentities - Sign In", top-level tab, not an embedded frame). The form has a Username textbox, a Password textbox and a Sign in button; no tenant field.
5. Fresh snapshot (after navigation): the sign-in form is listed with refs for Username, Password and Sign in.
6. Username field filled with the placeholder `SECRET_MONGOOSE_USERNAME` (Playwright substitutes the value). Password field filled with the placeholder `SECRET_MONGOOSE_PASSWORD`. No credential value was typed or recorded by the worker.
7. Sign in click #1: `browser_click` on the Sign in button (locator resolved to `button[data-test-id="login-signin-button"]`) raised `TimeoutError ... waiting for element to be visible, enabled and stable`. The page did not change.
8. Fresh snapshot: the sign-in form still shows both fields filled and the Sign in button; no navigation.
9. Screenshot `evidence/EXP-107/t1-02-tab0-signin-form-before-signin-click.png` (visual inspection): the sign-in card is fully visible; the Sign in button is visible, blue and in the card, with no overlay or banner visible. The Username field shows its resolved value in plain text (see "Credential-visibility note" below). The Password field is masked.
10. Sign in click #2 (one corrected attempt, same fresh ref): same `TimeoutError` at "visible, enabled and stable". The page did not change.
11. Stop per the brief: no third click, no Enter key, no other route. Tab 1 (Designer) was not selected, snapshotted or screenshotted. The Designer gate is **not evaluated**.

### Gate result

- AC-1 (Designer gate: User scope, FX_CustomerPortal open and clean, Components tree, user region position, no StaticCustIcon/StaticCustID): **not established.** The Designer tab was not inspected in T1.
- Session: **not re-established.** The sign-in form is still open in tab 0 with both placeholders entered and no submit. The brief's rule for the session procedure ("session re-established" or the exact failure) is reported as: exact failure = Sign in button click timed out twice at "visible, enabled and stable" while the locator resolved.

## Findings (observed)

1. The Web Client tab (tab 0) was on Infor's "Logout Successful" page at the start of T1, with no Mongoose modal. The recipe's expiry symptom list includes this page.
2. A top-level navigation to the portal URL landed on the Infor CloudIdentities Sign In form (no tenant field).
3. The Sign in button did not accept a Playwright click (two attempts, same error) although a screenshot shows it visible and enabled. Suspected environment or rendering blocker. It is not known whether the portal's own button handler is the cause. Not reproduced outside this task.
4. The Designer tab was not inspected. Whether it is now expired is **unknown** (the session-expiry recipe says a Designer tab loaded before the expiry can look normal and fail only on its next server event). Per the procedure, it is left for the coordinator's next task.

## Credential-visibility note

`evidence/EXP-107/t1-02-tab0-signin-form-before-signin-click.png` shows the Username field's resolved value in plain text. It is an account identifier, not the password, and it is not recorded in this document. The password field is masked. The operator should review that image before it is committed or shared. The worker has no delete or redact tool for files.

**Operator action (2026-10-16):** `t1-02-tab0-signin-form-before-signin-click.png` was deleted by the operator assistant on the operator's decision, without being opened, because it showed the username in plain text. It is not committed. The text description in step 9 stands as the record of that state.

## Action audit (earlier T1, authentication task; cumulative totals are in the T1-R section)

| Category | Count | Detail |
| --- | --- | --- |
| Browser tab lists | 1 | before any selection |
| Tab selections | 0 | none |
| Fresh snapshots (explicit `browser_snapshot`) | 3 | after the logout check; after navigation; after sign-in timeout #1 |
| Screenshot calls | 3 | 1 timed out, 1 retry succeeded (t1-01); 1 succeeded (t1-02); files saved: 2 |
| Top-level navigations | 1 | portal URL, session-expiry procedure step 2 (permitted) |
| Modal OK clicks | 0 | no modal present |
| Credential placeholder entries | 2 | Username and Password on the Infor CloudIdentities form (placeholders only) |
| Sign in click attempts | 2 | both timed out; neither dispatched |
| Re-login procedure runs | 1 | started; **not completed** (count of re-logins completed: 0) |
| Embedded-frame sign-in attempts | 0 | none |
| Toolbox selections | 0 | |
| Canvas placement clicks | 0 | |
| Coordinate clicks | 0 | |
| Undo clicks | 0 | |
| Property entries / corrections | 0 / 0 | |
| Designer Saves | 0 | |
| Form close / reopen | 0 / 0 | |
| Prompts / dialogs answered | 0 / 0 | |
| Server-event errors | 0 | none seen (Designer not reached) |
| Component selections in Designer | 0 | |
| Unload / checkout / FormSync / deployment / Regenerate | 0 | |
| Runtime actions | 0 | |
| Reads of documentation (T1 sources) | 9 | AGENTS.md; this record path (did not exist); 3 recipes; transcript lines 165-182; Outcome sections of EXP-106, EXP-105, EXP-101; plus 2 Globs and 1 Grep for experiment and transcript timestamps |

Documentation-read disclosure: the transcript Grep (timestamp pattern) also returned matching lines from Section 6 and a summary table (lines 145, 184, 292-298 as headings and table rows). Their text was displayed by the search output; no Section 6 content was read, and no Section 6 action was taken. The EXP-101/106/105 Outcome reads ran to the end of each file, which is the Outcome section for each.

## Worker-written file inventory (this task)

| Path | Action |
| --- | --- |
| `experiments/EXP-107-hello-world-part-7-section-5-fx-customer-portal-user-statics.md` | created (this record) |
| `evidence/EXP-107/t1-01-tab0-web-client-logout-successful.png` | created (screenshot) |
| `evidence/EXP-107/t1-02-tab0-signin-form-before-signin-click.png` | created (screenshot); **deleted by the operator assistant** (credential visibility; see note) |

Tool-generated (Playwright MCP, not written by the worker directly, listed for completeness): `evidence/playwright/page-2026-10-16T09-37-30-514Z.yml` (page snapshot written on navigation), `evidence/playwright/console-2026-10-16T09-37-30-235Z.log` (console log, not read). Both are outside the EXP-107 paths.

## Cleanup inventory

- Created objects so far: **none** (no StaticCustIcon or StaticCustID was created; no Designer edit was made).
- Standing EXP-106/105/101 artifacts are not touched by this task.

## Final state (end of T1)

- Tab 0 (current): Infor CloudIdentities - Sign In, top-level, both placeholders entered, Sign in not submitted. No dialog open. Not a Mongoose page.
- Tab 1 (Designer): not selected; its state is unknown.
- No Mongoose dialog or unsaved change was created by this task.

## Next step (not performed)

- Coordinator or operator: decide how to re-establish the session (the Sign in button failed to click in two attempts). The sign-in form in tab 0 still holds the placeholders; a later task must inspect it read-only first, and must not replay the Sign in click without an operator decision.
- After a usable session: T1 gate again (Designer identity, User scope, FX_CustomerPortal open and clean, Components tree, user region location, absence of StaticCustIcon and StaticCustID), then T2 as written in the brief.

## Knowledge state (findings)

- Logout-page-to-portal-redirect-to-sign-in in the top-level tab: **observed** (one run).
- Sign in button refused a Playwright click twice despite visible/enabled screenshot: **observed**; cause **unresolved** (suspected environment blocker).
- All Designer-facing findings for Section 5: not evaluated in this task (**unresolved**).

## T1-R - Gate recovery task (new task; the earlier T1 is retained above as historical audit)

Instruction: T1 GATE RECOVERY ONLY. The operator reports that authentication was restored manually in the existing Chrome session and that Web Client and Designer are loaded. The operator deleted `t1-02` (the filled sign-in screenshot); it is not referenced here as evidence.

### Source reads (before the first browser action of this task)

- `AGENTS.md`: lines 1-30 only in this task (partial re-read, disclosed; the full file was read in the earlier T1).
- `docs/mongoose/transcripts/hello-world-pt7.md` lines 165-182 (Section 5).
- `recipes/components/add-component-from-toolbox.md`, `recipes/components/configure-basic-component.md`, `recipes/session/session-expiry-and-stale-designer.md`: first 20-25 lines each in this task (partial re-read, disclosed; the full files were read in the earlier T1).
- Outcome (operator) sections only: EXP-106 lines 865-886; EXP-105 lines 383-403; EXP-101 lines 254-273.

### Sequence (observed)

1. Tab list (before any selection): 0 = "Mongoose" (Web Client, portal path); 1 = "Infor Mongoose Application Development Framework" (Designer, `mode=designer`, configgroup G6R8LJ9Q4E8C2Z8Y_Mongoose_DEM).
2. Tab 1 selected (first select after the list succeeded). Fresh untargeted snapshot of tab 1 taken.
3. Snapshot content: Designer shell with menus Form, Edit, View, Help. Toolbar: Save disabled, Regenerate Form disabled, Undo and Redo disabled, alignment and tab-order tools disabled. Toolbox tree with Framework Components expanded (Static and FlexLayout rows present). Properties panel with Form and Component tabs; Form tab selected; Properties tree empty. Status bar: `[ ScopeType: User / ScopeName: <value> ]`. No dialog, menu or unsaved-change indicator in the snapshot.
4. Screenshot `evidence/EXP-107/t1b-01-designer-gate-initial-view.png` (visual inspection). It shows: an empty white canvas with no form surface, no teal header strip, no FlexLayout or component; an empty Properties tree; the Save icon greyed; no dialog or open menu; and the status bar `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`.
5. `browser_wait_for` 3 s, then a targeted `browser_find` for the text "FX_CustomerPortal": **no matches**. The find is supporting evidence only (the brief excludes a find as a substitute for a snapshot).
6. Stopped. The Form menu, the recent-forms entry and Select Form were not opened; no canvas, component or Properties row was selected.

### Gate result (T1-R)

| Gate item | Result |
| --- | --- |
| User scope | **Observed**: status bar `ScopeType: User`. |
| Designer loaded, no dialog | **Observed**: no dialog, menu or unsaved-change indicator in snapshot or screenshot. |
| Save disabled (clean) | **Observed**: Save disabled in snapshot and greyed in screenshot. |
| FX_CustomerPortal open | **Not observed.** Canvas empty; no form name visible; targeted find found no match. Best reading: no form is open. |
| FlexLayoutHeader / StaticHeader / user region | Not observed (no canvas content). |
| Components tree (root Region01: main, Region02: footer, etc.) | **Not recorded**: no Components tree visible in this state. |
| No StaticCustIcon or StaticCustID | **Not verifiable** (no form open). |
| User region location on canvas | **Not located** (no canvas content). |
| Toolbox Static row present | **Observed** (snapshot and screenshot left panel). |

### Decision

The T1-R instruction says: if the Form is not already open and clean, report the blocker rather than performing a recovery or modification. The original brief allowed one open through the Form menu recent-forms entry, but the T1-R instruction is the later and more specific one, so **no open was performed**. The operator should decide whether to authorize one recent-forms open in the next task. **T2 must not begin**: its placement precondition (FX_CustomerPortal open, clean, FlexLayoutHeader with an empty user region) has not been observed.

### Action audit, T1-R (this task only)

| Category | Count |
| --- | --- |
| Browser tab lists | 1 |
| Tab selections (succeeded) | 1 (index 1, Designer) |
| Fresh untargeted snapshots | 1 |
| Targeted finds (supporting only) | 1 (no match) |
| Waits | 1 (3 s) |
| Screenshot calls | 1 (`t1b-01`, first attempt succeeded) |
| Clicks (any) | 0 |
| Coordinate clicks | 0 |
| Typed entries / credential entries | 0 / 0 |
| Top-level navigations | 0 |
| Sign-in attempts | 0 |
| Form menu opens / Form opens / Select Form OK | 0 / 0 / 0 |
| Toolbox selections / canvas placements | 0 / 0 |
| Property entries / corrections | 0 / 0 |
| Designer Saves | 0 |
| Undo / Regenerate | 0 / 0 |
| Prompts / dialogs answered | 0 / 0 |
| Server-event errors | 0 |
| Re-login runs | 0 (the operator restored authentication manually; not a worker re-login) |
| Unload, checkout, FormSync, deployment, runtime actions | 0 |

### Cumulative browser action audit (earlier T1 plus T1-R)

| Category | Count |
| --- | --- |
| Browser tab lists | 2 |
| Tab selections | 1 |
| Fresh untargeted snapshots (explicit `browser_snapshot`) | 4 (3 earlier, 1 here) |
| Targeted finds | 1 |
| Screenshot calls | 4 (earlier: 1 timeout + 1 success, plus 1 success; here: 1 success) |
| Top-level navigations | 1 (portal URL, session-expiry step 2, earlier T1) |
| Credential placeholder entries | 2 (earlier T1 only) |
| Sign-in clicks | 2 (earlier T1 only; both timed out, neither dispatched) |
| Re-login procedure runs | 1 started, 0 completed by the worker |
| Clicks on Designer or Web Client elements | 0 |
| Coordinate clicks | 0 |
| Toolbox selections / canvas placements | 0 / 0 |
| Undo clicks | 0 |
| Property entries / corrections | 0 / 0 |
| Designer Saves | 0 |
| Form closes / reopens | 0 / 0 |
| Prompts / dialogs answered | 0 / 0 |
| Server-event errors | 0 |
| Embedded-frame sign-in attempts | 0 |
| Unload, checkout, FormSync, deployment, Regenerate, runtime actions | 0 |

### Worker-written file inventory (cumulative)

| Path | Task | Status |
| --- | --- | --- |
| `experiments/EXP-107-hello-world-part-7-section-5-fx-customer-portal-user-statics.md` | earlier T1, T1-R | created, then updated |
| `evidence/EXP-107/t1-01-tab0-web-client-logout-successful.png` | earlier T1 | on disk (logout card) |
| `evidence/EXP-107/t1-02-tab0-signin-form-before-signin-click.png` | earlier T1 | **deleted by the operator**; not evidence |
| `evidence/EXP-107/t1b-01-designer-gate-initial-view.png` | T1-R | on disk (Designer empty canvas) |

Tool-generated, not worker-written, outside the EXP-107 paths: `evidence/playwright/page-2026-10-16T10-26-24-211Z.yml` (snapshot written by the wait step), `evidence/playwright/console-2026-10-16T10-26-08-401Z.log` and `...-403Z.log` (console entries; not read).

### Privacy note for operator review

`t1b-01` is not a sign-in form, but its status bar shows the Mongoose scope name (the operator's login identifier) in plain text. It is not a credential. The operator should decide whether to keep it, applying the same rule the operator applied to `t1-02`.

### Cleanup inventory

- Created Mongoose objects: **none**. No StaticCustIcon or StaticCustID exists or was created.
- No Form was opened, changed or saved in this task.

### Final state (end of T1-R)

- Tab 1 (Designer) is the selected tab. Its state: User scope, Save disabled, empty canvas, no dialog, no menu open, FX_CustomerPortal **not observed as open**.
- Tab 0 (Web Client, `Mongoose`) was not selected or inspected in T1-R.

### Next step (not performed)

- Operator decision: either open FX_CustomerPortal manually in the Designer, or authorize one Form-menu recent-forms open in the next task. The next task then repeats the T1 gate read-only (Components tree, user region, absence of StaticCustIcon and StaticCustID, Save disabled, no dialog).
- T2 may begin only after that gate is passed and recorded.

### Knowledge state (T1-R)

- Designer loaded with User scope and an empty canvas after manual re-authentication: **observed**.
- FX_CustomerPortal open in the Designer: **not observed** (**unresolved**).
- Components tree, user region placement and absence checks: **unresolved** in T1-R (resolved in T1-R2 below).

## T1-R2 - Gate with one authorized Form open (latest task)

Instruction: the bounded T1-R2 instruction (open FX_CustomerPortal once through the Form menu recent-forms entry, complete the Designer gate, place nothing, change nothing). The task header names T3, but the bounded instruction limits this run to the gate, so no T2 or T3 action was taken.

Note on the operator's `t1-02` deletion: `evidence/EXP-107/t1-02-tab0-signin-form-before-signin-click.png` was deleted by operator decision. It is not referenced here as evidence.

### Source reads (before the first browser action)

- `AGENTS.md`: full file (1-240).
- `docs/mongoose/transcripts/hello-world-pt7.md` lines 165-182.
- `recipes/components/add-component-from-toolbox.md`, `recipes/components/configure-basic-component.md`, `recipes/session/session-expiry-and-stale-designer.md`: full files.
- Outcome (operator) sections only: EXP-106 lines 865-886; EXP-105 lines 383-403; EXP-101 lines 254-273.

### Sequence (observed)

1. Tab list (before any selection): 0 = "Mongoose" (Web Client, portal path); 1 = Designer (`mode=designer`, configgroup G6R8LJ9Q4E8C2Z8Y_Mongoose_DEM).
2. Tab 1 selected (succeeded). Fresh untargeted snapshot S1: Save disabled; Regenerate disabled; no dialog; Properties empty; status bar `ScopeType: User`; no form tab. Matches the T1-R state.
3. Form menu clicked by ref e3 from S1 (succeeded). Fresh snapshot S2: the menu lists Definition, Sign Out, then recent forms: FX_CustomerPortal (ref e296), FX_FlexProbe01, FX_OrdersChart, FX_Orders, FX_HelloWorld01, FX_Items, IDO Properties, IDOs, Sql Tables, IDO Projects. The exact entry FX_CustomerPortal is present once.
4. Recent-forms entry FX_CustomerPortal clicked once by ref e296 from S2 (the single authorized open). The page URL gained `MGForm=FX_CustomerPortal`. Fresh snapshot S3: a tab `FX_CustomerPortal` is selected; Properties show Name FX_CustomerPortal, Form Type Flex, Device Type Default, Version "User version for user ...", Save disabled, no dialog. The Form menu is closed.
5. Screenshot `t1r2-01-gate-form-opened-canvas.png` (visual check). Shows: title FX_CustomerPortal; teal header strip with "Customer Portal" (bold white, left part); dotted divider near x=703 of the strip; empty right part (user region); a grid canvas below; Save icon greyed; Properties Name FX_CustomerPortal; status bar `ScopeType: User`; Details collapsed at the bottom.
6. Details panel expanded by its Expand Panel button (ref e339 from S3, view-only; snapshot S4). It opened on Collections (primary FX_Orders; secondary FX_Items).
7. Components tab clicked by ref e455 from S4 (view-only; snapshot S5). Shows the Components grid with a single collapsed `Pane (00)` row.
8. Grid Expand button clicked by ref e533 from S5 (view-only; snapshot S6). The tree expanded to:
   - `Pane (00)`
   - `flexlayoutPane_FX_CustomerPortal` (FlexLayout, Pane 0)
   - `Region00: header` (under the pane)
   - `FlexLayoutHeader` (FlexLayout, Container flexlayoutPane_FX_CustomerPortal)
   - `Region00: header` (under FlexLayoutHeader)
   - `StaticHeader` (Static, Container FlexLayoutHeader, Pane 0)
   - `Region01: user` (no child row before the next region)
   - `Region01: main`
   - `Region02: footer`
   - No row named StaticCustIcon or StaticCustID appears anywhere in S6.
9. Screenshot `t1r2-02-gate-components-tree-expanded.png` (visual check). Shows the Components grid through `Region00: header` > `FlexLayoutHeader` > `Region00: header` > `StaticHeader` (partially cut at the bottom edge). `Region01: user`, `Region01: main` and `Region02: footer` are below the visible grid area and are **not visible in the screenshot**; they are recorded from S6 only.

### Gate result (T1-R2)

| Gate item | Result | Evidence |
| --- | --- | --- |
| User scope | **Observed**: status bar `ScopeType: User` | S3, `t1r2-01`, `t1r2-02` |
| FX_CustomerPortal open, identity | **Observed**: tab `FX_CustomerPortal`, Properties Name FX_CustomerPortal, Form Type Flex | S3, `t1r2-01` |
| Save disabled (clean) | **Observed**: disabled in snapshots; greyed in both screenshots | S1-S6, `t1r2-01`, `t1r2-02` |
| No dialog or menu open | **Observed**: none in snapshots or screenshots | S3-S6 |
| Components hierarchy root to StaticHeader | **Observed** in S6 and in `t1r2-02` (top rows) | S6, `t1r2-02` |
| StaticHeader under FlexLayoutHeader > Region00: header | **Observed** in S6 (Container column FlexLayoutHeader) | S6, `t1r2-02` |
| FlexLayoutHeader > Region01: user empty | **Observed in S6 only** (no child row before Region01: main). Nesting is inferred from the snapshot order; the row is not in the screenshot. | S6 only |
| Root Region01: main and Region02: footer present | **Observed** in S6 (not in the screenshot) | S6 only |
| No StaticCustIcon or StaticCustID | **Observed** in S6 (none listed) | S6 |
| User region on canvas (right of the dotted divider) | **Observed**: the empty right part of the teal strip, right of the dotted divider near x=703, in `t1r2-01` | `t1r2-01` |
| StaticHeader "Customer Portal" in left part | **Observed** in `t1r2-01` | `t1r2-01` |

Limitation: the user-region row and its empty state are established by the accessibility snapshot, not by a screenshot. The grid's rows below StaticHeader are outside the visible area and the grid was not scrolled (no safe scroll target without a click or pointer assumption). A reviewer who needs a picture of `Region01: user` should view the grid after scrolling, or the T2 task can record the tree immediately after its placement.

### Decision (T1-R2)

- **AC-1:** supported for FX_CustomerPortal in User scope, clean, no dialog, the header tree with StaticHeader, the empty user region (snapshot), the canvas position, and no StaticCustIcon or StaticCustID. The screenshot does not show the user row; that is the one gap.
- **T2 may begin:** the gate is passed. The T2 instruction must still record the Components tree right after its placement, so the user-region child relationship will be checked again there. If the operator needs a screenshot of `Region01: user` before T2, that is a separate view-only step.

### Action audit, T1-R2 (this task only)

| Category | Count |
| --- | --- |
| Browser tab lists | 1 |
| Tab selections (succeeded) | 1 (index 1, Designer) |
| Fresh untargeted snapshots | 6 (S1 to S6) |
| Targeted finds | 0 |
| Waits | 0 |
| Screenshot calls | 2 (`t1r2-01`, `t1r2-02`; both first attempts succeeded) |
| Clicks on Designer elements | 5: Form menu (e3), recent-forms entry FX_CustomerPortal (e296), Details Expand Panel (e339), Components tab (e455), grid Expand (e533) |
| Recent-forms opens of FX_CustomerPortal | 1 (the single authorized open) |
| Form menu opens | 1 |
| Select Form OK clicks | 0 |
| Coordinate clicks | 0 |
| Typed entries / credential entries | 0 / 0 |
| Top-level navigations | 0 |
| Sign-in attempts | 0 |
| Toolbox selections / canvas placements | 0 / 0 |
| Component selections (canvas or tree) | 0 |
| Property entries / corrections | 0 / 0 |
| Designer Saves | 0 |
| Undo / Regenerate | 0 / 0 |
| Form close / reopen | 0 / 0 (the Form was opened once; not closed) |
| Prompts / dialogs answered | 0 / 0 |
| Server-event errors | 0 |
| Worker re-logins | 0 |
| Unload, checkout, FormSync, deployment, runtime actions | 0 |

Panel layout note: the Details panel was expanded (view-only). It is left expanded; it is a layout state, not a Form change.

### Cumulative browser action audit (earlier T1, T1-R, T1-R2)

| Category | Count |
| --- | --- |
| Browser tab lists | 3 (1 per task) |
| Tab selections (succeeded) | 2 (T1-R: 1; T1-R2: 1) |
| Fresh untargeted snapshots | 10 (earlier T1: 3; T1-R: 1; T1-R2: 6) |
| Targeted finds | 1 (T1-R; no match) |
| Waits | 1 (T1-R, 3 s) |
| Screenshot calls | 6 (earlier T1: 3, including one timeout; T1-R: 1; T1-R2: 2) |
| Top-level navigations | 1 (earlier T1, portal URL, session-expiry step 2) |
| Credential placeholder entries | 2 (earlier T1 only) |
| Sign-in clicks | 2 (earlier T1 only; both timed out, neither dispatched) |
| Worker re-login procedure runs | 1 started, 0 completed |
| Designer clicks | 5 (T1-R2 only) |
| Recent-forms opens | 1 (FX_CustomerPortal, T1-R2) |
| Form menu opens | 1 (T1-R2) |
| Select Form OK | 0 |
| Coordinate clicks | 0 |
| Toolbox selections / canvas placements | 0 / 0 |
| Undo clicks | 0 |
| Property entries / corrections | 0 / 0 |
| Designer Saves | 0 |
| Form closes / reopens | 0 / 0 |
| Prompts / dialogs answered | 0 / 0 |
| Server-event errors | 0 |
| Embedded-frame sign-in attempts | 0 |
| Unload, checkout, FormSync, deployment, Regenerate, runtime actions | 0 |

### Worker-written file inventory (cumulative, through T1-R2)

| Path | Task | Status |
| --- | --- | --- |
| `experiments/EXP-107-hello-world-part-7-section-5-fx-customer-portal-user-statics.md` | earlier T1, T1-R, T1-R2 | created, then updated |
| `evidence/EXP-107/t1-01-tab0-web-client-logout-successful.png` | earlier T1 | on disk (logout card) |
| `evidence/EXP-107/t1-02-tab0-signin-form-before-signin-click.png` | earlier T1 | **deleted by the operator**; not evidence |
| `evidence/EXP-107/t1b-01-designer-gate-initial-view.png` | T1-R | on disk (empty canvas, no form open) |
| `evidence/EXP-107/t1r2-01-gate-form-opened-canvas.png` | T1-R2 | on disk (FX_CustomerPortal canvas and header strip) |
| `evidence/EXP-107/t1r2-02-gate-components-tree-expanded.png` | T1-R2 | on disk (Components tree top rows) |

Tool-generated, not worker-written, outside the EXP-107 paths: `evidence/playwright/page-2026-10-16T10-28-33-775Z.yml`, `...10-28-40-789Z.yml`, `...10-28-54-034Z.yml`, `...10-28-59-052Z.yml`, `...10-29-04-809Z.yml` (snapshot files written by the click and wait steps), and console logs `evidence/playwright/console-2026-10-16T10-28-28-633Z.log`, `...10-28-28-403Z.log`. Not read.

### Privacy note for operator review (not deleted)

- `t1b-01-designer-gate-initial-view.png`: the status bar shows the Mongoose scope name in plain text.
- `t1r2-01-gate-form-opened-canvas.png` and `t1r2-02-gate-components-tree-expanded.png`: the status bar shows the same scope name. The Properties Version row shows "User version for us..." (truncated, not the full name).
- None of these is a sign-in form or a credential. The operator should decide whether to keep them, using the rule applied to `t1-02`.

### Cleanup inventory

- Created Mongoose objects: **none**. No StaticCustIcon or StaticCustID exists or was created.
- The Form FX_CustomerPortal is open, clean and unchanged by this task.

### Final state (end of T1-R2)

- Tab 1 (Designer): selected; FX_CustomerPortal open in User scope; Save disabled; no dialog or menu open; no component selected; Details panel expanded (view only).
- Tab 0 (Web Client): not touched in T1-R2.

### Next step (not performed)

- Operator: decide on the T2 task (StaticCustIcon placement). T2 would start from the Toolbox Static row and one canvas click in the user region, with the Components tree recorded right after the click.
- Operator review: the privacy note above.

### Knowledge state (T1-R2)

- FX_CustomerPortal opened via the recent-forms entry in User scope, clean, with the expected tree: **observed** (one run).
- The user region is empty and sits right of the dotted divider: **observed** in S6 and `t1r2-01`; the empty row is not shown in a screenshot (**limitation**).
- Absence of StaticCustIcon and StaticCustID: **observed** (S6).

## T2 - Place and configure StaticCustIcon (latest task)

Instruction: T2 only (StaticCustIcon). Do not place StaticCustID, do not reopen the Form, do not proceed to T3.

### Source reads (before the first browser action)

- Full `AGENTS.md`; `docs/mongoose/transcripts/hello-world-pt7.md` lines 165-182; full `recipes/components/add-component-from-toolbox.md`, `recipes/components/configure-basic-component.md`, `recipes/session/session-expiry-and-stale-designer.md`; Outcome (operator) sections only of EXP-106 (lines 865-886), EXP-105 (383-403), EXP-101 (254-273).

### Gate (T2 start, observed)

- Tab list (before any selection): 0 = Mongoose Web Client; 1 = Designer (`MGForm=FX_CustomerPortal` in the URL).
- Tab 1 selected; snapshot S1: tab `FX_CustomerPortal` selected; Properties Name FX_CustomerPortal, Form Type Flex; status bar `ScopeType: User`; Save disabled; no dialog; Components tree: Pane (00) > flexlayoutPane_FX_CustomerPortal > Region00: header > FlexLayoutHeader > Region00: header > StaticHeader; `Region01: user` present (no child); Region01: main; Region02: footer; no StaticCustIcon or StaticCustID.
- Screenshot `t2-01-gate-before-placement.png`: canvas with "Customer Portal" in the left part of the teal strip, dotted divider near x≈703, empty right part; Save greyed; Components tree visible only down to StaticHeader (the `Region01: user` row is below the visible grid area; not in this image).

### Placement (T2)

1. Toolbox: `Static` row clicked once (ref e211 from S1). Result: row highlighted in the Toolbox (`t2-02-toolbox-static-selected.png`).
2. Canvas placement: **one coordinate click at (925, 137)** inside the right part of the teal strip, right of the divider and away from the edges. The new Static appeared at the right end of the strip (approx. x 999 to 1147 on screen), not at the click coordinate. Only the one click was sent.
3. Fresh snapshot S2 after placement: new row `static1_USER` (Type Static, Container FlexLayoutHeader, Pane 0), listed after `Region01: user` and before `Region01: main`; Properties header `static1_USER (Static)`.
4. Screenshot `t2-03-placed-static1-user-canvas-and-tree.png`: the tree shows `Region01: user` expanded with `static1_USER` indented beneath it (Container FlexLayoutHeader); Save enabled (dirty); the Static is at the right end of the strip. **Placement correct** (child of FlexLayoutHeader > Region01: user). No Undo needed.
5. Generated defaults read from Properties (observed): Name `static1_USER`; Type Static; From Device Master True; Caption blank; Theme Class blank; Foreground Color #000000; Bitmap File Name blank; Justification Right; Layout Unit Char; Size `20; 1` (Width 20, Height 1); Lock Size False; Tab Order 0; Flex Attributes `Index: 1 Target: user`; No Colon False.

### Property entries (T2)

| Field | Method | Value as displayed after entry | Corrections |
| --- | --- | --- | --- |
| Name | double-click value cell (e996), one fill (`StaticCustIcon`), Tab | `StaticCustIcon`; tree row renamed | 0 |
| Bitmap File Name | double-click value cell (e1399) opened an ExtJS **combobox with a dropdown listbox** of image names (not a free-text field and not an ellipsis picker); option `FX_CustomerIcon.png` clicked (e1593), then Tab | `FX_CustomerIcon.png` | 0 |
| Justification | not changed (default already `Right`) | `Right` | 0 |
| Width | double-click value cell (e1832), one fill `4`, Tab | `4` (Size row `4; 1.5`) | 0 |
| Height | double-click value cell (e1841), one fill `1.5`, Tab | `1.5` (Size row `4; 1.5`) | 0 |
| Lock Size | not changed | `False` | 0 |
| No Colon | ExtJS combobox: trigger clicked (e1930), option `True` clicked (e1975), then Tab | `True` | 0 |

- Bitmap File Name editor (observed): ExtJS combobox; the open dropdown lists image names in alphabetical order, starting `20x20_settings.png`, `accordian.png`, `accordion.png`, `action.png`, `add.png`, `Alert.png`, `AppMetadataTransport.png` ...; the accessibility snapshot listed about 165 entries, including `FX_CustomerIcon.png`, `FX_CustomerSignIn.png`, `FX_Dumbbell.png`, `FX_Eggs.png`, `FX_Guitar.png` (among others such as `form-thumbnail.svg`, `wizard-slider.png`, `workspace creation.svg`). Screenshot `t2-04-bitmap-file-name-editor-list-open.png` shows the open list at the top of the alphabetical range (FX_CustomerIcon.png is further down and not visible in that image). The list was left by choosing the option, then Tab (no picker OK/Cancel was involved; no upload, Import, Export or image change).
- Screenshot `t2-05-bitmap-file-name-committed-appearance.png`: Name `StaticCustIcon`, Bitmap File Name `FX_CustomerIcon.p` (truncated), Justification `Right`; tree row `StaticCustIcon` under Region01: user.
- Screenshot `t2-06-staticcustIcon-values-before-save.png`: Justification `Right`; Size `4; 1.5` (Width 4, Height 1.5, Lock Size False); Flex Attributes `Index: 1 Target: user`; No Colon `True`.

### Designer Save (T2, one invocation)

- Save clicked once (ref e710 from S18). Snapshot S19: Save button **disabled**; toast text `Form [FX_CustomerPortal] and global object(s) were saved.` with a Close button (ref e1995). The toast was not closed by the worker; it is an in-page notification, not a prompt or dialog.
- Screenshot `t2-07-save-response-and-canvas.png`: Save icon greyed; Properties show StaticCustIcon with the values above; tree row `StaticCustIcon` under Region01: user. The toast had already left the screenshot. The toast text is recorded from S19.
- **Canvas (user region):** the Static is visible only as a small box with a FlexLayout-style adorner icon at the right end of the strip (approx. x 1118 to 1147, y 127 to 148). **The bitmap FX_CustomerIcon.png is not clearly visible in the screenshot at this size.** Whether the image renders is unverified in T2; it is left for the T4 readback.

### Deviation disclosed

- **Parallel browser action (one occurrence):** the Width fill (`browser_type` "4" in e1124) and the Tab key press were issued in the same tool-call block, which the brief forbids. The results show the fill ran first and the Tab second; the snapshot afterwards shows Width `4` committed and no other field changed. No outcome effect was observed, but the rule was broken and is recorded here as a procedural deviation.

### Action audit, T2 (this task only)

| Category | Count |
| --- | --- |
| Browser tab lists | 1 |
| Tab selections (succeeded) | 1 (index 1, Designer) |
| Fresh untargeted snapshots (explicit `browser_snapshot`) | 19 (S1 to S19) |
| Targeted finds | 1 (`Layout`, used for orientation only; not for a click) |
| Waits | 0 |
| Screenshot calls | 7 (`t2-01` to `t2-07`; all first attempts succeeded) |
| Toolbox selections | 1 (Static row) |
| Canvas placement clicks | 1 (coordinate click at (925, 137)) |
| Coordinate clicks | 1 (the placement click; no other coordinate target) |
| Designer element clicks (excluding Toolbox and Save) | 12 (Name, Appearance, Bitmap File Name dblclick; Bitmap option; Layout, Size, Width, Height, Miscellaneous, Specific Attributes dblclicks; No Colon trigger; No Colon True option) |
| Save clicks | 1 |
| Undo clicks | 0 |
| Typed entries | 3 (Name, Width, Height) |
| Tab key presses | 5 (after Name, Bitmap option, Width, Height, No Colon option) |
| Per-field corrections | 0 |
| List or picker opens | 2 (Bitmap File Name combobox list; No Colon combobox list); both left by choosing the option and Tab (no picker OK/Cancel used) |
| Designer Saves | 1 (response: `Form [FX_CustomerPortal] and global object(s) were saved.`; Save then disabled) |
| Prompts | 0 (the Save toast is a notification, not a prompt; not closed) |
| Dialogs answered | 0 |
| Server-event errors | 0 |
| Form closes / reopens | 0 / 0 |
| Recent-forms opens | 0 in T2 (the Form stayed open from T1-R2) |
| Undo / Regenerate / unload / checkout / FormSync / deployment / runtime actions | 0 |
| Parallel browser action (rule violation) | 1 (Width fill and Tab in one block) |

### Cumulative browser action audit (earlier T1, T1-R, T1-R2, T2)

| Category | Count |
| --- | --- |
| Browser tab lists | 4 |
| Tab selections (succeeded) | 3 |
| Fresh untargeted snapshots | 29 (earlier T1: 3; T1-R: 1; T1-R2: 6; T2: 19) |
| Targeted finds | 2 (T1-R: 1; T2: 1) |
| Waits | 1 (T1-R, 3 s) |
| Screenshot calls | 13 (earlier T1: 3 incl. one timeout; T1-R: 1; T1-R2: 2; T2: 7) |
| Top-level navigations | 1 (earlier T1, portal URL, session-expiry step 2) |
| Credential placeholder entries | 2 (earlier T1 only) |
| Sign-in clicks | 2 (earlier T1 only; both timed out) |
| Worker re-login procedure runs | 1 started, 0 completed |
| Form menu opens | 1 (T1-R2) |
| Recent-forms opens (FX_CustomerPortal) | 1 (T1-R2; the single authorized open) |
| Designer clicks (non-Toolbox, non-Save) | 17 (T1-R2: 5; T2: 12) |
| Toolbox selections | 1 (T2) |
| Save clicks | 1 (T2) |
| Canvas placement clicks / coordinate clicks | 1 / 1 (T2) |
| Undo clicks | 0 |
| Typed entries | 3 (T2) |
| Tab key presses | 5 (T2) |
| Property corrections | 0 |
| List or picker opens | 2 (T2) |
| Designer Saves | 1 (T2) |
| Prompts / dialogs answered | 0 / 0 |
| Form closes / reopens | 0 / 0 |
| Server-event errors | 0 |
| Parallel browser action violations | 1 (T2) |
| Embedded-frame sign-in attempts | 0 |
| Unload, checkout, FormSync, deployment, Regenerate, runtime actions | 0 |

### Worker-written file inventory (cumulative, through T2)

| Path | Task | Status |
| --- | --- | --- |
| `experiments/EXP-107-hello-world-part-7-section-5-fx-customer-portal-user-statics.md` | earlier T1, T1-R, T1-R2, T2 | created, then updated |
| `evidence/EXP-107/t1-01-tab0-web-client-logout-successful.png` | earlier T1 | on disk |
| `evidence/EXP-107/t1-02-tab0-signin-form-before-signin-click.png` | earlier T1 | **deleted by the operator** (not evidence) |
| `evidence/EXP-107/t1b-01-designer-gate-initial-view.png` | T1-R | on disk |
| `evidence/EXP-107/t1r2-01-gate-form-opened-canvas.png` | T1-R2 | on disk |
| `evidence/EXP-107/t1r2-02-gate-components-tree-expanded.png` | T1-R2 | on disk |
| `evidence/EXP-107/t2-01-gate-before-placement.png` | T2 | on disk |
| `evidence/EXP-107/t2-02-toolbox-static-selected.png` | T2 | on disk |
| `evidence/EXP-107/t2-03-placed-static1-user-canvas-and-tree.png` | T2 | on disk |
| `evidence/EXP-107/t2-04-bitmap-file-name-editor-list-open.png` | T2 | on disk |
| `evidence/EXP-107/t2-05-bitmap-file-name-committed-appearance.png` | T2 | on disk |
| `evidence/EXP-107/t2-06-staticcustIcon-values-before-save.png` | T2 | on disk |
| `evidence/EXP-107/t2-07-save-response-and-canvas.png` | T2 | on disk |

Tool-generated, not worker-written, outside the EXP-107 paths: `evidence/playwright/` snapshot and console files written by the tool calls (not read).

### Cleanup inventory (this task)

- Created Mongoose objects: **`StaticCustIcon`** (Static; the renamed `static1_USER`) in FlexLayoutHeader > Region01: user of FX_CustomerPortal (User scope). Its Name, Bitmap File Name `FX_CustomerIcon.png`, Justification `Right`, Size `4; 1.5`, and No Colon `True` are saved.
- No global object created or changed; no image uploaded, renamed or deleted; no string created; no binding set.

### Privacy note (operator review)

- All T2 screenshots show the scope name in the status bar in plain text (as do the earlier gate screenshots). None is a sign-in form or credential. The operator should decide whether to keep them.

### Result and next step

- AC-2 (this task): supported by `t2-03` (placement under Region01: user), `t2-04` (editor type and offered images), `t2-05`/`t2-06` (per-field values), `t2-07` (Save state) and S19 (Save response text). One gap: the bitmap is not visibly confirmed on the canvas.
- Limitations: the Save response text is from the snapshot (the toast had left the screenshot); the bitmap render is unverified; the parallel-action deviation; same-session UI evidence only (no reopen or runtime check).
- **T3 can begin** (StaticCustID placement next to StaticCustIcon): the form is open, clean (Save disabled), with StaticCustIcon saved in the user region. The next step, not performed, is T3 as briefed: Toolbox Static row once, one canvas click in the user region to the left of StaticCustIcon if room, then configure Name StaticCustID, Theme Class FX_WhiteHeader, Justification Left, Size 10; 1.5, No Colon True, read the binding rows read-only, and one Save.
- Operator to note: the Save toast (with Close button) was left on screen. Its state at task end should be checked before T3.

## T3 - Place and configure StaticCustID (latest task)

Instruction: T3 only (StaticCustID). Do not repeat or modify StaticCustIcon, do not close or reopen the Form, do not begin readback (T4).

### Source reads (before the first browser action)

- Full `AGENTS.md`; `docs/mongoose/transcripts/hello-world-pt7.md` lines 165-182; full `recipes/components/add-component-from-toolbox.md`, `recipes/components/configure-basic-component.md`, `recipes/session/session-expiry-and-stale-designer.md`; Outcome (operator) sections only of EXP-106 (lines 865-886), EXP-105 (383-403), EXP-101 (254-273).

### Gate (T3 start, observed)

- Tab list (before any selection): 0 = Mongoose Web Client; 1 = Designer (`MGForm=FX_CustomerPortal`).
- Tab 1 selected; snapshot S1: tab `FX_CustomerPortal`; Properties Name `StaticCustIcon (Static)` (the earlier-selected component); Save disabled; no dialog or menu; **no Save toast visible** (the T2 toast had left the snapshot); status bar `ScopeType: User`.
- Components tree: `Region01: user` contains `StaticCustIcon` (Static, Container FlexLayoutHeader); `Region01: main` and `Region02: footer` follow; no StaticCustID yet. StaticCustIcon values as displayed in Properties: Justification `Right`; Size `4; 1.5` (Width 4, Height 1.5); Lock Size `False`; No Colon `True`; Flex Attributes `Index: 1 Target: user`. Not changed in T3.
- Screenshot `t3-01-gate-before-placement.png` (visual check): Save greyed; tree shows `StaticCustIcon` under `Region01: user`; canvas: "Customer Portal" in the left part of the teal strip; dotted divider near x≈703; the icon Static at the right end (about x 1118–1147).

### Placement (T3)

1. Toolbox: `Static` row clicked once (ref e211 from S1). Screenshot `t3-02-toolbox-static-selected.png`: Static row highlighted.
2. Canvas placement: **one coordinate click at (800, 137)**, in free space of the user region (right of the divider at x≈703, left of StaticCustIcon at x≈1118), away from edges and adorners. The new Static appeared at about x 962–990, to the **left** of StaticCustIcon (not at the click coordinate; the user region packs its items toward the end).
3. Fresh snapshot S2 after placement: new row `static1_USER` (Type Static, Container FlexLayoutHeader, Pane 0) listed **after** `StaticCustIcon` under `Region01: user`.
4. Screenshot `t3-03-placed-static1-user-canvas-and-tree.png`: tree shows `Region01: user` with `StaticCustIcon` then `static1_USER` (both indented under Region01: user); canvas shows the new small box left of StaticCustIcon. Placement is **correct** (child of FlexLayoutHeader > Region01: user). No Undo.
5. Generated defaults read from Properties (observed): Name `static1_USER`; Type Static; From Device Master True; Caption blank; Theme Class blank; Foreground Color `#000000`; Bitmap File Name blank; Justification `Right`; Layout Unit `Char`; Size `20; 1` (Width 20, Height 1); Lock Size `False`; Tab Order 0; Flex Attributes `Index: 1 Target: user`; No Colon `False`.

### Property entries (T3)

| Field | Method | Value as displayed after entry | Corrections |
| --- | --- | --- | --- |
| Name | double-click value cell (e1288), one fill `StaticCustID`, Tab | `StaticCustID`; tree row renamed | 0 |
| Theme Class | ExtJS combobox: trigger clicked (e1349); list showed `FX_Header` and `FX_WhiteHeader`; `FX_WhiteHeader` clicked (e1930); Tab | `FX_WhiteHeader` | 0 |
| Justification | ExtJS combobox: trigger clicked (e1405); list showed blank, `Default`, `Left`, `Center`, `Right` (selected); `Left` clicked (e1948); Tab | `Left` | 0 |
| Width | double-click value cell (e1484), one fill `10`, Tab | `10` (Size row `10; 1`, then `10; 1.5`) | 0 |
| Height | double-click value cell (e1493), one fill `1.5`, Tab | `1.5` (Size row `10; 1.5`) | 0 |
| Lock Size | not changed | `False` | 0 |
| No Colon | ExtJS combobox: trigger clicked (e1615); list showed `True` and `False` (selected); `True` clicked (e1968); Tab | `True` | 0 |

- Each list was left by choosing the option and then Tab; no picker OK or Cancel was involved. No Bitmap File Name editor was opened in T3 (StaticCustID does not require an image).
- Size summary after entry: `10; 1.5`.
- Screenshot `t3-04-staticcustid-committed-properties-before-save.png` (visual check): Properties header `StaticCustID (Static)`; Justification `Left`; Size `10; 1.5` (Width 10, Height 1.5, Lock Size False); No Colon `True` (in Specific Attributes, not in this crop); Flex Attributes `Index: 1 Target: user`; Save enabled (dirty). Theme Class is not in this crop (recorded from snapshot S15).

### Binding rows (read-only, as displayed; not changed)

- The Data Source group was **expanded by double-clicking its group row** (ref e1419; view-only). Rows as displayed: `Binding Type` = `None` (combobox trigger e1983 present, not opened); `Binding` = blank (ellipsis button e1997 present, not opened); `Required` `False`; `To Be Determined` `False`; `Upper or Lower Case` `Mixed`; `Default Value` blank; `List Source` blank (ellipsis present, not opened).
- Customer ID was not assigned. No binding was set. The Binding Type and Binding lists and the ellipsis were not opened.

### Designer Save (T3, one invocation)

- Save clicked once (ref e1007 from S15). Snapshot S16 (post-Save): Save button **disabled**; in-page notification text `Form [FX_CustomerPortal] and global object(s) were saved.` with a Close button (ref e2090). The worker did not click that Close button (it is a notification, not a prompt or dialog).
- Screenshot `t3-05-save-response-and-canvas-order.png` (taken moments after S16): Save greyed; the toast is **not** visible in this image (faded or hidden; not verified further). Properties show StaticCustID with the values above. Tree: `Region01: user` > `StaticCustIcon`, then `StaticCustID`.
- **Canvas (user region, observed):** two small boxes at the right of the teal strip: the new StaticCustID box (about x 1036–1066, empty) to the **left** of the StaticCustIcon box (about x 1074–1147, showing the FlexLayout adorner icon). **The bitmap FX_CustomerIcon.png is still not clearly visible in the screenshot** (unchanged from T2; unresolved; left for T4).
- **Correction (made in T6):** the left/right attribution above is superseded. In `t3-05` the Properties header reads `StaticCustID (Static)` and the selection outline sits on the **right** box (about x 1073–1147), so the empty left box (about x 1037–1066) is StaticCustIcon. `t6-01` (taken before the T6 close) shows the same arrangement. See the T6 canvas readback.

### Order of the two Statics (recorded, not reordered)

- Tree (Components grid, under Region01: user): `StaticCustIcon`, then `StaticCustID`.
- Canvas (T3 attribution, **superseded in T6**): `StaticCustID` (left), then `StaticCustIcon` (right). Re-checked in T6 against `t3-05` and `t6-01`: the canvas order is `StaticCustIcon` (left), then `StaticCustID` (right).
- The tutorial shows the icon first and the customer-ID Static second; after the T6 correction the tree and the canvas both show the icon first. No reorder was performed.
- Both Statics show `Flex Attributes: Index: 1 Target: user` as displayed (the index value does not distinguish them).

### Deviation (T3)

- None in T3. Each browser action was sent alone; every element reference came from the latest snapshot of the same task. The T2 parallel-action deviation was not repeated and is not corrected here.

### Action audit, T3 (this task only)

| Category | Count |
| --- | --- |
| Browser tab lists | 1 |
| Tab selections (succeeded) | 1 (index 1, Designer) |
| Fresh untargeted snapshots (explicit `browser_snapshot`) | 16 (S1 to S16) |
| Targeted finds | 0 |
| Waits | 0 |
| Screenshot calls | 5 (`t3-01` to `t3-05`; all first attempts succeeded) |
| Toolbox selections | 1 (Static row) |
| Canvas placement clicks | 1 (coordinate click at (800, 137)) |
| Coordinate clicks | 1 (the placement click; no other coordinate target) |
| Designer element clicks (excluding Toolbox, canvas and Save) | 10 (Name dblclick; Theme Class trigger and option; Justification trigger and option; Width dblclick; Height dblclick; No Colon trigger and option; Data Source group dblclick) |
| Save clicks | 1 |
| Undo clicks | 0 |
| Typed entries | 3 (Name, Width, Height) |
| Tab key presses | 6 (after Name, Theme Class, Justification, Width, Height, No Colon) |
| Per-field corrections | 0 |
| List opens (ExtJS comboboxes) | 3 (Theme Class; Justification; No Colon); each left by choosing the option then Tab |
| Picker or ellipsis opens | 0 (Binding and List Source ellipses present, not opened) |
| Designer Saves | 1 (response: `Form [FX_CustomerPortal] and global object(s) were saved.`; Save then disabled) |
| Prompts | 0 (the Save notification is not a prompt; its Close button was not clicked) |
| Dialogs answered | 0 |
| Server-event errors | 0 |
| Form closes / reopens | 0 / 0 |
| Recent-forms opens | 0 in T3 |
| Undo / Regenerate / unload / checkout / FormSync / deployment / runtime actions | 0 |
| Parallel browser action (rule violation) | 0 in T3 |

### Cumulative browser action audit (earlier T1 through T3)

| Category | Count |
| --- | --- |
| Browser tab lists | 5 |
| Tab selections (succeeded) | 4 |
| Fresh untargeted snapshots | 45 (earlier T1: 3; T1-R: 1; T1-R2: 6; T2: 19; T3: 16) |
| Targeted finds | 2 (T1-R: 1; T2: 1) |
| Waits | 1 (T1-R, 3 s) |
| Screenshot calls | 18 (earlier T1: 3 incl. one timeout; T1-R: 1; T1-R2: 2; T2: 7; T3: 5) |
| Top-level navigations | 1 (earlier T1, portal URL, session-expiry step 2) |
| Credential placeholder entries | 2 (earlier T1 only) |
| Sign-in clicks | 2 (earlier T1 only; both timed out) |
| Worker re-login procedure runs | 1 started, 0 completed |
| Form menu opens | 1 (T1-R2) |
| Recent-forms opens (FX_CustomerPortal) | 1 (T1-R2; the single authorized open) |
| Designer clicks (non-Toolbox, non-canvas, non-Save) | 27 (T1-R2: 5; T2: 12; T3: 10) |
| Toolbox selections | 2 (T2, T3) |
| Save clicks | 2 (T2, T3; one per task) |
| Canvas placement clicks / coordinate clicks | 2 / 2 (T2 at (925, 137); T3 at (800, 137)) |
| Undo clicks | 0 |
| Typed entries | 6 (T2: 3; T3: 3) |
| Tab key presses | 11 (T2: 5; T3: 6) |
| Property corrections | 0 |
| List opens | 5 (T2: 2 (Bitmap File Name, No Colon); T3: 3 (Theme Class, Justification, No Colon)) |
| Designer Saves | 2 (T2, T3) |
| Prompts / dialogs answered | 0 / 0 |
| Form closes / reopens | 0 / 0 |
| Server-event errors | 0 |
| Parallel browser action violations | 1 (T2; not repeated in T3) |
| Embedded-frame sign-in attempts | 0 |
| Unload, checkout, FormSync, deployment, Regenerate, runtime actions | 0 |

### Worker-written file inventory (cumulative, through T3)

| Path | Task | Status |
| --- | --- | --- |
| `experiments/EXP-107-hello-world-part-7-section-5-fx-customer-portal-user-statics.md` | earlier T1, T1-R, T1-R2, T2, T3 | created, then updated |
| `evidence/EXP-107/t1-01-tab0-web-client-logout-successful.png` | earlier T1 | on disk |
| `evidence/EXP-107/t1-02-tab0-signin-form-before-signin-click.png` | earlier T1 | **deleted by the operator** (not evidence) |
| `evidence/EXP-107/t1b-01-designer-gate-initial-view.png` | T1-R | on disk |
| `evidence/EXP-107/t1r2-01-gate-form-opened-canvas.png` | T1-R2 | on disk |
| `evidence/EXP-107/t1r2-02-gate-components-tree-expanded.png` | T1-R2 | on disk |
| `evidence/EXP-107/t2-01` to `t2-07` (seven files) | T2 | on disk |
| `evidence/EXP-107/t3-01-gate-before-placement.png` | T3 | on disk |
| `evidence/EXP-107/t3-02-toolbox-static-selected.png` | T3 | on disk |
| `evidence/EXP-107/t3-03-placed-static1-user-canvas-and-tree.png` | T3 | on disk |
| `evidence/EXP-107/t3-04-staticcustid-committed-properties-before-save.png` | T3 | on disk |
| `evidence/EXP-107/t3-05-save-response-and-canvas-order.png` | T3 | on disk |

Tool-generated, not worker-written, outside the EXP-107 paths: `evidence/playwright/` snapshot and console files written by the tool calls (not read).

### Cleanup inventory (cumulative)

- Created Mongoose objects in FX_CustomerPortal (User scope), both saved: **`StaticCustIcon`** (renamed `static1_USER`; Bitmap File Name `FX_CustomerIcon.png`; Justification `Right`; Size `4; 1.5`; No Colon `True`) and **`StaticCustID`** (renamed `static1_USER`; Theme Class `FX_WhiteHeader`; Justification `Left`; Size `10; 1.5`; No Colon `True`; Binding Type `None`; Binding blank).
- No global object created or changed; no image uploaded, renamed or deleted; no string created; no binding set; no variable touched.

### Privacy note (operator review)

- The T3 screenshots show the scope name in the status bar in plain text, as the earlier gate and T2 screenshots do. None is a sign-in form or a credential. The operator should decide whether to keep them.

### Result and next step

- AC-3 (this task): supported by `t3-03` (placement under Region01: user, next to StaticCustIcon), `t3-04` (committed values: Justification, Size, No Colon, Flex Attributes), S15/S16 (Theme Class and binding rows as displayed; Save response text), `t3-05` (Save state and canvas). Limitations: the Save text is from the snapshot (not visible in `t3-05`); the bitmap render remains unverified; Theme Class is not visible in `t3-04`.
- **The combined T4 readback may begin** after an operator decision: the Form is open and clean (Save disabled, no dialog, no menu), both Statics are saved under Region01: user, and the next step, not performed, is T4 as briefed (one close through the Form tab, one reopen through the recent-forms entry, tree and per-Static readback, StaticHeader and FlexLayoutHeader unchanged).
- Operator to note: the Save notification (with Close button) was in the post-Save snapshot S16; it is not in `t3-05`. Check it is gone before T4 if it matters.
  - **Resolved in T6 (observed):** no Save notification text appears in the T6 snapshots taken after the reopen, and the Save button is disabled. The T3 toast itself was never seen in a screenshot.

## T6 - Combined readback (one close, one reopen, tree and per-Static properties) and documentation audit (latest task)

Instruction: T6 only. One close of the clean Form through its Form-tab control, one reopen through the Form menu recent-forms entry, read-only readback of the tree and both Statics, canvas readback, and a documentation update limited to this record and `evidence/EXP-107/`. No Save, no property change, no Regenerate, no binding. Leave the Form open and clean. The worker does not declare EXPERIMENT_COMPLETE.

### Source reads (before the first browser action of T6)

- `AGENTS.md`; `docs/mongoose/transcripts/hello-world-pt7.md` lines 165-182; `recipes/components/add-component-from-toolbox.md`; `recipes/components/configure-basic-component.md`; `recipes/session/session-expiry-and-stale-designer.md`; Outcome sections of EXP-106 (865-886), EXP-105 (383-403) and EXP-101 (254-273).
- Limitation: these reads were made in the earlier part of T6, before the context was compacted. The list is taken from the compaction summary; the transcript is not readable from this context, so the reads are not re-verified here.

### Close and reopen (observed)

- Form-tab close control (`closable FX_CustomerPortal`) clicked once. An earlier snapshot did not show the control; a later one did, and that later ref was used. The Form closed. **No save prompt appeared**, so no prompt text was recorded and no answer was given.
- Form menu opened once; recent-forms entry `FX_CustomerPortal` clicked once. The Designer reopened the Form in User scope with the Components tab and the Properties panel open. No dialog or menu was left open.

### Components tree after reopen (observed; snapshot and `t6-02`)

- `Pane (00)` > `flexlayoutPane_FX_CustomerPortal` (FlexLayout) > `Region00: header` > `FlexLayoutHeader` (Container `flexlayoutPane_FX_CustomerPortal`) > `Region00: header` > `StaticHeader` (Static, Container `FlexLayoutHeader`).
- `FlexLayoutHeader` > `Region01: user` > `StaticCustIcon` (Static, Container `FlexLayoutHeader`), then `StaticCustID` (Static, Container `FlexLayoutHeader`). `Region01: user` has no other child.
- Root: `Region01: main`, then `Region02: footer`.
- Each new Static appears once. The tree order is `StaticCustIcon`, then `StaticCustID`.

### Per-Static properties (read-only; selected by Components-tree row)

| Property | StaticCustIcon (row, `t6-03`) | StaticCustID (row, `t6-04`) |
| --- | --- | --- |
| Name | `StaticCustIcon` | `StaticCustID` |
| Theme Class | blank (not set; not in the brief) | `FX_WhiteHeader` |
| Bitmap File Name | `FX_CustomerIcon.png` | blank |
| Justification | `Right` | `Left` |
| Size (summary) | `4; 1.5` (Width 4, Height 1.5, Lock Size False) | `10; 1.5` (Width 10, Height 1.5, Lock Size False) |
| No Colon | `True` (snapshot; Specific Attributes, not in the screenshot crop) | `True` (snapshot; not in the screenshot crop) |
| Binding Type | `None` (not opened) | `None` (not opened) |
| Binding | blank (not opened) | blank (not opened) |
| Flex Attributes | `Index: 1 Target: user` | `Index: 1 Target: user` |
| Foreground Color | `#000000` | `#000000` |

- The Size, No Colon and Binding rows for StaticCustIcon and the Size row for StaticCustID were read from the accessibility snapshot. The screenshots do not show every row (Size and No Colon are below the screenshot crop). Binding rows were displayed in the Properties panel and were not opened.
- Bitmap File Name editor type and offered images were recorded in T2 and were not reopened in T6 (no picker was opened).

### Canvas readback (observed)

- `t6-02` (no selection, after reopen): `Customer Portal` in the left part of the teal strip; right of the dotted divider (about x 703), a small picture box at about x 1037–1066 (a small grey-and-white photographic image) and an empty box at about x 1073–1147.
- `t6-03` (`StaticCustIcon` selected, Properties header `StaticCustIcon (Static)`): the selection outline and adorner are on the **left** box, which shows the picture. This attributes the image to StaticCustIcon by selection.
- `t6-04` (`StaticCustID` selected, Properties header `StaticCustID (Static)`): the selection is on the **right**, empty box. The left box still shows the picture.
- `t6-01` (before the T6 close, `StaticCustID` selected): the left box (about x 1037–1066) is **empty**, with no picture. So the picture was not drawn before the close and is drawn after the reopen. The cause (reopen, re-render, or the Designer's load) is not isolated.
- Canvas order: `StaticCustIcon` (left), then `StaticCustID` (right). The tree order is the same (icon first), which matches the tutorial order.
- The T3 left/right attribution is corrected in the T3 section above.
- Limitation: the picture's content was not compared with the `FX_CustomerIcon.png` asset; only the Bitmap File Name property and its position on the canvas are observed.

### StaticHeader and FlexLayoutHeader unchanged (observed)

- Tree: `StaticHeader` is still under `FlexLayoutHeader` > `Region00: header`, with the same name as in the T1 gate tree. `FlexLayoutHeader`, `Region00: header` and `Region01: user` names and order are unchanged.
- Canvas: `Customer Portal` still shows in the left part of the strip (`t6-01`, `t6-02`, `t6-03`).
- Their properties were not read in T6 (not in the brief). The "unchanged" finding rests on tree and canvas only.

### Form state at the end (observed)

- Last snapshot (the one returned by the StaticCustID row click, `evidence/playwright/page-2026-10-16T10-46-36-400Z.yml`): Save button disabled; no dialog, menu or notification text. The start-of-context snapshot (after the reopen, before the StaticCustID click) showed Undo disabled and one Designer tab (`FX_CustomerPortal`, selected); the status bar shows `ScopeType: User`. The Form is open and clean. No Save was clicked in T6.

### Action audit, T6

Pre-compaction part of T6 (reconstructed from the compaction summary; exact call counts are not recoverable from this context):

| Category | Count |
| --- | --- |
| Form-tab close clicks | 1 |
| Form menu opens | 1 |
| Recent-forms clicks (FX_CustomerPortal) | 1 |
| Designer clicks (Details expand, Components tab, grid Expand, StaticCustIcon row) | 4 |
| Screenshot calls (`t6-01`, `t6-02`) | 2 |
| Fresh snapshots | at least 3 (exact count not recoverable) |
| Tab list or select calls | not recoverable |

Post-compaction part of T6 (this context):

| Category | Count |
| --- | --- |
| Fresh untargeted snapshots (explicit `browser_snapshot`) | 1 (returned Form open and clean) |
| Designer clicks (StaticCustID Components row) | 1 |
| Screenshot calls (`t6-03`, `t6-04`) | 2 (both first attempts succeeded) |
| Toolbox selections | 0 |
| Canvas placement or coordinate clicks | 0 |
| Undo clicks | 0 |
| Save clicks | 0 |
| Typed entries, Tab presses, per-field corrections | 0 / 0 / 0 |
| List or picker opens | 0 |
| Prompts or dialogs | 0 prompts; 0 dialogs answered |
| Server-event errors | 0 |
| Re-login runs, top-level navigations | 0 / 0 |

T6 totals: Designer clicks 8 (close 1, Form menu 1, recent-forms 1, Details expand 1, Components tab 1, grid Expand 1, StaticCustIcon row 1, StaticCustID row 1); Form closes 1; reopens 1; screenshots 4; snapshots at least 4.

### Cumulative browser action audit (earlier T1 through T3, plus T6)

| Category | Count |
| --- | --- |
| Browser tab lists | 5 through T3; T6 not recoverable (not added) |
| Fresh untargeted snapshots | at least 49 (45 through T3; T6 at least 4) |
| Screenshot calls | 22 (18 through T3; T6: 4) |
| Designer clicks (non-Toolbox, non-canvas, non-Save) | 35 (27 through T3; T6: 8) |
| Form menu opens / recent-forms opens | 2 / 2 (T1-R2 and T6) |
| Form closes / reopens | 1 / 1 (T6 only) |
| Toolbox selections | 2 (T2, T3) |
| Canvas placement clicks / coordinate clicks | 2 / 2 (T2 at (925, 137); T3 at (800, 137)) |
| Designer Saves | 2 (T2, T3; none in T6) |
| Undo clicks | 0 |
| Typed entries / Tab presses | 6 / 11 (no T6 change) |
| List opens / picker opens | 5 / 0 (no T6 change) |
| Property corrections | 0 |
| Prompts / dialogs answered | 0 / 0 |
| Server-event errors | 0 |
| Parallel browser action violations | 1 (T2; not repeated in T3 or T6) |
| Re-login procedure runs | 1 started, 0 completed (earlier T1) |
| Embedded-frame sign-in attempts | 0 |
| Unload, checkout, FormSync, deployment, Regenerate, runtime actions | 0 |

### Worker-written file inventory (T6)

| Path | Task | Status |
| --- | --- | --- |
| `evidence/EXP-107/t6-01-gate-before-close.png` | T6 (pre-compaction) | on disk; `t6-01` shows the pre-close Form and the empty left box |
| `evidence/EXP-107/t6-02-readback-reopened-tree-and-canvas.png` | T6 (pre-compaction) | on disk; reopened tree and canvas with the picture |
| `evidence/EXP-107/t6-03-staticcusticon-selected-properties.png` | T6 | on disk |
| `evidence/EXP-107/t6-04-staticcustid-selected-properties.png` | T6 | on disk |
| `experiments/EXP-107-hello-world-part-7-section-5-fx-customer-portal-user-statics.md` | T6 | edited: status line, T3 correction (two places), this T6 section |

- The cumulative file inventory is the T3 inventory (lines 670-687) plus these rows.
- Controller-generated audits in `evidence/EXP-107/` (`harness-audit-T1.md` to `harness-audit-T5.md`) were not written by the worker and are not counted here.
- `harness-audit-T5.md` (read in T6): its header says "23 actions, 22 reads", but its table has 60 rows (orders 1-60, including Edit calls). The header and table do not agree. Controller-side; not reconciled by the worker. Its table mirrors the T3 StaticCustID sequence, so the controller's task labels may not match the worker's.
- The worker has no T4 or T5 section in this record. The brief's T4 and T5 labels are not recorded here as worker tasks.

### Cleanup inventory (T6)

- Created Mongoose objects in FX_CustomerPortal (User scope), saved and still present: `StaticCustIcon` and `StaticCustID`, with the values in the table above. No cleanup was performed (out of scope for T6).
- No global object created or changed; no image uploaded, renamed or deleted; no string, variable or binding created or set.

### Privacy note (operator review; not deleted)

- The status bar in `t6-01` to `t6-04` (and earlier screenshots) shows the scope identifier in plain text, in an email-address form. The worker has not repeated it in this record. The operator should decide whether to keep these screenshots. None shows a credential or sign-in form.

### Acceptance checks (T6 evidence)

- **AC-1** (sources, session, User scope, Form open and clean, user region located, no extra Statics): supported by `t6-01` (pre-close: `FX_CustomerPortal` tab, status bar `User`, tree with `Region01: user`) and the T6 snapshots (Save disabled). The T1 gate evidence stands for the pre-placement state.
- **AC-2** (StaticCustIcon): supported for the saved values as read back in T6 (`t6-03`: Name, Bitmap File Name, Justification Right, Size 4; 1.5 in the snapshot; No Colon True in the snapshot). The editor type and offered images are from T2 (`t2-04`, `t2-05`). The Bitmap File Name was not reopened in T6.
- **AC-3** (StaticCustID): supported for the saved values (`t6-04`: Name, Theme Class `FX_WhiteHeader`, Justification `Left`, Size 10; 1.5 in the screenshot; No Colon True in the snapshot). Binding Type `None` and Binding blank as displayed, not changed.
- **AC-4** (after one close and reopen: both Statics under `Region01: user` with the values, canvas shows the customer icon and the empty Static, StaticHeader and FlexLayoutHeader unchanged, Form open and clean): supported for this single same-session close and reopen by `t6-02`, `t6-03`, `t6-04`, the T6 tree snapshot and the T6 end-state snapshot. **Limitations:** same browser session; no cross-session or database-level durability is claimed; the picture's content is not compared with the asset; the reason the picture appears only after the reopen is not isolated.
- **AC-5** (no other change; no global object; no binding; no Regenerate; no dragging; Undo not used; no runtime action; no unload; no checkout; User scope; no task-boundary overrun): supported by the T6 action audit (no Save, Undo, placement, typed entry, list or picker open, or binding change in T6). The Form-tab close and the reopen are the only lifecycle actions in T6.
- **AC-6** (final report with decisive evidence, audit with counts, file inventory, cleanup inventory, final state): this section, with the reconstruction limits stated above.

### Result (T6)

- The brief's readback is complete for one same-session close and reopen. Both Statics are under `FlexLayoutHeader` > `Region01: user` with the values listed. The canvas shows the customer icon in the left box and the empty Static in the right box. `StaticHeader` and `FlexLayoutHeader` are unchanged in tree and canvas.
- **Not declared EXPERIMENT_COMPLETE.** Worker recommendation: **operator qualification is needed; unconditional acceptance is not supported** by this record alone. The qualifications are:
  1. The T3 canvas-order attribution was wrong and is corrected above; the T3 record was written from the same screenshot.
  2. The T6 pre-compaction action counts are reconstructed from the compaction summary, so the snapshot and tab-list counts for T6 are lower bounds.
  3. The picture is drawn only after the reopen (`t6-01` vs `t6-02`); its cause is not isolated, and the picture is not compared with the asset.
  4. The T2 Bitmap File Name editor evidence (`t2-04`, `t2-05`) was not re-read in T6.
  5. The screenshots show the scope identifier in plain text (privacy review).
  6. `harness-audit-T5.md` header and table counts disagree (controller-side).
- Knowledge state (this run, observed only): two Statics placed under `Region01: user` with the configured values, and their presence and values read back after one same-session close and reopen. Not a procedure; no repeatability has been shown (one run). Default binding of a new Static is `None` with a blank Binding (observed in T3 and T6).
- Next step, not performed: operator decision on the qualifications above, the privacy review, and any cleanup. Part 7 Section 6 and later are out of scope for this run. The Form is open and clean; no further task in this run should begin without an instruction.

## Outcome (operator, 2026-10-16)

Accepted (observed). **Hello World Part 7 section 5 is complete except the deferred binding:** FlexLayoutHeader's user region holds **StaticCustIcon** (Bitmap File Name **FX_CustomerIcon.png**, Justification Right, Size 4; 1.5, No Colon True) followed by **StaticCustID** (Theme Class **FX_WhiteHeader**, Justification Left, Size 10; 1.5, No Colon True, Binding Type None), read back after an ordinary close and reopen. The canvas shows "Customer Portal" on the left of the blue strip and the customer icon with the empty Static at the right. The operator decided acceptance for EXP-107 only.

- Changed, for later cleanup (User-scope Form FX_CustomerPortal): two new Statics StaticCustIcon and StaticCustID in FlexLayoutHeader > Region01: user (tree and canvas order: icon, then ID; Flex Attributes Index 1 Target user). Two Designer Saves (T2, T3). No global object created or changed; FX_CustomerIcon.png only referenced. No binding, no Regenerate, no Undo.
- **Deferred to Part 8 (operator decision):** StaticCustID's Binding Type Variable / Customer ID; the variable is not defined in Part 7.
- **Run R-20261016-173641-zBO2** (6 worker tasks): T1 found the Web Client logged out; the session-expiry procedure reached the Infor sign-in page but the Sign in button refused two Playwright clicks; the operator signed in manually. Gate recovery (T1-R, T1-R2: FX_CustomerPortal reopened once through recent forms); T2 icon Static and Save; T3 ID Static and Save; T6 combined readback and audit (operator efficiency rule: readback and audit merged, decisive screenshots only).
- **Credential screenshot:** `t1-02` showed the username on the filled sign-in form and was deleted unopened on the operator's decision (not committed). The status-bar scope name in the other screenshots matches every earlier experiment's screenshots and stays.
- Screenshots viewed by the operator assistant: `t6-02-readback-reopened-tree-and-canvas` (after reopen: "Customer Portal" left; icon picture and empty box at the right of the user region; tree FlexLayoutHeader > Region00: header > StaticHeader; Save disabled; User scope).
- Findings (observed):
  1. **Bitmap File Name** is an ExtJS combobox listing the image library alphabetically (about 165 names, including FX_CustomerIcon.png and FX_CustomerSignIn.png); open the list, click the option, Tab.
  2. A second Static clicked into the same Flex region lands next to the first; here the tree and canvas order is icon then ID (placement clicks at x 925 and x 800). The region's Pack End keeps both at the right.
  3. The icon picture was not drawn on the canvas before the close and appeared after the reopen.
  4. Defaults of a Static placed in the user region: Justification Right, Size 20; 1, No Colon False, Flex Attributes Index 1 Target user.
  5. **Session expiry:** the Web Client tab showed the Infor "Logout Successful" card; the portal navigation redirected to Infor CloudIdentities sign-in, whose Sign in button timed out on Playwright clicks ("waiting for element to be visible, enabled and stable").
- Operator rulings (EXP-107 only): the T3 canvas-order wording corrected in T6, the reconstructed T6 pre-compaction counts (lower bounds), one Width fill and Tab sent in one block (no effect), partial source re-reads in T1-R, and the denied Grep of the worker's own transcript are accepted as record and procedural deviations.
- Counts (worker cumulative): Toolbox selections 2; placement coordinate clicks 2; typed entries 6; list opens 5; picker opens 0; corrections 0; Designer Saves 2; Undo 0; Form closes / reopens 1 / 1 (no save prompt) plus one recent-forms open in the gate; prompts 0; server-event errors 0; manual operator sign-in 1.
- Limits: same-session UI evidence only; the icon's pixels were not compared with the asset; no runtime check.
- Next: Part 7 section 6 (08:51-10:54): FlexLayoutFooter (FX_BlueBackground) in the root footer region, and FlexLayoutMain in the root main region with six regions (menu, spacer1, sign in page, home page, cart page, spacer2).
