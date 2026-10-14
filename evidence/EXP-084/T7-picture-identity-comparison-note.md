# EXP-084 T7 — AC-5 picture-identity comparison note (documentation only; zero browser calls)

Date 2026-10-14. Task T7, cycle 6, worker session `c2479711-679d-48df-8757-f539531b86fe`, task_message_id `80099fa7-1b7f-4019-8b0d-605ed633aea6`. No browser call, no Mongoose change, no runtime or Designer interaction, no reopen, no F4. No existing image, asset or evidence file was modified. Files were only read.

Classification of all findings: **observed only**. Visual comparison is not byte or hash comparison.

## Inputs reviewed (read-only)

| Label | File | What it shows (viewed) |
|---|---|---|
| R-EGG | `assets/eggs.png` (reference asset, operator folder) | Grey-tan rounded head at top with two dark eyes; four separate small tan fragments (left-middle, right-middle, lower-left, lower-right). White background. |
| R-DUMB | `assets/dumbbell.png` (reference asset) | Golden-coated sitting puppy, open mouth, dark eyes, black paw pads. |
| E-RT2 | `evidence/EXP-084/t6-07-runtime-order-2-eggs-picture-row2.png` (and `t6-08` at the same resolution) | EXP-084 runtime order 2 (eggs, FX002): greyish-tan rounded head with two dark eyes and four small tan fragments in the same arrangement as R-EGG. |
| E-RT1 | `evidence/EXP-084/t6-06-runtime-order-1-dumbbell-picture-row1.png` | EXP-084 runtime order 1 (dumbbell, FX001): golden-coated sitting puppy, open mouth. No visible caption or colon. |
| H-T3 | `evidence/EXP-063-R2/t3-04-after-upload-eggs-picture-and-modified-state.png` | EXP-063-R2 FX_Items eggs row immediately after the upload of `eggs.png` (modified marker on row 2): the same head-and-four-fragments figure as R-EGG. |
| H-T1 | `evidence/EXP-063-R2/t1-02-runtime-fx-items-record2-eggs-baseline.png` | EXP-063-R2 FX_Items eggs row before the import (the pre-import picture): a seated shiba-style dog (not the figure). |
| H-T7 | `evidence/EXP-063-R2/t7-04-after-reopen-eggs-item-fields-picture.png` | EXP-063-R2 FX_Items eggs row after the single close and reopen: the same seated shiba-style dog as H-T1 (not the figure). |

## (a) What the current runtime screenshots visibly depict

- **Order 1 (dumbbell), `t6-06`:** a visible golden-coated sitting puppy with an open mouth. It is clearly visible on the form. No caption text and no colon are visible beside or below it.
- **Order 2 (eggs), `t6-07` and `t6-08`:** a visible greyish-tan rounded head with two dark eyes and four small tan fragments below and to the sides. It is clearly visible on the form. No caption text and no colon are visible beside or below it.
- **Both:** the picture element's accessibility name is `C(FX_ItmsPictureStatic)` (snapshots `t6-03` and `t6-04`). That is the caption expression, not visible text. Its absence from the screen is an observation, not an assumption.

## (b) What the reference asset and the historical screenshots actually depict

- **R-EGG (`assets/eggs.png`):** a grey-tan rounded head with two dark eyes and four tan fragments. This is the same figure as E-RT2.
- **R-DUMB (`assets/dumbbell.png`):** a golden sitting puppy, the same subject as E-RT1.
- **H-T3 (after the eggs upload):** the same figure as R-EGG and E-RT2. This is the only historical capture in which the eggs row shows the figure.
- **H-T1 and H-T7 (eggs row before the import and after the reopen):** a seated shiba-style dog. This is not R-EGG.

## (c) Whether visual evidence establishes that the runtime picture is the intended eggs picture

**Dumbbell (order 1):** E-RT1 visually matches R-DUMB (golden puppy, sitting, open mouth). Visual match supported; byte identity not established. Classified **visually consistent**, and the kickoff's "golden retriever puppy" wording matches.

**Eggs (order 2):** E-RT2 visually matches R-EGG (same head, same two dark eyes, same four fragments in the same arrangement) and H-T3 (the same figure immediately after the upload of `eggs.png`). This is a strong visual match, which is more than vague resemblance. The kickoff's "small grey-faced figure" describes it reasonably; the EXP-063-R2 record's "faint pale sketch-like shape" is a different wording for the same figure, so the wording difference alone does not reject the match. Classified **visually consistent with `assets/eggs.png`**. Byte or hash identity is **not established**: no byte comparison was possible here (no shell or hash tool is permitted), so the identity of the stored image with the file is unresolved at byte level.

**Conflicting historical evidence (not the runtime evidence):** EXP-063-R2 T7 (`T7-ac7-close-reopen-recovery-report.md`, §5) and its T8 summary state that the reopened eggs row (`t7-04`) shows the eggs figure, "matches `assets/eggs.png`". The screenshot `t7-04` shows a shiba-style dog on the eggs row (H-T7), so the T7 claim is contradicted by its own capture. The T1 eggs baseline (H-T1) also shows the shiba. The cause of this contradiction is **not established** (it could be a stored-value difference, a display difference, or a misattributed capture). It is recorded here as a conflict within EXP-063-R2 and was not resolved.

**Decisive contradiction?** No decisive contradiction exists for the EXP-084 runtime picture. The runtime order 2 picture matches the asset and the post-upload capture. The contradiction sits in EXP-063-R2's reopen evidence for the same record, which weakens its claimed persistence of the eggs picture but does not show that the EXP-084 runtime picture is wrong.

## Explicit reconciliation: visibility, caption, colon

Regardless of picture identity: both runtime pictures are **visible**; **no visible caption text** and **no visible colon** appears on either order in the T6 captures. The EXP-084 expectation "no caption" is therefore met as observed for both pictures. The accessibility-name `C(FX_ItmsPictureStatic)` is recorded as not visible text.

## Assessment and recommendation for AC-5

- **Order 1 (dumbbell):** picture visually consistent with `assets/dumbbell.png`; no visible caption or colon; fields match EXP-083. Treat as **observed, visually consistent**.
- **Order 2 (eggs):** picture visually consistent with `assets/eggs.png` and with the EXP-063-R2 post-upload capture; no visible caption or colon; fields match EXP-083. Byte-level identity not established; the historical reopen evidence for the same record conflicts, unresolved.
- **AC-5 status: not yet passed (unresolved for picture identity).** The blank-criteria query, both orders' fields, the picture visibility and the absence of visible caption or colon are observed. Picture identity for the eggs order is visually strong but not established at byte level, and the cited historical reopen evidence contradicts it. Recommendation: keep AC-5 open pending either (i) a byte or hash comparison of the stored image against `assets/eggs.png` by an operator with a file tool, or (ii) an explicit operator decision to accept visual identity. No new runtime interaction is recommended by this task.

## Limitations

- Visual judgement only, from screenshots at reduced scale (`t6-07` and `t6-08` are at the same resolution; `t3-04` and `t7-04` are reduced views). No byte or hash comparison.
- The reference asset is the operator's folder; it was read, not modified.
- The EXP-063-R2 T7 and T8 claims are cited as written; the contradiction is recorded, not resolved.
- Same session; not database durability; not replay verification.
- The Select Form filter field (`FX_Orders`) was already populated when the picker opened in T6. T6 typed nothing into any filter or runtime field, so this worker can confirm the T6 typing count is zero; it cannot establish who populated the filter earlier (EXP-083 T5 typed a Select Form filter, per EXP-083's own record).

## Worker-written file (this note)

- `evidence/EXP-084/T7-picture-identity-comparison-note.md` (created).
