# EXP-020 — Button Caption Recovery Across Ordinary Form-Tab Close and Recent-Forms Reopen

Date: 2026-10-05
Environment: Mongoose 2026.09.08 demo (see `environments/current-environment.md`), config group `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`
Editing scope: User (`anton.ramos@3mworks.com.ph`)
Targets: `FX_ButtonCaptionLab01` (User-scoped classic BuildFromScratch Form), `FX_CaptionButton` (Button component)
Result: **BLOCKED at AC-4** (Caption mutation). AC-1–AC-3 passed; AC-5–AC-8 not reached.

## Objective

Observe the path-specific recovery of a saved Button Caption across an ordinary Web Designer
Form-tab close followed by Form-menu recent-forms reopen in the same Designer/session context,
without page reload or explicit unload. Distinguish this boundary from the already-established
full-page reload/reopen Button Caption evidence (EXP-003 / EXP-003-R2, separate discovery).

## Method

1. Read EXP-019-R2 (replay-verified wizard selection prefix), EXP-003/EXP-003-R2 (Button Caption
   across reload/reopen, separate), and the verified recipes
   `create-basic-form.md`, `add-component-from-toolbox.md`, `configure-basic-component.md`.
2. AC-1 preflight: live User-scope Designer confirmed; inherited empty Build-from-Scratch wizard
   page cancelled through its documented Yes/No confirmation after visibly verifying Name empty;
   `FX_ButtonCaptionLab01` proven absent via the Select Form Name filter (zero rows twice plus a
   positive control).
3. AC-2 creation: rendered Category `Classic` + Wizard `Build from Scratch` selections (EXP-019-R2
   prefix) followed by the verified basic-form suffix with Save Template unchecked. The end-to-end
   composition of prefix + suffix is **observed in this run only** — not a replay-verified combined
   procedure.
4. Component work: one Button placed from the Toolbox; Name set from `button1_USER` to
   `FX_CaptionButton` via the Properties grid Name row (double-click value cell → inline editor →
   type → Enter). AC-3 baseline captured from visible property surfaces.
5. AC-4 attempt: double-clicked the Caption value cell → the editor opened as a **combobox**
   (string-resource picker). Typed the literal `Button Caption Close Only` into the combobox text
   portion and pressed Enter once. The Caption row then displayed `ApplyFullTextIndexScriptQuestion`
   — an existing string-resource name, not the typed literal. No Save was performed; stopped per
   the AC-4 failure condition.

## AC-3 baseline (tied to FX_ButtonCaptionLab01, User scope, selected Button)

Recorded after Name assignment, before any Caption mutation. Actual displayed labels/values
(this build exposes composite Layout rows, not discrete Left/Top/Width/Height):

| Property | Visible value |
| --- | --- |
| Name | `FX_CaptionButton` |
| Type (display label) | `PushButton` (header suffix `(Button)`) |
| Unit | `Char` |
| Size | `14.25; 1.89` |
| Location | `6.66666666666667; 18.75` |
| Glue | blank |
| Containment | blank |
| Tab Order | `0` |
| Order | blank |
| Description | blank |
| From Device Master | `True` |
| Caption (pre-mutation) | blank (visible rendering only) |

Specialist-supported interpretation: the visible `Unit`/`Size`/`Location` rows satisfy the AC-3
geometry requirement for this build; no hidden Left/Top/Width/Height values were invented.

## Observations

- AC-1 passed: preflight, cancel confirmation, and absence proof as described (evidence 00–14).
- AC-2 passed: exactly one User-scoped `FX_ButtonCaptionLab01` created and opened clean
  (evidence 15–20). Composition of the EXP-019-R2 prefix with the older suffix observed once.
- AC-3 passed: exactly one Button (`button1_USER`, PushButton) placed and selected; Name renamed
  to `FX_CaptionButton`; grid value cell updated immediately; panel header lagged at
  `button1_USER (Button)` (known verified-recipe lag, not relied on); baseline table above recorded
  (evidence 21–28).
- AC-4 failed/blocked: the supported visible Caption value-cell editor renders as a string-resource
  combobox in this build. Committing the typed literal with Enter produced the Caption row value
  `ApplyFullTextIndexScriptQuestion` (a named string resource), i.e., the literal was
  rejected/transformed by this same visible editor. A search for the literal found no match
  anywhere in the Designer. No Save occurred after the Caption attempt.
- Dirty-state indicators at block time: Undo enabled / Redo disabled; Save button enabled.
- The unintended `ApplyFullTextIndexScriptQuestion` Caption value remains unsaved in the open
  session; no inference is made about serialization or persistence of it.

## Verification / acceptance status

- AC-1 passed; AC-2 passed; AC-3 passed (as defined above).
- AC-4 (Caption = exactly `Button Caption Close Only`): **failed/blocked** — specialist-defined
  failure condition triggered: the literal cannot be committed through the same visible Caption
  editor and is transformed into a named resource.
- AC-5 (single ordinary Save to clean), AC-6 (ordinary Form-tab close), AC-7 (recent-forms reopen),
  AC-8 (post-reopen comparison): **not reached** (blocked before Save and before the tested
  lifecycle boundary).

## Conclusion

EXP-020 does **not** establish Button Caption recovery across the ordinary Form-tab
close/recent-forms reopen boundary, because it blocked at AC-4 before any Save and before the
tested boundary. The combined creation composition (EXP-019-R2 selection prefix + basic-form
suffix) is classified **observed** only, never replay_verified. No claim is made about why the
Caption editor behaves as a string-resource combobox for this Button, nor about persistence,
cache, or unload behavior.

## Evidence

`evidence/EXP-020/00-preflight-designer-state.png` … `20-properties-panel-form.png` (AC-1: 00–04,
11–14; AC-2: 15–20); `21-recovery-form-tab-open.png`, `25-canvas-button-selected.png` (recovery
inspection: identity/scope/one selected Button); `26-name-renamed-FX_CaptionButton.png`,
`27-ac3-baseline-properties-top.png`, `28-ac3-baseline-layout-rows.png` (AC-3 baseline);
`29-caption-row-state.png` (Caption blank before commit);
`30-ac4-blocked-caption-resource.png` (full viewport: Form tab `FX_ButtonCaptionLab01`, User scope
bar, selected Button, Caption cell truncated `ApplyFullTextIndex:`, Undo/Save enabled),
`31-caption-row-ApplyFullTextIndexScriptQuestion.png` (Caption row crop, value truncated in-image;
full value `ApplyFullTextIndexScriptQuestion` established by the fresh accessibility snapshot).

## Risks / caveats

- The Caption combobox auto-matched/committed a string-resource name; the mechanism (first-list
  match vs. other) is unproven.
- The unintended unsaved Caption value persists only in the open session state at block time;
  nothing was Saved, so no durability claim applies.
- EXP-003/EXP-003-R2 establish Button Caption recovery across full-page reload/reopen separately;
  this experiment's boundary remains untested.
