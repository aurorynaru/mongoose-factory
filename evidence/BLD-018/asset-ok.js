async (page) => {
  // OK the open Edit Browser File dialog (the Global Objects window stays open).
  const ed = page.locator('.x-window:visible').filter({ hasText: 'Edit Browser File' }).last();
  if (!(await ed.count())) return 'STOP: no Edit Browser File dialog';
  await ed.getByRole('button', { name: 'OK', exact: true }).click(); await page.waitForTimeout(1500);
  return { windows: await page.locator('.x-window:visible').count() };
}
