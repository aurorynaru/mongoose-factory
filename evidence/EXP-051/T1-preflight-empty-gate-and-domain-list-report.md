# EXP-051 T1 — Preflight, empty-collection gate, and FX_UM ComboBox baseline (read-only)

Run `R-20261011-114105-Dh5t`, experiment EXP-051, cycle 0, task T1. Worker session `04dd92c6-18cf-45b0-9833-5f76e6b76c00`, task_message_id `08c63922-4b16-472b-9eb1-f803835aba13`. Date 2026-10-11.

Scope of T1: read the governing documents; preflight; one empty-criteria query; one read-only FX_UM list open and dismissal. No entry, no BX, no Save, no Refresh, no close or reopen, no Designer change.

## Result

| Gate | Result | Evidence |
| --- | --- | --- |
| AC-1 Preflight (Web Client, DEM configuration, FX_Items runtime, User identity) | PASS (limited) | `t1-01`; snapshot `preflight-tab-list-snapshot.md` |
| AC-2 Empty-collection gate (one FiP + F4, empty criteria; grid one starred row; inputs blank; count token `(Object 1 of 1)`) | **PASS** | `t1-02` |
| AC-3 FX_UM list baseline (opened once; rows read; dismissed without selection) | **Rows observed: `DZ` / `Dozen` and `EA` / `Each`.** Column headings not exposed. Dismissed; no value selected. | `t1-03`, `t1-04` |

The mutation gate for T2 (dumbbell entry) is therefore **open for coordinator authorization**. T1 did not enter data.

## Preflight (AC-1)

- Selected tab: tab 1, `Mongoose` (Web Client, portal URL with `favoriteContext=FX_Items`). Tab 0 is the Designer (`Infor Mongoose Application Development Framework (G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT)`).
- Identity bar (Web Client): `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; `DEM` badge in the portal bar.
- No sign-in or configuration screen; no portal-notification banner; no browser-native dialog; no in-page dialog in the Web Client.
- Runtime tab `FX_Items` selected (tab heading and tabpanel `FX_Items`), inherited from EXP-050 T8. Toolbar Save disabled before any action.
- Pre-query runtime state (`t1-01`): one row with a blue star (`gridcell "1"`); Item empty with the required outline; Description empty; Cost `0.00` (property-class default, per EXP-050); Unit of Measure empty; status `Item (Object 1 of 1)`.
- Designer tab (tab 0), observed in the first snapshot, before any action in this task: status bar `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`; an in-page dialog `Identify Your Editing Scope` (Scope User; User anton.ramos@3mworks.com.ph; OK / Cancel / Help) was already open. **Not touched.** Left as found. The Designer's FX_Items Form identity was not re-read in this task (EXP-050 records it as User-scoped, `Version User version for user anton.ramos@3mworks.com.ph`).

Limits: the User-scoped Form identity is cited from EXP-050 and is not re-read in the Designer. The Web Client identity is taken from the identity bar and the runtime tab, not from the Form definition.

## Empty-collection gate (AC-2)

Method: Filter in Place (one click, toolbar `FiP`, label verified), then one F4 key press. Chosen over plain Refresh so the empty criteria are visible before the query runs (EXP-046 T1 limit: retained criteria cannot be read in plain mode).

1. In Filter-in-Place mode (snapshot only; no screenshot): status `Filter in Place`; Item, Description, Cost, and Unit of Measure inputs all blank (Cost blank in this mode); New, Delete, Refresh disabled; grid row star absent in this mode.
2. One F4: Filter-in-Place exited (New, Delete, Refresh enabled again; status back to `Item (Object 1 of 1)`).
3. Settled state (`t1-02`, screenshot and snapshot):
   - Grid: exactly one row, `gridcell "1"`, blue new-row star visible in the screenshot.
   - Item blank; Description blank; Unit of Measure blank. Cost shows `0.00`, the add-mode property-class default, which the operator clarification excludes from the gate.
   - Status bar `Item (Object 1 of 1)`. The caption prefix `Item` is expected (operator clarification 2026-10-11). Count token `(Object 1 of 1)` matches.
   - Toolbar Save disabled; no unstarred row; no dialog.

Gate conclusion: **zero existing FX_Items records** in the query result, under the accepted count rule (EXP-042-R3 / EXP-046). The loaded-record evidence is the native status-bar count and the single placeholder row. The count is not a database read.

## FX_UM ComboBox baseline (AC-3)

Method: one click on the Unit of Measure combobox's native `Open` button (`f1e187`), then one Escape key press to dismiss. No option was clicked; no text was typed.

Observed (`t1-03`; snapshot listbox options):
| Code cell | Description cell |
| --- | --- |
| `DZ` | `Dozen` |
| `EA` | `Each` |

- Exactly two option rows. No other rows. Both rows are two-cell (code, description).
- Column headings: **not exposed** in the accessibility tree and **not visible** in the screenshot. The description-column identity is therefore not confirmed by heading text. The EXP-050 T1 IDO baseline records the domain as `FX_UMs / FX_UM / FX_Description`, which is consistent with the second cell being `FX_Description` but is not a heading observation.
- The `DZ` row shows a grey highlight in the open list (active-item highlight). The combobox input was blank before, during, and after the list, so no value was selected.

Dismissal (`t1-04`; snapshot after Escape): listbox gone from the tree; combobox no longer `[expanded]`, focused (`[active]`); Unit of Measure input blank; Save disabled; status `Unit of Measure (Object 1 of 1)` (focus-caption prefix); Item, Description, and Cost unchanged; still one starred row.

## Operation counts (T1)

| Operation | Count |
| --- | --- |
| Tab list | 1 |
| Tab select (tab 1) | 1 |
| Browser snapshots | 7 total: Designer 2 (one initial; one written to `preflight-tab-list-snapshot.md`), Web Client 5 (preflight, after FiP, after F4, after combobox open, after Escape) |
| Screenshots (worker-requested PNG) | 4 (`t1-01` to `t1-04`) |
| Toolbar clicks | 2 (FiP; combobox Open) |
| Key presses | 2 (F4; Escape) |
| Typing or fills | 0 |
| Option selections | 0 |
| Save / New / Delete / Refresh | 0 / 0 / 0 / 0 |
| Filter-in-Place criteria typed | 0 |
| Close / reopen (runtime or Designer) | 0 / 0 |
| Designer edits; Designer dialog answered | 0; 0 |
| Prompts or dialogs answered | 0 |
| Ref not found; timeouts; recovery snapshots | 0; 0; 0 |
| Portal banner dismissals | 0 (none visible) |
| JavaScript, evaluate, run-code, SQL, API | 0 |
| Authentication or session change | 0 |

## Evidence files written by T1

- `evidence/EXP-051/t1-01-webclient-preflight-initial-state.png`: pre-query runtime. Proves identity bar, FX_Items tab, one starred row, blank Item (required outline), Cost `0.00`, blank Unit of Measure, status `Item (Object 1 of 1)`, Save disabled. Does not prove the criteria or the database.
- `evidence/EXP-051/t1-02-empty-gate-after-one-FiP-F4-empty-criteria.png`: settled after one FiP and one F4. Proves one starred row, blank inputs, status `Item (Object 1 of 1)`, Save disabled, FiP exited. Does not prove the Filter-in-Place criteria (shown only in the snapshot) or the whole-collection count.
- `evidence/EXP-051/t1-03-FX_UM-combobox-list-open-readonly.png`: open list. Proves two rows `DZ | Dozen` and `EA | Each`; no visible column headings. Does not prove the domain's validation behaviour or the stored values.
- `evidence/EXP-051/t1-04-FX_UM-list-dismissed-no-value-selected.png`: after Escape. Proves the list is closed, the Unit of Measure input is blank with focus, Save disabled. Does not prove that no change was made to the database (none was attempted).
- `evidence/EXP-051/preflight-tab-list-snapshot.md`: tool-generated snapshot of the Designer tab (initial state, read-only).
- `evidence/EXP-051/T1-preflight-empty-gate-and-domain-list-report.md`: this report.
- Tool-generated (not worker-authored): `evidence/playwright/` snapshot and console logs (for example `page-2026-10-11T03-41-34-901Z.yml`, `page-2026-10-11T03-41-47-148Z.yml`, `console-2026-10-11T03-41-12-142Z.log`).

## Limits

- Same-session UI evidence only. The empty result is a Web Client UI observation, not a database read.
- The Filter-in-Place criteria were read from the accessibility snapshot only (no screenshot of that mode).
- The FX_UM column headings are not exposed; the description-column identity is inferred from the two-cell rows and the EXP-050 IDO baseline.
- The Designer's pre-existing `Identify Your Editing Scope` dialog was left open (not this task's action). It is in-page in the Designer tab, not the Web Client. The brief's standing rule says to end without open in-page dialogs unless the task says otherwise. Coordinator decision needed on whether to dismiss it.

## Knowledge state

| Finding | State |
| --- | --- |
| Web Client runtime FX_Items is open under DEM identity with the User-scoped Form (EXP-050) | observed (`t1-01`) |
| One FiP + one F4 with empty criteria returns one starred placeholder row, blank inputs, count token `(Object 1 of 1)` | observed (`t1-02`); single run |
| FX_UM list displays `DZ` / `Dozen` and `EA` / `Each` | observed (`t1-03`); single run |
| FX_UM column headings | unresolved (not exposed) |
| Zero existing FX_Items records (whole collection) | observed under the count rule; not database-verified |
| Replay | not claimed |
