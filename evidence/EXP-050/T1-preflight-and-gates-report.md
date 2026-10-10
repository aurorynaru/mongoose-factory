# EXP-050 T1 — Read-only preflight and gates (evidence report)

Run: `R-20261011-034347-PXmt` · experiment EXP-050 · cycle 0 · task T1
Worker session: `ee68bc3c-c585-4d42-8b66-0d0e1c2a2641` · task_message_id `22c7ea86-aa03-4a0c-b02c-bad57c40eb1b`
Date: 2026-10-11 (system date). Configuration `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`. Signed-in user shown in identity bar: `anton.ramos@3mworks.com.ph`.
Record: `experiments/EXP-050-hello-world-part-2-create-fx-items-multi-view-form.md`.

No creation, wizard, Finish, Save, caption-string creation, prompt answer, check-in or check-out occurred in T1.

## Browser state at start

- Tab 0: Designer (`designer/default.aspx`), vendor `IdoPropertyClasses` design view (tab heading `Property Classes`). Save and Undo disabled. Status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`. No dialog.
- Tab 1: Web Client (`mingle-portal ... favoriteContext=SqlColumns`). Identity bar `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`. No sign-in or configuration prompt. No portal banner visible. Runtime tabs open: IDO Projects, Export/Import Strings, IDOs, IDO Properties (link icon), Sql Tables, Sql Columns (active). Sql Columns showed an FX_UM row with its Column Name combobox in an active-editor state (left from before T1; not touched).

## Gate and read results

| # | Surface | Action | Settled result | Evidence |
| --- | --- | --- | --- | --- |
| G1 | Web Client Select Form | Positive control `FX_UMs`, Filter By Name, Case Sensitive and Starts With unchecked, key-event typing, 2 s settle | One row: `FX_UMs` / `FX_UMs` | `t1-02-select-form-positive-control-FX_UMs-settled.png` |
| G2 | Web Client Select Form | Target `FX_Items` (exact), same settings, key-event typing, 2 s settle | Zero rows (grid empty) | `t1-03-select-form-target-FX_Items-exact-settled-zero-rows.png` |
| G3 | Web Client Select Form | Cancel | Dialog closed; no row activated; no Form opened | (snapshot only) |
| R1 | Web Client IDOs | One Filter in Place query, IDO Name `FX_Items` (retained criterion cleared, retyped, F4 once) | One IDO: `FX_Items`, project `FX_HelloWorldProject01`, alias `fxitms` (Primary Base, Inner), Revision Num 2, Revision Date 10/10/2026, Locked By blank, Access As G6R, Check Out enabled, Undo Check Out disabled, Save disabled. Status `IDO Name (IDOs 1 of 1)` | `t1-04` (before query), `t1-05` (settled) |
| R2 | Web Client IDO Properties (linked to FX_Items) | Read; 11 rows | Rows FX_Item, FX_Description, FX_Cost, FX_UM listed in sequence 1–4 above seven system rows (CreatedBy, UpdatedBy, CreateDate, RecordDate, RowPointer, NoteExistsFlag, InWorkflow) | `t1-06` (FX_Item detail), `t1-07` (FX_Cost), `t1-08` (FX_UM) |
| R3 | Web Client IDO Properties, FX_Item detail | Read | Bound to Column; Column FX_Item; Property Class FX_ItemBase; String 20; nvarchar; `*Required` checked; Label `FX_sItem`; sequence 1 | `t1-06` |
| R4 | Web Client IDO Properties, FX_Description detail | Read from grid row text (no screenshot of detail) | Bound to Column; Column FX_Description; Property Class blank; String 150; nvarchar; Label `FX_sDescription`; sequence 2 | accessibility row text in the T1 snapshot only |
| R5 | Web Client IDO Properties, FX_Cost detail | Row selected | Bound to Column; Column FX_Cost; Property Class FX_Cost; Decimal 18; Decimal Position 2; Default 0; decimal; Label `FX_sCost`; Required unchecked; sequence 3 | `t1-07` |
| R6 | Web Client IDO Properties, FX_UM detail | Row selected | Bound to Column; Column FX_UM; Property Class FX_UM; String 10; nvarchar; Label `FX_sUM`; Required unchecked; Domain IDO `FX_UMs`; Domain Property `FX_UM`; Domain List Properties `FX_Description`; sequence 4 | `t1-08` |
| S1 | Designer Edit > String (Global Objects) | Strings filter `FX_sItem` | Zero rows | `t1-11-strings-filter-FX_sItem-settled.png` |
| S2 | same | Strings filter `FX_sCost` | Zero rows | `t1-12-strings-filter-FX_sCost-settled.png` |
| S3 | same | Strings filter `FX_sDescription`, row selected | One row; String Value `Description`; Version `User version for user an…` | `t1-13` (filter), `t1-14` (selected value) |
| S4 | same | Strings filter `FX_sUM`, row selected | One row; String Value `Unit of Measure`; Version `User version for user an…` | `t1-15` (selected value) |
| S5 | same | Positive control filter `Collection Name` | One row: `Collection Name` | `t1-16-strings-positive-control-Collection-Name-settled.png` |
| S6 | same | Cancel | Dialog closed; Designer Save and Undo disabled; no dialog | `t1-17-designer-after-global-objects-cancel.png` |

Designer preflight screenshot before any Edit action: `t1-09-designer-preflight-vendor-IdoPropertyClasses-save-disabled.png`. Global Objects opening state: `t1-10-global-objects-strings-dialog-initial.png`. Web Client preflight: `t1-01-webclient-preflight-initial-state.png`.

## Interpretation and limits

- The G1/G2 gate shows the filter executed (positive control returned its row). Case Sensitive and Starts With were unchecked, which is the case-insensitive, non-prefix setting shown in the dialog. The dialog does not show scope, a total count, or whether the match is substring or exact. Zero rows is therefore a result for the visible inventory only, not a database query and not proof of absence in other scopes.
- The Global Objects Strings list shows no scope column. The `FX_sItem` and `FX_sCost` zero-row results are for the visible Global Objects list only. Filter match mode is not shown.
- The red font on the FX_sDescription, FX_sUM and `Collection Name` rows is the same style. It does not distinguish FX_ strings, and its meaning is not established.
- After the FX_sUM row was selected, the Properties pane kept showing that row when the list was refiltered for the positive control. This is a display state only; nothing was edited.
- R4 (FX_Description) was read from accessibility row text, not from a selected-row screenshot.
- `t1-06` is named "four-business-properties" but shows only the FX_Item detail. Its filename overstates its content.
- The Sql Columns FX_UM editor was left in its pre-existing active state. Not changed by T1.

## Counts (T1)

| Operation | Count |
| --- | --- |
| Wizard opened | 0 |
| Finish / Create Form response / Form created | 0 / 0 / 0 |
| Save (any) | 0 |
| New / Delete / Regenerate / Copy | 0 |
| String created, edited or prompt answered (Yes/No) | 0 |
| Caption ellipsis dialog opened | 0 |
| Check In / Check Out / Undo Check Out | 0 |
| IDO, property class, SQL, FX_UMs or string edits | 0 |
| Select Form opened / Cancelled / OK | 1 / 1 / 0 |
| Select Form key-event filter entries | 2 (`FX_UMs`, `FX_Items`), with Control+a before each |
| Global Objects opened / Cancel / OK | 1 / 1 / 0 |
| Global Objects filter entries (key events) | 5 (`FX_sItem`, `FX_sCost`, `FX_sDescription`, `FX_sUM`, `Collection Name`) |
| Global Objects row selections (read-only) | 2 (`FX_sDescription`, `FX_sUM`) |
| IDO Filter in Place opens / criterion entries / F4 | 1 / 1 / 1 |
| IDO Properties row selections (read-only) | 2 (FX_Cost, FX_UM) |
| Runtime tab selections (IDOs, IDO Properties) | 1 / 1 |
| Browser tab selections | 2 (to tab 1, back to tab 0) |
| Browser screenshots (worker-saved PNG) | 17 |
| Ref-not-found errors / browser timeouts | 0 / 0 |
| Fresh-snapshot recovery attempts | 0 |
| Browser-native dialogs / in-page prompts answered | 0 / 0 |
| Portal banner dismissals | 0 (no banner seen) |
| Login, logout, reauthentication, refresh, restart | 0 |
| JavaScript or evaluate tools by the worker | 0 (the "Ran Playwright code" text is tool-generated) |

## Final browser state (T1)

- Tab 0 (Designer): vendor `IdoPropertyClasses` design view, tab heading `Property Classes`. Save and Undo disabled. Global Objects closed. No in-page dialog. Scope User.
- Tab 1 (Web Client): IDO Properties runtime tab selected (linked to FX_Items), FX_UM row selected. The IDOs tab keeps the FX_Items criterion from R1. No in-page dialog. Select Form closed.
- No browser-native dialog. No unsaved-change prompt observed.

## Acceptance status (T1 only)

| AC | T1 status | Basis | Limit |
| --- | --- | --- | --- |
| AC-1 | Partial | Identity bars (`t1-01`, `t1-04`), Designer User scope (`t1-09`, `t1-17`), clean Designer, IDO and four property reads (`t1-05`–`t1-08`) | Site Developer capability and the About text not re-observed. Designer console not checked in T1. |
| AC-2 | PASS for the visible inventory (T1 gate) | G1 (`t1-02`) and G2 (`t1-03`) | Pre-creation repeat required in the creation task before Finish. No scope column or total count. Single session. |
| AC-5 (pre-check only) | Pre-check PASS | S1/S2 zero rows for `FX_sItem` and `FX_sCost` (`t1-11`, `t1-12`) | No creation performed in T1. Visible Global Objects list only. |
| AC-6 (pre-check only) | Read PASS | S3/S4 (`t1-14`, `t1-15`): `FX_sDescription` = `Description`; `FX_sUM` = `Unit of Measure` | Read only; no edit. Global Objects view only, not a database read. |
| AC-3 to AC-4, AC-7 to AC-11 | Not performed | — | Creation not authorised in T1. |

## Unresolved observations

- Filter match mode (substring or exact) for the Select Form and Global Objects filters is not stated by either UI.
- Scope completeness of the Global Objects Strings list is not shown.
- The meaning of the red row font in the Strings list is not established.
- The IDOs tab still holds the FX_Items criterion from T1 (retained state).
- Site Developer capability is still not verified.
