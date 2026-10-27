# Playbook: Look and feel (themes, theme classes, image library, pictures)

Knowledge state: **observed**. Image upload ran twice (EXP-099, 101); theme edits ran twice (EXP-064, 100).
Themes, classes and images are **tenant-wide**. Create them with an FX_ prefix only. The FX_ prefix must be in the
**image file name**, because the library takes the uploaded file's name.

## Themes and theme classes
- **Open the theme editor:** Designer **Edit › Theme** opens Global Objects with a Themes list (New / Copy / Delete). Select a theme → **Edit…** to open **Edit Styles** (Elements / Categories / Attributes) (EXP-064, 100).
- **Theme tree path:** `<Theme> > UIElement > Form > FormComponent > (Button | FlexLayout | Static | …)`.
- **Add a class:** select the element, type a Class Name, click Add. The new class appears only after you reselect its parent.
  - Don't click **Delete**: with a class selected, it replaces the Add row.
- **Attributes:**
  - Font Family is a text box; Size is plain text with no unit; Bold and Italic take Default/True/False.
  - Normal State holds Foreground/Background in 8-digit ARGB (`#FFFFFFFF`, `#FF5CC6C7`).
  - FlexLayout also has Background, Border, Opacity.
- **Commit:** Edit Styles **OK** → Global Objects **OK** → Designer toolbar **Save** ("Global object(s) were saved."). The dialogs have no Save of their own.
  - A `*` before an attribute in a freshly opened editor means it is set at that level.
- **Existing FX_ theme:** `FX_HelloWorld` (font Tahoma). Its classes:
  - `FX_BlueButton` (Button; white on `#FF5CC6C7`)
  - `FX_BlueBackground` (FlexLayout; `#FF5CC6C7`)
  - `FX_WhiteHeader` (Static; 16, bold, white)
  - `FX_Header` (Static; 16, bold)

  Reuse them before creating new ones.
- **Apply a class to a component:** Properties › Appearance › **Theme Class**.
  - Runtime picks it up after a runtime close/reopen. No unload is needed.
  - The Designer canvas may not render it (EXP-065).
- **The user's active theme:** View › User Preferences › Layout theme (`sFormsDBThemeName:`) applies on OK.
  - This changes the operator's own UI. Ask first, and record the previous value (it was `Hi world`).
- **Dark styling for custom dashboards** is done inside the Web User Control's CSS, not the Mongoose theme (see web-user-controls.md, EXP-139).

## Image library
- **Add images (EXP-099, 101):**
  1. Designer **Edit › Image** opens the "Images" dialog: File list, Preview, Display Option, and OK / New / Import / Export / Delete.
  2. **New** opens "Get image for new.png".
  3. Make **one coordinate click** on the visible **Select File** button. A semantic click is intercepted by `div.x-mask`.
  4. File upload (from `assets/FX_*.png`), then **Upload**.
  5. OK closes silently. Then Designer **Save** ("Global object(s) were saved.").
- **File list:** it is virtualised, so `find` misses rows that aren't scrolled into view. Scroll and take a screenshot to check absence.
- **Display Option:** Actual (the default) makes big images look blank. Use **Fit** to preview.
  - It's an ExtJS combobox: open the list and click; `select_option` fails.
- **Use an image on a Static:** Bitmap File Name combobox → open the list, click the option, Tab (EXP-107, 111).

## Picture stored in data (Binary property)
- **Data:** a Binary property class (PNG) plus a varbinary(-1) column (data-layer.md).
- **Display:** a Static bound to the property, with No Colon True and Image and Text **ImageOnly** (forms.md).
- **Import at runtime:**
  1. A button with `ACTION(Import) COMPONENT(<PictureStatic>)` opens "Import Binary Data From File".
  2. Make one **coordinate click** on Select File, then file upload, then Upload.
  3. Save at runtime (EXP-063-R2).
