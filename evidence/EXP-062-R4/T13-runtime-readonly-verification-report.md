# EXP-062-R4 T13 — FX_Items runtime read-only verification (cycle 18; COMPLETE for read-only scope; runtime Save disabled; no Import activated; Designer clean)

Run `R-20261012-003624-ROx0`, task T13, worker session `3a609535-e675-40c5-a195-7c4e6d3fa909`, task_message_id `ef02ed22-f743-4e90-9181-932f0887873a`. Date 2026-10-12.

## Route and identity

- Tabs: list before any selection (tab 0 Web Client current, URL carries `MGForm=FX_Items`; tab 1 Designer). Designer checked before leaving it (see below).
- Web Client state on arrival: Infor OS Portal page, Mongoose iframe, Explorer with no Form open (t13-02). Save disabled in the Explorer toolbar.
- Route to runtime: Web Client Form menu > **Open** (`menuitem Open`) > **Select Form** dialog. The dialog was pre-filtered to `FX_Items` and listed **one** entry (Caption `FX_Items`, Name `FX_Items`), so no similarly named Form was present (t13-03). OK clicked once. The Form opened in the Mongoose runtime.
- Runtime identity: tab `FX_Items` (heading and tab name), title bar `FX_Items` (t13-04, t13-05). Footer status `Description (Object 1 of 3)`.
- Not used: the Form menu's recent-list entry labelled `FX_Items` sitting directly under `IDOs` (it may be the IDO, not the Form); the direct `?MGForm=` URL (the brief disallows unreliable cold links).

## Record verification (native read-only grid navigation, row header clicks)

| Object | Item | Description | Cost | UoM | Import button | Picture region | Evidence |
|---|---|---|---|---|---|---|---|
| 1 of 3 | dumbbell | 45 pound iron | 45.00 | EA | visible, `Import` | empty (no element, no glyph, no image) | t13-04, t13-05 |
| 2 of 3 | eggs | cage free | 6.99 | DZ | visible, `Import` | empty | t13-06 |
| 3 of 3 | guitar | natural acoustic | 129.99 | EA | visible, `Import` | empty | t13-07 |

- All three original records were located and read (dumbbell, eggs, guitar). Nothing was typed, added, deleted or edited.
- Record 1 had the Description field focused with its text selected when the runtime opened. Nothing was typed into it.

## Import button and picture region

- Button: accessibility `button "Import"` present and enabled; visible as a blue `Import` button at the canvas position of the designer button. **Not clicked; no key sent; no file picker opened.**
- Picture region: in the runtime accessibility tree there is **no element** for the picture Static (no image, no broken-image text). Visually the region at the designer position (about screen x 530–690, y 290–450) is blank in all three records (t13-04, t13-06, t13-07). No broken-image glyph appeared at runtime.
- Interpretation: the Static renders blank at runtime for these records. This is a visual observation; the absence of a visible image does not establish whether a binary value exists or not. No data value was inferred.
- Difference: the **Designer** shows a broken-image glyph at the picture Static (t13-08, and earlier t12 captures); the **runtime** shows none. The Designer glyph is a design-time rendering; this observation does not establish an invalid binding.

## Save state

- Runtime Save: `button "Save" [disabled]` in t13-05 and in the read-only snapshots taken on each record (checked by find on records 2 and 3). Never clicked.
- No runtime prompt or dialog appeared at any point.

## Designer final read-only confirmation (tab 1, then back to tab 0)

- Designer: Save disabled, Undo disabled, Redo disabled, Regenerate Form disabled; tab `FX_Items`; footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` (find readback; t13-08 screenshot). Designer Form-level Layout Splitter Vertical, Position 11, Size 69; 21 (visible in t13-08).
- No Designer Save, no close/reopen, no edit in T13.
- The Designer's Variables tab (last visible in t13-08) still shows only Form - Persistent, Global - Persistent and Global - Temporary groups (waiver G8 context; not re-verified as a preservation claim).
- The Web Client was returned to tab 0 with the runtime FX_Items Form open.

## Action audit (T13, exact)

- Browser tab lists: 2 (start; before the final Designer check).
- Browser tab selects: 4 (tab 1, tab 0, tab 1, tab 0).
- Browser snapshots (accessibility, saved): 2 (`t13-01` Web Client initial; `t13-05` runtime initial). Additional page snapshots are auto-saved by the tool (`page-...yml`) and are not counted as worker-requested captures.
- Screenshots (PNG): 6 files saved (t13-02, t13-03, t13-04, t13-06, t13-07, t13-08). The first attempt at t13-02 timed out on "fonts loaded" (environment); it was retried once and succeeded. The failed attempt produced no file.
- Element clicks: 5 (Web Client Form menu; Open menu item; Select Form OK; record 2 row header; record 3 row header).
- Finds (targeted reads): 9.
- Keyboard: 0. Typing: 0. Mouse moves/wheels: 0.
- Designer Save: **0 in T13**. Cumulative Designer Saves: **2** (T9 intermediate, T12 final).
- Designer close/reopen: 0. Runtime Import activation: **0**. Runtime Save clicks: 0. Business record edits: 0. Record adds or deletes: 0.
- Component or string changes: 0. Metadata unloads: 0. Regenerate: 0. Delete Form Definition clicks: 0. Preference changes: 0. Browser JavaScript, console, network: 0.
- Reauthentication, refresh, restart: 0.

## Cumulative audit (T1–T13)

- Designer Save: 2 (T9 intermediate; T12 final). Final Save count for the experiment: 1 (T12); intermediate: 1 (T9). Total Designer Saves: 2.
- Form close/reopen (Designer): T10 (1 close, 1 reopen), T12 (1 close, 1 reopen). T13: 0.
- Components deleted: 1 (T5, FX_VarTestEdit). Components added: 1 (T6, FX_PictureStatic). Toolbox drops: 1 (T6).
- Strings created: 1 (T4). Event groups created: 1 (T7). Action rows created: 1 (T7).
- Runtime Import activations: 0 (cumulative). Runtime record edits: 0.
- Form width edits: 0. Metadata unloads: 0. Delete Form Definition clicks: 0. Trash clicks: 1 (T5).

## Acceptance checks (T13 scope)

- AC-12 (runtime read-only): **substantially met with limitations.** Runtime Form identity FX_Items (T13-04, T13-05); three original records visible with readable fields (dumbbell 45 pound iron 45.00 EA; eggs cage free 6.99 DZ; guitar natural acoustic 129.99 EA); visible Import button captioned Import (not activated); picture region blank (visual; no glyph, no image element); runtime Save disabled (throughout); no prompt; no record modified. **Limitation:** the picture region is observed visually and in the accessibility tree only; whether a binary value exists was not verified by any native read-only surface; the three records were located through row navigation, not a separate filter.
- AC-1 to AC-11 and AC-13: carried from T12 (Designer clean, saved definition recovered). Final Designer state re-confirmed in T13.

## What each decisive screenshot shows and does NOT prove

- `t13-03`: the Select Form dialog filtered to FX_Items with one entry. Proves the form choice; does not prove the runtime Form (shown by t13-04).
- `t13-04`: runtime Form titled FX_Items; record 1 (dumbbell); Import button; blank picture area. Proves the visible state at open; does not prove the binary content.
- `t13-06` / `t13-07`: record 2 (eggs) and record 3 (guitar), Import button, blank picture area. Prove the visible record values and the blank region for those records only.
- `t13-05` (accessibility): runtime Save disabled; three rows; picture element absent. Proves the disabled Save state and the accessible structure at open.
- `t13-08`: Designer clean state (Save and Undo disabled; User scope). Proves the Designer state at that moment; does not prove the saved definition (verified in T12).

## Evidence files (T13, worker-written, under evidence/EXP-062-R4/)

- `T13-runtime-readonly-verification-report.md` (this report)
- Snapshots (YAML): `t13-01-webclient-initial-snapshot.yml`, `t13-05-runtime-initial-snapshot.yml`
- Screenshots (PNG): `t13-02-webclient-initial-state.png`, `t13-03-open-dialog.png`, `t13-04-runtime-form-initial.png`, `t13-06-record-2-eggs.png`, `t13-07-record-3-guitar.png`, `t13-08-designer-final-clean-state.png`

## Knowledge state

- Runtime FX_Items Form opens through Form > Open > Select Form (single FX_Items entry): observed.
- Three original records (dumbbell, eggs, guitar) readable with their values: observed.
- Import button present and captioned Import: observed (not activated).
- Picture region blank at runtime for all three records (visual and accessibility): observed; whether a binary value exists: unresolved.
- Runtime Save disabled during inspection: observed.
- Designer clean after reopen and T13 check (Save and Undo disabled): observed.
- Broken-image glyph appears in the Designer only, not at runtime: observed; cause unresolved.
- Nothing is replay_verified.

## Open questions

- Whether the picture Static's empty runtime rendering corresponds to no stored binary value, or to a render limitation, cannot be settled by visual inspection; any further check needs a separate, approved read-only route.
- FX_VarTest / Form - Temporary (waiver G8) remains unverified as preserved; unchanged by T13.
- The Designer broken-image glyph cause; whether a Save alone refreshes the component selector; the T8 tab-count discrepancy.
