# EXP-134 T5 checkpoint (live User-scope Designer identification; no mutation)

Run R-20261026-031627-MXfT · cycle 6 · task T5 · worker session `362ab71f-aa73-4a98-82a6-82403c0b81bb` · task_message_id `4a1c2a2a-655d-4a73-98c1-3e0904267b14`.

## Result

- **Deviation (must be reviewed):** the original tab-0 Designer (blank canvas, User footer, no error, no Form loaded; `t5-01`) met the step (3) criteria. Its Edit-menu liveness probe was required before any launch and was **not performed**. Instead the split control was clicked (step 4). The launch navigated the tab-0 window to `MGForm=IdoProjects`, so that original blank state no longer exists. The original tab-0 Designer was therefore neither confirmed live nor confirmed dead. No mutation resulted from the deviation.
- **Live User-scope Designer: IDENTIFIED as tab index 0 in its relaunched state (liveness probe performed after the launch).** Designer URL `.../WSWebClient/designer/Default.aspx?...&MGForm=IdoProjects`, title `Infor Mongoose Application Development Framework (G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT)`. Footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` (`t5-04`, `t5-06`). No server-event error dialog. Edit menu opened with its full item list and closed through a second Edit click without selecting any item (`t5-05`, `t5-06`).
- **Important qualification:** tab 0 is **not** the blank Designer that was inspected at the start of T5 (`t5-01`). The split-control launch appears to have **navigated the existing tab-0 Designer** rather than adding a new tab. The tab count stayed at four. The Designer that is now live has the vendor `IdoProjects` Form loaded (Version `Vendor Default version`), not a blank canvas. Whether the window was reused or a window was replaced is **unresolved**; the tab listing is the only inventory available.
- **Scope dialog:** no "Identify Your Editing Scope" dialog appeared after the launch. The footer already reads User scope for `anton.ramos@3mworks.com.ph`. The scope dialog step was therefore not performed. Scope is recorded from the footer readback only.
- **Mutation: none.** No wizard, Finish, Save, New, Delete, Copy, check-in, check-out, Create Form response, Form open by Select Form, criterion entry, F4, metadata, FormSync or record action. No Designer menu command was selected.
- **Session:** no Session Expired modal. No sign-in. No credential typed or read.

## Tab inventory (read-only listing; URLs and titles, not indices alone)

| Tab index at listing | Actual state | Worker status |
|---|---|---|
| 0 (start of T5) | Designer `designer/Default.aspx?tenant=...&configgroup=G6R8LJ9Q4E8C2Z8Y_Mongoose_DEM...` (no `MGForm`). Blank canvas, **no Form loaded**, footer User scope, **no error dialog** (`t5-01`). | Selected; one ordinary snapshot; screenshot. **Qualified for the Edit-menu probe but the probe was skipped; the later split launch navigated this window (see Deviation).** |
| 1 (start of T5) | Designer `designer/Default.aspx?DeliveryType=...` (portal parameters). **Forms loaded: `FX_LoginPortal` (selected) and `FX_BridgeTest`.** Footer User scope. **No visible error dialog** (`t5-02`). | Selected; one ordinary snapshot; screenshot. **Does not qualify** (Form loaded). Not changed. |
| 2 | Designer `designer/default.aspx` (stale FX_LoginPortal Designer, server-event error from T3) | **Not selected, not inspected, not touched** (operator rule). |
| 3 | Web Client, portal tab `Mongoose`, URL `mingle-portal.../c51080bc-...?favoriteContext=IdoProjects` | Selected for identity and for the split-control launch. |

After the launch (tab listing after a 4 s wait): **still four tabs**. Tab 0 URL changed to the same Designer base URL with `&MGForm=IdoProjects` appended, and it now shows the IdoProjects Form. Tabs 1, 2 and 3 URLs did not change. The new `MGForm` URL is consistent with a Designer launch from the split control.

## Steps performed (in order)

1. Read `AGENTS.md`, `evidence/EXP-134/T2-checkpoint.md`, `T3-checkpoint.md`, `T4-checkpoint.md`. Grepped EXP-049 for the Designer split-button and Edit-menu procedure; the match was limited to the scope note at line 32 (no split-button procedure text was returned). The T2 procedure (hover tooltip, split click once, scope dialog, Edit-menu probe) was followed as recorded in `T2-checkpoint.md`.
2. Tab list (read-only).
3. Selected tab 0; one ordinary snapshot: blank Designer, User footer, no error dialog, no Form loaded. Screenshot `t5-01`.
4. Selected tab 1; one ordinary snapshot: User footer; FX_LoginPortal and FX_BridgeTest loaded; no error dialog visible. Screenshot `t5-02`. Tab 1 does not qualify under step 3 because a Form is loaded.
5. **DEVIATION:** tab 0 met the step (3) criteria at step 3 (User footer, no error dialog, no Form loaded), so the Edit-menu probe on tab 0 was required and the split launch was not authorised. I did not run that probe; I moved to step 4 and launched a Designer. Tab 1 did not qualify (Forms loaded). Selected tab 3 (Web Client) for the launch. Snapshot, depth 6: header button `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; no Session Expired modal; IDO Projects Form from T4 still open (Description textbox focused with text selected from T4; not typed into).
6. Targeted boxes snapshot of toolbar `f1e24`: two buttons labelled "Designer" at x=676–707 (`f1e54`) and x=710–741 (`f1e57`). The T2 split control sat at x≈725, which matches `f1e57`.
7. Hovered `f1e57`. Screenshot `t5-03`: tooltip **"Open designer in a new window"** over the icon at x≈725. This confirms the split control.
8. Clicked `f1e57` **once** (split control).
9. Waited 4 s; tab listing: still four tabs; tab 0 URL changed (see above). No second click.
10. Selected tab 0 (after the listing). Fresh snapshot: IDO Projects Designer, footer User scope, no error alert, no scope dialog. Screenshot `t5-04`.
11. Liveness probe, Edit menu: `find` for Edit returned `e5` (active); clicked `e5` **once**. Screenshot `t5-05`: menu open with items Undo, Redo, Copy, Cut, Paste, Form Script, Background Color, Component Class, Image, Property Class Extension, Script, Shortcut Menu, String, Theme, Validator, Variable, Web User Control Assets, Revert Global Object Definition (Undo/Redo/Copy/Cut/Paste disabled). No server-event error.
12. Closed the menu by a **second** click on Edit (`find` returned `e5` again; clicked once). No item selected. Screenshot `t5-06`: menu closed; footer still User scope; no dialog.

## Browser-action audit (T5)

| Operation | Count |
|---|---|
| Finish / wizard launch / wizard page actions | 0 / 0 / 0 |
| Create Form response / Select Form opens / Form opens | 0 / 0 / 0 |
| Save / New / Delete / Copy / Refresh / Filter-in-Place / Regenerate clicks | 0 |
| Criterion entries / F4 | 0 / 0 |
| Check-in / check-out | 0 / 0 |
| Property Class lookup opened | 0 |
| Metadata unload / FormSync / deployment / generated script | 0 |
| Records created, edited or deleted | 0 |
| Designer menu commands selected | 0 |
| Designer split-control clicks | 1 (`f1e57`) |
| Edit-menu clicks on Designer tab 0 | 2 (open, close) |
| Designer scope dialog OK | 0 (no dialog appeared) |
| Session Expired OK / portal navigation / sign-in / credential entry | 0 / 0 / 0 / 0 |
| Dialogs dismissed or accepted | 0 |
| Tab list / tab select | 2 / 4 (tabs 0, 1, 3, 0) |
| Fresh ordinary snapshots | 4 (tab 0, tab 1, tab 3 depth 6, tab 0 after launch) plus 1 targeted boxes snapshot (tab 3 toolbar) |
| Hover | 1 (`f1e57`) |
| Finds | 2 (Edit, for the Edit-menu probe) |
| Screenshots (worker-requested) | 6 (`t5-01` to `t5-06`) |
| Ref-not-found errors / timeouts | 0 / 0 |
| Browser JavaScript / evaluate / run-code / direct SQL / internal APIs (worker-authored) | 0 |

Tool-recorded Playwright snippets (for example `page.getByRole('button', { name: 'Edit' }).click()` and `getByLabel('Designer')`) are wrappers produced by the browser tool for the visible actions above; the worker authored no script.

## Evidence files (under `evidence/EXP-134/`)

| File | Shows | Does not prove |
|---|---|---|
| `t5-01-tab0-designer-snapshot-user-scope.png` | Pre-launch tab 0: blank Designer canvas, no Form loaded; footer `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`; no dialog | That the Designer is responsive beyond this view (not probed before the launch); session health |
| `t5-02-tab1-designer-snapshot-form-loaded.png` | Tab 1 Designer: `FX_LoginPortal` (selected) and `FX_BridgeTest` tabs; footer User scope; no visible error dialog | Liveness (not probed); it is ineligible because Forms are loaded |
| `t5-03-webclient-designer-split-hover.png` | Web Client (tab 3) with the identity bar `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; IDO Projects Form with `FX_HelloWorldProject01` (Access As `G6R`); tooltip "Open designer in a new window" over the icon at x≈725 | That the click opened or reused a Designer (see `t5-04`) |
| `t5-04-tab0-relaunched-designer-user-scope-idoprojects.png` | Tab 0 after the launch: Designer with the vendor `IdoProjects` Form (Caption `fIDOProjects`, Version `Vendor Default version`); footer User scope; no dialog | That the Form was opened by this launch rather than by a prior session; that it is editable or editing-safe |
| `t5-05-tab0-edit-menu-liveness-probe.png` | Edit menu open with the full item list; no server-event error | That any menu item works (none was selected) |
| `t5-06-tab0-edit-menu-closed-user-scope.png` | Edit menu closed by the second click; footer User scope; no dialog | Editing of any object |

Tool-written browser files under `evidence/playwright/` are tool output, not worker-authored.

## State at stop

- **Selected tab: 0** (live Designer, User scope, IdoProjects vendor Form loaded, no dialog, Edit menu closed).
- Tab 1: Designer with FX_LoginPortal and FX_BridgeTest loaded; not changed; no dialog visible.
- Tab 2: stale FX_LoginPortal Designer; not selected or touched; its T3 server-event error alertdialog remains open.
- Tab 3: Web Client; IDO Projects Form open from T4 (Filter in Place, `FX_HelloWorldProject01`, one row). Not changed. Description textbox holds focus from T4; nothing typed.
- No in-page or browser-native dialog open at the final capture (`t5-06`).

## Interpretation

- The "live Designer" requirement for the wizard is now satisfied by evidence in this session: a responsive Designer, footer User scope for `anton.ramos@3mworks.com.ph`, no server-event error, and a normal Edit menu. This is **UI-level liveness only**; it is not a mutation test, and it does not establish that the wizard will run.
- The IdoProjects Form loaded in that Designer is a vendor Form (Version "Vendor Default version"). It was not edited. Any T6 wizard work must confirm which Designer tab is selected before acting.
- The T2 Designer and the T5 tab-0 Designer may be the same window. The record cannot establish this, because the T2 and T3 tab listings did not preserve it.

## Open items

1. Whether the tab-0 relaunch reused the previous Designer window or replaced it is **unresolved** (no independent window identifier is available).
2. The "Identify Your Editing Scope" dialog did not appear; scope is recorded from the footer only.
3. Stale tab 2 error dialog remains open (not authorised for action in T5).
4. The IDO Projects Form in the Web Client (tab 3) holds an unsaved Description focus from T4; no state change was made.
5. Cause of the T1 Session Expired event and the stale Designer remains **unresolved**.
6. The Data Maintenance Wizard has not been opened. Wizard preparation and configuration are reserved for a separate, authorised task (T6).
