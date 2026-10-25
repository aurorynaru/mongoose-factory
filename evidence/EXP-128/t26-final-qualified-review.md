# EXP-128 T26 - Final qualified review and operator acceptance preparation

Worker-authored. Repository and evidence review only, 2026-10-25. Written after the T25 boundary.

- **Browser:** no browser tool was called in T26. No tab was listed, selected or read. The last observed browser state is the T25 final state (section 13).
- **Git:** no shell tool is available, so no Git command was run. Git review remains an operator item (D-10).
- **Experiment status:** NOT accepted. EXPERIMENT_COMPLETE is not declared. Final acceptance is the operator's decision.
- **Knowledge state:** every finding is **observed** (read-only observation, design time, source level or runtime display as stated per row). Nothing is replay-verified. Candidate techniques are unverified.
- **Account name:** written as `<signed-in user>` wherever it would otherwise appear. No credential value was displayed or copied.
- **Line numbers:** "source line" means the editor line of the Form Script (the `using System;` line is line 1). In `MockLoginPortal-form-script.cs.txt` the copy has a 9-line header, so copy line = source line + 9. The dashboard copy uses source numbering. Where an earlier record used copy-file numbers, this file says so.

---

## 1. Executive summary

**What the study established** (level of evidence in brackets):

1. **Three Forms and their roles.** `MockLoginPortal` is a Flex Form with one UserControl hosting `mocklogin/index.html` and a C# Form Script with `ProcessLogin`, `LoadMockLoginJson` and a private alert helper [design-time and source]. `MockInventory` is a Normal data Form with a grid and detail layout, no UserControl and a VB.NET skeleton with no methods [design-time and source]. `MockInventoryDashboard` is a Normal Form with one UserControl hosting `MockInventory/index.html` and a C# Form Script with `LoadInventoryFromIDO`; its Form event row `StdFormPredisplay` also names that method [design-time and source].
2. **Login bridge (source level).** `mocklogin/script/app.js` calls `WSForm.invoke("ProcessLogin", username, password, callback)` through `invokeAsync`. The C# method has a matching name and two string parameters and returns a string. The bridge implementation in `UserControl.js` was never read, so the callback and return contract is unverified.
3. **Dashboard bridge (source level).** `MockInventory/index.html` calls `WSForm.invoke("LoadInventoryFromIDO", callback)`, `WSForm.getVarValue("vInventoryJson", callback)` and `MG.onReady(...)`. No copy contains `WSForm.generate`, `setVarValue`, `getCompValue`, `setCompValue` or any other `MG.*` call.
4. **Runtime look (T11, no interaction).** The login card shows empty fields and no error. The MockInventory detail view shows record key 15. The dashboard shows 14 rows and an advancing "Updated" timestamp. **No login was performed and no individual WSForm or MG call was observed.**
5. **Global variables.** 54 global definitions were listed. `vInventoryJson` is a persistent global with an empty design-time value. `vMockLoginJson` is not a global; it is a Form variable written by C#.
6. **MockLoginIDO.** The Form's primary collection is `MockLogin` (table `MockLogin`, alias `mock_login`), with 36 property names in the Form-side view and `Username` absent from that list. **The IDO definition was not located** and is an operator-accepted limitation (Option C, T25).
7. **Login-to-dashboard link.** No inspected artifact shows it. The two chains share no variable, no navigation and no caller of `LoadMockLoginJson`.

**What remains open** (section 10): `UserControl.js` (never read); the MockLogin IDO definition (accepted limitation); the login-to-dashboard relationship; global Script bodies (names only, 131 captured with one uncaptured range); the runtime login trace (not performed); the `Username` property conflict; and several view-limited readings.

**Counts (controller-verified through T25):** 377 browser actions attempted (358 returned ok, 19 errors); 515 browser reads attempted (499 ok, 16 errors). T26 added 0 browser actions and 0 reads. Full reconciliation: section 6.

**Acceptance:** all five original acceptance criteria are **pending**. Each is partly met, with the qualifications in section 9. The study is a qualified observational deliverable and is **ready for a qualified-acceptance decision by the operator**, provided the exceptions in section 8 are dispositioned. It does **not** satisfy every original criterion and must not be recorded as complete.

**Recommended decision:** section 11, Decision A.

---

## 2. T26 sources and method

**Read in T26:**
- `AGENTS.md` (240 lines, read in full, `C:\AI\mongoose-factory\AGENTS.md`).
- The experiment record: lines 1 to 133 (header and T1); 1869 to 1966 (T17 section); 1967 to 2277 (T12); 2279 to 2382 (T19); 2384 to 2504 (T20); 2506 to 2603 (T21); 2606 to 2710 (T22); 2714 to 2805 (T23); 2808 to 2906 (T24); 2909 to 3030 (T25).
- Controller audits: `harness-audit-T19.md` to `T25.md` (summary and error lines, lines 1 to 18 each); `harness-audit-T18.md` (lines 1 to 18); `harness-audit-T15.md` and `T16.md` (AGENTS.md match counts only).
- `evidence/EXP-128/t19-audit-reconciliation.md` (full).
- Copies: `MockLoginPortal-form-script.cs.txt` (full); `MockInventoryDashboard-form-script.cs.txt` (full); `assets/mocklogin_script_app.js.txt` (full); `t21-global-script-names-observed.txt` (full); `assets/*.txt` (Grep for WSForm, MG and getElementById tokens only); `global-variables-inventory.txt` (Grep count only; no line displayed).

**Not re-read in T26:** the T2 to T11 sections, the pre-T12 BLOCKED section (lines 1812 to 1868) and the T13 to T16 material. Their facts are used as cited in T12 and T19, which were read. Also not read: `MockInventory-form-script.cs.txt`, `MockLoginIDO-form-script.cs.txt`, `MockLoginIDO-metadata.txt`, the full values of `global-variables-inventory.txt`, the index HTML copies in full, the style copies, any PNG, any `evidence/playwright` file, any console log, the four docs guides and `UserControl.js` (never readable).

**Controller audit files not re-read in T26:** `harness-audit-T1.md` to `T14.md` and `T17.md`. Their totals rest on the T19 reconciliation, whose method was checked in T19 against the controller rows. T26 did not re-derive those rows.

**Repository calls in T26 before writing:** 34 (19 Read, 9 Grep, 6 Glob; no errors).

---

## 3. T26 verification results and corrections

### 3.1 Checks performed

| ID | Claim checked | Result |
| --- | --- | --- |
| V-1 | AGENTS.md is 240 lines and was read in full | Verified |
| V-2 | The T16 controller audit (pre-T12 section, header label T16) shows no AGENTS.md read | **Verified.** `harness-audit-T16.md` has 0 occurrences of "AGENTS". `harness-audit-T15.md` has 1 occurrence (T19 reports it as the first row of that task; the position was not re-checked in T26). |
| V-3 | MockLoginPortal Form Script: `ProcessLogin(string, string)` signature at source 16; `LoadCollection("MockLogin", ...)` at source 29 to 35; stored-password read at source 50; password comparison at source 64; `vMockLoginJson` written at source 62 and 128; private helper at source 85; `Application.ShowMessage` at source 89; `LoadMockLoginJson` at source 96; no caller of `LoadMockLoginJson` in any copy | **Verified** (copy lines 25, 38 to 44, 59, 71, 73, 94, 98, 105, 112 and 137, minus 9) |
| V-4 | `ProcessLogin` return strings `"missing"`, `"empty"`, `"invalid"`, `"ok"`, `"error"` | **Verified** at source lines 23, 44, 67, 71 and 77. T19 cited 32, 53, 76, 80 and 86, which are copy-file lines. See C-T26-1. |
| V-5 | Login JavaScript: one bridge call, `invokeAsync("ProcessLogin", usernameInput.value.trim(), passwordInput.value, 15000)`; `invokeAsync` body calls `WSForm.invoke(methodName, arg1, arg2, function (result) {...})` inside `try`; a timer rejects with `"Timed out: " + methodName`; `handleLogin` logs the result or the error only | **Verified** |
| V-6 | Dashboard Form Script: `LoadInventoryFromIDO` at source 12; `LoadCollection("MockInventory", ...)` at source 19 to 25; property string at source 16 to 17; index mapping `PropertyValues[0..5]` at source 36 to 41; `vInventoryJson` write at source 51; commented `Application.ShowMessage` at source 53 to 55; no try/catch | **Verified** |
| V-7 | WSForm and MG tokens in asset copies: `WSForm.invoke` (`app.js`, `MockInventory/index.html`); `WSForm.getVarValue` (`MockInventory/index.html`, `MockInventory/script.js`); `MG.onReady` (`MockInventory/index.html`); no `WSForm.generate`, `setVarValue`, `getCompValue`, `setCompValue` or other `MG.*` token | **Verified as token presence.** Each dashboard token occurs 3 times, which includes `typeof` guards and error text. Call sites are taken from T12 section 2.6 and T19. |
| V-8 | `MockInventory/script.js` reads `getElementById("inventoryBody")` and `getElementById("search")` | **Verified.** This matches the corrected statement in T19 (C-3). |
| V-9 | Global script names: 131 names captured (48 + 49 + 34); uncaptured range between `GetChartTypeByChartStyle` and `GetDataLakeObjects`; no name containing Mock, UserControl or WSForm | **Verified** from `t21-global-script-names-observed.txt` |
| V-10 | The credential-named globals `MPUsername` and `MPPassword` each appear once on a line carrying a withheld or name-only note | **Verified by count only.** The lines were not displayed. D-12 remains for operator confirmation. |
| V-11 | Controller totals for T20 to T25 (summary line 3 and error line 15) | **Verified.** They match the worker tallies except T25: the controller counts the wait as a read, giving 8 actions and 9 reads (the worker counted 9 and 8). |
| V-12 | Edit menu: 18 entries in T1 (Form open); 17 in T20 and T21 (no Form open). The only difference is "Form Script". | **Verified from the lists.** That the menu depends on an open Form is an inference. |
| V-13 | T1 self-assessment of AC-1 | **Verified:** T1 recorded "Partly met" (T1 line 129). T19 raised it to "passed (qualified)" without a new stated basis. Restored in section 9. |
| V-14 | The Select Form dialog has no description column | **Verified** (T1). The brief's request for descriptions is recorded as "none shown". |
| V-15 | Line-number conventions in the record | **Mixed.** Copy-file numbers appear in T22 and in the T19 return-string statement; source numbers appear elsewhere. The MockLoginPortal copy has a 9-line header. |

### 3.2 Corrections (C-T26)

| ID | Earlier statement | Correction | Status |
| --- | --- | --- | --- |
| C-T26-1 | T19 lists the `ProcessLogin` return statements at lines 32, 53, 76, 80 and 86 under a header stating source lines. | These are copy-file lines. Source lines are 23, 44, 67, 71 and 77. | Corrected (labelling only; no content change) |
| C-T26-2 | T19 reassessed AC-1 as "passed (qualified)". | Restored to "partly met" (section 9). The T1 self-assessment was correct for the source-review element. | Corrected |
| C-T26-3 | T12 and T19 cite 17 or 18 controller audit files. | 25 audit files exist, `harness-audit-T1.md` to `T25.md`. | Corrected |
| C-T26-4 | T19 reports one repository error in H18 and none in H19, H23 or H25. | H18: 1 (Grep timeout). H19: 2 (a Grep regex parse error on the worker's own query; a denied Grep of `.git/logs/HEAD`). H23: 1 and H25: 1 (each a denied Grep on a tool-results snapshot file). | Corrected |
| C-T26-5 | T19 lists one worker-directed file outside `evidence/EXP-128/` (`t4-components-snapshot-check.yml`). | The T24 record also saved two snapshots through a filename argument: `evidence/playwright/t24-webclient-baseline-snapshot.yml` and `evidence/playwright/t24-designer-final-snapshot.yml`. | Corrected (E-11) |
| C-T26-6 | A-1 (MockInventory accidental unsaved flag) is recorded as closed with No. | The record gives two dispositions: an operator manual refresh that discarded the state (record lines 585 and 662), and a close answered No (line 720; T19 reports the H8 controller row "Save prompt No"). The record does not reconcile them. | Unresolved (E-10) |
| C-T26-7 | "Edit menu 18 entries" (T1) and "17 entries" (T20, T21) appear to conflict. | Explained as a context difference (V-12). | Explained |

---

## 4. Final architecture synthesis

### 4.1 Objects

| Object | Kind and type | Collection (IDO) | UserControl and asset | Form variables and globals | Form Script | Runtime (T11) |
| --- | --- | --- | --- | --- | --- | --- |
| `MockLoginPortal` | Form, Flex (T2; T17-01) | Primary collection row present; Collection, Collection Name and Options values blank (T2; Q-10). No visible data binding. | `userControl1_USER` (Binding None; no events) → `mocklogin/index.html` (Use Web Control; Control URL). URL-type radio state unresolved. | Form-Persistent (3): `UserCtrl_userControl1_USER`; `UserCtrlAsm_userControl1_USER` = `ASSEMBLY(UNIFIED)`; `UserCtrlUrl_userControl1_USER` = `URL(METADATA()mocklogin/index.html)`. Writes `vMockLoginJson` (Form variable, not global). | C#, source 1 to 140 (141 is the empty last line). `ProcessLogin` (public), `ShowMongooseAlert` (private), `LoadMockLoginJson` (public). | Login card; empty fields; no error text (t11-01). No interaction. |
| `MockInventory` | Form, Normal (T1; T4) | `MockInventory` (table `MockInventory`, alias `mock_inv`); 36 property names in the Form-side list; `Warehouse` absent from that list (I-2). Options and filter not read (Q-11). | None. 24 tree rows: 2 panes, a grid with 7 columns, 14 controls (Static and Edit pairs). | No Form-level category shown. Global-Persistent view partial (35 of about 48). | VB.NET skeleton, 20 lines; `Option Explicit On`, `Option Strict On`; no methods; no IDO call; no variable; no event. | Detail layout, ID 15 with focus; grid shows only the ID column in the screenshot although the tree lists 7 headers (I-3; t11-02). |
| `MockInventoryDashboard` | Form, Normal (T6) | `MockInventory` (no secondary) | `userControl1_USER` (Binding None; size 150 × 50) → `MockInventory/index.html`. Use Web Control; Control URL; Asset radio filled (t6-05). | Form-Persistent (5): `fds_SC2`; `InitialCommand` = `FilterInPlace`; `UserCtrl_userControl1_USER`; `UserCtrlAsm_userControl1_USER` = `ASSEMBLY(UNIFIED)`; `UserCtrlUrl_userControl1_USER` = `URL(METADATA()MockInventory/index.html)`. Writes `vInventoryJson` (global per T9; runtime binding unresolved, Q-5). | C#, 59 lines (complete; no indentation in copy). `LoadInventoryFromIDO()` (public void). | 14 rows SKU001 to SKU014; summary cards Total Items 14, Total Units 1,075, Low Stock 3, Out of Stock 1; footer "14 records"; timestamp 4:34:47 to 4:34:57 PM with no interaction (t11-03). |
| `MockLoginIDO` | Form, Normal, data form (T10) | `MockLogin` (table `MockLogin`, alias `mock_login`); 36 names; `Username` absent from the list while the grid binds `object.Username` (I-2; Q-2) | None | None | VB.NET skeleton, 19 text lines plus an empty line; no methods | Not run (tab already open; not opened by T11) |
| IDO `MockLogin` | IDO | Name seen in the Form and in `ProcessLogin` source only | — | — | — | **Definition NOT located** (T22 to T25). Operator-accepted limitation (Option C). |

Notes: the `MockLogin` name is also the name of a Form in the Select Form list (T1: `MockLogin`). That Form was not opened and its relation to the IDO is unknown.

### 4.2 JavaScript-to-Form call map

| # | Call as written (file) | Form feature reached (source) | Observed at runtime | State |
| --- | --- | --- | --- | --- |
| 1 | `WSForm.invoke(methodName, arg1, arg2, callback)` inside `invokeAsync`; called as `invokeAsync("ProcessLogin", usernameInput.value.trim(), passwordInput.value, 15000)`. The `15000` is `invokeAsync`'s `timeoutMs`, not a `WSForm.invoke` argument (`mocklogin/script/app.js`). | `MockLoginPortal.ProcessLogin(string username, string password)` returns string | No. No login was performed. | Name and arity match in source. Return-to-callback contract **unverified** (UserControl.js unread). |
| 2 | `WSForm.invoke("LoadInventoryFromIDO", callback)` in `invokeLoadInventoryFromIDO()` (`MockInventory/index.html`) | `MockInventoryDashboard.LoadInventoryFromIDO()` (void; no arguments) | Not observed directly. The populated table is consistent with it. | Name match in source. Invocation **unobserved**. |
| 3 | `WSForm.getVarValue("vInventoryJson", callback)` in `getInventoryJson()`, after call 2, inside a 15 s timer (`MockInventory/index.html`) | Variable `vInventoryJson` (Form or global; definition unresolved, Q-5) | Rendering consistent | Name match. Definition **unresolved**. |
| 4 | `MG.onReady(initializeInventoryDashboard)` at the end of the page script, guarded by `typeof` (`MockInventory/index.html`) | Page-ready hook; `initializeInventoryDashboard` runs `loadInventory()` once | Consistent with the populated view | Call text in source. Hook behaviour **unverified**. |
| 5 | `WSForm.getVarValue("vInventoryJson", ...)` in `MockInventory/script.js` (unreferenced) | Same variable as call 3 | No page loads this file | Unreferenced; uses ids absent from `index.html` (I-9) |
| 6 | `typeof` guards for `WSForm`, `WSForm.invoke`, `WSForm.getVarValue`, `MG`, `MG.onReady` (`MockInventory/index.html`) | None (guards and error text naming `UserControl.js`) | — | Source |
| 7 | Form Event Handlers, group `StdFormPredisplay` (Designer, not JavaScript): row 0 `Collection Refresh`; row 1 `Form Script Method` `LoadInventoryFromIDO()` (flag false) | The same C# method as call 2 | Order at runtime **not observed** | Design-time rows (t6-07) |
| 8 | Not present in any copy: `WSForm.generate`, `WSForm.setVarValue`, `WSForm.getCompValue`, `WSForm.setCompValue`, any other `MG.*` | — | — | Absent in inspected copies. Absent in `UserControl.js` **unverified**. |
| 9 | `console.log("ProcessLogin completed:", result)` and `console.error(...)` in `handleLogin` (`app.js`) | None | — | Logs the return string or the error object, not the password. |
| 10 | Form variable `vMockLoginJson` written by C# (both login methods) | — | — | No inspected JavaScript reads it. Readers **unresolved** (Q-4). |

### 4.3 C# Form Script methods: what they do and which IDO calls they make

**MockLoginPortal.ProcessLogin(string username, string password) : string** (public; source 16 to 79)
- If either value is empty: alert "Username and password are required." and return `"missing"`.
- IDO call: `IDOClient.LoadCollection("MockLogin", "Username, Password, Store, Role", filter, "", 1)`, where `filter` is `Username = '<username with single quotes doubled>'`. Argument meanings beyond the property string are unverified (Q-6).
- No row: alert "No data found. No user matches '<username>'." and return `"empty"`.
- Otherwise: reads `PropertyValues[0..3]` of the first item (Username, Password, Store, Role); builds a dictionary; serialises it with Newtonsoft (indented); writes `ThisForm.Variables("vMockLoginJson").Value`.
- Stored value differs from the entered value: alert "Data received, but the password is incorrect." and return `"invalid"`.
- Match: alert "Data received:" followed by the JSON (which includes the stored password field; see S-2) and return `"ok"`.
- Exception: alert "Login error: " plus the message and return `"error"`.
- Variables set: `vMockLoginJson`. Events generated: none. Navigation: none. Return value: the string above.

**MockLoginPortal.ShowMongooseAlert(string message)** (private void; source 85 to 91)
- One active statement: `Application.ShowMessage(message);` (source 89). The `ThisForm.ShowMessage` lines (source 88 and 90) are comments. Every alert in `ProcessLogin` and `LoadMockLoginJson`'s callers route here.

**MockLoginPortal.LoadMockLoginJson() : string** (public; no parameters; source 96 to 136)
- IDO call: `IDOClient.LoadCollection("MockLogin", "Username, Password, Store, Role", "", "", 100)`.
- Builds one dictionary per returned row (Username, Password, Store, Role); serialises all rows; writes `vMockLoginJson` (source 128); returns the JSON (source 130).
- Catch: returns JSON with an `error` field holding the exception text.
- Callers: **none in any copy.** A caller would have to be in `UserControl.js` or other unread code.

**MockInventoryDashboard.LoadInventoryFromIDO() : void** (public; no parameters; source 12 to 56)
- IDO call: `IDOClient.LoadCollection("MockInventory", "Item, Description, Location, QuantityOnHand, ReorderLevel, Warehouse", "", "", 100)`.
- Per row: a dictionary keyed by the six names, filled from `PropertyValues[0..5]` in property-string order.
- Serialises the list (Newtonsoft, indented) and writes `ThisForm.Variables("vInventoryJson").Value` (source 51).
- No try/catch, no null check. Lines 53 to 55 are a commented-out `Application.ShowMessage`.
- Events generated: none. Reached from JavaScript by call 2, and from the design-time `StdFormPredisplay` row (call 7).

**MockInventory** and **MockLoginIDO** (VB.NET skeletons): no methods, no IDO call, no variable and no event.

**Methods a WSForm.invoke could call, by name in source:** `ProcessLogin`, `LoadMockLoginJson` (public), `LoadInventoryFromIDO`. Whether the bridge exposes `LoadMockLoginJson` by name is unresolved (UserControl.js unread).

### 4.4 Variables

- **Form-level:** `vMockLoginJson` (MockLoginPortal; written by `ProcessLogin` and `LoadMockLoginJson`; read by no inspected JavaScript; Form category not observed, Q-4). `vInventoryJson` (written by `LoadInventoryFromIDO`; read by JavaScript through `getVarValue`; present as a global definition at design time, Q-5).
- **Global (T9; `global-variables-inventory.txt`):** 54 entries in the Edit > Variable dialog: 48 default-coloured (Global-Persistent in the Form view) and 6 salmon-coloured (Global-Temporary). Persistence was read for three rows only:
  - `vInventoryJson`: Global True; Persistent True; empty value at design time; version "User version".
  - `SiteFormName` = `Sites` (no reference in inspected code).
  - `Parm_Site` = `~LIT~(DEFAULT)` (non-persistent; one row verified).
  - `MPUsername`, `MPPassword`, `LoginFoundUser` and `IncludeBadgeStatusVar`: names only; values withheld; no reference in inspected code.
  - `vMockLoginJson` is absent from the 54-row global list (read end to end).
- **Dashboard Form-Persistent extras:** `fds_SC2`; `InitialCommand` = `FilterInPlace` (effect unknown, Q-24).

### 4.5 Data flow

**Login chain (source level; not run):**
`mocklogin/index.html` (login card) → `app.js` submit handler → client validation (username at least 3 characters; password at least 6) → `setLoginLoading(true)` → `invokeAsync` → `WSForm.invoke("ProcessLogin", username, password, cb)` → [UserControl.js, unread] → C# `ProcessLogin` → `IDOClient.LoadCollection("MockLogin", ...)` → comparison → `ShowMongooseAlert` → `Application.ShowMessage` → `vMockLoginJson` written → return string → callback → `console.log` of the result → `setLoginLoading(false)`.
No navigation and no Form change appears in any inspected copy.

**Inventory chain (source level; runtime partly observed):**
`StdFormPredisplay` (design) and/or `MG.onReady` (page) → `LoadInventoryFromIDO` → `WSForm.invoke("LoadInventoryFromIDO", cb)` → C# `IDOClient.LoadCollection("MockInventory", ...)` → `vInventoryJson` written → `WSForm.getVarValue("vInventoryJson", cb)` → render. The page then repeats the cycle on a 5-second poll, with settings in `window.localStorage` under `inventoryDashboard.polling`. The 14 rows and the advancing timestamp were observed (T11). The individual calls were not.

**Link between the chains:** none observed. The chains share no Form variable (`vMockLoginJson` is read by no inspected code). No inspected code navigates or opens the dashboard after login. `LoadMockLoginJson` has no caller in any copy. The dashboard rendered in T11 without any login. **How a successful login leads to the dashboard is not shown by any inspected artifact** (Q-3).

**MockInventory Form:** a data Form with its own collection binding. It has no UserControl and no script method. The dashboard queries the same IDO by name (`"MockInventory"`), not through this Form's binding.

### 4.6 Source-level security and data-handling observations

Not executed. No value was read or recorded. These are source-level concerns for operator review (D-9), not demonstrated runtime disclosure.

- **S-1.** `ProcessLogin` compares the stored `Password` value (source 50) with the entered value by string equality (source 64). No hashing is visible in the copy.
- **S-2.** The stored password is placed in the JSON written to `vMockLoginJson` (source 62) and in the success alert text (source 70). The runtime effect is not observed.
- **S-3.** `LoadMockLoginJson` is public. It serialises every returned row's `Password` (source 119) into `vMockLoginJson` (source 128) and returns the JSON. It has no caller in any copy. It was not run. No exploit is asserted.
- **S-4.** `app.js` reads the password from the input at submit time and passes it as a bridge argument. The password toggle switches the input type. The console logs the return string or the error object, not the password.
- **S-5.** `MPUsername` and `MPPassword` exist as global names. Their values were not read. No reference was found in inspected code, and `ProcessLogin` reads the stored password from the IDO.
- **S-6.** Pattern checks over the 12 text copies found no literal credential value (T12 check; T19 scan of 3 flagged lines: two code assignments and one labelled global name). Redactions made: 0.
- **Recommendation:** review S-1 to S-3 before the login pattern is reused. Any runtime test is outside EXP-128.

### 4.7 Runtime observations (T11) and inconsistencies

**Runtime, no interaction (T11):**
- MockLoginPortal (`t11-01`): brand, "Sign in to your account", empty Username and Password fields, "Show password", "Sign In", footer. No error text.
- MockInventory (`t11-02`): detail layout; ID 15 with default focus; other fields empty in this view.
- MockInventoryDashboard (`t11-03`): header "INFOR MONGOOSE" and "Inventory Dashboard"; auto-refresh and alerts checkboxes; "every 5 sec"; "Updated" timestamp; "Refresh Data"; summary cards; table SKU001 to SKU014 with View buttons; footer "14 records". No loading or error text at settle.

**Inconsistencies (no root cause assigned):**
- **I-1.** SKU005 and SKU012 show Location and Warehouse values in each other's columns (dashboard). The C# maps Location to index 2 and Warehouse to index 5, matching the requested order. Whether the response order or the stored data is at fault is unverified (Q-7).
- **I-2.** `Warehouse` is absent from the 36-name MockInventory list, and `Username` is absent from the 36-name MockLogin list, although both are used by script or grid. Both would sort after the last rendered name, so the Details tree may cut off the list. The dashboard displays Warehouse at runtime. Whether `Username` exists on the IDO is unresolved (Q-2, Q-8).
- **I-3.** The MockInventory grid lists seven headers in the accessibility tree; the T11 screenshot shows only the ID column in the grid area (Q-9).
- **I-4.** The MockLoginPortal Form has no visible data binding, yet its UserControl's script reads an IDO by name. Whether the blank collection values are real is unresolved (Q-10).
- **I-5.** Save became enabled after the Script Editor was cancelled on MockInventory (T5, twice) and on MockLoginIDO (T10). It did not on MockLoginPortal (T3, T17) or MockInventoryDashboard (T6). Cause not established (Q-12).
- **I-6.** `vInventoryJson` is empty as a global definition at design time, yet the dashboard shows 14 records. Which definition holds the runtime value is unresolved (Q-5).
- **I-7.** Two load triggers exist for the dashboard: the design-time `StdFormPredisplay` row and the page's `MG.onReady` bootstrap. Whether one page load calls `LoadInventoryFromIDO` twice is not known (Q-13).
- **I-8.** Partial variable views: MockInventory Global-Persistent 35 of about 48; dashboard Form view 30 of 48. The full set of 54 was read in the T9 dialog.
- **I-9.** `MockInventory/script.js` is not loaded by its page and uses element ids (`inventoryBody`, `search`) absent from `index.html`. It looks stale (Q-15). No change was made.
- **I-10.** `InitialCommand` = `FilterInPlace` on the dashboard; its effect is not known (Q-24).

---

## 5. Candidate techniques (candidate_procedure; unverified; none replayed)

None of these was run. "Observed" below means a design-time or source-level reading only. Whether each is new to the factory is **not determined**, because the Hello World records were not read in T12 or T26 (Q-22).

- **T-1. Attach an HTML asset to a Form through a UserControl.** UserControl component with Specific Attributes `User Control Name` = `V(<var>)`; Form variables `<var>Asm` = `ASSEMBLY(UNIFIED)` and `<var>Url` = `URL(METADATA()<asset path>)`; reference dialog with Use Web Control checked. (Design time: T2, T6.)
- **T-2. Asset store.** Edit > Web User Control Assets (Global Objects dialog, Web Assets tree, Edit Browser File text view) holds the HTML, JS and CSS. Read-only use only. (Observed.)
- **T-3. Arguments from JavaScript into a C# Form Script method.** `WSForm.invoke(methodName, arg1, arg2, callback)` calls `public string M(string, string)`; the return value goes to the callback. (Source level; the callback contract depends on UserControl.js.)
- **T-4. No-argument call.** `WSForm.invoke("<Method>", callback)` calls `public void <Method>()`. (Source level; the dashboard display is consistent with it.)
- **T-5. C# to JavaScript through a Form variable.** `ThisForm.Variables("<name>").Value = json` in C#, then `WSForm.getVarValue("<name>", callback)` in JavaScript, with a timeout around the callback. (Source level.)
- **T-6. Read an IDO collection in C#.** `IDOClient.LoadCollection(idoName, "<comma-separated properties>", filter, "", rowLimit)`; iterate `response.Items`; read `PropertyValues[k].Value` in property-string order. (Source level; index-order assumption untested, I-1.)
- **T-7. Serialise rows to JSON in C#.** `JsonConvert.SerializeObject(list, Formatting.Indented)` with the `//<Ref>Newtonsoft.Json.dll</Ref>` comment. (Source level.)
- **T-8. Pre-display C# call.** Form Event Handlers group `StdFormPredisplay` with a `Collection Refresh` row followed by a `Form Script Method` row. (Design time; runtime order not observed.)
- **T-9. Client-side refresh and settings.** A `setTimeout` poll (5 s default, one timer at a time); settings in `window.localStorage`; a page-ready hook `MG.onReady(fn)` behind `typeof` guards. (Source level; the timestamp change was observed on screen.)
- **T-10. Client-side input checks before the server call.** Minimum lengths, field error elements and a loading state on the button. (Source level; not run.)
- **T-11. Global variable definitions as cross-Form state.** Edit > Variable entries with the Persistent flag. (Design time; the runtime definition behind `vInventoryJson` is unresolved.)
- **T-12. UserControl as the whole Form body.** A Normal or Flex Form whose only component is a UserControl, with no Web Client grid. (Rendering observed at T11.)

---

## 6. Controller audit reconciliation (authoritative counts)

**Method.** The controller audit files record each attempted tool call. Browser actions are tab selects, clicks, coordinate clicks, hovers, wheels, key presses and typing. Browser reads are snapshots, finds, screenshots, tab lists and waits. Repository calls (Read, Grep, Glob, Write, Edit) are counted separately. The H-number is the task number (`harness-audit-T<n>.md` = H<n>).

| H (task) | Actions | ok | errors | Reads | ok | errors | Repository tool errors | Session-limit messages | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| H1 to H17 (T1 to T17) | 317 | 298 | 19 | 443 | 432 | 11 | 3 | 2 | T19 reconciliation (controller rows checked in T19) |
| H18 (T18) | 0 | — | 0 | 0 | — | 0 | 1 | 0 | `harness-audit-T18.md` (read in T26) |
| H19 (T19) | 0 | — | 0 | 0 | — | 0 | 2 | 0 | `harness-audit-T19.md` (read in T26) |
| H20 (T20) | 9 | 9 | 0 | 18 | 17 | 1 | 0 | 0 | `harness-audit-T20.md` (read in T26) |
| H21 (T21) | 8 | 8 | 0 | 13 | 13 | 0 | 0 | 0 | `harness-audit-T21.md` (read in T26) |
| H22 (T22) | 15 | 15 | 0 | 6 | 6 | 0 | 0 | 0 | `harness-audit-T22.md` (read in T26) |
| H23 (T23) | 13 | 13 | 0 | 19 | 16 | 3 | 1 | 0 | `harness-audit-T23.md` (read in T26) |
| H24 (T24) | 7 | 7 | 0 | 7 | 7 | 0 | 0 | 0 | `harness-audit-T24.md` (read in T26) |
| H25 (T25) | 8 | 8 | 0 | 9 | 8 | 1 | 1 | 0 | `harness-audit-T25.md` (read in T26) |
| **Total H1 to H25** | **377** | **358** | **19** | **515** | **499** | **16** | **8** | **2** | |

**Arithmetic check.** H1 to H17 plus H20 to H25 (T20 to T25 actions: 9 + 8 + 15 + 13 + 7 + 8 = 60; reads: 18 + 13 + 6 + 19 + 7 + 9 = 72). 317 + 60 = 377. 298 + 60 = 358. 443 + 72 = 515. 432 + 67 = 499 (T20 to T25 read ok: 17 + 13 + 6 + 16 + 7 + 8 = 67). Read errors: 11 + 1 + 3 + 1 = 16.

**Controller error total.** Action errors 19 + read errors 16 + repository errors 8 + session-limit messages 2 = 45. This equals the sum of the `errors=` values across H1 to H25 (35 + 1 + 2 + 1 + 0 + 0 + 4 + 0 + 2 = 45).

**Worker tally versus controller.** The T20 to T24 worker tallies match the controller rows exactly. T25 differs only in classification: the worker counted the 3-second wait as an action (9 actions, 8 reads); the controller counts it as a read (8 actions, 9 reads). The controller figure is authoritative.

**T20 to T25 breakdown (worker tallies, consistent with controller counts):**
- Tab selects 14; clicks 36 (including 1 Filter in Place click in T23 and 1 in T25); coordinate clicks 2 (T20); hovers 2 (T21, T22); wheels 4 (T21 three, T22 one); key presses 2 (T23 Ctrl+A and Backspace). Total 60.
- Typing 0; F4 0; Save, OK, Apply, Yes, No clicks 0; drags 0; navigation 0; refresh 0.
- Reads: tab lists 6; snapshots 46; finds 4 (T21 three, T23 one); screenshots 15; waits 1 (T25). Total 72.

**Record-attested executions.** Through T25 the record attests 312 of the 358 tool-ok actions (252 from H1 to H17 per T19, plus all 60 from T20 to T25). The other 46 tool-ok actions have no record count: H7 (11), H9 (11 above the record's 26 reconstructed) and H15 (24).

**Flagged tool usage.** The controller flags `browser_type` once, in H1 (the permitted Select Form filter entry "Mock"). Every other audit reads `{}`.

**Exact-value and key checks.** Every audit reports `exact mismatches=0` and lists the expected names (MockLoginPortal, MockInventory, MockLoginIDO). Key sequences: H1 Control+a and Backspace; H6 F5 once; H23 Control+a and Backspace. No other key sequence appears in H18 to H25.

**Prohibited-tool hits.** `prohibited-tool hits=0` in every audit read (H18 to H25).

---

## 7. Action classification: tool return, UI observation, uncertain outcome, application mutation

| Class | Count or examples | Basis |
| --- | --- | --- |
| Tool return, ok | 358 of 377 actions | Controller rows (section 6) |
| Tool return, error (not dispatched by the record's convention) | 19 actions: 7 click timeouts; 11 "Ref not found" clicks; 1 hook denial | T19 section 3 |
| Record-attested executed | 312 of the 358 ok actions | Section 6 |
| Tool ok, no record count | 46 (H7 11; H9 11; H15 24) | T19 section 2 |
| UI observed in a read in the record | State reads in T20 to T25 (tree, grids, field values, status bar) | Record sections T20 to T25; screenshots as listed in section 12 |
| **Uncertain UI outcome** | (a) H9: six "Ref not found" clicks; each retry returned ok, UI effect not verified (T19). (b) T23 Filter in Place click: state changed between two reads; the IDO Name kept the selected record's value (T23). (c) T25 Filter in Place click: IDO Name showed ABDataServices; no status-bar text (T25). (d) T23 Control+A and Backspace in the IDO Name field: field read back unchanged; Save disabled (T23). (e) T4 coordinate click: Options not expanded; console 2 to 3 (T4). (f) H6 F5: reload effect unconfirmed (P-5). (g) H7 and H15 end states: no close row; an open Form (H7) and an open Script Editor (H15) at session end (T19 section 4). | Record sections named |
| **Application mutation** | **None confirmed.** Accidental unsaved flags on MockInventory (A-1) and MockLoginIDO (A-2); not saved; closed or discarded (disposition of A-1 recorded two ways, E-10). No Save, Apply, Regenerate, Delete, Check In or Out, Undo, Ctrl+S or compile in any task. The only OK in the study is H1's Identify Your Editing Scope OK, which is permitted (T19). | T19 sections 3 and 10; section 6 above |

---

## 8. Procedural exceptions register (for operator disposition)

Each row is retained as recorded. The "Disposition" column is for the operator. T26 did not dispose of any row.

| ID | Exception | Evidence | Disposition |
| --- | --- | --- | --- |
| E-01 | The T16 task (pre-T12 BLOCKED section) read no AGENTS.md. | `harness-audit-T16.md`: 0 matches (V-2); T19 section 5 item 5 | Operator |
| E-02 | Partial AGENTS.md reads recorded for T2, T3 and T8 (first 60, 30 and 30 lines). The controller records file path only, so these cannot be checked. | T12 section 8 (AC-1); T19 C-14 | Operator |
| E-03 | T4 continuation record states "AGENTS.md re-read (full, 130 lines)"; the file is 240 lines. Not explained. | T12 correction 9 | Operator |
| E-04 | H7 ended with the MockInventory Form open and its unsaved flag set. No close row. | T19 section 4; `harness-audit-T7.md` line 15 (session limit) | Operator (D-11) |
| E-05 | H15 ended with the MockLoginPortal Script Editor open. No close row. The later H16 found no editor and a changed account name (P-13). | T19 section 4; `harness-audit-T15.md` line 15 | Operator (D-11) |
| E-06 | Two repository Edit failures: H6 (experiment record, "String to replace not found"); H17 (MockLoginPortal copy, "String to replace not found"). No content change was inferred. | T19 section 3 (controller rows 39 and 105) | Recorded; operator to confirm no change |
| E-07 | H9 pre-compaction counts were reconstructed in the record (26); the controller shows 37 tool-ok actions. | T19 C-11; section 6 | Resolved as counts; UI effect unverified |
| E-08 | T4 console count rose from 2 to 3 after a coordinate click. The operator set 3 as the new baseline; the worker did not read the log; cause not verified. | P-4; T12 section 10 | Operator |
| E-09 | T4 and T5 Components, Event Handlers and Variables panels rendered blank in one task and were inaccessible in the next. One F5 reload was operator-authorised (H6 row 16); effect unconfirmed. | P-5 | Operator |
| E-10 | Accidental unsaved flags. **MockInventory (A-1):** Save enabled after Edit > Form Script was opened and cancelled (T4 completion, T5). Its disposition is recorded two ways: operator manual refresh discarding the state (record lines 585 and 662) and a close answered No (line 720; controller H8 "Save prompt No"). **MockLoginIDO (A-2):** Save enabled after Form Script editor open and Cancel (T10); closed with No. Save was disabled on MockLoginPortal and MockInventoryDashboard. | Record lines 556, 570, 585, 634, 656, 662, 720, 1643, 1691; T19 section 3 | **Operator to confirm** which disposition applies to A-1 |
| E-11 | Worker-directed files outside `evidence/EXP-128/`: `evidence/playwright/t4-components-snapshot-check.yml` (H5 row 15, filename argument); `evidence/playwright/t24-webclient-baseline-snapshot.yml` and `t24-designer-final-snapshot.yml` (T24, filename argument). The T25 record classes the T24 use as contrary to the standing restriction. | T19 section 5 item 8; T24 section "Worker-written files"; T25 "Reference and procedure qualifications" | Operator: keep, move or remove (none moved in T26) |
| E-12 | T23 pressed Control+A and Backspace in the runtime IDO Name criteria field. Tool ok; field read back unchanged; Save disabled. Typing was permitted only in the Filter in Place criteria. | `harness-audit-T23.md` key sequence; T23 section, step 4 | Operator |
| E-13 | T23 and T25 each clicked Filter in Place once (authorised metadata queries). Neither produced a verified criteria state. Both views showed an unrelated IDO, ABDataServices, auto-selected in a screenshot and snapshot text. | T23 and T25 sections; `t23-02`, `t25-02` | Operator boundary review |
| E-14 | T25 Form-menu click used a reference from the Web Client baseline snapshot, not the most recent snapshot. T25 did not re-read T23 and T24 in full. | T25 "Reference and procedure qualifications" | Operator (procedural note) |
| E-15 | T1 opened the Designer by its own button (MockLoginIDO), not through Select Form. The Designer Form menu has no Open entry. | T1 deviation; P-1 | Recorded; operator to note |
| E-16 | T24 stopped at the pre-filter gate without a Filter in Place click, because the IDOs Form opened in a state that looked like filter mode (blank field, glyph). T23 had opened in record view. The meaning of the glyph and the `[active]` flag stays unresolved. | T24 section (gate stop); T25 section; Q-26 | Operator (superseded by Option C) |
| E-17 | Relative-path screenshot filenames (H9 `t6-10`; H10 `t7-*`; H15 `t12rec-01`). Harmless; differs from the usual form. | T19 section 5 item 6 | Recorded |
| E-18 | `t12rec-01-script-editor-open-start.png` has no record section, provenance by controller only (H15 row 16); not viewed. | T19 C-13; Q-21 | Operator |
| E-19 | "T5-to-T6 task-boundary overrun" (Q-20) carried in six places but never defined; the bounded instruction texts for H6 to H8 are not retained. | T19 section 6; D-5 | Operator: define or withdraw |
| E-20 | Account name visible in the status bar of 97 PNG files and in snapshot files with session identifier fragments. No image or snapshot was reviewed in T26. | D-7; T22 to T25 notes | Operator: privacy review before sharing |
| E-21 | Global Script entry: the brief required a copy in T3; none was written (T3 did not open the entry). T21 captured names only. | P-3; Q-14; D-8 | Operator |
| E-22 | Repository tool errors not otherwise recorded: H18 Grep timeout; H19 Grep regex parse error on the worker's own query and denied Grep of `.git/logs/HEAD`; H23 and H25 denied Grep on tool-results snapshot files. None changed any file. | Section 6; C-T26-4 | Recorded |
| E-23 | The Git state of EXP-128 (untracked record and evidence folder; tools changes outside the experiment) is unverified in T26. | T12 section 11; D-10 | Operator Git review |

---

## 9. Acceptance matrix (T26)

Status vocabulary follows the coordinator's accepted values: `passed`, `failed`, `pending`, `not_applicable`. **No criterion is `passed`.** Each is `pending` because the original criterion is not fully met, even where the operator accepts the limitation. Acceptance of the qualified study is a separate decision (section 11).

| AC | Original criterion | Status | Evidence supporting it | Qualifications and gaps | What would close it |
| --- | --- | --- | --- | --- | --- |
| **AC-1** | Sources reviewed at the start of each task; session usable; User scope; starting Designer Form recorded clean; Edit menu entries and Mock Form names recorded. Evidence: gate screenshots. | **pending** (partly met; T1 self-assessment restored, V-13) | Gate elements recorded with screenshots: starting Form MockLoginIDO clean with Save disabled (T1; `t1-01`); Edit menu 18 entries with Form open (`t1-01`); Form menu (`t1-02`, `t1-03`); Select Form filtered on Mock, six names (`t1-04`); User scope at each gate (record); session usable at each gate (record). | **Not met for the source-review element.** H16 read no AGENTS.md (E-01, V-2). T2, T3 and T8 partial reads (E-02) cannot be checked by the controller. T4 continuation line count unexplained (E-03). The Select Form list has no description column (V-14). The Designer was opened by its own button in T1 (E-15). Account name changed in T15 to T16 and was restored by the operator (P-13). | Operator waiver of E-01 to E-03 (recorded as waived, not as met), or the criterion stays pending. |
| **AC-2** | For each of the three Forms: type, collections, Components tree, UserControl references, event handlers and variables recorded; Form Script copied verbatim (or reason). Evidence: screenshots and `.txt` copies. | **pending** (partly met) | Type: Flex (MockLoginPortal), Normal (MockInventory, MockInventoryDashboard). Components recorded for all three (`t2-05`, `t2-06`; `t4-06`, `t5-05`; `t6-01`). UserControl references (`t2-15`; `t6-05`). Event handlers (`t2-16`; `t4-07`, `t5-06`; `t6-06`, `t6-07`). Variables (`t2-17` to `t2-20`; `t4-08`, `t5-07`, `t5-08`; `t6-08`). Scripts: `MockLoginPortal-form-script.cs.txt` (source 1 to 141); `MockInventory-form-script.cs.txt` (VB, 20 lines); `MockInventoryDashboard-form-script.cs.txt` (59 lines; `t6-09`, `t6-10`). | MockLoginPortal: Form collection values blank (Q-10); the script's indentation and two blank lines at source 78 to 97 are not visually verified (operator accepted as nonblocking). MockInventory: collection Options and filter unread (Q-11); Global-Persistent view partial (35 of about 48); Global-Temporary not in view. Dashboard: copy has no indentation; Form-view globals 30 of 48 (full set in T9). Global Script entry: names only (Q-14; E-21). | Read the MockInventory collection Options and filter; complete the global-variable Form views (or accept T9); read the Global Script bodies, if required; or accept the qualifications. |
| **AC-3** | Web User Control assets referenced by the Forms: listed and copied verbatim with every WSForm and MG call recorded; related global variables and MockLoginIDO's properties and methods recorded. Evidence: screenshots and `.txt` copies. | **pending** (partly met) | Asset tree (`t7-01`, `t7-02`, `t7-03`, `t7-05`, `t7-06`). Copies: `mocklogin/index.html`, `MockInventory/index.html`, `mocklogin/script/app.js`, `mocklogin/style/app.css`, `MockInventory/style.css`, `MockInventory/script.js` (unreferenced). Call inventory (section 4.2; V-7). Global variables: 54 names; `global-variables-inventory.txt`; `t9-01`, `t9-02`. MockLogin Form-side view: 36 names (`MockLoginIDO-metadata.txt`; `t10-03`, `t22-03`). | **`$app/scripts/UserControl.js` not read or copied**, though both HTML pages load it (blank Properties pane in T8 and T20, `t8-02`, `t20-02`, `t20-03`; D-13). Its absence leaves the WSForm.invoke, getVarValue and MG.onReady contracts unverified. MockLogin IDO definition not located (Option C accepted: the definition, property classes, key flags, methods and the `Username` property remain unrecorded). Other asset folders not expanded (Q-16). | Operator decision on D-13 (manual read-only check; a new bounded authorisation; or accept the gap). The MockLogin IDO remains an accepted limitation under Option C. |
| **AC-4** | Runtime look at the three Forms with no interaction; T12 synthesis maps each JavaScript call to the Form feature it reaches; candidate techniques marked unverified. Evidence: screenshots and `.txt` copies. | **pending** (partly met) | Runtime display of each Form, one screenshot each, no interaction (`t11-01`, `t11-02`, `t11-03`). Synthesis: section 4.2 (call map, source level) with corrections in T19 and this review. Candidate techniques marked unverified (section 5). | No runtime login: `ProcessLogin`, its alerts and `vMockLoginJson` writes were not observed. No individual WSForm or MG call observed. The dashboard's polling and load triggers (I-7) and the login-to-dashboard link (Q-3) are untraced. | A separately authorised runtime trace in a new brief (outside EXP-128's read-only scope). |
| **AC-5** | Nothing saved or created; every dialog and editor closed with Cancel or close; accidental changes discarded with No; no credential value copied; no runtime interaction beyond opening and closing; User scope only; no task-boundary overrun; final audit with counts, file inventory and final state. | **pending** (partly met, qualified) | Controller `prohibited-tool hits=0` in every audit (H18 to H25); no Save, OK (except H1 scope), Apply, Regenerate or Delete in any task (T19 section 3); no creation; credential pattern checks (S-6); User scope at every gate; this review supplies the final audit (sections 6, 12, 13). | Closing and boundary elements: H7 (MockInventory open and flagged) and H15 (Script Editor open) ended without a close row (E-04, E-05). A-1 disposition recorded two ways (E-10). T23 key presses in the IDO criteria field (E-12). T24 and H5 filename snapshots outside the directory (E-11). Task-boundary item Q-20 undefined (E-19). D-12 line not displayed (V-10). Screenshot and snapshot privacy review not done (E-20). Git review not done (E-23). | Operator dispositions of E-04, E-05, E-10, E-11, E-12, E-19 and E-20. |

**Overall.** No criterion is fully met. The study delivers observations, a source-level architecture, a reconciled count and a list of candidate techniques, with the gaps above stated openly.

---

## 10. Consolidated open questions

| ID | Question | Status |
| --- | --- | --- |
| Q-1 | `UserControl.js`: WSForm.invoke, getVarValue and MG.onReady implementations; the callback and return contract; whether public C# methods other than `LoadInventoryFromIDO` can be called by name. | Open (D-13) |
| Q-2 | MockLogin IDO definition: project, tables, property classes and bindings, keys, methods; whether `Username` exists; whether an IDO named `MockLoginIDO` exists. | **Accepted limitation** (Option C, T25). Not a continuation of EXP-128. |
| Q-3 | Login-to-dashboard relationship. No inspected artifact shows it. | Open (D-3): accept as unresolved, or a new brief |
| Q-4 | `vMockLoginJson`: Form category, persistence, readers. | Open |
| Q-5 | `vInventoryJson`: which definition `ThisForm.Variables` and `getVarValue` bind to at runtime. | Open |
| Q-6 | `LoadCollection` argument meanings (empty strings; `1`; `100`). | Open |
| Q-7 | Cause of the SKU005 and SKU012 swap (I-1). | Open |
| Q-8 | Whether the property lists are truncated (I-2); whether `Username` is an IDO property. | Open (part of Q-2) |
| Q-9 | MockInventory grid header discrepancy (I-3). | Open |
| Q-10 | Whether the MockLoginPortal collection blanks are real (I-4). | Open |
| Q-11 | MockInventory collection Options and filter; Global-Temporary in the MockInventory Form view; any Form-Temporary category on the dashboard. | Open |
| Q-12 | Why Save became enabled after the editor was cancelled on some Forms and not others (I-5). | Open |
| Q-13 | Whether one dashboard page load calls `LoadInventoryFromIDO` twice (I-7). | Open |
| Q-14 | Global Script entries: source bodies (names only; 131 captured with one uncaptured range). | Narrowed (T21); source open (D-8) |
| Q-15 | `MockInventory/script.js`: keep or remove (I-9). | Open (no change made) |
| Q-16 | Unexpanded asset folders (`$app/appbuilder`, `$app/apphub`, `$app/images`, `mongoose`, `sohoComponents`, `sohoxi`) and the root file `custom`. | Open |
| Q-17 | Purpose of `MPUsername`, `MPPassword`, `LoginFoundUser` and `IncludeBadgeStatusVar` (values withheld). | Open |
| Q-18 | H7 and H15 record sections: now counted by the controller (H7 12 actions, 19 reads; H15 24 actions, 27 reads); UI state at session end unrecorded. | Counts resolved; UI state open (E-04, E-05) |
| Q-19 | H9 counts: the controller shows 43 actions (37 tool ok). | Resolved as counts; UI effect open (E-07) |
| Q-20 | "T5-to-T6 task-boundary overrun" undefined. | Open (E-19; D-5) |
| Q-21 | `t12rec-01-script-editor-open-start.png`: purpose and content. | Open (E-18) |
| Q-22 | Whether the candidate techniques are new to the factory. Hello World records not read. | **Not determined** |
| Q-23 | Git review of the untracked EXP-128 files and the tools changes. | Operator (D-10; E-23) |
| Q-24 | Meaning of `InitialCommand` = `FilterInPlace` and of the funnel glyph beside the dashboard title. | Open |
| Q-25 | Whether a data change raises the dashboard's alert toast. | Open (untested) |
| Q-26 | Meaning of the filter glyph beside the IDOs tab title and of the `[active]` flag when no status-bar text is shown (T24, T25). | Open |
| Q-27 | The Form named `MockLogin` (in the Select Form list; not opened): whether it is bound to IDO `MockLogin`. | Open (not requested) |
| Q-28 | Whether the record's mixed line-number conventions (V-15) hide any other error. | Checked for the Form Scripts in T26; no further error found |

---

## 11. Operator decision and recommendation

**Decision A (recommended): accept EXP-128 as a qualified observational study, with the gaps retained as open items, not waived.**

Under Decision A:
- The study's observations are recorded as observed, not verified.
- AC-1 to AC-5 remain `pending` (partly met). Acceptance records the qualified study; it does not mark any criterion passed.
- The retained gaps are: UserControl.js (D-13); the runtime login trace; the global Script bodies (D-8); the MockLogin IDO definition (accepted under Option C); the MockInventory collection Options; the MockLoginPortal blank collection; the login-to-dashboard link (D-3); Q-20 (define or withdraw).
- The operator dispositions the exceptions in section 8, in particular E-04, E-05, E-10 (which disposition applies to A-1), E-11 and E-12.
- EXPERIMENT_COMPLETE is declared only after those dispositions are recorded.

**Decision B: decline acceptance pending separately authorised work outside EXP-128.** That work would be: a bounded read of `UserControl.js` (or the manual check of option D-13(a)); a runtime login trace in a new brief; and reads of the global Script bodies. **The MockLogin IDO lookup is not a continuation of EXP-128.** The operator's Option C stands.

**Worker recommendation:** Decision A. The study has produced a consistent, reconciled and honestly qualified record. The remaining gaps need separately authorised work and should not keep the study open.

**Before any external sharing, under either decision:**
1. Privacy review of the 97 PNG files and of the tool-written snapshot files. The status bar shows the account name in the images the record names; T26 viewed no image, so the claim about all 97 is unverified. The snapshot files can contain session identifier fragments.
2. Git review of the untracked EXP-128 files and of the `tools/claude-harness/` changes outside the experiment (E-23).

**Readiness:** the observational deliverable is ready for a qualified-acceptance decision, conditional on the dispositions above. It is not ready to be recorded as satisfying every original acceptance criterion.

**Next step:** stop. T26 is complete as a final review. No further browser work is recommended under EXP-128.

---

## 12. Worker-written file inventory (cumulative through T26)

Redactions are counted in each file. "Placeholder" means `<signed-in user>`. No credential value was copied in any file.

### 12.1 Experiment record and notes (worker-authored)

| File | Task | Redactions and notes |
| --- | --- | --- |
| `experiments/EXP-128-mock-inventory-portal-read-only-study.md` | T1 created; edited in T1 to T26 | Placeholder only. T26: top status line and T26 section appended. |
| `evidence/EXP-128/t19-audit-reconciliation.md` | T19 | 0 values; controller reconciliation; file inventory to T19. |
| `evidence/EXP-128/t21-global-script-names-observed.txt` | T21 | 0 values; 131 names (48 + 49 + 34). |
| `evidence/EXP-128/t26-final-qualified-review.md` | T26 (this file) | 0 values. |

### 12.2 Verbatim source and metadata copies (worker-authored; 12 files)

| File | Source | Redactions |
| --- | --- | --- |
| `evidence/EXP-128/MockLoginPortal-form-script.cs.txt` | MockLoginPortal Form Script, C#, source 1 to 141 (complete; lines 78 to 97 indentation and blank lines 80 and 92 not visually verified) | 0 |
| `evidence/EXP-128/MockInventory-form-script.cs.txt` | MockInventory Form Script, VB.NET, 20 lines | 0 |
| `evidence/EXP-128/MockInventoryDashboard-form-script.cs.txt` | Dashboard Form Script, C#, 59 lines (no indentation in copy) | 0 |
| `evidence/EXP-128/MockLoginIDO-form-script.cs.txt` | MockLoginIDO Form Script, VB.NET (file name says `.cs`), 20 lines | 0 |
| `evidence/EXP-128/MockLoginIDO-metadata.txt` | Form-side metadata (36 names); T22 addendum | 0 credential values; 1 placeholder |
| `evidence/EXP-128/global-variables-inventory.txt` | Global variables, 54 entries; four credential-named globals recorded as names only | 0 credential values; 1 placeholder; the MPUsername and MPPassword lines carry withheld or name-only notes (V-10) |
| `evidence/EXP-128/assets/mocklogin_index.html.txt` | Asset, text-equivalent, flattened | 0 |
| `evidence/EXP-128/assets/MockInventory_index.html.txt` | Asset, text-equivalent, flattened | 0 |
| `evidence/EXP-128/assets/mocklogin_script_app.js.txt` | Asset, text-equivalent, flattened (not byte-exact) | 0 |
| `evidence/EXP-128/assets/mocklogin_style_app.css.txt` | Asset, text-equivalent, flattened | 0 |
| `evidence/EXP-128/assets/MockInventory_style.css.txt` | Asset, text-equivalent, flattened | 0 |
| `evidence/EXP-128/assets/MockInventory_script.js.txt` | Asset, text-equivalent, flattened; not referenced by any page | 0 |

Not written: `global-script.cs.txt` (E-21; Q-14); `assets/_app_scripts_UserControl.js.txt` (UserControl.js never read; D-13).

### 12.3 Screenshots (worker-requested; 97 PNG files)

- T1 to T17: 82 files (T1 4; T2 21; T3 9; T4 8; T5 9; T6 10; T7 6; T8 2; T9 2; T10 3; T11 3; the unrecorded `t12rec-01` 1; T17 4).
- T20 to T25: 15 files (T20 4; T21 3; T22 3; T23 2; T24 1; T25 2).
- None viewed in T26. Privacy review pending (E-20).

### 12.4 Repository files written by a worker outside the permitted directory

- `evidence/playwright/t4-components-snapshot-check.yml` (H5).
- `evidence/playwright/t24-webclient-baseline-snapshot.yml` and `evidence/playwright/t24-designer-final-snapshot.yml` (T24).

### 12.5 Tool-generated files (not worker-authored)

- `evidence/EXP-128/harness-audit-T1.md` to `harness-audit-T25.md` (25 controller audit files).
- `evidence/playwright/page-*.yml` and `console-*.log` written by the browser tool. The folder is shared with other experiments. The EXP-128 subset was not enumerated in T26. The worker read specific lines of some files in earlier tasks and never read any console log.
- Oversized snapshot results saved to the session tool-results folder outside the repository (T23 and T25). Not read.

**Totals (worker-authored):** 1 record, 3 notes, 12 copies, 97 PNG files, and 3 worker-directed files outside the permitted directory. Total inside `evidence/EXP-128/` and the record: 113.

---

## 13. Final browser state

**Last observed: T25 (no browser call in T26).**

- **Designer tab (tab 0):** blank canvas; no Form open; no dialog, menu or editor; Save and Regenerate Form disabled; status bar `ScopeType: User`; console 2 errors and 0 warnings (baseline). Final snapshot returned inline (no file saved).
- **Web Client tab (tab 1):** not selected at the end of T25. Only the pre-existing `MockLoginPortal` tab remains (the operator's favourite; untouched). Save and Filter in Place disabled; no dialog; console 3 errors and 10 warnings (baseline). Final snapshot `evidence/playwright/page-2026-10-25T09-03-44-267Z.yml`.
- **Unsaved changes:** none recorded at the end of T25. Accidental flags A-1 and A-2 were closed in earlier tasks (E-10 for A-1's disposition).
- **Caveat:** the Web Client console reading was last taken in T25. T26 did not re-observe either tab.

---

## 14. Files written in T26

- **Created:** `evidence/EXP-128/t26-final-qualified-review.md` (this file).
- **Modified:** `experiments/EXP-128-mock-inventory-portal-read-only-study.md` (top status line; T26 section appended at the end).
- **Not changed:** any copy, screenshot, controller audit file, the T19 and T21 files, any asset, and any other repository file.

**T26 audit (exact):** browser actions 0; browser reads 0; repository calls before writing 34 (19 Read, 9 Grep, 6 Glob; no errors); writes and edits as listed above. Redactions made in T26 files: 0.

**Cumulative through T26 (controller-verified):** 377 browser actions attempted, 358 ok, 19 errors; 515 browser reads attempted, 499 ok, 16 errors.
