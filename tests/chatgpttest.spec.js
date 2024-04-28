test('my 1st playwright test');
const { chromium } = require('playwright'); // Or 'firefox' or 'webkit'

(async () => {
  const browser = await chromium.launch(); // Launch browser instance
  const page = await browser.newPage();  // Create a new page

  await page.goto('https://www.example.com'); // Navigate to the desired URL

  // Do something with the page (interact with elements, etc.)

  await browser.close(); // Close the browser instance
})();