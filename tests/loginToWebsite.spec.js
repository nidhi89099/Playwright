const{test, expect} = require('@playwright/test');
  test('Browser Playwright Test', async({page})=>{
    await page.goto("https://rahulshettyacademy.com/client");
   
    await page.locator("#userEmail").fill("abc1"); // // Enter the wrong email and the then wiped out with fill""
    await page.locator("#userEmail").fill("");

    await page.locator("#userEmail").fill("xyz9p@gmail.com");
    await page.locator("#userPassword").fill("Abc1@xyz1");
    await page.locator("#login").click();

    console.log(await page.locator("//b[contains(text(),'ZARA COAT 3')]").textContent()); // get the text os single element in title
    await expect(page.locator("//b[contains(text(),'ZARA COAT 3')]")).toHaveText("ZARA COAT 3"); //assertion to check the string
    await expect(page.locator("//b[contains(text(),'ZARA COAT 3')]")).toContainText("ZARA"); // assertion to check the string

    //get all the elements title
    await page.locator(".card-body b ").first().waitFor();
    const titles = await page.locator(".card-body b ").allTextContents();
    console.log(titles);



  })