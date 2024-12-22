import { test, expect } from '@playwright/test'
// https://playwright.dev/docs/pom
import { GithubHomePage } from './06-github-home';
test.describe('OB-05. POM', { tag: ['@onboarding'] }, () => {
  // TODO:
  // Create a Page Object Model for the github.com website (04-GithubHome.ts)
  // - [ ] Create a page object for the home page
  // - [ ] Define some locators and methods for the home page
  // - [ ] Write the same test as you did in the previous exercises using the POM

  let githubHome: GithubHomePage

  test.beforeEach(async ({ page }) => {
    githubHome = new GithubHomePage(page)
    await githubHome.goto()
  })

  test('TC-01: Logo should be attached', async () => {
    await expect(githubHome.logo).toBeAttached()
  })

  test('TC-02: Sign in button should be visible', async () => {
    await expect(githubHome.signInButton).toBeVisible()
  })

  test('TC-03: Page should have correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/GitHub/)
  })

  test('TC-04: Page should have correct URL', async ({ page }) => {
    await expect(page).toHaveURL('https://github.com')
  })

  test('TC-05: Hero section should contain text', async () => {
    await expect(githubHome.heroText).toContainText(
      'Build and ship software on a single',
    )
  })

  test('TC-06: Sign up button should have correct href', async () => {
    const signUpHref = await githubHome.getSignUpHref()
    expect(signUpHref).toMatch(/^\/signup/)
  })

  test('TC-07: Header should have correct class', async () => {
    await expect(githubHome.header).toHaveClass(/header-logged-out/)
  })

  test('TC-08: Sign in button should be enabled', async () => {
    await expect(githubHome.signInButton).toBeEnabled()
  })

  test('TC-09: Mobile menu should be hidden by default', async () => {
    await expect(githubHome.mobileMenu).toBeHidden()
  })

  test('TC-10: Search input should be empty in search page', async () => {
    await githubHome.gotoSearchPage();
    await expect(githubHome.searchBox).toBeEmpty();
  });

  test('TC-11: Sign in button should have accessible name', async () => {
    await expect(githubHome.signInButton).toHaveAccessibleName('Sign in');
  });

  test('TC-12: Sign in link should be truthy', async () => {
    const href = await githubHome.getSignInHref();
    expect(href).toBeTruthy();
  });

  test('TC-13: Sign up link should match regex', async () => {
    const href = await githubHome.getSignUpHref();
    expect(href).toMatch(/^\/signup/);
  });
})
