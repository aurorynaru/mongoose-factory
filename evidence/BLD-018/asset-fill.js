async (page) => {
  // Fill one Web User Control Asset of FX_ServiceDeskLogin from its .flat copy on the local preview server,
  // then compare the editor value with the source (whitespace-normalized, the compare-readback.js rule).
  // The Edit Browser File dialog stays open for the snapshot readback; OK is a separate step.
  const FILE = 'index.html';
  const FLAT = { 'index.html': 'index.flat.html', 'app.css': 'app.flat.css', 'app.js': 'app.flat.js' }[FILE];
  const APP = 'FX_ServiceDeskLogin';
  const src = await (await fetch('http://127.0.0.1:8765/' + APP + '/' + FLAT, { cache: 'no-store' })).text();
  const gw = page.locator('.x-window:visible').filter({ hasText: 'Web Assets' }).last();
  const items = gw.locator('.x-grid-item');
  const texts = (await items.allInnerTexts()).map(s => s.trim());
  const folder = texts.indexOf(APP);
  let idx = -1;
  for (let i = folder + 1; i < texts.length && i <= folder + 3; i++) if (texts[i] === FILE) idx = i;
  if (folder < 0 || idx < 0) return 'STOP: ' + FILE + ' not under ' + APP;
  await items.nth(idx).click(); await page.waitForTimeout(1200);
  await gw.locator('[aria-label="Open Edit Property Dialog"]:visible').first().click(); await page.waitForTimeout(2500);
  const ed = page.locator('.x-window:visible').last();
  const title = (await ed.locator('.x-title-text').allInnerTexts()).join('|');
  const ta = ed.locator('textarea:visible').first();
  if (!(await ta.count())) return 'STOP: no textarea in ' + title;
  const before = await ta.inputValue();
  await ta.fill(src); await page.waitForTimeout(800);
  const after = await ta.inputValue();
  const norm = s => s.replace(/\s+/g, ' ').trim();
  return { title, file: FILE, beforeLen: before.length, srcLen: src.length, afterLen: after.length, equal: norm(after) === norm(src) };
}
