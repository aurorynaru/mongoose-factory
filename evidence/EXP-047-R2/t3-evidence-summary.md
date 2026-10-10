# EXP-047-R2 — T3 evidence summary (one close, one reopen, one recovery query; Form left OPEN and clean)

Run `R-20261011-003837-AqH7`, task T3, cycle 2, task_message_id `e8e76452-fc65-4343-904c-0eae5a41586b`, worker session `217da4e1-fba3-4a0e-8535-6fc5a92edfd5`. Classification: observed only, same-session UI-level recovery. Not replay_verified. No database read. No cross-session claim.

## Lifecycle counts

| Operation | Count |
| --- | --- |
| Form close (native `Close Panel Property Classes`) | **1** |
| Form reopen (toolbar Open, Select Form OK) | **1** |
| Recovery query (FX_UM exact text, one F4) | **1** |
| Save / New / Delete / Refresh | **0 / 0 / 0 / 0** |
| Check In / Check Out / Undo Check Out | **0 / 0 / 0** |
| Dialogs or prompts answered | **0** (no prompt appeared at close or reopen) |

## Accessibility excerpts

| Step | Excerpt (role / name / state) | Meaning |
| --- | --- | --- |
| Pre-close (`t3-00`) | tab `Property Classes` [selected]; `Save` [disabled]; grid row 2 `FX_UM` (checked); `Class Name:` = `FX_UM`; `Base Class:` = `FX_UMBase`; `Data Type:` = `String`; `Length:` = `10`; `Column Data Type:` = `nvarchar`; `Label String ID:` = `FX_sUM`; `Domain IDO Name:` = `FX_UMs`; `Domain Property:` = `FX_UM`; `Domain List Properties:` = `FX_Description`; `Check In` and `Undo Check Out` enabled; status `Domain List Properties (IDO Property Classes 2 of 2)` | Clean saved state matches T2 post-Save |
| Post-close (`t3-01`) | no `tab` other than the Explorer/Mongoose tabs in the in-page tablist; `Save`, `New`, `Delete`, `Refresh`, `Filter in Place` [disabled]; `main` empty | Form closed; no prompt; no runtime Form open |
| Reopened (`t3-02`) | tab `Property Classes` [selected]; URL `favoriteContext=IdoPropertyClasses`; `Save` [disabled]; `Class Name:` textbox [active] empty; status `Filter in Place`; one empty criteria row (no star) | Reopened IdoPropertyClasses; FiP mode; blank criteria |
| Criteria (`t3-03`) | textbox `Class Name:` = `FX_UM` (echo row `FX_UM`); other criteria blank | Exact recovery criterion before F4 |
| Settled result (`t3-04`) | grid: one data row `FX_UM` (checked); `Class Name:` = `FX_UM`; `Base Class:` = `FX_UMBase`; `Domain IDO Name:` = `FX_UMs`; `Domain Property:` = `FX_UM`; `Domain List Properties:` = `FX_Description`; `Data Type:` = `String`; `Length:` = `10`; `Column Data Type:` = `nvarchar`; `Label String ID:` = `FX_sUM`; `Revision No:` = `1`; `Revision Date:` = `10/10/2026`; `Locked By:` = `anton.ramos@3mworks.com.ph`; `Access As:` = `G6R`; `Check In` and `Undo Check Out` enabled; `Save` [disabled]; status `Base Class (IDO Property Classes 1 of 1)`; no dialog | Exactly one data record recovered; no starred placeholder |

## Recovered record compared with T2 post-Save values

| Field | T2 post-Save (`t2-07`) | T3 recovered (`t3-04`) | Match |
| --- | --- | --- | --- |
| Class Name | `FX_UM` | `FX_UM` | Yes |
| Base Class | `FX_UMBase` | `FX_UMBase` | Yes |
| Domain IDO Name | `FX_UMs` | `FX_UMs` | Yes |
| Domain Property | `FX_UM` | `FX_UM` | Yes |
| Domain List Properties (brief: Additional List Properties) | `FX_Description` | `FX_Description` | Yes |
| Data Type (inherited) | `String` | `String` | Yes |
| Length (inherited) | `10` | `10` | Yes |
| Column Data Type (inherited) | `nvarchar` | `nvarchar` | Yes (displayed text) |
| Label String ID (inherited) | `FX_sUM` | `FX_sUM` | Yes |
| Revision No | `1` | `1` | Yes |
| Revision Date | `10/10/2026` | `10/10/2026` | Yes |
| Locked By | `anton.ramos@3mworks.com.ph` | `anton.ramos@3mworks.com.ph` | Yes |
| Access As | `G6R` | `G6R` | Yes |
| Rows returned | 1 (T2 grid showed two rows including FX_UMBase) | 1 | Yes for FX_UM |

Limitation: the inherited values were blank before the T2 Save and populated after it. Whether they came from the Save or the post-Save refresh is not established. The recovered values show that they are populated after close and reopen in this same session.

## Asterisk inventory (T3 recovered record, native UI)

| Element | Asterisk shown | Notes |
| --- | --- | --- |
| Form label `Class Name:` | no | |
| Form label `Base Class:` | no | |
| Form label `Description:`, `Revision No:`, `Revision Date:`, `Locked By:`, `Access As:` | no | |
| Form label `*Domain IDO Name:` | **yes** | |
| Form label `*Domain Property:` | **yes** | |
| Form label `*Domain List Properties:` | **yes** | |
| Form label `Data Type:`, `Length:`, `Column Data Type:`, `Label String ID:` | no | Inherited fields show no asterisk on the recovered FX_UM record. FX_UMBase shows asterisks on these labels (T1 and T2 baseline). |
| Grid header `Class Name` | no | |
| Grid header `* Revision No`, `* Revision Date` | **yes** | |
| Grid header `*Domain IDO Name`, `*Domain Property`, `*Domain List Properties` | **yes** | |
| Grid header `Data Type`, `Length`, `Column Data Type`, `Label String ID` | no | |

Meaning: **unresolved**. Required versus override is not established by this UI. No asterisk is treated as an override indicator. The asterisk pattern on the recovered record matches the post-Save pattern recorded in T2.

## Checkout visuals (no controls used)

- `Check In` and `Undo Check Out` are **enabled** on the recovered FX_UM record. These visuals show a checkout state on FX_UM. This worker did not use them. Whether this is a lock held by the operator, and whether it must be checked in, is an operator decision outside this experiment.

## FX_UMBase preservation (read-only, limited)

- The pre-close snapshot (`t3-00`) still showed the FX_UMBase row (grid row 1) with the baseline values: Class Name `FX_UMBase`; Revision No `1`; Revision Date `10/10/2026`; Locked By `anton.ramos@3mworks.com.ph`; Access As `G6R`; Data Type `String`; Length `10`; Column Data Type `nvarchar`; Label String ID `FX_sUM`. This matches the T1 baseline.
- The recovery query was a single FX_UM exact-name query, so FX_UMBase is not in the recovered result. The brief forbids another query, so FX_UMBase was **not re-read after the reopen**. Its checkout indication was not re-read as a separate record after the reopen.
- Qualified: no supported mutation of FX_UMBase occurred in T3. This is an action-log and screenshot inference. It is not an independent metadata check.

## Screenshot summaries (what each proves and does NOT prove)

| File | Shows | Proves | Does not prove |
| --- | --- | --- | --- |
| `t3-00-pre-close-initial-state-FX_UM-saved-clean.png` | Property Classes tab; row 1 FX_UMBase and row 2 FX_UM (both checked); the T2 values on FX_UM; Save greyed; no dialog | Clean pre-close state; FX_UM values unchanged since T2 | Database state; post-Save persistence |
| `t3-01-post-close-state-no-prompt.png` | Property Classes tab absent from the Form tablist; toolbar Save, New, Delete, Refresh and FiP disabled; Explorer/Mongoose frame; no dialog | Form closed once; no save or discard prompt; no runtime Form open | Whether the close wrote anything beyond the Save already made |
| `t3-02-reopened-fip-blank-criteria-before-query.png` | Property Classes tab reopened; status `Filter in Place`; blank criteria; Class Name focused; Save greyed | Reopened IdoPropertyClasses in FiP mode with blank criteria | Any query result |
| `t3-03-recovery-criteria-FX_UM-before-f4.png` | Criteria `FX_UM` in the echo row; other criteria blank; status `Filter in Place` | Exact recovery criterion before F4 | The result |
| `t3-04-recovery-FX_UM-after-f4-settled.png` | One data row `FX_UM` (checked); all configured values and inherited values as listed above; status `Base Class (IDO Property Classes 1 of 1)`; Save greyed | Exactly one FX_UM data record recovered in this session; field values as displayed | Database state; cross-session persistence; FX_UMBase values (not in this result); the meaning of asterisks; that the inherited values are stored (only displayed) |

## Limits

- Same session, Web Client UI only. No database read. No cross-session or cross-user claim.
- The recovery query used plain text `FX_UM`. The matching rule observed in T1 (plain text is exact here) is supported again: FX_UMBase was not returned, and only FX_UM was returned.
- Case variants were not typed (EXP-044 guard; inference only).
- The Base Class combobox appears focused in `t3-04`. This is a focus highlight from the F4 action, not an edit.
- The Site Developer context was not visible or verified.
- Tool-generated snapshot logs are under `evidence\playwright\` (not worker-authored; outside this directory).
