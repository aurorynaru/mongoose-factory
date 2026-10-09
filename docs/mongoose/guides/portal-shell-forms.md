# Portal-type shell forms

> Guide: Infor Mongoose Application and Form Development, Infor Mongoose 2026.x
> Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148018659.html
> Saved: 2026-10-09
> Trust: unverified (Infor documentation; not yet confirmed in this environment)
> Conversion: formatting only, original wording. Pages not retrieved: none

## Portal-type shell forms

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148018659.html

You can employ a web user control to create a "portal"-type shell form that can display multiple subforms. This functionality can be used to create "dashboard"-type interfaces.

The size, and optionally, the location of any subforms are controlled by means of a specially designated form variable. These subforms are initially laid out within a grid in the the portal form user control, but you can drag them to other locations as desired.

The subforms hosted by this type of form can be set up to exchange information and data between them.

The process to create a portal-type form consists of three interdependent procedures. Follow these steps:

- Create the shell form that is used to display the subforms.

  See [Creating a portal-type shell form](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148018737.html).
- Create the persistent form variable that is used define the contents and layout of the shell form.

  See [Creating the form variable for a portal-type form](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148018971.html).
- Set up the communications that are to take place between the subforms.

  See [Setting up communications between subforms](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148018893.html).

## Creating a portal-type shell form

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148018737.html

To create a shell form that you can use as a portal to host subforms:

1. In the designer, use the **Form Wizard** to create a form of the type **Build From Scratch**. 

   **Note:**  You can use other form types if you want, but we recommend using the **Build From Scratch** option, because of the unique restrictions on this type of form. For more information, see [Portal-type shell forms](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148018659.html).
2. When the **Form Wizard** has created the form, in the **Toolbox** select the **User Control** component and draw the outline for the user control on the form.
3. In the **Edit User Control References** dialog box, verify these conditions to be true: 

   - The **Use Web Control** option is selected.
   - The **Assembly Name** field is blank.
   - The **Class Override** field is blank.
   - The **Web User Control Asset** option is selected.
4. From the **Control URL** drop-down list, select **mongoose/controls/portal.html**.
5. Click **OK**.

The appearance of the User Control component does not change, but you now have a portal-type shell in which you can display subforms.

To populate the contents of the User Control component, you must create a persistent form variable.

## Creating the form variable for a portal-type form

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148018971.html

The form variable used for the contents of a portal-type shell form must be a persistent form variable named PortalSetup. This variable controls the contents (subforms that display) and layout of the user control.

1. In the designer, from the **Edit** menu select **Variable**.
2. In the **Variables** dialog box, click **New**.
3. In the **Variable Properties** dialog box, provide this information: 

   Name

   Specify **PortalSetup**.

   Persistent

   (Properties sheet) Verify that it is set to **True**.

   Global

   (Properties sheet) Verify that it is set to **False**.
4. In the **Value** field, enter the JSON code for the portal layout and subforms. 

   For more information about the JSON parameters, see [About the JSON code for a portal-type form](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148018815.html).
5. Click **OK**, then click **Done**.
6. Save your work and test it in both a web client and a smart client.
