import {test, expect} from '@playwright/test'
test ("login page demo", async({page})=>{
await page.pause();
await page.goto ("https://www.saucedemo.com/");
await page.locator ("[id='user-name']").fill("standard_user");
await page.locator ("#password").fill("secret_sauce");
await page.locator ("[data-test='login-button']").click("middle");
await expect(page).toHaveTitle("Swag Labs");
await page.pause();

})