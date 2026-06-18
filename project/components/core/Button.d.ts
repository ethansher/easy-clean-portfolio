import * as React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  /** primary=orange, cool=electric blue, ghost=outline, quiet=grey. */
  variant?: 'primary' | 'cool' | 'ghost' | 'quiet';
  size?: 'sm' | 'md' | 'lg';
}

/** Pill-shaped uppercase action button. */
export function Button(props: ButtonProps): JSX.Element;
