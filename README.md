# HydroAgent-Lab Website

Deployable multi-page website for HydroAgent-Lab, built with Next.js and exported as static files.

## Development

```bash
npm install
node node_modules/next/dist/bin/next dev --hostname 127.0.0.1 --port 3000
```

## Production build

```bash
node node_modules/next/dist/bin/next build
```

The exported static site is generated in `out/`.

## Design Versions

The site supports two visual design versions. All text content is shared — only styling and component structure differ.

| Version | CSS | Hero | Shell | Pages |
|---------|-----|------|-------|-------|
| **v1** (default, dark) | `app/globals.css` | `components/hero.js` | `components/site-shell.js` | `components/site-pages.js` |
| **v2** (light, video bg) | `app/globals-v2.css` | `components/hero-v2.js` | `components/site-shell-v2.js` | `components/site-pages-v2.js` |

### Switching to v2

1. Rename `app/layout.js` → `app/layout-v1.js`
2. Rename `app/layout-v2.js` → `app/layout.js`
3. In every `app/**/page.js`, change `from "@/components/site-pages"` → `from "@/components/site-pages-v2"`

Or use a one-liner (bash):
```bash
find app -name "page.js" -exec sed -i 's|@/components/site-pages"|@/components/site-pages-v2"|g' {} +
mv app/layout.js app/layout-v1.js && mv app/layout-v2.js app/layout.js
```

### Switching back to v1

```bash
find app -name "page.js" -exec sed -i 's|@/components/site-pages-v2"|@/components/site-pages"|g' {} +
mv app/layout.js app/layout-v2.js && mv app/layout-v1.js app/layout.js
```

### v2 Design Language
- Light background (#f0f0ee), pill navbar (#EDEDED), blue accent (#3B82F6)
- Fullscreen looping video background on hero
- Bottom-left aligned hero content
- System font stack, clean minimal cards, 200ms hover transitions
