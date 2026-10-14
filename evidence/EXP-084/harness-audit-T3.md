# controller-generated audit (not worker prose)

22 actions, 40 reads; prohibited-tool hits=1; errors=0; turns=81; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_Orders","FX_ItmsPictureStatic","FX_ItmsPictureEdit","object.FX_ItmsPicture","Static","Image Only"]

Key sequence: [{"order":35,"key":"Tab","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_type":1}

Errors: []

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_tabs | action=list | ok |
| 2 | mcp__playwright__browser_snapshot | filename=evidence/EXP-084/snapshot-t3-01-designer-fresh-start.yml | ok |
| 3 | Grep | (no key/element/filename argument) | ok |
| 4 | Grep | (no key/element/filename argument) | ok |
| 5 | mcp__playwright__browser_click | element=FX_ItmsPictureGridCol row in Components grid (GridColumn, tab 10) - selection only, AC-2 caption check | ok |
| 6 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 7 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-084/t3-01-gridcol-caption-blank-after-ac2-check.png | ok |
| 8 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-084\t3-01-gridcol-caption-blank-after-ac2-check.png | ok |
| 9 | mcp__playwright__browser_click | element=FX_ItmsPictureEdit row in Components grid (Edit, tab 30) - selection only | ok |
| 10 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 11 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-084/t3-02-pre-change-fx_itmspictureedit-selected-edit-binding.png | ok |
| 12 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 13 | mcp__playwright__browser_click | element=Type dropdown arrow in Properties (FX_ItmsPictureEdit, value Edit) | ok |
| 14 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 15 | mcp__playwright__browser_click | element=Static option in Type dropdown list (FX_ItmsPictureEdit) | ok |
| 16 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-084/t3-03-type-static-committed-binding-check.png | ok |
| 17 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-084\t3-03-type-static-committed-binding-check.png | ok |
| 18 | mcp__playwright__browser_mouse_move_xy | (no key/element/filename argument) | ok |
| 19 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 20 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-084/t3-04-layout-misc-scrolled-before-size-change.png | ok |
| 21 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-084\t3-04-layout-misc-scrolled-before-size-change.png | ok |
| 22 | mcp__playwright__browser_mouse_click_xy | (no key/element/filename argument) | ok |
| 23 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 24 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 25 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-084/t3-05-size-group-expanded-height-before-edit.png | ok |
| 26 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-084\t3-05-size-group-expanded-height-before-edit.png | ok |
| 27 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 28 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-084/t3-05-size-group-expanded-height-before-edit.png | ok |
| 29 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-084\t3-05-size-group-expanded-height-before-edit.png | ok |
| 30 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 31 | mcp__playwright__browser_click | element=Height value cell (value 2) in Layout > Size of FX_ItmsPictureEdit | ok |
| 32 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 33 | mcp__playwright__browser_type | element=Height editor textbox in Layout > Size (FX_ItmsPictureEdit), value 2 | ok |
| 34 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 35 | mcp__playwright__browser_press_key | key=Tab | ok |
| 36 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-084/t3-06-size-height-9-committed-before-no-colon.png | ok |
| 37 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-084\t3-06-size-height-9-committed-before-no-colon.png | ok |
| 38 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 39 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 40 | mcp__playwright__browser_click | element=No Colon value cell (False) in Specific Attributes of FX_ItmsPictureEdit | ok |
| 41 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-084/t3-07-no-colon-control-after-cell-click.png | ok |
| 42 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-084\t3-07-no-colon-control-after-cell-click.png | ok |
| 43 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 44 | mcp__playwright__browser_click | element=No Colon True/False dropdown arrow (value False) in Specific Attributes of FX_ItmsPictureEdit | ok |
| 45 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 46 | mcp__playwright__browser_click | element=True option in No Colon dropdown (FX_ItmsPictureEdit) | ok |
| 47 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-084/t3-08-no-colon-true-committed-before-image-check.png | ok |
| 48 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-084\t3-08-no-colon-true-committed-before-image-check.png | ok |
| 49 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 50 | mcp__playwright__browser_click | element=Image and Text value cell (Inherit) in Data Source > Formatting of FX_ItmsPictureEdit | ok |
| 51 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 52 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-084/t3-09-image-and-text-row-selected-options-check.png | ok |
| 53 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-084\t3-09-image-and-text-row-selected-options-check.png | ok |
| 54 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 55 | mcp__playwright__browser_click | element=Image and Text dropdown arrow (value Inherit) in Data Source > Formatting of FX_ItmsPictureEdit | ok |
| 56 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 57 | mcp__playwright__browser_click | element=ImageOnly option in Image and Text dropdown (FX_ItmsPictureEdit) | ok |
| 58 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-084/t3-10-configured-fx_itmspictureedit-before-save.png | ok |
| 59 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-084\t3-10-configured-fx_itmspictureedit-before-save.png | ok |
| 60 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 61 | mcp__playwright__browser_click | element=FX_DerOrderTotalEdit row (another existing component; selection only, not modified) | ok |
| 62 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 63 | mcp__playwright__browser_click | element=FX_ItmsPictureEdit row in Components grid - reselect for independent verification | ok |
| 64 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-084/t3-11-reselected-fx_itmspictureedit-verification.png | ok |
| 65 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-084\t3-11-reselected-fx_itmspictureedit-verification.png | ok |
| 66 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 67 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 68 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 69 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 70 | mcp__playwright__browser_snapshot | filename=evidence/EXP-084/snapshot-t3-02-post-configure-reselected-inventory.yml | ok |
| 71 | Grep | (no key/element/filename argument) | ok |
| 72 | Grep | (no key/element/filename argument) | ok |
| 73 | mcp__playwright__browser_mouse_move_xy | (no key/element/filename argument) | ok |
| 74 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 75 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-084/t3-12-reselected-layout-misc-no-colon-verification.png | ok |
| 76 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-084\t3-12-reselected-layout-misc-no-colon-verification.png | ok |
| 77 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 78 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-084/t3-13-reselected-no-colon-true-specific-attributes.png | ok |
| 79 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-084\t3-13-reselected-no-colon-true-specific-attributes.png | ok |
| 80 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-084-hello-world-part-5-section-6b-fx-orders-picture-display.md | ok |
| 81 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-084-hello-world-part-5-section-6b-fx-orders-picture-display.md | ok |