# Moss GitHub Pages Landing Page Design

## Summary

This design defines an English-first, architecture-led landing page for the `mossagents.github.io` GitHub Pages site. The page should serve a mixed audience while clearly prioritizing engineering teams evaluating Moss as a Go agent runtime. The page will be built with Jekyll as a single-page site composed from reusable includes, optimized for GitHub Pages compatibility and static hosting simplicity.

## Goals

- Present Moss as a credible, production-minded agent harness for Go.
- Distinguish the three core product surfaces: runtime, core apps, and examples.
- Make the GitHub repository the most prominent call to action.
- Give technical evaluators enough architectural signal to understand why Moss is different.
- Keep the implementation maintainable, modular, and lightweight inside a Jekyll site.

## Non-goals

- Turning the site into a multi-page marketing application.
- Leading with a docs-index experience.
- Over-rotating into app-demo storytelling at the expense of the runtime narrative.
- Adding fragile client-side behavior that is required for core understanding.

## Audience

Primary audience:

- Engineering teams evaluating Moss as a reusable Go agent runtime.

Secondary audiences:

- Developers who want to try the existing `mosscode` app surface.
- Readers comparing the architecture, capability model, and documentation before adoption.

## Messaging direction

The page should feel like an open-source infrastructure product with product-grade polish. Messaging should be concise and technical rather than hype-heavy. The narrative should move from:

1. What Moss is.
2. Why its architecture matters.
3. How to adopt it.

## Information architecture

The landing page should flow in this order:

1. Hero
   - Strong positioning around Moss as an agent harness for Go.
   - One-sentence support copy clarifying library-first runtime plus apps/examples.
   - Primary CTA: View on GitHub.
   - Secondary CTA: read documentation or getting started.
2. Proof strip
   - Compact proof points such as library-first runtime, safe execution posture, runtime assembly, apps and examples, MCP/skills/subagents, production-minded primitives.
3. Product surfaces
   - Three clear cards or columns:
     - Build with the runtime.
     - Ship with core apps.
     - Learn from runnable examples.
4. Architecture/value section
   - Explain the layered model: minimal kernel, runtime assembly, appkit, deepagent preset, apps/examples.
5. Capability grid
   - Trust and approval, workspace isolation, checkpointing, memory, planning, MCP, prompt skills, subagents, governance-oriented runtime features.
6. Getting started split
   - One lane for running `mosscode`.
   - One lane for embedding Moss as a Go library.
7. Apps and examples showcase
   - Featured cards for `mosscode`, `mosswork`, `mossresearch`, `mosswriter`, and selected focused examples.
8. Docs and final CTA
   - Key documentation entry points and a final GitHub CTA block.

## Visual direction

The visual language should be bright, clean, and engineering-oriented.

- Base: off-white and pale gray backgrounds with white surfaces.
- Text: deep slate for headings and body copy.
- Accent: moss green as the signature accent, with restrained cyan for technical emphasis.
- Composition: wide grid, generous whitespace, thin borders, subtle shadows, and crisp section framing.
- Motifs: architecture framing, capability cards, runtime labels, and command snippets instead of decorative illustrations.
- Tone: more modern developer-product clarity than dark infrastructure dashboard styling.

The page should feel serious and polished without becoming visually heavy.

## UX and content principles

- The first scroll should establish credibility fast.
- The page should explain runtime/apps/examples in plain language before going deep.
- Commands, file paths, and product names may use monospace styling where helpful.
- Technical depth should be visible, but content density should remain scannable.
- Every major section should reinforce the primary adoption path back to GitHub.

## Jekyll implementation shape

Implement the site as a single landing page with reusable include partials.

Recommended structure:

- `_layouts\default.html`
- `_includes\hero.html`
- `_includes\proof-strip.html`
- `_includes\surface-cards.html`
- `_includes\architecture-section.html`
- `_includes\capabilities.html`
- `_includes\quickstart.html`
- `_includes\apps-showcase.html`
- `_includes\docs-cta.html`
- `assets\css\site.css`
- `index.md` or `index.html`

Content that is likely to change should live in `_config.yml` or `_data\*.yml` rather than being duplicated in templates.

### Include contracts

| Include | Responsibility | Expected inputs |
|---|---|---|
| `hero.html` | Render headline, supporting copy, primary and secondary CTAs, and compact product framing. | Headline text, subhead text, primary CTA label/URL, secondary CTA label/URL, optional proof badges. |
| `proof-strip.html` | Render short proof signals directly under the hero. | A list of 4-6 short labels with optional supporting text. |
| `surface-cards.html` | Explain the three product surfaces. | Three items with title, summary, and destination link. |
| `architecture-section.html` | Explain the runtime layering and why it matters. | Section label, heading, summary copy, and a list of architecture layers. |
| `capabilities.html` | Render the capability grid. | A list of capabilities with title and one-sentence explanation. |
| `quickstart.html` | Show the two adoption lanes. | One run path for `mosscode`, one embed path for Go library use, each with title, summary, and snippet. |
| `apps-showcase.html` | Showcase core apps and selected examples. | A list of featured entries with name, type, short description, and link target. |
| `docs-cta.html` | Render documentation links plus final conversion CTA. | Final CTA label/URL and a curated list of documentation links. |

Each include should be understandable and testable as a single display unit. The layout file should only compose sections and shared page chrome, not hold section-specific content logic.

## Content model

Store configurable content in structured form where it improves maintainability:

- Hero headline, subhead, and CTA URLs.
- Proof-strip labels.
- Product-surface summaries.
- Featured capability items.
- Featured apps/examples metadata.
- Documentation link lists.

This keeps the page easy to refresh as the Moss repository evolves.

### Canonical link targets

Use repository-relative URLs that resolve correctly on GitHub Pages:

- Primary CTA: `https://github.com/mossagents/moss`
- Secondary docs CTA: `https://github.com/mossagents/moss/blob/main/README.md`
- English README: `https://github.com/mossagents/moss/blob/main/README.md`
- Chinese README: `https://github.com/mossagents/moss/blob/main/README_ZH.md`
- Getting Started (Chinese): `https://github.com/mossagents/moss/blob/main/docs/getting-started.md`
- Architecture (Chinese): `https://github.com/mossagents/moss/blob/main/docs/architecture.md`
- Skills (Chinese): `https://github.com/mossagents/moss/blob/main/docs/skills.md`
- Roadmap (Chinese): `https://github.com/mossagents/moss/blob/main/docs/roadmap.md`
- `apps/mosscode`: `https://github.com/mossagents/moss/tree/main/apps/mosscode`
- `apps/mosswork`: `https://github.com/mossagents/moss/tree/main/apps/mosswork`
- `examples/mossresearch`: `https://github.com/mossagents/moss/tree/main/examples/mossresearch`
- `examples/mosswriter`: `https://github.com/mossagents/moss/tree/main/examples/mosswriter`
- `examples/mossclaw`: `https://github.com/mossagents/moss/tree/main/examples/mossclaw`
- `examples/custom-tool`: `https://github.com/mossagents/moss/tree/main/examples/custom-tool`

If the implementation prefers centralized data files, these URLs should be declared once and referenced by includes through data lookups rather than inline duplication.

### Language-handling rule

Because the landing page is English-first but the current repository contains a mix of English and Chinese documentation:

- The hero-level documentation CTA should point to the English `README.md`.
- Any link that resolves to Chinese-language documentation should be labeled explicitly with a `Chinese` marker in the UI.
- The docs section may include Chinese-language deep links, but they should appear after the English README and should not visually outrank the primary GitHub CTA.
- App and example links are language-neutral because they resolve to repository code paths.

## Responsiveness

- Desktop: multi-column composition with strong hierarchy.
- Tablet: reduce columns and preserve section ordering.
- Mobile: stack content cleanly, keep CTAs visible, and avoid compressed code blocks.

The site should remain legible and visually deliberate at every breakpoint.

## Accessibility and resilience

- Semantic heading hierarchy.
- Sufficient contrast in both body text and accent usage.
- Visible keyboard focus states.
- Link text that remains understandable out of context.
- No JavaScript required for core reading or navigation.
- Layouts should degrade gracefully if content lists change.

### Fallback behavior

- If the proof strip has fewer than four items, expand spacing and center the remaining items instead of leaving empty card shells.
- If the featured apps/examples list is shorter than expected, render only available cards and keep the grid balanced without placeholders.
- If a command snippet is too long for narrow viewports, allow horizontal scrolling within the snippet container rather than wrapping into unreadable fragments.
- If descriptive copy becomes longer than planned, cards should grow vertically rather than clip text.
- If any optional data block is omitted, the section should still render cleanly with remaining required fields.

## Acceptance criteria

The finished page should:

- Clearly state what Moss is within the hero section.
- Differentiate runtime, core apps, and examples without ambiguity.
- Provide a credible architecture story rooted in the actual repository structure.
- Make GitHub the dominant primary CTA.
- Feel polished and professional while remaining lightweight and static.
- Stay compatible with GitHub Pages and standard Jekyll workflows.

## Implementation notes

- Favor static HTML/CSS composition over dynamic behavior.
- Use code-adjacent visuals and structured cards instead of generic AI-themed graphics.
- Keep CSS tokens centralized for spacing, color, borders, and elevation.
- Avoid unsupported GitHub Pages plugin dependencies.
