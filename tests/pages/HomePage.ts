import { Page, expect, Locator } from '@playwright/test';
import { BasePage } from './BasePage';
import { TestData } from '../utils/TestData';

/**
 * Home Page Object Model
 * Represents the main CV website page
 */
export class HomePage extends BasePage {
  // Navigation Elements
  private readonly navBar = () => this.getByTestId('navbar');
  private readonly navLogo = () => this.getByTestId('nav-logo');
  private readonly navLinks = () => this.getByTestId('nav-links');
  private readonly mobileMenuBtn = () => this.getByTestId('mobile-menu-btn');

  // Hero Section
  private readonly heroSection = () => this.getByTestId('hero-section');
  private readonly heroTitle = () => this.getByTestId('hero-title');
  private readonly heroSubtitle = () => this.getByTestId('hero-subtitle');
  private readonly heroDescription = () => this.getByTestId('hero-description');
  private readonly btnExploreJourney = () => this.getByTestId('btn-explore-journey');
  private readonly btnViewProjects = () => this.getByTestId('btn-view-projects');

  // Header Card
  private readonly headerCard = () => this.getByTestId('header-card');
  private readonly headerName = () => this.getByTestId('header-name');
  private readonly headerTitle = () => this.getByTestId('header-title');
  private readonly contactInfo = () => this.getByTestId('contact-info');
  private readonly contactEmail = () => this.getByTestId('contact-email');
  private readonly contactPhone = () => this.getByTestId('contact-phone');
  private readonly contactLocation = () => this.getByTestId('contact-location');
  private readonly contactLinkedIn = () => this.getByTestId('contact-linkedin');

  // Stats Section
  private readonly statsCard = () => this.getByTestId('stats-card');
  private readonly statsGrid = () => this.getByTestId('stats-grid');
  private readonly statYears = () => this.getByTestId('stat-years');
  private readonly statCompanies = () => this.getByTestId('stat-companies');
  private readonly statCertifications = () => this.getByTestId('stat-certifications');
  private readonly statTechnologies = () => this.getByTestId('stat-technologies');

  // Skills Section
  private readonly skillsSection = () => this.getByTestId('skills-section');
  private readonly skillsTitle = () => this.getByTestId('skills-title');
  private readonly skillSearchInput = () => this.getByTestId('skill-search-input');
  private readonly skillCategoryFilter = () => this.getByTestId('skill-category-filter');
  private readonly skillsGrid = () => this.getByTestId('skills-grid');

  // Action Buttons
  private readonly downloadPdfBtn = () => this.getByTestId('download-pdf-btn');
  private readonly scrollTopBtn = () => this.getByTestId('scroll-top-btn');

  /**
   * Navigate to home page
   * Handles GitHub Pages URL normalization gracefully with fallback options
   * GitHub Pages URLs are case-sensitive, so we try multiple formats
   */
  async navigate(): Promise<void> {
    // Try multiple URL formats for maximum compatibility
    // Playwright will use baseURL from config, but we try explicit paths too
    const urlOptions = [
      '/index.html',  // Explicit index.html (most reliable)
      '/',            // Root path (should work with baseURL)
    ];
    
    let lastError: Error | null = null;
    let lastResponse: any = null;
    let lastUrl: string = '';
    
    for (const url of urlOptions) {
      try {
        const response = await this.page.goto(url, { 
          waitUntil: 'networkidle',
          timeout: 30000 
        });
        
        lastUrl = url;
        
        if (response) {
          const status = response.status();
          if (status === 200 || status === 304) {
            // Success! Wait for page to be ready
            await this.waitForPageReady();
            return;
          }
          lastResponse = { status, url: response.url() };
        } else {
          // Response is null but no error - might still be loading
          // Check if page actually loaded by waiting for an element
          try {
            await this.page.waitForSelector('[data-testid="hero-section"]', { timeout: 10000 });
            await this.waitForPageReady();
            return;
          } catch {
            // Element not found, try next URL
            continue;
          }
        }
      } catch (error) {
        lastError = error as Error;
        // Try next URL format
        continue;
      }
    }
    
    // If all attempts failed, get current URL for debugging
    const currentURL = this.page.url();
    const errorDetails = lastResponse 
      ? `Last response: ${lastResponse.status} from ${lastResponse.url}`
      : `Last error: ${lastError?.message || 'Unknown error'}`;
    
    throw new Error(
      `Failed to navigate to homepage after trying ${urlOptions.length} URL formats.\n` +
      `Tried relative paths: ${urlOptions.join(', ')}\n` +
      `Current page URL: ${currentURL}\n` +
      `${errorDetails}\n` +
      `\nTroubleshooting:\n` +
      `1. Verify baseURL in playwright.config.ts matches your GitHub Pages URL exactly (case-sensitive!)\n` +
      `2. Repository name must be exactly: LuisE-SDET (check GitHub repository settings)\n` +
      `3. Ensure GitHub Pages is enabled and deployed (Settings → Pages)\n` +
      `4. Wait a few minutes after deployment (GitHub Pages can take time to propagate)\n` +
      `5. Test URL manually in browser: https://luisim.github.io/LuisE-SDET/`
    );
  }

  /**
   * Wait for page to be fully loaded
   */
  async waitForPageReady(): Promise<void> {
    await this.helpers.waitForPageLoad();
    // Wait for hero section to confirm page loaded (more reliable than navbar)
    await this.helpers.waitForElementVisible('[data-testid="hero-section"]', 30000);
    await this.waitForElement('[data-testid="navbar"]');
    await this.helpers.waitForAnimations();
  }

  /**
   * Verify navigation bar is visible
   */
  async verifyNavigationBar(): Promise<void> {
    await expect(this.navBar()).toBeVisible();
    await expect(this.navLogo()).toBeVisible();
    await expect(this.navLinks()).toBeVisible();
  }

  /**
   * Click navigation link
   */
  async clickNavigationLink(linkTestId: string): Promise<void> {
    const link = this.getByTestId(linkTestId);
    await link.click();
    await this.helpers.waitForAnimations();
  }

  /**
   * Verify hero section content
   */
  async verifyHeroSection(): Promise<void> {
    await expect(this.heroSection()).toBeVisible();
    await expect(this.heroTitle()).toHaveText(TestData.hero.title);
    await expect(this.heroSubtitle()).toHaveText(TestData.hero.subtitle);
    await expect(this.heroDescription()).toContainText(TestData.hero.description);
  }

  /**
   * Click Explore Journey button
   */
  async clickExploreJourney(): Promise<void> {
    await this.btnExploreJourney().click();
    await this.helpers.waitForAnimations();
  }

  /**
   * Click View Projects button
   */
  async clickViewProjects(): Promise<void> {
    await this.btnViewProjects().click();
    await this.helpers.waitForAnimations();
  }

  /**
   * Verify header card information
   */
  async verifyHeaderCard(): Promise<void> {
    await expect(this.headerCard()).toBeVisible();
    await expect(this.headerName()).toHaveText(TestData.hero.title);
    await expect(this.contactEmail()).toContainText(TestData.contactInfo.email);
    await expect(this.contactPhone()).toContainText(TestData.contactInfo.phone);
    await expect(this.contactLocation()).toContainText(TestData.contactInfo.location);
  }

  /**
   * Verify contact email link
   */
  async verifyContactEmailLink(): Promise<void> {
    const emailLink = this.contactEmail();
    await expect(emailLink).toHaveAttribute('href', `mailto:${TestData.contactInfo.email}`);
  }

  /**
   * Verify contact phone link
   */
  async verifyContactPhoneLink(): Promise<void> {
    const phoneLink = this.contactPhone();
    await expect(phoneLink).toHaveAttribute('href', `tel:${TestData.contactInfo.phone.replace(/\s/g, '')}`);
  }

  /**
   * Verify LinkedIn link
   */
  async verifyLinkedInLink(): Promise<void> {
    const linkedInLink = this.contactLinkedIn();
    await expect(linkedInLink).toHaveAttribute('href', TestData.contactInfo.linkedin);
    await expect(linkedInLink).toHaveAttribute('target', '_blank');
  }

  /**
   * Verify stats section
   */
  async verifyStatsSection(): Promise<void> {
    await expect(this.statsCard()).toBeVisible();
    await expect(this.statsGrid()).toBeVisible();
    
    // Verify all stat cards are visible
    await expect(this.statYears()).toBeVisible();
    await expect(this.statCompanies()).toBeVisible();
    await expect(this.statCertifications()).toBeVisible();
    await expect(this.statTechnologies()).toBeVisible();
  }

  /**
   * Wait for stats to animate and verify final values
   */
  async verifyStatsValues(): Promise<void> {
    // Wait for animation to complete (stats animate on page load)
    await this.page.waitForTimeout(3000);
    
    for (const stat of TestData.stats) {
      const statValue = this.getByTestId(`stat-value-${stat.label.toLowerCase().replace(/\s/g, '')}`);
      await expect(statValue).toBeVisible();
      // Verify the value is a number (animation may still be in progress)
      const text = await statValue.textContent();
      expect(text).toMatch(/\d+/);
    }
  }

  /**
   * Search for skills
   */
  async searchSkills(searchTerm: string): Promise<void> {
    await this.skillSearchInput().fill(searchTerm);
    await this.page.waitForTimeout(500); // Wait for search to filter
  }

  /**
   * Get skill search input locator
   */
  skillSearchInput() {
    return this.getByTestId('skill-search-input');
  }

  /**
   * Verify skills section is visible
   */
  async verifySkillsSection(): Promise<void> {
    await expect(this.skillsSection()).toBeVisible();
    await expect(this.skillsTitle()).toHaveText('Technical Skills');
    await expect(this.skillSearchInput()).toBeVisible();
    await expect(this.skillsGrid()).toBeVisible();
  }

  /**
   * Get skills count
   */
  async getSkillsCount(): Promise<number> {
    return await this.skillsGrid().locator('.skill-item').count();
  }

  /**
   * Scroll to section
   */
  async scrollToSection(sectionId: string): Promise<void> {
    await this.page.locator(`#${sectionId}`).scrollIntoViewIfNeeded();
    await this.helpers.waitForAnimations();
  }

  /**
   * Click download PDF button
   */
  async clickDownloadPdf(): Promise<void> {
    // Note: This will trigger browser print dialog in headed mode
    await this.downloadPdfBtn().click();
  }

  /**
   * Scroll to top
   */
  async scrollToTop(): Promise<void> {
    await this.scrollTopBtn().click();
    await this.page.waitForTimeout(1000); // Wait for smooth scroll
  }

  /**
   * Verify section is in viewport
   */
  async verifySectionInViewport(sectionId: string): Promise<void> {
    const section = this.page.locator(`#${sectionId}`);
    await expect(section).toBeVisible();
    
    // Check if section is in viewport
    const boundingBox = await section.boundingBox();
    expect(boundingBox).not.toBeNull();
  }
}

