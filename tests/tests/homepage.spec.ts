import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

/**
 * Simplified Homepage Test Suite
 * Minimal smoke tests to get CI/CD working
 * Uses Page Object Model (POM) pattern
 */
test.describe('Homepage Smoke Tests', () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.navigate();
  });

  test('@smoke Should load homepage successfully', async () => {
    // Verify page title contains name
    const title = await homePage.getTitle();
    expect(title).toContain('Luis Escobar');
    
    // Verify hero section is visible
    await expect(homePage.getByTestId('hero-section')).toBeVisible();
  });
});
