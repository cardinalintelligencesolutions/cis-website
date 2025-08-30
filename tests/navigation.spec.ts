import { test, expect } from '@playwright/test';

test.describe('CIS Website Navigation', () => {
  test('should load home page and display hero section', async ({ page }) => {
    await page.goto('http://localhost:3000');
    
    // Check if the page title is correct
    await expect(page).toHaveTitle(/CIS - Cybersecurity & Information Systems/);
    
    // Check if the CIS logo is visible
    await expect(page.locator('img[alt="CIS Logo"]').first()).toBeVisible();
    
    // Check if the hero section text is present
    await expect(page.locator('h1:has-text("Welcome to CIS")')).toBeVisible();
    
    // Check if the "Get Started" button is present
    await expect(page.locator('text=Get Started')).toBeVisible();
    
    // Check if navigation links are present
    await expect(page.locator('nav a:has-text("Home")')).toBeVisible();
    await expect(page.locator('nav a:has-text("Services")')).toBeVisible();
    await expect(page.locator('nav a:has-text("About Us")')).toBeVisible();
    await expect(page.locator('nav a:has-text("Contact")')).toBeVisible();
  });

  test('should navigate to Services page', async ({ page }) => {
    await page.goto('http://localhost:3000');
    
    // Click on Services link
    await page.click('nav a:has-text("Services")');
    
    // Check if we're on the services page
    await expect(page.locator('h1:has-text("Services")')).toBeVisible();
    await expect(page.locator('text=This is the services page content area')).toBeVisible();
    
    // Check if Services link is active (has the active styling)
    await expect(page.locator('nav a:has-text("Services")')).toHaveClass(/text-cis-primary/);
  });

  test('should navigate to About Us page', async ({ page }) => {
    await page.goto('http://localhost:3000');
    
    // Click on About Us link
    await page.click('nav a:has-text("About Us")');
    
    // Check if we're on the about page
    await expect(page.locator('h1:has-text("About Us")')).toBeVisible();
    await expect(page.locator('text=This is the about us page content area')).toBeVisible();
  });

  test('should navigate to Contact page', async ({ page }) => {
    await page.goto('http://localhost:3000');
    
    // Click on Contact link
    await page.click('nav a:has-text("Contact")');
    
    // Check if we're on the contact page
    await expect(page.locator('h1:has-text("Contact")')).toBeVisible();
    await expect(page.locator('text=This is the contact page content area')).toBeVisible();
  });

  test('should display footer with correct information', async ({ page }) => {
    await page.goto('http://localhost:3000');
    
    // Check footer elements
    await expect(page.locator('footer')).toBeVisible();
    await expect(page.locator('footer:has-text("CIS")')).toBeVisible();
    await expect(page.locator('footer:has-text("info@cis.com")')).toBeVisible();
    await expect(page.locator('footer:has-text("2024 CIS - Cybersecurity & Information Systems")')).toBeVisible();
    
    // Check footer links
    await expect(page.locator('footer a:has-text("Home")')).toBeVisible();
    await expect(page.locator('footer a:has-text("Services")')).toBeVisible();
    await expect(page.locator('footer a:has-text("About Us")')).toBeVisible();
    await expect(page.locator('footer a:has-text("Contact")')).toBeVisible();
  });

  test('should have responsive header with logo and navigation', async ({ page }) => {
    await page.goto('http://localhost:3000');
    
    // Check header elements
    await expect(page.locator('header')).toBeVisible();
    await expect(page.locator('header img[alt="CIS Logo"]')).toBeVisible();
    await expect(page.locator('header:has-text("CIS")')).toBeVisible();
    
    // Check that header is sticky
    await expect(page.locator('header')).toHaveClass(/sticky/);
  });
});