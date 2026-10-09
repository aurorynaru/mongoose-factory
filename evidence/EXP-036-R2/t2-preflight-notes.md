# EXP-036-R2 — T2 browser preflight notes

Worker session `83437d74-e00d-4527-9579-fbd0bf09b67e` · task_message_id `9fc869cc-9912-4154-8c2c-88caca84d467` · Run R-20261010-005147-a4PQ · Cycle 1 · Task T2
Scope of T2: preflight and target-inventory verification only. No Form created, no Button placed, no Save, no close, no reopen, no Caption step.

## Gates

| Gate | Result | Basis |
|---|---|---|
| 1. `browser_mouse_click_xy` available | **PASS (listing only)** | Present in the browser tool inventory for this session. No test click issued. |
| 2. Usable Designer present | **Not present at start; one launch performed** | Tab list at start: one tab (Web Client, `Mongoose`). No `WSWebClient/designer` tab. One permitted launch made (see Actions). After launch: exactly one Designer tab. |
| 3. Session usable, no sign-in or configuration prompt | **PASS** | Web Client identity bar `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`, DEM badge, menus and toolbar present (`t2-02`). No sign-in or configuration screen. |
| 4. Designer in User scope, visibly clean | **PASS** | Scope dialog showed Scope = User and User = anton.ramos@3mworks.com.ph; OK once. Footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`. Save, Regenerate Form, Undo, Redo disabled. No Form tab, blank canvas, Form Properties empty (`t2-03`, `t2-08`). |
| 5. Inherited Forms left untouched | **PASS** | No Form tab existed at the start, so `FX_SingleButtonLab01` from EXP-036 was not open in this Designer. Nothing was closed, saved or changed. |
| 6. Positive control `FX_ComponentRecoveryLab02` | **PASS** | Name filter, Case Sensitive and Starts With unchecked. Textbox accessibility value `FX_ComponentRecoveryLab02`; one table, one row, both gridcells `FX_ComponentRecoveryLab02`; Filter By `Name` (`t2-05`; find output). |
| 7. Target `FX_SingleButtonLab02` absent in observed list | **PASS (rendered Select Form only)** | Same filter settings. Textbox accessibility value `FX_SingleButtonLab02`; grid `f1e93` with no row children; no data row visible (`t2-06`). Filter is case-insensitive (Case Sensitive unchecked), so zero rows means zero exact and case-insensitive matches in the observed list. Database-wide absence is **not** claimed. |
| 8. Select Form closed by Cancel | **PASS** | One Cancel click on the dialog's Cancel control. No row activated. `find "Select Form"` returns no matches afterward (`t2-07`). |
| 9. Designer unaffected by the Select Form step | **PASS** | Designer tab re-selected and re-captured: still clean, no Form tab, User scope footer (`t2-08`). |

**Decision: all gates pass. Creation of `FX_SingleButtonLab02` is not blocked by identity or inventory results in this preflight.** Creation is not performed in T2 (per the task).

## Actions performed (T2, in order)

1. Tab list (read-only): one tab, Web Client.
2. Fresh untargeted snapshot of the Web Client (planned start-of-task read, not recovery).
3. Screenshot `t2-01-preflight-webclient-viewport.png` (read-only). Portal notification banner (`The DistributionIFSContactUs group ...`) was covering the menu bar, identity bar and top of the toolbar, including the Designer controls.
4. One click on the banner's own close control (`Close notification`). This is portal chrome, not a Mongoose object, and is the recipe precondition for the launch. Screenshot `t2-02-after-banner-close-viewport.png` confirmed the banner gone and the menu bar visible.
5. Targeted find `Designer` (read-only) to get current refs. Two toolbar Designer controls exist; the one EXP-036 launched successfully (`f1e39`) was used.
6. **Designer launch: one click** on `f1e39`. A new tab opened at `WSWebClient/designer/Default.aspx` (no `MGForm` parameter). Launch count 1 of 1.
7. Tab select index 1 (Designer), then fresh untargeted snapshot (planned start-of-task read).
8. Scope dialog "Identify Your Editing Scope" showed Scope = User and User = anton.ramos@3mworks.com.ph. **One click on OK.**
9. Screenshot `t2-03-designer-settled-viewport.png` (read-only) confirmed the settled Designer.
10. Tab select index 0 (Web Client), then fresh untargeted snapshot (planned start-of-task read).
11. **One click on the Web Client Open toolbar control** (`f1e23`). Select Form opened.
12. Screenshot `t2-04-select-form-opened-viewport.png`: Filter empty, Filter By `Caption`, both checkboxes unchecked, full list.
13. Targeted find `Filter By` (read-only), then **one click** on the Filter By trigger.
14. Targeted find `Name` (read-only), then **one click** on the rendered `Name` option. Result: Filter By = `Name`.
15. Targeted find `Filter:` (read-only), then **one click** on the Filter textbox. Focus confirmed by find `\[active\]` showing the textbox `[active]` and combobox `Name`.
16. Positive control: `Control+a` (1), `Backspace` (1), then 25 printable keys for `FX_ComponentRecoveryLab02`: `F X _ C o m p o n e n t R e c o v e r y L a b 0 2`. **Deviation:** the first two printable presses (`F`, `X`) were sent as two calls in one batch rather than strictly one at a time. Both returned without error; the resulting text matches the target. Recorded here as a process deviation; not a recovery step.
17. Wait 3 s; screenshot `t2-05-positive-control-settled-viewport.png`; find `FX_ComponentRecoveryLab02` (read-only): exactly one row, textbox value exact.
18. Target: `Control+a` (1), `Backspace` (1), then 20 printable keys for `FX_SingleButtonLab02`: `F X _ S i n g l e B u t t o n L a b 0 2`. All sent one at a time, with no errors.
19. Wait 3 s; screenshot `t2-06-target-query-settled-viewport.png`; find `FX_SingleButtonLab02` (read-only): grid with no row children; textbox value exact.
20. Targeted find `Cancel`, then **one click** on the dialog's Cancel control (`f1e422`). No row activated.
21. Verification: find `Select Form` (no matches); screenshot `t2-07-after-cancel-webclient-viewport.png` (Web Client usable, no dialog).
22. Tab select index 1 (Designer), screenshot `t2-08-designer-final-preflight-viewport.png` (Designer clean, User scope, no Form tab).

## Action counts (T2)

| Counter | Count |
|---|---|
| Designer launch | **1** (cumulative 1 of 1; permitted maximum) |
| Scope dialog OK | 1 |
| Select Form open | 1 (Web Client Open, one) |
| Filter By change | 1 (Caption → Name) |
| Filter textbox focus click | 1 |
| Control+a | 2 (one per filter string) |
| Backspace | 2 (one per filter string) |
| Printable key presses | 45 (positive control 25; target 20) |
| Target printable keys | 20 |
| Select Form row activation | 0 |
| Select Form OK | 0 |
| Select Form Cancel | 1 |
| Banner close (portal chrome) | 1 |
| Form create | 0 |
| Component placement | 0 |
| Property edit | 0 |
| Save / Regenerate | 0 / 0 |
| Form-tab close / reopen | 0 / 0 |
| Unload / cold MGForm navigation | 0 / 0 |
| JavaScript / evaluate | 0 |
| Authentication / reauthentication | 0 |
| Tab selects | 3 (index 1, index 0, index 1) |
| Targeted finds (refs only, not recovery) | 6 |

## Recovery allowance

- Fresh untargeted snapshot: **0 used / 1 remaining** (the snapshots taken were planned start-of-task reads).
- Corrected visible inspection: **0 used / 1 remaining**.
- No `Ref ... not found` error occurred. No timeout occurred. No ambiguous read occurred.

## Limitations

- The positive control and the target were checked through the Select Form Name filter, which is a rendered UI result. This does not prove database-wide absence or inventory completeness.
- The Select Form was opened from the Web Client's Open control, not from a Designer control. EXP-033-R4, EXP-035-R2 and EXP-036 all used this path. The brief's step 4 wording says "from the Designer"; the coordinator should confirm this route is acceptable.
- The Designer tab was launched in this task; no earlier Designer existed. The launch control was the one EXP-036 used.
- Caption step not performed (T2 scope).
- Process deviation: two printable key presses (`F`, `X`) of the positive control were sent in one batch.
- Tool-generated files under `evidence/playwright/` (gitignored, not worker-authored) were written by the browser tool on each call and were not deleted.

## Open existing state at the end of T2

- Web Client tab (index 0): Explorer, no Select Form dialog, no Form open.
- Designer tab (index 1): selected, clean, no Form tab, User scope footer, no dialog.
- Existing Forms left open or untouched: none were opened, closed, or changed by T2. EXP-036's `FX_SingleButtonLab01` was not present in this Designer.
