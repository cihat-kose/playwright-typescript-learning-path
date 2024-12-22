import { test as base } from '@playwright/test';
import { GithubHomePage } from './06-github-home';

// TODO: Import GithubHome page object

// https://playwright.dev/docs/test-fixtures
// Extend basic test by providing a "githubHomePage" fixture.
export const test = base.extend({
  githubHomePage: async ({ page }, use) => {
    const githubHomePage = new GithubHomePage(page);
    await use(githubHomePage);
  },
});
