# Chart and Gauge components

> Guide: Infor Mongoose Application and Form Development, Infor Mongoose 2026.x
> Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148025070.html
> Saved: 2026-10-09
> Trust: unverified (Infor documentation; not yet confirmed in this environment)
> Conversion: formatting only, original wording. Pages not retrieved: none

## About Chart and Gauge components

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148025070.html

Forms can display data using either of two different kinds of graphical devices, charts and gauges.

Types of charts include column or bar charts, line charts, pie charts, doughnut charts, scatter charts, and spark charts, to name a few. These charts can display data from a single source  (or series) or from multiple series. They can also include combination displays, showing both lines and columns, for example.

Gauges are single or multiple value indicators that are used in dashboards, real-time monitors, and reports. They are used to display Key Performance Indicators (KPIs), progress indicators, and quantity indicators.

To display data using these devices, the designer offers two form components: a Chart component and a Gauge component. To use either of these components, you add the component to the form and then bind the data to it, using a special dialog box. The appearance and content displayed by chart and gauge components are controlled by the settings made in their respective dialog boxes.

You can also modify charts and gauges using form scripting.

## Adding a Chart component to a form

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148025148.html

1. With the form open, go into the designer (Web Designer in the web client, Design Mode in the Windows client).
2. From the Toolbox, select **Chart**, and draw the component where you want it on the form.
3. From the **Component** properties sheet, select **Data Source \> Binding** and then click the ellipses (**•••**) button on the right.
4. In the **Edit Component Data Binding** dialog box, from the **Type** drop-down list, select **Chart**.
5. Click **Edit**.
6. In the **Specify Chart Settings** dialog box, on the **Data** tab, specify at least the **Chart Style** and the **Chart Type**.
7. On the same tab, in the **Chart Data** group box, provide this information: 

   - The IDO **Collection** to use as the source for the data.
   - The property or properties, using the **Available Properties** list and clicking **Add**.

     For a single-series chart, specify only a single property. For a multi-series or combination chart, specify multiple properties, according to what the chart is to display.
8. To save your initialized chart, click **OK** repeatedly, till you get back to the form. 

   **Note:** The chart does not display any data until you perform this step and the next step.
9. Save your changes, close the form, and then reopen the form.
10. Make other settings as desired on the various tabs of the **Specify Chart Settings** dialog box.
11. To preview the chart, click **Apply** and move the **Specify Chart Settings** dialog box out of way until you can see your chart. 

    See [Previewing chart types](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148255028.html).
12. To apply your changes and save the chart, click **OK** **.**

## Adding a Gauge component to a form

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148025211.html

1. With the form open, go into the designer (Web Designer in the web client, Design Mode in the Windows client).
2. From the Toolbox, select **Gauge** and draw the component where you want it on the form.
3. From the **Component** properties sheet, select **Data Source \> Binding** and then click the ellipses (**•••**) button on the right.
4. In the **Edit Component Data Binding** dialog box, from the **Type** drop-down list, select **Gauge**.
5. Click **Edit**.
6. In the **Specify Gauge Settings** dialog box, on the **General** tab, specify at least the **Gauge Type**.
7. Specify the gauge settings on the **General** tab, as desired. 

   See [Specifying general settings for gauges](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148247587.html).

   You must specify at least this information:

   - **Gauge Type**: Select the type of gauge you want to display.

     To preview the gauge types, see [Gauge samples](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148050233.html).
   - **Gauge Data**

     **Note:** In some earlier versions of Mongoose, the **Gauge Data** group is labeled as **Chart Data**.

     - To base the gauge display on data in an IDO collection, select the **Collection** option.
     - To base the gauge display on data from a Critical Number, select the **Critical Number** option.
8. Optionally, use the other tabs on the **Specify Gauge Settings** dialog box to set up additional options for the gauge.
9. To apply your changes and save the gauge, click **OK**.

## About modifying charts and gauges with script

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148025289.html

To create a chart or a gauge on a form, you must use the appropriate form component and then use the **Specify Chart Settings** dialog box or the **Specify Gauge Settings** dialog box to define it. You can also further modify your chart and gauge components using these dialog boxes.

You cannot create a chart or gauge using form scripting. You must create the chart component using the **Specify Chart Settings** dialog box, and the gauge component using the the **Specify Gauge Settings** dialog box. Once the component has been initially created and defined, then you can use form scripting to modify and refine the components.

However, there might be times when you want to include functionality or features on your chart/gauge that you cannot specify using these dialog boxes. These times might include these types of situations:

- You might want to structure your chart/gauge so that the chart/gauge display changes whenever you click a certain button on the form.

  This type of functionality is currently not available through the settings dialog boxes.
- You might want to use chart/gauge properties that are supported in the framework, but not represented on either of the settings dialog boxes.

In these cases, you can add the features or functionality you want by creating form scripts.

## Gauge samples

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148050233.html

This topic lists and shows samples of each of the basic gauge types supported.

### Angular gauge

\[Image: image without caption or alt text\]

### Bulb gauge

\[Image: image without caption or alt text\]

### Cylinder gauge

\[Image: image without caption or alt text\]

### HLED (Horizontal LED) gauge

\[Image: image without caption or alt text\]

### HLinear gauge

\[Image: image without caption or alt text\]

### Thermometer gauge

\[Image: image without caption or alt text\]

### VLED (Vertical LED) gauge

\[Image: image without caption or alt text\]

### HBullet (Horizontal Bullet) gauge

\[Image: image without caption or alt text\]

### VBullet (Vertical Bullet) gauge

\[Image: image without caption or alt text\]

## Conditional action syntax

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148049687.html

A conditional action includes an action, a condition, and a value. Event handlers of the type Conditional Action and certain component attributes use the syntax described here. We recommend that you use the **Edit Set of Conditional Actions** dialog box from the appropriate field in the properties dialog box to guide you through the creation of conditional actions. This topic explains the syntax of the expressions created through that process.

A subset of the Windows client API is available for developers to script conditional actions in Windows client. You might want to use the conditional action dialog box rather than scripting for these reasons:

- You might see a small performance gain because there is no initial compile as with scripts.
- Using the dialog boxes to build the expression is easier and less error-prone than writing code.
- For component enabled, required, and hidden expressions, you do not need to create event handlers at various points to ensure that your logic executes when certain values change.

### Syntax

A conditional action procedure has three parts:

ACTION ( ActionType: `component1` \| `property1` \| `variable1` \[ ;`component2` \| `property2` \| `variable2` ; . . .\] ,

Boolean expression,

**True** \| **False** \| `component` \| `property` \| `variable` \| `literal` \| `event_name` \[ , \] )

ActionType: `component1` \| `property1` \| `variable1` \[ ;`component2` \| `property2` \| `variable2` ; . . .\] ,

This parameter specifies an action type (Enabled, Required, Modified, Toggle, Focus, Set, SetModified \[Set and Modify property\], Modified, New \[applies to caches only\], GenEvent \[applies to forms and repaint on component\]. The action type is followed by a colon (:) and a component, property, or a variable name or a list of components, properties, or variable names in any order. Names must be separated by a semicolons (;). The parameter ends with a comma.

Boolean expression,

This parameter is an expression that evaluates to a Boolean value. The expression is a regular expression that can be used in an If statement with few exceptions. Precedence for OR and AND is the same and can be changed using parenthesis. The parameter ends with a comma.

**True** \| **False** \| `component` \| `property` \| `variable` \| `literal` \| `event_name` \[ , \]

This parameter contains a value or a list of values separated by semicolons. For Enabled or Required, valid values are **True** or **False**; there is only one value for the entire list of components. For Set and SetModified, valid values include properties, components, variables, or literal values. An empty string is designated by "". The parameter ends with a comma if additional three-part parameters follow it.

ACTION takes up to 300 parameters in this three-part form.

Keywords are preceded by a #.

### Valid Actions

Set, SetModified (take three parameters) \= {property \| component \| variable \[; property \| component \| variable\], condition, property \| component \| variable \| constant \[; property \| component \| variable \| constant \| expression\]}

Enabled \= Toggle:#C(Name.Enabled)

Required \= Toggle:#C(Name.Required)

Modified \= Toggle:#{C\|P\|R\|CA}(Name.Modified)

Toggle (takes three parameters) \= {component \| property \| row \| cache \[; component \| property \| row \| cache\], condition, True \| False}

GenEvent, GenEventRet (take three parameters) \= {event\_on \[; event\_on\], condition, form\_event\_name \| component\_event\_name \[; form\_event\_name \| component\_event\_name\]}

Focus \= {#C(Name) \| #C(variable), condition, \[#C(Name) \| #C(variable)\]} \- If a condition is false the focus will use optional component if supplied.

ReturnValue \= {, condition, constant (0 \- success, otherwise failure)} \- Sets the return value out of the conditional action script.

Stop \= {, condition, } \- If the condition evaluates to true script stops execution.

Validate \= {, condition, message} \- If the condition evaluates for false, message is displayed.

component \= {#C(variable), #C(Name) \| #C(Name.Enabled) \| #C(Name.Visible) \| #C(Name.Required) \| #C(Name.Modified)}

property \= {#P(variable), #P(Name) \| #P(Name.Modified) \| #P(cache\_name.Name) \| #P(cache\_name.Name.Modified)}

variable \= {#V(Name) \| #GV(Name)

row \= {#R(variable), #R(cache\_name.Modified) \| #R(cache\_name.New) \| #R(cache\_name.Deleted) \| #R(cache\_name.Invalid)}

cache \= {#CA(cache\_name.Modified) \| #CA(cache\_name.NewModified) \| #CA(cache\_name.Deleted) \| #CA(cache\_name.Save) \| #CA(cache\_name.Refresh) \| #CA(cache\_name.New) \| #CA(cache\_name.Copy) \| #CA(cache\_name.Delete) \| #CA(cache\_name.Navigate) \| #CA(cache\_name.Filter) \| #CA(cache\_name.Notes)}

event\_on \= {form\_event \| component\_event}

form\_event \= {#F(variable) \| #F(ThisForm) \| #F(FormName)}

form\_event\_name \- {constant \- name of the event to generate on the form}

component\_event \= {#C(variable) \| #C(Name)}

component\_event\_name \= {Repaint (force repaint of a component) \| Validate (run all validations attached to a component)}

message \= {#S(Name) \[; #S(Name)\]}

condition \= {ELSE \| condition\_expression} \- Empty condition retains the same value as previous condition.

condition\_expression \= {\[FOREACH:cache\_name(\]compare\_expression condition\_operator compare\_expression\[)\]}

compare\_expression \= {expression comparison\_operator expression}

condition\_operator \= { \| \&}

comparison\_operator \= {\= \<\> !\= \> \< \>\= \<\= : !:}

expression \= {\[(\]single\_expression \[ \+ \- / \* single\_expression\[)\]\]

single\_expression \= {function \| property \| component \| variable \| row}

function \= {SUM \| MAX \| MIN \| AVG \| CInt \| CDbl \| CDate \| Ceiling \| Floor \| CStr \| InStr \| $DATE}

SUM \= {SUM(expression \[? compare\_expression\]) \- Sum all the values in the cache, if condition expression is supplied only rows that the condition evaluates to true will be summed.

MAX \= {MAX(expression \[? compare\_expression\]) \- Get the maximum value for the expression out of all rows in the cache, if condition expression is supplied only rows that the condition evaluates to true will be considered.

MIN \= {MIN(expression \[? compare\_expression\]) \- Get the minimum value for the expression out of all rows in the cache, if condition expression is supplied only rows that the condition evaluates to true will be considered.

AVG \= {AVG(expression \[? compare\_expression\]) \- Get the average value for the expression out of all rows in the cache, if condition expression is supplied only rows that the condition evaluates to true will be considered.

CInt \= {CInt(expression)}

CDbl \= {CDbl(expression)}

CDate \= {CDate(expression)}

Ceiling \= {Ceiling(expression)}

Floor \= {Floor(expression)}

CStr \= {CStr(expression)}

InStr \= {InStr(expression1;expression2)} \- Returns (-1) if expression2 was not found in expression1, otherwise the first starting position of the expression2 in expression1.

$DATE \- constant evaluates to current date.

\= \- Equal to

!\=, \<\> \- Not equal to

\>, \< \- Greater than, less than

\>\=, \<\= Greater than or equal, less than or equal

: \- (in list) \- List is delimited by parentheses () and separated by semi-colons (;). For example: (1;2;3;4) or ("a";"b";"c")

!: \- (not in list) \- List is delimited by parentheses () and separated by semi-colons (;). For example: (1;2;3;4) or ("a";"b";"c")

expression \=

cache\_name \= {primary\_cache \| grid\_name}

primary\_cache \= {PrimaryCache} \- Constant, assumes a primary cache attached to a form.

grid\_name \= {name of the grid component on the form} \- Extracts a cache out of the grid component on a form.

#V(Name) \- Returns or sets the value of a variable.

#GV(Name) \- Returns or sets the value of a global variable. (Often required by conditional actions; if #V does not work, try this instead.)

#C(Name) \- Gets or sets the current value in a component.

#C(Name.Enabled) \- Gets or sets the enabled property on a component.

#C(Name.Visible) \- Gets or sets the visible property on a component.

#C(Name.Required) \- Gets or sets the required property on a component.

#C(Name.Modified) \- Gets or sets the modified property on a component.

#PModified(Name) \= #P(Name.Modified)

#P(Name), #P(cache\_name.Name) \- Gets or sets the current value in a property attached to a current row in a collection.

#P(Name.Modified), #P(cache\_name.Name.Modified) \- Gets or sets the modified property on a property attached to a current row in a collection.

#S(Name) \- Returns the value of the string.

#RModified(cache\_name) \= #R(cache\_name.Modified)

#RNew(cache\_name) \= #R(cache\_name.New)

#RDeleted(cache\_name) \= #R(cache\_name.Deleted)

#REntries(cache\_name) \= #R(cache\_name.Entries)

#RAutoInsert(cache\_name) \= #R(cache\_name.AutoInsert)

#RNewUnmodified(cache\_name) \= #R(cache\_name.NewUnmodified)

#R(cache\_name.Modified) \- Gets or sets current row in a collection modified.

#R(cache\_name.New) \- Gets or sets current row in a collection new.

#R(cache\_name.Deleted) \- Gets or sets current row in a collection deleted.

#R(cache\_name.Invalid) \- Gets or sets current row in a collection invalid (error state).

#R(cache\_name.Entries) \- Returns number of entries in the cache including auto-inserted row.

#R(cache\_name.AutoInsert) \- Returns true or false based on the auto-inserted property for a row.

#R(cache\_name.NewUnmodified) \- Returns true or false based on the combination of new and modified properties for a row

#CA(cache\_name.Modified) \- Marks or unmarks all rows as modified in a cache.

#CA(cache\_name.NewModified) \- Marks or unmarks all rows as new in a cache.

#CA(cache\_name.Deleted) \- Marks or unmarks all rows as deleted in a cache.

#CA(cache\_name.Save) \- Turns off or on the save capability on a cache.

#CA(cache\_name.Refresh) \- Turns off or on the refresh capability on a cache.

#CA(cache\_name.New) \- Turns off or on the new capability on a cache (also gets rid of the auto-inserted row).

#CA(cache\_name.Copy) \- Turns off or on the copy capability on a cache.

#CA(cache\_name.Delete) \- Turns off or on the delete capability on a cache.

#CA(cache\_name.Navigate) \- Turns off or on the navigate capability on a cache.

#CA(cache\_name.Filter) \- Turns off or on the filter capability on a cache.

#CA(cache\_name.Notes) \- Turns off or on the notes capability on a cache

### Examples

This call enables the components **ExchangeRateEdit** and **ExchangeRateGridCol** if the property **CurrencyCode** is not equal to the property **DefaultCurrencyCode** and the property **InvoiceStatusType** is not in 2, 3, 4, and 5\. Otherwise, **ExchangeRateEdit** and **ExchangeRateGridCol** are disabled.

```
ACTION (Enabled:#C(ExchangeRateEdit);#C(ExchangeRateGridCol),
  #P(CurrencyCode) <> #P(DefaultCurrencyCode)  &
  #P(InvoiceStatusType) !: (2;3;4;5), True)
```

This is equivalent to:

```
ACTION (Enabled:ExchangeRateEdit;ExchangeRateGridCol,
 #P(CurrencyCode) <> #P(DefaultCurrencyCode)  &
 #P(InvoiceStatusType) !: (2;3;4;5), True)
```

This call disables the **ExchangeRateEdit** component when the property **CurrencyCode** is equal to an empty string and sets the **Required** property on the same component to **False**. Otherwise, **ExchangeRateEdit** is enabled and required.

```
ACTION (Enabled:#C(ExchangeRateEdit),
 #P(CurrencyCode) = "", False, 
 Required:#C(ExchangeRateEdit),
 #P(CurrencyCode) = "", False)
```

This call sets and marks as modified the **ExchangeRate** and **BeginDate** properties only if the property **CurrencyCode** is equal to the property **DefaultCurrencyCode**. **ExchangeRate** is set to the integer sum of **1** and the value of the variable `Test`; and **BeginDate** is set to a value in the **InvoiceDate** property.

```
ACTION (SetModified:#P(ExchangeRate);#P(BeginDate),
 #P(CurrencyCode) = #P(DefaultCurrencyCode),
 CInt(1+#V(Test));#P(InvoiceDate))
```

This call sets as not modified the current row in the **PrimaryCache** and marks as unmodified the property **BeginDate** in the primary cache only if the property **CurrencyCode** is equal to the property **DefaultCurrencyCode**.

```
ACTION (Modified:#R(PrimaryCache);#P(BeginDate),
  #P(CurrencyCode) = #P(DefaultCurrencyCode), False;False)
```

This call generates two events when the property **CurrencyCode** equals the property **DefaultCurrencyCode**. **StdObjectRefresh** is generated on the current form, and **StdObjectSave** is generated on the **ApDefaults** form.

**Note:** Be sure the generated events do not have custom handlers attached to them.

```
ACTION (GenEvent:#F(ThisForm);#F(APDefaults),
 #P(CurrencyCode) = #P(DefaultCurrencyCode),
 StdObjectRefresh; StdObjectSave)
```

This call disables the Save operation on the form **PrimaryCache** when **StatusType** is equal to **10**. Valid values are: **Save**, **Refresh**, **New**, **Copy**, **Delete**, **Navigate**, **Filter**, and **Notes**.

```
ACTION (Enabled:#CA(PrimaryCache.Save),
 #P(StatusType) = 10, False)
```

This call sets the current object to **New** on the **PrimaryCache** to **False** when **StatusType** is equal to **10**. Valid values are: **New**, **Deleted**, **Invalid**, and **Modified**.

```
ACTION (Toggle:#R(PrimaryCache.New),
 #P(StatusType) = 10, False)
```

This call always forces a repaint of the **FormsGrid** component.

```
ACTION (GenEvent:#C(FormsGrid),
 1 = 1, Repaint)
```

This call sets the focus to the component `Test1` if the property **Test** equals **1**. Otherwise, it sets the focus to `Test2`.

```
ACTION (Focus:#C(Test1),
 #P(Test) = 1, #C(Test2))
```

## Creating a conditional action expression - simple example

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148033853.html

This sample scenario shows how you can use the framework to generate conditional action expressions. Conditional action expressions have three parts: the action, the condition, and the value.

In this scenario, you want to make the **Credit Hold Date** a required field when users select the **Credit Hold** check box.

1. Open the form whose collection includes the **CreditHoldEdit** component and the **CreditHoldDateEdit** component.
2. Go into the designer (Web Designer in the web client, Design Mode in the Windows client) and select the field (**CreditHoldDateEdit** component) for which you want to set the conditional requirement.
3. In the **Component** properties sheet for **CreditHoldDateEdit**, select the **Required When** property and then click the ellipsis (•••) button that displays. 

   This automatically sets **Action Type** to **Required** and **Action Value** to **#C(CreditHoldDateEdit)**.

   This is the "Action" part of the expression: "The Credit Hold Date component is required..."
4. In the **Edit Condition** dialog box: 

   - Click **Edit Left Value**. Set **Value Type** to **ComponentValue** and **Value** to **CreditHoldGridCol**.
   - Set **Operator** to **\=**.
   - Click **Edit Right Value** and set **Value Type** to **Literal** and **Value** to **1**.

     A value of 1 indicates that the component check box is selected.

   This translates to **#C(CreditHoldGridCol) \= "1"**

   This is the "Condition" part of the expression: "...when the **Credit Hold** component is selected."
5. Click **OK** and see the full expression in the **Edit Set of Conditional Actions** dialog box: 

   Required:#C(CreditHoldDateEdit), #C(CreditHoldGridCol) \= "1", "True"

   The "Value" part of the expression is automatically generated in this case and is set to **True** to indicate that the component's value is required if the condition is true.
6. To return to the **Component** property sheet and store the conditional expression in the **Required When** property of the **CreditHoldDateEdit** component, click **OK**.
7. Save the form and test it to make sure that selecting **Credit Hold** makes **Credit Hold Date** a required field.
