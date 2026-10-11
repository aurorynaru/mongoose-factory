# EXP-061 — T3 report (cycle 2): New Property wizard configured for FX_Items; stopped before Finish

**Status: T3 COMPLETE (wizard configured and verified; Finish NOT invoked; toolbar Save NOT invoked).** The wizard was initiated exactly once. Bound type retained. Bind To `fxitms.FX_Picture` committed. Property Name `FX_Picture`. Property Class `FX_Picture` committed. Inherited Data Type `Binary`, Length `-1`, Column Data Type `varbinary`. The wizard is left open on its last page in the pre-Finish state for coordinator review. AC-5 **pre-Finish portion supported** (observed, UI and accessibility level). Classification: **observed only; not replay_verified.**

Run `R-20261011-223208-4y9y`, cycle 2, task **T3**. Worker session `3b3208ec-666d-4ace-b69d-4c7d8d3fe7fe`; task_message_id `e718a12d-26f7-43bb-8823-0c6888d13cac`. Date 2026-10-11. Editing scope User.

---

## 1. Gates before the wizard (fresh, read-only)

| Gate | Observation | Result |
| --- | --- | --- |
| Tab list (read-only) | Tab 0 Designer (`MGForm=FX_Items`; not acted on); tab 1 Web Client (`favoriteContext=IdoCollections`) | Pass |
| Tab select | Tab 1 on the first attempt | Pass |
| Identity | IDOs tab selected; IDO Name `FX_Items`; Project Name `FX_HelloWorldProject01`; status `Check Out (IDOs 1 of 1)` (carried from T2 state) | Pass |
| Ownership | Locked By `anton.ramos@3mworks.com.ph` (equals the identity-bar operator); Check In and Undo Check Out enabled (checked out) | Pass |
| Save | toolbar Save disabled (clean) | Pass |
| Revision | Revision Num `2`; Revision Date `10/10/2026` (unchanged since T1 and T2) | Pass |
| Session / challenge | no sign-in, configuration or session challenge; identity bar operator; no portal banner | Pass |
| Dialogs | none before the wizard | Pass |
| Baseline (in-form Properties tab, fresh) | **11 rows**, same names, order, Property Class, Property Type `Bound to Column`, Column Name and Data Type/Length/Column Type as T1: FX_Item, FX_Description, FX_Cost, FX_UM, CreatedBy, UpdatedBy, CreateDate, RecordDate, RowPointer, NoteExistsFlag, InWorkflow. **`FX_Picture` absent.** | Pass |

Evidence: `t3-snapshot-00-start-fresh.yml`; `t3-01-pre-wizard-idos-FX_Items-checked-out-baseline-11.png` (identity, Locked By operator, Check In and Undo Check Out enabled, Save disabled, status `Check Out (IDOs 1 of 1)`). Proves the target identity and checked-out state at UI level. The 11-row count is from the accessibility readback in `t3-snapshot-00`; the screenshot shows only the header of the grid.

**Gate result: all passed. The wizard was permitted.**

## 2. Wizard initiation (count: 1)

- **New Property** clicked once (IDOs Form, `f1e191`, enabled). The tab `IDO Property Wizard` opened (`favoriteContext=IdoPropertyWizard`).
- Untargeted snapshot `t3-snapshot-02-wizard-opened-fresh.yml`. Screenshot `t3-02-wizard-page1-opened-default-bound.png`.
- **Page 1 (Attributes / binding):** `IDO Name: FX_Items` (read-only grey field). The binding group `Select the binding for the new property` shows **Bound selected (filled radio)**; Derived, Unbound and Subcollection unselected. Back disabled; Next enabled; Finish disabled; Cancel enabled.
- Accessibility readback labelled the IDO-name field `Property Name:` (`f1e1408`, value `FX_Items`). **The screenshot shows this field is the IDO Name, not a property name**, so the accessibility label is a mislabel. Recorded as a limitation; no value was entered into it.
- Bound retained (default, verified visually and in the accessibility tree before advancing).

## 3. Advance (one permitted non-committing step)

- **Next >** clicked once (`f1e1438`) to reach page 2 (Property Attributes). This is the only permitted navigation step. Next is now disabled (last page). Back, Finish (enabled), Cancel and Help are available.
- Snapshot `t3-snapshot-03-wizard-page2-fresh.yml`; screenshot `t3-03-wizard-page2-before-binding-entry.png` showed blank Bind To, Property Name and Property Class; Data Type and Column Data Type empty; inheritance unchecked.

## 4. Bind To — `fxitms.FX_Picture` (count: 2 clicks: Open, then the option)

- **Open** on Bind To clicked once (`f1e1462`). The lookup listed exactly 12 entries (`fxitms.CreateDate`, `CreatedBy`, `FX_Cost`, `FX_Description`, `FX_Item`, **`FX_Picture`**, `FX_UM`, `InWorkflow`, `NoteExistsFlag`, `RecordDate`, `RowPointer`, `UpdatedBy`). Screenshot `t3-04-bind-to-lookup-opened.png`; fresh snapshot `t3-snapshot-04-bind-to-list-open-fresh.yml` (12 `option` elements; one `fxitms.FX_Picture`).
- The 12 entries equal the 11 IDO properties' columns plus `FX_Picture`, so there is no duplicate or unrelated column.
- Option `fxitms.FX_Picture` clicked once (`f1e1542`). **Committed:** Bind To shows `fxitms.FX_Picture` (accessibility `combobox "Bind To:" = fxitms.FX_Picture`; screenshot `t3-05-bind-to-FX_Picture-selected-readback.png`).
- **Wizard side effect (not typed by the worker):** after the Bind To commit, the wizard populated **Property Name `FX_Picture`**, **Data Type `Binary`** and **Column Data Type `varbinary`** from the selected column. These were not entered by the worker. Recorded as wizard-derived (see §7). Snapshot `t3-snapshot-05-after-bind-to-fresh.yml`.

## 5. Property Name

- Textbox `Property Name:` (`f1e1473`) holds **`FX_Picture`** (accessibility readback, exact case and no extra characters). It was populated by the wizard from the Bind To selection; the worker did not type into it.
- Limitation: it is not established whether the wizard-populated name is a committed model value or a display default. Its value matches the brief exactly. The coordinator should confirm this before Finish.

## 6. Property Class — `FX_Picture` (count: 2 clicks: Open, then the option)

- **Open** on Property Class clicked once (`f1e1481`). The lookup contained one `FX_Picture` cell (`f1e1787`). A full-file search of the snapshot (`t3-snapshot-06-property-class-lookup-open-fresh.yml`) for any `Picture`-containing cell found **only `FX_Picture`**. Look-alike `G6RPiture` is a different name and was not selected.
- Option `FX_Picture` clicked once (`f1e1786`). **Committed:** Property Class combobox shows `FX_Picture`; the three *Inherit from Property Class* checkboxes became **checked** (`t3-snapshot-07-after-property-class-selected-fresh.yml`).

## 7. Pre-Finish configuration (complete; for coordinator review)

| Field | Value (accessibility readback) | Source / state | Visual (`t3-06`) |
| --- | --- | --- | --- |
| Target IDO | FX_Items (IDOs 1 of 1; project FX_HelloWorldProject01; Locked By operator; checked out) | pre-wizard gate (§1) | IDO Name `FX_Items` (page 1) |
| Property Type | **Bound** (radio active) | retained default; verified on page 1 | page 1 (`t3-02`) |
| Bind To | `fxitms.FX_Picture` | committed by option click | shown |
| Property Name | `FX_Picture` | wizard-populated after Bind To; not typed by worker | shown |
| Property Class | `FX_Picture` | committed by option click | shown |
| Data Type | `Binary` (combobox) | inherited from class (*Inherit* checked); also shown from the column before the class | greyed, `Binary` |
| Length | `-1` | inherited from class (*Inherit* checked) | `-1` |
| Decimal | blank | not applicable to Binary | blank |
| Column Data Type | `varbinary` | inherited from class (*Inherit* checked) | greyed, `varbinary` |
| Inherit checkboxes | Three *Inherit from Property Class* checkboxes (accessibility refs `f1e1484`, `f1e1509`, `f1e1520`); visually three are checked: above Data Type, above Column Data Type, and above the lower box. The ref-to-position mapping is inferred. | from class | checked |
| Length note | `-1` is displayed under the Data Type group; no separate visible Length inheritance checkbox was identified | — | — |

**Compatibility check (AC-5):** Binary and varbinary are the binary family that the FX_Picture class and the SQL column share. The SQL column `dbo.FX_Items.FX_Picture` is varbinary, Length -1 (T1 readback, Column Id 13). The wizard shows Data Type Binary, Length -1 and Column Data Type varbinary, which match the class and the column. **No unexpected conversion is indicated.** No substitution: the class selected is `FX_Picture`, and the column selected is `fxitms.FX_Picture`.

Evidence: `t3-06-pre-finish-wizard-configuration-FX_Picture-class-selected.png`. What it proves: Bind To `fxitms.FX_Picture`, Property Name `FX_Picture`, Property Class `FX_Picture`, Data Type `Binary`, Length `-1`, Column Data Type `varbinary`, Finish enabled, Next disabled, page 2 of the wizard. What it does **not** prove: the Bound radio on page 2 (verified on page 1 only), the server-side commit (no Finish yet), or the wizard's inheritance behaviour beyond the displayed values.

## 8. State at stop (no Finish, no Save)

- Wizard tab `IDO Property Wizard` active on page 2; **Finish enabled and NOT pressed**; Back and Cancel enabled; Next disabled.
- Toolbar Save **disabled** (no Save invoked). The IDOs tab underneath is unchanged (checked out; Save disabled).
- No dialog or prompt present.
- Per the brief, the wizard is left in its uncommitted pre-Finish state; it was not cancelled, not restarted, and not closed.

## 9. Action audit (T3)

| # | Action | Target / detail | Result |
| --- | --- | --- | --- |
| 1 | browser_tabs list | read | Tab 0 Designer (not acted on); tab 1 Web Client |
| 2 | browser_tabs select 1 | Web Client | Succeeded (first attempt) |
| 3 | browser_snapshot (untargeted, fresh) | `t3-snapshot-00-start-fresh.yml` | IDOs tab selected; FX_Items checked out; Save disabled |
| 4 | Grep reads (no browser action) | `t3-snapshot-00` | 11-row baseline confirmed |
| 5 | browser_take_screenshot | `t3-01-pre-wizard…` | pre-wizard gate |
| 6 | browser_click | **New Property** (`f1e191`) | **the one wizard initiation**; wizard tab opened |
| 7 | browser_snapshot (untargeted, fresh) | `t3-snapshot-02-wizard-opened-fresh.yml` | page 1; Bound active |
| 8 | browser_take_screenshot | `t3-02-wizard-page1-…` | page 1 Bound |
| 9 | browser_click | **Next >** (`f1e1438`) | non-committing step to page 2 |
| 10 | browser_snapshot (untargeted, fresh) | `t3-snapshot-03-wizard-page2-fresh.yml` | page 2 blank fields |
| 11 | browser_take_screenshot | `t3-03-wizard-page2-before-binding-entry.png` | page 2 before entry |
| 12 | browser_click | Bind To **Open** (`f1e1462`) | lookup opened (12 entries) |
| 13 | browser_take_screenshot | `t3-04-bind-to-lookup-opened.png` | lookup visible |
| 14 | browser_snapshot (untargeted, fresh) | `t3-snapshot-04-bind-to-list-open-fresh.yml` | 12 options; one FX_Picture |
| 15 | browser_click | Bind To option **fxitms.FX_Picture** (`f1e1542`) | committed |
| 16 | browser_take_screenshot | `t3-05-bind-to-FX_Picture-selected-readback.png` | Bind To committed; Name/Data Type auto-populated |
| 17 | browser_snapshot (untargeted, fresh) | `t3-snapshot-05-after-bind-to-fresh.yml` | readback |
| 18 | browser_click | Property Class **Open** (`f1e1481`) | lookup opened |
| 19 | browser_snapshot (untargeted, fresh) | `t3-snapshot-06-property-class-lookup-open-fresh.yml` | one FX_Picture cell |
| 20 | browser_click | Property Class option **FX_Picture** (`f1e1786`) | committed |
| 21 | browser_snapshot (untargeted, fresh) | `t3-snapshot-07-after-property-class-selected-fresh.yml` | class committed; inherit checked; Next disabled; Save disabled |
| 22 | browser_take_screenshot | `t3-06-pre-finish-…png` | final pre-Finish configuration |

**Counts (T3):** wizard initiation **1**; Finish **0**; toolbar Save **0**; Check Out / check-in / undo checkout **0**; New **0**; Delete **0**; Form close **0**; reopen **0**; Select Form **0**; F4 query **0**; typed entries **0** (all lookup selections were clicks; Property Name was wizard-populated); runtime-record interaction **0**; Next (non-committing) **1**; lookup opens **2**; option selections **2**; dialogs answered **0**; ref-not-found **0**; timeouts **0**; JavaScript / run-code **0**; console or network inspection **0**; fresh-snapshot recoveries **0**; untargeted snapshots **7** (`t3-snapshot-00`, `-02` to `-07`); targeted finds **0**; screenshots **6** (`t3-01` to `t3-06`).

Browser calls total: clicks 6 (New Property, Next, Bind To Open, Bind To option, Class Open, Class option), tab select 1, tab list 1, snapshots 7, screenshots 6. Grep reads of saved snapshot files are local file reads, not browser calls.

**Cumulative (T1–T3):** Form opened 1; exact-name IDO query 1; property-class prerequisite query 1; checkout 1; wizard initiation **1**; Finish **0**; Save **0**; close **0**; reopen **0**; check-in / undo checkout **0**; dialogs answered 1 (T1 Select Form OK).

## 10. Written-file inventory (T3)

- `evidence/EXP-061/T3-report.md` — created (this report).
- `evidence/EXP-061/t3-01-pre-wizard-idos-FX_Items-checked-out-baseline-11.png`
- `evidence/EXP-061/t3-02-wizard-page1-opened-default-bound.png`
- `evidence/EXP-061/t3-03-wizard-page2-before-binding-entry.png`
- `evidence/EXP-061/t3-04-bind-to-lookup-opened.png`
- `evidence/EXP-061/t3-05-bind-to-FX_Picture-selected-readback.png`
- `evidence/EXP-061/t3-06-pre-finish-wizard-configuration-FX_Picture-class-selected.png`
- `evidence/EXP-061/t3-snapshot-00-start-fresh.yml`, `t3-snapshot-02-wizard-opened-fresh.yml`, `t3-snapshot-03-wizard-page2-fresh.yml`, `t3-snapshot-04-bind-to-list-open-fresh.yml`, `t3-snapshot-05-after-bind-to-fresh.yml`, `t3-snapshot-06-property-class-lookup-open-fresh.yml`, `t3-snapshot-07-after-property-class-selected-fresh.yml` — created (accessibility snapshots written at the worker's request).
- `experiments/EXP-061-hello-world-part-4-section-3-add-and-recover-fx-picture-bound-property.md` — updated (T3 status, T3 section, next step, documentation changes).
- Tool-generated (not worker-authored): `evidence\playwright\page-*.yml` and `console-*.log` written automatically on each action. The worker did not read the console logs and made no console call.

No other repository file was written by T3. `tools/` was not read or written.

## 11. Acceptance status (after T3)

| AC | Status | Evidence | Limits |
| --- | --- | --- | --- |
| AC-1 | Supported (observed) — T1 | T1 report | — |
| AC-2 | Supported (observed, UI level) — T1; baseline reconfirmed at T3 start (11 rows) | T1 §4–5; `t3-snapshot-00`; `t3-01` | Class-bound Data Type/Length blank in the grid (T1) |
| AC-3 | Supported (observed, UI level) — T1; lookup now exercised: class `FX_Picture` unique in the lookup; column `fxitms.FX_Picture` unique in the Bind To lookup | T1 §7–8; `t3-04`; `t3-05`; `t3-06` | No database read |
| AC-4 | Supported (observed) — T2 | T2 report | Checkout interpreted from controls |
| AC-5 | **Pre-Finish portion supported** (observed, UI and accessibility): Bound retained; Bind To `fxitms.FX_Picture`; Property Name `FX_Picture`; Property Class `FX_Picture`; inherited Binary / -1 / varbinary; compatibility and no conversion indicated. **Finish count 0 at this step.** | `t3-02`, `t3-05`, `t3-06`; `t3-snapshot-02`, `-07` | Property Name is wizard-populated (not typed; see §5); Bound verified on page 1 only; Finish not yet invoked |
| AC-6 – AC-10 | Not started | — | — |

## 12. Unresolved uncertainty and limitations

1. **Property Name origin:** the wizard populated `FX_Picture` after the Bind To selection. The worker did not type it. The brief's "configure Property Name exactly FX_Picture" is met by the displayed value, but whether it is a committed model value (vs. a display default) is not established before Finish.
2. **Mislabelled accessibility field:** on page 1, the accessibility tree labels the IDO-name textbox `Property Name:`. The screenshot shows it is the IDO Name. Recorded; no value entered in it.
3. **Bound on page 2:** the Bound radio was verified on page 1, not re-read on page 2 (the wizard does not show it on page 2).
4. **Derived Data Type before the class:** Data Type `Binary` and Column Data Type `varbinary` appeared as soon as Bind To was committed, before the class was chosen. After the class was chosen the same values appeared with the inherit checkboxes checked. The source of the values (column versus class) before the class selection is not separated by the UI.
5. Limitation: no database read. Pre-Finish state only; no persistence claim.
6. The IDOs Form underneath the wizard was not re-read after the wizard opened (per the brief). Its Locked By and Save state at wizard start are from §1.

## 13. Next permitted step (NOT started; requires coordinator authorization)

Coordinator review of the pre-Finish configuration in §7 and the Property Name origin in §5 / §12.1. If authorized, one native **Finish** is the next step (exactly once), followed by the Finish response capture, verification of Save state and the single ordinary Save only if the Form is dirty (`Never invoke Save if the wizard already completed the operation and the Form is clean`), then close and reopen and the recovery query in separate steps. The wizard is currently open at page 2 and has **not** been cancelled.
