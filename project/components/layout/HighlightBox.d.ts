import * as React from 'react';

export interface HighlightBoxProps {
  children?: React.ReactNode;
  /** Optional uppercase label across the top. */
  label?: React.ReactNode;
  style?: React.CSSProperties;
}

/** Soft light-blue, extra-rounded callout box for key content inside a page. */
export function HighlightBox(props: HighlightBoxProps): JSX.Element;
