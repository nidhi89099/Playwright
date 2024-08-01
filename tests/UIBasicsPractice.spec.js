const { test, expect } = require('@playwright/test');
test('Browser Playwright Test1', async({page})=>{
  await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
  console.log(await page.title());
  
});