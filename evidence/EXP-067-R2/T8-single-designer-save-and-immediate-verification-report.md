# EXP-067-R2 — T8 report: single native Designer Save and immediate read-only verification

Run `R-20261013-011002-lSgL`, cycle 7, task T8. Worker session `f7c1ad6d-c6f4-47da-8379-fc79301e6afe`; task_message_id `f7b37279-18b7-4f8f-8359-f19d0ce0109a`. Date 2026-10-13. Editing scope User.

**Outcome: the native Designer toolbar Save was invoked exactly once. The native response was the notification "Save — Form [FX_Items] and global object(s) were saved." Immediately afterwards the toolbar Save and Undo were disabled, the FX_Items identity (User scope, ScopeName anton.ramos@3mworks.com.ph) was unchanged, and both components remained present with their configured values. No dialog or prompt appeared. FX_Items was left open. Save count = 1.**

## 1. Preconditions (fresh, before Save)

- Tab list (before any select): 2 tabs. Tab 0 = Designer (`MGForm=FX_Items`, current); tab 1 = Web Client. No tab select was needed.
- Fresh snapshot: tab heading `FX_Items`; footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`; toolbar **Save enabled**, Undo enabled, Regenerate Form enabled; no dialog; Properties header `FX_UMsDescriptionEdit (Edit)`.
- Reconfirmed (read-only, no property change):
  - `FX_UMsDescriptionStatic`: Caption `FX_sDescription` (Properties, find). Selected via the Components row (selection only).
  - `FX_UMsDescriptionEdit`: Binding `object.FX_UMsDescription` (Properties and Components row Data Source).
- Components tree: `FX_UMsDescriptionEdit` (Edit; object.FX_UMsDescription; Pane 1; Tab 0) and `FX_UMsDescriptionStatic` (Static; Pane 1; Tab 0) present.
- Pre-Save screenshot: `t8-01-pre-save-state-both-components-dirty-save-enabled.png`.

## 2. Native Save (count 1; exactly one invocation)

- One click on the native toolbar `Save` (toolbar button `mgtoolbarbutton-1085`, accessibility `button "Save"`, enabled before the click). **Not retried.**
- Visible response (verbatim, from the accessibility tree while the notification was on screen): `Save` — `Form [FX_Items] and global object(s) were saved.` with a `Close` button. No error text. No confirmation dialog. The notification is a toast, not an in-page dialog.
- Immediate state after the click (fresh finds):
  - toolbar `Save` → `[disabled]` (accessibility `button "Save" [disabled] [active]`).
  - `Regenerate Form` → `[disabled]`.
  - `Undo` → `[disabled]`; `Redo` → `[disabled]`.
  - `dialog`: no match.
- The notification auto-dismissed before the post-Save screenshot; the screenshot therefore does not show the message. The message text above comes from the find result taken immediately after the click.

## 3. Post-Save verification (read-only)

- Post-Save screenshot: `t8-02-post-save-save-undo-disabled-native-response-message.png` (viewed). Shows the Save and Undo icons greyed; the FX_Items heading; Properties for `FX_UMsDescriptionStatic` with Caption `FX_sDescription`, Justification Right; the Components rows `FX_UMsDescriptionEdit` (Edit; object.FX_UMsDescri…; 1; 0) and `FX_UMsDescriptionStatic` (Static; 1; 0); the canvas with the "Description:" label and the Edit box in the target area; the footer `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`. **Does not show** the Location and Size rows (below the visible area) and does not show the notification text (auto-dismissed).
- Identity: tab heading `FX_Items`; footer ScopeType User, ScopeName unchanged.
- Components: `FX_UMsDescriptionStatic` (name present) and `FX_UMsDescriptionEdit` (binding `object.FX_UMsDescription`) remain present (finds).
- Prompts: no unsaved-changes prompt and no dialog after Save.
- Not re-read after Save in T8 (by instruction, read-only and minimal): the full Pane 00 and Pane 01 component list and the geometry values; these are the subject of the post-save reopen verification.

## 4. What this does and does not prove

- **Proves (observed):** one native Save was invoked; the native response was the saved confirmation for Form [FX_Items]; Save and Undo were disabled immediately afterwards; FX_Items identity and both component identities remained; no dialog appeared.
- **Does not prove:** persistence beyond this session (the close and reopen in the next authorized task is required); that the Location, Size and Caption values were stored (they were not re-read after Save); the server-side content of the saved definition; the stored `FX_sDescription` string value.

## 5. Counts (T8)

**T8 explicit browser calls: 17 (corrected in T9; the earlier figure of 22 was an overcount).** Breakdown, reconciled against the call sequence:

| Category | Count |
| --- | --- |
| Tab lists | 1 |
| Tab selects | 0 |
| Snapshots (untargeted) | 1 (depth 3, Designer check) |
| Finds | 11 |
| Clicks | 2 (Components row `FX_UMsDescriptionStatic` selection; native Save ×1) |
| Screenshots | 2 (`t8-01`, `t8-02`) |
| Typed entries / key presses / waits / hovers / wheel | 0 / 0 / 0 / 0 / 0 |

Total: 1 + 0 + 1 + 11 + 2 + 2 = **17**.

**Cumulative T1–T8 (corrected): 311 (T1–T7, controller-reconciled) + 17 (T8) = 328 explicit browser calls.**

| Operation (cumulative) | Count |
| --- | --- |
| Preference reads | 1 (T1; checked; unchanged) |
| Preference changes | 0 |
| Web Client `Unload All Global Form Objects` | **1** (T2) |
| Designer `Unload All Global Form Objects` | **1** (T3) |
| Designer close / reopen (pre-change) | 1 / 1 (T3) |
| Toolbox drops | **2** (T5 Edit; T6 Static) |
| Designer Save | **1** (T8; native; confirmed saved) |
| Designer Save retries | 0 |
| Components added | 2 (authorized) |
| Other component changes | 0 |
| Runtime record edits / runtime Save | 0 / 0 |
| Undo / trash / delete / close (T8) | 0 |
| Check-in / undo checkout | 0 |
| Browser JavaScript, console, network | 0 |

## 6. Recorded deviations and carried-forward items

- **T6 sequencing deviation (carried forward):** the T6 Name entry and its Tab were sent in one response. Independently verified: the Name is `FX_UMsDescriptionStatic` (T6, T7 and T8 readbacks).
- **T6 stale-reference error (carried forward):** `browser_snapshot` targeted ref `e2534` returned "Ref not found"; the recovery used fresh finds and a successful targeted snapshot of a fresh ref, not the brief's untargeted snapshot. No mutation was repeated.
- **Typed-entry flags (carried forward):** the T5 and T6 typed entries were native rendered Properties entries; no restriction violation identified.

## 7. Final state

- **Designer:** tab 0; FX_Items open; User scope (ScopeName anton.ramos@3mworks.com.ph); **clean after Save** (Save, Regenerate Form, Undo, Redo disabled); both components present; `FX_UMsDescriptionStatic` selected (view state); no dialog or picker open. **Not closed or reopened.** Save count 1.
- **Web Client:** tab 1; not operated on in T8.
- **Unloads:** Web Client 1, Designer 1 (not repeated). Toolbox drops 2.
- **Next (not authorized by T8):** the close and reopen of the clean Designer Form through the toolbar Open button; verification of both components' names, geometry, Caption and binding after reopen; then the runtime close and reopen with dumbbell, eggs and guitar.
