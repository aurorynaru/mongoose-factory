# EXP-138 - FX_LoginPortal: Hashed FX_LoginUsers Lookup in FX_ProcessLogin

**Operator decision (2026-10-27, after T10): ACCEPTED, QUALIFIED.** Run `R-20261026-233735-8dlh` paused at cycle 12 with `usage_limit` (the worker's weekly Claude limit, which resets 2026-10-29 10:00 Asia/Singapore) while running T11, the read-only final audit. T11 read files only and made no browser action. So the operator assistant did the AC-10 and AC-11 reconciliation, listed below. The run is still paused. The worker audit can be finished after the reset with `resume --run R-20261026-233735-8dlh --continue-after-usage`, but acceptance does not depend on it.
- **Changed objects (for cleanup):** only the C# Form Script of the User-scope Form `FX_LoginPortal`. `FX_ProcessLogin` now loads `FX_LoginUsers` by `FX_Username`, compares SHA-256 hex against `FX_PasswordHash`, and sets `FX_vLoginResult`. No other object was created or edited.
- **Runtime results (fake fixtures only, one Sign In each):**
  - `fx_probe` / `fx-probe-only` gave `ok` (T8, `t8-06`).
  - `fx_probe` / `fx-wrong-value` gave `invalid` (T9, `t9-06`).
  - `fx_nobody` / `fx-probe-only` gave `unknown` (T10, `t10-08`). The operator assistant viewed this screenshot: header `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`, Form `FX_LoginPortal`, result `unknown`, password masked.
  - The `ok` result also proves end to end that EXP-137 stored `fx_probe` and its hash in the right columns.
- **AC-10 (operator assistant):**
  - Only result codes were displayed, and the password stayed masked in every runtime screenshot.
  - The controller tables show the typed strings were only the fake fixtures `fx_probe`, `fx_nobody`, `fx-probe-only` and `fx-wrong-value`. No `SECRET_MONGOOSE` placeholder appears in any T1–T10 audit.
  - There is no browser JavaScript call (`browser_evaluate` or `run_code`) in any task.
  - No step edited `FX_LoginUsers`, the `FX_Login` assets or the `FX_vLoginResult` definition.
- **AC-11 (operator assistant, from `harness-audit-T1`…`T10` and the T summaries):**
  - Two full-content fills: T2 with the original source, T4 with the Amendment A1 flat source. Each was followed by Script Editor OK and a read-only reopen and Cancel. In T4 the first OK click hit a stale ref and was retried once.
  - Two Designer Saves: T3 failed with the `ActiveXScriptLines.CodeLine` truncation error; T5 succeeded with `Form [FX_LoginPortal] and global object(s) were saved.`.
  - One Designer close and reopen (T6).
  - One portal reload (T7).
  - Three Sign In clicks, one each in T8, T9 and T10. The other coordinate clicks only focused input boxes.
  - Prohibited-tool flags were 1, 1 and 2, all for permitted `browser_type` calls: the T2 and T4 script fills, and the T7 portal menu search and Select Form filter. Tool errors were not-found file reads (T1, T6), two stale-ref clicks (T4) and two no-op record Edits (T8). None of them had an application effect.
  - Confinement: `git status` shows only `evidence/EXP-138/` (88 files) and this record as new. Tracked changes are limited to the harness source edits that already existed before this run.
- **Qualifications:**
  - The installed script is the Amendment A1 flush-left file `assets/FX_Login/FX_LoginPortal.flat.cs.txt` (SHA-256 `ecb871de…d55ad981`, commit `d31502a`). It is the same code as the brief's source `0ba26a44…`, without indentation. The indented original could not be saved because the editor's auto-indent pushes stored lines past the `CodeLine` length limit.
  - The Compile Result showed no errors. Compilation is proven functionally, by the runtime results.
  - The Web User Control frame exposes no accessibility refs, so input and Sign In used coordinate clicks (the AGENTS.md last resort).
  - At the default size (184 x 106 px) the control is cramped and needs scrolling; a later layout task should enlarge it.
  - Each result was observed once (`observed`, not `verified`).
  - The T11 worker audit did not run.

**Status (after T3, run `R-20261026-233735-8dlh`, cycle 3, 2026-10-26): the single ordinary Designer Save FAILED. Mongoose returned `Error String or binary data would be truncated in table 'CYANWILDLION_DEM_MON_App_0.dbo.ActiveXScriptLines', column 'CodeLine' ... saving form definition for form FX_LoginPortal`. The Form Script is NOT saved. T3 stopped before any close or reopen. The Designer is dirty (Save enabled after a read-only editor Cancel). Compile success is NOT established. EXP-138 is NOT accepted; AC-4 is NOT MET and AC-5 to AC-11 are not evaluated. Next step needs an operator/coordinator decision (see T3).** **Update after T4 (Amendment A1, 2026-10-26):** the corrective flat source was installed in-session by the second and final authorized fill, read back complete and flush-left, and OK'd; the read-only reopen confirmed it. The Form is dirty and unsaved. The second ordinary Designer Save has NOT been performed and needs separate authorization. **Update after T5 (2026-10-26, Amendment A1, second and final Save):** the second ordinary Designer Save of FX_LoginPortal reported success (`Form [FX_LoginPortal] and global object(s) were saved.`) and the Designer is clean (Save and Undo disabled) after a 6-second wait. This is an in-session observation only: persistence (AC-5), compilation and runtime (AC-6 to AC-9) are not yet verified. The authorized Saves and fills (2 of 2) are now consumed. **Update after T6 (2026-10-26, persistence readback):** an ordinary close of the FX_LoginPortal Designer tab and a reopen from the Form menu's recent list show the same Form Script on all 43 lines (Compile Result Output blank; Errors headers only). This supports AC-5 only as a weak, same-session boundary (client or server caches are not excluded). EXP-138 is still NOT accepted; AC-7 to AC-9 (Sign In) and AC-11 (final audit) are not evaluated. **Update after T7 (2026-10-26, runtime readiness):** after the one permitted portal reload, the runtime FX_LoginPortal opened in the Web Client with the account header confirmed and the Username, Password and Sign in controls present (Sign in clipped at the default frame size, visible after an in-frame scroll). AC-6 met, qualified. No Sign In was performed; the runtime is ready for the first authorized Sign In attempt. **Update after T8 (2026-10-26, first Sign In, AC-7):** one Sign In with `fx_probe` / `fx-probe-only` displayed `ok` in the runtime FX_LoginPortal. Inputs were entered by coordinate fallback because the Web User Control frame exposed no accessibility reference. Sign In attempts used: 1 of 3. AC-7 observed for one run; AC-8 and AC-9 not yet attempted; EXP-138 still NOT accepted. **Update after T9 (2026-10-26, second Sign In, AC-8):** one Sign In with `fx_probe` / `fx-wrong-value` displayed `invalid` (replacing the stale `ok` from T8). Sign In attempts used: 2 of 3. AC-8 observed for one run; AC-9 not yet attempted; EXP-138 still NOT accepted. **Update after T10 (2026-10-26, third and final Sign In, AC-9):** one Sign In with `fx_nobody` / `fx-probe-only` displayed `unknown` (replacing the stale `invalid` from T9). Sign In attempts used: 3 of 3 (budget exhausted). The three fixture pairs each displayed their expected result once (`ok`, `invalid`, `unknown`); each is observed for one run only. EXP-138 still NOT accepted; AC-10 and AC-11 comprehensive audit left for a separate task and operator review.

Approved brief commit `887027f` (draft `1c87a01`). Committed source `assets/FX_Login/FX_LoginPortal.cs.txt` (commit `09486c8`), operator-supplied SHA-256 `0ba26a44b67afee8a8b38dc5502dff1eecfe330bc809e7118ba52cc526b2514b` (not recomputed by the worker; no shell). This record was created by T1 because it did not exist at T1 start (same pattern as EXP-133 and EXP-137).

## Objective (brief summary)

Replace the C# Form Script of the User-scoped Form `FX_LoginPortal` (EXP-133) with the committed source so that `FX_ProcessLogin(string username, string password)`:

- loads `FX_LoginUsers` filtered on `FX_Username`;
- compares the SHA-256 hex of the supplied password with the stored `FX_PasswordHash`;
- sets the existing Global variable `FX_vLoginResult` to exactly one of `missing`, `empty`, `unknown`, `invalid`, `ok` or `error`.

Install by the accepted EXP-136 T15 full-content fill route; one ordinary Designer Save; Designer close/reopen persistence; then runtime proof through the unchanged `FX_Login` Web User Control with three fake-fixture Sign In attempts:

- `fx_probe` / `fx-probe-only` expected `ok` (also proves the EXP-137 record stores `fx_probe` in `FX_Username` and the hash in `FX_PasswordHash`);
- `fx_probe` / `fx-wrong-value` expected `invalid`;
- `fx_nobody` / `fx-probe-only` expected `unknown`.

Out of scope: Web User Control assets, `FX_vLoginResult` definition, any FX_LoginPortal component, layout, Caption or event handler, `FX_LoginUsers` (table, IDO, Form, rows), inventory objects, sessions, cookies, real authentication, Mock objects, `FX_InventoryPrototype01`, the vendor IdoCollections Form, built-in `$app` assets.

## Acceptance checks (AC-1 to AC-11)

| AC | Subject | Status after T1 |
|---|---|---|
| AC-1 | Pre-mutation identity: account, configuration, User scope, FX_LoginPortal User version, Visual C# | **Observed (T1)**. Evidence: `evidence/EXP-138/T1-preflight-summary.md`; `t1-03`, `t1-04`, `t1-06`. |
| AC-2 | Pre-change Form Script readback vs EXP-133 T7 method | **Observed (T1)**: method matches; difference only in trailing blank lines (25 numbered lines vs 24 in EXP-133 T7). Evidence: `t1-05`. |
| AC-3 | Single full-content fill of the committed source; readbacks before and after OK; Compile Result | **Observed in-session (T2)**: one fill; token-level match of lines 1-41 before OK and after OK; no leftover EXP-133 method. Qualified: leading whitespace is auto-indented and deeper than the committed layout (whitespace only). Compile Result: Output blank; Errors grid headers only, no rows; compile success **not established**. Evidence: `evidence/EXP-138/T2-install-summary.md`. |
| AC-4 | One ordinary Designer Save; response and clean state | **Observed (T5, second Save)**: one Save clicked; response `Form [FX_LoginPortal] and global object(s) were saved.` with no error; Save and Undo disabled after a 6-second wait. Evidence: `evidence/EXP-138/T5-save-summary.md`, `t5-02`, `t5-04`. Earlier first Save (T3) **failed** with the truncation error and is kept below as recorded. **NOT MET (T3, historical)**: one Save clicked; the response was an error (`ActiveXScriptLines.CodeLine` truncation); no success notice; Save enabled again after a read-only editor Cancel, so no clean state was verified. Evidence: `evidence/EXP-138/T3-save-attempt-summary.md`, `t3-02`, `t3-03`, `t3-06`. |
| AC-5 | Designer close and reopen; Form Script readback still matches AC-3 | **Observed, qualified (T6)**: ordinary close of the FX_LoginPortal tab, reopen from the recent list; identity, User version, Visual C# and User scope re-verified; Form Script read back on lines 1–43 and matching AC-3 on every checked token; Compile Result Output blank and Errors headers only. Qualification: same browser and Designer session, so client or server caches are not excluded (weak boundary). Evidence: `evidence/EXP-138/T6-persistence-readback-summary.md`, `t6-04` to `t6-11`. |
| AC-6 | FX_LoginPortal opens at runtime with username, password and Sign In visible | **Met, qualified (T7)**: after the one permitted portal reload, the runtime FX_LoginPortal opened with the account header `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; Username and Password visible; Sign in present. At the default WUC frame size (184 x 106 px) the Sign in button is clipped and became visible only after an in-frame scroll (hover on its ref, no click). Evidence: `evidence/EXP-138/T7-runtime-readiness-summary.md`, `t7-02` to `t7-04`. |
| AC-7 | `fx_probe` / `fx-probe-only` displays `ok` | **Observed, one run (T8)**: one Sign In activation; result text `ok` displayed in the runtime FX_LoginPortal (`evidence/EXP-138/t8-06-after-single-signin-fx_probe-result-text.png`). Input by coordinate fallback (no frame-scoped accessibility reference exposed). The `ok` result is consistent with the EXP-137 record, but not directly read. Evidence: `evidence/EXP-138/T8-first-signin-summary.md`. |
| AC-8 | `fx_probe` / `fx-wrong-value` displays `invalid` | **Observed, one run (T9)**: one Sign In activation; result text `invalid` displayed in the runtime FX_LoginPortal, replacing the `ok` from T8 (`evidence/EXP-138/t9-06-after-single-signin-fx_probe-fx-wrong-value-result-text.png`). Input by coordinate fallback (no frame-scoped accessibility reference exposed). Evidence: `evidence/EXP-138/T9-second-signin-summary.md`. |
| AC-9 | `fx_nobody` / `fx-probe-only` displays `unknown` | **Observed, one run (T10)**: one Sign In activation; result text `unknown` displayed in the runtime FX_LoginPortal, replacing the `invalid` from T9 (`evidence/EXP-138/t10-08-after-single-signin-fx_nobody-fx-probe-only-result-text.png`). Input by coordinate fallback (no frame-scoped accessibility reference exposed). Username verified `fx_nobody` before the Password edit (`t10-04`); not re-read after the click. Evidence: `evidence/EXP-138/T10-third-signin-summary.md`. |
| AC-10 | Only result codes displayed; no other objects edited | Not started (T1 made no edits). |
| AC-11 | Final audit reconciling every action | Not started. |

## T1 - Read-only preflight (2026-10-26)

Summary and gate table: `evidence/EXP-138/T1-preflight-summary.md`.

- Account header (Web Client): `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` (`evidence/EXP-138/t1-04-webclient-account-header-and-session-state-readonly.png`).
- Designer footer: `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph` (`t1-03`, `t1-06`).
- FX_LoginPortal opened in the Designer via the Form menu's recent list: Name `FX_LoginPortal`, Version `User version for user …`, Device Type Default, Form Type Normal, Is Master True, Script Language `Visual C#` (`t1-01` before Behavior expansion; `t1-03` after).
- Form Script readback (Script Editor, read-only, Cancel): the EXP-133 T7 method is present unchanged (`FX_ProcessLogin(string username, string password)`, `received` default, `missing`, `empty`, `FX_vLoginResult` assignment, `return code`). No `FX_LoginUsers` lookup, no `FX_Sha256Hex` helper and no `using System.Security.Cryptography` or `System.Text` lines. Evidence `t1-05`.
- Designer clean after Cancel: Save and Undo disabled, no dialog (`t1-06`).
- The `FX_LoginUsers` Designer tab (tab 1 previously) remains open and clean; the Web Client tab 0 shows `FX_LoginUsers` with the fake `fx_probe` row fields and no dialog.

## T2 - Form Script installation, in-session only (2026-10-26)

Full summary, readbacks and counts: `evidence/EXP-138/T2-install-summary.md`.

- Pre-mutation: FX_LoginPortal active; scope footer `User / anton.ramos@3mworks.com.ph`; Visual C#; Save and Undo disabled; no dialog; console 2 / 0 (`t2-01`).
- Route (EXP-136 T15): Edit > Form Script; click inside the editor (`e888`); Ctrl+A; **one** full-content fill with the complete 41-line committed source; readback before OK; OK once (`t2-02` to `t2-05`).
- Readback before OK (observed): lines 1-41 match the committed source token-for-token (usings, namespace, class, `FX_ProcessLogin(string username, string password)`, `IDOClient.LoadCollection("FX_LoginUsers", "FX_Username, FX_PasswordHash", ...)`, the six codes `missing`/`empty`/`unknown`/`invalid`/`ok`/`error`, `ThisForm.Variables("FX_vLoginResult").Value = code`, `FX_Sha256Hex` helper). No `received` default and no leftover EXP-133 method.
- **Whitespace deviation (recorded, not corrected):** the editor auto-indents on each newline and the typed indentation added to it, so indentation deepens with nesting. Whitespace only; no token difference. Same class as EXP-136 T15. Not corrected, because a second fill is prohibited.
- Reopen (read-only) after OK (observed): lines 1-41 match the committed source as before (`t2-07` text, `t2-08`).
- Compile Result (as observed): Output blank; Errors grid column headers `Line | Column | Error` only, no rows (`t2-08`, `t2-09`). Not affirmative compile success; no control compile was run.
- Cancel once (`t2-10`). Designer after Cancel: FX_LoginPortal, User scope, Visual C#, **Save and Undo enabled (dirty, pending)**, no dialog.
- Mutation ledger T2: 1 full-content fill; 1 OK; 1 Cancel; 2 Script Editor opens (install and read-only reopen); 0 Designer Saves; 0 closes or reopens of the Form; 0 portal reloads; 0 runtime activations; 0 Sign In; 0 runtime Save; 0 variables; 0 assets; 0 components; 0 events; 0 Captions; 0 FX_LoginUsers changes; 0 browser JavaScript; 0 credentials; 0 recovery actions. View-only: tab list 1, tab select 1, snapshot 1, Edit/Form Script menu clicks 4, key navigation (Ctrl+Home, Ctrl+End x2), editor horizontal scroll 2, Compile Result expand and Errors tab clicks, about 14 finds, 9 PNGs and 1 text file.
- Repository writes (T2): `evidence/EXP-138/T2-install-summary.md`; `evidence/EXP-138/t2-01` to `t2-10` (PNG; `t2-07` is a text file written by `browser_find`); this record. Tool-written under `evidence/playwright/` (disclosed).
- Knowledge state (T2): full-content fill of the committed source in the Script Editor: **observed** (one execution). Editor auto-indentation of typed text: **observed** (one execution; whitespace only). Compile status: **unresolved** (empty grid, no control compile). Persistence after Save and reopen: **unresolved** (T3 onward).
- Stopped at the T2 boundary. Next permitted action (not authorized here): the single ordinary Designer Save of FX_LoginPortal (AC-4), then the close/reopen persistence readback (AC-5) and the runtime steps, each in a separately authorized task.

## T3 - Single ordinary Designer Save (FAILED), then stop (2026-10-26)

Full summary: `evidence/EXP-138/T3-save-attempt-summary.md`.

- Pre-Save gate: FX_LoginPortal active; User scope; Visual C#; Save enabled; no dialog; console 2 / 0 (`t3-01`).
- Save: **one** click on the toolbar Save (ref e16). Not repeated.
- Response (observed, verbatim): `Error String or binary data would be truncated in table 'CYANWILDLION_DEM_MON_App_0.dbo.ActiveXScriptLines', column 'CodeLine'. Truncated value: ' '. saving form definition for form FX_LoginPortal`; notification `Error saving form definition for form FX_LoginPortal`. No success notice (`t3-02`, `t3-03`).
- Error alert dismissed once with its OK (dismissal only). Post-dismiss: no dialog; Save greyed (`t3-04`).
- Read-only Script Editor check: the T2 text is still in the editor (usings, `FX_ProcessLogin` signature, LoadCollection on FX_LoginUsers, `FX_vLoginResult` assignment, `FX_Sha256Hex`). Cancel once. No edit (`t3-05`).
- **Post-Cancel: Save enabled again** (accessibility snapshot `t3-06`). The Form is dirty and unsaved. The greyed Save after the error was not evidence of a clean or saved state.
- Cause: **not established.** Hypothesis (unverified): the editor's auto-indentation of typed lines made lines longer than the `CodeLine` column allows. Three committed lines exceed 110 characters (committed lines 15, 18, 23), and the typed lines are deeper. The column width is unknown. Whether any part of the script was partially written is unknown.
- Stopped before close/reopen, persistence readback, portal reload and runtime. Not performed: close, reopen, runtime open, Sign In, runtime Save.
- Mutation ledger T3: Designer Save clicks 1 (failed); repeats 0; error alert OK 1; editor opens 1 (read-only), Cancel 1; OK 0; fills 0; edits 0; closes 0; reopens 0; portal reloads 0; runtime 0; Sign In 0; variables, components, assets, Captions, events, FX_LoginUsers rows, FX_Login assets 0; browser JavaScript 0; credentials 0; session recovery 0.
- Repository writes (T3): `evidence/EXP-138/T3-save-attempt-summary.md`; `evidence/EXP-138/t3-01` to `t3-06` (PNG; `t3-02` and `t3-06` are accessibility snapshots saved by the worker); this record. Tool-written under `evidence/playwright/` (disclosed).
- Knowledge state (T3): one ordinary Save of the FX_LoginPortal Form Script against the server: **observed as failing** (one execution; truncation error). Cause (line length vs column width): **unresolved / candidate hypothesis**. Designer clean state after a failed Save: **not verified**; the greyed state was transient and Save was re-enabled by the editor Cancel. Persistence: **unresolved**. Compile: **unresolved**.
- Next decision (not authorized here): the operator/coordinator must decide between (a) a separate authorization for a corrected single full-content fill, given that the EXP-138 rule permits one fill and this one has already been used; (b) a read-only check of the `CodeLine` column width before choosing; or (c) stopping EXP-138 and recording the failure. The Designer is dirty and must not be Saved or closed without a new instruction.

## Amendment A1 and T4 - corrective installation (in progress, 2026-10-26)

Recorded before any T4 browser action. The T3 failure above is preserved unchanged.

- **Amendment A1 (as conveyed in the coordinator handoff and the T4 instruction; no separate amendment file exists in the repository):** the experiment allowance is increased to **two** full-content fills and **two** ordinary Designer Saves in total. One fill (T2) and one Save (T3, failed) have been consumed. T4 may use the second fill. The second Save is **not** authorized in T4.
- **Corrective source:** `assets/FX_Login/FX_LoginPortal.flat.cs.txt` (commit `d31502a`), operator-supplied SHA-256 `ecb871dec163605fae96db19cc3eb514e041c16477883a4f712efbd8d55ad981` (not recomputed; no shell available to the worker).
- **Pre-install checks (Grep, read-only, T4):** 43 lines (`^` count = 43); no line begins with a space or tab (count 0); longest line 106 characters (line 24 only; no line of 107 or more characters).
- **Structural difference from the committed source (`assets/FX_Login/FX_LoginPortal.cs.txt`, 41 lines, 0ba26a44…):** the flat file is flush-left and carries the same logic, with two line-level restructurings: (1) `string props = "FX_Username, FX_PasswordHash";` is a separate variable (flat line 18), passed to `IDOClient.LoadCollection`; (2) the match decision is split into `bool match = stored != null && string.Equals(...)` (flat line 24) and `code = match ? "ok" : "invalid";` (flat line 25). Token set otherwise unchanged. The AC-3 token check must accept the variable form of the property list.
- **Retained T3 risk:** whether the failed T3 Save left partial script rows server-side is **unresolved**. The second Save must not be described as repairing or replacing a known state until its own response and readback establish it.
- **Scope of T4 (per instruction):** source checks; Designer gate (fresh snapshot, FX_LoginPortal active, User scope, Save enabled, no dialog); one full-content fill of the flat source via Edit > Form Script, Ctrl+A first; read-back before OK; OK; read-only reopen and read-back; Cancel. **Not in T4:** the second Designer Save, close/reopen, portal reload, runtime Sign In.
- Evidence: `evidence/EXP-138/T4-source-check.md` and the T4 summary (written at the end of T4).

**T4 result (2026-10-26, observed):**

- Designer gate passed: FX_LoginPortal active, User version, scope `User / anton.ramos@3mworks.com.ph`, Visual C#, Save enabled, no dialog (`t4-01`).
- **One** full-content fill of the 43-line flat source in the Script Editor (after Ctrl+A). Tool executed one `fill` call. Pre-OK read-back: all 43 lines present, flush-left, no line 44, no leftover T2 text, six codes, `FX_LoginUsers` lookup, `FX_vLoginResult` assignment, `FX_Sha256Hex` helper and the split bool match. Deepest observed indentation: 0 levels (`t4-02`).
- **One** Script Editor OK, after one recovery episode (first OK click returned `Ref e2617 not found`; no click executed; fresh snapshot; one corrected click).
- Read-only reopen after OK: 43 lines read back, flush-left (`t4-03`). Compile Result Output blank; Errors grid headers `Line | Column | Error` with no rows (`t4-04`). Displayed result only; successful compilation **not established**.
- **One** Cancel of the read-only reopen. Post-Cancel: Save enabled, Undo and Redo disabled, no dialog (`t4-05`). The Form is dirty and unsaved.
- Mutation ledger T4: fills 1; OK 1; Cancel 1; editor opens 2; Designer Save 0; close/reopen 0; portal reload 0; runtime 0; Sign In 0; FX_LoginUsers, FX_Login assets, FX_vLoginResult definition 0; variables, components, Captions, events 0. Second recovery episode: Compile Result expander ref `e4927` not found, fresh snapshot, one corrected click succeeded.
- Readiness: the corrected source is installed in-session and reads back complete. The second ordinary Designer Save is **not** performed in T4 and needs separate authorization. Its outcome is unknown until attempted. Two open risks: the `CodeLine` column capacity is unknown (the longest flat line is 106 characters), and whether the failed T3 Save left partial server-side rows is unresolved.
- Knowledge state (T4): in-session installation of the flat source: **observed** (one execution). Editor indentation with a `fill` call: **observed** (no cascade; not the same input route as T2). Save of the corrected source: **unresolved** (not attempted). Compile status: **unresolved** (no control compile).

## T6 - Designer close/reopen persistence readback (AC-5), 2026-10-26

Full summary: `evidence/EXP-138/T6-persistence-readback-summary.md`.

- Pre-close gate (tab 1 selected, fresh snapshot; `t6-02`): FX_LoginPortal active; Version User; ScopeType User; Script Language Visual C#; Save and Undo disabled; no dialog.
- **Close (1):** the FX_LoginPortal Designer tab's own close button (ref `e253`). The Form menu had no direct Close item. No unsaved-change prompt. The Designer's active Form became FX_LoginUsers, which was not edited (`t6-03`).
- **Reopen (1):** Form menu > recent-list `FX_LoginPortal`. `t6-04`: Name FX_LoginPortal; Version User; Visual C#; footer User scope; Save and Undo greyed.
- **Readback (read-only):** Edit > Form Script; accessibility snapshots `t6-05` (lines 1–34) and `t6-06` (lines 35–43 after Ctrl+End, caret only); visual `t6-07` (lines 12–43) and `t6-08` (lines 1–33). All 43 lines matched `assets/FX_Login/FX_LoginPortal.flat.cs.txt`: usings, class, `FX_ProcessLogin(string username, string password)`, `FX_LoginUsers` LoadCollection with `props` (`FX_Username, FX_PasswordHash`), the split `bool match` / `code = match ? ...` logic, six codes, `ThisForm.Variables("FX_vLoginResult").Value = code`, and `FX_Sha256Hex`. No EXP-133 method, no `received` default, no leftover T2 text, all lines flush-left.
- **Compile Result as displayed (no independent compile):** Output blank (`t6-09`); Errors grid headers `Line | Column | Error` with no rows (`t6-10`).
- **Cancel (1, not OK)**, then the clean-state check (`t6-11`): Script Editor closed; Save and Undo disabled; no dialog.
- **Result:** AC-5 observed in-session, qualified. The reopen shows the saved Form Script unchanged. The weak-boundary limit: same browser and Designer session, so client or server caches are not excluded.
- **Unresolved after T6:** whether the failed T3 Save left partial server-side rows and whether the T5 Save replaced them; compile status of the saved script; `CodeLine` column width (no truncation seen in T5 or T6); whether a fresh session would show the same result.
- Mutation ledger T6: Designer Save 0; fills 0; OK 0; Cancel 1 (read-only); Form close 1; Form reopen 1; Script Editor opens 1; Compile Result expand 1; Errors tab 1; Form menu opens 2 (one dismissal); Edit menu 1; caret keys 2 (Ctrl+End, Ctrl+Home; no text typed); portal reload 0; runtime 0; Sign In 0; runtime Save 0; other Forms saved 0; variables, components, Captions, events, layout 0; FX_LoginUsers, FX_Login assets, FX_vLoginResult definition 0; browser JavaScript authored 0; credentials 0; session recovery 0; recovery episodes 0.
- Repository writes (T6): `evidence/EXP-138/T6-persistence-readback-summary.md`; `evidence/EXP-138/t6-01` to `t6-11` (PNG; `t6-05` and `t6-06` are accessibility snapshots saved by the tool); this record. Tool-written under `evidence/playwright/` (disclosed).
- Knowledge state (T6): ordinary close and reopen with Form Script identical on readback: **observed** (one execution). Server-side persistence independent of client caches: **unresolved**. Compile: **unresolved**. Partial rows from T3: **unresolved**.
- Stopped at the T6 boundary. Designer left clean with FX_LoginPortal active (Save disabled, no dialog). Next permitted action (not authorized here): the runtime steps (AC-6 to AC-9) in a separately authorized task.

## T7 - Runtime readiness for FX_LoginPortal (AC-6), no Sign In, 2026-10-26

Full summary: `evidence/EXP-138/T7-runtime-readiness-summary.md`.

- Gate (tab 0 selected after tab list; fresh snapshot; `t7-01`): Web Client header `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; FX_LoginUsers tab with the fake `fx_probe` row; Save disabled; no dialog; no Session Expired modal.
- **Portal reload (1 of 1 permitted, EXP-135 T9 route).** Reason: the Web Client page predated the T5 Save, and EXP-133 and EXP-135 recorded stale client Form stores. Top-level navigation to the portal URL; one `beforeunload` accepted; banner dismissed once via its Close notification button (links not clicked); navigation menu search `Mongoose`; `Mongoose OS` link clicked once. Portal home showed no sign-in page and no Session Expired modal.
- **Runtime open (ordinary route).** Form > Open > Select Form: filter text replaced with `FX_LoginPortal` (fill) and one End press (caret only) to refresh the grid; one row `FX_LoginPortal`; row click once; OK once. Runtime tab `FX_LoginPortal` open; URL `favoriteContext=FX_LoginPortal`.
- **Runtime observations (before any interaction):** Username and Password textboxes and a Sign in button, each reachable by accessibility ref inside the nested WUC iframe `mg_frameext-comp-1230`; no result text; no field typed. Layout: WUC frame 184 x 106 px with 306 x 178 px content; Sign in box at y 115 to 136, clipped at the default size (`t7-03`). A hover on the Sign in ref (no click) scrolled it into view (`t7-04`). No layout change (out of scope).
- **Console:** page footer 5 errors (all `Permissions policy violation: unload`, the same class seen in EXP-133 and EXP-135) and 10 warnings; one new VERBOSE entry from `FX_Login/index.html`: `Password field is not contained in a form` (not an error; not investigated).
- **Acceptance (T7):** AC-6 **met, qualified** (see table). AC-7 to AC-9 not evaluated (no Sign In). AC-10 holds so far.
- **Mutation ledger T7:** Designer Save 0; Designer edits 0; Form Script fills 0; Script Editor opens 0; Form close 0; Designer reopen 0; portal reload 1; runtime Form open 1; banner dismissal 1; beforeunload accepted 1; Sign In 0; fixture values typed 0; credentials 0; runtime Save 0; FX_ProcessLogin invocations 0; hover on Sign in ref 1 (no click); coordinate interactions 0; worker-authored browser JavaScript 0; session recovery 0; recovery episodes 0; variables, components, Captions, events, layout 0; FX_LoginUsers, FX_Login assets, FX_vLoginResult definition 0.
- **Designer state:** tab 1 (Designer) not selected or read in T7; it was left clean at T6 (FX_LoginPortal active, Save and Undo disabled, no dialog).
- **Knowledge state (T7):** runtime open of FX_LoginPortal after a portal reload, with the Username, Password and Sign in controls rendered: **observed** (one run). Sign in button clipped at the default WUC frame size and visible after an in-frame scroll: **observed** (one run). Which Form Script version the runtime uses (stale client copy vs saved script): **unresolved** until the first Sign In (AC-7). Compile status of the saved script: **unresolved**. `deny_browser_javascript`: **unverified** (no tool to set or read it; no JavaScript was authored by the worker).
- **Readiness:** the runtime is ready for the first authorized Sign In attempt (AC-7: `fx_probe` / `fx-probe-only`, expected `ok`). Not authorized in T7. Any Sign In needs the Sign in button scrolled into view or ref-actioned first.
- Stopped at the T7 boundary. Web Client tab 0 holds the runtime FX_LoginPortal with no dialog. Next permitted action (not authorized here): the first runtime Sign In attempt in a separately authorized task.

## T8 - First runtime Sign In (AC-7): fx_probe / fx-probe-only, 2026-10-26

Full summary: `evidence/EXP-138/T8-first-signin-summary.md`.

- Gate (tab 0 selected after tab list; fresh snapshots; `t8-01`): header `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; runtime tab `FX_LoginPortal` selected; no Session Expired modal; no dialog; footer console 5 errors / 10 warnings.
- **Accessibility finding:** the WUC iframe was a leaf with no children in five snapshots (two untargeted, two targeted, one after a 3 s wait) and in `browser_find`. No frame-scoped ref for Username, Password or Sign in. The brief's last-resort coordinate fallback was therefore used, after fresh screenshots verified each location. Suspected cause (not verified): the nested frame is not exposed to the snapshot in this page state.
- Inputs: coordinate click on Username (470, 285) for focus; keys `fx_probe`; coordinate click on Password (470, 336); keys `fx-probe-only`; both verified by screenshot (`t8-03`, `t8-04`). Password masked. No Enter.
- Sign in: frame scrolled by mouse wheel (not a click) until Sign in was visible (`t8-05`), then **one** coordinate click at (423, 298).
- **Observed result: `ok`** displayed below Sign in (`t8-06`). No dialog, no navigation, no session prompt; footer console unchanged at 5 / 10.
- Mutation ledger T8: Sign In 1 (no retry); fixture values typed 2 fields (8 + 13 keys); credentials 0; Enter 0; coordinate clicks 3 (2 focus, 1 Sign in); wheel scrolls 2; Designer Save 0; fills 0; OK 0; Cancel 0; Designer edits 0; form close/reopen 0; portal reload 0; runtime Save 0; compile 0; session recovery 0; browser JavaScript by worker 0; FX_LoginUsers, FX_Login assets, FX_vLoginResult definition 0 changed; variables, components, Captions, events, layout 0.
- **Acceptance (T8):** AC-7 observed (one run, UI level). AC-10 holds so far. AC-8 and AC-9 not evaluated.
- **Knowledge state (T8):** `fx_probe` / `fx-probe-only` returns `ok` in the runtime: **observed** (one run). Coordinate fallback for WUC inputs when no frame ref is exposed: **observed**. End-to-end link to the EXP-137 record (username and hash stored): **inferred** from `ok`, not read directly. Runtime uses the saved T5 script rather than a stale copy: **unresolved** (not directly checked). Compile status: **unresolved**. Partial rows from the failed T3 Save: **unresolved**.
- **Test budget and state:** Sign In attempts used 1 of 3. The fixture values remain in the input boxes (`fx_probe`; password masked, 13 characters). The next task (AC-8) must verify both fields, replace the password with `fx-wrong-value` by keyboard after focusing it, and scroll the Sign in button into view again. Not authorized in T8.
- Stopped at the T8 boundary. Web Client tab 0 holds the runtime FX_LoginPortal with the result `ok` displayed; no dialog. Designer (tab 1) not touched.

## T9 - Second runtime Sign In (AC-8): fx_probe / fx-wrong-value, 2026-10-26

Full summary: `evidence/EXP-138/T9-second-signin-summary.md`.

- Gate (tab 0 selected after tab list; one fresh snapshot; `t9-01`): header `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; runtime tab `FX_LoginPortal`; no Session Expired modal; no dialog; the stale `ok` from T8 displayed; console 5 errors / 10 warnings. The WUC iframe remained a leaf with no references; the T8 accessibility searches were not repeated.
- Username check (`t9-02`): `fx_probe` confirmed; no edit to Username.
- Password: coordinate click (470, 329) for focus; `Control+a` selection (`t9-03`); 14 keys `fx-wrong-value` replaced the selection (no Enter; no append; `t9-04` shows about 14 masked dots, a visual estimate).
- Sign in: frame scrolled by mouse wheel (not a click) until visible (`t9-05`), then **one** coordinate click at (423, 298).
- **Observed result: `invalid`** displayed below Sign in (`t9-06`), replacing the stale `ok`. No dialog, no navigation; console unchanged at 5 / 10.
- **Deviation (recorded):** the first two key presses (`f`, `x`) of the Password entry were issued in one parallel batch of browser calls, which the brief forbids. Both went to the focused Password field in order; the Username and other objects were not affected (`t9-03`, `t9-04`).
- Mutation ledger T9: Sign In 1 (no retry); fixture values typed 1 field (14 keys, after Ctrl+A); credentials 0; Enter 0; coordinate clicks 2 (Password focus, Sign in); Ctrl+A 1; wheel scrolls 2; Designer Save 0; fills 0; OK 0; Cancel 0; Designer edits 0; form close/reopen 0; portal reload 0; runtime Save 0; compile 0; session recovery 0; browser JavaScript by worker 0; FX_LoginUsers, FX_Login assets, FX_vLoginResult definition 0 changed; variables, components, Captions, events, layout 0.
- **Acceptance (T9):** AC-8 observed (one run, UI level). AC-7 carried from T8. AC-9 not evaluated. AC-10 holds so far.
- **Knowledge state (T9):** `fx_probe` / `fx-wrong-value` returns `invalid` in the runtime: **observed** (one run). Password replacement without append: **observed** (visual estimate; exact value not read). Link to the EXP-137 record: **inferred**, not read directly. Runtime uses the saved T5 script rather than a stale copy: **unresolved**. Compile: **unresolved**. Partial rows from T3: **unresolved**.
- **Test budget and state:** Sign In attempts used 2 of 3. One attempt remains (AC-9: `fx_nobody` / `fx-probe-only`, expected `unknown`), not authorized in T9. The runtime stays open with Username `fx_probe` and the masked 14-character password value; the next task must replace both fields after focusing each and verify them before the click.
- Stopped at the T9 boundary. Web Client tab 0 holds the runtime FX_LoginPortal with the result `invalid` displayed; no dialog. Designer (tab 1) not touched.

## T10 - Third and final runtime Sign In (AC-9): fx_nobody / fx-probe-only, 2026-10-26

Full summary: `evidence/EXP-138/T10-third-signin-summary.md`.

- Gate (tab 0 selected after tab list; one fresh snapshot; `t10-01`): header `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; runtime tab `FX_LoginPortal`; no Session Expired modal; no dialog; the previous `invalid` displayed; console 5 errors / 10 warnings. The WUC iframe remained a leaf with no references.
- Username (coordinate click (470, 278) for focus; `Control+a`; nine keys `fx_nobody`, sent sequentially): verified as `fx_nobody` in `t10-04`.
- Password (coordinate click (470, 329) for focus; `Control+a`; 13 keys `fx-probe-only`, sent sequentially): masked, about 13 dots, verified in `t10-06`. No Enter.
- Sign in: frame scrolled by mouse wheel (not a click) until visible (`t10-07`), then **one** coordinate click at (423, 298).
- **Observed result: `unknown`** displayed below Sign in (`t10-08`), replacing the stale `invalid`. Password masked; no dialog or navigation; console unchanged at 5 / 10.
- Deviation: none in T10. All browser actions were sequential. The T9 parallel-key deviation (`f`, `x` in one batch) is not repeated and stands as recorded above.
- Mutation ledger T10: Sign In 1 (no retry); fixture values typed 2 fields (9 + 13 keys, each after Ctrl+A); credentials 0; Enter 0; coordinate clicks 3 (Username focus, Password focus, Sign in); Ctrl+A 2; wheel scrolls 2; mouse move 1; Designer Save 0; fills 0; OK 0; Cancel 0; Designer edits 0; form close/reopen 0; portal reload 0; runtime Save 0; compile 0; session recovery 0; browser JavaScript by worker 0; FX_LoginUsers, FX_Login assets, FX_vLoginResult definition 0 changed; variables, components, Captions, events, layout 0.
- **Acceptance (T10):** AC-9 observed (one run, UI level). AC-7 (T8, `ok`) and AC-8 (T9, `invalid`) carried. AC-10 holds so far. AC-11 not evaluated.
- **Knowledge state (T10):** `fx_nobody` / `fx-probe-only` returns `unknown` in the runtime: **observed** (one run). The three fixture pairs each displayed the expected result once: **observed** (not a repeatable test). Username after the click: not re-read (not in view). Link to the EXP-137 record: **inferred**, not read directly. Runtime uses the saved T5 script rather than a stale copy: **unresolved**. Compile: **unresolved**. Partial rows from T3: **unresolved**.
- **Test budget:** Sign In attempts used **3 of 3; remaining 0.** No fourth attempt is authorized or was made.
- Stopped at the T10 boundary. Web Client tab 0 holds the runtime FX_LoginPortal with the result `unknown` displayed; Username `fx_nobody`, Password masked; no dialog. Designer (tab 1) not touched. Final acceptance and the comprehensive AC-10/AC-11 audit are for a separate task and operator review.

## T5 - second and final ordinary Designer Save (Amendment A1), 2026-10-26

Full summary: `evidence/EXP-138/T5-save-summary.md`.

- Context: Amendment A1 allows two full-content fills and two ordinary Designer Saves in total. Consumed before T5: 1 fill and 1 Save in T2/T3 (Save failed with the `ActiveXScriptLines.CodeLine` truncation); 1 fill in T4 (corrective flat source, no Save). T5 consumed the second Save.
- Pre-Save gate (fresh snapshot after tab select; `t5-01`): FX_LoginPortal active; Version User; ScopeType User; Script Language Visual C#; Save enabled; Undo and Redo disabled; no dialog.
- **One** Designer toolbar Save click (ref `e16`). No retry.
- Immediate response (`t5-02`, `t5-03`): info notification `Save — Form [FX_LoginPortal] and global object(s) were saved.`; no error dialog; no truncation or compilation message; Save, Undo and Redo disabled.
- Clean post-Save state (`t5-04`, after a 6-second wait): Save and Undo greyed; notification auto-dismissed; no dialog; footer User scope; Visual C# unchanged.
- Result: **observed (one execution)**: the product reported the save as successful, and the in-session state is clean. The T3 failure is preserved above and is not repaired by this record alone.
- **Unresolved after T5:**
  - Persistence of the corrected script across a Designer close and reopen (AC-5): not checked; requires a separately authorized task.
  - Whether the failed T3 Save left partial server-side rows, and whether the second Save replaced them: not established by the save notice.
  - Compilation of the saved script: not reported by the save notice; the Compile Result was last read in T4 (Output blank, Errors grid headers only).
  - The `CodeLine` column width: no truncation for this Save; not measured per line.
  - Whether the notice's "global object(s) were saved" wording means any global object was re-written: product wording observed; not established.
- Mutation ledger T5: Designer Save 1 (success); Save retries 0; fills 0; Script Editor opens 0; OK 0; Cancel 0; Form close 0; Form reopen 0; portal reload 0; runtime open 0; Sign In 0; runtime Save 0; other Forms saved 0; variables, components, Captions, events, layout 0; FX_LoginUsers, FX_Login assets, FX_vLoginResult definition 0; browser JavaScript authored 0; credentials 0; session recovery 0; recovery episodes 0.
- Repository writes (T5): `evidence/EXP-138/T5-save-summary.md`; `evidence/EXP-138/t5-01` to `t5-04` (PNG; `t5-03` is an accessibility snapshot saved by the tool); this record. Tool-written under `evidence/playwright/` (disclosed).
- Knowledge state (T5): second ordinary Designer Save with success notice and clean in-session state: **observed** (one execution). Persistence after Save and reopen: **unresolved** (AC-5, next authorized task). Compile status: **unresolved**. Partial rows from T3: **unresolved**. Runtime: not started.
- Stopped at the T5 boundary. Designer left clean with FX_LoginPortal open; no dialogs. Next permitted action (not authorized here): Designer close and reopen persistence readback (AC-5), then the runtime steps (AC-6 to AC-9), each in a separately authorized task.

## Actions performed (T1)

Tab list 1; tab selects 3; clicks 7 (Form menu, recent-list `FX_LoginPortal`, Behavior label selection, Properties expand-all, Edit menu, Form Script item, Script Editor Cancel); key press 1 (ArrowRight, no effect); snapshots 2 (one fresh untargeted, one targeted toolbar); finds 6; screenshots 6; file reads for the sources listed in the T1 summary. Browser JavaScript authored by the worker: 0. The `deny_browser_javascript` flag is not settable or readable by the worker and is recorded as unverified.

Mutation ledger T1: Designer Save 0; OK 0; Form Script fills 0; Form close 0; Form reopen 0 (one recent-list open, the tab not present at task start); Global objects 0; variables 0; components 0; assets 0; FX_LoginUsers rows 0; runtime open 0; Sign In 0; runtime Save 0; portal reload 0; session recovery 0; credentials read or typed 0.

## Open items (for the next authorized task)

- Single full-content fill of the committed source (AC-3). The T1 readback shows the EXP-133 T7 method, so the fill is a replacement of the whole script, not an addition.
- Whether the Form Script was persisted server-side after the EXP-133 T8 Save. T1 shows the method loaded from the recent list in this session; the EXP-133 record left persistence unresolved.
- `ThisForm.Variables` resolution of the Global `FX_vLoginResult` (EXP-130 U-1). The committed source keeps `ThisForm.Variables`; runtime proof (AC-7 to AC-9) is the only test of it.
- Form-level generated `UserCtrl*` variables and the `User Control Name` expression on `FX_LoginControl` (EXP-133 T8) are not re-read in T1.
- Compile status: not run in T1.
- Runtime Sign In and the portal-reload route (EXP-135 T9) are not started; the Web Client tab is on `FX_LoginUsers`.

## Repository writes (T1)

- Created: `experiments/EXP-138-fx-loginportal-hashed-fx-loginusers-lookup.md` (this record).
- Created: `evidence/EXP-138/T1-preflight-summary.md`.
- Created: `evidence/EXP-138/t1-01-designer-fx-loginportal-opened-user-scope-before-behavior.png`, `t1-02-behavior-group-after-arrowright-readonly.png`, `t1-03-fx-loginportal-behavior-script-language-visual-csharp.png`, `t1-04-webclient-account-header-and-session-state-readonly.png`, `t1-05-form-script-editor-readonly-precompare-fx-loginportal.png`, `t1-06-after-form-script-cancel-designer-clean.png`.
- Tool-written under `evidence/playwright/` (disclosed; not worker-written): `page-2026-10-26T15-38-04-468Z.yml`, `page-2026-10-26T15-38-14-665Z.yml`, `page-2026-10-26T15-38-29-262Z.yml`, `page-2026-10-26T15-38-56-024Z.yml`, `page-2026-10-26T15-39-15-235Z.yml`, `page-2026-10-26T15-39-20-123Z.yml`, `page-2026-10-26T15-39-32-124Z.yml`, and console logs for the same window.
- Modified: none.

## Knowledge state (T1)

- Account, configuration, User scope, User version and Visual C# of FX_LoginPortal: **observed** (one execution).
- Form Script equals the EXP-133 T7 method at the visible-text level: **observed** (one execution; not byte-level).
- Opening a Form from the Form menu's recent list: **observed** (this run).
- Persistence of the Form Script across sessions: **unresolved**.
- `ThisForm.Variables` / Global `FX_vLoginResult` resolution: **unresolved** (EXP-130 U-1).
- Replay verification: **not claimed**. Experiment acceptance: **not declared** (operator review).
