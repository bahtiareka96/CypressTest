const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
  //  "baseUrl" : "https://magento.softwaretestingboard.com/",
  //  "loginUrl" : "https://magento.softwaretestingboard.com/customer/account/login/",

    setupNodeEvents(on, config) {
        config.baseUrl = "https://magento.softwaretestingboard.com/";
      config.env.loginUrl = "https://magento.softwaretestingboard.com/customer/account/login/";

      // Return the updated config object
      return config;
      },
  },
});
