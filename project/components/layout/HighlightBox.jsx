import React from 'react';

/**
 * HighlightBox — a soft light-blue, extra-rounded box used to draw the eye to a
 * key callout, image, or summary inside a portfolio page.
 */
export function HighlightBox({ children, label, style = {} }) {
  return (
    <div style={{
      background: 'var(--surface-highlight)', borderRadius: 'var(--radius-xl)',
      padding: 'var(--space-5)', color: 'var(--ink-900)',
      fontFamily: 'var(--font-body)', fontSize: 'var(--fs-body)',
      lineHeight: 'var(--lh-body)', position: 'relative', minHeight: 0, ...style,
    }}>
      {label != null && (
        <div style={{
          fontFamily: 'var(--font-display)', fontWeight: 'var(--fw-bold)',
          fontSize: 'var(--fs-small)', textTransform: 'uppercase',
          letterSpacing: 'var(--ls-label)', color: 'var(--paper)',
          marginBottom: 'var(--space-2)',
        }}>{label}</div>
      )}
      {children}
    </div>
  );
}
