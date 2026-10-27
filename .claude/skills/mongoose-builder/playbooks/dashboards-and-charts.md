# Playbook: Dashboards, charts, tiles

There are two proven ways to build a dashboard. Pick one:

| Route | Use when | Proven by |
|---|---|---|
| **A. Native Chart component** on a Classic Grid-Only Form | KPI charts straight from an IDO, no custom HTML | EXP-097, 098 (observed) |
| **B. Web User Control** (FX_ HTML/JS/CSS asset + C# form-script bridge to an IDO) | rich custom layout: KPI cards, tables, dark theme, filters | EXP-131–136, 139 (observed); see web-user-controls.md |
| C. Tile grid in a Flex portal | card-per-record catalogues | EXP-115–118; see portal-shell.md §4 |

Native components are fastest and need no custom code. A Web User Control gives full visual control (`assets/FX_Inventory/index.html` is the dark-theme reference).

## Route A: native chart (EXP-097, 098)
1. **Create the Form.** Designer → New → Classic / **GridOnly**.
   - Page 1: Name, Data Source IDO.
   - Page 2: pick the properties.
   - Page 3: order and captions.
   - Page 4: **uncheck Save Template** (click its label).
   - Finish. The result is a FormCollectionGrid (`objects`) with one GridColumn per property.
2. **Load on open.** Set Behavior › **Initial Command = Refresh**, then click another cell so Save enables. Save.
   - The options are Refresh, Filter, FilterInPlace, Add and `Event <name>`.
3. **Make room.** Set the grid's Layout Size and Location by property entry, e.g. Size `69; 6`, Location `14; 0` (Top; Left).
4. **Place the chart.** Toolbox **Chart** → click the canvas → rename it (`FX_<X>Chart`) → set Size `69; 12`, Location `1; 0`.
5. **Bind it.** Binding Type **Chart** is far down the list. Then click the Binding **…** to open "Specify Chart Settings".
   - Tabs: Data, Trend Lines, General, Cosmetics I/II, Legend, Other, Chart XML.
   - Single Series Charts. **Column2D** is the default.
   - Bind Chart To Entire Collection.
   - **Chart Data** = the numeric property. **Property for X-Axis Labels** = the label property.
   - OK. Binding then reads `V(cds_<ChartName>)`.
6. **Hide the grid** if you only want the chart: Behavior › **Hidden = True**. It still draws at design time and is absent at runtime.
7. **Save, then check at runtime.** Close and reopen in the Designer and read the Binding dialog back (Cancel). Open the runtime: the chart renders with the values, for example bars 90 and 6.99.
   - Value labels drop trailing zeros. There is no legend by default.

Other Binding Types are available for other visuals: Gauge, Aggregate, DataView, Calendar, Infor Chart, Expression, Diagram, Process Intelligence (EXP-120 list).
- They have not been exercised. Treat a first use as experiment-grade: build it, save, reopen, run, and record the result.
- `docs/mongoose/guides/charts-and-gauges.md` has the documented options. Their state is **unverified**.

## KPI tiles / cards without custom HTML
- Use Statics bound to derived IDO properties (data-layer.md: Derived property). Examples: totals, counts, `FX_Count * FX_ItmsCost`.
- For aggregates across rows, use an IDO **Aggregate** binding or a derived property with an SQL expression. Both are **unverified**. Prefer route B for real KPI dashboards until one is proven.

## Route B summary
See web-user-controls.md. In outline:
- A Form hosts a **UserControl** component pointing at an `FX_…/index.html` asset.
- A C# form-script method loads IDO rows (`LoadCollection`), serialises them to JSON and pushes them into a form variable or the control.
- The page's JS renders the KPIs, charts (inline SVG or canvas) and the table.

To make a new dashboard:
1. Copy `assets/FX_Inventory/index.html` as the starting point.
2. Change the IDO and properties in the C# method.
3. Replace the asset (EXP-139).
