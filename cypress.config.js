const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'o3hf43',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
