const { defineConfig } = require("cypress");

module.exports = defineConfig({
  blockHosts: [
    '*.google-analytics.com',
    '*.statuspage.io',
    '*.segment.io',
    '*.intercomcdn.com',
    '*.wootric.com',
  ],
  e2e: {
    baseUrl: "http://localhost:3000",
    experimentalMemoryManagement: true,
    screenshotOnRunFailure: false,
    numTestsKeptInMemory: 4,
    video:false,
    // defaultCommandTimeout: 8000,
    // pageLoadTimeout: 10000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
