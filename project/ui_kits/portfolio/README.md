# Portfolio UI kit — Easy Clean

A click-through + print recreation of the DNT major-work portfolio — the blue
painted-page format from the source template, as a full **40 × A3 landscape**
document for *Easy Clean* (compact car-cleaning kit).

## Files
- `index.html` — interactive viewer (arrow keys / nav bar). 40 pages, A3, scaled
  to fit. Remembers the current page in `localStorage`.
- `portfolio.html` — the print-ready document: all 40 A3 pages stacked, one per
  printed page (`@page A3 landscape`). Open and Save as PDF → A3.
- `pages.jsx` — every page-type layout + the 40-page plan, all exported on
  `window.EasyCleanPages`:
  - `PAGE_TYPES` — registry of section layouts
  - `PLAN` — the 40-page running order (data-driven; edit to reorder/add)
  - `renderPage(entry, i)` — renders one plan entry

## Page-type layouts
cover · need (Identification of the Need) · investigation (table) · interviews +
criteria · criteria · action (Action/Time/Finance) · existing (Exploration of
Existing Designs) · sketches · creativity (blank canvas) · consideration ·
testing (blank canvas) · justification (Tools/Materials) · practical (blank
canvas) · evaluation · impact · final.

Two background modes: **blue-field** (dense text pages) and **paper** (white
brush panel — image/evidence pages).

## Filling in content
Body copy renders as grey placeholder bars (the template's empty look). To fill a
page, add a `data` object to its `PLAN` entry — e.g.
`{ t:'need', data:{ cols:[{h:'The problem', text:'…'}], highlights:[{h:'Key insight', text:'…'}] } }`.
Image areas are light-blue `ImageSlot` placeholders — drop in real renders.

## Notes
- Pages read components from `window.DNTPortfolioDesignSystem_899972`; the compiled
  `_ds_bundle.js` is generated automatically.
