# EXP-034 — T2 notes: initial Open + native positive-control setup + settled pre-Cancel evidence (Run R-20261007-225604-DG5Z, cycle 2)

Permitted this task: planned current-reference guard; ONE ordinary initial Open; inherited-state capture; settings establishment via rendered controls; native Ctrl+A/Backspace clear + exactly 25 one-printable-char native key ops; settled pre-Cancel evidence. STOP before Cancel/reopen. No JS/evaluate/run-code on page state, no Enter/OK, no row interaction, no auth/navigation.

## §A Start guard (planned current-reference check, not recovery)

Fresh untargeted snapshot of tab 0: Web Client still usable — identity button `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`, Explorer tree intact, toolbar Open enabled / others disabled, selected panel heading `FX_ComponentRecoveryLab03` + Close Panel; NO dialog node. `find "Select Form"` = none → Select Form still CLOSED since T1. Guard settled and unambiguous; recovery untouched at this point.

## §B One ordinary initial Open (consumed 1/1)

Single click on rendered toolbar button "Open" (accessibility name "Open", current ref f3e24). Then `find "Select Form"` = exactly one match → dialog OPEN. No reopen permitted or performed.

## §C Inherited dialog state captured WITHOUT change (fresh targeted subtree, current refs)

- textbox [active] exact `FX_SelectFormKeyboardProbe01` (retained from EXP-033-R2; lowercase-b form per snapshot line)
- Filter By combobox: `Name`
- Case Sensitive checkbox: unchecked; Starts With checkbox: unchecked
- grid header Caption↓ | Name; grid body f3e94 with NO row children → ZERO visible rows at inherited settle
- OK/Cancel/Help present unpressed; Close Window present.
File: `t2-inherited-dialog-at-open.txt`. Inspected screenshot `t2-01-inherited-dialog-at-open.png` (dialog crop: zero-row blank grid body, selected Filter field showing left-truncated lowercase-b form `ectFormKeyboardProbe01`, Name dropdown, empty checkboxes, OK/Cancel/Help unpressed; exact textbox string from the accessibility snapshot line, not the crop).

## §D Settings establishment

Filter By=Name + Case Sensitive unchecked + Starts With unchecked already inherited and verified in §C → zero rendered-control changes needed/performed (same pattern as EXP-033 T2 / EXP-033-R2 AC-2). AC-2 COMPLETE on inherited-and-verified state.

## §E Tool-error event and correction (recorded honestly)

- The `type` tool with text "Control+A" executed `pressSequentially('Control+A')` = LITERAL multi-character bulk insertion into the textbox (prohibited path; recorded as an error, not planned evidence). Postcondition checked ONCE before repair: subtree showed `textbox [active] [f3e402]: Control+A`, zero rows still, settings unchanged.
- Framing attempt `t2-x1-error-literal-control-a-in-textbox.png`: label-only crop — INSUFFICIENT (kept as history, not decisive). ONE corrected full-dialog inspection taken: `t2-x2-corrected-inspection-error-state-dialog.png` (inspected: textbox renders literal `Control+A`, zero rows, Name / unchecked / unchecked unchanged, OK/Cancel/Help unpressed).
- Correction via native key operations only: Backspace ×9 total to fully clear the residue — postcondition checked after 8 ops (`textbox [active]: C`, grid re-rendered full many-row list), one additional Backspace, then verified `textbox [active]` EMPTY + full-list grid via depth-limited subtree snapshot.
- Brief's clear step then executed natively: `press_key Control+A` ×1 (tool ran keyboard.press('Control+A')), `press_key Backspace` ×1 on the focused textbox (already empty → no text-content change; settings verified unchanged at later settles).

## §F Action audit — printable ops (exactly 25, one char per native key op, exact order)

press_key calls in order (all `page.keyboard.press('<char>')`, zero errored calls):
1 F | 2 X | 3 _ | 4 C | 5 o | 6 m | 7 p | 8 o | 9 n | 10 e | 11 n | 12 t | 13 R | 14 e | 15 c | 16 o | 17 v | 18 e | 19 r | 20 y | 21 L | 22 a | 23 b | 24 0 | 25 2
= `FX_ComponentRecoveryLab02` (count = 25 printable). No bulk fill, no paste, no JS, no Enter/OK, no row interaction.

## §G Settled pre-Cancel verification (after 3s settle; planned settled capture)

- `find "FX_ComponentRecoveryLab02"` = exactly 3 matches: gridcell pair of ONE row + the textbox value itself → zero additional grid occurrences.
- Fresh targeted subtree (current refs): textbox [active] exact `FX_ComponentRecoveryLab02`; Filter By combobox `Name`; Case Sensitive unchecked; Starts With unchecked; grid body f3e94 contains EXACTLY ONE row: gridcell "FX_ComponentRecoveryLab02" / gridcell "FX_ComponentRecoveryLab02"; OK/Cancel/Help unpressed.
- Stale-ref error occurred on the screenshot attempt (dialog ref invalid after re-render) → authorized recovery used: ONE fresh untargeted snapshot; state re-confirmed identical (same exact textbox + one exact row); retry with current refs succeeded.

## §H Decisive pre-Cancel evidence (inspected)

- `t2-02-positive-control-settled-dialog.png`: dialog titled "Select Form"; header Caption↓|Name + EXACTLY ONE legible row `FX_ComponentRecoveryLab02` in BOTH Caption and Name columns; Filter field selected showing left-truncated `...ComponentRecoveryLab02`; Filter By dropdown "Name"; Case Sensitive / Starts With checkboxes visibly empty; OK/Cancel/Help unpressed. Supports AC-4 settled exact-row leg + pre-Cancel settings/textbox observation (exact textbox string from snapshot line). Proves nothing about Cancel/reopen retention.
- `t2-03-positive-control-settled-viewport.png`: full viewport — identity bar, DEM badge, Explorer tree, Lab03 panel context behind the centered dialog with the same single exact row legible + empty checkboxes + unpressed buttons. Supports scope preservation (Web Client context intact) alongside AC-4.

## §I Counts and recovery accounting (cumulative experiment-wide)

- Lifecycle: initial Open **1/1 consumed**; tested Cancel 0/1; tested reopen 0/1; final Cancel 0/1 reserved; OK/Enter 0; row activations 0.
- Key operations this task: literal-bulk error (recorded); native Backspace ×9 correction + Ctrl+A ×1 + Backspace ×1 clear step + 25 printable ops. Settings-control changes: 0.
- Extra ambiguity recovery **whole experiment**: fresh-untargeted-snapshot component **1/1 consumed** (stale-ref recovery in §G); corrected-visible-inspection component **1/1 consumed** (§E insufficient-crop). Remaining: 0/0. No relabeling of planned reads; allowance never reset.

## §J End state / next permitted action

Select Form left OPEN, textbox exact `FX_ComponentRecoveryLab02`, Name / unchecked / unchecked, exactly one settled exact row — unchanged. NO Cancel or reopen performed this task (per instruction). Next permitted: tested Cancel + tested reopen + post-reopen retention observation in the following task.
