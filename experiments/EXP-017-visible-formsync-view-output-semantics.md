# EXP-017 — Visible FormSync View Output Semantics (FX_FormVariableLab05)

Status: **T1 PREFLIGHT COMPLETE — AC-1 PREREQUISITES ESTABLISHED (read-only).** Live session confirmed; target `FX_FormVariableLab05` identity verified read-only (Name, Scope Type=User, User/Group Name). FormSync Script-tab visible state recorded. **View is NOT visibly selectable through supported rendered UI in this instance** (the View radio is rendered off-screen at `left:-9000px`; only `Save` is visibly selectable) — recorded as a preflight observation for the T2 Generate step. No Generate performed this cycle. No Mongoose artifact created/modified.
Date: 2026-10-05
Mode: LEARNING MODE — read-only preflight (strictly non-mutating).
Run: R-20261005-193415-DfGB, cycle 1, task T1.
Record: `experiments/EXP-017-visible-formsync-view-output-semantics.md`

## Objective

Using the existing factory-owned User-scoped `FX_FormVariableLab05` only as a read-only target, open Runtime FormSync through the supported UI, select the intended Source configuration, isolate exactly the target Form and scope, then use only visibly rendered Script-tab controls to select View and record the visible state of Script form license before generating once. Prove whether Generate visibly opens the documented temporary View representation. If the required View control cannot be visibly selected, or Generate instead produces only file/download behavior without a visible temporary representation, record that exact result and stop; do not manipulate hidden controls, switch to Save, retry through alternate mechanisms, or investigate variable serialization.

## T1 — Read-only preflight (harness cycle 1)

### Repository baseline (recorded before any evidence written)

- Branch: `exp/EXP-017`; HEAD: `16dff50` (`harness: context/briefs update`); recent history: `ad50a5a Add learning recovery and evidence guardrails`, `7f3d626 Merge EXP-016-R2 (blocked)`.
- `git status --porcelain` before evidence: clean (no entries). After evidence: only `?? evidence/EXP-017/`.

### Browser state inspected first (fresh visible snapshot; no login/reauth/restart)

- URL: `.../c51080bc-3191-4598-9894-39e1b84f8e87?favoriteContext=FormSync&LogicalId=lid%3A%2F%2Finfor.mongoose.mongoose`. Page title `Mongoose`. Console 0 errors / 1 warning.
- **Session live and usable:** Web Client UI shell loaded — navigation `Explorer | Form | Actions | Edit | View | Window | Help`; user badge + config group `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; DEM badge; toolbar with **Save disabled** (clean). Session confirmed, not re-established. No credential value read, printed, or screenshotted.
- **FormSync already open and selected:** panel tab `FormSync` selected (tabpanel rendered); sibling panel tab `FX_FormVariableLab05` present but not selected. Utilities tab bar rendered: Filter / Delete / Save List / Copy (disabled) / **Script (selected)** / Export / Import / Compare (disabled) / Pseudo Code / Licenses.

### Visible Script-tab state (exact, read-only)

- "Generate separate script per object": unchecked.
- "Include object list in script header": checked.
- Filename: `FS_20261005_102224.SQL`.
- **"Script form license": checked** (visible checkbox state).
- Filename (license): `FS_20261005_102224_LIC.SQL`.
- **Generate button: present and enabled.**
- **Output radio: `Save` visibly checked; `View` unchecked.** Accessibility snapshot marks the View radio `[checked]`, but the visible screenshot shows the filled indicator on `Save` — a visible/semantic-state divergence in this instance.
- "Preserve locked by": unchecked.
- **View radio rendering quirk (observed, carried from EXP-016-R2 and re-confirmed by snapshot):** the View radio is rendered off-screen (`left:-9000px`); it cannot be reached by a normal visible click in this FormSync instance. Only `Save` is visibly selectable. Per brief, hidden-control manipulation is prohibited; this is recorded as a preflight blocker candidate for the T2 "select View through supported rendered UI" step.

### Target identity — read-only verification (supported visible UI: the open FormSync Custom Objects grid)

- Row (Object Name cell `FX_FormVariableLab05`, rowgroup `f3e2811`): **Name = `FX_FormVariableLab05`**, **Object Type = Form**, **Scope Type = User**, **User/Group Name = current user** (cell `f3e2568`, marked `[selected]` in the User/Group Name column, same row index as the target row).
- **Inc = checked; Del = unchecked** — exactly one Inc-checked row across the visible grid; all other rows Inc-unchecked.
- No edit, Save, Regenerate, unload, Form-variable lifecycle inspection, or hidden-control manipulation performed.

### Evidence (under `evidence/EXP-017/`)

- `00-preflight-formsync-live.png` — full viewport: live Web Client (user badge + config group `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`, DEM badge, Save disabled), FormSync panel selected with Script tab active (Output radios, Script form license checked, Generate enabled, filenames), Custom Objects grid with exactly one Inc-checked row. Proves: live session, FormSync open/selected, Script-tab visible state, one-row isolation. Does NOT prove: the Object Name of the Inc-checked row (truncated `FX_FormVariabl...` at this column width) nor the User/Group Name cell alignment (column scrolled) — those are proven by the snapshot row-index pairing below.
- `01-formsync-target-row-fxformvariablelab05-user-scope.png` — same viewport framing; documents the visible grid state alongside the snapshot verification. Does NOT prove row identity by itself (name truncation); identity is established by the accessibility snapshot pairing (target row rowgroup `f3e2811` ↔ User/Group Name rowgroup `f3e2566`/cell `f3e2568` [selected], same row index).

### Snapshot verification detail (read-only targeted snapshots, no clicks)

- Target row snapshot (`table f3e2115`): checkbox [checked] (Inc), checkbox unchecked (Del), gridcells `FX_FormVariableLab05` / `Form` / `User`.
- User/Group Name pairing snapshot (`table f3e2565`): single gridcell = current user, marked `[selected]`, at the same row index as the target row (consistent with EXP-016-R2's documented rowgroup pairing).

### T1 requirement check (AC-1 prerequisites)

| Prerequisite | Result | Evidence |
|---|---|---|
| Live, usable Mongoose session confirmed without login/reauth/restart | **PASS** | `00-preflight-formsync-live.png` (badge, config group, DEM, Save disabled) |
| Current Mongoose configuration context captured | **PASS** | badge/config group `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` visible in `00`/`01` |
| Target `FX_FormVariableLab05` verified read-only: exact Name | **PASS** | snapshot gridcell `FX_FormVariableLab05` (rowgroup `f3e2811`) |
| Scope Type = User verified | **PASS** | snapshot gridcell `User` same row |
| Visible User/Group Name verified | **PASS** | snapshot cell `f3e2568` [selected], same row index |
| No mutation / no FormSync configuration change / no Generate this cycle | **PASS** | audit below |
| Repository confined to this record + `evidence/EXP-017/` | **PASS** | `git status --porcelain` → only `?? evidence/EXP-017/`; HEAD `16dff50` unchanged |

### Prohibited-action audit (T1)

- No login/Sign In/reauth/browser restart; session confirmed live.
- No Form/variable created, edited, renamed, deleted, Saved, Regenerated, or executed; no Form-variable lifecycle inspection.
- No Generate clicked; no Output selection changed; no hidden/off-screen control manipulated; no JavaScript/DOM/event dispatch used.
- No Unload/Regenerate Form/User Preference change; no SQL executed/applied.
- No credential value read/printed/exposed (username rendered as the current-user placeholder in this record).
- No non-`FX_` Mongoose artifact touched.

### Knowledge state (T1)

- "FormSync was already open with Script tab selected and exactly one Inc-checked `FX_FormVariableLab05` (Form, User, current user) row at preflight start" — **observed** (inherited session state from EXP-016-R2 cycle; recorded, not relied on as procedure).
- "In this FormSync instance, the Output=View radio is rendered off-screen (`left:-9000px`) and is not reachable by a visible click; only Save is visibly selectable" — **observed** (carried from EXP-016-R2 + re-confirmed in this snapshot; single instance, not generalized).
- "Visible/semantic divergence: accessibility snapshot reports View radio `[checked]` while the rendered screenshot shows the filled indicator on Save" — **observed** (unresolved interpretation; not investigated further this cycle).
- "Script form license checkbox visibly checked; Generate button enabled" — **observed**.

### Open questions / blockers

- **Preflight blocker candidate for T2:** whether Output=View can be selected through supported rendered UI in this instance. Snapshot indicates the View radio is off-screen (`left:-9000px`); if T2 confirms it cannot be visibly selected, the brief requires recording that negative result and stopping.
- Whether the checked-state divergence (snapshot View-checked vs screenshot Save-indicator) reflects the actual internal `rbScriptDisplay` state: unresolved; not probed (hidden-control manipulation prohibited).
- T2 next permitted action: FormSync is already open with the intended configuration context visible; per brief, select the intended Source configuration via the supported route, isolate exactly one verified row, then attempt View selection through visibly rendered controls only.

## T2 — AC-1/AC-2 visible Filter-state evidence (cycle 2, partially aborted)

**Completed before abort (read-only):** clicked the rendered **Filter** utility tab (tab now selected). Filter fields visibly rendered: **Filter Configuration combobox = `Source`**, **Configuration textbox = `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`**, **Scope Type combobox = `User`**, **User combobox = current user**. Screenshot `02-filter-tab-source-user-scope-config-visible.png` saved and inspected: it visibly proves the live config context (badge + config group + DEM + Save disabled), Filter tab selected, and the four filter fields above; the Custom Objects grid below shows exactly one Inc-checked row whose Object Name renders **truncated** (`FX_FormVariabl...`) and whose User/Group Name column is scrolled out of the grid viewport.

**Attempted and failed before abort:** making the target row's exact Name + User/Group Name **visibly** provable. The rendered grid truncates the Object Name column (`FX_FormVariabl...`); the full name exists only in the DOM (accessibility snapshot), not visibly. A grid element screenshot (`03-grid-viewport-rows-truncated.png`) was captured at device scale — it shows all six columns but still truncates the name. A column-widen attempt via the supported grid resizer handle was a Playwright no-op (start/end resolved to the same element); subsequent DOM-probing attempts (iframe contentDocument queries) returned nothing usable and were abandoned. **No Deselect All and no Inc-checkbox click were performed in T2.** The cycle then aborted during repeated probing.

**Mutation-persistence check (T3 snapshot):** the only Inc-checked row remains the `FX_FormVariableLab05` row (rowgroup `f3e2811`, checkbox `f3e2812` [checked]); all other rows Inc-unchecked. This inclusion state is **inherited from the EXP-016-R2 session** (it was already checked at EXP-017 T1 preflight); **no EXP-017 T2 inclusion/filter mutation persisted** — T2's only state change was selecting the Filter utility tab (a read-only view change).

## T3 — Read-only recovery audit (cycle 3)

**Current browser state (fresh snapshot, no clicks):** FormSync panel selected; **Filter utility tab selected**; Filter Configuration=`Source`, Configuration=`G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`, Scope Type=`User`, User combobox=current user; Custom Objects grid with exactly one Inc-checked row = `FX_FormVariableLab05` (Form, User); User/Group Name column present in the grid (all visible rows = current user) but the row-to-column pairing is only established via snapshot row-index alignment, not a single visible row crop.

**Surviving evidence (all four files inspected):**
- `00-preflight-formsync-live.png` (T1): live session + Script-tab state + one Inc-checked row; name truncated in image.
- `01-formsync-target-row-fxformvariablelab05-user-scope.png` (T1): same framing as `00`; adds nothing beyond `00` (identical 81,564-byte capture).
- `02-filter-tab-source-user-scope-config-visible.png` (T2): **decisive for AC-1/AC-2 filter state** — visibly proves Filter tab selected, Filter Configuration=Source, Configuration=`G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`, Scope Type=User, User=current user, live config context. Does NOT prove the Inc row's exact Name (truncated) or its User/Group Name pairing (column scrolled).
- `03-grid-viewport-rows-truncated.png` (T2): grid-only device-scale crop; proves all six column headers and one Inc-checked row, but the Object Name is still truncated (`FX_FormVariabl...`) and the row's User/Group Name cell is not aligned visibly with its name cell in a single readable row.
- Playwright snapshot YAMLs `evidence/playwright/page-2026-10-05T11-37-17-814Z.yml` and `page-2026-10-05T11-37-57-919Z.yml` (auto-saved during T2): contain the full gridcell `FX_FormVariableLab05` and the checked Inc checkbox (`f3e2812`) — accessibility-tree evidence, not visible rendering.

**Repository audit:** `git status --porcelain` → only `?? evidence/EXP-017/` + this record; HEAD `16dff50` unchanged.

**AC-1/AC-2 status after T3:** AC-1 (live session + intended config context) **proven** (`00`, `02`). AC-2 filter-state (Filter Configuration=Source, Scope Type=User, User field) **proven visibly** (`02`). **Remaining unproven visibly:** the exact Name `FX_FormVariableLab05` of the Inc-checked row rendered on screen (grid truncates it; only the accessibility snapshot carries it), and a single visible capture pairing that row's Name with its User/Group Name. The inclusion state itself persisted (inherited), but was never re-established through a T2 Deselect All + Inc sequence.

**Knowledge state (T3):** "Rendered FormSync Custom Objects grid truncates the Object Name column; the exact name is not visibly readable at default column width" — **observed**. "Playwright drag on the grid element cannot target the column-resizer handle (no-op)" — **observed** (tooling limitation, not a Mongoose finding). "No EXP-017 T2 mutation persisted; inclusion state is inherited" — **observed**.

**Open questions / blockers (T3):** visibly provable exact-Name evidence for the Inc row remains unestablished; per the T2 instruction's limit ("after one fresh snapshot and one corrected inspection, record the limitation and stop"), further column-resize attempts are deferred to the next cycle rather than retried here.

## T4 — Rendered-UI row-identity inspection (cycle 5): AC-2 row identity **BLOCKED**

**Preflight confirmation (one fresh snapshot, no state change):** Filter tab still selected; Filter Configuration=`Source`, Configuration textbox=`G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`, Scope Type=`User`, User combobox=current user; exactly one Inc-checked row (checkbox `f3e2812` [checked], rowgroup `f3e2811`, gridcell `FX_FormVariableLab05` / Form / User). No filter/include state was changed.

**Approved mechanism 1 — native tooltip on hover:** hovered the rendered truncated Name cell (`FX_FormVariabl...`), waited 2s, captured viewport screenshot `04-hover-name-cell-tooltip-check.png` and grid screenshot `05-grid-hover-tooltip-check.png`: **no tooltip rendered**. Corrected inspection: hovered the Inc checkbox cell of the same row (`06-hover-inc-cell-tooltip-check.png`) and the User/Group Name cell of the same row (`07-hover-usergroup-cell-tooltip-check.png`): **no tooltip rendered** in any capture; post-hover accessibility snapshots contain no tooltip node.

**Approved mechanism 2 — horizontal scroll (only if a horizontal scrollbar is already visibly rendered):** inspected the grid containers. `08-grid-container-scrollbar-check.png` (User/Group Name block) shows only a **vertical** scrollbar (right edge, up/down arrows); `09-grid-main-container-scrollbar-check.png` (main block) shows the Name column truncated at the block's right edge with **no horizontal scrollbar rendered**. Condition not met → no scroll performed.

**Result:** neither approved rendered mechanism exposes the complete `FX_FormVariableLab05` name visibly. **AC-2 row identity recorded as BLOCKED**; stopped without touching Script Output controls or Generate.

**Evidence (T4, all inspected):**
- `04-hover-name-cell-tooltip-check.png`: full viewport with pointer over the truncated Name cell of the row directly above the Inc-checked row's row band; visibly shows Filter state (Source/User/current user) and one Inc-checked row; **no tooltip**. Limitation: the hover landed on the adjacent (non-Inc) row band — corrected by `06`/`07`.
- `05-grid-hover-tooltip-check.png`: grid-only device crop, same no-tooltip state.
- `06-hover-inc-cell-tooltip-check.png`: grid crop with hover on the **Inc-checked row's** checkbox cell (row visibly Inc-checked, name `FX_FormVariabl...` truncated); **no tooltip**.
- `07-hover-usergroup-cell-tooltip-check.png`: grid crop with hover on the same row's User/Group Name cell (cell visibly `anton.ramos@3mworks.com.ph` in the same row band as the Inc-checked row); **no tooltip**. Proves same-row pairing Inc-checked ↔ truncated name ↔ User/Group Name = current user, visibly; still not the complete name.
- `08-grid-container-scrollbar-check.png`: User/Group Name block; proves only a vertical scrollbar exists there.
- `09-grid-main-container-scrollbar-check.png`: main grid block; proves Name column truncated at block edge with **no horizontal scrollbar** — the scroll mechanism's precondition is absent.

**Knowledge state (T4):** "FormSync Custom Objects grid cells expose no native hover tooltip for truncated values" — **observed**. "No horizontal scrollbar is rendered for the FormSync Custom Objects grid; only vertical scrollbars" — **observed**. "AC-2 exact-Name visibility is blocked in this instance via approved rendered mechanisms" — **observed negative result** (per brief, recorded and stopped).

**Blockers (T4):** AC-2 row identity (complete visible Name of the Inc-checked row) **blocked**; the objective's prerequisite "include exactly one FX_FormVariableLab05 row after visibly verifying Name" cannot be satisfied through supported rendered UI in this instance. Per the experiment brief, this negative result is recorded; Script-tab View selection and Generate were not attempted.
