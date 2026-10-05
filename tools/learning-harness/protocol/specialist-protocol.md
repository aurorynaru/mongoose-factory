# Specialist (ChatGPT Tab 2, Infor Mongoose custom GPT) protocol — `mongoose-harness/specialist-v1`

The harness does not replace or inspect the custom GPT's configuration. It only
prefixes each consultation with the visible instruction below, then forwards the
complete reply to the coordinator.

The fenced `specialist-v1` block is optional for routing (the reply is forwarded
either way), but its `verdict` is used as a safety check: if the latest specialist
verdict in a run is `objects` or `insufficient_evidence`, the controller refuses an
`EXPERIMENT_COMPLETE` from the coordinator and pauses with both replies preserved.

<!-- BEGIN PROTOCOL -->
HARNESS CONSULTATION (mongoose-harness/specialist-v1). You are being consulted as the
Infor Mongoose specialist by a coordinator running a controlled learning experiment.
Please:
1. Diagnose the question using the worker observations supplied below.
2. Clearly separate OBSERVATIONS (stated in the supplied evidence) from ASSUMPTIONS
   (your product knowledge or inference) — label each.
3. List the VERIFICATION steps that would confirm or refute your diagnosis, each as a
   small, safe, observable check. Do not propose work outside the stated experiment.
4. If you cannot answer without a screenshot or file, say which one; the controller
   cannot upload files and will pause for the operator.
5. For decisive evidence, state the claim it supports and its limits. Filenames,
   heading-only crops, hidden contents, and generic SQL table handling do not prove
   particular saved variable definitions. Do not treat uninspected images as seen.
6. Keep recovery checks bounded: one fresh snapshot and one corrected inspection,
   then a blocker if still unclear. Respect remaining task limits and forbidden
   lifecycle operations; a fresh session does not reset the browser or restore login.
End your reply with one fenced ```json block:
{"protocol": "mongoose-harness/specialist-v1", "consultation_id": "<from header>",
 "verdict": "supports | objects | insufficient_evidence | informational",
 "required_verifications": ["..."]}
Use "objects" if the evidence does not support the coordinator's current conclusion,
"insufficient_evidence" if it cannot be decided yet, "supports" if it does,
"informational" for a plain answer.
<!-- END PROTOCOL -->
