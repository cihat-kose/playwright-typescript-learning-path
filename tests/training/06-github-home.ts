import { Page, Locator } from '@playwright/test';

export class GithubHomePage {
  private page: Page;
  readonly logo: Locator;
  readonly signInButton: Locator;
  readonly signUpButton: Locator;
  readonly heroText: Locator;
  readonly header: Locator;
  readonly mobileMenu: Locator;
  readonly searchBox: Locator;

  constructor(page: Page) {
    this.page = page;
    this.logo = page.locator('a[href="/"]').first();
    this.signInButton = page.getByRole('link', { name: 'Sign in' });
    this.signUpButton = page.getByRole('link', { name: 'Sign up' });
    this.heroText = page.getByRole('heading', {
      name: /Build and ship software on a single/i,
    });
    this.header = page.locator('header').first();
    this.mobileMenu = page.locator('.mobile-menu');
    this.searchBox = page.getByRole('textbox', { name: 'Search GitHub' });
  }

  // Navigate to GitHub home page
  async goto() {
    await this.page.goto('https://github.com');
  }

  // Navigate to the GitHub search page
  async gotoSearchPage() {
    await this.page.goto('https://github.com/search');
  }

  // Navigate to GitHub Pricing page
  async goToPricing() {
    await this.page.getByLabel('Search or jump to…').click();
    await this.page.getByText('Pricing Learn More').click();
  }

  // Get the text content of the main header
  async getHeaderText() {
    return await this.page.textContent('h1#hero-section-brand-heading');
  }

  // Get href attribute of the sign-in button
  async getSignInHref() {
    return await this.signInButton.getAttribute('href');
  }

  // Get href attribute of the sign-up button
  async getSignUpHref() {
    return await this.signUpButton.getAttribute('href');
  }
}
