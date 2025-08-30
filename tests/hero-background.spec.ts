import { test, expect } from '@playwright/test';

test.describe('Hero Background Test', () => {
  test('should display hero section with waves.jpeg background', async ({ page }) => {
    await page.goto('http://localhost:3000');
    
    // Check if the hero section exists
    const heroSection = page.locator('section').first();
    await expect(heroSection).toBeVisible();
    
    // Check if the hero section has the waves.jpeg background image
    const backgroundImage = await heroSection.evaluate((el) => {
      const style = window.getComputedStyle(el);
      return style.backgroundImage;
    });
    
    // Verify that waves.jpeg is in the background-image property
    expect(backgroundImage).toContain('waves.jpeg');
    
    // Check if the hero section has the linear gradient overlay
    expect(backgroundImage).toContain('linear-gradient');
    
    // Verify hero content is still visible with proper styling
    await expect(page.locator('h1:has-text("Welcome to CIS")')).toBeVisible();
    await expect(page.locator('text=Get Started')).toBeVisible();
    
    // Check if drop shadow classes are applied to the hero logo (not header logo)
    const heroLogo = page.locator('section img[alt="CIS Logo"]');
    await expect(heroLogo).toBeVisible();
    await expect(heroLogo).toHaveClass(/drop-shadow-lg/);
    
    const heading = page.locator('h1:has-text("Welcome to CIS")');
    await expect(heading).toHaveClass(/drop-shadow-md/);
  });
});