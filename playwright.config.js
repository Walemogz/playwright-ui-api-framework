const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({

  testDir: './tests',

  fullyParallel: false,

  reporter: [
    ['html'],
    ['list'],
    ['allure-playwright']
  ],

  use: {

    baseURL: 'https://automationexercise.com',

    headless: !!process.env.CI,

    viewport: {
      width: 1440,
      height: 900
    },

    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',

    actionTimeout: 15000,
    navigationTimeout: 30000,

    ignoreHTTPSErrors: true,
  },

  timeout: 60000,

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
  ],
});