import { Page, Locator } from '@playwright/test';
import { TestHelpers } from '../utils/TestHelpers';

/**
 * Base Page Object - All page objects should extend this class
 * Implements common functionality and best practices
 */
export abstract class BasePage {
  protected page: Page;
  protected helpers: TestHelpers;

  constructor(page: Page) {
    this.page = page;
    this.helpers = new TestHelpers(page);
  }

  /**
   * Navigate to the page
   */
  abstract navigate(): Promise<void>;

  /**
   * Wait for page to be ready
   */
  abstract waitForPageReady(): Promise<void>;

  /**
   * Get page title
   */
  async getTitle(): Promise<string> {
    return await this.page.title();
  }

  /**
   * Get current URL
   */
  async getUrl(): Promise<string> {
    return this.page.url();
  }

  /**
   * Take screenshot
   */
  async takeScreenshot(name: string): Promise<void> {
    await this.helpers.takeScreenshot(name);
  }

  /**
   * Wait for element to be visible
   */
  protected async waitForElement(selector: string, timeout = 10000): Promise<void> {
    await this.helpers.waitForElementVisible(selector, timeout);
  }

  /**
   * Click element with retry
   */
  protected async clickElement(selector: string): Promise<void> {
    await this.helpers.clickWithRetry(selector);
  }

  /**
   * Get element locator
   */
  protected getLocator(selector: string): Locator {
    return this.page.locator(selector);
  }

  /**
   * Get element by test ID
   */
  protected getByTestId(testId: string): Locator {
    return this.page.locator(`[data-testid="${testId}"]`);
  }

  /**
   * Scroll to element
   */
  protected async scrollTo(selector: string): Promise<void> {
    await this.helpers.scrollToElement(selector);
  }

  /**
   * Verify element is visible
   */
  protected async verifyVisible(selector: string): Promise<void> {
    await this.helpers.verifyVisible(selector);
  }

  /**
   * Get text content
   */
  protected async getText(selector: string): Promise<string> {
    return await this.helpers.getText(selector);
  }
}

