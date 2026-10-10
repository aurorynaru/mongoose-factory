# EXP-048 T2 — Evidence summary (one New, FX_ItemBase configured, NOT saved)

Run `R-20261011-012552-sBdG`, cycle 1, task T2, task_message_id `ede777ba-4dc3-46b0-b484-6bc025b47e75`, worker session `1dfccb89-2e8f-4980-9353-b101a842bd6b`. Date 2026-10-11 (system date).

Scope: one native New; configure only FX_ItemBase's five explicit fields; verify; leave the row pending. **No Save, no FX_Cost, no close, no reopen, no recovery query, no absence query repeated, no edit of FX_UM or FX_UMBase, no checkout or check-in action.** Classification: **observed, same session, UI level only; not replay_verified.**

## Preflight (before any mutation)

- Fresh untargeted snapshot: one Mongoose tab, selected. Property Classes tab selected, URL `favoriteContext=IdoPropertyClasses`. Identity bar `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`.
- One data row FX_UM (checked out to the operator); Save `[disabled]`; no dialog; no portal banner; no placeholder; status `Base Class (IDO Property Classes 1 of 1)`.
- Absence queries were not repeated, per the T2 instruction.

## New and configuration (one New; five explicit fields)

| Step | Action | Observed |
| --- | --- | --- |
| New | ONE click on toolbar `New` (ref `f1e29`, from a fresh untargeted snapshot) | Row 2 added: starred, Class Name blank, status `Class Name (IDO Property Classes 2 of 2)`. FX_UM row 1 unchanged. `T2-00` |
| Class Name | ONE plain fill `FX_ItemBase`, ONE Tab | Textbox `FX_ItemBase`; grid row 2 `FX_ItemBase` |
| Data Type | Open button (`f1e519`), then option `String` (`f1e910`) | Combobox `String`. Option selected from the native list |
| Length | ONE plain fill `20`, ONE Tab | Textbox `20`; grid row 2 `20` |
| Column Data Type | Open button (`f1e556`); ONE key-by-key type `nvar` (slowly) into combobox (`f1e555`); ONE F2 | List filtered to one entry `nvarchar` (`T2-01`) |
| Column Data Type (select) | ONE click on option `nvarchar` (`f1e1352`), ONE Tab | Combobox `nvarchar`; grid row 2 `nvarchar` |
| Label String ID | ONE plain fill `FX_sItem`, ONE Tab | Textbox `FX_sItem`; grid row 2 `FX_sItem`; focus moved to Input Mask (not typed) |

## Pre-Save verification (`T2-02` screenshot, `T2-03` accessibility)

| Field | Control value (accessibility) | Grid row 2 (accessibility row) | Matches spec |
| --- | --- | --- | --- |
| Class Name | textbox `FX_ItemBase` | `FX_ItemBase` | Yes |
| Data Type | combobox `String` | `String` | Yes |
| Length | textbox `20` | `20` | Yes |
| Column Data Type | combobox `nvarchar` | `nvarchar` | Yes |
| Label String ID | textbox `FX_sItem` | `FX_sItem` | Yes |
| Base Class | combobox empty | blank | Unassigned (required) |
| Domain IDO Name / Domain Property / Domain List Properties | comboboxes empty | blank | Unassigned (required) |
| Decimal Position / Default Value | textboxes empty | blank | Not set (not specified for this class) |
| Description, Input Mask, Prompt Char, Inline List, Validators, Boolean True/False, Display Decimal Position | empty | blank | Not changed |
| Checkboxes (Required, Read Only Record, Validate Immediately, Read Only, Upper Case, HTML, UI hidden) | all unchecked | unchecked | Not changed |
| Revision No / Revision Date / Locked By / Access As | `1` / `10/10/2026` / `anton.ramos@3mworks.com.ph` / `G6R` | same | Populated by the system on New. Not typed by the worker. Origin inferred, not observed |

- The FX_ItemBase row is pending: row star (`*2`), status `Input Mask (IDO Property Classes 2 of 2)`, and in the accessibility tree the form's `Check In` and `Undo Check Out` buttons are `[disabled]` (not clicked).
- Save: `find` "Save" returns the toolbar button **enabled** (no `[disabled]`) — the expected pending state.
- Dialog: `find` "dialog" → no match. No validation text, no duplicate-name message.
- FX_UM row 1 (accessibility): `FX_UM | FX_UMBase | 1 | anton.ramos… | 10/10/2026 | G6R | String | 10 | nvarchar | FX_UMs | FX_UM | FX_Description | FX_sUM`, checkout buttons as before. Unchanged in the same snapshot.

## Asterisk inventory (pre-Save; meaning not assumed)

- Form labels with an asterisk on the staged FX_ItemBase row: `*Class Name` (red, in the label), `*Data Type`, `*Length`, `*Column Data Type`, `*Label String ID`.
- Form labels without an asterisk: `Base Class`, `Description`, `Revision No`, `Revision Date`, `Locked By`, `Access As`, `Decimal Position`, `Default Value`, `Domain IDO Name`, `Domain Property`, `Domain List Properties`, `Domain Additional Settings`, and the remaining Formatting and checkbox labels.
- Grid headers with an asterisk: `* Class Name`, `* Revision No`, `* Revision Date`, `*Data Type`, `*Length`, `*Column Data Type`, `*Label String ID`. Domain headers are not starred in this view.
- Comparison (T1 observations, same Form): the saved FX_UMBase browse record had asterisks on `*Data Type`, `*Length`, `*Column Data Type`, `*Label String ID`, the same four labels that are starred here. The inherited FX_UM record had asterisks on the Domain labels instead. Whether these asterisks mean "required", "override" or something else is **unresolved**. T2 does not interpret them.

## Preservation (qualified)

- FX_UM: values and enabled checkout buttons were read unchanged in the pre-Save accessibility snapshot. The worker did not act on FX_UM.
- FX_UMBase: not displayed in this Form state (replaced by the FX_UM query in T1) and not re-queried (no absence or further query was permitted). Its state is **not independently verified in T2**; qualified by the action log (no action targeted FX_UMBase).

## Operation counts (T2)

| Operation | Count |
| --- | --- |
| New (toolbar) | **1** |
| Save (toolbar) | **0** (not invoked; enabled but untouched) |
| Close / reopen | **0 / 0** |
| Recovery queries | **0** |
| Absence queries | **0** (not repeated) |
| Check In / Check Out / Undo | **0 / 0 / 0** |
| Form fields edited | **5** (Class Name, Data Type, Length, Column Data Type, Label String ID); no other field typed or clicked |
| Browser mutations (total) | **14** = 5 clicks (New; Data Type Open; `String`; Column Data Type Open; `nvarchar`) + 3 plain fills (Class Name, Length, Label) + 1 key-by-key type (`nvar`) + 1 F2 + 4 Tab |
| Reads | 10 `browser_find` calls; 2 explicit snapshots (1 untargeted preflight; 1 targeted pre-Save); tool-generated snapshot logs accompany actions |
| Screenshots | 3 (`T2-00`, `T2-01`, `T2-02`) |
| Accessibility snapshot files | 1 (`T2-03-FX_ItemBase-pre-save-accessibility.yml`) |
| Errors / Ref-not-found / timeouts | **0 / 0 / 0** |
| Prompts or dialogs answered | **0** |
| Portal banner dismissals | **0** (none visible) |
| Worker-authored JavaScript, evaluate, run-code, direct SQL | **0**. Note: the MCP tool wrapper's generated code for the Data Type and Column Data Type Open clicks targeted element ids internally; the worker supplied refs only |

## Evidence index

| File | Shows | Proves | Does not prove |
| --- | --- | --- | --- |
| `T2-00-after-single-new-click-placeholder.png` | Row 2 starred and blank; FX_UM row 1; status `Class Name (2 of 2)`; Class Name focused; New tooltip | One new pending row created by the single New (AC-6 action count) | Field values |
| `T2-01-column-data-type-nvar-f2-lookup.png` | Row 2 `FX_ItemBase`; String; 20; Column Data Type dropdown filtered to one `nvarchar` | The prefix filter and the single match before selection | That nvarchar was committed |
| `T2-02-FX_ItemBase-staged-pre-verification.png` | Row 2 starred `FX_ItemBase`; form values String, 20, nvarchar, FX_sItem; Base Class and Domain fields empty; Input Mask focused, empty; status `Input Mask (2 of 2)`; Save enabled; no dialog | The configured values as displayed with the pending row (AC-4 visual) | Accessibility-level values (see T2-03); persistence |
| `T2-03-FX_ItemBase-pre-save-accessibility.yml` | Accessibility tree of the form: control values and the row-2 grid cells; Check In / Undo Check Out `[disabled]` | AC-4 control and grid values; no Base Class or Domain assignment; checkout buttons disabled for the pending row | Persistence; the origin of system-populated Revision/Locked By fields |

## Acceptance checks (T2 scope)

- **AC-4 (FX_ItemBase, pre-Save): supported** (one run, UI level): each of the five values verified in native controls and the row-2 grid cells (`T2-02`, `T2-03`); no unrelated field edited.
- **AC-6 (partial): action count supported so far** — one New; no Save yet; the shared Save is still to come (FX_Cost not created).
- **AC-5, AC-7, AC-8, AC-9, AC-10 (final): not run** (T2 scope). AC-10 partial: T2 counts reconciled to controller actions and screenshots above.
- **AC-1 (preflight, carried from T1 and re-checked in T2): supported (qualified)** — identity, Save disabled, no dialog at T2 start.

## Limits

- Single session, UI level. Accessibility values are the Web Client's view, not stored values.
- "Pending" is inferred from the star, the status counter, the enabled Save and the disabled Check In / Undo Check Out buttons. No database read.
- The Revision No, Revision Date, Locked By and Access As values on the new row were populated by the system; the origin is inferred.
- Asterisk meaning is unresolved.
