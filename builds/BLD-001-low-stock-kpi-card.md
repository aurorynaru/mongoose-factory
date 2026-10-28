# BLD-001 — Low-stock KPI card on FX_InventoryDashboard

Status: **done** (installed and verified at runtime, 2026-10-27 ~21:30 local). AC-1 to AC-4 passed.
Date: 2026-10-27
Account (checked at start): `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` (operator's own account) | Designer scope: `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`
Install go-ahead: the operator said "continue" on the pending install. No approval gate applied, because only an FX_ asset changed.

## Goal
Add a "Low stock" KPI card to the FX_InventoryDashboard page. It shows:
- how many items are low (above 0 and at or below their reorder level);
- how many units they are short in total;
- the most urgent low item;
- how many items are out of stock.

Clicking the card filters the table to the low items, and clicking it again shows all items. A matching "Low Stock" filter button is added to the filter bar.
"Done" means the card shows correct values in the Mongoose runtime after Refresh data.

## Objects
| Object | Type | New FX_ or existing | Scope | Change |
|---|---|---|---|---|
| `FX_Inventory/index.html` | Web User Control Asset | existing FX_ (EXP-136/139) | tenant-wide global asset, User version | content replaced with `assets/FX_Inventory/index.flat.html` |

Unchanged: Form `FX_InventoryDashboard`, UserControl `FX_InventoryControl`, the C# method `FX_LoadInventoryFromIDO`, variable `FX_vInventoryJson`, and IDO/table `FX_InventoryItems` and its rows. The card uses the QuantityOnHand and ReorderLevel fields that the page already loads.

## Data source
`FX_InventoryItems` through the existing bridge. Read only. The three fake rows from EXP-135 should give: 1 low item, 2 units short, most urgent FX-ITEM-002 (8 of 10), +1 out of stock.

## Approvals required
| Non-FX_ object or tenant-wide operation | Why | Rollback | Operator approval |
|---|---|---|---|
| none: only an FX_ asset changes (allowed in build mode) | | | n/a |

## Plan (each step ends with a Save and a readback)
Route: the EXP-139 asset-replacement route (observed once), in `playbooks/web-user-controls.md`.
1. Check the account: the Web Client header must show the operator's own account, and the Designer status bar `ScopeType: User`. Screenshot.
2. Designer › Edit › Web User Control Assets › `FX_Inventory/index.html` › Edit Browser File. Screenshot the current content as the rollback baseline. Fill it once with `index.flat.html`, then Edit Browser File OK and Global Objects OK.
3. Designer Save. Expected notice: "Global object(s) were saved."
4. Readback: reopen the asset read-only and confirm the content contains `FX_InvLowCard`. Cancel.
5. Runtime: reload the portal and open FX_InventoryDashboard. Click Refresh data and read the card values (AC-2). Click the card and check the filtered rows (AC-3). Screenshots.

Steps relying on unverified knowledge: none. Steps relying on observed knowledge: 2–5 (EXP-139, one run).

## Acceptance checks
- AC-1: the asset readback after the Save contains the card markup (`FX_InvLowCard`).
- AC-2: after Refresh data at runtime, the card shows the values listed under Data source.
- AC-3: clicking the card shows only FX-ITEM-002 and marks the card and the Low Stock filter as pressed. A second click shows all 3 items.
- AC-4: the existing headline, legend, filters and table still work: "2 of 3 items need reordering." and Needs reorder shows 2 rows.

## Rollback / cleanup
Replace the asset content with the previous version: git `657720d:assets/FX_Inventory/index.flat.html`, the EXP-139 install copy. Then Designer Save.

## Pre-install evidence (local, fake WSForm, headless Chrome)
- `evidence/BLD-001/local-after-refresh.png`: card values as expected (1 item, 2 units below reorder level, most urgent FX-ITEM-002 8 of 10, +1 out of stock). Headline and legend unchanged.
- `evidence/BLD-001/local-card-filter.png`: after a card click the table shows FX-ITEM-002 only, with the Low Stock filter pressed.
- `evidence/BLD-001/local-narrow.png`: at 390 px wide the card stacks under the summary, with no horizontal overflow.
- Not proven by these: behavior inside Mongoose (the real bridge, the iframe size of FX_InventoryControl at `100; 30`).

## Build record (2026-10-27, Playwright MCP, one session)

The steps follow the Plan. Each step ran once, with no retries.

1. **Account check.** Signed in at the top-level portal with the secret placeholders, then opened Mongoose from the portal menu search.
   - The Web Client header shows the operator's own account (`s1-webclient-account-header.png`).
   - Opened a fresh Designer with the Designer split button. The Identify Your Editing Scope dialog showed Scope User and the operator's user, and was confirmed with OK.
   - Opened FX_InventoryDashboard from the Form menu recent list. It shows Version `User version for us…` and the status bar shows `ScopeType: User` (`s1-designer-form-user-scope.png`).
2. **Rollback baseline and fill.**
   - Opened Edit › Web User Control Assets › `FX_Inventory` › `index.html`: Content `text/html`, Version `User version for user …`.
   - The Edit Browser File editor value was saved to `s2-baseline-editor-content.yml` (screenshot: `s2-baseline-before-fill.png`). With whitespace normalized, it equals git `657720d:assets/FX_Inventory/index.flat.html` (17,033 characters, `equal true`). The rollback source is therefore confirmed.
   - Clicked the editor and pressed Ctrl+A, then did **one** full-content fill of `assets/FX_Inventory/index.flat.html`.
   - Read back before OK (`s2-after-fill-editor-content.yml`): equal to the source after whitespace normalization (20,589 characters).
   - Clicked Edit Browser File OK once, then Global Objects OK once. Neither showed an error.
3. **Save.** Did one Designer Save (Save was enabled beforehand, `s3-before-save.png`).
   - The notice read `Global object(s) were saved.`, as in EXP-139. Save was then disabled (`s3-after-save-notice.png`).
4. **Persistence readback.** Closed the Form tab (no prompt) and reopened it from the recent list.
   - Opened the asset read-only. The editor value (`s4-reopen-readback-editor-content.yml`) is **equal to `index.flat.html`** after whitespace normalization and contains `FX_InvLowCard`.
   - Screenshot `s4-reopen-readback.png` shows File `FX_Inventory/index.html`, Content Type `text/html` and the end of the source.
   - Cancelled both dialogs once each. The Designer was clean (Save disabled, no dialog).
5. **Runtime.** In the Web Client, used Open › Select Form and opened FX_InventoryDashboard. A portal reload was not needed: the new asset loaded when the Form opened.
   - Before Refresh (`s5-runtime-before-refresh.png`), the new card shows "Low stock / - items / Refresh to load." and the filter bar shows All, Needs reorder, Low Stock and Out of Stock.
   - The frame exposed accessibility refs, so no coordinate clicks were needed.

## Acceptance results
| Check | Result | Evidence |
|---|---|---|
| AC-1 asset contains the card after Save | **Passed.** After close/reopen the readback equals the install copy (whitespace-normalized) and contains `FX_InvLowCard`. | `s4-reopen-readback-editor-content.yml`, `s4-reopen-readback.png` |
| AC-2 card values after Refresh data | **Passed.** Status `Loaded 3 records at 09:34 PM`. The card shows `1 item`, `2 units below reorder level`, `Most urgent: FX-ITEM-002, 8 of 10` and `+ 1 out of stock`. | accessibility snapshot; `s5-runtime-after-refresh.png` |
| AC-3 card toggles the filter | **Passed.** First click: the card and `Low Stock 1` are pressed and only FX-ITEM-002 is listed. Second click: `All 3` is pressed, the card is not pressed, and 3 rows are listed (003, 002, 001). | `s5-runtime-card-filter.png`; accessibility snapshot |
| AC-4 existing summary and filters unchanged | **Passed.** Headline `2 of 3 items need reordering.`, legend 1/1/1, `128 units on hand in 3 items, 2 warehouses`. Needs reorder shows FX-ITEM-003 and FX-ITEM-002. | `s5-runtime-after-refresh.png`, `s5-runtime-needs-reorder.png` |

What the evidence does not prove:
- The content comparison is whitespace-normalized through the accessibility value. Byte identity, such as line endings, is not proven.
- Close/reopen in the same Designer session does not by itself prove uncached server serialization. The runtime load in the Web Client, which fetched the asset separately, supports it.
- Nothing was checked at the database level.

## Objects changed
- `FX_Inventory/index.html` content only: replaced by `assets/FX_Inventory/index.flat.html`, User version.
- Nothing else was created, saved or modified: no Form, script, variable or IDO change, and no data write. Refresh data only reads FX_InventoryItems.

## Deviations and observations
- No deviations from the plan.
- With 3 rows and the card, the page is slightly taller than the `FX_InventoryControl` frame (`100; 30`). An inner scrollbar appears, and the bottom of the table sits at the frame edge (`s5-runtime-after-refresh.png`). With the filtered views (1–2 rows), it fits. This is cosmetic. A later build could enlarge the UserControl Size, which is a Form change.
- Tool-written snapshots and console logs are under `evidence/playwright/`.

## Knowledge-state change (applied 2026-10-27, operator approved)
The asset-replacement route in `playbooks/web-user-controls.md` has run twice (EXP-139, BLD-001) with Save, close/reopen persistence and a runtime check. It is now marked **verified** there, and the readback check `tools/compare-readback.js` was added to the skill.

## Rollback (unchanged)
Fill the asset with git `657720d:assets/FX_Inventory/index.flat.html`, then click Edit Browser File OK, Global Objects OK and Designer Save. The baseline readback `s2-baseline-editor-content.yml` confirms that this was the live content before BLD-001.
