import React from 'react';

/**
 * DataTable — the white research/analysis table used on pages like "Areas of
 * Investigation". Electric-blue header band, clean ruled rows. Pass `columns`
 * (array of strings) and `rows` (array of string arrays).
 */
export function DataTable({ columns = [], rows = [], style = {} }) {
  return (
    <div style={{
      background: 'var(--surface-card)', borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-card)', overflow: 'hidden',
      fontFamily: 'var(--font-body)', fontSize: 'var(--fs-small)',
      color: 'var(--text-body)', ...style,
    }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', tableLayout: 'fixed' }}>
        <thead>
          <tr style={{ background: 'var(--surface-band)' }}>
            {columns.map((c, i) => (
              <th key={i} style={{
                textAlign: 'left', padding: '9px 12px', color: 'var(--paper)',
                fontFamily: 'var(--font-display)', fontWeight: 'var(--fw-bold)',
                fontSize: 'var(--fs-small)', textTransform: 'uppercase',
                letterSpacing: '0.03em', verticalAlign: 'top',
              }}>{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} style={{ borderTop: '1px solid var(--border-table)' }}>
              {row.map((cell, ci) => (
                <td key={ci} style={{
                  padding: '9px 12px', verticalAlign: 'top',
                  lineHeight: 'var(--lh-snug)',
                  fontWeight: ci === 0 ? 'var(--fw-semibold)' : 'var(--fw-regular)',
                  color: ci === 0 ? 'var(--ink-900)' : 'var(--ink-700)',
                }}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
