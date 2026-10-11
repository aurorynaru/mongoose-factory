# EXP-060 — T5 report: one native post-reopen recovery query for FX_Picture; recovered configuration and ownership (AC-7)

- Run `R-20261011-215916-hvC7`, experiment EXP-060, cycle 4, task T5.
- Worker session `94f4c67d-1fd5-4ff9-9792-9ff15f4b0271`; task_message_id `19fde098-4b2f-4ffa-9a69-0a1a2523e8da`.
- Date 2026-10-11 (system date). Editing scope User. Target `FX_Picture`.
- Result: **AC-7 supported (observed, UI and accessibility level).** Exactly one Filter in Place query for the literal `FX_Picture` returned exactly one data record (`1 of 1`). The recovered configuration matches the AC-3 pre-Save baseline and the T3 post-Save readback field by field. Save is disabled. Checkout controls and the Locked By owner match T3.
- Not performed (per T5 scope): New, Save, a second query, checkout-management controls, close, reopen, Designer, diagnostics, JavaScript, any mutation.

## 1. Gate (fresh; no mutation)

| Check | Observed |
| --- | --- |
| Tabs | Tab list (1); select tab 1 (first attempt). Tab 0 is the Designer page, not acted on. |
| Form identity | Tab `Property Classes` selected; heading `Property Classes`; URL `favoriteContext=IdoPropertyClasses` (`t5-00-pre-query-accessibility.yml`) |
| Mode | Status `Filter in Place`; Class Name criterion empty and active (`f1e441`) |
| Save | `[disabled]` |
| Dialog | none (`find` "dialog": no match) |
| Session or authentication challenge | none |
| Pre-query criteria | blank (`t5-01-pre-query-blank-criteria.png`) |
| Identity bar | `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` |

Gate passed.

## 2. Recovery query (exactly once)

| Step | Observed |
| --- | --- |
| Criterion entered | `FX_Picture` (typed into the Class Name criteria textbox, `f1e441`); other criteria blank. |
| Commit | One Tab (focus to Base Class). |
| Pre-F4 capture | `t5-02-recovery-criterion-FX_Picture-before-f4.png`: Class Name `FX_Picture`; echo row `FX_Picture`; other criteria blank; status `Filter in Place`; Save disabled. |
| F4 | **One press.** Wait 2 s. |
| Settled capture | `t5-03-recovery-settled-after-f4.png`: **one data row** `FX_Picture` (checkbox checked, the saved-record indicator); status `Base Class (IDO Property Classes 1 of 1)`; Class Name greyed (saved); Locked By `anton.ramos@3mwo…`; Access As `G6R`; Revision No `1`; Revision Date `10/11/2026`; Check In and Undo Check Out enabled. |
| Duplicate or zero-row check | The grid shows one row. Status `1 of 1`. No second row. No placeholder row. |
| Identity | Class Name `FX_Picture` (exact); one record. |

Query count: **1**. Result: exactly one matching record, identity exact. No blocker.

## 3. Full recovered readback (accessibility; `t5-04-recovered-accessibility.yml`)

| Field | Recovered (native readback) |
| --- | --- |
| Class Name | `textbox "Class Name:": FX_Picture` |
| Base Class | `combobox "Base Class:"` — no value |
| Description | `textbox "Description:"` — no value |
| Revision No | `textbox "Revision No:": "1"` |
| Revision Date | `textbox "Revision Date:": 10/11/2026` |
| Locked By | `textbox "Locked By:": anton.ramos@3mworks.com.ph` |
| Access As | `textbox "Access As:": G6R` |
| Data Type | `combobox "Data Type:": Binary` |
| Length | `textbox "Length:": "-1"` |
| Decimal Position | `textbox "Decimal Position:"` — no value |
| Default Value | `textbox "Default Value:"` — no value |
| Column Data Type | `combobox "Column Data Type:": varbinary` |
| Inline List / Validators | textboxes — no value (not specified) |
| Label String ID | `textbox "Label String ID:"` — no value |
| Binary Format | `combobox "Binary Format:": PNG` |
| Domain IDO Name | `combobox "Domain IDO Name:"` — no value |
| Domain Property | `combobox "Domain Property:"` — no value |
| Domain List Properties | `combobox "Domain List Properties:"` — no value |
| Domain Additional Settings | `textbox "Domain Additional Settings:"` — no value |
| Grid row | `FX_Picture 1 anton.ramos@3mworks.com.ph 10/11/2026 G6R Binary -1 varbinary … PNG` (Base Class, Description and Domain cells empty) |

Visual confirmation: `t5-05-recovered-fields-scrolled-visual.png` shows Data Type `Binary`, Length `-1`, Column Data Type `varbinary`, Binary Format `PNG`, and empty Label String ID, Domain IDO Name, Domain Property, Domain List Properties and Domain Additional Settings. Base Class is above the visible area in that capture and is covered by the accessibility readback above.

## 4. AC-7 field-by-field comparison matrix

Baselines: **T2** = pre-Save readback (`t2-03`); **T3** = settled post-Save readback (`t3-03`); **T5** = recovered (this task, `t5-04`).

| Field | Required (AC-3) | T2 pre-Save | T3 post-Save | T5 recovered | Match |
| --- | --- | --- | --- | --- | --- |
| Class Name | `FX_Picture` | `FX_Picture` | `FX_Picture` | `FX_Picture` | Yes |
| Data Type | `Binary` | `Binary` | `Binary` | `Binary` | Yes |
| Length | `-1` | `-1` | `-1` | `-1` | Yes |
| Column Data Type | `varbinary` | `varbinary` | `varbinary` | `varbinary` | Yes |
| Binary Format | `PNG` | `PNG` | `PNG` | `PNG` | Yes |
| Base Class | blank | blank | blank | blank | Yes |
| Domain IDO Name | blank | blank | blank | blank | Yes |
| Domain Property | blank | blank | blank | blank | Yes |
| Domain List Properties | blank | blank | blank | blank | Yes |
| Label String ID | blank | blank | blank | blank | Yes |
| Decimal Position | not specified (blank) | blank | blank | blank | Yes |
| Default Value | not specified (blank) | blank | blank | blank | Yes |
| Revision No | system | `1` | `1` | `1` | Yes |
| Revision Date | system | `10/11/2026` | `10/11/2026` | `10/11/2026` | Yes |
| Locked By | system | operator | operator | operator | Yes |
| Access As | system | `G6R` | `G6R` | `G6R` | Yes |
| Save state | — | enabled (pending) | disabled | disabled | Yes |

Result: **all specified attributes and blank optional fields match AC-3 exactly.** The only differences between T2 and T5 are the expected pending-to-saved state changes (Save enabled to disabled; star removed; Class Name greyed).

## 5. Ownership and checkout indicators (AC-7 comparison with AC-5)

| Indicator | T3 (post-Save) | T4 (pre-close) | T5 (recovered) | Directly readable? |
| --- | --- | --- | --- | --- |
| Locked By | `anton.ramos@3mworks.com.ph` | `anton.ramos@3mworks.com.ph` | `anton.ramos@3mworks.com.ph` | **Yes** (textbox value) |
| Identity bar (signed-in operator) | `anton.ramos@3mworks.com.ph` | same | same | Yes |
| Owner matches operator | Yes | Yes | Yes | Yes (comparison of two readable values) |
| Check In | enabled | enabled | enabled | Only via enabled state |
| Undo Check Out | enabled | enabled | enabled | Only via enabled state |
| Checked-out status (labelled field) | not displayed | not displayed | not displayed | **No** — no labelled status field exists in the Form |

Interpretation:
- **Ownership is observed.** The Locked By field directly shows the signed-in operator as the owner, unchanged from T3 and T4.
- **Checked-out status is not independently verified.** The Form exposes no labelled "checked out" field. Check In and Undo Check Out are enabled on the saved record and were disabled on the unsaved record (T2). The reading "checked out to the operator" is an interpretation of those control states, consistent with the EXP-047-R2 and EXP-048 pattern. It is not a verified status field. No checkout-management control was activated.

## 6. Action audit (T5, in order)

| # | Tool | Target / input | Result |
| --- | --- | --- | --- |
| 1 | `browser_tabs` list | — | Two tabs |
| 2 | `browser_tabs` select | index 1 | Web Client selected (first attempt) |
| 3 | `browser_snapshot` (untargeted, saved) | `t5-00-pre-query-accessibility.yml` | Pre-query gate |
| 4 | `Grep` (repository file read) | `t5-00` yml | Gate values |
| 5 | `browser_take_screenshot` | `t5-01-pre-query-blank-criteria.png` | Blank criteria |
| 6 | `Read` (image) | `t5-01` | Confirmed blank |
| 7 | `browser_type` | Class Name criterion (`f1e441`) = `FX_Picture` | Criterion entered |
| 8 | `browser_press_key` | `Tab` | Commit; focus to Base Class |
| 9 | `browser_take_screenshot` | `t5-02-recovery-criterion-FX_Picture-before-f4.png` | Criterion before F4 |
| 10 | `Read` (image) | `t5-02` | Criterion and echo row visible |
| 11 | `browser_press_key` | `F4` | **Recovery query (1 of 1)** |
| 12 | `browser_wait_for` | 2 s | — |
| 13 | `browser_take_screenshot` | `t5-03-recovery-settled-after-f4.png` | One row; `1 of 1` |
| 14 | `Read` (image) | `t5-03` | One matching record |
| 15 | `browser_snapshot` (untargeted, saved) | `t5-04-recovered-accessibility.yml` | Full readback |
| 16 | `Grep` (repository file read) | `t5-04` yml | Field readback extracted |
| 17 | `browser_mouse_move_xy` | (1700, 300), blank Form area | Pointer only |
| 18 | `browser_mouse_wheel` | deltaY +300 | Form scrolled (view only) |
| 19 | `browser_take_screenshot` | `t5-05-recovered-fields-scrolled-visual.png` | Lower fields visible |
| 20 | `Read` (image) | `t5-05` | Binary, -1, varbinary, PNG visible; blanks visible |
| 21 | `browser_find` | `dialog` | No match |
| 22 | `browser_find` | `Save` | `[disabled]` |

### Reconciled counts (T5 only)

| Operation | Count |
| --- | --- |
| **Recovery query (F4)** | **1** |
| New | 0 |
| Save | 0 |
| Close / reopen | 0 / 0 |
| F2 | 0 |
| Typed entries | 1 (`FX_Picture` criterion) |
| Tab presses | 1 |
| Clicks | 0 |
| Checkout, check-in, undo checkout | 0 (buttons read, not activated) |
| Designer, unload, FormSync, cache, SQL | 0 |
| Browser console, network, other diagnostic | 0 |
| JavaScript / evaluate / run-code | 0 |
| Dialogs answered | 0 |
| Ref-not-found / timeouts | 0 / 0 |
| Tab-list / tab-select | 1 / 1 |
| Snapshots (untargeted, saved) | 2 (`t5-00`, `t5-04`) |
| Finds | 2 |
| Screenshots (PNG) | 4 (`t5-01`, `t5-02`, `t5-03`, `t5-05`) |
| Wheel / pointer / wait | 1 / 1 / 1 |

Cumulative (T1–T5): **New 1** (T2); **Save 1** (T3); **pre-creation query 1** (T1); **post-reopen recovery query 1** (T5); **close 1** (T4); **reopen 1** (T4); F2 1 (T2); checkout actions 0.

## 7. Observation: New is enabled after the query

In `t5-04`, the toolbar New control is enabled (`button "New" [ref=f1e29] [cursor=pointer]`). This is the same as the T1 observation after a zero-row query. It was not invoked. Its presence is a UI state, not an action.

## 8. Acceptance status (T5)

| AC | T5 status | Evidence | Limits |
| --- | --- | --- | --- |
| AC-1 | Carried from T1 (identity re-confirmed at T5 start). | `t5-00` | — |
| AC-2 | Carried from T1 (not repeated). | `t1-03`–`t1-05` | — |
| AC-3 | Carried from T2; baseline for the comparison in §4. | `t2-02`–`t2-04` | Pre-Save; no database read |
| AC-4 | Carried from T3. | `t3-02`, `t3-03`, `t3-05` | No native success text |
| AC-5 | Carried from T3; ownership re-observed in T5 (Locked By). | `t3-03`, `t3-05`, `t5-04` | Checked-out status interpreted from enabled controls; no labelled status field |
| AC-6 | Carried from T4. | `t4-01`–`t4-05` | Reopened view was blank Filter in Place |
| **AC-7** | **Supported (observed, UI and accessibility level).** One Filter in Place query; one matching record (`1 of 1`); configuration matches AC-3 field for field; Save disabled; checkout controls and owner match T3. | `t5-02`, `t5-03`, `t5-04`, `t5-05`; §4 and §5 matrices | Persistence is established only within this Mongoose session's UI state; no database read; checkout status not a labelled field |
| AC-8 | Cumulative audit: New 1, Save 1, close 1, reopen 1, pre-creation query 1, recovery query 1. Final audit consolidation is reserved for a separate task. | §6 counts | Final consolidation not performed in T5 |
| AC-9 | Not started (final report reserved for a separate task). | — | — |

## 9. Limitations

1. Persistence is shown by the UI query after a close and reopen in the same session. A database or metadata read is out of scope and was not performed. Durability is not established.
2. Checkout status is interpreted from enabled Check In and Undo Check Out controls. The Form does not expose a labelled status field.
3. The Base Class and Domain blanks were read from accessibility values and grid cells. The stored values were not inspected.
4. The Locked By value is clipped visually (`anton.ramos@3mwo…`). The full value is from the accessibility readback.
5. The scroll in §6 (step 18) is a view change only.

## 10. Final Form state (end of T5)

- Web Client tab selected. Tabs: Sql Tables, Sql Columns, FX_Items (inherited EXP-059), Property Classes (reopened, active).
- Property Classes: Filter in Place mode; Class Name criterion `FX_Picture` retained; one matching row `FX_Picture` (checkbox checked, not starred); status `Base Class (IDO Property Classes 1 of 1)`; **Save disabled**; Check In and Undo Check Out enabled; Locked By `anton.ramos@3mworks.com.ph`; Access As `G6R`; no dialog; no in-page prompt.
- The Form is open and clean. It has **not** been closed or reopened again. No further query has been run.

## 11. Repository-written file inventory (T5)

- `evidence/EXP-060/T5-report.md` (created)
- `evidence/EXP-060/t5-00-pre-query-accessibility.yml` (created)
- `evidence/EXP-060/t5-01-pre-query-blank-criteria.png` (created)
- `evidence/EXP-060/t5-02-recovery-criterion-FX_Picture-before-f4.png` (created)
- `evidence/EXP-060/t5-03-recovery-settled-after-f4.png` (created)
- `evidence/EXP-060/t5-04-recovered-accessibility.yml` (created)
- `evidence/EXP-060/t5-05-recovered-fields-scrolled-visual.png` (created)
- `experiments/EXP-060-hello-world-part-4-section-2-create-and-recover-fx.md` (edited: status line, T5 section, AC-7 row)
- No other repository file was written by the T5 worker. `tools/` was not read.
