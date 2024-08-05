// handling select dropdown, popup , radio button
const{test, expect} = require('@playwright/test');
  test('Browser Playwright Test', async({page})=>{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    const documentLink = page.locator("[href*= 'documents-request']");

    await page.locator(".radiotextsty").last().click(); // radio button
    await expect(page.locator(".radiotextsty").last()).toBeChecked(); //assertion to check the radio button is clicked
   console.log(await page.locator(".radiotextsty").last().isChecked()); // another way to check the radio button is clicked get the boolean value
    await page.locator("#okayBtn").click();
    await page.locator("select.form-control").selectOption("Consultant"); // select dropdown
    //checkbox
    await page.locator("#terms").click(); //check
    await expect(page.locator("#terms")).toBeChecked(); //Assertion
    await page.locator("#terms").uncheck(); //uncheck
    await expect(page.locator("#terms")).not.toBeChecked(); //Assertion

    //blinking text
    await expect(documentLink).toHaveAttribute('class','blinkingText');

    
   // await page.pause();

  });