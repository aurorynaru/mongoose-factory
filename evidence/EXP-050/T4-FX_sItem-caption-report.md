# EXP-050 T4 — FX_sItem caption string creation (only FX_sItem)

Run: `R-20261011-034347-PXmt` · experiment EXP-050 · cycle 3 · task T4
Worker session: `ee68bc3c-c585-4d42-8b66-0d0e1c2a2641` · task_message_id `97a2d31e-f11d-4f90-a2c0-df359ad7f823`
Date: 2026-10-11 (system date). Configuration `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`.
Record: `experiments/EXP-050-hello-world-part-2-create-fx-items-multi-view-form.md` (existing working record, updated).

**Outcome:** exactly one new string resource was created: `FX_sItem` = `Item`. The existence check, the exact prompt, the committed value, the OK, and the independent Edit > String view all match. Not done (out of T4 scope): FX_sCost, Designer Save, close/reopen, runtime open, and any edit to FX_sDescription or FX_sUM.

**Important state:** the Designer Save icon is now enabled, because the String creation is a pending change in the Form session. Ordinary Save was **not** pressed and remains the next separate step.

## Preflight (before mutation)

| Check | Observed | Evidence |
| --- | --- | --- |
| Designer tab | `FX_Items` tab selected next to vendor `Property Classes`; URL `designer/default.aspx?MGForm=FX_Items` | `t4-01-pre-mutation-designer-FX_Items-state.png` |
| Scope | Status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` | `t4-01` |
| Save and Undo | Save disabled; Undo disabled | `t4-01`; find |
| Dialogs | none open | find |
| Selected component | `FX_ItemStatic (Static)`, tab 5, Pane 1 (Components row selected) | `t4-01` |
| Caption (before mutation) | `FX_sItem` (Properties Caption; accessibility `FX_sItem`) | `t4-01`; find |
| Vendor Property Classes tab | not selected; not edited | `t4-01` |

Caption confirmed as the exact `FX_sItem` reference before the ellipsis was opened.

## Mutation sequence (in order)

| # | Action | Result | Evidence |
| --- | --- | --- | --- |
| 1 | Caption ellipsis (`…` button in Properties, FX_ItemStatic), once | Prompt `String FX_sItem does not exist. Create it?` (Yes focused; No) with the String dialog behind it. Prompt names the exact ID | `t4-02-caption-prompt-String-FX_sItem-does-not-exist.png` |
| 2 | Yes, once (`Yes` button) | String dialog: Name `FX_sItem`; String Value (generated default) `FX_s Item`; Version `User version for user an…` | `t4-03-String-dialog-FX_sItem-default-value-before-edit.png` |
| 3 | Click String Value cell (opens editor) | Editor active; text `FX_s Item` | find (textbox active) |
| 4 | Control+a, then plain fill `Item` | Editor text `Item` | find |
| 5 | Tab (commit) | String Value grid cell reads `Item`; the editor is no longer active | `t4-04-String-dialog-FX_sItem-value-Item-committed-before-OK.png`; find (`gridcell "Item"`, active cell moved) |
| 6 | OK, once (only after the commit and verification above) | Dialog closed; Designer now shows Save enabled | `t4-05-after-String-OK-FX_sItem-designer-state.png` |
| 7 | Edit > String (Global Objects), Strings filter `FX_sItem` (Control+a, key events, 2 s settle) | One row `FX_sItem` | find |
| 8 | Select row `FX_sItem` (read-only) | Name `FX_sItem`; String Value `Item`; Description blank; Version `User version for user an…` | `t4-06-Edit-String-readonly-FX_sItem-value-Item.png` |
| 9 | Cancel (no edit) | Dialog closed; no alert | `t4-07-after-Global-Objects-cancel-canvas-and-save-state.png` |

### Creation count

- New String resource created: **1** (`FX_sItem`, by the single Yes at step 2).
- OK on a String dialog: **1** (step 6). Pressed only after the commit was visible.
- Other strings edited: **0**. `FX_sCost`, `FX_sDescription`, and `FX_sUM` were not opened for editing and not created.
- Existing `FX_sItem` overwritten: not applicable (the prompt confirmed the resource was absent).

## Independent verification (Edit > String, read-only)

| Item | Observed |
| --- | --- |
| Exact ID | `FX_sItem` (Name row; Strings filter matched one row) |
| Stored displayed value | `Item` (String Value row) |
| Description | blank |
| Version | `User version for user anton.ramos@3mworks.com.ph` |

This view is the Global Objects client view. It is not a database read. It shows the value the Designer holds for this session, which is the value the String dialog committed.

## Label and canvas state after the change

- Properties Caption of `FX_ItemStatic`: `FX_sItem` (reference, unchanged; expected).
- Canvas label above the FX_Item field: still displays `FX_sItem*` (raw ID text), not `Item`.
- In T3 the canvas already showed raw IDs for FX_sItem and FX_sCost and resolved text for Description and Unit of Measure. Whether the canvas refreshes only after an ordinary Save or reopen is **not established** in this task.

Interpretation: the canvas may not re-render until save or reopen. This is a state I observed, not a confirmed defect. It must be checked after the Designer Save and reopen.

## Browser-state observations (not mutations)

1. After OK, the Save button became enabled. This is the expected pending-change state, not a Save event.
2. Undo: the accessibility tree reported Undo `[disabled]` in snapshots after OK and after Cancel. The screenshots (`t4-05`, `t4-07`) show the Undo icon visually darker than in `t4-01`. The two sources disagree. Undo was **not** pressed. Record as an unresolved discrepancy.
3. The Designer URL changed from `?MGForm=FX_Items` to `designer/default.aspx` after the String OK. The FX_Items tab stayed open and selected. The URL form is not evidence of which Form is open; the tab and Properties Name (`FX_ItemStatic`, in FX_Items) are.
4. The Components row `FX_ItemStatic` stayed selected. The bottom-right tab shows `Component`.

## Counts (T4)

| Operation | Count |
| --- | --- |
| Caption ellipsis clicks | **1** |
| Creation prompt answers | **1 (Yes)** |
| Prompt No answers | **0** |
| String dialog String Value editor activations | **1** |
| String Value edits (Control+a, plain fill) | **1** |
| String Value commit (Tab) | **1** |
| String dialog OK | **1** |
| String resources created | **1** (`FX_sItem`) |
| `FX_sCost` created, edited, or opened | **0** |
| `FX_sDescription` or `FX_sUM` edited | **0** |
| Edit > String opened (read-only) | **1** |
| Strings filter entries | **1** (`FX_sItem`, key events) |
| Row selections (Global Objects) | **1** |
| Cancel (Global Objects) | **1** |
| Designer Save (ordinary) | **0** |
| Close or reopen of FX_Items | **0** |
| Web Client runtime open | **0** |
| Component or binding edits | **0** |
| Browser-reference errors | **0** |
| Browser timeouts | **0** |
| Portal banner dismissals | **0** (none seen) |
| JavaScript or evaluate by the worker | **0** |
| Screenshots (worker-saved PNG) | **7** (`t4-01` to `t4-07`) |

## Acceptance status (T4 scope)

| AC | T4 status | Basis | Limit |
| --- | --- | --- | --- |
| AC-5 (FX_sItem part) | **PASS** for the creation sequence: prompt names exact ID; String Value committed (Tab) before OK; Edit > String shows exact ID and value. | `t4-02`, `t4-03`, `t4-04`, `t4-06` | FX_sCost not created (T5 scope). Global Objects client view, not a database read |
| AC-6 | Not edited (FX_sDescription and FX_sUM untouched). Reference read only via earlier T1 and T3 reads | T1 `t1-14`, `t1-15`; T3 Caption references | No re-read in T4 |
| AC-7 (partial) | FX_ItemStatic Caption `FX_sItem` confirmed in T4 preflight | `t4-01` | Canvas text still raw ID after OK (see above) |
| AC-8 | Not performed | — | Save is the next task's step |
| AC-1 to AC-4, AC-9 to AC-11 | Not in T4 scope | — | — |

## Unresolved observations

1. **Canvas text after OK.** The FX_sItem label shows the raw ID on the canvas after the String is created. It may update after an ordinary Save or reopen. Not established.
2. **Undo accessibility vs visual state.** Accessibility says disabled, the screenshot suggests active. Not resolved; Undo was not used.
3. **URL form changed after OK.** The Designer URL no longer carries `?MGForm=FX_Items`, though the FX_Items tab stayed open. Cause not established.
4. **Global Objects view scope.** The String value is read from the client view only. The database value is not checked, and the scope of the Strings list is not shown.

## Repository changes (T4)

- Written: `evidence/EXP-050/T4-FX_sItem-caption-report.md` (this report).
- Written: `evidence/EXP-050/t4-01` to `t4-07` (PNG).
- Updated: `experiments/EXP-050-hello-world-part-2-create-fx-items-multi-view-form.md` (status line and T4 section).
- Not written: any other repository file.

## Next permitted action

No further action is authorised by T4. The pending state needs (a) an authorised FX_sCost creation (T5 scope), then (b) one ordinary Designer Save, then (c) close and reopen to check whether the canvas labels resolve. The Save must be inspected before any second Save; none is planned.
