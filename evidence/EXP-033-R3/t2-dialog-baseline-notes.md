# EXP-033-R3 — T2 notes: enter Select Form once and establish the rendered baseline (2026-10-09)

Scope: dialog baseline + settings only. NO typing, NO Ctrl+A, NO Backspace, NO fill/paste, NO Enter/OK, NO row interaction, NO Cancel, NO reopen, NO JavaScript, NO Form/Designer change.

## 1. Start check (planned current-reference read, not recovery)

- Worker session UUID for this task: `60cc08ec-01c4-41cc-9294-26f32bee888e`; task message `6807c711-b496-4c82-ab5f-db499fb1548b`.
- `browser_tabs list`: one tab, `Mongoose`, same Web Client URL as T1 (`…/G6R8LJ9Q4E8C2Z8Y_DEM/c51080bc-…`).
- Fresh untargeted snapshot (`t2-start-check-snapshot.md`): identity `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`, toolbar `Open` enabled, Explorer folders collapsed, no sign-in prompt. The Web Client is usable without login/session establishment. This matches T1 (attempt 2).
- `browser_find "Select Form"`: no matches. Select Form CLOSED, consistent with T1. No contradiction, so proceeding.

## 2. The single initial ordinary Open (consumed)

- One click on the toolbar `Open` (ref f1e23, accessibility name "Open"). Initial Open count: **1 of 1 consumed**. No reopen will occur.
- Post-Open `find "Select Form"`: one match. Post-Open snapshot `t2-dialog-open-snapshot.md`: `dialog "Select Form"` rendered inside the Web Client iframe.

## 3. Initial inherited dialog state (captured before any setting change)

Recorded from `t2-dialog-open-snapshot.md` and `t2-01-dialog-open-initial-state.png` (inspected):

- Filter textbox: empty (no value in snapshot line; visibly empty in screenshot), active/focused at open.
- Filter By: **`Caption`** (combobox f1e407 value "Caption").
- Case Sensitive: **unchecked** (checkbox f1e411, no checked state).
- Starts With: **unchecked** (checkbox f1e416, no checked state).
- Visible rows: the **unfiltered** list. The grid is sorted by Caption (↓). First visible row `XML to IDO Wizard / WSFormWizardNewDataXmlToIdo` is highlighted (selected, not activated). Scrollbar thumb near the top, so this is a truncated list. Visible rows include `WSFormBuilderWidgetRecordTemplate`, `WSFormBuilderWidgetMenuTemplate`, `WSFormBuilderWidgetListTemplate`, and others.
- Target row `FX_ComponentRecoveryLab02` was NOT among the rows rendered in this snapshot. The list is truncated (scrollbar not at the end, rendered rows only partly enumerated), so this does NOT establish that the target is absent from the full list. It is an observation about the unfiltered, partly rendered view only.

Differences from T1 (attempt 2) and R2: T1 recorded Select Form closed, so there was no prior dialog state to compare. The inherited Filter By value here (Caption) differs from EXP-033's inherited state (Name, with a stale row). This dialog was opened fresh by this task's single Open, so the difference reflects a fresh-open baseline, not the prior session's retained state. Not investigated further (out of scope).

## 4. Settings establishment (supported rendered controls only)

1. Click the Filter By dropdown trigger (`#combo-1145-trigger-picker`, ref f1e408). Dropdown expanded with options `Name` (f1e428), `Caption` (f1e429), `Caption & Name` (f1e430).
2. Click option `Name` (f1e428). Result: combobox reads **`Name`**. Verified by fresh snapshot `t2-after-filterby-snapshot.md` (combobox f1e407 value "Name").
3. Case Sensitive: already unchecked; NOT changed (no click).
4. Starts With: already unchecked; NOT changed (no click).

Final established settings: **Filter By = Name; Case Sensitive = unchecked; Starts With = unchecked.** Visually confirmed in `t2-02-dialog-settings-established-textbox-focused.png` (inspected): `Filter By: Name`, both checkbox boxes empty, OK/Cancel/Help unpressed.

## 5. Textbox resolution and focus (no text change)

- Fresh snapshot after the Filter By change: the textbox lost its active state (focus moved to the dropdown). Textbox ref f1e401.
- One caret click on the textbox (`#textfield-1143-inputEl`, current ref f1e401). This is a focus action only; no key was pressed and no text was changed.
- Verification `find "textbox [active]"`: one match — `textbox [active] [ref=f1e401]` inside `dialog "Select Form"`. Snapshot line: textbox, value empty.
- The textbox was NOT touched with Ctrl+A, Backspace, typing, fill, or paste.

## 6. Result rows at baseline

Grid is still the unfiltered list (empty filter). No row was interacted with. The pre-highlighted first row `XML to IDO Wizard` was never clicked by the worker. The one caret click was on the textbox, not on any row.

## 7. Actions performed in T2 (complete)

1. `browser_tabs list` (read-only).
2. `browser_find "Select Form"` — no matches (pre-open).
3. `browser_snapshot` untargeted → `t2-start-check-snapshot.md` (planned start check).
4. `browser_click` toolbar `Open` (f1e23) — the single initial ordinary Open.
5. `browser_find "Select Form"` — one match (dialog open).
6. `browser_snapshot` → `t2-dialog-open-snapshot.md`; read lines 84–357 (initial state).
7. `browser_take_screenshot` → `t2-01-dialog-open-initial-state.png` (inspected).
8. `browser_click` Filter By trigger (f1e408); `browser_find "Name"` (dropdown options listed).
9. `browser_click` option `Name` (f1e428).
10. `browser_snapshot` → `t2-after-filterby-snapshot.md`; grep for control states (Filter By = Name; checkboxes unchecked).
11. `browser_click` textbox (f1e401) — focus only.
12. `browser_find "textbox [active]"` — textbox active.
13. `browser_take_screenshot` → `t2-02-dialog-settings-established-textbox-focused.png` (inspected).

NOT performed: Ctrl+A, Backspace, any typed/fill/paste key, Enter, OK, Cancel, reopen, row click, JavaScript/evaluate, Save, Regenerate, unload, preference change, authentication, navigation, reload, or any Mongoose artifact mutation.

## 8. Counts and recovery accounting (EXP-033-R3, shared)

- Initial ordinary Open: **1 of 1 consumed** (T2). No further Open allowed.
- Reopens: 0. Cancels: 0 (Cancel is reserved for the final dismissal).
- Planned current-reference/focus checks in T2: start-check snapshot, post-Open snapshot, post-Filter-By snapshot, textbox focus click, textbox active find, screenshots. All were planned evidence/current-reference operations, NOT recovery.
- Ambiguity-recovery allowance: fresh-snapshot **0/1 used (1 remaining)**; corrected-inspection **0/1 used (1 remaining)**. T2 had no stale-ref error, no ambiguous read, and no retry. Nothing was relabelled as recovery.
- Tool note: none for T2 (the earlier screenshot timeout was in attempt 2 of T1 and is not charged).

## 9. Inherited Form/Designer state

- No Form or component was opened, closed, saved, created, or modified.
- Explorer folders remain collapsed; no Form panel is selected in the main region; no Designer tab exists in this session (single tab). Identical to the T1 (attempt 2) inherited state.

## 10. Verdict for T2

- Dialog open and rendered (one initial Open consumed).
- Initial state recorded (Filter By Caption, both checkboxes unchecked, empty textbox, unfiltered list).
- Settings established to required state (Filter By Name; Case Sensitive and Starts With unchecked).
- Textbox resolved and focused with current reference f1e401; text NOT changed.
- Target row NOT visible in the unfiltered view (expected).
- Dialog left OPEN for the next task. No Cancel, no reopen.
- Positive-control typing (25 ops) and probe typing (28 ops) NOT started in this task.

## Evidence files written in T2

- `t2-start-check-snapshot.md` — start-check snapshot (usable Web Client; Select Form closed before Open).
- `t2-dialog-open-snapshot.md` — post-Open dialog subtree (inherited Caption filter; unchecked settings; unfiltered rows).
- `t2-01-dialog-open-initial-state.png` — initial dialog screenshot (inspected).
- `t2-after-filterby-snapshot.md` — post-Filter-By-change snapshot (Name; checkboxes unchecked).
- `t2-02-dialog-settings-established-textbox-focused.png` — settings-established screenshot (inspected).
- `t2-dialog-baseline-notes.md` — this file.
