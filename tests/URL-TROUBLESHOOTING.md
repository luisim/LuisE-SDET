# URL Troubleshooting Guide

## GitHub Pages URL Requirements

GitHub Pages URLs are **case-sensitive** and require exact matching. The repository name must match the URL exactly.

### Correct URL Format

```
https://luisim.github.io/LuisE-SDET/
```

**Important:**
- ✅ Repository name: `LuisE-SDET` (exact case)
- ✅ URL must match repository name exactly
- ✅ Trailing slash is required: `/`
- ✅ Use `/index.html` explicitly for maximum compatibility

### Common Issues

#### ❌ Wrong Case
```
https://luisim.github.io/luise-sdet/     # Wrong - lowercase
https://luisim.github.io/LUISE-SDET/     # Wrong - uppercase
https://luisim.github.io/luise-sdet/     # Wrong - different case
```

#### ✅ Correct
```
https://luisim.github.io/LuisE-SDET/    # Correct - exact match
```

## How the Code Handles This

The test framework now includes **automatic URL normalization and fallback**:

1. **Normalizes trailing slashes** - Ensures URL ends with `/`
2. **Tries multiple URL formats**:
   - `https://luisim.github.io/LuisE-SDET/index.html`
   - `https://luisim.github.io/LuisE-SDET/`
   - Fallback variations
3. **Provides helpful error messages** if all attempts fail

## Configuration

### In `playwright.config.ts`

```typescript
baseURL: process.env.BASE_URL || 'https://luisim.github.io/LuisE-SDET/',
```

**Always use the exact repository name with correct capitalization!**

### Override for Local Testing

```bash
# Use local server
BASE_URL=http://localhost:8000 npm test

# Use different GitHub Pages URL
BASE_URL=https://your-username.github.io/Your-Repo/ npm test
```

## Verification

### Check Your Repository Name

1. Go to: https://github.com/luisim/LuisE-SDET
2. Check the repository name in the URL
3. Ensure it matches exactly: `LuisE-SDET`

### Check GitHub Pages URL

1. Go to repository Settings → Pages
2. Verify the published URL matches your config
3. Test the URL in browser: https://luisim.github.io/LuisE-SDET/

### Test URL Manually

```bash
# Test if URL is accessible
curl -I https://luisim.github.io/LuisE-SDET/

# Should return: HTTP/2 200
```

## Error Messages

If you see errors like:
- `404 Not Found`
- `Failed to navigate to homepage`

**Check:**
1. ✅ Repository name matches URL exactly (case-sensitive)
2. ✅ GitHub Pages is enabled and deployed
3. ✅ `index.html` exists in repository root
4. ✅ Wait a few minutes after deployment (GitHub Pages can take time)

## Best Practices

1. **Always use exact case** in `playwright.config.ts`
2. **Include trailing slash** in baseURL
3. **Test URL manually** before running tests
4. **Use environment variables** for different environments

---

**Remember: GitHub Pages URLs are case-sensitive! Use exact capitalization.** 🎯

