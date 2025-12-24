/**
 * Test Data - Centralized test data management
 */

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  linkedin: string;
}

export interface StatCard {
  label: string;
  expectedValue: number;
}

export interface NavigationLink {
  testId: string;
  href: string;
  label: string;
}

export const TestData = {
  // Contact Information
  contactInfo: {
    email: 'luisim1172@gmail.com',
    phone: '+503 7080-2431',
    location: 'San Salvador, El Salvador',
    linkedin: 'https://linkedin.com/in/luis-escobar-045b1516a',
  } as ContactInfo,

  // Expected Stats
  stats: [
    { label: 'Years Experience', expectedValue: 10 },
    { label: 'Companies', expectedValue: 6 },
    { label: 'Certifications', expectedValue: 7 },
    { label: 'Technologies', expectedValue: 50 },
  ] as StatCard[],

  // Navigation Links
  navigationLinks: [
    { testId: 'nav-link-about', href: '#summary', label: 'About' },
    { testId: 'nav-link-impact', href: '#impact', label: 'Impact' },
    { testId: 'nav-link-skills', href: '#skills', label: 'Skills' },
    { testId: 'nav-link-experience', href: '#experience', label: 'Experience' },
    { testId: 'nav-link-projects', href: '#projects', label: 'Projects' },
    { testId: 'nav-link-certifications', href: '#certifications', label: 'Certifications' },
    { testId: 'nav-link-education', href: '#education', label: 'Education' },
  ] as NavigationLink[],

  // Hero Section
  hero: {
    title: 'Luis Escobar',
    subtitle: 'Senior Software Development Engineer in Test',
    description: 'Crafting exceptional test automation solutions that drive quality and accelerate delivery',
  },

  // Skills Search Terms
  skillsSearchTerms: ['Java', 'TypeScript', 'Playwright', 'Selenium', 'API'],

  // Section IDs
  sections: {
    summary: 'summary',
    impact: 'impact',
    skills: 'skills',
    experience: 'experience',
    projects: 'projects',
    certifications: 'certifications',
    education: 'education',
    pyramid: 'pyramid',
    radar: 'radar',
    pipeline: 'pipeline',
    clients: 'clients',
    badges: 'badges',
  },
};

