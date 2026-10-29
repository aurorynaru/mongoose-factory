# Playbook: Web User Controls (custom HTML/JS/CSS inside a Form, bridged to IDOs by a C# form script)

Knowledge state: **observed**. The full round trip works at runtime:
- EXP-132: echo.
- EXP-136: inventory dashboard from IDO.
- EXP-138: hashed login lookup.
- EXP-139: dark-theme asset replacement.

Every step ran in single runs only, with same-session evidence.

Exception: **replacing an existing asset's content** (section below) is **verified**. It has run twice with persistence and a runtime check: EXP-139 and BLD-001. The upgrade was approved by the operator on 2026-10-27.

Reference implementations (copy these):

| App | Asset | Form script | Form / component / variable |
|---|---|---|---|
| Inventory dashboard | `assets/FX_Inventory/index.html` (+ `index.flat.html` install copy) | `assets/FX_Inventory/FX_InventoryDashboard.cs.txt` | `FX_InventoryDashboard` / `FX_InventoryControl` (Size `100; 30`) / Global `FX_vInventoryJson` |
| Login portal | `FX_Login/index.html` + `app.js` (in the tenant) | `assets/FX_Login/FX_LoginPortal.flat.cs.txt` | `FX_LoginPortal` / `FX_LoginControl` / Global `FX_vLoginResult` |

Assets are **tenant-wide**. Name them with an `FX_` top-level folder. Never edit `$app`, `mongoose` or `soho*` assets, or `$app/scripts/UserControl.js`.

## Architecture: the proven bridge contract
```
HTML (in the UserControl iframe)                         C# form script (server)
WSForm.invoke("FX_Method", [args...,] function(){ ──►   public void/string FX_Method(args) {
                                                            var r = IDOClient.LoadCollection(ido, props, filter, order, max);
                                                            ThisForm.Variables("FX_vJson").Value = JsonConvert.SerializeObject(rows);
                                                         }
  WSForm.getVarValue("FX_vJson", function(value){ ◄──   (value read back through the variable)
     render(JSON.parse(value)) }) })
```
- **Read results through a variable, not the invoke callback.** The callback value came back as `0` in EXP-131/132. The `getVarValue` path delivered the expected value.
- The variable is a **Global, Persistent** variable created in Designer **Edit › Variable** (see step 3). C# still accesses it with `ThisForm.Variables("…")`.
- Arguments: `WSForm.invoke(name, arg1, arg2, cb)` passes strings to the C# parameters (EXP-133/138). With no arguments it is `invoke(name, cb)` (EXP-136).
- Guard the page: `if (typeof WSForm === "undefined")` shows a message (the page was opened outside its Form).
- Add a timeout on the invoke (20 s in the dashboard) and a visible status line.

## Build steps
1. **Form:** use the Classic BuildFromScratch recipe (`recipes/forms/create-basic-form.md`).
   - Set Behavior › **Script Language = Visual C#** (option click + Tab).
   - For a full-page app, set the Form size large enough.
2. **Asset:**
   1. Designer **Edit › Web User Control Assets** → Global Objects (Web Assets tree) → leftmost **+** (New).
   2. Enter Name `FX_<App>/index.html`, then Tab and OK. This creates the folder `FX_<App>` with the child `index.html`.
   3. Select the file → Content row "Open Edit Property Dialog" → **Edit Browser File**. The template already includes `../$app/scripts/UserControl.js`. Keep that include.
   4. Replace the content with one full-text fill. Read it back before OK with the readback check (below).
   5. Click **Edit Browser File OK**, then **Global Objects OK** (EXP-131 T6).
   6. Add more files (e.g. `FX_Login/app.js`) the same way.
   - Absence check: look at the Web Assets top level for the `FX_` folder.
3. **Variable:** Edit › **Variable** → Global Objects → blue **+** → Name `FX_v<Name>` → OK → Global Objects OK.
   - The readback should show Persistent True and Global True (EXP-136 T11).
4. **UserControl component:**
   1. Toolbox **UserControl** → click the canvas. Name it `FX_<App>Control` (commit by blur).
   2. Specific Attributes › **User Control Name** ellipsis → **Edit User Control References** → Use Web Control checked → **Control URL** = pick `FX_<App>/index.html` from the list → OK.
   3. Set Layout Size, e.g. `100; 30`. The default (184×106 px) is cramped (EXP-138).
   - The Designer auto-creates `UserCtrl_*`, `UserCtrlAsm_*` and `UserCtrlUrl_*` form variables. Leave them alone.
   - Stale `*_userControl1_USER` ones from a rename are known clutter (EXP-133).
5. **C# form script:** blue pencil → Script Editor → one full-content fill → OK.
   - **Paste flush-left code with no indentation.** The editor auto-indents every line, and indented sources overflow `ActiveXScriptLines.CodeLine`, so Save fails with "String or binary data would be truncated" (EXP-138).
   - Keep `.flat` copies of the sources for installs (`index.flat.html`, `*.flat.cs.txt`).
   - `//<Ref>Newtonsoft.Json.dll</Ref>` enables `JsonConvert`.
   - Compile Result showing no errors is weak evidence. A runtime result is the proof.
6. **Save:** one Designer Save → "Form [X] and global object(s) were saved."
   - When only an asset changed, the notice is "Global object(s) were saved." (EXP-139).
7. **Runtime:** open the Form in the Web Client (or reload the portal and open it), then click the page's button.
   - The iframe often has **no accessibility refs**. Coordinate clicks inside the control are the accepted last resort.
   - Screenshot the before/after states.

## Replacing or updating an asset page (verified: EXP-139, BLD-001)
1. Edit the file in `assets/FX_<App>/index.html` locally (version-controlled).
2. Produce the flush-left install copy (`index.flat.html`).
3. Open FX_<Form> in the Designer (User scope) → Edit › Web User Control Assets → expand `FX_<App>` (click the folder, then ArrowRight) → select the file → Content row **Open Edit Property Dialog** → Edit Browser File.
4. **Rollback baseline:** save the editor value with `browser_snapshot { target: <editor ref>, filename: "evidence/<ID>/baseline-editor-content.yml" }`. Compare it with the git version you expect to be live. A match proves which version is the rollback source.
5. Click in the editor, press Ctrl+A, then do **one** full-content fill (`browser_type` with the whole file).
6. **Readback before OK:** snapshot the editor to a file again, then run the readback check against the install copy. It must say `equal true`.
7. Edit Browser File OK → Global Objects OK → Designer Save. Expected notice: "Global object(s) were saved."
8. Close the Form tab (no prompt expected), reopen it from the Form menu recent list, and open the asset again. Run the readback check a third time, then Cancel both dialogs.
9. Runtime: in the Web Client, Open › Select Form opens the Form with the new asset. No portal reload was needed in BLD-001. Click Refresh data and exercise the changed feature.
- The frame exposed accessibility refs in EXP-139 T6 and in BLD-001, but not in EXP-139 T7/T8. Use refs when present. Coordinates are the fallback.
- When finding refs, never use a regex that matches `textbox`: the editor's full content comes back in the result.

## Readback check (`tools/compare-readback.js`)
```
node .claude/skills/mongoose-builder/tools/compare-readback.js evidence/<ID>/<snapshot>.yml <source-file>
```
- It reads the longest textbox value in a Playwright element snapshot and compares it with the source. Both sides are whitespace-normalized.
- Exit codes: 0 equal, 1 different (prints where), 2 no editor value found.
- It proves the content is the same, not the bytes (line breaks and indentation are not compared). That also makes it work for Form Scripts, where the Script Editor adds its own indentation. Applying it to the Script Editor is not exercised yet: check that the editor's snapshot exposes its value first.

## Local design loop (fast)
- The HTML is a normal standalone page. Develop and preview it locally with mock JSON (the `typeof WSForm === "undefined"` branch), then install it.
- Keep all CSS and JS inline, or as extra FX_ assets, so the tenant needs no external CDN.
- `assets/FX_Inventory/index.html` is the reference for the dark theme, KPI cards, filters, sort and the status line.

## Pitfalls
- **Wait for the Form before the first `WSForm.invoke` (BLD-002, observed).** An invoke sent from the page's startup code never reached the server (no event after `forminit`), and the page timed out. Wrap the first load in `MG.onReady(function () { load(); })`, guarded with `typeof MG !== "undefined"` so the local preview still runs. See `assets/FX_ASNPortal/index.html` (end of script) and `docs/mongoose/guides/user-control.md`.
- **UserControl Size (BLD-002, observed):** typing "100; 30" into Layout › Size did not commit. Set Width and Height separately, committing each by clicking another cell.
- **Control URL change:** after picking the Control URL, an info dialog about regeneration appears and blocks clicks until OK is pressed.
- **Control frame size (BLD-002):** on a Normal form with Size 100; 30, the page renders in a fixed frame of about 730×540 px. On a **Flex** form (operator's ASNPORTAL, UserControl in Pixel units with Flex attributes), the page filled the form width (observed).
- **Form script class name = form name (BLD-002, observed):** the C# template for form ASNPORTAL is `public class ASNPORTAL : FormScript`. When the same script is used on another form, rename only the class line, or the editor may refuse it with "class name has changed".
- Designer sessions expire about hourly. A stale Designer gives "server event processing returned an error". Stop, re-login at the top-level portal and reload (browser-and-session.md).
- A positional `PropertyValues[i]` mapping must match the property list order in `LoadCollection`.
- Escape `'` in filter strings (`Replace("'", "''")`), as in `FX_LoginPortal`.
- Never put secrets or real credentials in assets. They are readable by any tenant user with asset access.
