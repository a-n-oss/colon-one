const { test, expect } = require('@playwright/test');
const path = require('path');

test('Back to Top button appears and scrolls to top', async ({ page }) => {
  // Load the test.html file directly
  // Note: For a real extension test, we'd load the extension, but here we are testing the logic
  // via the provided test.html which simulates the environment or we inject the script.
  // Given test.html includes content.js, we can test it directly by opening the file.
  
  const testFilePath = `file://${path.resolve(__dirname, '../test.html')}`;
  await page.goto(testFilePath);

  // Initial state: Button should not be visible (or not exist yet)
  // The content.js appends the button. 
  // We need to wait for it to be attached if it's dynamic, 
  // but content.js usually runs on load. 
  // Let's check if the button exists and is hidden or not there.
  
  // Note: content.js implementation details might require scrolling first.
  // Looking at the README: "The button appears only after scrolling down."

  // Scroll down
  await page.evaluate(() => window.scrollTo(0, 1000));

  // Wait for button to be visible using the ID from content.js
  const button = page.locator('#colon-one-back-to-top');
  await expect(button).toBeVisible();

  // Click the button
  await button.click();

  // Verify scroll position returns to top
  // Wait for scrollY to be 0
  await page.waitForFunction(() => window.scrollY === 0);
  
  // Verify button handles visibility correctly (optional check)
  // It takes a moment for scroll event to fire and class to remove
  await expect(button).not.toHaveClass(/visible/);
});
