# EXP-063-R2 T1 — read-only preflight and baseline (cycle 0, task T1)

Run `R-20261012-213324-6cgo`, experiment EXP-063-R2, cycle 0, task **T1**. Worker session `b1f34139-e275-49c4-bf90-f4e01d2a61fa`; task_message_id `d6de9eca-7506-4cbd-aaac-207075963ce4`. Date 2026-10-12.

T1 is read-only. It stops before the Import click. No Import, upload, Save, close, reopen, Designer action or field edit was performed.

## 1. Sources reviewed (before browser interaction)

- `AGENTS.md` (repository file read).
- `docs/mongoose/transcripts/hello-world-pt4.md` lines 155–168, Section 5 (05:13–05:51). The tutorial supplies no image files or paths, and names only three Item rows although it says four exist. This run uses dumbbell, eggs and guitar only.
- `experiments/EXP-063-hello-world-part-4-section-5-import-item-pictures.md` (T1–T4 blocked record; the Select File mask blocker and the operator's overwrite authorization).
- `evidence/EXP-063/t3-02-import-dialog-open-after-import-click-before-file-choose.png` (viewed): the in-page dialog "Import Binary Data From File", "Files for property FX_Picture (*.png)", "Drop File Here / or / Select File", "Maximum upload size: 131MB", Upload greyed, Cancel enabled. Behind it, the dumbbell record with the Elden Ring picture.
- `experiments/EXP-062-R4-hello-world-part-4-section-4-picture-import-ui.md` (status T14) and `evidence/EXP-062-R4/T13-runtime-readonly-verification-report.md` (runtime baseline: dumbbell 45 pound iron / 45.00 / EA; eggs cage free / 6.99 / DZ; guitar natural acoustic / 129.99 / EA; visible Import button; picture region recorded as blank; Save disabled).

## 2. Browser state at start

- **Tab list (before any selection): 1 tab.** `0 (current) Mongoose`, portal URL with `favoriteContext=FX_Items`. No Designer tab. The portal's own tab strip (inside the page, not browser tabs) shows "System Administrator" and "Mongoose".
- Tab select: `0` (succeeded). Fresh snapshot taken after the select.
- Login, configuration or challenge screen: none. No portal banner was visible.
- **Open Mongoose Forms (Web Client tablist): one, `FX_Items`.** It is the runtime Form (heading `FX_Items`, Import button, three-record grid). It was reused, not reopened, because it was already open and clean. The Form menu route Form > Open > Select Form was not used.
- **Dirty state: clean.** Toolbar Save is disabled (accessibility `button "Save" [disabled]`; greyed icon in the screenshot). No modified marker was observed.
- Footer at the start: `Import (Object 1 of 3)`, which indicates focus on the Import button. After record selections it read `(Object 2 of 3)` and `(Object 3 of 3)`.
- The browser snapshot output reported "Console: 3 errors, 10 warnings". These were **not inspected** (console inspection is forbidden).

## 3. Record baseline (observed)

| Row | Item | Description | Cost | UoM | Import button | Picture shown (visible) | Screenshot |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | dumbbell | 45 pound iron | 45.00 | EA | visible, enabled, captioned Import | Elden Ring title artwork | `t1-01` (record 1 current at start) |
| 2 | eggs | cage free | 6.99 | DZ | visible, captioned Import | Shiba-style dog | `t1-02` |
| 3 | guitar | natural acoustic | 129.99 | EA | visible, captioned Import | Pink slime character | `t1-03` |

- Field values match the EXP-062-R4 T13 baseline for Item, Description, Cost and UoM (AC-5 baseline).
- Each record's Item text box was read as `dumbbell`, `eggs` and `guitar` in the accessibility snapshot / find result, and the screenshot shows the same Item value with its picture.
- Row selection: row header clicks on rows 2 and 3 (selection only). The current record at the end of T1 is **guitar (row 3)**. Dumbbell was not re-selected.

## 4. Picture comparison (observed; Read tool, read-only)

| Asset file | Visible content | Stored picture on the record | Match? |
| --- | --- | --- | --- |
| `assets/dumbbell.png` | Golden-retriever puppy, sitting, on a black background with a PngTree watermark | Elden Ring title artwork | No |
| `assets/eggs.png` | Faint pale sketch-like shape (eye-like marks, pale outlines) with a PicMix watermark, on white | Shiba-style dog | No |
| `assets/guitar.png` | Shiba-style dog, sitting, on white | Pink slime character | No |

Observation: the stored pictures differ from the asset files, consistent with the operator's statement. The asset file names do not correspond to the stored pictures.

## 5. Discrepancy noted (unresolved)

- EXP-062-R4 T13 (2026-10-12) recorded a **blank** picture region for all three records, both visually and in the accessibility tree.
- In this session (T1) and in EXP-063 T2 and T3, the picture was **visible** for all three records. The accessibility snapshot still shows no image element, so the picture may be a canvas or background render that the accessibility tree does not expose.
- Cause of the difference: unresolved. Not investigated (no reload, no console).

## 6. Upload tool and click tool availability

- `mcp__playwright__browser_file_upload` is listed among the available tools. **Not called.**
- `mcp__playwright__browser_mouse_click_xy` is listed among the available tools. **Not called.**

## 7. Action audit (T1, exact)

| Action | Count |
| --- | --- |
| Browser tab lists | 1 |
| Browser tab selects | 1 (succeeded) |
| Snapshots (explicit, untargeted) | 1 |
| Finds | 1 (`Item:`) |
| Element clicks (row header selection, no mutation) | 2 (row 2, row 3) |
| Screenshots (worker-requested PNG) | 3 (`t1-01`, `t1-02`, `t1-03`) |
| Asset file reads (Read tool, read-only) | 3 |
| Import clicks | **0** |
| Coordinate clicks (`browser_mouse_click_xy`) | **0** |
| File upload tool calls | **0** |
| Dialog Upload clicks | 0 |
| Runtime Save | 0 |
| Form close / reopen | 0 / 0 |
| Designer actions | 0 |
| Field, record, Form or object edits | 0 |
| Navigate, refresh, restart, reauthentication | 0 |
| Browser JavaScript, console or network inspection | 0 |
| Typing or key presses | 0 |

Note: the Playwright tool wrote its own page snapshot and console log files under `evidence\playwright\` (for example `page-2026-10-12T13-33-35-…`). These are tool-generated, not worker-requested, and were not opened.

## 8. Worker-written file inventory (T1)

- `experiments/EXP-063-R2-hello-world-part-4-section-5-import-item-pictures.md` (created)
- `evidence/EXP-063-R2/T1-preflight-report.md` (this report; created)
- `evidence/EXP-063-R2/t1-01-runtime-fx-items-record1-dumbbell-baseline.png`
- `evidence/EXP-063-R2/t1-02-runtime-fx-items-record2-eggs-baseline.png`
- `evidence/EXP-063-R2/t1-03-runtime-fx-items-record3-guitar-baseline.png`

No asset files were copied, changed or moved.

## 9. Acceptance checks (T1)

- **AC-1 — met as observed (T1 scope):** sources reviewed; session usable without challenge; runtime `FX_Items` Form open with identity; three records dumbbell, eggs and guitar; visible Import button; the picture each record shows, which differs from the assets; Save disabled. Evidence: tab list (section 2); identity and records (`t1-01` to `t1-03`).
- **AC-2 to AC-8 — not started.** No Import click, upload, Save or reopen.

## 10. Stop

T1 stops here as instructed, before any Import click. The FX_Items runtime Form is open and clean on guitar (row 3). No dialog is open. The next permitted action is the T2 replay (dumbbell first), subject to the operator's direction.
