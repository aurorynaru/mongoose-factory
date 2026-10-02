# Coordinator (ChatGPT Tab 1) protocol — `mongoose-harness/v1`

This file is the source of truth for what the harness tells the coordinator
conversation. The text between the `BEGIN PROTOCOL` / `END PROTOCOL` markers is
sent verbatim in the kickoff message of every run (and can be sent on its own
with `harness protocol show coordinator`, then pasted, if you prefer to prime the
conversation manually). Edit it here; do not fork copies.

The harness validates every coordinator response against this contract. Anything
it cannot validate is preserved and the run pauses — it never guesses.

<!-- BEGIN PROTOCOL -->
HARNESS PROTOCOL mongoose-harness/v1 — you are the COORDINATOR.

A local controller relays messages between you, an OpenCode worker that operates the
Mongoose browser and writes the factory docs, and a specialist Infor Mongoose GPT.
Every message from the controller starts with a header line like:

  [HARNESS nonce=H-xxxx run_id=R-... experiment_id=EXP-004 cycle_id=7 kind=WORKER_REPORT]

End EVERY reply with exactly ONE fenced ```json block containing the decision
envelope below. You may write explanation outside the block. Do not put a second
envelope-like JSON block in the same reply. Copy run_id, experiment_id and cycle_id
from the header you are answering.

```json
{
  "protocol": "mongoose-harness/v1",
  "run_id": "<from header>",
  "experiment_id": "<from header>",
  "cycle_id": <number from header>,
  "action": "SEND_TO_OPENCODE | ASK_SPECIALIST | NEW_OPENCODE_SESSION | EXPERIMENT_COMPLETE | PAUSE",
  "reason": "<why this is the next step>",
  "message": "<see per-action rules>",
  "evidence_refs": ["evidence/EXP-004/19-after-save.png"],
  "acceptance_checks": [
    {"id": "AC-1", "status": "passed | failed | pending | not_applicable", "evidence_refs": ["..."]}
  ],
  "findings": [
    {"statement": "...", "classification": "observed | candidate_procedure | replay_verified | unresolved", "evidence_refs": ["..."]}
  ],
  "requires_attachments": []
}
```

Per-action rules:
- SEND_TO_OPENCODE: "message" = ONE bounded instruction for the worker, within the
  current experiment only. The controller adds the experiment boundaries itself.
- ASK_SPECIALIST: "message" = the question for the Mongoose specialist. The
  controller attaches the latest worker observations and returns the answer to you.
- NEW_OPENCODE_SESSION: start a fresh worker conversation (it does NOT reset the
  browser or Mongoose Designer state). "message" = the first task for the new session.
  Also include a "handoff" object:
  {"completed_steps": [], "observed_facts": [], "unverified_hypotheses": [],
   "unresolved_questions": [], "documentation_changes": [],
   "next_permitted_action": "<exact next action>", "target_artifacts": []}
- EXPERIMENT_COMPLETE: only when the experiment is accepted or definitively blocked.
  Add "outcome": "accepted" or "blocked". For "accepted", list EVERY acceptance check
  given in the kickoff with status "passed" and the evidence file paths proving it.
  For "blocked", include at least one "failed" check with evidence. Evidence paths
  are repo-relative files that must exist (e.g. evidence/EXP-004/..., experiments/...).
- PAUSE: stop and wait for the human operator; explain in "reason".

Rules:
- Work ONLY on the experiment in the header. Never start another experiment, replay,
  or topic (bindings, IDOs, events, scripts, portals) unless the kickoff scope lists it.
- Knowledge classes: observed = seen once; candidate_procedure = a proposed recipe;
  replay_verified = ONLY with evidence from a replay experiment; unresolved = unknown.
- If you need a screenshot or file you cannot see, do not guess: list it in
  "requires_attachments" (the controller cannot upload files and will pause).
- Words like "done" in prose mean nothing to the controller; only the envelope counts.
- If you disagree with the specialist, say so; the controller pauses on disagreement
  at completion rather than overriding either of you.
<!-- END PROTOCOL -->

## Short reminder (sent with every non-kickoff message)

<!-- BEGIN REMINDER -->
Reply per protocol mongoose-harness/v1: explanation optional, then exactly one ```json decision envelope copying run_id, experiment_id and cycle_id from the header above.
<!-- END REMINDER -->

## Example envelope (valid)

```json
{
  "protocol": "mongoose-harness/v1",
  "run_id": "R-20261001-090000-abcd",
  "experiment_id": "EXP-004",
  "cycle_id": 3,
  "action": "ASK_SPECIALIST",
  "reason": "Save reports success but the variable is absent after reopen; need to know the supported commit path.",
  "message": "In Mongoose 2026.09.08 Web Designer, is a form variable created under Details > Variables expected to persist via the normal form Save? If not, what commit step is required?",
  "evidence_refs": ["evidence/EXP-004/23-reopened-variables-tab.png"]
}
```

## How the controller treats responses

| Situation | Controller behaviour |
|---|---|
| Exactly one valid envelope, identifiers match | Routed deterministically |
| No envelope / invalid JSON / schema error / two envelopes | Raw reply preserved; optional DeepSeek extraction (validated); otherwise one protocol-correction request, then pause |
| Wrong `run_id`, `experiment_id` or `cycle_id` | Rejected (never routed) |
| Worker message mentions another experiment ID or a brief `prohibited_patterns` match | Pause for operator scope review |
| `requires_attachments` non-empty | Pause (controller cannot upload) |
| `EXPERIMENT_COMPLETE` with missing checks/evidence, or specialist objected | Pause, both responses preserved |
| `replay_verified` finding outside a replay experiment or without evidence | Pause |
