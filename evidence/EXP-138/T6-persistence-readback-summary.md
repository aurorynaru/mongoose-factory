# EXP-138 T6 - Designer close/reopen persistence readback (AC-5), no mutation, 2026-10-26

Scope of T6: one ordinary close of the clean FX_LoginPortal Designer Form tab, one reopen from the Form menu's recent list, a read-only Form Script readback (all 43 lines), Compile Result display, one Cancel, and a clean-state check. **Not performed:** any fill, Script Editor OK, Designer Save, portal reload, runtime open, Sign In, or change to any other object.

## Preconditions (before the close)

Tab list (read-only) first: tab 0 = Web Client (FX_LoginUsers), tab 1 = Designer. Tab 1 selected successfully; fresh snapshot; `t6-02` screenshot.

| Precondition | Observed |
|---|---|
| Active Form | FX_LoginPortal (Properties Name = FX_LoginPortal; tab selected) |
| Version | `User version for user ...` |
| Editing scope | Footer `[ ScopeType: User / ScopeName: ... ]`; the account is anton.ramos@3mworks.com.ph per T1, T4 and T5 records |
| Script Language | Visual C# |
| Save | Disabled (`[disabled]` in snapshot; greyed icon in `t6-02`) |
| Undo / Redo | Disabled |
| Dialog | None (the Form menu was open once and was dismissed by a second click on Form before the close; `t6-02` shows no menu) |

Result: all preconditions matched.

## Close

- Route: the FX_LoginPortal Designer tab's own close button (`closable FX_LoginPortal`, ref `e253`), one click. The Form menu had no direct Close item in its list (Definition submenu, Sign Out, recent list), so the tab close was used as the brief requires. The browser tab and the Web Client tab were not touched.
- Result: no unsaved-change prompt appeared. The FX_LoginPortal tab disappeared. The Designer's active Form became **FX_LoginUsers** (its tab was already open; it was not edited, saved or closed). `t6-03` shows FX_LoginUsers with Save and Undo greyed and footer User scope; the tabs are IDOs, FX_LoginUsers.
- Confirmed by the find for "closable": only IDOs and FX_LoginUsers tabs remained.

## Reopen

- Route: Form menu (ref `e3`) > recent-list item `FX_LoginPortal` (ref `e640`, a menuitem in the fresh find). One click. This is the route used in T1 (recent list).
- Result (`t6-04`): tab `FX_LoginPortal` selected and active; Properties Name FX_LoginPortal; Version `User version for user ...`; Device Type Default; Form Type Normal; Is Master True; Script Language **Visual C#**; footer `[ ScopeType: User / ScopeName: ... ]`; Save and Undo greyed. No dialog.
- Identity, User version, scope and Visual C# therefore re-verified after reopen.

## Form Script readback (read-only)

- Route: Edit (ref `e5`) > Form Script (ref `e1573`, one click). Script Editor dialog (ref `e1613`). Editor not edited.
- Lines 1–34: accessibility snapshot `evidence/EXP-138/t6-05-script-editor-readonly-accessibility-after-reopen.yml`; visual `t6-08` (lines 1–33 plus 33 blank).
- Lines 35–43: after one Ctrl+End (caret only), accessibility snapshot `evidence/EXP-138/t6-06-script-editor-readonly-accessibility-lines-35-43-after-ctrl-end.yml`; visual `t6-07` (lines 12–43).
- Compared line by line with `assets/FX_Login/FX_LoginPortal.flat.cs.txt` (43 lines):
  - Lines 1–5: `using System;`, `using System.Security.Cryptography;`, `using System.Text;`, `using Mongoose.IDO.Protocol;`, `using Mongoose.Scripting;`. Match.
  - Lines 7–10: namespace `Mongoose.FormScripts`, `{`, `public class FX_LoginPortal : FormScript`, `{`. Match.
  - Line 11: `public string FX_ProcessLogin(string username, string password) {`. Match.
  - Lines 12–13: `string code = "error";`, `try {`. Match.
  - Lines 14–15: `missing` and `empty` branches. Match.
  - Line 16–17: `else {`, `string filter = "FX_Username = '" + username.Trim().Replace("'", "''") + "'";`. Match.
  - Line 18: `string props = "FX_Username, FX_PasswordHash";` (the Amendment A1 variable form). Match.
  - Line 19: `var response = IDOClient.LoadCollection("FX_LoginUsers", props, filter, "", 1);`. Match.
  - Lines 20–21: `unknown` branch and `else {`. Match.
  - Lines 22–23: `string stored = response.Items[0].PropertyValues[1].Value;`, `string supplied = FX_Sha256Hex(password);`. Match.
  - Line 24: `bool match = stored != null && string.Equals(stored.Trim(), supplied, StringComparison.OrdinalIgnoreCase);`. Match.
  - Line 25: `code = match ? "ok" : "invalid";`. Match.
  - Lines 26–32: closing braces, `catch (Exception) { code = "error"; }`, `ThisForm.Variables("FX_vLoginResult").Value = code;`, `return code;`, `}`. Match.
  - Line 34: `private static string FX_Sha256Hex(string value) {`; lines 35–43: `using (SHA256 sha = SHA256.Create()) {`, `byte[] bytes = sha.ComputeHash(Encoding.UTF8.GetBytes(value));`, `StringBuilder hex = new StringBuilder(64);`, `foreach (byte b in bytes) { hex.Append(b.ToString("x2")); }`, `return hex.ToString();`, then closing braces. Match.
- Obsolete content: none. No `received` default, no EXP-133 method body, no leftover T2 text, no line 44.
- Indentation: visual `t6-07` and `t6-08` show every line flush-left, the same as T4. Accessibility text does not reliably show leading whitespace, so the visual check is the indentation evidence.
- Caret: Ctrl+End and Ctrl+Home were pressed inside the read-only dialog to reach lines 35–43 and the top. These moved the caret only. No text was typed.

## Compile Result (as displayed, no independent compile)

- Expanded the Compile Result panel once (ref `e1833`). Output tab selected and **blank** (`t6-09`).
- Errors tab clicked once (ref `e1958`): column headers `Line`, `Column`, `Error` and **no rows** (`t6-10`).
- Displayed result only. It is not evidence of successful compilation. No control compile was run.

## Cancel and clean state

- Cancel clicked once (ref `e1840`). Not OK. No edit.
- After Cancel (`t6-11`): Script Editor closed (find for "Script Editor" returned no matches); Save `[disabled]`; Undo and Redo disabled; FX_LoginPortal active, User version, Visual C#, User scope footer; no dialog.

## Interpretation for AC-5 and the limits of this route

- **Observed:** after an ordinary close of the FX_LoginPortal Designer tab and a reopen from the recent list, the Form Script displayed in the Designer matches the Amendment A1 flat source on all 43 lines, with the six result codes, the `FX_LoginUsers` lookup, the SHA-256 helper and the `FX_vLoginResult` assignment. Compile Result display: blank Output, Errors headers only.
- **Weak persistence boundary (recorded as required):** this is an ordinary close and reopen within the same browser and Designer session. The browser and the Designer web application may hold client-side or server-side caches of the Form definition. The UI cannot show whether the reopen re-read the stored definition from the database rather than a cache. Proof of server-side persistence would need a fresh session or an independent reload, which were not in T6. The result therefore supports AC-5 only as far as an ordinary close/reopen can.
- The reopened Form Script equals the T4 post-OK readback and the T5 Save state, so no change was introduced by the close or reopen.
- The reopen does not clear the T3 history: the failed T3 Save, and whether it left partial server-side rows, remain **unresolved**. The successful T5 Save notice does not establish whether partial rows were replaced.

## Mutation and action ledger (T6)

- Designer Save: 0. Form Script fill: 0. Script Editor OK: 0. Script Editor Cancel: 1 (read-only reopen).
- Form close: **1** (FX_LoginPortal tab close, no prompt). Form reopen: **1** (recent list).
- Script Editor opens: 1 (read-only). Compile Result expand: 1. Errors tab click: 1. Form menu opens: 2 (one open, one dismissal toggle). Edit menu opens: 1. Form Script menu item click: 1.
- Keyboard: Ctrl+End (1), Ctrl+Home (1); caret only.
- Portal reload: 0. Runtime open: 0. Sign In: 0. Runtime Save: 0. Other Forms closed, opened or saved: 0 (FX_LoginUsers became active after the close and was not edited).
- Variables, components, Captions, events, layout: 0 changed.
- FX_LoginUsers rows, definition, IDO or Form: 0 changed. FX_Login assets: 0 changed. FX_vLoginResult definition: 0 changed.
- Browser JavaScript authored by the worker: 0. Credentials typed or read: 0. Session recovery: 0.
- Recovery episodes (ref errors): 0. Stale-ref retries: 0.

## Evidence files (T6, repo-relative)

- `evidence/EXP-138/T6-persistence-readback-summary.md` (this file)
- `evidence/EXP-138/t6-01-form-menu-open-before-close-readonly.png` (Form menu open; read-only inspection of the menu)
- `evidence/EXP-138/t6-02-pre-close-gate-form-menu-dismissed-fx-loginportal-tab.png`
- `evidence/EXP-138/t6-03-after-fx-loginportal-tab-close-state.png`
- `evidence/EXP-138/t6-04-after-reopen-from-recent-list-fx-loginportal-user-visual-csharp.png`
- `evidence/EXP-138/t6-05-script-editor-readonly-accessibility-after-reopen.yml` (accessibility snapshot, lines 1–34)
- `evidence/EXP-138/t6-06-script-editor-readonly-accessibility-lines-35-43-after-ctrl-end.yml` (accessibility snapshot, lines 35–43)
- `evidence/EXP-138/t6-07-script-editor-readonly-after-reopen-bottom-lines-12-43.png`
- `evidence/EXP-138/t6-08-script-editor-readonly-after-reopen-top-lines-1-11.png` (shows lines 1–33; file name kept as written)
- `evidence/EXP-138/t6-09-compile-result-expanded-after-reopen-readonly.png`
- `evidence/EXP-138/t6-10-compile-result-errors-tab-after-reopen-readonly.png`
- `evidence/EXP-138/t6-11-after-readonly-cancel-designer-clean-save-disabled.png`
- Tool-written under `evidence/playwright/` (disclosed, not worker-written): page snapshots and console logs for this window, including `page-2026-10-26T16-03-59-612Z.yml`, `page-2026-10-26T16-04-09-342Z.yml`, `page-2026-10-26T16-04-18-386Z.yml`, `page-2026-10-26T16-04-28-506Z.yml`, `page-2026-10-26T16-04-34-785Z.yml`, `page-2026-10-26T16-04-44-712Z.yml`, `page-2026-10-26T16-04-48-820Z.yml`, `page-2026-10-26T16-05-19-856Z.yml`, `page-2026-10-26T16-05-26-550Z.yml`, `page-2026-10-26T16-05-34-734Z.yml`.

## Decisive evidence (per file)

- `t6-04`: after reopen, FX_LoginPortal active; Version User; Visual C#; User scope footer; Save greyed. Proves identity and scope after reopen. Does not prove the Form Script content (see t6-05 to t6-08).
- `t6-05` / `t6-06`: accessibility text, lines 1–34 and 35–43, matching the flat source. Proves token-level content as displayed after reopen. Does not show leading whitespace reliably.
- `t6-07` / `t6-08`: visual lines 12–43 and 1–33, flush-left, matching the flat source. Proves visible layout and indentation. Lines 34–43 are shown in `t6-07`; line 33 blank in both.
- `t6-09` / `t6-10`: Compile Result Output blank; Errors headers only, no rows. Proves the displayed result only; not compilation success.
- `t6-11`: Script Editor closed, Save and Undo disabled, no dialog. Proves the clean state after Cancel. Does not prove server persistence.

## Acceptance checks supported by T6

- **AC-5: observed, qualified.** After an ordinary Designer close and reopen (recent-list route), the Form Script read back from FX_LoginPortal matches the AC-3 checks (class, usings, signature, LoadCollection on FX_LoginUsers with FX_Username and FX_PasswordHash, six codes, FX_vLoginResult assignment, FX_Sha256Hex helper, no EXP-133 method). The qualification is the weak persistence boundary above.
- AC-1, AC-2 and AC-4 carried forward from T1 and T5. AC-3 carried forward from T4 (in-session token-level match, with the Amendment A1 variant).
- AC-6 to AC-9 not evaluated (no runtime steps).
- AC-10: holds so far (no FX_LoginUsers, FX_Login asset or FX_vLoginResult edit in T6).
- AC-11: not evaluated in full (final audit happens at the end of EXP-138).

## Knowledge state

- Ordinary close of the FX_LoginPortal Designer tab and reopen from the recent list, with the Form Script identical on readback: **observed** (one execution).
- Server-side persistence of the Form Script independent of client caches: **unresolved** (the ordinary close/reopen is a weak boundary).
- Compile status: **unresolved** (blank Output, Errors headers only; no control compile run).
- Partial server-side rows from the failed T3 Save, and whether the T5 Save replaced them: **unresolved**.
- `CodeLine` capacity: **unresolved** (no truncation seen in T5 or T6).
- `deny_browser_javascript`: **unverified** (not settable or readable by the worker; no JavaScript was authored).
- Replay and acceptance: not claimed; operator review required.

## Limitations

- The reopen is in the same browser session. The UI does not show whether the definition was re-read from the database.
- Caret keys were used inside the read-only dialog to reach lines 35–43 and the top. No text was typed.
- The Form menu was opened and dismissed once with no item chosen.
- FX_LoginUsers became the active Form after the FX_LoginPortal close. It was not edited, saved or closed.
