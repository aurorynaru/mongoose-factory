# controller-generated audit (not worker prose)

0 actions, 0 reads; prohibited-tool hits=0; errors=2; turns=20; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_HelloWorldProject01","Factory Hello World test project"]

Key sequence: []

Spelled strings: []

Flagged tool usage: {}

Errors: ["#2 Grep: Permission to read C:\\AI\\mongoose-factory\\.git\\index has been denied.","#10 Edit: <tool_use_error>String to replace not found in file.\nString: ### B. Acceptance checks (AC-1 to AC-8)\n\n**Gap:** no readable source defines AC-1 to AC-8 for EXP-039. A search of `AGENTS.md`, `experiments/EXP-038*`, `experiments/EXP-039*`, `evidence/EXP-038/*` and `evidence/EXP-039/*` found no AC identifiers. The brief that defines them is unreadable (`tools/briefs`). The matrix below therefore uses **provisional labels** mapped to the eight checks named in the objective and T1–T5 instructions. The… (5803 chars)"]

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | Grep | (no key/element/filename argument) | ok |
| 2 | Grep | (no key/element/filename argument) | error: Permission to read C:\AI\mongoose-factory\.git\index has been denied. |
| 3 | Glob | (no key/element/filename argument) | ok |
| 4 | Grep | (no key/element/filename argument) | ok |
| 5 | Grep | (no key/element/filename argument) | ok |
| 6 | Grep | (no key/element/filename argument) | ok |
| 7 | Grep | (no key/element/filename argument) | ok |
| 8 | Grep | (no key/element/filename argument) | ok |
| 9 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-039-single-fx-ido-project-creation-and-recovery.md | ok |
| 10 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-039-single-fx-ido-project-creation-and-recovery.md | error: <tool_use_error>String to replace not found in file. String: ### B. Acceptance checks (AC-1 to AC-8)  **Gap:** no readable source defines AC-1 to AC-8 for EXP-039. A search of `AGENTS.md`, `experiments/EXP-038*`, `experiments/EXP-039*`, `evidence/EXP-038/*` and `evidence/EXP-039/*` found no AC identifiers. The brief that defines them is unreadable (`tools/briefs`). The matrix below therefore uses **provisional labels** mapped to the eight checks named in the objective and T1–T5 instructions. The… (5803 chars) |
| 11 | Grep | (no key/element/filename argument) | ok |
| 12 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-039-single-fx-ido-project-creation-and-recovery.md | ok |
| 13 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-039-single-fx-ido-project-creation-and-recovery.md | ok |
| 14 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-039-single-fx-ido-project-creation-and-recovery.md | ok |
| 15 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-039-single-fx-ido-project-creation-and-recovery.md | ok |
| 16 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-039-single-fx-ido-project-creation-and-recovery.md | ok |
| 17 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-039-single-fx-ido-project-creation-and-recovery.md | ok |
| 18 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-039-single-fx-ido-project-creation-and-recovery.md | ok |
| 19 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-039-single-fx-ido-project-creation-and-recovery.md | ok |
| 20 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-039-single-fx-ido-project-creation-and-recovery.md | ok |
| 21 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-039-single-fx-ido-project-creation-and-recovery.md | ok |
| 22 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-039-single-fx-ido-project-creation-and-recovery.md | ok |
| 23 | Edit | file_path=C:\AI\mongoose-factory\evidence\EXP-039\t1-evidence-index.md | ok |
| 24 | Edit | file_path=C:\AI\mongoose-factory\evidence\EXP-039\t1-evidence-index.md | ok |
| 25 | Edit | file_path=C:\AI\mongoose-factory\evidence\EXP-039\t1-evidence-index.md | ok |
| 26 | Grep | (no key/element/filename argument) | ok |
| 27 | Grep | (no key/element/filename argument) | ok |