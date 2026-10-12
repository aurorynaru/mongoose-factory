# EXP-063 T2 — read-only AC-1 baseline on runtime FX_Items (2026-10-12)

Run `R-20261012-205347-bjNF`, cycle 2, task T2, worker session `e54846f7-7409-47a1-8813-71c3463edbb0`, task_message_id `0dc55280-0ba5-494f-a500-fab773f240d3`.

**Result: AC-1 read-only baseline observed.** The runtime FX_Items Form is open, clean (Save disabled), with three records. Each record shows a picture in the picture region. No Import click, upload, Save, close/reopen, or Designer action was performed.

**Discrepancy:** the pictures shown do not match the asset files of the same names (see §4). The T13 report recorded a blank picture region; T2 observes pictures for all three records.

## 1. Sources reviewed

- AGENTS.md (read from the repository this time).
- `experiments/EXP-063-...md` and `evidence/EXP-063/T1-preflight-report.md`.
- Tutorial Section 5 (T1 review) and EXP-062-R4 T13 baseline (dumbbell 45 pound iron 45.00 EA; eggs cage free 6.99 DZ; guitar natural acoustic 129.99 EA; picture blank at T13).

## 2. Browser state and route

- **Tab list (before any selection): 1 tab**: 0 (current) "Mongoose", Infor OS portal URL (`mingle-portal.se1.inforcloudsuite.com/.../c51080bc-...`). The earlier ChatGPT tabs from T1 are no longer listed.
- Tab select 0 (the Mongoose tab): succeeded.
- Snapshot 1 (fresh, untargeted): Mongoose tab selected; Explorer showing; no Form tab; toolbar Save disabled; no login challenge. Portal tabs show "System Administrator" and "Mongoose". No portal-notification banner was visible. Usable without challenge.
- **Open Forms before T2 action: none.** Only the Explorer was visible; the Form menu's "Close and Save Changes" item was disabled. No dirty state.
- Route: Form menu > Open > Select Form (dialog filtered to `FX_Items`, one entry, Caption `FX_Items`, Name `FX_Items`) > OK once.
- Snapshot 2 (after OK): tab heading `FX_Items` (tab selected, `tabpanel "FX_Items"`), footer `Description (Object 1 of 3)`, toolbar Save disabled.

## 3. Runtime identity and records (observed)

- Form identity: heading `FX_Items` (tab and panel). Three rows in the grid: dumbbell, eggs, guitar.
- The grid's Item, Description, Cost and UoM columns (accessibility tree): `dumbbell | 45 pound iron | 45.00 | EA`; `eggs | cage free | 6.99 | DZ`; `guitar | natural acoustic | 129.99 | EA`. These match the T13 values.
- Import button: visible, captioned `Import`, enabled. **Not clicked.**
- Save: disabled in every snapshot and screenshot.
- Record readbacks, by row selection (row header clicks only):

| Record (row) | Item | Description | Cost | UoM | Picture region (T2 screenshot) |
| --- | --- | --- | --- | --- | --- |
| 1 of 3 | dumbbell | 45 pound iron | 45.00 | EA | Shows the Elden Ring title artwork (a logo with a dark figure-and-circle emblem), in the Import button's right-hand region |
| 2 of 3 | eggs | cage free | 6.99 | DZ | Shows a sitting shiba-style dog |
| 3 of 3 | guitar | natural acoustic | 129.99 | EA | Shows a pink cartoon slime character on a green disc, on a brown background |

- Record 1 (dumbbell) was the current record on open; its Description field had focus with its text selected. Nothing was typed.
- Each picture is visibly different from the others. The T13 blank regions are not present in T2.

## 4. Comparison with the asset files (read-only Read; no modification)

The asset files were viewed with the Read tool. Visible content only; not inferred from filenames.

| File | Visible content |
| --- | --- |
| `assets/dumbbell.png` | Golden-retriever puppy illustration, with a PngTree watermark |
| `assets/eggs.png` | A pale, indistinct shape (a blob with two dark eyes and small pieces) on a white background, with a PicMix watermark |
| `assets/guitar.png` | Shiba-style dog sitting on a white background |

Runtime picture vs. the asset file of the same name:
- dumbbell record: Elden Ring artwork. **Does not match** `assets/dumbbell.png` (puppy).
- eggs record: shiba-style dog. **Does not match** `assets/eggs.png`; it matches `assets/guitar.png`.
- guitar record: pink slime. **Does not match** `assets/guitar.png`.

So the stored pictures do not correspond to the asset files by name. The operator said the records hold the same pictures as the assets. This is an **unresolved mismatch**. Possible causes (not verified): the operator's manual imports used different files; the stored binary is from another source; or the picture-to-record binding differs. The brief does not address this case. Stop here before any import; the coordinator decides.

## 5. Action audit (cumulative, T2 only; T1 counts in the EXP-063 record)

| Action | T2 count |
| --- | --- |
| Browser tab lists | 1 |
| Browser tab selects | 1 (Mongoose tab, succeeded) |
| Browser snapshots (fresh, untargeted) | 3 |
| Targeted finds | 4 ("Open", "Select Form", "FX_", "OK") |
| Element clicks | 5 (Form menu; Open item; Select Form OK; row header 2; row header 3) |
| Import clicks | 0 |
| File uploads | 0 |
| Runtime Save | 0 |
| Form close / reopen | 0 / 0 |
| Designer actions | 0 |
| Other field, record, Form or object edits | 0 |
| Typing / key presses | 0 |
| Navigate, refresh, restart, reauthentication | 0 |
| Browser JavaScript, console, network inspection | 0 |
| Screenshots (PNG) | 4 |
| Read of asset PNGs (read-only, Read tool) | 3 |

Cumulative (T1 + T2): browser tab lists 3 (T1: 2; T2: 1); tab selects 1; Import clicks 0; uploads 0; Saves 0; close/reopen 0; Designer actions 0; other edits 0.

## 6. Evidence files (T2)

- `evidence/EXP-063/t2-01-webclient-initial-explorer-no-form-open.png`: Explorer only, no Form tab, toolbar Save greyed. Proves: no Form open before T2. Does not prove: any Form's dirty state beyond the visible tabs.
- `evidence/EXP-063/t2-02-runtime-fx-items-record1-dumbbell-open-picture-region.png`: runtime FX_Items heading; dumbbell Item, Description, Cost, UoM; Import button; Elden Ring artwork. Proves: record 1 identity and its visible picture. Does not prove: the stored binary's identity or that it is the operator's file.
- `evidence/EXP-063/t2-03-runtime-fx-items-record2-eggs-picture-region.png`: eggs record (Item eggs, cage free, 6.99, DZ) with a shiba-style dog. Proves: record 2 and its visible picture. Does not prove: the stored binary's identity.
- `evidence/EXP-063/t2-04-runtime-fx-items-record3-guitar-picture-region.png`: guitar record (guitar, natural acoustic, 129.99, EA) with pink slime; Save greyed. Proves: record 3 and its visible picture. Does not prove: the stored binary's identity.

Snapshot files written by the tool (not worker-requested captures): `evidence\playwright\page-2026-10-12T13-03-37-378Z.yml`, `...13-03-41-014Z.yml`, `...13-03-47-588Z.yml`, `...13-03-56-611Z.yml`, `...13-04-05-309Z.yml`.

## 7. Knowledge state

- Runtime FX_Items open through Form > Open > Select Form, identity verified: observed.
- Three records with T13 values, Import button visible, Save disabled: observed.
- Each record shows a visible, distinct picture (T13 blank result not reproduced): observed.
- Picture contents do not match the asset files of the same names: observed; cause unresolved.
- Designer untouched; no Designer tab was opened in T2: observed.

## 8. Final state

- Runtime FX_Items Form open and clean (Save disabled), record 3 (guitar) current. Only FX_Items is open.
- No dialog, no unsaved-change prompt. The Designer was not opened in T2.
- No Import clicked, no upload, no Save.
