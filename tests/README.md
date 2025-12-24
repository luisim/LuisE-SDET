# CV Website Test Automation Framework

A comprehensive E2E test automation framework built with **TypeScript** and **Playwright**, demonstrating best practices in test automation including Page Object Model, proper element identification, and maintainable test structure.

## 🎯 Features

- ✅ **Page Object Model (POM)** - Clean, maintainable page objects
- ✅ **TypeScript** - Type-safe test code
- ✅ **Playwright** - Fast, reliable browser automation
- ✅ **Proper Element Identification** - Using `data-testid` attributes
- ✅ **Comprehensive Test Coverage** - Smoke and regression tests
- ✅ **CI/CD Ready** - Configured for continuous integration
- ✅ **Multi-Browser Support** - Chrome, Firefox, Safari, Mobile
- ✅ **Test Utilities** - Reusable helper functions
- ✅ **Centralized Test Data** - Easy to maintain test data

## 📁 Project Structure

```
tests/
├── pages/              # Page Object Model classes
│   ├── BasePage.ts     # Base page with common functionality
│   └── HomePage.ts     # Home page object
├── utils/              # Test utilities and helpers
│   ├── TestHelpers.ts  # Reusable helper functions
│   └── TestData.ts     # Centralized test data
├── tests/              # Test specifications
│   ├── homepage.spec.ts
│   ├── navigation.spec.ts
│   └── skills.spec.ts
├── playwright.config.ts # Playwright configuration
├── tsconfig.json       # TypeScript configuration
└── package.json        # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Navigate to the tests directory:
```bash
cd tests
```

2. Install dependencies:
```bash
npm install
```

3. Install Playwright browsers:
```bash
npx playwright install
```

## 🧪 Running Tests

### Run all tests
```bash
npm test
```

### Run tests in headed mode (see browser)
```bash
npm run test:headed
```

### Run tests with UI mode
```bash
npm run test:ui
```

### Run specific test file
```bash
npx playwright test tests/homepage.spec.ts
```

### Run tests by tag
```bash
npm run test:smoke        # Run @smoke tests
npm run test:regression   # Run @regression tests
```

### Run tests in specific browser
```bash
npm run test:chrome
npm run test:firefox
npm run test:webkit
```

### Debug tests
```bash
npm run test:debug
```

## 📊 Test Reports

After running tests, view the HTML report:
```bash
npm run test:report
```

## 🏗️ Architecture

### Page Object Model

Each page has its own Page Object class that:
- Encapsulates page-specific selectors
- Provides methods for page interactions
- Handles wait conditions
- Makes tests readable and maintainable

Example:
```typescript
const homePage = new HomePage(page);
await homePage.navigate();
await homePage.verifyHeroSection();
await homePage.clickExploreJourney();
```

### Element Identification

All interactive elements use `data-testid` attributes for reliable identification:

```html
<button data-testid="download-pdf-btn">Download PDF</button>
```

In tests:
```typescript
this.getByTestId('download-pdf-btn')
```

### Test Data Management

Test data is centralized in `utils/TestData.ts`:
```typescript
export const TestData = {
  contactInfo: { email: '...', phone: '...' },
  stats: [{ label: 'Years Experience', expectedValue: 10 }],
  // ...
};
```

## 📝 Writing Tests

### Basic Test Structure

```typescript
import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test.describe('Feature Tests', () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.navigate();
  });

  test('@smoke Should verify feature', async () => {
    // Arrange
    // Act
    // Assert
  });
});
```

### Test Tags

Use tags to categorize tests:
- `@smoke` - Critical path tests
- `@regression` - Full regression suite

## 🔧 Configuration

### Playwright Config

The `playwright.config.ts` includes:
- Multi-browser support
- Mobile viewports
- Screenshot on failure
- Video on failure
- Automatic local server startup

### Environment Variables

Set `BASE_URL` to override default:
```bash
BASE_URL=http://localhost:8000 npm test
```

## 🎨 Best Practices Demonstrated

1. **Page Object Model** - Separation of concerns
2. **TypeScript** - Type safety and better IDE support
3. **Proper Element IDs** - Using `data-testid` attributes
4. **Test Utilities** - Reusable helper functions
5. **Centralized Data** - Easy to maintain test data
6. **Wait Strategies** - Proper synchronization
7. **Error Handling** - Retry mechanisms
8. **Test Organization** - Logical grouping and tags
9. **CI/CD Ready** - Configured for automation
10. **Documentation** - Clear comments and README

## 📈 CI/CD Integration

The framework is ready for CI/CD integration. Example GitHub Actions:

```yaml
name: E2E Tests
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: cd tests && npm install
      - run: cd tests && npx playwright install
      - run: cd tests && npm test
```

## 🐛 Debugging

1. **Debug Mode**: `npm run test:debug`
2. **UI Mode**: `npm run test:ui`
3. **Screenshots**: Automatically saved on failure
4. **Videos**: Automatically saved on failure
5. **Traces**: Available for failed tests

## 📚 Additional Resources

- [Playwright Documentation](https://playwright.dev)
- [TypeScript Documentation](https://www.typescriptlang.org)
- [Page Object Model Pattern](https://playwright.dev/docs/pom)

## 👤 Author

**Luis Escobar** - Senior SDET

---

*This framework demonstrates professional test automation practices suitable for enterprise-level projects.*

