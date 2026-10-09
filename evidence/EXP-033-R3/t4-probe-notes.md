# EXP-033-R3 — T4 notes: probe (2026-10-09)

Result: **Probe executed; settled rendered grid shows ZERO visible rows** for the exact literal `FX_SelectFormKeyboardProbe01`. Scope of this conclusion: the rendered UI state of this Select Form dialog only. No database absence, uniqueness, persistence, serialization, or server-refresh/requery claim is made. Select Form left OPEN. No Cancel, no reopen, no retype, no recovery consumed.

## 1. Worker identity

- Worker session UUID: `60cc08ec-01c4-41cc-9294-26f32bee888e`. Task message `c300c53c-7f17-4a80-ae40-06c1e46af7eb`. Same worker session as earlier T1–T3 (operator-confirmed). Distinct from EXP-033 `ses_ee9768333ffeV8zFkrUtEv19U6` and sibling `ses_ee9545a81ffevGqiS17Iix5jM8`.

## 2. Planned current-reference guard (before any clear)

- `find "Select Form"` → dialog OPEN at `f1e77`.
- `find "FX_ComponentRecoveryLab02"` → 3 matches: grid row cells `f1e97` (Caption) and `f1e99` (Name), both exactly `FX_ComponentRecoveryLab02`; textbox `f1e106` with value `FX_ComponentRecoveryLab02`, active.
- `find "textbox [active]"` → textbox `f1e106` active; Filter By combobox `f1e112` = `Name`.
- `find "Starts With"` → checkboxes `f1e116` (Case Sensitive) and `f1e121` (Starts With) present with no checked state.
- Guard result: **PASS** — same dialog, positive-control textbox and exact row present, settings unchanged, no material ambiguity. Proceeded.
- Refs moved from T3 (textbox `f1e400` → `f1e106`; dialog `f1e77` unchanged). Used the refs from this guard, not the T3 refs.

## 3. Focus

- Textbox was already the active element at the guard (`find "textbox [active]"` = `f1e106`). The planned focus click was therefore NOT performed (no click needed; avoided an unnecessary click on the textbox). Focus remained on `f1e106` through the clear and the 28 key operations (confirmed by `find "textbox [active]"` after the clear and after settle).

## 4. Clear (native path, 2 key operations)

1. `browser_press_key` `Control+a` (native Ctrl+A).
2. `browser_press_key` `Backspace` (native Backspace).
- Post-clear verification (`find "textbox [active]"`): textbox `f1e106` active with NO value; grid re-rendered to the full list (rows such as `User Defined Info / UserDefinedInfo` present). Clear confirmed before typing.

## 5. Probe key-operation audit (exactly 28 printable, one per call, in order)

| # | Key | # | Key | # | Key |
|---|---|---|---|---|---|
| 1 | `F` | 11 | `o` | 21 | `d` |
| 2 | `X` | 12 | `r` | 22 | `P` |
| 3 | `_` | 13 | `m` | 23 | `r` |
| 4 | `S` | 14 | `K` | 24 | `o` |
| 5 | `e` | 15 | `e` | 25 | `b` |
| 6 | `l` | 16 | `y` | 26 | `e` |
| 7 | `e` | **17** | **`b` (lowercase, after `Key`)** | 27 | `0` |
| 8 | `c` | 18 | `o` | 28 | `1` |
| 9 | `t` | 19 | `a` | | |
| 10 | `F` | 20 | `r` | | |

- Sequence sent = `F X _ S e l e c t F o r m K e y b o a r d P r o b e 0 1` — 28 keys, matches the required order exactly.
- Each key was one `browser_press_key` call; each returned success. None retried, duplicated, or skipped.
- **Lowercase `b` confirmed:** key 17 (after `Key`) was lowercase `b`. Case-sensitive read after settle: `find` regex `/FX_SelectFormKeyboardProbe01/` = **1 match** (the textbox, `f1e106`); regex `/FX_SelectFormKeyBoardProbe01/` (capital B) = **no match**. The lowercase-`b` form is what is in the field.
- Note: the plain `find` tool matches case-insensitively, so the count of plain `find` results alone does not establish case; the case-sensitive regex reads are the case evidence.

## 6. Settled result (after 3 s wait)

- `browser_wait_for` 3 s, then reads:
  - `find "FX_SelectFormKeyboardProbe01"` (case-insensitive): **1 match — the textbox `f1e106` only.** No grid-row occurrence.
  - `find "gridcell"`: **No matches** anywhere on the page. The grid body contains **no row cells**.
  - Grid body in the accessibility tree: `grid f1e92` with no child rows. Header row (Caption, Name) present.
- **Visible case-insensitive Name matches for `FX_SelectFormKeyboardProbe01`: 0.**
- Settled stable across the reads (same result on the settle read and the subsequent gridcell/textbox reads). No stale or ambiguous rendering observed, so no recovery was needed.

## 7. Decisive screenshot — `t4-01-probe-settled-dialog.png` (INSPECTED)

- **Shows:** Select Form open over the Web Client; grid header Caption | Name with a **blank grid body (zero rows)**; Filter field showing the typed value (left-truncated, visibly ending `…lectFormKeyboardProbe01`, lowercase `b` visible); Filter By dropdown `Name`; Case Sensitive and Starts With checkboxes visibly empty; OK / Cancel / Help unpressed; Web Client identity bar (`anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`), DEM badge, collapsed Explorer tree, and greyed toolbar visible.
- **Does NOT show:** the full textbox string (truncated; exact value from the case-sensitive regex reads), that the blank body is a settled result rather than a transient render (supported by the 3 s settle and the repeated reads, not by the image), or any database inventory.

## 8. Actions NOT performed in T4

- No OK, no Enter, no Cancel, no reopen, no Open, no row click or activation, no fill, no paste, no bulk typing, no clipboard, no JavaScript/evaluate/run-code, no internal-store access, no Save, no Regenerate, no unload, no preference change, no authentication, no navigation, no reload, no Mongoose artifact mutation, no creation of `FX_SelectFormKeyboardProbe01`, no retype.

## 9. Recovery accounting (shared, EXP-033-R3)

- Fresh untargeted snapshot: **1/1 used, 0 remaining** (used in T3 attempt 1; NOT used in T4).
- Corrected visible inspection: **0/1 used, 1 remaining** (NOT used in T4 — no ambiguity arose).
- All T4 reads (guard, post-clear, settle, gridcell, regex, textbox-active) were planned current-reference, guard, and settled-result evidence captures, not recovery.

## 10. Inherited Designer/Form state

- Unchanged. No Form, component, or Designer tab was opened, closed, saved, created, or modified. One browser tab. The dialog is the only in-page element changed, and it is the same T2 dialog left open.

## 11. Verdict for T4

- AC-4 probe action: **PASS (observed)** — Ctrl+A, Backspace, then exactly 28 one-printable-character native key operations for `FX_SelectFormKeyboardProbe01` with lowercase `b` at key 17.
- AC-5 settled probe: **Zero visible case-insensitive Name matches, observed in the rendered UI only.** Matching rows: none. Stale or ambiguous rendering: none observed. No database-absence, uniqueness, or server-refresh conclusion is drawn.
- Select Form left OPEN for the final-audit task (T5 / AC-8). Final Cancel NOT performed in T4.

## Evidence files written in T4

- `t4-probe-notes.md` (this file)
- `t4-01-probe-settled-dialog.png` (inspected)
