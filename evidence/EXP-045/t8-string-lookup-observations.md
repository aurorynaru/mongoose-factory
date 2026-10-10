# EXP-045 — T8 read-only String lookup for FX_sUM and FX_sDescription (cycle 9)

Run `R-20261010-214137-Ia7F` · experiment EXP-045 · cycle 9 · task T8 · worker session `88551ce6-9f95-4e28-aeb2-1e23a8d29062` · task_message_id `1370255f-9f89-447a-a1c1-816955b372e6`.
Date: 2026-10-10. Browser: inherited Designer tab (tab 1) on the `FX_UMs` Form tab. No login, no reload, no Designer Save, no close/reopen of FX_UMs, no Caption dialog, no string create/change, no runtime data.

## Outcome (short)

- The Designer **Edit menu has a visible `String` item**. Selecting it opened a dialog titled **`Global Objects`**. Its left pane is headed **`Strings`** and lists string resources; its right pane is headed **`Properties`** and shows the selected entry's properties.
- The Strings pane has a **name filter**. A filter is read-only. The filter works as an **infix, case-insensitive** match (positive controls below).
- **`FX_sUM`**: under the filter, **no row** is shown. Settled after a 2 s wait. Positive control in the same view returned rows.
- **`FX_sDescription`**: under the filter, **no row** is shown. Settled after a 2 s wait.
- **`FX_` prefix** (supplementary): **no row**. Underscore positive control (`_`) returned many rows, so the underscore is matched.
- The dialog was closed with its own **Cancel** button (non-mutating). No OK, Save, New, Add, copy, delete, or value edit.
- **Result:** both IDs are **visibly absent** from this Strings list under the filter settings used. This is an observed UI result, not a database read, and not a claim about scope or durability. Limitations below.

## Starting state (fresh, before any T8 action)

| Item | Observed |
|---|---|
| Browser tab | First `browser_tabs select 1` returned "Tab 1 not found" (tool error). A list showed the Designer at index 1. The retried select succeeded. |
| Designer URL | `…/WSWebClient/designer/default.aspx` (no `MGForm` parameter, as after T6/T7). |
| Form tab | `FX_UMs` selected (bold). Vendor `Property Classes` tab present, not selected. |
| Scope | `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` |
| Save / Undo / Redo | Disabled. |
| Dialogs | None. |
| Selected component | `FX_UMStatic (Static)`; Caption `FX_sUM`. |
| Components grid | `Pane (00)`, `Pane (01)` expanded; `FX_UMStatic` selected (unchanged). |

## Step 1 — Edit menu

- Clicked `Edit` (once). The menu opened. Items (top to bottom, shown in `t8-01`): Undo (disabled), Redo (disabled), Copy, Cut, Paste (disabled), Form Script, Background Color, Component Class, Image, Property Class Extension, Script, Shortcut Menu, **String**, Theme, Validator, Variable, Web User Control Assets, Revert Global Object Definition.
- `String` is a visible menu item. Its name is `String`; the brief's "String or Strings" wording matches.

Evidence: `t8-01-edit-menu-open-String-item-visible-before-select.png`.

## Step 2 — select `String` (once)

- Clicked the `String` item (once).
- Result: a dialog **`Global Objects`** opened (not a String-only editor). Layout (shown in `t8-02`):
  - **Strings** pane (left): filter text box with a clear (×) and search icon; a list of string IDs (for example `ApplyFullTextIndexScriptQuestion`, `CatalogNotExistNotice`, `Collection Name`, `DisplayReportHeaders`, `E=Invalid`, `fAccessAs`, …); under the list three icon buttons: **+** (add), **copy**, **trash** (delete). These were **not** clicked.
  - **Properties** pane (right): filter box, two icon buttons, a property tree area, and Undo / Redo icon buttons. Empty until a row is selected.
  - Bottom toolbar: **OK**, **Cancel**, **Help**.
- The OK button is the commit control for this dialog; it was **not** clicked.

Evidence: `t8-02-String-menu-opened-Global-Objects-dialog-initial-state.png`.

## Step 3 — exact-ID filter `FX_sUM` (typed into the Strings filter, read-only)

- Clicked the Strings filter box once, then typed `FX_sUM` with key events (`slowly`). Waited 2 s.
- Settled result: **the Strings list is empty.** The filter box shows `FX_sUM` with the clear (×) icon.

Evidence: `t8-03-Strings-filter-FX_sUM-settled.png`.

## Step 4 — positive control (same view, same filter)

- Pressed Ctrl+A in the filter box (to replace the text), typed `Collection` with key events, waited 2 s.
- Settled result: **many rows**. Examples: `Collection Name` (first row), `fDataLakeSubcollectionTile`, `fEditCollectionAction`, `fEditCollectionIDBinding`, `fEventActionExtractXmlCollectionSetPath`, `fGetCollectionOptions`, and others. The matched substring is highlighted in each row.
- **Conclusion from this step:** the filter performs an **infix** match; it matches **case-insensitively** (`Collection` typed with a capital C matched `fDataLakeSubcollectionTile`, which contains lower-case `collection`). So the empty `FX_sUM` result was a real filtered result, not a dead filter.

Evidence: `t8-04-Strings-filter-positive-control-Collection-settled.png`.

## Step 5 — exact-ID filter `FX_sDescription` (read-only)

- Ctrl+A, typed `FX_sDescription` with key events, waited 2 s.
- Settled result: **the Strings list is empty.** The filter box shows `FX_sDescription`.

Evidence: `t8-05-Strings-filter-FX_sDescription-settled.png`.

## Step 6 — supplementary prefix inventory `FX_` (read-only)

- Ctrl+A, typed `FX_` with key events, waited 2 s.
- Settled result: **the Strings list is empty.** No string whose name contains `FX_` (case-insensitive) is visible in this list.

Evidence: `t8-06-Strings-filter-FX_prefix-inventory-settled.png`.

## Step 7 — underscore positive control (read-only)

- Ctrl+A, typed `_` with key events, waited 2 s.
- Settled result: **many rows** containing underscores, for example `fUpdate_AllTables`, `mCheckInFailed_0`, `mDeleteFailed_0`, `mFormBuilder_FormWithGrid`, `mFormBuilder_List`, `mSite_1_NotLiveLinkedToSite_2`, `mWizard_BasicFlex`.
- **Conclusion:** the underscore is matched. The empty `FX_` result (step 6) is therefore a real filtered result: no visible string name contains `FX_`.

Evidence: `t8-07-Strings-filter-underscore-positive-control-settled.png`.

## Step 8 — close with Cancel (once)

- Found the Cancel button (ref `e1182`) with a targeted find, then clicked it once.
- Result: the Global Objects dialog closed. No alert, no prompt, no second dialog. A fresh snapshot showed no dialog. Save and Undo disabled. `FX_UMs` tab still selected. Scope User. `FX_UMStatic` still selected with Caption `FX_sUM`.
- OK was **not** clicked, because OK commits the dialog and Cancel is the non-mutating close.

Evidence: `t8-08-after-Cancel-global-objects-closed-designer-state.png`.

## Exact lookup results (table)

| Query (Strings filter; infix; case-insensitive) | Role | Settled result | Evidence |
|---|---|---|---|
| `FX_sUM` | Target | **No rows** (empty list) | `t8-03` |
| `Collection` | Positive control (same view) | **Many rows**, incl. `Collection Name` | `t8-04` |
| `FX_sDescription` | Target | **No rows** (empty list) | `t8-05` |
| `FX_` | Supplementary prefix inventory | **No rows** | `t8-06` |
| `_` | Positive control for the underscore | **Many rows** | `t8-07` |

## Interpretation

- **`FX_sUM`: visibly absent** from the Strings list under a reliable query (positive control matched). This is consistent with the product's earlier Caption prompt "String FX_sUM does not exist. Create it?" (T5/T6).
- **`FX_sDescription`: visibly absent** from the same list under the same reliable query. The Caption prompt for `FX_sDescription` was **not** observed, because that Caption dialog has not been opened.
- **Effect of the T6 "No" click on `FX_sUM`:** this view does **not** show `FX_sUM` now. So the earlier No click and the timeout did **not** create a string row visible in this list. The T6 open question is therefore narrowed to: "no visible row after the No click". It is **not** proof of no database write, because the view may use a cached global-object list.
- No literal value was displayed for either ID, because neither ID appears in the list. There is no value, scope or version to record for either.

## Limitations

- The `Global Objects` / `Strings` list is the only string view found. It is a client-side list. Whether it reflects the stored string table (and whether it is cached or refreshed) is **not established**. Cache unload and refresh were forbidden in this task.
- The list shows **no scope or version column** for strings. Whether it includes strings from other scopes (Site Default, groups, other users) is **not shown**.
- The filter is infix and case-insensitive (positive controls). Case variants (for example `fx_sum`) would have appeared under the `FX_` filter, and none did. This supports "no case variant visible", for this list only.
- Single session, single run. Not replay-verified. No database-durability claim.
- The Edit menu's String item opened a dialog titled `Global Objects`. Its name is broader than the string list. The string pane was the only part used.

## Operation counts (T8)

| Operation | Count | Notes |
|---|---|---|
| Form Save / Finish / Form creation | **0 / 0 / 0** | — |
| Caption dialog opened | **0** | — |
| String created / changed / value entered | **0 / 0 / 0** | — |
| Global Objects dialog OK / Cancel | **0 / 1** | Cancel closed the dialog |
| + / copy / trash / New / Add / Delete clicks | **0** | Not clicked |
| Creation or other prompts answered | **0** | No prompt appeared |
| Edit menu opened | **1** | — |
| String menu item selected | **1** | Opened Global Objects |
| Strings filter entries (key events) | **5** | `FX_sUM`, `Collection`, `FX_sDescription`, `FX_`, `_` |
| Ctrl+A before filter replacement | **4** | — |
| Filter settle waits (2 s) | **5** | One per filter entry |
| Strings filter box clicks | **1** | Before the first entry |
| Targeted find (Cancel ref) | **1** | — |
| Tab selects | **2** | One failed ("Tab 1 not found"), one succeeded |
| Browser action errors | **1** | The failed tab select; not retried more than once |
| Ref-not-found errors | **0** | — |
| Recovery snapshots / corrected inspections | **0 / 0** | — |
| Fresh untargeted snapshots | **3** | Initial, after the Edit-menu open, after Cancel (the post-click outputs are also snapshots) |
| Screenshots (worker-saved PNG) | **8** | `t8-01` to `t8-08` |
| Portal banner dismissals | **0** | None seen |
| Login, logout, refresh, restart, FormSync, cache unload | **0** | — |
| JavaScript, evaluate, run-code (worker) | **0** | Tool wrappers only |

## Browser state at stop (last verified)

- Tab 1 Designer (selected): `designer/default.aspx`. `FX_UMs` Form tab selected; User scope; Save and Undo disabled; `FX_UMStatic (Static)` selected with Caption `FX_sUM`; Components grid with `Pane (00)`/`Pane (01)` expanded. **No dialog. No menu open.**
- Tab 0 Web Client: not acted on in T8 (`Property Classes` runtime tab, as before).
