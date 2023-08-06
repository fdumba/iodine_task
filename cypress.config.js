const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      baseUrl: "https://iodinesoftware.com",
    },
   pageLoadTimeout: 20000,
   defaultCommandTimeout: 10000,
   retries: {
    runMode: 2,
    openMode: 2
   }
  },
});
