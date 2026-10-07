# EXP-033-R2 — T2 notes (enter Select Form once + establish rendered baseline; no tested-string typing)

Run R-20261007-220054-xlTM, cycle 2. Permitted: one planned current-reference read-only check; at most ONE ordinary Open solely to enter the replay (dialog found closed in T1); capture inherited dialog baseline; establish Filter By=Name / unchecked / unchecked IF any differ; resolve+focus the Name-filter textbox via current refs. Prohibited/honored: NO Ctrl+A/Backspace/type/fill/paste text change this task, no OK/Enter, no Cancel/reopen, no row interaction, no JS/internal stores for inspection (screenshot tool's own locator aside), no auth/prefs/unload/Form mutation.

## §A Start guard (planned current-reference check; read-only)

Targeted current-ref snapshot of the Web Client iframe frame (no navigation/auth): tab 0 authenticated live Web Client (`...c51080bc-...?favoriteContext=FX_ComponentRecoveryLab03`), identity badge present, toolbar `Open` ENABLED, Save/New/Delete/Refresh/Filter in Place/Get More Rows/System Notes/Documents/Send email/Export To Excel/Help Current Form DISABLED (clean), two enabled `Designer` split-button controls; Explorer tree intact (My/Master/Public/User Folders); selected tab heading `FX_ComponentRecoveryLab03` + Close Panel control. NO dialog node in the frame subtree → Select Form still CLOSED, usable without login/session establishment. Guard PASS: same inherited context as T1, no session-establishment needed.

## §B The one permitted initial Open (consumed)

One ordinary click on rendered toolbar button `Open` (accessibility name "Open"; ref f3e23; semantic control per verified recipe `mgtoolbarbutton-1101`), NOT coordinates. Post-click `find "Select Form"` = exactly ONE match → dialog OPEN. Initial Open consumed: 1/1 for this experiment; no further reopen permitted.

## §C Inherited Select Form state at open (captured WITHOUT any change)

Fresh targeted subtree snapshot of the dialog (dialog ref f3e79):
- Dialog titled `Select Form`; grid headers Caption | Name; grid body node f3e94 with NO row children → **ZERO visible rendered rows** at inherited settle.
- Filter textbox: active [ref f3e402], exact text `FX_SelectFormKeyboardProbe01` (exact from accessibility snapshot line; screenshots show it left-truncated at the field edge).
- Filter By combobox [f3e408]: `Name`.
- Checkbox "Case Sensitive" [f3e412]: unchecked. Checkbox "Starts With" [f3e417]: unchecked.
- Toolbar buttons OK/Cancel/Help present UNPRESSED; Close Window control present top-right.

Case-discriminating evidence for the `b` in `Keyboard` (read-only, exact-case regex via find): `/KeyBoardProbe01/` (capital B) = **no match**; accessibility snapshot line + `/Key[o]ard.../`-form reads render `FX_SelectFormKeyboardProbe01`. Conclusion: inherited textbox already carries the lowercase-b literal (`press("b")` form), i.e. EXP-033 T6's settled probe string retained across the final Cancel per EXP-031's observed retention mechanic. Interpretation limited to rendered/accessibility observation; no claim about persistence mechanism.

## §D Settings establishment (AC-2 leg)

Required: Filter By=`Name`, Case Sensitive unchecked, Starts With unchecked. Observed inherited values already exactly match → **zero setting changes performed** (nothing differed). Establishment COMPLETE via inherited-and-verified state.

## §E Textbox resolve + focus (no text change)

Resolved the current rendered Name-filter textbox via current accessibility ref f3e402 (locator resolves to `#textfield-1143-inputEl` inside the Web Client iframe — same identity as EXP-033 T2/T6's textbox locator). One caret click on f3e402 to focus; post-focus subtree confirms textbox still `active`, exact text UNCHANGED `FX_SelectFormKeyboardProbe01`. NO Ctrl+A/Backspace/type/fill/paste performed this task.

## §F Evidence screenshots (inspected for framing)

- `t2-01-dialog-open-inherited-state.png`: full viewport — Select Form centered over the Lab03 Web Client: identity bar `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`, DEM badge, menu/toolbar row, Explorer tree; dialog titled "Select Form", Caption|Name header + BLANK grid body = zero rows, Filter field showing left-truncated `ectFormKeyBoardProbe01`-width text (case not legible at this scale — see §C's exact-case read), Filter By dropdown "Name", visibly empty Case Sensitive/Starts With checkboxes, OK/Cancel/Help unpressed. Proves: dialog OPEN after the single Open + zero-row inherited grid + settings; does NOT prove textbox case by itself.
- `t2-02-dialog-subtree-settings.png`: tight dialog crop — same facts legible at control level (blank grid body, Name dropdown, empty checkboxes, OK/Cancel/Help unpressed); textbox text still left-truncated at the field's LEFT edge (`ectForm...Probe01` visible; full string from accessibility snapshot line).

## §G Counts and budget accounting this task (T2)

Initial Open: 1 (consumed; experiment-wide allowance now spent). Filter-setting ops: 0. Ctrl+A/Backspace/printable key presses: 0 (none permitted/performed). Cancel/Open-reopen/OK/Enter/row-activation: 0. Form open/save/close/create/edit: 0. Auth/prefs/unload/Designer-launch/cold-nav: 0. Focus caret click: 1 (focus only, no text change).
Recovery budget (shared): corrected-visible-inspection component already consumed in T1 → **1/1, none remaining**; fresh-untargeted-snapshot component NOT consumed this task (T2 guard was planned targeted current-ref check; `find` reads are planned baseline checks; zero stale-ref errors occurred). Planned-vs-recovery accounting: no ambiguity required recovery this task.

## §H State at end of T2

Select Form OPEN with textbox active exact `FX_SelectFormKeyboardProbe01`, Filter By=Name, Case Sensitive/Starts With unchecked, ZERO visible rows, OK/Cancel/Help unpressed. Left for the next task (positive-control typing). No Cancel performed; no reopen. Repository writes: this notes file + the EXP-033-R2 record only.
