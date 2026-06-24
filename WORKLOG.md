# Work Log

## 2026-06-24

### Home Architecture 图替换为中英文双版本

将 Home 页 Architecture 区域的 SVG 架构图从单一英文版改为中英文双版本：
- EN (`/`) → `HydroAgent_Diagram.svg`
- ZH (`/zh`) → `HydroAgent_No_智能体运行层.svg`

通过 `lang` prop 动态选择 `<img src>`，无需修改内容数据文件。

**Files modified:**
- `components/pages/home.js` — img src 改为基于 lang 的三元表达式

## 2026-06-23

### Capabilities 页面排版优化

**1. Section 2 改为 split-row 布局 + 交替背景色**
- 9 个能力项从 3×3 卡片网格改为左右分列行式布局（dt 标题 + dd 说明），带序号标记
- Section 2 加 `#F9FAFB` 灰底，形成 PageLead(灰) → Section1(白) → Section2(灰) → CTA(灰) 的视觉节奏

**2. Hero (PageLead) Facts 纵向排列**
- Facts 从横排 flex-row 改为纵向 stacked，每个 fact 独占一行
- 每行用 `grid: 120px label | 1fr value`，上下加 `border-top` 分割线
- Value 字号从 18px bold 降为 15px medium，长句子以正文方式阅读而非标题

**Files modified:**
- `components/pages/capabilities.js` — Section 2 改为 `<dl class="split-list">` + `<div class="split-row">`
- `styles/pages/capabilities.css` — facts 纵排 + 分割线 + value 字号调整 + tasks section 灰底 + split-index 样式

### Contact Page Redesign

Redesigned the Contact page layout from 4 sections with duplicate data to a cleaner 4-section design matching Home page section heights (80px padding).

**New layout:**
- **A. Hero Contact** — split left (eyebrow + title) / right (intro + email CTA button + response note + channels), replacing old PageLead + PrimarySection with duplicates removed
- **B. Inquiry Types** — changed from 3-up info cards to split-row (dt/dd) format with icons, better reading rhythm
- **C. How It Works** — changed from card grid to horizontal timeline (numbered dots + connecting lines), visually distinct from section B
- **D. CTA Callout** — merged old callout + added strong email CTA button, uses `--bg-alt` background for visual separation

**Responsive:** all 4 sections collapse to single-column on mobile (≤900px), timeline switches to vertical layout.

**Files modified:**
- `content/pages/contact.js` — simplified data structure, removed duplicates (facts/detail-cards), added channels array, new ctaCallout section
- `components/pages/contact.js` — full rewrite: 4 sections using content-section class for consistent padding
- `styles/pages/contact.css` — full rewrite: hero split, inquiry split-rows, horizontal timeline, CTA band

**Verified:** `next build` succeeds, all 24 pages exported. `/contact` returns HTTP 200.

### SVG Architecture Diagram Visual Style Upgrade

Upgraded `public/assets/assets/agent_infrastructure_recreated.svg` visual style for premium web presence. **No text, positions, or shapes were changed** — only CSS style definitions.

**Changes:**
- **Blue accent colors deepened:** #85c3ee→#4A9FE0, #afdbf6→#7EC4ED, #3a98d8→#2563EB, #65baea→#3B8ED6, #529cd9→#2E7DC8, #59aae2→#3585CC, #4190d6→#1D6FC0, #81caef→#5EAEE5, #2570c0→#1E40AF
- **Border strokes enhanced:** 0.25px→0.75px, 0.5px→1px; stroke colors shifted from washed gray (#f3f3f3, #edeeef, #efefef) to cool blue-gray (#CBD5E1, #B8C4D4, #94A3B8)
- **Connecting line strokes:** neutral gray (#494949, #474747) → deep navy (#1E3A5F) for stronger contrast
- **Background fills:** neutral whites/grays → cool-toned Tailwind slate palette (#F8FAFC, #F1F5F9, #E2E8F0, #EFF6FF, etc.)
- **Dark fills deepened:** #282828→#0F172A, #505050→#1E293B, #6c6c6d→#334155
- **Text style (.st79):** added fill #0F172A, letter-spacing 0.03em, extended font-family fallback chain
- **Light blue accent fills:** #def2fb→#DBEAFE, #e8eff9→#DBEAFE

**Files modified:**
- `public/assets/assets/agent_infrastructure_recreated.svg` — CSS style block only

### 创建中文版架构图 SVG

复制英文版 SVG 并将 12 个文字标签翻译为中文，另存为 `agent_infrastructure_recreated_zh.svg`。

| 英文 | 中文 |
|------|------|
| Forecast Models | 预报模型 |
| Scenario Inputs | 情景输入 |
| Knowledge Support | 知识支撑 |
| Bulletin | 预报简报 |
| Replay | 回放复盘 |
| Operational Updates | 业务更新 |
| Forecast Review | 预报审核 |
| Human Approval | 人工审批 |
| Release Control | 发布控制 |
| Hydrograph & Rainfall | 水文过程线与降雨 |
| Forecast Delivery | 预报发布 |
| Digital Twin Integration | 数字孪生集成 |

对于原来分两行的英文标签（如 "Forecast" + "Models"），中文四字即可单行显示，translate y 坐标向下微调 ~9px 保持垂直居中。"水文过程线与降雨" 和 "数字孪生集成" 因字数较多仍保留两行。

**Files created:**
- `public/assets/assets/agent_infrastructure_recreated_zh.svg` — 中文版架构图

## 2026-06-17

### Hero redesign: full-screen video background → split layout

Redesigned Hero section from fullscreen video background with bottom-left overlay text to a left-right split layout:
- **Left column:** eyebrow, title (HydroAgent), subtitle, description, primary + secondary CTA buttons
- **Right column:** autoplay/muted/loop demo video with rounded card frame and caption tag
- Responsive: stacks vertically on mobile (≤900px), video on top
- Primary button now filled (accent background) instead of outline-only
- Content updated for both EN and ZH with new copy per spec

**Files modified:**
- `content/pages/home.js` — new `subtitle`, `videoTag` fields; updated `text`, `primary`, `secondary`, `secondaryPath` for both EN and ZH
- `components/hero.js` — full rewrite: split layout with `.hero-left` / `.hero-right` columns
- `styles/hero.css` — full rewrite: CSS grid split layout, video card styling, responsive breakpoints

### Step 4: Build multi-level navigation system

**4a — Restructured nav data** (`content/nav.js`):
- Flat 8-item `nav[]` → nested 2-level structure with 5 top-level items (Home, Product, Research, Team, Contact & Join)
- Added `footerGroups` data (moved from hardcoded shell.js)
- Bilingual (en/zh) labels for all items

**4b — Desktop dropdown nav** (`components/shell.js`, `styles/nav.css`):
- Hover dropdown panels for items with `children` (Product, Research, Team, Contact & Join)
- Chevron icon rotates on hover; invisible bridge prevents hover-out gap
- Active state highlights current page and its parent
- Footer now data-driven from `content.ui.footerGroups`

**4c — Mobile hamburger menu** (`components/shell.js`, `styles/nav.css`):
- Hamburger button (3-line → X animation) visible at ≤900px
- Slide-in drawer from right with overlay backdrop
- Accordion-style expand/collapse for nested groups
- Click-to-navigate closes drawer; language switch in drawer

**New placeholder pages** (3 routes × 2 langs = 6 pages):
- `/white-papers` + `/zh/white-papers` — White Papers archive
- `/events` + `/zh/events` — Events / Community
- `/members` + `/zh/members` — Lab Members

**Files created:**
- `content/pages/white-papers.js`, `content/pages/events.js`, `content/pages/members.js`
- `components/pages/white-papers.js`, `components/pages/events.js`, `components/pages/members.js`
- `app/white-papers/page.js`, `app/events/page.js`, `app/members/page.js`
- `app/zh/white-papers/page.js`, `app/zh/events/page.js`, `app/zh/members/page.js`

**Files modified:**
- `content/nav.js` — full rewrite (flat → nested + footerGroups)
- `components/shell.js` — dropdown nav, hamburger, drawer, data-driven footer
- `styles/nav.css` — dropdown, hamburger, overlay, drawer, accordion styles

**Verified:** `next build` succeeds, all 24 pages (12 en + 12 zh) exported as static HTML.

**Note:** `/workflow` and `/runs` pages retained but removed from nav — pending user decision during content rewrite.

### Step 3: Split content/site.js (2345 lines → 13 files)

**Created files:**
- `content/helpers.js` — normalizePath, localizeHref, stripLangPrefix, getLanguageSwitchHref
- `content/team-members.js` — hydroAgentTeamMembers array (15 members)
- `content/nav.js` — navContent { en: { ui }, zh: { ui } } (nav items, footer, CTA, switchLabel)
- `content/pages/home.js` — homeContent { en, zh } (hero, productPreview, highlights, thinking, human, client, proof, adoption, deliverables, positioning)
- `content/pages/platform.js` — platformContent { en, zh }
- `content/pages/capabilities.js` — capabilitiesContent { en, zh }
- `content/pages/workflow.js` — workflowContent { en, zh }
- `content/pages/research.js` — researchContent { en, zh }
- `content/pages/runs.js` — runsContent { en, zh }
- `content/pages/team.js` — teamContent { en, zh } (imports hydroAgentTeamMembers)
- `content/pages/careers.js` — careersContent { en, zh }
- `content/pages/contact.js` — contactContent { en, zh }

**Rewritten files:**
- `content/site.js` — now a thin re-export assembler (~45 lines). Imports all sub-modules, assembles siteContent, re-exports getSiteContent + all helpers. **No component imports changed.**

**Verified:** `next build` succeeds, all 18 pages (9 en + 9 zh) exported as static HTML.

## 2026-06-16

### Step 2: Split components (site-pages-v2.js → components/pages/)

**Created files:**
- `components/pages/home.js` — HomePageContent + BrandManifesto, AgentThinking, HumanCenteredAgent, ArchitectureWorld, BusinessMap, ProofStatement
- `components/pages/platform.js` — PlatformPageContent + PlatformArchitectureDiagram
- `components/pages/capabilities.js` — CapabilitiesPageContent
- `components/pages/workflow.js` — WorkflowPageContent
- `components/pages/research.js` — ResearchPageContent
- `components/pages/runs.js` — RunsPageContent
- `components/pages/team.js` — TeamPageContent
- `components/pages/careers.js` — CareersPageContent
- `components/pages/contact.js` — ContactPageContent
- `components/hero.js` — renamed from hero-v2.js
- `components/shell.js` — renamed from site-shell-v2.js

**Modified files (import path update):**
- All 18 `app/**/page.js` files: `@/components/site-pages-v2` → `@/components/pages/<page>`

**Deleted files:**
- `components/site-pages-v2.js` (968 lines, monolithic)
- `components/hero-v2.js` (replaced by hero.js)
- `components/site-shell-v2.js` (replaced by shell.js)

**Verified:** All 18 pages return HTTP 200.

### Step 1: Split CSS (globals-v2.css → styles/)

- Split `app/globals-v2.css` (2829 lines) into 17 modular files under `styles/` and `styles/pages/`
- Entry point: `app/globals.css` with @imports
- Deleted `app/globals-v2.css`

### Remaining restructuring steps
- **Step 3:** ~~Split `content/site.js`~~ — DONE (2026-06-17)
- **Step 4:** ~~Build new multi-level navigation system~~ — DONE (2026-06-17)
