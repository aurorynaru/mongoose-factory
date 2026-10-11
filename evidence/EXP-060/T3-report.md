# EXP-060 — T3 report: one ordinary toolbar Save; settled state; checkout ownership observation (AC-4, AC-5)

- Run `R-20261011-215916-hvC7`, experiment EXP-060, cycle 2, task T3.
- Worker session `94f4c67d-1fd5-4ff9-9792-9ff15f4b0271`; task_message_id `b844e46a-e0ae-45b7-aafd-ef45b2a4e059`.
- Date 2026-10-11 (system date). Editing scope User. Target `FX_Picture`.
- Result: **AC-4 supported (observed, UI and accessibility level).** Save invoked exactly once; Save disabled after it; no warning, error, or confirmation text appeared. **AC-5 supported at the observed level:** the native Form shows Check In and Undo Check Out enabled, and the Locked By field shows the signed-in operator. The "checked out" reading is an interpretation of the enabled buttons, not a labelled status (see §4).
- Not performed (per T3 scope): close, reopen, any query, New, F2, Designer, checkout-management, diagnostics, JavaScript.

## 1. Pre-Save gate (fresh; no mutation)

| Check | Observed (accessibility, `t3-00-pre-save-gate-accessibility.yml`) |
| --- | --- |
| Tabs | Tab list (1); select tab 1 (first attempt). Property Classes tab selected; heading `Property Classes`; URL `favoriteContext=IdoPropertyClasses`. |
| Identity bar | `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` (visible in `t3-01`). |
| Pending records | One grid row (`FX_Picture`), add-mode star; `* Class Name` column header; no second row. |
| Class Name | `FX_Picture` |
| Data Type | `Binary` |
| Length | `-1` |
| Column Data Type | `varbinary` |
| Binary Format | `PNG` |
| Base Class | combobox with no value |
| Domain IDO Name / Domain Property / Domain List Properties | comboboxes with no value |
| Label String ID | textbox with no value |
| Save | enabled (not yet invoked) |
| Status | `Date Format (IDO Property Classes 1 of 1)` (focus left on Date Format from T2; no value typed there) |
| Dialog | none (`find` "dialog": no match) |

All gates passed; Save was invoked once. Pre-Save visual: `t3-01-pre-save-gate-visual.png`.

## 2. Save (exactly once)

| Step | Observed |
| --- | --- |
| Action | One click on the toolbar `Save` (ref `f1e28`, the Save button in the T3 snapshot). No retry. |
| Immediate (`t3-02-immediate-after-single-save.png`) | Save icon greyed; find: `button "Save" [disabled] [ref=f1e28]`, tooltip `Save`. The pending star on the grid row is gone. The `* Class Name` header asterisk is gone (header now plain `Class Name`). The status bar is unchanged (`Date Format (IDO Property Classes 1 of 1)`). `find` "dialog": no match. |
| Native response text | **None displayed.** No status text, toast, warning, error, or confirmation text appeared in the Form (regex find for saved/success/error/warning/confirm/unsaved/changes/alert/message: the only matches were the DevTools panel's own `Message` column header and `Log Messages` tab, not Save responses). |
| Settled (2 s; `t3-03-settled-after-save-accessibility.yml`) | `button "Save" [disabled]`. Grid row: `FX_Picture 1 anton.ramos@3mworks.com.ph 10/11/2026 G6R Binary -1 varbinary … PNG`; exactly one data row. Status unchanged. No dialog. |
| Save count | **1** |

Verbatim native response: none. The brief's explicit statement applies: no confirmation text appeared in the Form after the single Save. The success is inferred from the disabled Save, the cleared pending star and header asterisk, and the retained values. No database read was performed.

## 3. Post-Save readback of the saved record (AC-4)

Source: `t3-03-settled-after-save-accessibility.yml` (Grep) and `t3-04`/`t3-05` (visual).

| Field | Pre-Save (T2 / T3 gate) | Post-Save settled | Result |
| --- | --- | --- | --- |
| Class Name | `FX_Picture` | `textbox "Class Name:": FX_Picture` (greyed, saved state) | Same |
| Data Type | `Binary` | `combobox "Data Type:": Binary` | Same |
| Length | `-1` | `textbox "Length:": "-1"` | Same |
| Column Data Type | `varbinary` | `combobox "Column Data Type:": varbinary` | Same |
| Binary Format | `PNG` | `combobox "Binary Format:": PNG` | Same |
| Base Class | blank | `combobox "Base Class:"` no value | Blank (same) |
| Domain IDO Name | blank | `combobox "Domain IDO Name:"` no value | Blank (same) |
| Domain Property | blank | `combobox "Domain Property:"` no value | Blank (same) |
| Domain List Properties | blank | `combobox "Domain List Properties:"` no value | Blank (same) |
| Label String ID | blank | `textbox "Label String ID:"` no value | Blank (same) |
| Description | blank (not specified) | `textbox "Description:"` no value | Blank (not specified) |
| Revision No | system `1` | `1` | Unchanged |
| Revision Date | system `10/11/2026` | `10/11/2026` | Unchanged |
| Locked By | system `anton.ramos@3mworks.com.ph` | `anton.ramos@3mworks.com.ph` | Unchanged |
| Access As | system `G6R` | `G6R` | Unchanged |
| Decimal Position / Default Value | blank | blank | Not specified |
| Save | enabled | `[disabled]` | Clean |

Exactly one FX_Picture record is present (one data row in the grid).

## 4. Checkout status and ownership observation (AC-5)

Observed through the native maintenance Form, without any checkout-management action:

| Indicator | Observed | Source |
| --- | --- | --- |
| Check In | **enabled** (`button "Check In" [ref=f1e508] [cursor=pointer]`; not `[disabled]`) | `t3-03` accessibility; before Save it was `[disabled]` (`t2`/`t3-00`) |
| Undo Check Out | **enabled** (`button "Undo Check Out" [ref=f1e510] [cursor=pointer]`) | `t3-03` accessibility; before Save it was `[disabled]` |
| Locked By | `anton.ramos@3mworks.com.ph` (shown clipped as `anton.ramos@3mwo` in `t3-05`) | `t3-03` accessibility (`textbox "Locked By:"`); visual `t3-05` |
| Access As | `G6R` | `t3-03` accessibility; visual `t3-05` |
| Operator identity | `anton.ramos@3mworks.com.ph` | Identity bar (`t3-01`, `t3-05`) |
| Owner comparison | Locked By equals the identity-bar operator | Observed |

- **Ownership: observed.** The native Locked By field shows the signed-in operator's identity.
- **Checkout status: observed as an enabled-control state, interpreted as checked out.** Check In and Undo Check Out changed from disabled (unsaved) to enabled (saved). EXP-047-R2 and EXP-048 used the same enabled-button pattern and the same Locked By field to describe records checked out to the operator. The label "Checked out" is not displayed by the Form itself, so this is an interpretation from the enabled state. The worker did not infer the status from button colour alone (the accessibility state is the basis).
- No check-in, check-out, or undo action was performed. The buttons were not activated.

## 5. Action audit (T3, in order)

| # | Tool | Target / input | Result |
| --- | --- | --- | --- |
| 1 | `browser_tabs` list | — | Two tabs; tab 0 Designer current |
| 2 | `browser_tabs` select | index 1 | Web Client selected (first attempt) |
| 3 | `browser_snapshot` (untargeted, saved) | `t3-00-pre-save-gate-accessibility.yml` | Pre-save gate state |
| 4 | `Grep` (repository file read) | `t3-00` yml | Gate values extracted |
| 5 | `browser_take_screenshot` | `t3-01-pre-save-gate-visual.png` | Pre-save visual gate |
| 6 | `Read` (image) | `t3-01` | Visual gate confirmed |
| 7 | `browser_click` | toolbar `Save` (`f1e28`) | **Save (1 of 1)**; no error returned |
| 8 | `browser_find` | `Save` | `[disabled]` |
| 9 | `browser_find` | `dialog` | No match |
| 10 | `browser_take_screenshot` | `t3-02-immediate-after-single-save.png` | Immediate state |
| 11 | `Read` (image) | `t3-02` | Save greyed; star and header asterisk cleared; no text |
| 12 | `browser_wait_for` | 2 s | — |
| 13 | `browser_snapshot` (untargeted, saved) | `t3-03-settled-after-save-accessibility.yml` | Settled state |
| 14 | `Grep` (repository file read) | `t3-03` yml | Post-save readback extracted |
| 15 | `Grep` (repository file read) | `t3-03` yml (row count) | One data row (`FX_Picture`) |
| 16 | `browser_mouse_wheel` | deltaY -800 (over the Form; no effect) | View unchanged |
| 17 | `browser_take_screenshot` | `t3-04-settled-after-save-top-checkout-visible.png` | Form not scrolled (see 16) |
| 18 | `Read` (image) | `t3-04` | Top not visible |
| 19 | `browser_mouse_move_xy` | (1700, 300), blank Form area | Pointer only |
| 20 | `browser_mouse_wheel` | deltaY -1000 | Form scrolled to top |
| 21 | `browser_take_screenshot` | `t3-05-settled-after-save-top-checkout-visible-2.png` | Check In, Undo Check Out (blue), Locked By, Access As visible |
| 22 | `Read` (image) | `t3-05` | Ownership and checkout indicators visible |
| 23 | `browser_find` | regex for saved/success/error/warning/confirm/unsaved/changes/alert/message | Only DevTools panel column header and tab names matched; no Save response |

### Reconciled counts (T3 only)

| Operation | Count |
| --- | --- |
| **Save** | **1** |
| New | 0 |
| Form close / reopen | 0 / 0 |
| Queries (pre-creation or recovery) | 0 |
| F2 | 0 |
| Checkout, check-in, undo checkout | 0 (buttons read, not activated) |
| Designer, unload, FormSync, cache, SQL | 0 |
| Browser console, network, or other diagnostic call | 0 |
| JavaScript / evaluate / run-code | 0 |
| Dialogs answered | 0 |
| Ref-not-found / timeouts | 0 / 0 |
| Snapshots (untargeted) | 2 (`t3-00`, `t3-03`) |
| Finds | 3 |
| Screenshots (PNG) | 4 (`t3-01`, `t3-02`, `t3-04`, `t3-05`); accessibility files saved by snapshot: 2 (`t3-00`, `t3-03`) |
| Waits | 1 (2 s) |
| Scroll / pointer | 2 wheel events; 1 pointer move (view only) |
| Typed entries | 0 |
| Tab-list / tab-select | 1 / 1 |

Cumulative counts (T1 through T3): **New 1** (T2); **Save 1** (T3); pre-creation query 1 (T1); recovery query 0; close 0; reopen 0; F2 1 (T2); checkout actions 0; diagnostics 0; JavaScript 0.

## 6. Tool-generated output not read

- The tab-list and tab-select results each reported `New console entries` file references (`evidence\playwright\console-…log`). These were not opened. No browser console inspection was performed.
- Each action wrote a tool snapshot (`evidence\playwright\page-…yml`). These were not read beyond their listing. The worker-requested snapshots are the `t3-00` and `t3-03` files.

## 7. Acceptance status (T3)

| AC | T3 status | Evidence | Limits |
| --- | --- | --- | --- |
| AC-1 | Carried from T1; identity re-checked at T3 gate. | `t3-00`, `t3-01` | — |
| AC-2 | Carried from T1 (not repeated). | `t1-03`, `t1-04`, `t1-05` | — |
| AC-3 | Carried from T2; re-verified at T3 gate (pre-Save values unchanged). | `t2-02`–`t2-04`, `t3-00`, `t3-01` | Pre-Save; no database read. |
| **AC-4** | **Supported (observed, UI and accessibility level).** One ordinary toolbar Save; Save disabled; attributes still visible; one record; no warning, error, or confirmation text displayed. | `t3-02` (immediate), `t3-03` (settled, accessibility), `t3-05` (settled, visual) | No success text was displayed, so success is inferred from the disabled Save and cleared pending indicators. No database read; durability not verified. |
| **AC-5** | **Supported at the observed level.** Ownership shown in Locked By (operator); Check In and Undo Check Out enabled after Save. | `t3-03`, `t3-05` | Checkout status is an interpretation of enabled buttons (no labelled status). No explicit checkout action performed. |
| AC-6 | **Not started** (close and reopen are out of T3 scope). | — | — |
| AC-7 | **Not started.** | — | — |
| AC-8 | Cumulative: New 1, Save 1 so far; close, reopen, recovery query pending. | §5 | Open until the final task. |
| AC-9 | Not started (final report). | — | — |

## 8. Unexpected responses and limitations

1. **New reuse (T2 interpretation):** After Save, the grid shows one row and the status reads `1 of 1`. This is consistent with New having reused the single add-mode record rather than creating a second, and is the check the T2 coordinator note asked for. It is still an inference from the grid, not a database read.
2. **No native Save text.** The brief asks for verbatim Save response text. The Form displayed none, so the response is recorded as an explicit "no confirmation text".
3. **Checkout status is interpreted** from the enabled Check In and Undo Check Out controls, and the Locked By owner field. The Form has no labelled "checked out" indicator. The Locked By owner is the directly readable item.
4. **Scroll.** The first wheel event did not move the Form. A pointer move to a blank area and a second wheel event did. Both are view-only.
5. The DevTools log panel on the right-bottom of the Form was not read beyond its visible rows.

## 9. Final Form state (end of T3)

- Web Client tab selected. Tabs: Sql Tables, Sql Columns, FX_Items, Property Classes (active). Designer tab 0 not selected and not acted on.
- Property Classes: one row `FX_Picture` (clean, no pending star). **Save disabled.** Check In and Undo Check Out enabled. Locked By `anton.ramos@3mworks.com.ph`; Access As `G6R`. Status `Date Format (IDO Property Classes 1 of 1)`.
- No dialog and no in-page prompt. The Form is open and clean. It has **not** been closed or reopened (that is AC-6, the next step).

## 10. Repository-written file inventory (T3)

- `evidence/EXP-060/T3-report.md` (created)
- `evidence/EXP-060/t3-00-pre-save-gate-accessibility.yml` (created)
- `evidence/EXP-060/t3-01-pre-save-gate-visual.png` (created)
- `evidence/EXP-060/t3-02-immediate-after-single-save.png` (created)
- `evidence/EXP-060/t3-03-settled-after-save-accessibility.yml` (created)
- `evidence/EXP-060/t3-04-settled-after-save-top-checkout-visible.png` (created; not scrolled to the top; see §8.4)
- `evidence/EXP-060/t3-05-settled-after-save-top-checkout-visible-2.png` (created; the top-of-Form capture used for AC-5)
- `experiments/EXP-060-hello-world-part-4-section-2-create-and-recover-fx.md` (edited: status, T3 section, acceptance rows)
- No other repository file was written by the T3 worker. `tools/` was not read.
