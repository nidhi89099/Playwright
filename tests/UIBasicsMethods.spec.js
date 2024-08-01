const{test, expect} = require('@playwright/test');
test('Browser Playwright Test', async({page})=>{
  await page.goto("https://rahulshettyacademy.com/client/auth/login");
  
});