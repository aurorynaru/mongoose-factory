# Recipe: Create an In Collection Validator (Web Designer)

Status: **verified at the Designer level.** It ran twice with different values (EXP-087 FX_CustomerID, EXP-090 FX_Item), and each run had one Save and a matching readback after a Designer close/reopen. Runtime validation behaviour and the rendered error text are **unverified**.
Category: global-objects (tenant-wide; FX_ names only; User version)
Source experiments: Outcome sections of `experiments/EXP-087-…md` and `experiments/EXP-090-…md`

## Purpose

Create a Validator of Type **In Collection**. It checks a value against an IDO property and copies other properties into outputs `%1`, `%2`, …. A component class or component later maps those outputs to its own targets.

## Preconditions

- The Web Designer is live (no server-event error on Edit). It is in **User** scope and clean (Save disabled), with a Form open; FX_Orders was used.
- The validator name is absent from the Validators list. Check its sorted position; if it exists, stop.

## Steps

1. **Designer Edit > Validator.** This opens the **Global Objects** dialog: a Validators list with New/Copy/Delete and a Properties pane with Name, Description, Type, Parameters (…), Error Message (list + …), Edit in-line Script and Version.
2. **New:** click the leftmost blue `+` under the list **once**. A small **New** prompt appears (Name, OK, Cancel). Type the name, press **Tab**, click **OK**. The new validator defaults to Type `AlphaNumeric`, with Parameters and Error Message blank and Version `User version`.
3. **Type:** open the Type dropdown, choose **In Collection**, press **Tab**.
4. **Parameters (…)** opens **Edit In Collection Validator Parameters**, which has IDO, Set Prop/Var/Comp (…), In Collection Only Property (…), Filter and option checkboxes (leave them all unchecked).
   1. **IDO:** open the dropdown, choose the IDO (e.g. `FX_Items`), press **Tab**. The arrow has no accessibility ref; a coordinate click was the last resort in both runs.
   2. **Set Prop/Var/Comp (…)** opens **Edit Set Values**. Click its Properties (…) to get an empty output list with New.
   3. For each output, click **New** to open **Edit Set Property From List** (Target, Value, Collection for Target):
      - type the Target exactly (`%1`) into the **Target** field and press **Tab**;
      - choose the **Value** from its list (e.g. `FX_Description`) and press **Tab**;
      - click **OK**.
      Repeat for `%2`.
   4. Click the output-list **OK**, then the Edit Set Values **OK**. The Set Prop field now reads `SETP(%1=…,%2=…)`.
   5. **In Collection Only Property (…)** opens **Property of <IDO> to Use**. Choose the key property (e.g. `FX_Item`) and click **OK**.
   6. Click the Parameters **OK**. The Parameters cell now holds the compiled string `<IDO>( PROPERTY(<key>) SETP(%1=<p1>,%2=<p2>) )`.
5. **Error Message:** choose the **exact** entry `mIsNotAValid` and press **Tab**. The neighbouring entries `mIsNotAValid%1` and `m%1IsNotAValid%2` are different messages. No string prompt appears.
6. Click the **Global Objects OK** once. No message appears, and the Designer becomes dirty (Save enabled).
7. **Readback:** Edit > Validator, select the row, read Type, Parameters and Error Message, then **Cancel**.
8. **Save:** click the toolbar Save **once**. The toast reads `Save` / `Global object(s) were saved.`, and afterwards Save, Undo and Regenerate Form are disabled.
9. **Persistence:** close the clean Form with its Form-tab ×; no prompt is expected. Reopen it from **Form menu > recent forms**. Repeat the readback (step 7).

## Known pitfalls

- **Commit every field with Tab before its OK.** Values chosen without a Tab can be lost (the EXP-069-R2 lesson).
- **Typing into the wrong field is recoverable before OK.** In EXP-090 the Target text first landed in Value (D-T3-1). Re-pick Value, type Target and Tab both before the OK.
- **Save stays disabled while any Global Objects or Parameters dialog is open.** Close with OK, or with Cancel for a readback, first.
- **The Parameters text is clipped in screenshots.** Read the full value from the accessibility tree.
- **Stop if the Designer Edit menu returns "The server event processing returned an error".** See `recipes/session/session-expiry-and-stale-designer.md`.
- No unload is needed for the Designer readback. The runtime effect is tested through a component class (`create-component-class.md`, `../components/apply-component-class.md`).

## Evidence

EXP-087: `t3-18` (Parameters dialog), `t6-06` (reopened readback). EXP-090: `t5-04` (Save toast), `t6-06` (reopened readback, User scope).
