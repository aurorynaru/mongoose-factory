# EXP-033 T1 — read-only preflight (prior task; no dialog filter changes, no Cancel)

Run: R-20261007-212336-By3J, cycle 1, task T1. Date: 2026-10-07.
Permitted this task: read EXP-031 decisive evidence first; inspect CURRENT browser state (rendered/accessibility only); at most ONE ordinary Open solely to enter the diagnostic (Select Form was found closed); capture inherited-state evidence. NOT performed: any filter control change, textbox focus/type/clear, Enter/OK, row activation, Cancel this task, bulk fill/paste, JS/evaluate/run-code on page state (the screenshot tool's own locator code aside), internal Ext stores, auth/reauth/navigate/Save/close/reopen/create/edit.

## §A Prior-evidence digest (read before acting)

EXP-031 record + `evidence/EXP-031/t4-final-audit-notes.md`:
- Retained-text/stale-rendered-row result: Select Form retains filter TEXT + SETTINGS across ordinary Cancel + one reopen (observed for both `FX_ComponentRecoveryLab02` and the never-created probe string). BUT after reopen with text CHANGED between opens, the grid settled showing the PREVIOUS filter's row (`FX_ComponentRecoveryLab02`) — stale/ambiguous visible content, NOT a settled applied-filter view. Applied-vs-inherited rendering separation left UNRESOLVED; experiment classified BLOCKED on that leg.
- Inherited accepted mechanics: fill alone does not re-render rows from an already-open dialog (EXP-030 T2); settled filtered views come from Open-with-filter-at-open (EXP-027-R2/EXP-028 AC-1).
- Final EXP-031 state: one final ordinary Cancel DISMISSED the dialog with no reopen. Tab 0: authenticated live Web Client, dialog dismissed, `FX_ComponentRecoveryLab03` runtime panel open/selected, toolbar clean (Save disabled), Explorer tree intact. Tab 1: one usable Designer at `&MGForm=FX_ComponentRecoveryLab03`, untouched.
- Relevant to EXP-033's keyboard-refresh question: EXP-031 T2's positive-control row was visible after reopen but could NOT separate applied-refresh from inherited-content re-render because the pre-Cancel grid already displayed the same single row. EXP-033 changes the mechanic under test (native keyboard typing vs bulk fill), so this baseline matters.

## §B Browser context (observed before Open)

`browser_tabs list`: two tabs, same as EXP-031's final state.
- Tab 0 (current): authenticated live Web Client portal at `.../c51080bc-3191-4598-9894-39e1b84f8e87?favoriteContext=FX_ComponentRecoveryLab03` — usable without any authentication action (no SignIn performed this task; identity bar `<user> | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`, DEM badge, Explorer tree My Folders/Master Explorer/Public Folders/User Folders intact).
- Tab 1: one usable Web Designer at `.../designer/Default.aspx?...&MGForm=FX_ComponentRecoveryLab03` — never touched.

Fresh untargeted page snapshot (tab 0): Mongoose iframe banner + navigation (Explorer/Form/Actions/Edit/View/Window/Help), toolbar with Open ENABLED, Save/New/Delete/Refresh/etc. DISABLED (clean), Explorer region grid, selected panel heading `FX_ComponentRecoveryLab03` + Close Panel control preserved. Full-iframe subtree snapshot: no dialog node anywhere. `find "Select Form"` = none → **Select Form initially CLOSED** (consistent with EXP-031's final dismissed state).

## §C The one permitted initial Open (consumed)

One click on the toolbar "Open" button (accessibility ref, semantic name "Open"; NOT coordinates). Post-click `find "Select Form"` = one match → dialog OPEN. This is the single brief-authorized initial Open for EXP-033; it is now consumed and NO further reopen is permitted this experiment.

## §D Inherited Select Form state at open (captured without any change)

Accessibility subtree snapshot of the dialog plus inspected screenshot `t1-03-selectform-dialog-subtree.png`:
- Filter textbox: active/selected (blue selection outline in screenshot), exact text `FX_SelectFormFilterProbe01` (exact value from accessibility snapshot; visibly truncated at the field's right edge in the crop — see §F).
- Filter By combobox: `Name`.
- Checkbox "Case Sensitive": unchecked.
- Checkbox "Starts With": unchecked.
- Grid: header Caption | Name + exactly ONE settled row `FX_ComponentRecoveryLab02 / FX_ComponentRecoveryLab02` (stale inherited row from EXP-031's retained probe session, consistent with the accepted no-refresh-on-fill mechanic).
- Dialog buttons visible and NOT pressed: OK, Cancel, Help; plus Close Window.

## §E Action counts this task

Initial Open: 1 (consumed; the experiment-wide allowance for entering the diagnostic). Filter-setting ops: 0. Cancels: 0. Reopens after initial Open: 0. OK/Enter pressed: 0. Row activations: 0. Form open/save/close/create/edit: 0. Auth/prefs/unload/Designer-launch actions: 0. Ambiguity-recovery allowance (one fresh untargeted snapshot + one corrected visible inspection): NOT consumed — all inspections were planned preflight/evidence capture with settled results; no stale-ref error occurred this task.

## §F Network audit (corroboration only)

Visible non-static network window (#104–#256, panel had reset across the session boundary — earlier EXP-031 indices not retrievable): Mongoose calls are GETs (GetRequestedData, GetConfigs, GetSessionInfo) and POSTs that are read-type calls (GetExplorerFolder, GetAllForms ×several, GetForm, PingServer) plus UserAnalyticsLogin/SaveUserPref/GenerateServerEvent from prior-session login flow. ZERO SaveChanges or other mutation requests in the visible window; the Open click issued no new request into the visible list beyond what was already there (list is cumulative since tab load). Network evidence is corroboration only; rendered observations are decisive.

## §G Final state at end of T1

Tab 0: live authenticated Web Client, **Select Form dialog OPEN** with the inherited state of §D preserved verbatim (no filter control touched, textbox untouched), Lab03 panel selected with Close Panel control preserved, toolbar clean. Tab 1: Designer untouched. T1 leaves Select Form OPEN for T2's positive-control task; no Cancel performed this task.

## §H Screenshot inspection verification

All three screenshots were read back and verified decisive:
- `t1-01` (pre-Open): identity bar `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`, DEM badge, Explorer tree (My/Master/Public/User Folders), selected panel heading `FX_ComponentRecoveryLab03` + Close Panel control, greyed toolbar buttons, NO dialog anywhere → proves initially-closed state and preserved Web Client context; does not show filter values (dialog absent).
- `t1-02`: full viewport with Select Form OPEN: title "Select Form", grid header Caption|Name + exactly one row `FX_ComponentRecoveryLab02`/`FX_ComponentRecoveryLab02`, Filter field selected with textbox text truncated at the field edge (`FX_SelectFormFilterProba…`), Filter By dropdown "Name", empty Case Sensitive / Starts With checkboxes, OK/Cancel/Help present unpressed → proves dialog-open + settings/rows; exact textbox string NOT provable from image alone.
- `t1-03`: tight dialog crop, same controls legible; textbox text truncated at right edge in every crop — the exact string `FX_SelectFormFilterProbe01` is established by the accessibility snapshot line `textbox [active] … FX_SelectFormFilterProbe01`, with the screenshot corroborating selection/position only.
