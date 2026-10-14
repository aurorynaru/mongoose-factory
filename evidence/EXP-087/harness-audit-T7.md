# controller-generated audit (not worker prose)

10 actions, 22 reads; prohibited-tool hits=0; errors=0; turns=31; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_CustomerID","In Collection","FX_HelloWorld01","FX_Code","FX_Label","FX_Address","%1","%2","mIsNotAValid"]

Key sequence: []

Spelled strings: []

Flagged tool usage: {}

Errors: []

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_tabs | action=list | ok |
| 2 | mcp__playwright__browser_snapshot | filename=evidence/EXP-087/t6-00-start-fresh-snapshot.yml | ok |
| 3 | mcp__playwright__browser_tabs | action=select | ok |
| 4 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 5 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-087/t6-01-preclose-clean-state.png | ok |
| 6 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-087\t6-01-preclose-clean-state.png | ok |
| 7 | mcp__playwright__browser_click | element=Form-tab close control (closable FX_Orders) | ok |
| 8 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 9 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-087/t6-02-after-Form-tab-close.png | ok |
| 10 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-087\t6-02-after-Form-tab-close.png | ok |
| 11 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 12 | mcp__playwright__browser_snapshot | filename=evidence/EXP-087/t6-03-after-close-fresh-snapshot.yml | ok |
| 13 | Grep | (no key/element/filename argument) | ok |
| 14 | mcp__playwright__browser_click | element=Form menu (top navigation) | ok |
| 15 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 16 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-087/t6-04-form-menu-open-recent-forms.png | ok |
| 17 | mcp__playwright__browser_click | element=FX_Orders recent-forms entry in Form menu | ok |
| 18 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 19 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-087/t6-05-reopened-FX_Orders-clean-state.png | ok |
| 20 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-087\t6-05-reopened-FX_Orders-clean-state.png | ok |
| 21 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 22 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 23 | mcp__playwright__browser_click | element=Edit menu (top navigation) | ok |
| 24 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 25 | mcp__playwright__browser_click | element=Validator menu item under Edit | ok |
| 26 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 27 | mcp__playwright__browser_mouse_move_xy | (no key/element/filename argument) | ok |
| 28 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 29 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 30 | mcp__playwright__browser_click | element=FX_CustomerID row in Validators list (reopened readback) | ok |
| 31 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 32 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-087/t6-06-reopened-readback-FX_CustomerID-selected.png | ok |
| 33 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-087\t6-06-reopened-readback-FX_CustomerID-selected.png | ok |
| 34 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 35 | mcp__playwright__browser_click | element=Cancel button of Global Objects dialog (reopened readback close) | ok |
| 36 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 37 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-087/t6-07-after-readback-Cancel-final-state.png | ok |
| 38 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-087-hello-world-part-5-section-8-fx-customerid-in-collection-validator.md | ok |
| 39 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-087-hello-world-part-5-section-8-fx-customerid-in-collection-validator.md | ok |
| 40 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-087-hello-world-part-5-section-8-fx-customerid-in-collection-validator.md | ok |
| 41 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-087-hello-world-part-5-section-8-fx-customerid-in-collection-validator.md | ok |
| 42 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-087-hello-world-part-5-section-8-fx-customerid-in-collection-validator.md | ok |