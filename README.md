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
