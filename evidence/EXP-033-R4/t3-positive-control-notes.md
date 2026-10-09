# EXP-033-R4 T3 — positive control (`FX_ComponentRecoveryLab02`) only

Worker session UUID: `66e4d74e-ce8b-4646-b9f9-01fbca90a469`; task_message_id `cd74c42a-0d70-4562-8abf-5bc5449c78fa`.

## Start check (planned current-reference check; not recovery)

- A targeted snapshot using T2's ref `f1e78` failed: "Ref f1e78 not found" (refs were renumbered after T2 — dialog is now `f1e77`). I did NOT take an untargeted snapshot. I resolved current refs with ONE targeted `find` (regex for dialog/textbox/combobox/checkbox/OK-Cancel-Help). This is recorded as a planned current-reference check; the ambiguity-recovery allowance is NOT consumed (state was unambiguous).
- Result: dialog `Select Form` (f1e77) OPEN, same dialog as T2 (no reopen); textbox `[active]` ref f1e400 (empty); Filter By combobox f1e406 = `Name`; Case Sensitive (f1e410) and Starts With (f1e415) with no `[checked]` attribute = unchecked; OK f1e419 / Cancel f1e421 / Help f1e423 present.
- Textbox already `[active]` from T2's focus click, so NO additional focus click was made in T3. Note: key presses are sent via page-scope `page.keyboard.press`; they land in the focused (active) textbox.

## Action audit (exact; every call was a separate `browser_press_key`)

Clear: (1) `Control+a`, (2) `Backspace`. No post-clear snapshot was taken (to avoid extra reads; the settled capture below establishes the final state). The clear step is therefore evidenced by the two successful calls plus the final textbox value being exactly the 25-char string (no residue from the inherited empty filter).

25 printable one-character key operations, each a single `press_key` call, all succeeded (zero errored calls, zero empty-key calls):

| # | key | # | key | # | key | # | key | # | key |
|---|-----|---|-----|---|-----|---|-----|---|-----|
| 1 | F | 6 | m | 11 | n | 16 | o | 21 | L |
| 2 | X | 7 | p | 12 | t | 17 | v | 22 | a |
| 3 | _ | 8 | o | 13 | R | 18 | e | 23 | b |
| 4 | C | 9 | n | 14 | e | 19 | r | 24 | 0 |
| 5 | o | 10 | e | 15 | c | 20 | y | 25 | 2 |

Spelled: `F X _ C o m p o n e n t R e c o v e r y L a b 0 2` = `FX_ComponentRecoveryLab02` (25 chars). Total successful key operations: 27 (Ctrl+A + Backspace + 25 printable). Counted by my own call sequence; the settled textbox value (below) corroborates no skips/duplicates.

Not used: fill/type tool, paste/clipboard, bulk typing, JavaScript/evaluate/run-code, Ext stores, Enter, OK, Cancel, Open, result-row interaction, Form/Designer action, auth.

## Settled result (planned capture, after a 3s wait following key 25)

- `find "FX_ComponentRecoveryLab02"` = 3 matches: the textbox (`textbox [active] [ref=f1e400]: FX_ComponentRecoveryLab02` — exact value from accessibility) and two gridcells in ONE row (f1e427): Caption `FX_ComponentRecoveryLab02` (f1e428) and Name `FX_ComponentRecoveryLab02` (f1e430).
- Filter By combobox = `Name`; Case Sensitive / Starts With unchecked (per the T3-start check and the screenshot; unchanged by any T3 action).
- Targeted subtree `t3-02-positive-control-settled-subtree.md` saved (for the full grid/row list; see it for the complete row set).

## Evidence

- `evidence/EXP-033-R4/t3-01-positive-control-settled-viewport.png` (inspected): full viewport with Select Form centered; grid header Caption (sort arrow) | Name; EXACTLY ONE data row, highlighted, Caption `FX_ComponentRecoveryLab02` and Name `FX_ComponentRecoveryLab02`; rest of grid body blank; Filter field (left-truncated, shows `omponentRecoveryLab02`) focused; Filter By `Name`; Case Sensitive and Starts With visibly empty; OK/Cancel/Help unpressed. Proves: settled rendered grid shows the exact Name row after native keyboard entry, with the settings in force; the grid changed from the full list (T2) to one row. Does NOT prove: the exact textbox string from the image (truncated; exact value comes from the accessibility line), the per-key refresh granularity, any server mechanism, or anything about the probe string.
- `evidence/EXP-033-R4/t3-02-positive-control-settled-subtree.md` (accessibility subtree of the dialog, corroboration).
- `evidence/EXP-033-R4/t3-00-start-check-subtree.md` was NOT created (the targeted snapshot failed with a stale ref; no file written).

## Verdict

AC-2 (clear + exact 25 native printable ops + settings, no prohibited input): PASS per this action audit. AC-3 (settled visible row Name exactly `FX_ComponentRecoveryLab02`): PASS. Dialog left OPEN; probe NOT started; no clear/typing after the positive control.

## Accounting

Initial Open 1/1 (T2); reopens 0; final Cancel 0/1; OK/Enter 0; row interactions 0. Ambiguity recovery: fresh untargeted snapshot used 0/1; corrected visible inspection used 0/1. One stale-ref error occurred at the start check (resolved via a targeted `find`, no untargeted snapshot).
