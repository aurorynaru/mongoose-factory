# EXP-033-R4 T2 — Select Form entry and dialog baseline (no tested string typed)

Worker session UUID: `66e4d74e-ce8b-4646-b9f9-01fbca90a469`; task_message_id `05252877-51d5-4f3d-8f18-c6e852c20fb9`.

## Start check (planned current-reference check, not recovery)

Depth-limited untargeted snapshot + `find "Select Form"`: authenticated Web Client iframe (banner, Explorer region, empty main), Select Form = NO matches (closed) — consistent with T1. No login/session-establishment needed.

## Actions (exact, in order)

1. ONE ordinary toolbar Open (current ref f1e23, accessible name "Open"). Initial Open consumed: **1/1**.
2. `find "Select Form"` → dialog `f1e78` present (tooltip "Open" also visible in the screenshot, from hover).
3. Captured initial state (subtree + viewport screenshot) BEFORE any setting change.
4. Click Filter By combobox (ref f1e407, locator `#combo-1145-inputEl`) → list options: Name, Caption, Caption & Name.
5. Click option "Name" (ref f1e428). One settings change (Filter By Caption → Name).
6. ONE caret focus click on the Filter textbox (ref f1e401, locator `#textfield-1143-inputEl`). No Ctrl+A / Backspace / typing / fill / paste.
7. Captured established-state subtree + screenshot.

No Enter, no OK, no Cancel, no row interaction, no JS/evaluate, no Form/Designer action, no auth. Case Sensitive / Starts With were already unchecked: zero checkbox clicks.

## Initial dialog state (before any change)

- Name-filter textbox: EMPTY (`textbox [active]`, no value), active/focused on open.
- Filter By: `Caption`.
- Case Sensitive: unchecked. Starts With: unchecked (no `[checked]` attribute in snapshot; boxes visibly empty in screenshot).
- Rendered rows: full unfiltered form list, sorted by Caption descending-arrow header; snapshot has 86 gridcells (= 43 rendered rows, a truncated list with scrollbar thumb at top). First rows: `XML to IDO Wizard / WSFormWizardNewDataXmlToIdo`, `WSFormBuilderWidgetRecordTemplate`, `WSFormBuilderWidgetMenuTemplate`, `WSFormBuilderWidgetListTemplate`, `WSFormBuilderWidgetKPITemplate`, … (first row highlighted). No `FX_` row looked at (list top is the W…/X… end).

## Established state (after Name selected + textbox focused)

- Filter By combobox (ref f1e407): `Name`. Case Sensitive (ref f1e411): unchecked. Starts With (ref f1e416): unchecked.
- Textbox ref f1e401 (`#textfield-1143-inputEl`): `[active]`, empty → focused, text unchanged.
- Grid unchanged: same full list (changing Filter By with an empty filter did not alter the rows). OK (f1e420) / Cancel (f1e422) / Help (f1e424) present, unpressed.

## Evidence

- `t2-01-dialog-initial-subtree.md`, `t2-01-dialog-open-initial-state.png` (inspected: viewport with Select Form centered over the empty Web Client; Filter field empty and outlined; Filter By "Caption"; Case Sensitive and Starts With checkboxes visibly empty; grid full list headed XML to IDO Wizard; OK/Cancel/Help unpressed; "Open" tooltip visible. Proves the initial baseline; does not prove anything about filtering.)
- `t2-02-dialog-settings-established-subtree.md`, `t2-02-dialog-settings-established-textbox-focused.png` (inspected: same dialog; Filter By now "Name"; checkboxes visibly empty; Filter field empty with focus outline; same full grid; OK/Cancel/Help unpressed. Proves AC-2 settings precondition + focus; does not prove typing/filter behavior, no text was entered.)

## Accounting

- Initial Open: 1/1 consumed. Reopens: 0. Cancel: 0 (final Cancel 0/1 used). OK/Enter: 0. Row interactions: 0.
- Ambiguity recovery: fresh untargeted snapshot used 0/1; corrected visible inspection used 0/1 (the start-check snapshot and dialog/settings captures were planned current-reference/baseline captures; the one stale-looking `f1e*` ref risk did not occur — no missing-ref errors).
- Inherited Web Client untouched: no Form opened/closed/saved; no Designer tab exists (as in T1). Dialog left OPEN for the next task.

## Repository writes

`experiments/EXP-033-R4-…md`, `evidence/EXP-033-R4/t2-*` (notes, 2 subtree .md, 2 .png). Playwright MCP also auto-wrote its own logs/snapshots under `evidence/playwright/` (tool output, not authored by me; noted for the confinement audit).
