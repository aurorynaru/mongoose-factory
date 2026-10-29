# Change request prompt (small, targeted changes)

Use this when something already exists and you want **one specific thing changed**, not a rebuild.
For new Forms, IDOs, portals or pages use `build-request-prompt.md` instead.

A blank means "ask me". Anything not listed under "Change" stays exactly as it is.

```text
/mongoose-builder
Change request (keep everything else as it is)

Target: <object name, e.g. FX_ApiPage/index.html, FX_ApiProbe script, FX_Orders form>
Where:  <the part, e.g. "Shipment orders table", "FX_ListShipments method", "Save button">
Change: <what should be different, e.g. "add a Customer column after Storer">
Why (optional):
Don't touch: <anything that must not change, or "everything else">
Done means: <what I'll see at runtime>
```

## Example

```text
/mongoose-builder
Change request (keep everything else as it is)

Target: FX_ApiPage/index.html
Where:  Shipment orders table
Change: show the order date as DD/MM/YYYY instead of YYYY-MM-DD
Don't touch: the API calls, paging, other columns
Done means: Load first page shows dates like 25/09/2026
```

## What Claude does

1. Reads the current version (repo copy, then a readback from the tenant) and records it as the rollback point.
2. Shows the **exact lines or properties** it will change (a small diff) and asks if anything is unclear.
3. Changes only those lines. No refactoring, renaming or restyling of nearby code (`mongoose-dx` §6).
4. Saves, reads back, checks your "Done means", and confirms the rest still works (e.g. the other buttons still respond).
5. Reports what changed, what was verified, and anything it noticed but did **not** change (as a suggestion).
