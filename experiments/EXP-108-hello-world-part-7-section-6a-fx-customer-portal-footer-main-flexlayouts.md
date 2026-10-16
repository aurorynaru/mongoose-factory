# EXP-108 - Hello World Part 7 Section 6a: FlexLayoutFooter and FlexLayoutMain in FX_CustomerPortal

Status: **T1-T4 complete (observed, same-session UI evidence).** T1 gate; T2 FlexLayoutFooter placed, named, themed FX_BlueBackground and saved once; T3 FlexLayoutMain placed, named, saved once, attributes read read-only and dialog cancelled; T4 one ordinary close and reopen (no prompt), readback of both FlexLayouts, and the final audit (section "Final acceptance audit (T4)"). Both FlexLayouts remain in the Form (cleanup not performed). Regenerate Form and EXP-109 (FlexLayoutMain's regions) were not performed.
Scope: User-scope Form FX_CustomerPortal only. Environment: Mongoose demo tenant, config group G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT.
Brief basis: `docs/mongoose/transcripts/hello-world-pt7.md` Section 6 steps 1-3 (lines 184-189); transcript Section 6 table row (line 292) cites 08:51-09:03 for the Blue Background class.
Evidence directory: `evidence/EXP-108/`

## Purpose

Follow Part 7 Section 6 steps 1-3 on FX_CustomerPortal:

- T2: one FlexLayout in the root footer region (Region02: footer), Name FlexLayoutFooter, Theme Class FX_BlueBackground, one Designer Save.
- T3: one FlexLayout in the root main region (Region01: main), Name FlexLayoutMain, one Designer Save; read FlexLayoutMain's default attributes read-only (input for EXP-109) and leave the dialog with Cancel.
- T4: one ordinary close and reopen; verify both new FlexLayouts; documentation-only final audit.

Out of scope for this record: Section 6 step 4 and later (FlexLayoutMain's six regions, EXP-109), Regenerate Form, the deferred StaticCustID binding (Part 8), menu buttons and pages.

## Acceptance checks

| ID | Check | Status after T4 (summary; evidence in "Final acceptance audit (T4)") |
| --- | --- | --- |
| AC-1 | Sources reviewed; session usable; User scope; FX_CustomerPortal open and clean with header components and empty main and footer regions; main and footer located on the canvas | **Supported (observed)**: gates at T1, T2, T3 and T4; evidence `t1-01`, `t1-02`, `t2-00`, `t3-00`, `t4-01`. |
| AC-2 | FlexLayoutFooter placed in Region02: footer by one Toolbox selection and one canvas click; Name FlexLayoutFooter; Theme Class FX_BlueBackground; at most one correction per field; one Save with response | **Supported (observed), with a visual limitation**: placement, Name, Theme Class (0 corrections), one Save with verbatim toast; reopened Properties read `FlexLayoutFooter`, `FlexLayout`, `FX_BlueBackground`. The blue footer fill is **visible after reopen** (`t4-03`) but was not visible in the T2 post-Save frame (`t2-02`); its colour is matched to the header strip by eye only (D4, partially resolved). |
| AC-3 | FlexLayoutMain placed in Region01: main, one Save; defaults read; dialog left with Cancel | **Supported (observed)**: one Toolbox selection and one canvas click; Flex Attributes Target main; Name FlexLayoutMain (0 corrections); one Save with verbatim toast; attributes read read-only (values in the T3 section; region values from snapshot text); dialog left with Cancel; Save disabled afterwards. The FlexLayoutMain box is not visibly distinct on the canvas (unresolved). |
| AC-4 | Readback after ordinary close and reopen | **Supported (same session only)**: one close (no prompt), one reopen (recent-forms entry); reopened tree shows FlexLayoutMain under Region01: main and FlexLayoutFooter under Region02: footer, header components unchanged; names and Theme Class read back; Form open, Save disabled, no dialog. Evidence `t4-01`, `t4-02`, `t4-03` and snapshot text. No cross-session or database-level claim. |
| AC-5 | No other change; no global object; no Regenerate; no drag; Undo rules; no runtime action; no unload; no checkout | **Supported with a stated limit**: no other component, region or Form change observed (tree before and after the T4 close/reopen identical); Undo 0; drag 0; Regenerate 0; no runtime action, unload or checkout; User scope throughout. Global objects: no worker action targeted one; the generic Save toast does not establish whether any global object was written (not inferred). |
| AC-6 | Final audit written in T4 | **Written** in this record (section "Final acceptance audit (T4)"): AC evidence, cumulative counts T1-T4, file inventory, cleanup inventory, final state, qualifications. |

## Sources read

### T1

Read before any browser action:

- `AGENTS.md` (repository file, full).
- `docs/mongoose/transcripts/hello-world-pt7.md` lines 184-191 (Section 6 steps 1-5 and header) and lines 286-295 (table; line 292 row "Header/Footer theme class | Blue Background | 05:20-05:34; 08:51-09:03"). The transcript has no per-line timestamps in 08:51-09:16; the timestamps are section headers and table cells. A content search for the timestamp range returned only lines 165, 184 and 292; line 165 (Section 5 header) was not read.
- `recipes/components/add-component-from-toolbox.md` (full).
- `recipes/session/session-expiry-and-stale-designer.md` (full).
- Outcome (operator, 2026-10-16) sections only: `experiments/EXP-105-hello-world-part-7-section-4a-fx-customer-portal-header-flexlayout.md` lines 383-403 and `experiments/EXP-107-hello-world-part-7-section-5-fx-customer-portal-user-statics.md` lines 868-887.
- Existence checks (file names only): Glob `experiments/EXP-10[57]*.md`; Grep for Outcome headings in those two records; Glob for `EXP-108` paths (none existed before T1).

### T2

Re-read at the start of T2 (bounded, per the T2 brief):

- `AGENTS.md` lines 1-30 only. The full file was read in T1. Deviation: the brief asks for the repository file at the start of every task; only its first 30 lines were re-read in T2.
- `hello-world-pt7.md` lines 184-189 (Section 6 steps 1-4).
- `recipes/components/add-component-from-toolbox.md` lines 1-45.
- `recipes/session/session-expiry-and-stale-designer.md` lines 1-30.
- EXP-105 Outcome lines 383-403 and EXP-107 Outcome lines 868-887 (same ranges as T1).

Not re-read in T2: `hello-world-pt7.md` table lines 286-295 and the transcript timestamp search. They were read in T1 and remain in context. Deviation disclosed: the T2 brief lists transcript lines 08:51-09:16, and the timestamp-bearing material in that range was not re-read in T2.

Carried-over facts from the two Outcome sections (not independently re-verified in T1 or T2):

- EXP-105: FlexLayoutHeader (Theme Class FX_BlueBackground) with regions header and user; Edit FlexLayout Attributes is a canvas adorner with DOM id `flexlayouteditadorner-...`, identified by tooltip; Properties header lagged after rename, correct after reopen; Save toast text "Form [FX_CustomerPortal] and global object(s) were saved."
- EXP-107: StaticCustIcon and StaticCustID in FlexLayoutHeader > Region01: user; Bitmap File Name is an ExtJS combobox (open list, click option, Tab); a Static placed into the same Flex region lands next to the first; Static placed in a user region defaults Justification Right, Size 20; session expiry in EXP-107 T1 needed a manual operator sign-in (the procedure's Sign in click timed out).

Note on "Preserve T1 qualification D1": the T1 record contained no item labelled D1. The only D1 in the source records is EXP-105's operator ruling (toast wording, resolved; finding 5), which this T2 Save matches (see T2 section). No other qualification was carried.

### T3

Re-read at the start of T3:

- `AGENTS.md` in full (240 lines). This closes the T2 partial re-read (D2 below).
- `hello-world-pt7.md` lines 184-189 and lines 286-295 (table). Line 189 is step 4's first line and sits inside the authorised 184-189 range; no step 4 action was taken. The transcript has no per-line timestamps in 08:51-09:16 (timestamps are section headers and table cells), so no separate timestamp search was repeated.
- `recipes/components/add-component-from-toolbox.md` (full).
- `recipes/session/session-expiry-and-stale-designer.md` (full).
- EXP-105 Outcome lines 383-403 and EXP-107 Outcome lines 868-887 (same ranges as before).
- This record, read before editing (not a source).

Qualifications carried from the controller (recorded, not changed):

- **D1** (T1 source-range overread): preserved as recorded. The T1 reads are listed under "### T1" above.
- **D2** (T2 incomplete source re-reading): preserved. T3 re-read `AGENTS.md` in full; T2 had re-read only lines 1-30.
- **D3** (T2 missing separate placement screenshot): preserved. T3 also has no screenshot between the placement click and the Name change. Its placement evidence is the snapshot (Flex Attributes Target main) and `t3-02`, which was taken after the Name change and before Save.
- **D4** (unconfirmed blue footer appearance): preserved. No T3 frame shows a clear blue fill for the footer strip (see the T3 canvas notes).
- Controller's T2 `browser_type` flag: corresponds to the single plain Name fill of FlexLayoutFooter. T2 made one `browser_type` call, and it was that fill. The Theme Class was selected by click, not typed.

### T4

Read at the start of T4, before any browser action:

- `AGENTS.md` in full (240 lines).
- `hello-world-pt7.md` lines 184-189 (Section 6 steps 1-4 header and step 4's first line; no step 4 action taken) and lines 286-295 (table).
- `recipes/components/add-component-from-toolbox.md` (full).
- `recipes/session/session-expiry-and-stale-designer.md` (full).
- EXP-105 Outcome lines 383-403 and EXP-107 Outcome lines 868-887.

Deviation (disclosed, D5): this record was read after the T4 browser work had begun (after the Form close, reopen and the readback selections, and before the audit was written). The T4 brief asks for the record to be reviewed before interaction. The reading was not used to change any browser action.

Qualifications carried into T4 (preserved, not changed):

- **D1** (T1 source-range overread): preserved; see "### T1".
- **D2** (T2 incomplete source re-reading): preserved; see "### T2". T3 and T4 re-read `AGENTS.md` in full.
- **D3** (T2 missing separate placement screenshot): preserved. The T2 placement evidence is snapshot text plus `t2-02` (after the Name and Save).
- **D4** (blue footer fill not yet confirmed): carried into T4 and examined at the T4 reopen; see the T4 canvas findings. Partially resolved, not pixel-verified.
- **T3 observation**: tutorial line 189 exposed the first line of Section 6 step 4 ("Open its attributes ...") in the authorised 184-189 range. No step 4 action was taken in T1-T4.
- **browser_type flags**: the T2 and T3 `browser_type` calls were the plain Name fills authorised by the Name procedure (double-click the value cell, one plain fill, Tab), on the Name editor textbox. T2 and T3 each made exactly one such call. Theme Class was selected by option click, not typed.

## Gate (T1, observed)

### Browser tabs

Tab list performed before the first tab selection:

- Tab 0: Mongoose Web Client (Infor OS Portal page, `mingle-portal.se1.inforcloudsuite.com`, title "Mongoose").
- Tab 1: Designer, title "Infor Mongoose Application Development Framework (G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT)", URL `mode=designer` with `MGForm=FX_CustomerPortal`.

### Web Client (tab 0), read-only

- Snapshot after selecting tab 0 showed the Infor OS Portal top bar, a `main` containing an iframe with the Mongoose app (Explorer region present), and the Smart Panel. No "Session Expired" modal, no "Logout Successful" card and no Infor sign-in form was visible at the top level. Depth was limited to 4, so the iframe content was not inspected further.
- No action was taken in tab 0.

### Designer (tab 1)

- Form tab shows FX_CustomerPortal (tab heading, closable). Canvas title "FX_CustomerPortal".
- Status bar: `ScopeType: User`. (The scope name is masked in the snapshot; it is not repeated here.)
- Toolbar: Save **disabled**; Regenerate Form disabled; Undo **disabled**; Redo disabled. The form is clean.
- No dialog, menu or prompt open. The top menus (Form, Edit, View, Help) are closed.
- Properties panel: header shows `StaticCustID (Static)`. This was the component already active from the operator's previous session. T1 did not select it or any other component.
- Session: the Designer responded normally to tab selection and snapshots, so the session was usable. No session expiry, sign-in or server-event error was seen.

### Components tree (view only; expanded in the Components grid)

```
Pane (00)
  flexlayoutPane_FX_CustomerPortal (FlexLayout)
    Region00: header
      FlexLayoutHeader (FlexLayout; Container flexlayoutPane_FX_CustomerPortal)
        Region00: header
          StaticHeader (Static; Container FlexLayoutHeader)
        Region01: user
          StaticCustIcon (Static; Container FlexLayoutHeader)
          StaticCustID (Static; Container FlexLayoutHeader)
    Region01: main        (no child rows)
    Region02: footer      (no child rows)
```

- The header components match the brief: FlexLayoutHeader with StaticHeader, StaticCustIcon and StaticCustID. Region01: main and Region02: footer have no children.
- The accessibility snapshot exposes no parent column for Region rows. Their placement as direct children of the root FlexLayout is inferred from the screenshot indentation (`t1-01`): Region01: main sits at the same level as the root region rows, one level above `Region01: user`. This is an interpretation, not a parent-column read.

### Canvas

- Screenshot `t1-01` (before scrolling): the root header strip is a blue band at the top of the canvas, with "Customer Portal" text at the left of a dotted divider and, at the right, the StaticCustIcon picture and the empty StaticCustID box. Below the header strip's lower edge the grid is empty; that empty area is the **main region** (large middle area between the dotted dividers).
- Screenshot `t1-02` (after a canvas view scroll of the mouse wheel, deltaY 300, with the mouse hovered over the canvas): the header strip is scrolled out of view; the main area is empty; a **lower dotted divider** at about y 563 (viewport) marks the bottom of the main region; the narrow strip between that divider and the canvas bottom edge (about y 563-598) is empty and is the **footer region**. Its full height is not confirmed: the canvas viewport ends at about y 598, and the vertical scrollbar appeared to be near its bottom, so the footer strip may be only partly visible.

### Gate result (T1)

- AC-1 supported by observation: session usable; User scope; FX_CustomerPortal open and clean (Save disabled, no dialog); header components present; Region01: main and Region02: footer empty; both regions located on the canvas as described above.
- Limitation: the footer strip's full extent and the parent level of Region rows are inferred from the view, not read from a parent column.

## T2 - FlexLayoutFooter (observed)

### Gate at T2 start

- Tab list performed first (tab 0 Web Client, tab 1 Designer). Tab 1 selected once; fresh untargeted snapshot taken.
- Designer: FX_CustomerPortal active (tab heading), User scope (status bar), Save and Undo disabled, no dialog or menu open. Components tree as in the T1 gate, with header components unchanged and Region01: main and Region02: footer empty.
- Pre-placement screenshot `t2-00-pre-placement-canvas-footer-view.png`: canvas scrolled as in T1; lower dotted divider at about y 563; footer strip below it to the canvas edge at about y 598. Placement point chosen: (700, 582), away from the divider and the canvas edge, with no component or adorner there.
- Web Client tab (tab 0) not acted on in T2.

### Placement

1. Toolbox: the FlexLayout row (reference from the T2 gate snapshot, `e141`) was clicked once. Toolbox selection 1.
2. Canvas: one coordinate click at (700, 582) inside the footer strip. Placement coordinate click 1.
3. Snapshot after placement, Components tree: a new row `flexLayout1_USER` (Type FlexLayout, Container `flexlayoutPane_FX_CustomerPortal`, Pane 0) listed after `Region02: footer`. Its auto region `Region00: UNKNOWN0` is shown beneath it.
4. Properties, Flex Attributes row: `Type: HorizontalBox Regions: - 00: UNKNOWN0 Index: 2 Target: footer`. This identifies the placement target as the footer region. The placement was **not** misplaced, so no Undo was used.

Parentage observed: the tree and the Flex Attributes Target both place the new FlexLayout in Region02: footer. The screenshot `t2-02` shows `FlexLayoutFooter` indented one level under `Region02: footer` (which has a collapse chevron), with `Region01: main` empty above it. Limitation: the Components grid has no parent column, so "direct child" rests on this indentation plus the Flex Attributes Target.

### Name

1. Double-click on the Properties Name value (reference from snapshot 2, `e1500`). Reference click.
2. The Name editor was active (textbox showing `flexLayout1_USER`) in snapshot 3.
3. One plain fill with `FlexLayoutFooter`, then Tab. Name entries 1; Name Tab 1.
4. Snapshot 4: Components row `FlexLayoutFooter`; Properties Name value `FlexLayoutFooter`. The Properties header still read `flexLayout1_USER (FlexLayout)`, the header lag recorded in EXP-105 finding 2. It was not reselected in T2 (not needed for the Name result).
- Name corrections: 0.

### Theme Class

1. Opened the Appearance > Theme Class combobox list by clicking its trigger (reference from snapshot 4, `e1561`). List opens 1.
2. Snapshot 5: the rendered list contained **one** class: `FX_BlueBackground`. Recorded list: [FX_BlueBackground].
3. Clicked `FX_BlueBackground` (reference from snapshot 5, `e2081`). Reference click.
4. Tab to commit. Tab 2 (Name Tab was the first).
5. Snapshot 6: Properties Theme Class value `FX_BlueBackground`.
- Theme Class entries 1; corrections 0.

### Save

1. Save clicked once (reference from snapshot 6, `e1166`). Designer Save 1.
2. Response, verbatim toast (`t2-02`): heading "Save", text "Form [FX_CustomerPortal] and global object(s) were saved." This is the same toast EXP-105 finding 5 records.
3. Snapshot 7 after Save: Save **disabled**, Undo **disabled** (clean). No error. No server-event error. No retry.
4. Screenshot `t2-02-after-save-footer-canvas-and-response.png`: shows the toast; the Components tree with `FlexLayoutFooter` under `Region02: footer` and `Region01: main` empty; the Properties Name `FlexLayoutFooter`, Type FlexLayout and Theme Class `FX_BlueBackgroun…` (cut off in the panel at this width; the full value `FX_BlueBackground` is confirmed by snapshot 7). The canvas strip below the lower divider shows the selected FlexLayout's adorner bar at about y 577.
- **Not confirmed**: the expected blue footer strip is not clearly visible in `t2-02`. At this scroll position the strip below the lower divider does not show a blue fill that I can confirm. Possible causes not tested: the new FlexLayout's own height is very small at this point, or the canvas redraw is lagging (EXP-107 finding 3 noted an icon that appeared only after a reopen). Left unresolved; to be checked in T4's readback canvas.

### T2 action counts (this task)

| Action | Count |
| --- | --- |
| Tab list | 1 |
| Tab select | 1 (tab 1 only) |
| Snapshot, untargeted (inline) | 7 (gate; after placement; after Name double-click; after Name Tab; after Theme Class trigger; after option and Tab; after Save) |
| Snapshot, fresh-snapshot recovery | 0 (no Ref-not-found) |
| Screenshot | 2 (`t2-00`, `t2-02`) |
| Reference clicks | 5 (Toolbox FlexLayout row; Name double-click; Theme Class trigger; Theme Class option; Save) |
| Coordinate clicks (placement) | 1 (700, 582) |
| Toolbox selections | 1 |
| Canvas placements | 1 (`flexLayout1_USER` renamed FlexLayoutFooter) |
| Undo | 0 |
| Name entries (fill) | 1; corrections 0 |
| Name Tab presses | 1 |
| Theme Class entries (selection) | 1; corrections 0 |
| Theme Class Tab presses | 1 |
| Theme Class list opens | 1 (classes listed: FX_BlueBackground only) |
| Dialog opens | 0 |
| Designer Saves | 1 (toast recorded above) |
| Form close / reopen | 0 / 0 |
| Prompts | 0 |
| Server-event errors | 0 |
| Re-logins | 0 |
| Drag | 0 |
| Regenerate Form | 0 |
| Browser JavaScript, console or network | 0 |

Deviation (disclosed): the brief asks for one untargeted snapshot per step. T2 used seven, because every edit changed the references and each click needed refs from the most recent snapshot. No recovery snapshot was needed.

Non-browser actions in T2: 6 repository reads (AGENTS.md lines 1-30; pt7 lines 184-189; add-component recipe lines 1-45; session recipe lines 1-30; EXP-105 and EXP-107 Outcome ranges) and 2 image reads (`t2-00`, `t2-02`). No searches in T2. The T2 record was then updated.

### T2 observations (observed only)

- The Properties header lag after the rename persisted through the Save (not reselected).
- The Save toast text matches the EXP-105 record.
- The new FlexLayout's auto region is named `UNKNOWN0` (EXP-105 finding 1 pattern); no region was added by the worker.
- Edit FlexLayout Attributes, dialogs and the Regions + button were not used in T2.

## T3 - FlexLayoutMain (observed)

### Gate at T3 start

- Tab list first (tab 0 Web Client, tab 1 Designer); tab 1 selected once; untargeted snapshot taken.
- FX_CustomerPortal active; User scope (status bar); Save and Undo disabled; no dialog or menu open.
- Components: header components unchanged; FlexLayoutFooter under Region02: footer; Region01: main had no child rows.
- Pre-placement screenshot `t3-00-pre-placement-canvas-main-view.png`: the canvas was in the same scrolled position as T2. The main region is the empty grid above the lower dotted divider (about y 563). The FlexLayoutFooter selection bar is at the bottom of the frame.
- Placement point: (700, 300), inside the main region, away from the dividers, the canvas edges and any adorner icon.
- Web Client tab not acted on.

### Placement

1. Toolbox FlexLayout row (reference `e141`, from the gate snapshot). Toolbox selection 1.
2. One coordinate click at (700, 300) in the main region. Placement coordinate click 1.
3. Snapshot after placement: new row `flexLayout1_USER` (FlexLayout; Container `flexlayoutPane_FX_CustomerPortal`; Pane 0), listed after the `Region01: main` row, with auto region `Region00: UNKNOWN0`. Flex Attributes: `Type: HorizontalBox Regions: - 00: UNKNOWN0 Index: 1 Target: main`. The placement was correct, so no Undo was used.
- Parentage: Flex Attributes Target is main, and the row sits in the Region01: main block. Screenshot `t3-02` (after the Name change, before Save) shows `FlexLayoutMain` indented under `Region01: main`, with `Region00: UNKNOWN0` beneath it. Limitation: no parent column, as in T2.

### Name

1. Double-click on the Name value (reference `e1245`, from the placement snapshot). Reference click.
2. Snapshot: the Name editor was active (textbox `e1635`, value `flexLayout1_USER`).
3. One plain fill `FlexLayoutMain` (one `browser_type` call), then Tab. Name entries 1; Name Tab 1; corrections 0.
4. Snapshot: Components row `FlexLayoutMain`; Properties Name value `FlexLayoutMain`. The Properties header still read `flexLayout1_USER (FlexLayout)`, the lag recorded in EXP-105 and T2. Not reselected.
- Theme Class: not set. The Properties Theme Class value stayed empty, and no list was opened (the brief sets none for FlexLayoutMain).

### Save (one Designer Save)

1. Save clicked once (reference `e984`, from the Name snapshot). Designer Save 1.
2. Response, verbatim toast (`t3-03`): heading "Save", text "Form [FX_CustomerPortal] and global object(s) were saved."
3. Snapshot after Save: Save **disabled**; Undo **disabled**. No error; no retry.
4. Canvas after Save (`t3-03`, `t3-04`): the canvas had scrolled to the top, so the header strip is visible. Under the header, at the top of the main region, the FlexLayoutMain adorner bar is visible at about y 185. The FlexLayoutMain box is not visibly distinct from the empty grid. The footer is not in frame.

### Attributes dialog (read-only)

1. Adorner identification: a hover on reference `e998` (an adorner icon in the post-Save snapshot) resolved to DOM id `flexlayouteditadorner-1906`. `t3-04` shows the tooltip "Edit FlexLayout Attributes" on the hovered icon. Identified by tooltip and DOM id, not by position. Hover 1. A `find` for the tooltip text returned no match and was not used as a click source (find 1).
2. One reference click on `e998`. Dialog open 1, titled "FlexLayout".
3. Values read (snapshot and `t3-05`; nothing changed):
   - Design: Type HorizontalBox; Auto Size False; Region Index 1; Margin empty (no value shown).
   - Regions grid: 1 region (Index 0, ID UNKNOWN0, Length 1 Flex). Region count 1.
   - Region 0, read after one row selection (step 4): ID UNKNOWN0; Length 1; Unit Flex; Orientation Horizontal; Alignment Top; Pack Start; Minimum Length empty; Maximum Length empty; Default Margin empty. The region's Appearance and Behavior groups were present and were neither expanded nor recorded.
   - Preview checkbox unchecked as displayed. The dialog's Undo and Redo were disabled.
4. One reference click on the region row `e1926` (UNKNOWN0) to show its properties. This selected the row only: no list was opened and no value was changed.
5. Cancel once (reference `e1981`). The dialog closed. Dialog closed by Cancel 1; OK 0.
6. Snapshot after Cancel: Save **disabled**; Undo **disabled**. The Properties panel switched to the Form tab (no component selected). The Components tree had collapsed to `Pane (00)`.
7. Components grid Expand (view only), reference `e294`. Snapshot: the tree was restored (below).

Values that are empty are recorded as empty; no defaults were inferred.

### Components tree (after Cancel and Expand; view only)

```
Pane (00)
  flexlayoutPane_FX_CustomerPortal (FlexLayout)
    Region00: header
      FlexLayoutHeader (FlexLayout; Container flexlayoutPane_FX_CustomerPortal)
        Region00: header > StaticHeader (Static)
        Region01: user   > StaticCustIcon (Static), StaticCustID (Static)
    Region01: main
      FlexLayoutMain (FlexLayout; Container flexlayoutPane_FX_CustomerPortal; Pane 0)
        Region00: UNKNOWN0
    Region02: footer
      FlexLayoutFooter (FlexLayout; Container flexlayoutPane_FX_CustomerPortal; Pane 0)
        Region00: UNKNOWN0
```

- Header components unchanged (the T1 and T2 trees match).
- Direct-child placement of FlexLayoutMain is supported by the Flex Attributes target (main), the row order in the tree, and the indentation in `t3-02`. The grid has no parent column.
- FlexLayoutFooter is present under Region02: footer after Cancel and Expand. Its own Flex Attributes were not re-read in T3.

### T3 observations (observed only)

- The Save toast text matches T2 and EXP-105 finding 5.
- The Properties header lag persists (`flexLayout1_USER (FlexLayout)` with Name `FlexLayoutMain`).
- The tree rebuilt collapsed after Save and again after Cancel. Expand restored the view; no model change was made by it.
- After Save the canvas auto-scrolled to the top. The FlexLayoutMain box is not visibly drawn; only its adorner bar is.
- The attributes dialog showed 1 region. Margin, Minimum Length, Maximum Length and Default Margin displayed empty values.

### T3 action counts (this task)

| Action | Count |
| --- | --- |
| Tab list | 1 |
| Tab select | 1 (tab 1 only) |
| Snapshot, untargeted (inline) | 9 (gate; after placement; after Name double-click; after Name fill and Tab; after Save; after adorner click; after region row click; after Cancel; after Expand) |
| Snapshot, fresh-snapshot recovery | 0 (no Ref-not-found) |
| Find | 1 (tooltip text; no match; not a click source) |
| Screenshot | 5 (`t3-00`, `t3-02`, `t3-03`, `t3-04`, `t3-05`) |
| Reference clicks | 7 (Toolbox row; Name value double-click; Save; adorner; region row; Cancel; Components Expand) |
| Hover (reference) | 1 (adorner `e998`) |
| Coordinate clicks (placement) | 1 (700, 300) |
| Coordinate hover, mouse move or wheel | 0 |
| Toolbox selections | 1 |
| Canvas placements | 1 |
| Undo | 0 |
| Name entries (fill) | 1; corrections 0 |
| Name Tab presses | 1 |
| Theme Class entries / corrections | 0 / 0 |
| Theme Class list opens | 0 |
| Dialog opens | 1 (Edit FlexLayout Attributes, via adorner) |
| Dialog left by | Cancel 1; OK 0 |
| Region-row selection in dialog | 1 (no value change) |
| Designer Saves | 1 (toast recorded above) |
| Form close / reopen | 0 / 0 |
| Prompts | 0 |
| Server-event errors | 0 |
| Re-logins | 0 |
| Regenerate Form | 0 |
| Drag | 0 |
| Console, network or browser JavaScript | 0 |

Non-browser actions in T3: 7 repository reads (AGENTS.md; pt7 lines 184-189 and 286-295; add-component recipe; session recipe; EXP-105 and EXP-107 Outcome ranges), 1 read of this record before editing, 0 searches, and 5 image reads (`t3-00`, `t3-02`, `t3-03`, `t3-04`, `t3-05`).

### Canvas status (T3)

- FlexLayoutMain: the adorner bar is visible under the header at the top of the main region; the box itself is not distinct from the empty grid. Unresolved visually (not claimed either way).
- FlexLayoutFooter: not in frame in any T3 post-Save view. D4 stays open.

## T4 - Ordinary close, reopen and readback (observed)

### Gate at T4 start

- Tab list first (tab 0 Web Client, tab 1 Designer); tab 1 selected once; untargeted snapshot.
- FX_CustomerPortal active; User scope (status bar); Save and Undo disabled; no dialog, menu or prompt open.
- Components (full tree in the snapshot): header components unchanged; `Region01: main` > FlexLayoutMain > `Region00: UNKNOWN0`; `Region02: footer` > FlexLayoutFooter > `Region00: UNKNOWN0`.
- No gate screenshot was taken at T4 start (the brief names screenshots only for the reopened tree and canvas). The T1-T3 gate and post-save evidence is in the earlier sections.

### Close (one ordinary close)

1. Clicked the Form-tab close control once (reference `e247`, "closable FX_CustomerPortal"). Form close 1.
2. Prompts: **none appeared**. No save or discard prompt text was shown, so no answer was given. (Verbatim prompt text: not applicable; no prompt.)
3. Snapshot after close: the Form tab list is empty; the page URL no longer carries `MGForm=FX_CustomerPortal`; Save and Undo disabled.

### Reopen (one, through Form menu recent-forms)

1. Clicked the Form menu button once (reference `e3`). The menu listed, in order: Definition; Sign Out; FX_CustomerPortal; FX_FlexProbe01; FX_OrdersChart; FX_Orders; FX_HelloWorld01; FX_Items; IDO Properties; IDOs; Sql Tables; IDO Projects. No other form was opened.
2. Clicked the recent-forms entry `FX_CustomerPortal` once (reference `e878`). Form reopen 1. Select Form OK was not used (no such control was clicked).
3. Snapshot after reopen: FX_CustomerPortal tab active; User scope; Save and Undo disabled; no dialog open.
4. The Details panel opened collapsed; Expand Panel clicked once (reference `e923`, view only). The Components tab was clicked once (reference `e1033`, view only). The Components grid showed only `Pane (00)`; Expand clicked once (reference `e1111`, view only).

### Reopened Components tree (snapshot after Expand)

```
Pane (00)
  flexlayoutPane_FX_CustomerPortal (FlexLayout)
    Region00: header
      FlexLayoutHeader (FlexLayout; Container flexlayoutPane_FX_CustomerPortal)
        Region00: header > StaticHeader (Static; Container FlexLayoutHeader)
        Region01: user   > StaticCustIcon (Static), StaticCustID (Static)
    Region01: main
      FlexLayoutMain (FlexLayout; Container flexlayoutPane_FX_CustomerPortal; Pane 0)
        Region00: UNKNOWN0
    Region02: footer
      FlexLayoutFooter (FlexLayout; Container flexlayoutPane_FX_CustomerPortal; Pane 0)
        Region00: UNKNOWN0
```

- Header components unchanged compared with the T1 gate tree (FlexLayoutHeader, StaticHeader, StaticCustIcon, StaticCustID).
- FlexLayoutMain under `Region01: main`; FlexLayoutFooter under `Region02: footer`. No unexpected component or region row appeared. Parentage is the tree order and indentation; the grid has no parent column.

### Selection and readback (row selection only; no value changed)

1. FlexLayoutFooter, selected by its Components row (reference `e1527`):
   - Name: `FlexLayoutFooter`.
   - Type: `FlexLayout`.
   - Theme Class: `FX_BlueBackground`.
   - Flex Attributes: `Type: HorizontalBox Regions: - 00: UNKNOWN0 Index: 2 Target: footer`.
   - Properties header now reads `FlexLayoutFooter (FlexLayout)`; the header lag seen in T2-T3 is absent after reopen.
2. FlexLayoutMain, selected by its Components row (reference `e1452`):
   - Name: `FlexLayoutMain`.
   - Type: `FlexLayout`.
   - Theme Class: **empty / unset**. The value cell shows only the combobox trigger with no text (snapshot; `t4-02` shows the Theme Class row blank).
   - Flex Attributes: `Type: HorizontalBox Regions: - 00: UNKNOWN0 Index: 1 Target: main`.
   - Properties header now reads `FlexLayoutMain (FlexLayout)`.

### Reopened canvas

- `t4-01` (before any selection; canvas at top): the header strip is visible (teal band, "Customer Portal" text left, icon picture and empty box right). Below it the main region is an empty grid, with the FlexLayoutMain adorner bar at its top-left under the header (about y 185). The footer is not in frame. The Components grid shows only the first rows (the full tree is from the snapshot).
- `t4-02` (FlexLayoutMain selected): same canvas view; Properties Name `FlexLayoutMain`, Type FlexLayout, Theme Class blank; Components grid shows `Region01: main` > FlexLayoutMain > `Region00: UNKNOWN0` and `Region02: footer` > FlexLayoutFooter > `Region00: UNKNOWN0`.
- Canvas scroll (view only): mouse moved to (700, 420) and wheel deltaY 300 at that point. This is a coordinate-positioned move and scroll, not a click; it changed no Form value (recorded as a deviation D6 for the coordinate rule).
- `t4-03` (scrolled): the lower dotted divider sits at about y 563; **below it a teal strip spans the full canvas width (about x 258-1147, y 563-598)**. This is the footer region now visibly filled. The main region above is still an empty grid; the FlexLayoutMain box is not distinct from it.
- **Blue footer fill (D4)**: visibly present after an ordinary close and reopen. Its colour looks the same teal as the header strip, which EXP-105 records as FX_BlueBackground. The attribution rests on two things: the readback Theme Class `FX_BlueBackground` and the visual similarity. There was **no pixel comparison**. The T2 post-save frame (`t2-02`) did not show the fill. Why it was absent then is not established (a post-reopen redraw is possible, as EXP-107 finding 3 saw for an icon). Not tested, not claimed.

### Final Designer state at the end of T4

- FX_CustomerPortal open in the Designer; User scope; Save and Undo disabled (last full snapshot, after FlexLayoutMain selection); no dialog, menu or prompt open.
- Details panel open on the Components tab; FlexLayoutMain selected (Properties on the Component tab). These are view states only.
- Web Client tab (tab 0) not acted on in T4. Form not closed again (brief: leave open and clean).

### T4 action counts (this task)

| Action | Count |
| --- | --- |
| Tab list | 1 |
| Tab select | 1 (tab 1 only) |
| Snapshot, untargeted (inline) | 9 (gate; after close; after Form menu open; after recent-forms reopen; after Details Expand; after Components tab; after tree Expand; after FlexLayoutFooter select; after FlexLayoutMain select) |
| Snapshot, fresh-snapshot recovery | 0 (no Ref-not-found) |
| Find | 0 |
| Screenshot | 3 (`t4-01`, `t4-02`, `t4-03`) |
| Reference clicks | 8 (Form close `e247`; Form menu `e3`; recent-forms `e878`; Details Expand `e923`; Components tab `e1033`; tree Expand `e1111`; FlexLayoutFooter row `e1527`; FlexLayoutMain row `e1452`) |
| Coordinate-positioned mouse move | 1 (700, 420), view scroll only |
| Mouse wheel | 1 (deltaY 300, view scroll only) |
| Coordinate clicks | 0 |
| Toolbox selections | 0 |
| Canvas placements | 0 |
| Undo | 0 |
| Save | 0 |
| Name / Theme Class entries | 0 / 0 |
| Theme Class list opens | 0 |
| Dialog opens | 0 |
| Form close | 1 (no prompt) |
| Form reopen | 1 (recent-forms entry) |
| Prompts | 0 (none appeared; no answer given) |
| Server-event errors | 0 |
| Re-logins / authentication operations | 0 / 0 |
| Regenerate Form / Delete Form Definition | 0 / 0 |
| Drag | 0 |
| Console, network or browser JavaScript | 0 |
| Non-browser reads | 8 (AGENTS.md; pt7 184-189 and 286-295; add-component recipe; session recipe; EXP-105 and EXP-107 Outcome ranges; this record) |
| Image reads | 3 (`t4-01`, `t4-02`, `t4-03`) |

Click responses in T4 returned auto-saved snapshot file paths. Those files were not read and are not counted as worker snapshots.

## Final acceptance audit (T4)

Documentation-only. It restates observations from T1-T4 with exact paths; it adds no new browser action.

### AC-1 (sources, session, User scope, gate, canvas location)

- Sources: T1 read AGENTS.md (full), pt7 184-191 and 286-295, the add-component and session recipes (full), EXP-105 and EXP-107 Outcome ranges. T2, T3 and T4 re-read the same sources (T2 partial for AGENTS.md; see D2). Source sections are listed under "## Sources read".
- Session usable: the Designer answered every tab selection and snapshot across T1-T4. No Session Expired modal, no sign-in page, no logout card, no server-event error appeared (T1-T4). Web Client tab was read once (T1) and not acted on afterwards.
- User scope: status bar `ScopeType: User` at every gate and at T4 reopen (`t1-01`, `t4-02`, `t4-03`).
- Clean at gates: Save disabled, Undo disabled, no dialog (T1 gate snapshot; T2, T3, T4 gate snapshots).
- Header components and empty regions at the T1 gate: tree (T1 section) and `t1-01`, `t1-02`.
- Main and footer on the canvas: main = empty grid between the header strip and the lower dotted divider (`t1-01`); footer = strip below the lower dotted divider (`t1-02`, `t2-00`, `t3-00`, `t4-03`).
- Evidence: `evidence/EXP-108/t1-01-gate-designer-tree-canvas.png`, `evidence/EXP-108/t1-02-gate-canvas-scrolled-footer-region.png`.
- Limit: the T1 footer extent was inferred from view (no parent column).

### AC-2 (FlexLayoutFooter)

- Placement: one Toolbox selection (FlexLayout row, reference `e141`) and one canvas coordinate click at (700, 582) inside the footer strip (T2). Result: `flexLayout1_USER` listed after `Region02: footer`; Flex Attributes `Target: footer` (T2 section; snapshot text). Parentage: Flex Attributes target plus indentation (`t2-02`).
- Name: one plain fill `FlexLayoutFooter` and Tab (one `browser_type` call on the Name editor, authorised plain fill). Corrections 0. Evidence: snapshot text; `t2-02` (tree shows `FlexLayoutFooter`; Properties Name `FlexLayoutFooter`).
- Theme Class: the ExtJS list was opened once; the rendered list held **one** class, `FX_BlueBackground`; it was clicked once and committed with Tab. Corrections 0. Reopened readback: `FX_BlueBackground` (T4 selection).
- Save: one Designer Save. Verbatim toast (`t2-02`): heading "Save", text "Form [FX_CustomerPortal] and global object(s) were saved." Save and Undo disabled afterwards (T2 snapshot 7).
- Blue footer fill: **not visible** in the T2 post-save frame (`t2-02`), **visible** after the T4 close and reopen (`t4-03`, teal full-width strip below the lower dotted divider). Colour attribution is visual only (no pixel comparison). D4 is partially resolved.
- Limits: no placement-only screenshot (D3); parentage has no grid parent column.

### AC-3 (FlexLayoutMain and read-only attributes)

- Placement: one Toolbox selection (reference `e141`) and one canvas coordinate click at (700, 300) inside the main region (T3). Result: `flexLayout1_USER` listed after `Region01: main`; Flex Attributes `Target: main`. Evidence: snapshot text; `t3-02`.
- Name: one plain fill `FlexLayoutMain` and Tab (one `browser_type` call). Corrections 0. Evidence: snapshot text; `t3-02`; `t4-02` (reopened).
- Theme Class: not set (the brief sets none). Reopened: blank (`t4-02`; snapshot).
- Save: one Designer Save. Verbatim toast (`t3-03`): "Form [FX_CustomerPortal] and global object(s) were saved." Save disabled afterwards (T3 snapshot).
- Attributes dialog: opened once through the canvas adorner identified by tooltip "Edit FlexLayout Attributes" (`t3-04`) and DOM id `flexlayouteditadorner-1906`. Recorded values (`t3-05` shows the dialog before the region row was selected; the region values come from snapshot text after the row selection):
  - Type HorizontalBox; Auto Size False; Region Index 1; Margin empty.
  - Region count 1: index 0, ID `UNKNOWN0`, Length 1, Unit Flex, Orientation Horizontal, Alignment Top, Pack Start, Minimum Length empty, Maximum Length empty, Default Margin empty.
- Dialog left by **Cancel** once (OK 0). Save disabled afterwards (T3 snapshot). No list opened; no value changed; one region row selected (no edit).
- Limits: the FlexLayoutMain box is not visibly distinct on the canvas (`t3-04`, `t4-02`, `t4-03`); region values are from snapshot text, not a screenshot; empty values recorded as empty (not inferred).

### AC-4 (ordinary close, reopen, names, header components, Form state)

- Close: one Form-tab close (`e247`). No prompt appeared (T4). Reopen: one Form-menu recent-forms entry (`e878`). Select Form OK not used.
- Reopened tree: FlexLayoutMain under `Region01: main`; FlexLayoutFooter under `Region02: footer`; header components unchanged (see the T4 tree block). Evidence: snapshot text (full tree); `t4-01` (top rows); `t4-02` (Components grid with both new rows and their UNKNOWN0 children); `t4-03` (canvas).
- Names and Theme Class after reopen: FlexLayoutFooter / FX_BlueBackground; FlexLayoutMain / blank (T4 selection).
- Form open and clean: Save disabled, Undo disabled, no dialog or menu, User scope (T4 final state).
- Limits: same session only. Header components were checked by tree and names; their properties were not re-read after reopen. No cross-session persistence, database-level durability or replay verification is claimed.

### AC-5 (no other change, no global object, no Regenerate, no drag, Undo, runtime, unload, checkout, User scope, boundary)

- No other component, region or Form change observed: the tree at the T4 gate and the tree after reopen are identical (apart from the reopen-only collapse), and both match the T3 tree with the two new FlexLayouts added.
- Regions added by the worker: none. Components deleted or moved: none. Root FlexLayout and header components not edited (no Properties change recorded for them).
- Global objects: the worker performed no theme, class, string, image, variable, IDO or SQL action. The Save toast reads "Form [...] and global object(s) were saved." This is the standard Designer Save wording; it does not establish whether any global object was written, and no inference is made.
- Undo: 0 in T1-T4. Drag: 0. Regenerate Form: 0. Delete Form Definition: 0. Form properties or collections: no edit (the Collections tab was not used; the Form Properties grid was displayed after reopen, not changed).
- Runtime action, unload, checkout, FormSync, deployment: none. Browser JavaScript, console, network: none.
- User scope only; no other Form opened; Select Form OK not clicked.
- Task boundary: T4 stopped before EXP-109 steps and before any FlexLayoutMain region or attribute change.

### AC-6 (cumulative audit, inventories, final state)

Cumulative browser action counts, T1-T4 (exact):

| Action | T1 | T2 | T3 | T4 | Total |
| --- | --- | --- | --- | --- | --- |
| Tab list | 1 | 1 | 1 | 1 | 4 |
| Tab select | 3 | 1 | 1 | 1 | 6 |
| Snapshot, untargeted (inline) | 2 | 7 | 9 | 9 | 27 |
| Snapshot, fresh-snapshot recovery | 0 | 0 | 0 | 0 | 0 |
| Find | 0 | 0 | 1 | 0 | 1 |
| Screenshot | 2 | 2 | 5 | 3 | 12 |
| Reference clicks | 0 | 5 | 7 | 8 | 20 |
| Reference hover (adorner) | 0 | 0 | 1 | 0 | 1 |
| Coordinate-positioned mouse move | 1 | 0 | 0 | 1 | 2 |
| Mouse wheel (view scroll) | 1 | 0 | 0 | 1 | 2 |
| Coordinate clicks (placement) | 0 | 1 | 1 | 0 | 2 |
| Toolbox selections | 0 | 1 | 1 | 0 | 2 |
| Canvas placements | 0 | 1 | 1 | 0 | 2 |
| Undo | 0 | 0 | 0 | 0 | 0 |
| Name entries (plain fill) | 0 | 1 | 1 | 0 | 2 |
| Name corrections | 0 | 0 | 0 | 0 | 0 |
| Name Tab presses | 0 | 1 | 1 | 0 | 2 |
| Theme Class entries (option click) | 0 | 1 | 0 | 0 | 1 |
| Theme Class corrections | 0 | 0 | 0 | 0 | 0 |
| Theme Class Tab presses | 0 | 1 | 0 | 0 | 1 |
| Theme Class list opens | 0 | 1 | 0 | 0 | 1 |
| Dialog opens (attributes) | 0 | 0 | 1 | 0 | 1 |
| Dialog closed by Cancel / OK | 0 / 0 | 0 / 0 | 1 / 0 | 0 / 0 | 1 / 0 |
| Designer Saves (with verbatim toast) | 0 | 1 | 1 | 0 | 2 |
| Form close / reopen | 0 / 0 | 0 / 0 | 0 / 0 | 1 / 1 | 1 / 1 |
| Prompts answered | 0 | 0 | 0 | 0 | 0 |
| Server-event errors | 0 | 0 | 0 | 0 | 0 |
| Re-logins / authentication operations | 0 | 0 | 0 | 0 | 0 |
| Regenerate Form / Delete Form Definition | 0 | 0 | 0 | 0 | 0 |
| Drag | 0 | 0 | 0 | 0 | 0 |
| Console, network, browser JavaScript | 0 | 0 | 0 | 0 | 0 |
| Non-browser repository reads | 7 | 6 | 8 | 8 | 29 |
| Non-browser searches or globs | 4 | 0 | 0 | 0 | 4 |
| Image reads (verification) | 2 | 2 | 5 | 3 | 12 |

Reconciliation notes: no controller table was available in this task. The counts are the worker's own per-task tallies from this session, taken from the action log of each task section; none is estimated. Snapshot counts exclude the auto-saved snapshot file paths returned by click responses (not read). Hover and wheel are coordinate-positioned non-click actions and are listed separately.

### Worker-written file inventory (T1-T4)

| Path | Written by | Content |
| --- | --- | --- |
| `experiments/EXP-108-hello-world-part-7-section-6a-fx-customer-portal-footer-main-flexlayouts.md` | Write (T1 create), Write (T2 rewrite), Edits (T2 corrections, T3 update, T4 update) | EXP-108 record |
| `evidence/EXP-108/t1-01-gate-designer-tree-canvas.png` | browser screenshot at worker request | T1 gate tree and canvas |
| `evidence/EXP-108/t1-02-gate-canvas-scrolled-footer-region.png` | browser screenshot at worker request | T1 footer region view |
| `evidence/EXP-108/t2-00-pre-placement-canvas-footer-view.png` | browser screenshot at worker request | T2 pre-placement footer view |
| `evidence/EXP-108/t2-02-after-save-footer-canvas-and-response.png` | browser screenshot at worker request | T2 Save toast, tree, canvas |
| `evidence/EXP-108/t3-00-pre-placement-canvas-main-view.png` | browser screenshot at worker request | T3 pre-placement main view |
| `evidence/EXP-108/t3-02-pre-save-main-placement-name-tree.png` | browser screenshot at worker request | T3 tree and Name before Save |
| `evidence/EXP-108/t3-03-save-response-main-tree-canvas.png` | browser screenshot at worker request | T3 Save toast and tree |
| `evidence/EXP-108/t3-04-adorner-hover-tooltip.png` | browser screenshot at worker request | T3 adorner tooltip |
| `evidence/EXP-108/t3-05-attributes-dialog-flexlayoutmain.png` | browser screenshot at worker request | T3 attributes dialog before region selection |
| `evidence/EXP-108/t4-01-reopened-tree-and-canvas.png` | browser screenshot at worker request | T4 reopened tree (top) and canvas |
| `evidence/EXP-108/t4-02-reopened-canvas-flexlayoutmain-selected.png` | browser screenshot at worker request | T4 FlexLayoutMain selected; Components rows |
| `evidence/EXP-108/t4-03-reopened-canvas-scrolled-footer-region.png` | browser screenshot at worker request | T4 canvas scrolled; teal footer strip |

Not worker-written and not read: Playwright MCP per-action snapshot YAML files and console logs under `evidence\playwright\`. The worker made no other file write. Confinement is supported by this inventory and the harness inventory; operator git review is authoritative.

### Cleanup inventory (objects created by EXP-108)

| Object | Created in | Present at end of T4 | Cleanup status |
| --- | --- | --- | --- |
| FlexLayoutFooter (FlexLayout, Theme Class FX_BlueBackground, auto region `UNKNOWN0`) | T2 (one placement, one Save) | Yes (reopened tree) | **Not performed.** Form-scope component in User-scope FX_CustomerPortal. If the operator requests removal: Components trash button only, after its confirmation names FlexLayoutFooter. |
| FlexLayoutMain (FlexLayout, no Theme Class, auto region `UNKNOWN0`) | T3 (one placement, one Save) | Yes (reopened tree) | **Not performed.** Same rule. Its regions are EXP-109's scope; do not configure here. |

No region was added by the worker; no global object was created or changed by a worker action; no other Form was changed.

### Unauthorized-action checks (T1-T4)

- None observed: no Regenerate Form, no Delete Form Definition, no Select Form OK, no dialog OK, no Yes answer to any prompt (no prompt appeared), no second Save in any task, no Save after an error, no drag, no runtime action, no unload, no checkout, no FormSync or deployment, no browser JavaScript, no console or network inspection, no URL navigation in T1-T4, no refresh or restart, no other Form opened.
- Views changed (not model): Details panel expanded, Components tab selected, tree expansion, canvas scroll; these are UI state only.

### Final state (end of T4)

- Designer: FX_CustomerPortal open; User scope; clean (Save and Undo disabled); no dialog, menu or prompt open.
- Components: header components unchanged; FlexLayoutMain (no Theme Class) under Region01: main; FlexLayoutFooter (FX_BlueBackground) under Region02: footer.
- Canvas: header strip; empty main region with FlexLayoutMain adorner bar; teal footer strip below the lower dotted divider.
- Web Client tab (tab 0): not acted on in T4.
- Not performed (out of scope): Regenerate Form, EXP-109 (FlexLayoutMain's six regions and attributes), the menu buttons, pages, and the deferred StaticCustID binding.

### Acceptance qualifications (preserved; observed only)

- **D1** (T1 source-range overread): preserved.
- **D2** (T2 incomplete source re-reading; T2 re-read AGENTS.md lines 1-30 only): preserved. T3 and T4 re-read AGENTS.md in full.
- **D3** (T2 has no separate placement-only screenshot): preserved. Placement evidence is snapshot text plus `t2-02`.
- **D4** (blue footer fill): partially resolved. Not visible in T2; visible as a teal full-width strip after the T4 reopen (`t4-03`). Attribution to FX_BlueBackground is by readback and visual similarity only, not pixel-verified.
- **D5** (this record read after T4 browser work began): disclosed above.
- **D6** (coordinate-positioned mouse move and wheel at (700, 420) in T4 for a view-only canvas scroll): disclosed; not a click; the T1 gate used the same view scroll.
- **Tutorial line 189** exposed the first line of Section 6 step 4 in the authorised range; no step 4 action taken.
- **browser_type flags** (T2 and T3): authorised plain Name fills, as recorded in the Name sections.
- **Properties header lag**: present in T2-T3 after rename and Save; absent after the T4 reopen (`FlexLayoutFooter (FlexLayout)`, `FlexLayoutMain (FlexLayout)`).
- **Components tree and Details panel** collapse after Save and after reopen: recovered by view-only Expand.

### Unresolved items (not claimed)

- FlexLayoutMain box: not visibly distinct on the canvas in any frame.
- Direct-child parentage: inferred from the Flex Attributes target and tree indentation (no parent column in the grid).
- Footer colour attribution: visual only.
- Global-object writes by the Save: not verifiable from the UI; the toast wording is generic.
- Why the footer fill was absent in the T2 post-save frame and present after reopen: not established.
- Persistence: same-session close and reopen only. No cross-session durability, database-level durability or replay verification is claimed.

## Observations of the starting state (for later unchanged-check)

- StaticCustID Properties (as displayed at T1, not changed): Type Static; From Device Master True; Theme Class FX_WhiteHeader; Foreground #000000; Bitmap File Name empty; Justification Left; Binding Type None; Required False; Unit Char; Size 10; 1.5; Lock Size False; No Colon True; Tab Order 0; Flex Attributes Index 1 Target user.
- Canvas (`t1-01`): header strip text "Customer Portal" (left), icon picture and empty box (right).

## Action audit through T2 (superseded by the cumulative table through T3 below)

| Action | T1 | T2 | Cumulative |
| --- | --- | --- | --- |
| Tab list | 1 | 1 | 2 |
| Tab select | 3 | 1 | 4 |
| Snapshot, untargeted (inline) | 2 | 7 | 9 |
| Snapshot, fresh-snapshot recovery | 0 | 0 | 0 |
| Find | 0 | 0 | 0 |
| Screenshot | 2 | 2 | 4 |
| Mouse move (hover only) | 1 | 0 | 1 |
| Mouse wheel (view scroll) | 1 | 0 | 1 |
| Reference clicks | 0 | 5 | 5 |
| Coordinate clicks (placement) | 0 | 1 | 1 |
| Toolbox selections | 0 | 1 | 1 |
| Canvas placements | 0 | 1 | 1 |
| Undo | 0 | 0 | 0 |
| Name entries (fill) | 0 | 1 | 1 |
| Name corrections | 0 | 0 | 0 |
| Theme Class entries | 0 | 1 | 1 |
| Theme Class corrections | 0 | 0 | 0 |
| Theme Class list opens | 0 | 1 | 1 |
| Tab presses (commit) | 0 | 2 | 2 |
| Dialog opens | 0 | 0 | 0 |
| Designer Saves (with response) | 0 | 1 | 1 |
| Form close / reopen | 0 / 0 | 0 / 0 | 0 / 0 |
| Prompts answered | 0 | 0 | 0 |
| Server-event errors | 0 | 0 | 0 |
| Re-logins | 0 | 0 | 0 |
| Regenerate Form | 0 | 0 | 0 |
| Drag | 0 | 0 | 0 |
| Console or network inspection | 0 | 0 | 0 |
| Browser JavaScript or run-code | 0 | 0 | 0 |

Non-browser actions, cumulative: 12 repository reads (T1: 7; T2: 6 with AGENTS.md partial), 4 searches or globs in T1 (none in T2), 4 image reads (T1: 2; T2: 2). The Playwright MCP wrote one tool-generated snapshot YAML file per browser action under `evidence\playwright\` (for example `page-2026-10-16T13-04-38-486Z.yml`), plus console logs; these are tool-generated, not worker-written, and were not read.

## Action audit (cumulative through T3, exact counts)

| Action | T1 | T2 | T3 | Cumulative |
| --- | --- | --- | --- | --- |
| Tab list | 1 | 1 | 1 | 3 |
| Tab select | 3 | 1 | 1 | 5 |
| Snapshot, untargeted (inline) | 2 | 7 | 9 | 18 |
| Snapshot, fresh-snapshot recovery | 0 | 0 | 0 | 0 |
| Find | 0 | 0 | 1 | 1 |
| Screenshot | 2 | 2 | 5 | 9 |
| Mouse move (coordinate hover, canvas) | 1 | 0 | 0 | 1 |
| Mouse hover (reference) | 0 | 0 | 1 | 1 |
| Mouse wheel (view scroll) | 1 | 0 | 0 | 1 |
| Reference clicks | 0 | 5 | 7 | 12 |
| Coordinate clicks (placement) | 0 | 1 | 1 | 2 |
| Toolbox selections | 0 | 1 | 1 | 2 |
| Canvas placements | 0 | 1 | 1 | 2 |
| Undo | 0 | 0 | 0 | 0 |
| Name entries (fill) | 0 | 1 | 1 | 2 |
| Name corrections | 0 | 0 | 0 | 0 |
| Name Tab presses | 0 | 1 | 1 | 2 |
| Theme Class entries | 0 | 1 | 0 | 1 |
| Theme Class corrections | 0 | 0 | 0 | 0 |
| Theme Class Tab presses | 0 | 1 | 0 | 1 |
| Theme Class list opens | 0 | 1 | 0 | 1 |
| Dialog opens | 0 | 0 | 1 | 1 |
| Dialog closed by Cancel / OK | 0 / 0 | 0 / 0 | 1 / 0 | 1 / 0 |
| Designer Saves (with response) | 0 | 1 | 1 | 2 |
| Form close / reopen | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 |
| Prompts answered | 0 | 0 | 0 | 0 |
| Server-event errors | 0 | 0 | 0 | 0 |
| Re-logins | 0 | 0 | 0 | 0 |
| Regenerate Form | 0 | 0 | 0 | 0 |
| Drag | 0 | 0 | 0 | 0 |
| Console, network or browser JavaScript | 0 | 0 | 0 | 0 |

Non-browser actions, cumulative: 21 repository reads (T1 7; T2 6; T3 8 including the record read), 4 searches or globs (T1 only), and 9 image reads (T1 2; T2 2; T3 5). The Playwright MCP wrote one tool-generated snapshot file per action under `evidence\playwright\` and console logs; these are not worker-written and were not read.

## Worker-written file inventory (through T3)

| Path | Written by | Content |
| --- | --- | --- |
| `experiments/EXP-108-hello-world-part-7-section-6a-fx-customer-portal-footer-main-flexlayouts.md` | Write (T1 create), Write (T2 rewrite), Edits (T2 corrections, T3 update) | EXP-108 record: gate (T1), FlexLayoutFooter (T2), FlexLayoutMain and attributes (T3) |
| `evidence/EXP-108/t1-01-gate-designer-tree-canvas.png` | browser screenshot at worker request (T1) | Designer tab, gate state |
| `evidence/EXP-108/t1-02-gate-canvas-scrolled-footer-region.png` | browser screenshot at worker request (T1) | canvas scrolled to the footer area |
| `evidence/EXP-108/t2-00-pre-placement-canvas-footer-view.png` | browser screenshot at worker request (T2) | gate state before placement; footer strip |
| `evidence/EXP-108/t2-02-after-save-footer-canvas-and-response.png` | browser screenshot at worker request (T2) | Save toast, tree with FlexLayoutFooter, canvas |
| `evidence/EXP-108/t3-00-pre-placement-canvas-main-view.png` | browser screenshot at worker request (T3) | gate state before placement; empty main region; footer strip at the bottom |
| `evidence/EXP-108/t3-02-pre-save-main-placement-name-tree.png` | browser screenshot at worker request (T3) | tree with FlexLayoutMain under Region01: main; Name FlexLayoutMain; Save enabled (taken after the Name change, before Save) |
| `evidence/EXP-108/t3-03-save-response-main-tree-canvas.png` | browser screenshot at worker request (T3) | Save toast; tree with FlexLayoutMain under Region01: main; Save disabled in the toolbar |
| `evidence/EXP-108/t3-04-adorner-hover-tooltip.png` | browser screenshot at worker request (T3) | tooltip "Edit FlexLayout Attributes" on the hovered adorner; FlexLayoutMain adorner bar under the header |
| `evidence/EXP-108/t3-05-attributes-dialog-flexlayoutmain.png` | browser screenshot at worker request (T3) | FlexLayout attributes dialog before the region row was selected: Type HorizontalBox; Auto Size False; Region Index 1; Margin empty; one region UNKNOWN0 (1 Flex) |

Tool-generated files not written by the worker and not read: Playwright MCP console logs and per-action snapshot YAML files under `evidence\playwright\`.

## Cleanup inventory (created objects so far)

| Object | Created in | Details | Cleanup note |
| --- | --- | --- | --- |
| FlexLayoutFooter | T2 (one placement, one Save) | FlexLayout in Region02: footer (Flex Attributes Index 2, Target footer); Container flexlayoutPane_FX_CustomerPortal; Theme Class FX_BlueBackground; auto region `UNKNOWN0` created by the placement | Form-scope component in User-scope FX_CustomerPortal; delete only with the Components trash button, if the operator asks for cleanup. |
| FlexLayoutMain | T3 (one placement, one Save) | FlexLayout in Region01: main (Flex Attributes Index 1, Target main); Container flexlayoutPane_FX_CustomerPortal; no Theme Class; auto region `UNKNOWN0` created by the placement; attributes dialog read only and left with Cancel | Form-scope component in User-scope FX_CustomerPortal; delete only with the Components trash button, if the operator asks for cleanup. Its regions are for EXP-109 (out of scope here). |

No region added by the worker. No global object created or changed.

## Blockers and open items

- No blocker in T1-T4. Session expiry or sign-in: none seen in T1-T4. No server-event error. No prompt at the T4 close.
- **Open (T2)**: the blue footer strip is not visibly confirmed on the canvas in `t2-02`. To be checked against the readback canvas in T4. Not a claim either way.
- **Open (T2)**: the Properties header still shows `flexLayout1_USER (FlexLayout)` after the Name change and the Save (EXP-105 finding 2 lag); the Name value and the tree both show `FlexLayoutFooter`. To be checked after reopen in T4.
- The StaticCustID Properties panel was already active at the start of T1 (carried over from the operator's session; not changed in T1). In T2 the Properties panel followed the new FlexLayout.
- The Region rows' parent levels are inferred from view (see Limitations).
- **Open (T3)**: the FlexLayoutMain box is not visibly drawn on the canvas; only its adorner bar is seen. To be checked in T4's readback canvas.
- **Open (T3, D4 carried)**: the footer's blue fill is still not confirmed; no T3 post-Save frame shows the footer strip.
- **Open (T3)**: the Properties header still shows `flexLayout1_USER (FlexLayout)` after the FlexLayoutMain Name change and Save. To be checked after reopen in T4.
- **Open (T3)**: the attributes values for Margin, Minimum Length, Maximum Length and Default Margin displayed empty. Recorded as empty; not inferred.

## Current state (end of T3; superseded by "Final state (end of T4)" in the final audit)

- Designer tab (tab 1) selected; FX_CustomerPortal open; User scope; clean (Save and Undo disabled); no dialog, menu or prompt open.
- Components (expanded, view only): FlexLayoutFooter (FlexLayout, FX_BlueBackground) under Region02: footer; FlexLayoutMain (FlexLayout, no Theme Class) under Region01: main; header components unchanged.
- The Properties panel shows the Form tab (no component selected). The header still reads the stale `flexLayout1_USER (FlexLayout)`.
- Web Client tab (tab 0) not acted on in T3.
- Last verified state: the Expand snapshot after Cancel (T3). Screenshot `t3-05` shows the dialog before Cancel.

## Next permitted step

None within EXP-108. T4 (close, reopen, readback and the final audit) is complete. The next step belongs to a separate task or experiment, which the operator decides: EXP-109 configures FlexLayoutMain's six regions (Section 6 step 4 onward) and is out of scope here. Cleanup of FlexLayoutFooter and FlexLayoutMain is also an operator decision and was not performed. Regenerate Form was not performed and is not authorised for this run.

## Limitations

- Same-session UI evidence only (one ordinary close and reopen in one Designer session). No replay, cross-session durability, database-level durability or persistence verification is claimed.
- Findings are observed only.
- The footer fill is visible after reopen (`t4-03`) but was not visible in the T2 post-save frame, and its colour attribution to FX_BlueBackground is visual only (no pixel comparison).
- The FlexLayoutMain box is not visibly distinct on the canvas; only its adorner bar is seen (`t3-04`, `t4-02`, `t4-03`).
- Direct-child parentage rests on Flex Attributes targets and tree indentation; the Components grid has no parent column.
- The attributes-dialog region values come from snapshot text after row selection; the only dialog screenshot (`t3-05`) precedes that selection.
- Global-object writes by the Save are not verifiable from the UI; the toast is generic.

## Outcome (operator, 2026-10-16)

Accepted (observed). **Hello World Part 7 section 6 steps 1-3 are complete:** FX_CustomerPortal's root footer region holds **FlexLayoutFooter** (Theme Class **FX_BlueBackground**) and the root main region holds **FlexLayoutMain**, read back after an ordinary close and reopen. FlexLayoutMain's default attributes are recorded for EXP-109. The operator decided acceptance for EXP-108 only.

- Changed, for later cleanup (User-scope Form FX_CustomerPortal): new FlexLayouts FlexLayoutFooter (Region02: footer; Flex Attributes Index 2 Target footer; one auto region UNKNOWN0) and FlexLayoutMain (Region01: main; Index 1 Target main; one auto region UNKNOWN0). Two Designer Saves (T2, T3). No global object, no Regenerate, no Undo.
- **Run R-20261016-210022-btYG** (4 worker tasks, the first brief with the operator's efficiency rules): T1 read-only gate; T2 footer, Save; T3 main, Save, read-only attributes; T4 close/reopen readback and the final audit in one task. No denials, no session expiry; 12 screenshots in total (EXP-106: 55). Paused once, for the disposition.
- Screenshots viewed by the operator assistant: `t3-05-attributes-dialog-flexlayoutmain` (FlexLayoutMain dialog: Type HorizontalBox, Auto Size False, Region Index 1, Margin blank, one region index 0 UNKNOWN0 1 Flex), `t4-03-reopened-canvas-scrolled-footer-region` (after reopen: full-width teal footer strip below the lower divider; tree Region01: main > FlexLayoutMain > Region00: UNKNOWN0, Region02: footer > FlexLayoutFooter > Region00: UNKNOWN0).
- Findings (observed):
  1. **FlexLayoutMain defaults (input for EXP-109):** Type HorizontalBox, Auto Size False, Region Index 1 (its position in the root FlexLayout), Margin blank; one region UNKNOWN0, 1 Flex. The tutorial does not narrate a Type change.
  2. The footer's FX_BlueBackground fill was not drawn after the Save and appeared after the reopen, like the EXP-107 icon: the Designer canvas does not always repaint theme and image changes before a reopen.
  3. The EXP-105 placement method (Toolbox row plus one canvas click) works for the root main and footer regions as well; the Properties header lag after a rename recurred and was gone after the reopen.
- Operator rulings (EXP-108 only): D1 and D2 (source over-read and partial re-read), D3 (no placement-only screenshot), D5 (record read late) and D6 (view-only coordinate wheel scroll) accepted as procedural deviations; D4 resolved by the reopened canvas and the Theme Class readback; #37 accepted as a recovered file-tool error.
- Counts (worker cumulative, T1-T4): Toolbox selections 2; placement coordinate clicks 2; reference clicks 20; Name entries 2; Theme Class entries 1; corrections 0; dialog opens 1 (Cancel); Designer Saves 2; Undo 0; Form closes / reopens 1 / 1; prompts 0; server-event errors 0; re-logins 0; screenshots 12.
- Limits: same-session UI evidence only; the footer colour is matched visually, not by pixel.
- Next: EXP-109, Section 6 steps 4-6: FlexLayoutMain's six regions (menu 20 FormUnit Vertical Center Start margin 0,1,0,1; spacer1 1 Flex; sign in page 5 Flex Vertical Center Start; home page 5 Flex Fill max 50; cart page 5 Flex Vertical Stretch Start margin 0,1,0,1 max 65; spacer2 1 Flex), OK and one Save.
