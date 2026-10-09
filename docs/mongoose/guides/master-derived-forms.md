# Master and derived forms

> Guide: Infor Mongoose Application and Form Development, Infor Mongoose 2026.x
> Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148018129.html
> Saved: 2026-10-09
> Trust: unverified (Infor documentation; not yet confirmed in this environment)
> Conversion: formatting only, original wording. Pages not retrieved: none

## Designing derived forms

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148018129.html

Derived forms are copies of master forms, and are meant to be accessed on alternate devices (for example, mobile phones and tablet PCs). Because of the differences in devices, components on a derived form must often be rearranged or removed.

1. In the **Edit Device Types** dialog box, verify that the intended device has been defined.
2. With the master form open and in the designer, select **Form \> Definition \> Form Device Type**.
3. In the **Editing Versions for Form** dialog box, select a checked row to edit the derived form for that device, or select an unchecked row to create a derived form for that device.
4. To close this dialog box and open the derived form, click **OK**.

**Note:**  This dialog box can be accessed in Runtime Mode. However, in this case, only existing derived forms can be selected. To create a new derived form, you must be in the designer.

## Managing master and derived forms

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148018191.html

In general, the master version of a form is the version that is accessed within the standard PC interface and is designated as the default device on the **Edit Device Types** form. Derived forms are alternate versions of the master form that can be accessed on other devices or simply in other formats.

### Sharing components

The master form is unique in that its components can be shared with its derived versions. Derived forms are copies of master forms that are typically meant to be accessed on alternate devices (for example, mobile phones and tablet PCs). Because of the display size differences in devices, components on a derived form must often be rearranged, or removed. Removing the shared relationship between master and derived forms creates a copy of the component, which allows you to customize that component on the derived form. This is done using the **Unsharing Component** dialog box.

### Deleting and copying master forms

When you attempt to delete a form, if it has any derived forms associated with it, you are prompted whether to delete the master and all derived forms, or only a derived form.

When you attempt to copy a form, an option displays that allows you to copy all derived forms as well. If you do not select this check box, a drop-down list displays, allowing you to specify which derived form to copy from, and which to copy to. The form you copy to becomes the new master form.

### Previewing derived forms

You can preview any derived forms using a browser preview option. This helps when developing a derived form to specific sizes and so on.

## Sharing components between master and derived forms

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148018269.html

1. With the master or derived form open and in the designer, select the component you want to share.
2. In the **Shared** property field, perform one of these actions: 

   - To open the **Unsharing Component** dialog box and automatically deselect all derived devices, select **False**.
   - To open the **Unsharing Component** dialog box and automatically select all derived devices, select **True**.
   - To open the **Unsharing Component** dialog box and selectively choose which components are shared and not shared, click the ellipsis (•••) button.
3. Click **OK**.

**Note:**  If the component is currently shared, you can select the devices where the component should remain. This component is then no longer shared, and distinct versions exist for each form selected. If the component is currently not shared, selecting **Shared** replaces the same component on all other versions of this form with the current device's component.
