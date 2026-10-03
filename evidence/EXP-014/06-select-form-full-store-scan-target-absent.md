# EXP-014 — Read-only full-store Select Form absence scan (T1)

Captured 2026-10-03 during T1 preflight. Read-only inspection of the Web Client **Select Form** grid ExtJS store (`grid-1136`). No mutation, no Save, no Form creation.

## Method

1. Cleared the Select Form filter textbox to load the full inventory store.
2. Read-only scan of **every string field of every record** in the store for the target `fx_formvariablelab04` (case-insensitive).
3. Prefix probe for `fx_formvariablelab` to enumerate sibling leftovers.
4. Separate Caption-collision check (Caption field = `it.data.text`).

## Raw scan result (read-only diagnostic)

```json
{
  "gridId": "grid-1136",
  "total": 650,
  "exactName": 0,
  "ciName": 0,
  "ciAnyField": 0,
  "prefixHits": ["FX_FormVariableLab03", "FX_FormVariableLab02"],
  "captionHits": []
}
```

## Interpretation

- **Total inventory records:** 650 (server-backed Select Form store loaded).
- **Exact Name matches for `FX_FormVariableLab04`:** 0.
- **Case-insensitive Name matches:** 0.
- **Case-insensitive matches in ANY string field of any record:** 0.
- **Caption collisions for `fx_formvariablelab04`:** 0 (none).
- **Prefix `fx_formvariablelab` hits:** only `FX_FormVariableLab03` (EXP-013 leftover) and `FX_FormVariableLab02` (EXP-012 leftover). No `FX_FormVariableLab04`.

## Conclusion

`FX_FormVariableLab04` is **absent** (exact + case-insensitive) from the full 650-record live Select Form inventory, with **0 Caption collisions**. Positive control (see evidence `02`) confirms the Name filter works.
