# EXP-041-R3 T3 — Multi-View wizard preflight inventory (no Finish)

Date: 2026-10-10. Run R-20261010-154641-QsiV · EXP-041-R3 · cycle 3 · task T3.
Worker session `9c24aaf2-4ab2-4bfd-9a4b-9da1b4b03cc3` · task_message_id `cf4a1476-1f74-4d2c-8a6a-51bf65bdae9c`.
Scope: one wizard (Classic → Multi-View), page 1 and one Next to page 2. **No Finish. No Save. No Form created.** Wizard left open on page 2 (stable inspection state).

## 1. Session gate (before any T3 browser action)

- Tabs: Designer tab (`Infor Mongoose Application Development Framework (G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT)`) selected; Web Client tab not used.
- Designer, fresh snapshot (before New): Save and Regenerate disabled; no Form tab; no dialog; status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`.
- Same session as the AC-2 gate (T1), so the T1 gate result is retained without repeating its queries.

## 2. Route and labels (captured before OK)

| Level | Rendered label | Evidence |
|---|---|---|
| Designer toolbar | New (`#mgtoolbarbutton-1088`) | fresh snapshot |
| Dialog | Form Wizard Selection; **New Form** radio selected; Extend Form unselected | `t3-01`; dialog snapshot |
| Category | **Classic** (list label "Classic", description "WinStudio classic form wizards") | `t3-01`; dialog snapshot |
| Wizard | **Multi-View** (list label; description "Multi-view (grid/detail) form bound to an IDO collection"); combobox value `MultiView` | `t3-01`; dialog snapshot |

The Category list had the same seven labels as in T1 (Classic, ExtDataSource, Flex, Form Builder, IDS, New Data, REST). The Classic list had the same seven wizards (Build from Scratch, Detail-Only, Grid-Only, Multi-View, Query, Report, Tile). Only Classic → Multi-View was selected. OK was pressed once.

## 3. Page 1 — "Form Wizard - MultiView" (loaded; no load error; no ComponentFlags message)

Initial state (before any entry; `t3-02`):

| Control | Initial | Notes |
|---|---|---|
| Name (required) | empty, active | no prepopulated text |
| Form Type | `MultiView` (grey, read-only) | default |
| Form Layout (required) | `GridLeft` | default |
| Device Type (required) | `Default` | default |
| Data Source (required) | empty | list of IDOs |
| Query Form | empty | not used (page text: a query form is created if a name is entered) |
| Comments | empty | not used |
| Back / Finish | disabled | |
| Next | enabled | |

Entries and state before Next (`t3-03`, fresh snapshot):

| Control | Entry | Result |
|---|---|---|
| Name | **one plain `browser_type` (no `slowly`)**, text `FX_HelloWorld01`; the tool ran `…getByLabel('', {exact:true}).fill('FX_HelloWorld01')` inside the group "Form Template". No Enter, no dropdown opened, no list entry picked. | Combobox reads `FX_HelloWorld01`, active. |
| Data Source | Trigger `Open` (`e543`) opened the IDO list (359 entries, counted from the option refs e574–e1290 in the snapshot). Exactly one `FX_HelloWorld01` cell (ref e837). Chosen once. | Combobox reads `FX_HelloWorld01`. |
| Form Type | not changed | `MultiView` |
| Form Layout | not changed | `GridLeft` |
| Device Type | not changed | `Default` |
| Query Form / Comments | not changed | empty |
| Save Template | **not present on page 1** (no checkbox in the page-1 tree) | — |
| Scope | status bar | `User / anton.ramos@3mworks.com.ph` |

## 4. Next (once) → page 2

- Fresh snapshot before the click: Next labelled "Next" (`e563`).
- Next advanced to **page 2 with no alert** (no `alertdialog`, no "Value is required for Name"). This is the step that failed in EXP-041-R2 T2/T3 with key-event entry. Observed: the plain-fill entry was accepted by Next in this session.
- Page 2 (`t3-04`, full dialog snapshot):
  - Title: "Form Wizard - MultiView"; text "Select properties to include for the primary collection."
  - Left list "Properties" (available), in order: `_ItemId`, `_ItemWarnings`, `CreateDate`, `CreatedBy`, `InWorkflow`, `NoteExistsFlag`, `RecordDate`, `RowPointer`, `UDFDateTime1`–`6`, `UDFDecimal1`–`6`, `UDFInteger1`–`6`, `UDFLongText1`–`2`, `UDFMediumText1`–`6`, `UDFRecordDate`, `UDFRowPointer`, `UDFShortText1`–`7`, `UpdatedBy`.
  - Right list "Primary Collection" (selected): **`FX_Code`**, **`FX_Label`** (exactly these two).
  - Transfer buttons: `>>` (`e1347`), `>` (`e1349`), `<` (`e1351`), `<<` (`e1353`). **None pressed.**
  - Buttons: Back (enabled), Next (enabled, labelled "Next"), **Finish disabled**, Cancel, Help.
  - **No Save Template control on this page.**
  - Scope bar: `User / anton.ramos@3mworks.com.ph`.
- Next is still enabled on page 2, so **at least one further wizard page exists**. Per the brief, the worker did not advance.

## 5. What the page-2 inventory does and does not show

- Shows: the IDO's properties are offered as the primary collection's selectable properties (`FX_Code`, `FX_Label`, plus the system properties `CreateDate`, `CreatedBy`, `InWorkflow`, `NoteExistsFlag`, `RecordDate`, `RowPointer`, `UpdatedBy` and the UDF fields). The two application fields are in the right-hand list on arrival. No action was taken on this page.
- Does not show: whether the right-hand list was pre-populated by the wizard or changed by any earlier action (the worker did not see the list before arrival; no action was taken on it). Does not show: the final page, the Save Template state, the Finish confirmation, or any generated-object preview.
- The system properties in the left list are **not** in the Primary Collection list on arrival. The worker did not add or remove them.

## 6. Operation counts (T3)

| Operation | Count |
|---|---|
| Designer New | 1 |
| Form Wizard Selection: Category list opened / Classic selected | 1 / 1 |
| Wizard list opened / Multi-View selected | 1 / 1 |
| Form Wizard Selection OK | **1** (one wizard attempted) |
| Name entries (`browser_type`, no `slowly`) | **1** (plain fill; no Enter; no dropdown; no list pick) |
| Data Source trigger opened / option chosen | 1 / 1 |
| Next | **1** (page 1 → page 2; no alert) |
| Alert dialogs | 0 |
| Ctrl+A | 0 |
| Save Template uncheck | 0 (not present on the pages reached) |
| Page-2 transfer-button clicks | 0 |
| Finish | **0** |
| Save (Designer) | **0** |
| Form created / object created | **0** |
| Cancel (wizard) | 0 |
| JavaScript / evaluate / run-code | 0 |
| Fresh recovery snapshots | 0 used |
| Corrected inspections | 0 used |
| PNG screenshots (worker-authored) | 4: `t3-01`, `t3-02`, `t3-03`, `t3-04` |

## 7. Browser state at end of T3

- Designer tab selected. Form Wizard - MultiView open on **page 2** (in-page dialog, left open because the brief forbids advancing, and Cancel would discard the entered Name and Data Source). No alert. No Form tab. Save disabled. Scope User.
- Web Client tab untouched.
