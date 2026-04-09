---
goal: Rebuild the Moss GitHub Pages landing page into a non-card, full-bleed technical homepage with restrained hero framing and flat section-band layout.
version: 1.0
date_created: 2026-04-09
last_updated: 2026-04-09
owner: Copilot
status: Planned
tags: [design, refactor, jekyll, github-pages, landing-page, non-card, full-bleed]
---

# Introduction

![Status: Planned](https://img.shields.io/badge/status-Planned-blue)

This plan defines the implementation work required to replace the current card-heavy Moss homepage with the approved non-card redesign documented in `docs/superpowers/specs/2026-04-09-moss-landing-non-card-redesign-design.md`. The implementation must preserve Moss-specific runtime, apps, examples, docs, and FAQ coverage while replacing floating panels and rounded white blocks with a flatter full-bleed section-band system that remains compatible with Jekyll and GitHub Pages.

## 1. Requirements & Constraints

- **REQ-001**: Replace the current homepage visual language so the dominant section pattern is no longer floating cards, rounded white panels, or paired hero panels.
- **REQ-002**: Keep the homepage single-page and Jekyll-compatible in `D:\Codes\qiulin\mossagents.github.io\`.
- **REQ-003**: Keep the homepage runtime-first, with app surfaces and examples as supporting evaluation paths.
- **REQ-004**: Preserve explicit coverage of `mosscode`, `mosswork`, `mossresearch`, and `mosswriter`.
- **REQ-005**: Keep GitHub repository navigation as the primary CTA and README as the secondary CTA.
- **REQ-006**: Preserve explicit `Chinese` labels for non-English documentation links.
- **REQ-007**: Rebuild hero, pillars, adoption flow, surfaces, docs, FAQ, and final CTA as flat section-band structures rather than showcase-card structures.
- **REQ-008**: Keep runtime architecture as the strongest section on the page through a full-width dark technical band with distinct rows for `kernel`, `appkit/runtime`, `appkit`, `presets`, and `apps/examples`.
- **SEC-001**: Preserve standard link-based navigation and avoid introducing JavaScript-driven interactions or unsupported GitHub Pages plugins.
- **CON-001**: Do not regress the existing `brand`, `navigation`, `header_cta`, and `footer.links` data/layout contracts in `D:\Codes\qiulin\mossagents.github.io\_data\landing.yml` and `D:\Codes\qiulin\mossagents.github.io\_layouts\default.html`.
- **CON-002**: Exclude internal planning/spec paths from public GitHub Pages output in `D:\Codes\qiulin\mossagents.github.io\_config.yml`.
- **CON-003**: Keep the hero restrained; the majority of technical density must begin in sections below the fold.
- **GUD-001**: Treat `D:\Codes\qiulin\mossagents.github.io\docs\superpowers\specs\2026-04-09-moss-landing-non-card-redesign-design.md` as the primary source of truth.
- **GUD-002**: Prefer flat rows, matrices, dividers, and section bands over boxed panels and independent tiles.
- **PAT-001**: Rebuild section includes whose current responsibilities are tied to the card-era layout assumptions: `hero.html`, `capabilities.html`, `quickstart.html`, `apps-showcase.html`, `docs-cta.html`, and `final-cta.html`.
- **PAT-002**: Extend `architecture-section.html` and `_layouts/default.html` only if their structural roles still fit the non-card system.
- **ACC-001**: Preserve proper heading order, sticky-header anchor offsets, semantic top-level sections for navigation targets, visible focus states, and flat mobile collapse behavior.

## 2. Implementation Steps

### Implementation Phase 1

- GOAL-001: Define a data model and page composition that support the non-card section-band system without reusing card-era assumptions.

| Task | Description | Completed | Date |
|------|-------------|-----------|------|
| TASK-001 | Rewrite `D:\Codes\qiulin\mossagents.github.io\_data\landing.yml` so the homepage data model explicitly supports restrained hero copy, flat pillar matrix items, horizontal adoption steps, runtime architecture rows, row-based product surfaces, flat docs links, flat FAQ items, and final CTA band content. Remove data keys or nested structures that only exist to power independent panel/card renderers. |  |  |
| TASK-002 | Update `D:\Codes\qiulin\mossagents.github.io\index.html` so the rendered section order remains `hero -> pillars -> adoption -> architecture -> surfaces -> docs/faq -> final CTA`, but each include is treated as a page band rather than a card container. |  |  |
| TASK-003 | Review `D:\Codes\qiulin\mossagents.github.io\_layouts\default.html` and keep only the shell logic that still fits the flatter layout system. Preserve `brand`, primary navigation, GitHub header CTA, sticky-header behavior, and footer links while removing any need for card-like framing in shared chrome. |  |  |
| TASK-004 | Update `D:\Codes\qiulin\mossagents.github.io\_config.yml` only if needed so internal planning/spec files remain excluded from GitHub Pages output during the redesign implementation. |  |  |

### Implementation Phase 2

- GOAL-002: Rebuild the page sections so each one communicates through flat bands, rows, and matrices instead of floating panels.

| Task | Description | Completed | Date |
|------|-------------|-----------|------|
| TASK-005 | Rebuild `D:\Codes\qiulin\mossagents.github.io\_includes\hero.html` into a restrained hero intro with short runtime-first headline, concise supporting text, GitHub/README CTAs, and no paired panel or summary-card treatment. If a supporting technical object is retained, it must belong to the hero band without reading as a separate card. |  |  |
| TASK-006 | Rebuild `D:\Codes\qiulin\mossagents.github.io\_includes\capabilities.html` so technical pillars render as a flat 4-6 item matrix with numbering, dividers, short titles, and concise copy, without per-item panel containers. |  |  |
| TASK-007 | Rebuild `D:\Codes\qiulin\mossagents.github.io\_includes\quickstart.html` so adoption flow renders as a three-step horizontal process band with explicit sequence and repository path cues, not as independent step cards. |  |  |
| TASK-008 | Rebuild `D:\Codes\qiulin\mossagents.github.io\_includes\architecture-section.html` so the runtime architecture becomes a full-width dark technical band with five distinct rows for `kernel`, `appkit/runtime`, `appkit`, `presets`, and `apps/examples`. Each row must expose label, detail, and explanation in a row-based map rather than boxed explanatory modules. |  |  |
| TASK-009 | Rebuild `D:\Codes\qiulin\mossagents.github.io\_includes\apps-showcase.html` so product surfaces render as a flat product index using rows or grid rows for `mosscode`, `mosswork`, `mossresearch`, and `mosswriter`, with name, type, explanation, and destination link visible without showcase-card framing. |  |  |
| TASK-010 | Rebuild `D:\Codes\qiulin\mossagents.github.io\_includes\docs-cta.html` so docs and FAQ render as flat knowledge lists under top-level sections `#docs` and `#faq`, without boxed side-by-side panels. Preserve explicit language labels and direct FAQ framing. |  |  |
| TASK-011 | Rebuild `D:\Codes\qiulin\mossagents.github.io\_includes\final-cta.html` so the final CTA becomes a closing emphasis band rather than a standalone promotional card. |  |  |

### Implementation Phase 3

- GOAL-003: Replace the current CSS system with a flatter full-bleed layout language that avoids the rejected card pattern.

| Task | Description | Completed | Date |
|------|-------------|-----------|------|
| TASK-012 | Rewrite `D:\Codes\qiulin\mossagents.github.io\assets\css\site.css` so the dominant visual primitives are section bands, tone shifts, dividers, row layouts, numbering, and typography hierarchy. Remove or neutralize selectors whose primary purpose is rounded white panel rendering, shadow-led separation, showcase-tile layout, or paired hero-card framing. |  |  |
| TASK-013 | Ensure the header, hero, pillars, adoption flow, architecture band, surfaces index, docs area, FAQ area, and final CTA all read as parts of one page system rather than isolated modules. Use spacing, lines, and background transitions instead of card chrome to establish hierarchy. |  |  |
| TASK-014 | Define responsive behavior in `D:\Codes\qiulin\mossagents.github.io\assets\css\site.css` so tablet and mobile layouts collapse into flat vertical lists/rows rather than stacked boxed tiles. Preserve anchor offset behavior for sticky-header navigation and keep top-level section starts visible on fragment navigation. |  |  |

### Implementation Phase 4

- GOAL-004: Validate that the implementation satisfies the non-card spec, content coverage, and GitHub Pages constraints.

| Task | Description | Completed | Date |
|------|-------------|-----------|------|
| TASK-015 | Verify the hero no longer reads as a large card or paired-panel layout, and that the strongest structural content begins below the fold. |  |  |
| TASK-016 | Verify technical pillars, adoption flow, product surfaces, docs, FAQ, and final CTA no longer depend on floating cards, rounded white panels, or independent showcase tiles as their dominant structure. |  |  |
| TASK-017 | Verify the product-surface coverage includes `mosscode`, `mosswork`, `mossresearch`, and `mosswriter`, and that runtime architecture exposes all five required rows. |  |  |
| TASK-018 | Verify non-English documentation links remain explicitly labeled `Chinese`, top-level navigation targets remain semantic sections, and sticky-header fragment navigation does not obscure section headings. |  |  |
| TASK-019 | If a local Jekyll toolchain is available, run a local site build in `D:\Codes\qiulin\mossagents.github.io`; otherwise validate by reviewing Liquid references, YAML parsing, repository diff, and GitHub Pages Actions after push. |  |  |

## 3. Alternatives

- **ALT-001**: Keep the current Skyline-inspired implementation and only reduce border radius or shadow. Rejected because the user explicitly rejected the current page as still card-based.
- **ALT-002**: Revert fully to a documentation-style editorial shell with almost no visual grouping. Rejected because the approved direction still requires a technical product homepage, not a plain docs index.
- **ALT-003**: Preserve the current includes and only rewrite `_data/landing.yml` copy. Rejected because the current include structure is already too tied to boxed/panel thinking in hero, pillars, surfaces, docs, FAQ, and final CTA.

## 4. Dependencies

- **DEP-001**: `D:\Codes\qiulin\mossagents.github.io\docs\superpowers\specs\2026-04-09-moss-landing-non-card-redesign-design.md`
- **DEP-002**: Current homepage files in `D:\Codes\qiulin\mossagents.github.io\index.html`, `D:\Codes\qiulin\mossagents.github.io\_layouts\default.html`, `D:\Codes\qiulin\mossagents.github.io\_includes\`, `D:\Codes\qiulin\mossagents.github.io\_data\landing.yml`, and `D:\Codes\qiulin\mossagents.github.io\assets\css\site.css`
- **DEP-003**: Moss repository content model already represented in the homepage data: runtime layers, docs links, `apps/` surfaces, and `examples/` surfaces
- **DEP-004**: Existing GitHub Pages workflow and exclusions in `D:\Codes\qiulin\mossagents.github.io\_config.yml`

## 5. Files

- **FILE-001**: `D:\Codes\qiulin\mossagents.github.io\plan\design-moss-landing-non-card-redesign-1.md` — implementation plan for the approved redesign.
- **FILE-002**: `D:\Codes\qiulin\mossagents.github.io\_data\landing.yml` — homepage data model rewrite for flat bands and row-based sections.
- **FILE-003**: `D:\Codes\qiulin\mossagents.github.io\index.html` — section composition order and include orchestration.
- **FILE-004**: `D:\Codes\qiulin\mossagents.github.io\_layouts\default.html` — persistent shell, navigation, sticky header, and footer behavior.
- **FILE-005**: `D:\Codes\qiulin\mossagents.github.io\_includes\hero.html` — restrained hero intro band.
- **FILE-006**: `D:\Codes\qiulin\mossagents.github.io\_includes\capabilities.html` — flat technical-pillar matrix.
- **FILE-007**: `D:\Codes\qiulin\mossagents.github.io\_includes\quickstart.html` — horizontal adoption-flow band.
- **FILE-008**: `D:\Codes\qiulin\mossagents.github.io\_includes\architecture-section.html` — full-width dark runtime-architecture band.
- **FILE-009**: `D:\Codes\qiulin\mossagents.github.io\_includes\apps-showcase.html` — row-based product-surface index.
- **FILE-010**: `D:\Codes\qiulin\mossagents.github.io\_includes\docs-cta.html` — flat docs and FAQ knowledge sections.
- **FILE-011**: `D:\Codes\qiulin\mossagents.github.io\_includes\final-cta.html` — closing emphasis band.
- **FILE-012**: `D:\Codes\qiulin\mossagents.github.io\assets\css\site.css` — full-bleed, non-card visual system.
- **FILE-013**: `D:\Codes\qiulin\mossagents.github.io\_config.yml` — GitHub Pages exclusion behavior if further adjustment is required.

## 6. Testing

- **TEST-001**: Confirm the final homepage contains hero, technical pillars, adoption flow, runtime architecture, product surfaces, docs, FAQ, and final CTA in the approved order.
- **TEST-002**: Confirm the hero is restrained and no longer rendered as a dominant white panel or paired-card layout.
- **TEST-003**: Confirm pillars, adoption flow, surfaces, docs, FAQ, and final CTA use flat bands/rows/matrices instead of floating panels or showcase cards.
- **TEST-004**: Confirm runtime architecture is visually and structurally the strongest section, with five distinct rows for `kernel`, `appkit/runtime`, `appkit`, `presets`, and `apps/examples`.
- **TEST-005**: Confirm `mosscode`, `mosswork`, `mossresearch`, and `mosswriter` are present in product-surface coverage.
- **TEST-006**: Confirm docs retain explicit `English`/`Chinese` labeling and FAQ remains a top-level semantic target if linked from primary navigation.
- **TEST-007**: Confirm sticky-header anchor navigation, visible focus states, and mobile collapse behavior remain accessible.
- **TEST-008**: If local Jekyll is available, confirm a build succeeds; otherwise confirm YAML/Liquid references are internally consistent and verify GitHub Pages Actions after pushing implementation commits.

## 7. Risks & Assumptions

- **RISK-001**: The current templates already embody the rejected card pattern, so partial edits may leave visual residue unless sections are rebuilt decisively.
- **RISK-002**: Without a local Jekyll/Ruby toolchain, final validation may rely on static inspection plus GitHub Pages Actions.
- **RISK-003**: Flattening the layout too aggressively could drift into a docs-index feel if section hierarchy and typography are not strong enough.
- **ASSUMPTION-001**: The current homepage content model can still be represented within a single-page GitHub Pages site.
- **ASSUMPTION-002**: The existing Moss repository coverage in docs, apps, and examples remains the correct source of truth for runtime, surfaces, and FAQ claims.
- **ASSUMPTION-003**: The user-approved direction should be implemented by rebuilding the layout language rather than iterating on the current card-based composition.

## 8. Related Specifications / Further Reading

- `D:\Codes\qiulin\mossagents.github.io\docs\superpowers\specs\2026-04-09-moss-landing-non-card-redesign-design.md`
- `D:\Codes\qiulin\mossagents.github.io\docs\superpowers\specs\2026-04-09-moss-landing-skyline-redesign-design.md`
- `D:\Codes\qiulin\mossagents.github.io\README.md`
