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

Assets are **tenant-wide**. Name them with a top-level folder that starts with the build prefix (`FX_` by default; `FX_<App>` below means `<prefix><App>`). Never edit `$app`, `mongoose` or `soho*` assets, or `$app/scripts/UserControl.js`.

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

## File layout: always three files (operator decision, 2026-10-29)
Every page is split into three assets in its `FX_<App>/` folder, plus matching repo files in `assets/FX_<App>/`:

| File | Holds | Never holds |
|---|---|---|
| `index.html` | markup only. In `<head>`: `../$app/scripts/UserControl.js` (from the template), then `<link rel="stylesheet" href="app.css">`. Last in `<body>`: `<script src="app.js"></script>` | `<style>` blocks, inline `<script>` code, `style="…"` or `onclick="…"` attributes |
| `app.css` | all styles. Colours and sizes as `:root` custom properties at the top, then one commented section per page area | rules for markup that no longer exists |
| `app.js` | all behaviour (layout below) | HTML strings longer than one element; build elements with a small `el()` helper |

- Knowledge state:
  - a separate `app.js` loaded by an FX_ page is **observed** (`FX_Login/index.html` + `app.js`);
  - a relative `<link rel="stylesheet" href="…">` loading in a Web User Control is **observed** only in the read-only Mock app (`mocklogin/style/app.css`, EXP-128);
  - an FX_ page loading its own `app.css` is **unverified**. In the first build that uses it, probe it: create `app.css` with one visible rule, Save, open the runtime, and confirm the style applied before building on it.
- **Unknown:** whether the Web Client caches `app.js` / `app.css` after their content is replaced. After the first update of a split page, reopen the Form and check that the change is live. If it's stale, report it; don't work around it silently.
- Install copies: flush-left `index.flat.html`, `app.flat.css` and `app.flat.js`, updated with their sources.
- A change touches only the file it needs (a colour → `app.css` only), so an install replaces one asset, not the whole page.
- Existing single-file pages (FX_Inventory, FX_ApiPage, FX_ASNPortal) are split only when the operator asks. Until then, change them in place.

### `app.js` layout (easy to read and debug)
In this order, each part under a `// ---- <part> ----` heading:
1. `"use strict";` inside one IIFE, so nothing leaks into the iframe's globals.
2. **Config:** named constants (method names, variable names, timeouts, limits), with a comment saying where each one comes from (build record, EXP).
3. **State:** one `state` object, not loose variables.
4. **Helpers:** `el()`, `setStatus()`, and one `log()` that writes `console.log("[FX_<App>]", …)` for every server call (method, arguments, ms taken, result or error). Turn it off with a `DEBUG` constant.
5. **Server bridge:** one `callServer(method, args, cb)` that holds the `WSForm.invoke` + `getVarValue` contract, the timeout and the `typeof WSForm` guard. No other function calls `WSForm` directly.
6. **Features:** one section per screen or card (load, render, validate, submit). Functions are short and named for what they do (`renderRecentAsns`, `validateLines`).
7. **Wiring:** all `addEventListener` calls, then the start-up call inside `MG.onReady` (see Pitfalls).

## C# form script layout: one file, easy to read and debug (operator decision, 2026-10-29)
A Form has one script. Keep it as one file (`assets/FX_<App>/FX_<App>.cs.txt` + its `.flat.cs.txt` install copy), laid out so it reads top to bottom. Each part goes under a `// ---- <part> ----` comment:
1. **Header:** `using` lines and `//<Ref>…</Ref>` lines, then the class comment: what the Form does, which page calls it, the result variable and its JSON shape (`{"ok":true,…}` / `{"ok":false,"message":"…"}`).
2. **Config:** constants and lookup values, each with a comment naming its source (operator decision, EXP, spec). No magic strings or numbers further down.
3. **Page actions:** one public method per thing the page asks for, named for it (`FX_GenerateAsn`, `FX_CheckSku`), in the order the page uses them. Each one:
   - validates its input first and returns a message that names the bad field;
   - keeps the main flow short by calling named helpers;
   - has one `try/catch` that reports `ex.GetType().Name + ": " + ex.Message` through the result variable, never an empty catch.
4. **Feature helpers:** private methods used by the actions, grouped by feature, in the same order as the actions.
5. **Outside services:** one helper per service (e.g. `FX_WmInvoke` for WM over ION). It keeps the verb and path visible, and passes the HTTP code and Infobar back into error messages.
6. **Results and parsing:** the result-variable writers (`FX_Result`, `FX_Fail`) and shared parsing helpers (`FX_ParseJson`, `FX_Get`).

Easy to debug:
- Every failure message says what failed and what to do. Include the action, the HTTP code and the Infobar for API calls, e.g. "WM item lookup answered HTTP 500. Infobar: …".
- Results go back to the page, where `app.js`'s `log()` records them in the browser console, so one place shows the whole call.
- Comments explain *why* (tenant quirk, operator decision, EXP number), not what the next line does.
- Indent normally in the repo source; the `.flat.cs.txt` install copy is the same code made flush-left (`sed 's/^[ 	]*//'`), because indented sources overflowed the Script Editor's line storage (EXP-138). Update both together.

## Build steps
1. **Form:** a **Flex** Form by default (`portal-shell.md` §1); Classic BuildFromScratch (`recipes/forms/create-basic-form.md`) only when the request asks for Classic.
   - Set Behavior › **Script Language = Visual C#** (option click + Tab).
   - For a full-page app, set the Form size large enough.
2. **Asset:**
   1. Designer **Edit › Web User Control Assets** → Global Objects (Web Assets tree) → leftmost **+** (New).
   2. Enter Name `FX_<App>/index.html`, then Tab and OK. This creates the folder `FX_<App>` with the child `index.html`.
   3. Select the file → Content row "Open Edit Property Dialog" → **Edit Browser File**. The template already includes `../$app/scripts/UserControl.js`. Keep that include.
   4. Replace the content with one full-text fill. Read it back before OK with the readback check (below).
   5. Click **Edit Browser File OK**, then **Global Objects OK** (EXP-131 T6).
   6. Add `FX_<App>/app.css` and `FX_<App>/app.js` the same way (see File layout above).
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
2. Produce the flush-left install copies: `cd assets && npm run flat -- FX_<App>`.
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
- Everything for local work is in `assets/` (meant to become its own shareable repo; how-to in `assets/README.md`):
  - start a new app by copying `assets/_template/` (three files, C# script, stub) to `assets/FX_<App>/`;
  - `cd assets && npm run preview` (Node 18+, no install) serves the real app folders at http://127.0.0.1:8765/. When a page asks for `../$app/scripts/UserControl.js`, the server answers with that app's `preview/stub.js` (a fake `WSForm` with test data; repo only, never installed);
  - `npm run flat -- FX_<App>` writes every install copy (`index.flat.html`, `app.flat.css`, `app.flat.js`, `*.flat.cs.txt`). Never hand-edit a flat copy.
- A local preview proves the layout and the page logic only. The tenant result is proven only at runtime in the Web Client.
- No external CDN: every style and script is an asset in the page's own folder.
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
