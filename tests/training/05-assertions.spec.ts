import { test, expect } from "@playwright/test";

test.describe("OB-04. Assertions", { tag: ["@onboarding"] }, () => {
  // TODO:
  // - [ ] Read the documentation on https://playwright.dev/docs/test-assertions
  //
  // - [ ] Goto the URL https://github.com
  // Write tests for AT LEAST 10 of the assertions listed below
  // Use different values from the documentation to test the assertions
  //
  // AUTO RETRYING ASSERTIONS
  // await expect(locator).toBeAttached()	Element is attached

  const url = "https://github.com";

  test.beforeEach(async ({ page }) => {
    await page.goto(url);
  });

  test("TC-01: should be attached", async ({ page }) => {
    const logo = page.locator('a[href="/"]').first();
    await expect(logo).toBeAttached();
  });

  test("TC-02: should be visible", async ({ page }) => {
    const signInButton = page.getByRole("link", { name: "Sign in" });
    await expect(signInButton).toBeVisible();
  });

  test("TC-03: should have correct title", async ({ page }) => {
    await expect(page).toHaveTitle(/GitHub/);
  });

  test("TC-04: should have correct URL", async ({ page }) => {
    await expect(page).toHaveURL(url);
  });

  test("TC-05: should contain text", async ({ page }) => {
    const heroText = page.getByRole("heading", {
      name: /Build and ship software on a single/i,
    });
    await expect(heroText).toContainText("Build and ship software on a single");
  });

  test("TC-06: should have attribute", async ({ page }) => {
    const signUpButton = page.getByRole("link", { name: "Sign up" });
    await expect(signUpButton).toHaveAttribute("href", /\/signup/);
  });

  test("TC-07: should have class", async ({ page }) => {
    const header = page.locator("header").first();
    await expect(header).toHaveClass(/header-logged-out/);
  });

  test("TC-08: should have sign-in button enabled", async ({ page }) => {
    const signInButton = page.getByRole("link", { name: "Sign in" });
    await expect(signInButton).toBeEnabled();
  });

  test("TC-09: should have an empty search input in explore page", async ({
    page,
  }) => {
    await page.goto("https://github.com/search");
    const searchBox = page.getByRole("textbox", { name: "Search GitHub" });
    const isSearchBoxVisible = await searchBox.isVisible();
    await expect(searchBox).toBeEmpty();
  });

  test("TC-10: should have accessible name", async ({ page }) => {
    const signInButton = page.getByRole("link", { name: "Sign in" });
    await expect(signInButton).toHaveAccessibleName("Sign in");
  });

  test("TC-11: should hide the mobile menu by default", async ({ page }) => {
    const mobileMenu = page.locator(".mobile-menu");
    await expect(mobileMenu).toBeHidden();
  });

  test("TC-12: should verify if Sign in link is truthy", async ({ page }) => {
    const signInButton = await page
      .getByRole("link", { name: "Sign in" })
      .getAttribute("href");
    expect(signInButton).toBeTruthy();
  });

  test("TC-13: should match Sign up link with regex", async ({ page }) => {
    const signUpButton = await page
      .getByRole("link", { name: "Sign up" })
      .getAttribute("href");
    expect(signUpButton).toMatch(/^\/signup/);
  });

  // await expect(locator).toBeChecked()	Checkbox is checked
  // await expect(locator).toBeDisabled()	Element is disabled
  // await expect(locator).toBeEditable()	Element is editable
  // await expect(locator).toBeEmpty()	Container is empty
  // await expect(locator).toBeEnabled()	Element is enabled
  // await expect(locator).toBeFocused()	Element is focused
  // await expect(locator).toBeHidden()	Element is not visible
  // await expect(locator).toBeInViewport()	Element intersects viewport
  // await expect(locator).toBeVisible()	Element is visible
  // await expect(locator).toContainText()	Element contains text
  // await expect(locator).toHaveAccessibleDescription()	Element has a matching accessible description
  // await expect(locator).toHaveAccessibleName()	Element has a matching accessible name
  // await expect(locator).toHaveAttribute()	Element has a DOM attribute
  // await expect(locator).toHaveClass()	Element has a class property
  // await expect(locator).toHaveCount()	List has exact number of children
  // await expect(locator).toHaveCSS()	Element has CSS property
  // await expect(locator).toHaveId()	Element has an ID
  // await expect(locator).toHaveJSProperty()	Element has a JavaScript property
  // await expect(locator).toHaveRole()	Element has a specific ARIA role
  // await expect(locator).toHaveScreenshot()	Element has a screenshot
  // await expect(locator).toHaveText()	Element matches text
  // await expect(locator).toHaveValue()	Input has a value
  // await expect(locator).toHaveValues()	Select has options selected
  // await expect(page).toHaveScreenshot()	Page has a screenshot
  // await expect(page).toHaveTitle()	Page has a title
  // await expect(page).toHaveURL()	Page has a URL
  // await expect(response).toBeOK()	Response has an OK status
  //
  // NON-RETRYING ASSERTIONS
  // expect(value).toBe()	Value is the same
  // expect(value).toBeCloseTo()	Number is approximately equal
  // expect(value).toBeDefined()	Value is not undefined
  // expect(value).toBeFalsy()	Value is falsy, e.g. false, 0, null, etc.
  // expect(value).toBeGreaterThan()	Number is more than
  // expect(value).toBeGreaterThanOrEqual()	Number is more than or equal
  // expect(value).toBeInstanceOf()	Object is an instance of a class
  // expect(value).toBeLessThan()	Number is less than
  // expect(value).toBeLessThanOrEqual()	Number is less than or equal
  // expect(value).toBeNaN()	Value is NaN
  // expect(value).toBeNull()	Value is null
  // expect(value).toBeTruthy()	Value is truthy, i.e. not false, 0, null, etc.
  // expect(value).toBeUndefined()	Value is undefined
  // expect(value).toContain()	String contains a substring
  // expect(value).toContain()	Array or set contains an element
  // expect(value).toContainEqual()	Array or set contains a similar element
  // expect(value).toEqual()	Value is similar - deep equality and pattern matching
  // expect(value).toHaveLength()	Array or string has length
  // expect(value).toHaveProperty()	Object has a property
  // expect(value).toMatch()	String matches a regular expression
  // expect(value).toMatchObject()	Object contains specified properties
  // expect(value).toStrictEqual()	Value is similar, including property types
  // expect(value).toThrow()	Function throws an error
  // expect(value).any()	Matches any instance of a class/primitive
  // expect(value).anything()	Matches anything
  // expect(value).arrayContaining()	Array contains specific elements
  // expect(value).closeTo()	Number is approximately equal
  // expect(value).objectContaining()	Object contains specific properties
  // expect(value).stringContaining()	String contains a substring
  // expect(value).stringMatching()	String matches a regular expression
});
