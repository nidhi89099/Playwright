// @ts-check
const {devices } = require('@playwright/test');
import { defineConfig } from '@playwright/test';

const config = {
  testDir: './tests',
  timeout : 30 * 1000,
  expect : {

    timeout : 5000,
  },
  

  reporter: 'html',
  
  use : {
browserName : 'chromium',
//browserName : 'firefox'
//browserName : 'webkit' //safari engine
headless : false,

  },
};
module.exports = config;

  

