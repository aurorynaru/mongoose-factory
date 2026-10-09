# Replay comparison scorecard

Leave results blank until reviewed; blank is not pass or zero. Use counts for
wrong-tool actions, exact-value/report errors and loop interruptions. Record
guard name and count, plus evidence paths. Coordinator errors stay empty for now.
Tasks are manually relayed from fixed accepted coordinator text.

| Run | Task | Completed (y/n) | Wrong-tool actions | Exact-value errors | Guard denials (which guard) | Loop interruptions | Recovery allowance used | Report errors (claims not matching evidence) | Coordinator errors | Assistant turns | Wall time (s) | usage_limit hit |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| EXP-033-R3 | T1 | | | | | | | | | | | |
| EXP-033-R3 | T2 | | | | | | | | | | | |
| EXP-033-R3 | T3 | | | | | | | | | | | |
| EXP-033-R3 | T4 | | | | | | | | | | | |
| EXP-033-R3 | T5 | | | | | | | | | | | |
| EXP-033-R4 | T1 | | | | | | | | | | | |
| EXP-033-R4 | T2 | | | | | | | | | | | |
| EXP-033-R4 | T3 | | | | | | | | | | | |
| EXP-033-R4 | T4 | | | | | | | | | | | |
| EXP-033-R4 | T5 | | | | | | | | | | | |

CLI JSON exposes `assistantTurns`, `wallTimeSeconds`, `guardDenials` (total and
byGuard), and `guardDenialsFile`. Wall time covers task journaling/launch through
process close, excludes readiness/preflight, and is unknown after crash recovery.
Guard counts come from the task hook audit, not inferred successes. An auditError
means counts are lower bounds; inspect the native transcript. Built-in permission
denials are separate from the three custom guards. Manually review wrong tools,
literal spelling, recovery accounting, report claims and screenshots.

## EXP-033-R3: acceptance checks

| Check | Pass/fail | Evidence and limitations |
|---|---|---|
| AC-1 | | |
| AC-2 | | |
| AC-3 | | |
| AC-4 | | |
| AC-5 | | |
| AC-6 | | |
| AC-7 | | |
| AC-8 | | |

Reviewer notes:

Session UUID:

Inherited Select Form state and differences from R2:

Actual recovery used/remaining (never copy historical counts as observations):

Usage pauses / incomplete tasks / comparison limitations:

## EXP-033-R4: acceptance checks

| Check | Pass/fail | Evidence and limitations |
|---|---|---|
| AC-1 | | |
| AC-2 | | |
| AC-3 | | |
| AC-4 | | |
| AC-5 | | |
| AC-6 | | |
| AC-7 | | |
| AC-8 | | |

Reviewer notes:

Session UUID:

Inherited Select Form state and differences from R2:

Actual recovery used/remaining (never copy historical counts as observations):

Usage pauses / incomplete tasks / comparison limitations:
