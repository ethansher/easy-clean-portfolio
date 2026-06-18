import * as React from 'react';

export interface ContentCardProps {
  children?: React.ReactNode;
  /** Optional uppercase card heading. */
  heading?: React.ReactNode;
  /** Padding (CSS value). Default var(--space-4). */
  pad?: string;
  style?: React.CSSProperties;
}

/** White, generously-rounded content block that floats on the blue field. */
export function ContentCard(props: ContentCardProps): JSX.Element;
