# EXP-067-R2 — T1 read-only preflight report (Hello World Part 4 Section 8a replay)

Run `R-20261013-011002-lSgL`, cycle 0, task T1. Worker session `f7c1ad6d-c6f4-47da-8379-fc79301e6afe`; task_message_id `18bef299-8845-4dea-a448-9e372515f8ee`. Date 2026-10-13. Editing scope User. Target Form `FX_Items`.

**Outcome: T1 complete. Stopped before any unload, close, reopen, Toolbox drop, property change or Save.** Read-only except view-state changes (panels expanded, tree expanded, selections, tab selection) and one Designer scope confirmation.

## 1. Sources

See the experiment record §3 (`experiments/EXP-067-R2-hello-world-part-4-section-8a-um-description-static-and-edit.md`). Summary: AGENTS.md, tutorial Section 8 and EXP-066-R2 read in full; EXP-067 record and T1 report read in full; EXP-062-R2, EXP-062-R4 and EXP-067 T2 read by targeted grep; EXP-067 T3 not opened.

## 2. Browser call log (in order; 53 explicit calls)

| # | Call | Result (observed) |
| --- | --- | --- |
| 1 | tabs list | 1 tab: `Mongoose` (Web Client), current |
| 2 | snapshot (untargeted) | Web Client Explorer; no runtime Form tabs; toolbar has `Designer` button (ref f1e39) |
| 3 | screenshot `t1-01` | Web Client Explorer; no Form tab; header identity |
| 4 | click `Designer` (Web Client toolbar, f1e39) | Opened a new tab (tab 1: Infor Mongoose Designer) |
| 5 | tabs select 1 | Succeeded (after the list in call 1) |
| 6 | snapshot (untargeted) | Designer: `Identify Your Editing Scope` dialog (Scope User; User = operator) |
| 7 | click `OK` (e305) | Dialog closed; footer `ScopeType: User` |
| 8 | snapshot (target e1, depth 3) | Designer: no Form open; Save/Regenerate/Undo/Redo disabled |
| 9 | click `Form` menu (e3) | Menu open: Definition, Sign Out, recent forms (FX_Items, IDOs, Property Classes, Sql Tables, Export/Import Strings, IDO Projects, FX_UMs, FX_HelloWorld01, Data Maintenance Wizard, Runtime Builder Selection) |
| 10 | find `Select Form` | No match (no Select Form item in this view) |
| 11 | find `Open` | Only the footer match |
| 12 | screenshot `t1-02` | Form menu open (see §3) |
| 13 | find `FX_Items` | One recent-form item (e322) |
| 14 | click `FX_Items` recent item (e322) | Designer tab heading `FX_Items` |
| 15 | snapshot (untargeted) | FX_Items open: Name, Version `User version for user …`, Form Type Normal, Is Master True; Save and Undo disabled; footer User |
| 16 | click `Expand Panel` (Details, e448) | Details panel expanded |
| 17 | find `Components` | Tab e574 |
| 18 | click `Components` tab (e574) | Components tab selected (Pane (00) and (01) collapsed) |
| 19 | click Components grid `Expand` (e646) | Tree expanded (17 rows) |
| 20 | click `FX_UMCombobox` row (e1162) | Row selected; Properties header `FX_UMCombobox (EnhancedCombo)` |
| 21 | find `Layout` | Layout group found (collapsed) |
| 22 | screenshot `t1-03` | Canvas and selected row (see §3) |
| 23 | snapshot (target e1193) | Component Properties tree |
| 24 | click Properties `Expand` (e1214) | All groups expanded |
| 25 | find `Location` | `7.75; 23.75` |
| 26 | find `Size` | `37.25; 2.15` |
| 27 | find `FX_PictureStatic` | Row e937 |
| 28 | click `FX_PictureStatic` row (e937) | Row selected |
| 29 | find `Location` | `10.5; 21.5` |
| 30 | find `Size` | `20; 9` |
| 31 | find `FX_RefreshButton` | Row e962 |
| 32 | click `FX_RefreshButton` row (e962) | Row selected |
| 33 | find `Location` | `12.1666666666667; 5.25` |
| 34 | find `Size` | `14.25; 1.89` |
| 35 | click `Form` tab (Properties, e275) | Form properties |
| 36 | find `Size` | Form Layout group collapsed; no value |
| 37 | find `Expand` | Form Properties toolbar Expand (e3355) |
| 38 | click Form Properties `Expand` (e3355) | Form Layout expanded |
| 39 | find `Size` | `69; 21` |
| 40 | find `Unit` | `Char` |
| 41 | screenshot `t1-04` | Form tab; Layout splitter rows; canvas (see §3) |
| 42 | tabs list | 2 tabs: 0 Mongoose (Web Client), 1 Designer (current) |
| 43 | tabs select 0 | Succeeded (after the list in call 42) |
| 44 | find `View` | Web Client View menu button (f1e14) |
| 45 | click `View` (f1e14) | Menu open with `Explorer` (checked), `User Preferences...`, `Inbox` |
| 46 | find `User Preferences` | Item f1e94 |
| 47 | click `User Preferences...` (f1e94) | Dialog `User Preferences` opened |
| 48 | find `Unload IDO Metadata With Forms` | No match (dialog not yet in the searched tree) |
| 49 | screenshot `t1-05` | Dialog visible; checkbox ticked (see §3) |
| 50 | find `Unload IDO` | `checkbox "Unload IDO Metadata With Forms" [checked]` (f1e165) |
| 51 | find `Close Window` | Button f1e114 (dialog title-bar control) |
| 52 | click `Close Window` (f1e114) | Dialog closed; no OK pressed |
| 53 | screenshot `t1-06` | Web Client Explorer; no dialog; no Form tab |

Counts: tab lists 2; tab selects 2; snapshots 5 (3 untargeted, 2 targeted); finds 22; clicks 16; key presses 0; typed entries 0; waits 0; wheel 0; screenshots 6 (all successful). **Total 53.**

## 3. Screenshots (what each proves, and does not prove)

All under `evidence/EXP-067-R2/`.

- **`t1-01-webclient-start-state-no-runtime-form-visible.png`**: Web Client before any Designer action. Shows the `Mongoose` tab (only tab), Explorer tree (My Folders, Master Explorer, Public Folders, User Folders), the header identity `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`, and **no runtime Form tab**. **Proves:** no runtime Form open at start; session usable (no modal). **Does not prove:** anything about Designer state.
- **`t1-02-designer-opened-form-menu-state.png`**: Designer Form menu open. Shows `Definition`, `Sign Out`, and the recent-forms list including `FX_Items`. The canvas is empty (no Form open yet). **Proves:** the recent-forms route exists and lists FX_Items; no Form was open before the select. **Does not prove:** the Form's identity (taken before FX_Items was selected).
- **`t1-03-fx_umcombobox-selected-properties-state.png`**: Designer FX_Items open (tab heading `FX_Items`). Canvas shows the Item, Description, Cost and Unit of Measure input fields; the `Import` button; the picture region (broken-image glyph, box about x 530–690, y 290–450); and the **empty target area** right of the picture box, below the Unit of Measure field (about x 690–810, y 290–360). The Components grid shows `FX_UMCombobox` selected (ComboBox; object.FX_UM; Pane 1; Tab 12). The Properties panel shows `FX_UMCombobox (EnhancedCombo)` with the Layout group collapsed. Footer `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`; Save icon greyed. **Proves:** identity; User scope; clean Save icon; FX_UMCombobox selected; the target area visibly empty; FX_UMCombobox clipped at the canvas right edge (about x 810). **Does not prove:** the Layout values (collapsed in this capture), the Pane 1 boundary, or the absence of components outside the frame.
- **`t1-04-designer-form-layout-size-unit-and-canvas-target-area.png`** (name overstates content): Designer FX_Items, Form tab. Properties show Name `FX_Items`; Version `User version for us…`; Form Type `Normal`; Is Master `True`; Layout group expanded with Splitter `Vertical`, Splitter Position `11`, Pane 0 Scroll Bars `Never`. The Components grid shows Pane (01) with `FX_PictureStatic` (Static; object.FX_Picture; Tab 0), `FX_RefreshButton` (PushButton; selected row), `FX_ItemStatic` (Tab 5). The canvas shows the same target area empty. Save icon greyed. **Proves:** identity; User scope; clean; the Form Layout splitter rows; the component rows named above. **Does not prove:** Form Size `69; 21` or Unit `Char` (both below the visible area; accessibility readbacks in §4 are the evidence).
- **`t1-05-user-preferences-unload-ido-metadata-read-only.png`**: Web Client User Preferences, Behavior page. The right-hand column shows `Unload IDO Metadata With Forms` ticked (first row of the right column). The footer shows `OK` and `Help` only (no Cancel). The status bar shows `Show Configuration Name On Caption (Object 1 of 1)`, which is the focus text of the dialog, not a record change. **Proves:** the displayed value of the checkbox (ticked). **Does not prove:** the stored value beyond this dialog's display; the accessibility readback in §4 (`[checked]`) is the stronger evidence.
- **`t1-06-after-preferences-close-window-webclient-state.png`**: After `Close Window`. Web Client Explorer; no dialog; no runtime Form tab. **Proves:** the dialog closed without a visible OK; no Form is open in the Web Client. **Does not prove:** that the preference was not written (no OK was pressed; no write is expected).

## 4. Accessibility readbacks (live; this task)

| Item | Field | Value |
| --- | --- | --- |
| FX_UMCombobox | Size / Location | `37.25; 2.15` / `7.75; 23.75` |
| FX_PictureStatic | Size / Location | `20; 9` / `10.5; 21.5` |
| FX_RefreshButton | Size / Location | `14.25; 1.89` / `12.1666666666667; 5.25` |
| Form | Size / Unit | `69; 21` / `Char` |
| Preference | Unload IDO Metadata With Forms | `[checked]` (before and after the close; not changed) |

## 5. Component list (live; 17 rows)

Pane (00): FormCollectionGrid (Grid; objects; tab 0); FX_ItemGridCol (GridColumn; object.FX_Item; 1); FX_DescriptionGridCol (object.FX_Description; 2); FX_CostGridCol (object.FX_Cost; 3); FX_UMGridCol (object.FX_UM; 4).

Pane (01): FX_PictureStatic (Static; object.FX_Picture; 0); FX_RefreshButton (PushButton; event FX_ImportPicture; 0); FX_ItemStatic (Static; 5); FX_ItemEdit (Edit; object.FX_Item; 6); FX_DescriptionStatic (Static; 7); FX_DescriptionEdit (Edit; object.FX_Description; 8); FX_CostStatic (Static; 9); FX_CostEdit (Edit; object.FX_Cost; 10); FX_UMStatic (Static; 11); FX_UMCombobox (ComboBox; object.FX_UM; 12).

Absent: `FX_UMsDescriptionStatic`, `FX_UMsDescriptionEdit`.

## 6. Target-area check

Target rectangles (rows; columns): Static 10.5–12.0; 42.5–54.5. Edit 12.5–14.39; 42.5–54.5.

- No overlap with any listed component (nearest: FX_PictureStatic 1.0 column to the left; FX_UMCombobox 0.6 row above).
- Inside the declared Form (69 × 21).
- Visible canvas (estimate from the EXP-067 T2 calibrated model x = 355 + 8.0·col): right edge at about x 791; the clip is at about x 810. Margin about 19 px. This is an estimate, not a native measurement.
- **Result: free and inside the Form.** The stop rule is not triggered.

## 7. Blockers, incidents and deviations

1. No Designer tab at start (the brief assumed one). Opened via the Web Client Designer toolbar button (new tab). Not a Form change.
2. The Designer Form menu has no `Open` item in this view; FX_Items was opened from the recent-forms list. The reopen route for later steps (Designer toolbar Open button, then Select Form) is not yet observed.
3. No runtime FX_Items Form open at start (EXP-067 T1 had one). Cause not established.
4. Preferences dialog has no Cancel; `Close Window` used (as in EXP-067 T1).
5. No screenshot timeouts in this task (EXP-067 T1 had two).
6. No blocker that stops T1.

## 8. Worker-written file inventory (T1)

- `experiments/EXP-067-R2-hello-world-part-4-section-8a-um-description-static-and-edit.md` (created).
- `evidence/EXP-067-R2/T1-preflight-report.md` (this file; created).
- `evidence/EXP-067-R2/t1-01-webclient-start-state-no-runtime-form-visible.png`
- `evidence/EXP-067-R2/t1-02-designer-opened-form-menu-state.png`
- `evidence/EXP-067-R2/t1-03-fx_umcombobox-selected-properties-state.png`
- `evidence/EXP-067-R2/t1-04-designer-form-layout-size-unit-and-canvas-target-area.png`
- `evidence/EXP-067-R2/t1-05-user-preferences-unload-ido-metadata-read-only.png`
- `evidence/EXP-067-R2/t1-06-after-preferences-close-window-webclient-state.png`
- Tool-written, not worker-authored: `evidence/playwright/` snapshot files from this task (timestamps 2026-10-12T17:10–17:13 UTC, including `page-2026-10-12T17-11-01-700Z.yml`, `…17-11-11-278Z.yml`, `…17-11-17-196Z.yml`, `…17-11-32-742Z.yml`, `…17-11-42-167Z.yml`, `…17-11-46-761Z.yml`, `…17-11-53-230Z.yml`, `…17-12-05-905Z.yml`, `…17-12-23-186Z.yml`, `…17-12-34-764Z.yml`, `…17-12-46-091Z.yml`, `…17-12-54-624Z.yml`, `…17-13-01-982Z.yml`, `…17-13-31-501Z.yml`, `…17-13-37-218Z.yml`, `…17-13-53-646Z.yml`) and console log files written by the tool (not read). Not exhaustively listed; the harness and operator git review are authoritative.

## 9. State at end of T1

- Designer: tab 1 `FX_Items` open, User scope, clean (Save disabled), Details panel and Components tree expanded, FX_RefreshButton selected in the grid. No dialog.
- Web Client: tab 0, Explorer, no runtime Form, no dialog. Preference `Unload IDO Metadata With Forms` checked and unchanged.
- Nothing has been unloaded, closed, reopened, added, saved or changed.
