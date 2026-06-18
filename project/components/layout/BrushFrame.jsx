import React from 'react';

let __bfSeed = 1;

/**
 * BrushFrame — the signature painted page background of the DNT portfolio.
 * A white "painted" frame with rough, spattered edges wrapping a coloured
 * field. Built entirely from an SVG feTurbulence + feDisplacementMap filter
 * so it scales cleanly and needs no raster assets.
 *
 * It renders as an absolutely-positioned background layer; place content in a
 * sibling above it (see PortfolioPage).
 */
export function BrushFrame({
  fieldColor = 'var(--surface-page)',
  frameColor = 'var(--surface-frame)',
  width = 1024,
  height = 768,
  roughness = 9,
  inset = 16,
  seed,
  spatter = true,
  style = {},
  ...rest
}) {
  const uid = React.useMemo(() => `bf${__bfSeed++}`, []);
  const s = seed != null ? seed : (uid.charCodeAt(2) || 4) * 7;
  const r = 26;
  const fieldInset = inset + 10;

  // a few spatter dots near the corners, sizes/offsets fixed for a natural look
  const dots = [
    [width * 0.04, height * 0.5, 5], [width * 0.02, height * 0.62, 3],
    [width * 0.97, height * 0.2, 4], [width * 0.99, height * 0.4, 6],
    [width * 0.5, height * 0.02, 4], [width * 0.7, height * 0.985, 5],
    [width * 0.3, height * 0.985, 3], [width * 0.96, height * 0.92, 4],
  ];

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width="100%"
      height="100%"
      preserveAspectRatio="none"
      style={{ position: 'absolute', inset: 0, display: 'block', ...style }}
      aria-hidden="true"
      {...rest}
    >
      <defs>
        <filter id={`${uid}-rough`} x="-8%" y="-10%" width="116%" height="120%">
          <feTurbulence type="fractalNoise" baseFrequency="0.018 0.024"
            numOctaves="3" seed={s} result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale={roughness}
            xChannelSelector="R" yChannelSelector="G" />
        </filter>
        <filter id={`${uid}-rough2`} x="-8%" y="-10%" width="116%" height="120%">
          <feTurbulence type="fractalNoise" baseFrequency="0.02 0.03"
            numOctaves="3" seed={s + 11} result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale={roughness + 3}
            xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>

      {/* white painted frame with rough outer edge */}
      <rect x={inset} y={inset} width={width - inset * 2} height={height - inset * 2}
        rx={r} ry={r} fill={frameColor} filter={`url(#${uid}-rough)`} />

      {/* coloured field with its own rough painted inner edge */}
      <rect x={fieldInset} y={fieldInset}
        width={width - fieldInset * 2} height={height - fieldInset * 2}
        rx={r - 6} ry={r - 6} fill={fieldColor} filter={`url(#${uid}-rough2)`} />

      {/* spatter dots */}
      {spatter && dots.map(([cx, cy, rad], i) => (
        <circle key={i} cx={cx} cy={cy} r={rad} fill={frameColor}
          filter={`url(#${uid}-rough)`} opacity="0.9" />
      ))}
    </svg>
  );
}
