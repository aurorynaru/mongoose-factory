# Mongoose Factory Learning Agent

You are building a reusable operational knowledge base for automating
Infor Mongoose through the browser.

## Current mode

Two modes (operator decision, 2026-10-27):

- **LEARNING MODE** applies to experiments (`experiments/EXP-*`, harness runs):
  small controlled experiments that verify this environment's behavior and turn
  successful experiments into reusable procedures. All rules below apply unchanged.
- **BUILD MODE** applies when the operator asks for a feature, form, portal or
  dashboard to be built or changed. See "Build mode" below.

## Build mode (operator decision, 2026-10-27)

- Use the project skill `.claude/skills/mongoose-builder/` (SKILL.md and its
  playbooks). Its playbooks are distilled from the experiments and recipes and
  carry their knowledge states.
- Record every build in `builds/BLD-NNN-<slug>.md` (brief, then build record), with
  evidence in `evidence/BLD-NNN/`.
- Every build has a **build prefix**: `FX_` unless the request names another
  (see "Build prefix" below). In build mode, "FX_" in these rules, the skills
  and the playbooks means the build prefix.
- Factory-owned objects with the build prefix may be created and modified freely.
  This includes Forms, IDOs, SQL tables, property classes, validators, component
  classes, strings, themes, images, variables and Web User Control Assets.
- **Other objects:** creating, altering or deleting any object that is not
  factory-owned under the build prefix (an existing Form, IDO, table, global
  object, asset or data) needs the operator's explicit approval **for that
  specific object in the current task**. Record the approval in the build record.
  Approval does not carry over to other objects or tasks. Prefer, in order:
  1. a copy with the build prefix;
  2. a User-scope version;
  3. a Form extension.

  Use Group or Site scope only after the change is proven in User scope and
  approved. A request that sets the final scope to Group (naming the group) or
  Site and says "Group/Site save approved: yes" gives that approval for the
  Forms the request names, in that task only. The save still comes last, after
  the User-scope checks; any metadata-cache refresh it needs is approved
  separately.
- Before changing an existing object, record its current state (identity and
  version screenshot plus a readback of everything the change touches) so it can
  be rolled back. New components, handlers, variables and strings added to an
  existing object still use the build prefix.
- Tenant-wide operations need explicit approval in the task:
  - metadata-cache unloading;
  - FormSync;
  - deployment;
  - Site- or Group-scope saves;
  - schema changes on tables that are not factory-owned under the build prefix.
- These rules still apply in build mode:
  - the Safety, Mongoose authentication and Browser automation sections;
  - the read-only Mock account rule;
  - the evidence rules;
  - "Never modify production data";
  - "Never disable security or authorization".
- Steps that rely only on unverified knowledge run as small probe steps first: do
  one change, save, close/reopen and verify before building on it.

## Build prefix (operator decision, 2026-10-29)

- A build request may name its own prefix (the request builder's Prefix field).
  When it names none, the prefix is `FX_`. Record the prefix in the build brief.
- A valid prefix is a letter, then at least one more letter or digit, then `_`
  (for example `FX_`, `ACME_`, `WH2_`). If the requested prefix doesn't match,
  stop and ask; never fix it up silently.
- An object counts as **factory-owned** only if its name begins with the build
  prefix **and** the factory created it: a build or experiment record in this
  repo lists it, or this build creates it. An existing object that merely begins
  with the prefix (made by someone else, or by Infor) is not factory-owned and
  needs per-object approval like any other existing object.
- Before the first object with a new prefix is created, check the tenant for
  existing objects of the types the build touches whose names begin with it.
  Report them in the plan as not factory-owned.
- Use one prefix per build. Changing an earlier build's objects keeps that
  build's prefix.
- Learning-mode experiments and the scope extensions below keep `FX_`. Existing
  records, recipes and reference builds keep their `FX_` names.

## Technology scope

For now, learn only:

- Mongoose Web Client
- Web Designer
- Classic Mongoose Forms
- IDO collections
- Form events
- Form scripts
- Portal-type shell Forms

Do not explore Responsive Form Builder, IDS Forms, App Builder, or other
Mongoose UI stacks unless explicitly instructed.

## Scope extension: Infor Hello World tutorial (operator decision, 2026-10-10)

In this demo tenant only, the factory may create and modify **FX_-prefixed** SQL
tables, columns, IDOs, IDO projects, IDO properties and methods, property classes,
validators, component classes, themes, string resources (operator decision,
2026-10-10: FX_-prefixed string IDs such as FX_sUM) and image-library images (operator
decision, 2026-10-15: FX_-prefixed image names such as FX_Dumbbell, from the committed
`assets/` files) needed to follow the Infor Hello World tutorial (Parts 1–8,
`docs/mongoose/transcripts/`), adapted to FX_ names.

- These objects are tenant-wide, not User-scoped. Forms stay in User editing scope.
- Never create, alter or delete existing non-FX_ tables, IDOs, data or global objects.
  Where the tutorial changes an existing object (e.g. adds a column to Items), use
  the FX_ equivalent (FX_Items) instead.
- Tenant-wide operations such as metadata-cache unloading, FormSync or deployment
  still need explicit authorization in the experiment brief.
- Every created object is recorded in its experiment record so it can be cleaned up.

## Scope extension: Mock app reproduction (operator decision, 2026-10-25)

The Mock inventory demo app (MockLoginPortal, MockInventory, MockInventoryDashboard,
MockLoginIDO; studied read-only in EXP-128) may be reproduced on FX_ objects.

- The factory may create and modify **Web User Control Assets** (HTML, JavaScript,
  CSS) whose top-level folder or file name begins with `FX_` (e.g.
  `FX_Login/index.html`), plus the FX_ Forms, Form scripts, Form and global
  variables and FX_ IDOs that the reproduction needs. Assemblies are excluded.
- Never create, alter or delete the Mock objects or any other existing non-FX_
  asset, including the built-in `$app` assets.
- **Accounts.** The account that owns the Mock app's User versions is
  **read-only**: use it only to inspect, and never create, Save or modify anything in
  it. All reproduction runs in the operator's own account, after the operator has
  signed into it. Check the signed-in account (Web Client header or Designer
  status bar) at the start of every task. If it is the read-only account and the
  task would mutate anything, stop before acting.

## Safety

Only create or modify factory-owned test artifacts.

All factory-created artifacts must begin with:

FX\_

In build mode, with the build prefix instead, when the request names one (see
"Build prefix").

Never modify or delete an existing artifact that is not factory-owned unless explicitly
authorized.

Never modify production data.

Never disable security or authorization simply to make a test work.

Do not store credentials in Markdown files.

## Experiment rules

For every experiment:

1. Inspect the current browser/environment state.
2. Verify the editing scope before mutations.
3. Record what currently exists.
4. Perform one small controlled operation.
5. Verify the immediate result.
6. Save.
7. Close/reopen where applicable.
8. Verify persistence.
9. Record evidence.
10. Record failures and corrections.

Do not claim an operation works merely because no error appeared.

## Knowledge trust

Knowledge states:

- unverified
- observed
- verified
- superseded

Information from documentation, another model, or previous assumptions
starts as unverified.

One successful execution may be marked observed.

A procedure becomes verified only after repeatable execution and
persistence verification.

## Mongoose authentication

Credentials are provided to Playwright MCP through its configured
`--secrets` dotenv file.

Do NOT use {{VARIABLE}} syntax.

When login is required, use these exact Playwright secret placeholders:

- username: `SECRET_MONGOOSE_USERNAME`
- password: `SECRET_MONGOOSE_PASSWORD`
- tenant: `SECRET_MONGOOSE_TENANT`, only if the page has a tenant field

Example:

For the username textbox, type:

SECRET_MONGOOSE_USERNAME

For the password textbox, type:

SECRET_MONGOOSE_PASSWORD

Playwright MCP will substitute the corresponding real value from the
secrets file before the value reaches the web page.

Never read the secrets file directly.
Never print the actual credential values.
Never copy credential values into Markdown or logs.

## Browser automation

Prefer:

1. role/accessibility name
2. labels
3. stable visible text
4. known component names
5. stable attributes
6. relative DOM relationships
7. generated IDs
8. coordinates only as a last resort

Do not rely on fixed coordinates unless there is no semantic alternative.

Browser snapshot references are temporary. After a "Ref ... not found" error,
capture one fresh page snapshot without a target and use only its current
references. Verify that the inspected tab/panel is selected and visible; hidden
panels or URL text alone do not establish the active Form and scope.

Repeated identical shell commands are also a loop. A printed "done" does not prove
that a module loaded or OCR succeeded. Do not install modules or expand scope to
repair tooling during an experiment. Preserve partial results, inspect the allowed
postcondition once, then report a blocker. Never replay an interrupted command
without checking whether it already had effects.

Do not alternate the same failing reads indefinitely. If one fresh inspection
and one corrected attempt still cannot establish the required state, preserve
the observations and report the blocker. Never reload, navigate, save, or
close/reopen as a recovery step unless the current experiment permits it.

The same rule applies to successful browser reads that repeatedly return the
same result, including "none" or empty output. Check the intended visible frame
using current accessibility refs, and honor a no-JavaScript restriction even for
read-only evaluation. Do not replay a script after interruption: it may already
have had side effects. Report a blocker after one corrected inspection.

## Context and handoffs

Keep browser reads focused on the information needed for the current step.
Avoid repeatedly dumping the entire DOM, large tool outputs, or old transcripts.
Write long results to the experiment's evidence directory and report the exact
relevant observations with their file paths; omissions must be explicit.

Before a context failure or session change, preserve a concise checkpoint:
completed steps, target identity and scope, current visible browser state,
evidence paths, unresolved questions, and the next permitted action. Ask the
coordinator for a fresh worker session when needed. A fresh session does not
reset the browser, restore authentication, or expand experiment limits.

An output cap applies per response. Split large edits into small operations.
If output ends prematurely, inspect the actual result before retrying; do not
claim that an unfinished tool call or report completed successfully.

## Evidence capture

For learning experiments, preserve screenshots for important visual states.

At minimum capture screenshots when:

- entering a new Mongoose designer/workflow for the first time
- before a risky mutation
- immediately after creating an artifact
- after save
- after close/reopen persistence verification
- when a dialog or UI state is difficult to describe in text
- when an error occurs

Save screenshots under:

evidence/<experiment-id>/

Use stable descriptive names, for example:

evidence/EXP-002/before-create.png
evidence/EXP-002/form-created.png
evidence/EXP-002/after-save.png
evidence/EXP-002/reopened-form.png

Do not take screenshots for every trivial click.

The experiment Markdown should reference the relevant evidence files.

Inspect saved screenshots for usable content before citing them. Ensure important
captures show the relevant identity, scope, control labels, and result. A crop
showing only a heading is insufficient to establish its hidden contents.

For each decisive screenshot, record a short explanation of what is visibly
shown and what remains unproven. Filenames, successful tool calls, and generated
output headers alone are not proof of the requested postcondition. Summarize
decisive evidence in the final worker report before the task ends. If a reviewer
needs to see an image, provide its exact path and request manual attachment;
do not replace visual inspection with a guessed description.

## Recovery

Before retrying a mutation, inspect whether its intended postcondition
already exists.

Never blindly repeat the last browser actions after an interruption.

## Outputs

Each experiment should produce:

experiments/EXP-XXX-<name>.md

Successful reusable procedures may later produce:

recipes/<category>/<recipe>.md
