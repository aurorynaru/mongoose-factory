# Autopilot prompts (between experiments)

Used by `harness autopilot` after a run has COMPLETED. Every step uses NEW chats; the only memory is
the context file and the experiment records on disk. The text between each pair of markers is sent
verbatim (followed by the material it refers to).

## 1. Coordinator: update the context document

<!-- BEGIN CONTEXT_UPDATE -->
HARNESS CONTEXT UPDATE. You are a fresh coordinator chat. Below are (a) the current project-context
document, (b) the experiment records from disk, and (c) the full record of the experiment that just
finished. Produce the complete UPDATED context document so that future fresh chats know what was
learned. Keep the existing structure and headings; integrate the new experiment's findings into the
relevant sections (lessons, negative findings, rules, open questions); remove nothing that is still
true; mark anything not proven by evidence as (unverified). Keep observations, candidate procedures,
replay-verified results and unresolved items clearly distinguished. Do not invent details. Output only
the document in Markdown (no JSON block), at most ~2500 words.
Preserve exact evidence paths and the limits of each decisive observation. A saved
image's filename, heading-only crop, or uninspected contents do not prove a claim.
Carry forward browser recovery lessons and concise checkpoints; do not turn a
blocked lifecycle test or generic generated SQL into a verified variable procedure.
<!-- END CONTEXT_UPDATE -->

## 2. Specialist: confirm the findings

<!-- BEGIN SPECIALIST_REVIEW -->
HARNESS FINDINGS REVIEW (mongoose-harness/specialist-v1). Below are an updated project-context document
and the record of the experiment that just finished in an Infor Mongoose learning factory
(Mongoose 2026.09.08, Web Designer, classic forms). Please:
1. Check the NEW findings against Mongoose product knowledge. List each statement that is wrong,
   overstated or misleading, with the correction.
2. Do not "correct" environment observations that only browser evidence can establish; mark them as such.
3. List important missing points.
4. Distinguish visible evidence from the worker's interpretation; unresolved or
   cropped/unseen content stays unresolved. Generic SQL handling does not prove
   a particular variable definition. Name any image needed for manual inspection.
Separate OBSERVATIONS from your ASSUMPTIONS. List only specific issues; do not rewrite the document.
End with one ```json block:
{"protocol": "mongoose-harness/specialist-v1", "consultation_id": "<from header>",
 "verdict": "supports | objects | insufficient_evidence | informational", "required_verifications": []}
Use "supports" if the findings are sound (minor corrections allowed), "objects" if a finding is wrong.
<!-- END SPECIALIST_REVIEW -->

## 3. Coordinator: finalize the context document

<!-- BEGIN CONTEXT_FINALIZE -->
The Mongoose specialist reviewed your updated document (review below). Apply every correction you
agree with; where you disagree, keep your text but add a short note with the reason. Output the
complete FINAL document in Markdown (same structure, no JSON block). This becomes the memory that all
future fresh chats receive.
<!-- END CONTEXT_FINALIZE -->

## 4. Specialist: sanity-check the proposed next experiment

<!-- BEGIN PROPOSAL_CHECK -->
HARNESS PROPOSAL CHECK (mongoose-harness/specialist-v1). The coordinator proposes the next small,
controlled learning experiment below. It will start automatically only if you support it. Check:
1. Is it the right next small step given the findings (no dependency on a blocked or unverified topic)?
2. Is the scope narrow and safe (one new capability, FX_ artifacts only, User scope)?
3. Are the acceptance checks observable and sufficient to prove the postcondition?
4. Is anything technically wrong for Mongoose 2026.x Web Designer?
5. Can the worker capture and summarize decisive identity/scope/result evidence
   within its task budget, with safe recovery bounded to a fresh snapshot and one
   corrected inspection? No recovery may cross a forbidden lifecycle boundary.
Separate OBSERVATIONS from ASSUMPTIONS. End with one ```json block:
{"protocol": "mongoose-harness/specialist-v1", "consultation_id": "<from header>",
 "verdict": "supports | objects | insufficient_evidence | informational", "required_verifications": []}
Use "supports" only if the experiment can start as written.
<!-- END PROPOSAL_CHECK -->
