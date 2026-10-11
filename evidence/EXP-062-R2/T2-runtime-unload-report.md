# EXP-062-R2 — T2 Web Client runtime unload report

Run `R-20261011-233114-6TXk`, experiment EXP-062-R2, cycle 1, task **T2** (Web Client runtime unload only).
Worker session `1a1726ce-7754-4c7b-81f9-602aedcce8ec`; task_message_id `738473a6-d8b7-41e6-9d32-2c1b6d355358`.
Date 2026-10-11. Editing scope **User**. Target Form `FX_Items`, ScopeName `anton.ramos@3mworks.com.ph`.
Prior report: `evidence/EXP-062-R2/T1-preflight-report.md`.

## 1. Outcome

- **Preference:** `Unload IDO Metadata With Forms` = **checked** before the unload (T1 readback, `t1-14`) and **checked** after it (T2 readback, `t2-08`). Unchanged. Dialog closed with `Close Window` both times, never OK.
- **Runtime tabs:** both clean `FX_Items` runtime Form tabs closed, each verified clean (Save disabled, three records visible) before close. No other runtime Form touched. No prompt on either close.
- **Web Client unload:** exactly **one** invocation of `Unload All Global Form Objects` (Form > Definition submenu). Silent completion: menu closed, no dialog, no prompt, no visible response.
- **Designer:** untouched in T2. `FX_Items` remains open, User scope, Save disabled. No Designer close, no Designer unload.
- **Not done (by design):** no Designer close, no Designer `Unload All Global Form Objects`, no reopen, no FX_Picture binding check, no Form change, no Save, no runtime action.
- **Stopped for coordinator review.** The next permitted step is the Designer close and single Designer unload (T3, not started).

## 2. Runtime-tab inventory (before and after)

| Stage | Tab | Identity (visible) | Dirty state | Action |
| --- | --- | --- | --- | --- |
| Before (T2 start) | `Sql Tables` | IDO panel, not a runtime Form | n/a | none |
| Before | `Sql Columns` | SQL panel, not a runtime Form | n/a | none |
| Before | `FX_Items` (middle) | Runtime Form, record 1 `dumbbell`, `(Object 1 of 3)` | Clean (Save disabled, `t2-01`) | **Closed** (`t2-02`, no prompt) |
| Before | `Property Classes` | Panel, not a runtime Form | n/a | none |
| Before | `IDOs` | IDO panel, not a runtime Form | n/a | none |
| Before | `FX_Items` (right-most, active) | Runtime Form, records `dumbbell`, `eggs`, `guitar` | Clean (Save disabled, `t2-03`) | **Closed** (`t2-04`, no prompt) |
| After | `Sql Tables`, `Sql Columns`, `Property Classes`, `IDOs` | unchanged | n/a | none |
| After | (no runtime `FX_Items` tab) | — | — | — |

Active tab after the closes: `IDOs` (IDO panel for `FX_Items`; `Locked By` shows the operator; not touched).

Identity basis: visible Form content and status (`Object 1 of 3`), tab label `FX_Items`, and the toolbar Save state. Form ID was not read.

## 3. Unload command label (exact, observed)

Web Client `Form` menu, with no runtime Form active (see §5 caveat), `Definition` submenu, as observed in `t2-05`:

- `Designer`
- `Runtime Builder...`
- `Unload All Global Form Objects` ← **the single global-form-object unload item**
- `Site Developer Impersonation`

Exact label recorded: **`Unload All Global Form Objects`**. A find for `/unload|global/i` returned only this one item, so it is unambiguous.

Note: EXP-005-R2 also named `Unload Global Form Objects`. That label was **not** present in this menu.

## 4. Action audit (T2)

| Category | Count | Notes |
| --- | --- | --- |
| **Web Client unload invoked** | **1** | `Unload All Global Form Objects`, once |
| Designer unload | 0 | Not in T2 scope |
| Runtime Form close | 2 | Both clean FX_Items tabs, one at a time |
| Designer Save | 0 | |
| Designer Form close / reopen | 0 / 0 | |
| Component, string, handler, binding, Caption, or Primary change | 0 | |
| Preference change | 0 | Read twice, dialog closed with Close Window |
| Business record edit or runtime button activation | 0 | |
| IDO checkout, check-in, or undo | 0 | |
| Navigation, reload, reauthentication, restart | 0 | |
| Browser JavaScript, console, or network inspection | 0 | |
| Chrome tab list / select | 1 / 3 | Select Web Client (1), Designer (0), Web Client (1) |
| In-frame tab selection (middle FX_Items) | 1 | Verification before close |
| Menu opens | 3 | Web Client Form (×1), Definition submenu (×1), View (×1) |
| Menu items clicked | 3 | Definition (submenu open), `Unload All Global Form Objects`, `User Preferences...` |
| Dialog opens / Close Window | 1 / 1 | User Preferences read |
| Screenshots | 9 | `t2-01` … `t2-09` |
| Find calls | 12 | Read-only |
| Escape presses | 0 | |

## 5. Caveats and deviations (disclosed)

1. **Pre-unload preference confirmation.** The brief asked to confirm the preference before the unload. The check before the unload relied on the T1 readback (`t1-14`, same session, no preference action since). I did not re-open the dialog before the unload in T2. The post-unload re-read (`t2-08`) is in this task.
2. **Context of the menu label.** The brief describes `runtime Form > Definition`. Both runtime Forms were closed before the unload (as the brief requires for the clean-runtime precondition), so the Form menu was observed with the `IDOs` panel active, not a runtime Form. The Form menu then showed only `Export to File`, `Definition`, and `Sign Out`. The `Definition` submenu was the same Web Client Form > Definition path and contained the single unload item. The label was not compared with a runtime-Form-active menu (the T1 Definition submenu was never expanded). Unresolved only if the coordinator requires the runtime-active menu specifically.
3. **Unload completion.** Silent. No visible response (no toast, dialog, or error) was observed in `t2-06`. Completion is not verified beyond that. The effect is not verifiable from the UI without the T3 binding check.
4. **Designer tab selected for a read.** The Designer tab was selected once to confirm its Save state and identity. No action was taken there. It was then re-selected Web Client.
5. **Carried-over T1 locator error.** T1's invalid regex (`(?i)preferen`) was rejected without effect and was corrected to `/preferen/i`. It did not affect any T2 observation.

## 6. Current state (observed at end of T2)

- **Web Client:** tab `Mongoose` (`favoriteContext=IdoCollections`) selected. Frame shows the `IDOs` panel for `FX_Items` (read-only). No dialog open. No menu open. Runtime `FX_Items` tabs: **none open**. Preference `Unload IDO Metadata With Forms` = checked.
- **Designer:** tab 0 `FX_Items`, User scope footer, Save disabled, Caption `FX_Refresh` (unchanged), `FX_RefreshButton` selected. Screenshot `t2-07`. Not reselected at end (Web Client is the active tab).
- **Business records:** not touched. The three records were visible only in the closed runtime Forms before closing.
- **Checkout:** `FX_Items` IDO remains checked out by the operator (`Locked By` `anton.ramos@3m…`). Not changed.

## 7. Evidence written (T2)

| File | What it shows | What it does not prove |
| --- | --- | --- |
| `t2-01-pre-close-middle-fx_items-runtime-tab-selected.png` | Middle `FX_Items` runtime tab selected; three records (`Object 1 of 3`); Save icon greyed | Form ID; database state |
| `t2-02-after-middle-fx_items-runtime-tab-close.png` | Middle tab gone; no prompt; right-most `FX_Items` still open | Persistence |
| `t2-03-pre-close-remaining-fx_items-runtime-tab-selected.png` | Remaining runtime tab, three records, Save disabled (readback) | — |
| `t2-04-after-both-fx_items-runtime-tabs-closed.png` | No runtime `FX_Items` tab left; IDO panel active | — |
| `t2-05-web-client-form-definition-submenu-unload-label-before-click.png` | Definition submenu: Designer, Runtime Builder…, `Unload All Global Form Objects`, Site Developer Impersonation | Runtime-Form-active context (see §5.2) |
| `t2-06-immediate-after-web-client-unload-click-settled.png` | Menu closed; no dialog; silent completion | Actual cache effect |
| `t2-07-designer-state-readonly-after-web-client-unload.png` | Designer `FX_Items` User scope, Save disabled, Caption `FX_Refresh` | Designer-side metadata refresh (not triggered) |
| `t2-08-user-preferences-unload-ido-metadata-still-checked-post-unload.png` | Preference checked after unload | — |
| `t2-09-web-client-final-state-after-preferences-close.png` | Dialog closed; IDOs panel; no runtime FX_Items tab | — |

Tool-generated files (not requested by the worker) under `evidence/playwright/`: accessibility snapshots `page-2026-10-11T15-41-03-339Z.yml`, `…15-41-11-428Z.yml`, `…15-41-23-315Z.yml`, `…15-41-32-439Z.yml`, `…15-41-36-592Z.yml`, `…15-41-47-112Z.yml`, `…15-42-07-239Z.yml`, `…15-42-11-277Z.yml`, `…15-42-16-918Z.yml`; console log `console-2026-10-11T15-40-54-852Z.log` (from the tab list). Gitignore status not verified; operator git review is authoritative.

## 8. Worker-written file inventory (T2)

- `evidence/EXP-062-R2/T2-runtime-unload-report.md` (this file; created)
- `experiments/EXP-062-R2-hello-world-part-4-section-4-picture-import-ui.md` (updated: T2 status and section)
- PNG screenshots `evidence/EXP-062-R2/t2-01` … `t2-09` (created at worker request)

No other repository file was written. AGENTS.md, tutorial sources, the EXP-062 record and evidence, and prior experiment records were not modified.

## 9. Knowledge state (T2)

| Finding | State |
| --- | --- |
| `Unload IDO Metadata With Forms` checked before and after the unload (read-only) | observed |
| Two clean `FX_Items` runtime tabs closed one at a time, no prompt | observed |
| Web Client Form > Definition shows exactly one unload item, `Unload All Global Form Objects` | observed (one menu context, see §5.2) |
| One Web Client `Unload All Global Form Objects` invoked; silent completion | observed (one invocation; effect not verified) |
| Designer `FX_Items` still User scope, clean, Save disabled after the Web Client unload | observed |
| Effect of the Web Client unload on FX_Picture binding availability | **unresolved**: not checked in T2 (the binding check is in the Designer step) |
| Cache, database, or runtime image-import behavior | **not claimed**; out of scope |
| Replay status | not claimed; nothing replay_verified |

## 10. Next permitted step (not performed)

Per the T2 instruction, stop for coordinator review. The next authorized step (T3) is the Designer clean-close of `FX_Items`, one Designer `Unload All Global Form Objects`, reopen of the same User-scoped Form, and the FX_Picture binding check without committing a binding. If FX_Picture is still absent after that, stop blocked before any Form change.
