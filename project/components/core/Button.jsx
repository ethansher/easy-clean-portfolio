import React from 'react';

/**
 * Button — primary action control for the portfolio's interactive surfaces.
 * Variants: primary (orange), cool (electric blue), ghost (outline on blue).
 */
export function Button({ children, variant = 'primary', size = 'md', onClick, disabled, style = {}, ...rest }) {
  const variants = {
    primary: { background: 'var(--orange-400)', color: 'var(--paper)', border: '2px solid transparent' },
    cool:    { background: 'var(--cyan-400)', color: 'var(--paper)', border: '2px solid transparent' },
    ghost:   { background: 'transparent', color: 'var(--paper)', border: '2px solid var(--paper)' },
    quiet:   { background: 'var(--slate-100)', color: 'var(--ink-900)', border: '2px solid transparent' },
  };
  const sizes = {
    sm: { padding: '6px 14px', fontSize: 'var(--fs-small)' },
    md: { padding: '10px 22px', fontSize: 'var(--fs-body)' },
    lg: { padding: '14px 30px', fontSize: 'var(--fs-lead)' },
  };
  return (
    <button onClick={onClick} disabled={disabled} style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      gap: 'var(--space-2)', borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-display)', fontWeight: 'var(--fw-bold)',
      textTransform: 'uppercase', letterSpacing: 'var(--ls-label)',
      cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.45 : 1,
      transition: 'transform .12s ease, filter .12s ease',
      ...variants[variant], ...sizes[size], ...style,
    }}
      onMouseDown={(e) => { if (!disabled) e.currentTarget.style.transform = 'scale(0.96)'; }}
      onMouseUp={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
      {...rest}
    >{children}</button>
  );
}
