async (page) => {
  // Data Maintenance wizard for FX_AgentSessions (BLD-018 step 3). Same route as FX_AgentAccounts.
  const log = [];
  const top = () => page.locator('.x-window:visible').last();
  // Close the finished wizard of the previous table
  const prev = page.locator('.x-window:visible').filter({ hasText: 'Table and IDO created.' });
  if (await prev.count()) { await prev.first().getByRole('button', { name: 'Close', exact: true }).click(); await page.waitForTimeout(1500); }
  // Form > Definition > New
  await page.getByText('Form', { exact: true }).first().click(); await page.waitForTimeout(600);
  await page.locator('.x-menu:visible .x-menu-item-text', { hasText: 'Definition' }).first().hover(); await page.waitForTimeout(600);
  await page.locator('.x-menu:visible .x-menu-item-text').getByText('New', { exact: true }).click(); await page.waitForTimeout(2000);
  let w = top();
  await w.locator('.x-form-trigger').first().click(); await page.waitForTimeout(800);
  await page.locator('.x-boundlist:visible').getByText('New Data', { exact: true }).click(); await page.waitForTimeout(800);
  await w.locator('.x-form-trigger').nth(1).click(); await page.waitForTimeout(800);
  await page.locator('.x-boundlist:visible').getByText('Maintenance', { exact: true }).click(); await page.waitForTimeout(600);
  const combos = await w.locator('input[role=combobox]').evaluateAll(els => els.map(e => e.value));
  log.push('selection ' + combos.join('/'));
  if (combos[0] !== 'NewData' || combos[1] !== 'Maintenance') return log.concat('STOP wrong selection');
  await w.getByRole('button', { name: 'OK' }).click(); await page.waitForTimeout(4000);
  w = top();
  const tb = w.getByRole('textbox');
  await tb.nth(2).fill('FX_AgentSessions'); await tb.nth(2).press('Tab'); await page.waitForTimeout(600);
  await w.getByRole('button', { name: 'Open' }).first().click(); await page.waitForTimeout(1200);
  await page.locator('.x-boundlist:visible').getByRole('cell', { name: 'FX_ServiceDeskProject', exact: true }).click(); await page.waitForTimeout(600);
  await tb.nth(3).fill('fxses'); await tb.nth(3).press('Tab'); await page.waitForTimeout(500);
  log.push('project ' + await w.getByRole('combobox').first().inputValue() + ' alias ' + await tb.nth(3).inputValue() + ' ido ' + await tb.nth(2).inputValue());
  const conts = w.locator('.x-grid-item-container');
  const step = async (val) => { const f = page.locator('input:focus'); if (val !== null) { await f.fill(val); await page.waitForTimeout(300); } await f.press('Tab'); await page.waitForTimeout(700); };
  const rows = [
    ['TokenHash', 'String', 'nvarchar', '64', true, true],
    ['AgentID', 'String', 'nvarchar', '30', false, true],
    ['ExpiresOn', 'Date', 'datetime', null, false, true],
    ['EndedOn', 'Date', 'datetime', null, false, false],
  ];
  for (let r = 0; r < rows.length; r++) {
    const [name, type, sql, len, pk, req] = rows[r];
    if (r === 0) { await conts.nth(0).locator('table.x-grid-item').first().locator('td').nth(1).click(); await page.waitForTimeout(700); }
    else { await w.getByRole('button', { name: 'Add Row' }).click(); await page.waitForTimeout(1000); }
    await page.locator('input:focus').fill(name); await page.locator('input:focus').press('Tab'); await page.waitForTimeout(700);
    await step(null); await step(type); await step(sql);
    if (len) { await step(len); }
    const right = conts.nth(1).locator('table.x-grid-item').nth(r).getByRole('checkbox');
    if (pk) { await right.nth(0).click(); await page.waitForTimeout(700); } // ticks Required too
    else if (req) { await right.nth(1).click(); await page.waitForTimeout(700); }
  }
  await w.locator('.x-title-text').click(); await page.waitForTimeout(600);
  const left = (await conts.nth(0).locator('table.x-grid-item').allInnerTexts()).map(s => s.replace(/\s+/g, '|'));
  const rt = (await conts.nth(1).locator('table.x-grid-item').allInnerTexts()).map(s => s.replace(/\s+/g, '|'));
  const checks = [];
  const n = await conts.nth(1).locator('table.x-grid-item').count();
  for (let r = 0; r < n; r++) checks.push((await conts.nth(1).locator('table.x-grid-item').nth(r).locator('img').evaluateAll(els => els.map(e => e.getAttribute('alt')))).join(','));
  log.push(JSON.stringify({ left, rt, checks }));
  await page.screenshot({ path: 'C:/AI/mongoose-factory/evidence/BLD-018/04-sessions-wizard-page1.png', mask: [page.locator('text=/ScopeName/')], maskColor: '#000' });
  return log;
}
