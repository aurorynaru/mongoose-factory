# EXP-139 T5 - Read-only persistence verification (AC-4)

Run R-20261027-014540-dC5I, cycle 6, task T5, 2026-10-27. Stopped after AC-4 inspection and documentation, as instructed. No save, fill, OK, runtime open, Refresh Data or filter click was performed.

## Starting state (fresh snapshot, tab 1)

- Tab list (read-only) before the first selection: tab 0 Web Client, tab 1 Designer (`G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`).
- Tab 1 selected, then fresh snapshot: FX_InventoryDashboard the only Form tab (selected), Properties Version `User version for user <redacted>`, footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`, Save and Undo disabled, no dialog, no session-expiry or sign-in condition.
- `deny_browser_javascript`: no tool in this session sets or reads this policy, so it could not be set or verified. No browser JavaScript was authored or run in T5 (no evaluate tool was called).

## Actions, in order

| # | Action | Result |
|---|---|---|
| 1 | Tab list (read-only); select tab 1; snapshot | Tab 1 foreground; state as above |
| 2 | Click the FX_InventoryDashboard Form tab close button (ref e247, ordinary Designer Form-close) | Form tab closed. No unsaved-changes prompt, no dialog. Save disabled, Undo disabled, no Form tab remaining |
| 3 | Click Form menu (ref e3), then `find` for FX_InventoryDashboard in the menu, then click the recent-forms item (ref e424) | Form reopened. Snapshot: title FX_InventoryDashboard, Version `User version for user <redacted>`, Form Type Normal, Is Master True, Save and Undo disabled, footer User scope. Screenshot `t5-01` |
| 4 | Click Edit menu (ref e5); find `Web User Control Assets`; click the menu item (ref e630) | Web Assets dialog (titled "Global Objects") opened |
| 5 | Click folder `FX_Inventory` (ref e669); ArrowRight to expand; click `index.html` (ref e739) | Properties: Name `FX_Inventory/index.html`; Content `text/html`; Version `User version for user <redacted>` |
| 6 | Click `Open Edit Property Dialog` for Content (ref e772) | Edit Browser File dialog opened for read-only inspection |
| 7 | Read-only `find` for markers (FX_InvHeadline, FX_InvFilters, FX_InvGauge, FX_InvSearch, "No stock loaded yet", FX_InvCards) | Each find returned the full editor value (see readback below); FX_InvCards: no match |
| 8 | Screenshot `t5-02` of the Edit Browser File dialog | Dialog File `FX_Inventory/index.html`, Content Type `text/html`; editor scrolled to the end |
| 9 | Snapshot scoped to the Edit Browser File dialog (ref e783) | Cancel button ref e809 confirmed |
| 10 | Click Edit Browser File **Cancel** (ref e809), once | Dialog closed, no error. No content change |
| 11 | `find` for Global Objects and ScopeType; snapshot scoped to the Web Assets dialog (ref e636) | Cancel button ref e731 confirmed |
| 12 | Click Web Assets **Cancel** (ref e731), once | Dialog closed, no error. Designer clean |
| 13 | Shallow snapshot; screenshot `t5-03` | FX_InventoryDashboard tab open; Save and Undo disabled; no dialog; footer User scope |

Not performed: Ctrl+A, any click inside the editor, any fill, any OK, any Designer Save, any Form close/reopen beyond step 2–3, any portal navigation, runtime open, Refresh Data, filter click, coordinate interaction, or any change to tab 0.

## Persistence readback (AC-4), accessibility-based

Source: the Edit Browser File textbox value (accessibility tree), read at step 7. The same value was returned by all six finds and by the scoped snapshot, so it is one readback, not six observations. Line breaks are collapsed in the accessibility value. This is **content presence**, not a byte comparison.

Observed present:

- Document start: `<!DOCTYPE html> <html lang="en"> <head> ... <title>FX Inventory Dashboard</title> <script type="text/javascript" src="../$app/scripts/UserControl.js">`.
- Header: `<h1>Inventory</h1>`, status `#FX_InvStatus` "Not loaded", `#FX_InvRefresh` "Refresh data".
- Headline element `#FX_InvHeadline` with initial text "Refresh to load the latest stock levels.", and its update logic.
- Filter group `.FX_InvFilters` (aria-label "Show items") with buttons All (`data-filter="all"`), Needs reorder (`data-filter="reorder"`) and Out of Stock (`data-filter="out"`).
- Search input `#FX_InvSearch`.
- Stock-gauge markup: `.FX_InvGauge` CSS rules (`.fill`, `.tick`, `.is-out`, `.is-low`, `.is-stocked`) and the gauge-building script.
- Table body `#FX_InvTableBody` with the row "No stock loaded yet. Select Refresh data."
- Bridge calls inside `load()`: `WSForm.invoke("FX_LoadInventoryFromIDO", ...)` and `WSForm.getVarValue("FX_vInventoryJson", ...)`.
- Document end: `... })(); </script> </body> </html>`.

Observed absent:

- `FX_InvCards` (find: no match). The EXP-136 four-card markup is not present.

Not seen in the readback: the stored `Version` value of the asset beyond the properties-panel text; anything beyond the content value.

## Screenshots and what each proves

- `t5-01-designer-fx-inventorydashboard-reopened-from-recent-clean.png`: the reopened Form. Shows the title FX_InventoryDashboard, Properties Version `User version for us…` (truncated), Save greyed, and the footer `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`. Proves Form identity, User version and clean state after the reopen. Does **not** show asset content.
- `t5-02-edit-browser-file-readback-persisted-before-cancel.png`: the Edit Browser File dialog with File `FX_Inventory/index.html`, Content Type `text/html`, and the editor scrolled to its end (`});`, `})();`, `</script>`, `</body>`, `</html>`). Proves the asset name, content type and the document ending. Does **not** show the start, FX_InvHeadline, the filters or the bridge calls; those are in the accessibility readback only.
- `t5-03-after-both-cancels-designer-clean-no-save.png`: after both Cancels. Shows FX_InventoryDashboard open, Save and Undo greyed, no dialog, footer User scope. Proves the clean post-Cancel state. Does **not** prove the asset content (no dialog open at that time).

## AC-4 assessment

**AC-4: passed, qualified.** After the ordinary Form close and reopen from the recent-forms list, the read-only asset readback still shows the redesigned content: FX_InvHeadline, FX_InvFilters (All / Needs reorder / Out of Stock), FX_InvSearch, FX_InvGauge markup, the initial "No stock loaded yet" row, both bridge calls and the closing tags, with no FX_InvCards. Metadata observed: Name `FX_Inventory/index.html`, Content `text/html`, Version `User version for user …`.

Qualifications:

1. The check is content presence through the accessibility value, not a byte-for-byte or SHA-256 comparison. Line-break fidelity is not established.
2. An ordinary close and reopen is a weak persistence boundary. The Web Assets dialog may read the Designer's in-session global-object copy, so this does not independently prove uncached serialization to the server. Server-side serialization is not demonstrated by this step.
3. The readback does not establish which save produced the stored content. See the Save discrepancy below.

## Save-response discrepancy from T4 (retained, not interpreted)

T4 recorded the Designer Save response as `Global object(s) were saved.` (info notification). The brief expected `Form [FX_InventoryDashboard] and global object(s) were saved.`. T5 did not request an additional Save. The T5 readback shows the redesigned asset content after close and reopen. That is consistent with the global asset having been saved. It does **not** establish whether the Form definition itself was saved. The Form-definition clause remains unresolved for coordinator and operator review. The worker has not claimed that the Form definition was saved.

## Tab-selection account (brief requirement: select before every screenshot or input)

- T5: tab 1 was selected once at the start, before the first snapshot. Before the later screenshots (t5-01, t5-02, t5-03) and before each later input (Form close, Form reopen, menu clicks, dialog Cancels), **no separate tab-select call was issued**. Each tab-list result returned during T5 showed tab 1 as "(current)", and the screenshots show the Designer. This is an omission from the stated rule and is recorded as such.
- T1 to T4: the handoff summaries do not record per-action tab selections. T4's own report records a selection of tab 1 before its first snapshot only. Compliance with the per-action rule in earlier tasks is **not verifiable** from this session and is not asserted.

## Tool and audit notes

- Ref-based clicks: the tool echoes its own generated locator in each "Ran Playwright code" block (for example `#menuitem-…-itemEl` or `#mgformbutton-…-btnInnerEl`). These were produced by the tool from the snapshot refs. The worker authored no JavaScript.
- No "Ref not found" error occurred in T5, so the fresh-snapshot recovery allowance was not used.
- Tool-written snapshots and console logs were written under `evidence/playwright/` (tool output, not worker-authored).
- Carried forward from T4 for the audit, unchanged and not re-run: the controller's browser_type flag corresponds to the single intended full-content fill; two Grep path lookups failed as non-mutating errors. The T4 screenshot `evidence/EXP-139/t4-02-edit-browser-file-baseline-expX136-before-fill.png` keeps its filename typo ("expX136"). It is a naming error, not an additional application object. It was not deleted or renamed.

## Mutation and action counts (T5)

- Form close 1 (ordinary tab close, no prompt); Form reopen 1 (recent list).
- Web Assets dialog open 1; Content edit dialog opened read-only 1.
- Edit Browser File Cancel 1; Web Assets Cancel 1.
- Edit Browser File OK 0; Web Assets OK 0; Ctrl+A 0; editor clicks 0; content fills 0; Designer Saves 0.
- Portal navigations 0; reloads 0; runtime opens 0; Refresh Data 0; filter clicks 0; runtime Saves 0; coordinate clicks 0; browser JavaScript 0; credentials typed or read 0.
- Changed objects in T5: none. The asset content is unchanged by T5.

## Evidence files written by T5 (repo-relative)

- `evidence/EXP-139/T5-persistence-readback-summary.md` (this file, new)
- `evidence/EXP-139/t5-01-designer-fx-inventorydashboard-reopened-from-recent-clean.png` (new)
- `evidence/EXP-139/t5-02-edit-browser-file-readback-persisted-before-cancel.png` (new)
- `evidence/EXP-139/t5-03-after-both-cancels-designer-clean-no-save.png` (new)
- `experiments/EXP-139-fx-inventorydashboard-dark-theme-asset-replacement.md` (updated)
- Tool-written snapshots and console logs under `evidence/playwright/` (not worker-authored)

## Knowledge state (T5)

- Form close via the tab close button and reopen via the Form menu recent list, with User-version identity: **observed** (one execution).
- Persisted `FX_Inventory/index.html` content after close and reopen, by accessibility readback (content presence only): **observed** (one execution).
- Asset metadata after reopen (Name, Content text/html, Version User): **observed** (one execution).
- Server-side serialization independent of the Designer session: **unverified** (ordinary close/reopen does not establish it).
- SHA-256 of the committed source and byte identity of the stored content: **unverified**.
- Form-definition save clause in the T4 Save response: **unresolved**.
- `deny_browser_javascript`: **unverified**.
- Experiment acceptance and replay status: **not claimed** (operator review).

## Open items for the coordinator

1. Confirm whether AC-4 (content presence after close and reopen) is sufficient, or whether a stronger persistence boundary is wanted before the runtime steps. The brief explicitly says ordinary close and reopen does not prove uncached serialization.
2. The Form-definition clause of the T4 Save response remains unresolved. No further Save may be requested under this experiment without a new decision.
3. The runtime steps (portal reload, Refresh Data, at most one filter click) need a separate coordinator decision.
4. Operator decision: whether to remove or keep the misnamed T4 screenshot (`t4-02-…expX136…png`).
5. Tab-selection compliance before each action in T5 was not met (see above). It is recorded and not claimed as compliant.
