# EXP-015 — Select Form full-store absence scan (read-only, T1 preflight)

Date: 2026-10-03
Task: T1 preflight / AC-1 (strictly read-only; no Mongoose mutation)

## Method

- Surface: Web Client **Select Form** dialog grid `grid-1136` (ExtJS store, client-side, `remoteTotal = 0`).
- Read-only scan of the live store's `_source.items` array. For each item, walked `rec` (depth ≤ 3) collecting every string field, then case-insensitively searched for the target substring.
- No filter textbox was relied upon for the count (the filter textbox/grid can be out of sync — see environment notes); the authoritative count is the store scan itself.

## Raw scan result (inline from Playwright evaluate)

```json
{
  "total": 651,
  "hitCount": 0,
  "neighbors": [
    "FX_FormVariableLab02",
    "FX_FormVariableLab03",
    "FX_FormVariableLab04",
    "UsersMaint",
    "UsersMaintQuery"
  ]
}
```

## Interpretation

- **Total records in live Select Form store: 651.**
- **Exact / case-insensitive Name matches for `FX_FormVariableLab05`: 0.**
- **Matches in any string field for `fx_formvariablelab05`: 0.**
- **Positive controls (proving the scan sees the target family and the Name field):**
  - `FX_FormVariableLab02`, `FX_FormVariableLab03`, `FX_FormVariableLab04` present (EXP-012/013/014 leftovers) — confirms the `FX_FormVariableLab*` family is visible to the scan.
  - `UsersMaint`, `UsersMaintQuery` present — confirms the Name field is scanned.
- **Conclusion:** `FX_FormVariableLab05` is **absent** (exact + case-insensitive) from the full 651-record live inventory.

## Note vs EXP-014

EXP-014's preflight store held **650** records; this EXP-015 preflight store holds **651**. The +1 delta is consistent with an intervening artifact created between the two preflights (not `FX_FormVariableLab05`, which is proven absent). The delta is recorded, not assumed.
