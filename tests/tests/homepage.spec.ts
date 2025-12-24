import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { TestData } from '../utils/TestData';

/**
 * Homepage Test Suite
 * Demonstrates comprehensive E2E testing with Page Object Model
 */
test.describe('Homepage Tests', () => {
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

  test('@regression Should display all navigation links', async () => {
    // Verify all navigation links are present and visible
    for (const link of TestData.navigationLinks) {
      const navLink = homePage.getByTestId(link.testId);
      await expect(navLink).toBeVisible();
      await expect(navLink).toHaveText(link.label);
      await expect(navLink).toHaveAttribute('href', link.href);
    }
  });

  test('@smoke Should navigate to sections via navigation links', async () => {
    // Test navigation to each section
    for (const link of TestData.navigationLinks) {
      await homePage.clickNavigationLink(link.testId);
      await homePage.verifySectionInViewport(link.href.replace('#', ''));
    }
  });

  test('@regression Should display hero section with correct content', async () => {
    await homePage.verifyHeroSection();
    
    // Verify hero buttons are visible and functional
    await expect(homePage.getByTestId('btn-explore-journey')).toBeVisible();
    await expect(homePage.getByTestId('btn-view-projects')).toBeVisible();
  });

  test('@smoke Should navigate to summary section via Explore Journey button', async () => {
    await homePage.clickExploreJourney();
    await homePage.verifySectionInViewport('summary');
  });

  test('@smoke Should navigate to projects section via View Projects button', async () => {
    await homePage.clickViewProjects();
    await homePage.verifySectionInViewport('projects');
  });

  test('@regression Should display header card with contact information', async () => {
    await homePage.verifyHeaderCard();
    await homePage.verifyContactEmailLink();
    await homePage.verifyContactPhoneLink();
    await homePage.verifyLinkedInLink();
  });

  test('@regression Should display and animate stats section', async () => {
    await homePage.verifyStatsSection();
    await homePage.verifyStatsValues();
  });

  test('@regression Should display skills section with search functionality', async () => {
    await homePage.verifySkillsSection();
    
    // Test search functionality
    const initialCount = await homePage.getSkillsCount();
    expect(initialCount).toBeGreaterThan(0);
    
    // Search for a skill
    await homePage.searchSkills('Java');
    await homePage.page.waitForTimeout(1000);
    
    // Verify filtered results
    const filteredCount = await homePage.getSkillsCount();
    expect(filteredCount).toBeGreaterThan(0);
    expect(filteredCount).toBeLessThanOrEqual(initialCount);
  });

  test('@regression Should scroll to top when scroll button is clicked', async () => {
    // Scroll down first
    await homePage.scrollToSection('experience');
    await homePage.page.waitForTimeout(1000);
    
    // Click scroll to top
    await homePage.scrollToTop();
    await homePage.page.waitForTimeout(1000);
    
    // Verify we're at the top (hero section should be visible)
    await expect(homePage.getByTestId('hero-section')).toBeVisible();
  });

  test('@regression Should display all major sections', async () => {
    const sections = [
      'summary',
      'impact',
      'skills',
      'experience',
      'projects',
      'certifications',
      'education',
      'pyramid',
      'radar',
      'pipeline',
      'clients',
      'badges',
    ];

    for (const sectionId of sections) {
      await homePage.scrollToSection(sectionId);
      await homePage.verifySectionInViewport(sectionId);
    }
  });

  test('@regression Should have responsive navigation on mobile', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await homePage.navigate();
    
    // Mobile menu button should be visible
    await expect(homePage.getByTestId('mobile-menu-btn')).toBeVisible();
  });
});

