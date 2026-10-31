async (page) => {
  // BLD-018 step 9: fill one Site Default FX_ServiceDeskLogin asset from its .flat copy.
  // Baseline: on a refill, the current value must have the installed length (BASELINE), otherwise stop without a change.
  // The Edit Browser File dialog stays open for the snapshot readback; OK is a separate step.
  const FILE = 'app.css';
  const FLAT = { 'index.html': 'index.flat.html', 'app.css': 'app.flat.css', 'app.js': 'app.flat.js' }[FILE];
  // Lengths of the step 9 installs (readbacks 48–50).
  const BASELINE = { 'index.html': 7187, 'app.css': 9278, 'app.js': 9636 }[FILE];
  const APP = 'FX_ServiceDeskLogin';
  const norm = s => s.replace(/\s+/g, ' ').trim();
  const src = await (await fetch('http://127.0.0.1:8765/' + APP + '/' + FLAT, { cache: 'no-store' })).text();
  let gw = page.locator('.x-window:visible').filter({ hasText: 'Web Assets' }).last();
  if (!(await gw.count())) {
    await page.getByText('Edit', { exact: true }).first().click(); await page.waitForTimeout(700);
    await page.locator('.x-menu:visible .x-menu-item-text').getByText('Web User Control Assets', { exact: true }).click();
    await page.waitForTimeout(3000);
    gw = page.locator('.x-window:visible').filter({ hasText: 'Web Assets' }).last();
  }
  const items = gw.locator('.x-grid-item');
  let texts = (await items.allInnerTexts()).map(s => s.trim());
  const folder = texts.indexOf(APP);
  if (folder < 0) return 'STOP: folder ' + APP + ' not listed';
  if (!['app.css', 'index.html', 'app.js'].includes(texts[folder + 1])) {
    await items.nth(folder).click(); await page.keyboard.press('ArrowRight'); await page.waitForTimeout(1500);
    texts = (await items.allInnerTexts()).map(s => s.trim());
  }
  let idx = -1;
  for (let i = folder + 1; i <= folder + 3 && i < texts.length; i++) if (texts[i] === FILE) idx = i;
  if (idx < 0) return 'STOP: ' + FILE + ' not under ' + APP;
  await items.nth(idx).click(); await page.waitForTimeout(1200);
  const version = ((await gw.innerText()).match(/(User version for user|Site Default version)/) || ['?'])[0];
  if (version !== 'Site Default version') return { stop: 'not a Site Default version', version };
  await gw.locator('[aria-label="Open Edit Property Dialog"]:visible').first().click(); await page.waitForTimeout(2500);
  const ed = page.locator('.x-window:visible').filter({ hasText: 'Edit Browser File' }).last();
  const ta = ed.locator('textarea:visible').first();
  const before = (await ta.inputValue()).length;
  if (before !== BASELINE) return { stop: 'baseline length differs', file: FILE, before, expected: BASELINE };
  await ta.fill(src); await page.waitForTimeout(800);
  const after = await ta.inputValue();
  return { file: FILE, version, before, srcLen: src.length, afterLen: after.length, equal: norm(after) === norm(src) };
}
