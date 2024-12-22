// Import the fixture from the 07-fixture file not from @playwright/test
import { test } from './07-fixture'
import { expect } from '@playwright/test'

test.describe('OB-06. Fixtures', { tag: ['@onboarding'] }, () => {

  // TODO:
  // - [ ] Use the fixture and write the same test as in 03-write-test.spec.ts
  
  // 06-01. Test for Playwright page title
  test('should verify page title contains Playwright', async ({ page }) => {
    await page.goto('https://playwright.dev')
    const title = await page.title()
    console.log(title)
    expect(title).toContain('Playwright')
  })

  // 06-02. Group of Tests for GitHub
  test.describe('https://github.com', { tag: ['@onboarding'] }, () => {
    const url = 'https://github.com'

    // GitHub homepage title test
    test('should verify page title contains GitHub', async ({ page }) => {
      await page.goto(url)
      const header = await page.locator('h1#hero-section-brand-heading')
      console.log(await header.textContent())
      await expect(header).toHaveText(
        'Build and ship software on a single, collaborative platform',
      )
    })

    // Going to pricing page test
    test('should navigate to the Pricing page and verify the page title', async ({ page }) => {
      await page.goto(url)
      await page.getByLabel('Search or jump to…').click()
      await page.getByText('Pricing Learn More').click()
      const title = await page.title()
      console.log(title)
      expect(title).toContain('Pricing')
    })
  })
})
