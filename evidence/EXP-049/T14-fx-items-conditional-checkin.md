# EXP-049 — T14 conditional check-in of the new IDO FX_Items only

Run: R-20261011-020822-9Eej, cycle 16, task T14 (worker session 7856326a-2d49-49d2-933b-fb1f1b88c8ea).
**Result: exactly one native Check In was invoked on IDO FX_Items. The UI then showed the record as checked in: the row checkbox cleared, Locked By cleared, Revision Num moved from 1 to 2, and the button changed from Check In to Check Out. One informational source-control notice appeared and was dismissed with OK. No other object was checked in, checked out, or changed.** AC-8 is supported at same-session UI level. Persistence was not verified: AC-10 (IDO close-and-reopen) and the cross-session check were not performed.

## Preconditions (observed before Check In)
- Tab 1 (Web Client) selected. Sql Columns was the active tab at the start; the IDOs runtime tab was then selected once (tab selection only). Sql Columns, Sql Tables and IDO Properties tabs were left open, untouched.
- IDOs runtime Form, single row: **IDO Name `FX_Items`**, Project Name **`FX_HelloWorldProject01`**, Label/Caption `oFX_Items`, Access As `G6R`, Revision Num `1`, Revision Date `10/10/2026`.
- Tables entry for the selected IDO: **`FX_Items`, alias `fxitms`, Primary Base, Inner** (`T14-01` screenshot).
- Row checkbox **checked**; Locked By **anton.ramos@3mworks.com.ph** (operator); **Check In enabled**; Undo Check Out **disabled** (as recorded in T12; not invoked and not used as evidence of a different state).
- Save `[disabled]`. No dialog open. No pending edit observed.
- Identity confirmed: the selected record is exactly FX_Items, in FX_HelloWorldProject01, with alias fxitms. Only one row exists (`IDOs 1 of 1`).

## Action counts (T14)
| Action | Count |
| --- | --- |
| Tab listing (read) | 1 |
| Web Client tab select (navigation) | 1 |
| IDOs runtime tab select (tab selection only) | 1 |
| **Check In (native), FX_Items** | **1** |
| Notice dialog responses | 1 (OK, informational; see below) |
| Undo Check Out / Check Out | 0 / 0 (the post-action Check Out button was not pressed) |
| Save / New / Delete / Refresh | 0 / 0 / 0 |
| Close or reopen of any runtime Form | 0 |
| Property class, string, SQL table or column changes | 0 |
| Wizard, Finish, Create Form responses | 0 |
| Direct SQL, browser evaluate, metadata unload | 0 |
| Screenshots (worker) | 2 (`T14-01` precondition, `T14-02` post-action) |
| Accessibility snapshots (worker YAML) | 1 (`T14-00`); tool snapshots after the Check In click and the OK click |

## The check-in and the notice
- Check In (`f1e828`), one click. No timeout. The tool snapshot `page-...19-00-39-803Z.yml` shows an **alertdialog** titled "Infor Mongoose Application Development Framework - IDOs" with the text: **"Source control integration is currently disabled in the current configuration. The item will not be checked in to source control."** and one button, OK.
- Interpretation: this is an informational notice about the source-control integration. It says that source control is disabled, so nothing was checked in to a source-control system. It does not describe a second lifecycle action and does not concern any other object. The Mongoose check-in itself is the one that changed the IDO's lock state (below).
- OK (`f1e974`), one click, accepted. Post-dismissal snapshot `page-...19-00-48-168Z.yml`. No further dialog.
- No Mongoose confirmation or success message was shown beyond the notice and the state change. The state change is the evidence of completion.

## Post-action state (observed, settled)
- Row checkbox **unchecked** (was checked before).
- **Locked By blank** (was the operator's name before).
- **Revision Num `2`** (was `1` before). Revision Date `10/10/2026`.
- Button now **Check Out (enabled)**; **Undo Check Out (disabled)**.
- Project `FX_HelloWorldProject01`, Label/Caption `oFX_Items`, Access As `G6R`, IDO Name `FX_Items` unchanged.
- Tables entry `FX_Items | fxitms | Primary Base | Inner` unchanged (`T14-02`).
- Save `[disabled]`. Status bar `Check Out (IDOs 1 of 1)`. No dialog.
- The screenshot `T14-02-idos-FX_Items-after-checkin-settled.png` shows these values; the accessibility snapshot `page-...19-00-48-168Z.yml` shows the textboxes and the button states.

## Acceptance conclusion
- **AC-8 (conditional new-IDO lifecycle):** **supported at same-session UI level.** The IDO was visibly checked out before, and exactly one native Check In was invoked on FX_Items. The resulting state is checked in: the lock owner cleared, the checkbox cleared, the revision incremented, and Check Out is now the applicable action. The source-control notice was informational only and was acknowledged. No property class or other IDO was touched.
- Qualifications: (a) the "checked in" conclusion rests on the UI state after a single action, not on a reload or a second query; (b) "Revision Num 2" was observed on the same Form, not independently read back; (c) no cross-session or database-level confirmation is claimed; (d) the disabled Undo Check Out state observed before the action was not explained and is not explained by this result.

## Evidence files written in T14
- `evidence/EXP-049/T14-fx-items-conditional-checkin.md` (this file)
- `evidence/EXP-049/T14-00-fresh-snapshot-webclient-start.yml`
- `evidence/EXP-049/T14-01-idos-FX_Items-precondition-before-checkin.png` (checked row, operator lock, Check In enabled, Tables row FX_Items/fxitms)
- `evidence/EXP-049/T14-02-idos-FX_Items-after-checkin-settled.png` (unchecked row, blank Locked By, Revision 2, Check Out enabled)
- Tool-written files under `evidence/playwright/` (not worker-written): `page-...19-00-30-382Z.yml` (IDOs selected), `page-...19-00-39-803Z.yml` (Check In, notice present), `page-...19-00-48-168Z.yml` (after OK), and console logs.

## Next permitted action
Coordinator review. Still pending: (a) same-session close-and-reopen of the IDOs runtime Form and one fresh exact-name query (AC-10); (b) same-session close-and-reopen of the SQL Tables runtime Form and one fresh exact-name query with SQL Columns inspection (AC-11). The IDO's checked-in state should be confirmed on reopen rather than assumed. No further check-in, checkout, Save or creation was performed.
