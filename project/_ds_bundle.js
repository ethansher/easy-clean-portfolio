/* @ds-bundle: {"format":3,"namespace":"DNTPortfolioDesignSystem_899972","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Pill","sourcePath":"components/core/Pill.jsx"},{"name":"DataTable","sourcePath":"components/data/DataTable.jsx"},{"name":"BrushFrame","sourcePath":"components/layout/BrushFrame.jsx"},{"name":"ContentCard","sourcePath":"components/layout/ContentCard.jsx"},{"name":"HighlightBox","sourcePath":"components/layout/HighlightBox.jsx"},{"name":"SectionTitle","sourcePath":"components/layout/PortfolioPage.jsx"},{"name":"PortfolioPage","sourcePath":"components/layout/PortfolioPage.jsx"}],"sourceHashes":{"components/core/Button.jsx":"207eaeb747b4","components/core/Pill.jsx":"fd2d1fe47696","components/data/DataTable.jsx":"52ea6dae899f","components/layout/BrushFrame.jsx":"87f979f519db","components/layout/ContentCard.jsx":"f3da4d48292d","components/layout/HighlightBox.jsx":"6552a0eaa5a6","components/layout/PortfolioPage.jsx":"b72061fc96d8","ui_kits/portfolio/pages.jsx":"6c43b541cf82"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DNTPortfolioDesignSystem_899972 = window.DNTPortfolioDesignSystem_899972 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — primary action control for the portfolio's interactive surfaces.
 * Variants: primary (orange), cool (electric blue), ghost (outline on blue).
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  disabled,
  style = {},
  ...rest
}) {
  const variants = {
    primary: {
      background: 'var(--orange-400)',
      color: 'var(--paper)',
      border: '2px solid transparent'
    },
    cool: {
      background: 'var(--cyan-400)',
      color: 'var(--paper)',
      border: '2px solid transparent'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--paper)',
      border: '2px solid var(--paper)'
    },
    quiet: {
      background: 'var(--slate-100)',
      color: 'var(--ink-900)',
      border: '2px solid transparent'
    }
  };
  const sizes = {
    sm: {
      padding: '6px 14px',
      fontSize: 'var(--fs-small)'
    },
    md: {
      padding: '10px 22px',
      fontSize: 'var(--fs-body)'
    },
    lg: {
      padding: '14px 30px',
      fontSize: 'var(--fs-lead)'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    onClick: onClick,
    disabled: disabled,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--space-2)',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-bold)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--ls-label)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'transform .12s ease, filter .12s ease',
      ...variants[variant],
      ...sizes[size],
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'scale(0.96)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'scale(1)';
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Pill.jsx
try { (() => {
/**
 * Pill — a small painted-capsule label, like the "STUDENT NUMBER" tag on the
 * portfolio cover. Variants tint the capsule.
 */
function Pill({
  children,
  variant = 'cyan',
  style = {}
}) {
  const bg = {
    cyan: 'var(--cyan-400)',
    blue: 'var(--blue-500)',
    orange: 'var(--orange-400)',
    white: 'var(--paper)'
  }[variant] || variant;
  const fg = variant === 'white' ? 'var(--cyan-500)' : 'var(--paper)';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      background: bg,
      color: fg,
      borderRadius: 'var(--radius-pill)',
      padding: '7px 18px',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 'var(--fs-small)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--ls-label)',
      boxShadow: 'var(--shadow-card)',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Pill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Pill.jsx", error: String((e && e.message) || e) }); }

// components/data/DataTable.jsx
try { (() => {
/**
 * DataTable — the white research/analysis table used on pages like "Areas of
 * Investigation". Electric-blue header band, clean ruled rows. Pass `columns`
 * (array of strings) and `rows` (array of string arrays).
 */
function DataTable({
  columns = [],
  rows = [],
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-card)',
      overflow: 'hidden',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-small)',
      color: 'var(--text-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      tableLayout: 'fixed'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: 'var(--surface-band)'
    }
  }, columns.map((c, i) => /*#__PURE__*/React.createElement("th", {
    key: i,
    style: {
      textAlign: 'left',
      padding: '9px 12px',
      color: 'var(--paper)',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 'var(--fs-small)',
      textTransform: 'uppercase',
      letterSpacing: '0.03em',
      verticalAlign: 'top'
    }
  }, c)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((row, ri) => /*#__PURE__*/React.createElement("tr", {
    key: ri,
    style: {
      borderTop: '1px solid var(--border-table)'
    }
  }, row.map((cell, ci) => /*#__PURE__*/React.createElement("td", {
    key: ci,
    style: {
      padding: '9px 12px',
      verticalAlign: 'top',
      lineHeight: 'var(--lh-snug)',
      fontWeight: ci === 0 ? 'var(--fw-semibold)' : 'var(--fw-regular)',
      color: ci === 0 ? 'var(--ink-900)' : 'var(--ink-700)'
    }
  }, cell)))))));
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/layout/BrushFrame.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
let __bfSeed = 1;

/**
 * BrushFrame — the signature painted page background of the DNT portfolio.
 * A white "painted" frame with rough, spattered edges wrapping a coloured
 * field. Built entirely from an SVG feTurbulence + feDisplacementMap filter
 * so it scales cleanly and needs no raster assets.
 *
 * It renders as an absolutely-positioned background layer; place content in a
 * sibling above it (see PortfolioPage).
 */
function BrushFrame({
  fieldColor = 'var(--surface-page)',
  frameColor = 'var(--surface-frame)',
  width = 1024,
  height = 768,
  roughness = 9,
  inset = 16,
  seed,
  spatter = true,
  style = {},
  ...rest
}) {
  const uid = React.useMemo(() => `bf${__bfSeed++}`, []);
  const s = seed != null ? seed : (uid.charCodeAt(2) || 4) * 7;
  const r = 26;
  const fieldInset = inset + 10;

  // a few spatter dots near the corners, sizes/offsets fixed for a natural look
  const dots = [[width * 0.04, height * 0.5, 5], [width * 0.02, height * 0.62, 3], [width * 0.97, height * 0.2, 4], [width * 0.99, height * 0.4, 6], [width * 0.5, height * 0.02, 4], [width * 0.7, height * 0.985, 5], [width * 0.3, height * 0.985, 3], [width * 0.96, height * 0.92, 4]];
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: `0 0 ${width} ${height}`,
    width: "100%",
    height: "100%",
    preserveAspectRatio: "none",
    style: {
      position: 'absolute',
      inset: 0,
      display: 'block',
      ...style
    },
    "aria-hidden": "true"
  }, rest), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("filter", {
    id: `${uid}-rough`,
    x: "-8%",
    y: "-10%",
    width: "116%",
    height: "120%"
  }, /*#__PURE__*/React.createElement("feTurbulence", {
    type: "fractalNoise",
    baseFrequency: "0.018 0.024",
    numOctaves: "3",
    seed: s,
    result: "n"
  }), /*#__PURE__*/React.createElement("feDisplacementMap", {
    in: "SourceGraphic",
    in2: "n",
    scale: roughness,
    xChannelSelector: "R",
    yChannelSelector: "G"
  })), /*#__PURE__*/React.createElement("filter", {
    id: `${uid}-rough2`,
    x: "-8%",
    y: "-10%",
    width: "116%",
    height: "120%"
  }, /*#__PURE__*/React.createElement("feTurbulence", {
    type: "fractalNoise",
    baseFrequency: "0.02 0.03",
    numOctaves: "3",
    seed: s + 11,
    result: "n"
  }), /*#__PURE__*/React.createElement("feDisplacementMap", {
    in: "SourceGraphic",
    in2: "n",
    scale: roughness + 3,
    xChannelSelector: "R",
    yChannelSelector: "G"
  }))), /*#__PURE__*/React.createElement("rect", {
    x: inset,
    y: inset,
    width: width - inset * 2,
    height: height - inset * 2,
    rx: r,
    ry: r,
    fill: frameColor,
    filter: `url(#${uid}-rough)`
  }), /*#__PURE__*/React.createElement("rect", {
    x: fieldInset,
    y: fieldInset,
    width: width - fieldInset * 2,
    height: height - fieldInset * 2,
    rx: r - 6,
    ry: r - 6,
    fill: fieldColor,
    filter: `url(#${uid}-rough2)`
  }), spatter && dots.map(([cx, cy, rad], i) => /*#__PURE__*/React.createElement("circle", {
    key: i,
    cx: cx,
    cy: cy,
    r: rad,
    fill: frameColor,
    filter: `url(#${uid}-rough)`,
    opacity: "0.9"
  })));
}
Object.assign(__ds_scope, { BrushFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/BrushFrame.jsx", error: String((e && e.message) || e) }); }

// components/layout/ContentCard.jsx
try { (() => {
/**
 * ContentCard — a white, generously-rounded content block that floats on the
 * blue portfolio field. Holds body copy, image slots, lists, etc.
 */
function ContentCard({
  children,
  heading,
  pad = 'var(--space-4)',
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-card)',
      padding: pad,
      color: 'var(--text-body)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body)',
      lineHeight: 'var(--lh-body)',
      minHeight: 0,
      ...style
    }
  }, heading != null && /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 var(--space-2)',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 'var(--fs-subtitle)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--ls-title)',
      color: 'var(--text-on-card-accent)',
      lineHeight: 'var(--lh-snug)'
    }
  }, heading), children);
}
Object.assign(__ds_scope, { ContentCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/ContentCard.jsx", error: String((e && e.message) || e) }); }

// components/layout/HighlightBox.jsx
try { (() => {
/**
 * HighlightBox — a soft light-blue, extra-rounded box used to draw the eye to a
 * key callout, image, or summary inside a portfolio page.
 */
function HighlightBox({
  children,
  label,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-highlight)',
      borderRadius: 'var(--radius-xl)',
      padding: 'var(--space-5)',
      color: 'var(--ink-900)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body)',
      lineHeight: 'var(--lh-body)',
      position: 'relative',
      minHeight: 0,
      ...style
    }
  }, label != null && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 'var(--fs-small)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--ls-label)',
      color: 'var(--paper)',
      marginBottom: 'var(--space-2)'
    }
  }, label), children);
}
Object.assign(__ds_scope, { HighlightBox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/HighlightBox.jsx", error: String((e && e.message) || e) }); }

// components/layout/PortfolioPage.jsx
try { (() => {
let __ppSeed = 900;

/**
 * SectionTitle — the bold uppercase white heading on a page header, with an
 * optional circular badge on the right (defaults to the template's ring + square
 * glyph when `badge` is `true`).
 */
function SectionTitle({
  children,
  badge,
  size = 'var(--fs-title)',
  align = 'left',
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 'var(--space-4)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-black)',
      fontSize: size,
      letterSpacing: 'var(--ls-title)',
      textTransform: 'uppercase',
      color: 'var(--text-heading)',
      lineHeight: 'var(--lh-tight)',
      textAlign: align
    }
  }, children), badge != null && badge !== false && /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      width: 34,
      height: 34,
      borderRadius: 'var(--radius-pill)',
      border: '2px solid var(--cyan-400)',
      color: 'var(--paper)',
      background: 'var(--paper)',
      display: 'grid',
      placeItems: 'center',
      fontFamily: 'var(--font-display)',
      fontSize: 13,
      fontWeight: 'var(--fw-bold)',
      marginTop: 4
    }
  }, badge === true ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      background: 'var(--ink-700)',
      display: 'block'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--cyan-500)'
    }
  }, badge)));
}

/* White brush panel for "paper" pages — a rough-edged white area filling the body
   below the title, so image/evidence pages read as white on the blue page. */
function PaperPanel({
  width,
  height,
  top
}) {
  const uid = React.useMemo(() => `pp${__ppSeed++}`, []);
  const x = 30,
    w = width - 60,
    y = top,
    h = height - top - 30;
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${width} ${height}`,
    width: "100%",
    height: "100%",
    preserveAspectRatio: "none",
    style: {
      position: 'absolute',
      inset: 0
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("filter", {
    id: `${uid}`,
    x: "-6%",
    y: "-8%",
    width: "112%",
    height: "116%"
  }, /*#__PURE__*/React.createElement("feTurbulence", {
    type: "fractalNoise",
    baseFrequency: "0.02 0.028",
    numOctaves: "3",
    seed: uid.charCodeAt(2) * 5,
    result: "n"
  }), /*#__PURE__*/React.createElement("feDisplacementMap", {
    in: "SourceGraphic",
    in2: "n",
    scale: "12",
    xChannelSelector: "R",
    yChannelSelector: "G"
  }))), /*#__PURE__*/React.createElement("rect", {
    x: x,
    y: y,
    width: w,
    height: h,
    rx: "22",
    ry: "22",
    fill: "#ffffff",
    filter: `url(#${uid})`
  }));
}

/**
 * PortfolioPage — a single A3-landscape portfolio page: the painted blue brush
 * frame, an uppercase section title, and a padded content area. Set `paper` for
 * image/evidence pages (a white brush panel fills the body).
 */
function PortfolioPage({
  title,
  badge = true,
  fieldColor = 'var(--surface-page)',
  paper = false,
  width = 1480,
  height = 1046,
  titleSize = 40,
  seed,
  children,
  contentStyle = {},
  style = {}
}) {
  const titleBandH = 92;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width,
      height,
      boxShadow: 'var(--shadow-frame)',
      fontFamily: 'var(--font-body)',
      color: 'var(--text-body)',
      background: 'var(--surface-canvas)',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.BrushFrame, {
    fieldColor: fieldColor,
    width: width,
    height: height,
    seed: seed
  }), paper && /*#__PURE__*/React.createElement(PaperPanel, {
    width: width,
    height: height,
    top: titleBandH
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      padding: '22px 34px 30px',
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      ...contentStyle
    }
  }, title != null && /*#__PURE__*/React.createElement(SectionTitle, {
    badge: badge,
    size: titleSize,
    style: {
      minHeight: titleBandH - 30
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--grid-gap)'
    }
  }, children)));
}
Object.assign(__ds_scope, { SectionTitle, PortfolioPage });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/PortfolioPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/pages.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Easy Clean — DNT Major Work Portfolio
   All page-type layouts recreated from the source template, composed from the
   design-system components. Placeholder body copy renders as grey bars (the
   template's "empty" look); pass real `data` per page to fill it in.
   Exported to window for index.html (viewer) and portfolio.html (print). */
const DNT = window.DNTPortfolioDesignSystem_899972;
const {
  PortfolioPage,
  SectionTitle,
  HighlightBox
} = DNT;
const INK = 'var(--ink-900)';
const A3 = {
  width: 1480,
  height: 1046
};

/* ---------- shared bits ---------- */
const WSET = ['96%', '100%', '90%', '100%', '84%', '98%', '100%', '78%', '94%', '100%', '88%', '100%', '72%', '96%'];
function Lines({
  n = 7,
  start = 0,
  gap = 7,
  h = 9
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap,
      marginTop: 6
    }
  }, Array.from({
    length: n
  }).map((_, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      height: h,
      borderRadius: 2,
      background: 'var(--slate-400)',
      width: WSET[(i + start) % WSET.length]
    }
  })));
}
function Body({
  text,
  lines = 7,
  start = 0,
  color = INK
}) {
  if (text) return /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 0',
      fontSize: 15,
      lineHeight: 1.5,
      color
    }
  }, text);
  return /*#__PURE__*/React.createElement(Lines, {
    n: lines,
    start: start
  });
}
function ColHeading({
  children,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 14,
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      color: 'var(--cyan-500)',
      ...style
    }
  }, children || 'Heading');
}
function ImageSlot({
  label = 'Design',
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-xl)',
      background: 'var(--surface-highlight)',
      display: 'grid',
      placeItems: 'center',
      color: 'rgba(255,255,255,.9)',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 12,
      textTransform: 'uppercase',
      letterSpacing: '.1em',
      textAlign: 'center',
      padding: 10,
      boxSizing: 'border-box',
      minHeight: 0,
      ...style
    }
  }, label);
}
function QuoteBox({
  text,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--paper)',
      borderRadius: '40px / 30px',
      boxShadow: 'var(--shadow-card)',
      padding: '16px 22px',
      color: INK,
      fontSize: 15,
      lineHeight: 1.4,
      display: 'flex',
      alignItems: 'center',
      minHeight: 0,
      ...style
    }
  }, text || /*#__PURE__*/React.createElement(Lines, {
    n: 3
  }));
}
function Pie({
  a = 72,
  labelA = 'Lacks time',
  labelB = 'Other',
  title = 'Barriers to washing cars',
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      color: INK
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 96,
      height: 96,
      borderRadius: '50%',
      flex: 'none',
      background: `conic-gradient(var(--orange-400) 0 ${a}%, var(--cyan-400) ${a}% 100%)`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      lineHeight: 1.6
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--orange-400)',
      fontWeight: 800
    }
  }, a, "%"), " ", labelA), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--cyan-500)',
      fontWeight: 800
    }
  }, 100 - a, "%"), " ", labelB))));
}

/* ============ COVER ============ */
function CoverPage({
  badge
}) {
  return /*#__PURE__*/React.createElement(PortfolioPage, _extends({}, A3, {
    fieldColor: "var(--paper)",
    paper: false,
    title: null,
    seed: 3,
    contentStyle: {
      padding: 60,
      justifyContent: 'space-between'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(DNT.Pill, {
    variant: "cyan"
  }, "Student Number \xB7 30418772")), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo.svg",
    alt: "Easy Clean",
    style: {
      width: 460,
      marginBottom: 26
    }
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      textTransform: 'uppercase',
      letterSpacing: '0.02em',
      fontSize: 58,
      color: INK,
      lineHeight: 1.03
    }
  }, "Major Design Project"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '18px auto 0',
      maxWidth: 760,
      fontSize: 21,
      color: 'var(--ink-700)',
      lineHeight: 1.5
    }
  }, "A compact, affordable, water-smart car-cleaning kit designed for teenage P-plate drivers and their first car.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(DNT.Pill, {
    variant: "blue"
  }, "Design & Technology"), /*#__PURE__*/React.createElement(DNT.Pill, {
    variant: "orange"
  }, "Major Work Portfolio")));
}

/* ============ STANDARD DENSE PAGE (text on blue) ============ */
function StandardDensePage({
  title,
  badge,
  seed,
  data = {}
}) {
  const cols = data.cols || [{}, {}, {}, {}];
  const highlights = data.highlights || [{}, {}];
  const bottom = data.bottom || [{}, {}, {}];
  return /*#__PURE__*/React.createElement(PortfolioPage, _extends({}, A3, {
    title: title,
    badge: badge,
    seed: seed
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.05fr 3fr',
      gap: 20,
      flex: 1,
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement(ColHeading, null, cols[0].h), /*#__PURE__*/React.createElement(Body, {
    text: cols[0].text,
    lines: 16
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), data.pie ? /*#__PURE__*/React.createElement(Pie, data.pie) : /*#__PURE__*/React.createElement(ImageSlot, {
    label: data.smallLabel || 'Image',
    style: {
      height: 150
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: 18
    }
  }, [1, 2, 3].map(i => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement(ColHeading, null, cols[i] && cols[i].h), /*#__PURE__*/React.createElement(Body, {
    text: cols[i] && cols[i].text,
    lines: 8,
    start: i * 2
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 2fr',
      gap: 18,
      flex: 1,
      minHeight: 0
    }
  }, highlights.map((hl, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement(ColHeading, null, hl.h), /*#__PURE__*/React.createElement(HighlightBox, {
    style: {
      flex: 1
    }
  }, hl.text || '')))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: 18
    }
  }, bottom.map((b, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement(Body, {
    text: b.text,
    lines: 5,
    start: i * 3 + 1
  })))))));
}

/* ============ AREAS OF INVESTIGATION (table) ============ */
function InvestigationPage({
  title = 'Areas of Investigation',
  badge,
  seed,
  data = {}
}) {
  const cols = data.columns || [null, null, null, null];
  const rows = data.rows || Array.from({
    length: 6
  }).map(() => cols.map(() => ''));
  return /*#__PURE__*/React.createElement(PortfolioPage, _extends({}, A3, {
    title: title,
    badge: badge,
    seed: seed
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--paper)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-card)',
      overflow: 'hidden',
      flex: 1,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: `repeat(${cols.length},1fr)`,
      background: 'var(--surface-band)'
    }
  }, cols.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: '12px 14px',
      color: '#fff',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 14,
      textTransform: 'uppercase',
      minHeight: 44
    }
  }, c || /*#__PURE__*/React.createElement("div", {
    style: {
      height: 10,
      width: '70%',
      background: 'rgba(255,255,255,.55)',
      borderRadius: 2
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'grid',
      gridTemplateRows: `repeat(${rows.length},1fr)`
    }
  }, rows.map((r, ri) => /*#__PURE__*/React.createElement("div", {
    key: ri,
    style: {
      display: 'grid',
      gridTemplateColumns: `repeat(${cols.length},1fr)`,
      borderTop: '1px solid var(--border-table)'
    }
  }, r.map((cell, ci) => /*#__PURE__*/React.createElement("div", {
    key: ci,
    style: {
      padding: '10px 14px',
      borderLeft: ci ? '1px solid var(--border-table)' : 'none',
      fontSize: 13.5,
      color: INK
    }
  }, cell)))))));
}

/* ============ INTERVIEWS + CRITERIA ============ */
function InterviewsPage({
  badge,
  seed,
  data = {}
}) {
  const people = data.people || [{}, {}, {}];
  return /*#__PURE__*/React.createElement(PortfolioPage, _extends({}, A3, {
    title: null,
    seed: seed
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.15fr',
      gap: 26,
      flex: 1,
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    badge: false,
    size: 40
  }, "Interviews"), people.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      flex: 1,
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 14,
      color: '#fff',
      textTransform: 'uppercase',
      letterSpacing: '.04em'
    }
  }, p.name || 'Name, Occupation'), /*#__PURE__*/React.createElement(QuoteBox, {
    text: p.quote,
    style: {
      flex: 1
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    badge: badge,
    size: 36
  }, "Criteria to Evaluate Success"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--paper)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-card)',
      padding: 20,
      flex: 1,
      minHeight: 0,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(ColHeading, null, "Introduction"), /*#__PURE__*/React.createElement(Body, {
    text: data.intro,
    lines: 3
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 12
    }
  }), /*#__PURE__*/React.createElement(ColHeading, null, data.criteria && data.criteria.h || 'Portability'), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Body, {
    text: data.criteria && data.criteria.left,
    lines: 9
  }), /*#__PURE__*/React.createElement(Body, {
    text: data.criteria && data.criteria.right,
    lines: 9,
    start: 4
  }))))));
}

/* ============ ACTION, TIME & FINANCE PLANS ============ */
function ActionFinancePage({
  title = 'Action, Time and Finance Plans',
  badge,
  seed,
  data = {}
}) {
  return /*#__PURE__*/React.createElement(PortfolioPage, _extends({}, A3, {
    title: title,
    badge: badge,
    seed: seed,
    paper: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      flex: 1,
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 14,
      color: 'var(--slate-300)',
      fontSize: 14,
      fontStyle: 'italic'
    }
  }, data.note || 'Gantt chart / action plan'), /*#__PURE__*/React.createElement(HighlightBox, {
    label: "Summary",
    style: {
      position: 'absolute',
      right: 12,
      bottom: 12,
      width: 360,
      height: 220
    }
  }, data.summary || '')));
}

/* ============ EXPLORATION OF EXISTING DESIGNS ============ */
function ExistingDesignsPage({
  title = 'Exploration of Existing Designs',
  badge,
  seed,
  data = {}
}) {
  const items = data.items || [{}, {}];
  return /*#__PURE__*/React.createElement(PortfolioPage, _extends({}, A3, {
    title: title,
    badge: badge,
    seed: seed,
    paper: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 30,
      flex: 1,
      minHeight: 0
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement(ColHeading, null, it.design || 'Design'), /*#__PURE__*/React.createElement(ImageSlot, {
    label: it.label || 'Existing product image',
    style: {
      height: 300
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 18,
      flex: 1,
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ColHeading, null, "Key points from design: pos + neg"), /*#__PURE__*/React.createElement(Body, {
    text: it.points,
    lines: 6
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ColHeading, null, "What I learnt from"), /*#__PURE__*/React.createElement(Body, {
    text: it.learnt,
    lines: 6,
    start: 3
  })))))));
}

/* ============ SKETCHES ============ */
function SketchesPage({
  title = 'Sketches',
  badge,
  seed,
  data = {}
}) {
  const items = data.items || [{}, {}, {}, {}];
  return /*#__PURE__*/React.createElement(PortfolioPage, _extends({}, A3, {
    title: title,
    badge: badge,
    seed: seed,
    paper: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gridTemplateRows: '1fr 1fr',
      gap: 22,
      flex: 1,
      minHeight: 0
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement(ColHeading, null, it.design || 'Design'), /*#__PURE__*/React.createElement(ImageSlot, {
    label: it.label || 'Sketch',
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Body, {
    text: it.caption,
    lines: 2,
    start: i
  })))));
}

/* ============ BLANK WHITE CANVAS (creativity / testing / practical skills) ============ */
function BlankCanvasPage({
  title,
  badge,
  seed,
  data = {}
}) {
  return /*#__PURE__*/React.createElement(PortfolioPage, _extends({}, A3, {
    title: title,
    badge: badge,
    seed: seed,
    paper: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'grid',
      placeItems: 'center',
      color: 'var(--slate-300)',
      fontSize: 15,
      fontStyle: 'italic'
    }
  }, data.note || 'Paste images, scans and annotations here'));
}

/* ============ JUSTIFICATION OF TOOLS / MATERIALS ============ */
function JustificationPage({
  title = 'Justification of Tools / Materials',
  badge,
  seed,
  data = {}
}) {
  const left = data.left || {
    head: 'Tools',
    items: [{}, {}, {}]
  };
  const right = data.right || {
    head: 'Materials',
    items: [{}, {}, {}]
  };
  const Column = ({
    col,
    kind
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      minHeight: 0
    }
  }, col.items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 150px',
      gap: 14,
      flex: 1,
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ColHeading, null, it.h || kind), /*#__PURE__*/React.createElement(Body, {
    text: it.text,
    lines: 6,
    start: i * 2
  })), /*#__PURE__*/React.createElement(ImageSlot, {
    label: it.label || kind,
    style: {
      alignSelf: 'stretch'
    }
  }))));
  return /*#__PURE__*/React.createElement(PortfolioPage, _extends({}, A3, {
    title: null,
    seed: seed,
    paper: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 30,
      flex: 1,
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    badge: false,
    size: 32
  }, `Justification of ${left.head}`), /*#__PURE__*/React.createElement(Column, {
    col: left,
    kind: "Tool"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    badge: badge,
    size: 32
  }, `Justification of ${right.head}`), /*#__PURE__*/React.createElement(Column, {
    col: right,
    kind: "Material"
  }))));
}

/* ---------- page-type registry ---------- */
const PAGE_TYPES = {
  cover: p => /*#__PURE__*/React.createElement(CoverPage, p),
  need: p => /*#__PURE__*/React.createElement(StandardDensePage, _extends({
    title: "Identification of the Need"
  }, p)),
  investigation: p => /*#__PURE__*/React.createElement(InvestigationPage, p),
  interviews: p => /*#__PURE__*/React.createElement(InterviewsPage, p),
  criteria: p => /*#__PURE__*/React.createElement(StandardDensePage, _extends({
    title: "Criteria to Evaluate Success"
  }, p)),
  action: p => /*#__PURE__*/React.createElement(ActionFinancePage, p),
  existing: p => /*#__PURE__*/React.createElement(ExistingDesignsPage, p),
  sketches: p => /*#__PURE__*/React.createElement(SketchesPage, p),
  creativity: p => /*#__PURE__*/React.createElement(BlankCanvasPage, _extends({
    title: "Further Evidence of Creativity"
  }, p)),
  consideration: p => /*#__PURE__*/React.createElement(StandardDensePage, _extends({
    title: "Consideration of Design Factors"
  }, p)),
  testing: p => /*#__PURE__*/React.createElement(BlankCanvasPage, _extends({
    title: "Experimentation and Testing"
  }, p)),
  justification: p => /*#__PURE__*/React.createElement(JustificationPage, p),
  practical: p => /*#__PURE__*/React.createElement(BlankCanvasPage, _extends({
    title: "Evidence of Practical Skills"
  }, p)),
  evaluation: p => /*#__PURE__*/React.createElement(StandardDensePage, _extends({
    title: "Project Evaluation"
  }, p)),
  impact: p => /*#__PURE__*/React.createElement(StandardDensePage, _extends({
    title: "Impact on Society, Individual and the Environment",
    titleSize: 34
  }, p)),
  final: p => /*#__PURE__*/React.createElement(StandardDensePage, _extends({
    title: "Final Evaluation with Respect to the Project Proposal",
    titleSize: 32
  }, p))
};

/* ---------- the 40-page plan (data-driven; edit freely) ---------- */
const PLAN = [{
  t: 'cover'
}, {
  t: 'need'
}, {
  t: 'need'
}, {
  t: 'investigation'
}, {
  t: 'interviews'
}, {
  t: 'criteria',
  data: {
    pie: {}
  }
}, {
  t: 'criteria'
}, {
  t: 'action'
}, {
  t: 'existing'
}, {
  t: 'existing'
}, {
  t: 'sketches'
}, {
  t: 'sketches'
}, {
  t: 'sketches'
}, {
  t: 'creativity'
}, {
  t: 'creativity'
}, {
  t: 'creativity'
}, {
  t: 'consideration'
}, {
  t: 'consideration'
}, {
  t: 'testing'
}, {
  t: 'testing'
}, {
  t: 'testing'
}, {
  t: 'testing'
}, {
  t: 'justification'
}, {
  t: 'practical'
}, {
  t: 'practical'
}, {
  t: 'practical'
}, {
  t: 'practical'
}, {
  t: 'practical'
}, {
  t: 'practical'
}, {
  t: 'creativity'
}, {
  t: 'testing'
}, {
  t: 'testing'
}, {
  t: 'sketches'
}, {
  t: 'consideration'
}, {
  t: 'evaluation'
}, {
  t: 'evaluation'
}, {
  t: 'impact'
}, {
  t: 'impact'
}, {
  t: 'final'
}, {
  t: 'final'
}];
function renderPage(entry, i) {
  const fn = PAGE_TYPES[entry.t];
  return fn ? fn({
    badge: true,
    seed: (i * 7 + 3) % 90,
    data: entry.data || {}
  }) : null;
}
Object.assign(window, {
  EasyCleanPages: {
    PAGE_TYPES,
    PLAN,
    renderPage,
    CoverPage,
    StandardDensePage,
    InvestigationPage,
    InterviewsPage,
    ActionFinancePage,
    ExistingDesignsPage,
    SketchesPage,
    BlankCanvasPage,
    JustificationPage
  }
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/pages.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Pill = __ds_scope.Pill;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.BrushFrame = __ds_scope.BrushFrame;

__ds_ns.ContentCard = __ds_scope.ContentCard;

__ds_ns.HighlightBox = __ds_scope.HighlightBox;

__ds_ns.SectionTitle = __ds_scope.SectionTitle;

__ds_ns.PortfolioPage = __ds_scope.PortfolioPage;

})();
