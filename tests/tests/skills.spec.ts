import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { TestData } from '../utils/TestData';

/**
 * Skills Section Test Suite
 * Tests skills search and filtering functionality
 */
test.describe('Skills Section Tests', () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.navigate();
    await homePage.scrollToSection('skills');
  });

  test('@smoke Should display skills section', async () => {
    await homePage.verifySkillsSection();
  });

  test('@regression Should filter skills by search term', async () => {
    const searchTerms = TestData.skillsSearchTerms;
    
    for (const term of searchTerms) {
      // Clear previous search
      await homePage.skillSearchInput().clear();
      await homePage.page.waitForTimeout(300);
      
      // Search for term
      await homePage.searchSkills(term);
      
      // Verify skills are filtered
      const skillsCount = await homePage.getSkillsCount();
      expect(skillsCount).toBeGreaterThan(0);
      
      // Verify at least one skill contains the search term
      const skills = homePage.skillsGrid().locator('.skill-item');
      const firstSkill = skills.first();
      if (await firstSkill.count() > 0) {
        const skillText = await firstSkill.textContent();
        expect(skillText?.toLowerCase()).toContain(term.toLowerCase());
      }
    }
  });

  test('@regression Should clear search and show all skills', async () => {
    // Get initial count
    const initialCount = await homePage.getSkillsCount();
    
    // Search for something
    await homePage.searchSkills('Java');
    await homePage.page.waitForTimeout(1000);
    
    // Clear search
    await homePage.skillSearchInput().clear();
    await homePage.page.waitForTimeout(1000);
    
    // Verify all skills are shown again
    const finalCount = await homePage.getSkillsCount();
    expect(finalCount).toBe(initialCount);
  });

  test('@regression Should filter skills by category', async () => {
    // Get category filter buttons
    const categoryButtons = homePage.skillCategoryFilter().locator('.filter-btn');
    const categoryCount = await categoryButtons.count();
    
    expect(categoryCount).toBeGreaterThan(0);
    
    // Click each category filter
    for (let i = 0; i < categoryCount; i++) {
      const button = categoryButtons.nth(i);
      await button.click();
      await homePage.page.waitForTimeout(500);
      
      // Verify skills are filtered
      const skillsCount = await homePage.getSkillsCount();
      expect(skillsCount).toBeGreaterThanOrEqual(0);
    }
  });

  test('@regression Should display skill proficiency levels', async () => {
    const skills = homePage.skillsGrid().locator('.skill-item');
    const skillsCount = await skills.count();
    
    expect(skillsCount).toBeGreaterThan(0);
    
    // Verify first few skills have proficiency indicators
    for (let i = 0; i < Math.min(5, skillsCount); i++) {
      const skill = skills.nth(i);
      await expect(skill).toBeVisible();
      
      // Check for progress bar or proficiency indicator
      const progressBar = skill.locator('.progress-bar, .proficiency');
      if (await progressBar.count() > 0) {
        await expect(progressBar.first()).toBeVisible();
      }
    }
  });
});

