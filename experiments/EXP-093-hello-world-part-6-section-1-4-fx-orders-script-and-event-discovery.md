# EXP-093 - Hello World Part 6 Sections 1-4 discovery: FX_Orders Script Language, form script editor, event handlers and Data Change fields (read-only), with an unsaved Count change at runtime

Status (T11 final audit, 2026-10-15): **not accepted.** AC-2's original clean-state clause failed in T1 and has no operator waiver; the T2 recovery is recorded separately. Operator disposition is required. Full reconciliation: `evidence/EXP-093/final-acceptance-audit-report.md`.

Earlier status: **T1 (Designer discovery) complete for the gate and the editor; the clean check failed in T1 (dirty after Script Editor Cancel).** **T2 (operator-authorized Designer recovery)** closed FX_Orders once, answered **No** once, and reopened it once; the Designer was clean afterwards. **T3 (Event Handlers discovery)**: the Event Handlers grid was read and shows **no handler rows**; Save stayed disabled. **T4 (component Events)**: stopped at the first component (FX_ItemCombobox). Selecting it raised the server-event error dialog ("The server event processing returned an error. If this persists, contact your system administrator."); OK was answered once; the Properties tree stayed empty; Save stayed disabled. **T5 (post-operator-recovery component Events readback)**: after the operator reported a re-login and tab reloads, both gates passed (Designer: FX_Orders, User scope, Save/Undo/Regenerate disabled, no prompt; Web Client: signed in, no prompt). **All six components were read**: Binding and the full Events group recorded for FX_ItemCombobox, FX_CountEdit, FX_DerOrderTotalEdit, FX_ItemGridCol, FX_CountGridCol and FX_DerOrderTotalGridCol. Every Events value (Primary, Data Change, Lose Focus, Gain Focus) is **blank**; Drag From Events and Drop On Events are `0 event(s)` on all six. No Calc Order Total handler is bound to any of them. Save stayed disabled after each component. The T4 error did **not** recur in T5. The runtime baseline, Count check, discard and reopen (AC-4) were **not performed** (out of T5 scope). **T6 (runtime baseline verification)**: FX_Orders was opened once from the Form menu's recent-forms entry (the Select Form dialog needed typing to find it, so it was cancelled; see the T6 section). Both orders were read and match the expected baseline; order 1 is open and clean at the end. The Count change and discard (AC-4) were **not performed** in T6. **T7 (runtime Count change and discard)**: on order 1 the Count was changed from 2 to **3** (one entry, then Tab) without Save. The displayed **Order Total stayed 90.00** (not recalculated); Cost 45.00. The runtime Form was closed once and the save prompt answered **No** once (exact text in the T7 section); the Form closed and no prompt remains. The reopen and verification of both orders (the Select Form route, per the T7 instruction) were **not performed** in T7. **T8 (post-discard reopen and verification)**: **blocked before any reopen.** The Select Form dialog opened with its Filter prefilled with `IdoCollections` (selected) and listed only `G6RIdoCollectionSearch` and `IdoCollections`; no visible Clear or Reset control exists; clearing the filter would need typing, which the T8 rule forbids. The dialog was closed with Cancel. FX_Orders was **not** opened, the recent-forms route was **not** used, and no runtime Form is open. The operator then approved the recent-forms route for the rest of EXP-093 (see T9). **T9 (operator-authorized post-discard verification, 2026-10-15)**: the operator approved the Form menu recent-forms route for the rest of EXP-093. FX_Orders was opened once from that route (add-mode placeholder, not edited; Filter in Place; blank criteria; F4 once). Order 1 read back FX001 / Factory test one / 1 Factory Street / dumbbell / 45 pound iron / 45.00 / **Count 2 / Order Total 90.00**, and order 2 read back FX002 / Factory test two / 2 Factory Street / eggs / cage free / 6.99 / Count 1 / Order Total 6.99. Both match the T6 baseline; the unsaved Count 3 from T7 is **not** present. Runtime Save was disabled; the Form was closed once with its tab close control and **no save prompt appeared**; the Explorer is shown with no open form or prompt. The reopen and both-order check (AC-4) are now **complete as observed UI readbacks in the same session**; no acceptance conclusion is issued here.
Brief: approved "EXP-093: approved brief" (commit 5691170). Operator tutorial source: `docs/mongoose/transcripts/hello-world-pt6.md`, Sections 1-4 (00:27-04:16).
Run: worker task T1 of the coordinator's bounded instruction, 2026-10-15. Worker session 8df4d69e-293a-41bf-9abf-a61af6b32609.
Scope: User (ScopeType User; the status bar shows the signed-in operator account, value not transcribed here).

## Purpose

Prepare tutorial Part 6 Sections 1-4 for FX_ names by read-only discovery on FX_Orders: where the Form's script language and its script editor live, what the editor contains, and which event fields exist. No Designer change, no script code, no Save. Findings feed EXP-094, which will use operator-supplied script code.

## Sources reviewed (before browser interaction)

- `AGENTS.md` (LEARNING MODE; evidence and browser rules).
- `docs/mongoose/transcripts/hello-world-pt6.md`: Sections 1-4 with transcript lines 00:27-04:16 (lines 75-148 of the file, transcript lines 327-371), the "Form script / event mapping" reference table (lines 234-248), and open questions 1-4 (lines 276-282).
- `recipes/components/apply-component-class.md` (runtime steps and pitfalls: "Discard with close and then No"; a derived Order Total does not recalculate before Save, per EXP-092).
- `recipes/session/session-expiry-and-stale-designer.md` (session-expiry procedure; never sign in inside the embedded frame).
- Outcome sections only: EXP-053 (line 229), EXP-055 (line 282), EXP-081 (line 863), EXP-092 (line 586). Other sections of those records were not read.

Relevant points carried into this run:
- The tutorial's script code is **absent** from the transcript (shown on screen only). This run records the editor's current content only and writes no code.
- The tutorial's entry point is "pencil icon -> Edit Form Script" (transcript 01:07-01:27).
- EXP-092: the Order Total did not recalculate before Save; the drop-down and Designer state read back from the accessibility tree.

## Starting state

- Browser tabs listed before the first selection: tab 0 = Infor Mongoose Designer (FX_Orders, selected); tab 1 = Mongoose Web Client (FX_Orders in the portal frame). No session-expiry modal or Infor sign-in page was seen in either tab. No re-login was performed.
- The Designer tab showed the FX_Orders Form open with `ScopeType: User`. Fresh snapshot: Save `[disabled]`, Regenerate Form `[disabled]`, Undo `[disabled]`, Redo `[disabled]`. Clean at the start.

## Observations

### AC-1 Designer gate (FX_Orders, User scope, clean at start)

- Screenshot `evidence/EXP-093/t1-01-designer-gate-behavior-script-language.png`: the FX_Orders tab, the Properties panel on the **Form** tab (blue "Form" tab, bottom right) with the **Behavior** group expanded.
- Behavior group rows, in order: Initial Command (empty drop-list), **Script Language = Visual Basic** (drop-list with a ▼ arrow), Close Box = True, Minimize/Maximize Box = True, Filter Form (empty drop-list), Enable Advanced Filter = False (with a "..." button).
- The entry point to the editor is the **blue pencil button at the top-left of the Properties panel toolbar** (next to a small ▼ chevron, visible in t1-01 at about x=1596, y=127). Its accessibility name is empty; the Playwright locator reported it as `#btnEditDownload`.
- Script Language's own drop-list was not opened.
- The Properties panel was on the Form tab and the Behavior group was expanded with the Form panel's "Expand" control (view-only).

### AC-2 Form script editor (opened once, left once with Cancel)

- Opening: one click on the pencil button (above). It opened a dialog directly, with **no intermediate menu**. The label "Edit Form Script" was **not visible** anywhere on the page at that moment (a text find returned no match). The pencil's ▼ chevron was not clicked, so whether it contains an "Edit Form Script" item is **unverified**.
- Dialog title: **Script Editor**. Tab: **Script** (only tab).
- Toolbar (icons, no labels): Run (▶), Indent, Outdent, Comment, Uncomment, Copy-type icon, Cut (scissors), Clear (eraser), Undo, Redo, a pin-type icon, a document icon with ▼, a **Go to** combo with ▼, a search (magnifier) icon, and a toggle icon.
- Right side: a collapsed **Options** panel (vertical label).
- Bottom: a collapsed **Compile Result** section (chevron).
- Footer buttons (accessibility names): **OK**, **Cancel**, **Help**, **Download**.
- Title-bar icons: two round icons at the top right (close × not used).
- Language shown: Visual Basic syntax highlighting; the Form's Script Language reads "Visual Basic".
- Full content: `evidence/EXP-093/form-script-editor-content-verbatim.txt` (transcribed from `evidence/EXP-093/t1-03-after-pencil-click.png`; screenshot shows lines 1-20 with no scrolling). Lines:

```vb
Option Explicit On
Option Strict On

Imports System
Imports Microsoft.VisualBasic
Imports Mongoose.IDO.Protocol
Imports Mongoose.Scripting


Namespace Mongoose.FormScripts
Public Class FX_Orders
Inherits FormScript

'
' Methods go here
'

End Class
End Namespace
```

- Placeholder: line 15 `' Methods go here` is present, so the form has **no method yet**.
- Screenshot `evidence/EXP-093/t1-03-after-pencil-click.png`: the Script Editor open over the Designer (dialog and content visible; Designer behind it).
- No text was clicked, typed or pasted in the editor. No line was selected.
- Leaving: one click on **Cancel** (no OK). **No prompt appeared** after Cancel (no save prompt text observed, so no "No" answer was given).

### AC-2 Designer state after leaving the editor (**failed: not clean**)

- Screenshot `evidence/EXP-093/t1-04-after-cancel-designer-clean.png`: the editor is closed; the Designer shows FX_Orders with the Form Properties panel. The top-toolbar Save icon and Regenerate Form look **enabled** compared with t1-01.
- Targeted toolbar snapshot after Cancel (`e11`): **`button "Save"` has no `[disabled]`**, **`button "Regenerate Form"` has no `[disabled]`**; Undo and Redo remain `[disabled]`; the Align/Space buttons remain disabled.
- The start-state snapshot had Save `[disabled]` and Regenerate Form `[disabled]`. So the Designer became **dirty** between the start and this check.
- Candidate actions between those states: the Form-tab click, the Behavior-row click, the Expand click (all view-only), the hover, the pencil click (editor opened), and the Cancel. The cause was **not isolated**. No Save, Undo, property edit or prompt was made.
- Designer Saves: **0**. The dirty state was **not** cleared.

### Not performed in this task (stopped at T1, per the bounded instruction)

- Details > Event Handlers (not opened; no custom event list read; no rows read).
- Component Events groups for FX_ItemCombobox, FX_CountEdit, FX_DerOrderTotalEdit, FX_ItemGridCol, FX_CountGridCol and FX_DerOrderTotalGridCol (no component selected in this task beyond the initial FX_ItemGridCol selection that was already there).
- The runtime baseline, the Count check, the discard and the reopen (not started).

## Acceptance check status

| ID | Status | Evidence / basis |
| --- | --- | --- |
| AC-1 | Met, with a caveat: the "Edit Form Script" label was not seen; the entry point is the pencil | `t1-01-designer-gate-behavior-script-language.png`; tab list and snapshot; session usable (no expiry seen) |
| AC-2 | **T11 recommendation: FAILED on the original clean-state clause; no operator waiver exists.** Editor part met (T1: opened once, recorded, left once with Cancel, no prompt). **Designer-clean part failed in T1 and was recovered in T2 (a recovery, not a pass of the original clause)** (close, prompt answered No, reopen: Save, Regenerate Form and Undo disabled) | T1: `t1-03-after-pencil-click.png`, `form-script-editor-content-verbatim.txt`, `t1-04-after-cancel-designer-clean.png`, toolbar snapshot `e11`. T2: `t2-01`, `t2-02` (prompt), `t2-03` (after No), `t2-04` (reopened, clean) |
| AC-3 | **Met (observed, same session).** Event Handlers grid recorded in T3 (zero rows; no event-name list visible without a dialog). T5 recorded Binding and the full Events group for all six components (values in the T5 section); no value was set and no drop-down or editor was opened. The T4 server-event error on FX_ItemCombobox is recorded separately and did not recur in T5 | T3: `t3-01-event-handlers-grid.png`. T5: `t5-01` to `t5-10` (FX_CountEdit Events: `t5-06`; FX_CountGridCol Events: `t5-09`) |
| AC-4 | **Partial (baseline, Count change, discard observed; reopen verification not done).** T6 read the baseline: order 1 (FX001, Factory test one, 1 Factory Street, dumbbell, 45 pound iron, 45.00, Count 2, Order Total 90.00) and order 2 (FX002, Factory test two, 2 Factory Street, eggs, cage free, 6.99, Count 1, Order Total 6.99). T7: order 1 Count typed as 3 once, Tab once; Order Total displayed 90.00 before Save; the close prompt was answered No once (exact text recorded); the runtime Form closed. T8: the Select Form route was blocked (prefilled `IdoCollections`; no visible Clear or Reset control; cancelled). **T9 (operator-approved recent-forms route): reopen and both-order readback done.** Order 1 Count 2 / Order Total 90.00 and order 2 Count 1 / Order Total 6.99 match the T6 baseline (same-session UI only). Runtime closed once with no save prompt; Form closed clean. | T6: `t6-03`, `t6-05`, `t6-06`, `t6-08`. T7: `t7-00` to `t7-03`. T9: `t9-01` (add-mode), `t9-02` (Filter in Place), `t9-03` (order 1 after F4), `t9-04` (order 2), `t9-05` (order 1 after return), `t9-06` (after clean close) |
| AC-5 | Met after T11 reconciliation (see `evidence/EXP-093/final-acceptance-audit-report.md`, sections 3 to 5). The record's cumulative figures were corrected in the T11 section (C1 to C12). The overall acceptance recommendation is **not accepted** (AC-2), pending operator disposition | `final-acceptance-audit-report.md`; `harness-audit-T1.md` to `harness-audit-T10.md` |

## Blocker (T1, resolved by T2; the cause remains open)

**T1 left the FX_Orders Designer dirty.** After the script-editor visit and Cancel, Save and Regenerate Form were enabled (start-state snapshot: both `[disabled]`). No save prompt appeared during T1, and the worker did not Save, Undo or close.

**Resolution (T2, operator-authorized):** the Form was closed once with the Form-tab close control. The save prompt appeared (text recorded in the T2 section). It was answered **No**. The Form was reopened once from the recent-forms entry, and Save, Regenerate Form and Undo are now disabled. **The Designer is clean.**

Open question (not resolved): which T1 action made the Designer dirty (the pencil click or the Script Editor Cancel are the leading candidates; the Form-tab, Behavior-row and Expand clicks are view-only but were also in the path). The T2 prompt confirms only that the form definition had changed, not what changed. A later task that needs to rule the editor in or out must do so read-only, starting from a clean Designer, with a Save-state check after each step.

## T2: operator-authorized Designer recovery (2026-10-15, worker session 8df4d69e-293a-41bf-9abf-a61af6b32609)

Operator disposition (bounded instruction, T2): close the FX_Orders Form once; answer **No** once to any save prompt; reopen FX_Orders once through the Form menu recent-forms entry; verify the Designer is clean. No Event Handlers, no component Events, no Web Client, no Save, Yes or Cancel on a prompt. The T1 observation (Save and Regenerate Form enabled right after Script Editor Cancel) is **preserved**; this recovery does not erase it.

Steps and observations, in order:

1. **Tab list** (read-only, before any selection): tab 0 = Designer (FX_Orders, current); tab 1 = Web Client. No tab selection was needed (tab 0 was already current). No session-expiry modal, sign-in page or re-login.
2. **Fresh untargeted snapshot of the Designer (start of T2):** `button "Save"` **enabled** (no `[disabled]`, ref e16); `button "Regenerate Form"` enabled (ref e19); Undo and Redo disabled. Status bar: `ScopeType: User`. Form tab `FX_Orders` open. The Details panel was expanded with the Components tab selected. So the dirty state from T1 **persisted** into T2.
3. **Pre-close screenshot** `evidence/EXP-093/t2-01-designer-before-close-save-enabled.png`: the Save icon is active (in T1's t1-01 it was grey).
4. **Close (1 click):** the Form-tab close control (`closable FX_Orders`) was clicked once. A save confirmation appeared. **Exact text (screenshot `t2-02-after-close-click.png`):**
   - Dialog title: `Infor Mongoose Application Development Framework - FX_Orders`
   - Body line 1: `Form FX_Orders has changed`
   - Body line 2: `Do you want to save the form definition?`
   - Buttons: **Yes** (default-focused, highlighted), **No**, **Cancel**.
   - The accessibility tree reports the dialog as an `alertdialog` with buttons Yes (`[active]`) and No.
5. **Answer: No (1 click, on the No button; no Enter key, no Yes, no Cancel).** Post-answer read-only find for "Do you want to save" returned **no match** (prompt closed). Screenshot `t2-03-after-no-answer.png`: the Form is gone, the Designer canvas is empty, the Save icon is grey, and the Properties panel shows only the Form/Component tabs. **The Form was closed without saving.**
6. **Reopen attempt 1 failed (no state change):** a click with the text target "Form" resolved to the page's form element and was intercepted by the toolbar menu (`TimeoutError … subtree intercepts pointer events`). Nothing was clicked. Per the recovery rule, I took one fresh untargeted snapshot (Save, Regenerate Form and Undo all disabled, no Form open), then retried with the current ref.
7. **Form menu opened (1 click, ref e3)**, then a read-only find showed the recent-forms list: `FX_Orders` (first entry, ref e1741) and `FX_HelloWorld01`.
8. **Reopen (1 click on the FX_Orders recent-form entry, ref e1741):** the page URL gained `MGForm=FX_Orders`.
9. **Post-reopen verification (fresh untargeted snapshot + screenshot `t2-04-reopened-designer-clean.png`):**
   - Form identity: tab `FX_Orders`; Properties `Name` = `FX_Orders`; the status bar reads `[ ScopeType: User / ScopeName: <operator account, not transcribed> ]`.
   - **Save: disabled. Regenerate Form: disabled. Undo: disabled. Redo: disabled.** The Designer is clean.
   - Form properties match the T1 start values where visible: Caption blank, Foreground Color `#000000`, Form Type Normal, Is Master True, Behavior group expanded with **Script Language = Visual Basic**, Close Box True, Minimize/Maximize Box True, Splitter Vertical, Splitter Position 11.
   - **View difference (not a Designer change):** the bottom Details panel is **collapsed** on reopen (a `Details` bar with an "Expand Panel" control), where T1 showed it expanded. No click was made on it.
   - Not verified in T2: the script editor content (not reopened, per the T2 scope), and whether the discarded T1 change touched any property other than what the snapshot shows.

### T2 interpretation (observed; not proven)

- The T1 Designer was dirty before T2. The save prompt says "Form FX_Orders has changed", so something in the form definition was modified in the Designer session. **Which action caused it is still not isolated** (the Form-tab click, the Behavior-row click, the Expand click, the pencil click, or the Script Editor Cancel). Answering No discarded those unsaved changes, so the database state is whatever was last saved, which the worker did not check.
- The discard does **not** prove that the Script Editor content is unchanged in persisted state: the editor was not reopened in T2.
- The reopened properties match the T1 start values visibly, so no visible property difference is recorded. This is a visible check only.

## T3: Event Handlers discovery (read-only, 2026-10-15, worker session 8df4d69e-293a-41bf-9abf-a61af6b32609)

Bounded instruction (T3): inspect the Designer state read-only; do not reopen the Script Editor or repeat the T2 recovery; expand the collapsed Details panel with its view control if needed; open Details > Event Handlers once; record every row without opening a handler or parameters and without New; record whether a custom event-name list is visible; verify Save stays disabled. No component Events and no Web Client in T3.

Steps and observations, in order:

1. **Tab list** (read-only, first in the task): tab 0 = Designer (FX_Orders, current); tab 1 = Web Client. No tab selection was needed.
2. **Start-state snapshot (untargeted):** tab FX_Orders selected; `ScopeType: User / ScopeName: <operator account, not transcribed here>`; **Save disabled, Regenerate Form disabled, Undo and Redo disabled**; no prompt; Form properties with Script Language = Visual Basic. Details panel **collapsed** (`Expand Panel` control, ref e450). This matches the post-T2 state.
3. **Expand Details (1 click on the `Expand Panel` view control):** the Details panel expanded. This is a view-only change; no Designer property or Save state changed.
4. **Event Handlers tab (1 click):** the tab is selected (`tab [active] [selected]`, heading "Event Handlers"). Read-only find: `Event Handlers` present.
5. **Screenshot `evidence/EXP-093/t3-01-event-handlers-grid.png`** and a targeted read of the Event Handlers panel (ref e896).
6. **Event Handlers grid, as shown:**
   - Left grid, column headers in order: **Sequence**, **Response Type**, **Disabled**, **Response Parameters**.
   - Grid body: **no rows**. The inner grid element is present with no child rows, and the screenshot shows an empty grid under the headers.
   - Toolbar above the grid: a "Search Properties" box (empty), **Expand** and **Collapse** buttons, and a row of five unlabeled icon buttons under the grid (the add/copy/delete/move-up/move-down row actions in the screenshot). **None was clicked.**
   - Right-hand pane: a second "Search Properties" box (empty), Expand and Collapse buttons, the Name/Value headers, and an **empty tree** with the note "Empty Property Description Field". No handler is selected, so no parameter pane is shown.
7. **Event-name list:** no custom event-name list, event-name drop-down, or group rows (for example "StdFormRefreshCompleted") are visible anywhere in the Event Handlers view without opening a dialog. The event-name list appears only inside the **New** dialog, which was not opened.
8. **Post-inspection check (read-only):** a targeted snapshot of the toolbar failed because ref e11 was no longer in the page snapshot (error: "Ref e11 not found"). I took **one fresh untargeted snapshot** (the recovery allowance) and used its refs only. Result: **Save disabled, Regenerate Form disabled, Undo disabled, Redo disabled**. A read-only find for "Do you want to save" returned **no match**, so no prompt is open.
9. No handler was created, edited, removed, or opened. No row parameters were opened. New was not clicked. No event field was set.

### T3 observations (observed; same-session UI only)

- FX_Orders currently has **no Event Handlers rows** in the Designer. This is consistent with the tutorial's "Calc Order Total" handler (Part 6 Section 3) not having been created yet. The tutorial's handler is not present and was not created here.
- The empty grid does not by itself prove that no handler exists on any other event; the grid was read in its unfiltered state (both search boxes empty) and with no group expanded.
- The T1 dirty-state finding and the T2 recovery are unchanged and are recorded in their own sections above.

### T3 screenshot: what it proves and does not prove

- `t3-01-event-handlers-grid.png`: FX_Orders Designer; Details panel expanded; the Event Handlers tab selected; column headers Sequence / Response Type / Disabled / Response Parameters with **no rows**; right pane empty; Save and Regenerate Form greyed in the toolbar; `ScopeType: User` in the status bar. **Proves** the Event Handlers grid state and that no rows are displayed. **Does not prove** the Save state after the inspection (the untargeted accessibility snapshot in step 8 is the evidence for that) or the content of any other form.

## T4: component Events discovery (read-only, stopped at the first component, 2026-10-15, worker session 8df4d69e-293a-41bf-9abf-a61af6b32609)

Bounded instruction (T4): confirm FX_Orders in User scope, no prompt and Save disabled; switch Details to Components; inspect FX_ItemCombobox, FX_CountEdit, FX_DerOrderTotalEdit, FX_ItemGridCol, FX_CountGridCol and FX_DerOrderTotalGridCol in order, recording Binding and the full Events group; check Save after each component; stop immediately on Save enabled, a prompt, or loss of safe read-only inspection; no Designer close, reopen, Undo or other recovery; no Script Editor; no Web Client.

Steps and observations, in order:

1. **Tab list** (read-only, first in the task): tab 0 = Designer (FX_Orders, current); tab 1 = Web Client. No tab selection was needed.
2. **Targeted snapshot with the stale toolbar ref `e11`:** failed with `Ref e11 not found in the current page snapshot`. No effect. This was the recovery trigger.
3. **One fresh untargeted snapshot (the recovery allowance):** FX_Orders, `ScopeType: User`; **Save, Regenerate Form and Undo disabled**; no prompt; Details panel expanded on the **Event Handlers** tab (zero rows, as in T3). Form properties: Script Language = Visual Basic.
4. **Components tab (1 click, view-only):** the Components grid showed `Pane (00)` and `Pane (01)` collapsed (screenshot `t4-00-components-tab-state.png`). Nothing else on the page changed.
5. **Expand-all view control (1 click, the Components grid's blue `Expand` button):** the pane tree expanded. Read-only find for `FX_ItemCombobox`: found in the tree (row `FX_ItemCombobox | ComboBox | object.FX_Item | Pane 1 | Tab 20 | Component Class FX_Item`).
6. **Selected FX_ItemCombobox (1 click on its row name):** the row highlighted; the Properties panel header changed to `FX_ItemCombobox (EnhancedCombo)`. The console count went from 2 to 3 errors (new console entry `evidence/playwright/console-2026-10-14T16-30-20-315Z.log#L3`).
7. **Server-event error dialog appeared** (screenshot `t4-01-fx-itemcombobox-selected.png`): alert title **Error**, text **"The server event processing returned an error. If this persists, contact your system administrator."**, single button **OK**. This is the same message the session-expiry recipe records for a stale Designer (answer OK once, record, stop for the coordinator). It appeared on a component selection, not on the Edit menu, so the cause is not isolated.
8. **OK (1 click, once)** on the error dialog. My first attempt used the text target `OK` and failed with "does not match any elements" (no effect); the second attempt used the current dialog ref and succeeded.
9. **Post-OK checks (read-only):**
   - Screenshot `t4-02-after-error-ok.png`: the error dialog is gone; the Properties header reads `FX_ItemCombobox (EnhancedCombo)` with the **Component** tab selected; the Properties tree area is **blank** (no Name/Binding/Events rows rendered); the Components grid shows FX_ItemCombobox highlighted.
   - Find `Save`: **`button "Save" [disabled]`** and Regenerate Form disabled.
   - Find `Events` and find `Data Change` (both on the Properties panel): **no match**. The Events group is not rendered, so its values cannot be read.
10. **Stop.** Per the T4 rule (safe read-only inspection no longer possible), I did not reselect FX_ItemCombobox, did not retry the row, did not reopen the Components rows, and did not inspect the other five components. No reload, Undo, close or reopen was made.

### T4 observations (observed; same session)

- **FX_ItemCombobox**: exists in the Components grid (Type ComboBox, Data Source `object.FX_Item`, Pane 1, Tab 20, Component Class `FX_Item`); the Properties header confirms the identity `FX_ItemCombobox (EnhancedCombo)`. **Binding and Events values: not read** (the Properties tree did not render).
- The server-event error appeared on component selection in this Designer session. This is consistent with the stale-Designer symptom in `recipes/session/session-expiry-and-stale-designer.md`, but **not proven** (no Edit-menu check and no reload was done).
- Save stayed disabled throughout T4. No prompt was open at the end.
- **Not inspected in T4:** FX_CountEdit, FX_DerOrderTotalEdit, FX_ItemGridCol, FX_CountGridCol, FX_DerOrderTotalGridCol. Their existence is visible in the Components tree (from the T1 and T3 snapshots): FX_CountEdit (Edit, Pane 1, Tab 26, object.FX_Count), FX_DerOrderTotalEdit (Edit, Pane 1, Tab 28, object.FX_DerOrderTotal), FX_ItemGridCol (GridColumn, Pane 0, Tab 5, Component Class FX_Item), FX_CountGridCol (GridColumn, Pane 0, Tab 8, object.FX_Count), FX_DerOrderTotalGridCol (GridColumn, Pane 0, Tab 9, object.FX_DerOrderTotal). These existence readings are from the accessibility tree only; their Events groups are **not** recorded.
- The T1 dirty-state finding and the T2 recovery are unchanged and recorded in their own sections above.

### T4 screenshots

- `t4-00-components-tab-state.png`: Components tab with Pane (00) and Pane (01) collapsed; Save and Regenerate greyed (`ScopeType: User`). **Proves** the collapsed tree before expansion. **Does not prove** the component rows.
- `t4-01-fx-itemcombobox-selected.png`: the server-event **Error** dialog over the Designer; the Components row FX_ItemCombobox highlighted; the Properties header `FX_ItemCombobox (EnhancedCombo)`; the Properties tree empty. **Proves** the error text and button, and that the component was selected. **Does not prove** the cause of the error or any Events value.
- `t4-02-after-error-ok.png`: after OK; the dialog is gone; the Properties tree is blank; the Save icon is grey. **Proves** the dialog closed and Save is disabled. **Does not prove** that the Events group exists (it is not rendered).
- FX_CountEdit and FX_CountGridCol screenshots (required by the brief) were **not taken** because those components were not reached.

### Operator/coordinator decision needed (not done by the worker)

1. Inspect the FX_Orders Designer tab (tab 0) before any further Designer work. The recipe's recovery is an **operator reload of the Designer tab**, after which a read-only resume can redo the gates. The worker did not reload, re-login, or close the Designer.
2. Decide whether a later bounded T5 should re-run the FX_ItemCombobox read and then the five remaining components, after the Designer is confirmed usable.
3. The runtime steps (AC-4) remain for a separate bounded task after AC-3 is complete.

## T5: post-operator-recovery gates and component Events readback (read-only, 2026-10-15, worker session 8df4d69e-293a-41bf-9abf-a61af6b32609)

**Operator actions (reported by the coordinator, not performed by the worker):** the operator signed in again manually, reloaded both browser tabs, and reopened FX_Orders in the Designer. The worker did not sign in, reload, navigate or reopen anything. The tab URLs changed in a way consistent with the report: the Designer URL now carries session token `~23caccab-4f16-4915-99c2-602d39939882` (T1 to T4 carried `~d7378035-9948-4422-8390-b9728f63e92b`), and the Web Client tab now shows the bare portal URL, not the earlier `favoriteContext` URL. These are same-session observations; they do not prove the re-login sequence.

Bounded instruction (T5): list tabs once; fresh read-only gate on each tab; if both pass, inspect only the Components area of the Designer, for the six components in order; no Script Editor, no close/reopen, no Event Handlers, no runtime work; no property or component change; stop on Save enabled, an unexpected prompt, or a recurrence of the server-event error (answer OK once, then stop).

**Gate 1, Designer (passed).** Tab 0: FX_Orders, `ScopeType: User / ScopeName: <operator account, not transcribed>`; **Save disabled, Regenerate Form disabled, Undo and Redo disabled**; no dialog in the untargeted snapshot. The prompt find ("Do you want to save") was run after the first component and returned no match. Form properties not changed.

**Gate 2, Web Client (passed).** Tab 1: the portal page (`mingle-portal…/c51080bc-…`, page title "Mongoose") with the Mongoose app iframe loaded: identity bar `<operator account> | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; Explorer tree visible; no form open at runtime (main region empty); runtime toolbar buttons (Save, New, Delete, Refresh, Filter in Place, and others) disabled; no Session Expired modal, sign-in page or prompt. No screenshot was taken for this gate; the evidence is the snapshot only.

**Components (Designer Components tab, Details expanded by the Expand Panel view control, Components grid expanded with its Expand view control).** For each component the worker selected the row, verified the Properties header, read the Properties tree, and checked that Save stayed disabled before the next. The Properties panel's Expand view control expanded all groups; the Events group was then read from the tree and from a screenshot.

| # | Component (Properties header) | Type / Pane / Tab | Binding Type | Binding | Component Class | Events group (exact visible values) | Drag From / Drop On | Screenshot(s) |
|---|---|---|---|---|---|---|---|---|
| 1 | FX_ItemCombobox (EnhancedCombo) | ComboBox / 1 / 20 | Property | `object.FX_Item` | `FX_Item` | Primary: blank; Data Change: blank; Lose Focus: blank; Gain Focus: blank | `0 event(s)` / `0 event(s)` | `t5-01` (selected), `t5-02` (Events row selected), `t5-03` (groups expanded), `t5-04` (Events visible) |
| 2 | FX_CountEdit (Edit) | Edit / 1 / 26 | Property | `object.FX_Count` | blank | Primary: blank; Data Change: blank; Lose Focus: blank; Gain Focus: blank | `0 event(s)` / `0 event(s)` | `t5-05` (selected), `t5-06` (Events visible) |
| 3 | FX_DerOrderTotalEdit (Edit) | Edit / 1 / 28 | Property | `object.FX_DerOrderTotal` | blank | Primary: blank; Data Change: blank; Lose Focus: blank; Gain Focus: blank | `0 event(s)` / `0 event(s)` | `t5-07` (Events visible) |
| 4 | FX_ItemGridCol (GridColumn) | GridColumn / 0 / 5 (FormCollectionGrid) | Property | `object.FX_Item` | `FX_Item` | Primary: blank; Data Change: blank; Lose Focus: blank; Gain Focus: blank | `0 event(s)` / `0 event(s)` | `t5-08` (Events visible) |
| 5 | FX_CountGridCol (GridColumn) | GridColumn / 0 / 8 (FormCollectionGrid) | Property | `object.FX_Count` | blank | Primary: blank; Data Change: blank; Lose Focus: blank; Gain Focus: blank | `0 event(s)` / `0 event(s)` | `t5-09` (Events visible) |
| 6 | FX_DerOrderTotalGridCol (GridColumn) | GridColumn / 0 / 9 (FormCollectionGrid) | Property | `object.FX_DerOrderTotal` | blank | Primary: blank; Data Change: blank; Lose Focus: blank; Gain Focus: blank | `0 event(s)` / `0 event(s)` | `t5-10` (Events visible) |

Notes per component (from the same reads):
- **FX_ItemCombobox**: Caption `C(FX_ItemStatic)`; Component Class `FX_Item`; Component Class Parameters `FX_ItmsDescription,FX_ItmsCost`; Tab Order 20. This is the component whose Properties tree stayed blank in T4 (not reproduced here).
- **FX_CountEdit**: Component Class blank; View Attributes Inherited From Property `FX_Count`; Right-Click Menu `StdDefault`; Tab Order 26.
- **FX_DerOrderTotalEdit**: Component Class blank; View Attributes Inherited From Property `FX_DerOrderTotal`; Edit Property Class Extension For Property Class `FX_Cost`; Tab Order 28; Right-Click Menu `StdDefault`.
- **FX_ItemGridCol**: Caption `FX_sItem`; Component Class `FX_Item`; Component Class Parameters `FX_ItmsDescription,FX_ItmsCost`; Tab Order 5.
- **FX_CountGridCol**: Caption `FX_sCount`; Component Class blank; View Attributes Inherited From Property `FX_Count`; Tab Order 8.
- **FX_DerOrderTotalGridCol**: Caption `FX_sOrderTotal`; Component Class blank; View Attributes Inherited From Property `FX_DerOrderTotal`; Edit Property Class Extension For Property Class `FX_Cost`; Tab Order 9.

Limits of the readback:
- A blank Events value is read from the accessibility tree (empty text under the value cell) and from the screenshots (no text visible in the Value column). The value cell has a drop-down control, which was **not opened**; so the blank is "no value displayed", not a verified empty stored setting.
- "0 event(s)" for Drag From and Drop On is displayed text; it was not expanded.
- The Binding values are the Designer's displayed binding strings. They are not checked against the IDO metadata.

**Designer after the six components:** Save disabled (checked after each component and again at the end); no prompt open; `ScopeType: User` on the status bar.

**Screenshots (T5), with what each proves:**
- `t5-01-fx-itemcombobox-selected.png`: FX_ItemCombobox row selected; Properties header `FX_ItemCombobox (EnhancedCombo)`; groups collapsed; Save greyed; no error dialog. **Proves** selection without the T4 error. **Does not prove** the Events values.
- `t5-02-fx-itemcombobox-events-group.png`: the Events row selected (highlight) and the group still collapsed; the help bar reads "Events". **Proves** nothing about the values.
- `t5-03-fx-itemcombobox-properties-expanded.png`: all Properties groups expanded (Appearance, Behavior, Data Source, Events and others, shown partly). The Events rows are below the visible area. **Proves** that the groups expanded. **Does not prove** the Events values.
- `t5-04-fx-itemcombobox-events-visible.png`: Properties scrolled to the Events group: Primary, Data Change, Lose Focus and Gain Focus with no visible value; Drag From Events and Drop On Events `0 event(s)`; Help and Inheritance (Component Class `FX_Item`) below. **Proves** the Events group as displayed for FX_ItemCombobox. **Does not prove** that no handler is bound outside this view or that the drop-down is empty in storage. Note: a first `t5-04` capture (before the pointer was moved over the list) showed the tree at the top; that file was overwritten by the scrolled capture and is not kept.
- `t5-05-fx-countedit-selected.png`: FX_CountEdit selected; header `FX_CountEdit (Edit)`; Events rows below the visible area. **Proves** the selection. **Does not prove** the Events values.
- `t5-06-fx-countedit-events-visible.png` (**the required FX_CountEdit Events screenshot**): Events group visible: Primary, Data Change, Lose Focus, Gain Focus blank; Drag From Events and Drop On Events `0 event(s)`; Component Class blank; Tab Order 26. **Proves** the FX_CountEdit Events group as displayed. **Does not prove** anything about the Count data-change behaviour at runtime.
- `t5-07-fx-derordertotaledit-events-visible.png`: FX_DerOrderTotalEdit Events group visible, same blank values; the Order Total field on the form is highlighted. **Proves** the Events group. **Does not prove** the value stored.
- `t5-08-fx-itemgridcol-events-visible.png`: FX_ItemGridCol selected in the grid column list; Events group visible, blank values; Component Class `FX_Item`. **Proves** the Events group for the grid column. **Does not prove** the stored value.
- `t5-09-fx-countgridcol-events-visible.png` (**the required FX_CountGridCol Events screenshot**): FX_CountGridCol selected; Events group visible, blank; Component Class blank; the grid list shows FX_CountGridCol highlighted. **Proves** the Events group as displayed. **Does not prove** the stored value.
- `t5-10-fx-derordertotalgridcol-events-visible.png`: FX_DerOrderTotalGridCol selected; Events group visible, blank; Component Class blank. **Proves** the Events group as displayed.

**Verdicts for AC-3 (observed):** Binding Type is `Property` for all six components and Binding matches the IDO property each one is named after (`FX_Item`, `FX_Count`, `FX_DerOrderTotal`). No component has a bound Data Change, Primary, Lose Focus or Gain Focus value as displayed. Both grid columns and form components show `0 event(s)` for drag and drop. These are observed displays, not a finding that the Events were never set in the database.

### T5 observations that are not new findings (carried, kept separate)

- **T1 dirty state**: the immediate post-Cancel dirty state (Save and Regenerate enabled after the Script Editor was closed with Cancel) is unchanged by T5. Its cause is still not isolated.
- **T2 recovery**: the operator-authorized Form close, the No answer to the save prompt, and the reopen are unchanged; T5 did not repeat them.
- **T3 empty Event Handlers grid**: unchanged; T5 did not revisit Event Handlers.
- **T4 server-event error**: the error did **not** recur in T5 when FX_ItemCombobox was selected again. The T4 error is recorded as observed and unexplained.

### T5 action audit (T5 only)

| Category | T5 |
| --- | --- |
| Tab lists | 1 (once, before any selection) |
| Tab selections | 2 (tab 1 for the Web Client gate; tab 0 back to the Designer) |
| Untargeted snapshots | 3 (Designer gate; Web Client gate; Designer refs for the Properties panel) |
| Targeted snapshots, successful | 6 (Properties panel `e1607`, one per component, all six) |
| Targeted snapshots, failed (ref not found) | 0 |
| Finds (read-only) | 23 |
| Screenshots | 11 captures (10 saved files; `t5-04` was captured twice, the first capture overwritten) |
| Successful clicks | 11: Details Expand Panel (view) 1; Components tab 1; Components-grid Expand (view) 1; component row clicks 6; Events group row click (selection only) 1; Properties-panel Expand (view) 1 |
| Failed click attempts | 0 |
| Mouse moves (pointer placement before scroll) | 6 |
| Mouse wheel scrolls (view) | 7 (1 ineffective, before the pointer was over the list) |
| Components selected | 6 (one selection each) |
| Event fields opened (drop-down, editor or value-selection dialog) | 0 |
| Events groups expanded | 1 expand-all view action covering all groups (the Events row click selected only) |
| Error dialogs | 0 (the T4 server-event error did not recur) |
| Prompts answered | 0 (no prompt appeared) |
| Designer Saves / property edits / Undo / Regenerate / Delete / Unload | 0 / 0 / 0 / 0 / 0 / 0 |
| Designer Form closes / reopens | 0 / 0 |
| Web Client mutations / runtime opens / closes / F4 / typed entries / runtime Saves | 0 / 0 / 0 / 0 / 0 / 0 |
| Worker re-logins / checkout actions | 0 / 0 |

### Cumulative browser-action counts (T1 through T5)

| Category | T1–T4 (previous total) | T5 | Cumulative |
| --- | --- | --- | --- |
| Tab lists | 4 | 1 | 5 |
| Tab selections | 1 | 2 | 3 |
| Untargeted snapshots | 7 | 3 | 10 |
| Targeted snapshots, successful | 4 | 6 | 10 |
| Targeted snapshots, failed | 2 | 0 | 2 |
| Finds (read-only) | 20 | 23 | 43 |
| Screenshots (captures) | 12 | 11 | 23 |
| Successful clicks (UI) | 15 | 11 | 26 |
| Failed click attempts | 2 | 0 | 2 |
| Mouse moves / wheel scrolls | 0 / 0 | 6 / 7 | 6 / 7 |
| Hovers | 1 | 0 | 1 |
| Designer dialogs opened / left | 1 / 1 (Script Editor, Cancel) | 0 / 0 | 1 / 1 |
| Designer Form closes / reopens | 1 / 1 (T2) | 0 / 0 | 1 / 1 |
| Save prompts answered No / Yes / Cancel | 1 / 0 / 0 (T2) | 0 / 0 / 0 | 1 / 0 / 0 |
| Server-event error dialogs answered OK | 1 (T4) | 0 | 1 |
| Components selected (selection events) | 1 (T4, FX_ItemCombobox) | 6 | 7 (six distinct components) |
| Event Handlers rows read | 0 | 0 | 0 |
| Designer Saves / property edits / Undo / Regenerate / Delete / Unload | 0 | 0 | 0 |
| Runtime opens / closes / F4 / typed entries / runtime Saves | 0 | 0 | 0 |
| Re-logins by the worker / checkout actions | 0 / 0 | 0 / 0 | 0 / 0 |

Operator actions reported for this run and not counted as worker actions: one manual re-login, two tab reloads, and one reopen of FX_Orders in the Designer.

## T6: runtime baseline verification (read-only; order 1 left open and clean, 2026-10-15, worker session 8df4d69e-293a-41bf-9abf-a61af6b32609)

Bounded instruction (T6): confirm the Designer (FX_Orders, User scope, Save disabled, no dialog) and the Web Client (signed in, no prompt); if FX_Orders is open, close it only if clean, otherwise follow T5 (no runtime Form open); open FX_Orders once through Form > Open > Select Form; record the mode; Filter in Place if needed; blank criteria; F4 once; verify both orders; move only by row-number cells; verify order 1 Count 2 and Order Total 90.00 without editing; leave order 1 open and clean; no Save, New, Delete, Add, Details or Find; no field edits; no splitter drags or grid-cell edits.

### Gates (passed)

1. **Designer (tab 0, read-only; not selected in T6):** a fresh untargeted snapshot was taken. Its full output (about 60,000 characters) exceeded the tool limit and was saved outside the repository, so it could not be read. The same facts were then confirmed with read-only finds: `button "Save" [disabled]`, `button "Regenerate Form" [disabled]`, `ScopeType: User / ScopeName: <operator account, not transcribed>`, and no match for "Do you want to save". Tab 0 was not selected or changed in T6, and its URL matched the start of the task.
2. **Web Client (tab 1, selected once):** the screenshot `t6-00-webclient-start-state.png` shows the Mongoose app with the identity bar `<operator account> | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`, the Explorer tree, and no form open. Finds for "Do you want to save" and "Session Expired" returned no match. No prompt or session modal was seen.

### Opening FX_Orders (deviation from the brief's route)

- **Form > Open > Select Form** was tried first. The Select Form dialog listed two entries (`G6RIdoCollectionSearch`, `IdoCollections`) because its Filter box was already prefilled with `IdoCollections` and "Filter By: Name". FX_Orders was not listed. Finding FX_Orders would have required typing into the Filter box, which the T6 instruction forbids, so the worker clicked **Cancel** once (dialog closed, no data change) and did not type anything. Screenshot `t6-01-select-form-dialog.png` shows the dialog as it was; `t6-02-after-select-form-cancel.png` shows the Explorer after Cancel.
- The FX_Orders form was then opened from the **Form menu's recent-forms entry** (the menu listed `FX_Orders`, `FX_HelloWorld01`, `FX_Items`, `IDO Properties`, `IDOs`, `Sql Tables`, `IDO Projects`, `Property Classes`, `FX_UMs`, `Export/Import Strings` after the Open and Definition items). This is the same route the brief used for the Designer in T2. The coordinator should decide whether this route is acceptable for future runtime opens.

### Runtime observations (observed; same session)

- **Mode on open:** the form first appeared in **add-mode** (a new-order placeholder): Order Number showed a pre-filled `3` (highlighted), Customer ID and Item were blank, Customer Name, Address, Item Description, Cost and Order Total were blank or `0.00`, Count showed `1`, and the status bar read `Order Number (Object 1 of 1)` (`t6-03-runtime-opened-initial.png`). The Order Number field had focus; nothing was typed into it.
- **Filter in Place:** clicked once on the toolbar `Filter in Place` control (accessibility name `Filter in Place`, abbreviation `FiP`). The form title changed to `FX_Orders` with a filter icon; every criterion was blank (Order Number, Customer ID, Customer Name, Address, Item, Item Description, Cost, Count, Order Total); the status bar read `Filter in Place` (`t6-04-filter-in-place-blank.png`).
- **F4 (1 press):** the query returned two rows. The status bar read `Customer ID (Object 1 of 2)` and the Customer ID field had focus with its text selected (`t6-05-after-f4-order1.png`). Nothing was typed.

### Order values (read from the form and from the grid row text)

| Order | Form fields (screenshot) | Grid row text (accessibility tree) |
|---|---|---|
| 1 | Order Number `1`; Customer ID `FX001`; Customer Name `Factory test one`; Address `1 Factory Street`; Item `dumbbell`; Item Description `45 pound iron`; Cost `45.00`; Count `2`; Order Total `90.00` | `1 FX001 Factory test one 1 Factory Street dumbbell 45 pound iron 45.00 2 90.00` |
| 2 | Order Number `2`; Customer ID `FX002`; Customer Name `Factory test two`; Address `2 Factory Street`; Item `eggs`; Item Description `cage free`; Cost `6.99`; Count `1`; Order Total `6.99` | `2 FX002 Factory test two 2 Factory Street eggs cage free 6.99 1 6.99` |

Both orders match the expected baseline exactly. Order 1 image: `t6-05-after-f4-order1.png` (the order 1 detail with its image). Order 2 image: `t6-06-order2-baseline.png` (status `Order Number (Object 2 of 2)`). Order 1 after returning: `t6-08-order1-returned.png` (status `(Object 1 of 2)`, row 1 highlighted).

### Moving between orders

- Order 2: one click on its row-number cell (the cell shows `2`). The detail view showed order 2 (`t6-06-order2-baseline.png`).
- Return to order 1: the first attempt used the accessibility ref of order 1's row-number cell. It timed out because the `paneZero15-splitter` (the grid/detail splitter) and the grid overlay intercepted the pointer; **nothing was clicked** and no splitter was dragged. The worker took one fresh screenshot (`t6-07-before-return-order1.png`, order 2 still showing) and made one corrected attempt: a single click at the visible row-number cell for row 1, at screen coordinates (318, 190). The detail view changed to order 1 (`t6-08-order1-returned.png`), with row 1 highlighted and the status bar showing `(Object 1 of 2)`.

### Final runtime state (T6)

- FX_Orders is open in the Web Client on **order 1** (row 1 selected). Count 2 and Order Total 90.00 are shown and nothing was edited.
- **Runtime Save: disabled** (find "Save" returned `button "Save" [disabled]`). No save prompt (find "Do you want to save": no match).
- No runtime field was typed into; Count is still `2`; Customer ID is focused but its text is unchanged.
- The runtime form is therefore **open and clean** (no unsaved change), as the T6 instruction required for the next bounded task. The Count change (`3`) and discard have **not** been done.
- Designer (tab 0): unchanged in T6. Last verified clean at the start of T6 (Save disabled, no prompt).

### T6 screenshots (what each proves / does not prove)

- `t6-00-webclient-start-state.png`: Web Client start state. **Proves** the signed-in app, identity bar, Explorer, and no open form. **Does not prove** the session token or the portal state beyond the screen.
- `t6-01-select-form-dialog.png`: the Select Form dialog with the prefilled `IdoCollections` filter and only two entries listed. **Proves** that FX_Orders was not offered there without typing. **Does not prove** any other dialog content.
- `t6-02-after-select-form-cancel.png`: Explorer after Cancel; no dialog open. **Proves** the dialog closed without a change.
- `t6-03-runtime-opened-initial.png`: FX_Orders in add-mode placeholder, with `3` pre-filled in Order Number (highlighted), status `Order Number (Object 1 of 1)`. **Proves** the initial mode. **Does not prove** the stored value of the placeholder.
- `t6-04-filter-in-place-blank.png`: Filter in Place active, every criterion blank, status `Filter in Place`. **Proves** the blank criteria before F4.
- `t6-05-after-f4-order1.png`: after F4, order 1 detail values and the two-row grid. **Proves** order 1's visible values (see table). **Does not prove** order 2 (see `t6-06`).
- `t6-06-order2-baseline.png`: order 2 detail values (FX002 … 6.99). **Proves** order 2's visible values.
- `t6-07-before-return-order1.png`: order 2 still shown before the return click. **Proves** the state before the corrected click.
- `t6-08-order1-returned.png`: order 1 detail after return; Count 2; Order Total 90.00; status `(Object 1 of 2)`. **Proves** order 1's visible baseline values and row selection. **Does not prove** the stored values (same session only).

### T6 action audit (T6 only)

| Category | T6 |
|---|---|
| Tab lists | 1 (before the first selection) |
| Tab selections | 1 (tab 1, Web Client) |
| Untargeted snapshots (fresh) | 1 (Designer; output too large to read, saved outside the repo) |
| Targeted snapshots | 0 successful; 0 failed (the gates used finds) |
| Finds (read-only) | 18 (Designer: "Save", "Do you want to save", "ScopeType"; Web Client: "Do you want to save", "Session Expired", "Form" x2, "Select Form" x2, "Open", "Cancel", "FX_Orders", "menuitem", "Filter in Place", "gridcell", "FX001", "Save", "Do you want to save") |
| Screenshots (captures) | 9 (`t6-00` to `t6-08`) |
| Successful clicks (UI) | 8: Web Client Form menu 2 (once to open, once to reopen after Cancel); Open menu item 1; Select Form Cancel 1; recent-forms FX_Orders 1; Filter in Place 1; order 2 row-number cell 1; order 1 row-number cell (coordinate click) 1 |
| Failed click attempts (no effect) | 1 (order 1 row-number cell by ref; intercepted by the splitter) |
| Tab selections for read | 1 (tab 1) |
| Select Form dialogs opened / left | 1 / 1 (Cancel; no FX_Orders selected there) |
| Runtime opens (FX_Orders) | 1 (recent-forms entry) |
| Runtime closes | 0 (FX_Orders left open, clean, on order 1) |
| F4 presses | 1 |
| Typed entries (runtime / Designer) | 0 / 0 |
| Runtime Saves | 0 |
| Prompts answered (any) | 0 (no prompt appeared) |
| Designer Saves / property edits / Designer dialogs / Undo / Regenerate / Delete / Unload | 0 |
| Designer Form closes / reopens | 0 / 0 |
| Add / Details / Find / New / Delete at runtime | 0 |
| Grid-cell edits / splitter drags | 0 / 0 |
| Web Client unloads | 0 |
| Worker re-logins / checkout actions | 0 / 0 |

### Cumulative browser-action counts (T1 through T6)

| Category | T1–T5 (previous total) | T6 | Cumulative |
|---|---|---|---|
| Tab lists | 5 | 1 | 6 |
| Tab selections | 3 | 1 | 4 |
| Untargeted snapshots | 10 | 1 | 11 |
| Targeted snapshots, successful | 10 | 0 | 10 |
| Targeted snapshots, failed | 2 | 0 | 2 |
| Finds (read-only) | 43 | 18 | 61 |
| Screenshot captures | 23 | 9 | 32 |
| Successful clicks (UI) | 26 | 8 | 34 |
| Failed click attempts | 2 | 1 | 3 |
| Mouse moves / wheel scrolls | 6 / 7 | 0 / 0 | 6 / 7 |
| Hovers | 1 | 0 | 1 |
| Designer dialogs opened / left | 1 / 1 (Script Editor, Cancel) | 0 / 0 | 1 / 1 |
| Designer Form closes / reopens | 1 / 1 (T2) | 0 / 0 | 1 / 1 |
| Save prompts answered No / Yes / Cancel | 1 / 0 / 0 (T2) | 0 / 0 / 0 | 1 / 0 / 0 |
| Server-event error dialogs answered OK | 1 (T4) | 0 | 1 |
| Runtime Select Form dialogs opened / left | 0 / 0 | 1 / 1 (Cancel) | 1 / 1 |
| Runtime opens / closes | 0 / 0 | 1 / 0 | 1 / 0 |
| Runtime F4 presses | 0 | 1 | 1 |
| Runtime typed entries | 0 | 0 | 0 |
| Designer typed entries / Designer Saves / property edits / Undo / Regenerate / Delete / Unload | 0 | 0 | 0 |
| Runtime Saves / unloads | 0 / 0 | 0 / 0 | 0 / 0 |
| Event Handlers rows read | 0 | 0 | 0 |
| Worker re-logins / checkout actions | 0 / 0 | 0 / 0 | 0 / 0 |

Operator actions reported before T5 (one manual re-login, two tab reloads, one Designer reopen) are not counted as worker actions.

## T7: runtime Count change (unsaved) and discard (2026-10-15, worker session 8df4d69e-293a-41bf-9abf-a61af6b32609)

Bounded instruction (T7): list tabs; fresh read-only check of the existing runtime FX_Orders (order 1 selected; FX001; dumbbell; Cost 45.00; Count 2; Order Total 90.00; runtime Save disabled; no prompt), stopping if not intact; no reopen and no repeat of the query; one click on the detail-view Count field, select its whole content, type 3 once, Tab once; record Count, Cost, Order Total and the grid row before any Save; screenshot; no Save; close the runtime Form once; answer No once to the save confirmation and record its exact text; if no confirmation appears, record it and stop blocked; do not reopen; do not inspect or modify the Designer.

### Pre-change baseline (read-only; intact)

- Tabs listed once (before the first selection). The Designer tab (tab 0) was read only for its Save state with one find: `button "Save" [disabled]`. It was not otherwise inspected.
- Web Client (tab 1, selected once). Order 1 was selected (grid row 1 highlighted; status `(Object 1 of 2)`). Detail values: Order Number `1`; Customer ID `FX001`; Customer Name `Factory test one`; Address `1 Factory Street`; Item `dumbbell`; Item Description `45 pound iron`; Cost `45.00`; Count `2`; Order Total `90.00`. Screenshot `t7-00-baseline-before-count-change.png`.
- Runtime toolbar `Save` was `[disabled]` (find). No `Do you want to save` prompt was open (find, twice).

### Count change (one entry)

1. One click on the detail-view Count field (accessibility name `Count:`), which set focus there.
2. **Ctrl+A** (one key press) to select the field's existing whole content.
3. **Text entry `3` (one entry)** through the browser type tool. The tool sets the field's value in one step (its fill mode), not one keystroke at a time. This is recorded as a deviation from "type 3 once"; the field's result is `3`, and the field held no other text.
4. **Tab (one key press)**. Focus left the field.

### Post-change observations (before any Save; observed only)

| Field | Displayed value |
|---|---|
| Count (detail view) | `3` |
| Cost | `45.00` |
| **Order Total (detail view)** | **`90.00`** (did **not** change; the tutorial's prediction of an immediate change was not borne out here, and the value remained 90.00 before Save) |
| Grid row 1 (accessibility row text) | `1 FX001 Factory test one 1 Factory Street dumbbell 45 pound iron 45.00 3 90.00` (Count `3`; Order Total `90.00`) |
| Row marker | the row-1 marker changed to an unsaved (diamond) marker |
| Toolbar Save | the Save icon became active (dark) in the screenshot; this is the unsaved-change state |
| Status bar | `Count (Object 1 of 2)` |

Screenshot `t7-01-post-count-change-unsaved.png`: shows Count `3`, Cost `45.00`, Order Total `90.00`, the unsaved row marker, and the active Save icon. **Proves** the displayed values and the unsaved state before the close. **Does not prove** any stored value or whether the derived total is recalculated on Save.

No Save was pressed (no Save, no save option, no other field touched).

### Close and save confirmation

1. **One click on the runtime Form's tab close control** (accessibility name `Close Panel FX_Orders`). This is the form's normal tab close.
2. The save confirmation appeared. **Exact text (screenshot `t7-02-save-prompt-before-answer.png`):**
   - Title: `Infor Mongoose Application Development Framework - FX_Orders`
   - Question: `Do you want to save your changes to primary collection?`
   - Buttons: **Yes** (default focus, highlighted), **No**, **Cancel**.
3. **Answer: No (one click on No).** No Yes, no Cancel, no Enter key.
4. After the answer: find `Do you want to save` returned **no match**; screenshot `t7-03-after-no-answer-runtime-closed.png` shows the Explorer with no open form and no dialog. **The runtime FX_Orders Form is closed.**

Other prompts: none. The save confirmation appeared, so the instruction's "no confirmation" branch did not apply.

### Limits of the T7 observations

- The Order Total of 90.00 is the displayed value before Save; the worker did not inspect the stored value and did not Save to test persistence.
- The Count entry used the type tool's fill mode (one value set), not key-by-key typing.
- The Save state after the change was judged from the screenshot (active icon) and the unsaved row marker; no runtime Save find was run after the change.

### T7 screenshots (what each proves / does not prove)

- `t7-00-baseline-before-count-change.png`: intact baseline for order 1 (values above), Save greyed, no prompt. **Proves** the pre-change values. **Does not prove** stored values.
- `t7-01-post-count-change-unsaved.png`: Count `3`, Cost `45.00`, Order Total `90.00`, unsaved marker, active Save icon. **Proves** the displayed post-change state before Save. **Does not prove** persistence or recalculation on Save.
- `t7-02-save-prompt-before-answer.png`: the save confirmation with its title, question and Yes/No/Cancel buttons, taken before answering. **Proves** the prompt's exact text and buttons. **Does not prove** the cause of the prompt beyond the unsaved change.
- `t7-03-after-no-answer-runtime-closed.png`: after No; Explorer shown; no open form; no dialog. **Proves** the Form closed without a save prompt remaining. **Does not prove** the stored Count or Order Total (the reopen is a separate task).

### T7 action audit (T7 only)

| Category | T7 |
|---|---|
| Tab lists | 1 |
| Tab selections | 1 (tab 1, Web Client) |
| Untargeted snapshots | 0 |
| Targeted snapshots | 1 (returned a different region than intended, no error; not used for values) |
| Finds (read-only) | 10 (Designer: "Save"; Web Client: "Do you want to save" x3, "FX001" x2, "Count", "Save", "Order Total", "FX001 Factory test one", "Close") |
| Screenshots (captures) | 4 (`t7-00` to `t7-03`) |
| Successful clicks (UI) | 3: Count field (focus); Close Panel FX_Orders (tab close); No on the save prompt |
| Key presses | 2: Ctrl+A (select all in the Count field); Tab (leave the field) |
| Typed entries | 1: `3` into the order 1 Count field (fill mode; see the deviation) |
| Failed click attempts | 0 |
| Runtime opens | 0 (no reopen in T7) |
| Runtime closes | 1 (the Form close, answered No) |
| F4 presses | 0 |
| Save prompts answered | No 1 (text above); Yes 0; Cancel 0; other prompts 0 |
| Runtime Saves | 0 |
| Designer tab actions | 0 (one find on the Designer for its Save state only; no click, no key, no edit, no selection of the Designer's content) |
| Designer Saves / property edits / Undo / Regenerate / Delete / Unload | 0 |
| Unloads (Web Client) | 0 |
| Checkout actions / worker re-logins | 0 / 0 |

### Cumulative browser-action counts (T1 through T7)

| Category | T1–T6 (previous) | T7 | Cumulative |
|---|---|---|---|
| Tab lists | 6 | 1 | 7 |
| Tab selections | 4 | 1 | 5 |
| Untargeted snapshots | 11 | 0 | 11 |
| Targeted snapshots, successful | 10 | 1 | 11 |
| Targeted snapshots, failed | 2 | 0 | 2 |
| Finds (read-only) | 61 | 10 | 71 |
| Screenshot captures | 32 | 4 | 36 |
| Successful clicks (UI) | 34 | 3 | 37 |
| Failed click attempts | 3 | 0 | 3 |
| Key presses | 0 | 2 | 2 |
| Mouse moves / wheel scrolls | 6 / 7 | 0 / 0 | 6 / 7 |
| Hovers | 1 | 0 | 1 |
| Designer dialogs opened / left | 1 / 1 (Script Editor, Cancel) | 0 / 0 | 1 / 1 |
| Designer Form closes / reopens | 1 / 1 (T2) | 0 / 0 | 1 / 1 |
| Save prompts answered No (Designer T2 + runtime T7) | 1 | 1 | 2 |
| Save prompts answered Yes / Cancel | 0 / 0 | 0 / 0 | 0 / 0 |
| Server-event error dialogs answered OK | 1 (T4) | 0 | 1 |
| Runtime Select Form dialogs opened / left | 1 / 1 (T6, Cancel) | 0 / 0 | 1 / 1 |
| Runtime opens / closes | 1 / 0 | 0 / 1 | 1 / 1 |
| Runtime F4 presses | 1 | 0 | 1 |
| Runtime typed entries | 0 | 1 | 1 (Count `3`) |
| Runtime Saves | 0 | 0 | 0 |
| Designer typed entries / Designer Saves / property edits / Undo / Regenerate / Delete / Unload | 0 | 0 | 0 |
| Web Client unloads | 0 | 0 | 0 |
| Event Handlers rows read | 0 | 0 | 0 |
| Worker re-logins / checkout actions | 0 / 0 | 0 / 0 | 0 / 0 |

### Runtime state at the end of T7

- FX_Orders runtime Form: **closed** (after one No). The Web Client shows the Explorer; no form is open; no prompt is open.
- No runtime change remains open or unsaved (the close discarded it).
- Designer (tab 0): not inspected or changed beyond the Save-state find at the start of T7.

## T8: post-discard verification attempt (Select Form route, blocked; 2026-10-15, worker session 8df4d69e-293a-41bf-9abf-a61af6b32609)

Bounded instruction (T8): list tabs; one fresh read-only inspection of the Web Client (signed in, Explorer shown, no runtime Form open, no prompt); Form > Open > Select Form once; inspect the dialog and its filter; if the filter is prefilled with IdoCollections, use a visible Clear or Reset control without typing; if none exists, or FX_Orders cannot be selected safely, capture evidence, close the dialog with Cancel and stop blocked; do not substitute the recent-forms route; if FX_Orders is available, open the runtime Form once, verify both orders, and close once. No Designer inspection or change; no Script Editor; no runtime edit.

### Steps and observations, in order

1. **Tab list** (read-only, once, before the first selection): tab 0 = Designer (FX_Orders, current); tab 1 = Web Client. In the same batch, one read-only find on tab 0 for the prompt text `Do you want to save` returned no match (a read on the Designer tab, not a Designer action). No other Designer state was read.
2. **Tab 1 selected** (once).
3. **Gate, read-only:** find `Explorer` returned the Explorer region (Master Explorer, My Folders, Public Folders, User Folders); no runtime Form is open. Find `Session Expired` returned no match. Screenshot `t8-00-webclient-start-state.png`: identity bar `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` (the operator account is shown in the screenshot and not otherwise transcribed here); no prompt. **Gate passed.**
4. **Form menu opened** (one click on the Form menu, from a fresh find). Menu items listed: Open; Close and Save Changes (disabled); Close and Cancel Changes (disabled); Definition; Sign Out; and the recent forms FX_Orders, FX_HelloWorld01, FX_Items, IDO Properties, IDOs, Sql Tables, IDO Projects, Property Classes, FX_UMs, Export/Import Strings.
5. **Open clicked once** (menu item `Open`). The Select Form dialog appeared.
6. **Dialog inspected (read-only finds and screenshot `t8-01-select-form-dialog-initial.png`):**
   - Title: `Select Form`. Close control: `Close Window` (×).
   - Grid: two rows, `G6RIdoCollectionSearch` (caption and name; highlighted) and `IdoCollections` (caption `IDOs`). **FX_Orders is not listed.**
   - Filter box: prefilled with `IdoCollections` (the text is highlighted/selected). `Filter By: Name`. Checkboxes `Case Sensitive` and `Starts With`.
   - Buttons: `OK`, `Cancel`, `Help`.
   - Visible clearing control: **none.** Find `Clear` returned no match; find `Reset` returned no match.
7. **Decision under the T8 rule:** clearing the prefilled filter would require typing into or editing the Filter field, which the rule forbids. So the instruction's condition ("no visible non-typing clearing mechanism exists") applied. FX_Orders could not be selected safely. The recent-forms route was **not** substituted.
8. **Dialog closed with Cancel** (one click on the `Cancel` button of the dialog). Post-check: find `Select Form` returned no match; screenshot `t8-02-after-select-form-cancel.png` shows the Explorer with no dialog open.
9. **Stopped blocked.** No Designer action, no Script Editor, no runtime Form opened, no F4, no Count entry, no prompt.

### Results of the T8 verification

- **Post-discard reopen and both-order readback: not performed.** Neither order 1 nor order 2 was displayed in T8. The reopen check of AC-4 therefore remains **open**.
- **Post-discard Count readback: not performed** (no runtime Form open).
- No prompt was answered in T8 (none appeared).
- No runtime record was edited in T8.

### Navigation-route status (for operator disposition)

- The brief's Select Form route is **blocked**: its filter is prefilled with `IdoCollections`, and no visible non-typing clearing control exists in the dialog.
- The T6 recent-forms route was **not** used again, as the T8 instruction required. It remains the only route that opened FX_Orders in this experiment, and its disposition is still pending (T6 deviation 10; T7 section).
- The operator needs to decide one of: (a) an operator-performed clearing of the filter or a route change, followed by a new bounded task; (b) approval of the recent-forms route for the reopen; or (c) another route authorised for the reopen. The worker has not chosen one.

### Runtime and Designer state at the end of T8

- **Web Client (tab 1):** Explorer shown; no runtime Form open; no dialog or prompt open (find `Do you want to save`: no match; find `Select Form`: no match after Cancel).
- **Designer (tab 0):** not inspected or changed in T8 beyond the single prompt-text find at step 1. Its last Save-state read was in T7 (disabled). Designer dialogs in T8: none.

### T8 screenshots (what each proves / does not prove)

- `t8-00-webclient-start-state.png`: Explorer shown with the identity bar; no runtime Form; no prompt. **Proves** the gate state at the start of T8. **Does not prove** the session token or anything beyond the screen.
- `t8-01-select-form-dialog-initial.png`: the Select Form dialog as opened, with the filter prefilled `IdoCollections` (highlighted), two listed entries, and buttons OK/Cancel/Help. **Proves** the prefilled filter, the absence of FX_Orders in the list, and the absence of a visible Clear control in the dialog. **Does not prove** whether any hidden control exists outside the rendered dialog.
- `t8-02-after-select-form-cancel.png`: the Explorer after Cancel, with no dialog open. **Proves** the dialog closed without a selection.

### T8 action audit (T8 only)

| Category | T8 |
|---|---|
| Tab lists | 1 (once, before the first selection) |
| Tab selections | 1 (tab 1) |
| Untargeted snapshots | 0 |
| Targeted snapshots | 0 |
| Finds (read-only) | 10 (tab 0: `Do you want to save`; tab 1: `Explorer`, `Session Expired`, `Form`, `Open`, `Select Form`, `Clear`, `Reset`, `Cancel`, `Select Form` after Cancel) |
| Screenshot captures | 3 (`t8-00` to `t8-02`) |
| Successful clicks (UI) | 3: Form menu (open); `Open` menu item; dialog `Cancel` |
| Failed click attempts | 0 |
| Key presses / typed entries | 0 / 0 (no key was pressed in the Select Form filter; no text was typed anywhere) |
| Select Form dialogs opened / left | 1 / 1 (closed with Cancel; no selection made) |
| Recent-forms route used | 0 (not substituted) |
| Runtime opens / closes / F4 presses | 0 / 0 / 0 |
| Runtime typed entries / runtime Saves | 0 / 0 |
| Prompts answered | 0 (none appeared) |
| Designer actions (clicks, edits, dialogs, Saves, Undo, Regenerate, Delete, unload) | 0 (one prompt-text find on tab 0 only) |
| Script Editor opened | 0 |
| Event Handlers rows read / Component Events inspected | 0 / 0 |
| Web Client unloads / checkout actions / worker re-logins | 0 / 0 / 0 |

Auto-written browser-tool files in T8: `evidence/playwright/page-2026-10-14T17-04-18-179Z.yml` (after the Form menu click), `page-2026-10-14T17-04-27-465Z.yml` (after Open), `page-2026-10-14T17-04-54-122Z.yml` (after Cancel). The T8 tab list reported `evidence/playwright/console-2026-10-14T17-03-37-150Z.log`.

### Cumulative browser-action counts (T1 through T8)

| Category | T1–T7 (previous) | T8 | Cumulative |
|---|---|---|---|
| Tab lists | 7 | 1 | 8 |
| Tab selections | 5 | 1 | 6 |
| Untargeted snapshots | 11 | 0 | 11 |
| Targeted snapshots, successful | 11 | 0 | 11 |
| Targeted snapshots, failed | 2 | 0 | 2 |
| Finds (read-only) | 71 | 10 | 81 |
| Screenshot captures | 36 | 3 | 39 |
| Successful clicks (UI) | 37 | 3 | 40 |
| Failed click attempts | 3 | 0 | 3 |
| Key presses | 2 | 0 | 2 |
| Mouse moves / wheel scrolls | 6 / 7 | 0 / 0 | 6 / 7 |
| Hovers | 1 | 0 | 1 |
| Designer dialogs opened / left | 1 / 1 (Script Editor, Cancel) | 0 / 0 | 1 / 1 |
| Designer Form closes / reopens | 1 / 1 (T2) | 0 / 0 | 1 / 1 |
| Save prompts answered No (Designer T2 + runtime T7) | 2 | 0 | 2 |
| Save prompts answered Yes / Cancel | 0 / 0 | 0 / 0 | 0 / 0 |
| Other prompts answered | 0 | 0 | 0 |
| Server-event error dialogs answered OK | 1 (T4) | 0 | 1 |
| Runtime Select Form dialogs opened / left | 2 / 2 (T6 Cancel; T8 Cancel) | 1 / 1 | 2 / 2 |
| Runtime opens / closes | 1 / 1 | 0 / 0 | 1 / 1 |
| Runtime F4 presses | 1 | 0 | 1 |
| Runtime typed entries | 1 (Count `3`, T7) | 0 | 1 |
| Runtime Saves / unloads | 0 / 0 | 0 / 0 | 0 / 0 |
| Designer typed entries / Saves / property edits / Undo / Regenerate / Delete / Unload | 0 | 0 | 0 |
| Event Handlers rows read | 0 | 0 | 0 |
| Worker re-logins / checkout actions | 0 / 0 | 0 / 0 | 0 / 0 |

Operator actions reported before T5 (one manual re-login, two tab reloads, one Designer reopen) are not counted as worker actions.

## T9: post-discard verification by the operator-approved recent-forms route, and clean close (2026-10-15, worker session 8df4d69e-293a-41bf-9abf-a61af6b32609)

**Operator route disposition (recorded from the T9 instruction, not decided by the worker):** on 2026-10-15 the operator approved the Form menu recent-forms route (`FX_Orders` entry) for the remainder of EXP-093. The Select Form route is not used again in this experiment.

Bounded instruction (T9): tab list; Web Client gate (signed in, Explorer, no runtime Form, no prompt); open FX_Orders once from the recent-forms entry; if add-mode, do not edit it and switch to Filter in Place; blank criteria; F4 once; verify both orders; row-number cells only; full readbacks and separate screenshots; compare the post-discard values with T6 and T7; if any value differs, stop without change; if both match, confirm runtime Save disabled and close once with the tab close control; verify no prompt; if an unexpected prompt appears, record it, answer No once and stop.

### Gate and route (observed)

1. **Tab list** (once, first in the task): tab 0 = Designer (FX_Orders, current); tab 1 = Web Client. In the same batch, one find on tab 0 for `Do you want to save`: no match. The Designer was not otherwise read.
2. **Tab 1 selected** (once). Find `Session Expired`: no match. Screenshot `t9-00-webclient-start-state.png`: Explorer shown, identity bar `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`, no runtime Form open, no prompt. **Gate passed.**
3. **Form menu opened** (click) and find `menuitem` listed the recent forms; `FX_Orders` was entry `f1e108`.
4. **FX_Orders recent-form clicked once.** Screenshot `t9-01-runtime-opened-initial.png`: the form opened in the **add-mode placeholder** (as in T6): Order Number field focused showing `3`; Customer ID and Item blank; Cost `0.00`; Count `1`; Order Total `0.00`; status `Order Number (Object 1 of 1)`. The placeholder was **not edited**.
5. **Filter in Place clicked once** (toolbar `Filter in Place`). Screenshot `t9-02-filter-in-place-blank.png`: title `FX_Orders` with the filter icon; every criterion blank; status `Filter in Place`.
6. **F4 pressed once.** Screenshot `t9-03-order1-after-f4.png`: two rows; status `Customer ID (Object 1 of 2)`; Customer ID field focused with its text selected (not typed into).

### Readbacks after F4 and after moving between orders

| Order | Source | Customer ID | Customer Name | Address | Item | Item Description | Cost | Count | Order Total |
|---|---|---|---|---|---|---|---|---|---|
| 1 | detail view, `t9-03` (after F4) | FX001 | Factory test one | 1 Factory Street | dumbbell | 45 pound iron | 45.00 | 2 | 90.00 |
| 2 | detail view, `t9-04` (after row-cell click) | FX002 | Factory test two | 2 Factory Street | eggs | cage free | 6.99 | 1 | 6.99 |
| 1 | detail view, `t9-05` (after returning by row-cell click) | FX001 | Factory test one | 1 Factory Street | dumbbell | 45 pound iron | 45.00 | 2 | 90.00 |

Grid row text (accessibility rows, after F4): order 1 `1 FX001 Factory test one 1 Factory Street dumbbell 45 pound iron 45.00 2 90.00`; order 2 `2 FX002 Factory test two 2 Factory Street eggs cage free 6.99 1 6.99`.

Moves between orders were by row-number cells only: order 2 by a coordinate click on its row-number cell at (318, 216) (the first ref-based attempt was not used in T9); order 1 by a coordinate click at (318, 190). No field was typed into; no grid cell was edited; no splitter was dragged.

### Post-discard comparison (required by T9)

| Field | T6 baseline (before any change) | T7 unsaved (before Save) | T9 post-discard readback | Result |
|---|---|---|---|---|
| Order 1 Count | 2 | 3 (unsaved) | **2** | Matches T6; the unsaved 3 is **not** present |
| Order 1 Order Total | 90.00 | 90.00 | **90.00** | Matches T6 |
| Order 1 Cost | 45.00 | 45.00 | 45.00 | Matches T6 |
| Order 1 other fields (Customer ID, Name, Address, Item, Item Description) | FX001 / Factory test one / 1 Factory Street / dumbbell / 45 pound iron | same | same | Matches T6 |
| Order 2 (all fields incl. Count 1, Order Total 6.99) | FX002 / Factory test two / 2 Factory Street / eggs / cage free / 6.99 / 1 / 6.99 | not changed in T7 | same | Matches T6 |

No discrepancy was found, so no stop-on-discrepancy was needed.

### Runtime close and prompt

- Runtime Save was checked before the close: `button "Save" [disabled]`.
- **One close** on the FX_Orders tab's close control (`Close Panel FX_Orders`). Find `Do you want to save` after the close: **no match**. Screenshot `t9-06-after-clean-close.png`: the Explorer with no open form, no dialog, no prompt.
- **No save prompt appeared, so no answer was given.** The T9 instruction's "clean close" branch applied. No Yes, No or Cancel was clicked in T9.

### Limits (observed only)

- The readbacks are same-session UI readbacks after an in-session Form close and reopen. They are not cross-session durability and not replay verification.
- The clean close shows that no unsaved change was pending in the runtime at close. It does not prove the stored state directly; the readbacks show the displayed state after reopen in this session.
- The add-mode placeholder's Order Number `3` was not edited and is not interpreted.

### T9 screenshots (what each proves / does not prove)

- `t9-00-webclient-start-state.png`: Explorer, identity bar, no runtime Form, no prompt. **Proves** the gate. **Does not prove** the session token.
- `t9-01-runtime-opened-initial.png`: add-mode placeholder after the recent-form open, before any change. **Proves** the initial mode. **Does not prove** any stored value.
- `t9-02-filter-in-place-blank.png`: Filter in Place active; all criteria blank. **Proves** the blank query state before F4.
- `t9-03-order1-after-f4.png`: order 1 after F4 with the two-row grid behind; FX001 … Count 2, Order Total 90.00; status `Customer ID (Object 1 of 2)`. **Proves** order 1's displayed values after the query. **Does not prove** order 2 (see `t9-04`).
- `t9-04-order2-reopened.png` (the file name carries "reopened" from the brief's list): order 2 detail, FX002 … Count 1, Order Total 6.99; status `(Object 2 of 2)`; row 2 highlighted. **Proves** order 2's displayed values. **Does not prove** the stored values.
- `t9-05-order1-readback-after-return.png`: order 1 after returning by its row-number cell; Count 2, Order Total 90.00; status `(Object 1 of 2)`. **Proves** order 1's post-discard displayed values and that the unsaved Count 3 is gone from the display. **Does not prove** the stored value.
- `t9-06-after-clean-close.png`: Explorer after the close; no dialog or prompt. **Proves** the Form closed with no prompt and the Web Client is clean. **Does not prove** anything about stored data.

### T9 action audit (T9 only)

| Category | T9 |
|---|---|
| Tab lists | 1 (once, before the first selection) |
| Tab selections | 1 (tab 1) |
| Untargeted snapshots | 0 |
| Targeted snapshots (successful / failed) | 0 / 0 |
| Finds (read-only) | 9 (tab 0: `Do you want to save`; tab 1: `Session Expired`, `Form`, `menuitem`, `Filter in Place`, `gridcell`, `Save`, `Close Panel FX_Orders`, `Do you want to save`) |
| Screenshot captures | 7 (`t9-00` to `t9-06`) |
| Successful clicks (UI) | 6: Form menu; FX_Orders recent-form entry; Filter in Place; order 2 row-number cell (coordinate); order 1 row-number cell (coordinate); tab close control |
| Failed click attempts | 0 |
| Key presses | 1 (F4, once) |
| Typed entries (runtime / Designer) | 0 / 0 |
| Runtime opens (recent-forms route) | 1 |
| Runtime closes (clean, no prompt) | 1 |
| F4 presses | 1 |
| Save prompts answered | 0 (none appeared) |
| Runtime Saves | 0 |
| Designer actions (clicks, edits, dialogs, Saves, Undo, Regenerate, Delete, unload, Script Editor, Event Handlers) | 0 (one prompt-text find on tab 0 only) |
| Select Form dialogs opened | 0 (route not used; operator-approved recent-forms route instead) |
| Event Handlers rows read / component Events inspected | 0 / 0 |
| Web Client unloads / checkout actions / worker re-logins | 0 / 0 / 0 |

### Cumulative browser-action counts (T1 through T9)

| Category | T1–T8 (previous) | T9 | Cumulative |
|---|---|---|---|
| Tab lists | 8 | 1 | 9 |
| Tab selections | 6 | 1 | 7 |
| Untargeted snapshots | 11 | 0 | 11 |
| Targeted snapshots, successful | 11 | 0 | 11 |
| Targeted snapshots, failed | 2 | 0 | 2 |
| Finds (read-only) | 81 | 9 | 90 |
| Screenshot captures | 39 | 7 | 46 |
| Successful clicks (UI) | 40 | 6 | 46 |
| Failed click attempts | 3 | 0 | 3 |
| Key presses | 2 | 1 | 3 |
| Mouse moves / wheel scrolls | 6 / 7 | 0 / 0 | 6 / 7 |
| Hovers | 1 | 0 | 1 |
| Designer dialogs opened / left | 1 / 1 | 0 / 0 | 1 / 1 |
| Designer Form closes / reopens | 1 / 1 | 0 / 0 | 1 / 1 |
| Save prompts answered No (T2 Designer; T7 runtime) | 2 | 0 | 2 |
| Save prompts answered Yes / Cancel / other | 0 / 0 / 0 | 0 / 0 / 0 | 0 / 0 / 0 |
| Server-event error dialogs answered OK | 1 (T4) | 0 | 1 |
| Runtime Select Form dialogs opened / left | 2 / 2 (T6, T8; both Cancel) | 0 / 0 | 2 / 2 |
| Runtime opens (recent-forms route: T6, T9) | 1 | 1 | 2 |
| Runtime closes (T7 on No; T9 clean) | 1 | 1 | 2 |
| Runtime F4 presses (T6, T9) | 1 | 1 | 2 |
| Runtime typed entries (Count `3`, T7) | 1 | 0 | 1 |
| Runtime Saves / unloads | 0 / 0 | 0 / 0 | 0 / 0 |
| Designer typed entries / Saves / property edits / Undo / Regenerate / Delete / Unload | 0 | 0 | 0 |
| Event Handlers rows read | 0 | 0 | 0 |
| Worker re-logins / checkout actions | 0 / 0 | 0 / 0 | 0 / 0 |

Operator actions reported before T5 (one manual re-login, two tab reloads, one Designer reopen) and the T9 route disposition are not counted as worker browser actions.

### Documentation status

- The T9 observations are recorded. The AC-4 reopen and both-order readbacks are complete as observed UI readbacks. No overall acceptance conclusion is issued in T9; the decision is reserved for the subsequent documentation-only audit.
- The T1 post-Cancel dirty-state failure, the T2 operator-authorised recovery, the T3 empty Event Handlers grid, the T4 server-event error, the T5 component Events readback, the T6 baseline and route deviation, the T7 one-entry Count observation and the T8 blocked route are all preserved in their own sections above and are not restated as resolved.

### Turn end and documentation pass (T10, documentation only)

- **Turn end (T9):** the T9 browser work finished with the clean close shown in `t9-06-after-clean-close.png`. The T9 turn then made four record edits (status, AC-4 row, AC-5 row, this T9 section) and ended without a T9 final HARNESS REPORT. The controller audit (`harness-audit-T9.md`) records a terminal session-limit message after those edits. No browser action was taken after the clean close.
- **T10 pass (this documentation-only step):** no browser call. The T10 step re-read the record, the T9 controller audit and screenshots `t9-00` to `t9-06`, and confirmed each screenshot shows what the T9 section says. It then completed the file inventory (T9 screenshots, T9 browser-tool files, harness-generated audit files), the knowledge state, the open questions, the deviations, and the session note. It did not change any T9 observation.
- **Screenshot check (T10, observed):** `t9-00` shows the Explorer with the identity bar and no open form. `t9-01` shows the add-mode placeholder (Order Number `3` highlighted, status `Order Number (Object 1 of 1)`). `t9-02` shows Filter in Place with blank criteria. `t9-03` shows order 1 with Count 2 and Order Total 90.00 (status `Customer ID (Object 1 of 2)`). `t9-04` shows order 2 with Count 1 and Order Total 6.99 (status `(Object 2 of 2)`, row 2 selected). `t9-05` shows order 1 again with Count 2 and Order Total 90.00 (status `(Object 1 of 2)`). `t9-06` shows the Explorer after the close with no dialog.
- **Not in T9 or T10:** no acceptance conclusion (reserved for AC-5); no replay verification; no cross-session durability claim.

## T11: final acceptance reconciliation (documentation only; 2026-10-15)

Full report: `evidence/EXP-093/final-acceptance-audit-report.md`. No browser call was made in T11, and no Mongoose artifact was changed.

Recommendation: **not accepted.** AC-2's original criterion ("the Designer still clean afterwards") failed in T1. No operator waiver or revised criterion exists. The T2 operator-authorised close and No restored a clean Designer, but that is recorded as a recovery, not a pass. Operator disposition is required. Successful observations stay recorded.

Per-check recommendations (detail and evidence paths in the report):
- AC-1: met with limitation. The "Edit Form Script" label was not observed; the pencil opened the editor directly.
- AC-2: failed on the clean-state clause. Editor opening, title, controls, verbatim content (lines 1 to 20, by transcription) and Cancel exit are met. Content beyond line 20 is not demonstrated. The post-discard script content is not verified.
- AC-3: met (observed) with limitations. The Event Handlers grid is empty (zero rows). All six components were read in T5; their Binding and Events displays are blank. Values were read from the display; drop-downs were not opened.
- AC-4: met as observed in one session, with qualifications. T6 baseline matched; T7 Count 3 entered once (as one browser fill, not keystrokes); Order Total 90.00 before Save; exact prompt text recorded; No answered once; T9 readbacks matched the baseline; clean close with no prompt. The "no Designer change" clause holds only for persisted changes (T1 left an unsaved Designer change of unknown origin, discarded in T2). The T6 recent-forms route was used before approval.
- AC-5: met after reconciliation. Corrections to the earlier cumulative tables:
  - C1 T5 finds 23 to 24. C2 T7 finds 10 to 11. C3 T6 tab lists 1 to 2. C4 T6 snapshot output too large (errored; not recorded as a failure). C5 T6 denied read of a tool-results file (not recorded before). C6 cumulative key presses 3 to 4 (T6 F4 omitted). C7 cumulative tab lists 9 to 10. C8 cumulative finds 90 to 92. C9 cumulative failed snapshots 2 to 3. C10 "AGENTS.md reviewed" is supported only by the task text; no audit records a tool read. C11 snapshot targeting (targeted or untargeted) is not recorded by the audits and cannot be verified; totals agree. C12 audit summary lines do not match their table rows; table rows were used.

Reconciled totals, T1 to T9 (from the audit table rows): browser calls 247 (tabs 17; snapshots 24, of which 3 errored; finds 92; clicks 46 browser clicks (3 failed) plus 3 coordinate clicks; screenshots 46; key presses 4; typed 1; hover 1; mouse moves 6; wheel 7). Record edits 66; writes 2; reads, greps and globs 68. T10: 0 browser calls; 12 edits; 13 reads. Runtime: opens 2, closes 2, F4 presses 2, typed entries 1 (Count 3), Saves 0. Designer: dialogs opened 1 (Script Editor, left with Cancel), Form closes 1 and reopens 1, save prompts answered No 1 (T2), Designer Saves 0, Designer property edits 0. Runtime save prompts answered No 1 (T7). Server-event error dialogs answered OK 1 (T4). Select Form dialogs opened 2 (T6, T8), both cancelled. Unloads 0. Checkout actions 0. Worker re-logins 0.

Operator dispositions needed before acceptance or EXP-094: (1) AC-2 waiver or revised criterion, or failed status; (2) the T1 dirty-state cause, if it matters for EXP-094; (3) acceptance of the T6 pre-approval route use and the T7 fill-mode Count entry as recorded deviations; (4) whether the AGENTS.md sources check is acceptable on the task text alone; (5) whether the unverified "Edit Form Script" label and the unverified stored values need a separate authorised task.

## T6 navigation deviation: disposition given 2026-10-15 (recent-forms route approved)

T6 opened FX_Orders from the Form menu's recent-forms entry because the brief's Select Form route did not list FX_Orders without typing into a prefilled filter (T6 record, deviation 10). T7 did not use that route again. The coordinator should decide how the next task reopens FX_Orders, whether through the recent-forms entry (the T6 route) or by clearing and typing into the Select Form filter. T7 makes no decision on this. **T8 tested the Select Form route again** and found it blocked (prefilled `IdoCollections` filter, no visible non-typing Clear or Reset control; dialog cancelled). The disposition was then given by the operator on 2026-10-15: the recent-forms route is approved for the rest of EXP-093. T9 used that route once (reopen and both-order readback). The Select Form route was not used again.

## Session / re-login

- Session usable throughout T1–T5 for navigation. The T4 server-event error was not a Session Expired modal, and no Infor sign-in page was seen by the worker in T5. The T5 session token change is attributed to the operator's reported re-login. **Worker re-login count: 0.**
- T6, T7 and T8: session usable for navigation; no Session Expired modal and no Infor sign-in page. Worker re-login count remains 0.
- T9: session usable for navigation; no Session Expired modal and no Infor sign-in page. The controller audit of T9 records a terminal **usage-limit** message ("You've hit your session limit · resets 3am (Asia/Singapore)"). This is a usage limit, not a Mongoose session expiry, and it did not change the runtime state recorded in T9. Worker re-login count remains 0.
- Earlier note (T1–T4): session usable for navigation. The server-event **Error** dialog in T4 is not the "Session Expired" modal and no Infor sign-in page appeared. **Re-login count: 0.**

## Browser action audit (T1 and T2 columns; superseded: the cumulative tables that follow T3 through T9 are the current totals; the T9 cumulative table is the latest)

| Category | T1 | T2 | Cumulative | Details |
| --- | --- | --- | --- | --- |
| Tab lists | 1 | 1 | 2 | Before the first selection in each task |
| Tab selections | 1 | 0 | 1 | T1: tab 0 (Designer). T2: tab 0 was already current |
| Snapshots, untargeted | 1 | 3 | 4 | T2: start; recovery after the failed Form click; post-reopen verification |
| Snapshots, targeted | 3 | 0 | 3 | T1: form panel e1721 x2, toolbar e11 x1 |
| Finds (read-only) | 7 | 3 | 10 | T1: "Script Language", "Behavior", "Script", "Edit Form Script", "Methods go here", "Cancel", "Save". T2: "Do you want to save" x2, "FX_Orders" x1 |
| Screenshots | 4 | 4 | 8 | T1: t1-01 to t1-04. T2: t2-01 to t2-04 |
| Successful clicks (UI) | 5 | 4 | 9 | T1: Form tab; Behavior row; Form panel Expand; pencil (opened Script Editor); Script Editor Cancel. T2: Form-tab close; No on the prompt; Form menu; recent-form FX_Orders |
| Failed click attempts (no effect) | 0 | 1 | 1 | T2: a click with the text target "Form" was intercepted by the toolbar menu (timeout); nothing was clicked |
| Hovers | 1 | 0 | 1 | Pencil button (no tooltip appeared) |
| Designer dialogs opened | 1 | 0 | 1 | Script Editor (via the pencil) |
| Designer dialogs left | 1 | 0 | 1 | Script Editor left with Cancel (not OK; not the close icon) |
| Designer Form closes | 0 | 1 | 1 | T2: Form-tab close control; the save prompt appeared and was answered No |
| Designer Form reopens | 0 | 1 | 1 | T2: Form menu > recent-form FX_Orders (once) |
| Save prompts answered No | 0 | 1 | 1 | Exact text in the T2 section (title "Infor Mongoose Application Development Framework - FX_Orders"; "Form FX_Orders has changed"; "Do you want to save the form definition?") |
| Save prompts answered Yes / Cancel | 0 / 0 | 0 / 0 | 0 / 0 | - |
| Other prompts answered | 0 | 0 | 0 | - |
| Script-editor text clicks / typed / pasted | 0 / 0 / 0 | - | 0 / 0 / 0 | - |
| Designer Saves | 0 | 0 | 0 | - |
| Designer property edits, Script Language changes, event changes | 0 | 0 | 0 | - |
| Designer Undo | 0 | 0 | 0 | - |
| Designer Regenerate / Delete / Unload | 0 / 0 / 0 | 0 / 0 / 0 | 0 / 0 / 0 | Top-toolbar Delete and Regenerate were not clicked |
| Runtime opens / closes | 0 / 0 | 0 / 0 | 0 / 0 | Not in T1 or T2 scope |
| F4 presses | 0 | 0 | 0 | - |
| Typed entries (runtime / Designer) | 0 / 0 | 0 / 0 | 0 / 0 | - |
| Runtime Saves | 0 | 0 | 0 | - |
| Unloads (Web Client or Designer) | 0 | 0 | 0 | - |
| Checkout actions | 0 | 0 | 0 | - |
| Re-logins | 0 | 0 | 0 | Session usable |
| Components inspected (Events groups) | 0 | 0 | 0 | Not in T1 or T2 scope |
| Event Handlers rows read | 0 | 0 | 0 | Not in T1 or T2 scope |
| Browser evaluate / run-code / console / network | 0 | 0 | 0 | Not used by the worker (run-code text in tool outputs is generated by the tool) |

### T3 increment and cumulative totals (T1 + T2 + T3)

| Category | T3 | Cumulative (T1+T2+T3) | Details |
| --- | --- | --- | --- |
| Tab lists | 1 | 3 | Before any selection in each task |
| Tab selections | 0 | 1 | T3: tab 0 already current |
| Snapshots, untargeted | 2 | 6 | T3: start state; recovery after the failed ref lookup |
| Snapshots, targeted (successful) | 1 | 4 | T3: Event Handlers panel e896 |
| Snapshots, targeted (failed: ref not found) | 1 | 1 | T3: toolbar ref e11 no longer present; no effect; followed by one untargeted recovery snapshot |
| Finds (read-only) | 3 | 13 | T3: "Event Handlers" x2, "Do you want to save" x1 |
| Screenshots | 1 | 9 | T3: `t3-01-event-handlers-grid.png` |
| Successful clicks (UI) | 2 | 11 | T3: Details `Expand Panel` view control; Event Handlers tab |
| Failed click attempts (no effect) | 0 | 1 | - |
| Event Handlers: tabs opened / rows read / handler dialogs opened | 1 / 0 / 0 | 1 / 0 / 0 | Zero rows displayed. New, Parameters and Edit not clicked |
| Event Handlers: row actions clicked (add/copy/delete/up/down/expand/collapse) | 0 | 0 | The row-action icons were visible but not clicked |
| Components inspected (Events groups) | 0 | 0 | Not in T3 scope |
| Designer Saves / property edits / Undo / Regenerate / Delete / Unload | 0 | 0 | - |
| Prompts answered (any) | 0 | 1 (No, T2) | No save prompt appeared in T3 |
| Runtime opens / closes / F4 / typed entries / runtime Saves | 0 | 0 | Web Client not entered in T3 |
| Re-logins / checkout actions | 0 / 0 | 0 / 0 | Session usable |

### T4 increment and cumulative totals (T1 + T2 + T3 + T4)

| Category | T4 | Cumulative (T1–T4) | Details |
| --- | --- | --- | --- |
| Tab lists | 1 | 4 | Before any selection |
| Tab selections | 0 | 1 | Tab 0 already current |
| Snapshots, untargeted | 1 | 7 | T4: the one recovery snapshot after the stale-ref failure |
| Snapshots, targeted (successful) | 0 | 4 | - |
| Snapshots, targeted (failed: ref not found) | 1 | 2 | T4: toolbar ref e11 (stale); no effect |
| Finds (read-only) | 7 | 20 | T4: "Expand" x1, "FX_ItemCombobox" x2, "Events" x1, "server event processing" x1, "Save" x1, "Data Change" x1 |
| Screenshots | 3 | 12 | T4: `t4-00`, `t4-01`, `t4-02` |
| Successful clicks (UI) | 4 | 15 | T4: Components tab; Components-grid Expand (view); FX_ItemCombobox row; error dialog OK (once) |
| Failed click attempts (no effect) | 1 | 2 | T4: OK with text target `OK` ("does not match any elements") |
| Components selected | 1 | 1 | FX_ItemCombobox only |
| Components with Binding / Events group read | 0 | 0 | The Properties tree did not render for FX_ItemCombobox |
| Event fields opened (drop-down or editor) | 0 | 0 | - |
| Error dialogs answered OK (server-event error; not a save prompt) | 1 | 1 | T4: exact text in the T4 section |
| Save prompts answered | 0 | 1 (No, T2) | No save prompt in T4 |
| Designer Saves / property edits / Undo / Regenerate / Delete / Unload | 0 | 0 | - |
| Designer Form closes / reopens | 0 / 0 | 1 / 1 | Unchanged from T2 |
| Runtime opens / closes / F4 / typed entries / runtime Saves | 0 | 0 | Web Client not entered in T4 |
| Re-logins / checkout actions | 0 / 0 | 0 / 0 | Session usable for navigation |

## Worker-written-file inventory

Files this task wrote (the worker wrote them):
- `experiments/EXP-093-hello-world-part-6-section-1-4-fx-orders-script-and-event-discovery.md` (this record; created).
- `evidence/EXP-093/form-script-editor-content-verbatim.txt` (created).

Worker-authored files, T1 and T2 (inside the EXP-093 paths):
- `experiments/EXP-093-hello-world-part-6-section-1-4-fx-orders-script-and-event-discovery.md` (created in T1; updated in T2).
- `evidence/EXP-093/form-script-editor-content-verbatim.txt` (created in T1).
- Screenshots, T1: `evidence/EXP-093/t1-01-designer-gate-behavior-script-language.png`, `t1-02-properties-pencil-hover.png`, `t1-03-after-pencil-click.png`, `t1-04-after-cancel-designer-clean.png`.
- Screenshots, T2: `evidence/EXP-093/t2-01-designer-before-close-save-enabled.png`, `t2-02-after-close-click.png` (save prompt), `t2-03-after-no-answer.png`, `t2-04-reopened-designer-clean.png`.
- Screenshots, T3: `evidence/EXP-093/t3-01-event-handlers-grid.png`.
- Screenshots, T4: `evidence/EXP-093/t4-00-components-tab-state.png`, `t4-01-fx-itemcombobox-selected.png` (error dialog), `t4-02-after-error-ok.png`.
- Screenshots, T9: `evidence/EXP-093/t9-00-webclient-start-state.png`, `t9-01-runtime-opened-initial.png`, `t9-02-filter-in-place-blank.png`, `t9-03-order1-after-f4.png`, `t9-04-order2-reopened.png`, `t9-05-order1-readback-after-return.png`, `t9-06-after-clean-close.png`.
- Screenshots, T8: `evidence/EXP-093/t8-00-webclient-start-state.png`, `t8-01-select-form-dialog-initial.png`, `t8-02-after-select-form-cancel.png`.
- Screenshots, T7: `evidence/EXP-093/t7-00-baseline-before-count-change.png`, `t7-01-post-count-change-unsaved.png`, `t7-02-save-prompt-before-answer.png`, `t7-03-after-no-answer-runtime-closed.png`.
- Screenshots, T6: `evidence/EXP-093/t6-00-webclient-start-state.png`, `t6-01-select-form-dialog.png`, `t6-02-after-select-form-cancel.png`, `t6-03-runtime-opened-initial.png`, `t6-04-filter-in-place-blank.png`, `t6-05-after-f4-order1.png`, `t6-06-order2-baseline.png`, `t6-07-before-return-order1.png`, `t6-08-order1-returned.png`.
- Screenshots, T5: `evidence/EXP-093/t5-01-fx-itemcombobox-selected.png`, `t5-02-fx-itemcombobox-events-group.png`, `t5-03-fx-itemcombobox-properties-expanded.png`, `t5-04-fx-itemcombobox-events-visible.png`, `t5-05-fx-countedit-selected.png`, `t5-06-fx-countedit-events-visible.png`, `t5-07-fx-derordertotaledit-events-visible.png`, `t5-08-fx-itemgridcol-events-visible.png`, `t5-09-fx-countgridcol-events-visible.png`, `t5-10-fx-derordertotalgridcol-events-visible.png`.

Files written automatically by the browser tool outside the EXP-093 path (not worker-authored content; listed for the inventory):
- T3 page snapshots: `evidence/playwright/page-2026-10-14T16-27-11-065Z.yml` (after the Details expand), `page-2026-10-14T16-27-18-743Z.yml` (after the Event Handlers tab click). Console log reported on the T3 tab list: `evidence/playwright/console-2026-10-14T16-27-06-215Z.log`.
- T1 page snapshots: `evidence/playwright/page-2026-10-14T16-14-28-316Z.yml`, `page-2026-10-14T16-14-37-427Z.yml`, `page-2026-10-14T16-14-47-468Z.yml`, `page-2026-10-14T16-15-04-895Z.yml`, `page-2026-10-14T16-15-22-243Z.yml`, `page-2026-10-14T16-15-46-839Z.yml`.
- T2 page snapshots: `evidence/playwright/page-2026-10-14T16-21-57-110Z.yml` (after the close click), `page-2026-10-14T16-22-08-976Z.yml` (after No), `page-2026-10-14T16-22-33-936Z.yml` (after the Form menu), `page-2026-10-14T16-22-40-956Z.yml` (after the recent-form click).
- T4 page snapshots: `evidence/playwright/page-2026-10-14T16-30-29-483Z.yml` (after the Components tab), `page-2026-10-14T16-31-08-167Z.yml` (after Components expand-all), `page-2026-10-14T16-31-17-524Z.yml` (after FX_ItemCombobox selection), `page-2026-10-14T16-31-41-109Z.yml` (after the error OK).
- T9 page snapshots (automatic, after each click that returned one): `evidence/playwright/page-2026-10-14T17-09-27-559Z.yml` (after the Form menu click), `page-2026-10-14T17-09-42-333Z.yml` (after the recent-form click), `page-2026-10-14T17-10-01-958Z.yml` (after Filter in Place), `page-2026-10-14T17-10-51-784Z.yml` (after the order 2 row-number click), `page-2026-10-14T17-11-04-019Z.yml` (after the order 1 row-number click), `page-2026-10-14T17-11-18-851Z.yml` (after the tab close click). The T9 tab list reported `evidence/playwright/console-2026-10-14T17-09-10-276Z.log`; the T9 tab selection reported `evidence/playwright/console-2026-10-14T17-09-10-277Z.log`.
- T8 page snapshots (automatic): `evidence/playwright/page-2026-10-14T17-04-18-179Z.yml`, `page-2026-10-14T17-04-27-465Z.yml`, `page-2026-10-14T17-04-54-122Z.yml`. The T8 tab list reported `evidence/playwright/console-2026-10-14T17-03-37-150Z.log`.
- T7 page snapshots (automatic): `evidence/playwright/page-2026-10-14T16-59-03-316Z.yml` (after the Count field click), `page-2026-10-14T16-59-43-946Z.yml` (after the runtime Form close click), `page-2026-10-14T17-00-01-321Z.yml` (after No). The T7 tab list reported `evidence/playwright/console-2026-10-14T16-58-19-353Z.log`. The T7 targeted snapshot (tab-select check) was returned inline and did not write a file.
- T6 page snapshots (automatic): `evidence/playwright/page-2026-10-14T16-49-35-984Z.yml`, `page-2026-10-14T16-49-51-285Z.yml`, `page-2026-10-14T16-50-14-875Z.yml`, `page-2026-10-14T16-50-41-036Z.yml`, `page-2026-10-14T16-51-02-788Z.yml`, `page-2026-10-14T16-51-25-806Z.yml`, `page-2026-10-14T16-52-02-813Z.yml`, `page-2026-10-14T16-52-46-565Z.yml`. The T6 tab list also reported `evidence/playwright/console-2026-10-14T16-49-01-959Z.log`. The one oversized Designer snapshot (T6) was written by the browser tool to a harness tool-results file outside the repository; it is not a worker-authored file and was not readable by the worker.
- T5 page snapshots (automatic, after each click that returned one): `evidence/playwright/page-2026-10-14T16-39-21-494Z.yml`, `page-2026-10-14T16-39-29-614Z.yml`, `page-2026-10-14T16-39-36-820Z.yml`, `page-2026-10-14T16-39-44-524Z.yml`, `page-2026-10-14T16-40-11-844Z.yml`, `page-2026-10-14T16-40-24-616Z.yml`, `page-2026-10-14T16-41-30-325Z.yml`, `page-2026-10-14T16-42-10-450Z.yml`, `page-2026-10-14T16-42-48-665Z.yml`, `page-2026-10-14T16-43-23-139Z.yml`, `page-2026-10-14T16-44-09-098Z.yml`.
- Console logs reported on tab lists: `evidence/playwright/console-2026-10-14T16-14-18-147Z.log` (T1), `evidence/playwright/console-2026-10-14T16-21-41-946Z.log` (T2), `evidence/playwright/console-2026-10-14T16-27-06-215Z.log` (T3), `evidence/playwright/console-2026-10-14T16-30-20-315Z.log` (T4), `evidence/playwright/console-2026-10-14T16-38-58-503Z.log` (T5).

Harness-generated audit files in `evidence/EXP-093/` (written by the harness controller, not by the worker; listed so the inventory is complete): `harness-audit-T1.md`, `harness-audit-T2.md`, `harness-audit-T3.md`, `harness-audit-T4.md`, `harness-audit-T5.md`, `harness-audit-T6.md`, `harness-audit-T7.md`, `harness-audit-T8.md`, `harness-audit-T9.md`. The T9 audit records 39 tool-call rows, no flagged tool usage, one F4 key event, zero exact-value mismatches, and one terminal message about a session limit (see the T9 section); its counts agree with the T9 action audit in this record. The T10 audit is `harness-audit-T10.md` (documentation only; no browser rows; 12 record edits and 13 reads).

T10 (documentation-only pass, this entry): the worker edited only `experiments/EXP-093-hello-world-part-6-section-1-4-fx-orders-script-and-event-discovery.md`. It wrote no new evidence file and made no browser call.

T11 (final audit, documentation only): `evidence/EXP-093/final-acceptance-audit-report.md` (created), and this record's T11 section, status line, AC-2 and AC-5 rows, and deviation notes (edited). No browser call was made in T11.

No other files were written. No repository files other than the above were edited. The T2 bounded instruction permitted changes only to this record and `evidence/EXP-093`; no other document was changed.

## Evidence (screenshots and what they prove / do not prove)

- `t1-01-designer-gate-behavior-script-language.png`: FX_Orders tab; `ScopeType: User` in the status bar; Form Properties on the Form tab; Behavior group expanded with **Script Language = Visual Basic** (drop-list ▼); the blue pencil button and ▼ at the top of the Properties panel; Save and Regenerate Form icons appear greyed (start state). **Proves** the Behavior row and the pencil location. **Does not prove** the label of the pencil menu, or the state of the chevron.
- `t1-02-properties-pencil-hover.png`: same view after the hover; no tooltip visible. **Proves** nothing new beyond t1-01.
- `t1-03-after-pencil-click.png`: the **Script Editor** dialog over the Designer, with the title "Script Editor", the Script tab, the icon toolbar, the Options and Compile Result panels, and footer buttons **OK, Cancel, Help, Download**. The content is lines 1-20 as transcribed. **Proves** the editor's controls, the Visual Basic content and the placeholder. **Does not prove** the content below line 20 (none is visible) or that any hidden part exists.
- `t1-04-after-cancel-designer-clean.png`: after Cancel, the editor is closed and the Designer is visible. The Save and Regenerate Form icons look enabled. **Proves** the editor closed. **Does not prove** the cause of the dirty state. The accessibility snapshot (toolbar `e11`) is the stronger evidence that Save and Regenerate Form are enabled.
- `t2-01-designer-before-close-save-enabled.png`: T2 start; FX_Orders in the Designer with `ScopeType: User`; the Save icon is active (contrast with t1-01). **Proves** the dirty state persisted into T2. **Does not prove** what changed.
- `t2-02-after-close-click.png`: the save prompt over the Designer. Title "Infor Mongoose Application Development Framework - FX_Orders"; text "Form FX_Orders has changed" and "Do you want to save the form definition?"; buttons Yes (default-focused), No, Cancel. **Proves** the prompt text and button set. **Does not prove** which change triggered it.
- `t2-03-after-no-answer.png`: after one click on No. The prompt is gone, the Form is closed, the canvas is empty and the Save icon is grey. **Proves** the prompt closed and the Form closed without a save. **Does not prove** the persisted state of the form (no Save or reload check beyond the Designer).
- `t2-04-reopened-designer-clean.png`: FX_Orders reopened from the recent-forms entry; `ScopeType: User`; Save, Undo and Regenerate Form greyed; Behavior group with Script Language = Visual Basic; the bottom Details panel collapsed. **Proves** the Form identity, User scope, the clean toolbar and the Script Language value. **Does not prove** the script editor content after the reopen (not reopened in T2).

## Knowledge state

Every finding in this run is **observed** (same-session UI evidence only).
- observed: the Script Language drop-list and value "Visual Basic" in the Form Behavior group; the pencil button at the Properties toolbar top opens a dialog titled "Script Editor" with OK/Cancel/Help/Download; the content lines 1-20 with the placeholder "' Methods go here"; Cancel closes the editor with no prompt; the Designer shows Save and Regenerate Form enabled after the editor visit (T1); the form then showed Save enabled at the T2 start; the save prompt text (T2); after No and a recent-forms reopen the Designer shows Save, Regenerate Form and Undo disabled (T2); the Event Handlers view of FX_Orders shows the headers Sequence / Response Type / Disabled / Response Parameters and **zero handler rows**, with no event-name list visible outside the New dialog, and Save remained disabled after the inspection (T3).
- unresolved: whether the pencil's ▼ chevron offers an "Edit Form Script" item; which T1 action made the Designer dirty; whether the content beyond line 20 exists; the exact tooltip of the pencil; whether the discarded T1 change touched the persisted script content (not checked); whether any handler exists outside the unfiltered view (not checked; both search boxes were empty and no group was expanded).
- observed (T4): FX_ItemCombobox exists in the Components grid (ComboBox, object.FX_Item, Pane 1, Tab 20, Component Class FX_Item) and its Properties header reads `FX_ItemCombobox (EnhancedCombo)`; selecting it raised a server-event error dialog ("The server event processing returned an error. If this persists, contact your system administrator.") answered OK once; the Properties tree then did not render, and Save stayed disabled.
- unresolved (T4): the Binding and Events values of FX_ItemCombobox; whether the server-event error is the stale-Designer symptom (not tested: no reload, no Edit-menu check).
- observed (T5, after the operator's reported re-login and tab reloads): Binding Type `Property` and Binding `object.FX_Item`, `object.FX_Count`, `object.FX_DerOrderTotal` (per component as listed in the T5 table); the Events group of all six components displays Primary, Data Change, Lose Focus and Gain Focus with no visible value, and Drag From Events / Drop On Events `0 event(s)`; FX_ItemCombobox and FX_ItemGridCol have Component Class `FX_Item`; the other four have no Component Class. The T4 server-event error did not recur.
- unresolved (T5): whether the blank Events values reflect the stored setting (the value drop-downs were not opened, per the rule); the cause of the T4 error and of the T4 blank Properties tree; whether the discarded T1 change touched any stored value.
- observed (T6, runtime baseline): FX_Orders opened from the recent-forms entry in add-mode (Order Number placeholder `3`), switched to Filter in Place with blank criteria, F4 returned two rows; order 1 = FX001 / Factory test one / 1 Factory Street / dumbbell / 45 pound iron / 45.00 / Count 2 / Order Total 90.00; order 2 = FX002 / Factory test two / 2 Factory Street / eggs / cage free / 6.99 / Count 1 / Order Total 6.99. Both match the expected baseline. Runtime Save disabled and no prompt at the end of T6; order 1 left open with no change.
- observed (T7, runtime Count change, unsaved): on order 1, Count changed from 2 to 3 (one entry, then Tab); displayed Cost 45.00 and **Order Total 90.00 (not recalculated before Save)**; the grid row shows Count 3 and Order Total 90.00; the Save icon became active and the row shows an unsaved marker.
- observed (T7, discard): closing the runtime Form raised the save confirmation "Do you want to save your changes to primary collection?" (title "Infor Mongoose Application Development Framework - FX_Orders", buttons Yes/No/Cancel); answering No closed the Form with no further prompt.
- unresolved (T7): whether the stored Count and Order Total are unchanged after the discard (not checked; the reopen is a separate task); why the derived Order Total did not change before Save, when the tutorial predicts it does not change until Save (this is consistent with the tutorial's statement that the derived total updates only after Save, but it was not tested with a Save and is not verified).
- observed (T8): the Select Form dialog lists only `G6RIdoCollectionSearch` and `IdoCollections`, with its Filter prefilled `IdoCollections` and buttons OK/Cancel/Help; no visible Clear or Reset control exists in the dialog. FX_Orders was not offered.
- observed (T9, after the operator-approved recent-forms route): FX_Orders reopened in add-mode, switched to Filter in Place with blank criteria, F4 returned two rows; order 1 read back Count 2 and Order Total 90.00 (the unsaved Count 3 from T7 is not displayed); order 2 read back Count 1 and Order Total 6.99; both match the T6 baseline. Runtime Save was disabled before the close; the tab close produced **no save prompt**; the Explorer shows afterwards.
- unresolved (T9): whether the stored Count and Order Total match the displayed readbacks (the readbacks are same-session UI only); whether the discard left the database unchanged; whether the derived Order Total recalculates on Save (not tested; no Save was pressed).
- not tested: whether any handler is bound outside the Events values read in T5; the Designer's Save state at the end of T9 (last read in T7; T9 made only a prompt-text find on the Designer tab).
- Not claimed: replay verification, cross-session durability, or any statement about saved form-script persistence. The T2 clean Designer reopen, the T7 discard, and the T9 readbacks are same-session UI evidence only.

## Open questions

1. Which T1 action made the Designer dirty: the pencil click or the Script Editor Cancel are the leading candidates (the Form-tab, Behavior-row and Expand clicks were also in the path). T2 discarded the change without identifying it. A later task that must rule the editor in or out should start from a clean Designer and check Save after each step.
2. Does the pencil's ▼ chevron lead to a menu that contains "Edit Form Script"? Not opened in this run (the editor opened directly).
3. Does the Script Editor content contain text beyond line 20? None was visible; a Ctrl+End style check was not done (no keyboard in the editor by rule).
4. Does the persisted form script still read `' Methods go here` after the T2 discard? Not checked (the editor was not reopened in T2 or T3). The next bounded task can check this read-only with the Cancel exit.
5. T3 found **no Event Handlers rows** on FX_Orders. The tutorial's `Calc Order Total` handler therefore does not exist yet. Creating it is out of scope for EXP-093 and belongs to EXP-094 with operator-supplied code.
6. Component Events are now read for all six components (T5). The runtime steps (AC-4: baseline, Count check, discard, reopen, final close) still need a bounded task. That task should start from a fresh read-only gate, as T5 did.
7. The T4 server-event error on FX_ItemCombobox did not recur in T5. Its cause is unexplained. If it recurs, the recipe's stop applies (one OK, then stop for the coordinator).
8. The T4 blank Properties tree did not recur in T5. The reason is unexplained; the T5 reads were from the same Designer session after the operator's reload.
9. Are the blank Events values in T5 the true stored state? The value drop-downs were deliberately not opened. A read-only check would need a different route, which the brief does not provide.
10. **T6 route question: resolved 2026-10-15.** The operator approved the recent-forms route for the rest of EXP-093 (T9 instruction). The Select Form route is not used again.
11. **AC-4 remainder: done in T9.** Reopen, F4 once and both-order readback were done through the approved route, and the runtime was closed clean. The T9 readbacks are same-session UI evidence only.
12. **Stored-value question: still open.** T9 shows the displayed Count 2 and Order Total 90.00 after the discard, in the same session. Whether the database holds those values is not checked, and no cross-session check was made.

13. **T8 blocker: resolved by the operator disposition (2026-10-15)** for the navigation route. The reopen was then done in T9 through the recent-forms entry.
14. **Final runtime state:** FX_Orders was closed clean in T9 (one close, no save prompt). The Explorer is shown with no open form and no prompt. The T7 prompt answer (No) is the only prompt answer during the Count discard.
15. **Designer end state:** the Designer's Save state was last read in T7 (disabled) and was only checked for prompt text in T9. Before any Designer step, a fresh read-only check is needed.
16. **Final acceptance (AC-5):** reserved for a separate documentation-only audit. No overall acceptance conclusion has been issued in any task.

## Deviations from the brief

- The brief's "Edit Form Script entry point" was not seen as a label. The pencil opened the editor directly, which matches the tutorial's pencil path. Recorded as an observed deviation, not a reinterpretation.
- AC-2's "Designer still clean afterwards" failed in T1. T2 recovered it, under the operator's bounded recovery instruction, by closing once and answering No. The T1 observation is kept as written.
- The T2 Form reopen attempt 1 failed with a locator error (text target "Form"). Nothing was clicked. The recovery was one fresh snapshot and one corrected ref click.
- The T1 and T2 bounded instructions stopped before Event Handlers. T3 performed the Event Handlers read. The brief's remaining steps (component Events, runtime baseline and Count check, discard, reopen, final close) were **not** performed.
- T3: the Details panel was collapsed at the T3 start (a view state carried over from the T2 reopen); the worker expanded it with its own control. No Designer change was made by that click.
- T3: one targeted toolbar snapshot (ref e11) failed with "Ref e11 not found" because the page had changed. One fresh untargeted snapshot was taken as the recovery, and only its refs were used.
- T4: the component selection raised a server-event error, answered OK once; the T4 stop rule was followed (no reselect, no reload, no further component).
- T5: the Designer and Web Client gates were run once each at the start, as instructed. No Designer control, property or component was changed; no value was entered anywhere. The only view actions were the Details and Components expand controls, the Properties expand control, the row and group selections, and two scroll wheel moves over the Properties list (one ineffective).
- T5: the first `t5-04` screenshot was overwritten by the scrolled capture under the same name; both captures were taken, and only the scrolled one is kept.
- T6: the Select Form dialog (the brief's route) did not list FX_Orders, and reaching it needed typing into a prefilled filter, which the T6 instruction forbids. The dialog was cancelled, and FX_Orders was opened from the Form menu's recent-forms entry instead. This is a route deviation; no field was typed.
- T6: the first order 1 row-number click (by accessibility ref) was intercepted by the grid splitter and timed out; nothing was clicked. One corrected coordinate click on the same visible row-number cell succeeded. No splitter was dragged.
- T6: the T6 Designer gate used finds because the full snapshot was too large to read. The Designer tab was not selected in T6.
- T7: the Count entry used the browser type tool, which sets the field value in one step (fill mode), rather than one keystroke per character. The brief asked for "type 3 once"; the field's result is `3`, and the entry was a single operation. Ctrl+A was pressed to select the field's whole content first.
- T7: the first targeted snapshot (tab-select check) used a region ref that returned a different part of the page. It was not used for any value. No fresh untargeted snapshot was needed; the values were read with finds and screenshots.
- T7: the Order Total is recorded as displayed before Save. The brief's expectation (the total changes only after Save) was observed as "unchanged 90.00 before Save"; the tutorial's narration that it changes immediately was not seen. This is an observation, not a claim about persistence.
- T8: the brief's Select Form route was attempted for the reopen. The filter remained prefilled with `IdoCollections`; no visible non-typing Clear or Reset control exists; the worker did not type, paste or press keys in the filter, and did not use the recent-forms route. The dialog was cancelled and the task stopped blocked, as the T8 rule requires. This is a blocker for AC-4, not a deviation in execution.
- T9: the operator-approved recent-forms route was used once, as the T9 instruction allowed. The Select Form dialog was not opened in T9.
- T9: the T9 turn ended without a final HARNESS REPORT message after the record edits; the controller audit records a session-limit terminal message. The T10 documentation pass completes the record entries that the T9 edits left out. No T9 observation was changed.
- T10: documentation only. No browser call was made. The T9 readbacks are not re-verified in T10; the T10 screenshot check only compares the existing images with the record's wording.
- T11: documentation only; no browser call. The audit summary lines in the controller files do not match their table rows, so counts were tallied from the table rows. The T6 denied read of a tool-results file (T6 audit row 3) was not previously recorded; it is now (correction C5). No audit records a tool read of AGENTS.md (C10).
- T8: the Designer tab-0 prompt find ran in the same batch as the tab list; the Designer was not otherwise read or changed.

## Outcome (operator, 2026-10-15)

Accepted with limits (observed). The read-only discovery for Hello World Part 6 sections 1-4 on FX_Orders is complete. The operator decided acceptance and waived AC-2's "Designer still clean afterwards" clause on the basis of the authorized T2 recovery. The dirty-after-Cancel behavior is itself the main finding.

- No objects were created or changed. No Designer Save, no runtime Save, no unload.
- **Run R-20261015-001354-RzlH** (11 worker tasks) ended `completed/DONE` after operator notes. It paused six times:
  1. T1: the Designer was dirty after the Script Editor Cancel. The operator authorized one close with No and one reopen (T2).
  2. T4: a server-event error after the hourly session expiry. The operator signed in again and reloaded both tabs; T5 resumed the work.
  3. T6: `completed_with_denials`. A Read of an oversized snapshot file outside the repo was denied; approved.
  4. T8: Select Form was prefilled with the filter "IdoCollections". The operator approved the recent-forms entry as the runtime open route.
  5. T9: the subscription usage limit hit after T9's browser work was done. A documentation-only continuation (T10) followed.
  6. After T11's final audit: the operator ruled on AC-2.
- Findings (observed):
  1. **Script editor.** FX_Orders Behavior > Script Language is `Visual Basic`. The blue pencil at the top of the Properties panel opens a dialog titled "Script Editor" with the buttons OK, Cancel, Help and Download. The label "Edit Form Script" itself was not seen. The generated template matches the tutorial's code except: line 1 is `Option Explicit On`, the class is **`Public Class FX_Orders` / `Inherits FormScript`** in `Namespace Mongoose.FormScripts`, and the placeholder is `' Methods go here` (`form-script-editor-content-verbatim.txt`).
  2. **Opening the Script Editor and pressing Cancel leaves the Form dirty.** Save and Regenerate Form become enabled with no prompt. The cause was not isolated; the likely explanation is that the template is generated on open. Closing gives "Form FX_Orders has changed / Do you want to save the form definition?". Answering No and reopening restores a clean state.
  3. **Event handlers and events.** The FX_Orders Event Handlers grid is empty. The Events groups (Primary, Data Change, Lose Focus, Gain Focus) are blank on all six components: FX_ItemCombobox, FX_CountEdit, FX_DerOrderTotalEdit, FX_ItemGridCol, FX_CountGridCol and FX_DerOrderTotalGridCol. Drag From and Drop On show `0 event(s)`.
  4. **Problem confirmed.** Changing Count on order 1 from 2 to 3, unsaved, left Order Total at **90.00** in the detail view and the grid. The runtime prompt "Do you want to save your changes to primary collection?" was answered No. The reopen showed Count 2 and Order Total 90.00 (`t9-03`), and order 2 was unchanged.
- Screenshots viewed by the operator assistant: `t9-03`, order 1 after the reopen (FX001, dumbbell, 45 pound iron, 45.00, Count 2, 90.00, Save disabled).
- Counts:
  - Designer: Script Editor opened 1 (Cancel 1); close/reopen 1; No answers 1; server-event errors answered OK 1; Saves 0; edits 0.
  - Runtime: Select Form dialogs 2 (both cancelled); opens 2, closes 2, F4 presses 2; typed entries 1 (a fill-mode `3`); No answers 1; Saves 0.
  - Unloads 0, checkout actions 0, worker re-logins 0. One re-login was done by the operator.
- Accepted deviations: the runtime opens used the recent-forms route (T6, T9), and the Count entry was a single fill rather than keystrokes.
- Limits: same-session UI evidence only. The stored values after the discard are shown by the UI reopen only. Recalculation on Save was not tested.
- Confirmed the session pattern again: after the hourly expiry, the Designer gives a server-event error on component selection (not only on Edit) until the operator reloads it.
- Confinement (git status): only `evidence/EXP-093/` and this record were written by the run.
- Next: EXP-094. Add `CalcOrderTotal` (operator-supplied tutorial code, `docs/mongoose/transcripts/hello-world-pt6-form-script.md`, with `"FX_DerOrderTotal"`) inside the generated `FX_Orders` class, click OK in the Script Editor, and do one Designer Save. Then read the script back after a close and reopen. The event handler and Data Change wiring follow as a separate step.
