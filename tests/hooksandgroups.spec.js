import {test, expect} from '@playwright/test'
test.describe("Smoke Test1",()=>{

test.beforeEach(async({page})=>{
    await page.goto("https://bookcart.azurewebsites.net/");

})

test ("1st testcase", async({page})=>{


    await page.locator('mat-card-content').filter({ hasText: 'Harry Potter and the Chamber' }).getByRole('button').click();
    await page.locator('mat-card-content').filter({ hasText: 'Slayer₹1,234.00shopping_cart' }).getByRole('button').click();
    await page.locator('button').filter({ hasText: 'shopping_cart2' }).click();
    await page.getByRole('button', { name: 'CheckOut' }).click();
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill('bhanudoke');
    await page.getByPlaceholder('Username').press('Tab');
    await page.getByPlaceholder('Password').fill('Bhanu@12345');
    await page.getByPlaceholder('Password').press('Tab');
    await page.getByText('visibility_off').click();
    await page.getByText('visibility').click();
    await page.locator('mat-card-actions').getByRole('button', { name: 'Login' }).click();
    await page.getByPlaceholder('Address Line 1').fill('my address1');
    await page.getByPlaceholder('Address Line 1').press('Tab');
    await page.getByPlaceholder('Address Line 2').fill('my address2');
    await page.getByPlaceholder('Address Line 2').press('Tab');
    await page.getByPlaceholder('Pincode').fill('412307');
    await page.getByPlaceholder('Pincode').press('Tab');
    await page.getByPlaceholder('State').fill('Maharashtra');
    await page.getByPlaceholder('Name').click();
    await page.getByPlaceholder('Name').fill('Bhanudas Doke');
    await page.getByRole('button', { name: 'Place Order' }).click();
    await page.getByText('account_circlearrow_drop_down').click();
    await page.getByRole('menuitem', { name: 'My Orders' }).click();
    await page.getByText('account_circlearrow_drop_down').click();
    await page.getByRole('menuitem', { name: 'Logout' }).click();
})

test("2nd testcase", async({page})=>{

    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill('bhanudoke');
    await page.getByPlaceholder('Username').press('Tab');
    await page.getByPlaceholder('Password').fill('Bhanu@12345');
    await page.getByText('visibility_off').click();
    await page.getByText('visibility').click();
    await page.locator('mat-card-actions').getByRole('button', { name: 'Login' }).click();

})
test.afterEach(async({page})=>{
    await page.close();

})
  
})