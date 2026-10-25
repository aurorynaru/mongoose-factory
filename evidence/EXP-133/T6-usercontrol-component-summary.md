# EXP-133 T6 - UserControl component FX_LoginControl (2026-10-26)

Harness header: `run_id=R-20261025-234739-gn7q`, `experiment_id=EXP-133`, `cycle_id=5`, `task=T6`, `worker_session_id=8063fd81-6c18-4b4c-82b1-c8484657a65c`, `task_message_id=875845cc-40d5-43b4-98ac-6e930ccbef6b`.

## Gates before mutation

- Tab list (read-only) before selection; tab 0 selected = Designer `FX_LoginPortal`. Fresh untargeted snapshot taken before any action.
- Status bar `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`; Properties `Version` `User version for user anton.ramos@3mworks.com.ph`; Design Name `FX_LoginPortal`; Script Language `Visual C#` (`t6-00`).
- Save button not disabled (dirty Form, consistent with T5).
- Designer console 2 errors / 0 warnings (footer, every snapshot).
- Tab `FX_BridgeTest` left open, clean and untouched (second tab; not selected during the mutation).
- Pre-insertion Components tree (Components tab): `Pane (00)` only, no child rows. `FX_LoginControl` absent. (Read via find on the post-click snapshot; `t6-00` screenshot taken before the Components tab click, so it shows the Variables tab.)
- Pre-insertion Variables tree: only `Global - Persistent` and `Global - Temporary` root groups; no Form-level category. No `UserCtrl*` variable existed before insertion.
- EXP-131 T7/T8/T9 and EXP-128 read before mutation (see record T6 section).

## Actions (in order)

1. Read-only tab list; tab select index 0 (Designer).
2. Fresh untargeted snapshot.
3. Screenshot `t6-00` (pre-mutation Designer; Variables tab showing).
4. Click Details > Components tab (view-only).
5. Find "Pane (00)" (read): one row, no component.
6. Click Toolbox > Framework Components > UserControl row (selects the tool; no component yet).
7. Canvas single click at (340, 220) inside the Pane (00) design surface -> one UserControl placed.
8. Find "userControl" (read): one component, `userControl1_USER`, Type UserControl, Pane 0, Container 0; Properties `User Control Name` = `V(UserCtrl_userControl1_USER)`.
9. Screenshot `t6-01` (placed, auto-named, Component properties).
10. Double-click Properties > Name value cell (`userControl1_USER`) -> editor active.
11. Text entry (single fill, replaces the value) `FX_LoginControl` in the active Name editor.
12. Key press Enter (commit).
13. Screenshot `t6-02` (renamed; Components grid shows `FX_LoginControl`).
14. Click Properties > Specific Attributes > User Control Name ellipsis -> `Edit User Control References` opened.
15. Find "User Control References" / "Control URL" (reads).
16. Screenshot `t6-03` (dialog before URL: Use Web Control checked; Control URL blank; Web User Control Asset radio dot disabled).
17. Click Control URL combobox (open list).
18. Find "FX_Login" (read): options listed `sohoxi/stylesheets/MongooseCustom.css` and `FX_Login/index.html`.
19. Click option `FX_Login/index.html`.
20. Screenshot `t6-04` (Control URL `FX_Login/index.html`, Use Web Control checked, before OK).
21. Find "OK" (read), then click dialog OK (one dialog-level commit).
22. Mongoose information notice appeared: "You will need to regen this form (save the form definition and re-open it) to see the effect of this change" (in-page Mongoose alertdialog, not browser-native; same text as the EXP-131 T7 observation). Screenshot `t6-05`.
23. Find "regen this form" (read); click that notice's own OK once. No Save, no regen.
24. Screenshot `t6-06` (after notice OK: Components `Pane (00)` > `FX_LoginControl`, UserControl, Pane 0; Properties Name `FX_LoginControl`).
25. Click Details > Variables tab (view-only); find "UserCtrl" (only the Properties expression matched); find "Form - " (no match).
26. Screenshot `t6-07` (Variables tab; first rows show `Global - Persistent` group, scrollable).
27. Click Variables tree Collapse control (view-only): root categories shown.
28. Screenshot `t6-08` (root categories: `Global - Persistent`, `Global - Temporary` only).
29. Find "User Control Name" (read); click its ellipsis again to reopen the reference dialog read-only.
30. Screenshot `t6-09` (readback: Use Web Control checked; Control URL `FX_Login/index.html`).
31. Click Cancel (read-only close; no commit).
32. Find "Save" (read): Save not disabled.
33. Screenshot `t6-10` (final: no dialog open; Save enabled; User scope).

## Action ledger (T6)

- Browser actions: 16 total = tab select 1; clicks 13 (includes one coordinate click at (340, 220), the Name double-click, the ellipsis twice, the Control URL combobox and option, OK, notice OK, Components tab, UserControl toolbox row, Variables tab, Variables Collapse, Cancel); text entries 1 (Name); key presses 1 (Enter).
- Browser reads: 1 tab list; 1 fresh snapshot; 15 finds; 11 screenshots (`t6-00` to `t6-10`).
- Browser JavaScript: 0. Recovery allowance: 0 used (no "Ref not found" errors; no timeout; all actions returned ok).
- Session expiry: none. Unexpected browser-native dialogs: none.

## Mongoose artifacts created or changed in T6

- One UserControl component `FX_LoginControl` (created at the canvas click, renamed from auto-name `userControl1_USER` before the reference was configured).
- Edit User Control References: Use Web Control = checked; Control URL = `FX_Login/index.html` (Web User Control Asset radio shown with its filled dot; disabled, so the radio state is visual only).
- No variable created or altered. No Form Script, handler, asset, Global Object, IDO or other object touched.
- Ordinary Designer Save: 0. Close/reopen: 0. Runtime open: 0. Sign In: 0. Top-toolbar Delete, Regenerate Form, Revert, Unload, FormSync: not activated.

## Readbacks (same session, pre-Save)

- Components tree (`t6-06`): `Pane (00)` > `FX_LoginControl` | Type `UserControl` | Pane 0 | Container 0.
- Component Properties (`t6-06`): Name `FX_LoginControl`; Type `UserControl`; Specific Attributes > `User Control Name` = `V(UserCtrl_userControl1_USER)`.
- Edit User Control References, pre-commit (`t6-03`): Use Web Control checked; Control URL blank.
- Edit User Control References, pre-commit selection (`t6-04`): Control URL `FX_Login/index.html`.
- Edit User Control References, reopened read-only after OK (`t6-09`): Use Web Control checked; Control URL `FX_Login/index.html`; then Cancel.
- Variables tree (`t6-08`): root categories `Global - Persistent` and `Global - Temporary` only; no Form-level category, so no `UserCtrl*` generated variable is visible before the ordinary Save.

## Unresolved and flagged for operator disposition before the T7 Save

1. **Stale generated expression.** `User Control Name` still reads `V(UserCtrl_userControl1_USER)` (the pre-rename auto-name). EXP-131 T9 (observed, after its Save) recorded the expression re-keyed to `V(UserCtrl_FX_BridgeControl)` and that the Save also produced stale non-FX_ Form variables `UserCtrl_userControl1_USER`, `UserCtrlAsm_userControl1_USER` and `UserCtrlUrl_userControl1_USER` next to the renamed set. If the same happens at the EXP-133 Save, those three non-FX_ generated variables would exist in the FX_LoginPortal Form. The brief requires a stop for operator disposition in that case. Not verified here (no Save performed).
2. **Header lag.** The Properties combobox header still reads `userControl1_USER (ActivexControl)` while the Name field and Components grid read `FX_LoginControl` (EXP-131 precedent; not relied on).
3. **Notice.** The Mongoose notice requires a Form Save and reopen to show the effect of the reference change. Its effect on the saved definition is unverified until T7.

## Acceptance

- AC-6 partial (pre-Save, same session): exactly one `FX_LoginControl` UserControl component on `FX_LoginPortal` (Components grid); Use Web Control checked; Control URL `FX_Login/index.html`. Generated UserCtrl variables: none visible pre-Save. Not closed: post-Save inventory and the stale-expression question remain open.
- AC-2 unchanged (Save pending). AC-7, AC-8, AC-9, AC-10 not started in T6.

## Limitations of this evidence

- The Components tree and Variables tree were read through the accessibility tree and the Details panel at pre-Save state; they do not prove a stored definition.
- The Variables tree may be virtualized; the collapsed root view is the strongest local evidence that no Form-level category exists.
- The coordinate click placed the component; the placement point is not a semantic reference.
- The notice text was read from the screenshot and accessibility tree; it is the same text recorded in EXP-131 T7.

## Screenshots (files under evidence/EXP-133/)

- `t6-00-designer-before-usercontrol-fx-loginportal.png`: pre-mutation Designer (empty canvas; Variables tab showing; Visual C#; User scope). Proves identity and scope; shows the Variables tab rather than Components because the capture ran before the Components click.
- `t6-01-usercontrol-placed-auto-named-userControl1-USER.png`: one UserControl on the canvas; Component properties; Components grid `userControl1_USER`. Proves one placement; not the rename.
- `t6-02-usercontrol-renamed-fx-logincontrol-before-reference.png`: Name `FX_LoginControl`; Components grid `FX_LoginControl`. Proves the rename in the Designer UI; header still shows the old name.
- `t6-03-user-control-references-dialog-before-url.png`: dialog pre-commit; Use Web Control checked; Control URL blank.
- `t6-04-user-control-references-control-url-selected-before-ok.png`: Control URL `FX_Login/index.html` selected before OK.
- `t6-05-after-user-control-references-ok-alert-state.png`: Mongoose regen notice over the Designer (expected notice; dismissed once).
- `t6-06-after-alert-ok-components-tree-and-properties.png`: post-notice Designer; Components `FX_LoginControl`; Name `FX_LoginControl`; Save state visible in the toolbar.
- `t6-07-details-variables-after-usercontrol-no-form-ucvars.png`: Variables tab with the Global - Persistent group (scrollable).
- `t6-08-details-variables-collapsed-root-categories.png`: root categories only (`Global - Persistent`, `Global - Temporary`); no Form-level category.
- `t6-09-user-control-references-readback-reopened-before-cancel.png`: read-only readback; Use Web Control checked; Control URL `FX_Login/index.html`.
- `t6-10-final-designer-after-cancel-no-dialog-save-enabled.png`: final; no dialog; User scope; Visual C# not visible in this frame (read earlier via snapshot).

## Repository writes (T6)

- `evidence/EXP-133/t6-00` to `t6-10` PNG captures (11 files).
- `evidence/EXP-133/T6-usercontrol-component-summary.md` (this file).
- `experiments/EXP-133-minimal-fx-loginportal-with-client-validation-and-.md` (T6 section appended).
- Tool-written, disclosed (not authored): snapshot files `evidence/playwright/page-2026-10-25T16-14-*.yml` through `page-2026-10-25T16-15-*.yml`, and the console log entry `evidence/playwright/console-2026-10-25T16-13-52-137Z.log` created by the tab listing.
