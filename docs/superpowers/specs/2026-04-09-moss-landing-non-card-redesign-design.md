# Moss Landing Page Non-Card Redesign

## Summary

This design replaces the current Moss homepage treatment with a flatter, full-bleed technical landing page. The goal is to remove the floating card feel from the current implementation and rebuild the page around section bands, divider-led structure, and restrained hero framing. The result should still feel like a product homepage, but without independent panels, rounded white blocks, or stacked card modules dominating the page.

## Goals

- Remove the card-heavy visual treatment from the current homepage.
- Rebuild the page as a full-bleed, section-band system.
- Keep the page runtime-first and technically credible.
- Preserve Moss-specific coverage of runtime layers, app surfaces, examples, docs, and FAQ.
- Keep the implementation compatible with Jekyll and GitHub Pages.

## Non-goals

- Reverting to the previous editorial-shell version.
- Keeping the current Skyline-inspired layout and only reducing border radius.
- Turning the site into a documentation index with no product shape.
- Adding JavaScript-driven interactions or frontend framework dependencies.

## Audience

Primary audience:

- engineering teams evaluating Moss as a composable runtime for agent systems in Go.

Secondary audience:

- developers who need to understand how runtime, shipped apps, and examples fit together.

## Positioning

The homepage should present Moss as:

- a runtime for Go first
- a system with explicit assembly layers second
- a repository with real app surfaces and runnable examples third

The page should feel more like a technical product index than a marketing campaign. It should not lead with a giant slogan or a visually isolated feature panel. Instead, it should make the runtime proposition clear quickly and then move readers into structured technical sections.

## Core direction

### Visual direction

The approved direction is:

- full-bleed section bands
- restrained hero
- structured technical content immediately below the fold
- small amounts of flat sectional grouping allowed
- no floating cards
- no rounded white panels
- no independent showcase tiles as the primary visual language

### Surface-treatment rule

Allowed:

- alternating page bands
- background-tone shifts
- thin dividers
- grid columns
- row-based lists
- dark technical bands
- code blocks that belong to a section

Not allowed:

- large rounded white blocks floating inside a larger page field
- stacked product cards
- isolated panels with drop-shadow-led hierarchy
- splitting the hero into two visual cards

### Hero rule

The hero should be more restrained than the current version.

- It should contain a short title, a brief runtime-first description, and primary/secondary CTAs.
- It should not carry the majority of the page's technical explanation.
- It should not use a large paired-panel layout.
- The strongest structure should begin in the sections immediately after the hero.

## Information architecture

The homepage should follow this structure:

1. **Hero intro**
   - restrained title and short description
   - GitHub primary CTA
   - README secondary CTA
   - minimal supporting text only

2. **Technical pillars**
   - presented as a flat information matrix rather than cards
   - 4-6 items
   - each item uses numbering, short title, and concise explanation

3. **Adoption flow**
   - a horizontal process band
   - 3 steps:
     - run a surface
     - build with appkit/runtime
     - extend into deeper product paths

4. **Runtime architecture**
   - the strongest section on the page
   - full-width dark technical band
   - row-based layer explanation with five distinct rows for:
     - kernel
     - appkit/runtime
     - appkit
     - presets
     - apps/examples

5. **Product surfaces**
   - a flat catalog/index rather than feature cards
   - each row should present:
     - name
     - type
     - short explanation
     - destination link
   - must include:
     - `mosscode`
     - `mosswork`
     - `mossresearch`
     - `mosswriter`

6. **Docs and FAQ**
   - a quiet lower-page knowledge area
   - docs as a flat list of links
   - FAQ as a flat list of questions/answers
   - no paired card treatment

7. **Final CTA band**
   - one closing full-width emphasis band
   - GitHub remains primary
   - README remains secondary

## Section behavior

### Technical pillars

This section should feel like a system grid, not a feature-card deck.

- Prefer visible column rhythm and dividers.
- Avoid isolated containers per item.
- Keep copy compact and technical.

### Adoption flow

This section should communicate a path through the repository.

- It should feel sequential.
- It should use step numbering and directional rhythm.
- It should not feel like three unrelated marketing boxes.

### Runtime architecture

This is the anchor section.

- It should visually reset the page with a stronger band treatment.
- It should read like a runtime-layer map.
- Rows should feel infrastructural and ordered.
- This section should carry more weight than the hero.

### Product surfaces

This section should behave like a product index.

- Favor row layouts, columns, metadata, and scanability.
- Avoid showcase-card framing.
- Make the repository feel explorable and current.

### Docs and FAQ

This section should feel quiet and useful.

- It should lower visual intensity after the architecture and surfaces sections.
- It should preserve explicit language labels for non-English documentation.
- FAQ should read as direct framing help, not as a marketing objection-handling block.

## Copy strategy

### Tone

- technical
- restrained
- product-aware
- direct
- non-hype

### Writing model

1. **Hero**
   - define Moss quickly
   - avoid oversized slogan-driven writing
   - support the rest of the page instead of trying to explain everything

2. **Section headings**
   - clear, short, structurally useful
   - more index-like than campaign-like

3. **Architecture and surfaces**
   - keep repository concepts visible
   - prefer explicit names over abstractions

4. **FAQ**
   - answer framing questions directly
   - required topics:
     - what Moss is
     - who Moss is for
     - how runtime relates to apps and examples

## Accessibility and resilience

- Preserve proper heading order.
- Preserve visible keyboard focus states.
- Ensure anchor navigation works with the sticky header.
- Keep mobile collapse clean without turning sections into stacked cards.
- On mobile, sections should collapse into flat vertical lists and rows, not isolated boxed tiles.
- Use semantic sections for top-level navigation targets.

## Data and implementation guidance

- Keep the site as a single-page Jekyll homepage.
- Preserve English-first publishing.
- Keep GitHub as the dominant CTA.
- Keep explicit `Chinese` labels on non-English documentation links.
- Existing section order may remain broadly similar, but section internals should be rebuilt around the new flat band system.
- `_data/landing.yml` may be rewritten again if needed to better support row-based and band-based rendering.
- `hero.html`, `capabilities.html`, `quickstart.html`, `apps-showcase.html`, `docs-cta.html`, and `final-cta.html` should be treated as likely rebuild candidates rather than lightly extended templates.
- `architecture-section.html` and `_layouts/default.html` may be extended if their structural roles still fit the flat band system.

## Spec precedence

This spec supersedes the current homepage visual treatment decisions introduced by the Skyline-inspired redesign implementation.

Inherited constraints that remain in force:

- runtime-first positioning
- GitHub primary CTA
- explicit non-English doc labeling
- Jekyll/GitHub Pages compatibility
- responsive behavior
- accessible heading and landmark structure

## Acceptance criteria

The redesign is acceptable when:

- the hero no longer reads as a large card or paired card layout
- the page no longer depends on rounded white panels as the dominant section pattern
- technical pillars, adoption flow, and product surfaces are no longer rendered as showcase cards
- runtime architecture is visually the strongest section
- docs and FAQ read as flat knowledge structures rather than boxed panels
- the page still clearly communicates runtime, app surfaces, examples, and documentation paths
- the implementation remains compatible with GitHub Pages
