---
goal: Redesign mossagents.github.io landing page into a professional moss-green AI Agent product page with bilingual toggle and GitHub-first conversion
version: 1.0
date_created: 2026-03-27
last_updated: 2026-03-27
owner: mossagents
status: Planned
tags: [design, feature, landing, jekyll, github-pages]
---

# Introduction

![Status: Planned](https://img.shields.io/badge/status-Planned-blue)

This plan defines deterministic implementation phases for rebuilding the `mossagents.github.io` landing page based on the approved design spec `docs/superpowers/specs/2026-03-27-moss-landing-page-design.md`. The plan is Jekyll-compatible, conversion-focused, and optimized for execution without ambiguity.

## 1. Requirements & Constraints

- **REQ-001**: Implement a professional product landing page using moss-green visual identity.
- **REQ-002**: Keep architecture as single-page landing in `index.md`.
- **REQ-003**: Implement EN/中文 language switch with deterministic fallback behavior.
- **REQ-004**: Primary CTA label must be `Explore on GitHub`.
- **REQ-005**: Primary CTA target must be `https://github.com/mossagents/moss`.
- **REQ-006**: Secondary CTA label must be `Read Docs`.
- **REQ-007**: Secondary CTA target must be `https://github.com/mossagents/moss/tree/main/docs`.
- **REQ-008**: Include nav anchors: `#capabilities`, `#use-cases`, `#quickstart`, `#docs`.
- **REQ-009**: Implement mobile sticky CTA behavior exactly as defined in spec section 7.1.
- **SEC-001**: Preserve secure static-site behavior; do not introduce external script execution.
- **SEC-002**: Handle `localStorage` access errors with non-blocking fallback.
- **CON-001**: Must remain GitHub Pages + Jekyll compatible.
- **CON-002**: No migration to frontend framework or bundler.
- **CON-003**: Keep JS in `assets/js/site.js` and keep source size <= 8 KB.
- **GUD-001**: Respect `prefers-reduced-motion`.
- **GUD-002**: Ensure WCAG 2.2 AA contrast compliance for text and controls.
- **PAT-001**: Separate content structure (`index.md`), visual system (`style.scss`), behavior (`site.js`).

## 2. Implementation Steps

### Implementation Phase 1

- **GOAL-001**: Establish moss-green design system and page component primitives.

| Task | Description | Completed | Date |
|------|-------------|-----------|------|
| TASK-001 | Update `assets/css/style.scss` to add moss-green token system (`--primary-moss`, `--deep-moss`, `--mint-accent`, neutral tokens) and spacing scale based on 8px rhythm. |  |  |
| TASK-002 | Implement reusable component styles in `assets/css/style.scss`: `.btn-primary`, `.btn-secondary`, `.card`, `.section`, `.trust-bar`, `.hero`, `.site-nav`. |  |  |
| TASK-003 | Implement responsive layout breakpoints in `assets/css/style.scss` for desktop (>=1024px), tablet (768-1023px), mobile (<768px). |  |  |
| TASK-004 | Add focus-visible, hover, and reduced-motion rules in `assets/css/style.scss` to satisfy accessibility and interaction requirements. |  |  |

### Implementation Phase 2

- **GOAL-002**: Rebuild landing information architecture and conversion hierarchy in `index.md`.

| Task | Description | Completed | Date |
|------|-------------|-----------|------|
| TASK-005 | Replace current `index.md` structure with sectioned layout containing Hero, Trust Bar, Capability Grid, Use Cases, Quickstart, Docs, Final CTA, Footer. |  |  |
| TASK-006 | Implement navigation anchors in `index.md` with IDs: `capabilities`, `use-cases`, `quickstart`, `docs`. |  |  |
| TASK-007 | Add primary CTA text `Explore on GitHub` and secondary CTA text `Read Docs` in Hero and Final CTA sections with canonical links. |  |  |
| TASK-008 | Add required section copy checklist content (6 capability cards, 3 audience blocks, quickstart commands) in bilingual blocks with `data-lang` attributes. |  |  |

### Implementation Phase 3

- **GOAL-003**: Implement deterministic language toggle and mobile sticky CTA behavior.

| Task | Description | Completed | Date |
|------|-------------|-----------|------|
| TASK-009 | Create `assets/js/site.js` with functions: `resolveInitialLanguage`, `applyLanguage`, `readStoredLanguage`, `writeStoredLanguage`, `initLanguageToggle`, `initMobileStickyCTA`. |  |  |
| TASK-010 | Implement language-switch DOM contract in `index.md` and JS selectors: `[data-lang-switch]`, `[data-lang]` with `localStorage` try/catch fallback. |  |  |
| TASK-011 | Implement mobile sticky CTA in `assets/js/site.js` using threshold contract from spec (`-64px` rootMargin), with dismiss behavior scoped to current page lifecycle. |  |  |
| TASK-012 | Wire `assets/js/site.js` in `index.md` and verify JS-off fallback shows English-only baseline content. |  |  |

### Implementation Phase 4

- **GOAL-004**: Complete metadata, quality checks, and release readiness.

| Task | Description | Completed | Date |
|------|-------------|-----------|------|
| TASK-013 | Update `_includes/custom-head.html` with canonical social metadata and keep favicon behavior aligned with `_config.yml` `logo`. |  |  |
| TASK-014 | Validate build with `bundle exec jekyll build --trace` in repository root `D:\Codes\qiulin\mossagents.github.io`. |  |  |
| TASK-015 | Validate CI workflow `.github/workflows/jekyll-build.yml` job `build` remains passing after changes. |  |  |
| TASK-016 | Run final manual checklist (anchors, CTA targets, responsive layout, keyboard navigation, contrast checks) and commit results. |  |  |

## 3. Alternatives

- **ALT-001**: Multi-page IA (`/use-cases`, `/docs`) was considered and rejected to keep conversion flow and maintenance simpler.
- **ALT-002**: JS framework (React/Vite) was considered and rejected due to GitHub Pages/Jekyll compatibility constraints.
- **ALT-003**: Pure black-white style was considered and rejected because branding requirement explicitly calls for moss-green identity.

## 4. Dependencies

- **DEP-001**: Existing Jekyll theme setup (`_config.yml` with `theme: minima`).
- **DEP-002**: Existing repository CI workflow `.github/workflows/jekyll-build.yml`.
- **DEP-003**: Approved design spec `docs/superpowers/specs/2026-03-27-moss-landing-page-design.md`.
- **DEP-004**: Public repo/docs targets: `https://github.com/mossagents/moss` and `https://github.com/mossagents/moss/tree/main/docs`.

## 5. Files

- **FILE-001**: `index.md` — landing content structure, section anchors, bilingual content blocks, CTA links, JS include.
- **FILE-002**: `assets/css/style.scss` — moss-green design tokens, component styles, responsive and accessibility states.
- **FILE-003**: `assets/js/site.js` — language toggle logic, persistence fallback, mobile sticky CTA behavior.
- **FILE-004**: `_includes/custom-head.html` — favicon and metadata alignment.
- **FILE-005**: `_config.yml` — metadata consistency (`title`, `description`, `logo`).

## 6. Testing

- **TEST-001**: Build test: run `bundle exec jekyll build --trace` successfully with zero build errors.
- **TEST-002**: Functional test: CTA links resolve exactly to canonical targets in both language modes.
- **TEST-003**: Functional test: nav anchor links scroll to `#capabilities`, `#use-cases`, `#quickstart`, `#docs`.
- **TEST-004**: Functional test: language toggle persists preference and gracefully handles storage exceptions.
- **TEST-005**: Functional test: mobile sticky CTA appears/hides according to spec threshold and dismissal rules.
- **TEST-006**: Accessibility test: keyboard navigation, visible focus, and WCAG 2.2 AA contrast checks pass.
- **TEST-007**: Responsive test: desktop/tablet/mobile layouts have no clipping or overlap.

## 7. Risks & Assumptions

- **RISK-001**: Bilingual content can increase visual density and reduce scanability.
- **RISK-002**: Sticky CTA behavior may feel intrusive if spacing and timing are not tuned precisely.
- **RISK-003**: Missing `data-lang` pairs can cause mixed-language sections if fallback is not enforced.
- **ASSUMPTION-001**: `mossagents.github.io` remains a Jekyll static site on GitHub Pages.
- **ASSUMPTION-002**: Primary conversion strategy remains GitHub-first for current release.
- **ASSUMPTION-003**: Required source references in Moss README/docs remain stable during implementation.

## 8. Related Specifications / Further Reading

- `docs/superpowers/specs/2026-03-27-moss-landing-page-design.md`
- `README.md`
- `.github/workflows/jekyll-build.yml`
