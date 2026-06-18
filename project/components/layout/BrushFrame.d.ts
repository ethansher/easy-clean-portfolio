import * as React from 'react';

export interface BrushFrameProps {
  /** Fill colour of the inner page field. Default: var(--surface-page). */
  fieldColor?: string;
  /** Colour of the painted outer frame. Default: white. */
  frameColor?: string;
  width?: number;
  height?: number;
  /** Displacement amount for the rough painted edge (px). Default 9. */
  roughness?: number;
  /** Frame thickness inset (px). Default 16. */
  inset?: number;
  /** Turbulence seed — change for a different edge shape. */
  seed?: number;
  /** Render corner spatter dots. Default true. */
  spatter?: boolean;
  style?: React.CSSProperties;
}

/** Signature painted brush-frame page background (SVG turbulence, no raster). */
export function BrushFrame(props: BrushFrameProps): JSX.Element;
