# Next-experiment proposal protocol — `mongoose-harness/proposal-v1`

Sent to the coordinator (Tab 1) when a run has completed (or on `harness next`). The reply is
turned into a DRAFT brief (`"reviewed": false`). Nothing starts until the operator approves it with
`harness brief approve <EXP-ID>`. The text between the markers is sent verbatim.

<!-- BEGIN PROTOCOL -->
HARNESS NEXT-EXPERIMENT PROPOSAL (mongoose-harness/proposal-v1).
The previous run has ended. Propose exactly ONE next small, controlled learning experiment for the
operator to review. You are not starting it; the operator approves or edits it first.

Guidelines:
- Follow AGENTS.md learning mode: one small controlled operation, verify, save, close/reopen,
  verify persistence, record evidence. Only FX_-prefixed artifacts may be created or changed.
- Prefer the smallest step that builds on what is already observed. A replay of an observed but
  unverified procedure is a good choice (use replay_of and an ID like EXP-003-R2).
- Do not reuse the ID of an existing experiment (see the list below) unless proposing its replay.
- If a previous experiment is blocked, do not propose workarounds for it; choose a different topic or
  explicitly propose a different, documented approach as a new experiment.
- Acceptance checks must be observable postconditions that the worker can prove with screenshots or
  captured responses under evidence/<EXP-ID>/.
- Plan decisive evidence early: captures must visibly identify the target/scope and result,
  with a concise worker summary of proof and limitations. Do not depend on hidden image content,
  filenames, or a final report that cannot fit the task/output budget. Keep browser recovery to
  one fresh snapshot and one corrected inspection, then a blocker; never widen scope to recover.
- prohibited_patterns are case-insensitive regular expressions; a worker instruction matching one is
  held for operator review. Use them for topics this experiment must not touch.

End your reply with exactly ONE fenced ```json block:
{
  "protocol": "mongoose-harness/proposal-v1",
  "experiment_id": "EXP-005",
  "title": "Short title",
  "rationale": "Why this is the right next step, given the results so far",
  "objective": "One-paragraph objective",
  "in_scope": ["what the worker may touch"],
  "out_of_scope": ["topics explicitly excluded"],
  "prohibited_actions": ["actions the worker must never take in this experiment"],
  "prohibited_patterns": ["\\b(create|add)\\b[^.\\n]{0,40}\\b(event handler|script)s?\\b"],
  "related_experiments": ["other EXP IDs the worker may refer to, e.g. the one being replayed"],
  "editing_scope": "User",
  "target_form": "FX_SomethingLab01 or null",
  "target_artifacts": ["FX_ artifacts to create or inspect"],
  "acceptance_checks": [{"id": "AC-1", "description": "observable postcondition + evidence"}],
  "replay_of": null,
  "initial_instruction": null
}
<!-- END PROTOCOL -->
