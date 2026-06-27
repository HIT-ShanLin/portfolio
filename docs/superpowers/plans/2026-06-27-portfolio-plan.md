# Portfolio Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a bilingual (ZH/EN), dark/light themed personal portfolio single-page site with Astro, deployed to GitHub Pages.

**Architecture:** Astro static site with a single index page. Each section is rendered twice (zh + en) in the DOM; CSS toggles visibility via `[data-lang]` attribute. Theme uses CSS custom properties with a `data-theme` attribute. Projects fetch from GitHub API at build time.

**Tech Stack:** Astro v5 (static output), TypeScript, CSS custom properties, GitHub Actions.

## Global Constraints

- Single page at `https://HIT-ShanLin.github.io/portfolio/`
- Bilingual: Chinese + English, toggle via navbar button, default from `navigator.language`
- Theme: dark/light with system preference + manual toggle, no flash (inline `<script>` before paint)
- Sections: Hero, About, Timeline, Skills, Projects, Footer
- Projects: fetched from `https://api.github.com/users/HIT-ShanLin/repos` at Astro build time, fallback to static data if API fails
- Deploy: GitHub Actions to `gh-pages` branch
- Zero runtime JS beyond theme/lang toggle scripts (< 1 KB)

---

### Task 1: Initialize Astro Project

**Files:**
- Create: `package.json`
- Create: `astro.config.mjs`
- Create: `tsconfig.json`
- Create: `.gitignore`

**Interfaces:**
- Produces: npm scripts `dev`, `build`, `preview` — invoked by later tasks and CI

- [ ] **Step 1: Create package.json**

```json
{
  "name": "portfolio",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview"
  },
  "dependencies": {
    "astro": "^5.0.0"
  }
}
```

- [ ] **Step 2: Install dependencies**

Run: `npm install`
Expected: Installs astro, creates `node_modules/` and `package-lock.json`

- [ ] **Step 3: Create astro.config.mjs**

```js
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://HIT-ShanLin.github.io',
  base: '/portfolio',
  output: 'static',
});
```

- [ ] **Step 4: Create tsconfig.json**

```json
{
  "extends": "astro/tsconfigs/strict",
  "compilerOptions": {
    "jsx": "preserve"
  }
}
```

- [ ] **Step 5: Create .gitignore**

```
node_modules/
dist/
.DS_Store
```

- [ ] **Step 6: Verify dev server starts**

Run: `npm run dev`
Expected: Astro dev server starts on localhost:4321. Stop server with Ctrl+C.

- [ ] **Step 7: Commit**

```bash
git add package.json package-lock.json astro.config.mjs tsconfig.json .gitignore
git commit -m "chore: initialize Astro project

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

### Task 2: Create i18n Translation Files

**Files:**
- Create: `src/i18n/types.ts`
- Create: `src/i18n/zh.ts`
- Create: `src/i18n/en.ts`

**Interfaces:**
- Produces: `Translations` type (imported by all components), `zh` and `en` translation objects

- [ ] **Step 1: Create src/i18n/types.ts**

```ts
export interface NavTranslations {
  about: string;
  skills: string;
  timeline: string;
  projects: string;
}

export interface HeroTranslations {
  name: string;
  role: string;
  tagline: string;
}

export interface AboutTranslations {
  title: string;
  paragraphs: string[];
}

export interface TimelineItem {
  company: string;
  role: string;
  period: string;
  description: string;
  type: 'work' | 'internship';
}

export interface TimelineTranslations {
  title: string;
  workLabel: string;
  internshipLabel: string;
  items: TimelineItem[];
}

export interface SkillCategory {
  name: string;
  items: string[];
}

export interface SkillsTranslations {
  title: string;
  categories: SkillCategory[];
}

export interface ProjectsTranslations {
  title: string;
  loading: string;
  error: string;
  noProjects: string;
  stars: string;
  viewOnGithub: string;
  language: string;
}

export interface FooterTranslations {
  copyright: string;
  builtWith: string;
}

export interface Translations {
  site: { title: string; description: string };
  nav: NavTranslations;
  hero: HeroTranslations;
  about: AboutTranslations;
  timeline: TimelineTranslations;
  skills: SkillsTranslations;
  projects: ProjectsTranslations;
  footer: FooterTranslations;
}
```

- [ ] **Step 2: Create src/i18n/zh.ts**

```ts
import type { Translations } from './types';

export const zh: Translations = {
  site: {
    title: 'Shan Lin - 个人简介',
    description: 'Shan Lin 的个人主页 - 工作经历、技术能力与项目展示',
  },
  nav: {
    about: '关于',
    skills: '技能',
    timeline: '经历',
    projects: '项目',
  },
  hero: {
    name: 'Shan Lin',
    role: '软件工程师',
    tagline: '热爱技术，专注于构建优秀的软件产品',
  },
  about: {
    title: '关于我',
    paragraphs: [
      '我是一名充满热情的软件工程师。我专注于用技术解决实际问题，致力于构建高质量的软件产品。',
      '在业余时间，我喜欢参与开源项目，探索新技术，并持续提升自己的工程能力。',
    ],
  },
  timeline: {
    title: '经历',
    workLabel: '工作',
    internshipLabel: '实习',
    items: [
      {
        company: '[公司名称]',
        role: '[职位]',
        period: '2024 - 至今',
        description: '[在此填写你的工作内容描述]',
        type: 'work',
      },
      {
        company: '[实习公司]',
        role: '[实习职位]',
        period: '2023 - 2024',
        description: '[在此填写你的实习内容描述]',
        type: 'internship',
      },
    ],
  },
  skills: {
    title: '技术能力',
    categories: [
      { name: '编程语言', items: ['TypeScript', 'Python', 'Java', 'Go'] },
      { name: '前端', items: ['React', 'Vue', 'Astro', 'Next.js', 'Tailwind CSS'] },
      { name: '后端', items: ['Node.js', 'Express', 'FastAPI'] },
      { name: '数据库', items: ['PostgreSQL', 'MongoDB', 'Redis'] },
      { name: '工具 & 平台', items: ['Git', 'Docker', 'Linux', 'GitHub Actions'] },
    ],
  },
  projects: {
    title: '项目',
    loading: '加载中...',
    error: '无法加载项目，请稍后再试',
    noProjects: '暂无公开项目',
    stars: '星',
    viewOnGithub: '在 GitHub 上查看更多',
    language: '语言',
  },
  footer: {
    copyright: '© 2026 Shan Lin. All rights reserved.',
    builtWith: '由 Astro 构建，托管于 GitHub Pages',
  },
};
```

- [ ] **Step 3: Create src/i18n/en.ts**

```ts
import type { Translations } from './types';

export const en: Translations = {
  site: {
    title: 'Shan Lin - Portfolio',
    description: 'Personal portfolio of Shan Lin - work experience, skills, and projects',
  },
  nav: {
    about: 'About',
    skills: 'Skills',
    timeline: 'Experience',
    projects: 'Projects',
  },
  hero: {
    name: 'Shan Lin',
    role: 'Software Engineer',
    tagline: 'Passionate about technology, focused on building great software products',
  },
  about: {
    title: 'About Me',
    paragraphs: [
      'I am a passionate software engineer. I focus on solving real-world problems with technology and building high-quality software products.',
      'In my spare time, I enjoy contributing to open-source projects, exploring new technologies, and continuously improving my engineering skills.',
    ],
  },
  timeline: {
    title: 'Experience',
    workLabel: 'Work',
    internshipLabel: 'Internship',
    items: [
      {
        company: '[Company]',
        role: '[Role]',
        period: '2024 - Present',
        description: '[Fill in your job description here]',
        type: 'work' as const,
      },
      {
        company: '[Internship Company]',
        role: '[Intern Role]',
        period: '2023 - 2024',
        description: '[Fill in your internship description here]',
        type: 'internship' as const,
      },
    ],
  },
  skills: {
    title: 'Technical Skills',
    categories: [
      { name: 'Languages', items: ['TypeScript', 'Python', 'Java', 'Go'] },
      { name: 'Frontend', items: ['React', 'Vue', 'Astro', 'Next.js', 'Tailwind CSS'] },
      { name: 'Backend', items: ['Node.js', 'Express', 'FastAPI'] },
      { name: 'Databases', items: ['PostgreSQL', 'MongoDB', 'Redis'] },
      { name: 'Tools & Platforms', items: ['Git', 'Docker', 'Linux', 'GitHub Actions'] },
    ],
  },
  projects: {
    title: 'Projects',
    loading: 'Loading...',
    error: 'Failed to load projects, please try again later',
    noProjects: 'No public projects yet',
    stars: 'stars',
    viewOnGithub: 'View more on GitHub',
    language: 'Language',
  },
  footer: {
    copyright: '© 2026 Shan Lin. All rights reserved.',
    builtWith: 'Built with Astro, hosted on GitHub Pages',
  },
};
```

- [ ] **Step 4: Verify TypeScript compiles**

Run: `npx tsc --noEmit --skipLibCheck 2>&1 || true`
Expected: No type errors from translation files specifically.

- [ ] **Step 5: Commit**

```bash
git add src/i18n/
git commit -m "feat: add i18n translation files with zh/en support

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

### Task 3: Create Global Styles with Theme System

**Files:**
- Create: `src/styles/global.css`

**Interfaces:**
- Produces: CSS custom properties for light/dark themes, language visibility rules, layout utilities, responsive breakpoints — imported by `BaseLayout.astro` in Task 4

- [ ] **Step 1: Create src/styles/global.css**

```css
/* ===== CSS Reset ===== */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 4rem;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  line-height: 1.6;
  transition: background-color 0.3s ease, color 0.3s ease;
}

a {
  text-decoration: none;
  color: inherit;
}

img {
  max-width: 100%;
  display: block;
}

/* ===== Light Theme (default) ===== */
:root {
  --color-bg: #ffffff;
  --color-bg-secondary: #f5f5f7;
  --color-bg-card: #ffffff;
  --color-text: #1d1d1f;
  --color-text-secondary: #6e6e73;
  --color-text-muted: #aeaeb2;
  --color-accent: #0071e3;
  --color-accent-hover: #0077ed;
  --color-border: #e5e5e7;
  --color-shadow: rgba(0, 0, 0, 0.08);
  --color-timeline-line: #d2d2d7;
  --color-tag-bg: #f0f0f5;
  --color-tag-text: #1d1d1f;
  --color-card-hover-shadow: rgba(0, 0, 0, 0.12);
}

/* ===== Dark Theme ===== */
[data-theme='dark'] {
  --color-bg: #1a1a2e;
  --color-bg-secondary: #16162a;
  --color-bg-card: #222240;
  --color-text: #e8e8ed;
  --color-text-secondary: #a1a1b0;
  --color-text-muted: #6e6e80;
  --color-accent: #4da6ff;
  --color-accent-hover: #66b3ff;
  --color-border: #2d2d48;
  --color-shadow: rgba(0, 0, 0, 0.3);
  --color-timeline-line: #3d3d5c;
  --color-tag-bg: #2d2d48;
  --color-tag-text: #e8e8ed;
  --color-card-hover-shadow: rgba(0, 0, 0, 0.4);
}

body {
  background-color: var(--color-bg);
  color: var(--color-text);
}

/* ===== Language Visibility ===== */
[data-lang='zh'] [lang='en'] { display: none; }
[data-lang='en'] [lang='zh'] { display: none; }

/* ===== Layout Utilities ===== */
.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.section {
  padding: 5rem 0;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2.5rem;
  text-align: center;
}

/* ===== Responsive ===== */
@media (max-width: 768px) {
  .section {
    padding: 3rem 0;
  }

  .section-title {
    font-size: 1.6rem;
    margin-bottom: 2rem;
  }
}
```

- [ ] **Step 2: Commit**

```bash
git add src/styles/global.css
git commit -m "feat: add global styles with CSS variable theme system

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

### Task 4: Create BaseLayout

**Files:**
- Create: `src/layouts/BaseLayout.astro`

**Interfaces:**
- Consumes: `src/styles/global.css`, `Translations` type from i18n
- Produces: `<BaseLayout>` wrapper component used by `index.astro` in Task 12
  - Props: `translations: Translations`
  - Renders: `<html>` shell with theme/lang init scripts (inline, before paint), meta tags, and `<slot />`

- [ ] **Step 1: Create src/layouts/BaseLayout.astro**

```astro
---
import type { Translations } from '../i18n/types';
import '../styles/global.css';

interface Props {
  translations: Translations;
}

const { translations } = Astro.props;
const { site } = translations;
---

<!doctype html>
<html lang="zh">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content={site.description} />
    <title>{site.title}</title>
    <link rel="icon" type="image/svg+xml" href="/portfolio/favicon.svg" />

    <!-- Inline theme script: runs before paint to prevent flash -->
    <script is:inline>
      (function() {
        var stored = localStorage.getItem('theme');
        var theme = stored || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        document.documentElement.setAttribute('data-theme', theme);
      })();
    </script>

    <!-- Inline lang script: runs before paint -->
    <script is:inline>
      (function() {
        var stored = localStorage.getItem('lang');
        var lang = stored || (navigator.language.startsWith('zh') ? 'zh' : 'en');
        document.documentElement.setAttribute('data-lang', lang);
      })();
    </script>
  </head>
  <body>
    <slot />
  </body>
</html>
```

- [ ] **Step 2: Create a minimal page to verify layout**

Create `src/pages/index.astro` (temporary):

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import { zh } from '../i18n/zh';
---

<BaseLayout translations={zh}>
  <h1>Hello Portfolio</h1>
</BaseLayout>
```

Run: `npm run dev`
Expected: Page loads on localhost:4321. `<html>` has `data-theme` and `data-lang` attributes. Title shows "Shan Lin - 个人简介". No flash of wrong theme. Stop server.

- [ ] **Step 3: Commit**

```bash
git add src/layouts/BaseLayout.astro src/pages/index.astro
git commit -m "feat: add BaseLayout with inline theme and language init scripts

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

### Task 5: Create NavBar Component

**Files:**
- Create: `src/components/NavBar.astro`

**Interfaces:**
- Consumes: `NavTranslations` type
- Produces: `<NavBar>` — fixed top navbar with section links, language toggle, theme toggle
  - Props: `nav: NavTranslations`
  - Contains inline `<script>` for toggle buttons

- [ ] **Step 1: Create src/components/NavBar.astro**

```astro
---
import type { NavTranslations } from '../i18n/types';

interface Props {
  nav: NavTranslations;
}

const { nav } = Astro.props;
---

<header class="navbar">
  <nav class="navbar-inner container">
    <a href="#" class="navbar-logo" aria-label="Home">SL</a>

    <ul class="navbar-links">
      <li><a href="#about">{nav.about}</a></li>
      <li><a href="#skills">{nav.skills}</a></li>
      <li><a href="#timeline">{nav.timeline}</a></li>
      <li><a href="#projects">{nav.projects}</a></li>
    </ul>

    <div class="navbar-actions">
      <button class="btn-icon" id="lang-toggle" aria-label="Toggle language">
        <span lang="zh">EN</span>
        <span lang="en">中</span>
      </button>

      <button class="btn-icon" id="theme-toggle" aria-label="Toggle theme">
        <span class="icon-sun">☀</span>
        <span class="icon-moon">🌙</span>
      </button>
    </div>
  </nav>
</header>

<style>
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    background-color: var(--color-bg);
    border-bottom: 1px solid var(--color-border);
    backdrop-filter: blur(12px);
  }

  .navbar-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 3.5rem;
  }

  .navbar-logo {
    font-size: 1.3rem;
    font-weight: 800;
    color: var(--color-accent);
    letter-spacing: -0.5px;
  }

  .navbar-links {
    display: flex;
    list-style: none;
    gap: 0.25rem;
  }

  .navbar-links a {
    padding: 0.4rem 0.9rem;
    border-radius: 0.5rem;
    font-size: 0.9rem;
    font-weight: 500;
    color: var(--color-text-secondary);
    transition: color 0.2s, background-color 0.2s;
  }

  .navbar-links a:hover {
    color: var(--color-text);
    background-color: var(--color-bg-secondary);
  }

  .navbar-actions {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .btn-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.25rem;
    height: 2.25rem;
    border: none;
    border-radius: 0.5rem;
    background: transparent;
    color: var(--color-text-secondary);
    font-size: 0.85rem;
    font-weight: 600;
    cursor: pointer;
    transition: color 0.2s, background-color 0.2s;
  }

  .btn-icon:hover {
    color: var(--color-text);
    background-color: var(--color-bg-secondary);
  }

  [data-theme='light'] .icon-moon { display: inline; }
  [data-theme='light'] .icon-sun { display: none; }
  [data-theme='dark'] .icon-moon { display: none; }
  [data-theme='dark'] .icon-sun { display: inline; }

  @media (max-width: 640px) {
    .navbar-links {
      display: none;
    }
  }
</style>

<script>
  const langBtn = document.getElementById('lang-toggle');
  const themeBtn = document.getElementById('theme-toggle');

  langBtn?.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-lang') || 'zh';
    const next = current === 'zh' ? 'en' : 'zh';
    document.documentElement.setAttribute('data-lang', next);
    localStorage.setItem('lang', next);
  });

  themeBtn?.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    const next = current === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
</script>
```

- [ ] **Step 2: Commit**

```bash
git add src/components/NavBar.astro
git commit -m "feat: add NavBar with language and theme toggle buttons

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

### Task 6: Create Hero Component

**Files:**
- Create: `src/components/Hero.astro`

**Interfaces:**
- Consumes: `HeroTranslations` type
- Produces: `<Hero>` section — name, role, tagline, GitHub + Email links
  - Props: `hero: HeroTranslations`

- [ ] **Step 1: Create src/components/Hero.astro**

```astro
---
import type { HeroTranslations } from '../i18n/types';

interface Props {
  hero: HeroTranslations;
}

const { hero } = Astro.props;
---

<section class="hero section">
  <div class="container hero-content">
    <h1 class="hero-name">{hero.name}</h1>
    <p class="hero-role">{hero.role}</p>
    <p class="hero-tagline">{hero.tagline}</p>
    <div class="hero-links">
      <a href="https://github.com/HIT-ShanLin" target="_blank" rel="noopener noreferrer" class="hero-link">
        <svg class="hero-icon" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.604-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
        </svg>
        GitHub
      </a>
      <a href="mailto:shanlin2023@163.com" class="hero-link">
        <svg class="hero-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
        Email
      </a>
    </div>
  </div>
</section>

<style>
  .hero {
    padding-top: 7rem;
    padding-bottom: 4rem;
    text-align: center;
    background: linear-gradient(180deg, var(--color-bg-secondary) 0%, var(--color-bg) 100%);
  }

  .hero-name {
    font-size: 3rem;
    font-weight: 800;
    letter-spacing: -1px;
    margin-bottom: 0.5rem;
    color: var(--color-text);
  }

  .hero-role {
    font-size: 1.3rem;
    font-weight: 500;
    color: var(--color-accent);
    margin-bottom: 0.75rem;
  }

  .hero-tagline {
    font-size: 1.05rem;
    color: var(--color-text-secondary);
    max-width: 500px;
    margin: 0 auto 2rem;
  }

  .hero-links {
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .hero-link {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.55rem 1.2rem;
    border-radius: 0.5rem;
    font-size: 0.9rem;
    font-weight: 500;
    color: var(--color-text);
    background: var(--color-bg-card);
    border: 1px solid var(--color-border);
    transition: box-shadow 0.2s, transform 0.2s;
  }

  .hero-link:hover {
    box-shadow: 0 2px 8px var(--color-shadow);
    transform: translateY(-1px);
  }

  .hero-icon {
    flex-shrink: 0;
  }

  @media (max-width: 640px) {
    .hero-name { font-size: 2.2rem; }
    .hero-role { font-size: 1.1rem; }
  }
</style>
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Hero.astro
git commit -m "feat: add Hero section component

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

### Task 7: Create About Component

**Files:**
- Create: `src/components/About.astro`

**Interfaces:**
- Consumes: `AboutTranslations` type
- Produces: `<About>` section — title + multi-paragraph bio
  - Props: `about: AboutTranslations`

- [ ] **Step 1: Create src/components/About.astro**

```astro
---
import type { AboutTranslations } from '../i18n/types';

interface Props {
  about: AboutTranslations;
}

const { about } = Astro.props;
---

<section id="about" class="section">
  <div class="container">
    <h2 class="section-title">{about.title}</h2>
    <div class="about-content">
      {about.paragraphs.map((p) => <p class="about-paragraph">{p}</p>)}
    </div>
  </div>
</section>

<style>
  .about-content {
    max-width: 680px;
    margin: 0 auto;
  }

  .about-paragraph {
    font-size: 1.05rem;
    line-height: 1.8;
    color: var(--color-text-secondary);
    margin-bottom: 1.25rem;
  }

  .about-paragraph:last-child {
    margin-bottom: 0;
  }
</style>
```

- [ ] **Step 2: Commit**

```bash
git add src/components/About.astro
git commit -m "feat: add About section component

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

### Task 8: Create Timeline Component

**Files:**
- Create: `src/components/Timeline.astro`

**Interfaces:**
- Consumes: `TimelineTranslations` type
- Produces: `<Timeline>` section — vertical timeline with work/internship entries and type labels
  - Props: `timeline: TimelineTranslations`

- [ ] **Step 1: Create src/components/Timeline.astro**

```astro
---
import type { TimelineTranslations } from '../i18n/types';

interface Props {
  timeline: TimelineTranslations;
}

const { timeline } = Astro.props;
---

<section id="timeline" class="section">
  <div class="container">
    <h2 class="section-title">{timeline.title}</h2>
    <div class="timeline">
      {timeline.items.map((item) => (
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-card">
            <div class="timeline-header">
              <h3 class="timeline-role">{item.role}</h3>
              <span class={`timeline-type timeline-type--${item.type}`}>
                {item.type === 'work' ? timeline.workLabel : timeline.internshipLabel}
              </span>
            </div>
            <p class="timeline-company">{item.company}</p>
            <p class="timeline-period">{item.period}</p>
            <p class="timeline-description">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

<style>
  .timeline {
    position: relative;
    max-width: 680px;
    margin: 0 auto;
    padding-left: 2rem;
  }

  .timeline::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background: var(--color-timeline-line);
  }

  .timeline-item {
    position: relative;
    margin-bottom: 2.5rem;
  }

  .timeline-item:last-child {
    margin-bottom: 0;
  }

  .timeline-dot {
    position: absolute;
    left: -2rem;
    top: 0.5rem;
    width: 0.85rem;
    height: 0.85rem;
    border-radius: 50%;
    background: var(--color-accent);
    border: 3px solid var(--color-bg);
    transform: translateX(-50%);
    z-index: 1;
  }

  .timeline-card {
    background: var(--color-bg-card);
    border: 1px solid var(--color-border);
    border-radius: 0.75rem;
    padding: 1.5rem;
    transition: box-shadow 0.2s;
  }

  .timeline-card:hover {
    box-shadow: 0 4px 12px var(--color-shadow);
  }

  .timeline-header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 0.25rem;
    flex-wrap: wrap;
  }

  .timeline-role {
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--color-text);
  }

  .timeline-type {
    font-size: 0.75rem;
    font-weight: 600;
    padding: 0.2rem 0.6rem;
    border-radius: 1rem;
  }

  .timeline-type--work {
    background: rgba(0, 113, 227, 0.12);
    color: var(--color-accent);
  }

  .timeline-type--internship {
    background: var(--color-tag-bg);
    color: var(--color-tag-text);
  }

  .timeline-company {
    font-size: 0.95rem;
    color: var(--color-text-secondary);
    margin-bottom: 0.15rem;
  }

  .timeline-period {
    font-size: 0.85rem;
    color: var(--color-text-muted);
    margin-bottom: 0.75rem;
  }

  .timeline-description {
    font-size: 0.95rem;
    line-height: 1.7;
    color: var(--color-text-secondary);
  }

  @media (max-width: 640px) {
    .timeline { padding-left: 1.5rem; }
    .timeline-card { padding: 1.15rem; }
  }
</style>
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Timeline.astro
git commit -m "feat: add Timeline section with work/internship entries

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

### Task 9: Create Skills Component

**Files:**
- Create: `src/components/Skills.astro`

**Interfaces:**
- Consumes: `SkillsTranslations` type
- Produces: `<Skills>` section — categorized skill tags in cards
  - Props: `skills: SkillsTranslations`

- [ ] **Step 1: Create src/components/Skills.astro**

```astro
---
import type { SkillsTranslations } from '../i18n/types';

interface Props {
  skills: SkillsTranslations;
}

const { skills } = Astro.props;
---

<section id="skills" class="section">
  <div class="container">
    <h2 class="section-title">{skills.title}</h2>
    <div class="skills-grid">
      {skills.categories.map((category) => (
        <div class="skills-category">
          <h3 class="skills-category-name">{category.name}</h3>
          <div class="skills-tags">
            {category.items.map((item) => (
              <span class="skills-tag">{item}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

<style>
  .skills-grid {
    max-width: 750px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1.75rem;
  }

  .skills-category {
    background: var(--color-bg-card);
    border: 1px solid var(--color-border);
    border-radius: 0.75rem;
    padding: 1.5rem;
    transition: box-shadow 0.2s;
  }

  .skills-category:hover {
    box-shadow: 0 4px 12px var(--color-shadow);
  }

  .skills-category-name {
    font-size: 0.95rem;
    font-weight: 600;
    color: var(--color-text);
    margin-bottom: 0.85rem;
  }

  .skills-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .skills-tag {
    display: inline-block;
    padding: 0.35rem 0.75rem;
    border-radius: 0.4rem;
    font-size: 0.85rem;
    font-weight: 500;
    background: var(--color-tag-bg);
    color: var(--color-tag-text);
    border: 1px solid var(--color-border);
  }
</style>
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Skills.astro
git commit -m "feat: add Skills section with categorized tag display

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

### Task 10: Create Projects Component with GitHub API

**Files:**
- Create: `src/components/Projects.astro`
- Create: `src/data/fallback-projects.ts`

**Interfaces:**
- Consumes: `ProjectsTranslations` type, GitHub API at build time
- Produces: `<Projects>` section — grid of project cards (name, description, stars, language, link)
  - Props: `projects: ProjectsTranslations`
  - Fetches: `https://api.github.com/users/HIT-ShanLin/repos?sort=stars&direction=desc&per_page=10`
  - Falls back to `fallbackRepos` if API is unavailable

- [ ] **Step 1: Create src/data/fallback-projects.ts**

```ts
export interface RepoInfo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  language: string | null;
  fork: boolean;
}

export const fallbackRepos: RepoInfo[] = [
  {
    id: 1,
    name: 'portfolio',
    description: 'Personal portfolio website built with Astro',
    html_url: 'https://github.com/HIT-ShanLin/portfolio',
    stargazers_count: 0,
    language: 'TypeScript',
    fork: false,
  },
];
```

- [ ] **Step 2: Create src/components/Projects.astro**

```astro
---
import type { ProjectsTranslations } from '../i18n/types';
import { fallbackRepos, type RepoInfo } from '../data/fallback-projects';

interface Props {
  projects: ProjectsTranslations;
}

const { projects: t } = Astro.props;

let repos: RepoInfo[] = [];
let error = false;

try {
  const response = await fetch(
    'https://api.github.com/users/HIT-ShanLin/repos?sort=stars&direction=desc&per_page=10'
  );
  if (response.ok) {
    const data: RepoInfo[] = await response.json();
    repos = data
      .filter((r) => !r.fork)
      .slice(0, 6);
  } else {
    repos = fallbackRepos;
    error = true;
  }
} catch {
  repos = fallbackRepos;
  error = true;
}
---

<section id="projects" class="section">
  <div class="container">
    <h2 class="section-title">{t.title}</h2>

    {repos.length === 0 && (
      <p class="projects-empty">{t.noProjects}</p>
    )}

    <div class="projects-grid">
      {repos.map((repo) => (
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          class="project-card"
        >
          <h3 class="project-name">{repo.name}</h3>
          <p class="project-desc">
            {repo.description || repo.name}
          </p>
          <div class="project-meta">
            {repo.language && (
              <span class="project-lang">{repo.language}</span>
            )}
            <span class="project-stars">⭐ {repo.stargazers_count}</span>
          </div>
        </a>
      ))}
    </div>

    <div class="projects-footer">
      <a
        href="https://github.com/HIT-ShanLin?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        class="projects-more"
      >
        {t.viewOnGithub} →
      </a>
    </div>
  </div>
</section>

<style>
  .projects-grid {
    max-width: 900px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.25rem;
  }

  .project-card {
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    background: var(--color-bg-card);
    border: 1px solid var(--color-border);
    border-radius: 0.75rem;
    transition: box-shadow 0.2s, transform 0.2s;
  }

  .project-card:hover {
    box-shadow: 0 4px 16px var(--color-card-hover-shadow);
    transform: translateY(-2px);
  }

  .project-name {
    font-size: 1.05rem;
    font-weight: 600;
    color: var(--color-accent);
    margin-bottom: 0.5rem;
    word-break: break-word;
  }

  .project-desc {
    font-size: 0.9rem;
    color: var(--color-text-secondary);
    line-height: 1.6;
    flex: 1;
    margin-bottom: 1rem;
  }

  .project-meta {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 0.8rem;
    color: var(--color-text-muted);
  }

  .projects-footer {
    text-align: center;
    margin-top: 2.5rem;
  }

  .projects-more {
    display: inline-block;
    padding: 0.6rem 1.4rem;
    border-radius: 0.5rem;
    font-size: 0.9rem;
    font-weight: 500;
    color: var(--color-accent);
    border: 1px solid var(--color-accent);
    transition: background-color 0.2s, color 0.2s;
  }

  .projects-more:hover {
    background-color: var(--color-accent);
    color: #fff;
  }

  .projects-empty {
    text-align: center;
    color: var(--color-text-muted);
  }
</style>
```

- [ ] **Step 3: Commit**

```bash
git add src/components/Projects.astro src/data/fallback-projects.ts
git commit -m "feat: add Projects section with GitHub API fetch at build time

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

### Task 11: Create Footer Component

**Files:**
- Create: `src/components/Footer.astro`

**Interfaces:**
- Consumes: `FooterTranslations` type
- Produces: `<Footer>` — copyright, build credit, GitHub + Email links
  - Props: `footer: FooterTranslations`

- [ ] **Step 1: Create src/components/Footer.astro**

```astro
---
import type { FooterTranslations } from '../i18n/types';

interface Props {
  footer: FooterTranslations;
}

const { footer } = Astro.props;
---

<footer class="footer">
  <div class="container footer-inner">
    <p class="footer-text">{footer.copyright}</p>
    <p class="footer-text footer-built">{footer.builtWith}</p>
    <div class="footer-links">
      <a href="https://github.com/HIT-ShanLin" target="_blank" rel="noopener noreferrer" class="footer-link">GitHub</a>
      <a href="mailto:shanlin2023@163.com" class="footer-link">Email</a>
    </div>
  </div>
</footer>

<style>
  .footer {
    padding: 2.5rem 0;
    border-top: 1px solid var(--color-border);
    background-color: var(--color-bg-secondary);
  }

  .footer-inner {
    text-align: center;
  }

  .footer-text {
    font-size: 0.85rem;
    color: var(--color-text-muted);
  }

  .footer-built {
    margin-top: 0.3rem;
  }

  .footer-links {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-top: 1rem;
  }

  .footer-link {
    font-size: 0.9rem;
    color: var(--color-text-secondary);
    transition: color 0.2s;
  }

  .footer-link:hover {
    color: var(--color-accent);
  }
</style>
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Footer.astro
git commit -m "feat: add Footer component

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

### Task 12: Create Main Index Page (Compose All Sections)

**Files:**
- Modify: `src/pages/index.astro` (replace temporary content)

**Interfaces:**
- Consumes: All components (`NavBar`, `Hero`, `About`, `Timeline`, `Skills`, `Projects`, `Footer`), `zh` and `en` translations, `BaseLayout`
- Produces: Complete single-page portfolio — each section rendered twice (zh + en), CSS toggles visibility

> **i18n Strategy:** Each section is rendered twice in the DOM — once with `zh` translations (inside `<div lang="zh">`), once with `en` (inside `<div lang="en">`). The NavBar handles its own bilingual labels inline. CSS rules `[data-lang='zh'] [lang='en'] { display: none }` and `[data-lang='en'] [lang='zh'] { display: none }` handle visibility. This requires ZERO changes to section components.

- [ ] **Step 1: Rewrite src/pages/index.astro**

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import NavBar from '../components/NavBar.astro';
import Hero from '../components/Hero.astro';
import About from '../components/About.astro';
import Timeline from '../components/Timeline.astro';
import Skills from '../components/Skills.astro';
import Projects from '../components/Projects.astro';
import Footer from '../components/Footer.astro';
import { zh } from '../i18n/zh';
import { en } from '../i18n/en';
---

<BaseLayout translations={zh}>
  <NavBar nav={zh.nav} />

  <div lang="zh">
    <Hero hero={zh.hero} />
    <About about={zh.about} />
    <Timeline timeline={zh.timeline} />
    <Skills skills={zh.skills} />
    <Projects projects={zh.projects} />
    <Footer footer={zh.footer} />
  </div>

  <div lang="en">
    <Hero hero={en.hero} />
    <About about={en.about} />
    <Timeline timeline={en.timeline} />
    <Skills skills={en.skills} />
    <Projects projects={en.projects} />
    <Footer footer={en.footer} />
  </div>
</BaseLayout>
```

- [ ] **Step 2: Verify the page loads with both languages**

Run: `npm run dev`
Expected: Page loads. English version is hidden by default (since default lang is zh for browsers with zh locale, or en otherwise). Toggle lang button switches visibility. Both versions display correctly.

- [ ] **Step 3: Commit**

```bash
git add src/pages/index.astro
git commit -m "feat: compose all sections into bilingual single-page portfolio

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

### Task 13: Create GitHub Actions Deploy Workflow

**Files:**
- Create: `.github/workflows/deploy.yml`
- Create: `public/favicon.svg`

**Interfaces:**
- Consumes: npm `build` script from Task 1
- Produces: Auto-deploy to GitHub Pages on every push to `main`

- [ ] **Step 1: Create public/favicon.svg**

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect width="100" height="100" rx="20" fill="#0071e3"/>
  <text x="50" y="68" font-family="Arial,sans-serif" font-size="52" font-weight="bold" fill="white" text-anchor="middle">SL</text>
</svg>
```

- [ ] **Step 2: Create .github/workflows/deploy.yml**

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm

      - run: npm ci
      - run: npm run build

      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/deploy-pages@v4
        id: deployment
```

- [ ] **Step 3: Commit**

```bash
git add .github/workflows/deploy.yml public/favicon.svg
git commit -m "feat: add GitHub Actions deploy workflow and favicon

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

### Task 14: Build, Verify, and Push

**Files:**
- (No new files — build verification)

**Interfaces:**
- Consumes: All components, config, styles from Tasks 1-13
- Produces: Static build in `dist/`, verified locally, pushed to GitHub

- [ ] **Step 1: Build the static site**

Run: `npm run build`
Expected: Build succeeds, output in `dist/`. No errors.

- [ ] **Step 2: Verify dist/contents**

Run: `ls dist/`
Expected: `index.html`, `favicon.svg`, and possibly asset files exist.

- [ ] **Step 3: Verify HTML contains both languages**

Run: `grep -c 'lang="zh"' dist/index.html && grep -c 'lang="en"' dist/index.html`
Expected: Both return positive counts. Both language versions are in the HTML.

- [ ] **Step 4: Verify the inline theme script is present**

Run: `grep -c 'data-theme' dist/index.html`
Expected: Returns a positive count. The inline script is present.

- [ ] **Step 5: Preview the built site locally**

Run: `npm run preview`
Expected: Site served at localhost:4321. Manually verify: page loads, sections visible, language toggle works, theme toggle works, nav links scroll to sections.
Stop server after verifying.

- [ ] **Step 6: Commit all remaining changes**

```bash
git add -A
git commit -m "feat: finalize portfolio build — all sections, i18n, theming, deploy workflow

Co-Authored-By: Claude <noreply@anthropic.com>"
```

- [ ] **Step 7: Create GitHub repository and push**

First, create the repo on GitHub:

```bash
gh repo create portfolio --public --source . --push
```

Expected: Repository created at `https://github.com/HIT-ShanLin/portfolio`, code pushed to `main`.

- [ ] **Step 8: Enable GitHub Pages in repo settings**

Run:
```bash
gh api -X POST /repos/HIT-ShanLin/portfolio/pages -f 'source[branch]'='gh-pages' -f 'source[path]'='/' 2>/dev/null || echo "Pages will be auto-configured by the deploy workflow on first push. Check: Settings > Pages > Source: GitHub Actions"
```

Alternatively, go to: `https://github.com/HIT-ShanLin/portfolio/settings/pages`
Set source to "GitHub Actions".

- [ ] **Step 9: Trigger deployment**

The push in Step 7 should trigger the workflow. Check status:

```bash
gh run list --repo HIT-ShanLin/portfolio --limit 1
```

Once the workflow succeeds, the site will be live at:
**https://HIT-ShanLin.github.io/portfolio/**

- [ ] **Step 10: Final commit if any changes were made**

```bash
git push
```
