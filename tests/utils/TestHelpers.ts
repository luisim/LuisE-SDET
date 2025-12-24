import { Page, expect } from '@playwright/test';

/**
 * Test Helpers - Reusable utility functions for tests
 */
export class TestHelpers {
  constructor(private page: Page) {}

  /**
   * Wait for page to be fully loaded
   */
  async waitForPageLoad(): Promise<void> {
    await this.page.waitForLoadState('networkidle');
    await this.page.waitForLoadState('domcontentloaded');
  }

  /**
   * Wait for element to be visible with custom timeout
   */
  async waitForElementVisible(selector: string, timeout = 10000): Promise<void> {
    await this.page.waitForSelector(selector, { state: 'visible', timeout });
  }

  /**
   * Scroll to element smoothly
   */
  async scrollToElement(selector: string): Promise<void> {
    await this.page.locator(selector).scrollIntoViewIfNeeded();
    await this.page.waitForTimeout(500); // Allow smooth scroll to complete
  }

  /**
   * Take screenshot with timestamp
   */
  async takeScreenshot(name: string): Promise<void> {
    await this.page.screenshot({
      path: `test-results/screenshots/${name}-${Date.now()}.png`,
      fullPage: true,
    });
  }

  /**
   * Wait for animations to complete
   */
  async waitForAnimations(): Promise<void> {
    await this.page.waitForTimeout(1000); // Wait for CSS animations
  }

  /**
   * Verify element text content
   */
  async verifyTextContent(selector: string, expectedText: string): Promise<void> {
    await expect(this.page.locator(selector)).toHaveText(expectedText);
  }

  /**
   * Verify element is visible
   */
  async verifyVisible(selector: string): Promise<void> {
    await expect(this.page.locator(selector)).toBeVisible();
  }

  /**
   * Verify element count
   */
  async verifyElementCount(selector: string, expectedCount: number): Promise<void> {
    await expect(this.page.locator(selector)).toHaveCount(expectedCount);
  }

  /**
   * Get element text
   */
  async getText(selector: string): Promise<string> {
    return await this.page.locator(selector).textContent() || '';
  }

  /**
   * Click element with retry
   */
  async clickWithRetry(selector: string, maxRetries = 3): Promise<void> {
    for (let i = 0; i < maxRetries; i++) {
      try {
        await this.page.locator(selector).click({ timeout: 5000 });
        return;
      } catch (error) {
        if (i === maxRetries - 1) throw error;
        await this.page.waitForTimeout(1000);
      }
    }
  }

  /**
   * Fill input field
   */
  async fillInput(selector: string, value: string): Promise<void> {
    await this.page.locator(selector).fill(value);
  }

  /**
   * Verify URL contains path
   */
  async verifyUrlContains(path: string): Promise<void> {
    await expect(this.page).toHaveURL(new RegExp(path));
  }

  /**
   * Wait for network requests to complete
   */
  async waitForNetworkIdle(): Promise<void> {
    await this.page.waitForLoadState('networkidle');
  }
}

