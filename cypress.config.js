const { defineConfig } = require('cypress');

module.exports = {
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: false,
    json: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl: 'https://qauto.forstudy.space',
    specPattern: 'cypress/e2e/**/*.spec.{js,jsx,ts,tsx}', 
    supportFile: false,
    failOnStatusCode: false,
    screenshotOnRunFailure: true,
    video: true,
    viewportHeight: 800,
    viewportWidth: 1300,
    retries: 2,
    defaultCommandTimeout: 5000,
    requestTimeout: 10000,
    responseTimeout: 30000,
  },
};
