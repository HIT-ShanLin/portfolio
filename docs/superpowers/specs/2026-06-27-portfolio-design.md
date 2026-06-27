# Portfolio Website Design Spec

**Date:** 2026-06-27
**Status:** Approved

## Overview

A personal portfolio website hosted on GitHub Pages, built with Astro. Single-page scrolling design with bilingual (Chinese/English) support and auto/manual dark/light theme switching.

## Requirements

### Functional
- Single-page scrolling with smooth navigation to sections
- Bilingual support: Chinese and English, toggled via button in navbar
  - Language preference stored in localStorage
  - Default language determined by `navigator.language`
- Dark/light theme following system preference by default, with manual toggle
  - Theme preference stored in localStorage
  - Priority: localStorage > system > default (light)
- Sections: Hero, About, Timeline (work + internship merged), Skills, Projects, Footer/Contact
- GitHub Pages deployment via GitHub Actions

### Non-Functional
- Zero JavaScript shipped for static content (Astro islands only for interactive elements)
- Fast load time, perfect Lighthouse scores
- Responsive design (mobile, tablet, desktop)

## Tech Stack

- **Framework:** Astro (static site generation)
- **Styling:** CSS custom properties for theming, CSS modules or global CSS
- **i18n:** Custom lightweight solution using TypeScript translation files
- **Deployment:** GitHub Pages via GitHub Actions (`astro add` deployment)
- **Language:** TypeScript

## Architecture

### Directory Structure

```
portfolio/
├── astro.config.mjs          # Astro config (i18n, site, base path)
├── package.json
├── tsconfig.json
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions auto-deploy to Pages
├── public/
│   ├── favicon.svg
│   └── og-image.png
└── src/
    ├── i18n/
    │   ├── zh.ts             # Chinese translations
    │   └── en.ts             # English translations
    ├── components/
    │   ├── NavBar.astro      # Fixed navbar (language + theme toggle)
    │   ├── Hero.astro        # Name, tagline, links
    │   ├── About.astro       # Brief self-intro
    │   ├── Timeline.astro    # Unified work + internship timeline
    │   ├── Skills.astro      # Technical skills by category
    │   ├── Projects.astro    # Featured GitHub project cards
    │   └── Footer.astro      # Contact, social links
    ├── layouts/
    │   └── BaseLayout.astro  # Overall layout frame, theme init script
    ├── pages/
    │   └── index.astro       # Single page composing all sections
    └── styles/
        └── global.css        # CSS variables (themes), global resets
```

### Component Tree

```
BaseLayout
└── index.astro
    ├── NavBar (fixed top)
    │   ├── Logo/Name
    │   ├── Section nav links
    │   ├── LanguageToggle (中/EN)
    │   └── ThemeToggle (☀/🌙)
    ├── <main>
    │   ├── Hero
    │   ├── About
    │   ├── Timeline
    │   ├── Skills
    │   └── Projects
    └── Footer
```

### Data Flow

- All text content lives in `src/i18n/{zh,en}.ts` as typed objects
- Each component imports the current language object and reads its strings
- Language state managed via a simple store or URL path (`/en` vs `/zh`)
- Theme controlled via CSS `data-theme` attribute on `<html>`
- A tiny inline `<script>` in `<head>` reads localStorage/system preference and sets `data-theme` before page render (prevents flash)

### i18n Strategy

- Translation files export typed objects with identical structure for each language
- Components receive language context and render the appropriate strings
- Language switching triggers full re-render of all text (pure CSS/HTML swap, no heavy JS)

### Theme Strategy

- CSS variables defined in `:root` (light) and `[data-theme="dark"]` (dark)
- Inline script in `<head>` runs before render to set correct `data-theme`
- Theme toggle button updates `data-theme` and persists to localStorage
- Smooth transition on theme change via CSS `transition` on color properties

## Deployment

- GitHub Actions workflow triggers on push to `main`
- `astro build` generates static files to `dist/`
- `dist/` deployed to GitHub Pages via `peaceiris/actions-gh-pages`
- Site served at `https://HIT-ShanLin.github.io/portfolio/`

## Content Sections (for user to fill)

| Section | Content Needed |
|---------|---------------|
| Hero | Full name, role/title, short tagline, GitHub URL, LinkedIn (optional) |
| About | 2-3 paragraph self-introduction |
| Timeline | Work + internship entries: company, role, dates, description |
| Skills | Categories (e.g., Languages, Frontend, Backend, Tools) with items |
| Projects | Fetched via GitHub API — displays user's public repos with name, description, stars, language, and link |
| Footer | Email, social links |

## Resolved

- **Domain:** GitHub Pages default address: `https://HIT-ShanLin.github.io/portfolio/`
- **Projects data:** Fetched dynamically from GitHub API (`https://api.github.com/users/HIT-ShanLin/repos`), sorted by stars, displayed in project cards. A fallback static list is provided for when the API is unavailable.
