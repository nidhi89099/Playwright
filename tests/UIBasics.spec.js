const {test, expect } = require('@playwright/test');

test('Browser Playwright Test', async({browser})=>{ 
  await new Promise(resolve => setTimeout(resolve, 2000)); 
  //'browser' wrapped in {}braces so that its recognised as playwright feature
// if you dont want to inject anything in newcontext ,you can just add the page fixture(fixture are global varibles)
//open a new browser instance // can be injected plugin, cookies//
const context = await browser.newContext();

//open a new page on which you can open new URL and hit the automation
const page = await context.newPage()
  const userName = page.locator("#username");  

// to go to URL
await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
// verify page of title
  /* console.log(await page.title())
  // verify login functionality by entering invalid details
 await page.locator("#username").fill("learning")

  await page.locator("#password").fill("learning")
  await page.locator("#signInBtn").click()
  // validate the error message when wrong details are entered
  console.log(await page.locator("[style*='block']").textContent())
  //assertion to check the string
  await expect(page.locator("[style*='block']")).toContainText('Incorrect') */
 //************************************************************************ 
 // Verify functionality by entering valid details
 await userName.fill("")
  await userName . fill("rahulshettyacademy")
  await page.locator("#password").fill("learning")
  await page.locator("#signInBtn").click()

  
});

// test('Page Playwright Test', async({page})=>{

//     await page.goto("https://www.google.co.uk/")
//     console.log(await page.title())
//     await expect(page).toHaveTitle("Google")
  
 // });