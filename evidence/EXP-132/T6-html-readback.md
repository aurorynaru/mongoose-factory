# EXP-132 T6 - FX_Bridge/index.html original and revised readbacks (2026-10-25)

Harness header: `run_id=R-20261025-220702-YGFW`, `experiment_id=EXP-132`, `cycle_id=8`, `task=T6`, `worker_session_id=2b1c482d-88bb-4ac2-80a9-48de48c0a080`, `task_message_id=2fe5b5bb-f324-4eb0-933f-762766e59464`.

## Sources and limits

- **Original (pre-edit):** `evidence/EXP-132/T6-03-edit-browser-file-index-html-original-baseline.png` (Edit Browser File dialog, opened from Global Objects > Web Assets > FX_Bridge > index.html > Content row) plus the textbox accessibility text read in the same state. Compared with the T2 transcription (`evidence/EXP-132/T2-source-readback.md` section 2): identical in all visible lines and tokens.
- **Revised (pre-commit):** the textbox accessibility text read after the single full-content fill and before the Edit Browser File OK; `evidence/EXP-132/T6-04-edit-browser-file-index-html-revised-precommit.png` (the textarea was scrolled to its end, so the top lines are not in that image).
- **Post-commit reopen (read-only):** the reopened Edit Browser File textbox accessibility text, `evidence/EXP-132/T6-05-edit-browser-file-index-html-reopened-readonly-after-OK.png`.
- Accessibility text flattens line breaks and indentation; the screenshots show wrapped lines. Byte-level whitespace and line endings of the original file were not captured, so whitespace identity is not proven.

## Original (as displayed before the edit)

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

## Revised (entered as the full text, committed once by Edit Browser File OK)

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
<div id="FX_BridgeStatus"></div>
<div id="FX_BridgeOutput"></div>
<script type="text/javascript">
document.getElementById("FX_BridgeButton").addEventListener("click", function () {
    WSForm.invoke("FX_Echo", "bridge-probe", function (result) {
        document.getElementById("FX_BridgeStatus").textContent = result;
        WSForm.getVarValue("FX_vEcho", function (value) {
            document.getElementById("FX_BridgeOutput").textContent = value;
        });
    });
});
</script>
</body>
</html>
```

## Difference (original to revised)

- **Unchanged:** doctype, `<html>`, `<head>`, the `<meta>` line, the `../$app/scripts/UserControl.js` script element, the `FX_BridgeButton` element and label, the `FX_BridgeOutput` element, the click listener, and the `WSForm.invoke("FX_Echo", "bridge-probe", ...)` signature and argument.
- **Added:** one element `<div id="FX_BridgeStatus"></div>`, placed between the button and `FX_BridgeOutput`, initially empty.
- **Changed (invoke callback):** the original body line `document.getElementById("FX_BridgeOutput").textContent = result;` was replaced by two statements: (1) `document.getElementById("FX_BridgeStatus").textContent = result;`, which writes the raw invoke callback value, and (2) one nested `WSForm.getVarValue("FX_vEcho", function (value) { ... });`.
- **Added (getVarValue callback):** `document.getElementById("FX_BridgeOutput").textContent = value;`, writing the received variable value to FX_BridgeOutput.

## Structure checks (AC-5), against the pre-commit readback

| Check | Result |
| --- | --- |
| `FX_BridgeButton` element | 1 element (`id="FX_BridgeButton"`); the listener reference is the same id |
| `FX_BridgeOutput` element | 1 element (`id="FX_BridgeOutput"`); two string occurrences (element and the getElementById in the getVarValue callback) |
| `FX_BridgeStatus` element | 1 element (`id="FX_BridgeStatus"`, initially empty); two string occurrences (element and the getElementById in the invoke callback) |
| Original script dependency | present once: `../$app/scripts/UserControl.js` |
| `WSForm.invoke` calls | 1: `WSForm.invoke("FX_Echo", "bridge-probe", function (result) {...})` |
| `WSForm.getVarValue` calls | 1: `WSForm.getVarValue("FX_vEcho", function (value) {...})`, inside the invoke callback |
| Callback order | invoke callback writes `result` to FX_BridgeStatus first, then issues the single getVarValue request; the getVarValue callback writes `value` to FX_BridgeOutput |
| Brackets and quotes | the listener `{...});`, invoke `{...});`, and getVarValue `{...});` blocks close in order (`}); }); });`) and all quotes pair within each line |

## Limits

- Syntax was not executed. The brief forbids browser JavaScript, and no runtime activation occurred in T6, so the script is unverified at runtime.
- The `result` value is written raw (textContent assignment, no interpretation); the meaning of invoke callback result 0 was not analysed (out of scope).
- The file was replaced as one full-content fill (not a minimal keystroke insertion). Unchanged lines were retyped; the comparison above is the check that they match the original.
