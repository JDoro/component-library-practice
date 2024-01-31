const {getJestConfig} = require('@storybook/test-runner');

const jestConfig = getJestConfig();

const config = {
  ...jestConfig,
  testEnvironment: 'node',
  reporters: [
    "default",
    ["jest-html-reporters", {
      "publicPath": "./html-report",
      "filename": "report.html",
      "expand": true
    }]
  ],
};

module.exports = jestConfig;
