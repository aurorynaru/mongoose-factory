# EXP-044 T11 — Inheritance and key confirmation, single IDO check-in, and invariant recheck: observations

Date: 2026-10-10. Task T11 (task_message_id `4a731028-3549-4008-93aa-b8837f6db81a`, cycle 13). Worker session `1f5332fc-1595-4262-ae90-49b4c5b3ac99`.
Classification: **observed only** (single session, UI level). Not replay_verified.

**Result: The FX_UMs IDO was checked in once, through the ordinary Check In control on the IDOs form. The settled revision went from 1 to 2 and the IDO is now checked in (Locked By empty; Check Out enabled). No confirmation or comment dialog appeared. FX_UMBase was read before and after the check-in; it was unchanged and remains checked out to the operator, as it was before. No other object was changed, and Save stayed disabled. The formal AC-10 close/reopen test was not run.**

Note: the brief refers to a "specialist consultation C1" that is not present in this session's materials. I worked from the T9 and T10 records as the instruction directs and did not rely on C1.

Scope distinction (restated): the IDO and property class are **tenant-wide** metadata; the Designer editing scope is **User** (the Designer tab was not used in T11).

## 1. Preflight

- Web Client tab 0 (`favoriteContext=SqlColumns` at start). Runtime tabs: `FX_HelloWorld01`, `Property Classes`, `IDOs`, `Sql Tables`, `Sql Columns` (selected at start). No dialog, no banner.
- Designer tab 1 (`IdoPropertyClasses`, User scope) not used.

## 2. Pre-check-in inspection of the existing FX_UMs IDO (read-only)

| Check | Observed (IDOs tab, record `FX_UMs`) |
| --- | --- |
| Exact-name record | The IDOs Form was showing one record `FX_UMs` (`IDOs 1 of 1`), with the row checkbox checked. Fresh accessibility read: IDO Name `FX_UMs`. |
| Project | `FX_HelloWorldProject01` (screenshot `t11-06`). |
| Base table / alias | Tables sub-tab (`t11-01`): `FX_UMs` / `fxum` / Primary Base / Inner, one row. |
| FX_UM | Property `FX_UM`, sequence 1, Property Class `FX_UMBase`, Bound to Column `FX_UM`, Key Sequence `1`, Required checked, Read Only unchecked (`t11-02`, accessibility row). |
| FX_UM Data Type / Length / Column Type | Blank in the IDO Properties grid (unchanged from T9). Recorded as consistent with inheritance from FX_UMBase, not proven as an effective value on the IDO. |
| FX_Description | Sequence 2, Bound to Column `FX_Description`, Data Type `String`, Length `50`, Column Type `nvarchar`, Required unchecked. |
| Revision before check-in | `1`, Revision Date `10/10/2026`. |
| Lock before check-in | Locked By `anton.ramos@3mworks.com.ph` (the operator). Check In enabled; Undo Check Out disabled; Check Out disabled. |
| Save | Disabled. No unsaved edit pending. |
| Advanced Attributes | **Not opened.** The brief permits a read-only view only with a verified Close/Cancel control and never OK. Not needed for the check-in decision; not performed (recorded as a non-inspection). |
| Primary Keys list | Not separately opened; Key Sequence 1 on FX_UM is the visible key evidence. |

## 3. FX_UMBase (Property Classes) pre-check-in read

- Exact-name Filter in Place query: `FX_UMBase` committed in the Class Name criteria, one F4. Status `Base Class (IDO Property Classes 1 of 1)` (one record; not paged).
- Fields: Class Name `FX_UMBase`; Revision No `1`; Revision Date `10/10/2026`; Locked By `anton.ramos@3mworks.com.ph`; Access As `G6R`; Data Type `String`; Length `10`; Column Data Type `nvarchar`; Label String ID `FX_sUM`; Required unchecked; Description empty. Check In and Undo Check Out enabled.
- The class is checked out to the operator, as left by EXP-043.
- Note: the first F4 screenshot (`t11-05`) was taken before the detail finished rendering. The accessibility read after it is the decisive read. A second screenshot (`t11-08`) confirms the same values.

## 4. Check-in decision

| Condition (T11 brief) | Observed | Met? |
| --- | --- | --- |
| Identity matches | IDO `FX_UMs`, project `FX_HelloWorldProject01`, alias `fxum`, base table `FX_UMs` | Yes |
| FX_UM linked to FX_UMBase | Property Class `FX_UMBase` | Yes |
| Key Sequence 1 and Required | Key Sequence 1; Required checked | Yes |
| FX_Description String/50/nvarchar | Yes | Yes |
| Visibly checked out to the operator | Locked By operator; row checkbox checked; Check In enabled | Yes |
| No contradictory attributes or unexpected unsaved edits | Save disabled; FX_UM blank local cells are the coordinator-acknowledged inheritance display (T11 instruction); no contradictory value found | Yes (on the coordinator's stated basis) |
| No other objects involved | Single IDO selected; check-in applied to the row-checked `FX_UMs` only | Yes |

Decision: **proceed with the single ordinary Check In on FX_UMs.**

## 5. Check-in action

| Step | Observed |
| --- | --- |
| Fresh verification of the control | `find` "Check In" → button `f1e742`, labelled `Check In`, in the IDOs form for `FX_UMs`. |
| Click `Check In` `f1e742`, **once** | Returned without a tool error. |
| Dialog / comment prompt check (find: alertdialog, dialog, Comment, Are you sure, Yes, OK, Cancel) | **None.** No confirmation or comment dialog appeared, so no comment was entered and no confirmation was answered. |
| Settled state (accessibility, `t11-07`) | **Revision Num `2`** (was `1`). Locked By **empty**. Row checkbox **unchecked**. Button now **`Check Out`** (enabled). **Undo Check Out** disabled. Status bar `Check Out (IDOs 1 of 1)`. Access As `G6R`. |
| Save | **Disabled.** |
| Properties after check-in (screenshot `t11-07`) | Unchanged: FX_UM (`FX_UMBase`, key 1, Required checked); FX_Description (String, 50, nvarchar). |

## 6. Invariant recheck after the check-in

| Object | Result |
| --- | --- |
| FX_UMBase (Property Classes, `t11-08`) | Unchanged: `String`, `10`, `nvarchar`, `FX_sUM`; Revision No `1`; Revision Date `10/10/2026`; **Locked By operator; still checked out** (Check In and Undo Check Out enabled); Save disabled; single record (`1 of 1`). The check-in did not touch it. |
| FX_HelloWorldProject01 | Not opened after the check-in; not edited (no Project-form interaction in T11). Not directly re-read in T11. |
| FX_HelloWorld01 IDO and table | Not touched in T11. |
| Vendor `IdoPropertyClasses` Designer Form (tab 1) | Not used in T11. |

Limitation: the post-check-in FX_UMBase check is a read after the IDO action, in the same session. It establishes the class is unchanged in the UI, not that no database-level change occurred.

## 7. Operation counts (T11)

| Operation | Count |
| --- | --- |
| **Check In** | **1** (`FX_UMs` IDO only; no retry) |
| Undo Check Out / Check Out | **0 / 0** |
| Save | **0** |
| Finish / Create Form | **0 / 0** |
| Comment entries / confirmation answers | **0 / 0** (no dialog appeared) |
| Property-class or IDO field edits | **0** |
| Designer edits | **0** |
| FX_UMBase lifecycle actions | **0** (read only; Check In/Undo not clicked on FX_UMBase) |
| Exact-name FiP queries (F4) | **1** (`FX_UMBase`, Property Classes). The IDO record was already loaded from T9/T10 and was verified from its visible fields; no new F4 was run on the IDO in T11. |
| Criteria entries (plain fill) | **1** (`FX_UMBase` Class Name) |
| Tab commits | **1** |
| Filter in Place toolbar click | **1** (Property Classes) |
| Tab selections (navigation only) | **4** (Sql Columns → IDOs; IDOs → Property Classes; Property Classes → IDOs; IDOs → Property Classes). The IDO detail sub-tab clicks are counted separately below. |
| IDO sub-tab clicks (Tables, Properties) | **2** |
| Screenshots | **8** (`t11-01` to `t11-08`) |
| Errors | **1** ref-not-found (a guessed ref `f1e1040`, nonexistent; no action ran) |
| Recovery snapshots | **1 of 1** used (after the ref error) |
| Corrected visible inspections | **0 of 1** used |
| Prompts answered | **0** |
| Portal banner dismissals | **0** |
| JavaScript / evaluate / run-code | **0** |
| Login, logout, refresh, restart | **0** |
| Form tab closes / reopens (AC-10 lifecycle) | **0 / 0** (not run, per instruction) |

## 8. Evidence index

| File | Visible identity / scope / result | Proves | Does not prove |
| --- | --- | --- | --- |
| `t11-01-idos-tab-selected-before-recheck.png` | IDOs tab; FX_UMs row checked; Revision 1; Locked By operator; Check In enabled; Tables row `FX_UMs`/`fxum`/Primary Base/Inner | Pre-check-in identity and lock | Property detail |
| `t11-02-idos-FX_UMs-properties-recheck-before-checkin.png` | Properties tab state before the check-in (record view) | Pre-check-in property state (captured before the check-in action) | Property values beyond the grid |
| `t11-03-propertyclasses-state-before-FX_UMBase-recheck.png` | Property Classes: FX_UMBase grid row, detail present, checkout buttons | Pre-check state of the class (shown without the exact query) | The exact query result (see t11-05) |
| `t11-04-propertyclasses-FX_UMBase-criterion-committed-before-F4.png` | Criteria mode, Class Name `FX_UMBase` committed; detail blank (criteria state) | The criterion established before F4 | The result |
| `t11-05-propertyclasses-FX_UMBase-after-single-F4-settled.png` | Post-F4 screenshot taken before the detail finished rendering (detail still blank in the image) | Shows the screen mid-render; not decisive | The class values — the accessibility read (grid row `FX_UMBase 1 … String 10 nvarchar … FX_sUM`) is the decisive record |
| `t11-06-idos-FX_UMs-identity-before-checkin-decision.png` | IDO identity and checkout state before the check-in: project, revision 1, Locked By operator, Check In enabled; Properties grid | **AC-7/AC-8 pre-check identity and checked-out state** | Post-check state |
| `t11-07-idos-FX_UMs-settled-after-single-checkin.png` | Revision 2; Locked By empty; row unchecked; Check Out enabled; Undo disabled; status `Check Out (IDOs 1 of 1)`; Properties unchanged | **AC-8 settled revision/ownership after the single check-in** | Database-level state |
| `t11-08-propertyclasses-FX_UMBase-recheck-after-checkin.png` | FX_UMBase after the check-in: String, 10, nvarchar, FX_sUM; Revision 1; Locked By operator; Check In and Undo enabled; Save disabled | **Invariant: FX_UMBase unchanged and still checked out** | Database-level state |

## 9. Unresolved items

1. FX_UM's Data Type, Length and Column Type remain blank in the IDO Properties grid (T9, T11). Treated per the coordinator's instruction as consistent with inheritance; the effective IDO value is **not** proven by the grid.
2. The Property Classes first-F4 screenshot (`t11-05`) did not show the detail; the decisive read is the accessibility tree. Recorded as a limitation of the image, not of the record.
3. The Advanced Attributes inspection was not opened; the IDO's inherited-attribute indication was not read through that view.
4. The post-check-in state of FX_HelloWorldProject01 was not re-read (no project-form interaction). Not claimed unchanged beyond "not touched in T11".
5. The "C1" specialist consultation referenced by the brief is not available in this session; T11 relied on the T9/T10 records.
6. AC-10 (close/reopen) not run.

## 10. Last verified browser state

- Tab 0 (Mongoose): `Property Classes` tab selected, with FX_UMBase (`1 of 1`, checked out to the operator, Save disabled, Check In and Undo Check Out enabled). The IDOs tab holds the checked-in FX_UMs IDO (Revision 2, Check Out enabled, unchecked). Sql Tables and Sql Columns tabs remain open from T10; FX_HelloWorld01 open. No dialog, no unsaved-change prompt, no banner (`t11-08`).
- Tab 1 (Designer, User scope): not used in T11.
