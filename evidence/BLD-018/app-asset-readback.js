async (page) => {
  // Read back every FX_ServiceDesk asset after reopen: open each file's Edit Browser File dialog, compare the
  // editor value with the .flat source (whitespace-normalized, the compare-readback.js rule), then Cancel. No change.
  const APP = 'FX_ServiceDesk';
  const FILES = { 'index.html': 'index.flat.html', 'app.css': 'app.flat.css', 'app.js': 'app.flat.js' };
  const norm = s => s.replace(/\s+/g, ' ').trim();
  await page.getByText('Edit', { exact: true }).first().click(); await page.waitForTimeout(700);
  await page.locator('.x-menu:visible .x-menu-item-text').getByText('Web User Control Assets', { exact: true }).click(); await page.waitForTimeout(3000);
  const gw = page.locator('.x-window:visible').filter({ hasText: 'Web Assets' }).last();
  const items = gw.locator('.x-grid-item');
  let texts = (await items.allInnerTexts()).map(s => s.trim());
  const folder = texts.indexOf(APP);
  if (folder < 0) return 'STOP: folder ' + APP + ' not listed';
  if (texts[folder + 1] !== 'app.css' && texts[folder + 1] !== 'index.html' && texts[folder + 1] !== 'app.js') {
    await items.nth(folder).click(); await page.keyboard.press('ArrowRight'); await page.waitForTimeout(1500);
    texts = (await items.allInnerTexts()).map(s => s.trim());
  }
  const out = {};
  for (const [file, flat] of Object.entries(FILES)) {
    let idx = -1;
    for (let i = folder + 1; i <= folder + 3 && i < texts.length; i++) if (texts[i] === file) idx = i;
    if (idx < 0) { out[file] = 'not under folder'; continue; }
    const src = await (await fetch('http://127.0.0.1:8765/' + APP + '/' + flat, { cache: 'no-store' })).text();
    await items.nth(idx).click(); await page.waitForTimeout(1200);
    const version = ((await gw.innerText()).match(/(User version for user|Site Default version)/) || ['?'])[0];
    await gw.locator('[aria-label="Open Edit Property Dialog"]:visible').first().click(); await page.waitForTimeout(2500);
    const ed = page.locator('.x-window:visible').filter({ hasText: 'Edit Browser File' }).last();
    const val = await ed.locator('textarea:visible').first().inputValue();
    out[file] = { version, chars: val.length, src: src.length, equal: norm(val) === norm(src) };
    await ed.getByRole('button', { name: 'Cancel', exact: true }).click(); await page.waitForTimeout(1200);
  }
  await gw.getByRole('button', { name: 'Cancel', exact: true }).click(); await page.waitForTimeout(1500);
  out.windowsLeft = await page.locator('.x-window:visible').count();
  return out;
}
