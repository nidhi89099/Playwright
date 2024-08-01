const{test, expect} = require('@playwright/test');
test('Browser Playwright Test', async({page})=>{
  await page.goto("https://rahulshettyacademy.com/client");
 await page.click(".btn1");
 await page.locator("#firstName").fill("abc1");
  await page.locator("#lastName").fill("xyz1");
  await page.locator("#userEmail").fill("abc1@xyz1");
  await page.locator("#userMobile").fill("1234567890");
  await page.locator("#userPassword").fill("abc1@xyz1");
  await page.locator("#confirmPassword").fill("abc1@xyz1");
  await page.locator("#login").click();
});