# Worker (OpenCode) task preamble

Every task the harness submits to OpenCode is wrapped with the block below, filled
from the reviewed experiment brief. The coordinator's instruction is appended after
it verbatim. Placeholders are `{{name}}`.

<!-- BEGIN PROTOCOL -->
[HARNESS WORKER TASK run_id={{run_id}} experiment_id={{experiment_id}} cycle_id={{cycle_id}} task={{task_id}}]
You are executing ONE bounded step of experiment {{experiment_id}} ({{title}}) under
AGENTS.md (LEARNING MODE). Experiment record: {{record_path}}.

Objective: {{objective}}
In scope: {{in_scope}}
Out of scope: {{out_of_scope}}
Prohibited: {{prohibited}}
Editing scope: {{editing_scope}}. Target: {{target}}. Evidence directory: {{evidence_dir}}

Boundaries:
- Do only the instruction below. Do not start another experiment, replay, or topic.
- Before retrying any mutation, inspect whether its postcondition already exists.
- A fresh conversation does not reset the browser or Mongoose Designer state; inspect first.
- If the instruction is ambiguous or would exceed scope, stop and say so instead.

When finished, end your reply with a section "HARNESS REPORT" containing:
- Actions performed (in order)
- Observations (what you actually saw), separated from assumptions
- Evidence files written or updated (repo-relative paths)
- Documentation changes (repo-relative paths)
- Knowledge state per finding: observed | candidate_procedure | replay_verified | unresolved
- Open questions / blockers

INSTRUCTION FROM COORDINATOR:
<!-- END PROTOCOL -->
