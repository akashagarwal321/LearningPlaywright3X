import { test, expect } from '@playwright/test';

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });


// test('test from codegen', async ({ page }) => {
//   await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter');

//   await page.getByRole('textbox', { name: 'Email Address' }).fill('test');

//   await page.getByRole('textbox', { name: 'Password' }).fill('akash');

//   await page.getByTestId('login-button').click();
// });


test("Negative Test",async ({page})=>{

  await page.goto("https://www.google.com");

  expect(page.title()).toBe(/Google/);
  //await page.waitForTimeout(10000);
});