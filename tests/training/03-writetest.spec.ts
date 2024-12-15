/**
 * 02. WRITE TEST
 */

import { test, expect } from '@playwright/test'

// 02-01. Test
// TODO: Check how `pwtest` snippet works
test(
  'should verify page title contains Playwright',
  { tag: ['@onboarding'] },
  async ({ page }) => {
    // TODO: Go to the URL `https://playwright.dev` and verify the page title contains 'Playwright'
    // (For example title is: "Fast and reliable end-to-end testing for modern web apps | Playwright") and contains 'Playwright'

    await page.goto('https://playwright.dev')
    const title = await page.title()
    console.log(title)
    expect(title).toContain('Playwright')
  },
)

/**
 * ========================================================================
 */

// 02-02. Group of Tests
// TODO: Check how `pwdescribe` snippet works

test.describe('https://github.com', { tag: ['@onboarding'] }, () => {
  const url = 'https://github.com'

  //   TODO:
  // - [ ] Write `pwtest` snippet to generate a test code block
  // - [ ] Update the test title to "should display page title"
  // - [ ] Goto the URL https://github.com
  // - [ ] Verify the first title element (h1) has the correct text

  test('should verify page title contains GitHub', async ({ page }) => {
    await page.goto(url)
    const header = await page.locator('h1#hero-section-brand-heading')
    console.log(await header.textContent())
    await expect(header).toHaveText(
      'Build and ship software on a single, collaborative platform',
    )
  })

  // TODO:
  // - [ ] Write `pwtest` snippet to generate a test code block
  // - [ ] Update the test title to "should jump to the pricing page"
  // - [ ] Goto the URL https://github.com
  // - [ ] Click the "Search or jump to…" input field
  // - [ ] Click the "Pricing" link in the dropdown
  // - [ ] Verify it navigates to the pricing page and the page title (on browser tab) contains 'Pricing'

  test('should navigate to the Pricing page and verify the page title', async ({
    page,
  }) => {
    await page.goto(url)
    await page.getByLabel('Search or jump to…').click()
    await page.getByText('Pricing Learn More').click()
    const title = await page.title()
    console.log(title)
    expect(title).toContain('Pricing')
  })
})
