# EXP-148: IDOMTH smoke test with a vendor SP method (no ION)

Status: **done, result negative.** The vendor stored-procedure method also fails as IDOMTH with **Task Failed - Error -1**, an empty Error Message and no Task Messages. The failure does not depend on ION, SSO or the Extension Class method type.

Approval (operator, 2026-10-28): "yes", to this proposal: create `FX_UserAttrProbe` (IDOMTH, `UserNames.GetUserAttributes`) and a handler/button in FX_ApiProbe with `TASKPARMS(BG~REQUSER~,,,,)`, then submit **once**. The submit is used up.

Account: `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`. The Designer was in User scope.

Background (EXP-147): `UserNames.GetUserAttributes` is a **Stored Procedure - Standard Method** (`GetUserAttributesSp`). Its 5 parameters are Username, EditLevel, SuperUserFlag, FormGroupName and Infobar. This is the same method type as the vendor IDOMTH executables.

## Objects created (cleanup list)
1. **BGTaskDefinitions row `FX_UserAttrProbe`** (tenant-wide, in a vendor table):
   - Executable Type IDOMTH, Executable Name `UserNames.GetUserAttributes`;
   - Max Concurrent 1, Cross-Site -1;
   - Description "EXP-148 probe: …".
2. **FX_ApiProbe User version:**
   - handler `FX_RunUserAttrTask`: Run Background Task, `TASKNAME(FX_UserAttrProbe)TASKPARMS(BG~REQUSER~,,,,) SUCCESSMESSAGE(FX_UserAttrProbe submitted)`;
   - button `FX_BGUserAttrButton` "Run UserAttr BG task", Primary FX_RunUserAttrTask. It came out oversized again, at the bottom right.
3. **Run output:** one Background Task History row, Task Number 3.

## Results
- **Definition:**
  - The exact-name baseline was empty, and the form auto-started a new row (`01`).
  - Filled in (`02`); Executable Type was picked from the dropdown.
  - Saved (`03`), then read back unchanged after Refresh (`04`).
- **Handler:** parameters filled (`07`), set (`08`), saved (`09`). The toast said "Form [FX_ApiProbe] and global object(s) were saved".
- **Button:** Primary set (`10`), then saved (`11`).
- **Persistence after a full Designer reload:**
  - the button and its Primary are unchanged (`12`);
  - the handler string reads back exactly as `TASKNAME(FX_UserAttrProbe)TASKPARMS(BG~REQUSER~,,,,) SUCCESSMESSAGE(FX_UserAttrProbe submitted)` (accessibility tree, `13`).
- **Runtime:** the button is present (`14`). One click, using the accessibility ref.
  - The alertdialog "FX_UserAttrProbe submitted" appeared in the accessibility tree, and was dismissed with OK.
- **Background Task History** (`15`, `16`):

  | Field | Value |
  |---|---|
  | Task Number | 3 |
  | Task Type / Executable | IDOMTH / `UserNames.GetUserAttributes` |
  | Initiator | `Form.FX_ApiProbe` |
  | Task Server | **VD69-WUVB2HC-SV** (EXP-145/146 used RGJU-I9DPAFZ-SV) |
  | Submitted / Started / Completed | 3:19:46 / 3:19:47 / 3:19:47 PM, as displayed |
  | **Return Status** | **Task Failed - Error -1** |
  | Error Message | empty |
  | Task Messages | none |
  | Process ID | empty |
  | Task Parameters | `BG~REQUSER~,,,,` |

## What this shows
- **Two different IDOMTH methods fail in the same way** in under 1 s, with no diagnostics:
  - an Extension Class method that calls ION (EXP-146);
  - a vendor SP standard method with no ION (here).
- They also failed on two different task servers.
- **Ruled out as the sole cause of the EXP-146 failure:** ION, SSO/bearer token, HTTP, and the Extension Class method type.
- **Remaining explanations (not separable from the customer UI):**
  1. IDOMTH dispatch isn't provisioned or working in this MTC tenant. This fits the doc's "configuration named after the site" requirement (Admin Guide 2023 p.74), but that is unconfirmed for MTC. **This is the most consistent explanation.**
  2. A parameter-binding problem common to both strings, for example empty trailing output slots, or `BG~REQUSER~` resolving to a value the SP rejects.
     - Note: on an SP error with a message, the docs say Error Message is filled in (p.75). It was empty both times.
- RPT tasks work on the same TaskMan (EXP-145), so this failure is specific to IDOMTH.
- **Next step:** escalate to Infor Support (the ticket draft is in the operator report). No further submits without new approval.

## Evidence (`evidence/EXP-148/`)

| File | Shows |
|---|---|
| `01`–`04` | Definition: empty baseline, filled, saved, refreshed |
| `05`, `06` | Designer in User scope; FX_ApiProbe opened |
| `07`–`09` | Run Background Task parameters, handler set, form saved |
| `10`, `11` | Button Primary set, form saved |
| `12`, `13` | After the Designer reload: button and Primary; handler string (in the accessibility tree) |
| `14` | Runtime form |
| `15` | **History Task 3: Task Failed - Error -1**, empty Error Message |
| `16` | Task Messages: empty |

## State left
- **Web Client:** FX_ApiProbe is open (runtime). History is closed.
- **Designer:** FX_ApiProbe is open in User scope, saved.
- **Tenant:** the objects above. Nothing is scheduled.
