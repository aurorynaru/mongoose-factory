# EXP-061 — T2 checkout report (cycle 1): one native Check Out of FX_Items

**Status: T2 COMPLETE. Exactly one native Check Out of `FX_Items` was invoked and succeeded at UI level. AC-4 supported (observed, UI and accessibility level).** No wizard, Finish, Save, New, Delete, close, reopen, check-in, undo checkout, runtime-record action or other-object checkout occurred. Classification: **observed only; not replay_verified.**

Run `R-20261011-223208-4y9y`, cycle 1, task **T2**. Worker session `3b3208ec-666d-4ace-b69d-4c7d8d3fe7fe`; task_message_id `80f153ae-7840-4281-9bfd-44d33a77fc57`. Date 2026-10-11. Editing scope User. FX_-only scope (AGENTS.md, 2026-10-10).

---

## 1. Pre-action review (before any mutation)

- Reviewed `evidence/EXP-061/T1-report.md` and `experiments/EXP-061-…md` (T1 identity, 11-property baseline, FX_Picture absent, SQL column `dbo.FX_Items.FX_Picture` varbinary/-1/nullable/Column Id 13, class FX_Picture one row, FX_Items checked in).
- Not re-read: the EXP-049/050/051/059/060 records (already reviewed in T1; no new source needed for T2).

## 2. Gates (fresh, read-only; before the checkout)

| Gate | Observation | Result |
| --- | --- | --- |
| Tab list (read-only) | Tab 0 Web Designer (`MGForm=FX_Items`, not acted on); tab 1 Web Client (`favoriteContext=SqlColumns` at start) | Pass |
| Tab select | Tab 1 selected on the first attempt | Pass |
| Start snapshot (fresh, untargeted) | Active inherited tab **Sql Columns** (matches the bounded instruction); tabs Sql Tables, Sql Columns, FX_Items, Property Classes, IDOs; Save disabled; no dialog; no banner | Pass |
| Tab selection to IDOs | One click on the IDOs tab (`f1e105` from the fresh start snapshot) → `favoriteContext=IdoCollections`; IDOs tab active | Pass |
| Identity | IDO Name `FX_Items`; Project Name `FX_HelloWorldProject01`; list `IDOs 1 of 1` (at T2 start the pre-action status was `IDO Name (IDOs 1 of 1)`) | Pass |
| Base table | **Not re-read in T2.** The pre-action snapshot does not contain the Tables sub-grid row (the Tables sub-tab reports selected, but its row is absent from the accessibility tree). Carried from T1: `FX_Items`, alias `fxitms`, Primary Base | Carried (T1), not re-verified in T2 |
| Revision before | Revision Num `2`; Revision Date `10/10/2026` | Recorded |
| Locked By before | blank | Pass (checked in) |
| Check Out before | enabled; Undo Check Out disabled | Pass (checked in) |
| Row checkbox before | not checked | Pass (checked in) |
| Save | disabled (dirty state absent) | Pass |
| Dialogs | none (`browser_find` "dialog": no matches) | Pass |
| Authentication or configuration challenge | none; identity bar `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` | Pass |

Evidence: `t2-snapshot-00-start-fresh.yml`, `t2-snapshot-01-idos-tab-after-select-pre-checkout.yml`, `t2-01-before-checkout-idos-FX_Items-identity-ownership.png` (the decisive image: FX_Items row unchecked; Project FX_HelloWorldProject01; Revision 2 / 10/10/2026; Locked By empty; Check Out enabled; Undo Check Out disabled; identity bar operator; status `IDO Name` list).

**Gate result: all gates passed. Ownership was checked in and unambiguous, so a single checkout was permitted.**

## 3. The single checkout action

- **Action:** one click on the native **Check Out** button (`f1e1472`) of the IDOs record `FX_Items` (accessibility name `Check Out`, exact match on the IDOs Form).
- **Count:** Check Out invoked **1**. No retry. No second click on any other checkout control.
- **Immediate response (tool returned without error; `browser_find` "dialog": none):** snapshot `t2-snapshot-02-after-checkout-immediate.yml`:
  - Locked By `anton.ramos@3mworks.com.ph` (full value in the accessibility readback).
  - Row checkbox checked.
  - **Check In** enabled (`[active]`); **Undo Check Out** enabled.
  - Save disabled.
  - Revision Num `2`; Revision Date `10/10/2026` (unchanged).
  - Status text `Check Out (IDOs 1 of 1)`.
- **Confirmation dialog:** **none appeared.** The native response was a state change only. No confirmation, warning or error text was displayed. The response is recorded verbatim as "no displayed text; enabled-state and Locked By change only".
- **Settled (3 s wait; snapshot `t2-snapshot-03-after-checkout-settled.yml`):** identical readback: Locked By operator; Check In and Undo Check Out enabled; Save disabled; Revision Num 2; Revision Date 10/10/2026; status `Check Out (IDOs 1 of 1)`; no dialog.

Interpretation (observed): the checkout took effect for the operator; the revision number and date were **not** changed by the checkout action (in EXP-049 T14 the check-in advanced revision 1→2, which the checkout does not appear to do). The checkout state is read from the accessibility readback (Locked By value, enabled Check In, checked row checkbox), not from a labelled "checked out" status field.

## 4. Settled ownership readback (AC-4)

| Field | Before | After (settled) |
| --- | --- | --- |
| IDO Name | FX_Items | FX_Items |
| Project Name | FX_HelloWorldProject01 | FX_HelloWorldProject01 |
| Base table (Tables) | carried from T1 (FX_Items / fxitms / Primary Base); not re-read in T2 | not re-read in T2 |
| Revision Num | 2 | 2 |
| Revision Date | 10/10/2026 | 10/10/2026 |
| Locked By | blank | `anton.ramos@3mworks.com.ph` (matches the identity bar operator) |
| Row checkbox | not checked | checked |
| Check Out | enabled | not offered (replaced by Check In) — `Check Out` is absent from the settled tree |
| Check In | disabled/absent | enabled |
| Undo Check Out | disabled | enabled |
| Save | disabled | disabled |
| Access As | G6R | G6R (unchanged) |
| Label String ID / Caption | oFX_Items / oFX_Items | unchanged (visually the Label String ID now draws a dropdown arrow because checkout enables editing; the value is `oFX_Items`; **no edit made**) |

Evidence: `t2-02-after-checkout-settled-idos-FX_Items-locked-by-operator.png`. What it proves: row checkbox checked; Locked By shows `anton.ramos@3m…` (clipped in the image); Check In and Undo Check Out enabled; Save disabled; Revision Num 2 and Revision Date 10/10/2026; status `Check Out (IDOs 1 of 1)`; identity bar operator. What it does **not** prove: the full Locked By string (clipped; the accessibility readback gives the full value), a database-level checkout, or cross-session persistence.

## 5. Ownership and boundary checks

- Locked By equals the authenticated operator (`anton.ramos@3mworks.com.ph`, identity bar match). **Ownership check passed.**
- No other IDO, property class, SQL object, Form or record was checked out (no other action in T2). The Sql Columns, Sql Tables, Property Classes and FX_Items runtime tabs were not acted on (only the IDOs tab was selected).
- No check-in or undo checkout occurred (the Undo Check Out button was not activated; Check In was not activated).
- No property added. The wizard was not opened. Save not invoked. No close, reopen or query. No runtime record touched.

## 6. Action audit (T2 only)

| # | Action | Target / detail | Result |
| --- | --- | --- | --- |
| 1 | browser_tabs list | read | Tab 0 Designer (not acted on); tab 1 Web Client (current) |
| 2 | browser_tabs select 1 | Web Client | Succeeded (first attempt) |
| 3 | browser_snapshot (untargeted, fresh) | `t2-snapshot-00-start-fresh.yml` | Sql Columns active; Save disabled; no dialog |
| 4 | browser_click | IDOs tab (`f1e105`) | Selected; `favoriteContext=IdoCollections` |
| 5 | browser_snapshot (untargeted, saved) | `t2-snapshot-01-…pre-checkout.yml` | FX_Items record; checked in |
| 6 | browser_take_screenshot | `t2-01-before-checkout-…png` | pre-action identity and ownership |
| 7 | browser_click | **Check Out** (`f1e1472`) | **the one checkout action**; no error returned |
| 8 | browser_find | "dialog" | no matches |
| 9 | browser_snapshot (untargeted, saved) | `t2-snapshot-02-after-checkout-immediate.yml` | Locked By operator; Check In enabled |
| 10 | browser_wait_for | 3 s | settle |
| 11 | browser_snapshot (untargeted, saved) | `t2-snapshot-03-after-checkout-settled.yml` | settled readback identical |
| 12 | browser_take_screenshot | `t2-02-after-checkout-settled-…png` | settled ownership image |

**Counts:** Check Out **1**; check-in 0; undo checkout 0; wizard 0; Finish 0; Save 0; New 0; Delete 0; close 0; reopen 0; Select Form 0; query (F4) 0; runtime interaction 0; typed entries 0; dialogs answered 0; ref-not-found 0; timeouts 0; JavaScript / run-code 0; console or network inspection 0; fresh-snapshot recoveries 0 (the single start snapshot was not a recovery); tab selects 1 (plus 1 tab list); IDOs tab click 1; untargeted snapshots 4 (start, pre, immediate, settled); targeted find 1; screenshots 2 (plus the T2 decisive `t2-01` and `t2-02`).

## 7. Cumulative audit (T1 + T2)

| Operation | T1 | T2 | Cumulative |
| --- | --- | --- | --- |
| Form opened (Select Form) | 1 | 0 | 1 |
| Exact-name IDO query (F4) | 1 | 0 | 1 |
| Property-class prerequisite query | 1 | 0 | 1 |
| Checkout (Check Out) | 0 | **1** | **1** |
| Check-in / undo checkout | 0 | 0 | 0 |
| New Property wizard | 0 | 0 | 0 |
| Finish | 0 | 0 | 0 |
| Save | 0 | 0 | 0 |
| Form close / reopen | 0 / 0 | 0 / 0 | 0 / 0 |
| Dialogs answered | 1 (Select Form OK) | 0 | 1 |

## 8. Written-file inventory (T2)

- `evidence/EXP-061/T2-report.md` — created (this report).
- `evidence/EXP-061/t2-01-before-checkout-idos-FX_Items-identity-ownership.png` — created.
- `evidence/EXP-061/t2-02-after-checkout-settled-idos-FX_Items-locked-by-operator.png` — created.
- `evidence/EXP-061/t2-snapshot-00-start-fresh.yml`, `t2-snapshot-01-idos-tab-after-select-pre-checkout.yml`, `t2-snapshot-02-after-checkout-immediate.yml`, `t2-snapshot-03-after-checkout-settled.yml` — created (accessibility snapshots written at the worker's request).
- `experiments/EXP-061-…md` — updated (T2 status, checkout result, counts, acceptance table, next step).
- Tool-generated (not worker-authored): `evidence\playwright\page-*.yml` and `console-*.log` written automatically by the tool on each action. The worker did not read the console logs and made no console call.

No other repository file was written by T2. `tools/` was not read or written. `AGENTS.md`, tutorial sources, EXP-059 and EXP-060 records were not altered.

## 9. Acceptance status (T2)

| AC | Status (after T2) | Evidence | Limits |
| --- | --- | --- | --- |
| AC-1 | Supported (observed) — T1 | T1 report | — |
| AC-2 | Supported (observed, UI level) — T1 | T1 report §4–5 | — |
| AC-3 | Supported (observed, UI level) — T1 | T1 report §7–8 | Wizard lookup not yet exercised |
| AC-4 | **Supported (observed, UI and accessibility level)**: pre-state checked in; one native Check Out; no displayed confirmation; Locked By operator; Check In and Undo Check Out enabled; no other object checked out | `t2-01`, `t2-02`; `t2-snapshot-01`–`-03`; §2–5 | Checked-out status interpreted from the enabled controls and Locked By (no labelled status field); no database read; the Check Out response is a state change with no text |
| AC-5 – AC-10 | Not started | — | — |

## 10. Limitations and uncertainty

- Same-session UI-level observation. No database read. Checkout durability, cache state and independent session recovery are **not** established by T2.
- The checkout response had no displayed text; "verbatim" response is the absence of any confirmation or error, plus the state change.
- The Locked By value was clipped in the image; the full value is from the accessibility readback.
- Label String ID and IDO Assembly Name drew dropdown affordances after the checkout (rendering of an editable state). No value was changed; Save stayed disabled.
- Revision Num and Revision Date were unchanged by the checkout (observed; the mechanism is not established).

## 11. Next permitted step (NOT started; requires separate authorization)

With FX_Items now checked out to the operator, the wizard gates pass for the next task only if the coordinator authorizes it: one New Property wizard for FX_Items (Bound; Property Name `FX_Picture`; Bind To the existing `FX_Picture` column; Property Class `FX_Picture`), with inherited Data Type and SQL Column Data Type read before Finish, then exactly one Finish, at most one Save, close, reopen, one recovery query, and the runtime check. The inventory surface for the post-change comparison is the in-form `Properties` tab (per the T2 instruction; the separate Properties button is not used).
