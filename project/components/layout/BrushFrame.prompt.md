Decorative painted page background (white rough frame + coloured field) — used inside PortfolioPage; rarely needed alone.

```jsx
<div style={{ position:'relative', width:1024, height:768 }}>
  <BrushFrame fieldColor="var(--blue-400)" width={1024} height={768} />
  {/* content above */}
</div>
```

Pure SVG (feTurbulence displacement), no raster assets. Tune `roughness`, `inset`, `seed`, `spatter`.
