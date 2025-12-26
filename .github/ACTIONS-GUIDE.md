# GitHub Actions - Test Automation Guide

## 🚀 How Tests Run Automatically

### Automatic Execution

Tests run automatically on:
- ✅ **Every push** to `main` or `develop` branches
- ✅ **Every Pull Request** to `main` or `develop` branches
- ✅ **Manual trigger** via GitHub Actions UI

### What Happens When You Push

1. **GitHub detects the push** and triggers the workflow
2. **Tests run in parallel** across multiple browsers:
   - Chromium
   - Firefox
   - WebKit (Safari)
3. **Test results are collected** (pass/fail status)
4. **Artifacts are saved** (screenshots, videos on failure)
5. **HTML reports are generated**
6. **Status is updated** (you'll see ✅ or ❌ on your commit)

## 📊 Viewing Test Results

### 1. In GitHub Repository

**After pushing, go to:**
- Repository → **Actions** tab
- Click on the latest workflow run
- See status for each browser test

**You'll see:**
- ✅ Green checkmark = Tests passed
- ❌ Red X = Tests failed
- 🟡 Yellow circle = Tests in progress

### 2. Test Artifacts (Download Results)

1. Go to the workflow run in Actions tab
2. Scroll down to **Artifacts** section
3. Download:
   - `test-results-*` - Test execution results
   - `playwright-report` - HTML report with screenshots
   - `test-videos-*` - Video recordings (only on failures)
   - `test-screenshots-*` - Screenshots (only on failures)

### 3. Test Reports

**HTML Report:**
- Download `playwright-report` artifact
- Extract and open `index.html` in browser
- See detailed test results, screenshots, videos

**In GitHub:**
- Click on any failed test to see:
  - Error messages
  - Screenshots at point of failure
  - Video recordings
  - Stack traces

## 🎯 Test Status Badge

The README shows test status badges that update automatically:
- ✅ Passing = Green badge
- ❌ Failing = Red badge

These update after each test run.

## 🧪 What Tests Run

### Full Test Suite (`ci.yml`)
- Runs on: Chromium, Firefox, WebKit
- Includes: All tests (smoke + regression)
- Duration: ~5-10 minutes
- Triggers: Push, PR

### Smoke Tests (`smoke-tests` job)
- Runs on: Chromium only
- Includes: Only `@smoke` tagged tests
- Duration: ~2-3 minutes
- Purpose: Quick validation of critical paths

## 📝 Test Tags

Tests are organized with tags:

- `@smoke` - Critical path tests (run in smoke test job)
- `@regression` - Full regression suite

**Example in test file:**
```typescript
test('@smoke Should load homepage successfully', async () => {
  // Critical test
});

test('@regression Should display all sections', async () => {
  // Full regression test
});
```

## 🔍 Debugging Failed Tests

### 1. View Error Messages
- Go to Actions → Failed workflow run
- Click on the failed job
- See error output in logs

### 2. Download Artifacts
- Screenshots show what the page looked like when test failed
- Videos show the entire test execution
- Use these to understand what went wrong

### 3. Run Tests Locally

To reproduce failures locally:

```bash
cd tests
npm install
npx playwright install chromium
npm test
```

## ⚙️ Manual Trigger

You can manually trigger tests:

1. Go to **Actions** tab
2. Select **E2E Tests** workflow
3. Click **Run workflow** button
4. Select branch (usually `main`)
5. Click **Run workflow**

## 🔔 Notifications

GitHub will:
- ✅ Show status on your commit (checkmark/X)
- ✅ Email you if tests fail (if enabled in settings)
- ✅ Show status in Pull Requests

## 🚫 Preventing Merges with Failed Tests

To require tests to pass before merging:

1. Go to repository **Settings**
2. Click **Branches**
3. Add branch protection rule for `main`
4. Enable: **Require status checks to pass before merging**
5. Select: `E2E Tests - chromium`, `E2E Tests - firefox`, etc.

## 📈 Test Execution Details

### Parallel Execution
- Tests run in parallel across browsers
- Faster feedback (5-10 min vs 15-30 min sequential)

### Matrix Strategy
```yaml
matrix:
  browser: [chromium, firefox, webkit]
```
- Creates 3 jobs (one per browser)
- All run simultaneously
- Independent results per browser

### Retry Logic
- Built into Playwright config
- Failed tests retry 2 times (on CI)
- Helps with flaky tests

## 💡 Tips

1. **Check Actions tab regularly** after pushing
2. **Download artifacts** when tests fail
3. **Run locally first** before pushing
4. **Use smoke tests** for quick validation
5. **Fix failing tests immediately** to keep main branch green

## 🎓 Understanding Test Results

### Pass Rate
- All tests pass = ✅
- Some tests fail = ❌
- Tests skipped = ⚠️

### Test Duration
- Individual test: Usually < 30 seconds
- Full suite: 5-10 minutes
- Smoke tests: 2-3 minutes

### Browser Coverage
- **Chromium** - Chrome/Edge behavior
- **Firefox** - Firefox behavior  
- **WebKit** - Safari behavior

---

**Tests run automatically on every push - no action needed!** 🚀

Just push your code and check the Actions tab to see results.

