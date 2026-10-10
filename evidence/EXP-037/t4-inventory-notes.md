# EXP-037 — T4 read-only Primary-event and Event Handlers inventory notes

Date: 2026-10-10
Run: R-20261010-093704-fZNX · Cycle 3 · Task T4
Worker session: `739c57f6-5187-451a-a0b9-e0c67297eeb3` (task_message_id `5fd13009-a3df-4826-9a6a-439e85ec9af0`)
Scope of this task: read-only inventory of FX_SingleButton01 Events > Primary, the Form Event Handlers list, and the Form layout. **No handler opened or created (no New, Add, Delete, Copy, or editor). No inline edit. No Primary assignment. No property value changed. No Save, close, reopen, scope change, preference change, or runtime activation.**

## Result summary

| Check | Result | Evidence |
|---|---|---|
| Target Form tab | `FX_SingleButtonLab01` selected; one Form tab; closable control present | `t4-02-designer-current-snapshot.md` lines 211–214; `t4-17-final-readonly-snapshot.md` lines 211–214 |
| Editing scope footer | `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` | `t4-02…` line 422; `t4-17…` line 525; `t4-03-designer-current-viewport.png` bottom-left |
| Clean state at start | Save, Regenerate Form, Undo, Redo disabled; no dialog | `t4-02…` lines 10–13, 52–55; `t4-03…png` (Save icon greyed) |
| Target identity at start | Form version / Name were **not re-read** in this task (the Form tab selection was the Components sub-tab). Identity carried from T3 (`User version for user anton.ramos@3mworks.com.ph`), re-read in T4 at the Form properties step. | `t4-14…` / `t4-15…` lines 317, 335 |
| Component selected | `FX_SingleButton01` (header `FX_SingleButton01 (Button)`) | `t4-02…` line 289; `t4-08…png` |
| **Button Events > Primary value** | **Blank** (empty value cell; picker arrow and "..." button only). Not assigned. | `t4-07-after-expand-all-snapshot.md` lines 641–652 (empty value cell `e922`); `t4-09-events-scrolled-primary-viewport.png` (viewed: Primary row blank) |
| Button Events > Data Change | Blank | `t4-07…` lines 657–661; `t4-09…png` |
| Button Events > Lose Focus | Blank | `t4-07…` lines 666–670; `t4-09…png` |
| Button Events > Gain Focus | Blank | `t4-07…` lines 675–679; `t4-09…png` |
| Button Events > Drag From Events | `0 event(s)` | `t4-07…` lines 684–688; `t4-09…png` |
| Button Events > Drop On Events | `0 event(s)` | `t4-07…` lines 693–697; `t4-09…png` |
| **Form Event Handlers list (Component selected)** | **No rows.** Column headers Sequence / Response Type / Disabled / Response Parameters present; list body empty; right editor pane empty. | `t4-11-event-handlers-tab-snapshot.md` lines 232–248; `t4-12-event-handlers-tab-viewport.png` (viewed) |
| **Form Event Handlers list (Form selected in Properties)** | **No rows** (same empty layout). | `t4-13-form-tab-event-handlers-viewport.png` (viewed) |
| Handler count | **0 visible**. No pagination control, filter text, or "more" indicator is visible; the search box is empty. | `t4-11…` line 238 (search empty); `t4-12…png`, `t4-13…png` |
| `FX_ButtonPromptEvent01` in the list | **Not present** (list has no rows). | Same as above |
| Form layout (non-editing read) | Layout group: Splitter `None`; Pane 0 Scroll Bars `As Needed`; Pane 1 Scroll Bars `As Needed`; Form Pages (no value shown; dialog-type control); Unit `Char`; Size `120; 40`; Synchronize FlexLayout attributes `True`. **The wizard value `GridLeft` (EXP-036 page 1) is not shown in this group.** | `t4-15-form-tab-expanded-snapshot.md` lines 457–515; `t4-16-form-layout-scrolled-viewport.png` (viewed) |
| Form properties (re-read) | Name `FX_SingleButtonLab01`; Version `User version for user anton.ramos@3mworks.com.ph`; Device Type `Default`; Form Type `Normal`; Is Master `True`; Caption blank; Initial Command blank; Close Box `True`; Min/Max `True`; Enable Advanced Filter `False`; Help Context ID `-1`; Script Language `Visual Basic` | `t4-15…` lines 297–336; `t4-16…png` |

## Collision assessment

- **Conflicting Primary assignment:** none. Primary is blank. No replacement is needed, so the brief's stop condition on a nonempty conflicting Primary does not apply.
- **Conflicting handler definition:** none visible. `FX_ButtonPromptEvent01` does not appear in the Event Handlers list, from either the Component-selected or the Form-selected view.
- **Limit of the absence claim:** the list is the rendered Designer list for this open Form. The worker did not query the Forms database, and the absence is limited to what the Designer displays. The list shows no pagination, filter, or truncation indicator, but this is an observation, not a proof of server state.
- **Scope ambiguity:** none. Footer and Version identify the same User-scoped Form.
- **Metadata error:** none observed in the console or the panels.
- **Unexpected dirty state:** none. Save disabled throughout and at the end.

## Anomalies observed during the inventory (disclosed)

1. **First Events click** (ref `e522`, the Events label): selected the row but did **not** expand the group. No change.
2. **ArrowRight key** (one `press_key`) after that click: did **not** expand the group. It moved focus to the Events value cell (highlighted, no editor textbox appeared in the snapshot). Save remained disabled, no dialog appeared, and no value changed. The focus was left on that cell. This was an attempted expansion that failed; it is disclosed here as a failed non-mutating attempt (see Recovery allowance).
3. **Expand-all control** (unnamed toolbar button, plus icon, component property panel, ref `e420`; later the named `Expand` control `e1252` for the Form panel): expanded all component property groups, including Appearance and Behavior, and expanded Form property groups including Layout. These are view-only expansions. No value changed.
4. **Mouse wheel scroll** (two `mouse_wheel` events over the property grid at x=1735) moved the grid only.
5. **Form tab switch** in the Properties panel (a view tab, not a lifecycle action).

## Counts (T4)

| Item | Count |
|---|---|
| Designer tab select | 1 (browser navigation) |
| Events label click | 1 (selection only; no expansion) |
| ArrowRight key | 1 (failed expansion; focus moved; no edit) |
| Component property expand-all click | 1 (view control) |
| Mouse move (for wheel) | 2 (no click) |
| Mouse wheel | 2 (scroll only) |
| Event Handlers Details tab click | 1 (view tab) |
| Properties Form tab click | 1 (view tab) |
| Form property expand (named `Expand`) | 1 (view control) |
| Handler editor / New / Add / Delete / Copy | **0** |
| Inline edit / value entry | **0** |
| Primary assignment | **0** |
| Save | 0 |
| Regenerate / Unload | 0 |
| Close / reopen | 0 |
| Scope change / preference change | 0 |
| Runtime Button activation | 0 |
| Browser JavaScript authored by worker | 0 |
| Authentication | 0 |
| Cold MGForm navigation | 0 |

## Recovery allowance

- Fresh untargeted snapshot used for recovery: **0 of 1**. (The snapshots `t4-01`, `t4-02`, `t4-04`, `t4-06`, `t4-07`, `t4-10`, `t4-11`, `t4-14`, `t4-15`, `t4-17` were planned state reads. No `Ref not found` error occurred.)
- Corrected visible inspection used for recovery: **disclosed as 1 of 1 consumed, conservatively**. The ArrowRight attempt (anomaly 2) was a failed expansion, and the Events group was then inspected via a different view control. It was not an ambiguous state read. If the coordinator reads the allowance strictly, this counts as the one corrected attempt, and no further corrected attempt remains.

## Stable state at end of T4

- Tab 1 (Designer): `FX_SingleButtonLab01` open; Form tab selected; clean (Save, Regenerate Form, Undo disabled); User footer; no dialog or browser prompt; Details panel on Event Handlers (empty); Properties panel on Form tab with Layout expanded; Button remains selected in the Components grid.
- Tab 0 (Web Client): not touched in T4.

## Readiness assessment for a separate mutation task

Read-only inventory supports the following for a separately authorized mutation task:
- Target Form identified: `FX_SingleButtonLab01`, User-scoped, clean.
- Button identity: `FX_SingleButton01`, Caption `Factory Test Button`, Type `PushButton`, Events > Primary blank.
- No existing handler named `FX_ButtonPromptEvent01` visible; zero handlers visible.
- The Primary event can be assigned without replacing anything.

Not established by this inventory: the server-side handler inventory beyond the rendered list; the Prompt editor's behaviour (its parameter labels are unverified, as in T1); the Button Caption's literal vs string-resource representation; the GridLeft layout value (not shown in the Layout group); durability.

**Mutation is not authorized by T4.** A separate task is needed for: opening the handler editor, creating `FX_ButtonPromptEvent01` with one Prompt action (literal message `Factory Test Prompt`), assigning Primary, and one ordinary Save.
