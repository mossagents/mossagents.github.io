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

## UI treatment by section

### 1. Hero

- Replace the current large left card plus right stacked cards with a single hero band.
- Keep the headline dominant.
- Move runtime proof into compact inline modules, a metrics strip, or a narrow technical rail.
- Use containment only where code snippets genuinely benefit from it.

### 2. Proof strip

- Replace proof cards with a single horizontal strip or row.
- Use dividers and spacing rather than standalone boxes.
- Keep each proof point short and scannable.

### 3. Product surfaces

- Replace repeated surface cards with cleaner editorial columns or structured rows.
- Use headings, short descriptions, and links without heavy chrome.

### 4. Architecture

- Present architecture as the most structured editorial section.
- Use layer rows, diagram-like lists, or aligned text columns with light separators.
- Keep this section technically expressive without reverting to box-heavy treatment.

### 5. Capabilities

- Present capabilities in columns or grouped rows.
- If any containment is needed, it should be subtle and sparse.

### 6. Quickstart

- Keep snippets, but treat them as selective inset elements rather than making the whole section a card grid.
- Emphasize the two paths clearly without turning them into oversized floating panels.

### 7. Apps and examples

- Shift from showcase cards to a cleaner matrix, list, or compact catalog layout.
- Let labels and structure carry the section, not visual boxing.

### 8. Docs and final CTA

- Replace the boxed CTA feeling with a split closing band.
- Let docs sit in a clean list structure and keep the final CTA cluster visually strong but integrated into the section.

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

## Accessibility and resilience

- Preserve semantic heading order.
- Preserve visible focus states.
- Ensure reduced card styling does not lower contrast.
- Maintain responsive behavior across desktop, tablet, and mobile.
- If sections collapse on smaller screens, the editorial rhythm should still read clearly.

## Acceptance criteria

The redesign is complete when:

- the hero reads as a single unified banner
- most floating white cards are gone
- the page hierarchy is driven mainly by type, spacing, dividers, and section flow
- the architecture and quickstart areas still feel technical and credible
- the page remains fully compatible with Jekyll and GitHub Pages

## Implementation notes

- This is a visual-system refactor, not a content rewrite.
- Reuse the existing data and section structure wherever practical.
- Prefer layout simplification over adding new decorative elements.
