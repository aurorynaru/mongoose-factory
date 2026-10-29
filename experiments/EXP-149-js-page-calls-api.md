# EXP-149: Web page (JS) calls ION and an external API through C#

Status: **done, result positive (observed).** A button in an FX_ web page (Web User Control) calls a C# form-script method through `WSForm.invoke`. The method calls Infor ION or `https://httpbin.org/get`, and the page shows the result.

Approval (operator, 2026-10-28): "yes", to a probe where an FX_ web page's buttons call C# through `WSForm.invoke`, which calls ION helloworld and httpbin, with the result shown on the page. Approved outbound calls are unchanged: ION GET helloworld and httpbin GET only.

Account: `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` (Web Client header, `10`). The Designer was in User scope (status bar, `09`).

## Route
```
FX_ApiPage/index.html button
  -> WSForm.invoke("FX_CallIonHello" | "FX_CallHttpbin", cb)
  -> C# FormScript method (FX_ApiProbe) -> IONAPIMethods.InvokeIONAPIMethod2 / HttpWebRequest
  -> FX_Show(text): ThisForm.Variables("FX_vApiResult").Value = text
  -> cb: WSForm.getVarValue("FX_vApiResult", v => <pre>.textContent = v)
```
JavaScript never makes an HTTP call and never holds a token. The server-side C# makes the call.

## Objects created or changed (cleanup list)
1. **Global variable `FX_vApiResult`** (Persistent True, Global True).
2. **Web User Control Asset `FX_ApiPage/index.html`**. Source: `assets/FX_ApiPage/index.html`; install copy `index.flat.html`.
3. **FX_ApiProbe form script** (User version). Source: `assets/FX_ApiProbe/FX_ApiProbe.cs.txt`.
   - New `FX_Show` writes both `FX_ResultEdit` and `FX_vApiResult`.
   - New `FX_HideOrigin` masks httpbin's `origin` (the tenant egress IP).
4. **Component `FX_ApiPageControl`** (UserControl) on FX_ApiProbe:
   - Control URL `FX_ApiPage/index.html` (Use Web Control);
   - Size 100; 25; Location Top 42 / Left 1.

## Results
- **Variable and asset:**
  - created (`01`, `02`);
  - the asset editor text read back equal to the source (`03`, compare-readback);
  - saved, with the toast "Global object(s) were saved." (`04`).
- **Script:**
  - compiled "Built with 0 errors" (`05`);
  - saved, with the toast "Form [FX_ApiProbe] and global object(s) were saved." (`06`).
- **Control:**
  - Control URL set (`07`) and layout set (`08`);
  - saved, with the toast "Form [FX_ApiProbe] and global object(s) were saved."; the grid shows Size 100; 25 and Location 42; 1 (`09`).
- **Persistence and runtime:**
  - In the Web Client, the form was closed and reopened through Select Form (`10`).
  - The embedded page loaded inside the form. The accessibility tree shows heading "FX API page (JS to C# to API)", buttons "Call ION helloworld" / "Call httpbin", and status "Ready." That shows the saved control and its Control URL are served.
  - **Call ION helloworld** (`11`): status "Done: FX_CallIonHello"; result `Code: 200`, Infobar `OK`, `Content: Hello World!`.
  - **Call httpbin** (`12`): status "Done: FX_CallHttpbin"; result `Code: 200` with httpbin JSON, `"origin": "(hidden)"`, `"url": "https://httpbin.org/get"`.
  - Each button was clicked once.

## What this shows
- A custom HTML/JS page inside Mongoose can trigger server-side API calls (Infor ION through SSO, and external HTTPS) and show the response, with no credentials in the browser.
- The result comes back through a Global variable (`getVarValue`), as in EXP-131/132.
- **Not proven:**
  - a Designer reload readback of the control's properties. Persistence rests on the runtime reopen, which loaded the saved control and script;
  - passing arguments from JS into the API call (for example, a path or query). `invoke(name, arg, cb)` is proven for strings in EXP-133/138, but not combined with an API call;
  - error display for a failing endpoint;
  - concurrent clicks;
  - calling a non-GET verb (not approved).

## Evidence (`evidence/EXP-149/`)

| File | Shows |
|---|---|
| `01-variable-created.png` | FX_vApiResult, Persistent/Global True |
| `02-asset-created.png` | asset FX_ApiPage/index.html in the asset list |
| `03-asset-editor-before-ok.yml` | editor text, compared equal to the source |
| `04-var-asset-saved.png` | "Global object(s) were saved." |
| `05-script-compiled.png` | Built with 0 errors |
| `06-script-saved.png` | form + global objects saved |
| `07-control-url.png` | Control URL FX_ApiPage/index.html |
| `08-control-layout.png` | Size/Location subfields |
| `09-control-saved.png` | save toast; grid Size 100; 25, Location 42; 1; User scope status bar |
| `10-runtime-opened.png` | runtime FX_ApiProbe reopened, operator account in the header |
| `11-ion-result.png` | **page result: ION 200, Hello World!** |
| `12-httpbin-result.png` | **page result: httpbin 200, origin (hidden)** |

## State left
- **Web Client:** FX_ApiProbe is open, showing the httpbin result.
- **Designer:** FX_ApiProbe is open in User scope, saved.
- Nothing is scheduled. No tenant-wide operations were done.
- The FX_ApiProbe layout is cluttered: oversized buttons from EXP-145/148 overlap the page. This is cosmetic.
