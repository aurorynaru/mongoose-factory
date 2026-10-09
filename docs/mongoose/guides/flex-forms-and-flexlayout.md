# Flex forms and FlexLayout components

> Guide: Infor Mongoose Application and Form Development, Infor Mongoose 2026.x
> Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/sor1548211685443.html
> Saved: 2026-10-09
> Trust: unverified (Infor documentation; not yet confirmed in this environment)
> Conversion: formatting only, original wording. Pages not retrieved: none

## Flex forms

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/sor1548211685443.html

The Flex type form is designed to use FlexLayout components to render all other components, allowing you to create forms that are dynamically responsive to the viewing environment. When initially created, the Flex form includes only a single FlexLayout component divided into three vertical regions. Optionally, you can add FlexLayout and other components and regions needed to create the form.

### Creating Flex forms

There are a number of different ways you can create Flex forms. The created Flex form functions the same regardless of the method used to create it.

These are the options for creating a Flex form:

- In a web client operating environment, you can use the Web Designer to create the form.
- If the web client **Form Wizard \- Flex Basic** form has been designated as a Runtime Builder form and you have authorization to create Runtime Builder forms, you can use that option. In this case, the form wizard operates the same as the Web Designer option.

## Creating a Flex form (Web Designer)

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/fff1548677600882.html

**Note:** 

- This topic is for the creation of Flex forms in Web Designer (web client). For the procedure to create these forms in the Windows client, see [Creating a Flex form (Design Mode)](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/ipr1548985730392.html).
- Use this procedure also when launching the **Flex Basic** form wizard from the **Runtime Builder Selection** form in the web client (runtime mode). In this case, start with Step 3 after opening the **Runtime Builder Selection** form.

To create a Flex form in Web Designer:

1. In **Web Designer**, launch the **Form Wizard**.
2. On the **Form Wizard Selection** page, select **New Form.**
3. Specify this information:

   Category

   Select **Flex** from the list.

   Wizard

   Select **Basic** from the list.
4. Click, **OK.**
5. On the **Form Wizard – Flex Basic** page, specify this information: 

   Name

   Specify the name for the new form. Form names must be unique.

   Unit

   From the drop-down list, seletct either **char** or **pixel**. The selected unit is permanent.

   Comments

   Optionally, provide comments to describe how the new form is intended to be used, or other pertinent comments.
6. Click **Next**.
7. Optionally, to save the form template, select the **Save Template** option.
8. Click **Finish.**

## About FlexLayout components

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148025694.html

A FlexLayout component is a container component which is used to flexibly house other components. Each FlexLayout component can be divided into different horizontal or vertical regions, and each region can contain multiple child components. The overall positioning of those child components is specified by the FlexLayout region attributes, and their order is specified by the **Sequence** property.

You can nest FlexLayout components inside regions of other FlexLayout components. You can nest these components as many levels deep as you need to accomplish your form design.

A FlexLayout component can be customized, using the properties that are described in this topic.

### FlexLayout container types

When using multiple regions, the FlexLayout component can group the regions horizontally or vertically.

Horizontal box

\[Image: image without caption or alt text\]

Vertical box

\[Image: image without caption or alt text\]

### Region length

The **Length** and **Units** attributes control the individual length of each region of a FlexLayout component. Length is expressed as a number of characters, equal portions of the total available width (Flex units), or as a combination of both.

Char units only:

\[Image: image without caption or alt text\]

Flex units only:

\[Image: image without caption or alt text\]

Combination of Char and Flex units:

\[Image: image without caption or alt text\]

### About the Orientation, Pack, and Align attributes

The **Orientation** attribute specifies whether child components are arranged vertically or horizontally within each region.

The **Pack** and **Align** attributes work together to position the child components within the region.

Verical orientation

When the FlexLayout region is vertically oriented, to position the child components at the left, center, right, or to stretch them to fill the entire width of the region, use **Align**. To position the child components at the start (top), center (middle), or end (bottom) of the region, use **Pack**.

\[Image: image without caption or alt text\]

Horizontal orientation

When the FlexLayout region is horizontally oriented, use **Align** to position the child components at the top, middle, bottom, or to stretch them to fill the entire height of the region. Use **Pack** to position the child components at the start (left), center (middle), or end (right) of the region.

\[Image: image without caption or alt text\]

**Note:**  Bottom alignment (when vertically oriented) and Right alignment (when horizontally oriented) are not supported by the web client.

### Theme Border

To enable or disable the region's border of a FlexLayout component on WinStudio and web client, use the **Theme Border** attribute.

**Note:** Enabling this option is applicable only for **FlexRegionOnly** and **FlexLayoutAndRegion** border visibility.

Use the **Theme Editor** to specify these border attributes:

- Border color
- Top, left, right, and bottom border visibility
- FlexLayout and FlexRegion border visibility
  - If you select **None**, then no border is displayed for both the FlexLayout component and FlexRegion.
  - If you select **FlexLayoutOnly**, then the border is displayed around the FlexLayout component only. Any borders for the regions are not displayed even if the **Theme Border** from the **Flex Region** properties is enabled.
  - If you select **FlexRegionOnly**, then the border is displayed around the FlexRegions only. Any borders around the FlexLayout component are not displayed. To enable or disable the border visibility of a specific region, use the **Theme Border** attribute from the Flex Region properties.
  - If you select **FlexLayoutAndRegion**, then the border is displayed for both the FlexLayout component and the FlexRegion. The border of the region is only displayed if the **Theme Border** attribute of that region is enabled.

**Note:** You can also use the FlexLayout theme classes that are available under the **Infor** theme. These theme classes have predefined border settings in the **Theme Editor**:

- **FlexLayoutAndRegionBorder**
- **FlexLayoutBorder**
- **FlexRegionBottomBorder**
- **FlexRegionTopBorder**
- **FlexRegionLeftBorder**
- **FlexRegionRightBorder**
- **FlexRegionBorder**

### VisibleWhen

The **VisibleWhen** attribute specifies the conditions under which the component is visible or hidden.

### Animation

To add a sliding and/or bouncing effect to a region when it is opened or closed, use the **Animation** attribute. To disable animation, leave the field blank. To enable animation, select from these options:

- **FromRight**
- **FromLeft**
- **FromTop**
- **FromBottom**
- **FromCenter**
- **FromRightWithBounce**
- **FromLeftWithBounce**
- **FromTopWithBounce**
- **FromBottomWithBounce**
- **FromCenterWithBounce**

### Background image

To add an image to the background of a region, use the **Background Image** attribute.

For Report type forms, you can use the **Background Image** attribute to add watermarks on any region within the MainFlexLayout component.

**Note:** Watermark images are rendered "as is," behind the contents of form reports.

Support for watermarks on Report type forms is available only for PDF and Printer output formats.

### Minimum/Maximum length

When a region size is defined as a number of flex units, to specify the maximum and minimum possible size of that flex region, use the **Min/Max** attribute.

### Region margins

The **Default Margin** property specifies the margin, measured in framework characters, that defaults for any child components added to the current FlexLayout region.

To override, if necessary, the **Default Margin** property for components contained in the FlexLayout region, use the **Margin** property.

### About the Orientation, Pack, and Align Attributes

To select horizontal or vertical box when creating a Flex region, use **Orientation Adorner** property.

To add a region on the selected flex layout, use **Add flex regions**. The Flex region orientation is based on the **Orientation Adorner** property being selected.

To remove a region on the selected FlexLayout component, use **Remove flex regions**.

To add a FlexLayout component on a selected region that has no contained component, use **Add Flex**.

## Adding a FlexLayout component to a form

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148030593.html

1. With the form open in the designer (Web Designer in the web client, Design Mode in the Windows client), select **FlexLayout** in the Toolbox.
2. To create the approximate size and position of the component, click and drag a box on the form.
3. To formate and populate the FlexLayout component, open the **Edit FlexLayout Attributes** dialog box by clicking the Edit FlexLayout button in the upper left corner of the component. 

   By default, the FlexLayout component contains only one region.
4. To create additional regions, click **Add**.
5. To format a region to display as columns, select **HorizontalBox** from the **Type** drop-down list. To format a region to display as rows, select **VerticalBox** from the **Type** drop-down list.
6. For each region, set the additional properties and attributes that control how the FlexLayout component is to display. 

   For more information, see [FlexLayout properties and attributes](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/zic1473445627059.html).
7. Add the required components to each region of the FlexLayout component by creating the components inside the region where you want them to display. 

   **Note:** If you are using the **Orientation** option **Fill** in a Report-type form: To make it easier to select the FlexLayout component or the contained component, you can right-click the area, select **Set Current Selection** from the context menu, and then select the desired component from the submenu.

   Whether or not you are using the **Fill** option, the selected component--whether it is the FlexLayout component or a contained component--is highlighted when it is selected.

## Adding a FlexLayout component in a region

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/xtj1583123745445.html

1. With the form open in the designer (Web Designer in the web client, Design Mode in the Windows client), select the region to which you want to add a FlexLayout component.
2. Using the right-click context menu, select **Add Flex**. 

   **Note:** The **Add Flex** option is available only if the selected region has no contained components.
3. To add a FlexLayout row, select **Add Row**; or, to add a FlexLayout column, select **Add Column**.
