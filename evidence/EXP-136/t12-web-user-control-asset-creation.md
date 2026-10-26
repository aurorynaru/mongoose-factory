# EXP-136 T12 - Web User Control Asset `FX_Inventory/index.html` (one creation, one asset commit, same-session readback)

Run R-20261026-062909-9GoC, cycle 15, task T12. Date 2026-10-26. Mode: LEARNING MODE. FX_-only scope. Editing scope User (`anton.ramos@3mworks.com.ph`).

## 1. Scope of this task

- One application mutation: create the Web User Control Asset `FX_Inventory/index.html` through Edit > Web User Control Assets > blue "+" > New > OK (once), then replace the generated Content with the committed HTML and commit it once through Edit Browser File > OK.
- One dialog-level Web Assets OK (see section 7). Not a Designer Form Save.
- No Form, component, script method, FX_ variable creation, Designer Save, Designer close or reopen, Portal reload, runtime open, Refresh activation, browser JavaScript, credential action or session recovery.
- Committed sources were read only. Nothing under `assets/` was written.
- T11 result preserved: `FX_vInventoryJson` (Global True, Persistent True) was not modified.

## 2. Source baseline (operator-approved; hashes operator-supplied, NOT worker-computed)

| File | Operator-approved SHA-256 | Read in T12 | Status |
| --- | --- | --- | --- |
| `assets/FX_Inventory/index.html` (71 lines) at commit `13ac79d` | `e8f162c5b35a07b6f277423e6c0938ba4ef464d69c20cd8ffc87c02537972fb6` | Read in full at the start of T12 | Current, amended. Line 42 emits `"In Stock"` for healthy rows. Refresh button `FX_InvRefresh`, bridge `WSForm.invoke("FX_LoadInventoryFromIDO", …)` (line 61) and `WSForm.getVarValue("FX_vInventoryJson", …)` (line 62) present. |
| `assets/FX_Inventory/FX_InventoryDashboard.cs.txt` | `3a21099492d1e4565f18df4a58033497101681838654ad3fc7866a61658bfc0f` (unchanged) | Not used in T12 (Form Script is a later stage) | Unchanged. |
| Superseded HTML (commit `d4b99db`) | `53baed0a…cd21d` | - | Historical. Emitted `OK` for healthy stock. Superseded by the operator-approved amendment. |

The worker did not recompute the hashes. The HTML content that was entered (section 5) was the content read from the file in T12. Its line-42 label is `In Stock`.

## 3. Designer identity and gates (observed)

- Tabs listed (read). Tab 0 = Web Client portal. Tab 1 = Designer, `designer/Default.aspx`, page title `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`. Tab 1 selected after the list. No new Designer was launched.
- Snapshot (fresh, before action): footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`; no Form loaded; Properties Form tab empty; Save **enabled** (inherited pending state from T11, not clicked, not discarded); Undo and Redo disabled; console `2 errors, 0 warnings`; no session modal, sign-in text, server-event Error dialog or blocking prompt.
- Pre-create collision check (read-only): the Web Assets tree (dialog left pane label "Web Assets") listed roots `$app`, `FX_Bridge`, `FX_Login`, `mongoose`, `sohoComponents`, `sohoxi`. **No `FX_Inventory` root before creation.** Positive controls visible: `FX_Bridge`, `FX_Login`. Evidence: `evidence/EXP-136/t12-web-user-control-assets-dialog-precreate-root-absence.png`. Note: the dialog's window title reads "Global Objects" while the left pane is labelled "Web Assets"; the identity was taken from the left-pane label and the tree contents.

## 4. The creation (one attempt; not repeated)

| Step | Action | Result (observed) |
| --- | --- | --- |
| A1 | Click Edit | Menu: Variable, Web User Control Assets, Revert Global Object Definition. |
| A2 | Click Web User Control Assets | Web Assets dialog opened (see section 3). |
| A3 | Click blue "+" (`e393`, first of three toolbar icons) | New dialog with `Name:` textbox only (OK, Cancel). |
| A4 | Typed `FX_Inventory/index.html` in Name (no Enter) | Pre-commit screenshot `t12-new-web-asset-name-typed-precommit.png` shows the Name field reading `FX_Inventory/index.html`. |
| A5 | Click New **OK** (once) | New dialog closed. **Creation attempt: 1.** The tree then showed an `FX_Inventory` root folder (collapsed) and, after expansion (ArrowRight on the selected folder row), one child `index.html`. |
| A6 | Click `index.html` (read-only selection) | Properties: Name `FX_Inventory/index.html`; Content `text/html` with "Open Edit Property Dialog"; Version `User version for user anton.ramos@3mworks.com.ph`. Evidence: `t12-web-assets-dialog-after-new-ok-folder-visible.png` (folder row; the child was checked afterwards by find). |
| A7 | Click Content "Open Edit Property Dialog" (once) | "Edit Browser File" dialog: File `FX_Inventory/index.html` (read-only field), Content Type `text/html`, editor holding the **generated template** (DOCTYPE, `<meta http-equiv="X-UA-Compatible" content="IE=9" />`, comments, `../$app/scripts/UserControl.js`, empty body). Evidence: `t12-edit-browser-file-generated-template-precommit.png`. |
| A8 | Replaced the entire editor content with the committed HTML in one fill action | Pre-commit accessibility readback (section 5) and screenshot `t12-edit-browser-file-html-entered-precommit.png` (tail of the content, `</html>` last). |
| A9 | Click Edit Browser File **OK** (once) | Dialog closed. No error dialog. **Asset-level commit: 1.** |

Creation attempts: **1**. Asset commits (Edit Browser File OK): **1**. Retries: **0**. Duplicate `FX_Inventory` or `index.html` identities: **none observed** (the tree showed one `FX_Inventory` folder and one `index.html` child; no second `index.html`).

## 5. Source readback and comparison

| Check | Result |
| --- | --- |
| Pre-commit editor value (accessibility text, read-only, same dialog) | Token-level content matches the committed HTML: DOCTYPE; `<html>`; `<head>`; `<meta charset="utf-8">`; `<title>FX Inventory Dashboard</title>`; `UserControl.js` script (`../$app/scripts/UserControl.js`); inline `<style>` with 6 rules; `<body>`; `<h3>`; `FX_InvRefresh` button; `FX_InvStatus`; four `FX_InvCard` blocks with IDs; table with the 7 headers; `FX_InvTableBody`; inline IIFE with `render`, `load`, `WSForm.invoke("FX_LoadInventoryFromIDO", …)`, `WSForm.getVarValue("FX_vInventoryJson", …)`, the `In Stock` branch (`… ? "In Stock"`) and the click listener; closing `</script></body></html>`. |
| Saved readback (same session, read-only reopen of Content after the asset OK) | Accessibility text shows the same token sequence. The generated template comments (`Must set compatibility…`, `include the mongoose UserControl.js…`) are **absent**, so the replacement persisted in the editor's stored value. Screenshot: `t12-web-user-control-asset-saved-readback-reopen.png` (File `FX_Inventory/index.html`, Content Type `text/html`, tail of the saved content). |
| Full-content equality | **Not established byte-for-byte.** The accessibility text collapses line breaks and indentation into single spaces, so line structure and leading whitespace were not compared character by character. The entered text is the committed file's content reproduced without a trailing newline (the editor is not known to preserve a final newline; the committed file's final-newline state was not inspected). The file is not CRLF-checked. |
| SHA-256 of the saved asset | **Not computed** (no export or file access; the brief forbids shell or internal-store workarounds). |

Conclusion for AC-4: identity visible (File and Content Type) and native commit reported OK with no error. Token-level content readback matches. **Exact full-content equality is not established.** AC-4 is therefore left **pending** for exact equality (the brief's explicit rule for partial readback).

## 6. Post-commit state (observed)

- After the asset OK and the readback Cancel, the Web Assets tree shows `FX_Inventory` > `index.html` (Properties Name `FX_Inventory/index.html`, Content `text/html`, Version `User version for user anton.ramos@3mworks.com.ph`) (`t12` readback; `find` at the end).
- Designer: no Form loaded; scope footer unchanged; **Save still enabled** (pending state; not clicked; this now reflects the T11 variable and the T12 asset, cause not separated); no dialog open at the end (`find` for `dialog "` returned only the Designer panels).
- Console: `2 errors, 0 warnings` on the Designer tab at the last snapshot.

## 7. Dialog-level commit (disclosed deviation)

- The Web Assets parent dialog was closed with its **OK** (once), not Cancel, so that the asset edit committed in step A9 would not be discarded. This follows the EXP-132 T6 precedent (parent OK after an asset commit). It is a dialog-level commit, not an asset creation and not a Save. Coordinator confirmation requested.
- The read-only Content reopen was closed with Cancel (once).

## 8. Browser and mutation ledger (T12)

- Browser calls: tab list 1; tab select 1 (tab 1); untargeted snapshot 1 (initial Designer state); targeted snapshots about 9; finds about 11; clicks 11 (Edit; Web User Control Assets; blue "+"; New OK; FX_Inventory row; index.html row; Content Open; Content Open (readback); readback Cancel; Edit Browser File OK; Web Assets OK); keypress 1 (ArrowRight, tree expansion); type 2 (Name; the full HTML content); screenshots 6 (`t12-web-user-control-assets-dialog-precreate-root-absence.png`; `t12-new-web-asset-name-typed-precommit.png`; `t12-web-assets-dialog-after-new-ok-folder-visible.png`; `t12-edit-browser-file-generated-template-precommit.png`; `t12-edit-browser-file-html-entered-precommit.png`; `t12-web-user-control-asset-saved-readback-reopen.png`).
- Mutations: **1 asset creation** (`FX_Inventory/index.html`; the ordinary workflow creates the folder node `FX_Inventory` and the file `index.html` as one asset identity; no separate folder operation); **1 asset commit** (Edit Browser File OK); **1 dialog-level Web Assets OK**. Designer Form Saves **0**. Form creations **0**. Variable creations **0** (T11 `FX_vInventoryJson` untouched). Component or script actions **0**. Portal reloads **0**. Refresh activations **0**. Designer close or reopen **0**. Other assets touched **0** (`FX_Bridge`, `FX_Login`, `$app`, `UserControl.js` not opened).
- Recovery actions: **0** (no ref error, no retry).
- Browser JavaScript: **0**. Credentials typed or read: **0**. Prompts accepted: **0**. Session recovery: **0**.

## 9. Warnings and unexplained items (recorded; no cause invented)

- The Designer Save remains enabled after T11 and T12. The cause was not separated between the variable and the asset changes.
- The Web Assets dialog window title reads "Global Objects" while its pane is labelled "Web Assets". Not explained.
- The `FX_Inventory` folder was collapsed after creation; the child `index.html` was visible only after expansion. Not explained further.
- Designer console counter stayed `2 errors, 0 warnings`.

## 10. Acceptance status after T12

| AC | Status | Reason |
| --- | --- | --- |
| AC-1 | operator-accepted (carried); absence re-observed for `FX_Inventory` root and identity re-observed | Section 3. |
| AC-2 | operator-verified hashes (carried); HTML re-read in T12 | Section 2; hashes not recomputed. |
| AC-3 | supported at same-session level (T11) | Unchanged by T12. Persistence after Designer Save is not verified. |
| AC-4 | **pending** | Identity visible; native OK reported with no error; token-level readback matches. Exact full-content equality not established (section 5). |
| AC-5 to AC-8 | not evaluated | No Form, component, script or Designer Save in T12. |
| AC-9 | not evaluated (partial prerequisites) | Requires the later fresh-Designer readback. |
| AC-10 to AC-13 | not evaluated | Later stages. |

## 11. Next permitted action (coordinator decision)

- Form creation `FX_InventoryDashboard` requires a separate coordinator decision (not authorized by T12).
- The Designer has pending changes (Save enabled). No Save until the authorized Save stage.
- Designer state at stop: Web Assets and other dialogs closed; no Form loaded; scope `User / anton.ramos@3mworks.com.ph`; Save enabled (pending, not clicked).
