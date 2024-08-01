import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl:
      'http://simple-weather-app-lb-241685495.ap-southeast-1.elb.amazonaws.com/',
    supportFile: false,
    setupNodeEvents() {},
  },
});
