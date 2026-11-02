# Single-document creation reference template

Save one reference at `docs/guides/development/<application>/README.md` unless the request specifies another location. Replace instructional prose with final application definitions. Omit inapplicable groups, interleave classes and tables as their dependencies require, and renumber sections consecutively. The accepted example is [Service Desk v2](../../../../docs/guides/development/service-desk-developer-guide-v2/README.md). Recalculate its relative source/asset links for the new output directory.

```markdown
# Application name — Mongoose creation reference

One sentence describing the final application. Brief account/ownership/scope note.

## 1. Objects and creation order

| Object type | Exact names | Final scope |
|---|---|---|

Creation order, with lookup targets before classes and dependent objects.

## 2. IDO project and foundational tables

Short project creation route and exact project name.
One common table/IDO wizard procedure with settings used by this application.
Define notation and system columns once; distinguish IDO defaults from SQL defaults.

### Exact table/IDO name — alias

| Property / column | Mongoose type | SQL type | Length | Required | PK | IDO default | Property class |
|---|---|---|---|---|---|---|---|

## 3. Property classes and dependent tables

Short property-class creation route. Include only classes actually used.

| Class Name | Data Type | Column Data Type | Length | Domain IDO | Domain Property | Domain List Properties |
|---|---|---|---|---|---|---|

Continue complete table definitions in dependency order using the schema table above.

## 4. Remaining tables, validation and relationships

Complete remaining schema definitions. Short routes and exact settings for
inline lists/validators, subcollections, links and indexes used by the final app.

## 5. Forms

Short wizard route. Exact application Form names, types, sizes/layout,
collections, components, bindings and control URLs. Separate optional maintenance
screens from application requirements. Include setup screens needed to enter data.

## 6. Variables, assets, components, scripts and events

| Used by Form | Variable name | Global | Persistent | Initial value |
|---|---|---|---|---|

| Copy this final file | Mongoose asset or full-script destination |
|---|---|

Short component configuration, full-content paste, compile and save/reopen instructions.
Explain automatically generated control-reference variables separately.

| Form | Event | Sequence | Response type | Parameters / target |
|---|---|---|---|---|

Exact component-event wiring. Brief final-scope dependency note when applicable.

## 7. Required starting data

Required lookup/workflow rows, project-entry fields and account-creation route,
where applicable. No historic test rows or credential values.

## 8. Completion check

- [ ] Definitions and dependencies match and persist after save/reopen.
- [ ] Installed code compiles and application pages load.
- [ ] An application-specific basic operation persists after reopen.

## 9. Sources and documentation validation

Compact links to final source/readback references. Actual local validation results,
material unknowns and whether an end-to-end tenant recreation was performed.
```

The numbered section count is adaptable. Keep the final two section titles **Completion check** and **Sources and documentation validation** so the validator can identify them. Each schema must be complete even when the surrounding prose is short. Do not copy Service Desk object names or assume its IDO count, login, feed, property classes or scopes apply to another application.
