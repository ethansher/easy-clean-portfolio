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
  }, "Student Number \xB7 34933249")), /*#__PURE__*/React.createElement("div", {
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

/* ---------- the 40-page plan ---------- */
const PLAN = [
  /* 1 */ { t: 'cover' },

  /* 2 */ {
    t: 'need',
    data: {
      cols: [
        { h: 'Background', text: 'Car cleaning affects safety, lifespan, and appearance. ACWA reports a typical home wash uses over 100L of water and generates ~750mL of oily sludge per wash. Most people use sponges, buckets, and hoses — methods that are expensive and damaging to the environment. Professional washes cost $15–$100+, beyond reach for most teenagers.' },
        { h: 'Environmental Impact', text: 'Clearwater Victoria confirms driveway runoff flows directly into local waterways. ACWA (2023): a single home wash releases ~750mL of oil and uses over 100L of water. Both home and commercial washing in Australia carry high water demand and significant environmental impact, making traditional methods inefficient and unsustainable for a drought-prone country.' },
        { h: 'Safety & Maintenance', text: 'Grime on windows, mirrors, and headlights reduces visibility and increases glare, especially at night (Canstar Blue). Bird droppings, sap, and dirt damage paint over time, leading to costly repairs and lower resale value. Regular cleaning protects paintwork, prevents rust, and keeps the vehicle in better condition for longer.' },
        { h: 'Time & Cost', text: 'A car wash takes 30–90 minutes (Star Car Wash). Buying separate soaps, brushes, and towels accumulates significant cost over time. Budget Direct estimates car-washing expenses at ~$780/year for an average Australian household — unrealistic for most teenagers working part-time or not at all.' }
      ],
      highlights: [
        { h: 'ACWA Research', text: 'A typical home wash uses over 100 litres of water and generates ~750 mL of oily, polluted sludge per wash. Driveway runoff flows directly into local waterways, harming aquatic ecosystems (ACWA, 2023).' },
        { h: 'Comfort & Hygiene', text: 'Doron, 17: "Having a clean and tidy car helps me feel more relaxed and comfortable while driving." A clean interior supports driver focus, mental clarity, and pride in the vehicle.' }
      ]
    }
  },

  /* 3 */ {
    t: 'need',
    data: {
      cols: [
        { h: 'Project Description', text: 'A multifunctional kit connecting to any standard garden hose. Four components:\n1. Soap-blending attachment — mixes detergent into foam for even, low-waste cleaning.\n2. Handheld air blower — removes dust from vents and interior crevices.\n3. Non-scratch scraper — safely removes dried mud, insects, and grime.\n4. Microfibre towel — streak-free finish for all surfaces.' },
        { h: 'Motivation', text: 'As a younger driver with limited time, my car often ends up dirty. Balancing school, sport, work, and tutors made regular maintenance difficult. Many peers faced the same problem. That personal experience pushed me to create something practical — a kit that makes washing your car quick, affordable, and more enjoyable so it no longer feels like a chore.' },
        { h: 'Target Market', text: 'Primarily teenagers and young adults with their first car. They have limited time, storage, and money; many work part-time, making professional car cleaning impractical. AIFS found ~86% of young Australians have a probationary licence by age 19–20. Gabriel Vargas (Meguiar\'s): "Many individuals don\'t have the space or facility to keep their vehicle clean."' },
        { h: 'Purpose', text: 'To create a solution that saves time, lowers costs, and reduces water and chemical waste. Budget Direct estimates ~$780/year in car-washing costs — unrealistic for teenagers. My kit combines foam attachment, air compressor, scraper, and microfibre towel into one affordable, reusable set, replacing multiple separate products and reducing both cost and environmental impact.' }
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
          quote: '"There are many individuals who are passionate about their vehicles and would like to keep them clean and maintained, but unfortunately don\'t have the space or facility to do so. This tends to result in a vehicle that is not washed as frequently as intended."'
        },
        {
          name: 'Doron Evian · P-plate Driver, Age 17',
          quote: '"As I\'m still in school, it\'s hard to keep my car clean. Between tutoring, sport, and homework, I barely have any time, and when I do, I just want to hang out with friends instead of spending over an hour washing my car."'
        },
        {
          name: 'Survey · 30 P-plate Drivers',
          quote: '"Having a portable way to wash the car was imperative as cars are often located outside a person\'s house and therefore need an easy way to bring all the necessary products." — 65% stated equipment was too heavy as a key barrier to washing.'
        }
      ],
      intro: 'The Criteria to evaluate success is essential as it allows me to consider the functional, aesthetic, and ergonomic factors that impact my project. I interviewed car owners and surveyed P-plate drivers to better understand the design factors required.',
      criteria: {
        h: 'Portability',
        left: 'Portability refers to how easily the car-cleaning kit can be transported, handled, and stored. For teenage and young drivers with limited storage space, portability is a critical factor. A portable product increases the likelihood of regular use, supporting the project\'s goal of making car cleaning more convenient and accessible.',
        right: 'The entire kit must be easily carried by one person without strain and stored in a car boot, cupboard, or garage shelf. The Design Society\'s research on portability heuristics explains that products for frequent use should minimise physical effort to improve user adoption. This directly aligns with the needs of younger drivers who avoid bulky equipment like pressure washers.'
      }
    }
  },

  /* 6 */ {
    t: 'criteria',
    data: {
      pie: { a: 65, labelA: 'Equipment too heavy', labelB: 'Other barriers', title: 'Barriers to car cleaning (survey, n=30)' },
      cols: [
        { h: 'Introduction', text: 'Criteria to evaluate success allows me to consider the functional, aesthetic, and ergonomic factors of my project. I researched different aspects and interviewed car owners to understand the design factors required for a successful product.' },
        { h: 'Weight', text: 'Weight refers to the total mass of the kit when fully assembled. In a survey of 30 people, 65% identified "equipment too heavy and bulky" as a key barrier to car washing. The kit must be light enough to lift, carry, and operate without fatigue. Safe Work Australia highlights that heavy handheld equipment increases muscle fatigue and musculoskeletal strain.' },
        { h: 'Compactness', text: 'Compactness refers to how efficiently the kit uses space while housing all components. Many teenage drivers live in apartments or share garages. The kit must fit in a car boot without disassembly. Design research shows compactness improves convenience and user adoption for products intended for regular use, particularly when space is limited.' },
        { h: 'Shape', text: 'Shape refers to the overall form and geometry of the kit, including body, handles, and component arrangement. Shape influences how the product is held, balanced, and stored. A well-considered shape supports both function and ease of use. Rounded edges and clear grip areas make the kit easier to direct around windows, panels, and interior surfaces.' }
      ],
      highlights: [
        { h: 'Survey Finding', text: '65% of 30 P-plate drivers surveyed stated that equipment being too heavy and bulky to carry was a key barrier to washing their car more regularly.' },
        { h: 'Weight Success Criterion', text: 'The fully assembled kit must be carried with one hand and used continuously for at least 10–15 minutes without reported fatigue or discomfort.' }
      ]
    }
  },

  /* 7 */ {
    t: 'criteria',
    data: {
      cols: [
        { h: 'Colour', text: 'Colour influences how users perceive the product and identify functional parts. Safe Work Australia highlights that high-contrast colours improve visibility and reduce risk when operating equipment. Neutral tones (grey, black, navy) communicate durability in tools, while accent colours draw attention to key features such as controls, nozzles, and grip areas.' },
        { h: 'Trends', text: 'The design should reflect contemporary trends in simplicity, multifunctionality, and sustainability. McKinsey & Company confirms convenience and efficiency are key drivers for younger consumers. Australian consumers increasingly prefer products that reduce water use and waste. The kit must align with minimalist aesthetic values and demonstrate environmental awareness to remain relevant.' },
        { h: 'Legislation', text: 'Under Australian Consumer Law, products must be safe and fit for purpose. AS/NZS 60335 electrical safety standards apply to the air duster component. The ACCC requires consumer products to minimise foreseeable risks. Designing with legislation from the start reduces the risk of recall, legal issues, or product failure.' },
        { h: 'Safety', text: 'The kit involves water flow, handheld components, and physical movement. Safe Work Australia emphasises that safety design should eliminate risks at the design stage. Secure grip areas, smooth edges, stable hose connections, and controlled output prevent slipping and loss of control. Products that feel safe and predictable are more likely to be adopted by younger, inexperienced users.' }
      ],
      highlights: [
        { h: 'Environmental Impact', text: 'The kit must use noticeably less water than a typical home wash and limit excess detergent runoff, while still effectively cleaning the vehicle. Water360 reports commercial washes use 40–200L per vehicle; controlled hose attachment minimises waste.' },
        { h: 'Materials', text: 'All materials must resist water damage, maintain structural integrity during repeated use, and not degrade when exposed to detergents and outdoor conditions. CSIRO: well-chosen polymers balance strength, low weight, and moisture resistance.' }
      ]
    }
  },

  /* 8 */ {
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

  /* 9 */ {
    t: 'existing',
    data: {
      items: [
        {
          design: 'Armor All 2-in-1 Foam Cannon',
          label: 'Armor All Foam Cannon',
          points: 'Advantages: Attaches directly to a standard garden hose; lightweight build; compact for easy storage; even foam distribution reduces scrubbing and supports safety.\n\nNegatives: No adjustable components; reduced performance with standard hose; no water-flow or detergent-mixing control; plastic construction may reduce long-term durability.',
          learnt: 'From the Armor All Foam Cannon I learnt that accessibility and ease of hose-based setup are essential for encouraging regular car cleaning by time-poor younger drivers. Even foam application improves cleaning efficiency and reduces paint damage risk. Key limitations — no adaptability, no water control, exterior-only focus — informed my decision to design a comprehensive kit with adjustable settings and multifunctional components.'
        },
        {
          design: 'Xiaomi Mi Portable Air Duster',
          label: 'Xiaomi Mi Air Duster',
          points: 'Advantages: Compact, handheld size; lightweight, reduces fatigue; rechargeable — eliminates disposable cans; effective for light dust removal from vents and tight spaces.\n\nNegatives: Limited airflow for full car interior cleaning; short battery runtime; limited nozzle variety; not designed for automotive environments, reducing long-term durability.',
          learnt: 'From the Xiaomi Air Duster I learnt that compactness and airflow-focused design are critical for effective interior dust removal. Dry cleaning without water eliminates chemical runoff, reinforcing my environmental criterion. Limitations — lower output, short battery, no automotive durability — highlighted the need to balance power, safety, and compactness, directly informing my decision to develop a more robust automotive-grade air blower component.'
        }
      ]
    }
  },

  /* 10 */ {
    t: 'existing',
    data: {
      items: [
        {
          design: "Meguiar's Dual-Pile Microfibre Towel",
          label: "Meguiar's Microfibre Towel",
          points: "Advantages: Dual-pile build — one side absorbs water, tighter weave cleans glass with minimal streaking; soft fibres reduce scratch risk; reusable and machine-washable; lightweight and compact.\n\nNegatives: Requires correct use of each side; can trap dirt if not cleaned properly; effectiveness decreases when saturated; performance can degrade with improper washing.",
          learnt: "From the Meguiar's Dual-Pile Microfibre Towel I learnt that material structure and fibre density are critical for safe, streak-free cleaning. Its dual-pile design shows how varying fibre length allows multi-task performance without separate tools, aligning with current trends toward multifunctional products. Reusability reinforces environmental responsibility. Limitations around maintenance and saturation highlighted the importance of designing a system that works efficiently with minimal user effort."
        },
        {
          design: "Meguiar's Plastic Razor Blade Scraper",
          label: "Meguiar's Plastic Scraper",
          points: "Advantages: Plastic/nylon blade removes dried bugs, sap, and adhesive while minimising scratch risk; automotive-specific design for paint, glass, and trims; compact and lightweight.\n\nNegatives: Requires careful technique and correct angle; limited effectiveness on soft contamination; blades wear down over time; single-purpose design limits multifunctionality.",
          learnt: "From the Meguiar's Plastic Razor Blade Scraper I learnt that material choice is critical in balancing effectiveness with safety. Plastic over metal removes stubborn debris without increasing scratch risk — directly informing my scraper design. Limitations — wear over time, single purpose — influenced my decision to use more durable polymers and integrate the scraper as part of a multifunctional system that aligns with current design trends."
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
