# EXP-015 — T5 READ-ONLY reconciliation evidence (cycle 5)

Date: 2026-10-03
Mode: READ-ONLY reconciliation only. No variable created/edited/deleted; no Save/Regenerate/Save As; no close/reopen; no run; no login/reauth; no cache/global-object/IDO-metadata action; no Mongoose artifact modified. Only this evidence file and the EXP-015 record were touched.

## Live browser state (inspected first)

Two tabs open; both inspected via DOM query (`a[role="tab"]` with class `mg-form-tab-panel-bar-tab`, `[data-mgcompname]` matching `^Form_`/`^FormTab_`, `ScopeType` text, and Designer component counts):

- **Tab 0** — title `Logout Successful`, URL `mingle-portal.se1.inforcloudsuite.com/session/slo/signoutsuccess`. Body: "You have been successfully logged out. You can now close all browser windows." Form tabs = 0, Form/FormTab components = 0, ScopeType text = none, mgtoolbar/formcontainer/formvariables = 0.
- **Tab 1 (current)** — title `Infor CloudIdentities - Sign In`, URL `mingle-sso.se1.inforcloudsuite.com/.../idp/wsfed?wa=wsignin1.0...`. Body: "Sign In / Reset password / Contact Us". Form tabs = 0, Form/FormTab components = 0, ScopeType text = none, mgtoolbar/formcontainer/formvariables = 0.

**Conclusion:** There is **NO live Mongoose Designer** in the current browser. No Form is open. No ScopeType/ScopeName indicator is present.

## Reconciliation against evidence/EXP-015/13-t4-live-designer-state.png

The referenced screenshot `13-t4-live-designer-state.png` shows a **live Designer** with:
- Form tab title bar: `FX_FormVariableLab04`
- Properties panel: Name `FX_FormVariableLa...`, Version `User version for us...`, Device Type `Default`, Form Type `Normal`, Is Master `True`
- Status bar: `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`

**Discrepancy:** That screenshot captured a live Designer showing **FX_FormVariableLab04** (the EXP-014 leftover), NOT `FX_FormVariableLab05`. The current live browser (T5) has **no Designer at all** — the session has since been logged out. The screenshot is therefore a **historical** state, not the current live state.

## Currently open Form identity / ScopeType / ScopeName / clean-dirty

- **Currently open Form:** NONE. No Form tab and no Form/FormTab component exists in either live tab.
- **ScopeType / ScopeName:** NOT PRESENT in the live browser (no status bar). The only ScopeType/ScopeName ever captured in evidence is `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` from the historical screenshot `13` (showing Lab04, not Lab05).
- **Designer clean/dirty:** NOT APPLICABLE — no Designer is live.

## Details > Variables — exact current row count

- **Details > Variables panel:** NOT PRESENT in the live browser (formvariables count = 0 in both tabs).
- **Exact current row count:** UNDETERMINABLE from the live browser — there is no open Form and no Variables panel to read.
- **FX_SerializationProbeVar existence:** **CANNOT BE CONFIRMED from the live browser.** No Variables panel exists to inspect. Per the EXP-015 record, T2 stopped at Form creation and **no Form variable was created**; T4 was read-only and created nothing. So the record asserts the variable was never created — but this cannot be re-verified live because the Designer is gone.

## Did T4 document any mutation? (from EXP-015 record)

**No.** The T4 section (record lines 117-138) is explicitly a **read-only** inspection: "Constraint honored: no reload, no re-navigation, no close/reopen, no Save, no mutation." Its Prohibited-action audit states: "no login / Sign In-OK / reauthentication / logout / browser restart / session replacement performed by me (the logout was an external/environmental event, not a factory action); no reload/re-navigate/close-reopen/Save; no variable created; no Form property edited; no existing FX_/non-FX_ artifact modified." T4 ended as a **BLOCKER — Halted; no mutation performed.**

## Safety assessment for the coordinator

The intended pre-Save variable creation step (T3) is **NOT safe to resume from the current live browser**: there is no live Designer, no open `FX_FormVariableLab05`, and no User-scope indicator. Resuming would require re-establishing the session (login/reauth), which is **prohibited after mutation began** (T2 created the Form). The Form `FX_FormVariableLab05` was created in T2 (inventory 651→652, hitCount=1) but is no longer open/inspectable.

## Knowledge state (T5)

- No live Mongoose Designer exists in the current browser (both tabs are logout/Sign-In interstitials): **observed** (T5, live DOM read of both tabs).
- The historical screenshot `13` shows Lab04 (not Lab05) with User scope: **observed** (T5, evidence read).
- `FX_SerializationProbeVar` existence is **not live-verifiable**; the record asserts it was never created (T2 stopped at Form creation, T4 read-only): **observed** (record assertion), **unresolved** (cannot re-verify live).

## Evidence files (this reconciliation)

- `evidence/EXP-015/14-t5-live-reconciliation-current-tab.png` — screenshot of the current live tab (Sign In interstitial).
- `evidence/EXP-015/15-t5-read-only-reconciliation.md` — this file.
