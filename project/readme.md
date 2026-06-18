# DNT Portfolio Design System — "Easy Clean"

A design system for producing the **Design & Technology major-work portfolio** for
*Easy Clean* — a compact, affordable car-cleaning kit for teenage P-plate drivers
(hose-fed foam attachment, pistol-grip air duster, non-scratch scraper, dual-sided
microfibre towel). The system reproduces the portfolio's signature look: a blue
page with a **white painted brush-stroke border**, bold uppercase white headings,
white rounded content cards, and an orange data accent.

## Sources
- `uploads/Screenshot 2026-06-18 at 1.53.55 pm.png` — the original portfolio
  template (cover, "Identification of the Need", "Areas of Investigation",
  "Interviews", "Criteria to Evaluate Success"). All colours, layout and the brush
  motif were derived from this image plus the written brief.
- No codebase, Figma file, fonts or logo were supplied. Fonts and the wordmark are
  substitutions — see Caveats.

---

## CONTENT FUNDAMENTALS — how copy is written
- **Voice:** first-person student ("I designed…", "my research showed…") in the
  body prose, but **page/section labels are impersonal and noun-based**
  ("Identification of the Need", "Areas of Investigation", "Criteria to Evaluate
  Success"). Academic-portfolio register: clear, evidence-led, plain.
- **Headings:** ALL CAPS, short, declarative. Often a process stage rather than a
  marketing line. Examples: `IDENTIFICATION OF THE NEED`, `AREAS OF INVESTIGATION`.
- **Body copy:** explanatory and justifying — every claim links back to the target
  market (teenage P-plate drivers) and the success criteria. Cite the evidence
  ("Survey, n=40", "product analysis").
- **Numbers:** used sparingly and only when real/earned (e.g. "78% wash less than
  monthly", "under 30 minutes"). Avoid invented stat-slop.
- **Tone:** practical, honest, a little youthful but still professional — the same
  balance the product strikes for its teenage market. Sentence case in body, Title
  Case for card headings, UPPERCASE for section titles and pills.
- **Emoji:** none. Not part of the brand.

---

## VISUAL FOUNDATIONS
- **Colour:** a sky-blue field (`--blue-400 #6AB9D9`) is the hero — it fills the
  page. An **electric blue** (`--cyan-400 #00ADEF`) is reserved for header bands,
  table headers and active accents. **Orange** (`--orange-400 #F5821F`) is the lone
  warm accent, used only for data emphasis (pie segments, key figures). Text is a
  deep teal-ink (`--ink-900 #10303D`) on white; white on blue. Placeholder/muted
  bars use `--slate-400`.
- **The brush frame** is the defining motif: a white, roughly-painted border with
  spattered edges and a few stray dots, wrapping the blue field. It is generated
  procedurally with an SVG `feTurbulence` + `feDisplacementMap` filter (see
  `components/layout/BrushFrame.jsx`) — **no raster assets**. Change `seed` for a
  different torn-edge shape; every page should use a different seed so frames don't
  look cloned.
- **Type:** display headings in **Archivo** (800, uppercase, tracked out
  `--ls-title 0.04em`); body in **Mulish** (400–700, line-height 1.5). Card
  headings are Archivo 700 in electric blue.
- **Surfaces / cards:** white, generously rounded (`--radius-lg 20px`; highlight
  boxes `--radius-xl 28px`), floating on the blue field with a soft low-contrast
  shadow (`--shadow-card 0 2px 8px rgba(16,48,61,.12)`). No hard borders on cards —
  they read by shadow + rounding.
- **Highlight boxes:** light-blue (`--blue-300`), extra-rounded — used 1–2 per page
  to break up white cards and carry the headline insight or an image.
- **Spacing:** 4px base step; pages use `--page-pad 26px` inside the frame and
  `--grid-gap 14px` between cards. Layout is a calm multi-column grid — never
  edge-to-edge text.
- **Backgrounds:** flat colour only. Behind a page is neutral grey (`--canvas`).
  No gradients (except the tiny logo droplet), no photographic backgrounds, no
  repeating textures beyond the painted edge itself.
- **Borders:** cards have none; the only "border" is the painted frame and the 1px
  ruled rows inside `DataTable` (`--border-table`).
- **Corner radii:** everything is rounded and friendly — 8 / 14 / 20 / 28 / pill.
  Nothing sharp-cornered.
- **Shadows:** soft, single-layer, cool-tinted (rgba of `--ink-900`). Three steps:
  card, raised, frame. No long/dramatic shadows.
- **Transparency & blur:** used only in product chrome (e.g. the kit viewer's nav
  bar — translucent ink with `backdrop-filter: blur`). Page content itself is fully
  opaque.
- **Animation:** minimal. Buttons scale to 0.96 on press; viewer pages swap with no
  flashy transition. No bounces, no infinite loops. Keep it quiet and document-like.
- **Hover / press:** buttons lighten/scale on press; nav controls get a faint white
  wash on hover. Restrained throughout.
- **Imagery vibe:** cool and clean — when real product renders are added they should
  sit in light-blue rounded slots; favour bright, daylight, blue-leaning photos to
  match the palette.

---

## ICONOGRAPHY
- The source template is **almost icon-free** — its visual interest comes from the
  painted frame and colour, not iconography. Keep icon use minimal.
- The only recurring "icon" in the template is a small **circular page/step badge**
  (a thin white ring with a number) on the top-right of each section header —
  reproduced as the `badge` prop on `PortfolioPage` / `SectionTitle`.
- **No emoji, no unicode dingbats** as icons.
- If a future surface genuinely needs UI icons (e.g. a richer interactive viewer),
  use **Lucide** (`https://unpkg.com/lucide-static`) at ~2px stroke to match the
  clean, modern feel — flag it as a substitution, since the source uses none.
- Do **not** hand-draw decorative SVG illustrations. Product imagery should be real
  photos/renders dropped into the light-blue image slots.
- Brand mark: `assets/logo.svg` — a Easy Clean droplet wordmark (substitute, see below).

---

## Index / manifest

**Root**
- `styles.css` — global entry point (imports only). Consumers link this.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`,
  `effects.css`.
- `assets/` — `logo.svg`.
- `readme.md` (this file) · `SKILL.md`.

**Components** (`window.DNTPortfolioDesignSystem_899972`)
- `layout/` — **PortfolioPage**, **BrushFrame**, **SectionTitle**, **ContentCard**,
  **HighlightBox**
- `core/` — **Pill**, **Button**
- `data/` — **DataTable**

**UI kit**
- `ui_kits/portfolio/` — the full **40 × A3** Easy Clean major-work portfolio.
  `index.html` (interactive viewer) · `portfolio.html` (print-ready, Save as PDF →
  A3) · `pages.jsx` (all 16 section layouts + the editable 40-page `PLAN`).
  Two page modes: blue-field (dense text) and paper (white brush panel for
  image/evidence pages). Body copy shows as grey placeholder bars until real
  content is poured in per `PLAN` entry.

**Design System tab cards** — `guidelines/` (colours, type, spacing, radii/shadows,
brush motif, logo) plus one card per component directory.

---

## Caveats / substitutions
- **Fonts:** no font files were provided. Headings use **Archivo** and body uses
  **Mulish** (Google Fonts) as the closest free matches to the template's heavy
  uppercase grotesque + humanist body. Swap in the real typefaces if you have them.
- **Logo:** no logo was supplied — `assets/logo.svg` is an original Easy Clean wordmark
  placeholder. Replace with the official mark when available.
- **Colours** were sampled directly from the screenshot; the orange accent is an
  approximation of the pie-chart colour (the swatch was too small to sample cleanly).
- **Product photography** is shown as placeholder slots throughout — no real renders
  were provided.
