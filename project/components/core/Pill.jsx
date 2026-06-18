import React from 'react';

/**
 * Pill — a small painted-capsule label, like the "STUDENT NUMBER" tag on the
 * portfolio cover. Variants tint the capsule.
 */
export function Pill({ children, variant = 'cyan', style = {} }) {
  const bg = {
    cyan: 'var(--cyan-400)', blue: 'var(--blue-500)',
    orange: 'var(--orange-400)', white: 'var(--paper)',
  }[variant] || variant;
  const fg = variant === 'white' ? 'var(--cyan-500)' : 'var(--paper)';
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
      background: bg, color: fg, borderRadius: 'var(--radius-pill)',
      padding: '7px 18px', fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-bold)', fontSize: 'var(--fs-small)',
      textTransform: 'uppercase', letterSpacing: 'var(--ls-label)',
      boxShadow: 'var(--shadow-card)', ...style,
    }}>{children}</span>
  );
}
