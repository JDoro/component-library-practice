const { getJestConfig } = require('@storybook/test-runner');

// The default Jest configuration comes from @storybook/test-runner
const testRunnerConfig = getJestConfig();

/**
 * @type {import('@jest/types').Config.InitialOptions}
 */
module.exports = {
  ...testRunnerConfig,
  /** Add your own overrides below, and make sure
   *  to merge testRunnerConfig properties with your own
   * @see https://jestjs.io/docs/configuration
   */
  testEnvironmentOptions: {
    ...testRunnerConfig.testEnvironmentOptions,
    'jest-playwright': {
      ...testRunnerConfig.testEnvironmentOptions?.['jest-playwright'],
      launchOptions: {
        ...testRunnerConfig.testEnvironmentOptions?.['jest-playwright']?.launchOptions,
        executablePath: '/usr/bin/google-chrome',
        args: [
          '--headless=new', // Use new headless mode
          '--no-sandbox',
          '--disable-setuid-sandbox',
          '--disable-dev-shm-usage',
          '--disable-web-security',
          '--disable-gpu',
        ],
      },
    },
  },
};
