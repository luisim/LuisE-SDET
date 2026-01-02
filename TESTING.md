# Testing Guide

## 🧪 Running Tests

### Automatically (GitHub Actions)

Tests run automatically on:
- ✅ **Every push** to `main` or `develop` branches
- ✅ **Every Pull Request** to `main` or `develop` branches

**No action needed** - just push your code and check the Actions tab!

### Manually (Local Development)

**⚠️ Important: Always run commands from the `tests/` directory!**

```bash
# Navigate to tests directory (REQUIRED)
cd tests

# Install dependencies (first time only)
npm install

# Install Playwright browsers (first time only)
npx playwright install

# Start local server (in separate terminal, from CV root)
cd ..
python3 -m http.server 8000

# Back in tests directory, run all tests
npm test

# Run specific test file
npx playwright test tests/homepage.spec.ts

# Run tests in headed mode (see browser)
npm run test:headed

# Run specific test in headed mode
npx playwright test tests/homepage.spec.ts --headed

# Run only smoke tests
npm run test:smoke

# Run tests in UI mode (interactive)
npm run test:ui

# Run tests in debug mode
npm run test:debug
```

### Specific Browsers

```bash
# Chrome/Chromium only
npm run test:chrome

# Firefox only
npm run test:firefox

# Safari/WebKit only
npm run test:webkit

# All browsers
npm run test:all-browsers
```

## 📊 Viewing Test Results

### In GitHub Actions

1. Go to your repository on GitHub
2. Click the **Actions** tab
3. Click on the latest workflow run
4. See test results for each browser
5. Download artifacts (screenshots, videos, reports)

### Local Test Reports

After running tests locally:

```bash
# View HTML report
npm run test:report
```

Opens an interactive HTML report with:
- Test results
- Screenshots
- Videos
- Execution timeline

## 🎯 Test Organization

Tests are organized by:
- **Tags**: `@smoke`, `@regression`
- **Files**: `homepage.spec.ts`, `navigation.spec.ts`, `skills.spec.ts`

## 📝 Writing New Tests

See `tests/README.md` for complete documentation on:
- Page Object Model pattern
- Test structure
- Best practices
- Examples

## 🔍 Debugging Failed Tests

1. **Check GitHub Actions logs** for error messages
2. **Download artifacts** (screenshots/videos) from failed runs
3. **Run locally** to reproduce:
   ```bash
   cd tests
   npm test -- --grep "test name"
   ```
4. **Use debug mode**:
   ```bash
   npm run test:debug
   ```

## ⚡ Quick Commands Reference

| Command | Description |
|---------|-------------|
| `npm test` | Run all tests |
| `npm run test:smoke` | Run only smoke tests |
| `npm run test:headed` | Run with visible browser |
| `npm run test:ui` | Interactive test UI |
| `npm run test:debug` | Debug mode |
| `npm run test:report` | View HTML report |
| `npm run lint` | Check code quality |

---

**Tests run automatically on every push - check the Actions tab!** ✅

