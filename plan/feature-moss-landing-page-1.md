---
goal: Create a Jekyll-based GitHub Pages landing page for Moss that reflects the approved architecture-led product design and converts users to the GitHub repository.
version: 1.0
date_created: 2026-04-09
last_updated: 2026-04-09
owner: Copilot
status: Completed
tags: [feature, design, architecture, jekyll, github-pages]
---

# Introduction

![Status: Completed](https://img.shields.io/badge/status-Completed-brightgreen)

This plan defines the exact implementation steps required to build the Moss landing page in `D:\Codes\qiulin\mossagents.github.io` using a modular Jekyll structure. The implementation must remain GitHub Pages-safe, English-first, data-driven where useful, and aligned to the approved design spec at `docs/superpowers/specs/2026-04-09-moss-landing-page-design.md`.

## 1. Requirements & Constraints

- **REQ-001**: Implement a single-page landing experience in the repository root that renders through Jekyll front matter and layouts.
- **REQ-002**: Make `https://github.com/mossagents/moss` the dominant CTA in the hero and final CTA sections.
- **REQ-003**: Present the three Moss product surfaces explicitly: runtime, core apps, and runnable examples.
- **REQ-004**: Reflect the actual Moss repository structure and capabilities from `D:\Codes\qiulin\moss\README.md` and `D:\Codes\qiulin\moss\docs\*.md`.
- **REQ-005**: Keep the page English-first while labeling Chinese-language documentation targets explicitly.
- **SEC-001**: Use static HTML and CSS only for core page behavior; do not require JavaScript for reading or navigation.
- **SEC-002**: Avoid unsupported GitHub Pages plugins and dynamic runtime dependencies.
- **CON-001**: Preserve the existing `CNAME` file and avoid changing unrelated repository content.
- **CON-002**: Use deterministic file paths and include partial boundaries so future updates do not require editing one large HTML file.
- **GUD-001**: Follow the approved design spec in `docs/superpowers/specs/2026-04-09-moss-landing-page-design.md`.
- **GUD-002**: Use a bright, restrained engineering-product visual style with moss-green accents.
- **PAT-001**: Centralize change-prone content in `_data/landing.yml`.
- **PAT-002**: Compose the landing page through `_layouts/default.html` and dedicated include files for each section.

## 2. Implementation Steps

### Implementation Phase 1

- **GOAL-001**: Create the Jekyll site scaffold and deterministic content model for the landing page.

| Task | Description | Completed | Date |
|------|-------------|-----------|------|
| TASK-001 | Create `D:\Codes\qiulin\mossagents.github.io\_config.yml` with site metadata, description, and default Markdown settings suitable for GitHub Pages. | ✅ | 2026-04-09 |
| TASK-002 | Create `D:\Codes\qiulin\mossagents.github.io\_data\landing.yml` containing navigation, hero copy, CTA URLs, proof-strip items, architecture layers, capabilities, quickstart content, featured apps/examples, and documentation links with language labels. | ✅ | 2026-04-09 |
| TASK-003 | Create `D:\Codes\qiulin\mossagents.github.io\index.html` with Jekyll front matter and include composition order matching the approved information architecture. | ✅ | 2026-04-09 |

### Implementation Phase 2

- **GOAL-002**: Implement reusable Jekyll layout and section partials with clear rendering contracts.

| Task | Description | Completed | Date |
|------|-------------|-----------|------|
| TASK-004 | Create `D:\Codes\qiulin\mossagents.github.io\_layouts\default.html` to render document head, header navigation, footer, and `{{ content }}` insertion using data from `_data/landing.yml`. | ✅ | 2026-04-09 |
| TASK-005 | Create `D:\Codes\qiulin\mossagents.github.io\_includes\hero.html`, `proof-strip.html`, `surface-cards.html`, `architecture-section.html`, `capabilities.html`, `quickstart.html`, `apps-showcase.html`, and `docs-cta.html` with loop-driven rendering over `_data/landing.yml`. | ✅ | 2026-04-09 |
| TASK-006 | Ensure each include renders cleanly when optional list lengths are shorter than ideal, without placeholder blocks or broken grid structure. | ✅ | 2026-04-09 |

### Implementation Phase 3

- **GOAL-003**: Implement the visual system and responsive layout for the engineering-led product page.

| Task | Description | Completed | Date |
|------|-------------|-----------|------|
| TASK-007 | Create `D:\Codes\qiulin\mossagents.github.io\assets\css\site.css` with design tokens, typography, spacing, card styles, grid systems, buttons, code-panel styles, responsive breakpoints, and focus states. | ✅ | 2026-04-09 |
| TASK-008 | Style the hero with a product narrative column and a code/runtime proof column that remains readable on mobile screens. | ✅ | 2026-04-09 |
| TASK-009 | Style section grids for proof items, product surfaces, capabilities, quickstart lanes, and showcase cards so they remain balanced across desktop, tablet, and mobile widths. | ✅ | 2026-04-09 |

### Implementation Phase 4

- **GOAL-004**: Finalize, validate, and document the delivered page structure.

| Task | Description | Completed | Date |
|------|-------------|-----------|------|
| TASK-010 | Verify the repository diff contains only the intended landing-page files plus planning/spec artifacts. | ✅ | 2026-04-09 |
| TASK-011 | If a local Jekyll executable is available, run a build command against `D:\Codes\qiulin\mossagents.github.io`; otherwise validate by inspecting generated source files and repo state only. | ✅ | 2026-04-09 |
| TASK-012 | Update `D:\Codes\qiulin\mossagents.github.io\README.md` only if a concise site-specific note is needed after implementation; otherwise leave it unchanged. | ✅ | 2026-04-09 |

## 3. Alternatives

- **ALT-001**: Implement the page as a single large `index.html` file without includes. Rejected because it weakens maintainability and conflicts with the approved modular Jekyll structure.
- **ALT-002**: Build the landing page as a JavaScript-heavy app shell. Rejected because it adds unnecessary complexity and violates the static GitHub Pages-safe requirement.
- **ALT-003**: Use a dark, terminal-style aesthetic. Rejected because the approved design direction shifted to a lighter and brighter engineering-product tone.

## 4. Dependencies

- **DEP-001**: `D:\Codes\qiulin\moss\README.md` for English positioning and runtime narrative.
- **DEP-002**: `D:\Codes\qiulin\moss\README_ZH.md` for bilingual reference and link-labeling awareness.
- **DEP-003**: `D:\Codes\qiulin\moss\docs\architecture.md` for layered architecture terminology.
- **DEP-004**: `D:\Codes\qiulin\moss\docs\getting-started.md` for quickstart and app-entry content.
- **DEP-005**: `D:\Codes\qiulin\moss\docs\skills.md` and `D:\Codes\qiulin\moss\docs\roadmap.md` for capability and roadmap link targets.
- **DEP-006**: `D:\Codes\qiulin\mossagents.github.io\docs\superpowers\specs\2026-04-09-moss-landing-page-design.md` as the approved design source of truth.

## 5. Files

- **FILE-001**: `D:\Codes\qiulin\mossagents.github.io\_config.yml` — site metadata and Jekyll settings.
- **FILE-002**: `D:\Codes\qiulin\mossagents.github.io\_data\landing.yml` — centralized page content.
- **FILE-003**: `D:\Codes\qiulin\mossagents.github.io\index.html` — landing-page composition entrypoint.
- **FILE-004**: `D:\Codes\qiulin\mossagents.github.io\_layouts\default.html` — global HTML shell and navigation.
- **FILE-005**: `D:\Codes\qiulin\mossagents.github.io\_includes\hero.html` — hero section renderer.
- **FILE-006**: `D:\Codes\qiulin\mossagents.github.io\_includes\proof-strip.html` — proof-strip renderer.
- **FILE-007**: `D:\Codes\qiulin\mossagents.github.io\_includes\surface-cards.html` — product-surface renderer.
- **FILE-008**: `D:\Codes\qiulin\mossagents.github.io\_includes\architecture-section.html` — architecture narrative renderer.
- **FILE-009**: `D:\Codes\qiulin\mossagents.github.io\_includes\capabilities.html` — capabilities grid renderer.
- **FILE-010**: `D:\Codes\qiulin\mossagents.github.io\_includes\quickstart.html` — quickstart renderer.
- **FILE-011**: `D:\Codes\qiulin\mossagents.github.io\_includes\apps-showcase.html` — apps/examples showcase renderer.
- **FILE-012**: `D:\Codes\qiulin\mossagents.github.io\_includes\docs-cta.html` — docs and final CTA renderer.
- **FILE-013**: `D:\Codes\qiulin\mossagents.github.io\assets\css\site.css` — visual system and responsive styling.

## 6. Testing

- **TEST-001**: Confirm `index.html` contains valid Jekyll front matter and renders all include sections in the approved order.
- **TEST-002**: Confirm every CTA URL in `_data/landing.yml` resolves to the intended GitHub or documentation destination and that Chinese-language docs are labeled explicitly.
- **TEST-003**: Confirm the CSS includes visible focus states, mobile breakpoints, and balanced card/grid behavior without JavaScript.
- **TEST-004**: If Jekyll is available locally, run a site build and inspect for template errors or missing include/data references.

## 7. Risks & Assumptions

- **RISK-001**: GitHub Pages local tooling may not be installed in the environment, limiting full build verification.
- **RISK-002**: Moss source documentation may evolve, requiring future updates to page copy or link targets.
- **ASSUMPTION-001**: The landing page will remain a single-page site rather than expanding into a larger docs portal in this change.
- **ASSUMPTION-002**: External asset hosting is unnecessary; the page can be expressed with native HTML/CSS only.
- **ASSUMPTION-003**: The approved design spec remains the authoritative source for scope and presentation choices.

## 8. Related Specifications / Further Reading

- `D:\Codes\qiulin\mossagents.github.io\docs\superpowers\specs\2026-04-09-moss-landing-page-design.md`
- `D:\Codes\qiulin\moss\README.md`
- `D:\Codes\qiulin\moss\docs\architecture.md`
- `D:\Codes\qiulin\moss\docs\getting-started.md`
