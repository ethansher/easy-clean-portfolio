import React from 'react';
import { BrushFrame } from './BrushFrame.jsx';

let __ppSeed = 900;

/**
 * SectionTitle — the bold uppercase white heading on a page header, with an
 * optional circular badge on the right (defaults to the template's ring + square
 * glyph when `badge` is `true`).
 */
export function SectionTitle({ children, badge, size = 'var(--fs-title)', align = 'left', style = {} }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between',
      gap: 'var(--space-4)', ...style,
    }}>
      <h2 style={{
        margin: 0, fontFamily: 'var(--font-display)', fontWeight: 'var(--fw-black)',
        fontSize: size, letterSpacing: 'var(--ls-title)',
        textTransform: 'uppercase', color: 'var(--text-heading)',
        lineHeight: 'var(--lh-tight)', textAlign: align,
      }}>{children}</h2>
      {badge != null && badge !== false && (
        <span style={{
          flex: 'none', width: 34, height: 34, borderRadius: 'var(--radius-pill)',
          border: '2px solid var(--cyan-400)', color: 'var(--paper)',
          background: 'var(--paper)', display: 'grid', placeItems: 'center',
          fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 'var(--fw-bold)',
          marginTop: 4,
        }}>
          {badge === true
            ? <span style={{ width: 9, height: 9, background: 'var(--ink-700)', display: 'block' }}></span>
            : <span style={{ color: 'var(--cyan-500)' }}>{badge}</span>}
        </span>
      )}
    </div>
  );
}

/* White brush panel for "paper" pages — a rough-edged white area filling the body
   below the title, so image/evidence pages read as white on the blue page. */
function PaperPanel({ width, height, top }) {
  const uid = React.useMemo(() => `pp${__ppSeed++}`, []);
  const x = 30, w = width - 60, y = top, h = height - top - 30;
  return (
    <svg viewBox={`0 0 ${width} ${height}`} width="100%" height="100%" preserveAspectRatio="none"
      style={{ position: 'absolute', inset: 0 }} aria-hidden="true">
      <defs>
        <filter id={`${uid}`} x="-6%" y="-8%" width="112%" height="116%">
          <feTurbulence type="fractalNoise" baseFrequency="0.02 0.028" numOctaves="3" seed={uid.charCodeAt(2) * 5} result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="12" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>
      <rect x={x} y={y} width={w} height={h} rx="22" ry="22" fill="#ffffff" filter={`url(#${uid})`} />
    </svg>
  );
}

/**
 * PortfolioPage — a single A3-landscape portfolio page: the painted blue brush
 * frame, an uppercase section title, and a padded content area. Set `paper` for
 * image/evidence pages (a white brush panel fills the body).
 */
export function PortfolioPage({
  title,
  badge = true,
  fieldColor = 'var(--surface-page)',
  paper = false,
  width = 1480,
  height = 1046,
  titleSize = 40,
  seed,
  children,
  contentStyle = {},
  style = {},
}) {
  const titleBandH = 92;
  return (
    <div style={{
      position: 'relative', width, height, boxShadow: 'var(--shadow-frame)',
      fontFamily: 'var(--font-body)', color: 'var(--text-body)',
      background: 'var(--surface-canvas)', ...style,
    }}>
      <BrushFrame fieldColor={fieldColor} width={width} height={height} seed={seed} />
      {paper && <PaperPanel width={width} height={height} top={titleBandH} />}
      <div style={{
        position: 'absolute', inset: 0, padding: '22px 34px 30px',
        display: 'flex', flexDirection: 'column', gap: 14,
        ...contentStyle,
      }}>
        {title != null && (
          <SectionTitle badge={badge} size={titleSize} style={{ minHeight: titleBandH - 30 }}>{title}</SectionTitle>
        )}
        <div style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column', gap: 'var(--grid-gap)' }}>
          {children}
        </div>
      </div>
    </div>
  );
}
