import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: `https://${process.env.HOSTNAME}`,
    // https://playwright.dev/docs/trace-viewer
    // npx playwright show-trace test-results/example-delete-row-chromium/trace.zip
    trace: 'on',
    // Capture screenshot after each test failure.
    // https://playwright.dev/docs/test-use-options#recording-options
    // screenshot: 'only-on-failure',
    // local backend server uses self signed cert
    // https://stackoverflow.com/questions/67048422/ignore-ssl-errors-with-playwright-code-generation
    ignoreHTTPSErrors: true,
    // https://playwrightsolutions.com/how-do-i-access-the-browser-clipboard-with-playwright/
    // permissions: ["clipboard-read"],
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  webServer: [
    {
      cwd: '../backend-axum/',
      command: './r',
      port: 3000,
      // MUST use this server to get the correct db connection!
      reuseExistingServer: false,
      stderr: "ignore",
    },
    {
      cwd: '../frontend-dioxus/',
      command: `./tw`,
    },
    {
      cwd: '../frontend-dioxus/',
      // in truth, ./b MUST be run before ./pwt
      command: `./b`,
      port: 443,
      // MUST already have ./ssl running to create the proper domain to talk to (can't run in here for some reason)
      reuseExistingServer: true,
    },
  ]
});
