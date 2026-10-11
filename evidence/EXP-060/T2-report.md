# EXP-060 — T2 report: one native New, FX_Picture configured, pre-Save verification (Save NOT invoked)

- Run `R-20261011-215916-hvC7`, experiment EXP-060, cycle 1, task T2.
- Worker session `94f4c67d-1fd5-4ff9-9792-9ff15f4b0271`; task_message_id `1ebf0350-0f50-440a-b95e-463c08f48563`.
- Date 2026-10-11 (system date). Editing scope User. Target `FX_Picture`.
- Result: **AC-3 supported at the UI and accessibility level (pre-Save, observed).** Save **not** invoked. Form closed or reopened: no. No query after the T1 pre-creation query. No checkout action.

## 1. Gate (T2 start)

| Check | Observed |
| --- | --- |
| Tabs | Tab list (1): tab 0 Designer (`designer/default.aspx?MGForm=FX_Items`) was current. Select tab 1 (Web Client) succeeded on the first attempt. |
| Identity bar | `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` |
| Form | Tab `Property Classes` selected; heading `Property Classes`; URL `favoriteContext=IdoPropertyClasses` |
| Zero-result state (T1) | Status `Base Class (IDO Property Classes 1 of 1)`; one row, blue-star, Class Name blank; no record saved. Save `[disabled]` (verified by snapshot). |
| Placeholder | Not a pending or existing record (Save disabled before New). The pre-creation query was **not** repeated. |
| Checkout controls on the placeholder | Check In and Undo Check Out `[disabled]` |
| Dialog | None |
| Evidence | `t2-00-pre-new-placeholder-state.png` |

## 2. New (exactly once)

- One click on toolbar `New` (ref `f1e29`). No retry.
- Result: the grid still shows **one** row (`1`, starred, Class Name now `FX_Picture`); the status counter reads `Base Class (IDO Property Classes 1 of 1)`; **Save became enabled** (not invoked).
- Interpretation: New did **not** add a second row (the counter stayed `1 of 1`, and no second row appeared in the grid). The single add-mode record that was the T1 placeholder now carries the new-record editing state. This is an **inference** from the one-row grid, the `1 of 1` counter, and the enabled Save. It is not a database read. Evidence: `t2-01-after-single-new-row-count.png`.
- The `Revision No` `1`, `Revision Date` `10/11/2026`, `Locked By` `anton.ramos@3mworks.com.ph` and `Access As` `G6R` values appeared on the record without being typed (system population, as in EXP-048).

## 3. Configuration (native controls only)

| Field | Action | Committed readback |
| --- | --- | --- |
| Class Name | fill `FX_Picture` (`f1e449`), Tab | Textbox `FX_Picture`; grid cell `FX_Picture` |
| Data Type | Open trigger `f1e522` (click); `Binary` option `f1e1363` (click) | Combobox `Binary`; grid cell `Binary` |
| Length | fill `-1` (`f1e531`), Tab | Textbox `-1`; grid cell `-1` |
| Column Data Type | Open trigger `f1e559` (click); `varb` typed key by key (`f1e558`); **one F2**; single option `varbinary` `f1e1787` (click); Tab | Combobox `varbinary`; grid cell `varbinary` |
| Binary Format | Open trigger `f1e657` (click); option `PNG` `f1e1810` (click); Tab | Combobox `PNG`; grid cell `PNG` |
| Base Class | not touched | Combobox empty (snapshot); grid Base Class cell empty |
| Domain IDO Name / Domain Property / Domain List Properties | not touched | All three comboboxes empty (snapshot) |
| Label String ID | not touched | Textbox empty (snapshot); grid cell empty |

### F2 lookup (Column Data Type) — exactness check

- Prefix `varb` typed key by key into the combobox with the list open. One F2 press.
- Result: the list was filtered to **one** entry, `varbinary` (`t2-02-column-data-type-varb-f2-lookup.png`). No other entry (`binary`, `varchar`, etc.) was present in the filtered list.
- The single option was then clicked once. The committed value was read back in the combobox (`varbinary`) and in the grid (`varbinary`). No other data type or column type was substituted. The entry was not guessed.

### Binary Format lookup

- Open list showed `JPEG`, `PNG`, `TIFF` (`find`). `PNG` was clicked once. The committed value was read back as `PNG` in the combobox and in the grid cell.

## 4. Pre-Save readback (AC-3)

Source: accessibility snapshot of the Property Classes tabpanel, saved as `t2-03-pre-save-accessibility-tabpanel.yml` (read by Grep and direct find).

| Field | Required | Observed (native readback) | Result |
| --- | --- | --- | --- |
| Class Name | `FX_Picture` | `textbox "Class Name:": FX_Picture`; grid `FX_Picture` | Match |
| Data Type | Binary | `combobox "Data Type:": Binary`; grid `Binary` | Match |
| Length | -1 | `textbox "Length:": "-1"`; grid `-1` | Match |
| Column Data Type | varbinary | `combobox "Column Data Type:": varbinary`; grid `varbinary` | Match |
| Binary Format | PNG | `combobox "Binary Format:": PNG`; grid `PNG` | Match |
| Base Class | blank | `combobox "Base Class:"` no value; grid Base Class cell empty | Blank |
| Domain IDO Name | blank | `combobox "Domain IDO Name:"` no value | Blank |
| Domain Property | blank | `combobox "Domain Property:"` no value | Blank |
| Domain List Properties | blank | `combobox "Domain List Properties:"` no value | Blank |
| Label String ID | blank | `textbox "Label String ID:"` no value; grid cell empty | Blank |
| Decimal Position / Default Value / Input Mask / Prompt Char / Justify / Date Format / Inline List / Validators | not specified | Not set (blank) | Not configured (as specified: not part of the brief) |
| Locked By / Access As / Revision No / Revision Date | system-populated | `anton.ramos@3mworks.com.ph` / `G6R` / `1` / `10/11/2026` | Not typed by the worker |
| Check In / Undo Check Out | (checkout state) | `[disabled]` on the unsaved record | Not a checkout reading (see limitations) |
| Save | enabled, not invoked | Enabled (`find`: `button "Save" [ref=f1e28] [cursor=pointer]`, no disabled attribute) | Not clicked |
| Dialog / prompt | none | `find` "dialog": no match | None |

Status bar (settled): `Date Format (IDO Property Classes 1 of 1)`. Tab after Binary Format moved focus to Date Format (an empty combobox). No value was typed there.

Visual confirmation: `t2-04-pre-save-configuration-visual.png` shows Data Type `Binary`, Length `-1`, Column Data Type `varbinary`, Binary Format `PNG`, empty Label String ID, and empty Domain IDO Name, Domain Property, and Domain List Properties. The grid row reads `FX_Picture`, starred.

## 5. Action audit (T2, in order)

| # | Tool | Target / input | Result |
| --- | --- | --- | --- |
| 1 | `browser_tabs` list | — | Two tabs; tab 0 current |
| 2 | `browser_tabs` select | index 1 | Web Client selected (first attempt) |
| 3 | `browser_snapshot` (untargeted) | — | Gate state (Save disabled; placeholder; no dialog) |
| 4 | `browser_take_screenshot` | `t2-00-pre-new-placeholder-state.png` | Pre-New state |
| 5 | `browser_click` | toolbar `New` (`f1e29`) | **New (1 of 1)**; one row; Save enabled |
| 6 | `browser_take_screenshot` | `t2-01-after-single-new-row-count.png` | One row; `1 of 1` |
| 7 | `browser_find` | `IDO Property Classes` | Status `Base Class (IDO Property Classes 1 of 1)` |
| 8 | `browser_find` | `Class Name:` | Textbox ref `f1e449` |
| 9 | `browser_type` | Class Name (`f1e449`) = `FX_Picture` | Entered |
| 10 | `browser_press_key` | `Tab` | Focus moved |
| 11 | `browser_find` | `Data Type:` | Open trigger `f1e522` |
| 12 | `browser_click` | Data Type Open (`f1e522`) | List open |
| 13 | `browser_find` | `Binary` | Option `f1e1363` |
| 14 | `browser_click` | `Binary` option (`f1e1363`) | Data Type `Binary` |
| 15 | `browser_find` | `Length:` | Textbox `f1e531`; Data Type readback `Binary` |
| 16 | `browser_type` | Length (`f1e531`) = `-1` | Entered |
| 17 | `browser_press_key` | `Tab` | Length committed |
| 18 | `browser_find` | `Column Data Type:` | Open trigger `f1e559`; combobox `f1e558` |
| 19 | `browser_click` | Column Data Type Open (`f1e559`) | List open |
| 20 | `browser_type` (slowly) | Column Data Type combobox (`f1e558`) = `varb` | Prefix entered |
| 21 | `browser_press_key` | `F2` | **The single F2**; one option `varbinary` |
| 22 | `browser_take_screenshot` | `t2-02-column-data-type-varb-f2-lookup.png` | One filtered entry `varbinary` |
| 23 | `browser_find` | `varbinary` | Option `f1e1787` (selected) |
| 24 | `browser_click` | `varbinary` option (`f1e1787`) | Column Data Type `varbinary` |
| 25 | `browser_press_key` | `Tab` | Committed |
| 26 | `browser_find` | `Binary Format:` | Open trigger `f1e657` |
| 27 | `browser_click` | Binary Format Open (`f1e657`) | List open |
| 28 | `browser_find` | `PNG` | Option `f1e1810` (JPEG, PNG, TIFF listed) |
| 29 | `browser_click` | `PNG` option (`f1e1810`) | Binary Format `PNG` |
| 30 | `browser_press_key` | `Tab` | Focus to Date Format (not typed) |
| 31 | `browser_snapshot` (tabpanel `f1e105`, saved) | `t2-03-pre-save-accessibility-tabpanel.yml` | Pre-Save readback |
| 32 | `Grep` (repository file read) | `t2-03` yml | Field readback extracted |
| 33 | `browser_find` | `Save` | Enabled; not clicked |
| 34 | `browser_find` | regex `FX_Picture \| Base Class \(IDO` | Class Name and grid row readback |
| 35 | `browser_take_screenshot` | `t2-04-pre-save-configuration-visual.png` | Visible pre-Save configuration |
| 36 | `browser_find` | `dialog` | No match |

### Reconciled counts (T2)

| Operation | Count |
| --- | --- |
| **New** | **1** |
| **Save** | **0** |
| Form close / reopen | 0 / 0 |
| Pre-creation or recovery query (F4 / Filter in Place) | 0 / 0 |
| **F2 (Column Data Type lookup)** | **1** |
| Text entries (`browser_type`) | 3 (Class Name, Length, Column Data Type prefix `varb`) |
| Clicks | 7 (New; Data Type Open; Binary; Column Data Type Open; varbinary; Binary Format Open; PNG) |
| Tab presses | 4 (after Class Name, Length, Column Data Type, Binary Format) |
| Other key presses | 1 (F2) |
| Tab-list / tab-select | 1 / 1 |
| Untargeted / targeted snapshots | 1 / 1 (plus the snapshot files created by the tool on each action) |
| `browser_find` calls | 12 |
| Screenshots (worker-requested PNG) | 4 (`t2-00`, `t2-01`, `t2-02`, `t2-04`) |
| Accessibility files (worker-requested) | 1 (`t2-03`) |
| Checkout / check-in / undo checkout | 0 |
| Designer, unload, FormSync, cache, SQL | 0 |
| Browser console, network, or other diagnostic call | 0 |
| JavaScript / evaluate / run-code | 0 (the tool wrappers display generated Playwright code; I supplied none) |
| Dialogs answered | 0 |
| Ref-not-found errors / recovery snapshots / timeouts | 0 / 0 / 0 |
| Mutations to any artifact other than the unsaved FX_Picture record | 0 |

## 6. Unexpected UI responses and interpretation

1. **New appeared to convert the T1 placeholder rather than add a row.** The grid stayed at one row and the counter stayed `1 of 1`. Save became enabled. My reading is that the add-mode record was reused. This is the main interpretation that the T3 or Save task should confirm, for example by the one-row count after the Save.
2. **Column Data Type combobox displayed `varbinary` after the prefix and before the click.** This was the list's autocomplete text, not a committed value. The committed value is the combobox and grid readback after the single option click.
3. **Tab after Binary Format moved focus to Date Format** (empty; not typed). This is expected Tab behaviour.
4. **Check In and Undo Check Out remain disabled** on the unsaved record. This is not a checkout reading. Checkout ownership can only be observed after Save (AC-5).

## 7. Acceptance status (T2)

| AC | T2 status | Evidence | Limits |
| --- | --- | --- | --- |
| AC-1 | Carried from T1 (not repeated; gate re-checked in T2 start). | `t2-00` | — |
| AC-2 | Carried from T1 (not repeated, as instructed). | `t1-03`, `t1-04`, `t1-05` | — |
| AC-3 | **Supported (observed, UI and accessibility level, pre-Save).** Name, Binary, -1, varbinary (exact F2 single option, committed), PNG; Base Class, Domain and Label String ID blank; one New. | `t2-02`, `t2-03`, `t2-04`; this report §3–4 | Pre-Save only; no database read; the New-record identity is inferred (§6.1). |
| AC-4 | Not started (Save not invoked). | — | — |
| AC-5 to AC-9 | Not started. | — | — |

## 8. Limitations

- The only pending state is the unsaved FX_Picture record. Nothing is persisted.
- The New-record identity rests on the one-row grid, the counter `1 of 1`, and the enabled Save. A database or metadata read is out of scope.
- Blank Base Class, Domain and Label String ID are read from the accessibility tree and the grid, not from stored values.
- Decimal Position, Default Value and similar fields were left unset because the brief does not specify them.
- The inherited Sql Tables, Sql Columns and FX_Items tabs from EXP-059 remain open, unacted on.

## 9. Final Form state (end of T2)

- One Mongoose tab (the Web Client) selected. Tabs: Sql Tables, Sql Columns, FX_Items, Property Classes (active). The Designer tab 0 is not selected and was not acted on.
- Property Classes: one row, `FX_Picture` (starred, unsaved); configuration as in §4; **Save enabled and not clicked**; status `Date Format (IDO Property Classes 1 of 1)`.
- No dialog, no in-page prompt, no portal banner.
- The pending record is intentionally left unsaved for coordinator review (per the T2 instruction: "stop after pre-Save verification").
