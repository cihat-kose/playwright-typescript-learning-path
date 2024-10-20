const { test, expect } = require('@playwright/test');

test.describe('AliExpress Search Functionality', () => {
    // Constants for locators
    const SEARCH_INPUT_SELECTOR = '.search--keyword--15P08Ji';
    const SUBMIT_BUTTON_SELECTOR = '//input[@type="button"]';

    // Navigate to AliExpress before each test
    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.aliexpress.com/', { timeout: 50000, waitUntil: 'domcontentloaded' });
    });

    test('Verify that the search input field is visible and active', async ({ page }) => {
        const searchInput = page.locator(SEARCH_INPUT_SELECTOR);
        await expect(searchInput).toBeVisible();
        await expect(searchInput).toBeEnabled();
    });

    test('Search and verify send button', async ({ page }) => {
        const searchInput = page.locator(SEARCH_INPUT_SELECTOR);
        const submitButton = page.locator(SUBMIT_BUTTON_SELECTOR);

        await expect(searchInput).toBeVisible({ timeout: 3000 });
        await searchInput.fill('laptop');
        await expect(submitButton).toBeVisible();
        await submitButton.click();
    });
});