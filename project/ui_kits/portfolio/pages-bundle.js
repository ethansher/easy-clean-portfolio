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
  { t: 'cover' },
  { t: 'need' }, { t: 'need' },
  { t: 'investigation' },
  { t: 'interviews' },
  { t: 'criteria', data: { pie: {} } }, { t: 'criteria' },
  { t: 'action' },
  { t: 'existing' }, { t: 'existing' },
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
  return fn ? fn({ badge: true, seed: (i * 7 + 3) % 90, data: entry.data || {} }) : null;
}

Object.assign(window, {
  EasyCleanPages: {
    PAGE_TYPES, PLAN, renderPage,
    CoverPage, StandardDensePage, InvestigationPage, InterviewsPage,
    ActionFinancePage, ExistingDesignsPage, SketchesPage, BlankCanvasPage, JustificationPage
  }
});
})();
