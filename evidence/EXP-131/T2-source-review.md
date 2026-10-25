# EXP-131 T2 - source review before browser interaction (2026-10-25)

Read-only repository review, completed before any browser action in T2. No browser call was made during this review. The shared `$app/scripts/UserControl.js` was NOT opened or inspected (excluded by the brief).

## Sources read and sections used

| Source | Sections used | Use in T2 / later tasks |
| --- | --- | --- |
| `AGENTS.md` (full, 258 lines) | Experiment rules 1-10; Mock reproduction extension (FX_ Web User Control Assets, operator's own account only); Evidence capture; Recovery | Governs all T2 steps |
| `recipes/forms/create-basic-form.md` (status verified, EXP-002 and EXP-002-R2) | Steps 1-6 (Designer, New > Form Wizard Selection, BuildFromScratch, Page 1 fields, Page 2 Save Template unchecked, Finish, close); Verification steps 1-5; Known pitfalls | T2 creation route |
| `experiments/EXP-131-...md` (T1 record) | Gate results; route notes (Select Form via Web Client toolbar Open; Designer has no Select Form entry) | Preflight baseline (AC-1) |
| `experiments/EXP-130-...md` lines 382-588 | 7.2-7.6 scripts; 8 variables (vInventoryJson, vMockLoginJson, UserCtr* variables); 9 event handlers; 10 assets; 11 navigation; 12 runtime; 13 dependency map; 14 readiness; 15 plan; 16 FX_ identities; 17-23 | Bridge-relevant items recorded below |
| `evidence/EXP-128/assets/mocklogin_index.html.txt` | Head: `<script type="text/javascript" src="../$app/scripts/UserControl.js" ></script>`; body: form, `input#username`, `input#password`, `button#loginButton`; `<script src="script/app.js">` at end; no WSForm call in HTML | Source precedent for the `../$app/scripts/UserControl.js` dependency and for an HTML asset with a button and output-type elements |
| `evidence/EXP-128/assets/mocklogin_script_app.js.txt` (text-equivalent, not byte-exact) | `invokeAsync(methodName, arg1, arg2, timeoutMs)` wrapper; `WSForm.invoke(methodName, arg1, arg2, function (result) {...})` inside a Promise; `processLogin()` calls `invokeAsync("ProcessLogin", username, password, 15000)`; the callback result is only logged | Source precedent for the invoke-with-callback pattern. It is a 2-argument call plus the callback; the brief's candidate is 1-argument plus callback. Not verified |
| `evidence/EXP-128/MockLoginPortal-form-script.cs.txt` (path differs from the brief; see disagreement D-1) | Lines 10-17: usings and `namespace Mongoose.FormScripts`; line 19 `public class MockLoginPortal : FormScript`; lines 25-26 `public string ProcessLogin(string username, string password)`; lines 94-100 `private void ShowMongooseAlert` using `Application.ShowMessage`; line 71 `ThisForm.Variables("vMockLoginJson").Value = json` | C# Form Script shape precedent (class derives from `FormScript`, namespace `Mongoose.FormScripts`, public string-returning method). Used only as shape evidence |
| `experiments/EXP-093-...md` | Behavior group: Script Language drop-list (observed as Visual Basic on FX_Orders); Script Editor opened by blue pencil; Cancel on empty script left Designer dirty (Save enabled); cause not isolated | Designer-dirty risk for any later Script Editor visit; no script editing in T2 |
| `experiments/EXP-094-...md` | Script Editor text replacement, OK, one Designer Save toast `Form [FX_Orders] and global object(s) were saved.`; Cancel on the saved script left the Designer clean; Script Language Visual Basic | Save-response precedent (T3-T4 relevance); Visual Basic, not C# |
| `experiments/EXP-095-...md` | Event handler creation (Details > Event Handlers) and Data Change; Designer clean/dirty states | Not needed for T2 |
| `experiments/EXP-096-...md` | Grid column Data Change; one Designer Save with toast; close/reopen readback | Not needed for T2 |
| `experiments/EXP-128-...md` (grep and targeted sections: T2, T6, T7, T8, lines 184-188, 747-748, 1178-1218, 2113) | Web User Control Assets route: Edit > Web User Control Assets opens the "Global Objects" dialog (Web Assets tree; Properties; Content row "Open Edit Property Dialog" opens "Edit Browser File"); Edit User Control References (Use Web Control checked; Control URL; radios disabled); T-1 pattern | Asset route and UserControl pattern (T3-T4 relevance) |

Knowledge state of everything above: **observed** (source copies and records read; not runtime-verified in this environment by T2).

## Relevant procedures and observed precedents (for later tasks)

- **Form creation (T2):** `recipes/forms/create-basic-form.md` verified (two executions). Finish persists the Form immediately; the Designer opens it clean. Observed in EXP-002 and EXP-002-R2.
- **Script Language:** shown in Properties > Form > Behavior. Observed value on every FX_ Form read so far: Visual Basic (EXP-093, EXP-094, EXP-095, EXP-102, EXP-052). C# is observed only on Mock Forms (EXP-128: MockInventoryDashboard and MockLoginPortal scripts). **Changing an FX_ Form to C# has no observed procedure in this repository.**
- **Script Editor:** opened from the blue pencil (`#btnEditDownload`); dialog "Script Editor", tab "Script", buttons OK/Cancel/Help/Download. Cancel on an empty script left the Designer dirty (EXP-093); Cancel on a saved script left it clean (EXP-094). Not used in T2.
- **Asset route:** Edit > Web User Control Assets opens "Global Objects" (Web Assets tree, Properties, OK/Cancel/Help). EXP-128 used Cancel only; New, Import, Delete and Copy were never clicked. The creation control for a new asset is therefore **not observed** in this repository. Relevant to T3, not T2.
- **UserControl component (design time, EXP-128 T-1 pattern, observed):** Specific Attributes `User Control Name` = `V(<var>)`; Form variables `<var>Asm` = `ASSEMBLY(UNIFIED)` and `<var>Url` = `URL(METADATA()<asset path>)`; Edit User Control References dialog: Use Web Control checked, Control URL set, radios disabled (URL-type state not exposed; Web User Control Asset radio shows a filled dot in EXP-128 T6). Relevant to T3.

## Disagreements with the approved brief (for coordinator attention)

- **D-1 (path).** The brief names `evidence/EXP-128/assets/MockLoginPortal-form-script.cs.txt`. That path does not exist. The file is `evidence/EXP-128/MockLoginPortal-form-script.cs.txt` (the path EXP-130 cites). Content read from the actual file.
- **D-2 (script language, unverified procedure).** The brief requires the FX_BridgeTest Form Script language to be C#. Every FX_ Form observed uses Visual Basic. Changing Script Language to C# on a new Form has no observed procedure here. The C# shape is observed only on Mock Forms. This is a candidate step for T3, not a verified one. The T2 creation step does not change Script Language.
- **D-3 (Designer-generated Form variables).** The UserControl pattern in EXP-128 and the EXP-130 spec imply Form variables `<var>Asm` and `<var>Url` (the EXP-130 spec lists them as Designer-generated). The brief authorizes exactly one UserControl component but does not mention these variables. Expected to appear when Edit User Control References is configured. T3 must record any such Form variable that appears, rather than create it by hand. Treated as a Designer side effect, not as a new object.
- **D-4 (invoke arity).** The brief's candidate `WSForm.invoke("FX_Echo", "bridge-probe", callback)` has one argument. The Mock source uses `WSForm.invoke(name, arg1, arg2, cb)` (two arguments) and the EXP-130 spec records the bridge contract as UNK. The Mock source supports the invoke-with-callback shape only. The one-argument form is the brief's candidate and is **unverified**. The brief's bounded test is the verification; no alternative signature will be tried.
- **D-5 (C# method shape).** The Mock C# method returns `string` and takes two string parameters. The brief's `public string FX_Echo(string s)` is the same shape with one parameter. Consistent.
- **D-6 (ownership).** EXP-131 T1 record lists account ownership as unresolved. The coordinator handoff records that the operator confirmed the account is the operator's own and accepted AC-1. This review uses that handoff disposition. The T1 record is not edited for this review.

## Limitations of this review

- `UserControl.js` was not read (excluded). The bridge contract is **unresolved**.
- EXP-093 to EXP-096 were reviewed through targeted reads and greps, not line-by-line. Their Form Script procedures are summarized above with their observed states.
- EXP-128 copies are text-equivalent, not byte-exact (flattened line breaks), per their headers.

## Decision

No disagreement blocks T2 creation of FX_BridgeTest. D-1 to D-6 are carried into the record. T2 proceeds to the Designer clean-state check and the account/absence gates (already passed in T1; re-checked at T2 start), then the basic-Form recipe.
