# EXP-042 T3 — Runtime status-bar and count check (read-only)

Date: 2026-10-10. Task T3, cycle 4, run R-20261010-164731-Mlt6, worker session `7eef4e85-fa1f-4002-8dc9-1d233b52130a`, task_message_id `2006fe8c-9b86-471c-a703-3a89f6a5d2d0`.

## Question

Does the open `FX_HelloWorld01` runtime Form show an existing status bar or an explicit count of persisted collection records?

## Inputs checked (no new browser action)

1. `t2-02-runtime-after-fip-f4-empty-criteria-settled.png` (viewed in T3). Viewport 1920×945 CSS px. The runtime tab `FX_HelloWorld01` is selected. The grid shows one row with a blue new-row star and the number `1`, and two empty inputs. The bottom edge (y ≈ 925–945) shows only a horizontal scroll bar with arrows and no text. No status-bar text, record count or "of N" indicator is visible.
2. `t2-03-runtime-after-supported-refresh-settled.png` (viewed in T2; same layout). Same result.
3. One fresh accessibility snapshot of the current page (read-only; this is the one bounded inspection the T3 instruction allows). Relevant excerpt from the `FX_HelloWorld01` tab panel:

```yaml
- tabpanel "FX_HelloWorld01" [ref=f1e105]:
  - form [ref=f1e106]:
    - generic [ref=f1e107]:
      - grid [ref=f1e108]:
        - grid [ref=f1e109]:
          - row [ref=f1e110]:
            - columnheader [ref=f1e111]
          - grid [ref=f1e116]:
            - table [ref=f1e118]:
              - rowgroup [ref=f1e119]:
                - row [ref=f1e120]:
                  - gridcell "1" [ref=f1e121]
        - grid [ref=f1e124]:
          - row [ref=f1e125]:
            - columnheader [ref=f1e126]
            - columnheader "*" [ref=f1e130]
          - grid [ref=f1e135]:
            - table [ref=f1e137]:
              - rowgroup [ref=f1e138]:
                - row [ref=f1e139]:
                  - gridcell [ref=f1e140]
                  - gridcell [ref=f1e142]
      - separator [ref=f1e144]: ⁞
      - generic [ref=f1e145]: ":"
      - textbox [ref=f1e151]
      - generic [ref=f1e152]: ":"
      - generic [ref=f1e154]:
        - text: "*"
        - textbox [ref=f1e158]
```

Full-page snapshot text outside the Form: the banner, the Explorer, the toolbar (Save disabled, New, Delete, Refresh, FiP, Export To Excel, Designer buttons), the four tabs (`IDO Projects`, `IDOs`, `Sql Tables`, `FX_HelloWorld01`) and the Smart Panel. No status-bar element, no footer text, no "record", "of", "count" or "rows" text, and no numeric value other than the grid cell `1`.

## Result

- **Status bar: absent.** No accessibility node and no rendered text identifies a status bar in the runtime Form.
- **Explicit count: absent.** No record count or "of N" text is rendered anywhere in the runtime Form.
- **Meaning of the single `1`:** it is the row header of the new-row placeholder (the blue star marks it as the new row). It is not a persisted-record count, and the brief excludes it as proof of an empty collection.

## Conclusion (AC-2)

**AC-2 is failed under the current brief.** No existing indicator establishes zero persisted records, and no existing indicator proves any count. Per the T3 instruction, the worker did not enable the status bar, did not change any preference, did not repeat the FiP/F4 or Refresh queries, and did not attempt the Designer or field-identification routes. The recovery allowance is exhausted, so no further inspection was attempted.

## Limitations

- The check used the screenshot and the accessibility tree only. It did not test a footer that a user preference would show (the brief forbids enabling one).
- The absence of a count is observed in this session only.
- The screenshots show the viewport only, not the full page height. The accessibility tree is the stronger evidence for the absence of a footer element.

## Operation counts (T3)

| Operation | Count |
|---|---|
| Browser actions (clicks, typing, key presses, navigation, preference changes) | **0** |
| Fresh accessibility snapshots (read-only) | 1 |
| Screenshots taken | 0 (existing T2 captures viewed) |
| Image views (Read of existing PNG) | 1 (`t2-02`) |
| Runtime typing / New / Save / insertion / deletion / Form close / reopen | 0 / 0 / 0 / 0 / 0 / 0 |
| Recovery snapshots / corrected inspections | 0 / 0 (recovery allowance was already used in T2) |
| JavaScript / evaluate / run-code / network reads | 0 / 0 / 0 |
