# GitHub Actions Workflows

This directory contains CI/CD workflows for automated testing and deployment.

## Workflows

### 1. `ci.yml` - E2E Test Automation
**Triggers:** Push to main/develop, Pull Requests, Manual dispatch

**Features:**
- ✅ Multi-browser testing (Chromium, Firefox, WebKit)
- ✅ Parallel test execution
- ✅ Test result artifacts
- ✅ Screenshot/video capture on failure
- ✅ HTML report generation
- ✅ Smoke test suite for critical paths

**Matrix Strategy:**
- Runs tests on multiple browsers simultaneously
- Fails fast disabled to see all test results
- Separate job for test report aggregation

### 2. `lint.yml` - Code Quality
**Triggers:** Push to main/develop, Pull Requests

**Features:**
- ✅ ESLint code analysis
- ✅ Prettier formatting check
- ✅ TypeScript type checking

### 3. `pages-deploy.yml` - GitHub Pages Deployment
**Triggers:** Push to main, Manual dispatch

**Features:**
- ✅ Automatic deployment to GitHub Pages
- ✅ Concurrency control
- ✅ Environment protection

### 4. `test-status.yml` - Test Status Updates
**Triggers:** After E2E Tests workflow completes

**Features:**
- ✅ Test status tracking
- ✅ PR comment updates
- ✅ Badge status updates

## Workflow Status Badges

Add these to your README.md:

```markdown
![E2E Tests](https://github.com/luisim/LuisE-SDET/workflows/E2E%20Tests/badge.svg)
![Code Quality](https://github.com/luisim/LuisE-SDET/workflows/Code%20Quality/badge.svg)
```

## Artifacts

Test artifacts are retained for:
- **Test Results:** 30 days
- **Test Videos:** 7 days (on failure only)
- **Test Screenshots:** 7 days (on failure only)
- **HTML Reports:** 30 days

## Running Tests Locally

```bash
cd tests
npm install
npx playwright install
npm test
```

## CI/CD Best Practices Implemented

✅ **Parallel Execution** - Tests run in parallel for faster feedback
✅ **Matrix Strategy** - Multiple browsers/OS combinations
✅ **Artifact Management** - Test results, videos, screenshots
✅ **Failure Handling** - Continue on error for artifact collection
✅ **Smoke Tests** - Quick validation of critical paths
✅ **Code Quality** - Linting and formatting checks
✅ **Automated Deployment** - GitHub Pages auto-deploy
✅ **Status Reporting** - Test status in PRs
✅ **Retry Logic** - Built into Playwright config
✅ **Environment Variables** - Proper configuration management

## Customization

### Add More Browsers
Edit `ci.yml` matrix:
```yaml
browser: [chromium, firefox, webkit, chrome, msedge]
```

### Add Mobile Testing
```yaml
browser: [chromium, firefox, webkit]
device: [Desktop Chrome, Pixel 5, iPhone 12]
```

### Change Test Triggers
Edit `on:` section in workflow files:
```yaml
on:
  push:
    branches: [ main, develop, feature/* ]
  schedule:
    - cron: '0 0 * * *'  # Daily at midnight
```

---

**Industry-standard CI/CD pipeline ready for production use!** 🚀

