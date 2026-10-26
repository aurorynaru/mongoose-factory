# EXP-139 T4 - single full-content fill of FX_Inventory/index.html and one ordinary Designer Save

Run: R-20261027-014540-dC5I, cycle 5, task T4. Date: 2026-10-27. Scope: the Web User Control Asset `FX_Inventory/index.html` only.
Window: Designer tab 1 (`designer/Default.aspx`), Form `FX_InventoryDashboard`, Version `User version for user …`, footer `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`.
Web Client (tab 0) was not selected or touched in this task.

## Preconditions (observed before any mutation)

- Tab list (read-only) taken, then tab 1 selected; fresh snapshot.
- Designer: FX_InventoryDashboard is the only open Form tab (selected). Title bar `FX_InventoryDashboard`. Properties Name `FX_InventoryDashboard`, Version `User version for user …`, Form Type Normal, Is Master True. Footer `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`. Save disabled, Undo disabled, no dialog, no session-expiry message. (`t4-01`)
- Source read in full before the browser step: `assets/FX_Inventory/index.flat.html` (382 lines). Operator-supplied SHA-256 `52e6ccd2aa293f61579cb5140501f68667c7613d6490cc3bf64b60874382a9d6`, **not recomputed** (no shell; no byte verification claimed).
- Recipe `recipes/session/session-expiry-and-stale-designer.md` and EXP-136 / EXP-138 records read (EXP-138 T3 truncation lesson and Amendment A1 applied: the flush-left source is used; no auto-indent).

## Asset steps (in order)

1. Edit menu (one click) → `Web User Control Assets` (one click). Web Assets (Global Objects) dialog opened.
2. Folder row `FX_Inventory` selected (one click), then ArrowRight (expands; only child `index.html`).
3. `index.html` row selected (one click). Properties: Name `FX_Inventory/index.html`, Content `text/html`, Version `User version for user …`. (`t4-04`)
4. Content `Open Edit Property Dialog` (one click). Edit Browser File dialog opened. Baseline readback (accessibility value, before any change): EXP-136 page (`<title>FX Inventory Dashboard</title>`, `FX_InvRefresh` "Refresh Data", `FX_InvCards`, four metric cards, 7-column table, `WSForm.invoke("FX_LoadInventoryFromIDO"` and `WSForm.getVarValue("FX_vInventoryJson"`). No `FX_InvHeadline`. Matches the T3 baseline, so the stop condition did not apply. Baseline screenshot `t4-02` (filename typo, see Limitations).
5. Editor textbox clicked (one click), `Control+a` pressed once (select all in the editor).
6. **One full-content fill** (the single `browser_type` call on the editor, `slowly` not set, i.e. one set of the complete value) with the complete text of `assets/FX_Inventory/index.flat.html`, 382 lines, `<!DOCTYPE html>` through `</html>` plus trailing newline.
7. Readback of the editor before OK (accessibility value; line breaks shown as spaces; screenshot `t4-03`):
   - Start: `<!DOCTYPE html> <html lang="en"> <head> <meta charset="utf-8"> <meta name="viewport" …> <title>FX Inventory Dashboard</title> <script type="text/javascript" src="../$app/scripts/UserControl.js"></script> <style> :root{ --floor:#17202b; …` (flush-left source content, redesign CSS).
   - Middle (redesign markers present): `<h1>Inventory</h1>`, `FX_InvStatus` "Not loaded", `FX_InvRefresh` "Refresh data", `FX_InvHeadline` "Refresh to load the latest stock levels.", `FX_InvMix` segments, `FX_InvLegend`, `FX_InvTotals`, `FX_InvTools` with `FX_InvFilters` (buttons All / Needs reorder / Out of Stock), `FX_InvSearch`, table `FX_InvTableBody` with the `FX_InvEmpty` row "No stock loaded yet. Select Refresh data.", `FX_InvGauge` markup (`is-out`, `is-low`, `is-stocked`, `.tick`, `.fill`).
   - Script: `WSForm.invoke("FX_LoadInventoryFromIDO", …)` and `WSForm.getVarValue("FX_vInventoryJson", …)` present inside `load()` (source lines 342-343).
   - End: `… refreshButton.addEventListener("click", load); … })(); </script> </body> </html>`.
   - EXP-136 leftovers absent: no `FX_InvCards`, no `FX_InvCard`, no "Refresh Data" button text, no `Total Items` card markup.
   - Limit: the accessibility value collapses newlines; this is a content-presence readback, not a byte comparison. Accessibility truncation was not observed (the value runs to `</html>`).
8. **Edit Browser File OK** pressed once. Response: dialog closed; `find` for dialog returned only the Web Assets (Global Objects) dialog; no error text (`t4-04`).
9. **Web Assets OK** pressed once (tool reported a unique OK match). Response: Global Objects dialog closed (`find` "Global Objects" → no matches). (`t4-05`)

## Designer Save (one ordinary Save)

10. Preconditions re-checked from a fresh snapshot: FX_InventoryDashboard selected, footer User scope, no dialog, Save enabled (only after the asset OK).
11. **One ordinary Designer Save** (one click on toolbar Save, ref e647).
    - Response (observed, verbatim from the notification): `Save` / `Global object(s) were saved.` (info icon; no error text found by `find` "Error").
    - Expected per brief: `Form [FX_InventoryDashboard] and global object(s) were saved.` **Not observed**: the notification omits the Form clause. Interpretation (unresolved, not established): the Form definition was not modified, only the global web asset. Not verified against the server.
12. Clean post-Save state (`t4-06`): Save disabled (accessibility `disabled`), Undo greyed, no dialog, notification visible, FX_InventoryDashboard still selected, footer User scope.

Stopped here. No Designer close or reopen, no Designer reload, no portal navigation, no runtime open, no Refresh Data, no filter click, no runtime Save, no navigation.

## Budget ledger (T4)

| Action | Count | Notes |
|---|---|---|
| Full-content fill (asset Content) | 1 | `FX_Inventory/index.html` only |
| Editor click | 1 | focus only |
| Ctrl+A | 1 | in the Edit Browser File editor, before the fill |
| Edit Browser File OK | 1 | after readback; no error |
| Edit Browser File Cancel | 0 | |
| Web Assets OK | 1 | no error |
| Designer Save (ordinary) | 1 | response `Global object(s) were saved.` |
| Form opens / closes / reopens | 0 / 0 / 0 | FX_InventoryDashboard already open from T3 |
| Designer reload | 0 | |
| Portal navigations / runtime opens | 0 / 0 | |
| Refresh Data activations | 0 | |
| Filter clicks | 0 | |
| Runtime saves | 0 | |
| Tree selections (folder, index.html) | 2 | selection only |
| Keyboard expansion (ArrowRight) | 1 | non-mutating |
| Content property dialog opens | 1 | read-and-edit (the single fill) |
| Browser JavaScript | 0 | `deny_browser_javascript` not settable from this worker (see below) |
| Coordinate clicks | 0 | every click used an accessibility ref |
| Credentials typed or read | 0 | |

Budget consumed: **one full-content fill and one ordinary Designer Save are used**. The remaining budgets are: runtime portal reload 1 (the T9 route), runtime Refresh Data 1, filter click at most 1; Designer close/reopen readback for AC-4 is not yet performed.

## Changed objects

- `FX_Inventory/index.html` (Web User Control Asset, User version): content replaced by the flush-left redesign source. This is the only intended application change.
- Not changed by the worker: FX_InventoryDashboard Form Script, its UserControl component, layout, Caption, event handlers, FX_vInventoryJson, FX_LoadInventoryFromIDO, FX_InventoryItems (table, IDO, rows), FX_InventoryEditor, FX_Login assets, FX_LoginPortal, FX_LoginUsers, Mock objects, FX_InventoryPrototype01, IdoCollections, `$app` assets.
- Note: the Save response reports only a global object, consistent with the asset being the only changed object (interpretation, not verified).

## Limitations and unresolved points

- `deny_browser_javascript = true`: no tool available in this session sets or reads that policy. Recorded as **unverified**. The worker ran no browser JavaScript and used only the accessibility, find, click, key and screenshot tools.
- The SHA-256 of `index.flat.html` was **not recomputed** (no shell). The fill text was transcribed from the full-file read (382 lines). Byte identity (line endings, trailing whitespace) is **not established**; the content-presence readback above is the only verification.
- The editor readback is from the accessibility value (line breaks collapsed). No byte-level comparison was possible.
- Save notification differs from the brief's expected text (no `Form [FX_InventoryDashboard]` clause). Not explained; flagged for operator review.
- Evidence filename typo: `evidence/EXP-139/t4-02-edit-browser-file-baseline-expX136-before-fill.png` (should read `exp136`). No delete tool is available to the worker; the file remains and is a stray artifact to be removed by the operator if desired.
- Post-Save persistence (AC-4) is not established: a Designer close and reopen is a later task.
- The Designer's FX_InventoryDashboard identity is confirmed from the title bar and the Name/Version property, not the URL (the URL no longer carried `MGForm=` after the asset dialogs, as in T3).

## Evidence files (T4)

- `evidence/EXP-139/t4-01-designer-precondition-fx-inventorydashboard-clean.png` - precondition: FX_InventoryDashboard, User footer, Save disabled, no dialog.
- `evidence/EXP-139/t4-02-edit-browser-file-baseline-expX136-before-fill.png` - baseline EXP-136 editor, before the fill (filename typo, see above).
- `evidence/EXP-139/t4-03-edit-browser-file-after-single-fill-before-ok.png` - after the single fill, before OK (top of the editor; the start and middle are shown by the accessibility readback above, not by this image).
- `evidence/EXP-139/t4-04-after-edit-browser-file-ok-web-assets-open.png` - after Edit Browser File OK; Web Assets dialog still open.
- `evidence/EXP-139/t4-05-after-web-assets-ok-designer-pre-save.png` - after Web Assets OK; dialogs closed; Save enabled, pre-Save.
- `evidence/EXP-139/t4-06-after-single-designer-save-response-and-clean-state.png` - Save response notice `Global object(s) were saved.` and clean post-Save state (Save disabled).
- `evidence/EXP-139/T4-asset-fill-and-designer-save-summary.md` (this file).
- Tool-written snapshots and console logs under `evidence/playwright/` (not worker-authored).

## What each screenshot proves / does not prove

- `t4-01`: Form identity (FX_InventoryDashboard title and tab), User footer, Save disabled before the step. Does not prove the Version text beyond the truncated display.
- `t4-02`: EXP-136 content in the editor before the fill (readback from the accessibility tree is the stronger evidence; the image shows the editor's top area only).
- `t4-03`: the dialog's File and Content Type fields, editor top region after the fill. Does not show the end of the content; end readback is from the accessibility value.
- `t4-04`: Edit Browser File dialog closed; Web Assets dialog open. Does not prove that the server received the asset content.
- `t4-05`: Web Assets dialog closed, Save enabled. Does not prove server persistence.
- `t4-06`: Save notice text and disabled Save state. Does not prove the server saved the redesign content; persistence requires close/reopen readback (later task).
