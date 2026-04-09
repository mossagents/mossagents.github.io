---
goal: Rebuild the Moss GitHub Pages landing page into a Skyline-inspired technical product homepage with rewritten copy, restructured information architecture, and Jekyll-safe implementation.
version: 1.0
date_created: 2026-04-09
last_updated: 2026-04-09
owner: Copilot
status: Completed
tags: [design, refactor, jekyll, github-pages, landing-page, copywriting]
---

# Introduction

![Status: Completed](https://img.shields.io/badge/status-Completed-brightgreen)

This plan defines the implementation work required to replace the current Moss landing page with a new technical product homepage inspired by the structure and pacing of `skyline.deeploop.dev`. The implementation must preserve Moss-specific runtime, apps, and examples content, rewrite the homepage copy, keep GitHub as the primary CTA, and remain compatible with static Jekyll/GitHub Pages hosting.

## 1. Requirements & Constraints

- **REQ-001**: Replace the current homepage information architecture with the approved structure: hero, technical pillars, adoption flow, runtime architecture, product surfaces, docs plus FAQ, and final CTA.
- **REQ-002**: Rewrite homepage copy instead of lightly editing current headings and summaries.
- **REQ-003**: Position Moss runtime-first, with platform and app surfaces as supporting layers.
- **REQ-004**: Keep `https://github.com/mossagents/moss` as the dominant CTA.
- **REQ-005**: Preserve explicit coverage of `mosscode`, `mosswork`, and at least two runnable examples.
- **REQ-006**: Add a required FAQ section answering what Moss is, who it is for, and how runtime relates to apps/examples.
- **CON-001**: Keep the site as a Jekyll single-page GitHub Pages site.
- **CON-002**: Preserve persistent data/layout contracts for brand, navigation, header CTA, and footer links.
- **CON-003**: Do not imitate Skyline's product claims or reuse Skyline-specific wording.
- **CON-004**: Avoid introducing JavaScript requirements, frontend frameworks, or unsupported GitHub Pages plugins.
- **GUD-001**: Treat `docs/superpowers/specs/2026-04-09-moss-landing-skyline-redesign-design.md` as the primary redesign spec.
- **GUD-002**: Keep English-first publishing and explicit labels for non-English documentation links.
- **PAT-001**: Prefer section/grid layout primitives over ad hoc one-off blocks.
- **PAT-002**: Keep homepage claims grounded in current Moss repository structure and documentation.
- **ACC-001**: Preserve semantic heading order, visible focus states, responsive collapse behavior, and readable FAQ/mobile layouts.

## 2. Implementation Steps

### Implementation Phase 1

- GOAL-001: Replace the landing-page content model and section composition so the page structure matches the approved redesign.

| Task | Description | Completed | Date |
|------|-------------|-----------|------|
| TASK-001 | Rewrite `D:\Codes\qiulin\mossagents.github.io\_data\landing.yml` to define a new machine-readable homepage model containing `brand`, `navigation`, `hero`, `technical_pillars`, `adoption_steps`, `runtime_architecture`, `product_surfaces`, `docs`, `faq`, `final_cta`, and `footer`. Remove obsolete structures that only serve the previous homepage layout. | ✅ | 2026-04-09 |
| TASK-002 | Update `D:\Codes\qiulin\mossagents.github.io\index.html` so section composition reflects the approved order: hero, pillars, adoption flow, runtime architecture, product surfaces, docs plus FAQ, final CTA. | ✅ | 2026-04-09 |
| TASK-003 | Review `D:\Codes\qiulin\mossagents.github.io\_layouts\default.html` and adjust shared shell elements only where needed to support the new page rhythm while preserving brand, navigation, GitHub header CTA, and footer links. | ✅ | 2026-04-09 |

### Implementation Phase 2

- GOAL-002: Rebuild section includes around the new information architecture and rewritten Moss-specific copy.

| Task | Description | Completed | Date |
|------|-------------|-----------|------|
| TASK-004 | Replace or refactor `D:\Codes\qiulin\mossagents.github.io\_includes\hero.html` so it renders the new runtime-first product hero with rewritten title, supporting copy, primary GitHub CTA, secondary docs CTA, and a compact technical summary area. | ✅ | 2026-04-09 |
| TASK-005 | Replace the current proof/value treatment with a new technical-pillar section include. Either repurpose `D:\Codes\qiulin\mossagents.github.io\_includes\proof-strip.html` or create a replacement include, but ensure the final rendered section is a 4-6 item platform/runtime grid rather than the current short proof strip. | ✅ | 2026-04-09 |
| TASK-006 | Replace or refactor `D:\Codes\qiulin\mossagents.github.io\_includes\quickstart.html` into a three-step adoption-flow section explaining how teams start with app surfaces, build with appkit/runtime, and extend into fuller product/runtime paths. | ✅ | 2026-04-09 |
| TASK-007 | Replace or refactor `D:\Codes\qiulin\\mossagents.github.io\_includes\architecture-section.html` so it remains the technical center of the page and renders runtime layers using the new copy and layout language. | ✅ | 2026-04-09 |
| TASK-008 | Replace or refactor `D:\Codes\qiulin\mossagents.github.io\_includes\apps-showcase.html` so it becomes a product-surfaces section covering `mosscode`, `mosswork`, and at least two runnable examples with Moss-specific evaluation framing. | ✅ | 2026-04-09 |
| TASK-009 | Replace or refactor `D:\Codes\qiulin\mossagents.github.io\_includes\docs-cta.html` into a docs plus FAQ section, and add a separate final CTA include if needed to keep FAQ content and conversion content independently understandable. | ✅ | 2026-04-09 |

### Implementation Phase 3

- GOAL-003: Rebuild the visual system and page-level layout so the homepage feels closer to a mature technical product site and less like the current editorial shell.

| Task | Description | Completed | Date |
|------|-------------|-----------|------|
| TASK-010 | Rewrite `D:\Codes\qiulin\mossagents.github.io\assets\css\site.css` to support the new Skyline-inspired technical product layout: cleaner hero proportions, stronger module/grid system, clearer section bands, structured technical blocks, and FAQ layout. Remove selectors that only exist for the current editorial-shell design. | ✅ | 2026-04-09 |
| TASK-011 | Ensure hero typography is reduced from the current oversized editorial treatment to a mature product-site scale, while keeping runtime-first positioning visually dominant. | ✅ | 2026-04-09 |
| TASK-012 | Create responsive layouts for technical pillars, adoption steps, runtime architecture, product surfaces, FAQ, and final CTA so every section collapses cleanly on tablet and mobile. | ✅ | 2026-04-09 |

### Implementation Phase 4

- GOAL-004: Validate content correctness, Jekyll stability, and user-facing consistency after the redesign.

| Task | Description | Completed | Date |
|------|-------------|-----------|------|
| TASK-013 | Verify all homepage copy is newly written and grounded in current Moss repository truths rather than legacy landing text. | ✅ | 2026-04-09 |
| TASK-014 | Verify all non-English documentation links remain labeled explicitly in the docs area. | ✅ | 2026-04-09 |
| TASK-015 | Verify no section depends on JavaScript for reading or navigation and that all interactive elements remain standard links/buttons. | ✅ | 2026-04-09 |
| TASK-016 | If a local Jekyll/Ruby toolchain is available, run a local site build against `D:\Codes\qiulin\mossagents.github.io`; otherwise validate by reviewing Liquid syntax, data references, and repository diff before relying on CI. | ✅ | 2026-04-09 |

## 3. Alternatives

- **ALT-001**: Continue iterating on the current editorial-shell landing page. Rejected because the user explicitly dislikes the current direction and asked to use Skyline as the new structural reference.
- **ALT-002**: Copy Skyline's full SaaS-style page model and wording patterns directly. Rejected because it would make the page feel generic and disconnect it from Moss's actual runtime/platform identity.
- **ALT-003**: Preserve the current content model and only rewrite CSS. Rejected because the approved redesign requires both new information architecture and rewritten copy.

## 4. Dependencies

- **DEP-001**: `D:\Codes\qiulin\mossagents.github.io\docs\superpowers\specs\2026-04-09-moss-landing-skyline-redesign-design.md`
- **DEP-002**: Current Jekyll shell files in `D:\Codes\qiulin\mossagents.github.io\index.html`, `_layouts\default.html`, `_includes\`, and `assets\css\site.css`
- **DEP-003**: The Moss repository README and current repository docs that define runtime/app/appkit terminology
- **DEP-004**: Current `apps\` and `examples\` entry points in the Moss repository for product-surface coverage

## 5. Files

- **FILE-001**: `D:\Codes\qiulin\mossagents.github.io\_data\landing.yml` — homepage content/data model rewrite.
- **FILE-002**: `D:\Codes\qiulin\mossagents.github.io\index.html` — section composition order.
- **FILE-003**: `D:\Codes\qiulin\mossagents.github.io\_layouts\default.html` — persistent shell and shared navigation/footer behavior.
- **FILE-004**: `D:\Codes\qiulin\mossagents.github.io\_includes\hero.html` — runtime-first hero rewrite.
- **FILE-005**: `D:\Codes\qiulin\mossagents.github.io\_includes\proof-strip.html` or replacement include — technical pillars section.
- **FILE-006**: `D:\Codes\qiulin\mossagents.github.io\_includes\quickstart.html` or replacement include — adoption flow section.
- **FILE-007**: `D:\Codes\qiulin\mossagents.github.io\_includes\architecture-section.html` — runtime architecture section.
- **FILE-008**: `D:\Codes\qiulin\mossagents.github.io\_includes\apps-showcase.html` — product surfaces section.
- **FILE-009**: `D:\Codes\qiulin\mossagents.github.io\_includes\docs-cta.html` and/or new FAQ/final-CTA include files — docs, FAQ, and conversion sections.
- **FILE-010**: `D:\Codes\qiulin\mossagents.github.io\assets\css\site.css` — full visual-system rewrite for the new homepage.

## 6. Testing

- **TEST-001**: Confirm the final homepage contains hero, technical pillars, adoption flow, runtime architecture, product surfaces, docs, FAQ, and final CTA sections in the approved order.
- **TEST-002**: Confirm the hero positions Moss as runtime-first with supporting platform/app-surface language.
- **TEST-003**: Confirm `mosscode`, `mosswork`, and at least two runnable examples are present in product-surface coverage.
- **TEST-004**: Confirm non-English documentation links are explicitly labeled in the docs section.
- **TEST-005**: Confirm headings, focus states, responsive grids, and FAQ collapse remain accessible.
- **TEST-006**: If Jekyll is available locally, confirm a build succeeds without data, Liquid, or include errors.

## 7. Risks & Assumptions

- **RISK-001**: This redesign touches data shape, section composition, copy, and CSS simultaneously, so regressions are likely if old include/data assumptions remain.
- **RISK-002**: Without a local Jekyll/Ruby toolchain, validation may depend on static inspection and GitHub Actions feedback.
- **ASSUMPTION-001**: The current site can remain a single-page product homepage without introducing additional routed pages.
- **ASSUMPTION-002**: The Moss repository README/docs provide enough source truth to rewrite the landing-page copy accurately.
- **ASSUMPTION-003**: GitHub remains the correct primary CTA even after the redesign.

## 8. Related Specifications / Further Reading

- `D:\Codes\qiulin\mossagents.github.io\docs\superpowers\specs\2026-04-09-moss-landing-skyline-redesign-design.md`
- `D:\Codes\qiulin\mossagents.github.io\docs\superpowers\specs\2026-04-09-moss-landing-page-design.md`
- `D:\Codes\qiulin\mossagents.github.io\docs\superpowers\specs\2026-04-09-moss-landing-style-refresh-design.md`
