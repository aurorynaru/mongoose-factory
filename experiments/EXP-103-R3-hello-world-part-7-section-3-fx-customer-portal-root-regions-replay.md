# EXP-103-R3: Replay of Hello World Part 7 Section 3 with observed option names (FX_CustomerPortal root FlexLayout)

Status: **T1, T2 and T3 complete (observed); T4 documentation-only audit complete (see the T4 section). Acceptance is not unconditional: see operator dispositions in T4.** T1: gate, selection and read-only pre-change check. T2: change entered, OK clicked once, one Designer Save. T3: one close and one reopen of FX_CustomerPortal, then a read-only readback of the saved values. The readback matches the T2 entries for Type and all three regions. The check was made **in the same Designer session after one ordinary close and reopen**; it is not a cross-session or database-level verification. The canvas footer position is **not visually confirmed** (see T3 limitations).

Brief: `experiments/EXP-103-R3-…md` (this record); approved in commit `c79387c`. Predecessors: EXP-103 (blocked by server-event error), EXP-103-R2 (gate passed in a fresh Designer; option names observed), EXP-104 (isolation probe; FlexLayout selection not reproduced on FX_FlexProbe01).

Runs: R-20261016-103141-CejP. T1 = cycle 0, task message `2a35a1cb-4d6a-4c22-8c14-a5ba5ba12a51`. T2 = cycle 1, task message `f05de2a3-79f1-410a-ac29-1b9504560155`. Worker session 7af647c7-b95f-4d2a-8dff-5c0a2fe37b29 (both tasks).

## Sources reviewed

- `AGENTS.md`: **T2: read from the repository file (Read tool) at task start, before any browser action.** The T2 browser tab listing ran in the same batch and is read-only. **T2 deviation (identified in the T4 audit):** only `AGENTS.md` was read in T2. The T2 brief also required reading the transcript lines 133-143, the session recipe and the EXP-103-R2/EXP-104 Outcome sections before browser interaction; the controller table for T2 shows none of those reads. The T2 worker relied on its T1 context for those sources, which is not a fresh read. **T1 qualification:** in T1, `AGENTS.md` was available only as the copy embedded in the task message; the repository file was not read before T1's browser interaction. This record does not claim retroactive compliance for T1.
- `docs/mongoose/transcripts/hello-world-pt7.md` lines 133-143 (Section 3): root Type Vertical Box; regions header 4 Form Fill, main 1 Flex Fill, footer 2 Form Fill (the tutorial's "Form" is observed as `FormUnit` in the dialog).
- `recipes/session/session-expiry-and-stale-designer.md` (session-expiry procedure; stale Designer rule; never sign in inside the embedded frame).
- `experiments/EXP-103-R2-…md`: **Outcome (operator, 2026-10-16) section only**, lines 236-249. Used for: Type options HorizontalBox / VerticalBox; Unit options FormUnit / Flex; Orientation options Fill / Horizontal / Vertical; EXP-103-R2 pre-change values (Type HorizontalBox; regions FLEX_PANE_REGION0-2, each 1 Flex, Orientation Vertical).
- `experiments/EXP-104-flex-layout-selection-isolation-probe.md`: **Outcome (operator, 2026-10-16) section only**, lines 343-358. Used for: selection did not reproduce the server-event error on a fresh Flex Form; FlexLayout Design group fields.
- Not read: Part 7 Section 4 or later; the full text of EXP-102, EXP-103, EXP-103-R2 or EXP-104.
- Read deviation (disclosed, T1): the EXP-103-R2 and EXP-104 Outcome sections were read as bounded windows (40 lines) from each Outcome heading. Each window ended at the end of the file, so no text beyond the Outcome sections was shown.

---

# T1: gate, selection test and pre-change check (read-only)

## Starting state (observed)

- Browser tabs listed before any tab selection: tab 0 = Mongoose Designer (URL has `MGForm=FX_CustomerPortal`); tab 1 = Mongoose Web Client (portal URL). Tab 0 was selected (succeeded on the first select); tab 1 was not used.
- Designer tab, snapshot and screenshot `gate-01-designer-start.png`:
  - Open Form: **FX_CustomerPortal** (the only Form tab; selected).
  - Save **disabled**; Regenerate Form disabled; Undo and Redo disabled (no unsaved change).
  - Status bar: `[ ScopeType: User / ScopeName: … ]`. Scope: **User**.
  - No Error dialog, no other dialog, no menu open.
  - Form Properties grid: Name FX_CustomerPortal, Device Type Default, Form Type Flex.
  - Details > Components: one root row `Pane (00)`, collapsed.
  - Browser page status line showed "2 errors, 0 warnings" before any action in this task. Console was **not** inspected (out of scope).
- No Form was closed or reopened in T1; the Form menu was not opened.

## Gate result (T1)

**PASS.** FX_CustomerPortal open and clean; User scope; no dialog open; Save disabled.

## Selection test (T1)

- Components "Expand" toolbar button clicked once (view-only). Tree showed `flexlayoutPane_FX_CustomerPortal` (FlexLayout, Pane 0, Container 0) with children `Region00: FLEX_PANE_REGION0`, `Region01: FLEX_PANE_REGION1`, `Region02: FLEX_PANE_REGION2`.
- FlexLayout row clicked **once**. Screenshot `selection-01-flexlayout-after-click.png`: **no Error dialog**; Properties grid shows `flexlayoutPane_FX_CustomerPortal (FlexLayout)` with the **Design** group: Name (truncated), Description blank, Type `FlexLayout`, From Device Master `True`.
- Result: **PASS.**

## Pre-change check (T1, read-only)

- Canvas control (first small icon, top left) clicked **once**; the FlexLayout attributes dialog (title `FlexLayout`) opened. The tooltip "Edit FlexLayout Attributes" was not captured; identity confirmed by title and contents.
- Screenshot `precheck-01-flexlayout-attributes-dialog-readonly.png`: **Type HorizontalBox**; regions `0 | FLEX_PANE_R… | 1 Flex`, `1 | FLEX_PANE_R… | 1 Flex`, `2 | FLEX_PANE_R… | 1 Flex`. Full IDs confirmed by the Components tree.
- Matches the EXP-103-R2 values.
- Dialog left with **Cancel** (clicked once). No list opened. Nothing changed.
- Screenshot `precheck-02-after-cancel-save-disabled.png`: dialog closed; Form open; **Save disabled**; no dialog.

## T1 action audit (exact)

| Category | Count | Detail |
| --- | ---: | --- |
| Tab list | 1 | before the first tab selection |
| Tab select | 1 | index 0 (Designer), succeeded |
| Form closes / reopens / Select Form OK | 0 / 0 / 0 | |
| FlexLayout selections | 1 | no error |
| Error dialogs / server-event errors | 0 / 0 | |
| Components "Expand" clicks | 1 | view-only |
| Edit FlexLayout Attributes opens | 1 | via canvas control; populated |
| Dialog left by Cancel / by OK | 1 / 0 | |
| List opens / Type changes / region entries / corrections | 0 / 0 / 0 / 0 | |
| OK clicks / Designer Saves | 0 / 0 | |
| Regenerate / delete-trash clicks | 0 / 0 | |
| Prompts or dialogs | 0 | none appeared |
| Re-logins | 0 | |
| Browser evaluate / run-code calls | 0 | |
| Clicks | 4 | Expand, FlexLayout row, canvas control, Cancel |
| Inline snapshots (browser_snapshot) | 2 | |
| Screenshots | 4 | gate-01, selection-01, precheck-01, precheck-02 |

## T1 acceptance (T1 scope)

- **AC-1: met for T1.** Sources reviewed (see qualification above); session usable; User scope; FX_CustomerPortal open and clean; selection passed with screenshot (no error, Design group shown); dialog populated with EXP-103-R2 values and left with Cancel; Save disabled.

---

# T2: change, OK and one Designer Save

## T2 gate and selection (read-only)

- Tab list (1) before tab select; tab 0 selected (succeeded); fresh snapshot.
- Gate: FX_CustomerPortal the only Form, open and clean (Save and Undo disabled); status bar `ScopeType: User`; no dialog. Screenshot `t2-gate-01-designer-start.png`.
- Selection: Components "Expand" clicked (the tree was collapsed at T2 start), then the FlexLayout row clicked once. Screenshot `t2-selection-01-flexlayout-after-click.png`: **no Error dialog**; Properties Design group shown (Name, Description, Type FlexLayout, From Device Master True). **PASS.**

## T2 baseline (dialog opened once through the canvas control)

- Screenshot `t2-baseline-01-dialog-before-change.png`: Type **HorizontalBox**; regions `0 | FLEX_PANE_R… | 1 Flex`, `1 | … | 1 Flex`, `2 | … | 1 Flex`. Matches the EXP-103-R2 and T1 values. Populated baseline confirmed before any change.

## T2 change (observed values as displayed after each entry)

Lists were opened as visible ExtJS dropdowns and an option was clicked. No native select was used. Enter was not pressed; cell edits were committed with Tab.

| Step | Item | Value entered | Displayed after entry | Evidence |
| --- | --- | --- | --- | --- |
| 1 | Type | VerticalBox (list: HorizontalBox selected, VerticalBox) | `VerticalBox` | `t2-type-01-after-entry-verticalbox.png` |
| 2 | Region 0 selected | (row index 0) | ID FLEX_PANE_REGION0, Length 1, Unit Flex, Orientation Vertical, Alignment Left, Pack Start | `t2-region0-01-selected-before-edit.png` |
| 3 | Region 0 ID | header | `header` (grid `header`) | `t2-region0-02-id-header-after-entry.png` |
| 4 | Region 0 Length | 4 | `4` (grid `4 Flex`) | `t2-region0-03-length-4-after-entry.png` |
| 5 | Region 0 Unit | FormUnit (list: FormUnit, Flex selected) | `FormUnit` in editor; committed grid `4 FormUnit` | `t2-region0-04-…` (editor open), `t2-region0-05-unit-formunit-committed.png` |
| 6 | Region 0 Orientation | Fill (list: Fill, Horizontal, Vertical selected) | `Fill`; grid `header 4 FormUnit` | `t2-region0-06-complete-header-4-formunit-fill.png` |
| 7 | Region 1 selected | (row index 1) | ID FLEX_PANE_REGION1, Length 1, Unit Flex, Orientation Vertical | `t2-region1-01-selected-before-edit.png` |
| 8 | Region 1 ID | main | `main` (grid `main`) | `t2-region1-02-id-main-after-entry.png` |
| 9 | Region 1 Length | (already 1; not edited) | `1` | `t2-region1-03-…` |
| 10 | Region 1 Unit | (already Flex; verified, not re-selected) | `Flex` | `t2-region1-01` and `t2-region1-03` |
| 11 | Region 1 Orientation | Fill (list: Fill, Horizontal, Vertical selected) | `Fill` | `t2-region1-03-complete-main-1-flex-fill.png` |
| 12 | Region 2 selected | (row index 2) | ID FLEX_PANE_REGION2, Length 1, Unit Flex, Orientation Vertical | `t2-region2-01-selected-before-edit.png` |
| 13 | Region 2 ID | footer | `footer` (grid `footer`) | `t2-region2-02-id-footer-after-entry.png` |
| 14 | Region 2 Length | 2 | `2` (grid `2 Flex`) | `t2-region2-03-length-2-after-entry.png` |
| 15 | Region 2 Unit | FormUnit (list: FormUnit, Flex selected) | `FormUnit`; grid `2 FormUnit` | `t2-region2-04-unit-formunit-after-entry.png` |
| 16 | Region 2 Orientation | Fill (list: Fill, Horizontal, Vertical selected) | `Fill` | `t2-regions-grid-before-ok.png` |

Regions grid before OK (`t2-regions-grid-before-ok.png`): `0 | header | 4 FormUnit`; `1 | main | 1 Flex`; `2 | footer | 2 FormUnit`. Type `VerticalBox`. Region 2 Properties: ID footer, Length 2, Unit FormUnit, Orientation Fill.

- Corrections: **0** (each field entered once).
- Regions added, deleted, moved or renamed other than ID: **0**. The three existing regions were used.
- Observation: after Orientation was set to Fill, the region Properties grid no longer lists **Alignment, Pack, Minimum Length and Maximum Length** (it shows Default Margin, Appearance and Behavior). The worker did not edit those attributes. Their stored values after the change were **not verified**.
- Observation: the Regions grid Length column shows the Unit abbreviation (e.g. `4 FormUnit`), and it shows the Unit change only after the cell edit is committed (Tab).

## T2 OK and Save

- **OK**: clicked once (ref from the latest snapshot file). Response: the dialog closed; no prompt, message or Error dialog was visible. Screenshot `t2-ok-01-response-after-ok.png`. After OK, Save and Undo became enabled (pending change).
- **Designer Save**: clicked **once** (top toolbar Save, ref from the latest snapshot file). Response: Save **disabled** and Undo disabled afterwards; no dialog; no error visible; the Save tooltip showed. Screenshot `t2-save-01-response-after-save-click.png`. Save was not retried.
- **Canvas after Save** (`t2-save-01…png`): one horizontal dashed guide near the top of the canvas (about 172 px into the viewport); no region labels visible in the viewport. The FlexLayout is not selected, so its canvas controls are hidden. **The expected three stacked rows were not clearly observed**, and the canvas arrangement was not verified beyond that. The post-Save snapshot holds no canvas region elements. The canvas was not scrolled. Not claimed as verified; T3 readback is the next check.

## T2 gate after the change

- Form open (`FX_CustomerPortal`); Save disabled; Undo disabled; no dialog or menu; FlexLayout not selected; Components tree collapsed to `Pane (00)`.

## T2 action audit (exact)

| Category | T2 | Cumulative T1+T2 |
| --- | ---: | ---: |
| Tab list / tab select | 1 / 1 | 2 / 2 |
| Form closes / reopens / Select Form OK | 0 / 0 / 0 | 0 / 0 / 0 |
| FlexLayout selections (no error) | 1 | 2 |
| Error dialogs / server-event errors | 0 / 0 | 0 / 0 |
| Components "Expand" clicks | 1 | 2 |
| Canvas-control clicks (dialog opens) | 1 | 2 |
| Dialog left by OK / by Cancel | 1 / 0 | 1 / 1 |
| List opens (Type 1, Unit 2, Orientation 3) | 6 | 6 |
| Type changes | 1 | 1 |
| Region selections (index 0, 1, 2) | 3 | 3 |
| Region field entries: ID / Length / Unit / Orientation | 3 / 2 / 2 / 3 (10 total) | 3 / 2 / 2 / 3 (10 total) |
| Region 1 Unit / Length | verified only (no entry) | verified only |
| Corrections | 0 | 0 |
| OK clicks | 1 | 1 |
| Designer Saves | 1 | 1 |
| Prompts or dialogs (browser or in-page) | 0 | 0 |
| Errors (server-event) | 0 | 0 |
| Close/reopen of FX_CustomerPortal | 0 | 0 |
| Regenerate Form / delete / trash clicks | 0 / 0 | 0 / 0 |
| Re-logins | 0 | 0 |
| Browser evaluate / run-code calls | 0 | 0 |
| Clicks (all) | 25 | 29 |
| browser_type calls (cell editors) | 5 | 5 |
| Tab key presses (cell commit) | 10 | 10 |
| Inline snapshots (browser_snapshot) | 13 | 15 |
| Screenshots (browser_take_screenshot) | 20 | 24 |

Each of the 25 T2 clicks also returned an accessibility snapshot file (tool-generated). Clicks were made only on references from the most recent snapshot of this task. No `browser_find` output was used for any click.

## T2 acceptance

- **AC-1:** met (T1 and T2 gates and selection tests passed with screenshots; no server-event error; User scope; T2 baseline populated with the EXP-103-R2 values).
- **AC-2:** **met for values, OK and Save; canvas partly.** Type VerticalBox; regions header 4 FormUnit Fill, main 1 Flex Fill, footer 2 FormUnit Fill, each displayed after entry; zero corrections; no region added, deleted or reordered; Regions grid captured before OK; OK clicked once (no message); exactly one Designer Save (Save disabled afterwards); canvas recorded but **not clearly showing the three stacked rows** (see limitation).
- **AC-3:** **not performed** (T3 is not part of T2).
- **AC-4:** no FlexLayout attribute other than Type and the three regions' ID, Length, Unit and Orientation was edited; no Form property, component, collection, Regenerate, unload, checkout, FormSync or deployment action; no runtime action; User scope only. Alignment, Pack, Minimum/Maximum Length and Default Margin were **not edited**, but their values after the change are not re-read. Task boundary respected (stopped after T2).
- **AC-5:** this section gives the T2 audit, file inventory and final state.

## T2 evidence (screenshots, distinct filenames, viewed)

| File | Shows | Does not prove |
| --- | --- | --- |
| `t2-gate-01-designer-start.png` | FX_CustomerPortal open; Save disabled; User scope; no dialog | that the Form is saved state beyond the disabled Save icon |
| `t2-selection-01-flexlayout-after-click.png` | FlexLayout selected; Design group; no error | dialog contents (see baseline) |
| `t2-baseline-01-dialog-before-change.png` | Type HorizontalBox; regions 1 Flex x3 | IDs (truncated) |
| `t2-type-01-after-entry-verticalbox.png` | Type VerticalBox | that it is saved |
| `t2-region0-01-…` | region 0 properties before edit | |
| `t2-region0-02…` to `-06…` | ID header; Length 4; Unit FormUnit (committed by 05); Orientation Fill | Alignment/Pack values |
| `t2-region1-01…` to `-03…` | ID FLEX_PANE_REGION1 then main; Length 1; Unit Flex; Orientation Fill | |
| `t2-region2-01…` to `-04…` | ID FLEX_PANE_REGION2 then footer; Length 2; Unit FormUnit | Orientation (see grid screenshot) |
| `t2-regions-grid-before-ok.png` | Regions grid header/main/footer with 4 FormUnit, 1 Flex, 2 FormUnit; Type VerticalBox | region 0 and 1 Orientation (shown in their own captures) |
| `t2-ok-01-response-after-ok.png` | dialog closed; no message; Save enabled (pending) | persistence |
| `t2-save-01-response-after-save-click.png` | Save disabled; Undo disabled; no error; canvas shows one dashed guide only | three stacked rows (not clearly visible); persistence |

Limitation for the canvas: the expected three stacked rows are not clearly visible in the post-Save viewport. This may be a canvas rendering or scroll state. It is recorded as unresolved and is for T3 to check.

## T2 final state

- Designer tab (tab 0) selected; Form **FX_CustomerPortal open**; **Save disabled**; Undo disabled; no dialog, menu or prompt open; FlexLayout not selected; Components tree collapsed.
- The change is saved in this Designer session (one Save; Save disabled afterwards). **Not verified across a close and reopen (T3 not performed).**
- Web Client tab (tab 1) not used.

---

# T3: close, reopen and readback (AC-3)

Run: R-20261016-103141-CejP, cycle 2, task message `60ab5eac-0f4c-4577-82bf-a44bb1182b2d`. Same worker session.

## T3 sources and timing qualification

- T3: `AGENTS.md`, `hello-world-pt7.md` lines 133-143, the session recipe, and the Outcome sections of EXP-103-R2 (lines 236-249) and EXP-104 (lines 343-358) were read from the repository files at task start, **before** any browser action. The tab list then ran (read-only).
- **T1 timing qualification (retained for operator disposition, not described as compliant):** in T1, `AGENTS.md` was available only as the copy embedded in the task message; the repository file was not read before T1's browser interaction. T2 and T3 read it from the file before browser interaction.

## T3 starting state (read-only)

- Tab list (1) before any selection; tab 0 (Designer) selected (succeeded); fresh snapshot.
- Gate: FX_CustomerPortal the only open Form; Save and Undo disabled; status bar `ScopeType: User`; no dialog, menu or prompt. Screenshot `t3-gate-01-designer-before-close.png`.
- Components tree expanded once (view-only) for the pre-close record: `Pane (00)` > `flexlayoutPane_FX_CustomerPortal` (FlexLayout, Pane 0, Container 0) > `Region00: header`, `Region01: main`, `Region02: footer`. Screenshot `t3-precheck-02-components-tree-before-close.png`.
- Canvas before close: one horizontal dashed guide near the top of the viewport (about y=172); no region labels; the three regions were not visibly distinguishable.

## Close (once)

- Form-tab close control (`closable FX_CustomerPortal`) clicked once. Response: the Form closed with **no prompt and no dialog**. Prompt text: **none** (so no No/Yes answer was needed). Screenshot `t3-close-01-after-form-close.png` (empty Designer).

## Reopen (once)

- Designer Form menu (button `Form`) opened once; the recent-forms entry `FX_CustomerPortal` (listed alongside FX_FlexProbe01, FX_OrdersChart, FX_Orders, FX_HelloWorld01, FX_Items) clicked once. Select Form was **not** used. Screenshots: `t3-reopen-01-form-menu-open.png` (menu), `t3-reopen-02-form-reopened.png` (reopened).
- Response: FX_CustomerPortal reopened in User scope; Save disabled; no error; no dialog. The canvas showed two dashed guides (about y=172 and y=789) inside a bordered area, because the Details panel was collapsed at that moment; the layout differed from the pre-close view.
- Details panel expanded once (`Expand Panel`) and the Components tab selected once to reach the tree. Components "Expand" clicked once. Tree: `flexlayoutPane_FX_CustomerPortal` > `Region00: header`, `Region01: main`, `Region02: footer`. Screenshots: `t3-reopen-03-details-panel-expanded.png`, `t3-readback-components-tree-after-reopen.png`.

## FlexLayout selection (T3)

- `flexlayoutPane_FX_CustomerPortal` row clicked once. Screenshot `t3-selection-01-flexlayout-after-click.png`: **no Error dialog**; Properties shows `flexlayoutPane_FX_CustomerPortal (FlexLayout)` with the Design group (Name, Description blank, Type FlexLayout, From Device Master True). Result: **PASS.**

## Readback (read-only; the dialog was opened once and left with Cancel)

- Edit FlexLayout Attributes opened once through the canvas control (first icon). Screenshot `t3-readback-dialog-01-overview.png`. Dialog readback: **Type VerticalBox**; Regions grid: `0 | header | 4 FormUnit`; `1 | main | 1 Flex`; `2 | footer | 2 FormUnit`.
- Each region row selected once (three selections); no field was edited:

| Index | ID | Length | Unit | Orientation | Screenshot |
| --- | --- | --- | --- | --- | --- |
| 0 | header | 4 | FormUnit | Fill | `t3-readback-region0-header-4-formunit-fill.png` |
| 1 | main | 1 | Flex | Fill | `t3-readback-region1-main-1-flex-fill.png` |
| 2 | footer | 2 | FormUnit | Fill | `t3-readback-region2-footer-2-formunit-fill.png` |

- Region index order: 0 header, 1 main, 2 footer. No region added, deleted or reordered.
- Observed Properties rows: region 0 and region 2 (Unit FormUnit, Orientation Fill) list ID, Length, Unit, Orientation, Default Margin, Appearance and Behavior. Region 1 (Unit Flex, Orientation Fill) also lists Minimum Length and Maximum Length. In T2 (Orientation Vertical), Alignment and Pack were listed; after Orientation Fill they are not listed. These are display observations only; the stored values of hidden rows were **not** read.
- Canvas arrangement with the dialog open: the header row selection highlighted a blue band at the top (about y 100-172); the main row selection highlighted from about y 172 to the bottom of the viewport; the footer row selection showed **no highlight** within the viewport. Interpretation (unverified): header is the top band, main the middle, footer below the visible area.
- Dialog left with **Cancel** (clicked once). Response: dialog closed; Save disabled; Form open and clean; no dialog or menu. Screenshot `t3-final-01-after-cancel-canvas-tree.png` (Components tree collapsed to `Pane (00)` with the Form selected in Properties).
- One ordinary mouse-wheel scroll (deltaY 300) over the canvas. Screenshot `t3-final-02-canvas-after-one-scroll.png`: **no visible change**; the top guide remained and the footer was not visible. No further scroll.

## T3 readback result

| Attribute | T2 entered (as displayed) | T3 readback (after close and reopen) | Match |
| --- | --- | --- | --- |
| Type | VerticalBox | VerticalBox | yes |
| Region 0 ID / Length / Unit / Orientation | header / 4 / FormUnit / Fill | header / 4 / FormUnit / Fill | yes |
| Region 1 ID / Length / Unit / Orientation | main / 1 / Flex / Fill | main / 1 / Flex / Fill | yes |
| Region 2 ID / Length / Unit / Orientation | footer / 2 / FormUnit / Fill | footer / 2 / FormUnit / Fill | yes |
| Components tree region names | (T2 Save) | Region00: header, Region01: main, Region02: footer | yes |

Every value displayed after the reopen matches the value entered in T2. Persistence is observed **within this Designer session after one close and reopen** only.

## T3 canvas assessment

- **Not clearly three vertically stacked regions.** The header and main regions were visible as a top band and a middle band. The footer was not visible in the viewport at any point in T3 (one scroll made no visible change). The canvas arrangement is therefore recorded as **partly confirmed, unresolved** for the footer.

## T3 action audit (exact)

| Category | T3 |
| --- | ---: |
| Tab list / tab select | 1 / 1 |
| Form closes / reopens | 1 / 1 |
| Select Form OK | 0 |
| FlexLayout selections (no error) | 1 |
| Error dialogs / server-event errors | 0 / 0 |
| Edit FlexLayout Attributes opens | 1 (left by Cancel 1, by OK 0) |
| List opens / Type changes | 0 / 0 |
| Region selections (0, 1, 2) | 3 |
| Region field entries / corrections | 0 / 0 |
| OK clicks / Designer Saves | 0 / 0 |
| Prompts or dialogs (browser or in-page) | 0 (the close showed no save prompt) |
| Re-logins | 0 |
| Regenerate / delete / trash clicks | 0 / 0 |
| Browser evaluate / run-code calls | 0 |
| Clicks (all) | 13 (Components Expand x2; Form-tab close; Form menu; recent-forms entry; Details Expand Panel; Components tab; FlexLayout row; canvas control; region rows x3; Cancel) |
| Mouse-wheel scroll | 1 (canvas view only) |
| browser_snapshot calls (inline) | 3 |
| Screenshots | 14 |

## Cumulative action audit, T1 + T2 + T3

| Category | T1 | T2 | T3 | Total |
| --- | ---: | ---: | ---: | ---: |
| Tab list / tab select | 1 / 1 | 1 / 1 | 1 / 1 | 3 / 3 |
| Form closes / reopens | 0 / 0 | 0 / 0 | 1 / 1 | 1 / 1 |
| Select Form OK | 0 | 0 | 0 | 0 |
| FlexLayout selections | 1 | 1 | 1 | 3 |
| Error dialogs / server-event errors | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 |
| Dialog opens | 1 | 1 | 1 | 3 |
| Dialog left by Cancel / by OK | 1 / 0 | 0 / 1 | 1 / 0 | 2 / 1 |
| List opens | 0 | 6 | 0 | 6 |
| Type changes | 0 | 1 | 0 | 1 |
| Region selections | 0 | 3 | 3 | 6 |
| Region field entries (ID / Length / Unit / Orientation) | 0 | 3 / 2 / 2 / 3 | 0 | 10 |
| Corrections | 0 | 0 | 0 | 0 |
| OK clicks / Designer Saves | 0 / 0 | 1 / 1 | 0 / 0 | 1 / 1 |
| Prompts or dialogs | 0 | 0 | 0 | 0 |
| Clicks | 4 | 25 | 13 | 42 |
| Mouse-wheel scrolls | 0 | 0 | 1 | 1 |
| browser_snapshot calls (inline) | 2 | 13 | 3 | 18 |
| Screenshots | 4 | 20 | 14 | 38 |
| Re-logins | 0 | 0 | 0 | 0 |
| Regenerate / delete / trash | 0 | 0 | 0 | 0 |

T1 and T2 counts are carried from their sections above; the list opens in T2 were Type 1, Unit 2, Orientation 3.

# T4: documentation-only acceptance audit

Task message `32e48185-e2fb-4eae-b116-e402a10cc65a`, cycle 3. No browser call, no Mongoose action, no Save, close or reopen. Full audit: `evidence/EXP-103-R3/t4-acceptance-audit.md`.

- **Count reconciliation:** every brief figure matches the three controller audit tables (`evidence/EXP-103-R3/harness-audit-T1.md`, `-T2.md`, `-T3.md`) and the worker counts. Totals: tab lists 3, tab selections 3, closes 1, reopens 1, FlexLayout selections 3, dialog opens 3 (Cancel 2, OK 1), list opens 6, Type changes 1, region selections 6, region entries 10, corrections 0, Saves 1, prompts 0, errors 0, re-logins 0, clicks 42, scrolls 1, screenshots 38 (matches 38 PNGs on disk), inline snapshots 18.
- **Five flagged `browser_type` calls (T2):** controller rows 27, 33, 60, 76, 82 are the cell-editor entries for region 0 ID `header`, region 0 Length `4`, region 1 ID `main`, region 2 ID `footer`, region 2 Length `2`, each committed with Tab. They are permitted field entries through the rendered UI, not evaluate/run-code or browser JavaScript. No Enter key and no other typed string appears.
- **T1 source review (not compliant):** the T1 controller table shows no read of `AGENTS.md` from the repository before the first browser call. The embedded copy in the task message does not make it compliant retroactively. Recorded as a timing deviation for operator disposition.
- **T2 source review (partial deviation):** see the correction in the Sources section above.
- **T3 source review:** compliant (all five reads precede the first browser call).
- **AC-1:** met for the functional elements; source-review element not met in full (T1; T2). Session usable; User scope; FX_CustomerPortal open and clean at each gate; selection passed with Design group and no Error dialog (three captures); dialog populated with EXP-103-R2 values; Cancel with Save disabled.
- **AC-2:** met for the values, OK once, Save once, Save disabled afterwards, zero corrections and no region added, deleted or reordered. **Not met for the canvas:** the post-Save viewport shows one dashed guide; three stacked rows not clearly visible.
- **AC-3:** partly met. Readback values (`t3-readback-dialog-01…`, `t3-readback-region0/1/2…`), Components tree (`t3-readback-components-tree-after-reopen.png`) and Cancel with clean Form (`t3-final-01…`) verified. Canvas footer position and complete three-row arrangement unresolved (`t3-final-02…`). Persistence is same-session only.
- **AC-4:** met as to recorded actions. Stored values of Alignment, Pack, Minimum Length and Maximum Length after the change were not read; "unchanged" is not verified.
- **AC-5:** met by this record and the T4 audit, with the limitations listed.
- **Final state:** last observed in T3, not rechecked in T4: FX_CustomerPortal open and clean; Save disabled; no dialog or menu open; User scope.
- **Operator disposition recommended (not decided):** (1) the T1 AGENTS.md timing deviation; (2) the T2 source-read deviation; (3) the canvas footer and three-row confirmation, via a separately authorized read-only check; (4) the hidden-attribute values, if the "unchanged" claim is needed; (5) a cross-session readback before any persistence claim beyond same-session observation.
- **Not claimed:** unconditional acceptance; replay verification; cross-session, database-level or durable persistence.

# Findings (observed only)

1. FX_CustomerPortal's FlexLayout selects with the Design group and no server-event error, in T1, T2 and T3 (same Designer session).
2. The Edit FlexLayout Attributes dialog opens from the canvas control and is populated with Type HorizontalBox and three regions, each "1 Flex" (the EXP-103-R2 baseline).
3. Type and the three regions were entered as Type VerticalBox; header 4 FormUnit Fill; main 1 Flex Fill; footer 2 FormUnit Fill. OK closed the dialog without a message. One Designer Save left Save disabled with no error. Observed in the same session only.
4. Option names confirmed in the lists: Type HorizontalBox / VerticalBox; Unit FormUnit / Flex; Orientation Fill / Horizontal / Vertical.
5. Setting Orientation to Fill removes Alignment, Pack, Minimum Length and Maximum Length from the region Properties grid (UI behavior observed on three regions).
6. The canvas after Save (T2) showed one horizontal dashed guide; the three stacked rows were not clearly observed.
7. T3 close and reopen (same session): no save prompt on close; reopen via recent forms worked with no error.
8. T3 readback: Type VerticalBox; header 4 FormUnit Fill; main 1 Flex Fill; footer 2 FormUnit Fill; Components tree lists Region00 header, Region01 main, Region02 footer. All match the T2 entries.
9. Selecting a region row highlights its band on the canvas: header = top band (about y 100-172), main = from about y 172 down; footer not seen in the viewport (unresolved).
10. Setting Orientation Fill and Unit FormUnit changes which Properties rows are listed (Alignment/Pack hidden with Fill; Minimum/Maximum Length hidden with FormUnit). Stored values of hidden rows not read.

# Limitations

- Persistence across close/reopen not verified (T3 not performed). No cross-session or database-level durability claim.
- The Regions grid ID column is truncated before entry; full names were confirmed by the Components tree (T1).
- The canvas-control tooltip ("Edit FlexLayout Attributes") was not captured.
- Canvas arrangement after Save not clearly visible (see Findings 6).
- Alignment, Pack, Minimum/Maximum Length values after Orientation Fill were not re-read.
- The browser page status line showed "2 errors, 0 warnings" throughout; the console was not inspected (out of scope).
- The T1 `AGENTS.md` timing qualification (above) applies; it is retained for operator disposition.
- T3 persistence is observed only within the same Designer session after one close and reopen. No cross-session, database-level or replay verification is claimed.
- Canvas: the footer was not visible in the viewport; the three stacked rows were not clearly observed. One ordinary scroll did not change the view. The canvas arrangement is therefore partly confirmed.
- Hidden Properties rows (Alignment, Pack, Minimum/Maximum Length) were not re-read after the change.
- The Details panel expand/collapse and tab selection in T3 were view-layout changes, not Form changes.

# Worker-written file inventory (T1 to T4)

Written by the worker:
- `evidence/EXP-103-R3/t4-acceptance-audit.md` (T4, documentation audit; created)
- `experiments/EXP-103-R3-hello-world-part-7-section-3-fx-customer-portal-root-regions-replay.md` (created in T1; rewritten in T2; edited in T3 and T4)
- T1: `evidence/EXP-103-R3/gate-01-designer-start.png`, `selection-01-flexlayout-after-click.png`, `precheck-01-flexlayout-attributes-dialog-readonly.png`, `precheck-02-after-cancel-save-disabled.png`
- T2 (20 screenshots): `evidence/EXP-103-R3/t2-gate-01-designer-start.png`, `t2-selection-01-flexlayout-after-click.png`, `t2-baseline-01-dialog-before-change.png`, `t2-type-01-after-entry-verticalbox.png`, `t2-region0-01-selected-before-edit.png`, `t2-region0-02-id-header-after-entry.png`, `t2-region0-03-length-4-after-entry.png`, `t2-region0-04-unit-formunit-after-entry.png`, `t2-region0-05-unit-formunit-committed.png`, `t2-region0-06-complete-header-4-formunit-fill.png`, `t2-region1-01-selected-before-edit.png`, `t2-region1-02-id-main-after-entry.png`, `t2-region1-03-complete-main-1-flex-fill.png`, `t2-region2-01-selected-before-edit.png`, `t2-region2-02-id-footer-after-entry.png`, `t2-region2-03-length-2-after-entry.png`, `t2-region2-04-unit-formunit-after-entry.png`, `t2-regions-grid-before-ok.png`, `t2-ok-01-response-after-ok.png`, `t2-save-01-response-after-save-click.png`

Generated by the browser tooling (not worker-written; listed for completeness):
- `evidence/playwright/` page snapshot files `page-2026-10-16T02-32-…` (T1, 4 files), `page-2026-10-16T02-35-48-778Z.yml` through `page-2026-10-16T02-40-27-823Z.yml` (T2, 25 files), and console logs `console-2026-10-16T02-32-00-071Z.log`, `…-072Z.log`, `console-2026-10-16T02-35-39-573Z.log`.

T3 (14 screenshots): `evidence/EXP-103-R3/t3-gate-01-designer-before-close.png`, `t3-precheck-02-components-tree-before-close.png`, `t3-close-01-after-form-close.png`, `t3-reopen-01-form-menu-open.png`, `t3-reopen-02-form-reopened.png`, `t3-reopen-03-details-panel-expanded.png`, `t3-readback-components-tree-after-reopen.png`, `t3-selection-01-flexlayout-after-click.png`, `t3-readback-dialog-01-overview.png`, `t3-readback-region0-header-4-formunit-fill.png`, `t3-readback-region1-main-1-flex-fill.png`, `t3-readback-region2-footer-2-formunit-fill.png`, `t3-final-01-after-cancel-canvas-tree.png`, `t3-final-02-canvas-after-one-scroll.png`.

Generated by the browser tooling (not worker-written; listed for completeness), T3: snapshot files `evidence/playwright/page-2026-10-16T02-44-26-681Z.yml`, `…02-44-41-617Z.yml`, `…02-44-55-719Z.yml`, `…02-45-05-426Z.yml`, `…02-45-20-274Z.yml`, `…02-45-35-233Z.yml`, `…02-45-41-576Z.yml`, `…02-45-54-030Z.yml`, `…02-46-09-581Z.yml`, `…02-46-24-581Z.yml`, `…02-46-35-360Z.yml`, `…02-46-51-621Z.yml`, `…02-47-07-469Z.yml`, plus `console-2026-10-16T02-44-12-491Z.log`.

No other file was written. No AGENTS.md, earlier record, recipe, tutorial, asset or non-EXP-103 file was edited.

# Final state (end of T3)

- Designer tab (tab 0) selected; Form **FX_CustomerPortal open and clean**; **Save disabled**; Undo disabled; no dialog, menu or prompt open; Properties shows the Form; Details panel expanded on the Components tab with the tree collapsed to `Pane (00)`.
- The saved values (Type VerticalBox; header 4 FormUnit Fill; main 1 Flex Fill; footer 2 FormUnit Fill) were read back after one close and reopen in the same Designer session. No further Save, close, reopen or other action is pending.
- Web Client tab (tab 1) not used.

# Next step (not performed; no further task authorized in EXP-103-R3)

None within EXP-103-R3. Operator disposition is needed for: the T1 `AGENTS.md` timing qualification; the canvas footer visibility; and whether to verify across a session boundary (a separate task would be needed; not done here).

# Open questions

- Is the footer region visible on the canvas? It was not seen in any T3 viewport. Operator review of the canvas or a separate read-only check would settle this.
- Do the hidden attributes (Alignment, Pack, Minimum/Maximum Length) keep their prior values after Orientation Fill? Not read.
- Does the change persist across a session boundary or in the database? Not verified (same-session UI observation only).

## Outcome (operator, 2026-10-16)

Accepted (observed). **Hello World Part 7 section 3 is complete:** the root FlexLayout of FX_CustomerPortal is a VerticalBox with regions **header** (4 FormUnit, Fill), **main** (1 Flex, Fill) and **footer** (2 FormUnit, Fill), verified in the attributes dialog after an ordinary close and reopen. The operator decided acceptance and waived the deviations below for EXP-103-R3 only.

- Changed, for later cleanup (User-scope Form FX_CustomerPortal, EXP-102): flexlayoutPane_FX_CustomerPortal Type HorizontalBox -> VerticalBox; FLEX_PANE_REGION0 -> header 4 FormUnit Fill; FLEX_PANE_REGION1 -> main 1 Flex Fill; FLEX_PANE_REGION2 -> footer 2 FormUnit Fill (previously each 1 Flex Vertical). Dialog OK once (no message), one Designer Save (no message; Save and Undo disabled afterwards). No Regenerate.
- **Run R-20261016-103141-CejP** (4 worker tasks): T1 gate, selection test and read-only pre-change check; T2 change, OK, Save; T3 close/reopen readback; T4 documentation-only audit. Paused once, for the operator disposition. No server-event error in any task.
- Screenshots viewed by the operator assistant: `t3-readback-region0-header-4-formunit-fill` (Type VerticalBox; Regions grid 0 header 4 FormUnit, 1 main 1 Flex, 2 footer 2 FormUnit; region 0 ID header, Length 4, Unit FormUnit, Orientation Fill; Components tree Region00: header, Region01: main, Region02: footer), `t3-readback-region2-footer-2-formunit-fill` (footer 2 FormUnit Fill), `t3-final-02-canvas-after-one-scroll` (one dotted divider near the top of the canvas: header row above, main below), `t2-save-01-response-after-save-click` (Save disabled after the click, no message).
- Findings (observed):
  1. **Region edits:** select a region row, then type ID and Length in the Properties grid and pick Unit and Orientation from their lists; the Regions grid updates to "4 FormUnit" and so on.
  2. **The Properties rows depend on the values:** with Orientation Fill, Alignment and Pack are not listed; with Unit FormUnit, Minimum Length and Maximum Length are not listed (main, Unit Flex, still lists them). Hidden rows' stored values were not read.
  3. A Form-definition Designer Save shows no message (unlike the global-object "Global object(s) were saved." toast); Save and Undo becoming disabled is the visible signal, and the reopen is the proof.
  4. With no Error during the whole run, the EXP-103 blocker is confirmed as a broken Designer state, not a Form defect.
- Counts: FlexLayout selections 3 (T1, T2, T3; no error); dialog opens 3 (Cancel 2, OK 1); Type changes 1; region field entries 9 (3 IDs, 2 Lengths, 2 Units, 3 Orientations; main's Length and Unit already correct and verified), corrections 0; Designer Saves 1; Form closes / reopens 1 / 1 (no save prompt); Regenerate 0; re-logins 0.
- Operator rulings (EXP-103-R3 only): T1 used the task-embedded AGENTS.md copy instead of reading the file first; T2 read only AGENTS.md before browser work. Both waived. The footer row not visible in the canvas viewport and the hidden Properties rows not re-read are recorded as limits. The five `browser_type` flags are the ID and Length entries.
- Limits: same-session UI evidence only; canvas footer not visually confirmed.
- Confinement (git status): only `evidence/EXP-103-R3/` and this record were written by the run.
- Next: Part 7 section 4 (05:16-07:31): a nested FlexLayout in the header region with two regions (header, user), its theme class FX_BlueBackground, then the Static header title (string FX_sCustomerPortal, class FX_WhiteHeader).
