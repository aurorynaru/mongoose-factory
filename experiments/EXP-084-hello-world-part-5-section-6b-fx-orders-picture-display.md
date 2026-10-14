# EXP-084 — Hello World Part 5 Section 6b: display the item picture on the FX_Orders Form

**CURRENT STATUS (after T8, 2026-10-14): FINAL DOCUMENTATION AND EVIDENCE RECONCILIATION COMPLETE (zero browser calls; zero Mongoose changes; cumulative browser calls 199 = T1 45, T2 23, T3 62, T4 13, T5 28, T6 28, T7 0, T8 0). Final report: `evidence/EXP-084/T8-final-acceptance-report.md`. Recommendation to the coordinator: **ACCEPTED AS OBSERVED** (same-session UI level; AC-5 passes at the observed visual level per the coordinator's disposition; byte identity of the pictures is NOT claimed). The EXP-063-R2 reopen eggs screenshot discrepancy (`t7-04` shows a shiba) is preserved as unresolved and is not represented as an EXP-084 defect. Genuine gaps: server-side or database persistence not verified; byte-level picture identity not established; Designer canvas picture not captured; caption expression `C(FX_ItmsPictureStatic)` refers to a deleted component (left unchanged). Classification: observed only; not replay_verified; no durability claim. Final state: Designer FX_Orders open, clean, User scope, 30 components (last verified in T5); runtime closed; Web Client on its pre-existing IDO Properties form.

**Earlier status (after T7, 2026-10-14): DOCUMENTATION-ONLY IMAGE-IDENTITY RECONCILIATION COMPLETE (zero browser calls; zero Mongoose changes; cumulative browser calls remain 199). The order 1 (dumbbell) runtime picture is visually consistent with `assets/dumbbell.png`. The order 2 (eggs) runtime picture is visually consistent with `assets/eggs.png` and with the EXP-063-R2 post-upload eggs capture; byte-level identity is NOT established. The EXP-063-R2 reopen capture of the eggs row (`t7-04`) shows a shiba-style dog, contradicting the T7/T8 claim of a match; this conflict is unresolved. **AC-5 is NOT yet passed**: the query, fields, picture visibility and absence of visible caption or colon are observed; picture identity for the eggs order is unresolved at byte level. Comparison note: `evidence/EXP-084/T7-picture-identity-comparison-note.md`. See the T7 section at the end.

**Earlier status (after T6, 2026-10-14): AC-5 RUNTIME CHECKPOINT COMPLETE (read-only; one runtime open, one Filter in Place switch, one F4, one runtime close; no prompt; nothing typed, chosen, created or saved). The Select Form query returned **two orders**. **Order 1** (row cell 1): 1 / FX001 / Factory test one / 1 Factory Street / dumbbell / 45 pound iron / 45.00 / 2 / 90.00, picture **a sitting golden-retriever-style puppy, visible**, no visible caption, no visible colon. **Order 2** (row cell 2): 2 / FX002 / Factory test two / 2 Factory Street / eggs / cage free / 6.99 / 1 / 6.99, picture **a greyish-tan animal-like face with two dark eyes and four small detached fragments, visible**; this does **not** clearly match the kickoff's "small grey-faced figure" or the EXP-063-R2 "faint pale sketch" asset description (documented as a mismatch, not forced). On both picture elements the accessibility name is `C(FX_ItmsPictureStatic)` with no visible text. The Designer was not touched in T6 (clean and open after T5). Same session only; not replay_verified. See the T6 section at the end.

**Earlier status (after T5, 2026-10-14): AC-4 CLEAN CLOSE AND REOPEN COMPLETE (one close, one reopen; no prompt; no second Save). The reopened FX_Orders is User scope, clean (Save and Undo disabled), with 30 components; FX_ItmsPictureStatic is absent; FX_ItmsPictureGridCol is unchanged (Caption blank, binding `object.FX_ItmsPicture`, Size `10; 0`, Location `0; 0`). FX_ItmsPictureEdit reads back as **Type Static** in the Components grid (row `FX_ItmsPictureEdit Static object.FX_ItmsPicture 1 30`), the Properties header (`FX_ItmsPictureEdit (Static)`) and Design > Type; binding `object.FX_ItmsPicture`; Size `37.05; 9`; Location `21.55; 23.75`; No Colon **True**; Image and Text **ImageOnly**; Caption `C(FX_ItmsPictureStatic)`. **The Type disagreement recorded after the T4 Save (grid and header still read Edit) is resolved in the reopened client.** Same session only: the reopen is a same-session weak boundary (it may reflect client-side caching), not a database or server-side replay. Runtime NOT opened in T5. Classification: **observed only**; not replay_verified; no durability claim. See the T5 section at the end.

**Earlier status (after T4, 2026-10-14): ONE DESIGNER SAVE INVOKED (once; not retried). NATIVE RESPONSE: a toast titled `Save`, text `Form [FX_Orders] and global object(s) were saved.` (the wording names the Form, unlike T3's wording). AFTER THE SAVE: Save and Undo **disabled** (clean); FX_Orders open and selected; footer `ScopeType: User`; 30 component rows; FX_ItmsPictureStatic absent; no dialog. The Properties panel reads FX_ItmsPictureEdit Type **Static**, binding `object.FX_ItmsPicture`, Size `37.05; 9`, Location `21.55; 23.75`, No Colon **True**, Image and Text **ImageOnly**, Caption `C(FX_ItmsPictureStatic)` (all unchanged from the pre-Save check). **Unresolved:** the Components-grid row for FX_ItmsPictureEdit still shows Type `Edit` and the Properties header still reads `FX_ItmsPictureEdit (Edit)` after the Save. Form NOT closed or reopened; the runtime was NOT opened. Classification: **observed only**; same session; not replay_verified; no database-durability claim. See the T4 section at the end.**

**Earlier status (after T3, 2026-10-14): AC-3 CONFIGURATION CHECKPOINT COMPLETE, FORM DIRTY, OPEN, NOT SAVED. On FX_ItmsPictureEdit, four committed changes, each read back after reselecting the component: Type Edit to **Static** (binding `object.FX_ItmsPicture` kept); Size `37.05; 2` to **`37.05; 9`** (Width 37.05 and Location `21.55; 23.75` unchanged); **No Colon True**; Image and Text Inherit to **ImageOnly**. Caption `C(FX_ItmsPictureStatic)` unchanged; name unchanged. Open issue: the Components grid's Type column still shows `Edit` for this row after the change, while the Properties panel reads Static (unresolved until the Save and reopen). Zero Designer Save in T3. See the T3 section at the end of this record. Classification: **observed only**; same session; not replay_verified.**

**Earlier status (after T2, 2026-10-14): AC-2 DELETION CHECKPOINT COMPLETE. FX_ItmsPictureStatic DELETED ONCE through the Components-grid trash button after a confirmation that named only FX_ItmsPictureStatic. The Components tree now has 30 components. FX_ItmsPictureEdit (Type still Edit, binding `object.FX_ItmsPicture`, Size `37.05; 2`, Location `21.55; 23.75`, Tab 30) and FX_ItmsPictureGridCol (Binding `object.FX_ItmsPicture`, Size `10; 0`, Location `0; 0`, Tab 10) match their pre-delete values. The Form is DIRTY (Save and Undo enabled), OPEN, NOT SAVED, NOT CLOSED. No Designer Save, no retype, no Size, No Colon or Image Only change in T2. Classification: **observed only**; same session; not replay_verified; no database-durability claim. See the T2 section at the end of this record.**

**Earlier status (after T1, 2026-10-14): READ-ONLY PREFLIGHT AND BASELINE COMPLETE. STOPPED BEFORE THE DELETION. NO MUTATION MADE.** The session was usable with no expiry, sign-in, banner or native dialog. The Designer is FX_Orders, `ScopeType: User`, clean (Save, Undo and Regenerate Form disabled), with no dialog open. The Components grid lists 31 components. FX_ItmsPictureStatic is Static with a blank Caption, Binding Type None and no binding. FX_ItmsPictureEdit is Edit, bound to `object.FX_ItmsPicture`, with Caption `C(FX_ItmsPictureStatic)`. The Formatting group with `Image and Text` (value `Inherit`) is present on both components. FX_ItmsPictureEdit has no No Colon row (the row exists only on the Static). AC-1 is supported at the observed, same-session UI level, with the disclosed omissions listed below. Zero Designer Save, zero deletion, zero type, size or No Colon change, zero runtime action. Classification: **observed only**; not replay_verified; no database-durability claim.

## Run identity

- Experiment EXP-084, cycle 0, task **T1** (bounded instruction: read-only preflight and baseline; stop before the deletion). Run `R-20261014-124924-3sU9`; worker session `c2479711-679d-48df-8757-f539531b86fe`; task_message_id `c0647690-0fbe-470d-a1cd-6ec36db0933b`.
- Date 2026-10-14. LEARNING MODE. FX_-only scope extension (AGENTS.md, 2026-10-10). Editing scope **User** (Form only). Target Form: FX_Orders.
- Brief commits (session-start git status, not re-verified; no shell in this task): `a04c39b` (EXP-084: approved brief) and `5c2ef2a` (EXP-084: draft brief).
- Record provenance: this record did not exist at T1 start (the Read of `experiments/EXP-084-…md` returned "does not exist"). Created by the T1 worker at the brief's path.
- Evidence directory: `evidence/EXP-084/`.
- Identity bar: Mongoose configuration `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`. The operator account is not recorded here (it is shown in the Designer footer as `ScopeName: <operator account>`).

## Objective (T1 scope)

Read the sources; list tabs; select the Designer; confirm the session and that the Designer is in User scope and clean; open or use FX_Orders; record its identity, scope and Components count; record every shown value of FX_ItmsPictureStatic and FX_ItmsPictureEdit (Design, Data Source including Formatting > Image and Text, Layout Size and Location, Miscellaneous); record the Layout of FX_DerOrderTotalEdit; leave FX_Orders open and clean; create this record and its evidence. **Stop before the deletion.**

Later tasks (not authorized in T1): the Components-grid deletion of FX_ItmsPictureStatic; the Type, Size, No Colon and Image Only changes on FX_ItmsPictureEdit; one Designer Save; one close and reopen; the Web Client read-only runtime query with one F4.

## Sources reviewed (before browser interaction)

- `AGENTS.md` (full: LEARNING MODE; FX_ scope extension; safety; experiment rules; browser automation, recovery and evidence rules).
- `docs/mongoose/transcripts/hello-world-pt5.md` **Section 6** (lines 168–185, 08:15–10:38), including its boundary note at line 184 ("Do not delete a component by inferred identity"; Regenerate Form is not authorized here). Trust: unverified transcript. Narrated steps 3 and 7 are the adapted picture steps; steps 4–6 and 8–9 (caption strings, Regenerate Form, Save and reopen) belong to later tasks.
- `experiments/EXP-083-hello-world-part-5-section-6a-fx-orders-strings-and-runtime-check.md`: read lines 1–508 of 927 (status block; T1 gate; T2–T4 summaries). Not read in full: the T5 runtime section and the T6 close. The T5 runtime pattern (Filter in Place on reopen; blank criteria; one F4; two rows; add-mode placeholder) was checked by grep only.
- `experiments/EXP-082-hello-world-part-5-section-5-rebuild-fx-orders-form.md`: grep, plus the T8 table of the 31 components (lines 449–488). The Form menu recent-forms route (T1) and the T9 reopen were read by grep.
- `experiments/EXP-062-R4-hello-world-part-4-section-4-picture-import-ui.md`: grep only. Used for: the Components-grid trash-button route (tooltip `Delete`; confirmation text `Are you sure you want to delete <name> and all the components it contains?`; OK once; no Enter); Layout readbacks (Size = Width; Height; Location = Top; Left); the Static bound to a Binary property (`object.FX_Picture`, Type Property) with No Colon True. Those values are cited, not re-read, for the EXP-084 components.
- `experiments/EXP-063-R2-hello-world-part-4-section-5-import-item-pictures.md`: grep only. Used for the item pictures (see the picture-description note under Open questions).
- Not read: `tools/` (intentionally unreadable); the secrets file; no shell or git command.

## Browser preflight and session (AC-1)

| Step | Observed | Evidence |
|---|---|---|
| `browser_tabs` list (first browser call; before any selection) | Tab 0 (current): Infor Mongoose Application Development Framework (Designer, `mode=designer`, `MGForm=FX_Orders` in the URL). Tab 1: Mongoose Web Client (`favoriteContext=IdoProperties`) | tool output |
| Tab 0 selected (after the list) | Succeeded | tool output |
| Fresh untargeted snapshot (start) | FX_Orders tab selected (`closable FX_Orders`); Save, Regenerate Form, Undo and Redo disabled; footer `ScopeType: User`; no dialog; Components tab selected with the tree expanded | `snapshot-t1-01-designer-start.yml` |
| Session | Usable. No "Session Expired" modal, no Infor sign-in page, no `portal-notification` banner, no native dialog. Re-login count **0** | snapshot; screenshots |
| Tab 1 (Web Client) | Listed only. Not selected, clicked or captured in T1 | — |
| Designer scope | Footer `[ ScopeType: User / ScopeName: <operator account> ]` | screenshots |
| Designer clean state | Save disabled; Undo disabled; Regenerate Form disabled (re-checked at the end of T1 with a find) | final find |

## Baseline: FX_Orders identity, scope and count (AC-1)

- **Form:** FX_Orders was **already open** (carried over from EXP-083 T5; clean). The brief allows "use it if already open and clean", so the Form menu recent-forms route was **not** repeated in T1. This is a disclosed deviation from the literal step, not a silent skip.
- **Identity:** Form tab `FX_Orders` (selected); Designer URL `MGForm=FX_Orders`; footer `ScopeType: User`.
- **Components:** **31** rows in the Components tree (Pane (00): FormCollectionGrid plus 10 GridColumns = 11; Pane (01): 10 Static plus 10 detail controls = 20). The row names match the EXP-082 T8/T9 inventory. FX_ItmsPictureGridCol (GridColumn, `object.FX_ItmsPicture`, tab 10) was not selected in T1; its Caption was read as blank in EXP-082 T8 (cited, not re-read).
- The Form-level Properties (Form tab) were not read in T1 (omission).

### FX_ItmsPictureStatic (Static) — baseline (observed; selected by one row click)

| Group | Property | Observed |
|---|---|---|
| Design | Name | `FX_ItmsPictureStatic` |
| Design | Description | blank |
| Design | Caption | **blank** (Caption ellipsis button present) |
| Design | Type | **Static** |
| Design | From Device Master | True |
| Data Source | Binding Type | None |
| Data Source | Binding | blank |
| Data Source | Required / To Be Determined | False / False |
| Data Source | Upper or Lower Case | Mixed |
| Data Source | Default Value; List Source | blank; blank |
| Data Source > Formatting | Date Format; Binary Data; Input Mask; Prompt Character | blank; blank; blank; blank |
| Data Source > Formatting | Round | False |
| Data Source > Formatting | Image Display | Fit |
| Data Source > Formatting | **Image and Text** | **present**; value **Inherit** |
| Layout | Unit | Char |
| Layout | Size | `20; 1` (group collapsed; Width; Height per EXP-062-R4) |
| Layout | Location | `21.55; 3` (Top 21.55; Left 3; Lock Position False) |
| Layout | Tab Order | 29 |
| Miscellaneous > Extension Properties | — | blank |
| Miscellaneous > Specific Attributes | Frame; Group; Interpret Bound…; **No Colon**; No Interpret New… | False; False; False; **False**; False |

Rows below "No Interpret New…" in Specific Attributes were not visible in the read (omission).

### FX_ItmsPictureEdit (Edit) — baseline (observed; selected by one row click)

| Group | Property | Observed |
|---|---|---|
| Design | Name | `FX_ItmsPictureEdit` |
| Design | Description | blank |
| Design | Caption | `C(FX_ItmsPictureStatic)` (find readback; the field is truncated in the screenshot) |
| Design | Type | **Edit** |
| Design | From Device Master | True |
| Data Source | Binding Type | **Property** |
| Data Source | Binding | **`object.FX_ItmsPicture`** |
| Data Source | Required / To Be Determined | False / False |
| Data Source | Upper or Lower Case | Mixed |
| Data Source | Default Value; List Source | blank; blank |
| Data Source > Formatting | Date Format; Binary Data; Input Mask; Prompt Character | blank; blank; blank; blank |
| Data Source > Formatting | Round | False |
| Data Source > Formatting | Image Display | Fit |
| Data Source > Formatting | **Image and Text** | **present**; value **Inherit** |
| Layout | Unit | Char |
| Layout | **Size** | **`37.05; 2`** (group collapsed; Width; Height) |
| Layout | **Location** | **`21.55; 23.75`** (Top **21.55**; Left **23.75**; Lock Position False) |
| Layout | Tab Order | 30 |
| Miscellaneous > Extension Properties | — | blank |
| Miscellaneous > Specific Attributes | Group; Interpret Bound…; No Interpret Con…; Password; Self Contained Caption | False; False; False; False; False |
| Miscellaneous > Specific Attributes | **No Colon** | **row absent** (the find for "No Colon" returned no match on the Edit) |

### FX_DerOrderTotalEdit (Edit) — reference layout (observed; one row click)

- Layout Size `37.05; 2`; Location `19.3; 23.75` (Top 19.3; Left 23.75). Caption `C(FX_DerOrderTotalStatic)`. Binding `object.FX_DerOrderTotal`. Not changed.

### Picture pair summary (AC-1)

- The pair is FX_ItmsPictureStatic (Static, blank Caption, no binding) and FX_ItmsPictureEdit (Edit, bound to `object.FX_ItmsPicture`, Caption `C(FX_ItmsPictureStatic)`).
- `Image and Text` exists on both components (value `Inherit`); the Image Only option was **not** opened in T1 (its options are unverified).
- No Colon exists only on the Static (False). FX_ItmsPictureEdit has no No Colon row before its Type changes to Static.

## Observations (observed only)

1. FX_Orders was open, User-scoped and clean at T1 start (carried over from EXP-083 T5).
2. The Components tree has 31 rows; FX_ItmsPictureStatic is tab 29 and FX_ItmsPictureEdit is tab 30.
3. FX_ItmsPictureStatic has a blank Caption, Type Static, Binding Type None and `Image and Text` = Inherit.
4. FX_ItmsPictureEdit has Type Edit, Binding Type Property, `object.FX_ItmsPicture`, Size `37.05; 2`, Location Top 21.55 / Left 23.75, and `Image and Text` = Inherit. Its Caption expression `C(FX_ItmsPictureStatic)` refers to the Static that the brief will delete (see Open questions).
5. The Specific Attributes group differs by Type: the Static shows Frame and No Colon; the Edit shows Password and Self Contained Caption and no No Colon.
6. Selecting a component and expanding a group is view-only. The Designer stayed clean throughout (Save and Undo disabled at the end).
7. Two Properties-panel behaviours were seen: a group label click selects the group without expanding it; the chevron at the row's left edge expands it. Mouse wheel over the Components grid did not scroll the Properties panel; over the Properties panel it did.

## Acceptance checks (T1)

| AC | Status (T1) | Evidence | Limits |
|---|---|---|---|
| **AC-1** Sources reviewed; session usable; Designer User scope and clean; FX_Orders with 31 components; full properties of FX_ItmsPictureStatic and FX_ItmsPictureEdit (including the presence of Image and Text) recorded | **SUPPORTED (observed; UI and accessibility level; same session), for the groups named in the bounded instruction** (Design, Data Source including Formatting, Layout Size and Location, Miscellaneous). Sources reviewed (above). Session usable. User scope; clean. 31 components. Image and Text present on both. | `t1-02`, `t1-03` (Static); `t1-07`, `t1-09` (Edit); snapshot `snapshot-t1-01-designer-start.yml`; final find | Appearance, Behavior, Events, Help, Inheritance, Data Type, Validation, Glue, Containment and Free-Form Data groups were **not expanded** (omission). Size width/height labels are cited from EXP-062-R4. Image Only option list not opened. Same session only. |
| AC-2 to AC-6 | **Not started** (T1 stop point) | — | — |

## Action audit (T1; exact counts; this task only)

| Operation | Count | Notes |
|---|---|---|
| `browser_tabs` list | **1** | Before the first selection. |
| `browser_tabs` select | **1** | Tab 0 (Designer). Tab 1 never selected. |
| Untargeted snapshots (explicit `browser_snapshot`) | **1** | `snapshot-t1-01-designer-start.yml` (start). |
| `browser_find` (read-only) | **13** | Text finds: "No Colon" (×4), "Specific Attributes", "FX_ItmsPictureEdit", "FX_DerOrderTotalEdit", "FX_ItmsPictureStatic" (8). Regex finds: two group-label finds, two value finds, one Save/Undo/dialog check (5). Total 13. |
| Element clicks (successful / failed) | **6 / 0** | Row selections ×4 (FX_ItmsPictureStatic ×2, FX_ItmsPictureEdit, FX_DerOrderTotalEdit); group-label selections ×2 (Miscellaneous; Specific Attributes). |
| Coordinate clicks | **6** | View-only expander chevrons: Miscellaneous (1585,496) ×1 (after a label click that only selected); Specific Attributes (1596,544); Layout (1585,472); Data Source (1585,375); Location (1596,785); Formatting (1596,617). |
| Key presses | **1** | ArrowRight, pressed once on a selected Miscellaneous label; focus moved into its value cell; no expansion; no edit. |
| `browser_type` | **0** | None. |
| Mouse moves / hover / drag | **2 / 0 / 0** | Both moves to (1740,600) over the Properties panel. |
| Mouse wheel | **3** | (0,400) at the previous pointer position (effect not established; the Properties panel did not move); (0,500) and (0,500) at (1740,600) (scrolled the Properties panel to Layout and Miscellaneous). |
| Screenshots | **11** | `t1-02`, `t1-03` (baseline Static); `t1-diag-01`…`t1-diag-09` (process captures; see the inventory). |
| Waits | **0** | None. |
| Designer Save | **0** | Save disabled throughout. |
| Designer top-toolbar Delete / Regenerate Form clicks | **0 / 0** | None. |
| Components-grid trash clicks | **0** | None (deletion is a later task). |
| Component deletions / Type changes / Size edits / No Colon changes / Image Only changes | **0 / 0 / 0 / 0 / 0** | None. |
| Other component edits; strings created; caption edits | **0; 0; 0** | None. |
| FX_Orders close / reopen | **0 / 0** | Not in T1. |
| Runtime open / F4 / typed / saved / runtime close | **0 / 0 / 0 / 0 / 0** | Web Client tab not selected. |
| Native browser dialogs / in-page dialogs answered | **0 / 0** | None. |
| IDO, property, class, SQL, checkout, FormSync, deployment changes | **0** | None. |
| Re-login / session-expiry procedure / portal navigation | **0 / 0 / 0** | Session usable. |
| Refresh / restart / direct URL navigation | **0 / 0 / 0** | None. |
| Browser JavaScript / evaluate / run-code / console / network (worker-authored) | **0** | The tool output's `Console: 2 errors, 0 warnings` line was not inspected. |
| Ref-not-found errors / fresh recovery snapshots / timeouts | **0 / 0 / 0** | No recovery snapshot used. |
| Portal banner dismissals | **0** | None visible. |
| **Total browser calls in T1** | **45** | 2 tab calls + 1 snapshot + 13 finds + 6 element clicks + 6 coordinate clicks + 1 key press + 2 mouse moves + 3 wheels + 11 screenshots = 45. |

Cumulative for EXP-084 (T1 only): browser calls **45**. Component deletions **0 of 1**; Type changes **0 of 1**; Size edits **0 of 1**; No Colon **0 of 1**; Image Only **0 of 1 (if offered)**; Designer Save **0 of 1**; Designer close/reopen **0 of 1**; runtime open **0 of 1**; F4 **0 of 1**; runtime close **0 of 1**; re-logins **0 of 1**.

## Worker-written-file inventory (T1)

- `experiments/EXP-084-hello-world-part-5-section-6b-fx-orders-picture-display.md` (created; this record).
- `evidence/EXP-084/snapshot-t1-01-designer-start.yml` (created by the snapshot tool at the worker's filename request).
- `evidence/EXP-084/t1-02-baseline-fx_itmspicturestatic-properties.png` (created).
- `evidence/EXP-084/t1-03-baseline-fx_itmspicturestatic-layout-misc-no-colon.png` (created).
- `evidence/EXP-084/t1-diag-01-misc-group-click-state.png` (created; process capture).
- `evidence/EXP-084/t1-diag-02-misc-after-arrowright.png` (created; process capture).
- `evidence/EXP-084/t1-diag-03-misc-after-chevron-click.png` (created; process capture).
- `evidence/EXP-084/t1-diag-04-specific-attributes-state.png` (created; process capture).
- `evidence/EXP-084/t1-diag-05-groups-expanded-state.png` (created; process capture).
- `evidence/EXP-084/t1-diag-06-formatting-expanded-state.png` (created; process capture).
- `evidence/EXP-084/t1-diag-07-fx-itmspictureedit-selected-props.png` (created).
- `evidence/EXP-084/t1-diag-08-edit-props-after-wheel.png` (created; process capture; wheel had no effect on the panel).
- `evidence/EXP-084/t1-diag-09-edit-props-scrolled-lower.png` (created).

Tool-generated, not worker-authored: Playwright page and snapshot files written under `evidence\playwright\` (one per browser action that returns a snapshot, for example `page-2026-10-14T04-49-58-495Z.yml` through `page-2026-10-14T04-52-00-952Z.yml`) and a console log under the same folder. They are outside the EXP-084 path (known confinement limitation; the operator's git review is authoritative). No other repository file was written, edited or deleted in T1.

## Decisive evidence (T1)

| File | Visible identity / scope / result | Proves | Does NOT prove |
|---|---|---|---|
| `t1-02-baseline-fx_itmspicturestatic-properties.png` | Form tab FX_Orders; footer `ScopeType: User`; Properties header `FX_ItmsPictureStatic (Static)`; Design: Name `FX_ItmsPictureStatic`, Caption blank, Type Static, From Device Master True; Data Source: Binding Type None; Formatting: Image Display Fit, **Image and Text Inherit**; Components row FX_ItmsPictureStatic selected (tab 29); Save greyed | **AC-1** baseline identity and values of the Static (Design, Data Source, Formatting) | Layout and Miscellaneous (see `t1-03`); the stored definition |
| `t1-03-baseline-fx_itmspicturestatic-layout-misc-no-colon.png` | Same Static; Layout Unit Char, **Size 20; 1**, Location 21.55; 3 (Top 21.55, Left 3), Tab Order 29; Specific Attributes: Frame False, Group False, Interpret Bound… False, **No Colon False**, No Interpret New… False | **AC-1** Layout and No Colon of the Static at baseline | Rows below No Interpret New…; the Size children |
| `t1-07` (`t1-diag-07-fx-itmspictureedit-selected-props.png`) | Form tab FX_Orders; footer User; Properties header `FX_ItmsPictureEdit (Edit)`; Design: Name `FX_ItmsPictureEdit`, Caption `C(FX_ItmsPictureS…` (truncated), Type Edit; Data Source: Binding Type Property, Binding `object.FX_ItmsPictu…` (truncated); Formatting Image and Text Inherit; Components row FX_ItmsPictureEdit selected (tab 30) | **AC-1** Edit identity, type and binding at baseline | The full Caption and Binding strings (see the find readbacks in this record); Layout and Miscellaneous (see `t1-09`) |
| `t1-09` (`t1-diag-09-edit-props-scrolled-lower.png`) | Same Edit; Layout Unit Char, **Size 37.05; 2** (collapsed), **Location 21.55; 23.75** (Top 21.55, Left 23.75, Lock Position False), Tab Order 30; Specific Attributes: Group, Interpret Bound…, No Interpret Con…, Password, Self Contained Caption (all False); **no No Colon row** | **AC-1** Layout and Miscellaneous of the Edit at baseline; absence of No Colon on the Edit (also by find) | Rows outside the visible area (the find shows no No Colon anywhere in the tree) |

Process captures (`t1-diag-01`, `-02`, `-03`, `-04`, `-05`, `-06`, `-08`) show the expander states during the read. They are not baseline evidence. `t1-diag-05` also shows Layout Size `20; 1` and Location `21.55; 3` for the Static; `t1-diag-06` shows Formatting, with Image and Text `Inherit`, for the Static.

Screenshot framing: each image shows the whole viewport (Form canvas, Components grid, Properties panel, footer). The Components grid in the images shows rows 25–30 only; the full 31-row list is in `snapshot-t1-01-designer-start.yml`.

## Limitations and deviations (T1)

1. FX_Orders was already open; the recent-forms route was not repeated (the brief allows use-if-open).
2. Six coordinate clicks on group expander chevrons (view-only). The Properties-panel group labels do not expand from a single label click, and keyboard expansion did not work (one ArrowRight moved focus only). This is a disclosed use of coordinates.
3. One mouse wheel at an unspecified pointer position had no visible effect on the Properties panel; its effect on the Components grid is not established.
4. Appearance, Behavior, Events, Help, Inheritance, Data Type, Validation, Glue, Containment and Free-Form Data were not expanded (omission under AC-1's "full properties" wording; the bounded instruction names Design, Data Source, Layout and Miscellaneous).
5. Size values are shown as `Width; Height` and Location as `Top; Left` (Location children were expanded and read; Size children were not). The Size mapping is cited from EXP-062-R4 T6.
6. The Image and Text dropdown options (including Image Only) were not opened.
7. FX_ItmsPictureGridCol was not selected in T1 (cited from EXP-082 T8: blank Caption, `object.FX_ItmsPicture`).
8. Form-level Properties were not read.
9. Same session only; not database durability; not replay verification.

## Open questions and blockers

1. **No blocker in T1.** The gates pass and the stop point is reached.
2. **Caption expression of FX_ItmsPictureEdit (observed):** its Caption is `C(FX_ItmsPictureStatic)`, which refers to the Static the brief will delete. The brief forbids changing the Caption, so the Caption expression will remain after the deletion. How the Caption resolves after the deletion (and after the Type change to Static) is unknown. The coordinator should decide whether the next task checks this before the deletion. Not interpreted here.
3. **Picture description mismatch (cited):** the brief expects eggs to show "a small grey-faced figure". The EXP-063-R2 record describes `assets/eggs.png` as a "faint pale sketch-like shape" and records the eggs picture as a "Shiba-style dog" at the start of EXP-063-R2 T1. The runtime task must compare what is displayed with the brief's wording and not assume either description.
4. **Blank-picture history (cited):** EXP-062-R4 T13 recorded blank pictures at runtime; EXP-063-R2 recorded visible pictures. Unresolved; the runtime task will observe, not infer.
5. **No Colon appearance (observed):** the No Colon row is absent on the Edit and present on the Static. The brief expects it after the Type change to Static. Verify in the next task after the Type change, not before.
6. **Next permitted action (separate authorization):** the Components-grid deletion of FX_ItmsPictureStatic only after its exact name and Type Static are verified and the confirmation is read; then the FX_ItmsPictureEdit changes; then one Designer Save; close and reopen; the runtime check. Not performed in T1.

## Knowledge state (per finding)

| Finding | State |
|---|---|
| Designer started with FX_Orders open, User scope, Save/Undo/Regenerate disabled, no dialog | **observed** (one run; snapshot and screenshots) |
| 31 components in the Components tree | **observed** (one run; start snapshot, row count) |
| FX_ItmsPictureStatic: Static, blank Caption, Binding Type None, Size 20; 1, Location 21.55; 3, No Colon False, Image and Text Inherit | **observed** (one run; `t1-02`, `t1-03`) |
| FX_ItmsPictureEdit: Edit, Binding Type Property, `object.FX_ItmsPicture`, Caption `C(FX_ItmsPictureStatic)`, Size 37.05; 2, Location 21.55; 23.75, Image and Text Inherit, no No Colon row | **observed** (one run; `t1-diag-07`, `t1-diag-09`; finds) |
| FX_DerOrderTotalEdit: Size 37.05; 2, Location 19.3; 23.75 | **observed** (one run; find readback) |
| Size = Width; Height and Location = Top; Left | **cited** (EXP-062-R4 T6); Location children observed here |
| Any database durability or replay | **not claimed** (not replay_verified) |

---

## T2 — AC-2 deletion checkpoint: FX_ItmsPictureStatic deleted once (cycle 1, task T2; Form dirty, open, NOT saved)

- Task T2, cycle 1, worker session `c2479711-679d-48df-8757-f539531b86fe`, task_message_id `99b4991a-ec79-4684-944e-8c949f5fccb2`, run `R-20261014-124924-3sU9`. Date 2026-10-14.
- Bounded T2 instruction: confirm 31 rows; capture FX_ItmsPictureGridCol before the change; select FX_ItmsPictureStatic and verify its exact name and Type; one click on the Components-grid trash button; confirm only if the confirmation names FX_ItmsPictureStatic; verify 30 components, FX_ItmsPictureEdit and FX_ItmsPictureGridCol unchanged. **Not in T2:** retype or configure FX_ItmsPictureEdit, any Save, any close or reopen, the Web Client, any caption change.

### Gate (fresh, before the deletion)

| Check | Observed | Evidence |
|---|---|---|
| Tab list (before any selection) | Tab 0 (current): Designer, `MGForm=FX_Orders`. Tab 1: Web Client (`favoriteContext=IdoProperties`). No tab selection was needed: tab 0 was already current, and every later action acted on it | tool output |
| Fresh untargeted snapshot | FX_Orders tab selected (`closable FX_Orders`); Save, Undo and Regenerate Form **disabled**; footer `ScopeType: User`; no dialog | `evidence/EXP-084/snapshot-t2-01-designer-fresh-start.yml` |
| Component count | **31** rows: FormCollectionGrid (1) + GridColumns (10, tabs 1–10) + Static (10, tabs 11–29 odd) + detail controls (10) | snapshot-t2-01 |
| Session | Usable; no expiry, sign-in, banner or native dialog. Re-login **0** | snapshot-t2-01 |

Gate result: **passed** (User scope, clean, FX_Orders selected, 31 rows, no dialog).

### Pre-delete capture (selection only; no edit)

**FX_ItmsPictureGridCol** (GridColumn, pane 00, tab 10; `t2-01`; find readback):

| Property | Observed |
|---|---|
| Name | `FX_ItmsPictureGridCol` |
| Caption | blank (Caption field empty; find shows no text) |
| Type | GridColumn; From Device Master True |
| Binding Type / Binding | Property / `object.FX_ItmsPicture` |
| Required / To Be Determined | False / False |
| Image Display / Image and Text | Fit / Inherit |
| Layout Unit / Size / Location | Char / `10; 0` / `0; 0` (Top 0, Left 0) |
| Tab Order | 10 |

**FX_ItmsPictureStatic** (exact name and type verified immediately before the trash click; `t2-02`; `snapshot-t2-02-pre-delete-selected-static.yml`):

- Properties header `FX_ItmsPictureStatic (Static)`; Name `FX_ItmsPictureStatic`; Type `Static`; Caption blank; Binding Type `None`; Binding blank; grid row `FX_ItmsPictureStatic Static 1 29` selected.
- Layout (`20; 1`, Location `21.55; 3`) and No Colon (`False`) were **not re-read in T2**; the T1 readings (`t1-03`) stand as the pre-delete record.

**FX_ItmsPictureEdit** was **not reselected in T2 before the deletion**. Its pre-delete values are the T1 baseline (Type Edit; Binding Type Property; `object.FX_ItmsPicture`; Caption `C(FX_ItmsPictureStatic)`; Size `37.05; 2`; Location `21.55; 23.75`; Tab 30). The post-delete readback below compares against them.

### The deletion (once)

| Step | Observed | Evidence |
|---|---|---|
| Control identified | The find for "Delete" first matched the **top-toolbar Delete** (ref e25, Delete Form Definition). It was **not clicked**. The Components-grid trash is the `button ""` inside the toolbar under the grid (ref e1371, inside toolbar e1370) | snapshot-t2-02 |
| Trash click (once) | One click on the Components-grid trash with FX_ItmsPictureStatic selected | tool output |
| Confirmation | `alertdialog` titled `Infor Mongoose Application Development Framework - FX_Orders`: **"Are you sure you want to delete FX_ItmsPictureStatic and all the components it contains?"**; buttons OK (active) and Cancel. The text names only FX_ItmsPictureStatic, so the confirmation criterion was met | `t2-03` (viewed); find readback |
| OK (once) | One click on OK. The dialog closed. No further dialog, error or toast was seen in the post-OK snapshot | `snapshot-t2-03-post-delete-verify.yml` |
| Cancel | Not clicked | — |
| Dirty state after OK | Save **enabled**; Undo **enabled**; the Form is dirty and unsaved | snapshot-t2-03; `t2-04` (viewed) |

### Post-delete verification (observed)

- **Tree structure:** after the deletion the Components tree showed only the two collapsed pane nodes. The grid's **Expand** button (view only; pressed once) displayed the child rows (`snapshot-t2-04-post-delete-components-expanded.yml`).
- **Count = 30:** FormCollectionGrid (1); GridColumns (10: FX_OrderNumberGridCol … FX_ItmsPictureGridCol); Pane (01) Statics **9** (FX_OrderNumberStatic, FX_CustomerIDStatic, FX_CusNameStatic, FX_CusAddressStatic, FX_ItemStatic, FX_ItmsDescriptionStatic, FX_ItmsCostStatic, FX_CountStatic, FX_DerOrderTotalStatic); detail controls (10: … FX_DerOrderTotalEdit, FX_ItmsPictureEdit).
- **FX_ItmsPictureStatic absent:** the only FX_ItmsPicture* rows are FX_ItmsPictureGridCol (tab 10) and FX_ItmsPictureEdit (tab 30). The grid bottom shows FX_DerOrderTotalEdit (tab 28) followed by FX_ItmsPictureEdit (tab 30); no tab-29 row remains (`t2-04`).
- **FX_ItmsPictureEdit (selection only; find readback):** Name `FX_ItmsPictureEdit`; Caption `C(FX_ItmsPictureStatic)` (**unchanged**; now refers to a deleted component); Type `Edit`; Binding Type `Property`; Binding `object.FX_ItmsPicture`; Image and Text `Inherit`; Unit `Char`; Size `37.05; 2`; Location `21.55; 23.75` (Top 21.55, Left 23.75); Tab Order `30`; Self Contained Caption `False`. **Matches the T1 baseline.** No No Colon row (as in T1).
- **FX_ItmsPictureGridCol (selection only; find readback):** Name `FX_ItmsPictureGridCol`; Binding `object.FX_ItmsPicture`; Unit `Char`; Size `10; 0`; Location `0; 0` (Top 0, Left 0); Tab Order `10`. **Matches the pre-delete capture.** Its Caption was **not re-read after the deletion** (limitation).
- **Designer state:** Save **enabled**, Undo **enabled** (dirty); no dialog; FX_Orders tab selected; footer `ScopeType: User`. Not saved; not closed; not reopened.

### Caption reference (unresolved risk; not changed)

FX_ItmsPictureEdit's Caption still reads `C(FX_ItmsPictureStatic)` after the deletion. The brief forbids editing captions and the Edit is not yet retyped, so the reference was left as it is. What the canvas shows for the picture pair after the Type change is not observed in T2 (the picture components are below the visible canvas area in `t2-04`). Not interpreted.

### Acceptance checks (T2)

| AC | T2 status | Evidence | Limits |
|---|---|---|---|
| **AC-2** FX_ItmsPictureStatic deleted once through the Components-grid trash after a confirmation naming it; 30 components remain; FX_ItmsPictureEdit and FX_ItmsPictureGridCol unchanged | **SUPPORTED (observed; same session; dirty, unsaved).** One trash click; confirmation read as naming only FX_ItmsPictureStatic; one OK; count 30; Static absent; Edit matches T1 baseline; GridCol matches pre-delete values on Binding, Layout and Tab Order | `t2-03` (confirmation); `t2-04` and `snapshot-t2-04` (grid, 30 rows); find readbacks of Edit and GridCol | GridCol Caption not re-read after the deletion. Layout and No Colon of the Static were not re-read before the deletion (T1 values cited). Deletion is not saved. |
| AC-1 (pre-delete part, T2 subset) | GridCol pre-delete values recorded; Static name and Type verified | `t2-01`, `t2-02` | Edit not reselected pre-delete (T1 baseline cited) |
| AC-3 to AC-6 | **Not in T2** | — | — |

### Action audit (T2; exact counts; this task only)

| Operation | Count | Notes |
|---|---|---|
| `browser_tabs` list | **1** | Before any selection. |
| `browser_tabs` select | **0** | Tab 0 was already current; no select was needed or issued. |
| Untargeted snapshots (explicit `browser_snapshot`) | **4** | `snapshot-t2-01-designer-fresh-start.yml`; `snapshot-t2-02-pre-delete-selected-static.yml`; `snapshot-t2-03-post-delete-verify.yml`; `snapshot-t2-04-post-delete-components-expanded.yml`. |
| `browser_find` (read-only) | **7** | (1) regex of property names (no match); (2) regex of GridCol Layout/Binding values; (3) text `FX_ItmsPictureStatic`; (4) regex for the trash/Delete controls (matched the top-toolbar Delete; not clicked); (5) regex for alertdialog/dialog/OK/Cancel; (6) post-delete GridCol readback; (7) post-delete Edit readback. |
| Element clicks (successful / failed) | **7 / 0** | (1) GridCol row (selection); (2) FX_ItmsPictureStatic row (selection); (3) Components-grid trash **(1 deletion trigger)**; (4) confirmation **OK**; (5) Components grid **Expand** (view); (6) GridCol row (selection); (7) Edit row (selection). |
| Coordinate clicks / mouse moves / wheel / hover / drag | **0 / 0 / 0 / 0 / 0** | None. |
| `browser_type` / key presses / waits | **0 / 0 / 0** | None. |
| Screenshots | **4** | `t2-01`, `t2-02`, `t2-03`, `t2-04`. |
| **Total browser calls in T2** | **23** | 1 tab list + 4 snapshots + 7 finds + 7 clicks + 4 screenshots. |
| Components deleted | **1** | FX_ItmsPictureStatic only. |
| Confirmations answered | **OK 1; Cancel 0** | Confirmation named FX_ItmsPictureStatic. |
| Top-toolbar Delete (Delete Form Definition) / Regenerate Form clicks | **0 / 0** | The find matched the top Delete; it was not clicked. |
| Other component deletions | **0** | None. |
| Other component edits (Type, Size, No Colon, Image and Text, rename, binding, move) | **0** | None in T2. |
| Strings created / captions edited | **0 / 0** | None. |
| Designer Save | **0** | Not performed (dirty, unsaved). |
| Form close / reopen | **0 / 0** | Not performed. |
| Runtime open / F4 / typed / saved / runtime close | **0 / 0 / 0 / 0 / 0** | Web Client not selected. |
| Native browser dialogs | **0** | None appeared. |
| In-page dialogs answered | **1** (OK on the delete confirmation) | Answered within this task; no dialog left open. |
| IDO, property, class, SQL, checkout, FormSync, deployment changes | **0** | None. |
| Re-login / session-expiry procedure / portal navigation | **0 / 0 / 0** | Session usable. |
| Refresh / restart / direct URL navigation | **0 / 0 / 0** | None. |
| Browser JavaScript / evaluate / run-code / console / network (worker-authored) | **0** | None. |
| Ref-not-found errors / fresh recovery snapshots | **0 / 0** | No recovery snapshot was needed. |
| Portal banner dismissals | **0** | None visible. |
| **Cumulative browser calls, T1 + T2** | **45 + 23 = 68** | T1: 45 (see the T1 audit above). |

Cumulative EXP-084 budgets after T2: component deletions **1 of 1 (used)**; Type changes **0 of 1**; Size edits **0 of 1**; No Colon **0 of 1**; Image Only **0 of 1 (if offered)**; Designer Save **0 of 1**; Designer close/reopen **0 of 1**; runtime open **0 of 1**; F4 **0 of 1**; runtime close **0 of 1**; re-logins **0 of 1**. Other component edits **0**; strings **0**; runtime edits **0**; IDO changes **0**; checkout actions **0**.

### Worker-written-file inventory (T2)

- `experiments/EXP-084-hello-world-part-5-section-6b-fx-orders-picture-display.md` (edited: status header and this T2 section).
- `evidence/EXP-084/snapshot-t2-01-designer-fresh-start.yml` (created by the snapshot tool at the worker's filename request).
- `evidence/EXP-084/snapshot-t2-02-pre-delete-selected-static.yml` (created by the snapshot tool).
- `evidence/EXP-084/snapshot-t2-03-post-delete-verify.yml` (created by the snapshot tool).
- `evidence/EXP-084/snapshot-t2-04-post-delete-components-expanded.yml` (created by the snapshot tool).
- `evidence/EXP-084/t2-01-pre-delete-fx_itmspicturegridcol-selected.png` (created).
- `evidence/EXP-084/t2-02-pre-delete-fx_itmspicturestatic-selected-name-type.png` (created).
- `evidence/EXP-084/t2-03-delete-confirmation-names-fx_itmspicturestatic.png` (created).
- `evidence/EXP-084/t2-04-post-delete-grid-edit-selected-dirty-no-dialog.png` (created).

Tool-generated, not worker-authored: Playwright page and console files under `evidence\playwright\` (for example `page-2026-10-14T04-55-12-353Z.yml` through `page-2026-10-14T04-56-13-813Z.yml`); outside the EXP-084 path (the operator's git review is authoritative).

### Decisive evidence (T2)

| File | Visible identity / scope / result | Proves | Does NOT prove |
|---|---|---|---|
| `t2-01` | Form FX_Orders; footer `ScopeType: User`; Properties `FX_ItmsPictureGridCol (GridColumn)`; Caption blank; Type GridColumn; Binding Type Property, `object.FX_ItmsPict…`; Image and Text Inherit; Save greyed; grid row FX_ItmsPictureGridCol (tab 10) selected | Pre-delete identity and scope; GridCol type and binding; clean state before the deletion | Layout (see the find readback); the stored definition |
| `t2-02` | Properties `FX_ItmsPictureStatic (Static)`; Name `FX_ItmsPictureStatic`; Type Static; Caption blank; Binding Type None; grid row FX_ItmsPictureStatic (tab 29) selected; Save greyed | **Exact name and Type verified before the trash click** | Layout and No Colon (T1 values) |
| `t2-03` | Confirmation `Are you sure you want to delete FX_ItmsPictureStatic and all the components it contains?` with OK (active) and Cancel; the Designer behind it; footer User; Save greyed | **Confirmation names FX_ItmsPictureStatic only** (the criterion for OK) | The response to OK (see `t2-04`); the server state |
| `t2-04` | FX_Orders; Save and Undo **active** (dirty); grid bottom rows FX_DerOrderTotalEdit (28) and FX_ItmsPictureEdit (30), no tab-29 row; Properties FX_ItmsPictureEdit (Edit), Caption `C(FX_ItmsPictureS…` (truncated), Binding Type Property, `object.FX_ItmsPicture`; no dialog; footer User | **Post-delete dirty state**; the Static's row is gone; the Edit remains bound | The full 30-row list (in `snapshot-t2-04`); the Caption's full text; the canvas picture area (not in the image); server state |

### Limitations (T2)

- The deletion is **uncommitted**: the Form is dirty. It is lost if the Form is closed without a Save or the session ends before a Save. Not saved by design (T2 bound).
- The tree collapsed after the deletion; the Expand button (view only) was pressed to read the rows.
- FX_ItmsPictureGridCol's Caption was not re-read after the deletion.
- Layout and No Colon of the Static were not re-read before the deletion; T1 values are cited.
- Same session only; not database durability; not replay verification.

### Open questions and next permitted action (T2)

1. **No blocker in T2.** The deletion was observed with the correct confirmation, and the post-delete state matches the bounded checks.
2. **Caption reference (unresolved):** FX_ItmsPictureEdit's Caption `C(FX_ItmsPictureStatic)` now refers to a deleted component. The brief forbids caption edits, so it was left unchanged. The coordinator should decide how the next task handles it (for example, whether the Type change to Static and a readback of the Caption and the canvas is enough, or whether a separate authorization is required).
3. **Next permitted action (separate authorization):** retype FX_ItmsPictureEdit to Static once through its Type dropdown; verify the binding `object.FX_ItmsPicture`; set Layout Size height to 9 (width `37.05` unchanged; Location `21.55; 23.75` unchanged); set No Colon True through its True/False control; set Image Only if Image and Text is offered; verify after reselecting; then one Designer Save; then the close and reopen; then the runtime check.
4. The Designer is **dirty and open** at the end of T2, as the bounded instruction requires. It must not be closed without a Save or operator approval.

Classification remains **observed only, NOT replay_verified**.

---

## T3 — AC-3 configuration checkpoint: FX_ItmsPictureEdit configured; Form dirty, open, NOT saved (cycle 2, task T3)

- Task T3, cycle 2, worker session `c2479711-679d-48df-8757-f539531b86fe`, task_message_id `ed8fc3cf-beec-497f-a320-55b0832e2691`, run `R-20261014-124924-3sU9`. Date 2026-10-14.
- Bounded T3 instruction: confirm 30 components and no dialog; verify FX_ItmsPictureGridCol Caption blank (no change); verify FX_ItmsPictureEdit (Name, Type Edit, binding, Size `37.05; 2`, Location `21.55; 23.75`); then in order: Type to Static once; Size height only to 9 once; No Colon True once; Image and Text ImageOnly once if offered; reselect after another existing component; independent readback; **no Save, no close**.

### Gate (fresh, before any change)

| Check | Observed | Evidence |
|---|---|---|
| Tab list (before any selection) | Tab 0 (current): Designer, `MGForm=FX_Orders`; tab 1 Web Client. No tab selection was issued: tab 0 was already current | tool output |
| Fresh untargeted snapshot | FX_Orders tab selected (`closable FX_Orders`); footer `ScopeType: User`; **Save enabled** (dirty from T2); Undo enabled; no dialog (no alertdialog); FX_ItmsPictureStatic absent | `snapshot-t3-01-designer-fresh-start.yml` |
| Component count | **30** (32 tree rows including the two Pane rows) | snapshot-t3-01 |
| FX_ItmsPictureGridCol (AC-2 gap) | Selection only. Name `FX_ItmsPictureGridCol`; **Caption blank** (empty value cell under the Caption row); Type GridColumn; Binding Type Property; Binding `object.FX_ItmsPicture`; Image and Text Inherit | find readback; `t3-01` (viewed) |
| FX_ItmsPictureEdit before change | Name `FX_ItmsPictureEdit`; Type **Edit**; Binding Type Property; Binding `object.FX_ItmsPicture`; Caption `C(FX_ItmsPictureStatic)`; Size `37.05; 2`; Location `21.55; 23.75` (Top 21.55; Left 23.75); Tab Order 30 | find readback; `t3-02` (viewed) |

Gate result: **passed** (User scope, dirty from T2, FX_Orders selected, 30 components, no dialog, FX_ItmsPictureStatic absent, Edit values as T1/T2).

### Permitted changes (in order; one each)

| # | Change | Observed after the change (before reselect) | Evidence |
|---|---|---|---|
| 1 | **Design > Type: Edit → Static**, once, through the dropdown arrow (value cell) and its option list (the list offered RadioButton, Static, SubForm and others; Static chosen once). | Properties Type `Static`; Binding Type `Property`; Binding `object.FX_ItmsPicture` kept. Components grid Type column for the row **still reads `Edit`** (grid not refreshed). Specific Attributes list rebuilt for a Static (begins Frame, Group, Interpret Bound…, No Colon, …) | `t3-03` (viewed) |
| 2 | **Layout > Size: height only**, once. Size group expanded (view); Height value cell clicked once; editor textbox (value `2`) set to `9` by one fill; committed with one Tab | Size `37.05; 9`; Width **37.05** (unchanged); Height 9; Location **21.55; 23.75** (unchanged) | `t3-05` (viewed, pre-edit); `t3-06` (viewed, committed) |
| 3 | **Miscellaneous > Specific Attributes > No Colon: False → True** through the True/False control (value cell click, arrow click, option True once) | No Colon `True` | `t3-07`, `t3-08` (viewed) |
| 4 | **Data Source > Formatting > Image and Text: Inherit → ImageOnly**, once, through its dropdown (the list offered Inherit, Overlaid, TextOnly, **ImageOnly**, HorizontalTextImage, HorizontalImageText, VerticalTextImage, VerticalImageText) | Image and Text `ImageOnly` | `t3-09`, `t3-10` (viewed) |

No value was typed into any field other than the Height editor. No rename, no Caption edit, no binding edit.

### Reselect verification (independent readback)

- Another existing component was selected without modification: **FX_DerOrderTotalEdit** (row selection only; its values were not read further and were not changed).
- FX_ItmsPictureEdit was then reselected (row click). Readback (find) and visible panel (`t3-11`, `t3-12`, `t3-13`):

| Property | Reselected readback | Expected | Result |
|---|---|---|---|
| Name | `FX_ItmsPictureEdit` | unchanged | match |
| Type (Design) | **Static** | Static | match |
| Binding Type / Binding | Property / `object.FX_ItmsPicture` | kept | match |
| Caption | `C(FX_ItmsPictureStatic)` | unchanged (not edited) | match |
| Size | **`37.05; 9`** (Width 37.05; Height 9) | height 9, width unchanged | match |
| Location | **`21.55; 23.75`** (Top 21.55; Left 23.75) | unchanged | match |
| No Colon (Specific Attributes) | **True** | True | match |
| Image and Text (Formatting) | **ImageOnly** | ImageOnly (offered) | match |
| Tab Order | 30 | unchanged | match (panel read) |
| Components grid row Type column | **`Edit`** (row `FX_ItmsPictureEdit Edit object.FX_ItmsPicture 1 30`) | Static expected | **mismatch: grid not refreshed; unresolved** |

Note: the grid row's Type column was read in the same snapshot as the reselected Properties (Type Static). The grid row has not updated, in T2 or T3, so the discrepancy is between the Properties panel and the grid cache, not between two saved states. Only a Save and reopen (a later task) can test which one is the stored definition.

### Other observations (observed, not interpreted)

1. After the Type change, the Form canvas shows an image element named `C(FX_ItmsPictureStatic):` in the accessibility tree (the Caption expression, rendered as label text with a colon). The picture area's visual appearance was **not** observed in any screenshot (the picture component's canvas position is not in the captured viewport region with a clear picture). The Caption expression is still a reference to the deleted component; the brief forbids caption edits, so it was left unchanged.
2. The Specific Attributes list for FX_ItmsPictureEdit does not show a No Colon row before the Type change (T1, T2) and shows it after the Type change to Static (T3).
3. The Components grid's Expand button was not needed in T3 (the tree had kept its expanded state).
4. Screenshot file `t3-05` was **written twice** under the same name (the first capture showed the Properties panel scrolled to the top, before the Size children were visible; the second capture, after a scroll, shows the Height row). The first capture was overwritten and is not available as evidence.

### Dirty state and Save

- After the changes and the reselect: **Save enabled, Undo enabled** (`snapshot-t3-02-post-configure-reselected-inventory.yml`, `t3-11`); no dialog; FX_Orders tab selected; footer `ScopeType: User`.
- **Designer Save: 0.** Not invoked. The Form is open and dirty, as the brief requires.

### Acceptance checks (T3)

| AC | T3 status | Evidence | Limits |
|---|---|---|---|
| **AC-2** (gap closed) | GridCol Caption re-read as **blank** after the deletion; FX_ItmsPictureStatic absent; 30 components | `t3-01`; find readback; `snapshot-t3-02` | The grid list itself is shown only in the snapshot (the viewport shows rows 24–30 only) |
| **AC-3** | **Supported at the observed, same-session level for the Properties values**: Type Static; binding `object.FX_ItmsPicture` kept; Size height 9 with width 37.05 and Location 21.55; 23.75 unchanged; No Colon True; Image and Text ImageOnly; values read back after reselect; Caption and name unchanged. **Open:** the Components grid Type column still reads Edit (unresolved). | `t3-10` (configured, before Save); `t3-11`, `t3-12`, `t3-13` (reselected readback); snapshots | Same session; not saved; the grid mismatch is unresolved; no canvas picture check |
| AC-4 to AC-6 | **Not in T3** | — | — |

### Action audit (T3; exact counts; this task only)

| Operation | Count | Notes |
|---|---|---|
| `browser_tabs` list | **1** | Before any selection. |
| `browser_tabs` select | **0** | Tab 0 was already current; no select was issued. |
| Untargeted snapshots (explicit `browser_snapshot`) | **2** | `snapshot-t3-01-designer-fresh-start.yml`; `snapshot-t3-02-post-configure-reselected-inventory.yml`. |
| `browser_find` (read-only) | **23** | Including the Type dropdown option locate, the Height and No Colon editor checks, the Image and Text option check, and the reselected readbacks. |
| Element clicks (successful / failed) | **13 / 0** | GridCol row (selection); FX_ItmsPictureEdit row (selection); Type dropdown arrow; Static option (**Type change 1**); Height value cell; No Colon value cell; No Colon arrow; True option (**No Colon 1**); Image and Text value cell; Image and Text arrow; ImageOnly option (**Image Only 1**); FX_DerOrderTotalEdit row (selection, other component); FX_ItmsPictureEdit row (reselect). |
| Coordinate clicks | **1** | Size group chevron at (1596, 430) (view-only expansion). |
| `browser_type` | **1** | The Height editor value (`9`; one fill; the editor's previous value `2`). |
| Key presses | **1** | Tab once (commit of the Height editor value). |
| Mouse moves / hover / drag | **2 / 0 / 0** | Both to (1740, 600) over the Properties panel before wheel scrolls. |
| Mouse wheel | **4** | Properties panel scrolls (0, 500) ×3 and (0, 300) ×1. |
| Screenshots | **14** | `t3-01` to `t3-13`, with `t3-05` written twice (one file overwritten; 13 unique PNG files). |
| Waits | **0** | None. |
| **Total browser calls in T3** | **62** | 1 tab list + 2 snapshots + 23 finds + 13 element clicks + 1 coordinate click + 1 type + 1 key press + 2 mouse moves + 4 wheels + 14 screenshots = 62. |
| Component deletions | **0 in T3** (cumulative 1) | None in T3. |
| Type changes | **1** (cumulative 1 of 1) | Edit to Static. |
| Size edits | **1** (cumulative 1 of 1) | Height only: 2 to 9. |
| No Colon | **1** (cumulative 1 of 1) | False to True. |
| Image Only | **1** (cumulative 1 of 1; offered) | Inherit to ImageOnly. |
| Designer Save | **0 of 1** | Not invoked (brief: no Save in T3). |
| Other component edits | **0** | The FX_DerOrderTotalEdit and FX_ItmsPictureGridCol selections were selection-only. |
| Strings created / captions edited / renames | **0 / 0 / 0** | None. |
| Designer top-toolbar Delete / Regenerate Form clicks | **0 / 0** | None. |
| Form close / reopen | **0 / 0** | None. |
| Runtime open / F4 / typed / saved | **0 / 0 / 0 / 0** | Web Client not selected. |
| Native browser dialogs / in-page dialogs answered | **0 / 0** | No dialog appeared in T3. |
| IDO, property, class, SQL, checkout, FormSync, deployment changes | **0** | None. |
| Re-login / session-expiry / portal navigation | **0 / 0 / 0** | Session usable. |
| Refresh / restart / direct URL navigation | **0 / 0 / 0** | None. |
| Browser JavaScript / evaluate / run-code / console / network (worker-authored) | **0** | None. |
| Ref-not-found / recovery snapshots | **0 / 0** | None. |
| Portal banner dismissals | **0** | None visible. |

**Cumulative EXP-084 browser calls, T1 + T2 + T3:** 45 + 23 + 62 = **130**.

Cumulative budgets after T3: component deletions **1 of 1**; Type changes **1 of 1**; Size edits **1 of 1**; No Colon **1 of 1**; Image Only **1 of 1** (offered); Designer Save **0 of 1**; Designer close/reopen **0 of 1**; runtime open **0 of 1**; F4 **0 of 1**; runtime close **0 of 1**; re-logins **0 of 1**. Other component edits **0**; strings **0**; runtime edits **0**; IDO changes **0**; checkout actions **0**.

### Worker-written-file inventory (T3)

- `experiments/EXP-084-hello-world-part-5-section-6b-fx-orders-picture-display.md` (edited: status header and this T3 section).
- `evidence/EXP-084/snapshot-t3-01-designer-fresh-start.yml` (created by the snapshot tool).
- `evidence/EXP-084/snapshot-t3-02-post-configure-reselected-inventory.yml` (created by the snapshot tool).
- `evidence/EXP-084/t3-01-gridcol-caption-blank-after-ac2-check.png` (created).
- `evidence/EXP-084/t3-02-pre-change-fx_itmspictureedit-selected-edit-binding.png` (created).
- `evidence/EXP-084/t3-03-type-static-committed-binding-check.png` (created).
- `evidence/EXP-084/t3-04-layout-misc-scrolled-before-size-change.png` (created).
- `evidence/EXP-084/t3-05-size-group-expanded-height-before-edit.png` (created; written twice, the first capture overwritten).
- `evidence/EXP-084/t3-06-size-height-9-committed-before-no-colon.png` (created).
- `evidence/EXP-084/t3-07-no-colon-control-after-cell-click.png` (created).
- `evidence/EXP-084/t3-08-no-colon-true-committed-before-image-check.png` (created).
- `evidence/EXP-084/t3-09-image-and-text-row-selected-options-check.png` (created).
- `evidence/EXP-084/t3-10-configured-fx_itmspictureedit-before-save.png` (created).
- `evidence/EXP-084/t3-11-reselected-fx_itmspictureedit-verification.png` (created).
- `evidence/EXP-084/t3-12-reselected-layout-misc-no-colon-verification.png` (created).
- `evidence/EXP-084/t3-13-reselected-no-colon-true-specific-attributes.png` (created).

Tool-generated, not worker-authored: Playwright page and console files under `evidence\playwright\` (for example `page-2026-10-14T04-58-38-286Z.yml` through `page-2026-10-14T05-00-28-073Z.yml`); outside the EXP-084 path (the operator's git review is authoritative).

### Decisive evidence (T3)

| File | Visible identity / scope / result | Proves | Does NOT prove |
|---|---|---|---|
| `t3-01` | FX_Orders; footer User; Properties `FX_ItmsPictureGridCol (GridColumn)`; Caption field empty; Binding `object.FX_ItmsPict…`; Save **active** (dirty) | GridCol Caption blank before T3 changes; dirty state from T2 | The stored definition |
| `t3-03` | Properties `FX_ItmsPictureEdit (Edit)` header; Type **Static**; Binding Type Property; Binding `object.FX_ItmsPictu…`; Image and Text Inherit; the Components grid row still shows **Edit** in the Type column | The Type change in the Properties panel; the grid mismatch | The grid's stored type |
| `t3-06` | Layout: Size `37.05; 9`; Width 37.05; Height 9; Location `21.55; 23.75`; Save active | Height committed to 9, width and location unchanged | Other components |
| `t3-10` | Configured state before Save: Type Static; Binding kept; Image and Text **ImageOnly**; Size `37.05; 9`; Location `21.55; 23.75`; Save active; no dialog | **AC-3 "screenshot before Save"**: the configured values together | That the values are stored |
| `t3-11` | Reselected FX_ItmsPictureEdit: Properties header `(Edit)` (the header label still says Edit); Type Static; Binding Property; Image and Text ImageOnly; grid row Type `Edit` | Reselected Type Static and ImageOnly | The grid header and grid Type column (both still show Edit) |
| `t3-12` | Reselected: Size `37.05; 9`, Width 37.05, Height 9, Location `21.55; 23.75`, Tab 30, Miscellaneous expanded | Reselected Size and Location | The No Colon row (below the fold) |
| `t3-13` | Reselected: Specific Attributes Frame False, Group False, Interpret Bound False, **No Colon True**, Solid False, Web Heading False | **AC-3 No Colon** after reselect | Save persistence |

The Properties header in `t3-11` reads `FX_ItmsPictureEdit (Edit)` after the reselect, while the Type value reads Static. This is a second display-lag observation beside the grid mismatch. Not interpreted.

### Limitations (T3)

- Everything is uncommitted. The Type, Size, No Colon and Image and Text values are client-side until a Designer Save.
- The Components grid Type column (and the Properties header label) still show `Edit` after the Type change; the Properties Type value reads Static. Unresolved.
- Screenshot `t3-05` was written twice; the first capture is lost.
- The canvas picture area was not visually verified (the image element named `C(FX_ItmsPictureStatic):` is in the accessibility tree only).
- The 30-row inventory is in the snapshot (`snapshot-t3-02`), not in a screenshot.
- Same session only; not database durability; not replay verification.

### Open questions and next permitted action (T3)

1. **No blocker in T3.** All four permitted changes were applied once and read back after reselecting.
2. **Open:** the grid's Type column for FX_ItmsPictureEdit still reads `Edit` while the Properties panel reads `Static`. Only a Designer Save and a reopen (a later, separately authorized task) can show which state is stored.
3. **Caption reference (unchanged):** `C(FX_ItmsPictureStatic)` refers to a deleted component. The canvas shows it as a label expression. Not interpreted; the coordinator should decide how the Save task handles it.
4. **Next permitted action (separate authorization):** the single Designer Save and its native response; the clean-state check; the close of the clean Form through its Form-tab control; the reopen through the Form menu recent-forms entry; verify 30 components, FX_ItmsPictureStatic absent, and FX_ItmsPictureEdit Type Static, binding, Size, Location, No Colon and Image Only; then the runtime check (F4 once).
5. The Designer is **dirty and open** at the end of T3, as the bounded instruction requires. It must not be saved or closed in T3.

Classification remains **observed only, NOT replay_verified**.

---

## T4 — the single Designer Save of FX_Orders (cycle 3, task T4): Save 1 of 1; Form clean and open; NOT closed, reopened or run at runtime

- Task T4, cycle 3, worker session `c2479711-679d-48df-8757-f539531b86fe`, task_message_id `e8452010-fbdd-411b-9dc8-4ba7a6cbfe72`, run `R-20261014-124924-3sU9`. Date 2026-10-14.
- Bounded T4 instruction: confirm identity, 30 components, FX_ItmsPictureStatic absent, no dialog, Save enabled; read FX_ItmsPictureEdit without change; record the grid and header Type labels; if any intended value differs, stop without saving; otherwise one Save; never retry; leave no prompt open; verify the post-Save state; no close, reopen, further Save, component change, caption repair or runtime.

### Pre-Save gate (fresh; before the Save)

| Check | Observed | Evidence |
|---|---|---|
| Tab list (before any selection) | Tab 0 (current): Designer, `MGForm=FX_Orders`; tab 1 Web Client. No tab selection was needed | tool output |
| Fresh untargeted snapshot | FX_Orders tab selected (`closable FX_Orders`); **Save enabled**; Undo enabled; footer `ScopeType: User`; **no dialog** | `snapshot-t4-01-designer-pre-save-fresh.yml` |
| Component count | **30** component rows (FormCollectionGrid, 10 GridColumns, 9 Pane (01) Statics, 10 detail controls) | snapshot-t4-01 |
| FX_ItmsPictureStatic | **absent** | snapshot-t4-01 |

Gate result: **passed**.

### Read-only check of FX_ItmsPictureEdit before the Save (no change)

The Properties panel still showed FX_ItmsPictureEdit from T3 (no selection change was made in T4 before the Save).

| Property | Observed (`snapshot-t4-02-props-readonly-pre-save.yml`; `t4-01` viewed) | Intended value | Match |
|---|---|---|---|
| Header | `FX_ItmsPictureEdit (Edit)` | (see Type) | — |
| Type (Design) | **Static** | Static | yes |
| Binding Type / Binding | Property / `object.FX_ItmsPicture` | kept | yes |
| Caption | `C(FX_ItmsPictureStatic)` | unchanged | yes |
| Size | **`37.05; 9`** (Width `37.05`; Height `9`) | `37.05; 9` | yes |
| Location | **`21.55; 23.75`** (Top 21.55; Left 23.75) | unchanged | yes |
| No Colon (Specific Attributes) | **True** | True | yes |
| Image and Text (Formatting) | **ImageOnly** | ImageOnly | yes |
| Components grid row (`FX_ItmsPictureEdit Edit object.FX_ItmsPicture 1 30`) Type column | **`Edit`** | (Static expected; disagreement recorded) | **disagreement, unchanged from T3** |

No intended value had changed, so the Save was allowed. The disagreement between the grid label (Edit) and the Properties Type value (Static) was recorded and carried into the Save as an open item.

### The Save (one invocation)

| Step | Observed | Evidence |
|---|---|---|
| Control | The Designer toolbar **Save** (`button "Save"`, ref e16 in the pre-Save snapshot). Not the top Delete, not Regenerate Form | snapshot-t4-02 |
| Invocation count | **1** (one click). No keyboard shortcut; no retry | tool output |
| Immediate native response | A non-modal notification toast (top-right): title **`Save`**, text **`Form [FX_Orders] and global object(s) were saved.`** (it has a close × control, not clicked; it self-dismisses). No modal prompt, error or warning | `t4-02` (viewed); find `saved` |
| Post-Save clean state | **Save disabled; Undo disabled** (snapshot-t4-03 `button "Save" [disabled]`, `button "Undo" [disabled]`); FX_Orders selected; footer `ScopeType: User`; **no dialog** | `snapshot-t4-03-post-save-visible-state.yml`; `t4-02`, `t4-03` (viewed) |
| Outcome | Saved (native response names the Form). Persistence beyond the client is **not yet verified** (no reopen). | — |
| Retry | **None.** The outcome is not uncertain: the native response and the disabled Save were both observed | — |

### Post-Save verification (observed; no modification)

- **30 components**: snapshot-t4-03 lists 30 component rows (FormCollectionGrid 1; GridColumns 10; Pane (01) Statics 9; detail controls 10). **FX_ItmsPictureStatic absent**.
- **FX_ItmsPictureEdit (Properties, read only):** Type **Static**; binding `object.FX_ItmsPicture` (Binding Type Property); Caption `C(FX_ItmsPictureStatic)`; Size `37.05; 9`; Location `21.55; 23.75`; No Colon **True**; Image and Text **ImageOnly**. Same as pre-Save.
- **Continuing disagreement (unchanged):** the Components-grid row Type column still reads **`Edit`** (`FX_ItmsPictureEdit Edit object.FX_ItmsPicture 1 30`), and the Properties header still reads **`FX_ItmsPictureEdit (Edit)`** (`t4-03`). The grid and header labels did not refresh after the Save.
- **Dialogs:** none open. The toast self-dismisses; it was not answered (it is a notification, not a prompt).

### Acceptance checks (T4)

| AC | T4 status | Evidence | Limits |
|---|---|---|---|
| **AC-4** (Save part) | **Supported (observed; same session)**: exactly one Designer Save; native response `Form [FX_Orders] and global object(s) were saved.`; Save and Undo disabled afterward; the Form open in User scope with 30 components | `t4-02`, `t4-03`; `snapshot-t4-03` | The reopen half (close and reopen once, verifying the stored state) is **not** in T4. The Save toast does not itself prove server persistence. The grid/header Type labels still show Edit. |
| **AC-3** (post-Save readback) | Properties values unchanged after the Save (Type Static, binding kept, Size `37.05; 9`, Location kept, No Colon True, ImageOnly); **grid and header labels still Edit** | `t4-03`; snapshot-t4-03 | Same session; the grid/header disagreement is unresolved until the reopen |
| AC-2 | 30 components; FX_ItmsPictureStatic absent after the Save | snapshot-t4-03 | Same as T2/T3 |
| AC-5, AC-6 | Not in T4 (AC-6 is the final report) | — | — |

### Action audit (T4; exact counts; this task only)

| Operation | Count | Notes |
|---|---|---|
| `browser_tabs` list | **1** | Before any selection. |
| `browser_tabs` select | **0** | Tab 0 was already current. |
| Untargeted snapshots (explicit `browser_snapshot`) | **3** | `snapshot-t4-01-designer-pre-save-fresh.yml`; `snapshot-t4-02-props-readonly-pre-save.yml`; `snapshot-t4-03-post-save-visible-state.yml`. |
| `browser_find` (read-only) | **3** | (1) regex for the `(Edit)` header and Type/Size values (matched the header only); (2) regex for the property names (no match); (3) find after the Save for `saved|alertdialog|Save|error|warning|dialog` (returned the toast). |
| Element clicks (successful / failed) | **1 / 0** | **The single Designer Save** (toolbar Save). |
| Designer Save invocations | **1** | Not retried. |
| Coordinate clicks / type / key presses / waits | **0 / 0 / 0 / 0** | None. |
| Mouse moves / wheel | **1 / 1** | Move to (1740, 600) over the Properties panel; wheel (0, −3000) to return the Properties panel to the top for the `t4-03` capture (view only). |
| Screenshots | **3** | `t4-01` (pre-Save), `t4-02` (immediate post-Save toast), `t4-03` (post-Save Properties top). |
| **Total browser calls in T4** | **13** | 1 tab list + 3 snapshots + 3 finds + 1 Save click + 1 mouse move + 1 wheel + 3 screenshots = 13. |
| Component deletions / Type changes / Size edits / No Colon / Image Only in T4 | **0 / 0 / 0 / 0 / 0** | None in T4 (cumulative values below). |
| Other component edits; strings; captions; renames | **0; 0; 0; 0** | None. |
| Designer top-toolbar Delete / Regenerate Form clicks | **0 / 0** | None. |
| Form close / reopen | **0 / 0** | Not in T4. |
| Runtime open / F4 / typed / saved / runtime close | **0 / 0 / 0 / 0 / 0** | Web Client not selected. |
| In-page / native dialogs answered | **0 / 0** | No dialog appeared; the toast was not answered. |
| IDO, property, class, SQL, checkout, FormSync, deployment changes | **0** | None. |
| Re-login / session-expiry / portal navigation | **0 / 0 / 0** | Session usable. |
| Refresh / restart / direct URL navigation | **0 / 0 / 0** | None. |
| Browser JavaScript / evaluate / console / network (worker-authored) | **0** | None. |
| Ref-not-found / recovery snapshots | **0 / 0** | None. |
| Portal banner dismissals | **0** | None visible. |

**Cumulative EXP-084 browser calls, T1 + T2 + T3 + T4:** 45 + 23 + 62 + 13 = **143**.

Cumulative budgets after T4: component deletions **1 of 1**; Type changes **1 of 1**; Size edits **1 of 1**; No Colon **1 of 1**; Image Only **1 of 1 (offered)**; **Designer Save 1 of 1 (used)**; Designer close/reopen **0 of 1**; runtime open **0 of 1**; F4 **0 of 1**; runtime close **0 of 1**; re-logins **0 of 1**. Other component edits **0**; strings **0**; runtime edits **0**; IDO changes **0**; checkout actions **0**.

### Worker-written-file inventory (T4)

- `experiments/EXP-084-hello-world-part-5-section-6b-fx-orders-picture-display.md` (edited: status header and this T4 section).
- `evidence/EXP-084/snapshot-t4-01-designer-pre-save-fresh.yml` (created by the snapshot tool).
- `evidence/EXP-084/snapshot-t4-02-props-readonly-pre-save.yml` (created by the snapshot tool).
- `evidence/EXP-084/snapshot-t4-03-post-save-visible-state.yml` (created by the snapshot tool).
- `evidence/EXP-084/t4-01-pre-save-configured-state-save-enabled.png` (created).
- `evidence/EXP-084/t4-02-post-save-native-toast-form-saved-clean.png` (created).
- `evidence/EXP-084/t4-03-post-save-properties-type-static-header-edit-label.png` (created).

Tool-generated, not worker-authored: Playwright page and console files under `evidence\playwright\` (for example `page-2026-10-14T05-03-55-468Z.yml`); outside the EXP-084 path (the operator's git review is authoritative).

### Decisive evidence (T4)

| File | Visible identity / scope / result | Proves | Does NOT prove |
|---|---|---|---|
| `t4-01` | FX_Orders; Save **active** (dirty); FX_ItmsPictureEdit selected; Properties Size `37.05; 9`, Height 9, Width 37.05, Location `21.55; 23.75`, No Colon True, Image and Text ImageOnly; grid row Type `Edit`; footer User | The pre-Save configured state (unchanged by T4) and the grid disagreement before the Save | That the values were stored |
| `t4-02` | Toast `Save` / `Form [FX_Orders] and global object(s) were saved.`; Save and Undo icons **greyed** (clean); FX_Orders tab; Properties Size `37.05; 9`, No Colon True; grid row Type `Edit`; footer User | **AC-4**: the native response of the single Save and the clean state immediately after it | That the stored definition reflects Static (the grid still shows Edit); a reopen |
| `t4-03` | Save and Undo greyed; Properties header `FX_ItmsPictureEdit (Edit)`; **Type Static**; Binding Type Property; Image and Text ImageOnly; Save greyed; footer User; grid row Type `Edit` | Post-Save Type Static in the Properties panel, with the header and grid still reading Edit | Which of the two labels reflects the stored definition |

Visibility notes: `t4-02` shows the toast over the top right; the Properties panel is scrolled down, so the Type row is not in that image (its value is in `t4-03` and the snapshot). The Components grid in each image shows rows 24–30 only; the 30-row list is in `snapshot-t4-03`.

### Limitations (T4)

- One Save (no retry). The toast is a transient notification; the Save's effect beyond the session is not verified until the reopen.
- The grid row Type column and the Properties header label still read `Edit` after the Save, while the Properties Type value reads Static. Unresolved.
- The Caption `C(FX_ItmsPictureStatic)` still refers to the deleted component. The brief forbids caption repair, so it was not touched.
- The canvas picture area was not visually verified in any T4 capture.
- Same session only; not database durability; not replay verification.

### Open questions and next permitted action (T4)

1. **No blocker in T4.** The single Save completed with a native response and a clean Form.
2. **Open (unresolved):** the grid Type column and header label show `Edit` after the Save, while the Properties Type value reads Static. The reopen (next task) is the test: if the reopened grid and header show Static and the Properties Type is Static, the disagreement was a stale client label; if they show Edit, the stored definition may differ from what the Properties panel showed.
3. **Next permitted action (separate authorization):** close the clean FX_Orders Designer Form once through its Form-tab control (no prompt expected: the Form is clean); reopen it once through the Form menu recent-forms entry; verify 30 components, FX_ItmsPictureStatic absent, FX_ItmsPictureEdit Type Static, binding `object.FX_ItmsPicture`, Size `37.05; 9`, Location `21.55; 23.75`, No Colon True and Image and Text ImageOnly, and the grid/header Type labels. Then the runtime check (F4 once).
4. The Form is **clean and open** at the end of T4. No further Save, close, reopen or runtime action was performed.

Classification remains **observed only, NOT replay_verified**.

---

## T5 — AC-4 clean close and reopen of FX_Orders; recovery check (cycle 4, task T5): Save 1 of 1 (T4 only); close 1; reopen 1; NOT run at runtime

- Task T5, cycle 4, worker session `c2479711-679d-48df-8757-f539531b86fe`, task_message_id `754146c6-bf4b-4d6b-8d22-1d24972f034a`, run `R-20261014-124924-3sU9`. Date 2026-10-14.
- Bounded T5 instruction: confirm identity, User scope, 30 components, Save and Undo disabled and no dialog; close the clean Form once through its Form-tab close control; if a save or discard prompt appears, do not discard or Save, document and stop; reopen once through Form > recent-forms; verify identity, User scope, clean state, 30 components, FX_ItmsPictureStatic absent and FX_ItmsPictureGridCol unchanged; read FX_ItmsPictureEdit (Components-grid Type column, Properties header, Design > Type, binding, Size, Location, No Colon, Image and Text, Caption) without changing it; record any Type disagreement; no Save, no second close or reopen, no property or caption change, no runtime.

### Pre-close gate (fresh)

| Check | Observed | Evidence |
|---|---|---|
| Tab list (before any selection) | Tab 0 (current): Designer, `MGForm=FX_Orders`; tab 1 Web Client. No tab selection was needed | tool output |
| Fresh untargeted snapshot | FX_Orders tab selected (`closable FX_Orders`); **Save disabled; Undo disabled**; footer `ScopeType: User`; **no dialog** | `snapshot-t5-01-pre-close-fresh.yml` |
| Component count | **30** rows (FormCollectionGrid 1; GridColumns 10; Pane (01) Statics 9; detail controls 10) | snapshot-t5-01 |
| FX_ItmsPictureStatic | **absent** | snapshot-t5-01 |
| Pre-close state of FX_ItmsPictureEdit (as left by T4) | Properties header `(Edit)`, Design Type Static, ImageOnly; grid row Type column still `Edit` (T4 disagreement) | `t5-01` (viewed) |

Gate result: **passed** (clean, User scope, 30 components, no dialog).

### Close (once)

| Step | Observed | Evidence |
|---|---|---|
| Control | The Form-tab control `closable FX_Orders` (ref e247), clicked **once** | tool output |
| Native response | **None**: no save or discard prompt, no alert, no toast | `snapshot`/`find` after the close; `t5-02` (viewed) |
| Post-close state | Empty canvas; no FX_Orders tab; no dialog; Save and Undo disabled; footer `ScopeType: User`; URL without `MGForm` | `t5-02` (viewed); find readback |

The close completed with no prompt. No discard or Save was issued.

### Reopen (once)

- Form menu (one click) → recent-forms entry `FX_Orders` (one click; the first recent entry, ref e1968). No Select Form dialog, no direct URL.
- Post-reopen: FX_Orders tab open and selected; URL again carries `MGForm=FX_Orders`.

### Reopened Form: identity, scope, clean state, inventory (observed)

| Check | Observed | Evidence |
|---|---|---|
| Identity | Form tab and heading `FX_Orders`; Form Properties: Name `FX_Orders`; Form Type Normal; Is Master True; Device Type Default; Version `User version for us…` | `t5-03` (viewed); snapshot-t5-03 |
| Scope | Footer `ScopeType: User` | `t5-03` |
| Clean state | **Save disabled; Undo disabled** | snapshot-t5-03; snapshot-t5-08 |
| Captions on canvas | Resolved (`Customer Name:`, `Item Description:`, `Order Total:`) | `t5-03` (viewed) |
| Component count | **30** (FormCollectionGrid 1; GridColumns 10; Pane (01) Statics 9; detail controls 10) | `snapshot-t5-06` (expanded Components tree); `t5-04` (top of grid, viewed) |
| FX_ItmsPictureStatic | **absent** | `snapshot-t5-06` |
| FX_ItmsPictureGridCol | Row `FX_ItmsPictureGridCol GridColumn object.FX_ItmsPicture 0 FormCollectionGrid 10` (unchanged); selected read-only: Caption **blank** (empty value cell), Type GridColumn, Binding `object.FX_ItmsPicture`, Size `10; 0`, Location `0; 0`, Tab Order 10 | `snapshot-t5-08`; find/grep readback |

### FX_ItmsPictureEdit (selection only; read-only)

Selected by one row click in the reopened Components grid (`snapshot-t5-07`, `t5-05`, `t5-06`):

| Representation / property | Reopened value | Expected (T3/T4) | Result |
|---|---|---|---|
| **Components-grid Type column** (row `FX_ItmsPictureEdit Static object.FX_ItmsPicture 1 30`, `snapshot-t5-06`) | **Static** (icon changed to the Static glyph, `t5-04`/`t5-05`) | Static | **match; the T4 disagreement is resolved** |
| **Properties header** | `FX_ItmsPictureEdit (Static)` (`t5-05`; snapshot-t5-07 textbox) | Static | match (was `(Edit)` after T4) |
| Design > Type | **Static** | Static | match |
| Binding Type / Binding | Property / `object.FX_ItmsPicture` | kept | match |
| Size | **`37.05; 9`** (Width `37.05`; Height `9`) | height 9, width 37.05 | match |
| Location | **`21.55; 23.75`** (Top `21.55`; Left `23.75`) | unchanged | match |
| No Colon (Specific Attributes) | **True** | True | match |
| Image and Text (Formatting) | **ImageOnly** | ImageOnly | match |
| Caption | `C(FX_ItmsPictureStatic)` | unchanged | match (not edited) |
| Tab Order | 30 | 30 | match |

No value reverted. No recovery failure: the Type and every essential property survived the close and reopen. Nothing was changed in T5.

### Acceptance checks (T5)

| AC | T5 status | Evidence | Limits |
|---|---|---|---|
| **AC-4** (close and reopen part) | **Supported (observed; same session; weak boundary)**: one clean close with no prompt; one reopen from the recent-forms entry; the reopened Form is User scope, clean, 30 components, FX_ItmsPictureStatic absent, FX_ItmsPictureGridCol unchanged; FX_ItmsPictureEdit's Type, binding, Size, Location, No Colon and ImageOnly recovered; the Type disagreement after the T4 Save is resolved in the reopened client | `t5-02` (close, no prompt), `t5-03` (reopened identity), `t5-04` (grid), `t5-05` (Properties Design/Data Source), `t5-06` (Layout and No Colon), `snapshot-t5-06`, `snapshot-t5-07`, `snapshot-t5-08` | **Same-session weak boundary**: the close and reopen happened in the same browser session and may reflect client-side caching. The reopen is not a database check, not a server-side read, not replay verification. The Save toast of T4 and this reopen do not together prove durability. |
| AC-2 (re-confirmed on reopen) | 30 components; FX_ItmsPictureStatic absent; FX_ItmsPictureGridCol unchanged | `snapshot-t5-06`, `snapshot-t5-08` | Same as T2 |
| AC-3 (re-confirmed on reopen) | All AC-3 values recovered on reopen (see table) | `t5-05`, `t5-06`, `snapshot-t5-07` | Same session |
| AC-5, AC-6 | Not in T5 (runtime not opened; AC-6 is the final report) | — | — |

### Type representations: disagreement and resolution (observed)

| Moment | Components-grid Type | Properties header | Properties Design > Type |
|---|---|---|---|
| T3, before Save | Edit | `(Edit)` | Static |
| T4, after Save | Edit | `(Edit)` | Static |
| T5, before close | Edit (visible in `t5-01`, row `FX_ItmsPictureEdit Edit`) | `(Edit)` (visible in `t5-01`) | Static |
| T5, after reopen | **Static** (row `FX_ItmsPictureEdit Static object.FX_ItmsPicture 1 30`) | **`(Static)`** | **Static** |

The disagreement persisted through the T4 Save and the Designer session, and disappeared after the close and reopen. Under the bounded instruction this is **not** assumed to show which representation was authoritative. It does show that the reopened client renders the component as Static in every place it reports Type, while the pre-close client did not. The weak boundary above applies: the reopen may still come from a client-side cache.

### Action audit (T5; exact counts; this task only)

| Operation | Count | Notes |
|---|---|---|
| `browser_tabs` list | **1** | Before any selection. |
| `browser_tabs` select | **0** | Tab 0 was already current. |
| Untargeted snapshots (explicit `browser_snapshot`) | **7** | `snapshot-t5-01-pre-close-fresh.yml`; `snapshot-t5-03-reopened-fresh-inventory.yml`; `snapshot-t5-04-reopened-details-expanded.yml`; `snapshot-t5-05-reopened-components-tab.yml`; `snapshot-t5-06-reopened-components-expanded-inventory.yml`; `snapshot-t5-07-reopened-fx_itmspictureedit-selected-props.yml`; `snapshot-t5-08-reopened-gridcol-selected-readback.yml`. |
| `browser_find` (read-only) | **4** | (1) post-close check for dialogs and tab; (2) `Form` (menu locate); (3) `FX_Orders` (recent-forms locate); (4) `Details` (panel locate). |
| Element clicks (successful / failed) | **8 / 0** | (1) closable FX_Orders Form-tab **close (1)**; (2) Form menu; (3) recent-forms FX_Orders **reopen (1)**; (4) Details Expand Panel (view); (5) Components tab (view); (6) Components grid Expand (view); (7) FX_ItmsPictureEdit row (selection only); (8) FX_ItmsPictureGridCol row (selection only). |
| Coordinate clicks | **0** | None. |
| Mouse moves / wheel | **1 / 1** | Move to (1740, 600) over the Properties panel; wheel (0, 600) to scroll the panel to Layout and Miscellaneous (view). |
| `browser_type` / key presses / waits | **0 / 0 / 0** | None. |
| Screenshots | **6** | `t5-01` (pre-close), `t5-02` (post-close), `t5-03` (reopened identity), `t5-04` (reopened grid top), `t5-05` (FX_ItmsPictureEdit Design and Data Source), `t5-06` (Layout and No Colon). |
| **Total browser calls in T5** | **28** | 1 tab list + 7 snapshots + 4 finds + 8 clicks + 1 mouse move + 1 wheel + 6 screenshots = 28. |
| **Form close / reopen (cumulative for EXP-084)** | **close 1 of 1; reopen 1 of 1** | Both in T5. |
| Designer Save (cumulative) | **1 of 1** (T4) | **No Save in T5.** |
| Component deletions / Type changes / Size edits / No Colon / Image Only (cumulative) | **1 / 1 / 1 / 1 / 1 (offered)** | None in T5. |
| Other component edits; strings; captions; renames | **0; 0; 0; 0** | None. |
| Designer top-toolbar Delete / Regenerate Form clicks | **0 / 0** | None. |
| Close/reopen prompts answered | **0** | No prompt appeared. |
| Runtime open / F4 / typed / saved / runtime close | **0 / 0 / 0 / 0 / 0** | Runtime not accessed in T5 (AC-5 remains open). |
| Native browser dialogs / in-page dialogs answered | **0 / 0** | None. |
| IDO, property, class, SQL, checkout, FormSync, deployment changes | **0** | None. |
| Re-login / session-expiry / portal navigation | **0 / 0 / 0** | Session usable. |
| Refresh / restart / direct URL navigation | **0 / 0 / 0** | None. |
| Browser JavaScript / evaluate / console / network (worker-authored) | **0** | None. |
| Ref-not-found / recovery snapshots | **0 / 0** | None. |
| Portal banner dismissals | **0** | None visible. |

**Cumulative EXP-084 browser calls, T1 + T2 + T3 + T4 + T5:** 45 + 23 + 62 + 13 + 28 = **171**.

Cumulative budgets after T5: component deletions **1 of 1**; Type changes **1 of 1**; Size edits **1 of 1**; No Colon **1 of 1**; Image Only **1 of 1 (offered)**; Designer Save **1 of 1**; Designer close/reopen **1 of 1**; runtime open **0 of 1**; F4 **0 of 1**; runtime close **0 of 1**; re-logins **0 of 1**. Other component edits **0**; strings **0**; runtime edits **0**; IDO changes **0**; checkout actions **0**.

### Worker-written-file inventory (T5)

- `experiments/EXP-084-hello-world-part-5-section-6b-fx-orders-picture-display.md` (edited: status header and this T5 section).
- `evidence/EXP-084/snapshot-t5-01-pre-close-fresh.yml` (created by the snapshot tool).
- `evidence/EXP-084/snapshot-t5-03-reopened-fresh-inventory.yml` (created by the snapshot tool).
- `evidence/EXP-084/snapshot-t5-04-reopened-details-expanded.yml` (created by the snapshot tool).
- `evidence/EXP-084/snapshot-t5-05-reopened-components-tab.yml` (created by the snapshot tool).
- `evidence/EXP-084/snapshot-t5-06-reopened-components-expanded-inventory.yml` (created by the snapshot tool).
- `evidence/EXP-084/snapshot-t5-07-reopened-fx_itmspictureedit-selected-props.yml` (created by the snapshot tool).
- `evidence/EXP-084/snapshot-t5-08-reopened-gridcol-selected-readback.yml` (created by the snapshot tool).
- `evidence/EXP-084/t5-01-pre-close-clean-save-undo-disabled.png` (created).
- `evidence/EXP-084/t5-02-post-close-no-prompt-form-tab-gone.png` (created).
- `evidence/EXP-084/t5-03-reopened-form-identity-user-clean.png` (created).
- `evidence/EXP-084/t5-04-reopened-components-grid-type-static-30-rows.png` (created).
- `evidence/EXP-084/t5-05-reopened-fx_itmspictureedit-design-datasource-type-static.png` (created).
- `evidence/EXP-084/t5-06-reopened-fx_itmspictureedit-layout-no-colon.png` (created).

Tool-generated, not worker-authored: Playwright page and console files under `evidence\playwright\` (for example `page-2026-10-14T05-06-14-399Z.yml` through `page-2026-10-14T05-07-25-804Z.yml`); outside the EXP-084 path (the operator's git review is authoritative).

### Decisive evidence (T5)

| File | Visible identity / scope / result | Proves | Does NOT prove |
|---|---|---|---|
| `t5-01` | FX_Orders; Save and Undo greyed; Properties FX_ItmsPictureEdit Type Static, ImageOnly; grid row Type `Edit`; footer User | The pre-close clean state, with the T4 disagreement still present | The stored definition |
| `t5-02` | Empty designer canvas; no FX_Orders tab; no dialog; footer User | **AC-4**: the single close completed with no prompt | Server-side persistence |
| `t5-03` | Reopened FX_Orders; Form Properties Name FX_Orders, Normal, Is Master True; footer User; Save greyed; canvas captions resolved | **AC-4**: reopened identity, scope and clean state | Component details (see `t5-04`–`t5-06`) |
| `t5-04` | Components tab (top of the grid): FormCollectionGrid and GridColumns, `Pane (00)`; Save greyed | Reopened grid top rows; the full 30-row list is in `snapshot-t5-06` | Rows below the viewport |
| `t5-05` | FX_ItmsPictureEdit (Static) selected; grid row Static (glyph and type); header `(Static)`; Design Type Static; Binding Property `object.FX_ItmsPicture`; Image and Text ImageOnly; footer User | **AC-4** recovery of Type, binding and ImageOnly; the Type representations agree after reopen | Size and No Colon (see `t5-06`) |
| `t5-06` | Same component: Size `37.05; 9`; Width 37.05; Height 9; Location `21.55; 23.75`; Top 21.55; Left 23.75; Tab Order 30; Specific Attributes: **No Colon True** | **AC-4** recovery of Size, Location and No Colon | Save persistence beyond the client |

Screenshot limitations: the canvas picture area is not in any T5 capture in a way that shows the picture (the picture component lies below the captured canvas region). Screenshots show the top of the grid and the Properties panel; full lists are in snapshots.

### Limitations (T5)

- **Same-session weak boundary:** the close and reopen were performed in one browser session. The reopened values may come from the client's cache rather than a fresh server read. T5 does not establish database durability or replay.
- The reopened FX_ItmsPictureEdit's canvas appearance (the picture, its look, any caption or colon) was not observed; runtime was not opened.
- The GridCol Caption was read blank after reopen, but only through its Caption value cell in the accessibility tree; no screenshot of it exists.
- The Caption `C(FX_ItmsPictureStatic)` still refers to a deleted component. It was not edited, as the brief requires.

### Open questions and next permitted action (T5)

1. **No blocker in T5.** The close and reopen completed; the recovery check passed on all essential properties.
2. **Type disagreement after the T4 Save: resolved in the reopened client.** Whether this reflects the stored definition or client state is not determined by T5 (same-session weak boundary).
3. **Next permitted action (separate authorization):** open FX_Orders once in the Web Client read-only through Form > Open > Select Form, leave criteria blank, press F4 once, record the two orders and picture areas, and close the runtime Form once (answer No to any new-record save prompt).
4. The reopened Form is **clean and open** at the end of T5, as the bounded instruction requires. No Save, no second close or reopen, and no runtime action were performed.

Classification remains **observed only, NOT replay_verified**.

---

## T6 — AC-5 runtime checkpoint: read-only blank-criteria query and per-order picture check (cycle 5, task T6): runtime open 1; Filter in Place 1; F4 1; runtime close 1

- Task T6, cycle 5, worker session `c2479711-679d-48df-8757-f539531b86fe`, task_message_id `b08a0fd2-7c93-47b9-8f3d-41782ba9b9ae`, run `R-20261014-124924-3sU9`. Date 2026-10-14.
- Bounded T6 instruction: leave the Designer unchanged; select the Web Client; open FX_Orders once through Form > Open > Select Form; record mode; switch to Filter in Place only if needed; blank criteria; one F4; record the rows and fields against EXP-083; select order 1 and order 2 by row-number cell; describe the pictures (no forced agreement with the kickoff or EXP-063-R2); no typing, no list values, no create, no save; close the runtime Form once; no final acceptance documentation in this task.

### Preflight (Web Client; no Designer action)

| Check | Observed | Evidence |
|---|---|---|
| Tab list (before the first selection) | Tab 0: Designer, `MGForm=FX_Orders` (clean since T5, not touched). Tab 1: Mongoose Web Client, `favoriteContext=IdoProperties` | tool output |
| Tab 1 selected; fresh snapshot | Web Client selected; the page shows the pre-existing **IDO Properties** form (Filter in Place, blank record, not touched). **No** Session Expired modal, **no** Infor sign-in page, **no** `portal-notification` banner, no native dialog | `snapshot-t6-01-webclient-fresh-start.yml`; `t6-01` (viewed) |
| Session | Usable; no re-login (count **0**); no refresh, no restart, no direct navigation | — |
| Console line | The Web Client's console line now reads `29 errors, 2 warnings`. Not inspected (the brief forbids console inspection) | snapshot line |

### Open FX_Orders once (Form > Open > Select Form)

| Step | Observed | Evidence |
|---|---|---|
| Form menu (one click) | Menu lists `Open`, `Close and Save Changes`, `Close and Cancel Changes`, `Export to File`, `Definition`, `Sign Out`, recent forms (`FX_Orders`, `IDO Properties`, …) | snapshot-t6-01 |
| `Open` (one click) | **Select Form** dialog. Caption/Name list shows **one row**: `FX_Orders` / `FX_Orders`, already highlighted. The Filter box already read `FX_Orders` and Filter By `Name`. **The filter text was not typed by the worker in T6** (it was carried over from an earlier picker session); no row click was needed | `t6-02` (viewed); snapshot read |
| OK (one click) | The Select Form dialog closed; URL became `favoriteContext=FX_Orders`; the FX_Orders tab opened beside the pre-existing IDO Properties tab | `t6-03` (viewed) |

**Selected Form identity:** FX_Orders (Select Form row Caption `FX_Orders`, Name `FX_Orders`).

### Runtime mode and switch

- **Mode on open: Add mode.** The grid showed a new-record star marker on row 1; the Order Number textbox held the add-mode placeholder `3` and had focus; Customer ID, Item and the derived fields were blank. The status bar read `Order Number (Object 1 of 1)` (it shows no mode name; the mode was identified from the star marker and the placeholder row).
- **Switch:** one click on the toolbar **Filter in Place** button (ref f1e32). The status bar then read `Filter in Place`, the FX_Orders tab showed the filter icon, the star marker was gone and the row showed `1`. Every criterion field was blank (`t6-04`, viewed).

### F4 (once), with every criterion blank

- One `F4` key press, with no criterion typed.
- Result: **two rows** (row cells `1` and `2`); the status bar read `Customer ID (Object 1 of 2)`. The Customer ID combobox took focus with `FX001` selected (focus only; no value was typed or chosen) (`t6-05`, viewed).
- Comparison with the EXP-083 T5 baseline (two rows; order 1 = 1/FX001/…/dumbbell/…/90.00; order 2 = 2/FX002/…/eggs/…/6.99): **the same two orders and the same visible field values**. The number of rows matches, and no data changed.

### Order 1 (row-number cell 1) — observed

- Selected with one click at the row-number cell `1` (about x 318, y 190). The row-number cells are **not exposed in the accessibility tree**, so this is a coordinate click (documented as a disclosed exception). Status bar: `(Object 1 of 2)`.
- Fields (`t6-06`, viewed; snapshot `snapshot-t6-03`): Order Number `1`; Customer ID `FX001`; Customer Name `Factory test one`; Address `1 Factory Street`; Item `dumbbell`; Item Description `45 pound iron`; Cost `45.00`; Count `2`; Order Total `90.00`. **Matches EXP-083 T5 order 1 on every field shown.**
- **Picture area (observed):** a **visible picture** of a **sitting puppy with a golden/tan coat, open mouth and dark eyes**, on a white background. It is consistent with the expected **golden retriever puppy** (visual judgement; not a byte comparison). **No visible caption text** is shown beside or below it. **No visible colon.**
- Accessibility: the picture element carries the accessible name **`C(FX_ItmsPictureStatic)`** (`snapshot-t6-03`). That name is the component's caption expression; it is **not visible text** on the form.

### Order 2 (row-number cell 2) — observed

- Selected with one click at the row-number cell `2` (about x 318, y 216), coordinate click as above. Status bar: `(Object 2 of 2)`.
- Fields (`t6-07`, viewed; snapshot `snapshot-t6-04`): Order Number `2`; Customer ID `FX002`; Customer Name `Factory test two`; Address `2 Factory Street`; Item `eggs`; Item Description `cage free`; Cost `6.99`; Count `1`; Order Total `6.99`. **Matches EXP-083 T5 order 2 on every field shown.**
- **Picture area (observed; `t6-07`, `t6-08` device-scale, same resolution):** a **visible picture** showing **a greyish-tan, roughly round head with two dark eyes and a lighter area at the top**, with **four small separate brown-tan fragments** arranged below and to the sides. It is **not** a faint pale sketch, and it does **not** clearly read as a small complete grey-faced figure; the fragments do not form a recognisable body.
- **Mismatch documented (not forced):** the kickoff expects "a small grey-faced figure". EXP-063-R2 describes the eggs asset (`assets/eggs.png`) as a "faint pale sketch-like shape", and EXP-063-R2 T1 recorded an eggs picture showing a "Shiba-style dog" before the import. The picture now shown is **not** the faint pale sketch. It partly fits "grey-faced" (greyish face with eyes) and does not fit "figure" as a complete small figure. The observed picture is recorded as observed; it is not claimed to match either description.
- **No visible caption text. No visible colon.** The picture element's accessible name is again `C(FX_ItmsPictureStatic)`.

### Runtime close (once)

- One click on the runtime tab's close control `Close Panel FX_Orders` (ref f1e939). **No prompt appeared** (no "save new record" prompt; no discard prompt). The URL returned to `favoriteContext=IdoProperties`, and the FX_Orders tab is gone (`t6-09`, viewed). The pre-existing IDO Properties form remains open and untouched (its own state, not part of this experiment).
- Nothing was typed, chosen, created, saved or deleted at runtime, so the "answer No" branch was not needed.

### AC-5 evidence matrix (T6)

| Sub-check | Observed | Evidence | Status |
|---|---|---|---|
| Runtime opened once from Form > Open > Select Form | Select Form OK; FX_Orders tab opened | `t6-02`, `t6-03` | **observed** |
| Mode on open and switch | Add mode on open; switched once to Filter in Place (toolbar); status bar `Filter in Place` | `t6-03`, `t6-04` | **observed** |
| One blank-criteria query (F4 once) | Two rows; status `(Object 1 of 2)` after F4 | `t6-05`; snapshot-t6-03 | **observed** |
| Order 1 fields vs EXP-083 | All nine fields match | `t6-06` | **observed** |
| Order 1 picture | Visible golden-retriever-style puppy; no visible caption; no visible colon | `t6-06` | **observed** (visual judgement) |
| Order 2 fields vs EXP-083 | All nine fields match | `t6-07` | **observed** |
| Order 2 picture | Visible greyish-tan face with dark eyes plus four fragments; **does not clearly match** the kickoff's "small grey-faced figure" nor the EXP-063-R2 "faint pale sketch" description | `t6-07`, `t6-08` | **observed; mismatch recorded** |
| Caption or colon | None visible on either order; the picture element's accessible name is `C(FX_ItmsPictureStatic)` on both | `snapshot-t6-03`, `snapshot-t6-04` | **observed (accessibility name only)** |
| Nothing typed, chosen, created, saved | 0 typed; 0 list values; 0 New; 0 Save; 0 Delete at runtime | action audit | **observed** |
| Runtime closed once; no prompt | One close; no prompt | `t6-09` | **observed** |

**AC-5 status:** supported at the observed, same-session UI level for the two-row query, the field values and the runtime close. The picture check is **partly supported**: order 1 shows the expected golden-retriever-style puppy; order 2 shows a visible picture that **does not match** either expected description clearly, and this is recorded as an observed outcome, not repaired or forced.

### Designer and runtime final state

- **Designer:** untouched in T6. Last observed clean and open after T5 (Save and Undo disabled; FX_Orders; `ScopeType: User`; 30 components; FX_ItmsPictureStatic absent). **Not re-read in T6** (the Designer tab was not selected), so its state is carried forward from T5.
- **Runtime:** FX_Orders closed once; no prompt; no unsaved record. The Web Client shows the pre-existing IDO Properties form (Filter in Place; blank; untouched).

### Action audit (T6; exact counts; this task only)

| Operation | Count | Notes |
|---|---|---|
| `browser_tabs` list | **1** | Before the first selection. |
| `browser_tabs` select | **1** | Tab 1 (Web Client). Tab 0 not selected. |
| Untargeted snapshots (explicit `browser_snapshot`) | **4** | `snapshot-t6-01-webclient-fresh-start.yml`; `snapshot-t6-02-runtime-fx_orders-opened-pre-mode-check.yml`; `snapshot-t6-03-runtime-after-f4-two-rows.yml`; `snapshot-t6-04-runtime-order-2-eggs-state.yml`. |
| `browser_find` (read-only) | **5** | (1) `Select Form` (no match); (2) regex for menu items; (3) regex for the Select Form dialog and OK/Cancel; (4) `^[12]$` for row-number cells (no match); (5) regex for the FX_Orders tab close control. |
| Element clicks (successful / failed) | **5 / 0** | (1) Form menu; (2) Form > Open; (3) Select Form OK; (4) toolbar **Filter in Place** (the one mode switch); (5) **Close Panel FX_Orders** (the one runtime close). |
| Coordinate clicks | **2** | Row-number cell 1 (318, 190) and row-number cell 2 (318, 216) — navigation only; the cells are not in the accessibility tree. |
| Key presses | **1** | **F4 (once)**; no other key. |
| `browser_type` | **0** | None. |
| Screenshots | **9** | `t6-01` (Web Client start); `t6-02` (Select Form); `t6-03` (runtime opened, Add mode); `t6-04` (after Filter in Place, before F4); `t6-05` (after F4, two rows); `t6-06` (order 1); `t6-07` (order 2); `t6-08` (order 2, device scale); `t6-09` (post-close). |
| Mouse moves / wheel / hover / drag | **0 / 0 / 0 / 0** | None. |
| Waits | **0** | None. |
| **Total browser calls in T6** | **28** | 1 tab list + 1 select + 4 snapshots + 5 finds + 5 element clicks + 2 coordinate clicks + 1 key press + 9 screenshots = 28. |
| **Runtime open / Filter in Place switch / F4 / runtime close** | **1 / 1 / 1 / 1** | The AC-5 budgets. |
| Runtime typed / list values / New / Save / Delete / Import | **0 / 0 / 0 / 0 / 0 / 0** | None. |
| Runtime save or new-record prompts answered | **0** | No prompt appeared. |
| Designer actions (any) | **0** | Designer tab not selected; not saved; not closed. |
| Component deletions / Type changes / Size edits / No Colon / Image Only (cumulative) | **1 / 1 / 1 / 1 / 1 (offered)** | None in T6. |
| Designer Save (cumulative) | **1 of 1** (T4) | None in T6. |
| Designer close / reopen (cumulative) | **1 / 1** (T5) | None in T6. |
| Other component edits; strings; captions; renames | **0; 0; 0; 0** | None. |
| IDO, property, class, SQL, checkout, FormSync, deployment changes | **0** | None. |
| Re-login / session-expiry / portal navigation | **0 / 0 / 0** | Session usable; no sign-in or expiry seen. |
| Refresh / restart / direct URL navigation | **0 / 0 / 0** | None. |
| Browser JavaScript / evaluate / console / network inspection | **0** | None (the console counter changed; not inspected). |
| Native browser dialogs / in-page dialogs left open | **0 / 0** | The Select Form dialog was answered with OK. |
| Ref-not-found / recovery snapshots / timeouts | **0 / 0 / 0** | None. |
| Portal banner dismissals | **0** | None visible. |

**Cumulative EXP-084 browser calls, T1 + T2 + T3 + T4 + T5 + T6:** 45 + 23 + 62 + 13 + 28 + 28 = **199**.

Cumulative budgets after T6: component deletions **1 of 1**; Type changes **1 of 1**; Size edits **1 of 1**; No Colon **1 of 1**; Image Only **1 of 1 (offered)**; Designer Save **1 of 1**; Designer close/reopen **1 of 1**; runtime open **1 of 1**; F4 **1 of 1**; runtime close **1 of 1**; re-logins **0 of 1**. Other component edits **0**; strings **0**; runtime edits **0**; IDO changes **0**; checkout actions **0**.

### Worker-written-file inventory (T6)

- `experiments/EXP-084-hello-world-part-5-section-6b-fx-orders-picture-display.md` (edited: status header and this T6 section).
- `evidence/EXP-084/snapshot-t6-01-webclient-fresh-start.yml` (created by the snapshot tool).
- `evidence/EXP-084/snapshot-t6-02-runtime-fx_orders-opened-pre-mode-check.yml` (created by the snapshot tool).
- `evidence/EXP-084/snapshot-t6-03-runtime-after-f4-two-rows.yml` (created by the snapshot tool).
- `evidence/EXP-084/snapshot-t6-04-runtime-order-2-eggs-state.yml` (created by the snapshot tool).
- `evidence/EXP-084/t6-01-webclient-start-state.png` (created).
- `evidence/EXP-084/t6-02-select-form-dialog-fx_orders-filtered.png` (created).
- `evidence/EXP-084/t6-03-runtime-fx_orders-opened-mode-before-f4.png` (created).
- `evidence/EXP-084/t6-04-runtime-after-filter-in-place-before-f4.png` (created).
- `evidence/EXP-084/t6-05-runtime-after-f4-blank-criteria-result.png` (created).
- `evidence/EXP-084/t6-06-runtime-order-1-dumbbell-picture-row1.png` (created).
- `evidence/EXP-084/t6-07-runtime-order-2-eggs-picture-row2.png` (created).
- `evidence/EXP-084/t6-08-runtime-order-2-eggs-picture-device-scale-detail.png` (created; same resolution as `t6-07`).
- `evidence/EXP-084/t6-09-runtime-post-close-no-prompt.png` (created).

Tool-generated, not worker-authored: Playwright page and console files under `evidence\playwright\` (for example `page-2026-10-14T05-09-52-747Z.yml` through `page-2026-10-14T05-11-13-277Z.yml`, and `console-2026-10-14T05-09-42-618Z.log`); outside the EXP-084 path (the operator's git review is authoritative).

### Decisive evidence (T6)

| File | Visible identity / scope / result | Proves | Does NOT prove |
|---|---|---|---|
| `t6-02` | Select Form dialog; one row `FX_Orders`/`FX_Orders`, highlighted; filter text `FX_Orders` (carried over) | The Form picker offered FX_Orders once; the route was Form > Open | That the filter text was not left by an earlier worker action (carried over; not typed in T6) |
| `t6-03` | FX_Orders runtime, Add mode: new-row placeholder `3`, Order Number focused, blank fields | The runtime opened in Add mode | Stored data |
| `t6-04` | Status bar `Filter in Place`; all criteria blank; FX_Orders filter icon; star marker gone | The mode switch to Filter in Place and the blank criteria before F4 | That F4 has run |
| `t6-05` | Two rows (1 and 2); status `Customer ID (Object 1 of 2)`; order 1 displayed; Customer ID focused, FX001 selected (not typed) | **AC-5** one blank-criteria query returned two orders | Edit state; the rendered picture only shows the first record here |
| `t6-06` | Order 1: 1/FX001/Factory test one/1 Factory Street/dumbbell/45 pound iron/45.00/2/90.00; **visible golden-retriever-style puppy**; no visible caption or colon; `(Object 1 of 2)` | **AC-5** order 1 fields and picture (visual judgement) | Byte-level match; accessibility name `C(FX_ItmsPictureStatic)` is not visible text |
| `t6-07` / `t6-08` | Order 2: 2/FX002/Factory test two/2 Factory Street/eggs/cage free/6.99/1/6.99; **visible greyish-tan face with dark eyes and four fragments**; no visible caption or colon; `(Object 2 of 2)` | **AC-5** order 2 fields; picture visible and recorded; **mismatch with the expected description recorded** | That the picture is the intended eggs image; the fragments' meaning |
| `t6-09` | Runtime FX_Orders closed; IDO Properties form remains (pre-existing); no prompt | **AC-5** runtime closed once without a prompt | Designer state (not in this image) |

Limitation of the screenshots: the picture element's accessibility name `C(FX_ItmsPictureStatic)` is recorded from snapshots (`snapshot-t6-03`, `snapshot-t6-04`), not from a screenshot.

### Limitations (T6)

- Same session only; not database durability; not replay verification.
- The row-number cells are not in the accessibility tree; their clicks were coordinate clicks (navigation only) at the visible cell positions.
- The Select Form filter `FX_Orders` was pre-filled from an earlier picker session; the worker did not type it in T6. The coordinator may compare this with the AC-4 "nothing typed" wording (as EXP-083 raised).
- The Customer ID combobox took focus after F4 (no typed value). Nothing was typed or chosen.
- The picture judgement is visual; order 2's picture does not clearly match either expected description, and no repair or repeat query was made, as the brief requires.
- The Designer was not re-read in T6; its state is carried from T5.
- The Web Client console counter (29 errors, 2 warnings) was not inspected.

### Open questions and next permitted action (T6)

1. **No blocker in T6.** The runtime query, both order checks and the single close completed.
2. **AC-5 open point:** order 2's picture does not clearly match the expected description. The coordinator should decide whether this is an acceptable observed outcome, or whether a separately authorized check of the stored image (not in this experiment's scope) is needed. Not interpreted here.
3. **Next step (not performed):** final acceptance documentation (AC-6 report), which the brief reserves for a later task.

Classification remains **observed only, NOT replay_verified**.

---

## T7 — documentation-only AC-5 picture-identity reconciliation (cycle 6, task T7): zero browser calls; zero Mongoose changes

- Task T7, cycle 6, worker session `c2479711-679d-48df-8757-f539531b86fe`, task_message_id `80099fa7-1b7f-4019-8b0d-605ed633aea6`, run `R-20261014-124924-3sU9`. Date 2026-10-14.
- Bounded T7 instruction: make no browser call and no Mongoose change; do not reopen, re-run F4 or change any component, data or caption; review the T6 runtime screenshots and the EXP-063-R2 record and images; inspect `assets/eggs.png` read-only if permitted; classify (a) the runtime depiction, (b) the reference and historical depictions, (c) whether visual evidence establishes identity; reconcile visibility, caption and colon; record the pre-populated Select Form field; write a comparison note; update only this record; do not finalise or claim acceptance.

### Inputs reviewed (read-only; no file modified)

- Runtime: `evidence/EXP-084/t6-06-runtime-order-1-dumbbell-picture-row1.png`, `t6-07-runtime-order-2-eggs-picture-row2.png`, `t6-08-runtime-order-2-eggs-picture-device-scale-detail.png` (same resolution as `t6-07`).
- Reference assets (operator folder, read only): `assets/eggs.png`, `assets/dumbbell.png`.
- EXP-063-R2 record (`experiments/EXP-063-R2-hello-world-part-4-section-5-import-item-pictures.md`) sections 6, 7, 8, 9 and the T8 outcome section (lines ~413–424); its T7 report `evidence/EXP-063-R2/T7-ac7-close-reopen-recovery-report.md` §5; and the historical captures `evidence/EXP-063-R2/t1-02-runtime-fx-items-record2-eggs-baseline.png`, `t3-04-after-upload-eggs-picture-and-modified-state.png` and `t7-04-after-reopen-eggs-item-fields-picture.png`.

### (a) What the current runtime screenshots visibly depict

| Order | Picture | Caption text | Colon |
|---|---|---|---|
| 1 dumbbell (`t6-06`) | Visible golden-coated sitting puppy, open mouth | none visible | none visible |
| 2 eggs (`t6-07`, `t6-08`) | Visible greyish-tan rounded head with two dark eyes and four small tan fragments below and to the sides | none visible | none visible |

The picture element's accessibility name on both orders is `C(FX_ItmsPictureStatic)` (snapshots `t6-03`, `t6-04`). It is the caption expression, not visible text.

### (b) What the reference asset and historical screenshots actually depict

- `assets/dumbbell.png`: golden sitting puppy with open mouth and dark eyes (the same subject as `t6-06`).
- `assets/eggs.png`: grey-tan rounded head with two dark eyes and four separate tan fragments (the same figure as `t6-07`).
- EXP-063-R2 `t3-04` (eggs row immediately after the upload of `eggs.png`): the same head-and-four-fragments figure.
- EXP-063-R2 `t1-02` (eggs row before import) and `t7-04` (eggs row after the single close and reopen): a seated shiba-style dog, not the figure.

### (c) Whether visual evidence establishes that the runtime picture is the intended picture

- **Order 1 (dumbbell):** visually consistent with `assets/dumbbell.png`. Byte identity not established.
- **Order 2 (eggs):** visually consistent with `assets/eggs.png` and with `t3-04`. The match is strong (same head, same two dark eyes, same four fragments in the same arrangement), not vague resemblance. The wording differs: the kickoff says "small grey-faced figure", EXP-063-R2 says "faint pale sketch-like shape". The difference in wording does not reject the match. Byte or hash identity is **not established** because no byte comparison is available in this environment.
- **Conflict in the historical record:** EXP-063-R2 T7 §5 and its T8 summary state that the reopened eggs row (`t7-04`) matches `assets/eggs.png`. The capture `t7-04` shows a shiba-style dog on that row, so the claim is contradicted by its own screenshot. The T1 eggs baseline (`t1-02`) also shows the shiba. The cause is **not established** (a stored-value difference, a display difference or a misattributed capture cannot be distinguished from the screenshots). Recorded as an unresolved conflict inside EXP-063-R2; not resolved here.
- **Decisive contradiction for the EXP-084 runtime picture:** none. The EXP-084 runtime eggs picture matches the asset and the post-upload capture. The contradiction is in the EXP-063-R2 reopen evidence for the same record.

### Reconciliation: visibility, caption and colon

Both runtime pictures are **visible**. Neither order shows visible caption text or a visible colon (T6 captures `t6-06`, `t6-07`, `t6-08`). This holds regardless of picture identity. The accessibility-name `C(FX_ItmsPictureStatic)` is not visible text.

### Select Form field (pre-populated; not typed in T6)

- The Select Form dialog already showed the filter `FX_Orders` (Filter By `Name`, Starts With unchecked) when opened in T6 (`t6-02`). The field was carried over from an earlier picker session.
- T6 typed nothing into any filter field or runtime field (`browser_type` count 0 in T6). This can be confirmed from the T6 audit.
- Who populated the field earlier is **not established** by this worker. EXP-083 T5 records a typed Select Form picker filter from its own session (see that record, decision D9); this is cited, not re-verified.

### Recommendation for AC-5 (observed only; not an acceptance decision)

- **AC-5 is not yet passed.** Passed as observed: the single blank-criteria query and its two rows; order 1 and order 2 fields matching EXP-083; both pictures visible; no visible caption or colon on either order; nothing typed, chosen, created or saved in T6; the runtime closed once with no prompt.
- **Unresolved:** picture identity for order 2 (eggs) at byte level, and the contradicting EXP-063-R2 `t7-04` reopen capture.
- **Recommended next decision (operator, not this worker):** either (i) a byte or hash comparison of the stored image against `assets/eggs.png` using a file tool outside this worker, or (ii) an explicit operator decision to accept visual identity with the caveat recorded above. No new runtime interaction is recommended by T7. Final acceptance documentation (AC-6) is still not started.

### Action audit (T7; exact counts; this task only)

| Operation | Count |
|---|---|
| Browser calls (any kind) | **0** |
| Browser tab lists / selects | **0 / 0** |
| Snapshots / finds / clicks / keys / types / screenshots | **0 / 0 / 0 / 0 / 0 / 0** |
| Runtime open / Filter in Place / F4 / runtime close | **0 / 0 / 0 / 0** (unchanged from T6) |
| Designer Save / close / reopen | **0 / 0 / 0** (unchanged: Save 1 of 1 in T4; close 1 and reopen 1 in T5) |
| Component deletions / Type changes / Size edits / No Colon / Image Only | **0 / 0 / 0 / 0 / 0** in T7 (cumulative 1 / 1 / 1 / 1 / 1 offered) |
| Other component edits; strings; captions; runtime edits; IDO changes; checkout actions | **0 each** |
| Re-login / session-expiry / portal navigation / refresh / restart / direct URL | **0 each** |
| Application internals, browser JavaScript, console or network inspection | **0** |
| Files read (no modification) | `assets/eggs.png`, `assets/dumbbell.png`, the EXP-063-R2 record and T7 report, and the screenshots listed above |

**Cumulative EXP-084 browser calls, T1 through T7: 199 (unchanged; T7 added 0).** Cumulative mutation budgets are unchanged: component deletions 1 of 1; Type changes 1 of 1; Size edits 1 of 1; No Colon 1 of 1; Image Only 1 of 1 (offered); Designer Save 1 of 1; Designer close/reopen 1 of 1; runtime open 1 of 1; F4 1 of 1; runtime close 1 of 1; re-logins 0 of 1.

### Worker-written-file inventory (T7)

- `experiments/EXP-084-hello-world-part-5-section-6b-fx-orders-picture-display.md` (edited: status header and this T7 section).
- `evidence/EXP-084/T7-picture-identity-comparison-note.md` (created).

No other file was written, edited or deleted in T7. Nothing under `assets/`, `experiments/` other than this record, or `evidence/EXP-063-R2/` was modified.

### Limitations (T7)

- Visual judgement from screenshots, some at reduced scale; not byte or hash identity.
- The EXP-063-R2 contradiction is recorded, not resolved.
- Same session for all runtime and Designer observations; not database durability; not replay verification.

Classification remains **observed only, NOT replay_verified**. This T7 section does not finalise EXP-084, does not claim acceptance, and does not claim `replay_verified`.

---

## T8 — final documentation and evidence reconciliation (cycle 7, task T8): zero browser calls; zero Mongoose changes

- Task T8, cycle 7, worker session `c2479711-679d-48df-8757-f539531b86fe`, task_message_id `174b6079-508c-4d52-9c9d-e8761434a9f6`, run `R-20261014-124924-3sU9`. Date 2026-10-14.
- Bounded T8 instruction: no browser call and no Mongoose change; write `evidence/EXP-084/T8-final-acceptance-report.md`; update only this record; preserve the coordinator's AC-5 visual-level disposition without claiming byte identity; keep the EXP-063-R2 historical discrepancy as unresolved; reconcile T1–T7 audits; recommend ACCEPTED AS OBSERVED without invoking any further operation.
- Full acceptance matrix (AC-1 to AC-6), discrepancies, unresolved gaps, the cumulative audit and the file inventory are in `evidence/EXP-084/T8-final-acceptance-report.md`. The summary below is a pointer, not a repetition.

### Cumulative browser calls (worker-reported)

| Task | Browser calls |
|---|---|
| T1 | 45 |
| T2 | 23 |
| T3 | 62 |
| T4 | 13 |
| T5 | 28 |
| T6 | 28 |
| T7 | 0 |
| T8 | 0 |
| **Total** | **199** |

### Mutation-class counts (worker-reported; separate from browser calls)

Component deletions 1; Type changes 1; Size edits 1; No Colon changes 1; Image Only changes 1; Designer Save 1; Designer close 1; Designer reopen 1; runtime open 1; Filter in Place switch 1; F4 1; runtime close 1; other component changes 0; strings or captions 0; runtime edits 0; IDO, property, class or SQL changes 0; checkout actions 0; re-logins 0.

### Discrepancies recorded (none represented as a proven EXP-084 defect)

1. Type labels (Components grid and Properties header) read Edit after the T3 change and through the T4 Save and the pre-close T5 state; all read Static after the T5 reopen. Cause not established; same-session reopen.
2. Intentional overwrite of `evidence/EXP-084/t3-05-size-group-expanded-height-before-edit.png` in T3; the first capture is lost.
3. EXP-063-R2 reopen capture `t7-04` shows a shiba on the eggs row, contradicting its own T7 and T8 claims. Preserved as unresolved in EXP-063-R2; not an EXP-084 defect.
4. Select Form filter `FX_Orders` was already populated when the T6 dialog opened; not typed in T6; origin not established.

### Recommendation

**ACCEPTED AS OBSERVED** for coordinator review. The coordinator makes the acceptance decision. Genuine unresolved evidence gaps are listed in §10 of the T8 report.

### Worker-written files (T8)

- `evidence/EXP-084/T8-final-acceptance-report.md` (created).
- `experiments/EXP-084-hello-world-part-5-section-6b-fx-orders-picture-display.md` (edited: status header and this T8 section).

Cumulative worker-written evidence under `evidence/EXP-084/` is 69 files (21 YAML snapshots, 46 PNG screenshots, 2 Markdown notes), itemised in §8.2 of the T8 report. Reference files read only are listed in §8.3 of that report. No other file was written.

Classification remains **observed only, NOT replay_verified**. No durability claim is made. This T8 section does not claim `replay_verified` and does not invoke any further experiment, replay or browser operation.

## Outcome (operator, 2026-10-14)

Accepted (observed). Hello World Part 5 section 6 is complete: the FX_Orders Form shows the joined data, the order total and the item picture. The operator decided acceptance.

- Run R-20261014-124924-3sU9 completed as accepted after 8 worker tasks, with no pauses.
- Changed, for later cleanup (Form `FX_Orders`, User scope):
  - **FX_ItmsPictureStatic deleted.** It was a blank-caption Static that rendered as a lone ":". It was removed through the Components-grid trash button, after a confirmation naming it, and 30 components remain.
  - **FX_ItmsPictureEdit:**
    - Type changed from Edit to **Static**, keeping its name and the binding `object.FX_ItmsPicture`.
    - Size `37.05; 2` → `37.05; 9`; Location unchanged at `21.55; 23.75`.
    - **No Colon True**, which is offered only once the Type is Static.
    - **Image and Text ImageOnly.** The options are Inherit, Overlaid, TextOnly, ImageOnly, HorizontalTextImage, HorizontalImageText, VerticalTextImage and VerticalImageText.
  - One Designer Save: "Form [FX_Orders] and global object(s) were saved."
- Screenshots viewed by the operator assistant:
  - `t6-06`: the runtime after a blank-criteria query, order 1 of 2: FX001, Factory test one, 1 Factory Street, dumbbell, 45 pound iron, 45.00, Count 2, Order Total 90.00, and **the golden retriever puppy picture** below the fields with no caption.
  - `t6-07`: order 2 of 2: FX002, Factory test two, 2 Factory Street, eggs, cage free, 6.99, Count 1, Order Total 6.99, and **the small grey-faced figure** with no caption.
- The T8 report's "EXP-063-R2 eggs conflict" was checked by the operator assistant and **is not real**. EXP-063-R2 `t7-04` shows the same grey-faced figure on the eggs row, so it matches its record. The worker misread it.
- Accepted deviations, none with any effect:
  1. After the Type change, the grid Type column and the Properties header still read Edit until the close/reopen.
  2. One screenshot (`t3-05`) was overwritten.
  3. Coordinate clicks were used for view-only expander chevrons and for the runtime row-number cells, which are not in the accessibility tree.
  4. One wheel scroll had no effect.
  5. A find matched the top-toolbar Delete (Delete Form Definition), which was not clicked.
- Flagged `browser_type` calls: the Layout Height value, which is authorized.
- Counts:
  - component deletions 1, Type changes 1, Size edits 1, No Colon 1, Image Only 1;
  - Designer Save 1, Designer close/reopen 1;
  - runtime open 1, F4 1, runtime close 1;
  - strings 0, runtime edits 0, IDO changes 0, re-logins 0.
- Findings (observed):
  1. **Picture display route for a Multi-View Form:** delete the generated picture Static label, retype the generated picture Edit to Static, set its height, then set No Colon True and Image and Text ImageOnly. This matches the Part 4 Static-bound-picture result (EXP-062-R4).
  2. **No Colon only exists on a Static:** the Edit type has no No Colon row; it appears after the change to Static.
  3. **Stale Type labels:** after a Type change, the Components grid and the Properties header keep the old type until the Form is closed and reopened.
- Limits: same-session UI evidence only.
- Confinement (git status): only `evidence/EXP-084/` and this record were written by the run.
- Next: the rest of Part 5:
  - Section 4: property-class extensions for the drill-downs, then the Section 5 step 8 right-click menus.
  - Sections 7-13: In Collection validators and component classes for Customer ID and Item, the runtime test and the unload.
