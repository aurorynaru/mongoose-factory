# EXP-048 T4 — Evidence summary (ONE shared toolbar Save; settled UI state)

Run `R-20261011-012552-sBdG`, cycle 3, task T4, task_message_id `22d94684-295f-4b8a-8fc9-f80d8267222d`, worker session `1dfccb89-2e8f-4980-9353-b101a842bd6b`. Date 2026-10-11 (system date).

Scope: confirm preconditions; invoke the ordinary Property Classes toolbar Save **exactly once**; capture the immediate and settled state. **No New, no close, no reopen, no recovery query, no edit of any class, no metadata lifecycle action, no check-in or checkout, no retry of Save.** Classification: **observed, same session, UI level only. Not replay_verified. Database durability, cross-session persistence and application of either class to an IDO property are not tested.**

## Preconditions (before Save; all confirmed)

| Check | Observed (fresh untargeted snapshot `T4` preflight; `T4-00`) |
| --- | --- |
| Tab / Form | One Mongoose tab; Property Classes selected; URL `favoriteContext=IdoPropertyClasses` |
| Identity bar | `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` |
| Rows | Row 1 FX_UM (unstarred, checked out); row 2 FX_ItemBase (starred, pending); row 3 FX_Cost (starred, pending) |
| Save | Enabled (`find` "Save" → toolbar button enabled) |
| Dialog / prompt / banner | None (`find` "dialog" → no match) |
| FX_ItemBase (grid row 2) | Class Name FX_ItemBase; Data Type String; Length 20; Column Data Type nvarchar; Label String ID FX_sItem; Base Class and Domain cells blank |
| FX_Cost (form and grid row 3) | Class Name FX_Cost; Data Type Decimal; Length 18; Decimal Position 2; **Default Value `0` (textbox value `"0"`, grid cell `"0"`; literal zero, not blank or null)**; Column Data Type decimal; Label String ID FX_sCost; Base Class and Domain fields empty |
| Implicit commit | Not indicated: both rows keep their pending stars; checkout buttons disabled for the pending record before Save |
| Limit | The checkout buttons shown at T4 start belonged to the displayed FX_Cost record. FX_ItemBase's own checkout state was read from its grid Locked By cell (operator) only |

No precondition differed from T2/T3, so Save was invoked.

## The single shared Save

| Step | Action | Result |
| --- | --- | --- |
| 1 | ONE click on toolbar `Save` (`f1e28`, from the preflight snapshot; label verified as `Save`) | Click returned without error. No timeout, no `Ref not found`. |
| 2 | Immediate screenshot `T4-01`; `find` "dialog" (no match); `find` "Save" | Save `[disabled]`; tooltip `Save` visible; no dialog |
| 3 | Wait 2 s (read-only); accessibility snapshot `T4-02` (settled) | Settled state (values below) |
| 4 | Settled screenshot `T4-03`; `find` "dialog" (none); tab list (one tab) | Clean state |

**Save invocations: exactly 1.** No retry was made. No ambiguity: the Save settled with Save disabled and no message.

## Immediate response and settled state

- **Messages:** none. No success or error text, no validation message, no dialog or confirmation prompt (`find` "dialog" → no match before and after the settle).
- **Save:** disabled (`[disabled]`, `[active]` on the button) in `T4-01` and `T4-02`.
- **Row indicators:** the pending stars on rows 2 and 3 were **cleared**. Rows show plain row numbers 1, 2, 3 with checkbox checked in each.
- **Checkout indications:** Check In and Undo Check Out were **disabled** before Save (pending record) and are **enabled** after Save on the displayed FX_Cost record (`T4-03`, accessibility `button "Check In" [ref=f1e681] [cursor=pointer]`). Row 2 (FX_ItemBase) shows Locked By `anton.ramos@3mworks.com.ph` in the grid. Not acted on.
- **Status bar:** unchanged, `Input Mask (IDO Property Classes 3 of 3)`.

## Pre-Save vs settled displayed values

| Attribute | Pre-Save (T3 accessibility `T3-04` and T4 preflight) | Settled (`T4-02`) | Difference |
| --- | --- | --- | --- |
| Save | Enabled | Disabled | Changed (expected) |
| Pending stars rows 2, 3 | Present | Absent | Changed (expected) |
| Class Name (FX_Cost form label) | Red `*` label | Plain `Class Name:` | Asterisk removed |
| Grid header Class Name | `* Class Name` | `Class Name` | Asterisk removed |
| Check In / Undo Check Out (displayed record FX_Cost) | Disabled | Enabled | Changed (expected for a saved, checked-out record) |
| FX_ItemBase row values: Class Name, Data Type, Length, Column Data Type, Label String ID | FX_ItemBase / String / 20 / nvarchar / FX_sItem | identical | None |
| FX_ItemBase Base Class; Domain IDO; Domain Property; Domain List Properties | blank | blank | None |
| FX_Cost Class Name | FX_Cost | FX_Cost | None |
| FX_Cost Data Type; Length; Decimal Position; Default Value; Column Data Type; Label String ID | Decimal; 18; 2; 0; decimal; FX_sCost | identical (`Decimal`, `18`, `2`, `0`, `decimal`, `FX_sCost`) | None |
| FX_Cost Base Class; Domain fields | blank | blank | None |
| Revision No / Revision Date / Locked By / Access As (FX_Cost) | 1 / 10/10/2026 / operator / G6R | identical | None |
| FX_UM row (row 1) | FX_UM / FX_UMBase / 1 / 10/10/2026 / G6R / String / 10 / nvarchar / FX_UMs / FX_UM / FX_Description / FX_sUM; checked out | identical | None |

Numeric display: Default Value and Decimal Position show `0` and `2`; Length shows `18`. No display formatting change (for example, no `0.00`) was observed in the settled Form.

Asterisk inventory, settled (`T4-02`, `T4-03`): form labels still starred `*Data Type`, `*Length`, `*Decimal Position`, `*Default Value`, `*Column Data Type`, `*Label String ID`; grid headers still starred `*Data Type`, `*Length`, `*Decimal Position`, `*Default Value`, `*Column Data Type`, `*Label String ID`, `* Revision No`, `* Revision Date`. The only change is the removed Class Name asterisk. Meaning of all asterisks **unresolved**; not inferred here.

## Preservation (qualified)

- **FX_UM:** unchanged in the settled grid (row 1 identical values; checkout indication as before). No action targeted FX_UM.
- **FX_UMBase:** not displayed in this Form state since the T1 queries and **not re-queried** in T4 (no further queries permitted). Its state is **not independently verified in T4**. Qualified by the action log: no action in T4 targeted FX_UMBase; the single Save was issued from the Form with FX_Cost displayed and only the two pending rows were pending.
- No checkout, check-in or Undo action was taken on any record.

## Cumulative EXP-048 action counts (T1 through T4)

| Operation | T1 | T2 | T3 | T4 | Cumulative |
| --- | --- | --- | --- | --- | --- |
| New | 0 | 1 | 1 | **0** | **2** (FX_ItemBase, FX_Cost) |
| **Save (toolbar)** | 0 | 0 | 0 | **1** | **1** (shared) |
| Form close | 0 | 0 | 0 | **0** | **0** (not yet authorized) |
| Form reopen | 0 | 0 | 0 | **0** | **0** |
| Recovery (exact-name) queries | 0 | 0 | 0 | **0** | **0** (not yet authorized) |
| Class Name queries with F4 | 6 (2 baseline reads; 2 absence gates; 2 positive controls after the gates) | 0 | 0 | 0 | — |
| Check In / Check Out / Undo | 0 | 0 | 0 | 0 | 0 |
| Designer / metadata lifecycle / FormSync / deployment | 0 | 0 | 0 | 0 | 0 |
| Dialogs or prompts answered | 0 | 0 | 0 | 0 | 0 |
| Errors / Ref-not-found / timeouts | 1 / 0 / 0 (1 ref error, recovery used) | 0 | 0 | 0 | 1 (T1) |

T4 browser mutations: **1** (the Save click). T4 reads: 5 `browser_find` calls (dialog and Save before the click; dialog and Save after; one dialog find at the settled state), 2 untargeted accessibility snapshots (the T4 preflight snapshot and the settled snapshot saved as `T4-02`), 1 explicit wait (2 s), 1 tab listing (end).
T4 screenshots: 3 PNG (`T4-00`, `T4-01`, `T4-03`) plus 1 accessibility YAML (`T4-02`).
Worker-authored JavaScript, evaluate, run-code, direct SQL: 0. The tool wrapper generated code for the click and capture calls; the worker supplied refs only.

Note: the T4 preflight screenshot and accessibility snapshot are the T3 `T3-03`/`T3-04` pre-Save evidence extended by a fresh untargeted snapshot at the T4 start. No re-query and no new New was performed to establish preconditions.

## Evidence index (T4)

| File | Shows | Proves | Does not prove |
| --- | --- | --- | --- |
| `T4-00-preflight-both-pending-before-shared-Save.png` | Rows 2 and 3 starred; FX_Cost form Decimal, 18, 2, 0, decimal, FX_sCost; Save enabled; status `3 of 3`; no dialog | All preconditions visible before the single Save | Persistence; accessibility values (see the accessibility snapshot) |
| `T4-01-immediate-after-single-shared-Save.png` | Save greyed; stars cleared on rows 2 and 3; Class Name label no longer starred; Check In and Undo Check Out enabled; `Save` tooltip; no dialog | Immediate response: no message, no prompt, Save disabled | Stored state (the UI shows no success text) |
| `T4-02-settled-after-shared-Save-accessibility.yml` | Settled accessibility tree: Save `[disabled]`; grid rows FX_UM, FX_ItemBase, FX_Cost with all cell values; FX_Cost form values; Check In and Undo Check Out enabled | AC-6 settled values and Save state (UI level) | Database state; the origin of system-populated fields |
| `T4-03-settled-after-shared-Save-both-records.png` | Settled view: three rows, no stars, Save greyed, FX_Cost values and checkout buttons enabled, status `3 of 3` | Settled visual state for AC-6 | FX_ItemBase's form values (only in the grid); persistence |

## Acceptance checks (T4)

- **AC-6 (single shared Save): supported** (UI level, one run). Controller and screenshots establish: two native New operations (T2 and T3); both definitions verified pending before the Save (T2 and T3, re-confirmed in T4); exactly one ordinary toolbar Save (T4); settled result with both intended records and their specified values; Save disabled; no pending-change indicator; no unexpected error or prompt; no metadata lifecycle action. No implicit commit was indicated before the Save (both rows still pending).
- **AC-4, AC-5:** carried from T2 and T3 and re-confirmed pre-Save in T4.
- **AC-7, AC-8, AC-9:** not run (no close, reopen or recovery in T4).
- **AC-10:** partial; the counts above reconcile to the controller actions and screenshots.

## Limits

- Single session, UI level. The settled values are the Web Client's display, not stored values.
- "Committed" is inferred from the disabled Save, the cleared stars and the enabled checkout buttons. No database read, and no success message is shown by this UI (as in EXP-043 and EXP-047-R2).
- The checkout (Check In / Undo Check Out) state is shown for the displayed FX_Cost record. FX_ItemBase's checkout state is read only from its Locked By cell.
- Asterisk meaning is unresolved.
