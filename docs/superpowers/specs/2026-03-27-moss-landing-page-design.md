# Moss GitHub Pages Landing Redesign (Jekyll)

Date: 2026-03-27  
Project: `mossagents.github.io`  
Scope: Redesign landing page into a professional AI Agent product page with moss-green visual system, EN/中文 language toggle, and primary conversion to GitHub repository.

## 1) Problem Statement

Current site is a minimal content page and does not present Moss as a production-grade AI Agent product. It lacks clear conversion hierarchy, audience-segmented messaging, and branded visual identity.

The redesign must:

- Establish professional product positioning
- Use moss-green primary branding
- Keep GitHub Pages + Jekyll compatibility
- Add language switching (English/Chinese)
- Prioritize primary CTA: **Explore on GitHub**

## 2) Goals and Non-Goals

### Goals

- Create a high-quality single-page product landing experience
- Support three audience layers:
  - Individual open-source developers
  - Technical leads
  - Enterprise engineering teams
- Provide bilingual content with explicit language switch
- Improve trust and conversion with clear CTA placement
- Keep implementation static-host friendly (no build framework migration)

### Non-Goals

- No migration away from Jekyll
- No backend services, analytics pipeline, or CMS
- No blog system redesign
- No multi-page IA expansion in this phase

## 3) Information Architecture

Single-page structure:

1. Hero
2. Trust Bar
3. Capability Grid
4. Audience Sections (Builders / Leads / Teams)
5. Quickstart
6. Docs & Examples
7. Final CTA + Footer

Primary CTA remains visible in header and appears in Hero and final section.

Navigation and anchor contract:

- Header nav items: `Capabilities`, `Use Cases`, `Quickstart`, `Docs`
- Anchor IDs:
  - Capabilities -> `#capabilities`
  - Use Cases -> `#use-cases`
  - Quickstart -> `#quickstart`
  - Docs -> `#docs`
- Pricing nav item is explicitly out of scope for this phase.

## 4) UX and Visual Design

### 4.1 Visual Direction

- Professional AI product landing style
- Clean spacing, grid-based composition, restrained decoration
- Moss-green identity with neutral backgrounds and strong text contrast
- Quality bar:
  - Consistent spacing rhythm using an 8px baseline scale
  - No visual overlap or clipping across desktop/tablet/mobile breakpoints
  - CTA button states (default/hover/focus/active) implemented consistently

### 4.2 Color System

- Primary Moss: `#2F5D50`
- Deep Moss: `#1F3D34`
- Mint Accent: `#8FBFA7`
- Neutral Dark: `#0F1110`
- Neutral Light: `#F7FAF8`
- Border: `#DDE7E1`

### 4.3 Typography and Components

- System font stack for performance and consistency
- Large, conversion-focused Hero title
- Card-based capability and audience blocks
- Button hierarchy:
  - Primary filled moss-green button (Explore on GitHub)
  - Secondary outlined button (Read Docs)

### 4.4 Interaction

- Sticky top nav with CTA
- Language toggle in header: EN | 中文
- Subtle hover/focus transitions
- Mobile sticky CTA enabled
- Respect `prefers-reduced-motion`

## 5) Content Strategy

### 5.1 Core Positioning

- Moss as an **Agent harness for Go**
- Emphasis on composability, safety, and production readiness

### 5.2 Audience Layer Messaging

- For Builders: fast start, low friction, immediate output
- For Leads: architecture clarity, extensibility, maintainability
- For Teams: policy controls, sandboxing, governance-friendly defaults

### 5.3 Conversion

Primary conversion: click-through to GitHub repository.  
Secondary conversion: docs entrypoint.

Canonical CTA targets:

- Primary CTA (`Explore on GitHub`): `https://github.com/mossagents/moss`
- Secondary CTA (`Read Docs`): `https://github.com/mossagents/moss/tree/main/docs`

## 6) Technical Design (Jekyll-Compatible)

## 6.1 File Plan

- `index.md`
  - Semantic page structure and bilingual content blocks
- `assets/css/style.scss`
  - Moss-green design system tokens + responsive layout styles
- `assets/js/site.js`
  - Language toggle, persistence, browser-language default, mobile CTA behavior
  - Internal module boundaries (single file, separated functions):
    - `resolveInitialLanguage(navigatorLanguage) -> "en" | "zh"`
    - `applyLanguage(lang) -> void`
    - `readStoredLanguage() -> "en" | "zh" | null`
    - `writeStoredLanguage(lang) -> void`
    - `initLanguageToggle() -> void`
    - `initMobileStickyCTA() -> void`
  - DOM contract:
    - Language controls: `[data-lang-switch="en"]`, `[data-lang-switch="zh"]`
    - Language content nodes: `[data-lang="en"]`, `[data-lang="zh"]`
    - Mobile sticky CTA container: `[data-mobile-cta]`
    - Mobile sticky CTA dismiss control: `[data-mobile-cta-dismiss]`
- `_includes/custom-head.html`
  - favicon, OG metadata, page-level enhancement tags
- `_config.yml`
  - site metadata alignment

## 6.2 Language Toggle Mechanism

- Mark translatable nodes with `data-lang="en"` / `data-lang="zh"`
- Toggle hides non-selected language nodes
- Persist choice in `localStorage` key (e.g., `moss_lang`)
- First visit fallback:
  - `zh` if browser language starts with `zh`
  - otherwise `en`
- Runtime safety:
  - Wrap `localStorage` read/write in `try/catch`
  - On any storage error, fall back to browser-language decision without breaking render
- Missing/misaligned language node fallback:
  - If either language node set is missing for a section, show available content and do not hide that section
  - Log a non-blocking warning in console once per page load

## 6.3 Accessibility

- Keyboard-focus visible styles for links/buttons/toggle
- Color contrast MUST meet WCAG 2.2 AA for normal text and interactive controls
- Semantic heading hierarchy and landmark sections
- Reduced motion support

## 6.4 Performance

- No external UI framework
- JS budget: `assets/js/site.js` <= 8 KB (unminified source)
- Image budget: hero logo rendered at <= 128x128 CSS pixels
- Avoid layout shift for logo/avatar by setting explicit width/height attributes
- First contentful section remains readable without JS execution

## 7) Error Handling and Edge Cases

- If JS is disabled:
  - Deterministic fallback: render English only (all `data-lang="zh"` nodes hidden by baseline CSS)
  - Core CTAs and content remain accessible
- If `localStorage` unavailable:
  - Graceful fallback to browser language per page load, without throwing to console as blocking error
- If remote avatar/favicon URL fails:
  - avatar source uses GitHub org avatar URL from `_config.yml` (`logo`)
  - favicon source is the same URL in `_includes/custom-head.html`
  - fallback strategy: browser default favicon and visible text brand; no blocking error
- If language toggle is used:
  - Toggle control updates `aria-pressed` state and active visual indicator consistently

## 7.1 Mobile Sticky CTA Behavior

- Enabled only on viewport widths `< 768px`
- Appears when Hero section top has crossed `-64px` viewport offset (IntersectionObserver rootMargin: `-64px 0px 0px 0px`)
- Hidden while user is inside the first viewport of Hero
- Dismissible per session via close control (`x`)
- Session scope is per page lifecycle (current tab while page remains loaded)
- If dismissed, remains hidden until next full page load

## 7.2 Required Section Copy Checklist

Minimum required copy blocks:

- Hero: product statement, one-sentence value, primary + secondary CTA labels
- Trust Bar: exactly 3 trust signals (Open Source / Go-native / Extensible)
- Capability Grid: 6 capability cards with short title + one-line description each
- Use Cases: 3 audience blocks (Builders / Leads / Teams), each with one value statement
- Quickstart: install command + run command + docs pointer
- Final CTA: repeat primary CTA and one supportive sentence

## 8) Testing Strategy

### 8.1 Manual Functional Checks

- Language toggle correctness on desktop/mobile
- CTA links route to expected destinations
- Sticky header and mobile sticky CTA behavior
- Section anchor/nav behavior

### 8.2 Responsive Checks

- Desktop (>=1024px), tablet (768-1023px), mobile (<768px)
- Card/grid collapse behavior
- Typography and button tap target size

### 8.3 Accessibility Checks

- Keyboard navigation path
- Focus state visibility
- Contrast verification for text/buttons
- Verification method:
  - Manual keyboard-only navigation in Chrome and Safari
  - Lighthouse accessibility audit with no critical accessibility failures
  - Contrast checks sampled on body text, links, muted text, and primary/secondary CTA buttons

### 8.4 Build Checks

- `bundle exec jekyll build --trace`
- GitHub Actions workflow `.github/workflows/jekyll-build.yml` job `build` must pass

## 9) Risks and Mitigations

- Risk: bilingual content increases page noise  
  Mitigation: language toggle defaults to single-language render
- Risk: visual over-styling hurts readability  
  Mitigation: keep restrained component system and high contrast
- Risk: drift from Moss source messaging  
  Mitigation: align copy with `moss` README and docs terminology

## 9.1 Copy Governance

- English copy is source-of-truth for release wording
- Chinese copy must preserve semantic parity (no feature claims not present in English)
- Any feature claim must map to an existing Moss repository path, command, or docs page

## 10) Implementation Boundaries

This spec covers only the landing page redesign and supporting static assets in `mossagents.github.io`. It intentionally excludes backend integration, telemetry systems, and docs IA redesign.

## 11) Acceptance Criteria

- Landing page meets the quality bar defined in section 4.1
- Moss-green palette is consistently applied
- EN/中文 language switch works and persists preference
- Primary CTA to GitHub is prominent and repeated in key sections
- Primary/secondary CTAs resolve exactly to the canonical target URLs in section 5.3
- Mobile sticky CTA behavior matches section 7.1
- If JS is disabled, English-only fallback remains usable and conversion-safe
- Accessibility checks pass WCAG 2.2 AA contrast requirements
- Accessibility verification follows section 8.3 with no critical failures
- `assets/js/site.js` remains within the section 6.4 JS budget
- Page remains Jekyll + GitHub Pages compatible
- Jekyll build workflow passes

