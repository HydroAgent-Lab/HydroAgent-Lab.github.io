# Home Page Style Backup — 2026-06-17

## Recovery Methods

### Method 1: Git stash (fastest)
```bash
git stash pop   # or: git stash apply stash@{0}
```

### Method 2: Patch file
```bash
git apply home-style-backup.patch
```

### Method 3: Manual — apply changes described below

---

## Files Changed (3)

### 1. `components/pages/home.js`

**What HydroAgent Does — Timeline layout**
- Replace `<ol className="editorial-list">` with `<ol className="timeline">`
- Each item uses `<li className="timeline-item tl-left/tl-right">` alternating
- Contains `<span className="timeline-dot">` + `<p>{item}</p>`
- Odd items (0,2,4) get `tl-left`, even items (1,3) get `tl-right`

**Flagship Product — Left copy + right image layout**
- Replace plain SectionHeader + text + button with:
  ```jsx
  <section className="content-section flagship-section">
    <div className="flagship-copy">
      <p className="eyebrow">...</p>
      <h2 className="flagship-title">...</h2>
      <p className="flagship-text">...</p>
      <a className="flagship-cta" href="...">... →</a>
    </div>
    <div className="flagship-image">
      <img src="https://images.unsplash.com/photo-1446776858070-70c3d5ed6758?w=720&h=600&fit=crop&crop=center" />
    </div>
  </section>
  ```

**Why Trust It — Flip cards**
- Replace `<ol className="editorial-list">` with `<div className="flip-grid">`
- Each item: `<article className="flip-card">` containing:
  - `.flip-card-inner` > `.flip-card-front.flip-bg-{i}` (title + arrow) + `.flip-card-back` (text)
  - Front has `<span className="flip-arrow">→</span>` bottom-right

**Who It Serves — Horizontal scroll strip**
- Replace `<dl className="split-list">` with `<div className="scroll-strip">`
- Each item: `<article className="scroll-card">` with `<h3>` + `<p>`

---

### 2. `content/pages/home.js`

**trustSection items changed from strings to objects (both en & zh):**

English:
```js
items: [
  { title: "Real basin tested", text: "Demonstrated end to end on a real river basin..." },
  { title: "Validated results", text: "Reproduces observed flood peaks and volumes..." },
  { title: "Multi-model ready", text: "Works consistently across several leading LLMs." },
  { title: "Published research", text: "Methods paper under submission; presented at EGU 2026." },
  { title: "Human authority", text: "Models provide the evidence, people keep review authority." }
]
```

Chinese:
```js
items: [
  { title: "真实流域验证", text: "在真实流域（美国俄勒冈 South Yamhill River）基于历史洪水事件完成端到端演示。" },
  { title: "独立事件校验", text: "在独立验证事件上，对实测洪峰和洪量的还原效果良好。" },
  { title: "多模型适配", text: "在多个主流大语言模型上表现稳定一致。" },
  { title: "学术发表", text: "方法论文在投，EGU 2026 已作口头报告。" },
  { title: "人类主权", text: "模型提供证据，人保留审核与发布责任。" }
]
```

---

### 3. `styles/pages/home.css`

#### A. Timeline (What HydroAgent Does) — zigzag layout
```css
.timeline { list-style:none; margin:0; padding:0; position:relative; }
.timeline::before { /* vertical centre line */ left:50%; width:2px; background:var(--border); }
.timeline-item { position:relative; width:50%; padding-bottom:32px; }
.timeline-dot { width:12px; height:12px; border:2px solid var(--accent); border-radius:50%; }
.timeline-item:hover .timeline-dot { background:var(--accent); transform:scale(1.25); }
.tl-left { padding-right:32px; text-align:left; display:flex; justify-content:flex-end; }
.tl-left .timeline-dot { right:-6px; }
.tl-left p { width:380px; }
.tl-right { margin-left:50%; padding-left:32px; }
.tl-right .timeline-dot { left:-6px; }
.tl-right p { width:380px; }
.timeline-item p { font-size:14px; color:var(--text-secondary); }
.timeline-item:hover p { color:var(--text); }
```

#### B. Flagship Section — left copy + right image grid
```css
.flagship-section { display:grid; grid-template-columns:1fr 1fr; gap:48px; align-items:center; }
.flagship-title { font-size:2rem; font-weight:600; }
.flagship-text { font-size:15px; color:var(--text-muted); max-width:48ch; }
.flagship-cta { color:var(--accent); font-size:14px; } /* hover: gap widens */
.flagship-image img { width:100%; border-radius:6px; }
```

#### C. Flip Cards (Why Trust It) — 5 portrait cards in a row
```css
.flip-grid { display:flex; justify-content:center; gap:12px; max-width:880px; margin:0 auto; }
.flip-card { flex:0 0 180px; height:45vh; perspective:600px; }
.flip-card-inner { transition:transform 0.5s; transform-style:preserve-3d; }
.flip-card:hover .flip-card-inner { transform:rotateY(180deg); }
.flip-card-front,.flip-card-back { position:absolute; inset:0; width:100%; height:100%; border-radius:6px; backface-visibility:hidden; }
/* Front: full image bg + bottom gradient overlay + white title */
.flip-card-front::before { background:linear-gradient(to top, rgba(0,0,0,0.65), transparent); }
.flip-card-front h3 { color:#fff; font-size:14px; z-index:1; }
/* Back: white + right blue border */
.flip-card-back { background:#fff; border-right:3px solid #93C5FD; }

/* Background images per card: */
.flip-bg-0 { background-image: url("https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=700&fit=crop&crop=center"); } /* river/basin */
.flip-bg-1 { background-image: url("https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=800&fit=crop&crop=center"); } /* data/charts */
.flip-bg-2 { background-image: url("https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=700&fit=crop&crop=center"); } /* cute robot */
.flip-bg-3 { background-image: url("https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=400&h=800&fit=crop&crop=center"); } /* research */
.flip-bg-4 { background-image: url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=800&fit=crop&crop=center"); } /* teamwork */

/* Arrow bottom-right */
.flip-arrow { position:absolute; bottom:14px; right:14px; color:#fff; opacity:0.7; }
```

#### D. Scroll Strip (Who It Serves) — horizontal scroll cards
```css
.scroll-strip { display:flex; gap:16px; overflow-x:auto; scroll-snap-type:x mandatory; }
.scroll-card { flex:0 0 320px; padding:32px 28px; background:var(--surface-elevated); border:1px solid var(--border); border-radius:6px; }
.scroll-card:hover { border-color:var(--accent-light); box-shadow:0 4px 12px rgba(0,0,0,0.06); }
.scroll-card h3 { font-size:16px; font-weight:600; }
.scroll-card p { font-size:14px; color:var(--text-muted); }
```

#### E. Responsive (max-width: 900px)
```css
.timeline::before { left:5px; }
.timeline-item { width:100%; padding-left:28px; margin-left:0; }
.tl-left/.tl-right .timeline-dot { left:-1px; }
.flagship-section { grid-template-columns:1fr; gap:28px; }
.flip-grid { flex-wrap:wrap; }
.flip-card { flex:0 0 calc((100% - 12px) / 2); }
```

---

## Also in `styles/hero.css`
```css
.hero-video-bg {
  transform: scale(1.4);
  transform-origin: 30% center; /* pushes video content rightward */
}
/* Mobile: transform-origin: 50% center; */
```