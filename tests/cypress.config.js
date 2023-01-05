const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "sjrvkq",
  e2e: {
    baseURL: 'https://www.lipafc.local/test/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});