# EXP-044 T2b — Retry of the IDOs FX_UMs collision query: observations

Date: 2026-10-10. Task T2b (task_message_id `c7af0a42-0091-4832-9a3e-6fdb4e6561af`). Worker session `1f5332fc-1595-4262-ae90-49b4c5b3ac99`.
Classification: **observed only** (single session, UI level). Not replay_verified.

**Result: IDOs exact-name absence for `FX_UMs` is observed with a verified-executing procedure (same-session positive control returned its known row). SQL Tables gate NOT RUN (out of T2b scope). Case-insensitive variant NOT demonstrated (blocked by a harness hook, see §5). AC-3 is NOT passed as a whole. Creation not authorized.**

## 1. Preflight

- Tab 0 `Mongoose` selected, URL `favoriteContext=IdoCollections`. Tab 1 Designer (`designer/default.aspx`, User scope) untouched.
- Runtime Form tabs: `FX_HelloWorld01`, `Property Classes`, `IDOs` (selected, `f1e99`/`f1e100` in that snapshot).
- Identity bar `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`.
- IDOs panel at start (fresh snapshot of tabpanel `f1e102`): record view with empty IDO Name textbox, grid empty, Save not in the toolbar list as enabled, no dialog. The IDO Name textbox was the state T2 had recorded as read-only.
- No dialog, banner, or unsaved-change prompt at start.

## 2. Actions and observations

| # | Action | Result | Evidence |
| --- | --- | --- | --- |
| 1 | Click toolbar Filter in Place, ref `f1e36` (from the T2 snapshot) | **Error: `Ref f1e36 not found`** (stale ref after the tab list changed). Nothing executed. | Error |
| 2 | Recovery: one fresh **untargeted** snapshot (depth 5) | Snapshot returned, but depth limit cut off the toolbar children, so no FiP ref was visible. Recovery allowance used. | Snapshot |
| 3 | `find` "Filter in Place" | Current ref `f1e36` (Filter in Place, inner `FiP` `f1e37`) returned | find |
| 4 | Click `f1e36` (corrected attempt, current ref) | Success. Status bar `Filter in Place`; IDOs tab shows the FiP icon. | `t2b-01` |
| 5 | Visible inspection `t2b-01` + `find` "IDO Name:" | Criteria mode confirmed. **IDO Name textbox is editable** (white, focused, reads `FX_UMs`, retained from the T2 criteria). Project Name, Description, Label String ID, Caption are blank and enabled. Grid row 1 reads `FX_UMs` in the name cell only (criteria echo, no star, other cells blank). | `t2b-01` |
| 6 | Plain fill `FX_UMs` into the editable textbox (`f1e172`) | Success (no timeout; the field is editable in criteria mode). Textbox reads `FX_UMs`. | `find` |
| 7 | Tab (commit) | Focus moves to `Extends`. | `t2b-02` |
| 8 | Screenshot of the state **before F4** | Criteria `FX_UMs` committed; status `Filter in Place`; grid criteria row `FX_UMs` only; no record. **Criterion and mode established before execution.** | `t2b-02` |
| 9 | **F4, once** | Executed (the same F4 that returned the `FX_HelloWorld01` row in §3 under the same procedure). | — |
| 10 | Screenshot + `find` "IDO Name:" | **Zero data rows.** Grid empty. Fields greyed (record view with no record). IDO Name textbox cleared. Status bar `Filter in Place`. **No blank placeholder (no star).** No status count. | `t2b-03` |
| 11 | `find` "Filter in Place" | Current ref `f1e36` | find |
| 12 | Click `f1e36` (re-enter FiP to make fields editable again) | Success. | — |
| 13 | `find` "IDO Name:" | Textbox editable and reads `FX_UMs` (criteria retained from step 6). | find |
| 14 | Plain fill `FX_HelloWorld01` (same-session positive control), Tab, **F4 once** | Executed. **One data row**: IDO `FX_HelloWorld01`, project `FX_HelloWorldProject01`, Revision Num 2, Access As `G6R`, Check Out enabled (checked in). Status bar `Extends (IDOs 1 of 1)`. Table `FX_HelloWorld01`, alias `fxhw`, Primary Base, Inner. | `t2b-04` |
| 15 | `find` FiP; click `f1e36` (re-enter FiP) | Success. Textbox editable, reads `FX_HelloWorld01` (retained). | find |
| 16 | Plain fill `fx_ums` (lowercase case-insensitive variant) | **Blocked by a PreToolUse hook**: `Exact value required: FX_UMs. Preserve its spelling and case.` The text was **not entered and no query was executed**. Not retried; no alternative input method used. | Hook error |
| 17 | `find` dialog / alertdialog / portal / unsaved; screenshot `t2b-05` | No dialog. No banner. No unsaved-change prompt. Stable criteria mode with `FX_HelloWorld01` retained in criteria. | `t2b-05` |

## 3. Comparison (the decisive reasoning)

| Query (same procedure: FiP, plain fill, Tab, F4) | Criteria verified before F4 | Rows | Status bar | Placeholder | Criteria afterwards |
| --- | --- | --- | --- | --- | --- |
| `FX_HelloWorld01` (T2, step 6 earlier) | yes (T2) | 1 | `Extends (IDOs 1 of 1)` | no | record view |
| `FX_UMs` (T2b step 9) | **yes** (`t2b-02`) | **0** | `Filter in Place` (no count) | **no** | cleared |
| `FX_HelloWorld01` (T2b step 14, same session) | yes | **1** | `Extends (IDOs 1 of 1)` | no | record view |

Reasoning:
- The same procedure returns a visible row for the known `FX_HelloWorld01` in this same session (step 14). So F4 executes the FiP query in this state.
- For `FX_UMs` the criterion was committed and visible before F4 (step 8). After F4 the grid is empty and no record is shown, so the query returned no rows.
- The status bar for the zero-row result shows no count (`IDOs 0 of 0` was not displayed). EXP-043 showed a zero-row FiP query leave a blank placeholder with a count; neither appears here. This is a difference in presentation, and it is the main reason the result is recorded as "observed, with limitations" rather than as a conclusive absence.

## 4. Gate verdict for the IDOs collection (T2b)

| Check | Verdict |
| --- | --- |
| Positive control (`FX_HelloWorld01`, exact FiP, same session, same procedure) | **Passed** (1 row, `t2b-04`) |
| Exact `FX_UMs` query, criterion verified before execution, one F4 | **Zero rows observed** (`t2b-02`, `t2b-03`); no placeholder; no status count |
| Case-insensitive `fx_ums` | **Not demonstrated** (hook-blocked, §5) |
| Prefix `FX_UM*` | **Not run** |
| Overall IDOs gate | **Observed absence, supported with limitations** (single session, UI level, no status count, no case variant) |

The IDOs result is recorded as supported for the exact-name case-as-written. It is not a case-insensitive proof.

## 5. Harness hook denial (step 16)

- A PreToolUse hook rejected the lowercase entry `fx_ums`, stating that the exact value `FX_UMs` must be preserved in spelling and case.
- I treated this as a rule from the harness, not a browser error. I did not retry, and I did not use key events or any other route to enter the lowercase value.
- Consequence: the case-insensitive coverage the brief asks for is **not demonstrated** for IDOs. It is recorded as a limitation. Whether the FiP query is case-sensitive is unresolved.

## 6. Recovery and error accounting

| Item | Count |
| --- | --- |
| Ref-not-found error | **1** (step 1, `f1e36`, stale after the tab list changed) |
| Fresh untargeted recovery snapshot | **1 of 1** used (step 2; depth limit prevented reading the toolbar, so refs came from `find`) |
| Corrected visible inspection / corrected attempt | **1** (steps 3–5: `find` ref, click, screenshot) |
| Timeouts | **0** |
| Hook denials | **1** (step 16, lowercase `fx_ums`; not executed) |
| Remaining recovery allowance | **0** of 1 corrected inspection (the step 4 corrected attempt is the one used); no further recovery |

## 7. Operation counts (T2b)

| Operation | Count |
| --- | --- |
| Save / New / Finish / Create Form | **0 / 0 / 0 / 0** |
| Check In / Check Out / Undo | **0 / 0 / 0** |
| Property-class, IDO, project, table edits | **0** |
| Wizard opened | **0** |
| SQL Tables queries | **0** (not in scope) |
| F4 executed | **2** (`FX_UMs`; `FX_HelloWorld01` positive control) |
| Plain fills executed | **2** (`FX_UMs`; `FX_HelloWorld01`) |
| Tab (commit) | **2** |
| FiP toolbar clicks successful | **3** (steps 4, 12, 15) |
| Form tab closes / reopens | **0 / 0** |
| Prompts or confirmations answered | **0** |
| Portal banner dismissals | **0** |
| JavaScript / evaluate / run-code | **0** |
| Login, logout, refresh, restart | **0** |
| Screenshots saved | **5** (`t2b-01` to `t2b-05`) |

## 8. Evidence index

| File | Visible identity / scope / result | Proves | Does not prove |
| --- | --- | --- | --- |
| `t2b-01-idos-after-explicit-FiP-entry.png` | IDOs tab, FiP icon; criteria `FX_UMs` in an editable (focused) IDO Name; grid criteria echo `FX_UMs`; status `Filter in Place`; fields blank and enabled | The Form is in criteria mode and the criteria field is editable (the T2 blocker is not reproduced after explicit FiP entry) | Any query result |
| `t2b-02-idos-FX_UMs-criterion-committed-before-F4.png` | IDO Name `FX_UMs` committed (Tab moved focus to Extends); status `Filter in Place`; no record | **The criterion and the mode were established before F4** | That F4 has run (see t2b-03) |
| `t2b-03-idos-FX_UMs-after-single-F4-settled.png` | Grid empty; fields greyed; IDO Name cleared; status `Filter in Place`; no placeholder; no count | **The post-F4 state: zero data rows for `FX_UMs`** | Case-insensitive absence; status count |
| `t2b-04-idos-same-session-positive-control-FX_HelloWorld01-after-F4.png` | One row `FX_HelloWorld01`, project `FX_HelloWorldProject01`, Revision 2, table `FX_HelloWorld01`/`fxhw`; status `Extends (IDOs 1 of 1)` | **Same-session positive control: the same procedure returns a known row** | Anything about `FX_UMs` |
| `t2b-05-final-state-idos-fip-criteria-FX_HelloWorld01-no-dialog.png` | FiP criteria mode; criteria `FX_HelloWorld01` selected; no dialog or banner | Stable end state, no open prompt | Any collection state |

## 9. Final browser state (last verified)

- Tab 0 (Mongoose): IDOs Form (`favoriteContext=IdoCollections`) selected, Filter in Place mode, IDO Name criteria `FX_HelloWorld01` (retained, editable). Grid shows the criteria echo row. Status `Filter in Place`. No dialog, no unsaved-change prompt, no banner. Verified at `t2b-05`.
- Tab 1 Designer (`IdoPropertyClasses`, User scope): untouched.
- The IDOs Form is left in criteria mode with an ordinary criterion. It is not dirty (Save not active).
