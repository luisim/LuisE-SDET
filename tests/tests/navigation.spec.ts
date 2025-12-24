import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { TestData } from '../utils/TestData';

/**
 * Navigation Test Suite
 * Tests all navigation functionality
 */
test.describe('Navigation Tests', () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.navigate();
  });

  test('@smoke Should navigate to About section', async () => {
    await homePage.clickNavigationLink('nav-link-about');
    await homePage.verifySectionInViewport('summary');
  });

  test('@smoke Should navigate to Impact section', async () => {
    await homePage.clickNavigationLink('nav-link-impact');
    await homePage.verifySectionInViewport('impact');
  });

  test('@smoke Should navigate to Skills section', async () => {
    await homePage.clickNavigationLink('nav-link-skills');
    await homePage.verifySectionInViewport('skills');
  });

  test('@smoke Should navigate to Experience section', async () => {
    await homePage.clickNavigationLink('nav-link-experience');
    await homePage.verifySectionInViewport('experience');
  });

  test('@smoke Should navigate to Projects section', async () => {
    await homePage.clickNavigationLink('nav-link-projects');
    await homePage.verifySectionInViewport('projects');
  });

  test('@smoke Should navigate to Certifications section', async () => {
    await homePage.clickNavigationLink('nav-link-certifications');
    await homePage.verifySectionInViewport('certifications');
  });

  test('@smoke Should navigate to Education section', async () => {
    await homePage.clickNavigationLink('nav-link-education');
    await homePage.verifySectionInViewport('education');
  });

  test('@regression Should navigate via logo click to top', async () => {
    // Scroll down first
    await homePage.scrollToSection('experience');
    await homePage.page.waitForTimeout(1000);
    
    // Click logo
    await homePage.getByTestId('nav-logo').click();
    await homePage.page.waitForTimeout(1000);
    
    // Verify we're at the top
    await expect(homePage.getByTestId('hero-section')).toBeVisible();
  });

  test('@regression Should maintain navigation state during scroll', async () => {
    // Verify nav bar is always visible
    for (const link of TestData.navigationLinks) {
      await homePage.clickNavigationLink(link.testId);
      await expect(homePage.getByTestId('navbar')).toBeVisible();
    }
  });
});

