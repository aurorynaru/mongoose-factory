# EXP-049 — T3 read-only Web Client state checkpoint

Run: R-20261011-020822-9Eej, cycle 2, task T3 (worker session 7856326a-2d49-49d2-933b-fb1f1b88c8ea).
Scope: read-only. One tab selection and one fresh accessibility snapshot. No click inside any runtime Form, no value change, no Save, no discard, no close, no reopen, no navigation or refresh, no authentication, no wizard, no checkout or check-in, no screenshot (none repeated), no Tab/F4 or filter or target query.

## Inputs read first
- `evidence/EXP-049/T2-recovery-inspection-checkpoint.md` (T2 checkpoint, 94 lines). Consistent with this step's findings. It flagged the Sql Tables placeholder as unverified because tab 1 had not been inspected. This step still could not verify it (see below).
- `evidence/EXP-049/T1-24-final-webclient-state-after-T1.png`: Web Client, Property Classes runtime, FX_UM (1 of 1), Base Class FX_UMBase, Domain FX_UMs / FX_UM / FX_Description, String 10 nvarchar FX_sUM, Locked By operator, Check In and Undo Check Out enabled, Save greyed. The captured tab set shows Property Classes, IDOs, Sql Tables, IDO Projects, and Export/Import Strings tabs.

## Tab selection (browser navigation only, not a Mongoose action)
1. `browser_tabs select index=1` → **Error: "Tab 1 not found."** The preceding `list` (read-only) had shown tab 1 present.
2. `browser_tabs list` (read-only) → tab 1 listed as the Infor OS portal Mongoose URL, `mingle-portal.se1.inforcloudsuite.com/.../favoriteContext=IdoPropertyClasses`. Tab 0 is the Designer.
3. One corrected `browser_tabs select index=1` → success. Tab 1 is now `(current)`. Console event: new entries in `evidence\playwright\console-2026-10-10T18-19-43-460Z.log#L1-L37` (not read).

## Fresh accessibility snapshot of tab 1 (single snapshot; not repeated)
- Page title `Mongoose`, portal top navigation with tabs `System Administrator` and `Mongoose` (selected). Console: 0 errors, 10 warnings.
- No portal notification banner in the snapshot. No modal dialog, alert, confirm, or prompt element. No "Session Expired" or authentication element.
- Mongoose runs in an iframe (`[active]`). Identity bar: `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`.
- Global toolbar: Save **[disabled]**; Designer button **active**; Filter in Place, New, Delete, Refresh enabled.
- Visible runtime tab strip (tablist): **Property Classes** `[selected]`, IDOs, Sql Tables, IDO Projects, Export/Import Strings. Each non-selected tab shows a close button.
- Active tabpanel (Property Classes), exposed in accessibility tree:
  - Grid: one row, `FX_UM | FX_UMBase | (blank description) | Revision No 1 | Locked By anton.ramos@3mworks.com.ph | Revision Date 10/10/2026 | Access As G6R | String | 10 | nvarchar | Required unchecked | Domain IDO FX_UMs | Domain Property FX_UM | Domain List Properties FX_Description | Label FX_sUM`. Row checkbox state: checked (checked-out indicator).
  - Status text: `Base Class (IDO Property Classes 1 of 1)`.
  - Detail fields: Class Name `FX_UM`; Base Class combobox `FX_UMBase`; Revision No `1`; Revision Date `10/10/2026`; Locked By `anton.ramos@3mworks.com.ph`; Access As `G6R`; Data Type `String`; Length `10`; Column Data Type `nvarchar`; Label String ID `FX_sUM`; Domain IDO Name `FX_UMs`; Domain Property `FX_UM`; Domain List Properties `FX_Description`.
  - Buttons **Check In** and **Undo Check Out**: present, not shown as `[disabled]` in the snapshot (enabled, as in T1-24). Not activated.
  - Required, Read Only Record, Validate Immediately checkboxes: unchecked (Property Class FX_UM has no Required flag).

## Items this snapshot does NOT establish
- **Sql Tables tab state (placeholder, unsaved change, Save state for that tab):** NOT established. The accessibility tree exposes only the active tabpanel (Property Classes). The Sql Tables tabpanel is not in the tree. Determining its state would require selecting tab 2 (Sql Tables) or interacting with the Form, which this task forbids. Per the instruction, this limitation is reported and the step stops here. The T1-13 and T1-19 blue-star placeholder observation therefore remains unverified for the current state.
- **IDOs tab, IDO Projects tab, Export/Import Strings tab contents:** not exposed. Not inspected.
- **Whether the Property Classes row or Sql Tables/IDOs tab have unsaved edits:** Save is disabled at the global toolbar level for the active Form. Per-tab edit indicators for the non-active tabs are not exposed. Not established.
- **Authentication:** no challenge observed. Session validity is inferred from the authenticated identity bar and the absence of any login or expired prompt, not from a session test.
- **Checkout state of FX_UM:** shown as checked out to the operator (row checkbox checked, Check In and Undo Check Out present). Not changed. Origin of the checkout is EXP-048, not verified in this step.

## Acceptance-check status (no new creation evidence)
- AC-1 (preflight, Web Client surface): partially supported. Authenticated identity bar, DEM configuration, and clean global Save state seen in tab 1. The Sql Tables placeholder remains unresolved. Site Developer capability not verified. Designer scope (User) was observed in tab 0's footer in T2, not in this snapshot.
- AC-2 (collision gate): unchanged. Still NOT established. No FX_Items query was run.
- AC-3 (dependencies): FX_UM metadata re-observed in the accessibility snapshot, consistent with T1-24. FX_ItemBase, FX_Cost, FX_HelloWorldProject01, and FX_sDescription not re-read in this step.
- AC-4 through AC-12: not performed.

## Blockers and next permitted action
- **Blocker for creation:** AC-2 is not established. The collision gate for IDO FX_Items and SQL dbo.FX_Items still requires a fresh, bounded, native query with a visibly confirmed criterion, a settled result, and a working positive control. Sql Tables placeholder state must be resolved first.
- **Unresolved, needs operator decision:** whether the Sql Tables tab contains an unsaved blue-star insertion placeholder from T1 (T1-13, T1-19). Do not select, save, or discard it without authorization.
- **Unresolved, needs operator decision:** the IdoPropertyClasses Designer in tab 0 (opened in T1, step 159), not a dialog.
- **Next permitted action:** coordinator decision only. Options: (a) an operator-authorized inspection of the Sql Tables tab's placeholder state, or (b) an operator-authorized fresh absence query under a new task. No action is taken by this checkpoint.

## Files written in this step
- `evidence/EXP-049/T3-webclient-state-checkpoint.md` (this file)
- No other repository file was written. No screenshot was taken. No browser state was changed beyond the tab selection to tab 1 (navigation only).
