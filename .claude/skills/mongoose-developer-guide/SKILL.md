---
name: mongoose-developer-guide
description: Create concise Mongoose application creation references with final IDO schemas, property classes, Forms, settings and code installation destinations. Use when documenting how to recreate an existing application from its final implementation. Documentation only; does not build or publish in the tenant.
---

# Mongoose developer guide

Produce **one creation reference**, normally `docs/guides/development/<application>/README.md`, based on the application's final structure. Follow the accepted [Service Desk v2 example](../../../docs/guides/development/service-desk-developer-guide-v2/README.md) and [guide template](references/guide-template.md). Respect an explicitly requested output location or format. Calculate relative source/asset links from the actual output directory; do not copy the example's relative paths unchanged.

## Source inspection

Identify the requested application and all related asset folders. Read `AGENTS.md`, existing documentation, final source/install assets, relevant build records and follow-ups, builder playbooks and decisive readbacks. Trace the full dependency set: tables/IDOs, classes, defaults/validators, relationships/indexes, Forms, collections, components, variables, assets, scripts, handlers and required starting data.

Resolve conflicts using the latest successful final implementation and persisted readbacks, then final code contracts. Superseded plans and stale comments do not belong in the creation instructions. Do this reconciliation during preparation; present the resulting final definitions directly. Ask only for essential facts unavailable from the sources. Mark an unavailable required setting unknown rather than inventing it.

## Write the reference

Use consecutive numbered sections in one document. Adapt the template to the application's actual objects: omit inapplicable groups and order definitions so lookup targets exist before classes and dependent properties. Do not force a fixed number of sections.

- Start with a compact object inventory, exact names, final scopes and creation order.
- Give each table/IDO its alias and complete business-property table: property/column, Mongoose type, SQL type, length, required, primary key, IDO default and property class. Explain notation once. Separate system columns, IDO defaults and SQL defaults.
- List custom property classes only when used, with types, lengths and domain IDO/property/display fields. Identify any reused built-in classes without implying they must be created.
- Include exact inline-list values, validators, subcollection links, unique indexes and other required relationships. Do not invent physical foreign keys.
- For Forms, give exact names, type, collections, dimensions/layout where established, components, bindings, URLs and event settings. Distinguish required application/setup screens from optional maintenance screens; do not turn an unknown optional layout into a required design.
- Put one short Mongoose menu route beside each type of definition. Reuse a common procedure rather than repeating it for every object. Explain dependencies briefly where needed.
- Map every final asset and complete script to its precise Mongoose destination and replacement boundary. Use relative repository links to `/assets`; distinguish readable sources from flat install copies. Exclude preview stubs, probes, rollback code and obsolete feature patches.
- State manually created result-variable names and flags separately from automatically generated control-reference variables. Include only the handlers actually required by the final implementation.
- Include required reference rows, project-entry fields and the account-creation route when applicable. Do not seed historical test accounts, sample tickets or credential values.
- End with one short **Completion check** checklist and a compact **Sources and documentation validation** section. State actual checks and material unknowns without claiming a fresh end-to-end replay.

Keep build history, failed attempts, obsolete alternatives, repeated evidence/troubleshooting sections, per-step PASS/FAIL gates and handoff bureaucracy out of the main instructions. Include a brief relevant caution only when it affects creation, such as preserving existing counters or completing a bound-property definition. No screenshots or images directory are required by default. If requested or necessary for a difficult setting, inspect images before reuse, exclude sensitive content and caption their actual scope/limits.

Keep one brief account/ownership/scope note: reuse matching factory-owned objects, stop on mismatches, verify Forms in User scope before separately authorized Site publication, and follow `AGENTS.md`. Guide generation itself grants no tenant mutation, metadata unload, publication or deployment authorization. Reading mongoose-dx separately is not required for documentation-only generation; apply it if the task also changes application code/configuration.

## Regeneration and validation

Read current sources and the existing guide before regenerating. Preserve reader-maintained checklist states and notes, matching entries by meaning rather than position. Keep older editions intact unless replacement was requested. A marked checkbox is reader progress, not evidence of an agent-run test; identify changed settings that need rechecking.

Run `python .claude/skills/mongoose-developer-guide/scripts/validate_guide.py <guide-directory>` from the repository root. It checks document structure, local links, section numbering, checklist and whitespace; existing v1 directories retain legacy validation support. Separately cross-check complete schemas, class dependencies, bindings, variable flags, handlers, script signatures and source/install-copy consistency against final sources. Structural validation cannot establish those facts or tenant behavior. Run whitespace checks on changed/new text; when changing this skill, also run skill-creator's `quick_validate.py`. Report only checks actually completed, preserving the source knowledge states and any unresolved coverage.
