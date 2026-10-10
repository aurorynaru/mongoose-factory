# EXP-047-R2 — T2 evidence summary (one New, FX_UM configuration, one ordinary Save; Form left OPEN)

Run `R-20261011-003837-AqH7`, task T2, cycle 1, task_message_id `f4b7d8db-de3c-4f2b-ae76-afdc9f37139b`, worker session `217da4e1-fba3-4a0e-8535-6fc5a92edfd5`. Classification: observed only (single session, UI level). Not replay_verified. The Property Classes Form was NOT closed or reopened in T2. No recovery query was run.

## Accessibility excerpts

| Step | Excerpt (role / name / state) | Meaning |
| --- | --- | --- |
| Pre-New | tab `Property Classes` [selected]; `Save` [disabled]; one row `FX_UMBase`; `Check In` and `Undo Check Out` enabled; status `Base Class (IDO Property Classes 1 of 1)` | Clean start; FX_UMBase checked out to the operator (unchanged) |
| After New | `New` clicked once; row 2 added; status `Class Name (IDO Property Classes 2 of 2)`; `Save` enabled | One new add-mode row |
| Pre-Save | textbox `Class Name:` = `FX_UM`; combobox `Base Class:` = `FX_UMBase`; combobox `Domain IDO Name:` = `FX_UMs`; combobox `Domain Property:` = `FX_UM`; combobox `Domain List Properties:` = `FX_Description`; combobox `Data Type:`, textbox `Length:`, combobox `Column Data Type:`, textbox `Label String ID:` **empty**; `Save` enabled | All five configured values verified; inherited values not exposed |
| Post-Save | `Save` [disabled]; row 2 `FX_UM` not starred; `Data Type:` = `String`; `Length:` = `10`; `Column Data Type:` = `nvarchar`; `Label String ID:` = `FX_sUM`; `Domain IDO Name:` = `FX_UMs`; `Domain Property:` = `FX_UM`; `Domain List Properties:` = `FX_Description`; `Check In` and `Undo Check Out` enabled for the new record; no dialog | Clean settled state; inherited values populated after Save |
| FX_UMBase row (post-Save grid) | row 1: `FX_UMBase`; `1`; `anton.ramos@3mworks.com.ph`; `10/10/2026`; `G6R`; `String`; `10`; `nvarchar`; `FX_sUM` | Matches the T1 baseline (checkout indication not re-read directly) |

## Asterisk inventory (form labels and grid headers)

| State | Form labels with `*` | Grid headers with `*` |
| --- | --- | --- |
| Pre-Save (new row) | `Class Name:` (red), `*Domain IDO Name:`, `*Domain Property:`, `*Domain List Properties:` | `* Class Name`, `* Revision No`, `* Revision Date`, `*Domain IDO Name`, `*Domain Property`, `*Domain List Properties` |
| Post-Save (FX_UM record) | `*Domain IDO Name:`, `*Domain Property:`, `*Domain List Properties:` | `* Revision No`, `* Revision Date`, `*Domain IDO Name`, `*Domain Property`, `*Domain List Properties` |
| FX_UMBase browse (T1 / T2 pre-New, for comparison) | `*Data Type:`, `*Length:`, `*Column Data Type:`, `*Label String ID:` | `* Revision No`, `* Revision Date`, `*Data Type`, `*Length`, `*Column Data Type`, `*Label String ID` |

Meaning (required, override or other): **unresolved**. The FX_UM record shows no asterisk on its inherited Data Type, Length, Column Data Type or Label String ID labels, while FX_UMBase shows asterisks on them. No inference is drawn.

## Screenshot summaries (what each proves and does NOT prove)

| File | Shows | Proves | Does not prove |
| --- | --- | --- | --- |
| `t2-00-pre-new-baseline-FX_UMBase-browse-checked-out.png` | One row FX_UMBase; String, 10, nvarchar, FX_sUM; Check In and Undo Check Out solid blue; Save greyed | Pre-mutation state and FX_UMBase values | Locked By in full (clipped); database state |
| `t2-01-base-class-FX_UMBase-typed-before-commit.png` | Row 2 `FX_UM`; Base Class field `FX_UMBase`; grid row 2 Base Class blank in this image; inherited fields blank; Save enabled | The typed Base Class before commit | The grid commit (confirmed later by a find) |
| `t2-02-base-class-FX_UMBase-after-tab-commit.png` | Focus on Description; Base Class `FX_UMBase`; inherited fields blank | Focus moved on Tab | Grid commit |
| `t2-03-base-class-FX_UMBase-selected-from-list.png` | Base Class `FX_UMBase` highlighted; status `2 of 2` | The list selection of FX_UMBase | Grid commit |
| `t2-04-domain-ido-FX_UMs-selected.png` | Domain IDO Name `FX_UMs` | The form value | Grid cell (confirmed by a later find) |
| `t2-05-domain-property-FX_UM-selected.png` | Domain Property `FX_UM` | The form value | Domain List Properties |
| `t2-06-pre-save-all-five-configured-values.png` | All five values; red asterisk on Class Name; asterisks on the three Domain labels; inherited fields blank; Save enabled | AC-4 pre-Save values; AC-5 blank inherited fields; asterisk inventory | Grid row 2 in full; the asterisk meaning |
| `t2-07-post-save-settled-single-save.png` | Save greyed; row 2 `FX_UM` not starred; inherited values `String`, `10`, `nvarchar`, `FX_sUM` populated; Domain values; Check In and Undo Check Out enabled; Save tooltip visible from the hover | AC-6 settled state; inherited values after Save | Persistence across sessions; database state; the meaning of the enabled checkout buttons |

## Limits

- Single session, Web Client UI only. No database read. No close, reopen or recovery query in T2.
- The inherited values were blank before Save and populated after Save. The mechanism is not established. Pre-Save effective values could not be observed.
- The Base Class value was typed, then also selected from the native list. Both set `FX_UMBase`.
- The checkout indication of FX_UMBase was not re-read directly after Save. Row 1 is visible and unchanged in value.
- The Site Developer context was not visible or verified.
- Tool-generated snapshot logs are under `evidence\playwright\` (not worker-authored; outside this directory).
