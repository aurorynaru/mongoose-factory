# EXP-031 T1 — preflight/baseline notes (read-only, no mutation)

Run: R-20261007-200942-NcTj, cycle 2, task T1. Date: 2026-10-07.
No authentication, no Form open/create/save/close/reopen, no component action, no preference change, no Designer launch. Zero Mongoose mutations this task.

## §A Prior-evidence digest (read before acting)

- EXP-030 T1/T2 (`experiments/EXP-030-...md`, `evidence/EXP-030/t1-preflight-notes.md`,
  `t2-selectform-refresh-attempt-notes.md`): inherited two-tab context (Web Client tab + one User-scope
  Designer at Lab03). Observed mechanics: Select Form positive control renders exactly one settled row for
  exact `FX_ComponentRecoveryLab02` at open (Filter By=Name, Case Sensitive visibly unchecked); filter-text
  fill alone does NOT re-render rows from an already-open dialog; identical re-fill issues zero queries;
  the accepted refresh path is Cancel-dismiss then fresh Open with filter settling at open. T2 ended with
  Select Form still OPEN (dialog preserved). No Cancel/reopen retention test was ever performed there.
- EXP-027 (`evidence/EXP-027/`): Cancel dismissed the dialog; a later fresh Open showed the filter textbox
  STILL holding `FX_ComponentRecoveryLab02` and grid still one row — suggestive of retention, but that task
  never tested retention semantics (filter happened to equal the target; coincidence noted).
- EXP-027-R2 T2 (`evidence/EXP-027-R2/t2-select-form-absence-notes.md`): one Open -> dialog with INHERITED
  textbox already `FX_ComponentRecoveryLab02`, Filter By=Name, Case Sensitive + Starts With unchecked, exactly
  one row; then target fill (zero rows), one Cancel dismissed dialog. Inherited-at-open retention again
  suggestive only, never characterized.
- EXP-028 AC-1 (`evidence/EXP-028/t1-preflight-notes.md`, `t2-select-form-ac1-notes.md`): T1 Select Form
  inherited textbox `FX_ComponentRecoveryLab03` with one row at open; fill alone does not re-render rows;
  Enter in the filter textbox activates/opens the current form (pitfall honored); exact-string zero-match
  settled via fresh Open + fill + settled snapshot. Cancel dismissal recorded once per task.
- EXP-029 T1 (`evidence/EXP-029/t1-preflight-notes.md`, `t1-selectform-dialog-initial.yml`): dialog initially
  showed textbox `FX_ButtonCaptionLab02` (a value set in a prior task), consistent with cross-Cancel/Open
  retention — again incidental, not characterized.
- Repository scan: no record states Select Form filter TEXT/SETTING RETENTION or NON-retention semantics across
  ordinary Cancel + reopen. EXP-031's question is genuinely uncharacterized.

## §B Browser context (fresh snapshot, read-only)

Two tabs (browser_tabs state per snapshot header):
- Tab 0 (current): Mongoose portal Web Client, URL `.../c51080bc-...?favoriteContext=FX_ComponentRecoveryLab03`.
  Web Client iframe live: menu bar Explorer/Form/Actions/Edit/View/Window/Help; identity button
  `<user> | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; toolbar: Open ENABLED, Save/New/Delete/Refresh/FiP/Get More Rows/System
  Notes/Documents/export buttons all DISABLED (clean Web Client); Explorer tree intact (My Folders/Master
  Explorer/Public Folders/User Folders). Main region: tabpanel `FX_ComponentRecoveryLab03` selected with Close
  Panel control (Web Client runtime panel for Lab03 open; no form-level grid content rendered in snapshot).
- Tab 1: Web Designer at `...Default.aspx?...&MGForm=FX_ComponentRecoveryLab03` (one Designer client, inherited).

**Select Form dialog is ALREADY OPEN** on tab 0 (accessibility: `dialog "Select Form"`), so NO Open action was
performed this task. The one brief-authorized initial Open was NOT used; count remains 0.

## §C Inherited Select Form baseline (captured without any change)

From the fresh accessibility snapshot (decisive for exact text):
- Filter textbox: `FX_ButtonTypeRecoveryLab01` (exact string; inherited from EXP-030 T2's fill).
- Filter By combobox: `Name`.
- Case Sensitive checkbox: unchecked.
- Starts With checkbox: unchecked.
- Grid: header row Caption | Name + exactly ONE rendered row: `FX_ComponentRecoveryLab02` / `FX_ComponentRecoveryLab02`
  (stale pre-fill row — matches the EXP-030 T2 recorded state; rows do not re-render on fill alone).
- Dialog buttons OK/Cancel/Help present, none pressed. Close Window control present, not pressed.

Screenshot `t1-01-selectform-inherited-baseline.png` (inspected): shows Web Client top bar with identity string
and DEM badge, Explorer tree, the FX_ComponentRecoveryLab03 panel heading, and the Select Form dialog with grid
header + exactly one row `FX_ComponentRecoveryLab02 / FX_ComponentRecoveryLab02`, OK/Cancel/Help visible not pressed,
Filter By dropdown showing `Name`, Case Sensitive and Starts With boxes visibly empty (unchecked). The Filter textbox
renders truncated at the field's left edge as `3uttonTypeRecoveryLab01`; the exact full string is proven by the accessibility
snapshot above. Proves: live authenticated Web Client, dialog open with settings/rows baseline. Does NOT prove retention
across Cancel/reopen (no lifecycle action taken yet).

## §D Network audit (corroboration only)

`browser_network_requests` filtered non-static saved to `t1-network-nonstatic-audit.txt`: requests #155–#256; latest
FormsApi/GetAllForms at #256 (matches EXP-030 T1's recorded audit indices); ZERO SaveChanges; this task issued no
new Mongoose request (audit ran read-only). Consistent with preserved inherited state.

## §E Action counts this task

Open 0 (dialog already open); Cancel 0; filter fills 0; OK/Enter 0; Close Window 0; Form open/close/save/create 0;
Designer launch 0; auth 0; preference changes 0; unloads 0. Repository writes: this record + `evidence/EXP-031/` only.

## §F End state

Tab 0 Web Client with Select Form dialog OPEN at baseline above, Lab03 runtime panel open, toolbar clean (Save disabled);
tab 1 Designer at Lab03 untouched. No prompts/dirty state observed anywhere.
