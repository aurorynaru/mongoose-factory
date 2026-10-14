# Recipe: Session Expiry, Re-login and the Stale Designer Tab

Status: **observed.** A top-level re-login succeeded twice (EXP-079 T4, EXP-089 T1). A sign-in inside the embedded frame failed once (EXP-080-R2). A stale Designer tab was seen in one run and fixed by an operator reload (EXP-089).
Category: session
Source experiments: Outcome sections of `experiments/EXP-080-R2-…md` and `experiments/EXP-089-…md`; the procedure is in `tools/claude-harness/protocol/worker-preamble.md`

## Symptoms

- The Mongoose session expires about **hourly**.
- The Web Client tab shows a **Session Expired** modal, `Logout Successful` ("You have been successfully logged out.") or an Infor sign-in page.
- A Designer tab loaded **before** the expiry looks normal. But its **Edit** menu returns `The server event processing returned an error. If this persists, contact your system administrator.` (OK only).

## Procedure (worker; at most once per task)

1. Stop the current step and record what was in progress; treat unsaved changes as lost.
2. Click the modal's OK once. If no sign-in form appears **in that tab**, navigate that tab once to the portal URL in the worker preamble (top-level navigation only).
3. On the **Infor CloudIdentities** Sign In form, type exactly `SECRET_MONGOOSE_USERNAME` and `SECRET_MONGOOSE_PASSWORD` (and `SECRET_MONGOOSE_TENANT` only if there is a tenant field). Click **Sign in** once. Never type, read or record real values.
4. In the Infor OS portal, dismiss any portal notification banner with its ×. Search `Mongoose` to find the **Mongoose OS** app and open it. On a configuration Sign In, keep the default configuration. Wait for the Web Client.
5. End the task with "session re-established". **Do not** resume the interrupted step in the same task.

## Stale Designer tab

- If the Designer Edit menu shows the server-event error, answer **OK once**, record it and **stop for the coordinator**. Do not retry it, re-login in the Designer, or reload it yourself.
- Fix: the **operator manually reloads the Designer tab**. Then resume the run with `--note`, telling the worker to inspect read-only, redo the read-only gates and repeat no action.

## Known pitfalls

- **Never sign in inside the portal's embedded app frame.** mingle-sso refuses to be framed ("refused to connect"), and the one allowed re-login is used up (EXP-080-R2).
- A re-login in the Web Client tab does **not** revive a Designer tab loaded earlier.
- A Designer Save done before the expiry is not lost. After any pause, inspect state read-only before acting, and never replay an action.

## Harness notes (operator)

- **Usage-limit pause:** after the reset, run `resume --continue-after-usage "<bounded instruction: inspect read-only first; never replay>"`.
- **`worker_blocked:permission` on a task that actually completed:** for example, a harmless out-of-repo Glob denial in a documentation-only final report (EXP-090 T8). Neither `--approve denials` nor a plain `resume` clears it. Once the operator accepts on review, use `stop`.

## Evidence

EXP-080-R2: `disposition-session-expired-signin-refused.png`. EXP-089: `t1-02` (server-event error), `t1-05` to `t1-11` (top-level re-login).
