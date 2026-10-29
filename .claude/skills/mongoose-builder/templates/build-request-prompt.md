# Build request prompt (copy, fill in, paste to Claude)

> Prefer a form? `cd assets && npm run preview`, then open http://127.0.0.1:8765/_request/index.html. It writes this same text for you (`assets/README.md` § Request builder). Keep `assets/_request/app.js` in step when this template changes.

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
[ ] dashboard / chart   [ ] web page (HTML/JS/CSS asset)   [ ] change an existing factory object (built with this prefix)
[ ] change an existing object the factory didn't build (name it in section 6)
New Forms are built as Flex Forms. Write "Classic" here if you want a Classic Form instead:

## 3. Names
Prefix (every new object name starts with it; keep FX_ unless you want another): FX_
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

### 4b. Forms (one block per Form)
#### Form 1
Form name (FX_…):
Data it shows (IDO):
How it connects (on its own / tile in another Form's grid / opened by a button on another Form / embedded in another Form's region): on its own
Layout: [ ] grid + detail   [ ] grid only   [ ] detail only   [ ] other:
Fields shown, in order (with captions as the user should see them):
-
Read-only fields:
Dropdowns / validation (field → allowed values or source):
Second grid on this Form (another IDO, e.g. the selected row's lines):
Buttons — one per line: caption | what happens when clicked | what the user sees after
-

(Copy the "#### Form" block for each further Form. A Form that isn't "on its own" also gets these two lines
after "How it connects":
Connects to (which Form):
Linked by (what it passes or filters on):)

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
Colors / theme / fonts (or "match <an existing page>"):
Must work on: [ ] desktop  [ ] tablet  [ ] phone

## 6. Scope, approvals and limits
Final scope for Forms (User / Group <name> / Site) — default User; Group or Site is saved only after the User-scope version passes: User
Group/Site save approved: not needed (User scope)
Existing objects the factory didn't build that may be changed (name each one, or "none"):
Other tenant-wide steps allowed (FormSync, deployment, metadata cache unload) — default none:
Outbound calls allowed (exact endpoint + verb) — default none beyond those already approved:
Data I must not touch:

## 7. Done means (required)
I will accept it when (list what I can see or do at runtime):
- 
- 

## 8. Anything else
Known problems, deadlines, things to avoid:

## 9. Evidence and guide
Evidence: full / light (default full; use full for anything going to production):
Guide with pictures: none / PDF / Word (.docx) (default none):
```

---

## Why each section matters (what goes wrong without it)

| Section | Without it |
|---|---|
| 1 Goal, 7 Done means | Claude can't tell when the build is finished, so acceptance checks are guessed. |
| 3 Prefix | Leaving `FX_` is fine. Another prefix (letter, letters/digits, then `_`, e.g. `ACME_`) is checked against the tenant first; existing objects that already start with it are not the factory's and still need approval. |
| 3 Names | Names are proposed and need a round of approval; renaming later means re-wiring handlers and components. |
| 4a Fields with type + length | Types and lengths become schema; changing them after rows exist is a schema change on the table. |
| 4b One block per Form, "How it connects" | With several Forms in one block, Claude can't tell which fields and buttons belong where, or which Form must exist first. A Form is built before the Form that points to it. Tile in a grid is observed (EXP-115–118); opened by a button runs as a small probe; embedded in a region is **unverified**. |
| 4b Buttons "what happens / what the user sees" | Event handlers, scripts and messages can't be written without it. |
| 4c/4d Data source | Unknown IDO or property names are the most common blocker: Claude reads them back from the tenant first. |
| 5 Mock screenshot | Without it the page gets the generic look of the existing FX_ pages. |
| 6 Scope | Forms stay in User scope (only you see them). Group or Site makes Claude build and check in User scope first, then save to that scope as a last, separately approved step. That step is **unverified** here and needs Site Developer editing permission. Write `yes` after "Group/Site save approved", or `no, ask me first`. |
| 6 Approvals | Objects the factory didn't build, tenant-wide steps and new API calls are **stopped**, not skipped around, until approved for this task (AGENTS.md). |
| 9 Evidence and guide | Default is full evidence and no guide. A light build has no step pictures, so a pictured guide later means redoing the steps. |

## What Claude does with the request

1. Checks the signed-in account (must not be the read-only Mock account).
2. Copies the request into `builds/BLD-NNN-<slug>.md` (`templates/build-brief.md`).
3. Checks every named object and field against the repo and the tenant, and lists blanks that block the build as **questions** (with suggested options marked as suggestions).
4. Shows the plan, marking approvals for objects the factory didn't build, tenant-wide steps and **unverified** steps (run as small probes first). Waits for your yes.
5. Builds one step at a time, saving and reading back after each, with screenshots in `evidence/BLD-NNN/`.
6. Verifies after close/reopen and at runtime, against your section 7.
7. Reports **Verified / Unknown / Proposed** and the cleanup list.

## Example (BLD-001, as it could have been requested)

```text
/mongoose-builder
## 1. Goal
Add a "Low stock" KPI card to the FX_InventoryDashboard page.
## 2. Build type
[x] change an existing factory object (built with this prefix)
## 3. Names
Prefix: FX_
Asset folder: FX_Inventory/index.html
## 4d. Web page / dashboard
Data shown: FX_InventoryItems, already loaded by the page (QuantityOnHand, ReorderLevel).
KPI card: count of items above 0 and at or below reorder level; total units short; most urgent item; count out of stock.
Filters: clicking the card filters the table to low items, clicking again shows all. Add a "Low Stock" filter button.
## 6. Approvals and limits
Final scope for Forms: User. Existing objects the factory didn't build: none. Tenant-wide steps: none.
## 7. Done means
- After Refresh data, the card shows 1 low item, 2 units short, FX-ITEM-002 most urgent, +1 out of stock.
- Clicking the card shows only the low rows.
```
