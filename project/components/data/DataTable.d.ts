import * as React from 'react';

export interface DataTableProps {
  /** Column header labels. */
  columns?: string[];
  /** Rows, each an array of cell strings aligned to columns. */
  rows?: string[][];
  style?: React.CSSProperties;
}

/** Research/analysis table with an electric-blue header band and ruled rows. */
export function DataTable(props: DataTableProps): JSX.Element;
