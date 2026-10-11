# controller-generated audit (not worker prose)

0 actions, 0 reads; prohibited-tool hits=0; errors=1; turns=14; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_Items","FX_Test"]

Key sequence: []

Spelled strings: []

Flagged tool usage: {}

Errors: ["#15 Grep: Search failed — ripgrep rejected the pattern, glob, or file type without searching:\nrg: regex parse error:\n    (?:\\| (?!ok)[^|]+\\|\\s*(?!ok))\n          ^^^\nerror: look-around, including look-ahead and look-behind, is not supported\n\nConsider enabling PCRE2 with the --pcre2 flag, which can handle backreferences\nand look-around."]

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | Glob | (no key/element/filename argument) | ok |
| 2 | Grep | (no key/element/filename argument) | ok |
| 3 | Glob | (no key/element/filename argument) | ok |
| 4 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-058-hello-world-part-3-section-8-fx-items-custom-fx-te.md | ok |
| 5 | Glob | (no key/element/filename argument) | ok |
| 6 | Glob | (no key/element/filename argument) | ok |
| 7 | Glob | (no key/element/filename argument) | ok |
| 8 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-058\harness-audit-T10.md | ok |
| 9 | Grep | (no key/element/filename argument) | ok |
| 10 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-058\harness-audit-T8.md | ok |
| 11 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-058\harness-audit-T7.md | ok |
| 12 | Grep | (no key/element/filename argument) | ok |
| 13 | Grep | (no key/element/filename argument) | ok |
| 14 | Grep | (no key/element/filename argument) | ok |
| 15 | Grep | (no key/element/filename argument) | error: Search failed — ripgrep rejected the pattern, glob, or file type without searching: rg: regex parse error:     (?:\\| (?!ok)[^\|]+\\|\s*(?!ok))           ^^^ error: look-around, including look-ahead and look-behind, is not supported  Consider enabling PCRE2 with the --pcre2 flag, which can handle backreferences and look-around. |
| 16 | Grep | (no key/element/filename argument) | ok |
| 17 | Grep | (no key/element/filename argument) | ok |
| 18 | Grep | (no key/element/filename argument) | ok |
| 19 | Write | file_path=C:\AI\mongoose-factory\evidence\EXP-058\T11-final-acceptance-matrix-and-action-audit.md | ok |
| 20 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-058-hello-world-part-3-section-8-fx-items-custom-fx-te.md | ok |
| 21 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-058-hello-world-part-3-section-8-fx-items-custom-fx-te.md | ok |