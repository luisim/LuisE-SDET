# Modern CV Website Template

A beautiful, interactive CV/portfolio website template with a modern dark theme, animated space background, and comprehensive test automation framework.

![E2E Tests](https://github.com/luisim/LuisE-SDET/workflows/E2E%20Tests/badge.svg)
![Code Quality](https://github.com/luisim/LuisE-SDET/workflows/Code%20Quality/badge.svg)

## ✨ Features

- 🎨 **Modern Dark Theme** - Beautiful dark mode with animated No Man's Sky-inspired starfield
- 📱 **Fully Responsive** - Works perfectly on desktop, tablet, and mobile
- 🎯 **Interactive Sections** - Scroll animations, hover effects, and dynamic content
- 📊 **Visual Data** - Radar charts, test automation pyramid, CI/CD pipeline visualization
- 🧪 **Test Automation** - Complete TypeScript + Playwright framework with Page Object Model
- 🏆 **Professional Sections** - Skills, experience, projects, certifications, achievements
- ⚡ **Fast & Lightweight** - Pure HTML/CSS/JavaScript, no build step required

## 🚀 Quick Start

### 1. Clone or Download

```bash
git clone https://github.com/YOUR_USERNAME/cv-website.git
cd cv-website
```

### 2. Customize Your Content

Edit `index.html` and replace:
- Personal information (name, contact, etc.)
- Experience entries
- Skills and technologies
- Projects and achievements
- Logo images in `logos/` folder

### 3. Run Locally

```bash
# Using Python
python3 -m http.server 8000

# Or using Node.js
npx http-server -p 8000
```

Then open `http://localhost:8000/index.html` in your browser.

## 📁 Project Structure

```
cv-website/
├── index.html              # Main website file (edit this!)
├── logos/                  # Your logo images
│   └── *.png              # Replace with your own logos
├── tests/                  # Test automation framework
│   ├── pages/             # Page Object Model classes
│   ├── utils/             # Test utilities
│   ├── tests/             # Test specifications
│   └── README.md          # Test framework docs
└── README.md              # This file
```

## 🎨 Customization Guide

### 1. Update Personal Information

Search for and replace in `index.html`:
- Your name
- Contact information (email, phone, location)
- Social media links
- Professional title

### 2. Update Experience

Find the `experiences` array in `index.html` and update:
```javascript
const experiences = [
    {
        company: 'Your Company',
        role: 'Your Role',
        period: 'Jan 2020 - Present',
        logo: 'YC',  // Initials or logo filename
        achievements: [
            'Your achievement 1',
            'Your achievement 2',
            // ...
        ]
    },
    // ...
];
```

### 3. Update Skills

Find the `skillsData` array and customize:
```javascript
const skillsData = [
    {
        name: 'JavaScript',
        category: 'Languages',
        proficiency: 90
    },
    // ...
];
```

### 4. Add Your Logos

1. Place your logo images in the `logos/` folder
2. Update logo references in the code:
   ```javascript
   logoUrl: './logos/your-logo.png'
   ```

### 5. Customize Colors

Find the CSS variables at the top of `index.html`:
```css
:root {
    --primary: #60a5fa;      /* Primary color */
    --secondary: #a78bfa;     /* Secondary color */
    --accent: #f472b6;        /* Accent color */
    /* ... */
}
```

## 🧪 Test Automation Framework

This template includes a complete test automation framework demonstrating best practices:

- **Page Object Model** pattern
- **TypeScript** for type safety
- **Playwright** for browser automation
- **Proper element identification** using `data-testid` attributes
- **CI/CD Integration** with GitHub Actions

See `tests/README.md` for complete documentation.

### Running Tests Locally

```bash
cd tests
npm install
npx playwright install
npm test
```

### CI/CD Pipeline

The repository includes GitHub Actions workflows for:
- ✅ **Automated E2E Testing** - Multi-browser testing on every push/PR
- ✅ **Code Quality Checks** - ESLint and Prettier validation
- ✅ **Automated Deployment** - GitHub Pages deployment
- ✅ **Test Reports** - HTML reports with screenshots and videos

See `.github/workflows/` for workflow configurations.

## 🌐 Deployment

### GitHub Pages

1. Push to GitHub
2. Go to Settings → Pages
3. Select `main` branch
4. Your site will be live at `https://YOUR_USERNAME.github.io/cv-website/`

### Netlify

1. Drag and drop the folder to [Netlify](https://app.netlify.com)
2. Your site is live instantly!

### Other Options

- Vercel
- Cloudflare Pages
- AWS S3 + CloudFront
- Any static hosting service

## 🛠️ Technologies

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with animations
- **JavaScript** - Vanilla JS (no frameworks)
- **Canvas API** - Animated starfield background
- **TypeScript** - For test automation
- **Playwright** - E2E testing framework

## 📝 Sections Included

- ✅ Hero section with animated background
- ✅ Summary/About
- ✅ Key metrics/Stats
- ✅ Impact & Achievements
- ✅ Test Automation Strategy (pyramid)
- ✅ Technology Radar Chart
- ✅ CI/CD Pipeline Visualization
- ✅ Technical Skills (with search/filter)
- ✅ Achievement Badges
- ✅ Clients & Partners
- ✅ Work Experience (timeline)
- ✅ Featured Projects
- ✅ Framework Architecture (code examples)
- ✅ Certifications
- ✅ Education
- ✅ Testimonials

## 🎯 Best Practices Demonstrated

- ✅ Semantic HTML
- ✅ Responsive design
- ✅ Accessibility considerations
- ✅ Performance optimization
- ✅ Clean code structure
- ✅ Test automation best practices
- ✅ Page Object Model pattern
- ✅ Proper element identification

## 📄 License

This template is open source and available for anyone to use and modify.

## 🤝 Contributing

Feel free to fork, modify, and use this template for your own CV/portfolio!

## 🙏 Credits

- Starfield animation inspired by No Man's Sky
- Design patterns from modern web development best practices

---

**Made with ❤️ for developers who want to showcase their skills beautifully**
