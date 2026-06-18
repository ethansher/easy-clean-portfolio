import * as React from 'react';

export interface PillProps {
  children?: React.ReactNode;
  /** Capsule tint. Default 'cyan'. */
  variant?: 'cyan' | 'blue' | 'orange' | 'white' | string;
  style?: React.CSSProperties;
}

/** Small painted-capsule label (e.g. the "STUDENT NUMBER" tag). */
export function Pill(props: PillProps): JSX.Element;
