# Quick Start Guide - Running Tests Locally

## ⚠️ Important: Directory Setup

**Always run Playwright commands from the `tests/` directory!**

## Step-by-Step

### 1. Navigate to tests directory
```bash
cd /Users/luisim/Documents/CV/tests
```

### 2. Start the local server (in a separate terminal)
```bash
# From the CV root directory
cd /Users/luisim/Documents/CV
python3 -m http.server 8000
```

Keep this running in a separate terminal window.

### 3. Run tests (from tests directory)
```bash
# Make sure you're in the tests directory
cd /Users/luisim/Documents/CV/tests

# Run all tests
npm test

# Run specific test file
npx playwright test tests/homepage.spec.ts

# Run with visible browser (headed mode)
npx playwright test tests/homepage.spec.ts --headed

# Run only smoke tests
npm run test:smoke
```

## Common Commands

| Command | Description |
|---------|-------------|
| `npm test` | Run all tests |
| `npm run test:headed` | Run all tests with visible browser |
| `npm run test:smoke` | Run only smoke tests |
| `npm run test:debug` | Run in debug mode |
| `npx playwright test tests/homepage.spec.ts --headed` | Run specific test file with browser visible |

## Troubleshooting

### Error: "Playwright Test did not expect test.describe() to be called here"
**Solution:** Make sure you're running the command from the `tests/` directory, not from the root CV directory.

### Error: "Connection refused" or "Navigation timeout"
**Solution:** Make sure the local server is running on port 8000:
```bash
cd /Users/luisim/Documents/CV
python3 -m http.server 8000
```

### Error: "No tests found"
**Solution:** 
1. Make sure you're in the `tests/` directory
2. Check that test files exist: `ls tests/*.spec.ts`
3. Use the correct path: `npx playwright test tests/homepage.spec.ts`

## Directory Structure

```
CV/
├── index.html          # Your website (served on localhost:8000)
└── tests/              # ← Run commands from HERE
    ├── tests/          # Test files
    │   ├── homepage.spec.ts
    │   ├── navigation.spec.ts
    │   └── skills.spec.ts
    ├── pages/          # Page Object Model
    ├── utils/          # Test utilities
    ├── playwright.config.ts
    └── package.json
```

---

**Remember: Always `cd tests` first!** 🎯

