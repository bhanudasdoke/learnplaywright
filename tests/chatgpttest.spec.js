const {test, expect, chromium} = require('@playwright/test')

test('my 1st playwright test', async({browser})=>{
   
      const context = await browser.newContext(); // Launch browser instance
      const page = await browser.newPage();  // Create a new page
    
      await page.goto('https://www.example.com'); // Navigate to the desired URL
    
      // Do something with the page (interact with elements, etc.)
      await page.pause();
    
      await browser.close(); // Close the browser instance
 
    });