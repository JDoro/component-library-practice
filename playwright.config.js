module.exports = {
  use: {
    browserName: 'chromium',
    launchOptions: {
      executablePath: '/usr/bin/google-chrome',
    },
  },
  webServer: {
    command: 'npm run build-storybook && npx http-server storybook-static --port 6006',
    port: 6006,
  },
};