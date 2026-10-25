# EXP-132 T2 - original source readback (read-only; before any mutation)

Status: **visual transcription** of the screenshots named below, taken during T2 (2026-10-25). Indentation is normalised for readability; the editors show indentation guides rather than literal whitespace. These are the pre-change baselines for AC-2. They were not copied from the database, the editor's Download output or any file store.

## 1. FX_BridgeTest Form Script (Script Editor, Cancel only)

Source: `evidence/EXP-132/t2-22-form-script-editor-readonly-FX_Echo-original.png` (editor body); `evidence/EXP-132/t2-24-form-script-editor-compile-result-expanded-readonly.png` (same body with Compile Result expanded).

```csharp
using System;
using Mongoose.IDO.Protocol;
using Mongoose.Scripting;

namespace Mongoose.FormScripts
{
    public class FX_BridgeTest : FormScript
    {
        //
        // Methods go here
        //

        public string FX_Echo(string s)
        {
            return "FX_ECHO:" + s;
        }
    }
}
```

- 19 lines (line 19 blank). Scaffold: `namespace Mongoose.FormScripts`, `public class FX_BridgeTest : FormScript`, the `// Methods go here` comment block, one method `public string FX_Echo(string s)`.
- Exactly one `FX_Echo` method. Original return statement: `return "FX_ECHO:" + s;`.
- Compile Result (expanded): Output tab shows no text; Errors tab not opened in T2. An empty Output is **not** affirmative proof of successful compilation.
- Script Language on the Designer: `Visual C#`.

## 2. FX_Bridge/index.html (Global Objects > Web Assets > FX_Bridge > index.html > Edit Browser File, Cancel only)

Source: `evidence/EXP-132/t2-28-edit-browser-file-FX_Bridge-index-html-readonly.png`. Dialog fields: File `FX_Bridge/index.html`; Content Type `text/html`.

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="X-UA-Compatible" content="IE=9" />
<script type="text/javascript" src="../$app/scripts/UserControl.js">
</script>
</head>
<body>
<button type="button" id="FX_BridgeButton">FX Bridge Test</button>
<div id="FX_BridgeOutput"></div>
<script type="text/javascript">
document.getElementById("FX_BridgeButton").addEventListener("click", function () {
    WSForm.invoke("FX_Echo", "bridge-probe", function (result) {
        document.getElementById("FX_BridgeOutput").textContent = result;
    });
});
</script>
</body>
</html>
```

- Existing dependency: `../$app/scripts/UserControl.js` (present once). Not opened or read by the worker (out of scope).
- Existing elements: `FX_BridgeButton` (one button), `FX_BridgeOutput` (one div). No `FX_BridgeStatus` element yet.
- Existing invocation: `WSForm.invoke("FX_Echo", "bridge-probe", callback)`; the callback assigns `result` to `FX_BridgeOutput.textContent`. No `getVarValue` call yet.
- The EXP-131 saved snapshot `evidence/EXP-131/t9-14-edit-browser-file-readonly-snapshot.md` contains the same `bridge-probe` literal on its long textarea line (text match only). A line-by-line comparison was not performed; this run's readback is the screenshot above.

## 3. FX_BridgeControl reference (Component > Specific Attributes > User Control Name > Edit User Control References, Cancel only)

Source: `evidence/EXP-132/t2-21-user-control-references-dialog-readonly.png`.

- Component: `FX_BridgeControl`, Type `UserControl`, Pane 0, Tab 0 (Components grid, `evidence/EXP-132/t2-19-designer-components-tab-FX_BridgeControl.png`).
- `User Control Name` expression: `V(UserCtrl_FX_BridgeControl)` (`t2-20`).
- Edit User Control References: Use Web Control **checked**; Control URL **`FX_Bridge/index.html`**; Web User Control Asset radio shows a dot (disabled; visual only).
- Windows section (Assembly Name `<Not Applicable>`, Class Override `<Not Applicable>`) unchanged and not used.

## 4. Form-level variables (Details > Variables, search filter cleared)

Source: `evidence/EXP-132/t2-10-designer-variables-filter-cleared-form-level.png` and the T2 snapshot read after it.

- `Form - Persistent`: `UserCtrl_FX_BridgeControl`, `UserCtrl_userControl1_USER`, `UserCtrlAsm_FX_BridgeControl`, `UserCtrlAsm_userControl1_USER`, `UserCtrlUrl_FX_BridgeControl`, `UserCtrlUrl_userControl1_USER`. Six rows, none modified.
- No `Form - Temporary` group. No `FX_vEcho`.

## 5. Global variables (Designer Variables tree, filter validated)

Sources: `t2-11`, `t2-12` (scroll), `t2-13` (positive control `ccvw_PrinterName`), `t2-14` (`vEcho`), `t2-15` (mid-string positive control `Printer`), `t2-16` (`Echo`), `t2-17` (`vInventoryJson`), `t2-18` (neighbour readback).

- `Global - Persistent` contiguous neighbours: `ccvw_OutputFormatInlineAll`, `ccvw_PrinterName`, `gbgc_bg` (`t2-18`). `FX_vEcho` would sort between `ccvw_PrinterName` and `gbgc_bg`; it is absent.
- Filter `vEcho` and `Echo`: no rows in any group.
- Positive controls: `ccvw_PrinterName` and `Printer` each returned their row (the filter matches substrings). `vInventoryJson` returned no rows in this User's tree, although EXP-130 documents a Global-Persistent `vInventoryJson` on the Mock side (another account). Scope limitation: this tree may not list every tenant-wide Global variable.
