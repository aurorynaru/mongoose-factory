# EXP-021 independent AC-9 reconciliation

Date: 2026-10-06 (Asia/Singapore)
Run: `R-20261006-004825-suU5`
Reviewer: Codex, independent repository and saved-trace inspection
Authorization: the operator-authorized repository-only reconciliation recorded in T11.
Result: AC-9 audit requirements supported by the checks below; harness acceptance remains pending with the coordinator.

## Scope and method

Inspected the current repository, saved experiment record, completed T1–T8
reports, and existing OpenCode tool histories for the original session and both
failed reconciliation sessions. Only files in this experiment's record/evidence
paths were updated to document this audit. No worker was restarted, no prompt
was sent to another model, and no browser or Mongoose action was performed.

This audit reconciles action accounting and repository confinement. It does not
independently re-inspect screenshot contents or establish stronger Mongoose
behavior than the existing completed worker reports.

## Repository and evidence findings

Before this reconciliation, `git status --short` showed exactly:

```text
?? evidence/EXP-021/
?? experiments/EXP-021-static-caption-recovery-across-ordinary-close-reop.md
```

`git diff --name-only` and `git diff --cached --name-only` returned no paths.
The record and screenshots are untracked; their absence from `git ls-files` is
expected and is not missing-artifact evidence. The evidence directory contained
24 PNG screenshots, numbered 01–24. This reconciliation adds this Markdown
audit, not another screenshot, within the permitted evidence directory.

The record's T9.1–T9.5 audit sections survived the original interruption. The
acceptance table listed AC-1–AC-8 but omitted an explicit AC-9 row. This
reconciliation adds that row and labels coordinator acceptance as pending.

## Action-count reconciliation

| Operation | Recorded count | Completed report / tool-history confirmation |
|---|---:|---|
| Ordinary Designer Save | 1 | T5 report; completed `playwright_browser_click` in assistant `msg_10d044b1e00139wRnaJCGl16GA`, element `Designer toolbar Save button`, target `e15` |
| Ordinary target Form-tab close | 1 | T6 report; completed click in `msg_10d064afd0017rR9Oaew5paF3U`, element `Close control (X) on the FX_StaticCaptionLab01 form tab`, target `e78329` |
| Designer recent-forms reopen | 1 | T7 report; completed click in `msg_10d079d18001eMn7hWcmCZmX4I`, target Form menu item `e78676`, following the Form-menu open |
| Wizard Finish | 1 | T2 creation sequence; separate from the ordinary Designer Save |
| Post-reopen component verification | Read-only inspection/selection | T8 completed report and tool inputs; no Save, close, reopen, or property edit |
| Post-mutation authentication/session establishment | 0 recorded | Session Expired OK and Sign In OK occur in T1, before T2 wizard creation; no later authentication tool action recorded |
| Explicit unload, regeneration, preference change, page reload, direct navigation, or Designer/browser replacement | 0 recorded | Checked browser tool inputs and completed action reports; browser-tabs operations only list/select existing tabs |
| Mongoose/browser actions in T10 and T11 | 0 | T10: shell/read tools only. T11: shell/read tools only |

Original worker session: `ses_ef3088c9dffeVXzKs7W2YEdQa9`.
Failed reconciliation sessions: `ses_ef1375f77ffeeDuWHZaoxGSC6h` (T10),
`ses_ef12f0814ffem3v9tLzMdaZ9An` (T11).

The reviewed post-mutation tool inputs show the intended Static creation, Name
assignment, Caption assignment, single Save, close, recent-forms reopen, and
read-only verification. No recorded mutation targets a non-FX_ or prior artifact,
and no additional component, variable, script, binding, validator, data source,
or IDO-metadata mutation is recorded. The permitted pre-mutation Web Client
session establishment remains explicitly disclosed in T1.

## Failure reconciliation and limits

T9 saved its audit but ended with a question/interruption instead of a completed
task report. T10 and T11 entered repeated shell-read loops and were aborted by
the harness guard. Their failure statuses remain unchanged; this audit does not
turn aborted worker replies into successful worker reports or reset recovery
allowances. T10's unnecessary hash command also reported invalid cmdlets and an
unavailable output path; its success claims are not used as evidence.

The independent current repository check and saved completed reports/tool history
resolve the specific missing AC-9 reconciliation. The coordinator must evaluate
this evidence and issue the normal completion envelope; this document alone
does not mark the harness run completed or authorize another worker recovery.

Knowledge state remains `observed` for the bounded Static-Caption recovery
procedure. No replay-verification or database/cache/session-mechanism claim is
added.
