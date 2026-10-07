# EXP-027 — Button Component Recovery in a Self-Contained Designer Session

Status: **T9 complete — final read-only AC-8 audit done (exactly one Select Form Name match; action counts and repository confinement reconciled). ALL ACCEPTANCE CHECKS AC-1–AC-8 COMPLETE.** Final finding: Button recovery across Save/close/reopen classified **observed** (first observation, not replay_verified). Cycle 11, task T9, run R-20261007-165419-NP63. Date: 2026-10-07.
Mode: LEARNING MODE — first observation only for this self-contained setup.
Editing scope: User. Target: `FX_ComponentRecoveryLab02` (Form), `FX_ButtonRecovery02` (Button component). Evidence directory: `evidence/EXP-027/`.

## Objective

Self-contained pre-mutation session-establishment approach: create exactly one new User-scoped classic BuildFromScratch Form `FX_ComponentRecoveryLab02`, capture its untouched clean baseline, add exactly one native Toolbox Button, assign only component Name `FX_ButtonRecovery02`, record the exact component Name and rendered/property-grid Type label before lifecycle testing, then perform exactly one ordinary Designer Save to a clean state, close the target Form exactly once through its ordinary Form-tab close control, reopen it exactly once through the same Designer's Form-menu recent-forms route, and verify that the same scoped Form recovers a component with Name `FX_ButtonRecovery02` and the exact Type label recorded before close.

## Acceptance criteria (map)

- AC-1: read-only preflight — inherited visible Forms/dialogs + dirty state recorded; usable Mongoose workflow + User editing scope proven; target absence proven via supported case-insensitive Select Form Name filter + a visible known-existing positive control.
- AC-2: target Form created once (fresh-dialog rendered-selection prefix per EXP-019-R2 + verified basic-form procedure; Save Template visibly unchecked).
- AC-3: untouched target baseline captured (Name, ScopeType, ScopeName, clean state, rendered canvas/component state; visible absence vs complete inventory distinguished).
- AC-4: exactly one native Button creation operation with visible presence verified.
- AC-5: component Name `FX_ButtonRecovery02` assigned via the verified Name-edit step only; exact Name + rendered/property-grid Type label recorded (property-grid label expected PushButton for Toolbox Button).
- AC-6: exactly one ordinary Designer Save to clean target state; one Form-tab close; one same-Designer Form-menu recent-forms reopen.
- AC-7: post-reopen comparison shows the same scoped Form with recorded Name/Type recovered unchanged, target clean.
- AC-8: final read-only live target Name-filter count + lifecycle-action audit + repository-confinement audit.

## Worker task log

### T1 — strictly read-only preflight (this task)

No browser mutation, authentication, navigation to a target, session establishment, Designer launch, Form open/create/save/close/reopen, or component action performed. Only read-only enumeration of the controlled Playwright context and one fresh snapshot.

**Procedure review (read before any mutation):** summaries recorded in `evidence/EXP-027/t1-preflight-notes.md` §A — the replay_verified EXP-019-R2 fresh-dialog Classic/BuildFromScratch selection prefix, the verified basic-form creation procedure (Save Template unchecked), the verified native Button placement procedure (Toolbox Button row → canvas click; itemId `bt2`, generated name `button1_USER`, typeCode 8, default size 114×34), and the Name-only edit step (double-click Design.Name value cell → inline editor → select-all/type/Enter; server-committed via `updcompprop`; do not verify via stale local compDef). Type-label distinction recorded: Toolbox "Button" / property-grid "PushButton" / model `ctrl` "button".

**Controlled Playwright browser context enumeration:**
- `browser_tabs list`: exactly one tab (index 0, current), URL `about:blank`, empty title.
- One fresh untargeted page snapshot: Page URL `about:blank`; accessibility tree empty (no document content).
- No live Mongoose Web Client and no Web Designer document/tab present in the controlled context; no visible Designer Form/dialog → nothing dirty to preserve; no inherited Forms/tabs exist.
- No inference about browser processes/windows outside the controlled context.

**Decisive preflight state:** NO usable live Mongoose workflow exists in the controlled Playwright browser context (neither Web Client nor Designer). Single next permitted pre-mutation action (not performed here): at most one documented supported Portal/Web Client session-establishment sequence (portal base `https://mingle-portal.se1.inforcloudsuite.com/G6R8LJ9Q4E8C2Z8Y_DEM/`), using configured secret placeholders only, then prove server-backed liveness with a populated Select Form dialog, confirm User editing scope, and prove zero case-insensitive Name matches for `FX_ComponentRecoveryLab02` with a visible known-existing positive control before any target mutation.

### T2 — single session-establishment + AC-1 guards (this task; read-only, no target mutation)

One documented Portal/Web Client session-establishment sequence was performed from the observed `about:blank` tab (T1 established no usable workflow, so exactly one Designer launch would be permitted — not yet launched in T2). No credentials were read/printed/logged/screenshotted; secret placeholders only were submitted to Playwright.

Sequence actually executed:
1. `browser_tabs list`: single tab `about:blank` (inherited from T1).
2. Portal navigation to the documented tenant base → CloudIdentities Sign In page rendered (Username + Password fields + "Sign in" button). Submitted configured secret placeholders into Username and Password only, then submitted (Enter) once. No credential value was ever read or displayed by me.
3. Returned to Infor OS Portal; authenticated workspace loaded ("Good afternoon, Anton"). Closed the `portal-notification` banner via its documented close control (`The DistributionIFSContactUs ... Close notification`).
4. Opened the tabs menu → "Mongoose" (listed under Recently closed) → reopened the Mongoose portal tab; page URL = documented portal tab URL `.../c51080bc-3191-4598-9894-39e1b84f8e87`; title "Mongoose".
5. Web Client iframe (name `mongoose_46_c51080bc-3191-4598-9894-39e1b84f8e87`) loaded with its own "Sign In" dialog showing the single documented config combo `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; clicked that Sign-In OK once within the already-authenticated session (in-iframe Web Client sign-in, not a new authentication attempt). A Scheduled Maintenance alert ("Mongoose is expected to undergo maintenance starting on 10/8/2026, 12:01:00 AM") appeared and was left untouched.
6. Web Client became live: menu bar Explorer/Form/Edit/View/Window/Help; toolbar Open enabled, Save/New/Delete/Refresh/FiP/etc. disabled (clean); top-right identity `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`.
7. Clicked Web Client toolbar **Open** once → **Select Form** dialog opened, grid populated with Caption/Name columns (server-backed liveness).
8. AC-1 guards:
   - **Liveness/population:** Select Form grid populated; store length reported 657; visible rendered rows include known-existing Forms (e.g. `UserPreferences`, `User Defined Info`, `WSFormWizardNewDataXmlToIdo`). Positive controls confirmed both visually and via store query.
   - **User scope:** visible identity string in the Web Client header shows User email `anton.ramos@3mworks.com.ph`; portal DEM badge; documented role Site Developer edits create user versions for this user (scope badge + identity; formal Designer "Identify Your Editing Scope" dialog is confirmed at Designer launch, which is the next task).
   - **Target absence (authoritative):** Using the recipe-documented store query on grid `grid-1136`, `store.findRecord('mgdata','UserPreferences')` returned a record (proving the positive-control mechanism works), while `store.findRecord('mgdata','FX_ComponentRecoveryLab02')` returned **null** across all four candidate Name keys (`mgdata`,`Name`,`formName`,`name`) → zero case-insensitive Name matches for the target.
   - **Filter demonstration:** set Filter By dropdown (picker) to **Name**; Case Sensitive checkbox left visibly unchecked; typed `FX_ComponentRecoveryLab02` into the Filter textbox. Per the documented pitfall, the Filter textbox does NOT live-filter the grid and OK activates a row — so OK was NOT pressed (avoiding opening/altering any system form). The zero-match guard is established by the authoritative store query above; 03 shows the rendered filter settings (Filter By=Name, Case Sensitive unchecked).

No target Form created/opened/saved/closed/reopened; no Button; no preferences altered; OK not pressed on Select Form. Controlled-page state at end: single Mongoose tab with live Web Client + open Select Form dialog (filter set to Name/target, Case Sensitive unchecked), grid populated, Save disabled (clean). No usable **Designer** tab exists yet in the controlled context.

### T3 — bounded pre-mutation Designer launch + User-scope confirmation (this task; no target mutation)

Starting from T2's end state (live Web Client, Select Form dialog open with Filter By=Name + target text, Case Sensitive unchecked). Credentials never read/printed/logged; no new authentication/session-establishment performed.

Actions:
1. `browser_tabs list`: single tab index 0 "Mongoose" (Web Client). Fresh snapshot confirmed the inherited Select Form dialog still open (Filter textbox = `FX_ComponentRecoveryLab02`, Filter By=Name, Case Sensitive + Starts With unchecked), no Form activated, Save disabled (clean).
2. Closed the open Select Form dialog via its **Cancel** control once (non-activating; NOT OK — no listed Form opened/activated/altered). Post-inspection: no Select Form dialog present; Web Client clean (Save/New/Delete/Refresh etc. disabled), top-right identity `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`.
3. Launched exactly one Web Designer via the documented **Designer split** toolbar button (`mgtoolbarbutton-1126`; accessibility-labelled "Designer", distinct from main Designer `mgtoolbarbutton-1125`). One native click → new browser tab index 1 opened at `WSWebClient/designer/Default.aspx?...configgroup=G6R8LJ9Q4E8C2Z8Y_Mongoose_DEM...` (no MGForm param — no Form loaded). Tab title "Infor Mongoose Application Development Framework (G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT)".
4. Switched to the Designer tab; it loaded and showed the **Identify Your Editing Scope** dialog: `Scope:` combobox = **User**, `User:` combobox = the signed-in user; OK/Cancel/Help. Status bar `[ ScopeType: User / ScopeName: <user> ]`. Confirmed User scope by one native click on that dialog's **OK**. No Form opened, no wizard entered, nothing saved.
5. Post-confirmation usable Designer state (fresh snapshot): menu bar Form/Edit/View/Help; Design toolbar with Save + Regenerate Form + Undo/Redo disabled (clean); empty design canvas (no Form loaded); Toolbox expanded with "Framework Components" tree incl. **Button** row; Properties panel with selected tab **Form** and a Component tab, no form Name populated; bottom status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`. No unexpected prompt; no inherited dirty state present.
6. Enumerated controlled pages after launch (`browser_tabs list`): exactly two tabs — index 0 Web Client (Mongoose portal tab), index 1 the single Web Designer. Exactly one usable Designer is present. No second Designer launched.

Evidence: `evidence/EXP-027/05-designer-launched-user-scope.png` — inspected and usable: shows Toolbox (Framework Components incl. Button row), blank canvas (no Form loaded), Properties panel with Form/Component tabs, Design toolbar (Save disabled = clean), and bottom status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`. Proves the one-Designer usable state + visible **User** editing scope. Does NOT prove any target Form/Button creation or lifecycle behavior (none performed).

### T4 — create one User-scoped BuildFromScratch Form + untouched baseline (this task)

Starting from the single usable Designer in confirmed User scope (T3 end state). No authentication; no second Designer; no component actions.

Actions:
1. Fresh snapshot: inherited Designer clean, no Form loaded, status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`.
2. One native click on Designer toolbar **New** (`mgtoolbarbutton-1088`) → exactly one fresh "Form Wizard Selection" dialog (radio New Form active; Category + Wizard comboboxes empty). Evidence 06.
3. EXP-019-R2 selection prefix: one native click on the Category picker → rendered options (Classic first, "WinStudio classic form wizards") — evidence 07; one native click on rendered **Classic** option (no typing) → Category combobox "Classic". One native click on the Wizard picker → rendered options (Build from Scratch first, "Plain form without defined components") — evidence 08; one native click on it → Wizard combobox displays "BuildFromScratch"; Category still Classic. Evidence 09.
4. Exactly one native click on the selection dialog **OK** → no rejection alert; first "Form Wizard - Build From Scratch" page appeared: Name empty (`*`), Form Type BuildFromScratch, Form Layout GridLeft, Device Type Default, Data Source/Query Form/Comments empty; Back/Finish disabled, Next enabled.
5. Typed `FX_ComponentRecoveryLab02` into the wizard Name combobox (one fill); other fields untouched. Evidence 10 (page 1 with Name filled).
6. One native click on **Next** → wizard page 2: "Save Template" checkbox checked by default. First click attempt on the input element was intercepted by the Ext checkbox displayEl span (timeout, no effect); corrected one attempt clicked the visible checkbox display box (`#ext-comp-1526-displayEl`) → fresh snapshot shows `checkbox "Save Template"` without `[checked]` state. Evidence 11 visibly renders the **empty/unchecked** checkbox with Finish enabled / Next disabled.
7. One native click on **Finish** → "Process Completed Successfully" alertdialog (evidence 12) → one OK. Designer tab URL gained `&MGForm=FX_ComponentRecoveryLab02`; the form opened in the same Designer tab (no reload/navigation).
8. Untouched post-creation baseline captured without changing any property and without performing an ordinary Save: accessibility snapshot shows target Form-tab heading `FX_ComponentRecoveryLab02` with a "closable FX_ComponentRecoveryLab02" control; Properties grid Name=FX_ComponentRecoveryLab02, Version "User version for user <signed-in user>", Device Type Default, Form Type Normal, Is Master True (Caption/Description cells empty as rendered); toolbar **Save disabled** (clean state); status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`. Evidence 13 renders form-tab heading + empty grid canvas + Properties grid rows + User-scope status bar. No unexpected prompt appeared; the same Designer client remains active (single tab, tab 1).

Forms created in this task: exactly one (`FX_ComponentRecoveryLab02`). Components placed: zero. Ordinary Designer Save performed: zero (Finish persisted; Save left disabled/untouched).

### T5 — AC-4: one native Toolbox Button + Name-only assignment (this task)

Starting from the clean FX_ComponentRecoveryLab02 baseline in the same Designer tab (T4 end state). No authentication; no Save; no close/reopen.

Actions:
1. Fresh snapshot precheck: Form-tab heading `FX_ComponentRecoveryLab02`, Properties Name=FX_ComponentRecoveryLab02, toolbar **Save disabled** (clean) — creation postcondition verified before mutation.
2. One native click on Toolbox treeitem **Button** (`e84`) → item `[active]` (armed); no component placed; Save still disabled. Screenshot t5-01: Button row highlighted, canvas empty.
3. Exactly one canvas placement click inside the visible form grid (viewport 420,300 — coordinates used because the canvas exposes no accessibility ref; this is the verified procedure's "one click on the canvas" step). Result snapshot: Component panel active with selector textbox `button1_USER (Button)`; component grid rows Name=`button1_USER`, Caption empty, **Type=`PushButton`**, From Device Master=True; toolbar Save + Regenerate Form now enabled (dirty); Undo enabled. Screenshot t5-02 inspected: blue Button selected with selection handles on canvas, Component grid shows Name button1_USER / Type PushButton, form-tab heading + User-scope bar visible.
4. Verified Name-edit step: double-click on the rendered Design.Name value cell (first attempt targeted a guessed Ext id `#ext-comp-1002-displayEl` which does not exist in this session's DOM — no effect; corrected attempt double-clicked the visible Name value cell position) → inline editor opened (`textbox [active]: button1_USER`, Name gridcell `[selected]`). One fill+Enter of `FX_ButtonRecovery02` into the active editor (`#textfield-1169-inputEl`) → post snapshot: Name gridcell now `FX_ButtonRecovery02` (active/selected); Type still `PushButton`; Caption row untouched; Undo enabled.
5. Anomaly observed (recorded, not repaired): Properties-panel component selector combobox (`#comptreepicker-1161-inputEl`) still displays stale "button1_USER (Button)" after the Name commit. One corrected inspection confirmed it is a readonly tree-picker input (`type=text readonly`); one attempted refresh via typing timed out "element is not editable" with no effect. The component's authoritative property-grid Name row reads FX_ButtonRecovery02; selector staleness left as an open question (do NOT claim the Button was renamed in every UI surface).
6. Final state screenshot t5-03 inspected: canvas Button still selected unchanged, Name cell highlighted `FX_ButtonRecover…` (truncated render), Type `PushButton`, Caption empty, From Device Master True; Save enabled (dirty) — deliberately NOT invoked in this task.

Action counts: exactly one Button creation operation (Toolbox row click + single canvas click); exactly one component Name assignment edit (one fill+Enter). No Caption or other component/Form property modified. Saves performed: zero. Closes/reopens: zero. Components created: one.

### T6 — exactly one ordinary Designer Save + clean-return verification (this task)

Starting from the dirty FX_ComponentRecoveryLab02 state (T5 end: Button placed, Name assigned, Save enabled). No property edits; no close/reopen.

Actions:
1. Read-only fresh-snapshot guard before mutation: same Designer tab `&MGForm=FX_ComponentRecoveryLab02`; Form-tab heading `FX_ComponentRecoveryLab02`; scope bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`; component property grid Name=`FX_ButtonRecovery02` (active/selected), Type=`PushButton`, Caption cell empty; toolbar Save enabled (dirty). Stale selector display "button1_USER (Button)" noted and deliberately NOT repaired.
2. Exactly one native click on Design toolbar **Save** (`#mgtoolbarbutton-1085-btnEl`).
3. Immediate post-Save snapshot: Save toast appeared — text `Form [FX_ComponentRecoveryLab02] and global object(s) were saved.` with a Close button; toolbar **Save / Regenerate Form / Undo / Redo all disabled** (clean); align/space buttons disabled; component grid unchanged: Name=`FX_ButtonRecovery02` `[selected]`, Type=`PushButton`, From Device Master=True, Caption cell still empty. No unsaved-change or unexpected prompt appeared. The toast had already auto-dismissed by the next inspection (a Close-click attempt errored "Ref not found" and a text search found no toast — no click performed; toast evidence preserved in this record + response body below).
4. Read-only network audit: exactly one `POST Designer/DesignerSession/SaveChanges` → HTTP 200, body `{"Success":true,"Message":"Form [FX_ComponentRecoveryLab02] and global object(s) were saved.","Payload":[]}` (saved as evidence file). No other SaveChanges since page load.
5. Post-Save clean-state screenshot t6-01 inspected: toolbar icons greyed (Save disabled), Button still rendered/selected on canvas, Component grid Name cell highlighted `FX_ButtonRecover…` + Type `PushButton` + Caption empty; Form-tab heading and User-scope bar visible.

Action counts: exactly one ordinary Save; zero component/Form property mutations in this task; zero close/reopen/unload/authentication actions.

### T7 — exactly one ordinary Form-tab close + post-close state verification (this task)

Starting from the verified clean post-Save state (T6 end). No reopen, no Select Form, no Save, no authentication, no preference change.

Actions:
1. Read-only fresh-snapshot guard: same Designer tab `&MGForm=FX_ComponentRecoveryLab02`; target Form-tab heading `FX_ComponentRecoveryLab02` with close control (`closable FX_ComponentRecoveryLab02`) present; toolbar Save/Regenerate/Undo/Redo disabled (clean); component grid Name=`FX_ButtonRecovery02`, Type=`PushButton`, Caption empty; scope bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`.
2. Exactly one native click on the ordinary Form-tab close control → target closed. The Designer tab URL dropped `&MGForm=FX_ComponentRecoveryLab02` (same tab, same session id).
3. Read-only post-close verification: form-tab tablist now empty — no Form-tab heading or closable control for the target anywhere; no unsaved-change prompt or any other dialog in the snapshot; toolbar Save/Regenerate/Undo/Redo disabled; Toolbox panel intact (Button row present); Properties panel reset to empty tree; User-scope status bar unchanged `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`.
4. Read-only network audit: zero requests matching Unload/ClearCache/RemoveForm/Close since page load — the close produced no explicit unload request (client-side only).
5. Post-close screenshot t7-01 inspected: no Form-tab heading in the canvas band; toolbar icons greyed (Save disabled); Toolbox tree intact including Button row; empty Properties panel; User-scope status bar visible at bottom-left.

Action counts this task: one target close; zero reopen/save/unload/authentication/pref actions.

### T8 — one recent-forms reopen + post-reopen recovery verification (this task)

Starting from the verified post-close state (T7 end: no form tab, Designer clean, User scope unchanged).

Actions:
1. Read-only fresh-snapshot guard: form-tab tablist empty (target not open), Save/Regenerate/Undo/Redo disabled, Properties tree reset, scope bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`, no dialog anywhere.
2. Exactly one native click on the Designer top navigation **Form** menu → menu opened; its recent-forms list contains `menuitem "FX_ComponentRecoveryLab02"` (ref e1044, element `#menuitem-1073-itemEl`) alongside other entries.
3. Exactly one native click on that recent-forms entry → target reopened in the same Designer tab; URL re-gained `&MGForm=FX_ComponentRecoveryLab02`; Form-tab heading `FX_ComponentRecoveryLab02` back with its close control.
4. Read-only post-reopen verification snapshot: Properties Name=`FX_ComponentRecoveryLab02`, Version "User version for user <current signed-in user>", Device Type Default, Form Type Normal, Is Master True; toolbar Save/Regenerate/Undo/Redo disabled (clean); scope bar unchanged.
5. Component inspection: initially no component was selected (Component tab tree empty; selector value empty). One corrected native click on the rendered Button on canvas selected it; post-reopen snapshot then shows selector refreshed to `FX_ButtonRecovery02 (Button)` and component grid Name=`FX_ButtonRecovery02`, **Type=`PushButton`**, From Device Master=True, Caption cell empty. Note: the pre-close stale selector display was replaced by the refreshed value after reopen — recorded observation, no repair performed.
6. Decisive screenshot t8-02 inspected; screenshots t8-01 (pre-selection state) written for context.

Action counts: exactly one recent-forms reopen; zero Select Form/cold-MGForm fallback, zero save/close/unload/authentication actions this task; the canvas click selected a component only (no property edited — Save remained disabled, proving no mutation).

### T9 — final read-only AC-8 audit (this task)

No mutation. Reopened clean target in tab 1 preserved without redundant re-inspection.

Actions:
1. Switched to the live Web Client tab; one Open click → Select Form dialog. Read state: Filter textbox `FX_ComponentRecoveryLab02`, **Filter By=Name**, checkbox "Case Sensitive" without `[checked]` (visibly unchecked), "Starts With" unchecked. Grid rendered exactly one row (Caption/Name both `FX_ComponentRecoveryLab02`) — evidence t9-01 inspected (filter text truncated at field edge; full string proven by accessibility snapshot). Exact case-insensitive Name match count: **1**.
2. Closed the dialog via **Cancel** (ordinary non-activating control); no row activated, nothing opened.
3. Action-count reconciliation from T1–T8 logs (see audit notes): 1 creation / 1 Button placement / 1 Name assignment / 1 Save (`SaveChanges` #115 → 200 Success:true) / 1 close / 1 recent-forms reopen; zero fallback reopens, zero unloads, zero post-mutation auth, zero unrelated property mutations.
4. Repository confinement: `git status --porcelain` shows only the two permitted EXP-027 paths; no tracked file modified.
5. Audit notes written to `evidence/EXP-027/t9-ac8-audit-notes.md`.

## Acceptance criteria status

| AC | Status | Basis |
|----|--------|-------|
| AC-1 preflight guards + Select Form Name-filter absence proof + positive control | **COMPLETE — fully proven** | T2: populated Select Form liveness (657 records), target absence `findRecord('mgdata','FX_ComponentRecoveryLab02')=null` with working positive control (`UserPreferences`). T3: exactly one Web Designer launched from the live workflow and User editing scope confirmed via "Identify Your Editing Scope" dialog (Scope=User) + status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`. No inherited dirty state to preserve. |
| AC-2 target Form creation | **COMPLETE** | T4: fresh-dialog Classic/BuildFromScratch dropdown selection reproduced (evidence 06–09); wizard Name=FX_ComponentRecoveryLab02 (10); Save Template visibly unchecked before Finish (11); Process Completed Successfully (12); exactly one Form created, no template artifact intended. |
| AC-3 untouched baseline capture | **COMPLETE** | T4 evidence 13 + accessibility snapshot: Form-tab heading `FX_ComponentRecoveryLab02`; Properties Name=FX_ComponentRecoveryLab02, Version "User version for user …", Device Type Default, Form Type Normal, Is Master True; status bar ScopeType=User/ScopeName=anton.ramos@3mworks.com.ph; Save disabled (clean); rendered canvas state recorded without claiming complete cardinality. |
| AC-4 one Button creation + visible presence | **COMPLETE** | T5: single Toolbox Button row click + exactly one canvas click; Button visibly placed and selected (t5-01 armed, t5-02 placed/selected). Exactly one component created. |
| AC-5 Name `FX_ButtonRecovery02` + Type label recording | **COMPLETE** | T5: verified inline Name editor (double-click on Name value cell, one fill+Enter) → property-grid Name row `FX_ButtonRecovery02`; pre-close Type label recorded exactly as rendered: Toolbox label **Button** vs property-grid **Type = "PushButton"**. Nuance: panel component-selector combobox still displays stale "button1_USER (Button)" (readonly input; unresolved, no alternate repair attempted). |
| AC-6 one Save / one close / one recent-forms reopen | **COMPLETE (3/3)** | T6: exactly one ordinary Save. T7: exactly one Form-tab close. T8: exactly one reopen via Designer Form-menu recent-forms entry `#menuitem-1073-itemEl` (no fallback route used). |
| AC-7 post-reopen Name/Type comparison | **COMPLETE** | T8: post-reopen identity Name=FX_ComponentRecoveryLab02 + Version "User version for user <signed-in user>" + scope bar ScopeType=User/ScopeName unchanged, clean (Save disabled); recovered component grid Name=`FX_ButtonRecovery02`, Type=`PushButton` — both exactly equal to pre-close recorded values. Selector display also refreshed post-reopen (evidence t8-02). |
| AC-8 final live count + action audit + confinement | **COMPLETE** | T9: Select Form Filter By=Name, Case Sensitive visibly unchecked, exactly one case-insensitive Name match for `FX_ComponentRecoveryLab02` (t9-01 + accessibility snapshot); action counts reconciled 1/1/1/1/1/1 with zero fallback/unload/auth/property mutations; repository confined to the two permitted EXP-027 paths (`git status` clean otherwise). |

## Final finding classification

- **Observed (first observation for this self-contained setup only):** in one Designer session, a saved native Toolbox Button with custom Name `FX_ButtonRecovery02` and property-grid Type label `PushButton` recovered with Name/Type exactly equal to the pre-close values across exactly one ordinary Save → one Form-tab close → one recent-forms reopen. Clean identity (Name + ScopeType=User + ScopeName) preserved at every stage; no unsaved-change prompt on close; component-selector display refreshed post-reopen. NOT classified replay_verified (single execution).

## Explicit non-claims

- No target mutation (Form creation, Button creation, Name assignment, Save, close, reopen) was performed or claimed in T1.
- Current Designer continuity elsewhere and any state outside the controlled Playwright context is not inferred.
- Absence of a usable workflow applies only to the enumerated controlled Playwright browser context at this moment.

## Knowledge state per finding

- Prior procedures (EXP-019-R2 selection prefix, create-basic-form, add-component-from-toolbox, configure-basic-component Name step): **replay_verified / verified** as inherited from cited records; re-read, not re-executed in T1/T2.
- Controlled Playwright context = single `about:blank` tab with empty accessibility tree (no usable Web Client/Designer): **observed** (T1).
- One documented Portal/Web Client session-establishment sequence yields a live user-identified Web Client + populated Select Form in the controlled context; portal-notification close + tabs-menu Mongoose reopen + in-iframe Sign-In OK reproduce as documented: **observed** (T2, first execution).
- Target `FX_ComponentRecoveryLab02` absent from the Select Form Name column store (`findRecord('mgdata',...)=null`) with a working positive control (`UserPreferences` found): **observed** (T2; live-session absence, not Forms-database durability).
- One Web Designer launched from the live workflow via the split button opens exactly one Designer tab at `designer/Default.aspx` (no MGForm) whose "Identify Your Editing Scope" dialog shows Scope=User and whose status bar reads `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`: **observed** (T3, first execution).
- Toolbox Button placement on the target: one Toolbox "Button" row click armed the item; exactly one canvas click placed a component with generated name `button1_USER`, rendered as a blue rectangle selected with handles, property-grid Name `button1_USER`, **Type `PushButton`**, From Device Master True; form became dirty (Save/Regenerate/Undo enabled): **observed** (T5).
- Verified inline Name editor step on this session: double-click on the Design.Name value cell opened an active inline textbox; one fill+Enter committed `FX_ButtonRecovery02` into the property-grid Name row without changing Type/Caption: **observed** (T5). Caveat: after commit, the panel component-selector combobox (`#comptreepicker-1161-inputEl`) still displays stale "button1_USER (Button)"; it is a readonly tree-picker input and typing into it was rejected ("not editable", no effect) — staleness recorded, not repaired.
- Ordinary close of the clean saved target via its Form-tab close control (`closable FX_ComponentRecoveryLab02`): exactly one click; tab URL dropped `&MGForm=`; form tablist empty; no unsaved-change prompt or unexpected dialog appeared; same Designer client remains active/usable with User scope unchanged; no unload/clear-cache network request emitted: **observed** (T7).
- Post-reopen recovery (objective finding): reopening the closed, saved target via the Designer Form-menu recent-forms entry recovers the Button with property-grid Name `FX_ButtonRecovery02` and Type `PushButton` exactly equal to pre-close values, Caption still empty, clean state preserved: **observed** (T8; first observation for this self-contained setup only — not replay_verified).

## Open questions / blockers

- No blocker in T1–T8. AC-1–AC-7 complete; AC-6 3/3. Selector staleness observed pre-reopen and refreshed post-reopen (before/after displays recorded; refresh mechanism not proven).
- Next permitted action: none within this experiment — lifecycle and audit complete; any follow-up would be a separate replay task.

## Evidence files

- `evidence/EXP-027/t1-preflight-notes.md` — procedure summaries + controlled-context enumeration (T1) + T2 session-establishment/AC-1 guard detail with store-query results.
- `evidence/EXP-027/01-webclient-established.png` — live Web Client header, clean state, user identity/config group (T2).
- `evidence/EXP-027/02-select-form-open.png` — populated Select Form dialog (liveness), Case Sensitive unchecked.
- `evidence/EXP-027/03-select-form-name-filter-target.png` — Name-filter settings applied (Filter By=Name, target text, Case Sensitive unchecked).
- `evidence/EXP-027/04-webclient-clean-scope-badge.png` — duplicate of 03.
- `evidence/EXP-027/05-designer-launched-user-scope.png` — one usable Web Designer: Toolbox (Framework Components incl. Button row), blank canvas (no Form loaded), Properties panel (Form/Component tabs), Design toolbar Save disabled, status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`. Supports AC-1 User-scope proof + one-Designer usable state.
- `evidence/EXP-027/06-fresh-wizard-selection-dialog.png` — fresh "Form Wizard Selection" dialog (New Form radio; Category/Wizard empty) after single New click. Supports AC-2 precondition.
- `evidence/EXP-027/07-category-dropdown-options.png` / `08-wizard-dropdown-options.png` — rendered Classic and Build from Scratch dropdown options before selection. Supports the replay_verified prefix reproduction.
- `evidence/EXP-027/09-classic-buildfromscratch-selected.png` — Category "Classic" + Wizard "BuildFromScratch" committed pre-OK. Supports AC-2 visible Classic+BuildFromScratch proof.
- `evidence/EXP-027/10-wizard-page1-name-filled.png` — first wizard page with Name FX_ComponentRecoveryLab02, defaults untouched. Supports AC-2 name entry.
- `evidence/EXP-027/11-save-template-page-unchecked.png` — wizard page 2, **Save Template checkbox visibly unchecked**, Finish enabled. Supports AC-2 Save Template unchecked before commit.
- `evidence/EXP-027/12-process-completed.png` — "Process Completed Successfully" alertdialog. Supports single creation commit.
- `evidence/EXP-027/13-form-created-in-designer.png` — decisive AC-3 baseline: Form-tab heading FX_ComponentRecoveryLab02, empty grid canvas (no visible components), Properties grid Name/User version/Default/Normal/True, User-scope status bar, Save disabled (clean). Does NOT prove complete component cardinality nor persistence across lifecycle.
- `evidence/EXP-027/t5-01-toolbox-button-armed.png` — Toolbox Button row highlighted before placement; canvas empty; Save still clean. Supports single-placement precondition.
- `evidence/EXP-027/t5-02-button-placed-name-button1.png` — placed blue Button selected on canvas; Component grid Name button1_USER, **Type PushButton**; Form-tab heading + User-scope bar. Supports AC-4 visible presence and pre-Name Type label.
- `evidence/EXP-027/t5-03-name-renamed-type-pushbutton.png` — after Name edit: Name cell highlighted FX_ButtonRecover… (truncated render), Type PushButton unchanged, Caption empty, Button still selected; Save enabled (dirty, not invoked). Supports AC-5 exact Name assignment + Type label. Selector combobox visibly still shows stale "button1_USER (Button)" in this capture — recorded nuance.
- `evidence/EXP-027/t6-01-after-save-clean-name-type.png` — post-Save clean state: toolbar greyed with Save disabled, Button still rendered/selected on canvas, Component grid Name cell highlighted `FX_ButtonRecover…` + Type PushButton + Caption empty; Form-tab heading + User-scope bar. Supports AC-6 part 1 (clean return, identity/scope, Name/Type unchanged). Does NOT prove persistence across close/reopen.
- `evidence/EXP-027/t6-savesavechanges-response.json` — response body of the single SaveChanges POST (`Success:true`, message naming FX_ComponentRecoveryLab02). Supports exactly-one-Save action count; does not prove Forms-database durability.
- `evidence/EXP-027/t7-01-after-close-designer-empty-tabs.png` — post-close state: no Form-tab heading in the canvas band (target tab gone), toolbar greyed with Save disabled, Toolbox tree intact incl. Button row, empty Properties panel, User-scope status bar visible; no prompt/dialog rendered. Supports AC-6 close part (clean close, Designer still usable). Does not prove reopen behavior or persistence.
- `evidence/EXP-027/t8-01-reopened-component-tab-empty.png` — post-reopen context: Form-tab heading FX_ComponentRecoveryLab02 restored, blue Button rendered on canvas but unselected (Component tab tree empty, selector value empty). Supports reopen identity + "component recovered as rendered object"; does not prove Name/Type by itself.
- `evidence/EXP-027/t8-02-reopened-component-name-type.png` — decisive AC-7: Properties header selector renders **FX_ButtonRecovery02 (Button)**; Component grid Name cell FX_ButtonRecover… (truncated render) + **Type PushButton** + Caption empty + From Device Master True; Button selected on canvas; Form-tab heading + User-scope bar. Exact Name value additionally proven by accessibility snapshot. Supports post-reopen Name/Type equality with pre-close values. Does not prove durability beyond this session or inventory completeness.
- `evidence/EXP-027/t9-ac8-audit-notes.md` — T9 audit detail: Select Form settings/match count, action-count reconciliation table (1/1/1/1/1/1 + zero fallback/unload/auth/property mutations), repository confinement result, preserved reopened-target state.
- `evidence/EXP-027/t9-01-select-form-one-match.png` — Select Form audit context: dialog with exactly one row (`FX_ComponentRecoveryLab02` Caption+Name), Filter By=Name, **Case Sensitive visibly unchecked** (filter text truncated at field edge; exact filter string from accessibility snapshot). Supports AC-8 exactly-one live count.
- (this record) — experiment status/log.
