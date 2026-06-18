import React from 'react';

/**
 * ContentCard — a white, generously-rounded content block that floats on the
 * blue portfolio field. Holds body copy, image slots, lists, etc.
 */
export function ContentCard({ children, heading, pad = 'var(--space-4)', style = {} }) {
  return (
    <div style={{
      background: 'var(--surface-card)', borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-card)', padding: pad, color: 'var(--text-body)',
      fontFamily: 'var(--font-body)', fontSize: 'var(--fs-body)',
      lineHeight: 'var(--lh-body)', minHeight: 0, ...style,
    }}>
      {heading != null && (
        <h3 style={{
          margin: '0 0 var(--space-2)', fontFamily: 'var(--font-display)',
          fontWeight: 'var(--fw-bold)', fontSize: 'var(--fs-subtitle)',
          textTransform: 'uppercase', letterSpacing: 'var(--ls-title)',
          color: 'var(--text-on-card-accent)', lineHeight: 'var(--lh-snug)',
        }}>{heading}</h3>
      )}
      {children}
    </div>
  );
}
