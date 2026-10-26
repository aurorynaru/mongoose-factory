# EXP-136 T17 - close of saved Form `FX_InventoryDashboard` and fresh-Designer launch attempt (STOPPED: no fresh Designer appeared)

Run R-20261026-062909-9GoC, cycle 22, task T17. Date 2026-10-26. Mode: LEARNING MODE. FX_-only scope. Editing scope User, account `anton.ramos@3mworks.com.ph`, configuration `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`.

## 1. Outcome

- The saved Form was closed once with its native tab close control; the close completed with no prompt and no error.
- One Designer launch was attempted through the Web Client split-button `Designer` control (tooltip `Open designer in a new window` confirmed by hover). No new Designer tab appeared after the click, a 4-second wait and a re-list, or after a further 8-second wait and a second re-list.
- Per the brief ("If the additional Designer does not appear, stop rather than treating a completed click as a successful launch"), the fresh-Designer persistence readbacks (steps 10-18) were NOT performed. AC-9 is PENDING, not passed. The launch was NOT repeated.
- No Form was reopened in the existing Designer, no Save was performed, and no runtime, Portal reload or Refresh action was taken.

## 2. Carried state from T16 (unchanged)

- T16 single ordinary Designer Save: one `POST …/DesignerSession/SaveChanges` → 200; response `{"Success":true,"Message":"Form [FX_InventoryDashboard] and global object(s) were saved.","Payload":[]}`; Save, Undo and Regenerate Form disabled afterward (`evidence/EXP-136/t16-single-designer-form-save.md`).
- The T16 Save message named the Form and "global object(s)"; it did not separately identify the Web User Control Asset.
- AC-7 remains pending (qualified): the blank Compile Result Output and the empty Errors grid (T15) and the successful Save (T16) do not establish successful C# compilation.

## 3. Pre-close state (observed)

| Check | Observed | Evidence |
| --- | --- | --- |
| Tabs | List (read-only): tab 0 Web Client (`favoriteContext=FX_InventoryEditor`, header `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`); tab 1 Designer (`designer/Default.aspx`, title `Infor Mongoose Application Development Framework (G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT)`) | tab list (this task) |
| Selected tab | Tab 1 selected after the list (succeeded) | tab select result |
| Snapshot | One fresh untargeted snapshot; `button "Save" [disabled]`, `Regenerate Form` disabled, `Undo` disabled; heading `FX_InventoryDashboard`; Script Language `Visual C#`; footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`; no dialog; console 2 errors / 0 warnings | `evidence/EXP-136/t17-pre-close-designer-snapshot.yml` |
| Screenshot | Form identity, Visual C#, User footer, Save greyed; Event Handlers grid empty (headers only) at this point | `evidence/EXP-136/t17-pre-close-form-identity-save-disabled.png` |

Gates passed: clean (Save disabled), correct Form identity, User scope, no dialog.

## 4. The close (observed)

- Action: one click on the Form tab's close control (`button "closable FX_InventoryDashboard"`, snapshot ref `e247`). Count: 1. No Save, no discard, no confirmation was offered or clicked.
- Post-close snapshot (`evidence/EXP-136/t17-post-close-designer-snapshot.yml`): no `FX_InventoryDashboard` heading and no closable Form tab; `button "Save" [disabled]`; footer still `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`; no dialog text; the two `alert` nodes are empty containers.
- Post-close screenshot (`evidence/EXP-136/t17-post-close-designer-no-form-save-disabled.png`): empty canvas, empty Properties pane, Save and Undo greyed, footer User scope. This shows the Designer is clean with no Form loaded. It does not show the saved definition.
- Result: the native close completed normally with no error and no prompt. The close is recorded as observed; the server-side persistence of the close itself is not separately verified.

## 5. Fresh Designer launch attempt (observed)

- Tab 0 (Web Client) selected after a tab list. Snapshot (`evidence/EXP-136/t17-webclient-before-designer-launch-snapshot.yml`): header `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; Save disabled on the Web Client toolbar; runtime Form `FX_InventoryEditor` (heading); no sign-in form, no Session Expired modal, no portal banner in the snapshot; console 19 errors / 10 warnings (unchanged from T8 and T6 readings).
- Split-button: two `Designer` controls were present (`f1e55`, `f1e57`). Hover on `f1e57` showed tooltip `Open designer in a new window` (find result).
- Click: one click on `f1e57` (the hovered control). The click completed without an error.
- Tab list after the click (immediately): still two tabs; tab 0 current; tab 1 the existing Designer. The tab-0 URL now shows `&MGForm=FX_InventoryEditor` (not a Designer tab; not explained).
- Wait 4 s and re-list: two tabs, unchanged.
- Fresh snapshot after the click (`evidence/EXP-136/t17-webclient-after-designer-click-inspection.yml`): runtime heading `FX_InventoryEditor`; no new Designer, no dialog or tooltip text relevant to a launch.
- Screenshot attempt after the click (`t17-webclient-after-designer-click-no-new-tab.png`): TIMED OUT ("taking page screenshot … fonts loaded", 5000 ms). No image file was produced. This is the same rendering timeout pattern recorded in EXP-136 T1; not treated as evidence.
- Wait 8 s and re-list: still two tabs, unchanged.
- Conclusion: the split-button click did not produce a new Designer tab within about 12 seconds of waiting and two tab lists. The brief forbids a repeated launch without authorization, and this stop rule was applied.

## 6. Not performed (by stop rule)

- No fresh Designer identity (configuration, scope, no loaded Form) could be verified.
- No reopen of `FX_InventoryDashboard` through Select Form in any Designer.
- No readback of Caption, Script Language, FX_InventoryControl properties (Use Web Control, Control URL, Width/Height), the FX_LoadInventoryFromIDO method or its Compile Result, FX_vInventoryJson Global/Persistent settings, or FX_Inventory/index.html asset identity and content, in a freshly opened Designer.
- No Portal reload, no runtime open, no Refresh Data, no FX_InventoryItems read (AC-10 to AC-12 not evaluated).

## 7. Mutation and browser ledger (T17)

Mutations:
- Designer Saves: 0 (T16 Save not repeated).
- Form close: 1 (native tab close control; no prompt).
- Designer launches: 0 successful; 1 split-button click with no new Designer tab (not repeated).
- Form opens: 0. Variables, assets, components, Caption, Script Language, script methods, events: 0 changes.
- Portal reloads: 0. Runtime open or Refresh activations: 0. Regenerate Form, FormSync, unload, deployment, cache clearing: 0.
- Enter presses: 0. Browser JavaScript authored by the worker: 0. Credentials typed or read: 0. Session recoveries: 0. Prompts or dialogs accepted: 0.

View-only actions:
- Tab lists: 4 (start, after the close, after the click with a 4 s wait, after the 8 s wait). Tab selects: 2 (tab 1, then tab 0). Snapshots (worker-saved): 4. Finds: 2 (`Open designer in a new window`, plus targeted reads in the snapshot). Hover: 1 (tooltip). Screenshots: 3 successful (`t17-pre-close-form-identity-save-disabled.png`, `t17-post-close-designer-no-form-save-disabled.png`, and the pre-close one) and 1 timeout. Waits: 2 (4 s, 8 s). Grep reads of saved snapshots: 3.

## 8. Evidence files (T17)

- `evidence/EXP-136/t17-fresh-designer-persistence-readback.md` (this file)
- `evidence/EXP-136/t17-pre-close-designer-snapshot.yml` (pre-close snapshot; Save disabled; Form identity)
- `evidence/EXP-136/t17-pre-close-form-identity-save-disabled.png` (pre-close screenshot: heading FX_InventoryDashboard, Visual C#, User footer, Save greyed, Event Handlers grid empty; does not show the saved Components, Variables or script content)
- `evidence/EXP-136/t17-post-close-designer-snapshot.yml` (post-close snapshot; no Form heading; Save disabled; User footer)
- `evidence/EXP-136/t17-post-close-designer-no-form-save-disabled.png` (post-close screenshot: empty canvas and Properties, Save and Undo greyed, User footer; proves no Form loaded in that Designer tab)
- `evidence/EXP-136/t17-webclient-before-designer-launch-snapshot.yml` (Web Client identity before the launch click)
- `evidence/EXP-136/t17-webclient-after-designer-click-inspection.yml` (Web Client after the click; runtime FX_InventoryEditor heading; no new Designer)
- `t17-webclient-after-designer-click-no-new-tab.png` was NOT written (screenshot timeout).
- Tool-written under `evidence/playwright/`: `page-2026-10-26T01-22-23-115Z.yml` (close), `page-2026-10-26T01-22-38-106Z.yml`, `page-2026-10-26T01-22-44-244Z.yml`, `page-2026-10-26T01-22-50-370Z.yml`, `page-2026-10-26T01-23-12-584Z.yml`, and console logs under `evidence/playwright/console-2026-10-26T01-22-*.log`.

## 9. Acceptance checkpoint after T17

| AC | Status after T17 | Basis |
| --- | --- | --- |
| AC-1 | Carried: passed (operator-accepted) | Scope footer and configuration re-observed (T17 pre-close) |
| AC-2 | Carried: passed at operator-verified hash level (not recomputed) | No source read in T17 |
| AC-3 | Carried: same-session supported (T11, T16 Variables list); not re-read in a fresh Designer | AC-3 fresh readback PENDING (step 16 not reached) |
| AC-4 | Carried: operator-accepted (qualified) | Asset not re-read in T17 (step 17 not reached) |
| AC-5 | Carried: in-session passed (qualified); Form closed | Fresh-Designer identity not established |
| AC-6 | Carried: same-session passed (qualified) | Fresh-Designer component readback not performed |
| AC-7 | **PENDING (qualified)** | No compile result reopened; Save success is not compile evidence |
| AC-8 | PASSED (observed, from T16) | One Save; success response; disabled Save state |
| AC-9 | **PENDING (not passed)** | Close completed; fresh Designer did NOT appear after the launch click; no fresh readback performed |
| AC-10 to AC-13 | Not evaluated | Later stages (no Portal reload, runtime or source-record readback authorized in T17) |

## 10. Blockers and open questions

- Blocker (suspected environment or UI): the split-button `Designer` click (tooltip confirmed) produced no new Designer tab within about 12 s and two tab lists. Cause not established. Candidate explanations not verified: a popup blocked by the browser, a launch that failed silently, or a delayed window. A second click was NOT made (brief stop rule).
- Coordinator decision needed: (a) whether to authorize one further launch attempt (a new task with its own recovery allowance) or to check for a blocked popup via the browser's permitted tab view; (b) whether the existing Designer tab 1 (now clean, no Form loaded, Save disabled) may be used for a Select Form reopen of `FX_InventoryDashboard`. That route is NOT a fresh Designer and was not used here.
- Unresolved carried from T14-T16: `User Control Name` `V(UserCtrl_userControl1_USER)`; Page URL without `MGForm`; T13 Save-state transition; Global-versus-Form storage of `ThisForm.Variables`; AC-7 compile question; the Web Client tab-0 URL now shows `&MGForm=FX_InventoryEditor` after the click (not explained).
- Console counts unchanged (Designer 2 errors / 0 warnings; Web Client 19 errors / 10 warnings). The two Designer errors are `unload` Permissions-Policy violations, unexplained.

## 11. Next permitted action

Coordinator decision (see section 10). Do not repeat the launch, reload the Portal or open the runtime Form without authorization. The Designer tab 1 is clean with no Form loaded and no dialog open.
