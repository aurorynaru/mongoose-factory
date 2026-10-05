# EXP-016 — T2 Read-Only Reconciliation Note (2026-10-04)

Task: T2 reconciliation only (read-only). No saved-definition investigation performed this cycle. No Mongoose artifact mutated.

## Live browser inspected first (this cycle)

- Tab 0: `Logout Successful` (`mingle-portal.../session/slo/signoutsuccess`) — external/environmental artifact, not a factory action.
- Tab 1 (current): live Mongoose Web Client, URL `.../c51080bc-...?favoriteContext=FX_FormVariableLab05&LogicalId=lid://infor.mongoose.mongoose`.
- Web Client UI shell live: user badge + config group `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` present; DEM badge present.
- Form tab strip: `FX_FormVariableLab05` tab **selected**; tabpanel `FX_FormVariableLab05` present → target Form **open**.
- Toolbar: **Save disabled** (also New/Delete/Refresh/Filter in Place/Get More Rows/System Notes/Documents/Export To Excel disabled) → Form **clean** (no unsaved change pending).
- Console: 0 errors, 9 warnings.
- Note: the `Edit` menu button was left in an active/open state from the prior cycle; opening a menu is not a mutation and no menu item was activated.

## Exact visible facts established by each relevant artifact

| Fact | Established by | Value |
|---|---|---|
| Web Client session live / server-backed | evidence `00` (Select Form dialog open) + `08` (Select Form Name filter renders exactly one row) + live browser this cycle (badge + config group + open form) | **LIVE** |
| Designer editing scope = User | evidence `09` (Identify Your Editing Scope dialog: `Scope: User`) | **User** |
| Exactly one FX_FormVariableLab05 | evidence `08` (Select Form filter `FX_FormVariableLab05` → exactly one row, Caption + Name both `FX_FormVariableLab05`) | **exactly one** |
| Target Name | evidence `08` Name column; live URL `favoriteContext=FX_FormVariableLab05` | `FX_FormVariableLab05` |
| Target ScopeType | evidence `09` (`Scope: User`) | `User` |
| Target ScopeName | evidence `09` (`User:` field) | `<username>` (redacted in Markdown; see credential-exposure note below) |
| Target currently open + clean/read-only | live browser this cycle (tab selected + tabpanel present + Save disabled) | **open, clean** |
| Login/session-establishment without credential exposure | record Session-confirmation section; no credential value read/printed/logged/screenshotted | **confirmed live, not re-established; no credential exposed** |

## Credential-exposure note (for reviewer)

- The Markdown record redacts ScopeName as `<username>` (correct).
- Evidence screenshot `09-designer-scope-dialog-user.png` visibly shows the editing-scope **username** (`anton.ramos@3mworks.com.ph`). This is the user's own editing-scope identifier shown in the Designer scope dialog, **not** a password/credential value; the brief prohibits exposing credential values, and a username in a scope dialog is not a credential. Flagged for transparency; no action taken (read-only).

## Controlled-action audit (T2 reconciliation)

- No login / Sign In-OK / reauthentication / logout / browser restart / session replacement performed by the factory this cycle.
- No reload / re-navigation / close-reopen of the target; no Form opened/created this cycle (already open from prior cycle).
- No Form or variable created / edited / deleted / renamed; no Form property edited.
- No Save / Save As / Regenerate / second save mechanism.
- No Form executed / previewed; no runtime variable testing.
- `Unload All Global Form Objects` NOT invoked; no ClearCache / metadata unload / cache-clearing; no User Preferences opened/changed/saved; no `Unload IDO Metadata With Forms` change.
- No direct SQL / database access; no undocumented APIs / reverse-engineered payloads / Ext internal stores / network request bodies used as evidence; no Details > Variables used as saved-definition evidence.
- No existing `FX_` or non-`FX_` artifact modified.
- **AC-5 clean.**

## Repository / worktree baseline (T2 reconciliation)

- Branch `exp/EXP-016`; HEAD `6fb86ef` (`harness: context/briefs update`) — unchanged.
- `git status --porcelain`: `?? evidence/EXP-016/` and `?? experiments/EXP-016-discover-supported-saved-form-variable-metadata-re.md` only.
- Experiment-attributable files: the EXP-016 record + `evidence/EXP-016/*`. Nothing outside these paths changed.
- **AC-6 clean.**

## Evidence files present under evidence/EXP-016/ (with real byte sizes)

- `00-preflight-initial-webclient-select-form.png` (59,404 B)
- `00-t1-preflight-tab0-logout-successful.png` (655,231 B)
- `01-t1-preflight-tab1-signin-interstitial.png` (653,983 B)
- `02-t1-signin-attempt-federation-hub-error.png` (682,429 B)
- `03-t1-portal-root-redirects-to-signin-oidc.png` (653,983 B)
- `04-t1-session-established-portal-live.png` (140,347 B)
- `05-t1-mongoose-tab-webclient-signin-dialog.png` (14,525 B)
- `06-t1-webclient-live-after-signin-ok.png` (27,679 B)
- `08-select-form-exactly-one-fxformvariablelab05.png` (11,598 B)
- `09-designer-scope-dialog-user.png` (6,904 B)
- `11-form-open-fxformvariablelab05.png` (30,032 B)
- `12-t2-read-only-reconciliation.md` (this file)

## AC judgments supported by this reconciliation

- **AC-1 (live session + User scope before inspection, no credential exposure):** SUPPORTED by evidence `00`, `08`, `09` + live browser this cycle.
- **AC-2 (exactly one FX_FormVariableLab05; Name/ScopeType/ScopeName):** SUPPORTED by evidence `08` (Name) + `09` (ScopeType/ScopeName) + live URL `favoriteContext=FX_FormVariableLab05`.
- **AC-5 (read-only controlled-action audit):** SUPPORTED (audit above).
- **AC-6 (repository/worktree audit):** SUPPORTED (git audit above).
