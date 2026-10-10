# EXP-041-R3 T1 — Web Designer New Form Definition route: Category and Wizard inventory

Date: 2026-10-10. Run R-20261010-154641-QsiV, EXP-041-R3, cycle 0, task T1.
Route: Web Designer toolbar **New** (`#mgtoolbarbutton-1088`, label "New") → dialog **Form Wizard Selection**. Radio **New Form** (selected by default), **Extend Form**, Category combobox, Wizard combobox, OK, Cancel, Help.
Read-only: each Category and Wizard list was opened, read from the accessibility snapshot, and collapsed by its trigger with no item selected, except that a Category option was chosen in the dialog (dialog state only, not committed). **No OK was pressed. No wizard page was opened. No Finish.** The dialog was closed with Cancel.

Category labels, as rendered in the list (the combobox value after selection is shown in parentheses where it differs):

| # | Category (list label) | Combobox value after selection | Wizard labels offered (rendered, in order) | Descriptions shown |
|---|---|---|---|---|
| 1 | Classic | Classic | Build from Scratch; Detail-Only; Grid-Only; Multi-View; Query; Report; Tile (7) | Build from Scratch: "Plain form without defined components". Detail-Only: "Form to display the details for a single record of an IDO collection". Grid-Only: "Form with a single grid, bound to an IDO collection and displayed in a row-column table format". Multi-View: "Multi-view (grid/detail) form bound to an IDO collection". Query: "Query form to create a filter to specify the collection user can retrieve". Report and Tile: description text not captured in this list read. |
| 2 | ExtDataSource | ExtDatasource | Data Lake Wizard; IDO From ION API Wizard (2) | "STRINGS(mWizard_ExtDatasource)" (both) |
| 3 | Flex | Flex | Basic (1) | "Creates a Flex form with three FlexLayout components, arranged horizontally" |
| 4 | Form Builder | FormBuilder | DataMaintenance; DataView; Report; Responsive Form (4) | DataMaintenance: "Creating a table, IDO, and (optionally) form". DataView: "Wizard to create a DataView and associated criteria form". Report: "Template form to generate report outputs". Responsive Form: "Wizards to create forms on Runtime Builder". |
| 5 | IDS | IDS | New Form (1) | "Wizard to create a form based entirely on the IDS layout grid and IDS controls" |
| 6 | New Data | NewData | Maintenance; XML To IDO (2) | Maintenance: "Creating a table, IDO, and (optionally) form". XML To IDO: "Importing BOD or other XML to create table(s), IDO(s), Form(s), and ReplicationRule(s)" |
| 7 | REST | REST | REST API Wizard (1) | "Creates strongly-typed APIs for an IDO based on REST API v2." |

Wizard total: 7 + 2 + 1 + 4 + 1 + 2 + 1 = 18 across 7 categories.

## Candidate analysis (T1; from rendered labels only; no wizard opened)

- Only the Classic and Form Builder entries describe a Form on an IDO. Form Builder's DataMaintenance and New Data's Maintenance and XML To IDO each state that they create a table, an IDO or both. These are **excluded** for this experiment (brief prohibits SQL table and IDO creation). The Form Builder Responsive Form is out of scope under AGENTS.md (Responsive Form Builder). IDS New Form, Flex Basic, REST API Wizard and ExtDataSource wizards do not describe a Form on an existing IDO and are not candidates.
- **Recommended candidate (unchanged from EXP-041-R2): Category Classic, Wizard Multi-View.** Its rendered description: "Multi-view (grid/detail) form bound to an IDO collection". EXP-041-R2 T2 observed that its page 1 Data Source list offers IDOs, including `FX_HelloWorld01`, and that the Name field did not accept key-event entry (see that record). Page 2 (Save Template) has **not** been observed.
- Alternatives that also state IDO binding in the rendered labels: Classic → Grid-Only, Classic → Detail-Only. Not opened here.
- **Not selected in T1.** Selection and the Form Wizard Selection OK belong to a later creation task, after operator confirmation.

## Evidence

- `t1-07-classic-wizard-list-labels-read-no-selection.png`: Form Wizard Selection with Category Classic and the Wizard list open (Build from Scratch, Detail-Only, Grid-Only, Multi-View, Query visible; Report and Tile below the scroll and read from the accessibility snapshot). Shows the Wizard combobox empty before a selection. Does **not** show the wizard loading (no wizard was opened).
- Accessibility snapshots for every category list were saved by the tool under `evidence/playwright/` (gitignored tool output, not worker-authored). The labels above were read from those snapshot files in this session.
