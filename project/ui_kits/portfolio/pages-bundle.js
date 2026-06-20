/* Easy Clean — portfolio page layouts, standalone build.
   Runs AFTER _ds_bundle.js so window.DNTPortfolioDesignSystem_899972 is fully
   populated. No Babel / JSX compilation required. */
(function () {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
      fontSize: 12,
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
      padding: 0,
      justifyContent: 'center',
      alignItems: 'center'
    }
  }),
  /* decorative inner border frame */
  /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 44,
      border: '3px solid var(--cyan-400)',
      borderRadius: 18,
      pointerEvents: 'none',
      zIndex: 0
    }
  }),
  /* corner accent lines */
  /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 52,
      border: '1px solid rgba(0,173,239,0.25)',
      borderRadius: 12,
      pointerEvents: 'none',
      zIndex: 0
    }
  }),
  /* student number — top right inside border */
  /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 66,
      right: 70,
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement(DNT.Pill, {
    variant: "cyan"
  }, "Student Number \xB7 34933249")),
  /* pills — bottom left inside border */
  /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 66,
      left: 70,
      display: 'flex',
      gap: 10,
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement(DNT.Pill, {
    variant: "blue"
  }, "Design & Technology"), /*#__PURE__*/React.createElement(DNT.Pill, {
    variant: "orange"
  }, "Major Work Portfolio")),
  /* centred content — absolutely positioned so it truly sits in the middle */
  /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      textAlign: 'center',
      zIndex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 24,
      width: 800
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo.svg",
    alt: "Easy Clean",
    style: {
      width: 500
    }
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      textTransform: 'uppercase',
      letterSpacing: '0.02em',
      fontSize: 62,
      color: INK,
      lineHeight: 1.03
    }
  }, "Major Design Project"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 720,
      fontSize: 20,
      color: 'var(--ink-700)',
      lineHeight: 1.6
    }
  }, "A compact, affordable, water-smart car-cleaning kit designed for teenage P-plate drivers and their first car.")));
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
      color: INK,
      whiteSpace: 'pre-line'
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
  const ft = data.financeTable;
  if (ft) {
    const { cols, rows, projectedTotal, actualTotal } = ft;
    const gridCols = `repeat(${cols.length}, 1fr)`;
    const totalsRow = ['TOTALS', projectedTotal || '', '', '', actualTotal || '', ''].slice(0, cols.length);
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
      style: { display: 'grid', gridTemplateColumns: gridCols, background: 'var(--surface-band)' }
    }, cols.map((c, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: { padding: '12px 14px', color: '#fff', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13, textTransform: 'uppercase', minHeight: 44, borderLeft: i ? '1px solid rgba(255,255,255,.15)' : 'none' }
    }, c))), /*#__PURE__*/React.createElement("div", {
      style: { flex: 1, display: 'grid', gridTemplateRows: `repeat(${rows.length + 1}, 1fr)` }
    }, [
      ...rows.map((r, ri) => /*#__PURE__*/React.createElement("div", {
        key: ri,
        style: { display: 'grid', gridTemplateColumns: gridCols, borderTop: '1px solid var(--border-table)', background: ri % 2 === 0 ? '#f0f7fd' : 'var(--paper)' }
      }, r.map((cell, ci) => /*#__PURE__*/React.createElement("div", {
        key: ci,
        style: { padding: '7px 14px', borderLeft: ci ? '1px solid var(--border-table)' : 'none', fontSize: 12.5, color: INK, whiteSpace: 'pre-line' }
      }, cell)))),
      /*#__PURE__*/React.createElement("div", {
        key: 'totals',
        style: { display: 'grid', gridTemplateColumns: gridCols, borderTop: '2px solid var(--cyan-400)', background: '#e6f4fc' }
      }, totalsRow.map((cell, ci) => /*#__PURE__*/React.createElement("div", {
        key: ci,
        style: { padding: '8px 14px', borderLeft: ci ? '1px solid var(--border-table)' : 'none', fontSize: 13, fontWeight: 700, color: INK }
      }, cell)))
    ])));
  }
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
  need: p => /*#__PURE__*/React.createElement(StandardDensePage, _extends({ title: "Identification of the Need" }, p)),
  investigation: p => /*#__PURE__*/React.createElement(InvestigationPage, p),
  interviews: p => /*#__PURE__*/React.createElement(InterviewsPage, p),
  criteria: p => /*#__PURE__*/React.createElement(StandardDensePage, _extends({ title: "Criteria to Evaluate Success" }, p)),
  action: p => /*#__PURE__*/React.createElement(ActionFinancePage, p),
  existing: p => /*#__PURE__*/React.createElement(ExistingDesignsPage, p),
  sketches: p => /*#__PURE__*/React.createElement(SketchesPage, p),
  creativity: p => /*#__PURE__*/React.createElement(BlankCanvasPage, _extends({ title: "Further Evidence of Creativity" }, p)),
  consideration: p => /*#__PURE__*/React.createElement(StandardDensePage, _extends({ title: "Consideration of Design Factors" }, p)),
  testing: p => /*#__PURE__*/React.createElement(BlankCanvasPage, _extends({ title: "Experimentation and Testing" }, p)),
  justification: p => /*#__PURE__*/React.createElement(JustificationPage, p),
  practical: p => /*#__PURE__*/React.createElement(BlankCanvasPage, _extends({ title: "Evidence of Practical Skills" }, p)),
  evaluation: p => /*#__PURE__*/React.createElement(StandardDensePage, _extends({ title: "Project Evaluation" }, p)),
  impact: p => /*#__PURE__*/React.createElement(StandardDensePage, _extends({ title: "Impact on Society, Individual and the Environment", titleSize: 34 }, p)),
  final: p => /*#__PURE__*/React.createElement(StandardDensePage, _extends({ title: "Final Evaluation with Respect to the Project Proposal", titleSize: 32 }, p))
};

/* ---------- the portfolio plan ---------- */
const PLAN = [
  /* 1 */ { t: 'cover' },

  /* 2 */ {
    t: 'need',
    data: {
      cols: [
        { h: 'Background (Context)', text: 'Car cleaning is a key aspect of taking care of any vehicle. It affects safety, lifespan, and overall look of the vehicle. However, the traditional methods of cleaning are regularly pricey, time consuming, and harmful toward the environment as shown by the Australian Car Wash Association (ACWA), which states that a typical home car wash uses over 100 litres of water and creates around 750 mL of oily sludge that can enter waterways if untreated. Most people wash their cars with sponges, buckets, and hoses, or they use expensive pressure washers. While those equipment and tools can deliver decent results, they frequently produce high rates of water waste and cleaning products, leading to unnecessary costs and waste according to ACWA\'s explanation that home washing is less water-efficient than commercial car washes. Washing a car can take anywhere from 30 minutes to an hour and a half based on wash times listed by Star Car Wash, which range from 25–45 minutes for basic washes and 60–90 minutes for detailed washes. This isn\'t practical for busier people.' },
        { h: 'Environmental Impact', text: 'Over time, buying separate soaps, brushes, and towels can pile up. Although professional car washes offer convenience, they can be an inconvenience for teenagers and students due to its high prices, costing between $15 to over $100 per wash. When cars are cleaned at home, dirty runoff water mixed with soaps, oils, and grime goes down into our drains and eventually ends up in rivers and oceans. Clearwater Victoria\'s "The Dirty Truth: Home Car Washing," shows that driveway runoff goes directly into local waterways. The Australian Car Wash Association (ACWA, 2023) states that a single home wash can release about 750 millilitres of oil and use over 100 litres of water. This makes these methods inefficient and unsustainable.' },
        { h: 'Safety & Maintenance', text: 'Keeping a car clean is more than just for its looks but also the car\'s safety, maintenance, comfort, and the environment. A dirty car can pose a danger on the road as when grime covers windows, mirrors, and headlights it reduces the visibility and glare especially during the night as revealed by Canstar Blue, which reports that clear windscreens and headlights are essential for safe driving and that dirty surfaces can reduce visibility and increase glare. Clean glass and mirrors are crucial for safe driving in all weather conditions. Dirt, sap, and bird droppings can harm your car\'s paint over time. This damage can lead to more frequent and expensive repairs and lower resale value. Regular cleaning of your car protects the car\'s paint, prevents rust, and allows the car to be in better shape for longer.' },
        { h: 'Comfort, Hygiene & Environment', text: 'Comfort and hygiene are also crucial. A clean interior allows the driver to have a more enjoyable experience while driving and helps drivers feel more organized and clear headed as supported by my interview with Doron, a 17-year-old P-plate driver, who said that having a clean and tidy car helps him feel more relaxed and comfortable while driving. My project\'s handheld air compressor design helps the drivers to clear dust, crumbs, and debris from small spaces like vents, cup holders, and seats easily. Which supports both cleanliness and mental comfort.\n\nFinally, car cleaning significantly impacts the environment. Traditional car-washing methods can waste large amounts of water and send harmful chemicals into stormwater systems and waterways. Water360\'s Car Wash Water Saver Rating Scheme shows that even high-rated commercial car washes can still use 100 litres of drinking water per wash. My design aims to encourage more responsible water use by using a controlled hose attachment and soap-mixing mechanism to reduce both water consumption and chemical runoff.\n\nOverall, car cleaning is vital for maintaining vehicle safety, lifespan, and appearance, yet current methods are expensive, wasteful, and slow. This creates a clear opportunity for a practical, affordable, and more sustainable solution that helps younger drivers take pride in their cars while developing habits that benefit both themselves and the environment.' }
      ],
      highlights: [
        { h: 'ACWA Research Findings', text: 'A typical home wash uses over 100 litres of water and generates ~750 mL of oily, polluted sludge per wash. Driveway runoff goes directly into local waterways, harming aquatic ecosystems (ACWA, 2023). Home washing is less water-efficient than commercial car washes.' },
        { h: 'Comfort & Hygiene', text: 'Doron, 17: "Having a clean and tidy car helps me feel more relaxed and comfortable while driving." A clean interior supports driver focus, mental clarity, and pride in the vehicle — especially important for P-plate drivers.' }
      ]
    }
  },

  /* 3 */ {
    t: 'need',
    data: {
      cols: [
        { h: 'Description and Explanation of the Project', text: 'My project addresses these issues by offering a multifunctional car cleaning kit that attaches directly to any standard garden hose. The kit involves four main components in one compact and easy-to-use system:\nA soap-blending attachment that blends detergent into foam automatically for a thorough and even clean, limiting product waste by mixing the correct ratio of soap and water.\nA handheld air compressor/blower that blows away dust and debris from the interior and exterior of the vehicle efficiently, helping dry small crevices and clean vents without using extra water.\nA non-scratch scraper built to safely remove dried mud, insects, and tough grime without causing any damage to the paint and finish.\nA microfibre towel that allows for a streak-free finish for drying all surfaces of the car without leaving any marks or residue behind.\n\nThis design promotes quicker, cheaper, and more environmentally friendly car cleaning by reducing water and product use while still taking up less storage space and washing time. By combining these tools into one simple kit, the process of cleaning your car is quicker and eliminates the need for multiple expensive products, making it ideal for younger drivers who have limited time. In summary, my design meets the wants and needs for a more affordable, sustainable car-cleaning solution suited to modern lifestyles.' },
        { h: 'Motivation Behind the Project', text: 'As a younger driver myself with limited time to wash my car, it often ends up dirty inside and out. Having a clean car is important to me. It makes me feel clear-headed, proud, and comfortable while driving, especially when I have passengers.\n\nOwning my first car was a massive accomplishment and a sign of freedom and independence. However, I quickly understood that keeping it clean takes time, effort, and money, which most teenagers don\'t have. After balancing school, sport, work, and tutors, I struggled to maintain my car regularly. The untidiness made me think about how many other young drivers deal with the same issues. To support this, I plan to conduct short surveys with P-plate drivers at my school to collect data on how often they wash their cars, how much time they have, and what stops them from cleaning their cars more regularly. This primary research will give real-world evidence to back up my observations.\n\nThat personal experience pushed me to create something practical to solve problems like mine for people around my age. I wanted to make a cleaning kit that makes washing your car quick, affordable, and a more enjoyable experience, so it doesn\'t feel like a chore. I am also passionate about decreasing waste of water and chemicals, so developing an eco-friendly design became a key part of my goal.\n\nThrough this project, I am not just building something useful for myself but also learning about design, sustainability, and user-focused innovation. It inspires me to create an answer to these problems that truly helps others, especially younger drivers like myself who also take pride in their cars inside and out.' },
        { h: 'Purpose of the Project', text: 'The goal of my project is to create a solution to traditional car-washing methods that saves time, lowers costs, and reduces water and chemical waste. My aim is to make car care simple and sustainable for everyday drivers, especially newer ones.\n\nACWA and Water360 statistics show a single home car wash can use over 100 litres of water and generate around 750 mL of oily, polluted runoff. Budget Direct\'s cost-of-ownership guide estimates car-washing expenses at roughly $780 per year for a typical Australian household, showing that washing is a real financial cost over time. For teenagers and students working part-time or not at all, that level of spending is unrealistic. These prices discourage regular maintenance, which leads to dirt build-up and more damage over time.\n\nMy kit aims to respond to these problems by combining several pieces of equipment — a foam-soap attachment, handheld air compressor, non-scratch scraper, and microfibre towel — into one more affordable and reusable set. The idea is that one kit can replace many separate products, reducing both cost and waste.\n\nThe Australian Institute of Family Studies (AIFS) found that around 86% of young people had obtained a probationary car driver\'s licence by the age of 19–20, showing how many young Australians are on the road and responsible for their own vehicles. My project aims to reduce waste, cut costs, and encourage eco-friendly habits, making a small but meaningful contribution for both individual drivers and the environment.' },
        { h: 'Identification and Definition of the Target Market', text: 'The primary target market for the car-cleaning kit is teenagers and young adults who have just gotten their first car. This group often finds it challenging to keep their cars clean because they have limited time, storage space, and money. Many younger drivers are still in school or university and also work part-time, making professional car cleaning too expensive and traditional tools too bulky and time-consuming. Yet they still deeply care about the appearance of their vehicle because it represents responsibility, freedom, and independence.\n\nWhen I spoke to Gabriel Vargas, a Technical Support Specialist at Meguiar\'s Australia, he agreed that the lack of storage and time are significant obstacles for everyday people trying to keep up with car maintenance. He explained: "There are many individuals who are passionate about their vehicles and would like to keep them clean and maintained, but unfortunately don\'t have the space or facility to do so. This tends to result in a vehicle that is not washed as frequently as intended."\n\nThis aligns with my own experience that many young people simply lack access to the space or tools needed to clean their cars properly. Gabriel additionally agreed that a smaller multi-function product like mine would fill a real gap in the market. He said: "Absolutely, something that can do it all, and if it can do it all well, certainly has a seat in the car care industry." His professional feedback confirmed that my product is relevant and realistic for the current market, especially for customers who need a compact and efficient way to maintain their vehicles.\n\nA teenager\'s perspective on how hard it is to clean a car comes from Doron, a 17-year-old I interviewed who recently gained his provisional licence. He explained: "As I\'m still in school, it\'s hard to keep my car clean. Between tutoring, sport, and homework, I barely have any time, and when I do, I just want to hang out with friends instead of spending over an hour washing my car." Doron\'s experience perfectly represents the struggles my design aims to solve.\n\nWho Will Use the Product: Young drivers, students, and everyday Australians who want a clean car without wasting time, effort, or money will use this product. It appeals to a broad audience, from environmentally conscious teenagers to busy working adults who value convenience, sustainability, and affordability in their daily routines.' }
      ],
      highlights: [
        { h: 'Gabriel Vargas — Meguiar\'s Australia', text: '"Absolutely, something that can do it all, and if it can do it all well, certainly has a seat in the car care industry." — Technical Support Specialist, Meguiar\'s Australia' },
        { h: 'Doron Evian — P-plate Driver, Age 17', text: '"As I\'m still in school, it\'s hard to keep my car clean. Between tutoring, sport, and homework, I barely have any time, and when I do, I just want to hang out with friends instead of spending over an hour washing my car."' }
      ]
    }
  },

  /* 4 */ {
    t: 'investigation',
    data: {
      columns: [
        'What needs to be investigated',
        'How will that help my development',
        'Primary research methods',
        'Secondary research methods',
        'How will this help my understanding'
      ],
      rows: [
        [
          'Existing designs\n• Foam soap sprayers\n• Air blowers\n• Microfibre towels\n• Non-scratch scrapers\n• Cordless pressure washers',
          'Evaluating existing products will identify strengths and weaknesses, allowing me to develop a more practical, affordable, and multi-functional alternative better suited to P-plate drivers.',
          'Interview — Gabriel Vargas (Meguiar\'s Aus)\nInterview — Doron Evian (P-plate driver)',
          'Product testing videos\nOnline comparison charts\nRetail site user reviews',
          'Identify design opportunities such as reducing size, combining functions, or lowering cost; ensure the final kit offers something genuinely new and better.'
        ],
        [
          'Car cleaning methods\n• Home hand washing\n• Professional car wash\n• Foam cannon method\n• Waterless wash',
          'Comparing methods by time, cost, and water use will allow me to position my kit as a faster, cheaper, and more eco-friendly alternative.',
          'Interview — Doron Evian (home wash)\nInterview — Car Care Co (professional wash)',
          'ACWA statistics\nIndustry cost comparison reports\nEnvironmental impact articles on car wash runoff',
          'Determine which cleaning aspects are most time-consuming, wasteful, or expensive to directly inform the features I prioritise.'
        ],
        [
          'Materials\n• 3D printing filaments\n• Timber options\n• EVA foam\n• Microfibre fabric\n• Rubber seals',
          'Researching material properties ensures each component is durable, lightweight, safe for car surfaces, and appropriate for 3D printing within school workshop production.',
          'Physical material testing\nDiscussions with timber suppliers\nContact with 3D filament specialists',
          'CSIRO polymer research\nProduct Safety Aus guidelines\nFilament manufacturer specs\nRetail site and forum reviews',
          'Understand which options best meet functional, aesthetic, safety, and environmental requirements for each component of the kit.'
        ],
        [
          'Construction methods\n• FDM 3D printing\n• Snap-fit assembly\n• Epoxy resin joining\n• Sanding & surface finishing\n• Leather wrapping',
          'Understanding available construction methods will help me plan how to build and connect each part of the kit effectively within a school workshop setting.',
          'Test prints using school 3D printers\nSample testing of joining methods\nExamining connectors at hardware stores',
          'YouTube tutorials on 3D printing\nSlicer software documentation\nSafe Work Aus tool use guidelines',
          'Plan the production process realistically; select the most appropriate joining and finishing methods; avoid construction mistakes.'
        ],
        [
          'Associations\n• Australian Car Wash Association (ACWA)\n• Meguiar\'s Australia\n• Water Services Assoc. of Aus (WSAA)',
          'Industry associations provide credible data and expert insight into professional cleaning standards, strengthening my identification of need and design decisions.',
          'Email interview — Gabriel Vargas\n(Technical Support Specialist, Meguiar\'s Aus)',
          'ACWA environmental data\nWSAA water efficiency reports\nMeguiar\'s product publications',
          'Understand the standards and expectations of the car care industry; position my design as a credible, practical solution.'
        ],
        [
          'Government policy\n• National Water Initiative (2004)\n• WELS Act 2005\n• Sydney Water Wise Rules (NSW)\n• National Waste Policy (2018)\n• Product Stewardship Act (2011)',
          'Researching policy ensures my design supports Australian water-saving standards and environmental requirements, confirming it is legally appropriate and responsible.',
          'Review of WELS requirements\nLocal council environmental officer consultation',
          'Australian Govt NWI documentation\nSydney Water guidelines\nDept of Climate Change resources',
          'Ensure design meets Australian legal and environmental standards; justify decisions around water efficiency and responsible material use.'
        ],
        [
          'Work Health and Safety\n• WHS Act 2011\n• AS/NZS 60335 Electrical Safety\n• Safe Work Aus Ergonomic Design Code of Practice',
          'Identifying WHS standards will help me design out foreseeable risks: wrist strain, blade injury, and electric shock from the air duster.',
          'Physical ergonomic testing of handle shapes\nBlade testing on car-safe surfaces\nContact with consumer product manufacturers',
          'Safe Work Aus ergonomic guidelines\nProduct Safety Aus requirements\nAS/NZS 60335 documentation\nCCOHS ergonomic tool guidelines',
          'Understand safety obligations and design out common risks associated with handheld cleaning tools; make informed decisions about blade angles and grip design.'
        ],
        [
          'Australian Standards\n• AS/NZS 60335 — Household Electrical Appliances\n• AS/NZS ISO 14001 — Environmental Management Systems',
          'Confirms my design aligns with safety and quality laws that would apply if the product were commercially produced, demonstrating design thinking beyond the prototype stage.',
          'Contact with consumer product manufacturers who apply these standards in practice',
          'AS/NZS 60335 documentation\nAS/NZS ISO 14001 guidelines\nACCC product safety framework\nProduct Safety Aus compliance guides',
          'Understand legal requirements for commercial production; make design decisions that align with real-world compliance expectations, particularly around electrical safety and environmental management.'
        ]
      ]
    }
  },

  /* 5 */ {
    t: 'interviews',
    data: {
      people: [
        {
          name: 'Gabriel Vargas · Technical Support Specialist, Meguiar\'s Australia',
          quote: '"There are many individuals who are passionate about their vehicles and would like to keep them clean and maintained, but unfortunately don\'t have the space or facility to do so. This tends to result in a vehicle that is not washed as frequently as intended." Gabriel additionally agreed that a smaller multi-function product like mine would fill a real gap in the market: "Absolutely, something that can do it all, and if it can do it all well, certainly has a seat in the car care industry."'
        },
        {
          name: 'Doron Evian · P-plate Driver, Age 17',
          quote: '"As I\'m still in school, it\'s hard to keep my car clean. Between tutoring, sport, and homework, I barely have any time, and when I do, I just want to hang out with friends instead of spending over an hour washing my car." Doron\'s experience perfectly represents the struggles my design aims to solve, by helping teenagers like him wash their car in a quicker and less time-consuming way.'
        },
        {
          name: 'Survey · 30 P-plate Drivers',
          quote: '"Having a portable way to wash the car was imperative as cars are often located outside a person\'s house and therefore need an easy way to wash it and bring all the necessary products." — 65% of survey participants identified that a factor for not washing the car was "the equipment was too heavy and bulky to carry themselves."'
        }
      ],
      intro: 'The Criteria to evaluate success is essential as it allows me to consider the functional, aesthetic and ergonomic factors that impact on my project. I have researched different aspects that are needed to successfully create my project. I interviewed several people who currently own and wash cars in order to allow me to better understand the different aspects and design factors that are needed to include in my project.',
      criteria: {
        h: 'Portability',
        left: 'Portability in the context of this project refers to how easily the car-cleaning kit can be transported, handled, and stored by the user before, during, and after use. As the target market is teenage and young drivers, portability is a critical success factor because many users have limited storage space, live in shared homes or apartments, and rely on carrying equipment short distances from storage areas to driveways or parking spaces. A portable product increases the likelihood of regular use, directly supporting the project\'s aim of making car cleaning more convenient and accessible. In an interview with a teenager who washes their own car, they expressed that "having a portable way to wash the car was imperative as cars are often located outside a person\'s house and therefore need an easy way to wash it and bring all the necessary products." The goal of this criterion is to ensure that the entire kit can be easily carried by one person without strain and stored in common spaces such as a car boot, cupboard, or garage shelf.',
        right: 'Portability is important because research into product design shows that users are more likely to engage with products that are easy to move and store. The Design Society\'s research on portability design heuristics explains that products intended for frequent use should minimise physical effort and handling complexity to improve user adoption and satisfaction. For this project, a portable design aligns with the identified need of younger drivers who avoid bulky equipment like pressure washers due to their size and inconvenience. One major advantage of achieving portability is increased usability. A compact, lightweight, and easily carried kit encourages users to clean their cars more often, rather than delaying the task. In interviews with P-plate drivers during the research phase, many avoid cleaning their cars because "setting everything up feels like too much effort." However, a challenge associated with compact portability is that reducing size can limit internal space for components such as soap reservoirs or air-flow systems. If portability is not achieved, the product risks becoming impractical for the target audience. A kit that is awkward to lift, carry, or store would discourage use and fail to address the identified need. Portability will be evaluated through physical testing and user trials. The minimum standard for success is that the kit can be carried comfortably with one hand, stored in a standard car boot, and transported without causing discomfort or excessive effort.'
      }
    }
  },

  /* 6 — Criteria: Weight · Compactness · Shape */ {
    t: 'criteria',
    data: {
      pie: { a: 65, labelA: 'Equipment too heavy', labelB: 'Other barriers', title: 'Barriers to car cleaning (survey, n=30)' },
      cols: [
        { h: 'Overview', text: 'Criteria to evaluate success is essential as it allows me to consider the functional, aesthetic and ergonomic factors that impact on my project. I have researched different aspects that are needed to successfully create my project. I interviewed several people who currently own and wash cars in order to allow me to better understand the different aspects and design factors that are needed to include in my project.' },
        { h: 'Weight', text: 'Weight in the context of this project refers to the total mass of the multifunctional car-cleaning kit when fully assembled and ready for use. This includes the hose attachment, soap-mixing mechanism, air blower component, and any structural casing. Weight is a crucial criterion because the product is designed to be portable and handheld, and the target market consists mainly of teenage and young drivers who may have limited physical strength and tolerance for heavy equipment. If the kit is too heavy, it will negatively impact usability, ergonomics, and portability, reducing the likelihood that it will be used regularly. This was supported in a survey of 30 people, where 65% of survey participants identified that a factor for not washing the car was "the equipment was too heavy and bulky to carry themselves"\n\nThe goal of this criterion is to ensure the product is light enough to be easily lifted, carried, and operated by a single user without causing fatigue or strain. Weight directly affects how long a user can comfortably clean their car and how manageable the product feels during setup and storage. Safe Work Australia highlights that excessive weight in hand-held equipment increases the risk of muscle fatigue and musculoskeletal strain, particularly during repetitive or sustained tasks. Designing the kit to remain lightweight supports safer handling and aligns with the project\'s aim of making car cleaning quicker and less physically demanding.\n\nA major advantage of achieving a low overall weight is improved user comfort and control. Lighter products are easier to manoeuvre around a vehicle, especially when cleaning higher or awkward areas such as windows, mirrors, and roof panels. Ergonomic guidance from the Canadian Centre for Occupational Health and Safety states that reducing tool weight lowers physical stress on the arms and shoulders, allowing tasks to be performed for longer periods without discomfort. However, a challenge associated with reducing weight is maintaining durability and structural strength. Lightweight materials such as thin plastics may reduce mass but can crack or deform if not carefully selected, especially when exposed to water pressure and repeated use.\n\nIf this criterion is not met and the product is too heavy, users may avoid lifting or carrying it, undermining both portability and overall usability. Weight will be evaluated by measuring the final prototype using a digital scale and conducting user handling trials. The minimum standard for success is that the fully assembled kit can be carried with one hand and used continuously for at least 10–15 minutes without reported fatigue or discomfort.' },
        { h: 'Compactness', text: 'Compactness in the context of this project refers to how efficiently the car-cleaning kit uses space while still housing all required components and allowing effective operation. A compact design means the kit occupies minimal volume when stored and handled, without sacrificing functionality or ease of use. This criterion is especially important for the target market of teenage and young drivers, many of whom live in apartments, share garages, or have limited storage in car boots. Compactness directly affects whether the product fits into everyday life rather than becoming another bulky tool that discourages use.\n\nThe goal of this criterion is to ensure the kit can be stored in small, common spaces such as a car boot, cupboard, or shelf, while remaining easy to deploy and pack away. Compact products are more likely to be used frequently because they reduce setup time and storage frustration. Research into consumer product design highlights that compactness improves convenience and increases user adoption for products intended for regular use, particularly when space is limited. For this project, compactness supports the identified need for a quick and practical cleaning solution that does not require large equipment like pressure washers or multiple loose tools.\n\nA key advantage of achieving compactness is improved portability and organisation. Integrating multiple functions into a single, space-efficient unit reduces clutter and simplifies storage. However, compactness also introduces design challenges. Reducing overall size can limit internal space for components such as soap reservoirs, airflow channels, or hose fittings. If components are too tightly packed, this may complicate assembly, maintenance, or airflow efficiency.\n\nIf compactness is not achieved, the product may become impractical for its intended audience. A bulky or awkwardly shaped kit would discourage regular use and conflict with the project\'s goal of convenience. Compactness will be evaluated by measuring the final prototype\'s dimensions and testing its ability to fit within a standard car boot and small storage spaces. The minimum standard for success is that the fully assembled kit fits comfortably within a standard car boot and can be stored without disassembly, while still allowing all components to function effectively during use.' },
        { h: 'Shape', text: 'Shape in the context of this project refers to the overall form and geometry of the car-cleaning kit, including how its body, handles, and components are arranged and contoured. Shape influences how the product is held, balanced, stored, and visually understood by the user. For a handheld, portable cleaning kit, shape is closely linked to usability and comfort, as it determines how naturally the product fits in the user\'s hand and how easily it can be manoeuvred around a vehicle. A well-considered shape supports both function and ease of use, while a poorly designed shape can make the product awkward or uncomfortable to operate.\n\nThe goal of this criterion is to develop a shape that allows the kit to be comfortably handled with one or two hands, maintains good balance during use, and fits efficiently into storage spaces such as a car boot. Shape is particularly important for younger drivers, who may have less experience using tools and prefer products that feel intuitive rather than technical or intimidating. In an interview with a younger driver they stated: "A car cleaning kit that is shaped to allow for easier storage would make cleaning my car so much easier." Research in industrial design highlights that products with clear, ergonomic forms improve user confidence and reduce handling errors because users can easily understand how the product should be held and used.\n\nOne advantage of a well-designed shape is improved control and stability during cleaning. Rounded edges, balanced proportions, and clear grip areas make the product easier to direct around windows, panels, and interior spaces. Shape also contributes to compactness, as efficient geometry allows components to be arranged without wasted space. However, shaping a multifunctional product presents challenges — incorporating multiple internal components may limit external form options.\n\nIf the shape criterion is not met, the product may feel awkward, unbalanced, or uncomfortable to use. Shape will be evaluated through user handling tests, observation of grip comfort, and storage trials. The minimum standard for success is that the kit can be comfortably held and controlled during use, fits naturally in the hand, and can be stored efficiently without awkward positioning.' }
      ],
      highlights: [
        { h: 'Survey Finding', text: '65% of 30 P-plate drivers surveyed identified equipment being too heavy and bulky as a key barrier to washing their car more regularly. Safe Work Australia highlights that excessive weight in handheld equipment increases the risk of muscle fatigue and musculoskeletal strain, particularly during repetitive or sustained tasks.' },
        { h: 'Weight & Compactness Minimum Standards', text: 'Weight: The fully assembled kit can be carried with one hand and used continuously for at least 10–15 minutes without reported fatigue or discomfort. Compactness: The kit fits comfortably within a standard car boot and can be stored without disassembly while all components remain functional.' }
      ]
    }
  },

  /* 7 — Criteria: Colour · Trends · Legislation · Safety */ {
    t: 'criteria',
    data: {
      cols: [
        { h: 'Colour', text: 'Colour in the context of this project refers to the selection and application of colours across the car-cleaning kit\'s body, controls, and components. Colour influences how users perceive the product, how easily they can identify functional parts, and how safe and intuitive the product feels during use. For a practical, handheld tool aimed at young drivers, colour is not purely decorative; it plays a role in usability, visibility, and user confidence, particularly in outdoor or low-light environments such as driveways and garages.\n\nThe goal of this criterion is to select a colour scheme that enhances visibility, communicates function clearly, and appeals to the target market without becoming distracting or impractical. Research into product and safety design shows that colour contrast helps users quickly identify controls and moving parts, reducing user error. Safe Work Australia highlights that high-contrast colours are commonly used to improve visibility and reduce risk when operating equipment, particularly where water, movement, or hand-held tools are involved.\n\nOne major advantage of an effective colour scheme is improved usability. Using contrasting colours for controls, nozzles, or grip areas helps users instantly recognise where to hold or adjust the product. Colour psychology research also suggests that neutral and darker tones such as grey, black, or navy are commonly associated with durability and cleanliness in tools, while limited accent colours can draw attention to key features. However, there are challenges: light colours may show dirt and wear quickly, while overly bright colours may clash with the product\'s intended professional image.\n\nIf the colour criterion is not achieved, the product may appear cheap, confusing, or difficult to use. Poor colour contrast could make controls hard to identify. Colour will be evaluated through visual assessment, user preference surveys, and observation during use. The minimum standard for success is that functional components are clearly visible, the product maintains a clean appearance after repeated use, and users report that the colour scheme looks appropriate and easy to understand.' },
        { h: 'Trends', text: 'Trends in the context of this project refer to current and emerging patterns in product design, consumer behaviour, and car-care practices that influence how users interact with and value products. For a car-cleaning kit aimed at teenage and young drivers, trends are important because this demographic is strongly influenced by modern design, convenience, sustainability, and products that align with their lifestyle. Incorporating relevant trends increases the likelihood that the product will be appealing, accepted, and used regularly rather than ignored or replaced by existing alternatives.\n\nThe goal of this criterion is to ensure the design reflects contemporary trends in simplicity, multifunctionality, and sustainability. Market research shows that consumers increasingly favour products that combine multiple functions into one compact solution to save time and space. According to McKinsey & Company, convenience and efficiency are key drivers in modern consumer product choices, especially among younger users who value time-saving solutions. Additionally, sustainability is a growing trend in product design. Australian consumers are becoming more environmentally conscious, with many preferring products that reduce water use and waste, particularly in everyday activities like car washing.\n\nA major advantage of following these trends is increased relevance and long-term appeal. Products that align with current expectations are more likely to be adopted and recommended by users. However, a challenge associated with trends is that they can change quickly. Designing too heavily around short-term trends risks the product becoming outdated, which could reduce its lifespan and perceived value.\n\nIf trends are not considered, the product may appear outdated, bulky, or unnecessary, especially to younger users who are highly influenced by modern design and social media exposure. Trends will be evaluated by comparing the design against current car-care products on the market. The minimum standard for success is that the kit reflects modern design values such as simplicity, multifunctionality, and environmental awareness, while remaining practical and relevant over time.' },
        { h: 'Legislation', text: 'Legislation in the context of this project refers to the laws, regulations, and standards that govern the design, manufacture, and use of consumer products in Australia. For this car-cleaning kit, legislation is a critical criterion because the product involves water use, physical handling, and potential interaction with chemicals such as detergents. Ensuring the design complies with relevant legislation is essential for user safety, legal sale, and public acceptance of the product.\n\nThe goal of this criterion is to design the product so that it meets all relevant Australian consumer and safety laws, particularly those relating to product safety and work health and safety. Under the Australian Consumer Law (ACL), products sold to consumers must be safe, fit for purpose, and not pose foreseeable risks when used as intended. This means the car-cleaning kit must not include sharp edges, unsafe materials, or components that could reasonably cause injury during normal use. Compliance with legislation helps ensure the product can be legally distributed and trusted by consumers.\n\nOne advantage of meeting legislative requirements is increased credibility and reduced risk of product failure or recall. The ACCC explains that unsafe consumer products can be banned, recalled, or subject to legal penalties. Designing with legislation in mind from the start reduces these risks. However, a challenge associated with legislative compliance is that regulations can limit certain design choices.\n\nIf legislative requirements are not met, the consequences are significant. The product could be deemed unsafe or illegal to sell, resulting in recalls, fines, or liability issues. Legislative compliance will be evaluated by cross-checking the design against the Australian Consumer Law and relevant Work Health and Safety guidelines provided by Safe Work Australia. The minimum standard for success is that the product complies with Australian Consumer Law requirements, contains no prohibited features, and can be used safely for its intended purpose without breaching any relevant legislation.' },
        { h: 'Safety', text: 'Safety in the context of this project refers to the product\'s ability to be used without causing harm to the user, bystanders, or property when operated as intended. Because the car-cleaning kit involves water flow, hand-held components, and physical movement around a vehicle, safety is a critical criterion. For teenage and young drivers, many of whom have limited experience with tools, the product must be intuitive and minimise foreseeable risks such as slipping, strain, impact injuries, or accidental misuse.\n\nThe goal of this criterion is to ensure that the design reduces hazards through thoughtful design choices rather than relying solely on user caution. Safe Work Australia emphasises that effective safety design focuses on eliminating or minimising risks at the design stage, especially for hand-held equipment and tasks involving water, where slips and loss of control are common hazards. For this project, safety considerations include secure grip areas, smooth edges, stable hose connections, and controlled water and air output to prevent sudden movement or loss of control during use.\n\nOne major benefit of prioritising safety is increased user confidence and willingness to use the product regularly. Products that feel safe and predictable are more likely to be adopted by younger users. Consumer safety guidance from Product Safety Australia notes that injuries often occur due to poor grip, exposed edges, or unclear operation. However, adding protective features such as guards or reinforced components can increase weight, size, or cost, which must be balanced against portability and compactness.\n\nIf safety is not adequately addressed, the consequences could be serious. Safety will be evaluated through a risk assessment identifying potential hazards and testing the product in controlled conditions. The minimum standard for success is that the kit contains no sharp edges, maintains a secure grip when wet, operates predictably, and can be used without causing injury under normal conditions.' }
      ],
      highlights: [
        { h: 'Colour Success Standard', text: 'Functional components must be clearly visible, the product maintains a clean appearance after repeated use, and users report that the colour scheme looks appropriate and easy to understand. Safe Work Australia: high-contrast colours improve visibility and reduce risk when operating equipment.' },
        { h: 'Safety Success Standard', text: 'The kit must contain no sharp edges, maintain a secure grip when wet, operate predictably, and be used without injury under normal conditions. Products that feel safe and predictable are more likely to be adopted by younger, inexperienced users (Product Safety Australia).' }
      ]
    }
  },

  /* 8 — Criteria: Environmental Impact · Materials */ {
    t: 'criteria',
    data: {
      cols: [
        { h: 'Criteria Summary', text: 'The criteria identified across this section — Portability, Weight, Compactness, Shape, Colour, Trends, Legislation, Safety, Environmental Impact, and Materials — collectively define what a successful car-cleaning kit looks like for teenage P-plate drivers. Each criterion has been researched through a combination of primary interviews, surveys of P-plate drivers, and secondary sources including Safe Work Australia, the Australian Car Wash Association, and Product Safety Australia. Each criterion has been evaluated for its importance, advantages, challenges, and minimum standard for success, ensuring my final design can be objectively assessed against real-world expectations and user needs.' },
        { h: 'Environmental Impact', text: 'Environmental impact in the context of this project refers to how the car-cleaning kit affects water use, chemical runoff, and overall environmental sustainability during its use. Car washing is a common household activity that can have significant environmental consequences, particularly when done at home without proper controls. Because this product is designed to be used regularly by young drivers, reducing its environmental footprint is a key criterion for success and directly links to the identified need for a more sustainable cleaning solution.\n\nThe goal of this criterion is to minimise water consumption and reduce the release of harmful detergents, oils, and pollutants into stormwater systems. Research by the Australian Car Wash Association explains that a typical home car wash can use over 100 litres of water and produce polluted runoff that flows directly into local waterways, where it can harm aquatic ecosystems. This highlights the environmental inefficiency of traditional home washing methods and supports the need for a controlled hose-attached system that limits water flow and chemical use. By encouraging more precise water delivery and soap mixing, the design aims to reduce waste while still achieving effective cleaning.\n\nOne major advantage of improving environmental impact is the promotion of responsible water use. Water360 reports that even commercial car washes, which are more regulated, can still use between 40 and 200 litres of water per vehicle depending on their equipment. However, a challenge associated with reducing environmental impact is ensuring that lower water use does not reduce cleaning performance. If environmental impact is not adequately addressed, the product risks contributing to the same issues it aims to solve. The minimum standard for success is that the kit uses noticeably less water than a typical home wash and limits excess detergent runoff, while still effectively cleaning the vehicle.' },
        { h: 'Materials', text: 'Materials in the context of this project refer to the substances used to construct the car-cleaning kit, including plastics, rubbers, metals, and textiles that form the body, hose connections, seals, and attachments. Material choice directly affects durability, safety, weight, cost, and environmental impact. Because the product is exposed to water, pressure, detergents, and outdoor conditions, selecting appropriate materials is essential to ensure the kit performs reliably over time without degrading or becoming unsafe.\n\nThe goal of this criterion is to use materials that are strong, water-resistant, and suitable for repeated use, while remaining lightweight and affordable for the target market. According to the Australian Government\'s Product Safety Australia, materials used in consumer products must be durable and safe under normal conditions of use, especially when exposed to moisture and physical handling. For this project, materials such as durable plastics and rubber seals are appropriate because they resist corrosion, do not rust, and can withstand regular exposure to water and cleaning chemicals.\n\nOne major advantage of selecting appropriate materials is increased product lifespan. Durable materials reduce the likelihood of cracking, leaking, or failure. Research from CSIRO highlights that well-chosen polymers are commonly used in water-based consumer products because they offer a balance of strength, low weight, and resistance to moisture. However, a challenge is balancing durability with sustainability — some strong plastics are difficult to recycle. If unsuitable materials are used, the product may degrade quickly, leak, or fail under pressure. The minimum standard for success is that all materials resist water damage, maintain structural integrity during repeated use, and do not degrade or fail when exposed to detergents and outdoor conditions.' },
        { h: '', text: '' }
      ],
      highlights: [
        { h: 'Environmental Impact Criterion', text: 'The kit must use noticeably less water than a typical home wash and limit excess detergent runoff, while still effectively cleaning the vehicle. ACWA: a single home wash can use over 100 litres of water and produce polluted runoff that flows directly into local waterways.' },
        { h: 'Materials Criterion', text: 'All materials must resist water damage, maintain structural integrity during repeated use, and not degrade when exposed to detergents and outdoor conditions. CSIRO: well-chosen polymers offer a balance of strength, low weight, and resistance to moisture.' }
      ]
    }
  },

  /* 9 */ {
    t: 'action',
    title: 'Finance Plan',
    data: {
      financeTable: {
        cols: ['Material / Item', 'Projected Cost', 'Amount Required', 'Justification / Use', 'Actual Cost', 'Supplier'],
        rows: [
          ['Plywood', '$8 / sheet', '2 sheets\n(2.4m × 1.5m)', 'Prototype + final product', '$6 / sheet', '—'],
          ['3D Print Filament', '$32 / roll\n($192 total)', '6 rolls', 'Prototype + final product', '$22.99 / roll\n($137.94 total)', 'Elegoo'],
          ['Waffle Weave Towel', '$20', '1 towel', 'Prototype + final product', '$17.99', 'Amazon'],
          ['Microfibre Towel (hand)', '$23', '1 towel', 'Prototype + final product', '$7.66', 'Amazon'],
          ['Cotton Towel', '$0', '1 towel', 'Prototype + final product', '$0', 'Home'],
          ['Thread', '$0', '2 × rolls', 'Prototype + final product', '$0', 'Moriah College\nD&T Dept'],
          ['Sewing Machine', '$0', '1 machine', 'Prototype + final product', '$0', 'Moriah College\nD&T Dept'],
          ['Liquid Soap', '$7.50', '1 bottle', 'Final product', '$5.00', 'Coles'],
          ['Foam Casing', '$23', '1 roll', 'Prototype + final product', '$14.69', 'Amazon'],
          ['Zipper', '$12', '1 × zipper', 'Prototype + final product', '$2.60', 'Spotlight'],
          ['Cardboard', '$0', '5 × sheets', 'Prototype + final product', '$0', 'Moriah College\nD&T Dept']
        ],
        projectedTotal: 'Total Projected:\n$293.50',
        actualTotal: 'Total Actual:\n$197.89'
      }
    }
  },

  /* 10 */ {
    t: 'existing',
    data: {
      items: [
        {
          design: 'Armor All 2-in-1 Foam Cannon',
          label: 'Armor All Foam Cannon',
          points: 'Advantages:\n• Attaches directly to a standard garden hose, supporting portability and ease of access\n• Lightweight build makes the product easy to handle, addressing weight\n• Compact form allows simple storage, meeting compactness requirements\n• Even foam distribution improves cleaning efficiency and reduces aggressive scrubbing, supporting safety\n\nNegatives:\n• Lack of adjustable components reduces user control and limits adaptability to different cleaning needs\n• Reduced cleaning performance when used with a standard garden hose\n• No control over water flow or detergent mixing, negatively affecting environmental impact\n• Plastic construction may reduce long-term durability under the materials criterion\n\nImprovements:\n• Redesign the product as a modular system with interchangeable attachments to improve versatility and align with current trends\n• Refine the overall shape and grip areas to improve ergonomics, balance and user control, strengthening safety and ease of handling\n• Introduce adjustable water-flow and soap-mixing controls to reduce waste and improve environmental impact',
          learnt: 'From analysing the Armor All 2-in-1 Foam Cannon, I learnt that accessibility, portability, and ease of setup are essential in encouraging regular car cleaning, particularly for time-poor younger drivers. The ability to attach directly to a standard garden hose removes the need for expensive or bulky equipment such as pressure washers, making the product more affordable and practical. This directly informed my design decision to prioritise portability, compactness, and lightweight construction, ensuring my product aligns with the needs identified in my project and suits users with limited storage space and time.\n\nThe foam cannon also demonstrated how controlled soap distribution can improve cleaning efficiency. Even foam application allows dirt to loosen before rinsing, reducing physical effort and the need for aggressive scrubbing. This highlighted how effective design can improve safety by limiting paint damage and reducing user strain. As a result, I incorporated a soap-mixing mechanism into my own design to improve cleaning effectiveness while also reducing excessive detergent use, supporting a lower environmental impact.\n\nEqually important were the limitations of the existing design. The Foam Cannon focuses only on exterior cleaning and lacks adaptability, which does not align with current trends toward multifunctional and flexible product systems. This reinforced the need for a more comprehensive solution that better suits modern lifestyles. It also influenced my consideration of shape and materials, ensuring my design is intuitive to use, durable, and capable of withstanding repeated use. The lack of user control over water and detergent further highlighted the importance of designing with sustainability and environmental responsibility in mind.'
        },
        {
          design: 'Xiaomi Mi Portable Air Duster',
          label: 'Xiaomi Mi Air Duster',
          points: 'Advantages:\n• Compact, handheld size strongly supports portability and compactness, making the product easy to store and suitable for users with limited space\n• Lightweight build improves ease of handling and reduces user fatigue, directly addressing the weight criterion\n• Designed specifically to blow air rather than vacuum or inflate, improving dust removal from vents and tight spaces and supporting functional performance\n• Rechargeable lithium power removes the need for disposable compressed-air cans, positively supporting environmental impact and sustainability\n\nNegatives:\n• Limited airflow output restricts effectiveness to light dust only, reducing overall functionality for full car interior cleaning\n• Short battery runtime limits extended use, affecting practicality and user convenience\n• Limited nozzle variety reduces adaptability to different interior surfaces, conflicting with trends toward modular and flexible products\n• Not designed specifically for automotive environments, which may impact durability and long-term performance under the materials criterion\n\nImprovements:\n• Increase airflow output while maintaining a compact form to improve functional performance without compromising portability\n• Develop interchangeable nozzle attachments to improve adaptability and align with current design trends\n• Use more durable, automotive-grade materials to improve longevity, safety, and resistance to heat and wear',
          learnt: 'From analysing the Xiaomi Mi Portable Air Duster, I learnt that compactness and airflow-focused design are critical for effective interior dust removal. The product demonstrates that small, lightweight devices can successfully remove light dust when airflow is prioritised over pressure or suction. This directly informed my design decision to aim for a compact, portable solution that remains easy to store and handle, aligning with my portability, weight, and compactness criteria and the needs identified in my project.\n\nThe air duster also highlighted the environmental advantages of dry interior cleaning. By removing dust without water or chemicals, the product reduces water consumption and eliminates chemical runoff. This reinforced the importance of addressing environmental impact in my own design, particularly when targeting younger drivers who may clean their cars at home.\n\nHowever, the limitations of the Xiaomi air duster were equally influential. Its lower airflow output and limited battery life restrict effectiveness for longer cleaning sessions, highlighting the need to balance power, safety, and battery efficiency within a compact form. Additionally, the lack of automotive-specific durability emphasised the importance of selecting suitable materials that can withstand repeated use in a vehicle environment. Overall, this analysis allowed me to critically evaluate an existing idea rather than simply describe it.'
        }
      ]
    }
  },

  /* 11 */ {
    t: 'existing',
    data: {
      items: [
        {
          design: "Meguiar's Dual-Pile Microfibre Towel",
          label: "Meguiar's Microfibre Towel",
          points: "Advantages:\n• Dual-pile build allows one side to absorb water efficiently for drying paint, while the tighter weave side cleans glass and mirrors with minimal streaking, supporting function and safety\n• Soft microfibre fibres reduce the risk of scratching paint and glass, directly addressing the safety criterion\n• Reusable and machine-washable material reduces reliance on disposable wipes or paper towels, supporting environmental impact\n• Flexible, lightweight form makes the towel easy to store within a compact car-cleaning kit, supporting portability and compactness\n\nNegatives:\n• Requires correct use of each side to avoid streaking or reduced performance, which may impact user consistency\n• Can trap dirt within fibres if not cleaned properly, potentially affecting paint safety over time\n• Effectiveness decreases once the towel becomes saturated, requiring wringing or multiple towels for larger vehicles\n• Microfibre performance can degrade over time with improper washing, affecting durability under the materials criterion\n\nImprovements:\n• Add a small stitched label or colour indicator to clearly identify drying and glass-cleaning sides, improving ease of use and safety\n• Increase towel size slightly while maintaining flexibility to improve drying efficiency on larger panels without reducing compact storage, supporting functionality and compactness\n• Optimise fibre density to balance high absorbency with faster drying between uses, improving functionality",
          learnt: "From analysing the Meguiar's dual-pile microfibre towel, I learnt that material structure and fibre density play a major role in achieving effective, safe, and streak-free car cleaning. The dual-pile design demonstrates how varying fibre length within a single product allows it to perform multiple tasks, such as drying painted surfaces and cleaning windows, without needing separate tools. This directly aligns with current trends toward multifunctional, space-efficient products.\n\nThe towel also highlights the importance of safety through material choice. Soft microfibre fibres lift dirt away from surfaces rather than dragging it across paint or glass, reducing the likelihood of scratches. This reinforced my decision to prioritise non-abrasive materials in my own design to protect vehicle surfaces while maintaining cleaning efficiency.\n\nIn addition, the towel's reusability emphasised the environmental benefits of replacing disposable cleaning products with durable alternatives. By reducing waste and eliminating the need for chemical-based wipes, the towel supports a lower environmental impact, which aligns with concerns identified in my project about sustainability and responsible car care. However, the limitations of the towel also informed my design thinking — the need for proper maintenance and the reduction in effectiveness when saturated highlighted the importance of designing a system that works efficiently with minimal effort."
        },
        {
          design: "Meguiar's Plastic Razor Blade Scraper",
          label: "Meguiar's Plastic Scraper",
          points: "Advantages:\n• Plastic/nylon razor blade removes dried bugs, sap, and adhesive residue effectively while minimising scratch risk, strongly supporting safety\n• Automotive-specific design makes it suitable for use on paint, glass, and trims, improving functionality\n• Compact and lightweight form supports portability, weight, and compactness, making it ideal for inclusion in a small car-cleaning kit\n• Reusable blade system reduces reliance on disposable chemical cleaners, positively supporting environmental impact\n\nNegatives:\n• Requires careful technique and correct angle of use, which may affect consistency for inexperienced users\n• Limited effectiveness on soft or smeared contamination, where wiping or washing may still be required\n• Plastic blades can wear down over time, affecting durability under the materials criterion\n• Single-purpose design limits alignment with trends toward multifunctional tools\n\nImprovements:\n• Integrate a contoured, non-slip grip to improve control and reduce user error, strengthening ergonomics and safety\n• Introduce replaceable blades made from tougher, flexible polymers to improve durability under the materials criterion\n• Add a protective edge guard or rounded leading edge to further minimise scratch risk on delicate surfaces",
          learnt: "From analysing the Meguiar's Plastic Razor Blade Scraper, I learnt that material choice is critical in balancing effectiveness with safety. The use of plastic rather than metal allows stubborn debris to be removed without significantly increasing the risk of scratching paint or glass. This directly informed my decision to prioritise non-abrasive materials in my own scraper design to protect vehicle surfaces while still allowing effective cleaning.\n\nThe scraper also demonstrated the value of simplicity and control. Its small size and direct contact method allow targeted cleaning in areas where air blowers or towels are ineffective. This reinforced the importance of including a specialised tool within my kit to address specific problems rather than relying on a single cleaning method for all tasks.\n\nHowever, the limitations of the existing design highlighted opportunities for improvement. The need for careful handling and the wear of plastic blades over time emphasised the importance of ergonomic design and material durability. This influenced my approach to improving grip design and selecting more durable polymers to extend product life. Additionally, the scraper's single-purpose nature reinforced my aim to integrate it as part of a multifunctional system, aligning with current design trends. Overall, this existing design helped confirm that a non-scratch scraper is an essential component of effective car cleaning."
        }
      ]
    }
  },

  { t: 'sketches' }, { t: 'sketches' }, { t: 'sketches' },
  { t: 'creativity' }, { t: 'creativity' }, { t: 'creativity' },
  { t: 'consideration' }, { t: 'consideration' },
  { t: 'testing' }, { t: 'testing' }, { t: 'testing' }, { t: 'testing' },
  { t: 'justification' },
  { t: 'practical' }, { t: 'practical' }, { t: 'practical' }, { t: 'practical' }, { t: 'practical' }, { t: 'practical' },
  { t: 'creativity' },
  { t: 'testing' }, { t: 'testing' },
  { t: 'sketches' },
  { t: 'consideration' },
  { t: 'evaluation' }, { t: 'evaluation' },
  { t: 'impact' }, { t: 'impact' },
  { t: 'final' }, { t: 'final' }
];

function renderPage(entry, i) {
  const fn = PAGE_TYPES[entry.t];
  if (!fn) return null;
  const extra = Object.assign({}, entry);
  delete extra.t;
  delete extra.data;
  return fn(_extends({ badge: true, seed: (i * 7 + 3) % 90, data: entry.data || {} }, extra));
}

Object.assign(window, {
  EasyCleanPages: {
    PAGE_TYPES, PLAN, renderPage,
    CoverPage, StandardDensePage, InvestigationPage, InterviewsPage,
    ActionFinancePage, ExistingDesignsPage, SketchesPage, BlankCanvasPage, JustificationPage
  }
});
})();
