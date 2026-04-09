# Moss Landing Page Style Refresh Design

## Summary

This design refresh replaces the current card-heavy visual treatment on the Moss landing page with an editorial, product-site shell. The page should keep the existing content structure and Jekyll data model, but shift visual hierarchy away from large rounded cards and toward continuous horizontal sections, strong typography, whitespace, and fine divider lines.

## Why this change

The current implementation feels like a collection of independent components instead of a coherent product homepage. The redesign should make the page read like one continuous narrative with distinct chapters rather than a dashboard of floating cards.

## Goals

- Remove the dominant floating-card look from the landing page.
- Make the first screen feel like one coherent product hero band.
- Preserve the existing information architecture and content model where possible.
- Build hierarchy primarily through typography, spacing, section rhythm, and subtle dividers.
- Keep technical credibility through selective code snippets and product-runtime cues.

## Non-goals

- Rewriting the Moss messaging strategy.
- Changing the current section order or core content scope.
- Turning the page into an illustration-heavy or animation-heavy marketing site.
- Adding JavaScript-driven interactions.

## Approved direction

### Page model

Use an **editorial shell**:

- one continuous hero banner
- horizontal section bands
- minimal card usage
- thin separators and restrained background shifts

### Hero direction

The hero should become a broad product banner rather than a set of adjacent cards. It should present:

- a large typographic headline
- supporting copy
- primary and secondary CTA buttons
- compact runtime proof points or technical signals in a horizontal or lightly structured format

### Section separation

Section boundaries should rely mainly on:

- whitespace
- subtle divider rules
- light background changes between bands
- layout rhythm

They should not rely on repeated white cards with heavy radius and shadow.

### Visual tone

The target feel is:

- bright
- calm
- product-grade
- engineering-oriented

It should feel closer to a modern developer-product homepage than a component gallery.

## Canonical implementation boundary

This refresh is layered on top of the approved base landing-page spec:

- `docs/superpowers/specs/2026-04-09-moss-landing-page-design.md`

That base spec remains the source of truth for:

- content/data ownership in `_data/landing.yml`
- include boundaries
- canonical link targets
- section order

This refresh spec only changes the visual system and section layout treatment. The implementation should continue to use the existing Jekyll units:

- `hero.html`
- `proof-strip.html`
- `surface-cards.html`
- `architecture-section.html`
- `capabilities.html`
- `quickstart.html`
- `apps-showcase.html`
- `docs-cta.html`

## UI treatment by section

### 1. Hero

- Replace the current large left card plus right stacked cards with a single hero band.
- Keep the headline dominant.
- Use a **single horizontal hero layout** on desktop:
  - left side: headline, support copy, CTAs
  - right side: one narrow technical rail with short runtime proof items and one compact code snippet block
- On tablet, collapse to a stacked hero with content first and technical rail second.
- On mobile, render one vertical hero column with the technical rail directly below the CTA row.
- Use containment only for the single compact snippet block; the rest of the hero should read as one shared surface.

### 2. Proof strip

- Replace proof cards with a single horizontal strip or row.
- Use dividers and spacing rather than standalone boxes.
- Keep each proof point short and scannable.
- On desktop, render proof points as a four-column row separated by fine vertical dividers.
- On tablet, reduce to two columns.
- On mobile, stack items vertically with subtle horizontal separators.

### 3. Product surfaces

- Replace repeated surface cards with a **three-column editorial row** on desktop.
- On tablet, render as two columns with the third item flowing beneath.
- On mobile, stack as three text blocks separated by divider lines.
- Use headings, short descriptions, and links without heavy chrome.

### 4. Architecture

- Present architecture as the most structured editorial section.
- Use **stacked layer rows** with three aligned fields:
  - layer label
  - code/path identifier
  - explanation
- Separate rows with horizontal rules rather than boxed cards.
- On narrow screens, collapse each row into a vertical text group while preserving row separators.
- Keep this section technically expressive without reverting to box-heavy treatment.

### 5. Capabilities

- Present capabilities as a **two-column grouped list** on desktop.
- On tablet and mobile, collapse to a single-column list.
- Use only minimal local emphasis, such as a thin rule, muted label, or slight tint for grouped clusters.

### 6. Quickstart

- Keep the two adoption paths, but render them as a **split editorial section** rather than a card grid.
- Each path may contain one inset snippet block with a dark code background.
- The surrounding layout should stay open, using headings, short bullets, and spacing for structure.
- On mobile, stack the two paths with a divider between them.

### 7. Apps and examples

- Shift from showcase cards to a **compact two-column catalog** on desktop.
- Each item should read as a row with:
  - type label
  - name
  - short explanation
  - link
- On mobile, stack items into a single column with separators.
- Let labels and structure carry the section, not visual boxing.

### 8. Docs and final CTA

- Replace the boxed CTA feeling with a **split closing band**.
- Let docs sit in a clean list structure and keep the final CTA cluster visually strong but integrated into the section.
- On desktop, render docs links on the left and CTA content on the right.
- On mobile, stack docs first and CTA second.

## Structural guidance for implementation

- Keep `_data/landing.yml` as the primary content source.
- Keep the current include boundaries unless a small refactor clearly improves ownership.
- Replace global shared card styling with section-specific layout rules.
- Reduce radius, border, and shadow dependence across all repeated section primitives.
- Allow only a small number of intentional inset surfaces, mainly for code or emphasized calls to action.

## CSS/system changes

The CSS refresh should:

- remove the shared “everything is a card” treatment
- introduce section-level spacing and divider rules
- reduce border radius substantially
- reduce or eliminate most box shadows
- give typography a larger role in hierarchy
- support horizontal rhythm in the hero and proof sections

## Fallback and responsive rules

- If the proof strip has fewer than four items, keep the same strip layout and center the remaining items instead of rendering empty columns.
- If surface, capability, or app labels become longer than expected, allow rows to grow vertically; do not clip text.
- If any snippet line exceeds available width, keep it inside a horizontally scrollable code block.
- If the app/example list becomes shorter or longer, the catalog should reflow without placeholder cards.
- On mobile, all multi-column sections must collapse into a readable single-column narrative with dividers retained.

## Accessibility and resilience

- Preserve semantic heading order.
- Preserve visible focus states.
- Ensure reduced card styling does not lower contrast.
- Maintain responsive behavior across desktop, tablet, and mobile.
- If sections collapse on smaller screens, the editorial rhythm should still read clearly.

## Acceptance criteria

The redesign is complete when:

- the hero is rendered as one shared banner surface instead of separate floating cards
- the proof strip, surfaces, architecture, capabilities, apps, and docs sections no longer use repeated floating-card styling as their primary layout primitive
- section separation is visibly achieved through whitespace, dividers, or background shifts
- architecture and quickstart still include code/path identifiers or snippet blocks so the page retains technical credibility
- the implementation keeps the current Jekyll data source and include structure intact
- the page remains fully compatible with Jekyll and GitHub Pages

## Implementation notes

- This is a visual-system refactor, not a content rewrite.
- Reuse the existing data and section structure wherever practical.
- Prefer layout simplification over adding new decorative elements.
