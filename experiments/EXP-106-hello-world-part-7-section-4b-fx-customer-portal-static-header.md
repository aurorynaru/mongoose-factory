# EXP-106 - Hello World Part 7 Section 4b: Static StaticHeader in FlexLayoutHeader's header region (FX_CustomerPortal)

Status: **T1 complete (read-only gate and string collision check). T2 complete (Static placed, named, captioned; String FX_sCustomerPortal created; one Designer Save). T3 complete (string verified; Theme Class FX_WhiteHeader, Justification Left, Size 40; 1.5, No Colon True; one Designer Save). T4 complete (component FlexLayout Margin 2,0,0,0 set in the component's own attributes dialog; OK once; one Designer Save). T5 complete (one ordinary close and reopen via the recent-forms entry; readback of all properties, tree, canvas text, Margin and Region Index; string re-read; Form left open and clean). Readback is same-session UI evidence only; no cross-session or database durability is claimed. T6 documentation-only final audit recorded (section "T6 (cycle 5)"); experiment completion is not declared, and operator dispositions are outstanding.**
Mode: LEARNING MODE (AGENTS.md). Findings are observed only.
Run: R-20261016-133953-QkK1. Worker task T1 = cycle 0 (task_message_id 062e5bdf-ebc7-4a05-8dbe-6c3fb8cc5753); worker task T2 = cycle 1 (task_message_id 90611aee-1e9e-4c50-8e13-48befaa894af). worker_session_id 7f568fd6-1caf-433e-b2d8-eb3f8116afbf.
Date: 2026-10-16.
Environment: Mongoose Web Designer, config group G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT (demo tenant).
Editing scope: User. Target Form: FX_CustomerPortal (User scope). Other Forms: none touched.

## Goal

Follow Hello World Part 7 Section 4 steps 4-7 and 9 (`docs/mongoose/transcripts/hello-world-pt7.md` lines 145-163, section 4 timing 05:16-07:31; table row "Title/ID theme class | White Header | 06:38-07:00") on FX_CustomerPortal:

1. Place one Static in the nested header region `Region00: header` of FlexLayoutHeader (EXP-105).
2. Name it `StaticHeader`; Caption `FX_sCustomerPortal`, created through the Caption ellipsis with value `Customer Portal` (new string, tenant-wide).
3. Theme Class `FX_WhiteHeader` (EXP-100); Justification Left; Layout Size Width 40, Height 1.5; Specific Attributes No Colon True.
4. Component-level FlexLayout Margin `2,0,0,0`.
5. Designer Save after each of the three save points (T2, T3, T4); close/reopen readback (T5).

Step 8 (Regenerate Form) is **not** performed in this run.

## Task plan (this run)

| Task | Content | Status |
| --- | --- | --- |
| T1 | Read-only gate, Components tree, String collision check (FX_sUM positive control, FX_sCustomerPortal absent), Cancel. No change, no component selected. | **Done (this record)** |
| T2 | Toolbox Static, one canvas click in the nested header region, Name StaticHeader, Caption FX_sCustomerPortal, String creation via ellipsis (prompt answered Yes once), String Value Customer Portal, OK once, one Save. | **Done (section "T2 (cycle 1)" below)** |
| T3 | Verify string read-only; Theme Class FX_WhiteHeader, Justification Left, Size 40; 1.5, No Colon True; one Save. | **Done (section "T3 (cycle 2)" below)** |
| T4 | Component FlexLayout attributes: record, Margin 2,0,0,0 only, OK once, one Save. | **Done (section "T4 (cycle 3)" below)** |
| T5 | Ordinary close and reopen, readback, string re-check, leave Form open and clean. | **Done (section "T5 (cycle 4)" below)** |
| T5 | Ordinary close (Form tab) and reopen via Form menu recent forms; readback; Cancel dialogs; leave Form open and clean. | Not started |

## Sources read before the first browser action (T1)

- `AGENTS.md` (repository file).
- `docs/mongoose/transcripts/hello-world-pt7.md` lines 145-163 (section 4). The transcript file has no per-line "06:31" stamps. The 06:31-07:31 window is covered by the section 4 heading (05:16-07:31) and the table row "Title/ID theme class | White Header | 06:38-07:00" (line 293). Section 5 (line 165 onward) was not read.
- `recipes/components/add-component-from-toolbox.md` (Toolbox placement, canvas click, generated name pattern `<prefix><n>_USER`, placement makes Form dirty).
- `recipes/components/configure-basic-component.md` (Name/Caption edits commit immediately; Save finalizes; label captions show a trailing colon; caption cell editor can be a combobox).
- `recipes/session/session-expiry-and-stale-designer.md` (session-expiry procedure; server-event error = answer OK once and stop).
- Outcome (operator) sections only:
  - EXP-105 lines 383-402 (FlexLayoutHeader accepted; regions header and user; Edit FlexLayout Attributes is a canvas adorner with id `flexlayouteditadorner-...`; Regions + button; Save toast wording).
  - EXP-083 lines 890-927 (String creation through the ellipsis; raw ID shown on canvas until close/reopen; `Global object(s) were saved` toast).
  - EXP-062-R4 lines 380-412 (Size stored as `W; H`; caption shows raw ID until Save and reopen; Designer Form menu has no Open item; Delete Form Definition trash icon warning).

Disclosure on source reads: a directory-wide content search for the word "outcome" in `experiments/` (to locate the three Outcome headings) returned match lines from about 20 other experiment records, and a search of the transcripts folder returned one line from hello-world-pt3.md. Those were search snippets only; no other record was opened or read.

## Starting state (T1 gate, observed)

- Browser tabs listed first: tab 0 = Web Client (Mongoose home), tab 1 = Web Designer with `MGForm=FX_CustomerPortal` in the URL. Tab 1 was selected (success).
- Designer tab shows Form tab FX_CustomerPortal selected. Details > Form properties: Name `FX_CustomerPortal`, Version `User version for user ...`, Device Type Default, Form Type Flex. Editing scope in the status bar: `ScopeType: User` (scope name is the signed-in user; not recorded here).
- Save: **disabled**. Regenerate Form: disabled. Undo: disabled. No dialog, menu or unsaved change open.
- Nothing selected on the canvas (Properties shows the Form).
- No session-expiry modal and no sign-in page in either tab.

Evidence: `evidence/EXP-106/gate-01-designer-initial.png`.

## Components tree (T1, view only; Details > Components, after one Expand click)

Tree nesting confirmed by indentation in `evidence/EXP-106/gate-02-components-tree-expanded.png` and `evidence/EXP-106/gate-03-components-tree-scrolled-root-regions.png`:

```
Pane (00)
  flexlayoutPane_FX_CustomerPortal   (FlexLayout, Pane 0)
    Region00: header                 (root header region)
      FlexLayoutHeader               (FlexLayout, Container flexlayoutPane_FX_CustomerPortal, Pane 0)
        Region00: header             (nested header region)
        Region01: user               (nested user region)
    Region01: main                   (root)
    Region02: footer                 (root)
```

- FlexLayoutHeader (EXP-105) is present under root `Region00: header`, with its two regions `header` (Region00) and `user` (Region01), in that order.
- The root regions `Region01: main` and `Region02: footer` are at the root level (EXP-105 and this tree agree).
- **No component named `StaticHeader` exists.**
- Toolbox: `Static` row present in Framework Components (snapshot treeitem `Static`; screenshot y ≈ 788, x ≈ 81). Not clicked in T1.

## Canvas location of the nested header region (T1)

- Teal header strip at the top of the canvas, y ≈ 101-172 (screen pixels at the css scale of the screenshot).
- The nested FlexLayoutHeader fills the strip. **Left part (x ≈ 258-703) = `Region00: header`** (placement target for T2). **Right part (x ≈ 703-1148) = `Region01: user`.** The dashed divider at x ≈ 703 separates them.
- Placement in T2 must be a single click inside the left part, away from the strip edges and from the FlexLayoutHeader adorner icons. Not clicked in T1.

Evidence: `evidence/EXP-106/gate-01-designer-initial.png` (strip and divider), `evidence/EXP-106/gate-04-after-string-check-cancel-clean.png` (strip after Cancel).

## String collision check (T1, read-only)

Opened once through Designer Edit menu > String (Global Objects dialog, Strings list on the left, Properties on the right, OK / Cancel / Help).

| Filter | Result | Expected | Evidence |
| --- | --- | --- | --- |
| `FX_sUM` (positive control) | **1 row: `FX_sUM`** (shown in red text). No row was selected or opened. | 1 row | `evidence/EXP-106/string-check-02-filter-FX_sUM-positive-control.png` (see deviation D1 below) |
| `FX_sCustomerPortal` | **0 rows.** Filter text read back exactly `FX_sCustomerPortal` in the snapshot. | no row | `evidence/EXP-106/string-check-03-filter-FX_sCustomerPortal-absent.png` |

- Dialog left with **Cancel**. Snapshot after Cancel: no dialog, Save still disabled.
- Result: `FX_sCustomerPortal` does **not** exist. T2 may proceed to the ellipsis creation.
- Filter quirk (observed): a plain Playwright fill into the Strings filter put the text in the box but did **not** apply the filter (list stayed unfiltered). Ctrl+A in the active filter box followed by a slow, key-by-key type applied the filter. See the action audit.

## Action audit, T1 (cycle 0)

| Category | Count | Notes |
| --- | --- | --- |
| Browser tab list (explicit) | 1 | before the first selection |
| Browser tab select | 1 | tab 1 (Designer), succeeded |
| Explicit untargeted snapshot | 1 | at start. Each action also returned an auto snapshot file (not counted) |
| Reference clicks | 4 | Expand (Components grid), Edit menu, Edit > String menu item, Cancel (Global Objects) |
| Coordinate clicks | 0 | none |
| Mouse move (no click) | 1 | to (420, 800) to scroll the Components grid |
| Mouse wheel (view only) | 1 | deltaY 200 on the Components grid |
| Text entries (browser_type) | 3 | Strings filter: `FX_sUM` plain fill (filter not applied, correction D1), `FX_sUM` slow re-entry after select-all, `FX_sCustomerPortal` slow entry |
| Corrections | 1 | the filter `FX_sUM` re-entry (not a Mongoose artifact; no field value changed) |
| Key presses | 2 | Control+a in the Strings filter (select-all before re-typing). No Enter pressed |
| Wait | 1 | 2 seconds for the filter to apply |
| Screenshot calls | 8 | 7 distinct files: gate-01 to gate-04, string-check-01, string-check-02 (called twice, same filename, so one file was overwritten; see D1), string-check-03 |
| Toolbox selections | 0 | |
| Canvas placement clicks | 0 | |
| Prompts answered | 0 | none appeared |
| Dialog opens | 1 | Global Objects via Edit > String |
| Dialog closes | 1 | Cancel (not OK) |
| OK clicks | 0 | |
| String editor OKs | 0 | |
| Designer Saves | 0 | Save disabled throughout |
| Undo / Redo clicks | 0 | |
| Regenerate Form | 0 | not clicked; not authorized in this run |
| Form closes / reopens | 0 | |
| Component selections | 0 | Properties showed the Form throughout |
| Server-event errors | 0 | Edit menu opened normally |
| Session-expiry events | 0 | |
| Re-logins | 0 | |
| Browser evaluate / run-code | 0 | tools denied; none used |

## T2 (cycle 1): placement, Name, Caption, String creation, one Save

**Outcome of T2: completed with one caption correction (D3).** Static `static1_USER` placed in the nested `Region00: header`; Name `StaticHeader`; Caption `FX_sCustomerPortal`; String `FX_sCustomerPortal` created through the Caption ellipsis with value `Customer Portal`; one Designer Save accepted. T3 to T5 not performed.

### Sources and gate (before the first browser action)

- Re-read in this task: `AGENTS.md` (lines 1-60 only in T2; the full file was read in T1), `hello-world-pt7.md` lines 145-163, `recipes/components/add-component-from-toolbox.md`, `recipes/components/configure-basic-component.md`, `recipes/session/session-expiry-and-stale-designer.md` (all in full), EXP-105 Outcome lines 383-402, EXP-083 Outcome lines 890-909 (20-line window; the section continues to 927), EXP-062-R4 Outcome lines 380-412. No directory-wide search was run in T2. The transcript has no per-line 06:31 stamps; section 4 (05:16-07:31) is the window used.
- Tab list (1) before the first selection, then select of tab 1 (succeeded). Tab 1 is the Designer. Its URL no longer contains `MGForm=FX_CustomerPortal` (it did in T1). Identity was established from the snapshot instead: tab heading `FX_CustomerPortal`, Details Name `FX_CustomerPortal`, status bar `ScopeType: User`.
- Gate (snapshot, read-only): Save disabled, Undo disabled, no dialog. Components tree unchanged from T1 (Pane (00) > flexlayoutPane_FX_CustomerPortal > Region00: header > FlexLayoutHeader > Region00: header, Region01: user; root Region01: main, Region02: footer); no StaticHeader. Screenshot `evidence/EXP-106/t2-gate-01-designer-start-before-placement.png`.
- The String collision check was not repeated in T2 (done in T1). The creation prompt in T2 is the expected check.

### Toolbox selection and placement

- Toolbox row `Static` (snapshot ref) clicked once. Screenshot `t2-01-toolbox-static-selected.png`: the Static row is highlighted.
- One canvas click at coordinates (420, 137), inside the left part of the teal strip (`Region00: header`), away from the edges and the divider at x≈703. Screenshot `t2-02-canvas-after-placement-click.png`.
- Result (observed): one new component `static1_USER`, Type Static, Container `FlexLayoutHeader`. In the Components tree it is indented under the nested `Region00: header` (its icon is one level deeper than that region's row, and `Region01: user` stays at the region level). Parent-id not read; this placement is established by the tree depth only.
- Properties after placement (observed): Name `static1_USER`; Caption blank; Type Static; From Device Master True; Theme Class blank; Justification `Right` (default); Layout Unit `Char`; Size `20; 1` (default); Flex Attributes `Index: 0 Target: header`. Save became enabled.
- Undo was not used (placement was correct).

### Name

- Name value cell double-clicked (one action); the inline textbox was filled once with `StaticHeader`, then Tab. 0 corrections. Result: Properties Name `StaticHeader`; tree row `StaticHeader Static 0 FlexLayoutHeader 0` under the nested header region. Screenshot `t2-03-name-StaticHeader-after-entry.png`.

### Caption: wrong first commit (D3), then one correction

- Caption value cell double-clicked. The editor is a **combobox** with a string-resource list, not a plain textbox.
- First attempt (per brief): one plain fill of `FX_sCustomerPortal`, then Tab. **Result: the Caption committed `ApplyFullTextIndexScriptQuestion`**, the first option in the list. The plain fill did not drive the combobox's key handlers (the same plain-fill behaviour as the T1 Strings filter), so Tab committed the highlighted first item. Screenshot `t2-04-caption-FX_sCustomerPortal-after-entry.png` shows the wrong value. No string editor was opened on that existing string and nothing was edited on it. The wrong value was committed to StaticHeader's own Caption (the brief's update-on-commit pattern); the server-side intermediate value was not read.
- Correction (the one allowed): Caption cell double-clicked again; Ctrl+A in the combobox; `FX_sCustomerPortal` typed key by key (slow typing); the list showed no matching option; Tab. A fresh snapshot read the full Caption as `FX_sCustomerPortal` (ref e987). Screenshot `t2-05-caption-FX_sCustomerPortal-correction-after-tab.png` (the cell displays it truncated as `FX_sCustomerPort`).

### String creation (prompt, Yes once, String editor, OK once)

- With StaticHeader selected and Caption `FX_sCustomerPortal` committed, the Caption row ellipsis button was clicked once.
- **Prompt text (verbatim):** `String FX_sCustomerPortal does not exist. Create it?` (buttons Yes (active) and No). Answered **Yes** once. The prompt named the expected ID. Screenshot `t2-06-caption-ellipsis-creation-prompt.png`.
- String editor before the value (screenshot `t2-07-string-editor-before-value.png`): Name `FX_sCustomerPortal`; pre-filled String Value `FX_s Customer Portal` (the EXP-045 generated pattern); Description blank; Version `User version for user ...`; buttons OK and Help.
- String Value cell double-clicked (one action); the textbox was filled once with `Customer Portal`, then Tab. 0 corrections. Fresh snapshot: grid cell `Customer Portal`. Screenshot `t2-08-string-editor-value-customer-portal-before-ok.png`.
- OK clicked once; the editor closed. Screenshot `t2-09-after-string-OK-dialog-closed.png`.

### Designer Save (one)

- Toolbar Save clicked once. **Response (verbatim toast):** `Form [FX_CustomerPortal] and global object(s) were saved.` Screenshot `t2-10-designer-save-response.png`.
- Save state after: disabled; Undo disabled; no dialog open (fresh snapshot `evidence/playwright/t2-snapshot-after-save.yml`). Properties: Name `StaticHeader`; Caption `FX_sCustomerPortal` (full value in snapshot).
- Canvas: the Static shows as a small box with an icon at the left of the nested header strip. Its caption text is not legible in the T2 captures and was not read; the canvas text check belongs to the T5 readback.

### Stop at the T2 boundary

- T3 to T5 not performed: no Edit > String read-only check, no Theme Class, Justification, Size, No Colon, no second Save, no component-attributes dialog, no close/reopen.
- Final browser state: Designer tab selected; FX_CustomerPortal open and clean (Save disabled); no dialog, menu or unsaved change open; StaticHeader is the selected component (Properties, Component tab active). No editor is left open.

## T2 counts (this task only)

| Category | Count | Notes |
| --- | --- | --- |
| Tab list / tab select | 1 / 1 | list before select; select succeeded |
| Explicit untargeted snapshots | 7 | at gate, after placement, after Name, after first Caption commit, after correction, after String value, after Save (action results also return auto-snapshots; not counted) |
| Reference clicks | 9 | Toolbox Static; Name value cell (double-click); Caption value cell (double-click) ×2; Caption ellipsis; prompt Yes; String Value cell (double-click); String OK; Designer Save |
| Coordinate clicks | 1 | canvas placement click at (420, 137) |
| Toolbox selections | 1 | Static |
| Canvas placement clicks | 1 | one component created |
| Undo clicks | 0 | |
| Text entries | 4 | Name 1 (correct); Caption 2 (first plain fill committed the wrong value; correction typed key by key); String Value 1 (correct) |
| Per-field corrections | 1 | Caption (1 of 1 allowed). Name 0; String Value 0 |
| Key presses | 5 | Tab after Name; Tab after the wrong Caption commit; Ctrl+A in the Caption combobox; Tab after the correction; Tab after String Value |
| List opens (explicit) | 0 | the Caption combobox showed its list as part of the editor; not separately opened |
| Prompts | 1 | `String FX_sCustomerPortal does not exist. Create it?`, answered Yes once |
| Dialog opens | 1 | String editor (from the prompt); closed by OK |
| String editor OKs | 1 | |
| OK clicks | 1 | String editor |
| Designer Saves | 1 | toast `Form [FX_CustomerPortal] and global object(s) were saved.` |
| Screenshot calls | 11 | 11 distinct files, `t2-gate-01`, `t2-01` to `t2-10` |
| Waits / mouse moves / wheel | 0 / 0 / 0 | |
| Form closes / reopens | 0 / 0 | |
| Regenerate / Delete Form / Undo | 0 / 0 / 0 | |
| Server-event errors | 0 | |
| Session expiry / re-logins | 0 / 0 | |
| Browser evaluate / run-code | 0 | denied; none used |

## Action audit, cumulative (T1 + T2, through the end of T2)

| Category | T1 | T2 | Cumulative |
| --- | --- | --- | --- |
| Tab list / select | 1 / 1 | 1 / 1 | 2 / 2 |
| Explicit untargeted snapshots | 1 | 7 | 8 |
| Reference clicks | 4 | 9 | 13 |
| Coordinate clicks | 0 | 1 | 1 |
| Toolbox selections | 0 | 1 | 1 |
| Canvas placement clicks | 0 | 1 | 1 |
| Undo clicks | 0 | 0 | 0 |
| Mouse move / wheel | 1 / 1 | 0 / 0 | 1 / 1 |
| Text entries | 3 | 4 | 7 |
| Per-field corrections | 1 (Strings filter re-entry; no field value) | 1 (Caption) | 2 |
| Key presses | 2 | 5 | 7 |
| Waits | 1 | 0 | 1 |
| Screenshot calls (distinct files) | 8 (7) | 11 (11) | 19 (18) |
| Prompts | 0 | 1 (Yes) | 1 |
| Dialog opens / closes | 1 / 1 (Cancel) | 1 / 1 (OK) | 2 / 2 |
| OK clicks / String editor OKs | 0 / 0 | 1 / 1 | 1 / 1 |
| Designer Saves | 0 | 1 | 1 |
| Form closes / reopens | 0 / 0 | 0 / 0 | 0 / 0 |
| Regenerate / Delete Form | 0 / 0 | 0 / 0 | 0 / 0 |
| Server-event errors / session expiry / re-logins | 0 / 0 / 0 | 0 / 0 / 0 | 0 / 0 / 0 |

## Deviations and notes (T1)

- **D1 (screenshot overwrite; brief violation).** The first capture of the positive-control filter, taken after the plain fill that did not apply the filter, was written to `string-check-02-filter-FX_sUM-positive-control.png`. The second capture (after the Ctrl+A re-entry, showing FX_sUM = 1 row) used the **same filename** and overwrote it. The original image is lost. The pre-filter state is still in text form: the snapshot `evidence/playwright/page-2026-10-16T05-41-13-424Z.yml` shows the textbox containing `FX_sUM` with the unfiltered list (no FX_ rows), and the overwritten image is not cited as showing that state. Future captures will use new filenames.
- **D2 (search breadth).** See "Sources read" disclosure above.
- Expansion of the Components grid (Expand button) and hover highlights (Region01: user; Region00: header row after the Cancel click) are view state only. Properties still showed the Form; nothing was selected.

## T5 (cycle 4): ordinary close, reopen and readback

**Outcome of T5: completed.** After one ordinary close and one reopen through the Form menu recent-forms entry, the reopened Form shows StaticHeader under FlexLayoutHeader > Region00: header with Name `StaticHeader`, Caption `FX_sCustomerPortal`, Theme Class `FX_WhiteHeader`, Justification `Left`, Size `40; 1.5` (Width 40, Height 1.5), No Colon `True`, and the component FlexLayout dialog reads Region Index `0` and Margin `2,0,0,0` (read-only, closed with Cancel). The string reads `FX_sCustomerPortal` = `Customer Portal`. The Form is open, User scope, Save disabled, no dialog open. No edit, Save or other mutation was made in T5.

### Sources and gate (before the first browser action)

- Re-read in T5: `AGENTS.md` (full); `hello-world-pt7.md` lines 145-163; both component recipes and the session-expiry recipe (full); EXP-105 Outcome lines 383-403; EXP-083 Outcome lines 890-927; EXP-062-R4 Outcome lines 380-413. No broad search.
- Tab list (1) before the first selection, then select of tab 1 (succeeded). Fresh snapshot gate: FX_CustomerPortal selected; status bar `ScopeType: User`; Save and Undo disabled; no dialog; Form tab selected; Components tree (after one Expand click, view only) shows Pane (00) > flexlayoutPane_FX_CustomerPortal > Region00: header > FlexLayoutHeader > (Region00: header > StaticHeader; Region01: user); root Region01: main; Region02: footer. No standalone StaticHeader outside the header region. Screenshots `t5-01` (gate) and `t5-02` (tree expanded).

### Close (once)

- Form-tab close control (`closable FX_CustomerPortal`, a button on the tab) clicked once.
- **Prompt:** none appeared. The Form closed directly to the blank Designer (screenshot `t5-03`). No prompt text to record; no answer was given.
- Snapshot after close: no dialog, Save disabled (`evidence/playwright/t5-snapshot-after-close.yml`).

### Reopen (once)

- Form menu opened (one reference click), then the recent-forms entry `FX_CustomerPortal` clicked once. Not Select Form OK; no direct URL navigation.
- Result: FX_CustomerPortal reopened; ScopeType `User`; Save disabled; Name `FX_CustomerPortal` (screenshot `t5-04`). The canvas header strip shows `Customer Portal` (no colon) on the left part, which is the nested `Region00: header`; the right part is `Region01: user`, empty.
- The Details panel reopened collapsed. Expanding it was a view action: the first click landed on the Collections tab (D7, see below), then the Components tab was selected with a fresh reference (screenshots `t5-05`, `t5-06`, `t5-07`).

### Components tree after reopen (view only; Expand clicked once)

Expanded tree (screenshots `t5-08` and `t5-09`), in order:

```
Pane (00)
  flexlayoutPane_FX_CustomerPortal   (FlexLayout, Pane 0)
    Region00: header                 (root header region)
      FlexLayoutHeader               (FlexLayout, Container flexlayoutPane_FX_CustomerPortal, Pane 0)
        Region00: header             (nested header region)
          StaticHeader               (Static, Container FlexLayoutHeader, Pane 0, Tab 0)
        Region01: user               (nested user region)
    Region01: main                   (root)
    Region02: footer                 (root)
```

- The pre-close tree (`t5-02`) and the post-reopen tree have the same names and order. FlexLayoutHeader, its regions `header` and `user`, and the root `Region01: main` and `Region02: footer` are unchanged in name and order.
- StaticHeader's indentation is one level below the nested `Region00: header`, the same as before the close. Its Container column reads `FlexLayoutHeader`.

### StaticHeader readback (selected by its Components row; read-only)

Selected by its Components row (one reference click, `t5-10`). Values from the fresh snapshot `evidence/playwright/page-2026-10-16T06-00-14-045Z.yml` and the screenshots:

| Property (group as rendered) | Displayed after reopen | Expected | Screenshot |
| --- | --- | --- | --- |
| Name (Design) | `StaticHeader` | StaticHeader | `t5-10` |
| Caption (Design) | cell shows `FX_sCustomerPort` (truncated); snapshot full value `FX_sCustomerPortal` | FX_sCustomerPortal | `t5-10` (truncated), snapshot |
| Type (Design) | `Static`; From Device Master `True` | Static | `t5-10` |
| Theme Class (Appearance) | `FX_WhiteHeader` | FX_WhiteHeader | `t5-12` |
| Justification (Appearance) | `Left` | Left | `t5-12` |
| Layout > Unit | `Char` | (unchanged) | `t5-14` |
| Layout > Size | `40; 1.5` (Width `40`, Height `1.5`, Lock Size `False`) | 40; 1.5 | `t5-14` |
| Flex Attributes (Layout) | `Index: 0 Target: hea…` (truncated in cell) | Index 0, header | `t5-15` |
| Miscellaneous > Specific Attributes > No Colon | `True` | True | `t5-15` |

- Canvas text (`t5-10`, `t5-14`): the Static shows `Customer Portal` (the canvas adorner overlaps the first letter in some captures), with **no colon**. This matches the expected readback text.
- Association: the selected Static sits under `Region00: header` of FlexLayoutHeader in the tree (`t5-09`); its Flex Attributes display `Index: 0 Target: header`. Ownership of the component-level dialog is discussed in the next subsection (D6).

### Component FlexLayout dialog (read-only; opened once, Cancel)

- Hovered the Static's own canvas adorner icon at about (285, 138). Tooltip **`Edit FlexLayout Attributes`** shown (screenshot `t5-16`).
- One coordinate click on the same icon (no reference exists for a canvas adorner; documented). Dialog `FlexLayout` opened (screenshot `t5-17`).
- Fields displayed (read-only): Design group; **Region Index `0`** (dropdown, not opened); **Margin `2,0,0,0`**; Preview unchecked; no region name or component name shown in the dialog.
- **Cancel** clicked once. Snapshot after Cancel: dialog closed, Save disabled, no dialog open.

**Ownership (D6, unresolved):** the dialog was opened from the icon inside StaticHeader's own box and the tooltip matches the Static's adorner. StaticHeader was the selected Static (Properties header `StaticHeader (Static)`), and its Flex Attributes read `Index: 0 Target: header`. The dialog shows Margin `2,0,0,0`, which T4 set on this same component. These facts are consistent with ownership by StaticHeader, but the dialog itself does not display a component or region name, and FlexLayoutHeader's own dialog was not opened to compare. Ownership is therefore recorded as consistent and inferred, not positively proven (D6 remains unresolved).

### String re-check (read-only)

- Edit > String opened once. Strings filter typed slowly as `FX_sCustomerPortal`: **one row, `FX_sCustomerPortal`**. Row selected to display its properties (no change): Name `FX_sCustomerPortal`, **String Value `Customer Portal`** (screenshot `t5-18`).
- Left with **Cancel** once. Snapshot after Cancel: no dialog; Save disabled.

### Final state and clean check

- Form open: FX_CustomerPortal, User scope, Save disabled, no dialog, menu or editor open. Final screenshot `t5-19`. The Details panel is collapsed (view state only).
- StaticHeader not selected at the end (the Properties pane shows the Form in `t5-19`; the readback was done with StaticHeader selected and the Component tab active).

### Observed same-session readback vs durability

- What T5 shows: after one ordinary Designer close and reopen **in the same browser session**, the reopened Designer displayed the saved values listed above. This is same-session UI evidence of the close/reopen recovery.
- What T5 does **not** show: cross-session persistence, database-level durability, or replay verification. No new session, reload of the browser, Web Client runtime check, or database read was performed.

### Stop at the T5 boundary

- No Designer Save, no property change, no Regenerate, no Delete, no runtime action, no checkout action, no unload. No dialog or editor left open.
- A separate documentation-only final audit may be needed (see the final report). The coordinator decides.

### Deviations (T5)

- **D7 (ref resolved to a different tab; no effect).** The Details panel header click (`e787`) expanded the panel on the Collections tab. A later click on the snapshot ref labelled `e895` (which the snapshot listed as the Components tab) was reported by the tool as `getByRole('tab', { name: 'Collections' })`, i.e. the click landed on the already-active Collections tab. No data changed. A fresh snapshot then gave the Components tab as `e897`, and that click selected Components. **T6 correction:** the explanation above is wrong. In the snapshot `evidence/playwright/t5-snapshot-details-open.yml`, `e895` is the selected Collections tab and `e897` is the Components tab, so the click targeted Collections exactly as the tool reported. The error was a worker misreading of the snapshot, not a tool or snapshot discrepancy. No data changed. **Status: resolved as a worker reading error; no operator disposition beyond acceptance.**
- **D6 (carried).** Dialog ownership inferred, not displayed (see above). **Status: unresolved, pending operator disposition.**
- **File-tool error (T5; documentation edit, not a browser or Mongoose error).** One `Edit` call on this record failed with "String to replace not found in file" (controller order #108) and applied no change; the retry applied. The T5 summary "Server-event errors 0" was accurate, but this file-tool error was not listed there. Analysed in the T6 audit.
- Note (not a deviation): the canvas adorner for StaticHeader was clicked by coordinates (documented; no reference existed). The Properties grid was scrolled with the wheel (view only) to reach the Layout and No Colon rows.

### T5 counts (this task only)

| Category | Count | Notes |
| --- | --- | --- |
| Tab list / tab select | 1 / 1 | list before select; select succeeded |
| Explicit untargeted snapshots | 5 | gate, after close, after reopen, Details open, before select-Static (auto-snapshots from action results not counted) |
| Reference clicks | 14 | Components Expand (gate); Form-tab close; Form menu; recent-forms FX_CustomerPortal; Details header; Collections-resolved click (D7); Components tab; Components Expand (after reopen); StaticHeader row; Edit menu; String menu item; FX_sCustomerPortal row (String); Cancel (Global Objects); Cancel (FlexLayout) |
| Coordinate clicks | 1 | Static canvas adorner at (285, 138) (Edit FlexLayout Attributes; no reference existed) |
| Mouse moves (no click) | 3 | (420, 800) before tree scroll; (1740, 600) before Properties scroll; (285, 138) to read the adorner tooltip |
| Mouse wheel | 6 | tree +200; Properties +400, -250, +500, +300, +250 (view only) |
| Toolbox selections / canvas placement clicks | 0 / 0 | |
| Undo clicks | 0 | |
| Text entries | 1 | Strings filter `FX_sCustomerPortal` (slow). No property entry. 0 corrections |
| Key presses | 0 | |
| List opens / option selections | 0 / 0 | |
| Prompts | 0 | the Form close showed no save prompt |
| Dialog opens / closes | 2 / 2 | Global Objects (Cancel), FlexLayout component dialog (Cancel) |
| OK clicks / String editor OKs | 0 / 0 | |
| Designer Saves | 0 | none (T5 is read-only) |
| Form closes / reopens | 1 / 1 | close via Form-tab control; reopen via Form menu recent-forms entry |
| Regenerate / Delete Form | 0 / 0 | |
| Server-event errors / session expiry / re-logins | 0 / 0 / 0 | |
| Browser evaluate / run-code | 0 | denied; none used |

## Action audit, cumulative (T1 through T5)

| Category | T1 | T2 | T3 | T4 | T5 | Cumulative |
| --- | --- | --- | --- | --- | --- | --- |
| Tab list / select | 1 / 1 | 1 / 1 | 1 / 1 | 1 / 1 | 1 / 1 | 5 / 5 |
| Explicit untargeted snapshots | 1 | 7 | 10 | 5 | 5 | 28 |
| Reference clicks | 4 | 9 | 17 | 4 | 14 | 48 |
| Coordinate clicks | 0 | 1 | 0 | 1 | 1 | 3 |
| Toolbox selections | 0 | 1 | 0 | 0 | 0 | 1 |
| Canvas placement clicks | 0 | 1 | 0 | 0 | 0 | 1 |
| Undo clicks | 0 | 0 | 0 | 0 | 0 | 0 |
| Mouse moves (no click) | 1 | 0 | 1 | 1 | 3 | 6 |
| Mouse wheel | 1 | 0 | 1 | 0 | 6 | 8 |
| Text entries | 3 | 4 | 3 | 1 | 1 | 12 |
| Per-field corrections | 1 (Strings filter re-entry; no field value) | 1 (Caption) | 0 | 0 | 0 | 2 |
| Key presses | 2 | 5 | 5 | 1 | 0 | 13 |
| Waits | 1 | 0 | 0 | 0 | 0 | 1 |
| Screenshot calls (distinct files) | 8 (7) | 11 (11) | 11 (11) | 6 (6) | 19 (19) | 55 (54) |
| List opens | 0 | 0 | 3 | 0 | 0 | 3 |
| Option selections | 0 | 0 | 3 | 0 | 0 | 3 |
| Prompts | 0 | 1 (Yes) | 0 | 0 | 0 | 1 |
| Dialog opens / closes | 1 / 1 (Cancel) | 1 / 1 (OK, String editor) | 1 / 1 (Cancel) | 1 / 1 (OK, FlexLayout) | 2 / 2 (Cancel, Cancel) | 6 / 6 (Cancel 4, OK 2) |
| OK clicks / String editor OKs | 0 / 0 | 1 / 1 | 0 / 0 | 1 / 0 | 0 / 0 | 2 / 1 |
| Designer Saves | 0 | 1 | 1 | 1 | 0 | 3 |
| Form closes / reopens | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | 1 / 1 | 1 / 1 |
| Regenerate / Delete Form | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 |
| Server-event errors / session expiry / re-logins | 0 / 0 / 0 | 0 / 0 / 0 | 0 / 0 / 0 | 0 / 0 / 0 | 0 / 0 / 0 | 0 / 0 / 0 |

## T4 (cycle 3): component FlexLayout Margin, one Save

**Outcome of T4: completed.** StaticHeader's component-level FlexLayout attributes dialog was opened once from the Static's own canvas adorner; Margin was set to `2,0,0,0`; OK once (no message); one Designer Save succeeded (toast as earlier). Region Index and every other field were left unchanged. T5 (close, reopen, readback) was not performed.

### Sources and gate (before the first browser action)

- Re-read in T4: `AGENTS.md` (full); `hello-world-pt7.md` lines 145-163; both component recipes and the session-expiry recipe (full); EXP-105 Outcome lines 383-403; EXP-083 Outcome lines 890-927; EXP-062-R4 Outcome lines 380-413. No broad search.
- Tab list (1) before the first selection, then select of tab 1 (succeeded). Fresh snapshot: FX_CustomerPortal selected; status bar `ScopeType: User`; Save and Undo disabled; no dialog; Components tree `StaticHeader Static 0 FlexLayoutHeader 0` under `Region00: header` of `FlexLayoutHeader`, with `Region01: user` and root `Region01: main` and `Region02: footer`. The Properties pane still showed StaticHeader (Size `40; 1.5`, No Colon `True`, Flex Attributes `Index: 0 Target: header`).

### Locating the component-level control

- The accessibility snapshot contains no adorner elements (grep for `adorner` / `Edit FlexLayout` / `tooltip` found nothing). Per the brief, the Static's canvas adorner was reached by coordinates, documented below.
- Reselect: StaticHeader's Components row (one reference click, e468). Its Properties then showed StaticHeader.
- One mouse pointer move to (271, 138), the adorner icon inside the Static's own box (the box spans about x 258-553, y 125-152). Tooltip shown: **`Edit FlexLayout Attributes`** (screenshot `t4-02`).
- One coordinate click at (271, 138) on the same icon. This opened a dialog titled **`FlexLayout`** (screenshot `t4-03`).
- Ownership: the dialog does not display a component name or region name. It is the component-level dialog (Attributes > Design with Region Index and Margin; no region list), which is the form the brief expects for a Static. It was opened from the icon inside StaticHeader's own box, and the Flex Attributes row of StaticHeader reads `Index: 0 Target: header`. The Margin value is set on the selected component (StaticHeader is the selected component in the Properties header throughout). Ownership is therefore inferred from the icon position, the component-level form and the matching Flex Attributes, not from a name shown in the dialog. Documented as a limitation (see D6).

### Dialog fields: before and after the change

| Field | Before any change (observed) | After Margin entry, before OK (observed) | Changed by worker |
| --- | --- | --- | --- |
| Design group | present | present | no |
| Region Index | `0` (dropdown trigger; not opened) | `0` | no |
| Margin | blank | `2,0,0,0` | **yes (only change)** |
| Preview checkbox | unchecked | unchecked | no |
| Dialog Undo / Redo | disabled | Undo enabled | (dialog's own history, not the Designer Undo) |

- Margin editing: double-click on the Margin value cell (ref e1443) opened an inline textbox; one plain fill `2,0,0,0`, then Tab. 0 corrections.
- Fresh snapshot after Tab: Margin cell reads `2,0,0,0` (screenshot `t4-04`).
- **OK clicked once** (ref e1460). **Response:** the dialog closed with no message shown (screenshot `t4-05`). Canvas afterwards: the Static shows the caption text **`Customer Portal`** (no colon visible), in the header strip. The Save icon became enabled. The Components tree was shown collapsed to `Pane (00)` and the Properties pane showed the Form. This is a view refresh after the dialog closed; the worker took no action to change it, and no model change is implied.

### Designer Save (one)

- Save state before: enabled (snapshot ref e1505, no dialog). Save clicked once.
- **Response (verbatim toast):** `Form [FX_CustomerPortal] and global object(s) were saved.` Screenshot `t4-06-designer-save-response.png`.
- Save state after: disabled (fresh snapshot `evidence/playwright/t4-snapshot-after-save.yml`); no dialog open.
- Same-session observation only; the Margin value is not re-read after the Save in this task (the dialog was not reopened). Readback is T5.

### Stop at the T4 boundary

- Not performed: Form close/reopen; reading the attributes dialog again after the Save; Edit > String re-check; any T5 action.
- Final browser state: Designer tab selected; FX_CustomerPortal open and clean (Save disabled); no dialog, menu or editor open; StaticHeader not selected (the Properties pane shows the Form after the OK and Save).

### Deviations (T4)

- **D5 (gate screenshot and reselect in one parallel batch).** The gate screenshot `t4-01` and the reselect click were issued in the same tool batch. The screenshot is read-only, but its ordering against the click was not guaranteed; the image shows StaticHeader already selected (the state carried over from T3). **T6 correction:** the controller order shows the screenshot (order 13) before the reselect click (order 14), so the image is pre-click, not post-reselect. No functional effect. The gate state itself was established by the snapshot before the click (FX_CustomerPortal selected, Save disabled, no dialog, tree as expected).
- **D6 (dialog ownership is inferred).** The FlexLayout dialog does not show the component name or target region. Ownership rests on (a) the icon's position inside StaticHeader's own box, (b) the tooltip, (c) the component-level form, and (d) StaticHeader's Flex Attributes `Index: 0 Target: header`. A later readback in T5 can confirm Margin on StaticHeader's own dialog. **Status: unresolved, pending operator disposition.**
- **Observation (not a deviation):** after the dialog OK, the canvas showed the caption text `Customer Portal` before any close/reopen. EXP-083 recorded raw IDs remaining until reopen. Here the text resolved after the dialog OK and before the Save. Same session only; not verified after reopen (T5).
- D1, D2, D3, D4 carried from earlier tasks; see the T1 and T2 deviation sections.

## T4 counts (this task only)

| Category | Count | Notes |
| --- | --- | --- |
| Tab list / tab select | 1 / 1 | list before select; select succeeded |
| Explicit untargeted snapshots | 5 | gate, after reselect, after Margin entry, before Save, after Save (auto-snapshots from action results not counted) |
| Reference clicks | 4 | StaticHeader Components row (reselect); Margin value double-click; dialog OK; Designer Save |
| Coordinate clicks | 1 | Static adorner icon at (271, 138) (the Edit FlexLayout Attributes control; no reference existed) |
| Mouse moves (no click) | 1 | pointer hover at (271, 138) to read the tooltip |
| Toolbox selections / canvas placement clicks | 0 / 0 | |
| Undo clicks | 0 | |
| Text entries | 1 | Margin `2,0,0,0` (plain fill). 0 corrections |
| Key presses | 1 | Tab after Margin |
| Dialog opens / closes | 1 / 1 | FlexLayout component dialog, closed by OK |
| OK clicks (dialog) | 1 | no message shown |
| String editor OKs | 0 | |
| Prompts | 0 | |
| Designer Saves | 1 | toast `Form [FX_CustomerPortal] and global object(s) were saved.` |
| Screenshot calls | 6 | 6 distinct files `t4-01` to `t4-06` |
| Form closes / reopens | 0 / 0 | |
| Regenerate / Delete Form | 0 / 0 | |
| Server-event errors / session expiry / re-logins | 0 / 0 / 0 | |
| Browser evaluate / run-code | 0 | denied; none used |

## Action audit, cumulative (T1 + T2 + T3 + T4, through the end of T4)

| Category | T1 | T2 | T3 | T4 | Cumulative |
| --- | --- | --- | --- | --- | --- |
| Tab list / select | 1 / 1 | 1 / 1 | 1 / 1 | 1 / 1 | 4 / 4 |
| Explicit untargeted snapshots | 1 | 7 | 10 | 5 | 23 |
| Reference clicks | 4 | 9 | 17 | 4 | 34 |
| Coordinate clicks | 0 | 1 | 0 | 1 | 2 |
| Mouse moves (no click) | 1 | 0 | 1 | 1 | 3 |
| Toolbox selections | 0 | 1 | 0 | 0 | 1 |
| Canvas placement clicks | 0 | 1 | 0 | 0 | 1 |
| Undo clicks | 0 | 0 | 0 | 0 | 0 |
| Mouse move / wheel | 1 / 1 | 0 / 0 | 1 / 1 | 1 / 0 | 3 / 2 |
| Text entries | 3 | 4 | 3 | 1 | 11 |
| Per-field corrections | 1 (Strings filter re-entry; no field value) | 1 (Caption) | 0 | 0 | 2 |
| Key presses | 2 | 5 | 5 | 1 | 13 |
| Waits | 1 | 0 | 0 | 0 | 1 |
| Screenshot calls (distinct files) | 8 (7) | 11 (11) | 11 (11) | 6 (6) | 36 (35) |
| List opens | 0 | 0 | 3 | 0 | 3 |
| Option selections | 0 | 0 | 3 | 0 | 3 |
| Prompts | 0 | 1 (Yes) | 0 | 0 | 1 |
| Dialog opens / closes | 1 / 1 (Cancel) | 1 / 1 (OK, String editor) | 1 / 1 (Cancel) | 1 / 1 (OK, FlexLayout) | 4 / 4 |
| OK clicks | 0 | 1 (String editor) | 0 | 1 (FlexLayout dialog) | 2 |
| String editor OKs | 0 | 1 | 0 | 0 | 1 |
| Designer Saves | 0 | 1 | 1 | 1 | 3 |
| Form closes / reopens | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 |
| Regenerate / Delete Form | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 |
| Server-event errors / session expiry / re-logins | 0 / 0 / 0 | 0 / 0 / 0 | 0 / 0 / 0 | 0 / 0 / 0 | 0 / 0 / 0 |

## T3 (cycle 2): appearance and layout, one Save

**Outcome of T3: completed.** Theme Class `FX_WhiteHeader`, Justification `Left`, Size `40; 1.5` (Width 40, Height 1.5) and No Colon `True` were each set and displayed as expected, with no corrections. One Designer Save succeeded. T4 (component Margin) and T5 (readback) were not performed.

### Sources and gate (before the first browser action)

- Re-read in T3: `AGENTS.md` (full file); `hello-world-pt7.md` lines 145-163; both component recipes and the session-expiry recipe (full); EXP-105 Outcome lines 383-403 (complete section); EXP-083 Outcome lines 890-927 (complete section); EXP-062-R4 Outcome lines 380-413 (complete section). No directory-wide search was run in T3.
- Tab list (1) before the first selection, then select of tab 1 (succeeded). Snapshot gate: FX_CustomerPortal selected, status bar `ScopeType: User`, Save and Undo disabled, no dialog, Components tree shows `StaticHeader Static 0 FlexLayoutHeader 0` under the nested `Region00: header`; `FlexLayoutHeader` with `Region00: header` and `Region01: user`; root `Region01: main`, `Region02: footer`. Screenshot of the gate state is `t3-01` (it was captured with the string dialog open; no separate gate-only screenshot was taken).

### String verification (read-only)

- Edit > String opened once. Strings filter typed slowly as `FX_sCustomerPortal` (the plain fill was not used, per T1). Result: **one row, `FX_sCustomerPortal`** (screenshot `t3-01`).
- The row was selected once to display its properties (no change). Result: **Name `FX_sCustomerPortal`, String Value `Customer Portal`** (screenshot `t3-02`).
- Left with **Cancel** once. Snapshot after Cancel: no dialog; Save still disabled.

### Per-field results (as displayed after entry)

| Field | Group (as rendered) | Options listed / action | Displayed after entry | Corrections | Screenshot |
| --- | --- | --- | --- | --- | --- |
| Theme Class | Appearance | list shows **FX_Header** and **FX_WhiteHeader**; chose FX_WhiteHeader; Tab | `FX_WhiteHeader` | 0 | `t3-03` (list), `t3-04` (after Tab) |
| Justification | Appearance (row sits directly under Font; no sub-group) | list shows blank, **Default**, **Left**, **Center**, **Right** (Right was current); chose Left; Tab | `Left` | 0 | `t3-05` |
| Size (Width) | Layout > Size (sub-rows) | Size row (summary `20; 1`) was double-clicked and expanded into sub-rows Width `20`, Height `1`, Lock Size `False`; Width double-clicked, plain fill `40`, Tab | Width `40`; Size summary `40; 1` | 0 | `t3-06` (expanded), `t3-07` (Width 40) |
| Size (Height) | Layout > Size (sub-row) | Height double-clicked, plain fill `1.5`, Tab | Height `1.5`; Size summary **`40; 1.5`** | 0 | `t3-08` |
| No Colon | Miscellaneous > Specific Attributes (sub-group) | Specific Attributes label double-clicked to expand (a single click only selected it); No Colon `False` opened; list shows **True** and False (False was current); chose True; Tab | `True` | 0 | `t3-09` (group, before the change), `t3-10` (after Tab) |

- Sub-group note (observed): the tutorial's "Miscellaneous" is the group that holds Specific Attributes (and Extension Properties, Free-Form Data Type). Specific Attributes is a collapsed sub-group inside it, and No Colon lives inside that sub-group.
- Size note (observed): the Size row is a summary (`W; H`). Editing its sub-rows Width and Height worked directly; no combined Size editor was needed. Unit is `Char` (unchanged).
- Properties header lag (observed, same as EXP-105): after the string check and the Theme Class edit, the Properties combo still showed `static1_USER (Static)`. It showed `StaticHeader (Static)` after the Width edit (screenshot `t3-07`).

### Designer Save (one)

- Toolbar Save clicked once (snapshot ref from the same task). **Response (verbatim toast):** `Form [FX_CustomerPortal] and global object(s) were saved.` Screenshot `t3-11-designer-save-response.png`.
- Save state after: disabled (fresh snapshot `evidence/playwright/t3-snapshot-after-save.yml`); no dialog open; Undo disabled.
- Same-session observation only; not verified after a reopen (T5).

### Stop at the T3 boundary

- Not performed: component FlexLayout attributes dialog (no margin read or change); close/reopen; regeneration; any T4/T5 action.
- Final browser state: Designer tab selected; FX_CustomerPortal open and clean (Save disabled); StaticHeader selected (Properties, Component tab, scrolled to the No Colon row). No dialog, menu or editor open.

## T3 counts (this task only)

| Category | Count | Notes |
| --- | --- | --- |
| Tab list / tab select | 1 / 1 | list before select; select succeeded |
| Explicit untargeted snapshots | 10 | gate, after string filter, after Theme Class, after Justification, after Size expansion, after Width, after Height, after the Specific Attributes expansion, before Save, after Save (auto-snapshots from action results not counted) |
| Reference clicks | 17 | Edit menu; String menu item; FX_sCustomerPortal row (select); Cancel; StaticHeader tree row; Theme Class trigger; FX_WhiteHeader option; Justification trigger; Left option; Size value double-click; Width value double-click; Height value double-click; Specific Attributes label click (select); Specific Attributes label double-click (expand); No Colon trigger; True option; Save |
| Coordinate clicks | 0 | |
| Toolbox selections / canvas placement clicks | 0 / 0 | |
| Undo clicks | 0 | |
| Mouse move / mouse wheel | 1 / 1 | move to (1740, 600) and wheel deltaY 400 over the Properties grid to bring No Colon into view; view only |
| Text entries | 3 | string filter (slow, 1); Width `40` (1); Height `1.5` (1). 0 corrections |
| Per-field corrections | 0 | none needed |
| Key presses | 5 | Tab after Theme Class, Justification, Width, Height and No Colon |
| List opens | 3 | Theme Class, Justification, No Colon (ExtJS dropdown triggers) |
| Option selections | 3 | FX_WhiteHeader, Left, True |
| Prompts | 0 | |
| Dialog opens / closes | 1 / 1 | Global Objects (String check), closed by Cancel |
| OK clicks / String editor OKs | 0 / 0 | |
| Designer Saves | 1 | toast `Form [FX_CustomerPortal] and global object(s) were saved.` |
| Screenshot calls | 11 | 11 distinct files `t3-01` to `t3-11` |
| Waits | 0 | |
| Form closes / reopens | 0 / 0 | |
| Regenerate / Delete Form / Undo | 0 / 0 / 0 | |
| Server-event errors / session expiry / re-logins | 0 / 0 / 0 | |
| Browser evaluate / run-code | 0 | denied; none used |

## Action audit, cumulative (T1 + T2 + T3, through the end of T3)

| Category | T1 | T2 | T3 | Cumulative |
| --- | --- | --- | --- | --- |
| Tab list / select | 1 / 1 | 1 / 1 | 1 / 1 | 3 / 3 |
| Explicit untargeted snapshots | 1 | 7 | 10 | 18 |
| Reference clicks | 4 | 9 | 17 | 30 |
| Coordinate clicks | 0 | 1 | 0 | 1 |
| Toolbox selections | 0 | 1 | 0 | 1 |
| Canvas placement clicks | 0 | 1 | 0 | 1 |
| Undo clicks | 0 | 0 | 0 | 0 |
| Mouse move / wheel | 1 / 1 | 0 / 0 | 1 / 1 | 2 / 2 |
| Text entries | 3 | 4 | 3 | 10 |
| Per-field corrections | 1 (Strings filter re-entry; no field value) | 1 (Caption) | 0 | 2 |
| Key presses | 2 | 5 | 5 | 12 |
| Waits | 1 | 0 | 0 | 1 |
| Screenshot calls (distinct files) | 8 (7) | 11 (11) | 11 (11) | 30 (29) |
| List opens | 0 | 0 (Caption combobox list shown in its editor; not separately opened) | 3 | 3 |
| Option selections | 0 | 0 | 3 | 3 |
| Prompts | 0 | 1 (Yes) | 0 | 1 |
| Dialog opens / closes | 1 / 1 (Cancel) | 1 / 1 (OK, String editor) | 1 / 1 (Cancel) | 3 / 3 |
| OK clicks / String editor OKs | 0 / 0 | 1 / 1 | 0 / 0 | 1 / 1 |
| Designer Saves | 0 | 1 | 1 | 2 |
| Form closes / reopens | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 |
| Regenerate / Delete Form | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 |
| Server-event errors / session expiry / re-logins | 0 / 0 / 0 | 0 / 0 / 0 | 0 / 0 / 0 | 0 / 0 / 0 |

## Deviations and notes (T2)

- **D3 (Caption wrong first commit; corrected).** A plain fill of `FX_sCustomerPortal` into the Caption combobox followed by Tab committed the highlighted first list item, `ApplyFullTextIndexScriptQuestion`, not the typed text. The brief allows one correction; the correction used Ctrl+A and slow key-by-key typing, which showed no list match, and Tab then committed `FX_sCustomerPortal`. Effect: an intermediate Caption value was committed to StaticHeader (its own attribute, which the brief allows). No global object was edited and the existing string `ApplyFullTextIndexScriptQuestion` was not opened. The brief's plain-fill step does not work for this combobox; the procedure for Caption fields needs a candidate rule (slow typing, then check the list before Tab). **Status: unresolved, pending operator disposition.**
- **D1 (carried from T1; screenshot overwrite).** `string-check-02-filter-FX_sUM-positive-control.png` was written twice; the pre-filter image is lost. No T2 action touched it. **Status: unresolved, pending operator disposition.**
- **D2 (carried from T1; search breadth).** A directory-wide search of `experiments/` for "outcome" returned snippets from about 20 other records; no other record was opened. **Status: unresolved, pending operator disposition.**
- **D4 (T2 source reads partial).** AGENTS.md was read at lines 1-60 in T2 only (the full file was read in T1). The EXP-083 Outcome was read at lines 890-909 (the section continues to 927), and the EXP-105 and EXP-062-R4 Outcome sections at 383-402 and 380-412. The required T2 instruction facts were covered by these reads (T1 read the full EXP-083 Outcome). **Status: unresolved, pending operator disposition; no effect on the T2 result observed.**
- Observation (not a deviation): the Designer tab URL lost its `MGForm=FX_CustomerPortal` parameter between T1 and T2; the Form identity was verified from the tab heading, Details Name and scope in the T2 snapshot.

## Acceptance checks (T1 scope)

- **AC-1 (T1): PASS (observed).** Sources reviewed before the first browser action. Session usable (no expiry). User scope in the status bar. FX_CustomerPortal open and clean (Save disabled). FlexLayoutHeader with regions header and user present. Nested header region located on canvas (left part of the strip). No StaticHeader. String check: FX_sUM found (1 row) and FX_sCustomerPortal absent (0 rows). Dialog left with Cancel. Evidence: gate-01 to gate-04, string-check-01 to string-check-03.
- AC-2 to AC-7: not in T1 scope; not yet attempted. AC-6 so far: no change made (no component, region, Form or global object touched in T1).

## Unresolved qualifications carried into T5 (observed only)

- **D1** (T1): `string-check-02-filter-FX_sUM-positive-control.png` was overwritten; the pre-filter image is lost. Not recaptured. Pending operator disposition.
- **D2** (T1): a broad directory search for "outcome" returned snippets from about 20 records (none opened). Pending operator disposition.
- **D3** (T2): the Caption combobox committed `ApplyFullTextIndexScriptQuestion` on a plain fill + Tab; corrected once. Pending operator disposition.
- **D4** (T2): T2 source reads were partial; T3 and T4 read the complete sections. Pending operator disposition.
- **D5** (T4): the gate screenshot preceded the reselect click (controller order 13 and 14); StaticHeader was already selected from T3, so the gate image shows the pre-click state. Corrected in T6; no functional effect. **Status: corrected; no further disposition beyond acceptance.**
- **D6** (T4, carried to T5): dialog ownership inferred from icon position, tooltip, selected component, Flex Attributes `Index: 0 Target: header` and the Margin value set in T4; the dialog shows no component or region name. T5 re-opened the same dialog read-only and found Region Index 0 and Margin 2,0,0,0, which is consistent with StaticHeader but does not positively prove ownership (FlexLayoutHeader's own dialog was not opened for comparison). **Status: unresolved, pending operator disposition.**
- **D7** (T5): a click on a snapshot ref listed as the Components tab resolved to the Collections tab (tool-reported locator `tab 'Collections'`); no data change. A fresh ref then selected Components. Corrected in T6: a worker misreading of the snapshot (see the T5 deviations). **Status: resolved as a worker reading error.**

## Acceptance checks (T5 scope, same-session evidence)

- **AC-5: PASS (same session).** After one ordinary close and one reopen: StaticHeader under FlexLayoutHeader > Region00: header (tree, `t5-08`, `t5-09`); Name `StaticHeader`; Caption `FX_sCustomerPortal` (snapshot; cell truncated in `t5-10`); Theme Class `FX_WhiteHeader`; Justification `Left`; Size `40; 1.5`; No Colon `True` (`t5-10` to `t5-15`); Margin `2,0,0,0` and Region Index `0` in the read-only dialog (`t5-17`); canvas text `Customer Portal`, no colon (`t5-04`, `t5-10`); string `FX_sCustomerPortal` = `Customer Portal` (`t5-18`); FlexLayoutHeader and its regions unchanged in name and order; dialogs closed with Cancel; Form open and clean (`t5-19`). Limitation: D6 (ownership of the dialog is consistent but inferred).
- **AC-6 (T5 part): PASS.** No edit, Save, Regenerate, delete, drag, Undo, runtime action, unload or checkout action in T5. Only view actions (Expand, scroll, tab selection) and the read-only dialog open/Cancel.
- AC-1 to AC-4: earlier tasks (T1 to T4). AC-7: the final report (below in the final report of this task).

## Acceptance checks (T4 scope)

- **AC-4: PASS for the same-session steps; the post-save value is not re-read.** StaticHeader's component-level FlexLayout dialog was recorded before any change (Region Index `0`, Margin blank, Preview unchecked; `t4-03`). Only Margin was changed, to `2,0,0,0`, verified in the dialog before OK (`t4-04`). OK clicked once with no message (`t4-05`). One Designer Save with response `Form [FX_CustomerPortal] and global object(s) were saved.` (`t4-06`). Ownership of the dialog is inferred (D6), not shown in the dialog.
- AC-6 (so far): no other component, region, global object or Form changed in T4; no Regenerate; no dragging; no Undo; no runtime action; no unload; no checkout action. The only mutation was the Margin on StaticHeader.
- AC-5 (readback), AC-7 (final report): not in T4 scope.

## Acceptance checks (T3 scope)

- **AC-3: PASS for the displayed values; persistence not yet verified (T5).** String `FX_sCustomerPortal` = `Customer Portal` read in Edit > String (`t3-01`, `t3-02`). StaticHeader Theme Class `FX_WhiteHeader`, Justification `Left`, Size `40; 1.5` (Width 40, Height 1.5), No Colon `True`, each displayed after entry with 0 corrections (`t3-04`, `t3-05`, `t3-07`, `t3-08`, `t3-10`). One Designer Save with response `Form [FX_CustomerPortal] and global object(s) were saved.` (`t3-11`).
- AC-6 (so far): no other component, region or global object changed in T3; no Regenerate; no dragging; no Undo; no runtime action; no unload; no checkout action.
- AC-4, AC-5, AC-7: not in T3 scope (AC-7 is the final report).

## Worker-written file inventory (T1, T2 and T3)

Written by the worker (T2 additions are listed after the T1 files):
- `experiments/EXP-106-hello-world-part-7-section-4b-fx-customer-portal-static-header.md` (this record)
- `evidence/EXP-106/gate-01-designer-initial.png`
- `evidence/EXP-106/gate-02-components-tree-expanded.png`
- `evidence/EXP-106/gate-03-components-tree-scrolled-root-regions.png`
- `evidence/EXP-106/gate-04-after-string-check-cancel-clean.png`
- `evidence/EXP-106/string-check-01-global-objects-dialog-open.png`
- `evidence/EXP-106/string-check-02-filter-FX_sUM-positive-control.png` (overwritten once; see D1)
- `evidence/EXP-106/string-check-03-filter-FX_sCustomerPortal-absent.png`
- T2 (worker screenshots, 11 distinct files): `evidence/EXP-106/t2-gate-01-designer-start-before-placement.png`, `t2-01-toolbox-static-selected.png`, `t2-02-canvas-after-placement-click.png`, `t2-03-name-StaticHeader-after-entry.png`, `t2-04-caption-FX_sCustomerPortal-after-entry.png`, `t2-05-caption-FX_sCustomerPortal-correction-after-tab.png`, `t2-06-caption-ellipsis-creation-prompt.png`, `t2-07-string-editor-before-value.png`, `t2-08-string-editor-value-customer-portal-before-ok.png`, `t2-09-after-string-OK-dialog-closed.png`, `t2-10-designer-save-response.png`
- T2 (this record, updated): `experiments/EXP-106-hello-world-part-7-section-4b-fx-customer-portal-static-header.md`
- T2 snapshot files saved by the browser tool at the worker's request (`filename` parameter): `evidence/playwright/t2-snapshot-after-caption-correction.yml`, `evidence/playwright/t2-snapshot-string-editor-after-value.yml`, `evidence/playwright/t2-snapshot-after-save.yml`
- T3 (worker screenshots, 11 distinct files): `evidence/EXP-106/t3-01-string-check-FX_sCustomerPortal-filter.png`, `t3-02-string-check-FX_sCustomerPortal-value-read.png`, `t3-03-theme-class-list-opened.png`, `t3-04-theme-class-FX_WhiteHeader-after-tab.png`, `t3-05-justification-Left-after-tab.png`, `t3-06-size-cell-after-double-click.png`, `t3-07-width-40-after-tab.png`, `t3-08-height-1.5-size-after-tab.png`, `t3-09-properties-scrolled-to-specific-attributes.png`, `t3-10-no-colon-True-after-tab.png`, `t3-11-designer-save-response.png`
- T3 snapshot files saved by the browser tool at the worker's request: `evidence/playwright/t3-snapshot-gate-start.yml`, `t3-snapshot-string-filter-one-row.yml`, `t3-snapshot-after-theme-class.yml`, `t3-snapshot-after-justification.yml`, `t3-snapshot-size-expanded.yml`, `t3-snapshot-after-width.yml`, `t3-snapshot-after-height.yml`, `t3-snapshot-misc-visible.yml`, `t3-snapshot-before-save.yml`, `t3-snapshot-after-save.yml`
- T3 (this record, updated): `experiments/EXP-106-hello-world-part-7-section-4b-fx-customer-portal-static-header.md`
- T4 (worker screenshots, 6 distinct files): `evidence/EXP-106/t4-01-gate-designer-start.png`, `t4-02-hover-static-adorner-icon-tooltip.png`, `t4-03-component-flexlayout-dialog-before-change.png`, `t4-04-dialog-margin-2-0-0-0-after-tab.png`, `t4-05-after-dialog-OK-no-message.png`, `t4-06-designer-save-response.png`
- T4 snapshot files saved by the browser tool at the worker's request: `evidence/playwright/t4-snapshot-gate-start.yml`, `t4-snapshot-after-reselect.yml`, `t4-snapshot-dialog-after-margin-entry.yml`, `t4-snapshot-before-save.yml`, `t4-snapshot-after-save.yml`
- T4 (this record, updated): `experiments/EXP-106-hello-world-part-7-section-4b-fx-customer-portal-static-header.md`
- T5 (worker screenshots, 19 distinct files): `evidence/EXP-106/t5-01-gate-before-close-designer-start.png` (gate, before close), `t5-02-pre-close-components-tree-expanded.png` (tree before close), `t5-03-after-close-click-no-prompt.png` (after close, no prompt), `t5-04-reopened-via-form-menu-recent-entry.png` (reopened), `t5-05-details-panel-after-expand-click.png` (Details opened on Collections), `t5-06-details-panel-state-check.png` (Collections still active, D7), `t5-07-components-tab-selected-tree-collapsed.png` (Components tab), `t5-08-reopened-components-tree-expanded.png` (tree expanded), `t5-09-reopened-components-tree-scrolled-root-regions.png` (tree scrolled: StaticHeader and root regions), `t5-10-readback-static-properties-top-name-caption-theme-justification.png` (Name, Caption, Theme Class, Justification), `t5-11-readback-static-properties-size-flexattributes-no-colon.png` (scrolled past Size; overshoot, shows Events/Data Source), `t5-12-readback-static-layout-size-flexattributes-misc.png` (Appearance and Behavior), `t5-13-readback-static-layout-size-and-misc.png` (overshoot, Data Source and Events), `t5-14-readback-flexattributes-misc-nocolon.png` (Layout Size 40; 1.5 and Width/Height), `t5-15-readback-flexattributes-specific-attributes-no-colon.png` (Flex Attributes, Specific Attributes, No Colon True), `t5-16-hover-static-adorner-tooltip-readback.png` (tooltip Edit FlexLayout Attributes), `t5-17-component-flexlayout-dialog-readonly-after-reopen.png` (dialog: Region Index 0, Margin 2,0,0,0), `t5-18-string-readback-FX_sCustomerPortal-value.png` (String Customer Portal), `t5-19-final-state-clean-form-no-dialog.png` (final state)
- T5 snapshot files saved by the browser tool at the worker's request: `evidence/playwright/t5-snapshot-gate-start.yml`, `t5-snapshot-after-close.yml`, `t5-snapshot-after-reopen.yml`, `t5-snapshot-details-open.yml`, `t5-snapshot-before-select-static.yml`
- T5 (this record, updated): `experiments/EXP-106-hello-world-part-7-section-4b-fx-customer-portal-static-header.md`
- Tool-written page snapshots and console logs created during T5 (listed, not read unless cited): `evidence/playwright/page-2026-10-16T05-58-47-295Z.yml`, `...05-58-36-837Z.log`, `...05-59-01-670Z.yml`, `...05-59-10-306Z.yml`, `...05-59-15-819Z.yml`, `...05-59-27-315Z.yml`, `...05-59-41-789Z.yml`, `...05-59-47-455Z.yml`, `...05-59-54-772Z.yml`, `...06-00-14-045Z.yml` (StaticHeader selected; values cited), `...06-01-04-712Z.yml` (dialog open; values cited), `...06-01-17-537Z.yml`, `...06-01-24-331Z.yml`, `...06-01-28-954Z.yml`, `...06-01-35-219Z.yml`, `...06-01-39-897Z.yml` (string row; values cited), `...06-01-48-250Z.yml`; console logs `evidence/playwright/console-2026-10-16T05-58-36-837Z.log`.
- Tool-written page snapshots created during T4 actions (not read, listed for completeness): `evidence/playwright/page-2026-10-16T05-54-57-480Z.yml`, `...05-55-12-881Z.yml` (dialog open), `...05-55-24-881Z.yml`, `...05-55-37-273Z.yml`, `...05-55-47-996Z.yml`; console logs `evidence/playwright/console-2026-10-16T05-54-50-531Z.log`, `...532Z.log`.

Written by the browser tooling (not by the worker's file writes; listed for completeness):
- `evidence/playwright/page-2026-10-16T05-40-30-618Z.yml`, `...05-40-52-261Z.yml`, `...05-40-56-381Z.yml`, `...05-41-13-424Z.yml`, `...05-41-20-945Z.yml`, `...05-41-28-603Z.yml`, `...05-41-38-559Z.yml` (page snapshots)
- `evidence/playwright/console-2026-10-16T05-40-19-453Z.log`, `console-2026-10-16T05-40-19-454Z.log` (console logs; not read)

## Cleanup inventory (so far)

- Created objects (for later cleanup, T2):
  - Component `StaticHeader` (generated `static1_USER`, Type Static) in the nested `Region00: header` of FlexLayoutHeader in FX_CustomerPortal (User scope). Set in T3 (saved): Theme Class `FX_WhiteHeader`, Justification `Left`, Size `40; 1.5`, No Colon `True`. Set in T4 (saved): component FlexLayout Margin `2,0,0,0` (Region Index left at `0`). Its Caption `FX_sCustomerPortal` was set in T2 (the wrong intermediate value in D3 was corrected).
  - String `FX_sCustomerPortal` = `Customer Portal` (tenant-wide, User version), created once through the Caption ellipsis prompt (Yes once).
- Changed by T2, T3 and T4 besides the creations: none. No other component, region or Form changed. Three Designer Saves (T2, T3, T4). T5 changed nothing (read-only readback; one close and reopen).
- Cleanup inventory (for the operator's later cleanup; none performed by the worker): component `StaticHeader` in FX_CustomerPortal (User scope) and string `FX_sCustomerPortal` (tenant-wide, created in T2). Both remain in place at the end of T5.

## Final state (end of T1)

- Designer tab 1: FX_CustomerPortal open, User scope, clean (Save disabled), no dialog open, nothing selected, Components tree expanded (view state).
- Web Client tab 0 untouched.
- No Designer Save performed; no change to FX_CustomerPortal.

## Final state (end of T5)

- Designer tab: FX_CustomerPortal open, User scope, Save disabled, Undo disabled, no dialog, menu or editor open (`t5-19`). StaticHeader is not selected; the Details panel is collapsed (view state).
- Saved, then read back after one ordinary close and reopen (same session): StaticHeader (Name `StaticHeader`, Caption `FX_sCustomerPortal`, Theme Class `FX_WhiteHeader`, Justification `Left`, Size `40; 1.5`, No Colon `True`, component Margin `2,0,0,0`, Region Index `0`) under the nested `Region00: header`; string `FX_sCustomerPortal` = `Customer Portal` (one row; re-read in T5). Canvas text `Customer Portal`, no colon.
- Unchanged: FlexLayoutHeader and its regions `header` and `user`; root `Region01: main` and `Region02: footer` (names and order equal the pre-close tree).
- Same-session observation only; no cross-session or database-level durability is claimed.

## Final state (end of T4, superseded by the T5 state above)

- Designer tab: FX_CustomerPortal open, User scope, Save disabled (saved in T2, T3 and T4), no dialog, menu or editor open.

## Final state (end of T3, superseded by the T4 state above)

- Designer tab: FX_CustomerPortal open, User scope, Save disabled (saved in T2 and again in T3), Undo disabled, no dialog or editor open, StaticHeader selected (Properties, Component tab, scrolled to the No Colon row).
- Saved through T3: StaticHeader (Name `StaticHeader`, Caption `FX_sCustomerPortal`, Theme Class `FX_WhiteHeader`, Justification `Left`, Size `40; 1.5`, No Colon `True`) under the nested `Region00: header`; string `FX_sCustomerPortal` = `Customer Portal` (verified read-only in T3). Not yet done: component Margin (T4), close/reopen readback (T5).
- Same-session observation only; no cross-session or database-level durability is claimed.

## Final state (end of T2, superseded by the T3 state above)

- Designer tab: FX_CustomerPortal open, User scope, Save disabled (saved once in T2), Undo disabled, no dialog or editor open, StaticHeader selected (Properties, Component tab).
- Saved in T2: StaticHeader (Name, Caption `FX_sCustomerPortal`) under the nested `Region00: header`; string `FX_sCustomerPortal` = `Customer Portal`.

## Knowledge state (T5)

- Same-session close via the Form-tab close control produced no save prompt after a T4 Save: **observed** (one instance).
- Reopen via Form menu recent-forms entry restored the saved Designer state (tree, Properties values, canvas text, Margin, string) in the same session: **observed** (one instance; same-session UI only).
- Canvas text after reopen shows `Customer Portal` without a colon (differs from the raw-ID behaviour recorded in EXP-083 and EXP-062-R4 before reopen; here the text was already resolved before the close): **observed**.
- Tooltip `Edit FlexLayout Attributes` on the Static's own adorner; component dialog shows Region Index `0` and Margin `2,0,0,0` on reopen: **observed**.
- Ownership of the component dialog by StaticHeader: **unresolved** (D6; consistent, not positively proven).
- Snapshot ref `e895` was the selected Collections tab; the earlier "mismatch" was a worker misreading (corrected in T6): **observed**, no effect.
- Cross-session persistence, database durability, runtime (Web Client) display: **not verified** (out of scope).

## Knowledge state (T4)

- A Static's own canvas adorner icon, inside its box at its top-left, shows the tooltip `Edit FlexLayout Attributes`; a click opens a `FlexLayout` dialog with Design > Region Index and Margin (no region list): **observed** (one instance). The adorner is not in the accessibility tree; it was reached by a coordinate click (documented).
- That dialog's Region Index was `0` and Margin blank before the change; Margin `2,0,0,0` entered by plain fill + Tab displayed correctly before OK: **observed**.
- OK on the dialog closed it with no message; the canvas then showed the caption text `Customer Portal` on the Static, without a colon, before any close/reopen: **observed** (same session). This differs from the raw-ID note in EXP-083 and is recorded as an observation only.
- The Save after the dialog OK showed the standard toast: **observed**.
- Ownership of the dialog (StaticHeader rather than another component) is inferred, not displayed by the dialog: **unresolved** (D6; T5 readback to confirm Margin on StaticHeader).
- Not verified: persistence after reopen, the Margin after the Save: T5.

## Knowledge state (T3)

- Theme Class dropdown lists the classes FX_Header and FX_WhiteHeader; FX_WhiteHeader chosen and displayed after Tab: **observed**.
- Justification list options blank, Default, Left, Center, Right; Left chosen and displayed after Tab: **observed**.
- Layout Size is a summary row (`W; H`); double-clicking it expands Width, Height and Lock Size sub-rows. Width 40 and Height 1.5 entered by plain fill + Tab display `40; 1.5`: **observed**.
- Specific Attributes is a collapsed sub-group under Miscellaneous; its double-click expands it. No Colon list has True and False; True chosen and displayed: **observed**.
- Plain fill + Tab worked for Width and Height (plain text editors), while plain fill into the Caption combobox committed the wrong item in T2. The dropdown lists here were opened by a trigger click and chosen by option click: **observed** (one instance per field).
- Save toast after the T3 Save is the same wording as earlier Saves: **observed**.
- Not verified: persistence after reopen, canvas caption text, Margin: T4 and T5.

## Knowledge state (T2)

- Toolbox Static + one canvas click in the nested header region creates a child Static of Region00: header; generated name `static1_USER`, default Justification Right, Size 20; 1, Flex Attributes `Index: 0 Target: header`: **observed** (one session).
- Caption is a combobox with a string-resource list: a plain fill + Tab committed the highlighted first item (`ApplyFullTextIndexScriptQuestion`); slow key-by-key typing + Tab committed the typed text: **observed** (one instance each). A candidate rule for Caption fields (slow typing and checking the list before Tab) is **candidate_procedure**, not verified.
- Creation prompt wording `String FX_sCustomerPortal does not exist. Create it?` and the pre-filled value `FX_s Customer Portal`: **observed**.
- Save toast wording and Save-disabled state after Save: **observed**.
- Not verified: canvas caption text, persistence after reopen, the Static's parent id (tree depth only). These are for T5.

## Knowledge state (T1)

- Tree nesting, FlexLayoutHeader children, absence of StaticHeader, canvas location of the header region: **observed** (same session).
- String FX_sUM present and FX_sCustomerPortal absent (String dialog, same session): **observed**.
- Strings filter behavior (plain fill does not apply; Ctrl+A plus slow typing applies): **observed** (one session).
- Nothing is verified or replay-verified in T1. No cross-session durability is claimed.

## T6 (cycle 5): documentation-only final acceptance audit

**Scope and conduct.** This task made **zero browser calls** and **zero Mongoose mutations**; the Designer was not touched. Inputs read: AGENTS.md (lines 1-70 in this task; the complete file was read in T5 and earlier tasks; no browser action depended on this read), this record, the five controller tables `evidence/EXP-106/harness-audit-T1.md` to `harness-audit-T5.md`, the evidence directory listing, `evidence/playwright/t5-snapshot-details-open.yml` (D7), and the images `t4-01` and `t4-05` (D6 corroboration). Writes: this record only (11 Edit calls, listed under the file inventory). No evidence file was created, modified or overwritten. Controller tables were not edited.

**Conclusion (short).** The functional chain is supported by same-session evidence: one Static placed under the nested header region, named, captioned, the string created and verified, the four layout/appearance values displayed, the component Margin set and saved, and a close/reopen readback that reproduces the saved state in the same session. Two points are not proven: (i) that the Margin dialog belongs to StaticHeader rather than FlexLayoutHeader (D6, consistent but inferred); (ii) persistence beyond this session (never claimed). Completion is not declared here; the operator decides.

### 1. Controller tables: what they establish

- Each table lists tool calls in order with tool, key argument and result. Errors: **T5 #108 only** (file-tool, see section 3). Exact-values list identical in all five tables.
- **"prohibited-tool hits"** = `browser_type` count per task: T1 3, T2 4, T3 3, T4 1, T5 1 (12 total). These are typed entries into fields this brief authorized (Strings filter; Name; Caption; String Value; Width; Height; Margin). The controller flags them as "may be allowed by other briefs"; in this brief they are permitted. No tool call was denied.
- **"exact mismatches=0"** in every table measures typed text against the exact-values list. It does **not** measure committed or displayed values, so it does not cover D3 (the wrong Caption commit).
- **Header counts are not reproducible from the rows.** Examples: T1 header "12 actions, 11 reads" against 61 rows (19 Read rows); T2 header "19 reads" against 20 Read rows. The row lists are used below. The controller's count definitions are an operator question (section 10).

### 2. Browser-operation reconciliation (rows verified against controller tables)

| Category | T1 | T2 | T3 | T4 | T5 | Total |
| --- | --- | --- | --- | --- | --- | --- |
| Tab list / tab select | 1 / 1 | 1 / 1 | 1 / 1 | 1 / 1 | 1 / 1 | 5 / 5 |
| Snapshot calls | 1 | 7 | 10 | 5 | 5 | 28 |
| Screenshot calls (distinct files) | 8 (7) | 11 (11) | 11 (11) | 6 (6) | 19 (19) | 55 (54) |
| Mouse moves (no click) | 1 | 0 | 1 | 1 | 3 | 6 |
| Mouse wheel | 1 | 0 | 1 | 0 | 6 | 8 |
| Reference clicks | 4 | 9 | 17 | 4 | 14 | 48 |
| Coordinate clicks | 0 | 1 | 0 | 1 | 1 | 3 |
| Typed entries | 3 | 4 | 3 | 1 | 1 | 12 |
| Key presses (Tab, Control+a) | 2 | 5 | 5 | 1 | 0 | 13 |
| Wait | 1 | 0 | 0 | 0 | 0 | 1 |

- **Read-only or view operations:** snapshots 28, screenshots 55, mouse moves 6, wheel 8 = 97; with tab list/select 10 (browser navigation, not a Mongoose action) = **107** non-mutating calls.
- **UI clicks:** 48 reference + 3 coordinate = **51**. Of these: Save 3; OK 2 (T4 dialog, T2 String editor); Cancel 4; prompt Yes 1; ellipsis 1; Toolbox 1; canvas placement 1; the rest are menu opens, expands, tab/row selections and cell double-clicks.
- **Input operations:** 12 typed + 13 keys + 1 wait = **26**.
- **Total browser calls: 184.** Undo 0; drag 0 (no drag tool in any table); Regenerate 0; Delete Form 0; runtime action 0; unload 0; checkout 0; re-login 0; session expiry 0; server-event error 0.
- Dialogs: 6 opened, 6 closed (Cancel 4, OK 2). Prompts: 1 (Yes). Designer Saves: 3 (one per save point, each with its toast). Form close/reopen: 1/1 (T5).
- **Corrections to earlier cumulative tables (made in place in T6):** (a) the T1–T5 cumulative row for mouse moves read 0/0/0/1/3 = 4; correct values are 1/0/1/1/3 = 6 (controller rows: T1 28, T3 74, T4 18, T5 50, 61, 77). (b) The T1–T4 cumulative row for mouse moves read 0/0/0/1 with cumulative 1; correct 1/0/1/1 with cumulative 3. (c) The T1–T4 mouse-move/wheel row read T4 0/0 with cumulative 2/2; correct T4 1/0 with cumulative 3/2. Mouse-wheel totals and all other cumulative rows reconcile with the controller tables.

### 3. File-tool calls and error #108

- **File-tool calls (controller rows):** Write 1 (record created, T1); Edit 44 in total (T1 1, T2 11, T3 9, T4 12, T5 11) of which **43 applied and 1 failed** (#108). Read/Grep/Glob calls appear in every table but their totals do not reproduce the headers (section 1) and are not totalled here.
- **Classification of #108:** a **file-tool error on a documentation edit**. It is not a browser error, not a Mongoose error and not a server-event processing error; no Mongoose state was involved.
- **Cause (not confirmed):** the tool returned only a truncated preview (890 characters) of the `old_string`, so the exact mismatch is not shown. As I composed it, the `old_string` ended with the heading `## Final state (end of T4, superseded by the T5 state above)`; the file's heading at that point was `## Final state (end of T4)`, and the successful retry matched that heading. A heading-suffix mismatch is the most likely cause. An earlier version of this audit called the string "composed from memory"; that was a guess and is withdrawn. The tool reports no match and applies no partial edit.
- **Subsequent file state (verified):** after the failure the T4 final-state block was still present (Grep, controller order 112; Read, order 113). The retry (order 114) applied. A Grep in this audit found exactly one `## Final state (end of T5)` heading (line 666), the T4 block marked superseded (line 673), the T5 Knowledge state (line 688), the T5 D6 and D7 entries (lines 328-329), and the replaced Next-step text (section "Next permitted step"). **The documentation update completed; the error is recovered; no residual damage.**
- **Worker summary correction:** the T5 report stated "Server-event errors 0" (accurate) and listed no file-tool error. That omission is corrected here and in the T5 deviations.

### 4. Acceptance checks, reconciled

**AC-1 (T1 gate and collision check): functionally supported; procedurally conditional on D1 and D2.** Gate: `gate-01` (FX_CustomerPortal, User scope, Save disabled, no dialog), `gate-02` and `gate-03` (tree: Pane (00) > flexlayoutPane_FX_CustomerPortal > Region00: header > FlexLayoutHeader > Region00: header, Region01: user; root Region01: main, Region02: footer; no StaticHeader). Positive control: `string-check-02` (final capture, after the Ctrl+A re-entry) shows FX_sUM with one row; the pre-filter capture was overwritten (D1) but its state is preserved in snapshot `evidence/playwright/page-2026-10-16T05-41-13-424Z.yml` (textbox `FX_sUM`, unfiltered list), which exists. Absence: `string-check-03` (filter `FX_sCustomerPortal`, no row) with the filter text in the snapshot. Dialog left with Cancel and Save disabled (`gate-04`). Limits: the canvas location of the header region rests on pixel positions in screenshots; the record's claim of a "left part / right part" split is visual.

**AC-2 (one Static, name, caption, prompt, string, one Save): functionally supported; procedurally conditional on D3.** Controller rows: Toolbox row 14, one canvas click row 17 (420,137), name entry row 23, Caption entry rows 31 (wrong) and 39 (correct), prompt answered Yes row 50, String Value entry row 56, String OK row 62, one Save row 66. Evidence: `t2-02` (placement), tree rows showing `static1_USER` then `StaticHeader` under the nested `Region00: header` (`t2-03` and the T2 snapshot), `t2-06` (prompt text), `t2-08` and `t2-09` (value and OK), `t2-10` and `evidence/playwright/t2-snapshot-after-save.yml` (toast, Save disabled). Limits: parent identity is shown by tree depth and the Container column (`FlexLayoutHeader`), not by a parent-id read. **D3:** the brief's plain-fill step committed the wrong Caption; one correction was used (within the limit). The intermediate value sat on this Static's own Caption and was overwritten; the server-side intermediate was not read.

**AC-3 (string read; four properties displayed; one Save): functionally supported.** String: `t3-02` and `t5-18` (one row; Name `FX_sCustomerPortal`; String Value `Customer Portal`). Theme Class `FX_WhiteHeader` (list `t3-03` showing FX_Header and FX_WhiteHeader; `t3-04` after Tab; re-displayed after reopen in `t5-12`). Justification `Left` (list blank, Default, Left, Center, Right; `t3-05`; `t5-12`). Size `40; 1.5` (Width 40, Height 1.5; `t3-07`, `t3-08`; `t5-14`). No Colon `True` under Miscellaneous > Specific Attributes (`t3-10`; `t5-15`). Corrections: 0 for every field. One Save with toast (`t3-11`, controller row 93). Limits: the Caption cell truncates in screenshots (the full value comes from the snapshot text).

**AC-4 (dialog recorded before change; only Margin set; OK once; one Save): functionally supported for the value and dialog; target identity conditional on D6.** Before change: Region Index `0`, Margin blank (`t4-03`). Entry: Margin `2,0,0,0` by one fill + Tab (`t4-04`; controller rows 26-29). OK once, no message (`t4-05`, row 34). One Save with toast (`t4-06`, row 39). Only-Margin: the dialog displays two fields (Region Index, Margin) and the action log shows one dialog-field entry; Region Index was `0` before and after (`t4-03`, `t4-04`, `t5-17`). Ownership: see D6. **Corroboration (visual, approximate):** between `t4-01` (before the T4 dialog; Justification already Left; no caption text visible) and `t4-05` (after OK), the Static outline's left edge moves from roughly x 258 to roughly x 273 while the header strip's left edge stays at roughly x 258 and the divider stays at roughly x 703. That is consistent with a component-level margin on the Static rather than on the strip. This is an estimate from the screenshots, not a measurement.

**AC-5 (readback after one ordinary close and reopen): functionally supported in the same session; conditional on D6 for the Margin link.** Close: Form-tab control (controller row 22), no save prompt (`t5-03`). Reopen: Form menu recent-forms entry (rows 27-29), Form clean, User scope (`t5-04`). Tree after reopen (`t5-08`, `t5-09`; row list in `evidence/playwright/page-2026-10-16T05-59-54-772Z.yml`) has the same row names and order as the pre-close tree (expanded row list in `evidence/playwright/page-2026-10-16T05-58-47-295Z.yml`; screenshot `t5-02` shows only the top rows; `t5-snapshot-gate-start.yml` was taken before expansion and does not list the tree). StaticHeader values after reopen: Name `StaticHeader`, Caption `FX_sCustomerPortal` (snapshot), Theme Class `FX_WhiteHeader`, Justification `Left`, Size `40; 1.5`, No Colon `True`, Flex Attributes `Index: 0 Target: header` (`t5-10` to `t5-15`). Dialog read-only (controller rows 80-86): Region Index `0`, Margin `2,0,0,0`, closed with Cancel (`t5-16`, `t5-17`). Canvas text `Customer Portal`, no colon (`t5-04`, `t5-10`). String re-read and Cancel (`t5-18`). Final clean state (`t5-19`). Limits: "FlexLayoutHeader and its regions unchanged" is established by names and order only; their attributes were not re-read after T2 (the same limitation EXP-105 recorded).

**AC-6 (no other change; no Regenerate; no drag; Undo at most once; no runtime; no unload; no checkout; User scope): supported to the extent of observable evidence.** No Undo, Regenerate, Delete, drag, runtime, unload or checkout call appears in any controller table; scope shown as User in every snapshot. The only Mongoose mutations were the component attributes (Name, Caption, Theme Class, Justification, Size, No Colon, Margin) on StaticHeader and the one string creation. Limits: "no other component changed" rests on the tree and on the actions taken, not on reading every other component's attributes. In T5 the Collections view listed FX_Orders and FX_Items only as view; no edit followed.

**AC-7 (final report with evidence, counts, inventories, cleanup, final state): this audit and the record provide it.** Its gaps are the open items in section 5 and the operator decisions in section 6.

### 5. Deviations D1-D7 (functional impact, procedural impact, evidence, disposition)

| ID | What | Functional impact | Procedural impact (not waived) | Evidence | Status |
| --- | --- | --- | --- | --- | --- |
| D1 | T1 `string-check-02` overwritten by a second capture of the same filename (controller rows 41 and 48) | None on the outcome: the surviving capture shows one row; the lost pre-filter state is preserved in text in snapshot `page-…05-41-13-424Z.yml` | Violates the distinct-filename and never-overwrite rules | Controller rows 41, 42, 48; the snapshot file (exists) | Open: operator to accept the text-preserved record, or authorise a recapture in a new read-only task |
| D2 | T1 directory-wide search of `experiments/` for "outcome" | None on the procedure (no content from the snippets was used) | Brief forbade unrelated record searches. Controller rows 6-13 (7 Grep, 1 Glob) omit key arguments, so the broad search cannot be mapped to a row | Controller T1 rows 6-13; record D2 | Open: operator to accept as a procedural deviation |
| D3 | T2 Caption: plain fill + Tab committed `ApplyFullTextIndexScriptQuestion`; corrected by slow typing + Tab | Final Caption verified `FX_sCustomerPortal`. The wrong intermediate was on the new Static's own Caption only; the string resource was not edited. The server-side intermediate was not read | The brief's plain-fill step does not work for this combobox; one correction used (within the limit). The controller's zero mismatches does not cover committed values | Controller rows 31-41; `t2-04`, `t2-05`; snapshots | Open: operator to accept; decide whether future briefs should revise the Caption step (candidate rule: type slowly, check the list before Tab; not verified) |
| D4 | T2 source windows partial (AGENTS.md 1-60; EXP-083 890-909 of 927; EXP-105 383-402 of 403; EXP-062-R4 380-412); T6 AGENTS.md 1-70 only | None observed | Brief asked for the complete Outcome sections in T3-T5 and the full AGENTS.md at task start. T2 and T6 reads were partial | Controller T2 rows 1-8 (ranges not shown in table); record | Open: operator to accept or request a re-read in a later task |
| D5 | T4 gate screenshot "post-reselect" (record text) | None. StaticHeader was already selected from T3; the controller shows screenshot (order 13) before reselect click (order 14). The record's "post-reselect" wording was wrong | Record accuracy only; the reselect ref came from the T4 gate snapshot (ref e468) | Controller T4 rows 13-16; `t4-snapshot-gate-start.yml` | Corrected in T6; no further disposition beyond acceptance |
| D6 | Dialog ownership (see section 7) | Not proven: Margin on StaticHeader is consistent with all observations, but the dialog names no component | Acceptance of AC-4 and AC-5 for the Margin link is conditional | `t4-03`, `t4-04`, `t4-05`, `t5-16`, `t5-17`; tree and Flex Attributes | Open: operator decision (accept as "consistent, not proven", or authorise a read-only FlexLayoutHeader dialog comparison in a new task) |
| D7 | T5 snapshot ref `e895` clicked believing it was Components | None (Collections view tab; no data changed) | A wrong reference click. The earlier explanation (tool/snapshot mismatch) was my misreading | `t5-snapshot-details-open.yml` lines 225-228 (e895 selected Collections; e897 Components); controller row 41 (the tool output echoed `getByRole('tab', { name: 'Collections' })`; the controller row records the element as "Components tab in Details panel") | Corrected in T6; resolved as worker reading error |

Additional observation (not a deviation): the canvas caption text was not visible in the Static before the T4 dialog OK (`t2-02`, `t3-07`, `t3-08`, `t3-11`, `t4-01` show an icon and an empty box) and was visible after it (`t4-05`). The mechanism is not known; the reopen in T5 shows the text, so it is not a persistence problem. It is an observation only.

### 6. D6 in detail: what is and is not established

- **Selected component:** StaticHeader was selected by its Components row (Properties header `StaticHeader (Static)`). This shows the Properties target, not the owner of the attributes dialog.
- **Adorner tooltip:** hovering the icon inside the Static's rendered box (about (271,138) in T4; (285,138) in T5) shows `Edit FlexLayout Attributes`. This shows the label of that icon. It does not show whether another component's adorner (for example FlexLayoutHeader's) is drawn at the same spot, and no FlexLayoutHeader adorner was inspected.
- **Readback dialog:** it shows Design > Region Index `0` and Margin `2,0,0,0`. It shows no component name and no region name.
- **Tree and Flex Attributes:** StaticHeader's Container is `FlexLayoutHeader`, its Flex Attributes read `Index: 0 Target: header`. These establish placement, not Margin ownership. Region Index `0` could equally describe FlexLayoutHeader's own position in its parent region; that was not checked.
- **Visual corroboration:** the Static's outline moved right with the header strip fixed, between `t4-01` and `t4-05` (section 4, AC-4). Supportive, approximate.
- **Unproven:** that the dialog opened from that icon belongs to StaticHeader rather than FlexLayoutHeader; that FlexLayoutHeader's own Margin is still blank (no FlexLayoutHeader dialog was read after T4); and that no other adorner was involved. Ownership is therefore **consistent with the evidence but not positively proven**. Closing it needs a read-only check of FlexLayoutHeader's own dialog and a re-check of StaticHeader's dialog, in a new authorised browser task. This audit does not perform that check.

### 7. Cleanup inventory (for the operator; no cleanup performed)

- Component `StaticHeader` (generated `static1_USER`, Type Static) in FX_CustomerPortal, User scope, under the nested `Region00: header` of FlexLayoutHeader. Set values: Caption `FX_sCustomerPortal`, Theme Class `FX_WhiteHeader`, Justification `Left`, Size `40; 1.5`, No Colon `True`, component Margin `2,0,0,0` (ownership unproven, D6). Region Index `0`.
- String `FX_sCustomerPortal` = `Customer Portal` (tenant-wide, User version), created once through the Caption ellipsis (T2, Yes once). No other string was created or edited; the T1 and T3 Strings filters were read-only.
- Both remain in place at the end of T5 and T6.

### 8. Final observed Designer state (as left by T5; T6 made no browser calls)

- FX_CustomerPortal open in the Form tab; User scope; Save disabled; Undo disabled; no dialog, menu or editor open (`t5-19`). StaticHeader not selected. The Details panel is collapsed. Canvas shows `Customer Portal` in the left part of the header strip, no colon.

### 9. Worker-written file inventory (T1-T6)

- **Record:** `experiments/EXP-106-hello-world-part-7-section-4b-fx-customer-portal-static-header.md`. One Write (T1) and 43 applied Edits (T1 1, T2 11, T3 9, T4 12, T5 10 applied); plus 11 T6 Edits (this audit and the corrections). One failed Edit (#108).
- **Screenshots (54 distinct files in `evidence/EXP-106/`):** T1 7 (`gate-01` to `gate-04`, `string-check-01` to `03`); T2 11 (`t2-gate-01`, `t2-01` to `t2-10`); T3 11 (`t3-01` to `t3-11`); T4 6 (`t4-01` to `t4-06`); T5 19 (`t5-01` to `t5-19`). One overwrite event (D1).
- **Worker-requested snapshot files (23) in `evidence/playwright/`:** `t2-snapshot-after-caption-correction.yml`, `t2-snapshot-string-editor-after-value.yml`, `t2-snapshot-after-save.yml`; `t3-snapshot-*.yml` (10); `t4-snapshot-*.yml` (5); `t5-snapshot-*.yml` (5).
- **Controller-generated (not worker-written; not modified by the worker):** `evidence/EXP-106/harness-audit-T1.md` to `harness-audit-T5.md`.
- **Tool-generated, unenumerated:** timestamped page snapshots and console logs under `evidence/playwright/` for this run (timestamps 2026-10-16T05:40 to 06:01). Not individually reviewed here.
- **Repository confinement:** writes limited to the EXP-106 record and `evidence/EXP-106/` (no new evidence file in T6). Authoritative git review remains with the operator; no shell or git request is made here.

### 10. Operator decisions outstanding

1. **D6** (ownership of the Margin dialog): accept as "consistent, not proven", or authorise a read-only FlexLayoutHeader dialog comparison (and StaticHeader re-check) in a new task.
2. **D1** (overwritten positive-control capture): accept the text-preserved record, or authorise a read-only recapture.
3. **D2** (broad T1 search): accept as a procedural deviation with no effect.
4. **D3** (Caption wrong first commit): accept as a corrected procedural deviation; decide whether the Caption step in future briefs should change (candidate rule, not verified).
5. **D4** (partial source windows in T2 and T6): accept, or request complete re-reads in a later task.
6. **D5 and D7**: corrected in this audit; accept as record corrections.
7. **Controller counts:** the header counts in the five controller tables cannot be reproduced from their rows; the operator should check the controller's definitions.
8. **#108**: accept as a recovered file-tool error (no state change).
9. **Cleanup:** decide whether `StaticHeader` and `FX_sCustomerPortal` remain for the tutorial sequence or are removed (no cleanup has been performed).

### 11. Is operator acceptance supportable?

- **Yes, with explicit limitations, for the functional outcome:** the placement, naming, captioning, string creation, property values, Margin entry and Save, and the same-session close/reopen readback are each supported by recorded actions, toasts, screenshots and snapshots. Acceptance should state: same-session evidence only; no cross-session or database durability; D6 open (Margin-to-StaticHeader link consistent but not proven); D1 lost pre-filter image (text preserved); D3 intermediate Caption on the new Static.
- **Not supportable as stated without a qualifier:** "the Margin 2,0,0,0 is on StaticHeader" as a proven fact. It can be recorded only as consistent with the evidence until D6 is closed.
- This audit does not declare experiment completion and does not request another browser inspection.

### 12. Continuation check (task_message_id 3fef4a08-ba08-4553-96ac-1deed98ef8b6; no browser calls)

- **Task identity (observation, not resolved here).** This continuation carries the same task_message_id as the first message of this conversation, which was labelled cycle 5, task T7 and carried the full EXP-106 brief. The T6 audit above was performed under task_message_id 4e181965-5592-477f-a206-d5bf662bd4f3 (cycle 5, task T6). The mapping used in this record is: T1 062e5bdf-ebc7-4a05-8dbe-6c3fb8cc5753 (cycle 0); T2 90611aee-1e9e-4c50-8e13-48befaa894af (cycle 1); T3 7e83d4ba-b3dd-4557-aafe-5d79cb31ddd4 (cycle 2); T4 b35504f0-bc2e-4e75-94c2-82abf8432e4c (cycle 3); T5 12376776-2a25-492d-a79f-1770b679053b (cycle 4); T6 4e181965-5592-477f-a206-d5bf662bd4f3 (cycle 5); this continuation 3fef4a08 (labelled cycle 5, task T7). The operator should confirm which label governs.
- **Verified against the harness tables.** Section 2 browser counts (snapshots 28, screenshots 55 with 54 distinct files, reference clicks 48, coordinate clicks 3, typed entries 12, key presses 13, dialog opens 6 and closes 6, Designer Saves 3, Form close/reopen 1/1); section 3 Edit counts (44 in total, 43 applied, 1 failed, #108); and the T1 to T5 cumulative tables. Mouse-move and mouse-wheel cumulative cells were corrected (section 2).
- **Corrections made in this continuation** (text only; no evidence file, screenshot, snapshot or controller table was changed): the operator-decision reference (section 10); the read-only wording (section 2); the cumulative mouse-move corrections (section 2); the #108 cause, now recorded as unconfirmed with the earlier "composed from memory" claim withdrawn (section 3); the file-state wording for the retry (section 3); the AC-2 snapshot citation; the AC-5 tree citations (pre-close tree from the expanded snapshot `page-2026-10-16T05-58-47-295Z.yml`, post-reopen from `page-2026-10-16T05-59-54-772Z.yml`); and the D7 locator provenance (section 5).
- **Not changed:** the T5 section, the earlier tables, the D1 to D7 dispositions, and all decisions reserved to the operator.

## Next permitted step

Documentation-only final audit completed in T6 (section "T6 (cycle 5)" above). Operator decisions are listed in section 10; the brief requires no further browser task. Earlier T5 text, kept as written: next permitted step, not performed in this run, was an operator-decided documentation-only final audit.

Next (not performed in this run, for the operator or a new task): an operator-decided documentation-only final audit of EXP-106 (D1-D7 dispositions; a decision on D6 dialog ownership, which could be closed by opening FlexLayoutHeader's own dialog read-only for comparison in a later authorized step; and the recipe candidates in the knowledge state). No further browser task is required by the brief after T5.

## Outcome (operator, 2026-10-16)

Accepted (observed). **Hello World Part 7 section 4b is complete:** FX_CustomerPortal's blue header strip shows the title **Customer Portal** (Static **StaticHeader** in FlexLayoutHeader's header region, Caption string **FX_sCustomerPortal**, Theme Class **FX_WhiteHeader**, Justification **Left**, Size **40; 1.5**, No Colon **True**, component Margin **2,0,0,0**), read back after an ordinary close and reopen. The operator decided acceptance and the dispositions below for EXP-106 only.

- Changed, for later cleanup:
  - **String** (tenant-wide, User version): `FX_sCustomerPortal` = `Customer Portal`, created through the Caption ellipsis (prompt "String FX_sCustomerPortal does not exist. Create it?", Yes once; pre-filled value `FX_s Customer Portal` replaced; OK once).
  - **Form FX_CustomerPortal (User scope):** new Static StaticHeader (generated `static1_USER`) under FlexLayoutHeader > Region00: header. Three Designer Saves (T2, T3, T4), each with the standard toast. No Regenerate, no Undo.
- **Run R-20261016-133953-QkK1** (7 worker tasks): T1 gate and string collision check (FX_sUM found, FX_sCustomerPortal absent); T2 placement, Name, Caption, string, Save; T3 string check, appearance and size, Save; T4 component Margin, OK, Save; T5 close/reopen readback; T6 documentation-only audit, interrupted by the Claude usage limit after it had written its section; T7 its completion. Paused for the usage limit and for the final disposition.
- Screenshots viewed by the operator assistant: `t4-03-component-flexlayout-dialog-before-change` (dialog with only Region Index 0 and Margin; Properties "StaticHeader (Static)", Size 40; 1.5, No Colon True; tree StaticHeader under FlexLayoutHeader > Region00: header), `t5-19-final-state-clean-form-no-dialog` (after reopen: bold white "Customer Portal", no colon, indented in the left part of the blue strip; Save disabled; User scope).
- Findings (observed):
  1. **Static in a Flex region:** Toolbox Static plus one canvas click in the nested region creates `static1_USER` there (default Justification Right, Size 20; 1, Flex Attributes `Index: 0 Target: header`).
  2. **Caption is a string-resource combobox:** a plain fill plus Tab committed the highlighted first list item (`ApplyFullTextIndexScriptQuestion`); key-by-key typing plus Tab committed the typed ID. Candidate rule for future briefs: type Caption string IDs key by key and check the list before Tab.
  3. **Property locations:** Justification is in Appearance (options blank, Default, Left, Center, Right). Size is a `W; H` summary row in Layout; double-clicking it shows Width, Height and Lock Size sub-rows. No Colon is in Miscellaneous > Specific Attributes (a collapsed sub-group, opened by double-click).
  4. **Component-level FlexLayout attributes:** the Static's own canvas adorner (top left inside its box; tooltip "Edit FlexLayout Attributes"; not in the accessibility tree, so reached by a coordinate click) opens a FlexLayout dialog with only Region Index and Margin.
  5. The canvas showed the resolved caption "Customer Portal" right after the dialog OK, before any close/reopen (unlike the raw IDs seen in EXP-083).
  6. The Properties header combo lagged after the rename again (as in EXP-105).
- Operator rulings (EXP-106 only): **D6 resolved:** the Margin dialog has no Type, Auto Size or Regions grid (which a FlexLayout's own dialog always shows, EXP-105) and was opened while Properties showed StaticHeader (Static); StaticHeader is the only non-FlexLayout component, so it is StaticHeader's dialog. **D3 accepted:** the intermediate value went only into the new Static's own Caption and was corrected; the existing string was not opened or edited. D1 (overwritten pre-filter screenshot), D2 (broad search) and D4 (partial source reads) accepted as procedural deviations; D5 and D7 accepted as record corrections; #108 accepted as a recovered file-tool error.
- Counts (T6 audit, T1-T5): reference clicks 48; coordinate clicks 3 (placement, adorner T4, adorner T5); typed entries 12; Caption corrections 1; prompts 1 (Yes); String editor OK 1; dialog OK 1; Designer Saves 3; Undo 0; Regenerate 0; Form closes / reopens 1 / 1 (no save prompt); server-event errors 0; re-logins 0.
- Limits: same-session UI evidence only; no runtime check.
- Confinement (git status): only `evidence/EXP-106/` and this record were written by the run.
- Next: Part 7 section 5 (07:31-08:51): two Statics in FlexLayoutHeader's user region: StaticCustIcon (Bitmap File customericon.png, i.e. FX_CustomerIcon from EXP-101; Justification Right; 4 x 1.5; No Colon True) and StaticCustID (Theme Class FX_WhiteHeader; Binding Type Variable, Customer ID, which this lesson does not define; Justification Left; 10 x 1.5; No Colon True).
