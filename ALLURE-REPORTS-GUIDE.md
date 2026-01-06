# Allure Reports Guide

## 📍 Where to Find Allure Reports in GitHub

### Option 1: GitHub Actions Artifacts (Temporary)

1. Go to your repository: https://github.com/luisim/LuisE-SDET
2. Click on **"Actions"** tab
3. Click on any workflow run (e.g., "E2E Tests")
4. Scroll down to the **"Artifacts"** section at the bottom
5. Find **"allure-report"** artifact
6. Click **"Download"** to download the ZIP file
7. Extract the ZIP file
8. Open `index.html` in your browser to view the report

**Note:** Artifacts are kept for 30 days, then automatically deleted.

### Option 2: GitHub Pages (Permanent - Recommended)

We'll set up automatic deployment of Allure reports to GitHub Pages so they're always accessible.

## 🚀 Setting Up Permanent Allure Reports on GitHub Pages

The reports will be available at:
- `https://luisim.github.io/LuisE-SDET/allure-reports/`

This requires:
1. Generating Allure reports in CI/CD
2. Deploying them to GitHub Pages
3. Creating a showcase page on your website

## 📊 Showcasing Allure Reports

The showcase page will:
- Display test metrics (pass rate, total tests, duration)
- Link to the latest Allure report
- Show test execution history
- Display test trends

---

**Next Steps:**
1. Set up GitHub Pages deployment for Allure reports
2. Create showcase section on your website
3. Link to the reports

