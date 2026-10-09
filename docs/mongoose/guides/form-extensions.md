# Form extensions

> Guide: Infor Mongoose Core Extensibility Guide, Infor Mongoose 2026.x
> Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgsdug_mg/laf1525402966322.html
> Saved: 2026-10-09
> Trust: unverified (Infor documentation; not yet confirmed in this environment)
> Conversion: formatting only, original wording. Pages not retrieved: none

## About extending and replacing forms

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgsdug_mg/laf1525402966322.html

Mongoose forms can form an inheritance hierarchy, with child forms extending parent forms in an arbitrary tree structure. This topic introduces a variation of the extension mechanism called “extend and replace.” When used, a form that “extends and replaces” a parent form is opened when a request to open the parent form is received, transparent to the user. This is similar to the extend and replace feature for IDOs.

Enable this extension mechanism by selecting the **Load/Replace form with extended form** check box in the **User Preferences** dialog box.

### About the hierarchy of priorities in selecting extended forms

When the user selects this option and then requests a form, the IDO Runtime service uses this hierarchy of priorities to determine which form definition must be returned:

1. **Form Extensions** form entry for **Form Name**

   If the **Form Name** value is the same as the **Replaced By Form** value, the extend and replace feature does not take place. The IDO Runtime service simply returns the requested form definition.
2. Descendant forms in the extension hierarchy, with the **Replace Base Form** property set to **True**
3. The highest descendant level
   - If there is no form found at this level, then the requested form definition is returned.
   - If there is one form found at this level, then the requested form definition is replaced by that descendant form definition.
   - If there are multiple forms found at this level, then you must use the **Form Extensions** form to determine which form definition must be returned.
4. **Form Extensions** form entry:
   - **Language ID**
   - **Scope Type**

To identify which extended form is used to replace the requested form based on the hierarchical level, select **Help** \> **About This Form** then click the **Warning Message(s)** icon.

### How the system resolves extended form conflicts

When the system has two (or more) extended forms at the same level in the hierarchy, and both extended forms have the "Replace Base Form" property set to **True**, this can result in a conflict when the form is called. In cases like this, the IDO Runtime service cannot determine which of the two forms to open. As a result, the IDO Runtime service looks for "hints" that might help to resolve the conflict.

The WSFormExtensions table is used to maintain such conflict-resolution hints, as defined on the **Form Extensions** form. The IDO Runtime service uses the GetFormExtensionHintsSp stored procedure to query the WSFormExtensions table for applicable hints.

In some cases, you might want or need to override the default query used in the GetFormExtensionHintsSp stored procedure. In such cases, you have these options for overriding GetFormExtensionHintsSp:

- External Touch Point (EXTGEN\_GetFormExtensionHintsSp)
- Override Stored Procedure (GetFormExtensionHintsOverrideSp)

The GetFormExtensionHintsSp stored procedure is designed to look for any such overrides. If one exists, GetFormExtensionHintsSp calls the override stored procedure instead of executing its own query logic.

## Using the Form Extensions form

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgsdug_mg/wnb1525255725051.html

It is possible that more than one extended form can be created to replace a base form or an extended form on the same system. To manage the details about the extended form that you created and to determine which extended form must be returned when a request to open the base form is received, use the **Form Extensions** form.

- Field · Description
- **Field:** **Form Name** · **Description:** The name of the base form

  **Note:** This is the actual form name, and not the form caption.
- **Field:** **Scope Type** · **Description:** The scope under which the extended form is created:
  - Vendor
  - Site
  - Group
  - User
- **Field:** **Scope Name** · **Description:** The name of the group or user for which the form is created

  **Note:** This field is populated only if the form is extended at the **Group** or **User** level.
- **Field:** **Language ID** · **Description:** The language and a region or country that is used for translation
- **Field:** **Replaced By Form** · **Description:** The name (not caption) of the extended form
- **Field:** **Access As** · **Description:** Read-Only. The current **Access As** identifier, which is used in some forms to identify who created the metadata object.

  Default and other possible values include:

  - **Core**: Metadata that Infor has created as part of the basic system.
  - `OtherName`: Metadata created as part of another configuration or application. This value is variable and is set by the creator of the configuration or application.
  - Blank: This field should be blank for any Access As-controlled metadata end users have created.
