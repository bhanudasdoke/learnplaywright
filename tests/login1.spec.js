import {test, expect} from '@playwright/test'
test ("login page demo Invalid Login", async({page})=>{
await page.goto ("https://www.saucedemo.com/");
await page.locator ("[id='user-name']").fill("admin");
await page.locator ("#password").fill("admin");
await page.locator ("[data-test='login-button']").click("middle");
console.log(await page.locator ("h3[data-test='error']").textContent()); 
await expect(page.locator("h3[data-test='error']")).toContainText("do not match");

})

test ("login page Valid Login", async({page})=>{
    await page.goto ("https://www.saucedemo.com/");
    await page.locator ("[id='user-name']").fill("standard_user");
    await page.locator ("#password").fill("secret_sauce");
    await page.locator ("[data-test='login-button']").click("middle");
    await expect(page).toHaveTitle("Swag Labs");
    await page.pause();
    
})