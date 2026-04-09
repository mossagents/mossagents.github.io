# Moss Landing Page Skyline-Inspired Redesign

## Summary

This design replaces the current Moss GitHub Pages landing page with a new technical product homepage inspired by the structure and pacing of `https://skyline.deeploop.dev/`. The goal is not to imitate Skyline's product category or copy style directly, but to borrow its more mature homepage rhythm: stronger hero framing, clearer value modules, adoption steps, platform explanation, and FAQ-style clarification. The resulting page should remain deeply Moss-specific and technically credible.

## Goals

- Rebuild the homepage around a more coherent technical product-site structure.
- Rewrite the homepage copy instead of incrementally editing the current text.
- Keep Moss positioned runtime-first, with platform and app surfaces as supporting layers.
- Preserve clear coverage of runtime, apps, and examples.
- Keep the implementation compatible with Jekyll and GitHub Pages.

## Non-goals

- Turning the page into a generic SaaS marketing clone.
- Copying Skyline's feature set or product claims.
- Replacing Moss's technical voice with broad AI marketing language.
- Introducing a client-side framework or dynamic app shell.

## Audience

Primary audience:

- technical evaluators and engineering teams assessing Moss as a runtime/platform for agent systems.

Secondary audience:

- developers who want to understand the current app surfaces and adoption path quickly.

## Positioning

The homepage should present Moss as:

- a runtime for Go first
- a composable platform second
- a set of usable app surfaces and examples third

This means the page should not open by talking about apps alone, nor by presenting Moss as a vague AI platform. The hero and supporting copy should make the runtime foundation clear immediately, then expand into the broader system and product surfaces.

## Core direction

### Reference usage

Skyline should be used as a reference for:

- homepage pacing
- section rhythm
- module clarity
- visual confidence
- onboarding/flow framing

Skyline should not be used as a source for:

- product wording
- feature naming
- product positioning
- SaaS-style promises or claims

### Page type

The new page should be a **technical product page**:

- more structured and polished than the current editorial shell
- more product-shaped than a documentation homepage
- more technical and grounded than a startup marketing page

## Spec precedence and inheritance

This redesign supersedes the current landing-page presentation direction, but not every prior constraint.

### Superseded

This spec replaces earlier landing-page decisions about:

- section order
- visual direction
- current homepage information architecture
- the current editorial-shell section treatment

### Inherited

The following requirements remain in force from prior landing-page work unless explicitly changed here:

- English-first publishing
- GitHub repository as the dominant primary CTA
- explicit language labeling for non-English documentation links
- Jekyll and GitHub Pages compatibility
- accessible heading structure, focus visibility, and responsive collapse behavior

### Base contracts that remain

The site should still preserve persistent layout/data contracts for:

- `brand`
- `navigation`
- header CTA
- footer links

These may be restyled, but they should remain present in the data model and layout.

## Information architecture

The new homepage should follow this structure:

1. **Hero**
   - runtime-first positioning
   - rewritten title and supporting copy
   - primary GitHub CTA
   - secondary docs/readme CTA
   - compact technical summary area rather than stacked code-heavy cards

2. **Technical pillars**
   - a 4-6 item grid explaining Moss's key platform/runtime strengths
   - this section replaces the current proof-strip role and expands it into stronger value framing

3. **Adoption flow**
   - a 3-step section describing how teams approach Moss in practice:
     - run an existing surface
     - build with the runtime/appkit
     - extend into a fuller product/runtime path

4. **Runtime architecture**
   - a clear section explaining kernel, runtime assembly, appkit, preset, and apps/examples
   - this remains the technical center of the page

5. **Product surfaces**
   - a section explicitly describing core apps and example entry points
   - these should feel like current ways to use or evaluate Moss, not like an afterthought catalog
   - this section must include:
     - `mosscode`
     - `mosswork`
     - at least two runnable examples

6. **Docs and FAQ**
   - a clean docs area plus a short FAQ that answers key framing questions
   - the FAQ is required, not optional
   - required FAQ topics:
     - what Moss is
     - who Moss is for
     - how the runtime relates to apps and examples

7. **Final CTA**
   - close with GitHub-first conversion and one secondary docs/readme path

## Visual direction

The page should move away from the current oversized editorial typography and toward a more structured product-site system.

### Target qualities

- clean
- modern
- technical
- confident
- product-grade

### What should change from the current version

- hero typography should be reduced to a more mature product-site proportion
- section modules should become more grid-oriented and explicit
- the page should feel more like a coherent software homepage and less like a refined README
- technical information should be distributed through grids, steps, and system sections rather than concentrated in the hero alone

### What should remain

- bright background system
- restrained engineering tone
- no heavy card stacking
- no flashy illustration-driven marketing treatment

## Copy strategy

The homepage copy should be rewritten from scratch.

### Tone

- technical
- precise
- product-aware
- confident without hype

### Writing model

1. **Hero copy**
   - define Moss clearly as a runtime-first system for building agent products in Go
   - immediately clarify that it also provides app surfaces and examples

2. **Pillar copy**
   - use short, product-quality headlines
   - each item should explain a real engineering value: extensibility, runtime boundaries, orchestration, trust, persistence, product surfaces

3. **Adoption flow copy**
   - explain how teams start and expand, not just what sections exist

4. **Architecture copy**
   - stay explicit and technical
   - keep actual repository concepts visible

5. **FAQ copy**
   - reduce friction and ambiguity for readers who are not yet familiar with Moss

### Tone boundaries

The copy should not:

- sound like generic AI tooling marketing
- overpromise operational outcomes
- describe Moss as a polished managed service

## Structural and implementation guidance

- The redesign should remain a single-page Jekyll site.
- `index.html` can keep the single-page entry model, but section composition should be reorganized to match the new information architecture.
- `_data/landing.yml` should be rewritten to fit the new page structure:
  - brand
  - navigation
  - hero
  - technical pillars
  - adoption steps
  - runtime architecture
  - product surfaces
  - docs
  - faq
  - final CTA
  - footer
- Current include boundaries may be changed or replaced where needed.
- The implementation should prefer a cleaner section/grid system over trying to patch the current layout incrementally.

### Content source expectations

- Runtime/platform claims should be grounded in the Moss repository README and current documentation.
- App and example coverage should come from the current `apps/` and `examples/` surfaces in the repository.
- The spec should remain portable as a repository document; implementation plans should reference repository-relative content sources rather than depending on absolute local paths as the source of truth.

## Accessibility and resilience

- Preserve proper heading order.
- Keep strong contrast and visible focus states.
- Make all grids collapse cleanly on smaller screens.
- Ensure FAQ and multi-column sections remain readable when stacked on mobile.
- Keep all core reading and navigation behavior JavaScript-free.

## Acceptance criteria

The redesign is complete when:

- the homepage structure clearly resembles a mature technical product site rather than the current editorial shell
- the hero presents Moss as runtime-first with supporting platform/app-surface context
- the copy has been rewritten instead of lightly edited
- the page contains technical pillars, adoption flow, architecture, product surfaces, and FAQ sections
- the page retains brand/navigation/header/footer data contracts in the Jekyll data model
- GitHub remains the dominant CTA
- the resulting page still feels specific to Moss and does not read like a Skyline copy-paste
- the site remains compatible with standard Jekyll/GitHub Pages behavior

## Notes

- This redesign supersedes the current visual direction, but does not invalidate the earlier architectural understanding of Moss itself.
- Reuse product truths from `D:\Codes\qiulin\moss\README.md` and related docs, but rewrite how they are presented on the homepage.
