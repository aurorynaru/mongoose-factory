# EXP-138 T4 - Amendment A1 corrective Form Script installation (in-session only, 2026-10-26)

Scope of T4: steps 1-4 of the corrective instruction only (source check, Designer gate, one full-content fill, OK, read-only reopen and Cancel). **Not performed:** the second ordinary Designer Save, Form close/reopen, portal reload, runtime Sign In.

## Source (verified before the browser)

- `assets/FX_Login/FX_LoginPortal.flat.cs.txt`: 43 lines; no line with leading whitespace; longest line 106 characters (line 24 only). Operator-supplied SHA-256 `ecb871dec163605fae96db19cc3eb514e041c16477883a4f712efbd8d55ad981` (not recomputed). Details: `evidence/EXP-138/T4-source-check.md`.
- Versus the committed `assets/FX_Login/FX_LoginPortal.cs.txt` (41 lines): same logic and tokens; `props` extracted to a variable (flat line 18); the match decision split into `bool match = ...` (24) and `code = match ? "ok" : "invalid";` (25).

## Actions (in order)

1. Tab list (read-only), then tab 1 select (Designer, FX_LoginPortal).
2. Fresh snapshot: FX_LoginPortal selected; `Version: User version for user <account>`; Script Language `Visual C#`; footer `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`; Save enabled (no disabled attribute); Undo and Redo disabled; no dialog.
3. Screenshot `t4-01` (pre-fill gate).
4. Edit menu (ref e5), then Form Script item (ref e652).
5. Targeted find: Script Editor dialog (ref e692), editor textbox (ref e2603). The accessibility value showed the T2 text still loaded before the fill.
6. Click inside the editor (e2603).
7. Ctrl+A (one press).
8. **One full-content fill** with the 43-line flat source (no trailing blank line). The tool executed this as a single Playwright `fill` (not keystroke typing).
9. Targeted read-back of the code block: lines 11-43 (virtualized view). Ctrl+Home (caret only), then a further read-back: lines 1-10 and 34 (partial). Screenshot `t4-02` (lines 1-33).
10. OK click: **first attempt failed** with `Ref e2617 not found` (no click executed). One fresh untargeted snapshot (recovery 1); the same OK button then appeared at ref e2617. **OK clicked once**; the Script Editor closed.
11. Edit menu (ref e5) then Form Script item (ref e652). Targeted find for the reopened editor (dialog ref e4707, code e4742, textbox e4919, Compile Result Expand e4927, Cancel e4934).
12. Read-back of the reopened (read-only) editor: lines 1-34 (top) and lines 35-43 (after Ctrl+End, caret only).
13. Compile Result Expand (ref e4927) **first attempt failed** with `Ref e4927 not found`; one fresh untargeted snapshot (recovery 2) showed e4927 still present; **one corrected attempt succeeded** (Compile Result expanded). Screenshot `t4-03`.
14. Output tab: blank. Errors tab (ref e4997): click once; column headers `Line | Column | Error` with no rows. Screenshot `t4-04`.
15. **Cancel clicked once** (ref e4934). No edits made in the reopened session.
16. Find of Save/Undo/Redo and dialogs: Save enabled (no disabled attribute); Undo and Redo disabled; no Script Editor dialog. Screenshot `t4-05`.
17. Stopped. No Designer Save, no close/reopen, no portal reload, no runtime open, no Sign In.

## Readback results

- **Before OK (lines 1-43, accessibility readback and `t4-02` for lines 1-33):** all 43 lines present; line 1 `using System;` through line 43 `}` (namespace close); no line 44; flush-left (no indentation glyphs); usings `System.Security.Cryptography` and `System.Text`; class `FX_LoginPortal : FormScript`; signature `public string FX_ProcessLogin(string username, string password)`; `IDOClient.LoadCollection("FX_LoginUsers", props, filter, "", 1)` with `props = "FX_Username, FX_PasswordHash"`; six codes (`missing`, `empty`, `unknown`, `invalid`, `ok`, `error`); `ThisForm.Variables("FX_vLoginResult").Value = code`; `private static string FX_Sha256Hex` helper; no `received` default; no EXP-133 method; no leftover T2 text.
- **Deepest observed indentation:** 0 levels (every line flush-left). Under the instruction's threshold, so no Cancel was needed.
- **After OK, read-only reopen (lines 1-43):** the same 43 lines, flush-left (`t4-03` shows lines 12-34; lines 1-11 and 35-43 from the accessibility read-back).
- **Compile Result (as displayed):** Output tab blank. Errors tab: headers `Line`, `Column`, `Error`; no error rows (`t4-04`). This records the displayed result only. Successful compilation is **not established** by this display.

## Evidence files (T4)

- `evidence/EXP-138/T4-source-check.md` (source checks; text)
- `evidence/EXP-138/T4-install-summary.md` (this file)
- `evidence/EXP-138/t4-01-designer-gate-pre-fill-fx-loginportal-save-enabled.png`
- `evidence/EXP-138/t4-02-script-editor-after-flat-fill-precommit-top-lines-1-10.png` (shows lines 1-33; file name says 1-10 and is kept as written by the tool; the image covers lines 1-33)
- `evidence/EXP-138/t4-03-script-editor-reopen-readonly-after-ok-compile-result-expanded.png`
- `evidence/EXP-138/t4-04-reopen-compile-result-errors-tab-after-ok.png`
- `evidence/EXP-138/t4-05-after-readonly-cancel-designer-state-save-enabled-undo-disabled.png`
- Tool-written under `evidence/playwright/` (disclosed, not worker-written): page snapshots and console logs for this window.

## Mutation ledger (T4)

- Form Script fills: **1** (the authorized second fill, flat source).
- Script Editor OK: **1**. Script Editor Cancel: **1** (read-only reopen).
- Script Editor opens: **2** (the fill session and the read-only reopen).
- Designer Save clicks: **0**.
- Form close or reopen: **0**. Portal reload: **0**. Runtime open: **0**. Sign In: **0**. Runtime Save: **0**.
- Variables, components, Captions, events, layout: **0** changed.
- FX_LoginUsers rows or definition, FX_Login assets, FX_vLoginResult definition: **0** changed.
- Browser JavaScript authored by the worker: **0**. Credentials typed or read: **0**.
- Session recovery: **0**.
- Recovery episodes (ref errors): **2** (OK ref, Compile Result Expand ref). Each followed by one fresh untargeted snapshot and one corrected attempt. The OK retry used a ref from the fresh snapshot; the Compile Result retry used the ref still present in that snapshot.
- Keyboard: Ctrl+A (1), Ctrl+Home (1), Ctrl+End (1). Caret moves only, after the fill.
- Edit menu opens: **2**; Form Script item clicks: **2**; Compile Result expand: **1**; Errors tab click: **1**.

## Limitations

- The fill used the tool's single `fill` call, which set the value in one step. The T2 install (keystroke-style input, per the T2 record) showed auto-indentation. The T4 result (no cascade) is consistent with the operator's cause hypothesis, but the mechanism is not independently established.
- The `CodeLine` column capacity is still unknown. The longest flat line is 106 characters; the T3 truncation (`Truncated value: ' '`) does not show which line failed. A second Save failure is still possible.
- Whether the failed T3 Save left partial server-side rows is **unresolved**. The second Save would be the next observation.
- The `deny_browser_javascript` flag is not settable or readable by the worker and is recorded as unverified; no JavaScript was authored.
- Accessibility readbacks were taken from tool output; their text is not saved as a file other than the summary above.
- No successful compilation, Save, persistence or runtime result is established by T4.

## Readiness for the second Save (operator decision)

- The corrected source is installed in-session and reads back complete and flush-left before OK, and after OK.
- The Form is **dirty** (Save enabled) and **unsaved**. The second ordinary Designer Save has **not** been performed and is not authorized by T4.
- Ready for the separately authorized second Save: the source is in place and readable. The save outcome is unknown until the single Save is attempted.
