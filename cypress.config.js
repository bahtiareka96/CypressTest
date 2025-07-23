const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1280,
    viewportHeight: 720,

    setupNodeEvents(on, config) {
      config.baseUrl = "https://magento.softwaretestingboard.com/";
      config.env.loginUrl = "https://magento.softwaretestingboard.com/customer/account/login/";
      config.env.createUser = "https://magento.softwaretestingboard.com/customer/account/create/";

      // Return the updated config object
      return config;
    },
  },
});
