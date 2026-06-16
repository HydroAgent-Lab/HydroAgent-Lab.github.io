# Work Log

## 2026-06-16

### Created v2 design system (light theme)

Created a complete alternative visual design without modifying any original files.

**New files created:**
- `app/globals-v2.css` — Complete light-theme CSS (~2000 lines), covering all component classes
- `app/layout-v2.js` — Root layout importing globals-v2.css
- `components/hero-v2.js` — Hero with fullscreen video background (replaces static image)
- `components/site-shell-v2.js` — Pill-style centered navbar (circle logo + link pill)
- `components/site-pages-v2.js` — Page content builders importing v2 hero and shell

**Design tokens (v2):**
- Background: #f0f0ee | Surface: #EDEDED | Accent: #3B82F6
- Text: gray-900/700/400 hierarchy
- System font stack, 200ms transitions, pill-shaped nav/buttons

**No files modified (originals preserved):**
- `app/globals.css`, `app/layout.js`, `components/hero.js`, `components/site-shell.js`, `components/site-pages.js`

**Next steps:**
- Switch to v2 design (see README.md for instructions)
- Customize v2 CSS as needed
- Test all pages under v2 design in browser
