# Playbook: Changing or extending EXISTING forms, portals and IDOs (not factory-owned)

Knowledge state: **unverified**. The routes below come from the product documentation in
`docs/mongoose/guides/` (editing-scope-and-versions.md, form-extensions.md, master-derived-forms.md).
No factory experiment has modified an object the factory doesn't own. Treat the **first** use of each route as an
experiment-grade step: make a small change, Save, close/reopen, check at runtime, record it, then build on it.

## Approval gate (mandatory; see AGENTS.md "Build mode")
Before **any** create/alter/delete of an object the factory doesn't own:
1. Name the exact object(s): form name, IDO, table, string, theme, asset.
2. Name the scope: **User**, Group or Site. Site affects every user at the site.
3. Name the change and the rollback.
4. Get the operator's explicit "yes" for that object in this task. Record it in the build record.

A "yes" for one object doesn't cover others, and approval in an earlier task doesn't carry over.

## Safest-first ladder
1. **Copy to FX_ (no risk to the original).**
   - Create `FX_<Original>` and rebuild the feature there.
   - Copying a form under a new name is documented ("copy a customized form to a new form name"). The exact Designer route is **unverified**.
2. **User-scope customisation (affects only the operator).**
   - Open the existing form in the Designer with the editing scope **User**.
   - Every Save creates a *User version* (version 3) that overrides the Site and Vendor versions **for that user only**. The vendor version stays untouched.
   - Rollback: revert the User version (Designer Edit › Revert…), and the Group/Site/Vendor version shows again.
   - This is the default for "add a feature to form X".
3. **Form extension (Extend Form wizard).**
   - Designer New → Form Wizard Selection → **Extend Form** radio (observed to exist, EXP-041-R2; not used).
   - It creates a child form that inherits from the base form. With "Replace Base Form" and the user preference "Load/Replace form with extended form", it opens in place of the base form.
   - Use this when the change should survive vendor updates of the base form.
4. **Group / Site scope.** Only with explicit operator approval, after the change has been proven in User scope. It affects other users immediately.
5. **Existing IDOs and tables.**
   - Prefer joining them read-only into an FX_ IDO (data-layer.md: join) or reading them from a C# script (`IDOClient.LoadCollection`).
   - Adding columns or properties to a table or IDO the factory doesn't own is a tenant-wide schema change. It needs explicit approval and a rollback plan, and it is never done on production data.

## Before touching an existing object (rollback baseline)
- **Identity:** screenshot Help › About This Form (name, version) and the Designer Properties (Version / ScopeType).
- **Baseline:** record the current values of everything the change touches. That means component properties, event handlers, script text (Script Editor → Download), and string values.
- **Metadata cache:** close and reopen the form in the new scope. When changing scope, Form › Definition › Unload All Global Form Objects. That unload is tenant-wide-ish, so ask first.

## Building the change
Use the same playbooks as for factory-owned objects (forms.md, events-and-scripts.md, portal-shell.md, web-user-controls.md). The differences:
- **Naming:** new components, handlers, variables and strings you add keep the **build prefix** (`FX_` by default, e.g. `FX_NotesTab`, `FX_sNotes`), so they can be found and removed.
- **Save often:** save after each small step, then verify with close/reopen and a runtime check.
- **Don't change vendor items:**
  - **Never rename or delete vendor components or handlers.** Hide them (Behavior › Hidden) only if approved.
  - **Form scripts on vendor forms:** append methods with the build prefix only. Never rewrite existing methods unless explicitly approved.

## Rollback options
- **User-scope change:** revert the User version, or undo it component by component using the baseline.
- **Prefixed copy or extension:** delete the copied form, or remove its Form Extensions entry.
- **Schema change:** follow the recorded inverse steps. Data loss is possible, so it needs approval.
