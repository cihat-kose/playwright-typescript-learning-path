const { test, expect } = require('@playwright/test');

// Constants for selectors
const SELECTORS = {
    searchBox: '#twotabsearchtextbox',
    searchButton: '#nav-search-submit-button',
    searchResults: '#search',
};

test.describe('Amazon Basic Tests', () => {
    // Navigate to Amazon before each test
    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.amazon.com/');
    });

    test('should have correct title', async ({ page }) => {
        const title = await page.title();
        console.log(title);
        await expect(title).toMatch(/Amazon.com/); //Improved assertion
    });

    test('should search for a product', async ({ page }) => {
        await page.fill(SELECTORS.searchBox, 'laptop');
        await page.click(SELECTORS.searchButton);
        await expect(page.locator(SELECTORS.searchResults)).toContainText('results for "laptop"');
    });
});


