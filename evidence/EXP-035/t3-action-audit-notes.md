# EXP-035 — T3 notes: Filter By=Name, textbox focus, native Control+a + Backspace clear (NO target characters)

Run R-20261009-204056-HY76, cycle 3, task T3. worker_session_id d2542b8f-3084-40fb-9b36-4ac05475c28b; task_message_id e96666a5-8bb5-4f72-9256-b07b4fbacad6.
Scope: keep the open Select Form dialog; change Filter By Caption → Name once; verify checkboxes; focus the Name-filter textbox; native `Control+a` ×1; native `Backspace` ×1; capture. NO printable key, NO `browser_type`, NO fill, NO clipboard, NO JS/evaluate, NO Enter/OK, NO row interaction, NO Cancel, NO reopen, NO Open.

## §A Start guard — fresh untargeted snapshot (planned current-reference check, not recovery)

- Snapshot at T3 start (no earlier refs used): one tab; Web Client usable (identity button `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`, DEM badge, Explorer tree, toolbar); NO sign-in/configuration screen; `dialog "Select Form" [ref=f1e77]` STILL OPEN.
- Current refs at guard: textbox `[ref=f1e400]` (active, no value); Filter By combobox `[ref=f1e406]` = `Caption`; Case Sensitive `[ref=f1e410]` (no checked marker); Starts With `[ref=f1e415]` (no checked marker); toolbar OK `f1e419` / Cancel `f1e421` / Help `f1e423`, unpressed.
- Inherited values confirmed unchanged from T2 (Filter By `Caption`, both unchecked, textbox empty). T2 refs (`f1e401`, `f1e407`, `f1e411`, `f1e416`) were NOT reused — they had shifted; `f1e400`/`f1e406`/`f1e410`/`f1e415` are the current refs.
- No Open was clicked (toolbar Open remains 1/1 from T2).
- Guard result: PASS.

## §B Filter By change (rendered control, once)

1. `browser_click` on Filter By dropdown trigger, ref `f1e407` (`cursor=pointer` arrow). Returned without error. Playwright path: `#combo-1145-trigger-picker`. Listbox opened: `combobox [expanded] [active] [ref=f1e406]` with `listbox [ref=f1e425]` listing `option "Name" [ref=f1e427]`, `option "Caption" [ref=f1e428]`, `option "Caption & Name" [ref=f1e429]`.
2. `browser_click` on `option "Name"` ref `f1e427`. Returned without error. Playwright path: `getByRole('option', {name:'Name', exact:true})`.
3. Read-back (read-only `browser_find`): `combobox [active] [ref=f1e406]: Name`. Both checkboxes show no checked marker (`checkbox "Case Sensitive" [ref=f1e410]`, `checkbox "Starts With" [ref=f1e415]`). Textbox `[ref=f1e400]` has no value.
- Filter By action count: 2 clicks (open list + select Name) — the Filter By change itself is one selection of Name. Checkbox toggles: 0.

## §C Planned current-reference snapshot after Filter By change (planned, not recovery)

- Untargeted snapshot saved to `evidence/EXP-035/t3-02-pre-focus-current-refs-snapshot.md`. Confirmed `textbox [ref=f1e400]` (no value), `combobox [active] [ref=f1e406]: Name`, both checkboxes unchecked, OK/Cancel/Help unpressed.

## §D Textbox focus (one click on current ref)

1. `browser_click` on the Name-filter textbox ref `f1e400` (Playwright path `#textfield-1143-inputEl`). Returned without error. No retry.
2. Focus verified by read-only `browser_find` regex `/textbox \[active\]/`: `textbox [active] [ref=f1e400]` inside `dialog "Select Form" [ref=f1e77]`. Combobox no longer active.
- Focus-click count: 1 (no timeout, no retry).

## §E Native key operations (exactly one each, in order, waited for each result)

| # | Tool | Argument | Playwright call logged by tool | Result |
|---|---|---|---|---|
| 1 | `browser_press_key` | `Control+a` | `page.keyboard.press('Control+a')` | success, no error |
| 2 | `browser_press_key` | `Backspace` | `page.keyboard.press('Backspace')` | success, no error |

- Note: the brief writes `Control+a` (lowercase a) and the tool accepted it. Tool-logged call: `Control+a`.
- No `browser_type`, no fill, no clipboard, no bulk text, no JS. No printable key ops (0). No Enter.
- Post-clear wait: `browser_wait_for` time 3 s (wait only; not a browser mutation).

## §F Post-clear settled state (read-only)

- Snapshot saved: `evidence/EXP-035/t3-03-post-clear-settled-snapshot.md`. Current refs: `textbox [active] [ref=f1e400]` with no value (EMPTY); `combobox [ref=f1e406]: Name`; `checkbox "Case Sensitive" [ref=f1e410]` and `checkbox "Starts With" [ref=f1e415]` with no checked marker; OK/Cancel/Help `f1e419`/`f1e421`/`f1e423` unpressed.
- The grid is populated and unfiltered (the grid subtree spans refs up to `f1e729`, many rows, first row `XML to IDO Wizard / WSFormWizardNewDataXmlToIdo`); this is the post-clear full list, not a filtered result.
- Screenshot `evidence/EXP-035/t3-04-post-clear-dialog-viewport.png` (inspected): see decisive evidence.

## §G Counts and recovery

- Initial Open: 0 this task (1/1 consumed in T2; not repeated). Tested Cancel 0/1. Tested reopen 0/1. Final Cancel 0/1.
- Filter By selections: 1 (Caption → Name). Checkbox toggles: 0.
- Textbox focus clicks: 1. Ctrl+a: 1. Backspace: 1. Printable key ops: 0. `browser_type`/fill/paste: 0. Enter/OK: 0. Row interaction: 0. JS/evaluate/run-code: 0.
- Read-only: untargeted snapshots ×3 (§A guard; §C post-Filter-By current refs; §F post-clear settled), finds ×3 (§B option lookup `Name`, §B read-back, §D focus check), grep ×2, screenshot ×1, wait ×1. Tool-generated click snapshots under `evidence/playwright/` are not counted as worker actions.
- Recovery allowance: **0 used / 1 remaining** (shared across all EXP-035 tasks). No "Ref not found", no timeout, no ambiguous read in T3. Planned snapshots were not relabelled as recovery.

## §H Checkpoint — ready for T4 (not started)

- Select Form OPEN; Filter By = `Name`; Case Sensitive unchecked; Starts With unchecked; Name-filter textbox EMPTY and focused (`[active]`).
- Next task (per the bounded instruction) is the 25 individual printable-key operations for `FX_ComponentRecoveryLab02`. Those were NOT sent in T3.
- Caution carried forward: the textbox was focused at the end of T3 and must remain focused; the T4 guard should take a fresh untargeted snapshot before its first key, and must send exactly one character per `browser_press_key`.
