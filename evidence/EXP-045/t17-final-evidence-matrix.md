# EXP-045 — T17 final evidence matrix

Run `R-20261010-214137-Ia7F` · experiment EXP-045 · final documentation audit T17 · cycle 22 · worker session `88551ce6-9f95-4e28-aeb2-1e23a8d29062` · task_message_id `5fd052eb-ec36-401b-af4d-fb0d0ea1921d`.
Date: 2026-10-10.

**Scope of this file.** Documentation only. T17 made no browser call, no Mongoose action and no artifact change. The AC-1 to AC-12 verdicts, with exact evidence paths and limitations, are in `experiments/EXP-045-hello-world-part-2-fx-ums-multi-view-form-and-capt.md` (section "T17"). This file reconciles counts, prompts, recoveries, save and close/reopen results, repository confinement and the last browser state.

**Classification:** observed accepted with limitations. **Not replay_verified.**

Short tags such as `t5-04` or `t12-03` in the tables below are the file-name prefixes of screenshots in `evidence/EXP-045/`. Full names are given in §8 for screenshots viewed in T17, and in the per-task observation files for the rest.

---

## 1. Action count reconciliation

Counts are taken from the per-task records. Per-task counts were self-reported in each task and were not drawn from one log, so this table reconciles them but cannot re-derive them. Fresh-snapshot and find counts were approximate in several tasks and are not totalled here.

| Operation | Total | Tasks (source) | Note |
|---|---|---|---|
| Form Finish | **1** | T3 | Not retried. Response: "Process Completed Successfully" |
| Form created (User scope) | **1** | T3 | `FX_UMs`, one row in Select Form (`t3-11`) |
| Templates created | **0** | T2, T3 | Save Template unchecked (`t2-08`) |
| Save Template clicks | **1** | T2 | Unchecked. Not clicked again |
| Wizard opened (OK) | **1** | T2 | Classic > MultiView |
| Wizard Next | **6** | T2 (3), T3 (3) | — |
| Wizard Back | **3** | T3 | Re-verification only |
| Wizard Cancel | **0** | T2, T3 | — |
| Name fills (plain `browser_type`) | **1** | T2 | Read back `FX_UMs` |
| Positioning arrow presses | **1** | T2 | `FX_UM` moved above `FX_Description` |
| Designer Save | **1** | T13 | Ordinary toolbar Save; Save disabled afterwards (`t13-04`) |
| Form tab close | **1** | T14 | No prompt (`t14-02`) |
| Form reopen | **1** | T14 | Via Designer Form menu, not Select Form |
| Select Form used for reopen | **0** | T14 | Recorded as a deviation |
| Runtime open (Web Client) | **1** | T15 | Via Select Form; OK once; no record entered |
| Caption ellipsis clicks | **4** | T5 (`FX_UMStatic`), T9 (`FX_UMStatic`), T10 (`FX_DescriptionStatic`), T12 (`FX_UMStatic`) | Each opened one String dialog or prompt |
| Creation prompts raised | **3** | T5 (`FX_sUM`), T9 (`FX_sUM`), T10 (`FX_sDescription`) | See §2 |
| Prompt Yes answers | **2** | T9 (`FX_sUM`), T10 (`FX_sDescription`) | Each followed by a String editor |
| Prompt No answers | **1** | T6 (answering the T5 prompt) | Followed by a timeout alert (§3) |
| Strings created | **2** | T9 (`FX_sUM`), T10 (`FX_sDescription`) | Both absent at T8 |
| String dialog OK clicks | **3** | T10 (2), T12 (1) | Form Save is separate (§1 row above) |
| String value edits (typed or cell) | **3** | T10 (2), T12 (1) | — |
| Cell commit by Tab | **1** | T12 | `FX_sUM`; not used in T10 |
| Global Objects (Edit > String) opened | **5** | T8, T11, T12, T13, T14 | — |
| Global Objects closed with Cancel | **5** | T8, T11, T12, T13, T14 | — |
| Global Objects closed with OK | **0** | — | — |
| Strings filter entries | **12** | T8 (5), T11 (2), T12 (1), T13 (2), T14 (2) | — |
| Select Form opened | **5** | T1 (2), T3 (2), T15 (1) | — |
| Select Form OK | **2** | T1 (`ExportImportStrings`, closed without change), T15 (`FX_UMs`) | — |
| Select Form Cancel | **3** | T1 (1), T3 (2) | — |
| Select Form filter entries (key events) | **6** | T1 (3), T3 (3) | T15 filter was pre-set and not retyped |
| Edit menu opened | **5** | T8, T11, T12, T13, T14 | — |
| Undo clicks | **0** | — | Accessibility state read only |
| Components Expand (grid toolbar) | **2** | T5, T14 | — |
| Details Expand (panel) | **2** | T4, T14 | View change |
| Browser-native dialogs | **0** | all | — |
| In-page informational alerts acknowledged | **2** | T3 (`Process Completed Successfully`), T7 (`Timeout expired waiting for response.`) | — |
| Tool interaction timeout | **1** | T4 | Canvas click intercepted by an adorner (5 s). Not the product timeout alert |
| Ref-not-found | **1** | T14 | After Escape on the Form menu |
| Recovery snapshots | **2** | T4 (1), T14 (1) | Corrected from the T16 text (which said 1) |
| Corrected inspections | **1** | T4 | — |
| Tab-select errors ("Tab 1 not found") | **7** | T8 (1), T9 (1), T10 (1), T11 (1), T12 (2), T13 (1) | Each cleared by a retry or a tab list. Corrected from the T16 text ("several") |
| Portal banner dismissals | **0** | all | — |
| Records entered, edited or deleted | **0** | all | — |
| Login, logout, reauthentication, browser refresh, restart | **0** | all | — |
| FormSync, cache unload, metadata refresh, Regenerate Form | **0** | all | — |
| JavaScript, evaluate, run-code, direct SQL, hidden store | **0** | all | — |
| Screenshots (worker-saved PNG) | **79** | T1 5, T2 8, T3 11, T4 5, T5 4, T6 2, T7 2, T8 8, T9 3, T10 8, T11 5, T12 3, T13 4, T14 9, T15 2 | Equal to the file count in `evidence/EXP-045/*.png` |

---

## 2. Prompts and String-dialog sequence

| # | Prompt / dialog | Raised in | Answer | Result | Evidence |
|---|---|---|---|---|---|
| P1 | `String FX_sUM does not exist. Create it?` | T5 (Caption on `FX_UMStatic`) | Left open at T5 stop; **No** in T6 | Timeout alert `Timeout expired waiting for response.`; OK once in T7 | `t5-04`, `t6-01`, `t6-02`, `t7-01`, `t7-02` |
| P2 | `String FX_sUM does not exist. Create it?` (second instance) | T9 (Caption on `FX_UMStatic`) | **Yes** | String editor with `FX_s UM`; not committed in T9 | `t9-02`, `t9-03` |
| P3 | `String FX_sDescription does not exist. Create it?` | T10 (Caption on `FX_DescriptionStatic`) | **Yes** | Editor with `FX_s Description`; value replaced with `Description`; OK | `t10-05`, `t10-06`, `t10-07`, `t10-08` |
| P4 | Caption on `FX_UMStatic` (existing string) | T12 | No prompt | Editor opened directly with `FX_s UM`; cell edit + Tab; OK | `t12-01`, `t12-02` |

Note: P1 is one prompt instance. It was raised in T5, left unanswered, and answered No in T6. The T16 text described it as two instances. That was an error.

Prompt text matched the brief in each case (P1 at `t6-01`, P2 at `t9-02`, P3 at `t10-05`). No other prompt appeared.

---

## 3. Recoveries, errors and timeouts

| Event | Task | Classification | Recovery or follow-up | Mechanism |
|---|---|---|---|---|
| Canvas click on `FX_UM` label timed out (5 s), intercepted by design adorner | T4 | Tool interaction failure | Recovery snapshot (1 of 1). One corrected inspection (Details > Components, Pane (00) select, ArrowRight) did not expand the tree and did not identify the component. The component was identified in T5 through the Components grid Expand | Adorner interception; not further investigated |
| `Timeout expired waiting for response.` in-page alert after the No click | T6 | Product message | OK once in T7. No retry | **Not established.** No string state was read after it until T8, which showed no `FX_sUM` row |
| Designer URL changed from `?MGForm=FX_UMs` to `designer/default.aspx` | T6 (after No), kept through T13 | Observation | None | **Not established** |
| Form-menu click after Escape returned ref-not-found | T14 | Tool ref error | Recovery snapshot (1 of 1); one reopen click from the fresh snapshot | Escape did not leave a clean menu state in the accessibility tree |
| "Tab 1 not found" on tab selection | T8, T9, T10, T11, T12 (2), T13 | Tool error (7 in total) | Retry or tab list | Not established |

---

## 4. Save, close/reopen, runtime and state timelines

### 4.1 Save state (Designer toolbar, as recorded)

| Point | Save | Undo | Source |
|---|---|---|---|
| After Finish (T3) | Disabled | Disabled | `t3-10` |
| T4 to T9 | Disabled | Disabled | task records |
| After the first string OK (T10) | **Enabled** (pending) | Disabled per accessibility; icon looked active in `t10-03` | `t10-03`, `t10-08` |
| T11, T12 (pending) | Enabled | Disabled per accessibility | `t11-05`, `t12-03` |
| Pre-Save (T13) | Enabled | Disabled | `t13-03` |
| After the single Designer Save (T13) | **Disabled** | Disabled. Regenerate Form became disabled (not invoked) | `t13-04` |
| Pre-close and after reopen (T14) | Disabled | Disabled | `t14-01`, `t14-04` |
| Web Client runtime (T15) | Disabled | n/a | `t15-02` |

The string OKs in T10 enabled the Designer Save. The mechanism is **not established**. The Designer Save itself was not triggered by any String OK.

### 4.2 Close, reopen and runtime (single events)

| Event | Result | Evidence |
|---|---|---|
| Form tab close | One click on the tab's own close control. No unsaved-change prompt. Vendor `IdoPropertyClasses` view shown; URL `?MGForm=IdoPropertyClasses` | `t14-02` (per record) |
| Form reopen | Form-menu `FX_UMs` entry, once. URL `?MGForm=FX_UMs`. Name, User scope, Save disabled, canvas literal captions | `t14-03`, `t14-04` |
| Runtime open | Web Client Select Form, one row, OK once. Captions `Unit of Measure` above `Description`; Save disabled; no record entered | `t15-01`, `t15-02` |

### 4.3 Designer URL timeline (as recorded)

| Point | URL |
|---|---|
| T3 (after Finish) to T5 | `?MGForm=FX_UMs` |
| After the T6 No click | `designer/default.aspx` |
| T7 to T13 | `designer/default.aspx` |
| T14 after close | `?MGForm=IdoPropertyClasses` |
| T14 after reopen | `?MGForm=FX_UMs` |
| T14 after Cancel | `designer/default.aspx` |

The cause of each change is **not established**.

### 4.4 Canvas caption timeline (as recorded)

| Point | Canvas text | Source |
|---|---|---|
| T3 (after Finish) | Raw IDs `FX_sUM*`, `FX_sDescription:` | Record T3 |
| T10 to T13 (pre-Save and post-Save) | Raw IDs | `t11-04`, `t13-03`, `t13-04` |
| T14 after reopen | Literal `Unit of Measure:*` above `Description:` | `t14-04`, `t14-06` |
| T15 runtime | Literal `Unit of Measure:*` above `Description:` | `t15-02` |

The change from raw IDs to literal text between T13 and T14 is **observed**. Its cause is **not established**. It is not evidence of string-table durability.

---

## 5. Final verdicts reference

The AC-1 to AC-12 verdicts, with evidence paths and limitations, are in the experiment record, T17 section. Summary: AC-1 to AC-10 and AC-12 supported; AC-11 observed (optional, non-gating). Disposition: observed accepted with limitations; not replay_verified.

---

## 6. Repository confinement

- **Written in T17 (documentation only):**
  - `experiments/EXP-045-hello-world-part-2-fx-ums-multi-view-form-and-capt.md` (status update, T10 supersession markers, T17 section).
  - `evidence/EXP-045/cleanup-inventory.md` (rewritten: final inventory, chronological T1–T15 entries with T11 moved into place, T10 supersession labelled).
  - `evidence/EXP-045/t17-final-evidence-matrix.md` (this file, new).
- **Not written in T17:** no browser or Mongoose object, no `tools/` file, no `AGENTS.md`, no recipe, no memory file, no other experiment record, no screenshot.
- **Present but not read or authored in T17:** `evidence/EXP-045/harness-audit-T1.md` to `harness-audit-T13.md` (seen in the directory listing only). Their origin is not recorded in the experiment record.
- **Earlier tasks** wrote only the experiment record and `evidence/EXP-045/*` (per each task's "Repository changes" section).
- The harness computes repository confinement from git state. This worker did not run git.

---

## 7. Last browser state (as last recorded; not re-observed in T16 or T17)

- **Tab 1 Designer (last observed T14):** `FX_UMs` Form tab reopened in T14. User scope (`anton.ramos@3mworks.com.ph`). Save disabled; Undo disabled; no dialog; URL `designer/default.aspx`. `FX_DescriptionStatic` selected, Caption `FX_sDescription`. Details panel expanded on Components. The vendor `IdoPropertyClasses` design view was displayed after the T14 close and not edited.
- **Tab 0 Web Client (last observed T15):** runtime `FX_UMs` tab selected and read-only. Fields empty; Save disabled; no dialog; no record entered or saved. Leftover runtime tabs from earlier experiments are also open: `FX_HelloWorld01`, `Property Classes`, `IDOs`, `Sql Tables`, `Sql Columns`.
- No browser-native dialog. No unsaved-change prompt recorded in T14 or T15.

---

## 8. Decisive screenshot index

Viewed in T17 (checked against the record):

| File | What it visibly shows | What it does not prove |
|---|---|---|
| `t8-03-Strings-filter-FX_sUM-settled.png` | Global Objects, Strings filter `FX_sUM`, empty list. Behind it, Designer with `FX_UMStatic` Caption `FX_sUM` | Database absence; scope; cache state |
| `t12-03-post-T12-Edit-String-FX_sUM-stored-value-Unit-of-Measure.png` | Global Objects, one `FX_sUM` row; Properties Name `FX_sUM`, String Value `Unit of Measure`, Description blank, Version truncated `User version for user an…` | Database persistence; tenant-wide scope (no scope field shown) |
| `t13-03-pre-save-FX_DescriptionStatic-caption-and-canvas-order.png` | Pre-Save Designer; canvas `FX_sUM*` above `FX_sDescription:` (raw IDs); Pane (01) rows FX_UMStatic (3), FX_UMEdit `object.FX_UM` (4), FX_DescriptionStatic (5), FX_DescriptionEdit `object.FX_Description` (6); Save icon active | Stored string values; persistence |
| `t13-04-post-single-Save-Save-disabled-no-dialog.png` | Post-Save; Save icon greyed; canvas raw IDs unchanged; no dialog; User scope | Saved content (only the Save-disabled UI state) |
| `t14-04-post-reopen-FX_UMs-identity-scope-SaveDisabled-canvas-captions.png` | Reopened `FX_UMs`; Name `FX_UMs`; Version; status bar `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`; Save greyed; canvas `Unit of Measure:*` above `Description:` | Whether the literal captions are read from the string table |
| `t14-05-post-reopen-FX_UMStatic-Caption-FX_sUM-bindings-order.png` | `FX_UMStatic` selected; Caption `FX_sUM`; grid columns `object.FX_UM`, `object.FX_Description`; Pane (01) row FX_UMStatic (3) | The FX_UMEdit row (not visible in this image; see t14-06) |
| `t14-06-post-reopen-FX_DescriptionStatic-Caption-FX_sDescription.png` | `FX_DescriptionStatic` selected; Caption `FX_sDescription`; Pane (01) rows FX_UMStatic (3), FX_UMEdit `object.FX_UM` (4), FX_DescriptionStatic (5), FX_DescriptionEdit `object.FX_Description` (6); canvas `Unit of Measure` above `Description` | Stored string values |
| `t15-02-webclient-runtime-FX_UMs-opened-captions-Unit-of-Measure-Description.png` | Web Client runtime `FX_UMs` tab; `Unit of Measure:*` above `Description:`; grid header `* Un…`; status `Unit of Measure (Object 1 of 1)`; Save greyed; fields empty | Record content or stored count (`Object 1 of 1` is not a count); database state |

Cited from the records and not re-viewed in T17: `t1-01` to `t1-05`; `t2-01` to `t2-08`; `t3-01` to `t3-11`; `t4-01` to `t4-05`; `t5-01` to `t5-04`; `t6-01`, `t6-02`; `t7-01`, `t7-02`; `t8-01`, `t8-02`, `t8-04` to `t8-08`; `t9-01` to `t9-03`; `t10-01` to `t10-08`; `t11-01` to `t11-05`; `t12-01`, `t12-02`; `t13-01`, `t13-02`; `t14-01` to `t14-03`, `t14-07` to `t14-09`; `t15-01`. The per-file descriptions are in the task observation files.

---

## 9. Limitations and non-claims

1. **Not replay_verified.** Single execution of each step.
2. **Database-level durability is not established** for either string or for the Form. Every string value was read in the Global Objects client view, and the Form's persistence was observed only through the Designer's reopen in the same browser session.
3. **Cross-session and cross-user recovery were not performed.**
4. **String scope and version are not independently verified.** The Global Objects Properties pane shows a truncated Version value (`User version for user an…`), not a scope field. Tenant-wide exposure rests on the AGENTS.md FX_ scope extension.
5. **Creation timing of `FX_sUM` and `FX_sDescription` is not independently timed.** It is inferred from the prompt text, the T8 absence and the later reads (see cleanup inventory §4).
6. **The T10 `FX_sUM` retention claim is superseded.** Its mechanism is unresolved. The Tab-commit candidate is untested on a second string and does not explain `FX_sDescription`.
7. **Unresolved mechanisms (observed only):** the T6 timeout alert; the Designer URL changes; the Designer Save state after string OKs; the Undo accessibility/icon discrepancy at T10; the canvas raw-ID-to-literal change between T13 and T14.
8. **Select Form was not used for the reopen.** The Form menu was used. Whether Select Form returns the same single row after reopen is not tested.
9. **Form-level and runtime evidence are visible UI only.** `Object 1 of 1` and the single runtime grid row are not stored-record counts. No application row was intentionally added, edited or deleted.
10. **Pre-existing objects:** the IDO `FX_UMs`, Property Class `FX_UMBase`, project `FX_HelloWorldProject01` and vendor `IdoPropertyClasses` were read or displayed, not edited, according to the records. Their final revisions were last read at T1 and are not re-verified. The checked-out state of `FX_UMBase` is pre-existing.
11. **Per-task counts are self-reported.** They reconcile to each task record. Fresh-snapshot counts were approximate and are not totalled.
12. **Repository baseline** was taken at session start (T1). It was not recomputed in T17.

---

## 10. Corrections to the T16 text-only audit

| # | T16 text | Correction |
|---|---|---|
| 1 | "Recovery snapshots: 1 (T14)" | **2** (T4: 1; T14: 1) |
| 2 | "FX_sUM 2 instances (T5 and T6, declined with No; T9, answered Yes)" | **One** prompt instance raised in T5 and answered No in T6, plus one instance answered Yes in T9. FX_sDescription: one instance, answered Yes in T10 |
| 3 | "Tab-selection errors: several (T8, T9, T11, T12, T13)" | **7** in total, including T10 (1) and T12 (2) |
| 4 | Global Objects "5 (T8, T11, T12, T13, T14)" | Confirmed: 5 opens, 5 Cancel, 0 OK |
| 5 | Screenshot total not stated | 79 PNG files; equal to the sum of per-task counts |
