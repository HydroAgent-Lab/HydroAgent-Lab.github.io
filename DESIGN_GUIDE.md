# Website Frontend Design Guide

This guide is the default frontend standard for future websites in this workspace. It exists to prevent the common AI-generated SaaS-template pattern: large hero, gradient background, repeated feature cards, rounded panels, and excessive spacing.

## Core Position

Build brand-grade websites, not template landing pages.

The default reference set is:

- Apple: restraint, product confidence, generous but intentional pacing.
- OpenAI: editorial clarity, low visual noise, high trust.
- Anthropic: calm, serious, text-led hierarchy.
- Vercel: sharp technical polish, strong typography, minimal chrome.
- Linear: product atmosphere, precise spacing, reduced ornament.
- Agentrix / aihuashen reference: immersive first viewport, architecture narrative, product map.
- MotionSites: use prompt-library thinking to choose a cinematic hero direction before coding.

For HydroAgent-Lab specifically, use `HYDROAGENT_VISUAL_LANGUAGE.md` as the house style.

## Hard Bans

Do not use these unless the user explicitly asks for them:

- Three-column feature-card grids as the main page structure.
- Repeated rounded glass cards across every section.
- Generic SaaS hero with floating dashboard cards.
- Decorative gradient blobs, floating orbs, bokeh dots, or random glows.
- A section pattern repeated as eyebrow + heading + 3 cards.
- Text that sounds like a research abstract, grant proposal, or internal strategy memo.
- Huge empty whitespace that does not create drama or hierarchy.
- Cards inside cards.
- Overly rounded rectangles for everything.

## Default Page Structure

For a professional company website, default to 4-5 sections:

1. Immersive hero
2. Architecture or worldview
3. Product/service map
4. Proof or use cases
5. CTA

The homepage should not explain everything. It should establish authority, clarity, and a memorable mental model.

## Reference Workflow

Before designing a page:

1. Pick 3-5 reference hero directions.
2. Extract the pattern: typography, density, image type, spacing, motion, and CTA treatment.
3. Write a precise visual prompt.
4. Build the hero first.
5. Extend the same visual language to the rest of the page.
6. Review each page independently before pushing.

## Hero Rules

The first viewport should be a brand moment.

Use:

- One short headline.
- One short supporting paragraph.
- One primary action, optionally one secondary action.
- A real visual, generated visual, video-like scene, or full-bleed interactive scene.

Avoid:

- KPI cards.
- Feature chips.
- Long bullet lists.
- Product-dashboard mockups unless the website is specifically for a SaaS app.
- Multiple competing panels.

Good headline shape:

- "Water intelligence, agentic by design."
- "The operating layer for water decisions."
- "AI-native systems for operational hydrology."

Bad headline shape:

- "HydroAgent-Lab builds hydrologic AI systems for operational forecasting teams that need traceable workflow support."

## Layout Rules

Prefer these patterns:

- Full-bleed hero with text over visual.
- Large editorial section with 1 strong sentence and 1 paragraph.
- Split section: large headline on left, concise explanation on right.
- Linear architecture rows instead of cards.
- Product map as columns, bands, or spatial blocks.
- Thin dividers instead of boxed cards.
- Large typography with controlled line length.

Avoid these patterns:

- Every section in a floating panel.
- Every item as a rounded card.
- Equal-size card grids for unrelated content.
- More than 5 visible content units in one viewport.

## Typography

Use strong hierarchy:

- Hero H1: very large, short, tight line-height.
- Section H2: large, usually 8-14 words maximum.
- Body text: calm, restrained, not too small.
- Eyebrows: rare, short, uppercase only if visually useful.

Rules:

- Do not scale font purely with viewport width in a way that breaks long words.
- No negative letter spacing except large display headings where it is intentional.
- Keep text lines readable: 45-75 characters for paragraphs.

## Cards Policy

Cards are allowed only when they represent actual separate objects:

- Product entries
- Case studies
- News articles
- Team members
- Pricing plans
- Dashboard widgets

Cards are not allowed as the default way to make content look designed.

If content is conceptual, use:

- Rows
- Dividers
- Large text blocks
- Timelines
- Diagrams
- Spatial scenes
- Editorial columns

## Visual Style

For AI/technology company sites:

- Use dark or neutral background only when the subject benefits from atmosphere.
- Use restrained accent color.
- Prefer depth from lighting and scale, not many small effects.
- Use one primary visual language per page.
- Avoid one-note palettes dominated by purple/blue gradients.

## UX Rules

- The user should understand what the company does within 5 seconds.
- Navigation should be boring, stable, and predictable.
- CTA should be visible but not desperate.
- Mobile should preserve the same brand feeling, not collapse into stacked cards.
- Every page statement should face customers or partners, not internal stakeholders.

## Review Checklist

Before calling a page finished, check:

- Does it look like a real company could publish it?
- Are there too many cards?
- Is the first viewport memorable?
- Can a non-expert understand the offer?
- Does the page have a clear rhythm?
- Is there one visual idea, or many decorations?
- Does the Chinese copy sound like public-facing brand language?
- Does the English copy sound native and concise?
- Is whitespace intentional rather than empty?
- Would this still look good if all gradients were removed?
