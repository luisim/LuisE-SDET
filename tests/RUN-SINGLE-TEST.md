# Running a Single Test in Headed Mode (Slow)

## 🎯 Run One Test at a Time with Visible Browser

### Option 1: Debug Mode (BEST - Step by Step) ⭐

```bash
# Navigate to tests directory
cd /Users/luisim/Documents/CV/tests

# Opens Playwright Inspector - step through line by line!
npx playwright test tests/homepage.spec.ts --debug
```

**What this does:**
- Opens Playwright Inspector
- Step through code line by line
- See browser actions in real-time
- Pause at any point
- Inspect elements
- See console logs
- View network requests

### Option 2: Slow Motion (via Environment Variable)

```bash
cd /Users/luisim/Documents/CV/tests

# Run with slow motion (1 second delay between actions)
SLOW_MO=1000 npx playwright test tests/homepage.spec.ts --headed --workers 1

# Faster slow motion (500ms delay)
SLOW_MO=500 npx playwright test tests/homepage.spec.ts --headed --workers 1

# Slower (2 second delay)
SLOW_MO=2000 npx playwright test tests/homepage.spec.ts --headed --workers 1
```

**What this does:**
- `--headed` - Shows the browser window
- `SLOW_MO=1000` - Adds 1 second delay between each action
- `--workers 1` - Run one test at a time (no parallel execution)

### Option 3: UI Mode (Interactive Visual Runner)

```bash
cd /Users/luisim/Documents/CV/tests

# Opens Playwright UI - run tests interactively
npx playwright test tests/homepage.spec.ts --ui
```

**UI mode features:**
- ✅ Visual test runner
- ✅ See test results in real-time
- ✅ Watch browser actions
- ✅ Re-run individual tests
- ✅ Time travel debugging

### Option 4: Run One Test at a Time (Sequential)

```bash
cd /Users/luisim/Documents/CV/tests

# Run with 1 worker (no parallel execution)
npx playwright test tests/homepage.spec.ts --headed --workers 1
```

### Option 5: Run Specific Test by Name

```bash
cd /Users/luisim/Documents/CV/tests

# Run only the "Should load homepage successfully" test
npx playwright test tests/homepage.spec.ts --headed --grep "Should load homepage successfully"

# Run with slow motion
SLOW_MO=1000 npx playwright test tests/homepage.spec.ts --headed --grep "Should load homepage successfully" --workers 1
```

## 🎬 Complete Example (Recommended)

```bash
# Terminal 1: Start server
cd /Users/luisim/Documents/CV
python3 -m http.server 8000

# Terminal 2: Run test with slow motion
cd /Users/luisim/Documents/CV/tests
SLOW_MO=1000 npx playwright test tests/homepage.spec.ts --headed --workers 1
```

## 📊 Command Options Explained

| Option | Description |
|--------|-------------|
| `--headed` | Show browser window (default is headless) |
| `SLOW_MO=1000` | Add delay between actions (milliseconds) - set as environment variable |
| `--workers 1` | Run tests sequentially (one at a time) |
| `--grep "text"` | Run only tests matching the text |
| `--debug` | Open Playwright Inspector for step-by-step debugging |
| `--ui` | Open Playwright UI for interactive test running |
| `--timeout 60000` | Increase timeout (milliseconds) |

## 🔍 Watch Specific Actions

### See All Console Logs
```bash
SLOW_MO=1000 npx playwright test tests/homepage.spec.ts --headed --workers 1
# Console logs will appear in the terminal
```

### Pause at Specific Points
Add this in your test code to pause:
```typescript
await page.pause(); // Browser will pause here
```

### Take Screenshots During Test
The test will automatically take screenshots on failure, but you can also add:
```typescript
await page.screenshot({ path: 'screenshot.png' });
```

## 🎯 Recommended Workflow

1. **First time exploring:** Use `--debug` mode ⭐
   ```bash
   npx playwright test tests/homepage.spec.ts --debug
   ```

2. **Watching test flow:** Use `SLOW_MO` environment variable
   ```bash
   SLOW_MO=1000 npx playwright test tests/homepage.spec.ts --headed --workers 1
   ```

3. **Quick verification:** Use `--ui` mode
   ```bash
   npx playwright test tests/homepage.spec.ts --ui
   ```

## 💡 Pro Tips

- **Debug mode is best:** Use `--debug` for step-by-step execution
- **Slow motion value:** Start with `1000` (1 second), adjust as needed
- **Keep browser open:** Add `--headed` to see what's happening
- **One test at a time:** Use `--workers 1` to avoid confusion
- **Pause execution:** Add `await page.pause()` in your test code
- **See network requests:** Use `--debug` mode and check Network tab

## ⚠️ Important Notes

- **Slow motion is NOT a CLI flag** - it must be set via environment variable: `SLOW_MO=1000`
- **Debug mode is the best option** for seeing what's happening step-by-step
- **Always run from `tests/` directory** - not from the root CV directory

---

**Start with debug mode (`--debug`) - it's the best way to see everything step-by-step!** 🚀
