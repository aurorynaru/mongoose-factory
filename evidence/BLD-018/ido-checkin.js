async (page) => {
  // Check In the IDO currently shown in Web Client > IDOs, then read back revision, lock and properties.
  // Change NAME before running. Never touches another IDO: stops unless the shown IDO Name equals NAME.
  const NAME = 'FX_AgentSessions';
  const f = page.frameLocator('iframe[name="mongoose_46_c51080bc-3191-4598-9894-39e1b84f8e87"]');
  const shown = await f.getByLabel('IDO Name:').first().inputValue();
  if (shown !== NAME) return 'STOP: shown IDO is ' + shown;
  const btn = f.locator('.x-btn:visible').filter({ hasText: /^Check In$/ }).first();
  if (await btn.count()) {
    await btn.click(); await page.waitForTimeout(3000);
    const box = f.locator('.x-window:visible, .x-message-box:visible');
    const msgs = await box.allInnerTexts();
    if (await box.count()) { await box.last().getByRole('button', { name: 'OK' }).click().catch(() => {}); await page.waitForTimeout(2000); }
    await f.locator('[aria-label="Refresh"]:visible').first().click(); await page.waitForTimeout(3000);
    var notice = msgs.map(m => m.replace(/\s+/g, ' ').slice(0, 160));
  }
  const rev = await f.getByLabel('Revision Num:').first().inputValue();
  const locked = (await f.getByLabel('Locked By:').first().inputValue()).length > 0;
  const btns = (await f.locator('.x-btn:visible').allInnerTexts()).filter(b => /Check|Undo/.test(b));
  await f.locator('.x-tab-inner', { hasText: /^Properties$/ }).first().click(); await page.waitForTimeout(2500);
  const props = (await f.locator('.x-grid-item:visible').allInnerTexts()).map(r => r.replace(/\s+/g, ' ').trim()).filter(r => r && !/^\d+$/.test(r));
  await page.screenshot({ path: 'C:/AI/mongoose-factory/evidence/BLD-018/06-' + NAME + '-checked-in-properties.png', mask: [f.locator('text=/@/')], maskColor: '#000' });
  return { notice, rev, locked, btns, props: props.slice(0, 30) };
}
