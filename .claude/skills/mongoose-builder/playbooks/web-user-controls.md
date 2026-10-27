# Playbook: Web User Controls (custom HTML/JS/CSS inside a Form, bridged to IDOs by a C# form script)

Knowledge state: **observed**. The full round trip works at runtime:
- EXP-132: echo.
- EXP-136: inventory dashboard from IDO.
- EXP-138: hashed login lookup.
- EXP-139: dark-theme asset replacement.

Every step ran in single runs only, with same-session evidence.

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
   4. Replace the content with one full-text fill.
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

## Replacing or updating a dashboard page (EXP-139 route)
1. Edit the file in `assets/FX_<App>/index.html` locally (version-controlled).
2. Produce the flush-left install copy.
3. In Mongoose: Edit › Web User Control Assets → file → Edit Browser File → one full-content fill → OK → Global Objects OK → Designer Save.
4. Reload the portal or reopen the Form, and verify at runtime (Refresh data, filters).

## Local design loop (fast)
- The HTML is a normal standalone page. Develop and preview it locally with mock JSON (the `typeof WSForm === "undefined"` branch), then install it.
- Keep all CSS and JS inline, or as extra FX_ assets, so the tenant needs no external CDN.
- `assets/FX_Inventory/index.html` is the reference for the dark theme, KPI cards, filters, sort and the status line.

## Pitfalls
- Designer sessions expire about hourly. A stale Designer gives "server event processing returned an error". Stop, re-login at the top-level portal and reload (browser-and-session.md).
- A positional `PropertyValues[i]` mapping must match the property list order in `LoadCollection`.
- Escape `'` in filter strings (`Replace("'", "''")`), as in `FX_LoginPortal`.
- Never put secrets or real credentials in assets. They are readable by any tenant user with asset access.
