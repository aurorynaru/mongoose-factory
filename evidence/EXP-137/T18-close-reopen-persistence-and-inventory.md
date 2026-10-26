# EXP-137 T18 — Designer close, Select Form uniqueness, reopen and persistence readback

Date: 2026-10-26. Run `R-20261026-104057-G85J`, cycle 22, task T18. Worker session `b7e4a2c5-abe2-461c-85f9-2648ecd3aae6`.
Scope: close and reopen only the FX_LoginUsers Form, exact-name Select Form uniqueness check, and read-only readback. No Save, Caption edit, component/binding change, check-in, runtime open, record insert, Finish, Create Form, Save Template, metadata unload, FormSync or browser JavaScript.
Sources read before action: `evidence/EXP-137/T17-caption-and-single-designer-save.md`, `evidence/EXP-137/T16-classic-multiview-finish-generated-form.md`, `experiments/EXP-135-fx-inventoryeditor-creation-and-three-test-invento.md` (T7 Designer close/reopen readback: Form-tab close, then Form menu recent-forms reopen).

## 1. Tab selection and pre-close guards (passed)

- Tab list (read-only): tab 0 `Mongoose` (Web Client, `favoriteContext=SqlColumns`); tab 1 Designer `...designer/default.aspx?MGForm=FX_LoginUsers`.
- Tab 1 selected (succeeded after the list). Fresh snapshot taken (`page-2026-10-26T14-47-*`).
- Form tab `FX_LoginUsers` selected; second tab `IDOs` (vendor IdoCollections, not selected, not touched).
- Name `FX_LoginUsers`; Caption `FX_LoginUsers` (committed value; Caption textbox not in edit state); Version `User version for user <account>`; Device Type Default; Form Type Normal; Is Master True.
- Footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`.
- Save disabled; Undo disabled; no dialog; no active combobox or inline editor in the Caption row.
- Details panel was collapsed; expanded once (read-only UI state) to read Collections: `Primary Collection: FX_LoginUsers`. Save and Undo still disabled after expansion.
- Screenshot: `t18-00-pre-close-form-identity-guards.png`.

## 2. Close (exactly one)

- Form-tab close control `closable FX_LoginUsers` clicked once. No save prompt, no discard prompt, no dialog appeared.
- Post-close snapshot: tab list shows only `IDOs` (vendor IdoCollections Form, selected). No `FX_LoginUsers` tab. Save and Undo disabled. No dialog. Footer still User scope.
- Close count: **1**. Save during close: 0.

## 3. Select Form inventory check (exact name, User scope route)

- Designer Form menu opened once (read-only). The menu listed recent forms, with `FX_LoginUsers` as the first recent entry, plus `IDOs`, `FX_InventoryDashboard`, `FX_InventoryEditor`, `IDO Projects`, `Sql Tables`, `FX_LoginPortal`, `FX_BridgeTest`, `FX_CustomerPortal`. No Select Form item is in that menu.
- Escape pressed once while the menu was open. The menu did not close. A hover attempt on the toolbar Open control then timed out because the open menu intercepted pointer events (`TimeoutError ... menu-1021 ... menuitem-1022 subtree intercepts pointer events`). Not repeated.
- The Form top-navigation button was clicked once to close the menu. The subsequent snapshot showed no menu.
- The Designer toolbar `openButton` (`mgtoolbarbutton-1084`, the first toolbar item) was clicked once. It opened the **Select Form** dialog directly. No menu item was chosen.
- Dialog pre-criterion state (`t18-01`): Filter textbox prefilled with a leftover value `Project` (selected); Filter By `Name`; Case Sensitive unchecked; Starts With unchecked. Grid showed two `IDO Projects` rows (`IdoProjects`, `IdoProjects.ids`). No row was activated.
- Criterion entry: Filter textbox clicked once; Ctrl+A once; text `FX_LoginUsers` typed once with slow key entry. No Enter, no Tab, no OK at this stage.
- Criterion before execution (recorded as intended): Filter `FX_LoginUsers`, Filter By Name, Case Sensitive off, Starts With off (infix, case-insensitive).
- Settled result (`t18-02`): **one row**, Caption `FX_LoginUsers`, Name `FX_LoginUsers`, the row highlighted. The snapshot grep also found exactly one gridcell pair in the grid. No similarly named row (for example `FX_LoginUsers2`) appeared under the infix filter.
- Positive control: the dialog was populated correctly under the leftover `Project` filter (two `IDO Projects` rows), and the new criterion returned the target row. Presence was shown; an absence control was not needed here.
- Limitation: the Select Form grid shows Caption and Name only. Scope is not a column. The User scope of the opened Form is established from the opened Form footer (see section 4), not from the list.

## 4. Single row activation and reopen (exactly one)

- The row's Name cell (`FX_LoginUsers`) was clicked once to activate it.
- OK clicked once. Cancel: 0.
- Designer URL became `...designer/default.aspx?MGForm=FX_LoginUsers`. A new `FX_LoginUsers` tab appeared, selected, beside `IDOs`.
- Reopen count: **1**. Select Form opens: **1**. Select Form criterion entries: **1**.

## 5. Reopened Form readback (fresh snapshot and screenshots)

Fresh snapshot saved to `evidence/EXP-137/t18-03-reopened-form-fresh-snapshot.md`. Screenshots: `t18-04` (identity and canvas), `t18-05` (Details > Collections).

| Property | Value read back |
|---|---|
| Form tab | `FX_LoginUsers`, selected |
| Name | `FX_LoginUsers` |
| Caption | `FX_LoginUsers` |
| Version | `User version for user <account>` |
| Device Type | Default |
| Form Type | Normal |
| Is Master | True |
| Footer | `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph` |
| Primary Collection | `FX_LoginUsers` (Details > Collections, read-only) |
| Save | disabled |
| Undo | disabled |
| Dialog | none |

- Canvas (`t18-04`): GridLeft layout with a grid row indicator `1` and four stacked edit boxes (the four edit-box textboxes in the snapshot). Labels and individual bindings were not read (not requested; not attempted).
- The Details panel expansion is the only UI-state change after reopen. No component, Property or Form value was changed.
- Console counter: `2 errors, 0 warnings` before and after the task (same as the T16 baseline; not investigated).

## 6. Counts (T18)

- Designer Form close: **1** (the FX_LoginUsers tab only).
- Select Form dialog opens: **1**. Criterion entries: **1**. OK: **1**. Cancel: **0**. Rows in the settled result: **1** (exact match).
- Reopen of FX_LoginUsers: **1**.
- Save clicks: **0**. Caption edits: **0**. Component or binding edits: **0**. Pane expansion attempts: **0**.
- Create Form / Finish / Save Template / wizard actions: **0**.
- Check-in or check-out: **0**. Runtime open: **0**. Record insert or Save: **0**.
- Metadata unload, global Form-object unload, FormSync, deployment: **0**.
- Vendor or non-FX_ Form action: **0** (IDOs tab was not selected, changed or closed; the Designer's Form menu recent list was not selected from).
- Designer Form menu opens: **1** (no item chosen). Escape presses: **1** (no effect on the menu; no combobox was active).
- Hover attempt timeouts: **1** (blocked by the open menu; no state change).
- Recovery: no Ref-not-found error. Explicit snapshots: 4 (after tab select; a depth-limited snapshot while the Form menu was open; after close; the reopened-Form snapshot `t18-03`). Action results also returned snapshots (not counted separately). Targeted finds: 6 (`Open`, `Design`, `Select Form`, `OK`, `Primary Collection` twice). Hover timeout: 1 (above). Session expiry: 0. Session recovery: 0. The fresh-snapshot recovery allowance was not used because no Ref-not-found error occurred.
- Coordinate clicks: **0**.
- Browser JavaScript authored by the worker: **0**. The tool wrappers print generated `Ran Playwright code` blocks; those are tool output. The `deny_browser_javascript` flag is not verifiable by the worker.
- Screenshots: `t18-00` to `t18-05` (six; each viewed).

## 7. Acceptance status after T18 (this task only)

- **Persistence (A1 step 5/6, close/reopen):** observed in this Designer session. The Form closed without a prompt and reopened from Select Form with identical Name, Caption, Version, scope, Primary Collection and Save-disabled state. **Qualification:** same Designer session and Web Client page; not a portal reload; not a cross-session or database-level proof. A Designer-side cache cannot be excluded from this readback alone.
- **Exactly-one inventory (AC-5 uniqueness):** observed. The exact-name infix Select Form criterion (`FX_LoginUsers`, Name, case-insensitive) returned one row, `FX_LoginUsers` / `FX_LoginUsers`. **Qualification:** the list shows no scope column; the single-row result is the accessible Select Form inventory in this session; the User scope is established from the reopened Form footer, not from the list.
- **Caption on the reopened Form (AC-5):** observed `FX_LoginUsers`.
- **Generated Form layout (AC-5/AC-8 partial):** the four-edit-box GridLeft canvas is visible after reopen. Binding readback is **not** done.
- **Bindings (AC-5/AC-7 partial):** not verified in T18 (per instruction). Remain unresolved.
- **Runtime (AC-8 to AC-10):** not attempted.

## 8. Unresolved items and limitations

1. Persistence is established only for the Designer session and this Web Client page; a portal reload or a fresh session readback is still needed before a cross-session claim.
2. The Select Form list does not show scope. Exactly-one is shown for the accessible list; scope is not independently proven from the list.
3. Field-to-property bindings remain unverified. The T16 Pane (00) expansion route was not repeated.
4. The Form-menu toolbar interception (open Form menu blocking the toolbar Open control) is a UI obstacle; the recovery was a Form-button toggle, not a state-changing action.
5. The save-toast phrase `global object(s)` from T17 remains unexplained; no object was identified in this task.
6. Console counter unchanged at 2 errors; not investigated.
7. The Details panel was left expanded in the reopened Form (UI state only).
