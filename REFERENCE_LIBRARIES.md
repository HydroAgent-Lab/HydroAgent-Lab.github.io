# Reference Libraries and When to Use Them

These libraries are useful, but they should not replace design judgment. Most component libraries make it easy to build a polished template; they do not automatically create a professional brand website.

## shadcn/ui

GitHub: https://github.com/shadcn-ui/ui  
Blocks: https://ui.shadcn.com/blocks

Use for:

- Accessible base components.
- Forms, dialogs, menus, navigation primitives.
- Internal tools and dashboards.

Be careful:

- shadcn Blocks lean heavily toward app layouts, dashboards, sidebars, and cards.
- Do not use it as the visual direction for a premium company homepage.

## Magic UI

GitHub: https://github.com/magicuidesign/magicui

Use for:

- Selected animated effects.
- Hero accents.
- Visual polish for AI/technology pages.

Be careful:

- Too many effects quickly become template-like.
- Use one or two effects, not a whole page of effects.

## Motion Primitives

GitHub: https://github.com/ibelick/motion-primitives

Use for:

- Refined interaction and transitions.
- Scroll/enter animations.
- Small but high-quality motion details.

Be careful:

- Motion should support hierarchy, not decorate weak structure.

## Once UI

GitHub: https://github.com/once-ui-system/nextjs-starter

Use for:

- A stronger design-system base for Next.js.
- Tokens, layout primitives, and consistent page scaffolding.
- Projects that need repeated sites with a unified quality bar.

Be careful:

- Do not let the design system make every page look the same.

## Fancy

GitHub: https://github.com/danielpetho/fancy

Use for:

- Interaction inspiration.
- High-polish UI snippets.

Be careful:

- It is better as a reference than a full visual foundation.

## Design Resources for Developers

GitHub: https://github.com/bradtraversy/design-resources-for-developers

Use for:

- Finding broader design resources.
- Looking up inspiration sources, UI kits, colors, icons, and typography tools.

## Recommended Stack for Future Sites

For professional company sites:

- Next.js
- Tailwind or plain CSS tokens
- shadcn/ui only for primitive components
- Motion Primitives for subtle motion
- Custom page layouts based on `DESIGN_GUIDE.md`

For AI/tech brand sites:

- Next.js
- Custom full-bleed hero
- One visual system or generated hero asset
- Minimal component-library usage
- Optional Magic UI effect only when it supports the brand moment

