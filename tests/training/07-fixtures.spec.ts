// Import the fixture from the 07-fixture file not from @playwright/test
import { test } from './07-fixture';
import { expect } from '@playwright/test';

// Test suite for Playwright and GitHub scenarios
test.describe('OB-06. Fixtures', { tag: ['@onboarding'] }, () => {

  // TODO:
  // - [ ] Use the fixture and write the same test as in 03-write-test.spec.ts

  // 06-01. Playwright Page Title Test
  // This test verifies that the Playwright homepage title contains "Playwright"
  test('should verify page title contains Playwright', async ({ page }) => {
    await page.goto('https://playwright.dev');  // Navigate to Playwright.dev
    const title = await page.title();
    console.log(title);
    expect(title).toContain('Playwright');  // Expect title to contain "Playwright"
  });

  // 06-02. Group of Tests for GitHub
  test.describe('https://github.com', { tag: ['@onboarding'] }, () => {
    const url = 'https://github.com';

    // GitHub Homepage Title Test
    // This test verifies that the GitHub homepage contains the expected header text
    test('should verify page title contains GitHub', async ({ githubHomePage }) => {
      await githubHomePage.goto();  // Navigate to GitHub homepage using Page Object
      const headerText = await githubHomePage.getHeaderText();
      console.log(headerText);
      expect(headerText).toContain('Build and ship software on a single, collaborative platform');
    });

    // Going to Pricing Page Test
    // This test verifies the navigation to the Pricing page and checks its title
    test('should navigate to the Pricing page and verify the page title', async ({ githubHomePage }) => {
      await githubHomePage.goto();  // Navigate to GitHub homepage
      await githubHomePage.goToPricing();  // Go to Pricing page
      const title = await githubHomePage.page.title();
      console.log(title);
      expect(title).toContain('Pricing');  // Expect title to contain "Pricing"
    });
  });
});
