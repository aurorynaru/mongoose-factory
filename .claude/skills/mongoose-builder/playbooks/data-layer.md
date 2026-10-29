# Playbook: Data layer (SQL tables, IDOs, properties, joins, derived properties)

Knowledge state: **observed** for every route below (single accepted runs, UI-level, same session;
no database reads). Property-class creation ran three times (EXP-047-R2, EXP-048, EXP-060) and is a
candidate recipe. No route here is replay-verified.

All objects in this playbook are **tenant-wide**. Names with the build prefix (`FX_` by default) may be created under build mode.
Changing a table or IDO the factory doesn't own needs explicit per-object operator approval (see SKILL.md).

## Runtime admin Forms (open via Web Client toolbar Open → Select Form)

| Purpose | Select Form Name | Notes |
|---|---|---|
| IDO projects | `IdoProjects` | New → Project Name, Description; Access As pre-fills (e.g. `G6R`) (EXP-039) |
| IDOs | `IdoCollections` (caption "IDOs") | Opens in Filter in Place; Check Out / Check In / New Property / Tables buttons (EXP-061, 066-R2) |
| Property classes | `IdoPropertyClasses` | Captioned inputs; FiP accepts `FX_UM*` prefix (EXP-043) |
| SQL tables / columns | `SqlTables` → **Columns…** child | Caution alert on every open: OK only, informational (EXP-059) |

Select Form filter: type with key events, then **Tab** (or End) to refresh the list. A plain fill doesn't refresh it (EXP-041, 071-R2).

## Absence gate before creating anything (always do this)
1. Open a **fresh** IDOs / Sql Tables Form. A reopened one opens already in Filter in Place.
2. Type the exact name in the criteria field and commit it with **Tab**.
3. **Screenshot the criterion before F4**, then press F4 and capture the settled result (EXP-071 was blocked without this; R2 passed).
4. Zero rows looks different per Form:
   - IDOs: an empty grid with the criterion greyed.
   - Sql Tables: one blue-star add-mode placeholder.
   - Neither is a saved row.
5. Queries are case-insensitive. Run a positive control (an existing name) once per session.
6. **Never type into Sql Tables › Attributes › Table Name to search.** That field is the record's own name. Typing there renamed `Customer` in the client (EXP-040 incident). Use the grid criteria row only.

## Create table + IDO in one go: Data Maintenance wizard (preferred)
Route (EXP-040, 044, 049, 071-R2, 134, 137):
1. Web Designer → **New** → Form Wizard Selection: New Form, Category **NewData**, Wizard **Maintenance** → OK.
2. Page 1:
   - IDO Name: `FX_…`, entered with one plain fill.
   - IDO Project: pick an existing FX_ project (e.g. `FX_HelloWorldProject01`). The default may be another project.
   - Table Alias: short and lowercase, e.g. `fxitms`.
   - Form Type MultiView, Layout GridLeft, Device Default.
   - Leave Site Split unchecked. Table Name then becomes read-only and is **derived from the IDO name** (`dbo.<IDO name>`).
3. Property grid, one row per business column:
   - Name, Property Class (lookup) or Data Type/Length/Column Type, Label String ID, Default.
   - Ticking Primary Key also ticks Required.
   - The grid always keeps one blank starred row. Use it; don't delete it.
   - An active cell editor can intercept the next cell click. Re-snapshot and continue.
   - Escape on an open lookup **commits the highlighted item**. Always select explicitly and read back.
   - AUTONUMBER() works as a default for an int key (EXP-071-R2).
4. Next → page 2 → **Finish** once. The message is "Table and IDO created."
5. "Create Form?" → answer **No**, then build the Form with the Classic Multi-View wizard (see forms.md). This keeps naming and scope under control (EXP-137 A1).
6. The IDO is created **checked out**. Check In once (the "Source control integration is currently disabled" notice → OK). Revision goes 1 → 2.
7. Verify:
   - Sql Tables → Columns shows the types and the PK. System columns are added automatically.
   - The IDOs query shows the project, the alias and the properties.

Inheritance facts (EXP-044, 049):
- Property-class types flow into the SQL column types.
- The IDO grid shows **blank** Data Type/Length for class-bound properties. This is normal.
- A property-class Default Value does **not** become a SQL default.
- New property classes are usable while still checked out, **with no metadata unload** (observed in 3 runs).

## Property class (IdoPropertyClasses)
New → Class Name, Data Type, Length, Column Data Type → one Save. Created checked out (EXP-043, 047-R2, 048, 060).
- Column Data Type: type a prefix (`nvar`, `varb`) + F2 to filter, then select.
- Binary classes need Binary Format (PNG).
- Label String ID e.g. `FX_sUM`.
- Domain fields (Domain IDO/Property/List) give in-collection validation. See validation-and-classes.md.

## Add a column to an existing table
Sql Tables → criteria row → F4 → **Columns…** → New → set the column → toolbar **Save** (EXP-059, 074):
- Column Name.
- Data Type: type the prefix with the list closed, click the Open trigger once, select the single match.
- Length, committed with Tab.
- Is Nullable: click the **label**, not the checkbox.

No DDL or confirmation is shown. System Data Type fills in, and a Column Id appears after a reopen. "Update Current Table" is not needed.

## Add a bound property to an IDO
IDOs → exact query → **Check Out** (no prompt; revision unchanged) → **New Property** → page 1 Bound (default) → page 2 → **Finish** (EXP-061, 075). Finish commits; no Save needed.
- Page 2 fields: Bind To (`alias.column`), Property Name, optional Property Class.
- With no class, the types fill from the column. There is no Label String ID field here; captions go on the Form.

## Join another table (secondary table)
IDOs → FX IDO checked out → **Tables** (opens the IDO Tables tab) → **New Table** → IDO Table Wizard → OK (EXP-066-R2, 078, 079):
- Table Name lookup shows only the first alphabetical page. **Type the name and press Tab**; don't pick it from the list.
- Defaults are Type Secondary and Join Left Outer.
- Set the Alias.
- Join builder: Column = Table(alias) Column → **Add** generates e.g. `fxum.[FX_UM] = fxitms.[FX_UM]`.

Then New Property → Bound → Bind To lists `secondary_alias.column` after the primary block:
- Rename the property (e.g. `FX_UMsDescription`).
- Joined properties come out **Read Only** by default.
- Sequence numbers may duplicate. That is harmless.

## Derived (expression) property
New Property → page 1 click the **Derived label** (the radio times out) → Next → Finish. No Save (EXP-080-R3).
- Property Name: type it and press **Tab** before anything else, or you get "Value is required" (EXP-080).
- Property Class: optional.
- If the class ticks "Inherit" for Expression, click the label to untick it.
- Type the expression, e.g. `FX_Count * FX_ItmsCost`.

The grid then shows it first, with sequence 0 and the expression in Property Value.

## After metadata changes: does the Designer see them?
- New properties on an IDO may **not** appear in the Designer binding picker until **Unload All Global Form Objects** is run, in both the Web Client and the Designer (EXP-076).
- That unload is tenant-wide and needs explicit approval. Ask before running it.

## Data entry and verification at runtime
- Open the Form, then New → fill → one toolbar **Save** → close/reopen → **Refresh** → read back (EXP-042-R3, 077).
- Save writes the edits from all rows.
- Clipped grid cells can be intercepted by the splitter. Select rows by the row-number cell.
- Status bar `(Object n of N)` needs View › User Preferences › Layout › Display Status Bar plus a browser refresh. In add mode, N counts the placeholder.
- Uncaptioned inputs mean the IDO properties have no Label String IDs. Use Edit › Find Value in Collection to identify the bound property.
