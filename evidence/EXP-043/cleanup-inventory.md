# EXP-043 — Cleanup inventory (FX_UMBase)

**Status at the end of T4: ONE property class `FX_UMBase` was CREATED by a single explicit runtime Save (observed in T3). After an ordinary Form close and one reopen, the same-session Web Client query recovered exactly one `FX_UMBase` row with all attributes unchanged (observed in T4). Durability beyond this session (database read, cross-session, other users) is NOT independently verified. Cleanup was NOT performed. The record remains locked to the current user with Check In enabled; nothing was checked in.**

Recorded 2026-10-10. Worker session `a54ff2db-45f2-4d14-b10b-a71747e2986b`. Stages: T1 (task `61a64c87-2eba-4a72-9cbc-2cd111a3eabe`, gate), T2 (task `3afc8d41-5227-4497-a556-5d74df8da5cb`, pre-Save configuration), T3 (task `a189d20f-fb71-463d-a52e-95df14fc40a5`, single Save and post-Save query).

## Object

| Field | Value | Source |
| --- | --- | --- |
| Object type | IDO property class (shared metadata) | Brief; IDO Property Classes runtime Form |
| Name (Class Name) | `FX_UMBase` (exact case as typed and as displayed) | `t3-01` (pre-Save); `t3-02` (post-Save grid cell `f1e446`, textbox `f1e536`); `t3-03` (post-query, status `1 of 1`) |
| Count created | **Exactly one** (1) | One explicit Save (T3); no other Save, New or write |
| Scope | Tenant-wide, shared metadata. Not User-scoped. The Form stays in User editing scope. | Brief; AGENTS.md scope extension |
| Cleanup ownership | Factory (FX_ prefix). Deletion is out of scope for EXP-043 and was **not** performed. Retention or removal is for the operator or a separately authorized FX_-scoped task. | Brief; AGENTS.md |
| Lock state after Save (observed) | `Locked By` shows `anton.ramos@3mworks.com.ph`; **Check In** and **Undo Check Out** buttons are enabled (blue). The record appears checked out to the current user. | `t3-02`, `t3-03`. Not checked in; check-in is out of scope. |
| Revision | `Revision No` 1; `Revision Date` 10/10/2026 | `t3-03` |

## Attributes (saved, observed in the post-Save query)

| Attribute | Required | Recovered value (T3 post-Save query) | Pre-Save baseline (T2/T3) | Match |
| --- | --- | --- | --- | --- |
| Class Name | FX_UMBase | `FX_UMBase` | `FX_UMBase` | Yes (exact case) |
| Data Type | String | `String` | `String` | Yes |
| Length | 10 | `10` | `10` | Yes |
| Column Data Type | the NVARCHAR option as displayed | `nvarchar` (lowercase, as displayed) | `nvarchar` | Yes (displayed text). Stored SQL casing not separately inspected. |
| Label String ID | FX_sUM (reference only) | `FX_sUM` | `FX_sUM` | Yes |

Recovery evidence: `t3-03-post-save-fip-exact-FX_UMBase-query-result.png` and the T3 accessibility snapshot (row `f1e1002`: `FX_UMBase`, `String`, `10`, `nvarchar`, `FX_sUM`).

## Reference (not created)

- `FX_sUM` is referenced as a Label String ID only. **The string resource FX_sUM was NOT created.** Its existence is not verified.

## Other records touched

- None edited or saved. The existing `AccessAs` property class was displayed read-only as the positive control in T1 and was not edited, saved or checked out in T2 or T3. In T3 it was not visible after the exact-name query.
- `FX_HelloWorld01` (its IDO, table, rows FX001/FX002): not touched.

## Cleanup performed

- **None.** No deletion, no second Save, no Check In, no Undo Check Out, no discard, no string-resource creation, no cache unload.

## Still-open record handling (for the operator)

- The record is saved and still open in the runtime Form. T3 stopped before Close and Reopen, per the brief. The next step (ordinary close, reopen, exact-name recovery) is a separate authorized task.
- The record shows as locked by the current user with Check In enabled. Check-in or undo is a lifecycle action outside this experiment and was not taken. The operator should decide whether it is checked in before any cleanup or further use.

## Same-session recovery after ordinary close and reopen (T4)

Recorded 2026-10-10, task T4 (task_message_id `c15e7f10-52d8-4186-aee2-5f6d9a1b58ff`), worker session `a54ff2db-45f2-4d14-b10b-a71747e2986b`.

| Step | Observed | Evidence |
| --- | --- | --- |
| Pre-close baseline (fresh snapshot) | Property Classes selected; one row `FX_UMBase`; Save disabled; no starred record; status `Base Class (IDO Property Classes 1 of 1)`; `FX_HelloWorld01` tab present | `t4-01` |
| Ordinary Form-tab close (`Close Panel Property Classes`, once) | Property Classes tab removed; `FX_HelloWorld01` remains selected with FX001/FX002 and `(Object 1 of 2)`; no save-changes or discard prompt | `t4-02`; post-close snapshot |
| Reopen (toolbar Open, Select Form, OK; once) | Property Classes reopened in Filter-in-Place mode with a blank criteria row (no saved row loaded on open) | `t4-03` |
| Exact-name query (one: `FX_UMBase`, Tab, F4) | **One data row** `FX_UMBase`; no starred placeholder; status `Base Class (IDO Property Classes 1 of 1)` | `t4-04`; snapshot |

Recovered attributes compared with the T3 post-Save baseline:

| Attribute | T3 post-Save baseline | T4 recovered after reopen | Match |
| --- | --- | --- | --- |
| Class Name | `FX_UMBase` | `FX_UMBase` | Yes |
| Data Type | `String` | `String` | Yes |
| Length | `10` | `10` | Yes |
| Column Data Type | `nvarchar` | `nvarchar` | Yes (displayed text) |
| Label String ID | `FX_sUM` | `FX_sUM` | Yes |
| Revision No / Revision Date / Locked By / Access As | `1` / `10/10/2026` / `anton.ramos@3mworks.com.ph` / `G6R` | identical | Yes |

Ownership and lock indicators (recorded, not changed): `Locked By` = `anton.ramos@3mworks.com.ph`; **Check In** and **Undo Check Out** enabled before close and after reopen. No check-in, undo or any lifecycle control was activated.

Scope of this recovery: **observed, same Web Client session only.** It does not establish database durability, cross-session persistence, or visibility to other users.

## Evidence

- `t4-01-pre-close-saved-FX_UMBase-baseline.png`: saved record before close; all five attributes; Save greyed; lock buttons enabled; status `1 of 1`. Proves the pre-close baseline. Does not prove a database write.
- `t4-02-post-close-property-classes-tab-removed-no-prompt.png`: Property Classes tab removed; `FX_HelloWorld01` selected with FX001/FX002 and `(Object 1 of 2)`; no prompt. Proves AC-7 (form-tab removal and no prompt).
- `t4-03-reopened-property-classes-fip-mode-blank-criteria.png`: reopened Property Classes in Filter-in-Place mode with a blank criteria row. Proves the reopen (AC-8 precondition). Does not prove any record.
- `t4-04-reopened-fip-exact-FX_UMBase-query-result.png`: one `FX_UMBase` row with all attributes; status `1 of 1`; no starred placeholder. Proves the same-session AC-8 recovery.

## Evidence (T3)

- `t3-01-pre-save-staged-record-verified.png`: staged record, all five values, starred row 2, Save enabled, `AccessAs` unchanged, no dialog. Proves the pre-Save state (AC-5 precondition). Does not prove the stored value.
- `t3-02-post-save-settled-after-single-save-click.png`: Save greyed; row 2 not starred; fields in saved (read-only) style; no prompt or validation text; Check In and Undo Check Out now enabled. Proves the settled post-Save UI (AC-5). Does not prove a database write by itself.
- `t3-03-post-save-fip-exact-FX_UMBase-query-result.png`: FiP exact-name query `FX_UMBase`; status `Base Class (IDO Property Classes 1 of 1)`; one data row `FX_UMBase`; all attributes shown. Proves the same-session recovery of exactly one row (AC-6). Does not prove database durability or cross-session visibility.
- Earlier, unsaved-stage images: `t2-01` to `t2-04` (see the T2 section of the experiment record).

## T5 reconciliation (documentation only; no browser calls)

Recorded 2026-10-10, task T5 (task_message_id `30c56b15-cc73-4a78-8123-b0286bb00904`).

| Inventory item | Reconciled value | Basis |
| --- | --- | --- |
| Created FX_UMBase property classes | **Exactly 1.** One explicit Save (T3, controller T3 #4). No other Save, New or write. | Controller audits T1 to T4 |
| Attributes | String; Length 10; Column Data Type `nvarchar` (displayed lowercase; stored SQL casing unverified); Label String ID `FX_sUM` (reference only) | `t3-03`, `t4-04` |
| FX_sUM string resource | Not created. Existence not verified. | Brief; no string-resource action in any audit |
| Scope | Tenant-wide shared metadata **as the brief states**. The UI displayed no scope value, so this is documented intent, not observed. | Brief; AGENTS.md |
| Cleanup ownership | Factory (FX_ prefix). Responsibility rests with the operator or a separately authorized FX_-scoped task. | Brief; AGENTS.md |
| Cleanup performed | **None.** No deletion, no Check In, no Undo Check Out, no discard, no cache unload, no FormSync. | Controller audits (no Delete, Check In/Out or lifecycle calls) |
| Ownership and lock indicators (UI) | `Locked By` = `anton.ramos@3mworks.com.ph`; Check In and Undo Check Out enabled after Save; still enabled after close and reopen (T4). Not acted on. | `t3-02`, `t3-03`, `t4-01`, `t4-04` |
| Server-side lock state | Not verified. | — |
| Other records | None edited, saved or deleted. `AccessAs` was displayed only. `FX_HelloWorld01` (FX001, FX002) untouched. | Controller audits |

**Still unresolved for this record:** database durability; cross-session and cross-user visibility; stored SQL casing of `nvarchar`; the Site Developer role; whether the lock persists server-side. Classification: **observed only. NOT replay_verified.**
