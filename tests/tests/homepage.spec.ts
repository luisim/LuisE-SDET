import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

/**
 * Simplified Homepage Test Suite
 * Focus on critical smoke tests to get CI/CD working
 * Uses Page Object Model (POM) pattern
 */
test.describe('Homepage Smoke Tests', () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.navigate();
  });

  test('@smoke Should load homepage successfully', async () => {
    // Verify page title
    await expect(homePage.getTitle()).resolves.toContain('Luis Escobar');
    
    // Verify navigation bar is visible
    await homePage.verifyNavigationBar();
    
    // Verify hero section
    await homePage.verifyHeroSection();
  });

  test('@smoke Should display hero section with correct content', async () => {
    await homePage.verifyHeroSection();
    
    // Verify hero buttons are visible
    await expect(homePage.getByTestId('btn-explore-journey')).toBeVisible();
    await expect(homePage.getByTestId('btn-view-projects')).toBeVisible();
  });

  test('@smoke Should navigate to summary section via Explore Journey button', async () => {
    await homePage.clickExploreJourney();
    await homePage.verifySectionInViewport('summary');
  });
});
