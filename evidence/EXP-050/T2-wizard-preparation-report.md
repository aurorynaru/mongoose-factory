# EXP-050 T2 — Wizard preparation to the final review page (Finish NOT invoked)

Run: `R-20261011-034347-PXmt` · experiment EXP-050 · cycle 1 · task T2
Worker session: `ee68bc3c-c585-4d42-8b66-0d0e1c2a2641` · task_message_id `d238acb7-c3d4-4f8a-9648-bfe170bd0fb8`
Date: 2026-10-11 (system date). Configuration `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`.
Record: `experiments/EXP-050-hello-world-part-2-create-fx-items-multi-view-form.md`.

**Stopped state:** the `Form Wizard - MultiView` dialog is open on its final page (page 4). Name `FX_Items`, Data Source `FX_Items`, Save Template unchecked, Finish enabled and NOT pressed. The Designer behind the wizard is still the vendor `IdoPropertyClasses` view with Save and Undo disabled. Nothing has been created.

## Preflight (before any action)

- Designer tab 0: vendor `IdoPropertyClasses` design view, Save and Undo disabled, status bar `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`, no dialog or unsaved-change prompt.
- Web Client tab 1: IDO Properties runtime tab (linked to FX_Items), identity bar `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`, Save disabled, no sign-in or configuration prompt, no portal banner.
- No authentication challenge occurred during T2.

## Collision gate (repeated in T2; Web Client Select Form)

| Step | Filter (key events, Control+a before) | Filter By / checkboxes | Settled result | Evidence |
| --- | --- | --- | --- | --- |
| Positive control | `FX_UMs` | Name; Case Sensitive and Starts With unchecked | One row: `FX_UMs` / `FX_UMs` | `t2-01-collision-gate-positive-control-FX_UMs-settled.png` |
| Target | `FX_Items` (exact) | Same | Zero rows (empty grid) | `t2-02-collision-gate-target-FX_Items-exact-settled-zero-rows.png` |

Gate result: **PASS for the visible inventory.** The dialog was then cancelled (`find` confirmed no Select Form dialog afterwards). No Form was opened from it. Limits: no scope column, no total count, match mode (substring or exact) not stated, and no cross-scope or database check. The earlier T1 gate and this T2 gate are both same-session UI results.

## Wizard route and pages (observed)

| Step | Observation | Evidence |
| --- | --- | --- |
| Designer toolbar New | `Form Wizard Selection` dialog; New Form radio selected; Extend Form not selected | snapshot |
| Category | `Classic` (option `e1597`, "WinStudio classic form wizards") | `t2-03` (before OK) |
| Wizard | `MultiView` (option "Multi-view (grid/detail) form bound to an IDO collection") | `t2-03` |
| OK | `Form Wizard - MultiView` opened on page 1 | snapshot |
| Page 1 identity | Name `FX_Items` (one plain fill, not key events); Form Type `MultiView` (read-only); Form Layout `GridLeft`; Device Type `Default`; Data Source `FX_Items` (selected once from a list that also held FX_HelloWorld01, FX_UMs); Query Form and Comments empty (unchanged) | `t2-04` |
| Next (1 → 2) | Page 2 "Primary Collection". Right list holds the four business fields in the wizard's default alphabetical order: FX_Cost, FX_Description, FX_Item, FX_UM, all included. Left list holds system and UDF fields. Nothing added or removed | `t2-05` |
| Next (2 → 3) | Page 3 property grid (order and attributes) | snapshot |
| Page 3 default order | 1 FX_Cost (Caption `FX_sCost`), 2 FX_Description (`FX_sDescription`), 3 FX_UM (`FX_sUM`), 4 FX_Item (`FX_sItem`); all Include checked | `t2-06` (before any move) |
| Reorder | Four single-up presses (see below) | `t2-07`, `t2-08`, `t2-09`, `t2-10`, `t2-11` |
| Page 3 final order | 1 FX_Item (`FX_sItem`), 2 FX_Description (`FX_sDescription`), 3 FX_Cost (`FX_sCost`), 4 FX_UM (`FX_sUM`); all Include checked | `t2-11` (screenshot), accessibility row text |
| Next (3 → 4) | Final page: "Click the Finish button to build a multiview form named FX_Items with the data source FX_Items." Next disabled, Back enabled, Finish enabled | `t2-12` (before Save Template change) |
| Save Template | Checked before the action (`t2-12`); unchecked after one successful label click (`t2-13`) | `t2-12`, `t2-13` |
| Stop | Finish NOT pressed; wizard left open on the final page | `t2-13` |

### Reorder detail (page 3)

Target order: FX_Item, FX_Description, FX_Cost, FX_UM. Starting order: FX_Cost, FX_Description, FX_UM, FX_Item.

| Press | Row selected | Control | Result |
| --- | --- | --- | --- |
| 1 | FX_Item | Single up (second arrow button, `e2776`) | FX_Item moved from row 4 to row 3 (`t2-07`) |
| 2 | FX_Item | Single up | FX_Item moved from row 3 to row 2 (`t2-08`) |
| 3 | FX_Item | Single up | FX_Item moved from row 2 to row 1 (`t2-09`) |
| 4 | FX_Description (selected separately) | Single up | FX_Description moved from row 3 to row 2 (`t2-11`) |

The four arrow buttons on the right of the grid have no accessible names. The second button was identified as the single up arrow by its effect (press 1). The top and bottom buttons were not pressed. Row selections: FX_Item (name cell) before press 1; FX_Description (name cell) before press 4.

## Save Template

- Checked on arrival at the final page (`t2-12`).
- One click on the `checkbox` (`e2838`) **timed out**: "element ... intercepts pointer events" (a `displayEl` span over the checkbox, `ext-comp-3867`). The click did not register.
- One corrected attempt on the visible `Save Template` label (`e2840`, the target EXP-045 used) succeeded. The checkbox then showed no `[checked]` in the accessibility tree, and the screenshot shows it empty (`t2-13`).
- The final state (unchecked) was verified visually. The timed-out click is treated as not having changed state; the label click is the only effective toggle.

## Browser-reference events and recovery

1. `e2776` (page-3 up arrow) returned "Ref not found" after a row selection. One fresh untargeted snapshot was taken. The button was present again, and one corrected click succeeded.
2. Later, the dialog ref `e1766` returned "Ref not found" after a targeted read. I treated this as a second reference event and took a second fresh untargeted snapshot, which showed the dialog still on page 3. **Disclosure:** the brief allows one untargeted snapshot per browser-reference failure. I read it as per-event, so this second snapshot is a judgement call; a strict reading would count it against a single task-wide allowance.
3. The Save Template checkbox timeout (described above) was treated as an environment overlay. One corrected attempt on a different, EXP-045-proven element succeeded.

## Counts (T2)

| Operation | Count |
| --- | --- |
| Finish | **0** |
| Save (Designer or any) | **0** |
| Form created / Create Form response | **0 / 0** |
| Caption string created, edited, or Caption dialog opened | **0 / 0 / 0** |
| Caption string prompt answered (Yes/No) | **0** |
| Designer New | **1** |
| Form Wizard Selection OK | **1** |
| Wizard Next | **3** (1→2, 2→3, 3→4) |
| Wizard Back / Cancel / Close | **0 / 0 / 0** |
| Name plain fill (`browser_type`, no `slowly`) | **1** |
| Data Source trigger opened / option chosen | **1 / 1** |
| Page-3 row selections (name cell) | **2** (FX_Item, FX_Description) |
| Page-3 arrow presses (single up) | **4** |
| Save Template: timed-out checkbox click / effective label click | **1 / 1** |
| Select Form opened / cancelled / OK | **1 / 1 / 0** (gate; positive control and target = 2 filter entries) |
| Key-event filter entries (Select Form) | **2** (`FX_UMs`, `FX_Items`), Control+a before each |
| Settle waits (2 s) | **2** |
| Ref-not-found errors | **2** (`e2776`, `e1766`) |
| Browser timeouts | **1** (Save Template checkbox) |
| Fresh untargeted snapshots (recovery) | **2** (see disclosure above) |
| Targeted read-only snapshots | several (group and dialog refs; read-only) |
| Screenshots (worker-saved PNG) | **13** (`t2-01` to `t2-13`) |
| Prompts or dialogs answered | **0** |
| Portal banner dismissals | **0** (none seen) |
| Login, logout, reauthentication, refresh, restart | **0** |
| IDO, property class, SQL, FX_UMs, vendor Form, or string edits | **0** |
| JavaScript or evaluate tools by the worker | **0** |

## Acceptance status (T2 scope)

| AC | T2 status | Basis | Limit |
| --- | --- | --- | --- |
| AC-1 Preflight | Partial (carried from T1) | Designer and Web Client identity and scope re-checked at T2 start (see preflight) | Site Developer capability not observed |
| AC-2 Collision gate | **PASS** for the visible inventory (T2 repeat, same session) | `t2-01`, `t2-02` | No scope column or total count; match mode not stated |
| AC-3 Pre-Finish wizard | **PASS** for identity, route, Data Source, ordered fields, and Save Template unchecked | `t2-03` (route), `t2-04` (page 1 identity), `t2-11` (final order), `t2-13` (final page, Save Template unchecked) | Route and identity are wizard-displayed values, not stored Form values. Order is the wizard grid order; the Designer order is established only after Finish. The final page does not repeat the field order. |
| AC-4 to AC-11 | Not performed (out of T2 scope) | — | Finish not invoked; no creation |

## Observations and unresolved items

1. **Selection marker discrepancy (page 3).** After the reorder, the accessibility tree marks the FX_Cost name cell as `[selected]`, while the screenshot's row marker and tooltip are on FX_Description (row 2). The row order is identical in both sources. Which row the wizard treats as current is not established. This does not change the order.
2. **Default page-2 selection.** All four business fields are included by default (FX_Cost, FX_Description, FX_Item, FX_UM). EXP-045 had only two because its class had two fields. This is the wizard's default property generation, not a change.
3. **Caption references on page 3.** The Caption column shows the string-ID references FX_sItem, FX_sDescription, FX_sCost, FX_sUM. These are references, not confirmed resources. Only the T1 Global Objects read (FX_sItem and FX_sCost absent; FX_sDescription and FX_sUM present) supports their state, and T2 did not re-read them.
4. **Save Template checkbox timeout.** The checkbox was intercepted by its own display span. The label click worked. This is the same kind of grid or overlay intercept seen in EXP-049 T9. It is recorded as an environment behaviour, not a product finding.
5. **Ref-not-found on the dialog.** `e1766` failed after a targeted read and recovered on a fresh snapshot with no visible state change. Cause not established.

## Evidence index (T2)

- `t2-01-collision-gate-positive-control-FX_UMs-settled.png`: Select Form, filter `FX_UMs`, one row `FX_UMs`. Proves the gate executed; not scope or database.
- `t2-02-collision-gate-target-FX_Items-exact-settled-zero-rows.png`: Select Form, filter `FX_Items`, empty grid; Filter By Name; checkboxes unchecked. Proves zero visible rows; not database absence.
- `t2-03-form-wizard-selection-Classic-MultiView-before-OK.png`: Form Wizard Selection, New Form, Category `Classic`, Wizard `MultiView`, before OK. Proves the route selection.
- `t2-04-wizard-page1-name-FX_Items-datasource-FX_Items.png`: wizard page 1, Name `FX_Items`, Data Source `FX_Items`, Form Type MultiView, Layout GridLeft, Device Default.
- `t2-05-wizard-page2-default-properties.png`: page 2 Primary Collection; right list FX_Cost, FX_Description, FX_Item, FX_UM; all included; Finish disabled. Proves the default selection; the left list is the system and UDF fields.
- `t2-06-wizard-page3-before-reorder-FX_Item-selected.png`: page 3 default order (FX_Cost, FX_Description, FX_UM, FX_Item) with FX_Item selected. Proves the starting order and captions.
- `t2-07-wizard-page3-after-first-up-arrow.png`: after press 1, FX_Item at row 3.
- `t2-08-wizard-page3-after-second-up-arrow.png`: after press 2, FX_Item at row 2.
- `t2-09-wizard-page3-after-third-up-arrow.png`: after press 3, FX_Item at row 1.
- `t2-10-wizard-page3-FX_Description-selected-before-up.png`: FX_Description selected at row 3 before press 4 (tooltip `FX_Description`).
- `t2-11-wizard-page3-final-order-FX_Item-FX_Description-FX_Cost-FX_UM.png`: final page-3 order FX_Item, FX_Description, FX_Cost, FX_UM, all included. Proves the intended field order in the wizard grid; does not prove Designer order.
- `t2-12-wizard-final-page-before-SaveTemplate-uncheck.png`: final page, Save Template checked, Finish enabled. Shows the Name and Data Source sentence.
- `t2-13-wizard-final-page-SaveTemplate-unchecked-before-Finish.png`: final page, sentence "Click the Finish button to build a multiview form named FX_Items with the data source FX_Items.", Save Template unchecked, Next disabled, Finish enabled and not pressed. Status bar `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`. Proves the pre-Finish identity and Save Template state; does not prove the stored Form.

Tool-saved YAML snapshots are under `evidence/playwright/` (written by the browser tool, not by the worker).

## Repository changes (T2)

- Written: `evidence/EXP-050/T2-wizard-preparation-report.md` (this report).
- Written: `evidence/EXP-050/t2-01` to `t2-13` (PNG).
- Updated: `experiments/EXP-050-hello-world-part-2-create-fx-items-multi-view-form.md` (T2 section, status line, alternate-filename note).
- Not written: any other repository file.

## Next permitted action

No further action is authorised by T2. The wizard is open on its final page. The creation task must (a) repeat the collision gate in its own session, (b) confirm the staged identity and field order before Finish, and (c) press Finish exactly once. Caption strings, Designer Save, close and reopen, and runtime open are all out of T2 scope.
