import * as React from 'react';

export interface SectionTitleProps {
  children?: React.ReactNode;
  /** Circular badge at the right. `true` shows the template ring+square glyph. */
  badge?: React.ReactNode;
  /** Heading font-size (CSS value). */
  size?: string | number;
  align?: 'left' | 'center' | 'right';
  style?: React.CSSProperties;
}

export interface PortfolioPageProps {
  /** Uppercase section heading shown on the page header. */
  title?: React.ReactNode;
  /** Circular badge beside the title. `true` (default) = ring+square glyph. */
  badge?: React.ReactNode;
  /** Page field colour. Default sky blue. */
  fieldColor?: string;
  /** White-field mode: a rough white brush panel fills the body (image/evidence pages). */
  paper?: boolean;
  /** A3-landscape pixel size. Defaults 1480×1046. */
  width?: number;
  height?: number;
  /** Title font-size px. Default 40. */
  titleSize?: number;
  seed?: number;
  children?: React.ReactNode;
  contentStyle?: React.CSSProperties;
  style?: React.CSSProperties;
}

/** Bold uppercase white section heading with optional circular badge. */
export function SectionTitle(props: SectionTitleProps): JSX.Element;

/**
 * A single landscape portfolio page: painted blue brush frame + padded content
 * area with optional section title. Compose cards/tables/highlights inside.
 */
export function PortfolioPage(props: PortfolioPageProps): JSX.Element;
