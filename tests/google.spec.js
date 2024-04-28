const {test, expect} = require('@playwright/test')

test('my 1st playwright test', async({browser})=>{

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.google.co.in");
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");
});