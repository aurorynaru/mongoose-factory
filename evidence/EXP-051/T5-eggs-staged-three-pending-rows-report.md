# EXP-051 T5 — Eggs staged as the third pending row; three unsaved rows; no Save (AC-7 only; cycle 5)

Run `R-20261011-114105-Dh5t`, experiment EXP-051, cycle 5, task T5. Worker session `04dd92c6-18cf-45b0-9833-5f76e6b76c00`, task_message_id `15008caa-1dd2-4359-8f35-73e842c5ebbb`. Date 2026-10-11.

Scope (bounded instruction): AC-7 only. Confirm the two pending rows; one toolbar New; gate check; enter eggs; verify; stop. No Save, no second New, no Refresh, no Filter-in-Place, no F4, no Delete, no close or reopen, no Designer action, no fourth row, no cleanup.

## Outcome

**AC-7 PASS (observed, same session, UI level).** The eggs draft was entered through native Web Client fields and verified before any submission:
- Row 3 (current): `eggs` / `cage free` / `6.99` / `DZ`, starred (pending).
- Row 1: `dumbbell` / `45 pound iron` / `45.00` / `EA`, starred (pending), unchanged.
- Row 2: `guitar` / `natural acoustic` / `129.99` / `EA`, starred (pending), unchanged.
- Count token `(Object 3 of 3)` (status text `Description (Object 3 of 3)` after the final focus move).
- Save enabled. No dialog, prompt, authentication challenge, or implicit persistence observed. No Save was invoked.

**Database persistence: NOT verified.** All three rows are unsaved UI state. No database read was made in T5.

## Preflight (before New)

- Tabs listed first (`browser_tabs` list), then the Web Client selected (index 1). The numeric reference was not assumed.
- Fresh snapshot: two rows, `dumbbell / 45 pound iron / 45.00 / EA` (`f1e148`–`f1e155`) and `guitar / natural acoustic / 129.99 / EA` (`f1e159`–`f1e166`); Description `[active]` with `natural acoustic` (carried focus from T4); Cost `129.99`; combobox `EA`; status `Description (Object 2 of 2)`; Save enabled; no dialog.
- Screenshot `t5-01`: both rows starred; Save icon enabled; count `Description (Object 2 of 2)`; no dialog.
- Gate passed. No focus move was needed: the Description text was already selected from T4's settle step, and the combobox editor was not active.

## Action: one toolbar New

- One click on `New` (`f1e31`, label verified). No retry.
- Immediately captured (snapshot, then `t5-02`) before typing:
  - Three grid rows: `gridcell "1"` (`f1e219`), `"2"` (`f1e224`), `"3"` (`f1e229`).
  - Rows 1 and 2 unchanged, with their exact values (`dumbbell` / `45 pound iron` / `45.00` / `EA`; `guitar` / `natural acoustic` / `129.99` / `EA`).
  - Row 3 blank with only `row "0.00"` (`f1e234`); the Cost `0.00` is the permitted add-mode default.
  - Inputs: Item `[active]` and empty; Description empty; Cost `0.00`; Unit of Measure empty.
  - Status `Item (Object 3 of 3)`; Save enabled; tooltip `New`; no alert, prompt, or dialog.
  - Screenshot `t5-02`: three starred rows (1, 2, 3 with the current arrow on 3).
- Gate passed. Eggs entry proceeded.

## Eggs entry (in order)

| # | Field | Action | Observed |
| --- | --- | --- | --- |
| 1 | FX_Item (`f1e177`) | fill `eggs` | input `eggs`; find confirmed |
| 2 | FX_Description (`f1e186`) | fill `cage free` | input `cage free`; find confirmed |
| 3 | FX_Cost (`f1e195`) | fill `6.99` (replaced `0.00`; not the spoken `699`) | input `6.99`; find confirmed |
| 4 | FX_UM combobox (`f1e205` Open) | one click | list `DZ | Dozen` (`f1e255`), `EA | Each` (`f1e258`); combobox `[expanded]` |
| 5 | DZ / Dozen option (`f1e255`) | one click (native dropdown; no typing) | combobox `DZ`; grid row 3 UM cell `DZ` (`f1e262`) |
| 6 | (no toggle) | snapshot inspected first | the list had closed on selection: no `listbox` in the tree; combobox no longer `[expanded]`; so the toggle was not clicked |
| 7 | FX_Description (`f1e186`) | one ordinary focus move (click, no typing) | Description `[active]` with `cage free` selected; status `Description (Object 3 of 3)`; combobox shows `DZ` |

Grid row 3 committed as `eggs` / `cage free` / `6.99` / `DZ` (accessibility `row "eggs cage free 6.99"`, `f1e249`/`f1e261`).

## Final verified state (after step 7)

| Row | Star (screenshot `t5-03`) | Item | Description | Cost | Unit of Measure |
| --- | --- | --- | --- | --- | --- |
| 1 | yes | `dumbbell` (`f1e149`) | `45 pound iron` (`f1e151`) | `45.00` (`f1e153`) | `EA` (`f1e155`) |
| 2 | yes | `guitar` (`f1e160`) | `natural acoustic` (`f1e162`) | `129.99` (`f1e164`) | `EA` (`f1e166`) |
| 3 (current) | yes | `eggs` (`f1e246`) | `cage free` (`f1e248`) | `6.99` (`f1e250`) | `DZ` (`f1e262`) |

Current draft (row 3) inputs: Item `eggs` (`f1e177`); Description `cage free` (`f1e186`, `[active]`, text selected); Cost `6.99` (`f1e195`); Unit of Measure `DZ` (`f1e204`, not active, dropdown closed).

Status: `Description (Object 3 of 3)` (`f1e211`). Count token `(Object 3 of 3)`.
Save: enabled (`button "Save" [ref=f1e28]`, no `disabled`). Dialogs: none.

## Automatic-save, implicit-commit, and prompt audit

- No alert, prompt, confirmation, validation message, or authentication challenge at any step.
- No Save was invoked. Save stayed enabled throughout.
- No row lost its star. No count other than the expected 2→3 transition.
- The DZ selection closed the list on its own (no toggle needed). Had it stayed open, the brief permitted the native toggle; it was not required.
- Step 7 is an ordinary focus move within the current row, not navigation to another record.

## Evidence files (T5)

- `evidence/EXP-051/t5-01-pre-new-two-pending-rows-object-2-of-2.png`: before New. Shows both starred rows, the guitar draft in the Item/Description/Cost/UM inputs, Description text selected, Save icon enabled, `Description (Object 2 of 2)`, no dialog. Proves the pre-New gate visually; row 1's text is clipped (values from the accessibility tree).
- `evidence/EXP-051/t5-02-after-one-New-three-rows-before-eggs.png`: after one New, before typing. Shows three starred rows (row 3 current), row 3 inputs blank with Cost `0.00`, `Item (Object 3 of 3)`, Save icon enabled, tooltip `New`, no dialog. Proves the post-New gate visually; row values are clipped and come from the accessibility tree.
- `evidence/EXP-051/t5-03-eggs-staged-three-pending-rows-object-3-of-3.png`: final T5 state. Shows the eggs draft (`eggs`, `cage free`, `6.99`, `DZ`), dropdown closed, three starred rows (1, 2, 3), `Description (Object 3 of 3)`, no dialog. Proves AC-7 draft and state visually. The row 1 and row 2 Description/Cost/UM cells are clipped in the image; their values are from the accessibility snapshot. Does not prove a Save state (the icon is small) or any database content.
- `evidence/EXP-051/T5-eggs-staged-three-pending-rows-report.md`: this report.
- Tool-generated (not worker-authored): `evidence/playwright/` snapshot and console files (for example `page-2026-10-11T03-52-58-417Z.yml`, `page-2026-10-11T03-53-22-117Z.yml`, `console-2026-10-11T03-52-49-347Z.log`).

## Operation counts (T5)

| Operation | Count |
| --- | --- |
| Toolbar New clicks | **1** |
| Toolbar Save clicks | **0** |
| Refresh / F4 / FiP / Get More Rows / Delete | 0 / 0 / 0 / 0 / 0 |
| Field fills (`browser_type`) | 3 (`eggs`, `cage free`, `6.99`) |
| Native combobox option selections | 1 (DZ / Dozen, `f1e255`) |
| Typed text into the combobox | 0 |
| Combobox Open clicks | 1 (no toggle needed; the list closed on selection) |
| Escape presses | 0 |
| Ordinary focus-move clicks | 1 (Description, `f1e186`) |
| Browser clicks total | 4 (New, Open, DZ option, focus move) |
| Tab list / tab select | 1 / 1 (success on the first select) |
| Web Client snapshots | 5 |
| Screenshots (worker-requested PNG) | 3 (`t5-01` to `t5-03`) |
| Browser finds | 3 (`eggs`, `cage free`, `6.99`) |
| Fourth item rows | 0 |
| Designer edits; Designer dialog touched | 0; 0 (Designer tab not selected in T5) |
| Dialogs or prompts answered | 0 |
| Ref not found / timeouts / recovery snapshots | 0 / 0 / 0 |
| Portal banner dismissals | 0 (none visible) |
| JavaScript, evaluate, run-code, SQL, API | 0 |
| Authentication, session, or browser change | 0 |

## Cumulative reconciliation (after T5)

| Operation | Count | Where |
| --- | --- | --- |
| Invalid BX Save attempt | **1** | T2 (rejected; alert text `BX is not a valid Unit of Measure`) |
| Toolbar New | **2** | T4 (guitar row) and T5 (eggs row) |
| Intended successful toolbar Save | **0** | not yet performed (pending coordinator authorization) |
| Runtime close | **0** | — |
| Runtime reopen | **0** | — |
| Final empty-criteria query | **0** | — |
| Records staged (unsaved) | **3** | dumbbell (EA), guitar (EA), eggs (DZ) |
| Gate query (FiP + F4) | 1 | T1 (empty collection) |
| Alert dismissals | 1 | T3 (BX alert, OK) |
| Combobox EA / DZ selections | 2 EA (dumbbell T3; guitar T4) + 1 DZ (eggs T5) | the authorized valid rows |

## Limitations and uncertainties

1. **Persistence unverified.** All three rows are unsaved. No database read has been made. Whether the T2 BX Save wrote a row remains unknown; nothing in T5 can answer it.
2. **Commit of each field.** Each value appears in the grid cell in the accessibility tree; no Save was used to confirm a commit. The DZ commit is evidenced by the grid cell `DZ` (`f1e262`).
3. **Star state** is read from screenshots; the accessibility tree does not expose the star.
4. **Clipped cells.** Row 1 and row 2 Description/Cost/UM cells are clipped in the screenshots; their values come from the accessibility snapshot.
5. **Cost value.** The Cost `6.99` was typed as the authorized value. The transcript's spoken `699` was not used.

## Stop state

- Web Client tab current; FX_Items runtime open; three starred pending rows; Save enabled; no dialog or prompt.
- Description field active with its text selected (from the focus move). No typing after the selection.
- Designer tab not touched in T5; its inherited scope dialog is unchanged.
- No Save, no further New, no Refresh, no close or reopen, no cleanup.
- Next permitted action (coordinator): the one intended successful toolbar Save (AC-8), then the runtime close and reopen (AC-9), then the final empty-criteria query (AC-10). Not performed.
