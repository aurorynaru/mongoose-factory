# Build request prompt (copy, fill in, paste to Claude)

Use this to ask for a new or changed Form, IDO/table, portal, dashboard or web page.
Fill in what you know and leave the rest blank. **A blank means "ask me", not "pick something".**
Claude reads every section, checks names against the repo and the tenant, and asks about any blank
that matters before building (`mongoose-builder` workflow + `mongoose-dx` rules).

For a small change to something that already exists, use `change-request-prompt.md` instead.

Only section 1, 2 and 7 are required. Delete the type blocks in section 4 that don't apply.

---

```text
/mongoose-builder

## 1. Goal (required)
What I want, in one or two sentences:
Who uses it and for what:

## 2. Build type (required, pick one or more)
[ ] new Form            [ ] new IDO + SQL table     [ ] new portal / shell (Flex) Form
[ ] dashboard / chart   [ ] web page (HTML/JS/CSS asset)   [ ] change an existing FX_ object
[ ] change an existing non-FX_ object (name it in section 6)

## 3. Names
Form name(s) (FX_…):
IDO / table name (FX_…):
Asset folder (FX_…/index.html):
Leave blank and Claude will propose names in the plan for you to approve.

## 4. Details by type

### 4a. IDO / table
Is the data in an existing IDO? (name it, or "new"):
Fields — one per line: name | type (text / number / decimal / date / yes-no) | length or precision | required? | key? | default
-
-
Relations / lookups (field → other table or IDO):
Calculated fields (formula in words):
Test rows to create (fake data only):

### 4b. Form
Layout: [ ] grid + detail   [ ] grid only   [ ] detail only   [ ] other:
Fields shown, in order (with captions as the user should see them):
-
Read-only fields:
Dropdowns / validation (field → allowed values or source):
Buttons — one per line: caption | what happens when clicked | what the user sees after
-

### 4c. Portal / shell
Pages (e.g. sign-in, home, list, cart) and what each shows:
-
Menu / navigation items → which page:
Header content (title, logo, user name):
Sign-in needed? [ ] no  [ ] yes — users come from:
Tiles / cards (which data, which fields on a tile, click action):

### 4d. Web page / dashboard
Data shown (which IDO or API, which fields):
KPI cards / charts / tables (what each one counts or shows):
Filters, sorting, refresh:
API calls (endpoint + verb). Only approved calls run; new ones need my approval here:

## 5. Look and feel
Mock screenshot / reference (attach or give a path):
Colors / theme / fonts (or "match FX_… "):
Must work on: [ ] desktop  [ ] tablet  [ ] phone

## 6. Approvals and limits
Existing non-FX_ objects that may be changed (name each one, or "none"):
Tenant-wide steps allowed (Group/Site save, FormSync, deployment, cache unload) — default none:
Outbound calls allowed (exact endpoint + verb) — default none beyond those already approved:
Data I must not touch:

## 7. Done means (required)
I will accept it when (list what I can see or do at runtime):
- 
- 

## 8. Anything else
Known problems, deadlines, things to avoid:
```

---

## Why each section matters (what goes wrong without it)

| Section | Without it |
|---|---|
| 1 Goal, 7 Done means | Claude can't tell when the build is finished, so acceptance checks are guessed. |
| 3 Names | Names are proposed and need a round of approval; renaming later means re-wiring handlers and components. |
| 4a Fields with type + length | Types and lengths become schema; changing them after rows exist is a schema change on the table. |
| 4b Buttons "what happens / what the user sees" | Event handlers, scripts and messages can't be written without it. |
| 4c/4d Data source | Unknown IDO or property names are the most common blocker: Claude reads them back from the tenant first. |
| 5 Mock screenshot | Without it the page gets the generic look of the existing FX_ pages. |
| 6 Approvals | Non-FX_ objects, tenant-wide steps and new API calls are **stopped**, not skipped around, until approved for this task (AGENTS.md). |

## What Claude does with the request

1. Checks the signed-in account (must not be the read-only Mock account).
2. Copies the request into `builds/BLD-NNN-<slug>.md` (`templates/build-brief.md`).
3. Checks every named object and field against the repo and the tenant, and lists blanks that block the build as **questions** (with suggested options marked as suggestions).
4. Shows the plan, marking non-FX_ approvals, tenant-wide steps and **unverified** steps (run as small probes first). Waits for your yes.
5. Builds one step at a time, saving and reading back after each, with screenshots in `evidence/BLD-NNN/`.
6. Verifies after close/reopen and at runtime, against your section 7.
7. Reports **Verified / Unknown / Proposed** and the cleanup list.

## Example (BLD-001, as it could have been requested)

```text
/mongoose-builder
## 1. Goal
Add a "Low stock" KPI card to the FX_InventoryDashboard page.
## 2. Build type
[x] change an existing FX_ object
## 3. Names
Asset folder: FX_Inventory/index.html
## 4d. Web page / dashboard
Data shown: FX_InventoryItems, already loaded by the page (QuantityOnHand, ReorderLevel).
KPI card: count of items above 0 and at or below reorder level; total units short; most urgent item; count out of stock.
Filters: clicking the card filters the table to low items, clicking again shows all. Add a "Low Stock" filter button.
## 6. Approvals and limits
Existing non-FX_ objects: none. Tenant-wide steps: none.
## 7. Done means
- After Refresh data, the card shows 1 low item, 2 units short, FX-ITEM-002 most urgent, +1 out of stock.
- Clicking the card shows only the low rows.
```
