import { test, expect } from '@playwright/test';

test('happy path - login and view team members', async ({ page }) => {
  // Go to protected team profile page
  await page.goto(
    'https://garage-boilerplate-basic-frontend-sigma.vercel.app/teamprofile'
  );

  // Should redirect to login page
  await expect(page).toHaveURL(/auth\/signin/);

  // Fill login details
  await page.getByLabel('Email').fill('s3843519@student.rmit.edu.au');
  await page.locator('#password').fill('Rmit1234!');

  // Click login
  await page
    .getByRole('button', { name: /login|log in|sign in/i })
    .click();

  // Wait for navigation after login
  await page.waitForURL('**/teamprofile', {
    timeout: 15000,
  });

  // Print final URL for debugging
  console.log('Current URL:', page.url());

  // Confirm we are on the team profile page
  await expect(page).toHaveURL(/\/teamprofile$/);

  // Check Team Members heading
  await expect(
    page.getByRole('heading', { name: /team members/i })
  ).toBeVisible({
    timeout: 10000,
  });

  // Check Add Member button
  await expect(
    page.getByRole('button', { name: /add member/i })
  ).toBeVisible();

  console.log('Happy path passed successfully');
});