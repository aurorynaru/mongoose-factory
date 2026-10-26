# EXP-138 T5 - second and final ordinary Designer Save (Amendment A1), 2026-10-26

Scope of T5: the single authorized ordinary Designer Save of FX_LoginPortal, its immediate response, and a clean post-Save state. **Not performed:** Form close/reopen, Form Script reopen, portal reload, runtime open, Sign In, any Save retry, any refill, any other object change.

## Preconditions (checked before the Save click)

Tab list (read-only) first: tab 0 = Web Client (FX_LoginUsers), tab 1 = Designer (`MGForm=FX_LoginPortal`). Tab 1 selected successfully, then a fresh untargeted snapshot.

| Precondition | Observed (fresh snapshot and `t5-01`) |
|---|---|
| Active Form | `FX_LoginPortal` (Designer tab selected; Properties Name = FX_LoginPortal) |
| Version | `User version for user ...` (Properties Version) |
| Editing scope | Footer `[ ScopeType: User / ScopeName: ... ]`. The snapshot shows the username as the redacted placeholder; the T1 and T4 records identify the scope as `anton.ramos@3mworks.com.ph` |
| Script Language | `Visual C#` |
| Save | Enabled (button had no `disabled` attribute; Save icon active in `t5-01`) |
| Undo / Redo | Disabled |
| Dialog | None visible in `t5-01`. The two empty `alert` nodes in the tree are the standing notification containers and carry no text |

Result: all preconditions matched, so the Save was performed.

## Action

- **One** click on the Designer toolbar Save (fresh snapshot ref `e16`, button `Save`). The Designer top-toolbar trash icon (Delete Form Definition) was not touched.
- No retry. No second click.

## Immediate response (`t5-02`, `t5-03`)

- Notification (top-right, info icon, title `Save`): **"Form [FX_LoginPortal] and global object(s) were saved."**
- No error dialog, no truncation message, no compilation message.
- Post-click snapshot: Save `[disabled]`, Undo `[disabled]`, Redo `[disabled]`.

## Clean post-Save state (`t5-04`, after a 6-second wait)

- Save disabled, Undo and Redo disabled, notification auto-dismissed, no dialog, no error text.
- Footer still `User / anton.ramos@3mworks.com.ph`; Version User; Script Language Visual C#.
- Post-wait snapshot: `evidence/playwright/page-2026-10-26T16-01-24-749Z.yml` (tool-written; disclosed). Its Save and Undo entries are `[disabled]`; no error text found by search.

## What this does and does not establish

- **Establishes (observed, one execution):** the product reported that FX_LoginPortal was saved, with no error, and the Designer is in a clean (Save-disabled) state in this session.
- **Does not establish:** that the saved script is the corrected source on the server; that the save did or did not repair any partial rows left by the failed T3 Save; that the script compiles; that the saved script persists across a Designer close/reopen (AC-5); or any runtime behaviour (AC-6 to AC-9).
- The notice wording "and global object(s) were saved" is the product's standard message. The worker changed no global object. Whether the product re-wrote any global object during this Save is **not established**.
- Save disabled alone was not treated as proof (T3 lesson). The success notice and the post-wait state are both recorded.

## Mutation ledger (T5)

- Designer Save: **1** (success notice).
- Save retries: 0. Form Script fills: 0. Script Editor opens: 0. OK: 0. Cancel: 0.
- Form close: 0. Form reopen: 0. Portal reload: 0. Runtime open: 0. Sign In: 0. Runtime Save: 0.
- Other Forms saved: 0 (notice names only FX_LoginPortal; the active Form was FX_LoginPortal at the click).
- Variables, components, Captions, events, layout: 0 changed.
- FX_LoginUsers rows or definition, FX_Login assets, FX_vLoginResult definition: 0 changed.
- Credentials typed or read: 0. Browser JavaScript authored by the worker: 0.
- Session recovery: 0. Recovery episodes (ref errors): 0.

## Tool operations (read-only or as listed)

- Tab list: 1. Tab select: 1 (index 1, Designer).
- Snapshots: 2 fresh (pre-Save gate; immediate post-Save), 1 post-wait snapshot (tool-written file).
- Screenshots: 3 (`t5-01` pre-Save gate; `t5-02` immediate response; `t5-04` clean state after wait).
- Wait: 6 seconds.
- Toolbar Save click: 1.
- Playwright click mechanism: the tool reports the click as `page.locator('#ext-element-162').click()`. This is the tool's own execution of the ref `e16` click, not code authored by the worker.

## Evidence files (T5, repo-relative)

- `evidence/EXP-138/T5-save-summary.md` (this file)
- `evidence/EXP-138/t5-01-designer-presave-gate-fx-loginportal-user-visual-csharp-save-enabled.png`
- `evidence/EXP-138/t5-02-immediate-response-after-single-save-click.png`
- `evidence/EXP-138/t5-03-post-save-snapshot-immediate.yml`
- `evidence/EXP-138/t5-04-clean-post-save-state-after-wait-save-disabled.png`
- Tool-written under `evidence/playwright/` (disclosed, not worker-written): `page-2026-10-26T16-01-09-797Z.yml`, `page-2026-10-26T16-01-24-749Z.yml`, and console logs `console-2026-10-26T16-00-52-717Z.log`, `console-2026-10-26T16-00-52-718Z.log` plus the console log for the Save window.

## Decisive evidence (per file)

- `t5-01`: FX_LoginPortal tab active; Version User; Script Language Visual C#; footer User scope for the account; Save icon active; Undo greyed; no dialog. Proves the gate, not the save.
- `t5-02`: The info notification "Form [FX_LoginPortal] and global object(s) were saved."; Save greyed; no error. Proves the immediate product response. Does not prove the server content or persistence.
- `t5-03`: Post-click accessibility snapshot: Save/Undo/Redo `[disabled]`; the notification text is in the tree; no error text. Corroborates `t5-02`.
- `t5-04`: After a 6-second wait, no notification, Save and Undo greyed, no dialog. Proves the clean in-session state. Does not prove persistence.

## Acceptance checks supported by T5

- AC-4: **Observed** (one Save; success response; clean Save-disabled state captured, with the wait). Persistence not part of AC-4.
- AC-1 and AC-2: carried forward from T1 (not re-evaluated in T5).
- AC-3: unchanged from T4 (in-session fill and read-back; compile status unresolved).
- AC-5 to AC-11: **not evaluated** in T5.
- AC-10: holds so far (no FX_LoginUsers, FX_Login asset or FX_vLoginResult edit in T5).

## Knowledge state

- Second ordinary Designer Save of FX_LoginPortal reporting success with a clean Save-disabled state: **observed** (one execution).
- Persistence of the corrected script after Save (AC-5): **unresolved** (requires close/reopen in a separately authorized task).
- Compile status of the saved script: **unresolved**. The save notice does not report compilation.
- Partial server-side rows from the failed T3 Save: **unresolved**. A successful second Save does not by itself show whether the earlier partial state was replaced.
- `CodeLine` capacity: **partially informed**. The second Save reported no truncation for the flat source, whose longest line is 106 characters. This suggests the flat source fits the column, but the column width is not established and no line-level proof was obtained.
- `deny_browser_javascript`: **unverified** (not settable or readable by the worker).
- Replay and acceptance: not claimed; operator review required.

## Limitations

- The success is the product's immediate notice and the in-session clean state. Persistence, compilation and runtime behaviour are not checked in T5.
- The scope name appears redacted in the snapshot as the username placeholder; the identity was confirmed visually in `t5-01`/`t5-04` footer and earlier records.
