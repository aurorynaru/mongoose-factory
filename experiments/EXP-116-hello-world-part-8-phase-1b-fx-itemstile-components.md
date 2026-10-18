# EXP-116 - Hello World Part 8 Phase 1b: Picture Static/Edit Rework and the StaticItem, StaticItemDescription and StaticCost Statics on FX_ItemsTile

Status: **accepted (observed), with qualifications — operator, 2026-10-18; see Outcome (operator) at the end.** T6 complete (cycle 7 run, bounded to T6): close/reopen readback done and final documentation audit written. (run R-20261018-224848-LBPN). T6: FX_ItemsTile closed once through its Form-tab close control (no prompt), reopened once through the Form menu recent-forms entry (User scope; Form Size 40; 4; Save disabled). Components tree: exactly StaticPicture, StaticItem, StaticItemDescription and StaticCost under Pane (00); no FX_PictureStatic or FX_PictureEdit. Every component read back (Properties text, screenshots t6-02 to t6-05). Same-session readback only; no cross-session or database-level durability is claimed. Console 2 throughout. FX_ItemsTile left open and clean.

Earlier status (T5, retained): T5 complete (cycle 6 run, bounded to T5). T2, T3 and T4 complete earlier (FX_PictureStatic removed; StaticPicture, StaticItem and StaticItemDescription configured). T5: StaticCost placed under Pane (00), named, and configured (Justification Right (default, left unchanged), Binding Type Property, Binding object.FX_Cost, Location Top 2, Left 30 (summary 2; 30), Size 8; 1.5, No Colon True; Theme Class and Caption at defaults). Three Designer Saves, each with the toast "Form [FX_ItemsTile] and global object(s) were saved." Console 2 throughout. Four Statics under Pane (00). T6 (close and reopen readback, final audit) has not been started.

Predecessor: EXP-115 (User-scope Tile Form FX_ItemsTile created, Layout Size 40; 4, read back after close/reopen).

Brief: Hello World Part 8 Phase 1 (`docs/mongoose/transcripts/hello-world-pt8.md` lines 87-112; transcript lines 333-351, 01:19-03:18).

## Scope and plan (from the brief)

| Task | Work | Designer Saves |
| --- | --- | --- |
| T1 | Read-only gate (this task) | 0 |
| T2 | Take out FX_PictureStatic (Components-grid trash, confirmation naming it alone); FX_PictureEdit → Static StaticPicture (Binding object.FX_Picture kept; Image and Text ImageOnly; No Colon True; Location 0; 0; Size 8; 4) | 3 (A, B, C) |
| T3 | Static StaticItem: Theme Class FX_Header; Justification Left; Binding Type Property, Binding FX_Item; Location 9; 0; Size 27; 1.5; No Colon True | 3 (A, B, C) |
| T4 | Static StaticItemDescription: Justification Left; Binding Type Property, Binding FX_Description; Location 9; 2; Size 20; 1.5; No Colon True | 3 (A, B, C) |
| T5 | Static StaticCost: Justification Right; Binding Type Property, Binding FX_Cost; Location 30; 2; Size 8; 1.5; No Colon True | 3 (A, B, C) |
| T6 | Close and reopen readback, final audit (no unload) | 0 |

Layout values are typed (Location and Size), not dragged. The narrated unload of global form objects is not authorized and is not part of this experiment.

## T1 sources reviewed (before any browser action)

- `AGENTS.md` (repository file).
- `docs/mongoose/transcripts/hello-world-pt8.md` lines 87-112 (Phase 1 table) and lines 333-351 (transcript 01:19-03:18).
- `recipes/components/add-component-from-toolbox.md`, `recipes/components/configure-basic-component.md`, `recipes/session/session-expiry-and-stale-designer.md`.
- Outcome (operator) sections only: `experiments/EXP-115-hello-world-part-8-phase-1a-fx-itemstile-form.md` line 673; `experiments/EXP-114-hello-world-part-7-section-11-statichome-griditems.md` line 681; `experiments/EXP-084-hello-world-part-5-section-6b-fx-orders-picture-display.md` line 1146.

No other record was read.

## T1 gate: starting state (attempt 1, cycle 0)

- **Browser tabs** (listed before any selection, read-only):
  - Tab 0 (current): Infor Mongoose Designer, `mode=designer`, `MGForm=FX_ItemsTile`, configuration group G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT.
  - Tab 1: "Logout Successful" (mingle-portal `session/slo/signoutsuccess`).
  - No tab selection was needed; tab 0 was already the current tab. Tab 1 was not selected, clicked or captured. It is a portal logout page, not the Web Client or the Designer tab; it is recorded here only.
- **Session:** no Session Expired modal, sign-in page or logout card in tab 0 at the gate. No sign-in was performed.
- **Editing scope:** User (Designer status bar `ScopeType: User`). No "Identify Your Editing Scope" dialog appeared.
- **Form identity:** tab "FX_ItemsTile" selected. Form properties (gate snapshot): Name FX_ItemsTile; Form Type Tile; Is Master True; Device Type Default; Unit Char; **Size 40; 4** (Width 40, Height 4); Pane 0 and Pane 1 Scroll Bars As Needed; Splitter None; Synchronize FlexLayout attributes True.
- **Clean state:** Save disabled, Undo disabled, Regenerate Form disabled; no dialog or list open.
- **Baseline console error count:** **2 errors, 0 warnings** (gate snapshot page status line). The console messages were not read.
- **Components tree** (Details > Components grid, gate snapshot): Pane (00) with exactly two rows:
  - FX_PictureStatic: Type Static; Data Source blank; Pane 0; Tab 0.
  - FX_PictureEdit: Type Edit; Data Source `object.FX_Picture`; Pane 0; Tab 1.
  - This matches the brief's expected tree.
- **Gate screenshot:** not taken before the first click (deviation from the brief's gate screenshot). The first screenshot was taken after the click (t1-02).

## T1 actions in order (attempt 1, cycle 0)

| # | Action | Result | Console errors after |
| --- | --- | --- | --- |
| 1 | Tab list (read-only) | Two tabs as above | 2 (gate) |
| 2 | Untargeted inline snapshot (read-only) | Clean gate as above; Form Size 40; 4; tree FX_PictureStatic and FX_PictureEdit | 2 |
| 3 | **Click** the FX_PictureStatic row in the Components grid (name cell, the first and only selection click in T1) | Properties header changed to "FX_PictureStatic (Static)" but the property grid rendered **empty**. The server-event **Error** alert appeared. Console count **rose from 2 to 4**. The tool wrote new console entries to `evidence\playwright\console-2026-10-18T14-49-07-394Z.log#L3-L4` (not read). | **4 (rise)** |
| 4 | Screenshot `evidence/EXP-116/t1-02-console-rise-after-select-picturestatic.png` (read-only) | Shows the Error alert over the canvas (see Evidence) | 4 |
| 5 | Fresh untargeted inline snapshot (read-only), to obtain the OK reference | Save and Undo disabled; `alertdialog "Error"` with the message and an OK button (ref e708 in that snapshot) | 4 |
| 6 | **Click** OK (e708), once, to answer the server-event prompt | Alert closed. Console count unchanged. | 4 (no rise) |
| 7 | Screenshot `evidence/EXP-116/t1-03-after-server-event-error-ok.png` (read-only) | Alert gone; tree and FX_PictureStatic selection unchanged; Properties grid still empty; status bar `ScopeType: User` | 4 |

After action 6, T1 stopped. No further click, Save, close, reopen, FX_PictureEdit selection or retry was made, per the console-error stop rule and the server-event rule.

## Blocker (for the operator)

1. **Server-event error** after action 3: `The server event processing returned an error. If this persists, contact your system administrator.` (Error, OK only). Answered **OK once** (action 6). Per the brief, the run stops blocked for an **operator Designer reload**. Do not retry the selection, do not close or reopen the Form, and do not re-login from the worker.
2. **Console rise 2 → 4** after the same action 3. Stopped before any further click. The operator diagnoses the cause from the tool-written console log `evidence\playwright\console-2026-10-18T14-49-07-394Z.log` (lines L3-L4). The worker did not read it.
3. **Candidate cause (unverified):** the error matches the stale-Designer symptom in `recipes/session/session-expiry-and-stale-designer.md` (server-event error on a Designer tab loaded before a session change). Tab 1 shows "Logout Successful", which may mean the Mongoose session ended in another tab. No "Session Expired" modal or sign-in page appeared in tab 0, so the session-expiry procedure was not run. This is not verified.
4. **Client-side cause (unverified):** the Properties grid rendered empty after the selection. It is not known whether this is part of the same failure.

## Component values (attempt 1, cycle 0; superseded by the cycle 2 values below)

- **FX_PictureStatic:** Name FX_PictureStatic; Type Static (Components row and Properties header "FX_PictureStatic (Static)"); Data Source blank; Pane 0; Tab 0. **Caption, Binding, Location and Size were not read**: the property grid was empty after the server-event error.
- **FX_PictureEdit:** not selected in T1 (stopped before any further click). From the Components row only: Type Edit; Data Source `object.FX_Picture`; Pane 0; Tab 1. Name, Caption, Location and Size were not read.

## Evidence

- `evidence/EXP-116/t1-02-console-rise-after-select-picturestatic.png`: shows the server-event Error alert with OK over the Designer canvas; the Components tree with both rows and FX_PictureStatic highlighted; the Properties header "FX_PictureStatic (Static)" with an empty property grid. Does **not** show: the Caption, Binding, Location or Size values, the Form properties panel, or the console messages.
- `evidence/EXP-116/t1-03-after-server-event-error-ok.png`: shows the alert closed, the same tree and selection, the empty property grid, and `ScopeType: User` in the status bar. Does **not** prove: anything about the server-side state, or that the Designer works after a reload.

## Action audit (attempt 1, cycle 0)

| Item | Count |
| --- | --- |
| Tab list calls (read-only) | 1 |
| Tab selections | 0 |
| Untargeted inline snapshots requested by the worker (read-only) | 2 (action 2 and action 5) |
| Screenshots (read-only) | 2 |
| Browser clicks that changed state | 2: the FX_PictureStatic row selection (action 3) and the OK on the server-event prompt (action 6) |
| Component selections | 1 (FX_PictureStatic row; FX_PictureEdit not selected) |
| Designer Saves | 0 |
| Trash clicks (Components grid or top toolbar) | 0 |
| Component taken out | 0 |
| Toolbox selections, canvas placement clicks, coordinate clicks | 0 |
| Undo clicks | 0 |
| List opens | 0 |
| Prompts | 1: server-event "Error" alert, text above, answered OK once |
| Property edits (typing) | 0 |
| Form closes and reopens | 0 |
| Re-logins | 0 |
| Session-expiry modals or sign-in pages | 0 |
| Drags | 0 |
| Server-event errors | 1 |
| Console-count rises | 1 (2 → 4 after action 3) |
| Ref-not-found errors | 0 |
| Fresh snapshot recoveries used | 0 (the action-5 snapshot was taken to obtain the OK reference after the error, not after a Ref error) |

The page snapshots returned automatically by the click tool were saved by the tool to `evidence\playwright\page-2026-10-18T14-49-23-243Z.yml` and `page-2026-10-18T14-49-42-301Z.yml`. They were not read or searched by the worker.

## Worker-written file inventory

Written by the worker in T1:

- `experiments/EXP-116-hello-world-part-8-phase-1b-fx-itemstile-components.md` (created)
- `evidence/EXP-116/t1-02-console-rise-after-select-picturestatic.png`
- `evidence/EXP-116/t1-03-after-server-event-error-ok.png`

Written by the tooling, not the worker: `evidence\playwright\page-2026-10-18T14-49-23-243Z.yml`, `evidence\playwright\page-2026-10-18T14-49-42-301Z.yml`, `evidence\playwright\console-2026-10-18T14-49-07-394Z.log` (not read).

## Cleanup inventory (carried from EXP-115, unchanged in T1)

- Form `FX_ItemsTile` (User scope), with components `FX_PictureStatic` (Static) and `FX_PictureEdit` (Edit, `object.FX_Picture`).
- Not yet created (planned for T2 to T5): `StaticPicture` (the renamed FX_PictureEdit), `StaticItem`, `StaticItemDescription`, `StaticCost`.

## Final state at the end of T1

- Designer tab 0: `FX_ItemsTile`, User scope, Form Size 40; 4, Save disabled, Undo disabled, no dialog or list open. `FX_PictureStatic` is selected in the Components grid; its property grid is empty.
- Portal tab 1 ("Logout Successful"): left untouched.
- Nothing has been saved or changed in T1.
- The session was not re-established. No sign-in was performed.

## Next permitted action (attempt 1; superseded by the cycle 2 re-run below)

Operator: reload the Designer tab for `FX_ItemsTile` (the brief's stale-Designer fix). Then resume with a T1 re-run: inspect read-only first, redo the read-only gate (Form Size, tree, the two components' values), and repeat no action from this run. Do not resume T2 until the gate passes with no server-event error and no console rise.

## T1 re-run (cycle 2): read-only gate

Run R-20261018-224848-LBPN, task message d10c2698-9f82-42a3-a28a-b5e966d71a96, worker session 0bc4ddcb-15f4-4987-9466-80e448d72775. The task header names T2, but the operator's bounded instruction says "Perform ONLY the fresh EXP-116 T1 read-only gate" and "Do not begin T2". This run did only T1. No T2 action, no Designer Save, no trash click and no Form change was made.

Sources: AGENTS.md and this record's T1 part (continuation rule). No other source was read. The attempt 1 audit above is preserved separately.

### Starting state (cycle 2)

- **Browser tabs** (listed before any selection, read-only): tab 0 (current) is the Designer at `designer/default.aspx?MGForm=FX_ItemsTile`, configuration G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT. Tab 1 is a "Mongoose" portal page (`mingle-portal ... favoriteContext=FX_ItemsTile`). In attempt 1, tab 1 was "Logout Successful". No tab selection was needed.
- **Layout change since attempt 1 (observed, not verified):** the tab 0 URL is shorter, and the Details panel and the Form Properties Layout group were collapsed at the start. This is consistent with the operator reloading the Designer, but the worker did not verify the reload and did not reload anything.
- **Session:** usable. No Session Expired modal, sign-in page or logout card appeared. No sign-in was performed.
- **Baseline console error count:** 2 errors, 0 warnings (fresh; not carried from attempt 1's 4).
- **Editing scope:** User (status bar `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`). No "Identify Your Editing Scope" dialog appeared.
- **FX_ItemsTile:** Save disabled, Undo disabled, Regenerate Form disabled; no dialog, list or menu open.
- **Form Properties (Form tab):** Name FX_ItemsTile; Form Type Tile; Device Type Default; Is Master True; Layout: Unit Char; **Size 40; 4**; Splitter None; Pane 0 and Pane 1 Scroll Bars As Needed; Synchronize FlexLayout attributes True. Collections: Primary Collection FX_Items (seen in the Collections tab after the Details panel was expanded).
- **Components tree (Pane (00) expanded with the grid's Expand control):** exactly FX_PictureStatic (Static; Data Source blank; Pane 0; Tab 0) and FX_PictureEdit (Edit; Data Source `object.FX_Picture`; Pane 0; Tab 1). This matches the brief. In the first view, Pane (00) was collapsed and its children were hidden.

### Component values (cycle 2, read from the Properties panel, accessibility text)

- **FX_PictureStatic** (selected by its Components row; Properties header "FX_PictureStatic (Static)"):
  - Name FX_PictureStatic; Type Static; Caption blank (the caption cell has no text); Description blank.
  - Data Source group: Binding Type **None**; Binding blank; Required False.
  - Layout group: **Size 20; 1**; **Location 1; 3**; Unit Char; Tab Order 0.
- **FX_PictureEdit** (selected by its Components row; Properties header "FX_PictureEdit (Edit)"):
  - Name FX_PictureEdit; Type Edit; Caption **`C(FX_PictureStatic)`** (a generated caption text, not set by the worker); Description blank.
  - Data Source group: Binding Type **Property**; Binding **object.FX_Picture**; Required False.
  - Layout group: **Size 37.05; 2**; **Location 1; 23.75**; Unit Char; Tab Order 1.
  - Read-only; nothing was edited.

Caption, Binding, Location and Size for both components are now recorded. The Components grid and the Properties text agree on Type, Binding and Pane/Tab.

### Actions (cycle 2, in order)

| # | Action | Result | Console errors after |
| --- | --- | --- | --- |
| 1 | Tab list (read-only) | Two tabs as above | 2 (start) |
| 2 | Inline untargeted snapshot (read-only) | Clean gate; Form Size 40; 4; Details panel collapsed; Pane (00) collapsed | 2 |
| 3 | Click Details "Expand Panel" (view-only) | Details panel expanded, showing the Collections tab | 2 |
| 4 | Inline snapshot (refs) | Same, Collections tab selected | 2 |
| 5 | Click Details "Components" tab (view-only) | Components tree visible; Pane (00) collapsed | 2 |
| 6 | Inline snapshot (refs) | Pane (00) collapsed; children not in the tree | 2 |
| 7 | Screenshot `t2-01-gate-tree-canvas-form-properties.png` (read-only) | Tree with Pane collapsed; Form Properties Layout collapsed | 2 |
| 8 | Click Components grid "Expand" (view-only) | Pane (00) expanded with both children | 2 |
| 9 | Inline snapshot (refs) | Both components listed with Type, Data Source, Pane, Tab | 2 |
| 10 | Double-click Form Properties "Layout" group (view-only expansion) | Layout expanded: Unit Char; Size 40; 4 | 2 |
| 11 | Inline snapshot (refs) | Size 40; 4 confirmed as text | 2 |
| 12 | Screenshot `t2-02-gate-tree-expanded-layout-size-before-selection.png` (read-only; the gate, taken before any component selection) | Tree with both components; Form Properties Layout with Size 40; 4; canvas at top left; Save disabled; ScopeType User | 2 |
| 13 | Click FX_PictureStatic row name cell (selection) | Properties header "FX_PictureStatic (Static)"; property grid populated; **no server-event error** | 2 (no rise) |
| 14 | Inline snapshot (refs) | Name, Type, Caption, Description and group list as above | 2 |
| 15 | Double-click FX_PictureStatic "Data Source" group (view-only expansion) | Binding Type None; Binding blank | 2 |
| 16 | Inline snapshot (refs) | Data Source values as text | 2 |
| 17 | Double-click FX_PictureStatic "Layout" group (view-only expansion) | Size 20; 1; Location 1; 3 | 2 |
| 18 | Inline snapshot (refs) | Layout values as text | 2 |
| 19 | Click FX_PictureEdit row name cell (selection) | Properties header "FX_PictureEdit (Edit)"; property grid populated; no error | 2 (no rise) |
| 20 | Inline snapshot (refs) | Values as in the component table above | 2 |

No action raised a server-event error, a dialog, a list or a console rise. No Save, trash, Undo, placement, typing, drag, list open or Form close/reopen occurred. After action 20 the run stopped.

### Action audit (cycle 2 only)

| Item | Count |
| --- | --- |
| Tab list calls (read-only) | 1 |
| Tab selections | 0 |
| Inline untargeted snapshots (read-only) | 9 (actions 2, 4, 6, 9, 11, 14, 16, 18, 20) |
| Snapshots saved by the tool, not read by the worker | 8 (`evidence\playwright\page-2026-10-18T15-00-33-609Z.yml`, `…15-00-39-571Z`, `…15-00-52-656Z`, `…15-00-59-058Z`, `…15-01-11-057Z`, `…15-01-19-354Z`, `…15-01-25-882Z`, `…15-01-32-397Z`) |
| Screenshots (read-only) | 2 (actions 7 and 12) |
| Single clicks | 5: Details Expand (3), Components tab (5), Components Expand (8), FX_PictureStatic row (13), FX_PictureEdit row (19) |
| Double-clicks | 3: Form Layout (10), FX_PictureStatic Data Source (15), FX_PictureStatic Layout (17) |
| Component selections | 2 (FX_PictureStatic; FX_PictureEdit) |
| Designer Saves | 0 |
| Trash clicks | 0 |
| Undo clicks | 0 |
| Toolbox selections, placements, coordinate clicks | 0 |
| List opens | 0 |
| Prompts | 0 |
| Property edits (typing) | 0 |
| Drags | 0 |
| Form closes and reopens | 0 |
| Re-logins; session-expiry modals or sign-in pages | 0 |
| Server-event errors | 0 |
| Console-count rises | 0 (2 after every action) |
| Ref-not-found errors; fresh-snapshot recoveries | 0; 0 |

Clicks that changed the Form: none. Clicks that changed the Designer view only (panels, tabs, groups, tree expansion): 5 single and 3 double, as listed. The two component selections changed only the Properties panel's displayed component.

### Cumulative totals (attempt 1 + cycle 2)

| Item | Attempt 1 (cycle 0) | Cycle 2 | Total |
| --- | --- | --- | --- |
| Tab lists | 1 | 1 | 2 |
| Tab selections | 0 | 0 | 0 |
| Inline untargeted snapshots | 2 | 9 | 11 |
| Tool-saved snapshot files (not read) | 2 | 8 | 10 |
| Screenshots | 2 | 2 | 4 |
| Single clicks | 2 (row click, OK on alert) | 5 | 7 |
| Double-clicks | 0 | 3 | 3 |
| Component selections | 1 | 2 | 3 |
| Designer Saves | 0 | 0 | 0 |
| Trash clicks; components taken out | 0; 0 | 0; 0 | 0; 0 |
| Undo clicks | 0 | 0 | 0 |
| Toolbox selections; placements; coordinate clicks | 0 | 0 | 0 |
| List opens | 0 | 0 | 0 |
| Prompts (text and answer) | 1: server-event "Error", OK once | 0 | 1 |
| Property edits (typing); drags | 0; 0 | 0; 0 | 0; 0 |
| Form closes and reopens | 0 | 0 | 0 |
| Re-logins; session-expiry events | 0 | 0 | 0 |
| Server-event errors | 1 | 0 | 1 |
| Console-count rises | 1 (2 → 4) | 0 | 1 |
| Ref-not-found; fresh-snapshot recoveries | 0; 0 | 0; 0 | 0; 0 |

### Worker-written files (cycle 2)

- `experiments/EXP-116-hello-world-part-8-phase-1b-fx-itemstile-components.md` (updated: this section, the attempt 1 headings, the status line and the Outcome).
- `evidence/EXP-116/t2-01-gate-tree-canvas-form-properties.png`. The file name uses the `t2-` prefix that the task header named, but the content is the T1 gate.
- `evidence/EXP-116/t2-02-gate-tree-expanded-layout-size-before-selection.png`. Same prefix note.

### Evidence (cycle 2)

- `evidence/EXP-116/t2-01-gate-tree-canvas-form-properties.png` (action 7): shows FX_ItemsTile, the tile canvas at top left (a small tile with a grey block), the Components tree with Pane (00) collapsed, and Form Properties with Layout collapsed. Save disabled; ScopeType User. Does **not** show the component children, the Size value or any component's properties. It is the first gate view, before the tree was expanded.
- `evidence/EXP-116/t2-02-gate-tree-expanded-layout-size-before-selection.png` (action 12): the decisive gate image. It shows FX_ItemsTile with the Components tree expanded (Pane (00) > FX_PictureStatic Static 0/0, FX_PictureEdit Edit object.FX_Picture 0/1), the tile canvas at top left, Form Properties Layout expanded with **Size 40; 4**, Splitter None, Unit Char, Save disabled and ScopeType User. It was taken before any component selection. It does **not** show the component Properties (Name, Binding, Location, Size) and does not show the console messages. Those values come from the accessibility text in actions 14, 16, 18 and 20.

### Gate result (cycle 2)

- AC-1 items: sources reviewed (yes); session usable (yes, observed); User scope (yes); FX_ItemsTile open and clean with Size 40; 4 (yes; t2-02); exactly FX_PictureStatic and FX_PictureEdit under Pane (00) (yes; t2-02 and the tree text); their properties recorded (yes: both, from text); baseline console error count recorded (yes: 2).
- Limitations: the component property values are from accessibility text, not from screenshots. The canvas is visible but small and not read in detail. No screenshot shows the component Properties panel.

### Final state (cycle 2)

- Designer tab 0: FX_ItemsTile, User scope, Form Size 40; 4, Save disabled, Undo disabled. FX_PictureEdit is selected in the Components grid; the Properties panel shows the Component tab. The Details panel is expanded on the Components tab, and the Form Properties Layout group is expanded. No dialog, menu, list or unsaved change is open.
- Portal tab 1 (Mongoose page): not selected or touched.
- The Form is unchanged from EXP-115 (Size 40; 4; FX_PictureStatic and FX_PictureEdit). Nothing was saved in cycle 2.
- The session was not re-established; no sign-in performed.

### Unresolved

1. The attempt 1 cause (the server-event error and console rise on the first FX_PictureStatic row click) did not recur in cycle 2: the same row click produced no error and the console stayed at 2. The cause is still unresolved. The operator's reload, or a session change, is a candidate but is not verified.
2. The Designer layout (panels and groups collapsed) changed between attempts. The worker did not verify a reload.
3. FX_PictureEdit's Size is 37.05; 2 and Location 1; 23.75. These are EXP-115 defaults. T2 changes them to Size 8; 4 and Location 0; 0 as planned.

### Next permitted action (cycle 2)

Stop at the T1 boundary. The next step is **T2 part A** (select FX_PictureStatic, verify its Name and Type, click the Components-grid trash once, confirm the dialog names FX_PictureStatic alone, then one Designer Save). That needs a new operator instruction for T2, because this run's bounded instruction ended at T1.

## T2 picture pair rework (cycle 3, bounded to T2)

Run R-20261018-224848-LBPN, task message 77b70ecd-f9b6-4efb-8982-26129c1f00e5, worker session 0bc4ddcb-15f4-4987-9466-80e448d72775. The task header named T3, but the bounded instruction said "Execute ONLY EXP-116 T2" and "Do not start T3". This run did only T2 (steps A, B and C). T3 has not been started.

Sources: AGENTS.md and this record's T2 instruction (continuation rule). No other source was read.

### Pre-flight (T2)

- Tabs listed before any selection: tab 0 is the Designer for FX_ItemsTile (current); tab 1 is a "Mongoose" portal page. No tab selection was needed.
- Baseline console: **2 errors, 0 warnings** (fresh inline snapshot).
- Session usable; no expiry, logout card or sign-in page.
- Scope User (status bar `ScopeType: User`, ScopeName is the signed-in user, not recorded here); no scope dialog.
- FX_ItemsTile open, clean (Save disabled at start), no dialog. Components tree: Pane (00) with FX_PictureStatic (Static, Pane 0, Tab 0) and FX_PictureEdit (Edit, object.FX_Picture, Pane 0, Tab 1). No additional component. Prerequisites matched.

### Step A: take out FX_PictureStatic

- Selected FX_PictureStatic by its Components row. Properties: Name **FX_PictureStatic**, Type **Static**, Binding Type None, Binding blank, Size 20; 1, Location 1; 3.
- Clicked the trash control at the bottom of the Details Components grid (ref e426), once. Not the top-toolbar Delete.
- Confirmation (dialog title "Infor Mongoose Application Development Framework - FX_ItemsTile"), verbatim: **"Are you sure you want to delete FX_PictureStatic and all the components it contains?"** Buttons OK and Cancel. It names FX_PictureStatic only. The wording "all the components it contains" is generic: the tree showed no child under FX_PictureStatic. Accepted under the brief's rule. Operator to confirm this reading.
- Clicked OK once (ref e1090). Tree afterwards: only FX_PictureEdit (Edit, object.FX_Picture, Pane 0, Tab 1). Unchanged.
- Expanded the Components tree once with the grid's Expand control (view-only), because the tree had collapsed to the Pane row after the delete.
- **Designer Save 1** (toolbar Save, ref e1094). Response toast: "Form [FX_ItemsTile] and global object(s) were saved." Save disabled afterwards.

### Step B: FX_PictureEdit to Static StaticPicture

- Selected FX_PictureEdit by its Components row. Before: Name FX_PictureEdit, Type Edit, Caption `C(FX_PictureStatic)` (generated; not changed), Binding Type Property, Binding `object.FX_Picture`, Size 37.05; 2, Location 1; 23.75.
- Opened the Type list with its arrow (ref e1457). Options included Barcode, BrowserControl, Calendar, CancelPushButton, Chart, CheckBox, ComboBox, DataView, DateCombo, DefPushButton, Diagram, DropList, Edit, FlexLayout, FormPage, Gauge, Graph, Grid, GridColumn, GroupBox, HyperlinkButton, Infocon, InforChart, ListBox, MultilineEdit, Notebook, NotebookTab, ObjMenuItem, ProcessIntelligence, PushButton, RadioButton, **Static**, SubForm, ToolbarButton, TreeControl, UserComponent, UserControl, VerticalGrid, VerticalGridElement.
- Clicked the Static option (ref e1780). Left the field by clicking the Description row (ref e1429). Type now reads Static.
- Name: opened the value editor by double-clicking the Name value cell (ref e1824), filled **StaticPicture** (plain fill, replaced FX_PictureEdit), pressed Tab. Tree shows StaticPicture (Static, object.FX_Picture, Pane 0, Tab 1). Properties Name StaticPicture. Binding Type Property and Binding object.FX_Picture kept.
- **Designer Save 2** (ref e1094). Response toast: "Form [FX_ItemsTile] and global object(s) were saved." Save disabled afterwards. The Properties header still read "FX_PictureEdit (Edit)" after this Save (stale label; EXP-084 behaviour).

### Step C: StaticPicture configuration

- Selected StaticPicture by its Components row (ref e2141).
- Formatting group expanded (double-click): Image and Text was **Inherit**. Opened its list (arrow ref e2253). Options: Inherit, Overlaid, TextOnly, ImageOnly, HorizontalTextImage, HorizontalImageText, VerticalTextImage, VerticalImageText. Clicked **ImageOnly** (ref e2274). Left the field by clicking the Description row (ref e1830). Value now ImageOnly.
- Miscellaneous group expanded, then Specific Attributes (double-click). **No Colon** was False: opened its list (arrow ref e2358), options True and False, clicked **True** (ref e2404). Left the field by clicking Description (ref e1830). Value now True.
- Layout group: Size expanded (double-click). Subfields **Width** (was 37.05), **Height** (was 2) and Lock Size (False, untouched). Width set to **8** (double-click the value cell, plain fill, Tab). Height set to **4** (same). Size summary now **8; 4**.
- Location expanded (double-click). Subfields **Top** (was 1) and **Left** (was 23.75) and Lock Position (False, untouched). Top set to **0**, Left set to **0** (same method). Location summary now **0; 0**. Summary order is Top; Left.
- Pre-Save values (accessibility text, targeted snapshot of the Properties tree): Name StaticPicture; Type Static; Binding Type Property; Binding object.FX_Picture; Image and Text ImageOnly; No Colon True; Size 8; 4 (Width 8, Height 4); Location 0; 0 (Top 0, Left 0). Caption `C(FX_PictureStatic)` unchanged (generated, not set by the worker). Screenshot `t2-05` taken before this Save.
- One "Ref not found" error on the Save click (ref e1094 was stale). Recovery: one fresh untargeted snapshot, then the Save click with the new reference. No Save was made before the recovery, so the failed call did nothing.
- **Designer Save 3** (ref e1094). Response toast: "Form [FX_ItemsTile] and global object(s) were saved." Save disabled afterwards (greyed icon in `t2-06`). Undo also greyed.
- The post-Save state is clean: no dialog, list, editor or menu open.

### T2 results against the planned values

| Item | Planned | Observed (text) | Result |
| --- | --- | --- | --- |
| FX_PictureStatic removed | after confirmation naming it alone | confirmation text recorded; tree after OK: only FX_PictureEdit | met (judgment call on confirmation wording, see findings) |
| Name | StaticPicture | StaticPicture | met |
| Type | Static | Static | met |
| Binding | object.FX_Picture kept | Binding Type Property, object.FX_Picture | met |
| Image and Text | ImageOnly | ImageOnly | met |
| No Colon | True | True | met (verified by text; not visible in a screenshot) |
| Location | 0; 0 | Top 0, Left 0 (summary 0; 0) | met |
| Size | 8; 4 | Width 8, Height 4 (summary 8; 4) | met |
| Caption | unchanged | C(FX_PictureStatic) (generated) | unchanged |
| Designer Saves | 3 | 3, each with the toast | met |
| Corrections | at most one per field | 0 corrections; each field entered once | met |
| Skips | none expected | none; every subfield needed a change | n/a |

### Screenshots (T2)

- `evidence/EXP-116/t2-03-stepA-trash-confirmation-names-FX_PictureStatic.png`: the confirmation dialog (text "Are you sure you want to delete FX_PictureStatic and all the components it contains?", OK and Cancel), with the Properties header "FX_PictureStatic (Static)" behind it. Proves the prompt wording and the selected component. Does not prove the deletion (that is shown by `t2-04`).
- `evidence/EXP-116/t2-04-stepA-tree-after-save-only-FX_PictureEdit.png`: after Save 1. Save disabled; tree Pane (00) > FX_PictureEdit (Edit, object.FX_Picture, Pane 0, Tab 1) only; Form Size 40; 4 (Form panel) — the Properties panel shows the Form at that moment; ScopeType User. Does not show the Save toast (already gone) — the toast text is from the snapshot.
- `evidence/EXP-116/t2-05-stepC-StaticPicture-values-before-save.png`: before Save 3. Properties header "StaticPicture (Static)", Image and Text ImageOnly, Size 8; 4 (Width 8, Height 4), Location 0; 0 (Top 0, Left 0), Lock Position False, Tree row StaticPicture (Static, object.FX_Picture, Pane 0, Tab 1). Does **not** show No Colon (below the visible panel area; verified by text). Does not show the Caption (scrolled out of view).
- `evidence/EXP-116/t2-06-after-stepC-save-clean-canvas.png`: after Save 3. Save and Undo greyed; tree StaticPicture only; canvas shows a small square at the top-left of the tile (the picture area) with the generated caption text "C(FX_Pictu…" overlapping. No image is visible in the square (the demo item image is not checked here). Proves the clean state and the single component, not the runtime look.

### T2 action list (cycle 3, in order)

| # | Action | Result | Console after |
| --- | --- | --- | --- |
| 1 | Tab list (read-only) | 2 tabs | 2 |
| 2 | Inline snapshot (baseline; read-only) | clean; tree 2 components | 2 |
| 3 | Click FX_PictureStatic row (e378) | selected; Name/Type verified next | 2 |
| 4 | Inline snapshot (Name FX_PictureStatic, Type Static) | verified | 2 |
| 5 | Click Components-grid trash (e426) | confirmation opened | 2 |
| 6 | Inline snapshot (confirmation text) | text captured | 2 |
| 7 | Screenshot `t2-03` (read-only) | confirmation | 2 |
| 8 | Click OK (e1090) | FX_PictureStatic deleted | 2 |
| 9 | Inline snapshot | tree collapsed (Pane row only); Save enabled | 2 |
| 10 | Click Components Expand (e290; view-only) | tree expanded | 2 |
| 11 | Inline snapshot | only FX_PictureEdit | 2 |
| 12 | Click Save (e1094) | Save 1; toast | 2 |
| 13 | Inline snapshot | toast; Save disabled | 2 |
| 14 | Screenshot `t2-04` (read-only) | clean; FX_PictureEdit only | 2 |
| 15 | Click FX_PictureEdit row (e1369) | selected | 2 |
| 16 | Inline snapshot | Type Edit; Binding object.FX_Picture | 2 |
| 17 | Click Type list arrow (e1457) | list open | 2 |
| 18 | Inline snapshot (list options) | Static listed | 2 |
| 19 | Click Static option (e1780) | Type = Static | 2 |
| 20 | Click Description row (e1429) | field left | 2 |
| 21 | Inline snapshot | Type Static | 2 |
| 22 | Double-click Name value (e1824) | editor open | 2 |
| 23 | Inline snapshot (editor e2111) | editor | 2 |
| 24 | Fill Name "StaticPicture" (e2111) | entered | not printed by tool (see note) |
| 25 | Press Tab | committed | not printed by tool (see note) |
| 26 | Inline snapshot | Name StaticPicture in tree | 2 |
| 27 | Click Save (e1094) | Save 2; toast | 2 |
| 28 | Inline snapshot | toast; Save disabled; header still "FX_PictureEdit (Edit)" | 2 |
| 29 | Click StaticPicture row (e2141) | selected | 2 |
| 30 | Inline snapshot | Properties of StaticPicture | 2 |
| 31 | Double-click Formatting group (e1991) | expanded | 2 |
| 32 | Inline snapshot | Image and Text Inherit | 2 |
| 33 | Click Image and Text arrow (e2253) | list open | 2 |
| 34 | Inline snapshot (list options) | ImageOnly listed | 2 |
| 35 | Click ImageOnly (e2274) | ImageOnly | 2 |
| 36 | Click Description row (e1830) | field left | 2 |
| 37 | Inline snapshot | ImageOnly | 2 |
| 38 | Double-click Miscellaneous (e2100) | expanded | 2 |
| 39 | Inline snapshot | Specific Attributes present | 2 |
| 40 | Double-click Specific Attributes (e2300) | expanded: No Colon False | 2 |
| 41 | Targeted snapshot (tree e461) | No Colon False | 2 |
| 42 | Click No Colon arrow (e2358) | list open | 2 |
| 43 | Inline snapshot (options True, False) | listed | 2 |
| 44 | Click True (e2404) | True | 2 |
| 45 | Click Description row (e1830) | field left | 2 |
| 46 | Double-click Size row (e2044) | expanded: Width, Height, Lock Size | 2 |
| 47 | Targeted snapshot (e461) | Width 37.05; Height 2 | 2 |
| 48 | Double-click Width value (e2416) | editor | 2 |
| 49 | Inline snapshot (editor e2111, "37.05") | editor | 2 |
| 50 | Fill Width "8" (e2111) | entered | not printed by tool |
| 51 | Press Tab | committed | not printed by tool |
| 52 | Targeted snapshot (e461) | Width 8; summary 8; 2 | 2 |
| 53 | Double-click Height value (e2425) | editor | 2 |
| 54 | Inline snapshot (editor "2") | editor | 2 |
| 55 | Fill Height "4" (e2111) | entered | not printed by tool |
| 56 | Press Tab | committed | not printed by tool |
| 57 | Targeted snapshot (e461) | Size 8; 4 | 2 |
| 58 | Double-click Location row (e2053) | expanded: Top, Left, Lock Position | 2 |
| 59 | Targeted snapshot (e461) | Top 1; Left 23.75 | 2 |
| 60 | Double-click Top value (e2448) | editor | 2 |
| 61 | Inline snapshot (editor "1") | editor | 2 |
| 62 | Fill Top "0" (e2111) | entered | not printed by tool |
| 63 | Press Tab | committed | not printed by tool |
| 64 | Targeted snapshot (e461) | Top 0; summary 0; 23.75 | 2 |
| 65 | Double-click Left value (e2457) | editor | 2 |
| 66 | Inline snapshot (editor "23.75") | editor | 2 |
| 67 | Fill Left "0" (e2111) | entered | not printed by tool |
| 68 | Press Tab | committed | not printed by tool |
| 69 | Targeted snapshot (e461) | Location 0; 0 | 2 |
| 70 | Screenshot `t2-05` (read-only) | values before Save 3 | 2 |
| 71 | Click Save (e1094) with stale ref | error: Ref e1094 not found | 2 |
| 72 | Fresh untargeted inline snapshot (the one allowed recovery) | Save ref present | 2 |
| 73 | Click Save (e1094) | Save 3; toast | 2 |
| 74 | Inline snapshot | toast; Save disabled | 2 |
| 75 | Screenshot `t2-06` (read-only) | clean; StaticPicture only | 2 |

Note on "not printed by tool": the fill and Tab outputs in this run did not print the page status line (`Console: …`). The console count after each of those actions is taken from the next snapshot, which printed 2. No rise was seen at any point.

### T2 action audit (cycle 3 only)

| Item | Count |
| --- | --- |
| Tab list calls (read-only) | 1 |
| Tab selections | 0 |
| Inline untargeted snapshots (read-only) | 24 (includes 1 recovery snapshot after "Ref not found") |
| Targeted snapshots (target tree e461) | 7 |
| Screenshots (read-only) | 4 (`t2-03`, `t2-04`, `t2-05`, `t2-06`) |
| Single clicks | 18 total: 3 row selections (FX_PictureStatic, FX_PictureEdit, StaticPicture); 1 Components-grid trash; 1 confirmation OK; 1 Components Expand (view-only); 3 Save clicks; 1 Type list arrow; 1 Static option; 3 Description-row clicks (leaving a field); 1 Image and Text arrow; 1 ImageOnly option; 1 No Colon arrow; 1 True option |
| Double-clicks | 10 total: 5 expansions (Formatting, Miscellaneous, Specific Attributes, Size, Location); 5 value-editor opens (Name, Width, Height, Top, Left) |
| Failed calls | 1 ("Ref e1094 not found" on Save 3); recovered with 1 fresh snapshot |
| Coordinate clicks | 0 |
| Toolbox selections; component placements | 0; 0 |
| Trash clicks (Components grid) | 1 |
| Components taken out | 1 (FX_PictureStatic) |
| Top-toolbar Delete clicks | 0 |
| Confirmation prompts | 1: "Are you sure you want to delete FX_PictureStatic and all the components it contains?" — answered OK once |
| Undo clicks | 0 |
| List opens | 3 (Type, Image and Text, No Colon); each option chosen by clicking it |
| Fill entries (plain fill) | 5 (Name, Width, Height, Top, Left) |
| Tab presses | 5 (one after each fill) |
| Corrections | 0 |
| Designer Saves executed | 3 (Save 1 after A; Save 2 after B; Save 3 after C), each with the toast "Form [FX_ItemsTile] and global object(s) were saved." |
| Save retries | 0 (the Save 3 call that failed did not execute, so it was not a retry of an executed Save) |
| Server-event errors | 0 |
| Console-count rises | 0 (2 at every printed count) |
| Session expiry; re-logins | 0; 0 |
| Form closes and reopens | 0 |
| Drags | 0 |
| Form property changes; Caption edits | 0; 0 |

Cumulative totals (attempt 1 + cycle 2 + cycle 3):

| Item | Earlier (attempt 1 + cycle 2) | Cycle 3 (T2) | Total |
| --- | --- | --- | --- |
| Tab lists | 2 | 1 | 3 |
| Inline untargeted snapshots | 11 | 24 | 35 |
| Targeted snapshots | 0 | 7 | 7 |
| Tool-saved snapshot files (not read; not counted individually) | many | many | many |
| Screenshots | 4 | 4 | 8 |
| Single clicks | 7 | 18 | 25 |
| Double-clicks | 3 | 10 | 13 |
| Fill entries; Tab presses | 0; 0 | 5; 5 | 5; 5 |
| Component selections | 3 | 3 | 6 |
| Designer Saves | 0 | 3 | 3 |
| Trash clicks; components taken out | 0; 0 | 1; 1 | 1; 1 |
| Undo clicks | 0 | 0 | 0 |
| Toolbox selections; placements; coordinate clicks | 0; 0; 0 | 0; 0; 0 | 0; 0; 0 |
| List opens (option clicked) | 0 | 3 | 3 |
| Prompts (text; answer) | 1: server-event "Error" (OK once, attempt 1) | 1: delete confirmation (OK once, T2) | 2 |
| Property edits; drags | 0; 0 | 5; 0 | 5; 0 |
| Form closes and reopens | 0 | 0 | 0 |
| Re-logins; session-expiry events | 0 | 0 | 0 |
| Server-event errors | 1 (attempt 1) | 0 | 1 |
| Console-count rises | 1 (attempt 1, 2 → 4) | 0 | 1 |
| Ref-not-found; recovery snapshots | 0; 0 | 1; 1 | 1; 1 |

### T2 findings (observed only)

1. The confirmation for a Static with no children still says "and all the components it contains". The tree showed no child, so the wording is generic. Accepted under the brief; operator to confirm.
2. After the delete, the Components tree collapsed to its Pane (00) row, and the children reappeared only after the grid's Expand control.
3. After the Type change to Static, the Properties header kept "FX_PictureEdit (Edit)" until a later reselection. The tree row and Name were already current. This matches the stale-label behaviour in EXP-084.
4. The generated Caption `C(FX_PictureStatic)` carried over to StaticPicture. The canvas displays it. The brief says leave the Caption at its default, so it was not changed.
5. Layout subfield labels: Size has Width, Height and Lock Size; Location has Top, Left and Lock Position. The Location summary reads Top; Left (for example "1; 23.75" before the change).
6. No Colon is a Miscellaneous > Specific Attributes row with True/False. It read False before the change.
7. Image and Text options: Inherit, Overlaid, TextOnly, ImageOnly, HorizontalTextImage, HorizontalImageText, VerticalTextImage, VerticalImageText.
8. A stale reference on Save 3 ("Ref e1094 not found") happened after several targeted snapshots. The recovery was one fresh untargeted snapshot. The same ref e1094 returned in that fresh snapshot.
9. The fill and Tab tool outputs did not print the console line in this run; the next snapshot did.

### Limitations and unresolved

- No Colon True is verified by accessibility text ("True" in the No Colon row), not by a screenshot.
- The Save 1 and Save 2 responses are verified by snapshot text (toast), not by a screenshot that shows the toast.
- The Form Size was not re-read in T2 (no action targeted the Form). The last Form Size read was 40; 4 in the cycle 2 gate.
- The Caption is the generated text, not an intended value. T3 onward leaves Captions alone too.
- The confirmation wording (point 1) is a judgment call.

### Worker-written file inventory (cumulative)

- `experiments/EXP-116-hello-world-part-8-phase-1b-fx-itemstile-components.md` (created in attempt 1; updated in cycle 2 and cycle 3).
- `evidence/EXP-116/t1-02-console-rise-after-select-picturestatic.png` (attempt 1).
- `evidence/EXP-116/t1-03-after-server-event-error-ok.png` (attempt 1).
- `evidence/EXP-116/t2-01-gate-tree-canvas-form-properties.png` (cycle 2; `t2-` prefix from the task header).
- `evidence/EXP-116/t2-02-gate-tree-expanded-layout-size-before-selection.png` (cycle 2).
- `evidence/EXP-116/t2-03-stepA-trash-confirmation-names-FX_PictureStatic.png` (cycle 3).
- `evidence/EXP-116/t2-04-stepA-tree-after-save-only-FX_PictureEdit.png` (cycle 3).
- `evidence/EXP-116/t2-05-stepC-StaticPicture-values-before-save.png` (cycle 3).
- `evidence/EXP-116/t2-06-after-stepC-save-clean-canvas.png` (cycle 3).
- Tool-written, not read by the worker: `evidence\playwright\` snapshot files and console logs for all attempts (including `console-2026-10-18T15-04-24-959Z.log`).

### Cleanup inventory (as of end of T2)

- Form `FX_ItemsTile` (User scope). Not created or changed in T2 except its components below.
- Components present: **StaticPicture** (Static; was FX_PictureEdit; Binding object.FX_Picture; Image and Text ImageOnly; No Colon True; Location 0; 0; Size 8; 4).
- Removed in T2: **FX_PictureStatic** (generated Static; deleted through the Components-grid trash after its confirmation).
- Not yet created (planned for T3 to T5): StaticItem, StaticItemDescription, StaticCost.

### Final state (end of T2)

- Designer tab 0: FX_ItemsTile open, User scope, clean (Save disabled, Undo greyed). Components: Pane (00) > StaticPicture only. StaticPicture selected in the Components grid; the Properties panel shows its Layout group. No dialog, menu, list or editor open. Console 2 errors.
- Portal tab 1: not touched.
- Form Size: not re-read in T2 (see limitations); last read 40; 4 (cycle 2).
- No session expiry or re-login. No runtime, checkout, or global-object action.
- Stopped at the T2 boundary. Nothing started for T3.

### Next permitted action

Operator: give the T3 instruction (placement of StaticItem; one Static only, under Pane (00); three Designer Saves). The T3 placement is a canvas click to the right of StaticPicture (away from other components), as the brief describes.

## T3 StaticItem (cycle 4, bounded to T3)

Run R-20261018-224848-LBPN, task message a8b788f1-afb8-49b8-9a64-8cc163c881c5, worker session 0bc4ddcb-15f4-4987-9466-80e448d72775. The task header named T4, but the bounded instruction said "Execute ONLY EXP-116 T3" and "Do not start StaticItemDescription or StaticCost". This run did only T3 (StaticItem: placement and name, then property lists, then layout and No Colon). T4 has not been started.

Sources: AGENTS.md and this record's T3 part (continuation rule). No other source was read.

### Pre-flight (T3)

- Tabs listed before any selection: tab 0 is the Designer for FX_ItemsTile (current); tab 1 is a "Mongoose" portal page. No tab selection.
- Fresh inline snapshot: console **2 errors, 0 warnings** (baseline for T3).
- Session usable; no expiry, logout card or sign-in page. No scope dialog.
- User scope (status bar `ScopeType: User`). FX_ItemsTile open, Save and Undo disabled, no dialog or list.
- Pane (00) held exactly StaticPicture (Static, object.FX_Picture, Pane 0, Tab 1). StaticPicture was intact (Image and Text ImageOnly, Size 8; 4, Location 0; 0 per T2).

### Step A: placement and name

1. Clicked the Toolbox **Static** row once (ref e211). Console 2.
2. Clicked once on blank canvas to the right of StaticPicture, at x=360, y=130 (coordinate click; the one permitted T3 placement click). Console 2. No drag.
3. Inline snapshot: exactly one new Static under Pane (00): **static1_USER** (Static, Pane 0, Tab 0). Alongside StaticPicture. No second component; no Undo used.
4. **Defaults of the new Static (observed):** Name `static1_USER`; Caption blank; Theme Class blank; **Justification Right**; Binding Type **None**; Binding blank; Image and Text Inherit; No Colon False; Size **20; 1** (Width 20, Height 1); Location **1.61111111111111; 13.8305084745763** (summary order Top; Left; Top 1.61, Left 13.83; placed at the canvas click point); Tab Order 0; From Device Master True.
5. Name: double-clicked the Name value cell (ref e1084), plain fill **StaticItem** (ref e1603), Tab. Verified in the Components tree: **StaticItem** (Static, Pane 0, Tab 0). The Properties header lagged at "static1_USER (Static)" (labels-lag behaviour) and later showed StaticItem (Static) after the Save.
6. **Designer Save A** (toolbar Save, ref e975). Response toast: "Form [FX_ItemsTile] and global object(s) were saved." Save disabled afterwards. Console 2.
7. Placement screenshot: **not taken** (a gap against the brief's per-task placement screenshot; the tree state is recorded in text from the snapshot, and the post-Save state is in t3-05).

### Step B: property lists

Each list opened by its arrow, option clicked, field left by clicking the Description row (ref e1090):

- **Theme Class:** arrow (ref e1707). Entries: **FX_Header**, **FX_WhiteHeader**. Clicked FX_Header. Committed (text: FX_Header).
- **Justification:** arrow (ref e1764). Entries: (blank), Default, Left, Center, Right. Clicked **Left**. Committed (text: Left).
- **Binding Type:** arrow (ref e1164). Entries: None, Variable, **Property**, SubCollection Grid, Filter Attribute, CollectionID Group Box, Primary Collection Grid, Secondary Collection Grid, Graph Element, Tree, Browser, Process Intelligence, Diagram, Chart, Gauge, DataView, Calendar, Aggregate, Expression, Infor Chart. Clicked **Property**. Committed (text: Property).
- **Binding:** after Property, the Binding value became **object._ItemId** (default). Arrow (ref e1175). Entries (full list, in order): object._ItemId, object._ItemWarnings, object.CreateDate, object.CreatedBy, object.FX_Cost, object.FX_Description, **object.FX_Item**, object.FX_Picture, object.FX_UM, object.FX_UMsDescription, object.InWorkflow, object.NoteExistsFlag, object.RecordDate, object.RowPointer, object.UDFDateTime1–6, object.UDFDecimal1–6, object.UDFInteger1–6, object.UDFLongText1–2, object.UDFMediumText1–6, object.UDFRecordDate, object.UDFRowPointer, object.UDFShortText1–7, object.UpdatedBy. Clicked **object.FX_Item**. Committed. Binding now displays **object.FX_Item** (plain text in the Binding cell, with the list arrow and the ellipsis button present).
- Verified in text (targeted snapshot) and in t3-03: Name StaticItem; Type Static; Theme Class FX_Header; Justification Left; Binding Type Property; Binding object.FX_Item.
- **Designer Save B** (ref e975). Response toast: "Form [FX_ItemsTile] and global object(s) were saved." Save disabled afterwards. Console 2.
- Pre-Save screenshot **t3-03** (values before Save B).

### Step C: layout and No Colon

Location and Size subfields (Layout group already expanded; Size shows Width, Height, Lock Size; Location shows Top, Left, Lock Position). Each set by double-click on the value cell, plain fill, Tab:

- **Top:** 1.61… → **0** (no correction). Summary after: 0; 13.83.
- **Left:** 13.83… → **9** (no correction). Summary after: **0; 9** (Top 0, Left 9).
- **Width:** 20 → **27** (no correction). Summary after: 27; 1.
- **Height:** 1 → **1.5** (no correction). Summary after: **27; 1.5**.
- **No Colon:** False → **True** (Specific Attributes list; arrow ref e1554; True option ref e2000; committed).
- Location interpretation (judgment call): the brief wrote "Location 9; 0". The Location summary displays **Top; Left** (proved in Step A: the canvas-click point gave Top 1.61, Left 13.83), and the tile is 40 units wide by 4 tall. So "9; 0" was read as **Left 9, Top 0** (x; y, the top-right label beside the picture), and the summary therefore reads **0; 9**. If the operator meant Top 9, the value would fall outside the 4-unit tile. Recorded as a judgment call.
- Pre-Save values (accessibility text, targeted snapshot T16): Name StaticItem; Type Static; Theme Class FX_Header; Justification Left; Binding Type Property; Binding object.FX_Item; Location 0; 9 (Top 0; Left 9); Size 27; 1.5 (Width 27; Height 1.5); No Colon True. Screenshot **t3-04** (values before Save C; the Location, Size and No Colon rows were below the visible panel area, so they are verified by text, not by the screenshot).
- **Designer Save C** (ref e975). Response toast: "Form [FX_ItemsTile] and global object(s) were saved." Save disabled afterwards. Console 2.
- **Final canvas** screenshot **t3-05** after Save C: Save and Undo disabled; Pane (00) lists StaticPicture (Static, object.FX_Picture, Pane 0, Tab 1) and StaticItem (Static, Pane 0, Tab 0); the picture square at top-left with its caption text; the "Item" label at the top-right of the picture.

### Corrections and skipped values (T3)

- Corrections: **0**. Each field was entered once; no skipped subfield (every value needed a change). Lock Size and Lock Position were not touched.
- Caption and Theme Class (other than StaticItem's) left at defaults. Caption left blank (the StaticItem's default).

### T3 results against the plan

| Item | Planned | Observed (text) | Result |
| --- | --- | --- | --- |
| Placement | one Static under Pane (00) | static1_USER under Pane (00); renamed StaticItem | met |
| Name | StaticItem | StaticItem | met |
| Theme Class | FX_Header | FX_Header | met |
| Justification | Left | Left (default was Right) | met |
| Binding Type | Property | Property (default None) | met |
| Binding | FX_Item (object.FX_Item) | object.FX_Item (default object._ItemId after Property) | met |
| Location | 9; 0 (read Left 9, Top 0) | summary 0; 9 (Top 0, Left 9) | met on the read; interpretation flagged |
| Size | 27; 1.5 | 27; 1.5 | met |
| No Colon | True | True (default False) | met |
| Designer Saves | 3 | 3 (A, B, C), each with the toast | met |
| Console | counted after every action | 2 at every printed count | met |

### Screenshots (T3)

- `evidence/EXP-116/t3-03-stepB-StaticItem-values-before-save.png`: before Save B. Shows the header "StaticItem (Static)", Name StaticItem, Type Static, Theme Class FX_Header, Justification Left, Binding Type Property, Binding object.FX_Item; the tree with StaticPicture and StaticItem (Pane 0). Does not show Location, Size or No Colon (below the panel area). Header lag "static1_USER" was visible at that moment in the Properties header.
- `evidence/EXP-116/t3-04-stepC-StaticItem-values-before-save.png`: before Save C. Shows the header "StaticItem (Static)", the same B values, and the tree. The Location, Size and No Colon rows are below the visible area and are not shown; their values are verified by the text snapshot.
- `evidence/EXP-116/t3-05-final-canvas-after-stepC-save.png`: after Save C. Save and Undo disabled; tree with StaticPicture and StaticItem; canvas with the picture square and the "Item" label at the top-right.
- Missing: a placement screenshot with the tree after Step A (not taken; the placement state is in text only).

### T3 action list (cycle 4, in order)

| # | Action | Result | Console after |
| --- | --- | --- | --- |
| 1 | Tab list (read-only) | 2 tabs | 2 |
| 2 | Inline snapshot (pre-flight; read-only) | clean; StaticPicture only; User scope | 2 |
| 3 | Click Toolbox Static row (e211) | armed | 2 |
| 4 | Canvas placement click (360, 130) — coordinate | one new Static placed | 2 |
| 5 | Inline snapshot | static1_USER under Pane (00), with StaticPicture | 2 |
| 6 | Double-click Name value (e1084) | editor open | 2 |
| 7 | Targeted snapshot (tabpanel e400) | editor textbox e1603 | 2 |
| 8 | Fill Name "StaticItem" (e1603) | entered | not printed by tool |
| 9 | Press Tab | committed | not printed by tool |
| 10 | Targeted snapshot (tree e343) | "Ref e343 not found" (error, no action) | — |
| 11 | Fresh untargeted inline snapshot (recovery) | tree StaticItem; Properties header lagging | 2 |
| 12 | Click Save A (e975) | Save A; toast | 2 |
| 13 | Inline snapshot | toast; Save disabled | 2 |
| 14 | Click StaticItem row (e1658) | selected | 2 |
| 15 | Inline snapshot | properties of StaticItem; Appearance collapsed | 2 |
| 16 | Double-click Appearance (e1132) | expanded (Theme Class blank; Justification Right) | 2 |
| 17 | Targeted snapshot (e400) | Theme Class blank; Justification Right | 2 |
| 18 | Click Theme Class arrow (e1707) | list open | 2 |
| 19 | Targeted snapshot (e400) | options FX_Header, FX_WhiteHeader | 2 |
| 20 | Click FX_Header (e1777) | committed | 2 |
| 21 | Click Description row (e1090) | field left | 2 |
| 22 | Targeted snapshot (e400) | Theme Class FX_Header | 2 |
| 23 | Click Justification arrow (e1764) | list open | 2 |
| 24 | Targeted snapshot (e400) | options blank, Default, Left, Center, Right | 2 |
| 25 | Click Left (e1797) | committed | 2 |
| 26 | Click Description row (e1090) | field left | 2 |
| 27 | Targeted snapshot (e400) | Justification Left | 2 |
| 28 | Click Binding Type arrow (e1164) | list open | 2 |
| 29 | Targeted snapshot (e400) | options None…Infor Chart | 2 |
| 30 | Click Property (e1819) | committed | 2 |
| 31 | Click Description row (e1090) | field left | 2 |
| 32 | Targeted snapshot (e400) | Binding Type Property; Binding object._ItemId | 2 |
| 33 | Click Binding arrow (e1175) | list open | 2 |
| 34 | Targeted snapshot (e400) | full Binding list | 2 |
| 35 | Click object.FX_Item (e1881) | committed | 2 |
| 36 | Click Description row (e1090) | field left | 2 |
| 37 | Targeted snapshot (e400) | Binding object.FX_Item | 2 |
| 38 | Screenshot t3-03 (read-only) | values before Save B | 2 |
| 39 | Inline snapshot (pre-Save-B) | Save ref e975 | 2 |
| 40 | Click Save B (e975) | Save B; toast | 2 |
| 41 | Inline snapshot | toast; Save disabled | 2 |
| 42 | Double-click Top value (e1424) | editor open | 2 |
| 43 | Targeted snapshot (e400) | editor e1603 (value 1.61…) | 2 |
| 44 | Fill Top "0" (e1603) | entered | not printed |
| 45 | Press Tab | committed | not printed |
| 46 | Double-click Left value (e1433) | editor open | 2 |
| 47 | Targeted snapshot (e400) | Top 0; Left editor (13.83) | 2 |
| 48 | Fill Left "9" (e1603) | entered | not printed |
| 49 | Press Tab | committed | not printed |
| 50 | Double-click Width value (e1387) | editor open | 2 |
| 51 | Targeted snapshot (e400) | Left 9; Width editor (20) | 2 |
| 52 | Fill Width "27" (e1603) | entered | not printed |
| 53 | Press Tab | committed | not printed |
| 54 | Double-click Height value (e1396) | editor open | 2 |
| 55 | Targeted snapshot (e400) | Width 27; Height editor (1) | 2 |
| 56 | Fill Height "1.5" (e1603) | entered | not printed |
| 57 | Press Tab | committed | not printed |
| 58 | Click No Colon arrow (e1554) | list open | 2 |
| 59 | Targeted snapshot (e400) | options True, False | 2 |
| 60 | Click True (e2000) | committed | 2 |
| 61 | Click Description row (e1090) | field left | 2 |
| 62 | Targeted snapshot (e400) | Location 0; 9; Size 27; 1.5; No Colon True | 2 |
| 63 | Screenshot t3-04 (read-only) | values before Save C | 2 |
| 64 | Inline snapshot (pre-Save-C) | Save ref e975 | 2 |
| 65 | Click Save C (e975) | Save C; toast | 2 |
| 66 | Inline snapshot | toast; Save disabled | 2 |
| 67 | Screenshot t3-05 (read-only) | final canvas | 2 |

Note on rows 8, 9, 44–45, 48–49, 52–53, 56–57: the fill and Tab outputs did not print the page console line; the next printed count was 2. No rise was seen.

### T3 action audit (cycle 4 only)

| Item | Count |
| --- | --- |
| Tab list calls (read-only) | 1 |
| Tab selections | 0 |
| Inline untargeted snapshots (read-only) | 9 (rows 2, 5, 11, 13, 15, 39, 41, 64, 66; row 11 is the recovery snapshot) |
| Targeted snapshots — successful | 16 (all on the Properties tabpanel e400: rows 7, 17, 19, 22, 24, 27, 29, 32, 34, 37, 43, 47, 51, 55, 59, 62) |
| Targeted snapshots — failed | 1 (row 10: "Ref e343 not found") |
| Screenshots (read-only) | 3 (t3-03, t3-04, t3-05) |
| Single clicks (excluding the coordinate placement) | 20: Toolbox row 1; Save ×3; StaticItem row 1; Theme arrow 1; FX_Header 1; Justification arrow 1; Left 1; Binding Type arrow 1; Property 1; Binding arrow 1; object.FX_Item 1; No Colon arrow 1; True 1; Description row ×5 (after Theme, Justification, Binding Type, Binding, No Colon) |
| Coordinate clicks | 1 (canvas placement at 360, 130; permitted) |
| Arrow coordinate clicks | 0 (every arrow had a reference) |
| Double-clicks | 6: Name value 1; Appearance group 1; Top, Left, Width, Height value cells 4 |
| Placements | 1 (Toolbox Static, one canvas click) |
| Component selections | 1 (StaticItem row) |
| Designer Saves | 3 (A, B, C); each toast read from the snapshot; no retry |
| Trash clicks | 0 |
| Components taken out | 0 |
| Undo clicks | 0 |
| Toolbox selections | 1 |
| List opens | 5 (Theme Class, Justification, Binding Type, Binding, No Colon); each option clicked; none via keys |
| Options chosen | FX_Header; Left; Property; object.FX_Item; True |
| Prompts | 0 (no dialog or prompt appeared in T3) |
| Field entries (fills) | 5 (Name, Top, Left, Width, Height), each followed by one Tab |
| Corrections | 0 |
| Server-event errors | 0 |
| Console-count rises | 0 (2 at every printed count) |
| Ref-not-found errors | 1 (row 10) |
| Recovery snapshots (fresh untargeted) | 1 (row 11), for that single Ref error |
| Drags | 0 |
| Form-property changes; Caption edits; event edits | 0; 0; 0 |
| Session expiry; re-logins | 0; 0 |
| Form closes and reopens | 0 |

Cumulative totals (attempt 1 + cycle 2 + cycle 3 + cycle 4 / T3):

| Item | Through T2 | T3 | Total |
| --- | --- | --- | --- |
| Tab lists | 3 | 1 | 4 |
| Inline untargeted snapshots | 35 | 9 | 44 |
| Targeted snapshots (successful) | 7 | 16 | 23 |
| Targeted snapshots (failed) | 0 | 1 | 1 |
| Screenshots | 8 | 3 | 11 |
| Single clicks (excl. coordinate) | 25 | 20 | 45 |
| Coordinate clicks | 0 | 1 | 1 |
| Double-clicks | 13 | 6 | 19 |
| Field entries (fills) and Tab presses | 5; 5 | 5; 5 | 10; 10 |
| Component selections | 6 | 1 | 7 |
| Toolbox selections; placements | 0; 0 | 1; 1 | 1; 1 |
| Designer Saves | 3 | 3 | 6 |
| Trash clicks; components taken out | 1; 1 | 0; 0 | 1; 1 |
| Undo clicks | 0 | 0 | 0 |
| List opens (option clicked) | 3 | 5 | 8 |
| Prompts (text; answer) | 2 (server-event Error, OK once; delete confirmation, OK once) | 0 | 2 |
| Server-event errors | 1 (attempt 1) | 0 | 1 |
| Console-count rises | 1 (attempt 1, 2 → 4) | 0 | 1 |
| Ref-not-found; recovery snapshots | 1; 1 | 1; 1 | 2; 2 |
| Drags; re-logins; Form closes or reopens | 0 | 0 | 0 |

Note: the earlier "Designer Saves" column reads 3 for T2 and 0 for attempt 1 and cycle 2 (not restated). The cumulative total of 6 is correct.

### Worker-written file inventory (cumulative)

- `experiments/EXP-116-hello-world-part-8-phase-1b-fx-itemstile-components.md` (created in attempt 1; updated in cycles 2, 3 and 4).
- `evidence/EXP-116/t1-02-console-rise-after-select-picturestatic.png` (attempt 1).
- `evidence/EXP-116/t1-03-after-server-event-error-ok.png` (attempt 1).
- `evidence/EXP-116/t2-01-gate-tree-canvas-form-properties.png` (cycle 2).
- `evidence/EXP-116/t2-02-gate-tree-expanded-layout-size-before-selection.png` (cycle 2).
- `evidence/EXP-116/t2-03-stepA-trash-confirmation-names-FX_PictureStatic.png` (cycle 3).
- `evidence/EXP-116/t2-04-stepA-tree-after-save-only-FX_PictureEdit.png` (cycle 3).
- `evidence/EXP-116/t2-05-stepC-StaticPicture-values-before-save.png` (cycle 3).
- `evidence/EXP-116/t2-06-after-stepC-save-clean-canvas.png` (cycle 3).
- `evidence/EXP-116/t3-03-stepB-StaticItem-values-before-save.png` (cycle 4).
- `evidence/EXP-116/t3-04-stepC-StaticItem-values-before-save.png` (cycle 4).
- `evidence/EXP-116/t3-05-final-canvas-after-stepC-save.png` (cycle 4).
- Tool-written, not read by the worker: `evidence\playwright\` page snapshot files and console logs for all cycles.

### Cleanup inventory (as of end of T3)

- Form `FX_ItemsTile` (User scope). Components under Pane (00): **StaticPicture** (Static; was FX_PictureEdit; Binding object.FX_Picture; Image and Text ImageOnly; No Colon True; Location 0; 0; Size 8; 4), **StaticItem** (Static; Theme Class FX_Header; Justification Left; Binding Type Property; Binding object.FX_Item; No Colon True; Location 0; 9 (Top 0, Left 9); Size 27; 1.5).
- Removed earlier (T2): FX_PictureStatic.
- Not yet created (planned for T4 and T5): StaticItemDescription, StaticCost.

### Final state (end of T3)

- Designer tab 0: FX_ItemsTile open, User scope, clean (Save and Undo disabled). Components: StaticPicture and StaticItem under Pane (00). StaticItem is selected in the Components grid. No dialog, menu, list or editor open. Console 2 errors.
- Portal tab 1: not touched.
- Form Size: not re-read in T3 (no action targeted the Form). Last read 40; 4 (cycle 2).
- No session expiry or re-login. No runtime, checkout or global-object action.
- Stopped at the T3 boundary. Nothing started for T4.

### Next permitted action

Operator: give the T4 instruction (StaticItemDescription: placement, Left, Property FX_Description, Location 9; 2, Size 20; 1.5, No Colon True). The T4 placement is a canvas click to the right of StaticPicture, away from StaticItem.

## T4 StaticItemDescription (cycle 5, bounded to T4)

Run R-20261018-224848-LBPN, task message 7e851955-fd65-4cef-b9b2-f7a7edf73d71, worker session 0bc4ddcb-15f4-4987-9466-80e448d72775. The task header named T5, but the bounded instruction said "Execute ONLY EXP-116 T4" and "Do not begin T5 or modify StaticItem". This run did only T4 (StaticItemDescription). T5 (StaticCost) has not been started.

Sources: AGENTS.md and this record's T4 part, as read in this cycle before the context break. The record was read again in full for this update. No other source was read.

### Pre-flight (T4)

- Tabs listed before any selection (pre-compaction, from the working summary): tab 0 is the Designer for FX_ItemsTile (current); tab 1 is a Mongoose portal page. No tab selection was needed.
- Baseline console: **2 errors, 0 warnings**.
- Session usable; no expiry, logout card or sign-in page. User scope (`ScopeType: User`). FX_ItemsTile open and clean (Save disabled); no dialog or list open.
- Pane (00) held StaticPicture (Static, object.FX_Picture, Pane 0, Tab 1) and StaticItem (Static, object.FX_Item, Pane 0, Tab 0). This matches the T3 end state.

### Step A: placement and name

1. Toolbox **Static** row clicked (ref e211). Console 2.
2. One canvas click at **(345, 155)**, to the right of StaticPicture (coordinate click; the one permitted T4 placement click). Console 2. No drag.
3. Exactly one new Static appeared under Pane (00): **static1_USER** (Static, Pane 0, Tab 0). No second component. Undo not used.
4. Defaults of the new Static (observed): Caption blank; Theme Class blank; Justification **Right**; Binding Type **None**; Binding blank; No Colon False; Size **20; 1** (Width 20, Height 1); Location summary **3; 11.79…** (Top 3, Left 11.796610169491526, the canvas-click point).
5. Name: double-clicked the Name value cell (ref e1201). A targeted snapshot of the Properties tab panel (e428) showed the Name editor with "static1_USER". Plain fill **StaticItemDescription**, then Tab. The next inline snapshot showed the tree row **StaticItemDescription** (Static, Pane 0, Tab 0). The Properties header lagged at "static1_USER (Static)" at that point (label lag, as in T3 and EXP-084).
6. Placement screenshot **t4-01** taken before Save A (the tree with the new component). Not re-opened by the worker; its content is the tree text from the snapshot taken just before it.
7. **Designer Save A** (toolbar Save, ref e1067). Response: toast "Form [FX_ItemsTile] and global object(s) were saved." (snapshot text). Save disabled afterwards. Console 2.

### Step B: property lists

Each list was opened by its arrow, the option was clicked, and the field was left by clicking the Description row (ref e1207).

- **Justification:** arrow (ref e1320). Options: Default, Left, Center, Right (Right selected). Clicked **Left** (ref e1921). Value now Left.
- **Binding Type:** arrow (ref e1348). Options: None, Variable, **Property**, SubCollection Grid, Filter Attribute, CollectionID Group Box, Primary Collection Grid, Secondary Collection Grid, Graph Element, Tree, Browser, Process Intelligence, Diagram, Chart, Gauge, DataView, Calendar, Aggregate, Expression, Infor Chart. Clicked **Property** (ref e1943). Binding then displayed the default **object._ItemId**.
- **Binding:** arrow (ref e1359). The list opened with the same entries as in T3 (object._ItemId through object.UpdatedBy, including object.FX_Description). Clicked **object.FX_Description** (ref e2003). Binding displays **object.FX_Description** (plain text in the Binding cell).
- Verified in snapshot text: Name StaticItemDescription; Type Static; Theme Class blank (default, left unchanged); Justification Left; Binding Type Property; Binding object.FX_Description; Caption blank.
- Pre-Save screenshot **t4-02** (values before Save B). Not re-opened by the worker.
- **Designer Save B** (ref e1067). Response: toast confirmed in snapshot text. Save disabled afterwards. Console 2.

### Step C: layout and No Colon

Each subfield was set by double-clicking its value cell (which opens the editor), plain fill, Tab:

- **Top** (Location): double-click (ref e1609); editor (ref e1787, label "Top", value 3). Filled **2**, Tab. Summary "2; 11.79…".
- **Left** (Location): double-click (ref e1618); editor (ref e1787, label "Left", value 11.796…). Filled **9**, Tab. Summary **2; 9** (Top 2, Left 9).
- **Width** (Size): already 20. **Skipped** (recorded; no entry made).
- **Height** (Size): double-click (ref e1581); editor (ref e1787, label "Height", value 1). Filled **1.5**, Tab. Summary **20; 1.5**.
- **No Colon** (Miscellaneous > Specific Attributes): arrow (ref e1738); list True / False. Clicked **True** (ref e2123). Field left by clicking the Description row. Value now True.
- Verification (targeted snapshot of e428): Location 2; 9 (Top 2, Left 9); Size 20; 1.5 (Width 20, Height 1.5); No Colon True; Justification Left; Binding Type Property; Binding object.FX_Description; Name StaticItemDescription; Theme Class blank; Caption blank.
- Pre-Save screenshot **t4-03** (values before Save C). Not re-opened by the worker. Whether the Location, Size and No Colon rows fall inside the screenshot is not verified (in T3 the equivalent rows were below the visible panel area).
- **Designer Save C.** The first click on Save (ref e1067) returned **"Ref e1067 not found"**; the call did not run. Recovery: one fresh untargeted snapshot (Save ref e1067 present, Save enabled). Then the Save click with ref e1067 ran. Response: toast "Form [FX_ItemsTile] and global object(s) were saved." (seen in t4-04) and the Save icon greyed. Console 2.

### Final canvas (t4-04)

The worker opened `t4-04-final-canvas-after-stepC-save.png` and observed:

- Toast "Save: Form [FX_ItemsTile] and global object(s) were saved." at the top right.
- Toolbar Save icon greyed (disabled).
- Components tree, Pane (00): **StaticPicture** (Static, object.FX_Picture, 0, 1); **StaticItem** (Static, object.FX_Item, 0, 0); **StaticItemDescription** (Static, Data Source blank, 0, 0), selected.
- Properties for StaticItemDescription (Static): Type Static; From Device Master True; Theme Class blank; Justification Left; Binding Type Property; Binding "object.FX_Descripti…" (truncated display of object.FX_Description); Required False.
- Canvas: the tile at top left, with the picture box, the "Item" label at the top right, and a selected "Description" box to the left of it.

Not shown: the Location, Size and No Colon values (below the visible panel area). Not proved: the runtime look or persistence after a reload.

### T4 results against the plan

| Item | Planned | Observed (text) | Result |
| --- | --- | --- | --- |
| Placement | one Static under Pane (00) | static1_USER under Pane (00) | met |
| Name | StaticItemDescription | StaticItemDescription (tree and Name row) | met |
| Theme Class | default | blank | met (left at default) |
| Caption | default | blank | met (unchanged) |
| Justification | Left | Left (default Right) | met |
| Binding Type | Property | Property (default None) | met |
| Binding | object.FX_Description | object.FX_Description (default object._ItemId after Property) | met |
| Location | Left 9; Top 2 (summary 2; 9) | Top 2, Left 9 (summary 2; 9) | met as instructed |
| Size | 20; 1.5 | Width 20 (kept); Height 1 to 1.5 (summary 20; 1.5) | met |
| No Colon | True | True (default False) | met |
| Designer Saves | 3 | 3 (A, B, C), each with the toast | met |
| Corrections | at most one per field | 0 | met |
| Console | counted after every action | 2 at every printed count | met |

### T4 action list (cycle 5, in order)

"pre-c" marks an action from before the context break (taken from the working summary); the other rows are from this cycle's context.

| # | Action | Result | Console after |
| --- | --- | --- | --- |
| 1 | Tab list (read-only; pre-c) | 2 tabs | 2 |
| 2 | Inline snapshot, pre-flight (read-only; pre-c) | clean; StaticPicture and StaticItem; User | 2 |
| 3 | Click Toolbox Static row (e211) | armed | 2 |
| 4 | Canvas click at (345, 155) (coordinate; pre-c) | static1_USER placed under Pane (00) | 2 |
| 5 | Double-click Name value (e1201; pre-c) | Name editor open | 2 |
| 6 | Targeted snapshot, tab panel e428 (pre-c) | editor textbox e1787 "static1_USER" | 2 |
| 7 | Fill Name "StaticItemDescription" (e1787; pre-c) | entered | not printed |
| 8 | Press Tab (pre-c) | committed | not printed |
| 9 | Inline snapshot S1 | tree StaticItemDescription; header lag | 2 |
| 10 | Screenshot t4-01 (read-only) | placement tree | 2 |
| 11 | Click Save A (e1067) | Save A; toast | 2 |
| 12 | Inline snapshot S2 | toast; Save disabled | 2 |
| 13 | Click Justification arrow (e1320) | list open | 2 |
| 14 | Inline snapshot S3 | options Default, Left, Center, Right | 2 |
| 15 | Click Left (e1921) | Justification Left | 2 |
| 16 | Click Description row (e1207) | field left | 2 |
| 17 | Inline snapshot S4 | Justification Left | 2 |
| 18 | Click Binding Type arrow (e1348) | list open | 2 |
| 19 | Inline snapshot S5 | options None to Infor Chart | 2 |
| 20 | Click Property (e1943) | Binding Type Property; Binding object._ItemId | 2 |
| 21 | Click Description row (e1207) | field left | 2 |
| 22 | Inline snapshot S6 | Binding object._ItemId | 2 |
| 23 | Click Binding arrow (e1359) | list open | 2 |
| 24 | Inline snapshot S7 | full Binding list | 2 |
| 25 | Click object.FX_Description (e2003) | Binding object.FX_Description | 2 |
| 26 | Click Description row (e1207) | field left | 2 |
| 27 | Inline snapshot S8 | Binding object.FX_Description | 2 |
| 28 | Screenshot t4-02 (read-only) | values before Save B | 2 |
| 29 | Click Save B (e1067) | Save B; toast | 2 |
| 30 | Inline snapshot S9 | toast; Save disabled | 2 |
| 31 | Double-click Top value (e1609) | editor open | 2 |
| 32 | Targeted snapshot e428 (T-a) | editor e1787 "3" (Top) | 2 |
| 33 | Fill Top "2" (e1787) | entered | not printed |
| 34 | Press Tab | committed | not printed |
| 35 | Double-click Left value (e1618) | editor open | 2 |
| 36 | Targeted snapshot e428 (T-b) | Top 2; editor e1787 11.79… (Left) | 2 |
| 37 | Fill Left "9" (e1787) | entered | not printed |
| 38 | Press Tab | committed | not printed |
| 39 | Double-click Height value (e1581) | editor open | 2 |
| 40 | Targeted snapshot e428 (T-c) | Left 9; editor e1787 "1" (Height) | 2 |
| 41 | Fill Height "1.5" (e1787) | entered | not printed |
| 42 | Press Tab | committed | not printed |
| 43 | Click No Colon arrow (e1738) | list open | 2 |
| 44 | Inline snapshot S10 | options True, False | 2 |
| 45 | Click True (e2123) | No Colon True | 2 |
| 46 | Click Description row (e1207) | field left | 2 |
| 47 | Targeted snapshot e428 (T-d) | all planned values | 2 |
| 48 | Screenshot t4-03 (read-only) | values before Save C | 2 |
| 49 | Click Save C (e1067) | error "Ref e1067 not found"; not executed | not read |
| 50 | Inline snapshot S11 (the one recovery snapshot) | Save enabled; ref e1067 present | 2 |
| 51 | Click Save C (e1067) | Save C; toast | 2 |
| 52 | Screenshot t4-04 (read-only; viewed) | toast; Save greyed; three Statics | 2 |

Note on rows 7, 8, 33, 34, 37, 38, 41, 42: the fill and Tab outputs did not print the page console line. The next printed count was 2. No rise was seen.

### T4 action audit (cycle 5 only)

| Item | Count |
| --- | --- |
| Tab list calls (read-only) | 1 (pre-compaction) |
| Tab selections | 0 |
| Inline untargeted snapshots (read-only) | 12: 11 this cycle after the break (S1 to S11) and 1 pre-flight before it. Any further pre-compaction snapshot is not itemised in the working summary and is not counted. |
| Targeted snapshots, tab panel e428 (successful) | 5: 1 for the Name editor (pre-c) and 4 this cycle (T-a to T-d) |
| Targeted snapshots (failed) | 0 |
| Screenshots (read-only) | 4 (t4-01 to t4-04) |
| Single clicks (excluding the coordinate click; successful) | 16: Toolbox row 1; Save 3; list arrows 4; list options 4; Description-row leaves 4 |
| Failed clicks | 1 (Save C, "Ref e1067 not found"; not executed) |
| Coordinate clicks | 1 (placement at 345, 155). Arrow coordinate clicks: 0 (every arrow had a reference) |
| Double-clicks | 4: Name value 1 (pre-c); Top, Left, Height value cells 3 |
| Fill entries | 4: Name; Top; Left; Height |
| Tab presses | 4 (one after each fill) |
| Corrections | 0 |
| Component selections (row clicks) | 0 (the new Static was selected by placement) |
| Toolbox selections; placements | 1; 1 |
| Designer Saves executed | 3 (A, B, C), each with the toast |
| Save retries | 0 (the failed Save C call did not execute, so it was not a retry of an executed Save) |
| Trash clicks; components taken out | 0; 0 |
| Undo clicks | 0 |
| List opens | 4: Justification, Binding Type, Binding, No Colon. Each option was chosen by clicking it. No keys were used in any list. |
| Options chosen | 4: Left; Property; object.FX_Description; True |
| Prompts (dialogs) | 0. Save toasts only (3). |
| Server-event errors | 0 |
| Console-count rises | 0 (2 at every printed count) |
| Ref-not-found errors; recovery snapshots | 1; 1 (Save C; recovery S11) |
| Drags | 0 |
| Re-logins; session-expiry events | 0; 0 |
| Form closes or reopens | 0 |
| Form property changes; Caption edits; event handlers | 0; 0; 0 |

Cumulative totals (attempt 1 through T3, plus T4):

| Item | Through T3 | T4 | Total |
| --- | --- | --- | --- |
| Tab lists | 4 | 1 | 5 |
| Inline untargeted snapshots | 44 | 12 | 56 |
| Targeted snapshots (successful) | 23 | 5 | 28 |
| Targeted snapshots (failed) | 1 | 0 | 1 |
| Screenshots | 11 | 4 | 15 |
| Single clicks (excluding coordinate; successful) | 45 | 16 | 61 |
| Coordinate clicks | 1 | 1 | 2 |
| Double-clicks | 19 | 4 | 23 |
| Fill entries; Tab presses | 10; 10 | 4; 4 | 14; 14 |
| Component selections | 7 | 0 | 7 |
| Toolbox selections; placements | 1; 1 | 1; 1 | 2; 2 |
| Designer Saves | 6 | 3 | 9 |
| Trash clicks; components taken out | 1; 1 | 0; 0 | 1; 1 |
| Undo clicks | 0 | 0 | 0 |
| List opens (option clicked) | 8 | 4 | 12 |
| Prompts (dialogs; text and answer) | 2 | 0 | 2 |
| Server-event errors | 1 | 0 | 1 |
| Console-count rises | 1 (2 to 4, attempt 1) | 0 | 1 |
| Ref-not-found; recovery snapshots | 2; 2 | 1; 1 | 3; 3 |
| Drags; re-logins; Form closes or reopens | 0 | 0 | 0 |

### Worker-written file inventory (cumulative, through T4)

- `experiments/EXP-116-hello-world-part-8-phase-1b-fx-itemstile-components.md` (created in attempt 1; updated in cycles 2, 3, 4 and 5).
- `evidence/EXP-116/t1-02-console-rise-after-select-picturestatic.png` (attempt 1).
- `evidence/EXP-116/t1-03-after-server-event-error-ok.png` (attempt 1).
- `evidence/EXP-116/t2-01-gate-tree-canvas-form-properties.png` (cycle 2).
- `evidence/EXP-116/t2-02-gate-tree-expanded-layout-size-before-selection.png` (cycle 2).
- `evidence/EXP-116/t2-03-stepA-trash-confirmation-names-FX_PictureStatic.png` (cycle 3).
- `evidence/EXP-116/t2-04-stepA-tree-after-save-only-FX_PictureEdit.png` (cycle 3).
- `evidence/EXP-116/t2-05-stepC-StaticPicture-values-before-save.png` (cycle 3).
- `evidence/EXP-116/t2-06-after-stepC-save-clean-canvas.png` (cycle 3).
- `evidence/EXP-116/t3-03-stepB-StaticItem-values-before-save.png` (cycle 4).
- `evidence/EXP-116/t3-04-stepC-StaticItem-values-before-save.png` (cycle 4).
- `evidence/EXP-116/t3-05-final-canvas-after-stepC-save.png` (cycle 4).
- `evidence/EXP-116/t4-01-placement-StaticItemDescription-tree.png` (cycle 5).
- `evidence/EXP-116/t4-02-stepB-values-before-save.png` (cycle 5).
- `evidence/EXP-116/t4-03-stepC-values-before-save.png` (cycle 5).
- `evidence/EXP-116/t4-04-final-canvas-after-stepC-save.png` (cycle 5).
- Tool-written, not read by the worker: `evidence\playwright\` page snapshot files and console logs for all cycles. They are not counted individually.

### Cleanup inventory (as of end of T4)

- Form `FX_ItemsTile` (User scope). Components under Pane (00):
  - **StaticPicture** (Static; was FX_PictureEdit; Binding object.FX_Picture; Image and Text ImageOnly; No Colon True; Location 0; 0; Size 8; 4).
  - **StaticItem** (Static; Theme Class FX_Header; Justification Left; Binding Type Property; Binding object.FX_Item; No Colon True; Location Top 0, Left 9; Size 27; 1.5).
  - **StaticItemDescription** (Static; Justification Left; Binding Type Property; Binding object.FX_Description; No Colon True; Location Top 2, Left 9; Size 20; 1.5; Theme Class and Caption blank).
- Removed earlier (T2): FX_PictureStatic.
- Not yet created (planned for T5): StaticCost.

### Final state (end of T4)

- Designer tab 0: FX_ItemsTile open, User scope, clean (Save disabled after Save C; greyed in t4-04). StaticItemDescription is selected in the Components grid. No dialog, list or editor is open. The save toast is still visible at the top right in t4-04. It is a closable notification, not a prompt. The worker did not close it.
- Console: 2 errors, 0 warnings.
- Form Size: not re-read in T4 (no action targeted the Form). Last read 40; 4 (cycle 2).
- Portal tab 1: not touched.
- No session expiry or re-login. No runtime, checkout or global-object action.
- Stopped at the T4 boundary. Nothing started for T5.

### T4 results and findings (observed only)

1. **Location reading.** The bounded instruction stated that the planned pair is Left then Top, and that the display summary should read "2; 9". Observed: Top 2, Left 9, summary "2; 9". The display order (Top; Left) matches T3.
2. **Tree Data Source blank for StaticItemDescription.** In the Components tree the Data Source column for StaticItemDescription is blank in the snapshots after Save B and after Save C. StaticItem's row shows object.FX_Item. The Properties panel shows Binding object.FX_Description. The cause is not known: it may be a tree refresh lag or a display difference. Not resolved. Check it at the T6 readback.
3. **Label lag.** After the rename, the Properties header read "static1_USER (Static)" until a later re-render showed "StaticItemDescription (Static)". This matches T3 and EXP-084.
4. **Ref error on Save C.** The Save toolbar reference went stale between two snapshots. The first Save click failed with "Ref e1067 not found", and the recovery snapshot returned the same ref. The failed call did nothing.
5. **Console not printed after fill and Tab.** The fill and Tab outputs did not print the page console line. The next printed count was 2.
6. **Placement screenshot.** t4-01 was taken as required this cycle. The T3 gap is not repeated.

### T4 limitations

- The worker viewed only t4-04. t4-01, t4-02 and t4-03 were not re-opened; their content is the snapshot text at the same state.
- Location, Size and No Colon are verified by text (targeted snapshots), not by a screenshot that shows those rows.
- The Save A and Save B responses are verified by snapshot text (the toast), not by a screenshot.
- The Form Size was not re-read in T4.
- Finding 2 (blank tree Data Source) is unresolved.
- Only same-session UI observations are recorded. No cross-session, database-level or replay durability is claimed.

### Next permitted action

Operator: give the T5 instruction (StaticCost: placement under Pane (00), Name, Justification Right, Binding Type Property, Binding object.FX_Cost, Location Left 30 and Top 2 (summary 2; 30) under the same Left-then-Top reading, Size 8; 1.5, No Colon True; three Designer Saves). Not started.

## T5 StaticCost (cycle 6, bounded to T5)

Run R-20261018-224848-LBPN, task message 16b0fb39-e2a0-4c36-a802-83f99ccabf55, worker session 0bc4ddcb-15f4-4987-9466-80e448d72775. The task header named T6 (readback and audit), but the bounded instruction said "Execute ONLY EXP-116 T5" and "Do not start T6". This run did only T5 (StaticCost: placement and name, then property lists, then layout and No Colon). T6 has not been started: no close, no reopen, no readback, no final audit, and no acceptance statement.

Sources: AGENTS.md (read at the start of this task) and this record's T5 part and T4 part. The bounded instruction is the authority for this task. No other source was read.

### Pre-flight (T5)

- Tabs listed before any selection (read-only): tab 0 is the Designer for FX_ItemsTile (current); tab 1 is a Mongoose portal page. No tab selection was needed.
- Fresh inline snapshot (S0): console **2 errors, 0 warnings** (baseline for T5).
- Session usable; no expiry, logout card or sign-in page. User scope (`ScopeType: User`). FX_ItemsTile open, Save and Undo disabled, no dialog, list or editor open.
- Pane (00) held exactly **StaticPicture** (Static, object.FX_Picture, Pane 0, Tab 1), **StaticItem** (Static, object.FX_Item, Pane 0, Tab 0) and **StaticItemDescription** (Static, **object.FX_Description**, Pane 0, Tab 0). The StaticItemDescription Data Source column was no longer blank in this snapshot (see Finding 1).

### Step A: placement and name

1. Toolbox **Static** row clicked once (ref e211). Console 2.
2. One canvas placement click at **(500, 150)** (coordinate click; the one permitted T5 placement click), in the tile area to the right of StaticItemDescription and below StaticItem. Console 2. No drag.
3. Untargeted snapshot S1: exactly one new Static under Pane (00): **static1_USER** (Static, Pane 0, Tab 0), alongside the three existing components. No second component appeared. Undo not used.
4. **Defaults of the new Static (observed):** Caption blank; Theme Class blank; **Justification Right**; **Binding Type None**; **Binding blank**; No Colon False; Size **20; 1** (Width 20, Height 1); Location summary **2.72222222222222; 32.8135593220339** (Top 2.7222…, Left 32.8135…, the canvas-click point); Lock Size and Lock Position False.
5. Name: double-clicked the Name value cell (ref e1256). Console 2. Targeted snapshot of the Properties tab panel (e456) showed the Name editor textbox (ref e1842) with "static1_USER". Then:
   - fill **StaticCost** (ref e1842) and Tab. These two browser actions were sent in one parallel block, which breaks the one-action-at-a-time rule. The outputs show both ran in order (fill, then Tab) and the next snapshot showed the committed value, so no harm is recorded. This is a process deviation, not a state change (Finding 4).
6. Untargeted snapshot S2: the Components tree shows **StaticCost** (Static, Pane 0, Tab 0). The Properties header still lagged at "static1_USER (Static)" at that point. Console 2.
7. **Placement screenshot** `t5-01-placement-StaticCost-tree.png` taken before Save A (tree plus the new Static). Not re-opened by the worker; its content is the tree text from S2 at the same state.
8. **Designer Save A** (toolbar Save, ref e1097). Response: toast "Form [FX_ItemsTile] and global object(s) were saved." Save disabled afterwards (snapshot S3). Console 2.

### Step B: property lists

- The StaticCost row was selected by its Components row (ref e1947). Targeted snapshot confirmed Name StaticCost; Type Static; Justification Right.
- **Justification:** already **Right** (the default). **Skipped**; no entry made (the planned value was Right).
- **Binding Type:** arrow (ref e1403). Options: None, Variable, **Property**, SubCollection Grid, Filter Attribute, CollectionID Group Box, Primary Collection Grid, Secondary Collection Grid, Graph Element, Tree, Browser, Process Intelligence, Diagram, Chart, Gauge, DataView, Calendar, Aggregate, Expression, Infor Chart. Clicked **Property** (ref e2001). Field left by clicking the Description row (ref e1262). Binding Type now reads Property. Binding then displayed the default **object._ItemId**.
- **Binding:** arrow (ref e1414). The list entries were the same set as in T3 and T4 and included object.FX_Cost (ref e2059), object.FX_Description, object.FX_Item and object.FX_Picture. Clicked **object.FX_Cost**. Field left by clicking the Description row (ref e1262). Binding displays **object.FX_Cost** (plain text in the Binding cell, with the list arrow and the ellipsis button).
- Theme Class and Caption were not touched (both blank, their defaults).
- Targeted snapshot (e456) verified: Name StaticCost; Type Static; Justification Right; Binding Type Property; Binding object.FX_Cost.
- Pre-Save screenshot **t5-02** (values before Save B). Not re-opened by the worker.
- **Designer Save B** (ref e1097, from an untargeted snapshot taken just before the click). Response: toast "Form [FX_ItemsTile] and global object(s) were saved." (snapshot S5). Save disabled afterwards. Console 2. In S5 the StaticCost row showed **no Data Source** (blank) while its Properties showed object.FX_Cost (Finding 1).

### Step C: layout and No Colon

Each subfield was set by double-clicking its value cell (which opens the editor), a targeted snapshot to get the editor ref, plain fill, then Tab (fill and Tab sent as separate browser actions):

- **Top** (Location): double-click (ref e1664). Editor (ref e1842, label "Top", value 2.7222…). Filled **2**, Tab. Targeted snapshot showed Top **2**; summary "2; 32.81…".
- **Left** (Location): double-click (ref e1673). Editor (ref e1842, label "Left", value 32.8135…). Filled **30**, Tab. Targeted snapshot: Left **30**; summary **2; 30** (Top 2, Left 30). Lock Position untouched.
- **Width** (Size): double-click (ref e1626). Editor (ref e1842, label "Width", value 20). Filled **8**, Tab. Targeted snapshot: Width **8**; summary "8; 1".
- **Height** (Size): double-click (ref e1635). Editor (ref e1842, label "Height", value 1). Filled **1.5**, Tab. Lock Size untouched. Summary **8; 1.5**.
- **No Colon** (Miscellaneous > Specific Attributes): arrow (ref e1793). Options True and False. Clicked **True** (ref e2182). Field left by clicking the Description row (ref e1262). Value now True.
- Verification (targeted snapshot, e456): Name StaticCost; Type Static; Justification Right; Binding Type Property; Binding object.FX_Cost; Location **2; 30** (Top 2, Left 30); Size **8; 1.5** (Width 8, Height 1.5); No Colon **True**; Theme Class blank; Caption blank; Lock Size False; Lock Position False.
- Pre-Save screenshot **t5-03** (values before Save C). Not re-opened by the worker. Whether the Location, Size and No Colon rows fall inside the screenshot is not verified.
- **Designer Save C.** The untargeted snapshot before the click gave ref e1097 (Save enabled). Clicked e1097. Response: toast "Form [FX_ItemsTile] and global object(s) were saved." (snapshot S7). Save disabled afterwards. Console 2. No Ref error occurred in this step.

### Final canvas (t5-04)

The worker opened `t5-04-final-canvas-after-stepC-save.png` (viewed) and observed:

- No save toast visible (it had closed). The Save icon in the toolbar is greyed (disabled).
- Components tree, Pane (00): **StaticPicture** (Static, object.FX_Picture, 0, 1); **StaticItem** (Static, object.FX_Item, 0, 0); **StaticItemDescription** (Static, object.FX_Description, 0, 0); **StaticCost** (Static, **Data Source blank**, 0, 0), selected.
- Properties for StaticCost (Static): Name StaticCost; Type Static; From Device Master True; Theme Class blank; Justification **Right**; Binding Type **Property**; Binding **object.FX_Cost**; Required False.
- Canvas: the tile at top left, with the picture box, "Item" at the top right, "Description" at the left and a selected small box labelled "Cost" at the right side of the tile. The box sits to the right of and below the StaticItem line.
- Not visible in the screenshot: Location, Size and No Colon (below the panel's visible area). These values are verified by the targeted text snapshot only.

### T5 results against the plan

| Item | Planned | Observed (text) | Result |
| --- | --- | --- | --- |
| Placement | one Static under Pane (00), one canvas click | static1_USER under Pane (00); no second component | met |
| Name | StaticCost | StaticCost (tree and Name row) | met |
| Theme Class | default | blank | met (left at default) |
| Caption | default | blank | met (unchanged) |
| Justification | Right | Right (default; already Right) | met (skipped as already correct) |
| Binding Type | Property | Property (default None) | met |
| Binding | object.FX_Cost | object.FX_Cost (default object._ItemId after Property) | met |
| Location | Top 2, Left 30 (summary 2; 30) | Top 2, Left 30 (summary 2; 30) | met as instructed |
| Size | 8; 1.5 | Width 8 (was 20); Height 1.5 (was 1) (summary 8; 1.5) | met |
| No Colon | True | True (default False) | met |
| Designer Saves | 3 | 3 (A, B, C), each with the toast | met |
| Corrections | at most one per field | 0 | met |
| Console | counted after every action | 2 at every printed count | met |

### T5 action list (cycle 6, in order)

| # | Action | Result | Console after |
| --- | --- | --- | --- |
| 1 | Tab list (read-only) | 2 tabs; tab 0 current | 2 |
| 2 | Untargeted snapshot S0, pre-flight (read-only) | clean; three Statics; User | 2 |
| 3 | Click Toolbox Static row (e211) | armed | 2 |
| 4 | Canvas placement click at (500, 150) (coordinate) | static1_USER placed under Pane (00) | 2 |
| 5 | Untargeted snapshot S1 | one new Static; defaults | 2 |
| 6 | Double-click Name value (e1256) | Name editor open | 2 |
| 7 | Targeted snapshot e456 | editor e1842 "static1_USER" | 2 |
| 8 | Fill Name "StaticCost" (e1842) | entered (sent in parallel with 9) | not printed |
| 9 | Press Tab | committed (sent in parallel with 8) | not printed |
| 10 | Untargeted snapshot S2 | tree StaticCost; header lag | 2 |
| 11 | Screenshot t5-01 (read-only) | placement tree | 2 |
| 12 | Click Save A (e1097) | Save A; toast | 2 |
| 13 | Untargeted snapshot S3 | toast; Save disabled | 2 |
| 14 | Click StaticCost row (e1947) | selected | 2 |
| 15 | Targeted snapshot e456 | Name StaticCost; Justification Right; Binding Type None | 2 |
| 16 | Click Binding Type arrow (e1403) | list open | 2 |
| 17 | Targeted snapshot e456 | options None to Infor Chart | 2 |
| 18 | Click Property (e2001) | Binding Type Property | 2 |
| 19 | Click Description row (e1262) | field left | 2 |
| 20 | Targeted snapshot e456 | Binding Type Property; Binding object._ItemId; arrow e1414 | 2 |
| 21 | Click Binding arrow (e1414) | list open | 2 |
| 22 | Targeted snapshot e456 | full Binding list incl. object.FX_Cost (e2059) | 2 |
| 23 | Click object.FX_Cost (e2059) | Binding object.FX_Cost | 2 |
| 24 | Click Description row (e1262) | field left | 2 |
| 25 | Targeted snapshot e456 | Binding object.FX_Cost | 2 |
| 26 | Screenshot t5-02 (read-only) | values before Save B | 2 |
| 27 | Untargeted snapshot S4 (Save ref e1097) | Save enabled | 2 |
| 28 | Click Save B (e1097) | Save B | 2 |
| 29 | Untargeted snapshot S5 | toast; Save disabled | 2 |
| 30 | Double-click Top value (e1664) | editor open | 2 |
| 31 | Targeted snapshot e456 | editor e1842 "2.7222…" (Top) | 2 |
| 32 | Fill Top "2" (e1842) | entered | not printed |
| 33 | Press Tab | committed | not printed |
| 34 | Targeted snapshot e456 | Top 2; Left value ref e1673 | 2 |
| 35 | Double-click Left value (e1673) | editor open | 2 |
| 36 | Targeted snapshot e456 | editor e1842 "32.8135…" (Left) | 2 |
| 37 | Fill Left "30" (e1842) | entered | not printed |
| 38 | Press Tab | committed | not printed |
| 39 | Targeted snapshot e456 | Location 2; 30 | 2 |
| 40 | Double-click Width value (e1626) | editor open | 2 |
| 41 | Targeted snapshot e456 | editor e1842 "20" (Width) | 2 |
| 42 | Fill Width "8" (e1842) | entered | not printed |
| 43 | Press Tab | committed | not printed |
| 44 | Double-click Height value (e1635; ref from row 41's snapshot) | editor open | 2 |
| 45 | Targeted snapshot e456 | Size 8; 1; editor e1842 "1" (Height) | 2 |
| 46 | Fill Height "1.5" (e1842) | entered | not printed |
| 47 | Press Tab | committed | not printed |
| 48 | Click No Colon arrow (e1793) | list open | 2 |
| 49 | Targeted snapshot e456 | options True, False | 2 |
| 50 | Click True (e2182) | No Colon True | 2 |
| 51 | Click Description row (e1262) | field left | 2 |
| 52 | Targeted snapshot e456 | all planned values | 2 |
| 53 | Screenshot t5-03 (read-only) | values before Save C | 2 |
| 54 | Untargeted snapshot S6 (Save ref e1097) | Save enabled | 2 |
| 55 | Click Save C (e1097) | Save C | 2 |
| 56 | Untargeted snapshot S7 | toast; Save disabled | 2 |
| 57 | Screenshot t5-04 (read-only; viewed) | final canvas and tree | 2 |

Note on rows 8, 9, 32, 33, 37, 38, 42, 43, 46, 47: the fill and Tab outputs did not print the page console line; the next printed count was 2. No rise was seen.

### T5 action audit (cycle 6 only)

| Item | Count |
| --- | --- |
| Tab list calls (read-only) | 1 |
| Tab selections | 0 |
| Inline untargeted snapshots (read-only) | 8 (S0 to S7) |
| Targeted snapshots, tab panel e456 (successful) | 14 |
| Targeted snapshots (failed) | 0 |
| Screenshots (read-only) | 4 (t5-01 to t5-04) |
| Single clicks (excluding coordinate; successful) | 14 (corrected in T6 from 13; the action list has three Description-row leaves, not four): Toolbox Static 1; StaticCost row 1; Binding Type arrow 1; Property 1; Description-row leaves 3; Binding arrow 1; object.FX_Cost 1; No Colon arrow 1; True 1; Save 3 |
| Failed clicks | 0 |
| Coordinate clicks | 1 (canvas placement at 500, 150). Arrow coordinate clicks: 0 (every arrow had a reference). |
| Double-clicks | 5: Name value 1; Top, Left, Width, Height value cells 4 |
| Fill entries | 5: Name, Top, Left, Width, Height |
| Tab presses | 5 (one after each fill) |
| Parallel browser-action blocks | 1 (Name fill and Tab in one block; process deviation, executed in order) |
| Corrections | 0 |
| Component selections (row clicks) | 1 (StaticCost row). The placement itself also selected the new Static. |
| Toolbox selections; placements | 1; 1 |
| Designer Saves executed | 3 (A, B, C), each with the toast |
| Save retries | 0 |
| Trash clicks; components taken out | 0; 0 |
| Undo clicks | 0 |
| Top-toolbar Delete clicks | 0 |
| List opens | 3: Binding Type, Binding, No Colon. Each option clicked; none via keys. Justification was already Right and was not opened. |
| Options chosen | 3: Property; object.FX_Cost; True |
| Prompts (dialogs) | 0 |
| Server-event errors | 0 |
| Console-count rises | 0 (2 at every printed count) |
| Ref-not-found errors; recovery snapshots | 0; 0 |
| Drags | 0 |
| Re-logins; session-expiry events | 0; 0 |
| Form closes or reopens | 0 |
| Form property changes; Caption edits; event handlers | 0; 0; 0 |

Cumulative totals (attempt 1 through T4, plus T5):

| Item | Through T4 | T5 | Total |
| --- | --- | --- | --- |
| Tab lists | 5 | 1 | 6 |
| Inline untargeted snapshots | 56 | 8 | 64 |
| Targeted snapshots (successful) | 28 | 14 | 42 |
| Targeted snapshots (failed) | 1 | 0 | 1 |
| Screenshots | 15 | 4 | 19 |
| Single clicks (excluding coordinate; successful) | 61 | 14 (corrected from 13) | 75 |
| Coordinate clicks | 2 | 1 | 3 |
| Double-clicks | 23 | 5 | 28 |
| Fill entries; Tab presses | 14; 14 | 5; 5 | 19; 19 |
| Component selections | 7 | 1 | 8 |
| Toolbox selections; placements | 2; 2 | 1; 1 | 3; 3 |
| Designer Saves | 9 | 3 | 12 |
| Trash clicks; components taken out | 1; 1 | 0; 0 | 1; 1 |
| Undo clicks | 0 | 0 | 0 |
| List opens (option clicked) | 12 | 3 | 15 |
| Prompts (dialogs; text and answer) | 2 | 0 | 2 |
| Server-event errors | 1 | 0 | 1 |
| Console-count rises | 1 (attempt 1, 2 to 4) | 0 | 1 |
| Ref-not-found; recovery snapshots | 3; 3 | 0; 0 | 3; 3 |
| Parallel browser-action blocks | 0 | 1 | 1 |
| Drags; re-logins; Form closes or reopens | 0 | 0 | 0 |

### Worker-written file inventory (cumulative, through T5)

- `experiments/EXP-116-hello-world-part-8-phase-1b-fx-itemstile-components.md` (created in attempt 1; updated in cycles 2, 3, 4, 5 and 6).
- `evidence/EXP-116/t1-02-console-rise-after-select-picturestatic.png` (attempt 1).
- `evidence/EXP-116/t1-03-after-server-event-error-ok.png` (attempt 1).
- `evidence/EXP-116/t2-01-gate-tree-canvas-form-properties.png` (cycle 2).
- `evidence/EXP-116/t2-02-gate-tree-expanded-layout-size-before-selection.png` (cycle 2).
- `evidence/EXP-116/t2-03-stepA-trash-confirmation-names-FX_PictureStatic.png` (cycle 3).
- `evidence/EXP-116/t2-04-stepA-tree-after-save-only-FX_PictureEdit.png` (cycle 3).
- `evidence/EXP-116/t2-05-stepC-StaticPicture-values-before-save.png` (cycle 3).
- `evidence/EXP-116/t2-06-after-stepC-save-clean-canvas.png` (cycle 3).
- `evidence/EXP-116/t3-03-stepB-StaticItem-values-before-save.png` (cycle 4).
- `evidence/EXP-116/t3-04-stepC-StaticItem-values-before-save.png` (cycle 4).
- `evidence/EXP-116/t3-05-final-canvas-after-stepC-save.png` (cycle 4).
- `evidence/EXP-116/t4-01-placement-StaticItemDescription-tree.png` (cycle 5).
- `evidence/EXP-116/t4-02-stepB-values-before-save.png` (cycle 5).
- `evidence/EXP-116/t4-03-stepC-values-before-save.png` (cycle 5).
- `evidence/EXP-116/t4-04-final-canvas-after-stepC-save.png` (cycle 5).
- `evidence/EXP-116/t5-01-placement-StaticCost-tree.png` (cycle 6).
- `evidence/EXP-116/t5-02-stepB-StaticCost-values-before-save.png` (cycle 6).
- `evidence/EXP-116/t5-03-stepC-StaticCost-values-before-save.png` (cycle 6).
- `evidence/EXP-116/t5-04-final-canvas-after-stepC-save.png` (cycle 6).
- Tool-written, not read by the worker: `evidence\playwright\` page snapshot files and console logs for all cycles, including `console-2026-10-18T15-30-33-686Z.log` (reported by the tab list in this task). They are not counted individually.

### Cleanup inventory (as of end of T5; for the operator's T6 readback and cleanup planning)

- Form `FX_ItemsTile` (User scope). Components under Pane (00):
  - **StaticPicture** (Static; was FX_PictureEdit; Binding object.FX_Picture; Image and Text ImageOnly; No Colon True; Location Top 0, Left 0; Size 8; 4).
  - **StaticItem** (Static; Theme Class FX_Header; Justification Left; Binding Type Property; Binding object.FX_Item; No Colon True; Location Top 0, Left 9; Size 27; 1.5).
  - **StaticItemDescription** (Static; Justification Left; Binding Type Property; Binding object.FX_Description; No Colon True; Location Top 2, Left 9; Size 20; 1.5; Theme Class and Caption blank).
  - **StaticCost** (Static; Justification Right; Binding Type Property; Binding object.FX_Cost; No Colon True; Location Top 2, Left 30; Size 8; 1.5; Theme Class and Caption blank).
- Removed earlier (T2): FX_PictureStatic.
- Not created in EXP-116: no other component, Form, global object, string, image, IDO or SQL object (the Form property set stays as in EXP-115).

### Final state (end of T5)

- Designer tab 0: FX_ItemsTile open, User scope, clean (Save disabled and greyed in t5-04). StaticCost is selected in the Components grid. The Properties panel shows the Component tab with the Description row focused; no field editor, list, menu or dialog is open. No save toast is visible. Console: 2 errors, 0 warnings.
- Form Size: not re-read in T5 (no action targeted the Form). Last read 40; 4 (cycle 2).
- Portal tab 1: not touched.
- No session expiry or re-login. No runtime, checkout or global-object action.
- Stopped at the T5 boundary. T6 (close and reopen, readback, final audit) has not been started and is not part of this task.

### T5 findings (observed only)

1. **StaticCost Data Source blank in the tree.** After Save A and Save B, the Components tree showed StaticCost with a blank Data Source column, while its Properties showed object.FX_Cost (Binding). After Save C the tree still showed a blank Data Source for StaticCost in t5-04 and in S7. The worker did not change StaticCost to investigate. Note: the same pattern occurred for StaticItemDescription in T4 after Save C; by the T5 pre-flight snapshot its Data Source displayed object.FX_Description, with no worker action on it. This is the unresolved discrepancy the bounded instruction asked to preserve for the T6 persistence readback. Its cause is not known: a tree refresh lag is the leading explanation, not verified.
2. **Location reading.** The bounded instruction gave the convention Left, then Top, and the display summary "2; 30". Observed: Top 2, Left 30, summary "2; 30". The display order (Top; Left) matches T3 and T4.
3. **Label lag.** The Properties header read "static1_USER (Static)" after placement and after Save A. It read "StaticCost (Static)" by the later targeted snapshots. This matches T3, T4 and EXP-084.
4. **Parallel browser-action block.** The Name fill and the Tab were sent in one block, against the rule of one browser action at a time. The outputs show fill then Tab in order, and the committed Name was verified in the next snapshot. The deviation is recorded here; it did not change the Form beyond the intended Name.
5. **Justification skipped.** The new Static's default Justification is Right, which is the planned value for StaticCost. No change was made and no entry was needed.
6. **Save toasts.** Each of the three saves showed the toast "Form [FX_ItemsTile] and global object(s) were saved." (snapshot text). The toast had closed by the time of t5-04.
7. **Canvas placement.** The placement at (500, 150) produced a Static whose default Location was Top 2.72, Left 32.81. The planned values were set by typing afterwards.

### T5 limitations

- The worker viewed only t5-04. t5-01, t5-02 and t5-03 were not re-opened; their content is the snapshot text at the same states.
- Location, Size and No Colon are verified by targeted text snapshots, not by a screenshot that shows those rows (the rows were below the panel's visible area in the screenshots).
- The Save A, Save B and Save C responses are verified by snapshot text (the toast). t5-04 shows the Save icon greyed, which is consistent with a clean state.
- Finding 1 (blank StaticCost Data Source in the tree) is unresolved.
- Only same-session UI observations are recorded. No cross-session, database-level or replay durability is claimed.

### Next permitted action

Operator: give the T6 instruction (close the clean FX_ItemsTile once through its Form-tab control, answer No to any save prompt and record its text, reopen once through the Form menu recent-forms entry, read all four components' values, record the Form Size, write the final audit). The T6 readback should check Finding 1 (the StaticCost and StaticItemDescription Data Source columns). Not started.

## T6 close/reopen readback and final audit (cycle 7, bounded to T6)

Run R-20261018-224848-LBPN, task message 9087030c-cedc-4265-a0d6-0401a7434786, worker session 0bc4ddcb-15f4-4987-9466-80e448d72775. The task header named T7 with cycle_id 7, but the bounded instruction said "Execute ONLY EXP-116 T6" and "Do not modify any Form or component, perform any Designer Save, or start another experiment." This run did only T6: the close, the reopen, the readback and this documentation. No Designer Save, no edit, no Undo, no drag, no list or editor was opened.

Sources: AGENTS.md (read at the start of this task) and this record's T5 and T6 parts. No other source was read.

### Pre-flight (T6)

- Tabs listed before any selection (read-only, in parallel with the AGENTS.md read): tab 0 is the Designer for FX_ItemsTile (current); tab 1 is a Mongoose portal page. No tab selection was needed; tab 0 was already current. The tab-list output reported a new tool-written console log entry (not read by the worker; the exact filename is in the tool output, not re-verified here).
- Fresh inline snapshot (P0): console **2 errors, 0 warnings** (baseline for T6). Form tab selected; Save and Undo disabled; no dialog, list or editor open; ScopeType User.
- Pane (00) held exactly StaticPicture (Static, object.FX_Picture, Tab 1), StaticItem (Static, object.FX_Item, Tab 0), StaticItemDescription (Static, **object.FX_Description**, Tab 0) and StaticCost (Static, **Data Source blank**, Tab 0). The StaticCost Data Source blank is the same-session observation from T5 (Finding 1 there).

### Step A: ordinary close

1. Snapshot (post-close check, untargeted) after one click on the **closable FX_ItemsTile** control of the Form tab (ref e247 from P0). Console 2.
2. Result: the page URL lost `MGForm=FX_ItemsTile` (now `designer/default.aspx`); the Form tab disappeared; Save and Undo stayed disabled; no save or discard prompt appeared, so no prompt text exists to record (no answer was needed). Console 2.

### Step B: ordinary reopen

1. Clicked the **Form** menu (ref e3). Recent-forms list (snapshot) showed FX_ItemsTile among the entries (FX_Items, FX_CustomerPortal, FX_FlexProbe01, FX_OrdersChart, FX_Orders, FX_HelloWorld01, IDO Properties, IDOs). Console 2.
2. Clicked the **FX_ItemsTile** recent-forms entry once (ref e1166). Not Select Form OK; no Select Form row was double-clicked. URL returned to `designer/default.aspx?MGForm=FX_ItemsTile`. No "Identify Your Editing Scope" dialog appeared. Console 2.
3. Verified (untargeted snapshot): Form tab selected; Save disabled; Form Properties show Name FX_ItemsTile, Form Type **Tile**, Device Type Default, Is Master True, Unit Char, **Size 40; 4**, Splitter None, Pane 0 and Pane 1 Scroll Bars As Needed, Synchronize FlexLayout attributes True, Version "User version for user …". The Collections tab (after the Details panel was expanded) shows Primary Collection FX_Items. ScopeType User.
4. The Details panel had reopened collapsed. Clicked its **Expand Panel** control (ref e1211; view-only). Then clicked the **Components** tab (ref e1402; view-only). Then clicked the grid's **Expand** control for Pane (00) (ref e1475; view-only). The tree then showed exactly four children under Pane (00).
5. Screenshot **t6-01** (reopened canvas, full tree, Form Properties, Save state) taken with the Form tab selected and before any component selection.

### Step C: readback of every component

Each row was selected by its Components-row reference (no list, editor or value was opened or changed). The Properties text was read from targeted snapshots of the Properties tab panel; the Form-level Properties and the tree were read from full snapshots.

| Component | Name | Type | Theme Class | Justification | Binding Type | Binding | Image and Text | No Colon | Location (display; Top, Left) | Size (display; W, H) | Caption | Tree Data Source / Pane / Tab |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| StaticPicture | StaticPicture | Static | blank | blank (not set) | Property | object.FX_Picture | **ImageOnly** | True | **0; 0** (Top 0, Left 0) | **8; 4** (8, 4) | C(FX_PictureStatic) (generated; unchanged) | object.FX_Picture / 0 / 1 |
| StaticItem | StaticItem | Static | **FX_Header** | **Left** | Property | object.FX_Item | Inherit (default; not planned) | True | **0; 9** (Top 0, Left 9) | **27; 1.5** (27, 1.5) | blank | object.FX_Item / 0 / 0 |
| StaticItemDescription | StaticItemDescription | Static | blank (default) | **Left** | Property | object.FX_Description | Inherit (default; not planned) | True | **2; 9** (Top 2, Left 9) | **20; 1.5** (20, 1.5) | blank | object.FX_Description / 0 / 0 |
| StaticCost | StaticCost | Static | blank (default) | **Right** | Property | object.FX_Cost | Inherit (default; not planned) | True | **2; 30** (Top 2, Left 30) | **8; 1.5** (8, 1.5) | blank | object.FX_Cost / 0 / 0 |

Per-component details (Properties text):
- **StaticPicture:** Description blank; Foreground Color #000000; Bitmap File Name blank; Required False; To Be Determined False; Image Display Fit; Lock Size False; Lock Position False; Tab Order 1; Frame False; Group False; Interpret Bound Contents False. Justification is blank as displayed (never set in EXP-116). Theme Class is blank as displayed.
- **StaticItem:** Caption blank; Tab Order 0; Lock Size and Lock Position False.
- **StaticItemDescription:** Caption blank; Tab Order 0. Its Theme Class is blank, which is its original default, not inferred.
- **StaticCost:** Caption blank; Tab Order 0. Its Theme Class is blank, which is its original default, not inferred.

Screenshots (each viewed before citing):
- **t6-01** `evidence/EXP-116/t6-01-reopened-canvas-full-tree-form-properties.png`: shows the tab FX_ItemsTile with the Form tab selected; Form Properties Name FX_ItemsTile, Form Type Tile, Is Master True, Unit Char, **Size 40; 4**; the Components tree with Pane (00) and exactly StaticPicture (Static, object.FX_Picture, 0, 1), StaticItem (Static, object.FX_Item, 0, 0), StaticItemDescription (Static, object.FX_Description, 0, 0), StaticCost (Static, object.FX_Cost, 0, 0); Save greyed; ScopeType User. The canvas shows the tile at top left with a broken-image icon and the generated caption text "C(FX_PictureStatic)" in the picture area, "Item" in a larger bold style at the top right, "Description" in the middle and "Cost" at the right. No picture is visible. Does **not** prove the runtime appearance or persistence beyond this session.
- **t6-02** `evidence/EXP-116/t6-02-StaticPicture-properties-readback.png`: StaticPicture selected; Name StaticPicture; Caption C(FX_PictureStatic (truncated in the field); Type Static; Theme Class blank; Justification blank; Binding Type Property; Binding object.FX_Picture; Tree row highlighted with Tab 1. The Image and Text (ImageOnly), No Colon, Location and Size rows are below the visible panel and are **text-only** (accessibility snapshot).
- **t6-03** `evidence/EXP-116/t6-03-StaticItem-properties-readback.png`: StaticItem selected; Name StaticItem; Theme Class FX_Header; Justification Left; Binding Type Property; Binding object.FX_Item; tree row highlighted. Location, Size and No Colon are text-only.
- **t6-04** `evidence/EXP-116/t6-04-StaticItemDescription-properties-readback.png`: StaticItemDescription selected; Name StaticItemDescription; Theme Class blank; Justification Left; Binding Type Property; Binding "object.FX_Descripti…" (truncated; full value object.FX_Description in text); tree row highlighted. Location, Size and No Colon are text-only.
- **t6-05** `evidence/EXP-116/t6-05-StaticCost-properties-readback.png`: StaticCost selected; Name StaticCost; Theme Class blank; Justification Right; Binding Type Property; Binding object.FX_Cost; tree row highlighted. Location, Size and No Colon are text-only.

Value-verification note: the Location summary is Top; Left as Mongoose displays it. The readback therefore matches the planned Left-then-Top convention: StaticItem 0; 9 (Top 0, Left 9), StaticItemDescription 2; 9 (Top 2, Left 9), StaticCost 2; 30 (Top 2, Left 30). Under the bounded T6 instruction, the operator's accepted reading is taken as stated in that instruction; this worker did not see the acceptance record.

Data Source discrepancy (T4 and T5 findings):
- In this session the tree showed StaticItemDescription's Data Source as blank after its T4 Saves and StaticCost's as blank after its T5 Saves, while their Properties showed the correct bindings. After the close and reopen in the same browser session, the tree shows **object.FX_Description** and **object.FX_Cost**.
- This is a same-session observation. It does not establish a cause (a refresh lag is a candidate, not verified) and it does not establish persistence across sessions. No value was changed to investigate.

### T6 action list (in order)

| # | Action | Result | Console after |
| --- | --- | --- | --- |
| 1 | Read AGENTS.md and tab list (read-only; issued together) | 2 tabs; tab 0 current | 2 |
| 2 | Untargeted snapshot P0 (pre-flight) | clean; four Statics; Save disabled | 2 |
| 3 | Click FX_ItemsTile Form-tab close control (e247) | Form closed; URL without MGForm; no prompt | 2 |
| 4 | Untargeted snapshot (post-close) | no Form tab; Save disabled; no dialog | 2 |
| 5 | Click Form menu (e3) | menu open with recent forms | 2 |
| 6 | Untargeted snapshot (menu) | FX_ItemsTile entry at e1166 | 2 |
| 7 | Click FX_ItemsTile recent-forms entry (e1166) | Form reopened; URL with MGForm=FX_ItemsTile | 2 |
| 8 | Untargeted snapshot (reopened identity) | Form tab; Size 40; 4; Save disabled; no scope dialog | 2 |
| 9 | Click Details Expand Panel (e1211; view-only) | Details expanded on Collections | 2 |
| 10 | Untargeted snapshot | Collections tab; Components tab at e1402 | 2 |
| 11 | Click Components tab (e1402; view-only) | Components tab; Pane (00) collapsed | 2 |
| 12 | Untargeted snapshot | Pane (00) collapsed | 2 |
| 13 | Click grid Expand (e1475; view-only) | Pane (00) expanded with four children | 2 |
| 14 | Untargeted snapshot | four children with Data Source values | 2 |
| 15 | Screenshot t6-01 (read-only) | reopened canvas, tree, Form Properties | 2 |
| 16 | Click StaticPicture row (e1591) | selected | 2 |
| 17 | Targeted snapshot of Properties panel (e1125) | **Ref e1125 not found** (error 1) | 2 |
| 18 | Untargeted snapshot (recovery 1) | StaticPicture Properties text; refs refreshed | 2 |
| 19 | Screenshot t6-02 (read-only) | StaticPicture Properties | 2 |
| 20 | Click StaticItem row (e1616) | selected | 2 |
| 21 | Targeted snapshot (e484) | StaticItem values | 2 |
| 22 | Screenshot t6-03 (read-only) | StaticItem Properties | 2 |
| 23 | Click StaticItemDescription row (e1641) | **Ref e1641 not found** (error 2) | 2 |
| 24 | Untargeted snapshot (recovery 2) | e1641 present in this snapshot | 2 |
| 25 | Click StaticItemDescription row (e1641) | selected | 2 |
| 26 | Targeted snapshot (e484) | StaticItemDescription values | 2 |
| 27 | Screenshot t6-04 (read-only) | StaticItemDescription Properties | 2 |
| 28 | Click StaticCost row (e1666) | **Ref e1666 not found** (error 3) | 2 |
| 29 | Untargeted snapshot (recovery 3) | e1666 present in this snapshot | 2 |
| 30 | Click StaticCost row (e1666) | selected | 2 |
| 31 | Targeted snapshot (e484) | StaticCost values | 2 |
| 32 | Screenshot t6-05 (read-only) | StaticCost Properties | 2 |
| 33 | Read t6-01 and t6-02 to t6-05 (viewed) | captured content confirmed as described above | — |

No action in this task changed the Form. Undo, Save, trash, toolbox, placement, list, editor, drag, Form-property, Caption and event actions: none.

Note on ref errors: error 1 was a **targeted** snapshot against a Properties-panel ref that changed after a row selection. Errors 2 and 3 were **clicks** on tree-row refs that were not present in the most recent targeted snapshot. In each case one fresh untargeted snapshot was taken and only its refs were used. No mutation was retried. The first recovery (step 18) and the others were each used for a single corrected action.

### T6 result against the planned values

| Item | Planned | Observed (text, plus screenshots where stated) | Result |
| --- | --- | --- | --- |
| Close | once, Form-tab control | once; no prompt | met |
| Reopen | once, recent-forms entry | once; URL with MGForm; no scope dialog | met |
| Form Size | 40; 4 | 40; 4 (Form Properties text; t6-01) | met |
| Form state | open and clean | open; Save disabled; no dialog | met |
| Component set | exactly four under Pane (00) | exactly four; no FX_PictureStatic or FX_PictureEdit | met |
| StaticPicture | Static; object.FX_Picture; ImageOnly; No Colon True; 0; 0; 8; 4 | Static; object.FX_Picture; ImageOnly; True; 0; 0; 8; 4 | met (text for Image and Text, No Colon, Location, Size) |
| StaticItem | FX_Header; Left; Property; object.FX_Item; No Colon True; 0; 9; 27; 1.5 | FX_Header; Left; Property; object.FX_Item; True; 0; 9; 27; 1.5 | met |
| StaticItemDescription | Left; Property; object.FX_Description; No Colon True; 2; 9; 20; 1.5 | Left; Property; object.FX_Description; True; 2; 9; 20; 1.5 | met |
| StaticCost | Right; Property; object.FX_Cost; No Colon True; 2; 30; 8; 1.5 | Right; Property; object.FX_Cost; True; 2; 30; 8; 1.5 | met |
| Designer Saves in T6 | 0 | 0 | met |

### Final audit (T6, documentation only)

#### Acceptance-check evidence matrix

- **AC-1 (sources; session; User scope; open and clean at 40; 4; only the two components; properties recorded; console baseline; gate screenshot).** Sources: AGENTS.md read at the start of T1 (attempt 1), T1 re-run, T2, T3, T4, T5 and T6, with the record's part for each. Session usable in each task (no expiry, logout card or sign-in page in tab 0; see the T1 section for tab 1). User scope: status bar `ScopeType: User` in every task. T1 re-run (cycle 2): FX_ItemsTile open, clean, Size 40; 4; Components tree exactly FX_PictureStatic (Static) and FX_PictureEdit (Edit, object.FX_Picture); both properties recorded from text; console baseline 2. Gate screenshots: `t2-01-gate-tree-canvas-form-properties.png` (Pane collapsed) and `t2-02-gate-tree-expanded-layout-size-before-selection.png` (decisive: tree expanded, Size 40; 4). Limitation: the attempt-1 gate screenshot was taken after the first click (not before), and the attempt-1 gate ended with a server-event error (see the T1 section). Status: **met** by the cycle-2 gate; attempt-1 deviation recorded.
- **AC-2 (T2 picture pair; T3 to T5 placement, names, values, Saves; console counts; corrections).** T2: confirmation text recorded verbatim; FX_PictureStatic removed after the confirmation (screenshot `t2-03-stepA-trash-confirmation-names-FX_PictureStatic.png` shows the confirmation text; `t2-04-stepA-tree-after-save-only-FX_PictureEdit.png` shows the tree after Save 1 with only FX_PictureEdit); FX_PictureEdit changed to StaticPicture (type list; Name; Image and Text ImageOnly; No Colon True; Location 0; 0; Size 8; 4); three Saves with toasts; StaticPicture pre-Save values in `t2-05` (No Colon text-only); post-Save canvas `t2-06`. T3: StaticItem placed (no placement screenshot — **gap**; tree text only), named, configured; three Saves; values in `t3-03` and `t3-04` (Location, Size and No Colon text-only); final canvas `t3-05`. T4: StaticItemDescription placed, `t4-01` (placement with tree), `t4-02` and `t4-03` (text-only for Location, Size, No Colon), `t4-04` (final canvas, viewed); three Saves. T5: StaticCost placed, `t5-01`, `t5-02` and `t5-03` (text-only for Location, Size, No Colon), `t5-04` (final canvas, viewed); three Saves. Corrections: 0 in every task. Console recorded after every action (2 at every printed count; one rise, attempt 1 only). Status: **met**, with the T3 placement screenshot gap and the text-only status of several value rows.
- **AC-3 (ordinary close and reopen; exactly four components with planned values; Size 40; 4; open and clean).** Evidence: T6 action list (steps 3 to 14), `t6-01-reopened-canvas-full-tree-form-properties.png` (full tree, Size 40; 4, Save greyed), `t6-02` to `t6-05` (per-component Properties; Location, Size and No Colon text-only). Values: the table in Step C. Limitation: **same-session readback only**. The reopen used the same browser session without a reload; no cross-session or database-level durability is claimed. Status: **met for the same-session readback**; cross-session verification is outstanding.
- **AC-4 (no other component removed; no other Form or global object changed; no caption, string or event; no Form property change; no Regenerate, unload, Delete Form Definition or Select Form OK; no drag; Undo at most once; no runtime action; no checkout; User scope; no task-boundary overrun).** Components removed: only FX_PictureStatic (T2). Other Forms, global objects, strings or images: none touched in any task (no action recorded). Captions: none set; StaticPicture keeps the generated caption C(FX_PictureStatic). Events: none. Form properties: none changed (view-only expansions of Form Properties Layout in cycle 2 and the Details panel in T6). Regenerate, unload, Delete Form Definition, Select Form OK: none (T6 reopened through the recent-forms entry). Drags: 0. Undo clicks: 0. Runtime actions: none. Checkout actions: none. User scope only: yes. Task boundaries: each task stopped at its bounded instruction. Note: each task's header named a later task than its bounded instruction (T2 to T6 headers named T3, T4, T5, T6 and T7). Each time the bounded instruction was followed and the mismatch recorded. Status: **met as recorded**, subject to the operator's git review.
- **AC-5 (final audit: evidence, action counts, file inventory, cleanup inventory, final state).** This section, the action audit below, the file inventory below, the cleanup inventory below and the final state below. Repository confinement is supported by the worker's inventory and the harness inventories; operator git review is authoritative. Status: **written**.

#### Narrative sections the operator asked for

1. **Attempt 1 (T1, cycle 0): the first failure and the recovery.** The first FX_PictureStatic selection (attempt 1) raised the server-event error "The server event processing returned an error. If this persists, contact your system administrator." and the console count rose from 2 to 4. The worker answered OK once and stopped blocked. Tab 1 showed "Logout Successful", which may indicate an ended portal session, but no Session Expired modal, sign-in page or logout card appeared in tab 0, so the session-expiry procedure was not run and no sign-in was performed. The record does **not** establish an authentication failure. The operator's Designer reload is inferred from the cycle-2 layout (panels collapsed), but the worker did not verify a reload. The attempt-1 cause remains unresolved.
2. **T1 re-run (cycle 2): the successful gate.** The same FX_PictureStatic row click produced no error and the console stayed at 2. The gate passed with the observed values in the cycle-2 section. This is separate from attempt 1.
3. **T2 picture pair.** Confirmation text (verbatim): "Are you sure you want to delete FX_PictureStatic and all the components it contains?" (buttons OK and Cancel). It names FX_PictureStatic only. The tree showed no child under FX_PictureStatic. **Accepted qualification:** the phrase "and all the components it contains" is generic for a Static with no children; the worker accepted it under the brief's rule (names FX_PictureStatic alone). The operator is asked to confirm this reading. Other T2 results: Save 1, Save 2 and Save 3 each showed the toast "Form [FX_ItemsTile] and global object(s) were saved."; one Ref error on Save 3, recovered; StaticPicture values as in Step C.
4. **T3, T4 and T5 placement, property and Save evidence.** Placement: T3 placement screenshot **missing** (tree text only); T4 `t4-01`; T5 `t5-01`. Property evidence: T3 `t3-03` and `t3-04`; T4 `t4-02` and `t4-03`; T5 `t5-02` and `t5-03`. In each of these pre-Save screenshots, Location, Size and No Colon were below the visible panel area and are text-only. Final canvases: `t3-05`, `t4-04` and `t5-04`. Saves: three per task with toasts (text).
5. **T6 close/reopen sequence and component readback.** Steps A and B and the Step C table above.
6. **Cumulative browser action audit.** See the audit tables below. Each category gives the counts per task, the total, and the reconciliation status.
7. **Worker-written file inventory, tool-written evidence and cleanup inventory.** See the sections below.
8. **Procedural qualification for T5's parallel Name fill and Tab.** In T5, the Name fill (ref e1842, "StaticCost") and the Tab press were sent in one parallel block, which breaks the one-browser-action-at-a-time rule. The tool outputs show fill and then Tab in order, and the next snapshot showed the committed name StaticCost. **Not classified as compliant.** Console observation: neither the fill output nor the Tab output printed the page console line, so **no console count is available between the two actions**; the first printed count after them is 2 (snapshot S2). The deviation is recorded as a process deviation; it changed only the intended Name.
9. **Stale-reference errors, the missing T3 placement screenshot and other deviations.** Six Ref-not-found errors occurred in total: T2 (Save 3, one error), T3 (targeted tree snapshot, one error), T4 (Save C, one error), and T6 (targeted Properties snapshot, one error; StaticItemDescription click, one error; StaticCost click, one error). Each was recovered with one fresh untargeted snapshot; no failed mutation was retried. Other deviations: the attempt-1 gate screenshot was taken after the first click; the T3 placement screenshot is missing; the T5 parallel block (item 8); the T5 single-click count was corrected from 13 to 14; the Properties header lagged the component name after placement in T3, T4 and T5 (EXP-084 behaviour); the Details panel and Pane (00) were expanded or collapsed view-only in several tasks.
10. **Final Designer state, acceptance status and operator decisions.** See the final state and the operator decisions below.

#### Cumulative browser action audit (exact counts)

Per task: att1 = attempt 1 (T1, cycle 0); c2 = T1 re-run (cycle 2); T2; T3; T4 = cycle 5 (its pre-compaction part is reconstructed from the working summary, see the reconciliation note); T5; T6. "Total" includes all tasks.

| Category | att1 | c2 | T2 | T3 | T4 | T5 | T6 | Total |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Tab list calls (read-only) | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 7 |
| Tab selections | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Inline untargeted snapshots (worker-requested) | 2 | 9 | 24 | 9 | 12 | 8 | 10 | 74 |
| Targeted snapshots, successful | 0 | 0 | 7 | 16 | 5 | 14 | 3 | 45 |
| Targeted snapshots, failed (Ref not found) | 0 | 0 | 0 | 1 | 0 | 0 | 1 | 2 |
| Screenshots | 2 | 2 | 4 | 3 | 4 | 4 | 5 | 24 |
| Toolbox selections (Static row) | 0 | 0 | 0 | 1 | 1 | 1 | 0 | 3 |
| Placement coordinate clicks (canvas) | 0 | 0 | 0 | 1 | 1 | 1 | 0 | 3 |
| Arrow coordinate clicks | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Single clicks (excluding coordinate; successful) | 2 | 5 | 18 | 20 | 16 | 14 | 10 | 85 |
| Failed clicks (Ref not found) | 0 | 0 | 1 | 0 | 1 | 0 | 2 | 4 |
| Double-clicks | 0 | 3 | 10 | 6 | 4 | 5 | 0 | 28 |
| Component selections (row clicks) | 1 | 2 | 3 | 1 | 0 | 1 | 4 | 12 |
| List opens | 0 | 0 | 3 | 5 | 4 | 3 | 0 | 15 |
| List option clicks | 0 | 0 | 3 | 5 | 4 | 3 | 0 | 15 |
| Field entries (plain fills) | 0 | 0 | 5 | 5 | 4 | 5 | 0 | 19 |
| Tab presses after fills | 0 | 0 | 5 | 5 | 4 | 5 | 0 | 19 |
| Corrections (second entry to the same field) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Trash clicks (Components grid) | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 1 |
| Components taken out | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 1 |
| Top-toolbar Delete clicks | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Undo clicks | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Designer Saves executed | 0 | 0 | 3 | 3 | 3 | 3 | 0 | 12 |
| Prompts (dialogs) | 1 | 0 | 1 | 0 | 0 | 0 | 0 | 2 |
| Server-event errors | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 1 |
| Console-count rises | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 1 |
| Recovery (fresh untargeted) snapshots after Ref errors | 0 | 0 | 1 | 1 | 1 | 0 | 3 | 6 |
| Parallel browser-action blocks | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 1 |
| Form closes | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 1 |
| Form reopens | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 1 |
| Re-logins; session-expiry events | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Drags | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Form-property changes; Caption edits; event edits | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |

Prompts with verbatim texts and answers:
1. Attempt 1 (T1): "The server event processing returned an error. If this persists, contact your system administrator." (Error; OK only). Answered OK once.
2. T2 (delete confirmation): "Are you sure you want to delete FX_PictureStatic and all the components it contains?" (OK and Cancel). Answered OK once.
3. T6 close: no prompt appeared; nothing to answer.

Designer Saves with responses (toast text, from snapshot text unless marked): T2 Save 1 "Form [FX_ItemsTile] and global object(s) were saved." (Save disabled afterwards); T2 Save 2 same toast; T2 Save 3 same toast (greyed icon in t2-06). T3 Save A, Save B, Save C each the same toast. T4 Save A, Save B, Save C each the same toast (Save C also shown in `t4-04`). T5 Save A, Save B, Save C each the same toast (Save C also shown in `t5-04`). T6: none.

Reconciliation notes (unreconciled items stated explicitly):
- The T4 pre-compaction actions were reconstructed from the working summary, which listed: a tab list, a pre-flight snapshot, the Toolbox click, the placement click, the Name double-click, a targeted snapshot, the fill and the Tab. Any other pre-compaction call not in that summary is **unreconciled**; the table counts only what is recorded.
- Tool-written page snapshot files (`evidence\playwright\page-…yml`) and console logs (`console-…log`), and the auto-snapshots returned in click outputs, are **not** counted as worker-requested snapshots. They are not read by the worker and are not individually listed.
- Several fill and Tab outputs did not print the console line; the count after each was taken from the next printed snapshot (recorded in the relevant task).
- The worker's counts are self-recorded. No harness-level action inventory was available to the worker, so the counts cannot be independently reconciled against the harness.
- The T5 single-click count was corrected from 13 to 14 in this task (see the T5 audit correction).

#### Worker-written file inventory (cumulative)

- `experiments/EXP-116-hello-world-part-8-phase-1b-fx-itemstile-components.md` (created in attempt 1; updated in cycles 2, 3, 4, 5, 6 and 7).
- `evidence/EXP-116/` screenshots (24 files, all written by the worker through the browser screenshot tool):
  - attempt 1: `t1-02-console-rise-after-select-picturestatic.png`, `t1-03-after-server-event-error-ok.png`
  - cycle 2 (T1 re-run; `t2-` prefix from the task header): `t2-01-gate-tree-canvas-form-properties.png`, `t2-02-gate-tree-expanded-layout-size-before-selection.png`
  - T2: `t2-03-stepA-trash-confirmation-names-FX_PictureStatic.png`, `t2-04-stepA-tree-after-save-only-FX_PictureEdit.png`, `t2-05-stepC-StaticPicture-values-before-save.png`, `t2-06-after-stepC-save-clean-canvas.png`
  - T3: `t3-03-stepB-StaticItem-values-before-save.png`, `t3-04-stepC-StaticItem-values-before-save.png`, `t3-05-final-canvas-after-stepC-save.png`
  - T4: `t4-01-placement-StaticItemDescription-tree.png`, `t4-02-stepB-values-before-save.png`, `t4-03-stepC-values-before-save.png`, `t4-04-final-canvas-after-stepC-save.png`
  - T5: `t5-01-placement-StaticCost-tree.png`, `t5-02-stepB-StaticCost-values-before-save.png`, `t5-03-stepC-StaticCost-values-before-save.png`, `t5-04-final-canvas-after-stepC-save.png`
  - T6: `t6-01-reopened-canvas-full-tree-form-properties.png`, `t6-02-StaticPicture-properties-readback.png`, `t6-03-StaticItem-properties-readback.png`, `t6-04-StaticItemDescription-properties-readback.png`, `t6-05-StaticCost-properties-readback.png`
- Tool-written, not read by the worker: `evidence\playwright\` page snapshot files and console logs for all tasks (including the tool-written console log entries reported by the tab-list events in T6; not read by the worker, filenames not re-verified here). Not counted individually.
- No other file was written or changed by the worker in this experiment.

#### Cleanup inventory (as of the end of T6)

- Form `FX_ItemsTile` (User scope), open in the Designer, clean. Created by EXP-115.
- Components under Pane (00), as read back in T6:
  - **StaticPicture** (Static; Binding object.FX_Picture; Image and Text ImageOnly; No Colon True; Location 0; 0; Size 8; 4; Caption C(FX_PictureStatic) generated and unchanged; Justification blank; Theme Class blank).
  - **StaticItem** (Static; Theme Class FX_Header; Justification Left; Binding object.FX_Item; No Colon True; Location 0; 9; Size 27; 1.5).
  - **StaticItemDescription** (Static; Justification Left; Binding object.FX_Description; No Colon True; Location 2; 9; Size 20; 1.5; Theme Class blank).
  - **StaticCost** (Static; Justification Right; Binding object.FX_Cost; No Colon True; Location 2; 30; Size 8; 1.5; Theme Class blank).
- Removed in T2: FX_PictureStatic (generated Static).
- Not changed: FX_CustomerPortal, FX_FlexProbe01, the FX_Items IDO and its properties, FX_Header and all other global objects; no string, image, variable, theme or class created.
- No cleanup action was performed in T6 (the operator decides any cleanup).

#### Final state (end of T6)

- Designer tab 0: `FX_ItemsTile` open, User scope (`ScopeType: User`), clean (Save and Undo disabled). Pane (00) holds exactly StaticPicture, StaticItem, StaticItemDescription and StaticCost. StaticCost is selected in the Components grid; the Details panel is expanded on the Components tab; the Properties panel shows the Component tab. No dialog, menu, list or editor is open. No save toast is visible. Console: 2 errors, 0 warnings.
- Form Size: 40; 4 (read in T6).
- Portal tab 1: not selected, not touched.
- Session: usable throughout T6; no re-login.

#### Findings (observed only)

1. The Data Source column for StaticItemDescription (T4) and StaticCost (T5) was blank in the tree after their Saves, and showed object.FX_Description and object.FX_Cost after the same-session close and reopen. The cause is not established.
2. The Properties header lagged the component name after placement in T3, T4 and T5, and corrected later (EXP-084 behaviour).
3. The Properties panel's tab-panel ref changed after row selections in T6; a targeted snapshot against the earlier ref returned Ref not found. Tree-row refs from a previous untargeted snapshot were not valid after a targeted snapshot. Both observed in T6.
4. StaticPicture's Caption C(FX_PictureStatic) (generated) is still visible on the canvas; the canvas shows a broken-image icon in the picture area, with no picture visible in the Designer.
5. Image and Text is Inherit on StaticItem, StaticItemDescription and StaticCost (their defaults); the plan did not set it for these components. Justification is blank on StaticPicture (never set).
6. The Mongoose Location summary reads Top; Left (confirmed in every task).

#### Remaining operator decisions

1. Confirm the Location reading (Left then Top, displayed as Top; Left). The readback matches it for all four Statics.
2. Confirm the T2 delete-confirmation wording as an accepted reading (the generic "and all the components it contains").
3. Decide whether the same-session Data Source blank (Finding 1) needs a cross-session check; the T6 readback is same-session only.
4. Decide whether the generated caption C(FX_PictureStatic) on StaticPicture stays (Captions are out of scope; left unchanged).
5. The attempt-1 server-event error and console rise remain unresolved; the operator should use the tool-written log if needed.
6. Decide the cleanup of FX_ItemsTile and its four components, if any.
7. Final disposition of EXP-116. This worker does not declare unconditional acceptance; the evidence and the procedural qualifications above (T5 parallel block, T3 placement screenshot gap, attempt-1 deviation, unreconciled pre-compaction items) are for the operator's audit.

## Outcome (operator)

Pending operator disposition. T1 (re-run), T2, T3, T4, T5 and T6 are complete as executed. The T6 readback is same-session only, and EXP-116 is not declared accepted by this worker. Open items: see "Remaining operator decisions" in the T6 section. Earlier paragraph (T3, T4 and T5 status) follows: T3, T4 and T5 are complete as executed (see "T3 StaticItem (cycle 4, bounded to T3)", "T4 StaticItemDescription (cycle 5, bounded to T4)" and "T5 StaticCost (cycle 6, bounded to T5)").

Earlier paragraph, retained for the record: T3 is complete as executed (see "T3 StaticItem (cycle 4, bounded to T3)" and "T4 StaticItemDescription (cycle 5, bounded to T4)"). T3 acceptance evidence: placement and name are supported by the tree text and the post-Save canvas; the property values are supported by the t3-03 and t3-04 screenshots and the snapshot text; the three Saves are supported by their toasts (text only). Limitations: no placement screenshot; the Location reading "9; 0" is a judgment call (Left 9, Top 0); the Location, Size and No Colon rows are verified by text rather than by a screenshot. AC-2 (T3 part) is supported with these limitations. AC-2 (T4 part) is supported by t4-04 (viewed) and by snapshot text for the rest, with the limitations in the T4 section. AC-1 remains supported. AC-3 and AC-5 are for T6. T5 and T6 have not started.

## Findings (observed only)

1. Selecting FX_PictureStatic in the Components grid switched the Properties header, but its property grid rendered empty. The same action raised the server-event error and a console-count rise 2 → 4. This happened once, on the first component selection. Cause unresolved.
2. After the OK on the server-event alert, the console count stayed at 4 and the alert closed. The property grid remained empty in the screenshot.

## Outcome (operator, 2026-10-18)

Accepted (observed), with qualifications. **Hello World Part 8 Phase 1 is complete: the User-scope Tile Form FX_ItemsTile (Size 40; 4) holds exactly StaticPicture (Static, object.FX_Picture, Image and Text ImageOnly, No Colon True, Location 0; 0, Size 8; 4), StaticItem (Theme Class FX_Header, Justification Left, Binding Type Property, object.FX_Item, Location 0; 9, Size 27; 1.5, No Colon True), StaticItemDescription (Left, object.FX_Description, 2; 9, 20; 1.5, No Colon True) and StaticCost (Right, object.FX_Cost, 2; 30, 8; 1.5, No Colon True), read back after an ordinary close and reopen.** Run R-20261018-224848-LBPN (7 worker tasks; paused twice for the operator).

- Changed, for later cleanup (User-scope Form FX_ItemsTile): FX_PictureStatic deleted through the Components-grid trash after the confirmation "Are you sure you want to delete FX_PictureStatic and all the components it contains?" (OK once; the "contains" wording is generic, it had no children); FX_PictureEdit changed to the Static StaticPicture; three new Statics placed and set. Twelve Designer Saves (three per step task), each with the standard toast. No Caption, string, event or global object; no Form-property change; no Regenerate, no unload, no Delete Form Definition.
- First attempt of T1 (operator ruling): the server-event error and console rise 2 -> 4 at the first component selection came from a signed-out session. The tool-written log `evidence/playwright/console-2026-10-18T14-49-07-394Z.log` (read by the operator assistant) shows `/WSWebClient/Designer/Form/GenerateServerEvent` redirected to the SSO sign-in (`wsfed?wa=wsignin1.0`) and blocked by CORS; the portal tab showed "Logout Successful". Nothing was changed. The operator signed in again, reloaded the Designer and opened FX_ItemsTile; the T1 gate was re-run read-only with a fresh baseline (console 2, no rise). Harness task labels are therefore shifted by one (plan T2-T6 ran as harness T3-T7).
- Screenshots viewed by the operator assistant: `t6-01-reopened-canvas-full-tree-form-properties` (after reopen: FX_ItemsTile, Form Type Tile, Unit Char, Size 40; 4; Pane (00) > StaticPicture object.FX_Picture, StaticItem object.FX_Item, StaticItemDescription object.FX_Description, StaticCost object.FX_Cost, all Static; canvas with a picture placeholder on the left, "Item" in header style top right, "Description" and "Cost" below; User scope; Save disabled); `t6-03-StaticItem-properties-readback` (StaticItem: Theme Class FX_Header, Justification Left, Binding Type Property, Binding object.FX_Item).
- Console (operator assistant, tool-written logs after the re-login): only the baseline "unload" permissions-policy errors.
- Findings (observed):
  1. The Layout Location summary reads Top; Left (StaticItem "0; 9" is Top 0, Left 9). The brief's "9; 0" was meant as Left 9, Top 0, which the worker inferred correctly; future briefs give Location as Top; Left.
  2. A new Static's defaults: Justification Right, Binding Type None, Binding blank, Size 20; 1, No Colon False, Location at the click point. Setting Binding Type Property defaults Binding to `object._ItemId` before the planned property is chosen.
  3. The Components-grid trash confirmation reads "Are you sure you want to delete <name> and all the components it contains?".
  4. StaticPicture kept the generated Caption `C(FX_PictureStatic)`, which names the deleted label; the Designer canvas shows it as alt text beside a broken-image placeholder. With ImageOnly it is expected not to show at runtime (EXP-084); to be checked when the tile first renders.
  5. The Data Source column for newly bound Statics stayed blank in the same session after their Saves and showed the binding after reopen (stale grid labels, as in EXP-084).
  6. A signed-out session surfaces in the Designer only as the server-event error at the next server call (the page itself stays usable-looking).
- Qualifications accepted by the operator: no StaticItem placement screenshot (snapshot text instead); Location, Size, No Colon and Image and Text verified from Properties text below the visible panel; several Save toasts read from page text; one parallel Name fill and Tab in the StaticCost task (ran in order, no state effect); two Ref-not-found recoveries; same-session close and reopen only.
- Confinement (git status): only `evidence/EXP-116/` and this record were written by the run in the repository.
- Cleanup inventory: Form FX_ItemsTile (User scope) with StaticPicture, StaticItem, StaticItemDescription and StaticCost.
- Next: Part 8 Phase 2 on FX_CustomerPortal (03:25-04:47): GridItems Tile Form FX_ItemsTile and the adjacent tile setting "Always"; event handler SignInBtn (Collection Refresh of the secondary collection) as ButtonSignIn2's Primary Event; the tutorial then saves and checks at runtime, which needs the Regenerate decision.
