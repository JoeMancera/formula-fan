import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:4321/');
  await page.getByRole('link', { name: 'Calendar' }).click();
  await page.getByRole('link', { name: 'Drivers' }).click();
  await page.getByRole('link', { name: 'Teams' }).click();
});