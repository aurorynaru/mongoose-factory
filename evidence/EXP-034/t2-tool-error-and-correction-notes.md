EXP-034 T2 — tool-error record and corrected inspection (Run R-20261007-225604-DG5Z)

§A Error event
- After the inherited-baseline capture, the intent was native Ctrl+A. The type tool call `type(element textbox f3e402, text="Control+A", slowly)` executed as `pressSequentially('Control+A')` = LITERAL multi-character text insertion (prohibited bulk entry), not a key operation.
- Postcondition checked once before any repair keystroke: fresh targeted subtree of dialog f3e79 showed `textbox [active] [f3e402]: Control+A` — the probe string was overwritten by the literal; grid body f3e94 still NO row children (zero rows); Filter By combobox still Name; checkboxes still unchecked; OK/Cancel/Help unpressed.

§B Evidence of error state
- `t2-x1-error-literal-control-a-in-textbox.png`: crop of the "Filter:" label region only — INSUFFICIENT for scope (label text only); kept as history of the failed framing attempt, not decisive evidence.
- `t2-x2-corrected-inspection-error-state-dialog.png` (inspected): full dialog titled "Select Form"; Caption↓|Name header + blank grid body = zero rows; Filter field selected rendering literal `Control+A` legibly; Filter By dropdown "Name"; Case Sensitive and Starts With checkboxes visibly empty; OK/Cancel/Help unpressed.

§C Recovery-budget accounting (explicit)
- Fresh-untargeted-snapshot component: 0/1 consumed (the subtree reads were targeted planned current-reference checks; no stale-ref error occurred).
- Corrected-visible-inspection component: **1/1 consumed** — the label-only crop `t2-x1` was insufficient for scope framing, so ONE corrected full-dialog inspection (`t2-x2`) was taken. 0 remaining for later tasks (matches EXP-033-R2's identical accounting).
- The error itself is a tool-facility defect on an experiment-permitted tool, not an ambiguity-recovery event; the corrected-inspection component covers the insufficient-crop ambiguity.

§D Correction path (per recovery rule: inspect postcondition once, then correct)
- Textbox now contains literal `Control+A` + caret at end, focus already on textbox. Correcting with native key operations only: Backspace to remove all characters (`C o n t r o l + A`) → settled verify textbox empty; then Ctrl+A and Backspace as the brief's clear step; then exactly 25 one-printable-char native key ops `F X _ C o m p o n e n t R e c o v e r y L a b 0 2` via press_key (native single-key facility). Prohibited actions audit: zero bulk fill/paste/JS/Enter/OK; zero lifecycle (Cancel/Open/reopen) actions.
- Correction is within the current task's permitted native-input path (not a lifecycle reset, not retype-after-settled — positive control was never settled before).

§E Correction accounting (audited after execution)
- Native Backspace ×9 total: postcondition checked after 8 ops (textbox still rendered `C`; grid re-rendered to full many-row list — mid-state verify), one additional Backspace taken, then verified `textbox [active]` EMPTY with grid body populated (full list) via depth-limited subtree snapshot.
- Brief clear step executed natively: press_key `Control+A` (tool ran keyboard.press('Control+A')) ×1; press_key `Backspace` ×1 on the focused textbox. Textbox already empty → no text-content change; settings unchanged (Name / unchecked / unchecked).
- Printable entry facility confirmed available: press_key one printable char per call — same native single-key facility EXP-033 T2 and EXP-033-R2 T3 used for their 25-op sequences. No stop-blocker needed on tool capability.

§E Correction accounting (audited)
- Literal `Control+A` residue (8 chars) removed by native Backspace x9: postcondition checked after 8 ops (textbox still rendered `C`, grid re-rendered full list — mid-state verify), one additional Backspace taken, then verified empty+active textbox with full many-row grid.
- Brief clear step executed natively on the focused textbox: press_key Control+A (tool ran keyboard.press('Control+A')) x1; press_key Backspace x1. Textbox was already empty; Ctrl+A/Backspace on empty textbox is a no-op for text content; state verified unchanged-empty at settle checks below.
- Printable entry path: press_key one printable char per call (native single-key facility, same as EXP-033 T2 / EXP-033-R2 T3).
