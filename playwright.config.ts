import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',  // Folder containing test files
  testMatch: '**/*.spec.{ts,js}',  // Match all test files with .spec.ts or .spec.js extensions
  timeout: 30000,  // Maximum time for each test
  expect: {
    timeout: 5000,  // Expiration of expectations
  },
  fullyParallel: true,
  retries: 1,  // If the test fails, try 1 more time
  reporter: 'html',
  use: {
    headless: true,
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    /* {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    }, */
  ],
});
