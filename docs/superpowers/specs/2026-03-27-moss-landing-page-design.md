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
- Prioritize primary CTA: **View on GitHub**

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

## 4) UX and Visual Design

### 4.1 Visual Direction

- Professional AI product landing style
- Clean spacing, grid-based composition, restrained decoration
- Moss-green identity with neutral backgrounds and strong text contrast

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
  - Primary filled moss-green button (View on GitHub)
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

## 6) Technical Design (Jekyll-Compatible)

## 6.1 File Plan

- `index.md`
  - Semantic page structure and bilingual content blocks
- `assets/css/style.scss`
  - Moss-green design system tokens + responsive layout styles
- `assets/js/site.js`
  - Language toggle, persistence, browser-language default, mobile CTA behavior
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

## 6.3 Accessibility

- Keyboard-focus visible styles for links/buttons/toggle
- Color contrast meeting readability targets
- Semantic heading hierarchy and landmark sections
- Reduced motion support

## 6.4 Performance

- No external UI framework
- Minimal JS payload
- Optimize image sizing and avoid layout shift for logo/avatar

## 7) Error Handling and Edge Cases

- If JS is disabled:
  - Both language blocks can remain visible or default language visible via CSS-safe fallback
  - Core CTAs and content remain accessible
- If `localStorage` unavailable:
  - Graceful fallback to browser language per page load
- If remote avatar/favicon URL fails:
  - alt text and default browser icon behavior remain acceptable

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

### 8.4 Build Checks

- `bundle exec jekyll build --trace`
- Existing GitHub Actions Jekyll build workflow must pass

## 9) Risks and Mitigations

- Risk: bilingual content increases page noise  
  Mitigation: language toggle defaults to single-language render
- Risk: visual over-styling hurts readability  
  Mitigation: keep restrained component system and high contrast
- Risk: drift from Moss source messaging  
  Mitigation: align copy with `moss` README and docs terminology

## 10) Implementation Boundaries

This spec covers only the landing page redesign and supporting static assets in `mossagents.github.io`. It intentionally excludes backend integration, telemetry systems, and docs IA redesign.

## 11) Acceptance Criteria

- Landing page visually reflects professional AI product quality
- Moss-green palette is consistently applied
- EN/中文 language switch works and persists preference
- Primary CTA to GitHub is prominent and repeated in key sections
- Page remains Jekyll + GitHub Pages compatible
- Jekyll build workflow passes

