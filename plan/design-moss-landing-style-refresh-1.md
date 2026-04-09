---
goal: Refactor the Moss GitHub Pages landing page from a card-heavy layout into an editorial shell with continuous section bands and minimal card styling.
version: 1.0
date_created: 2026-04-09
last_updated: 2026-04-09
owner: Copilot
status: Completed
tags: [design, refactor, jekyll, github-pages, landing-page]
---

# Introduction

![Status: Completed](https://img.shields.io/badge/status-Completed-brightgreen)

This implementation plan defines the exact refactor steps required to replace the current card-heavy Moss landing page with the approved editorial-shell treatment. The plan preserves the current Jekyll content model, include boundaries, and section order while changing layout primitives, section styling, and visual hierarchy.

## 1. Requirements & Constraints

- **REQ-001**: Keep the current landing-page information architecture and content source in `D:\Codes\qiulin\mossagents.github.io\_data\landing.yml`.
- **REQ-002**: Convert the hero into one coherent banner surface rather than separate floating cards.
- **REQ-003**: Remove repeated floating-card styling as the primary layout primitive from proof, surfaces, architecture, capabilities, apps, and docs sections.
- **REQ-004**: Preserve technical credibility through path labels, runtime identifiers, and selective code snippet treatment.
- **REQ-005**: Keep the site fully compatible with GitHub Pages and Jekyll.
- **CON-001**: Do not rewrite the page copy or reorder sections unless required by the approved style-refresh spec.
- **CON-002**: Reuse the current include file structure unless a change is strictly necessary to implement the approved layout.
- **CON-003**: Keep dark code snippets only where they provide technical emphasis; do not let them recreate the old card-heavy feel.
- **GUD-001**: Treat `D:\Codes\qiulin\mossagents.github.io\docs\superpowers\specs\2026-04-09-moss-landing-page-design.md` as the base contract for data shape and include ownership.
- **GUD-002**: Treat `D:\Codes\qiulin\mossagents.github.io\docs\superpowers\specs\2026-04-09-moss-landing-style-refresh-design.md` as the visual and layout delta specification.
- **PAT-001**: Replace shared card primitives with section-specific layout rules.
- **PAT-002**: Build hierarchy primarily through typography, spacing, divider rules, and light background banding.
- **ACC-001**: Preserve heading hierarchy, focus visibility, contrast, and responsive collapse behavior.

## 2. Implementation Steps

### Implementation Phase 1

- GOAL-001: Refactor the global shell, hero, and proof-strip sections from floating cards into a continuous editorial banner and divider-based strip.

| Task | Description | Completed | Date |
|------|-------------|-----------|------|
| TASK-001 | Update `D:\Codes\qiulin\mossagents.github.io\assets\css\site.css` root tokens and global section primitives to reduce border radius, remove broad shadow usage, and introduce section divider and background-band utilities. | ✅ | 2026-04-09 |
| TASK-002 | Refactor `D:\Codes\qiulin\mossagents.github.io\_includes\hero.html` so the hero renders as one banner containing a left content area and a right technical rail, not separate card surfaces. Keep existing data references from `site.data.landing.hero`. | ✅ | 2026-04-09 |
| TASK-003 | Refactor hero-related CSS selectors in `D:\Codes\qiulin\mossagents.github.io\assets\css\site.css`, replacing `.hero__content` and `.code-panel` floating-card styling with banner, rail, inline-proof, and compact snippet rules. | ✅ | 2026-04-09 |
| TASK-004 | Refactor `D:\Codes\qiulin\mossagents.github.io\_includes\proof-strip.html` and related CSS so proof items render as a divider-based horizontal strip with no standalone card chrome. | ✅ | 2026-04-09 |

### Implementation Phase 2

- GOAL-002: Refactor the middle narrative sections to use editorial rows, aligned columns, and section-specific structure instead of repeated cards.

| Task | Description | Completed | Date |
|------|-------------|-----------|------|
| TASK-005 | Refactor `D:\Codes\qiulin\mossagents.github.io\_includes\surface-cards.html` into a three-column editorial row on desktop, with divider-based stacked behavior on mobile, while keeping current `section.items` loops intact. | ✅ | 2026-04-09 |
| TASK-006 | Refactor `D:\Codes\qiulin\mossagents.github.io\_includes\architecture-section.html` and related CSS so architecture layers render as stacked aligned rows with separators instead of boxed layer cards. | ✅ | 2026-04-09 |
| TASK-007 | Refactor `D:\Codes\qiulin\mossagents.github.io\_includes\capabilities.html` and related CSS so capabilities render as a two-column grouped list on desktop and one-column list on narrow viewports. | ✅ | 2026-04-09 |

### Implementation Phase 3

- GOAL-003: Refactor the adoption, catalog, and closing sections so they match the new editorial shell and eliminate remaining floating-card patterns.

| Task | Description | Completed | Date |
|------|-------------|-----------|------|
| TASK-008 | Refactor `D:\Codes\qiulin\mossagents.github.io\_includes\quickstart.html` and related CSS into a split editorial section with two open columns and only compact inset snippet blocks. | ✅ | 2026-04-09 |
| TASK-009 | Refactor `D:\Codes\qiulin\mossagents.github.io\_includes\apps-showcase.html` and related CSS into a compact two-column catalog layout with separators instead of showcase cards. | ✅ | 2026-04-09 |
| TASK-010 | Refactor `D:\Codes\qiulin\mossagents.github.io\_includes\docs-cta.html` and related CSS into a split closing band with a clean doc list and integrated CTA cluster rather than boxed aside treatment. | ✅ | 2026-04-09 |

### Implementation Phase 4

- GOAL-004: Validate the refactor, preserve accessibility, and keep the Jekyll site stable.

| Task | Description | Completed | Date |
|------|-------------|-----------|------|
| TASK-011 | Review `D:\Codes\qiulin\mossagents.github.io\assets\css\site.css` for obsolete selectors that only existed for the previous card system and remove or simplify them. | ✅ | 2026-04-09 |
| TASK-012 | Verify all affected include files still reference the current `_data\landing.yml` keys without requiring data-shape changes unless strictly necessary. | ✅ | 2026-04-09 |
| TASK-013 | Validate responsive rules for hero, proof strip, surfaces, architecture, capabilities, quickstart, apps, and docs so each collapses cleanly to a single-column editorial flow on mobile. | ✅ | 2026-04-09 |
| TASK-014 | If a local Jekyll toolchain is available, run a local build against `D:\Codes\qiulin\mossagents.github.io`; otherwise validate by reviewing file structure, Liquid syntax usage, and repository diff. | ✅ | 2026-04-09 |

## 3. Alternatives

- **ALT-001**: Make only small cosmetic tweaks to radius and shadow values. Rejected because it would leave the page fundamentally card-driven.
- **ALT-002**: Rewrite content and information architecture along with the visual style. Rejected because the approved scope is a visual-system refactor, not a messaging rewrite.
- **ALT-003**: Replace the current Jekyll section structure with a new front-end stack. Rejected because it violates the GitHub Pages-safe constraint and adds unnecessary complexity.

## 4. Dependencies

- **DEP-001**: `D:\Codes\qiulin\mossagents.github.io\docs\superpowers\specs\2026-04-09-moss-landing-page-design.md`
- **DEP-002**: `D:\Codes\qiulin\mossagents.github.io\docs\superpowers\specs\2026-04-09-moss-landing-style-refresh-design.md`
- **DEP-003**: `D:\Codes\qiulin\mossagents.github.io\_data\landing.yml`
- **DEP-004**: `D:\Codes\qiulin\mossagents.github.io\_layouts\default.html`
- **DEP-005**: Existing include files under `D:\Codes\qiulin\mossagents.github.io\_includes\`
- **DEP-006**: Existing visual system in `D:\Codes\qiulin\mossagents.github.io\assets\css\site.css`

## 5. Files

- **FILE-001**: `D:\Codes\qiulin\mossagents.github.io\assets\css\site.css` — primary visual-system refactor target.
- **FILE-002**: `D:\Codes\qiulin\mossagents.github.io\_includes\hero.html` — hero banner structure.
- **FILE-003**: `D:\Codes\qiulin\mossagents.github.io\_includes\proof-strip.html` — proof strip structure.
- **FILE-004**: `D:\Codes\qiulin\mossagents.github.io\_includes\surface-cards.html` — product surfaces layout.
- **FILE-005**: `D:\Codes\qiulin\mossagents.github.io\_includes\architecture-section.html` — architecture row layout.
- **FILE-006**: `D:\Codes\qiulin\mossagents.github.io\_includes\capabilities.html` — capabilities grouped list layout.
- **FILE-007**: `D:\Codes\qiulin\mossagents.github.io\_includes\quickstart.html` — editorial adoption section.
- **FILE-008**: `D:\Codes\qiulin\mossagents.github.io\_includes\apps-showcase.html` — compact catalog layout.
- **FILE-009**: `D:\Codes\qiulin\mossagents.github.io\_includes\docs-cta.html` — split closing band.

## 6. Testing

- **TEST-001**: Confirm the hero renders as one shared banner surface rather than a set of independent cards.
- **TEST-002**: Confirm proof, surfaces, architecture, capabilities, quickstart, apps, and docs sections no longer rely on repeated floating-card styling.
- **TEST-003**: Confirm dark code snippets remain limited to compact inset blocks and do not recreate large panel cards.
- **TEST-004**: Confirm all section includes still render with the existing `_data\landing.yml` structure.
- **TEST-005**: Confirm heading order, focus states, contrast, and mobile collapse remain correct after the refactor.
- **TEST-006**: If Jekyll is available, confirm a local site build succeeds without Liquid or data-reference errors.

## 7. Risks & Assumptions

- **RISK-001**: CSS changes may unintentionally regress spacing or responsiveness in multiple sections because the current page shares card styling across many selectors.
- **RISK-002**: Without a local Jekyll toolchain, final validation may rely on static inspection and CI feedback.
- **ASSUMPTION-001**: `_data\landing.yml` can remain unchanged for this refactor.
- **ASSUMPTION-002**: The current section order and copy remain acceptable once the visual treatment is improved.
- **ASSUMPTION-003**: The existing include boundaries are sufficient for the approved redesign.

## 8. Related Specifications / Further Reading

- `D:\Codes\qiulin\mossagents.github.io\docs\superpowers\specs\2026-04-09-moss-landing-page-design.md`
- `D:\Codes\qiulin\mossagents.github.io\docs\superpowers\specs\2026-04-09-moss-landing-style-refresh-design.md`
