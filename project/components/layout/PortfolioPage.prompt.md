Painted blue portfolio page with white brush-stroke border — the canvas for every DNT portfolio section.

```jsx
<PortfolioPage title="Identification of the Need" badge="02">
  <ContentCard heading="The problem">Teenage P-plate drivers…</ContentCard>
</PortfolioPage>
```

Default page is 1480×1046 (A3 landscape, √2 ratio). `title` renders the bold uppercase white header; `badge` (default `true`) adds the ring+square glyph. Set `paper` for image/evidence pages — a rough white brush panel fills the body below the title (the white-field layouts). Children flex vertically with `--grid-gap`; lay out columns with your own flex/grid. Use `SectionTitle` directly if you need a header outside a full page. Change `seed` for a different painted-edge shape.
