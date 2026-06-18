/* Easy Clean — DNT Major Work Portfolio
   All page-type layouts recreated from the source template, composed from the
   design-system components. Placeholder body copy renders as grey bars (the
   template's "empty" look); pass real `data` per page to fill it in.
   Exported to window for index.html (viewer) and portfolio.html (print). */
const DNT = window.DNTPortfolioDesignSystem_899972;
const { PortfolioPage, SectionTitle, HighlightBox } = DNT;

const INK = 'var(--ink-900)';
const A3 = { width: 1480, height: 1046 };

/* ---------- shared bits ---------- */
const WSET = ['96%','100%','90%','100%','84%','98%','100%','78%','94%','100%','88%','100%','72%','96%'];
function Lines({ n = 7, start = 0, gap = 7, h = 9 }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap, marginTop: 6 }}>
      {Array.from({ length: n }).map((_, i) => (
        <div key={i} style={{ height: h, borderRadius: 2, background: 'var(--slate-400)', width: WSET[(i + start) % WSET.length] }}></div>
      ))}
    </div>
  );
}
function Body({ text, lines = 7, start = 0, color = INK }) {
  if (text) return <p style={{ margin: '6px 0 0', fontSize: 15, lineHeight: 1.5, color }}>{text}</p>;
  return <Lines n={lines} start={start} />;
}
function ColHeading({ children, style = {} }) {
  return (
    <div style={{
      fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14,
      letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--cyan-500)', ...style,
    }}>{children || 'Heading'}</div>
  );
}
function ImageSlot({ label = 'Design', style = {} }) {
  return (
    <div style={{
      borderRadius: 'var(--radius-xl)', background: 'var(--surface-highlight)',
      display: 'grid', placeItems: 'center', color: 'rgba(255,255,255,.9)',
      fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 12,
      textTransform: 'uppercase', letterSpacing: '.1em', textAlign: 'center',
      padding: 10, boxSizing: 'border-box', minHeight: 0, ...style,
    }}>{label}</div>
  );
}
function QuoteBox({ text, style = {} }) {
  return (
    <div style={{
      background: 'var(--paper)', borderRadius: '40px / 30px', boxShadow: 'var(--shadow-card)',
      padding: '16px 22px', color: INK, fontSize: 15, lineHeight: 1.4,
      display: 'flex', alignItems: 'center', minHeight: 0, ...style,
    }}>{text || <Lines n={3} />}</div>
  );
}
function Pie({ a = 72, labelA = 'Lacks time', labelB = 'Other', title = 'Barriers to washing cars', style = {} }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, ...style }}>
      <div style={{ fontSize: 11, fontWeight: 700, color: INK }}>{title}</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{ width: 96, height: 96, borderRadius: '50%', flex: 'none',
          background: `conic-gradient(var(--orange-400) 0 ${a}%, var(--cyan-400) ${a}% 100%)` }}></div>
        <div style={{ fontSize: 12, lineHeight: 1.6 }}>
          <div><span style={{ color: 'var(--orange-400)', fontWeight: 800 }}>{a}%</span> {labelA}</div>
          <div><span style={{ color: 'var(--cyan-500)', fontWeight: 800 }}>{100 - a}%</span> {labelB}</div>
        </div>
      </div>
    </div>
  );
}

/* ============ COVER ============ */
function CoverPage({ badge }) {
  return (
    <PortfolioPage {...A3} fieldColor="var(--paper)" paper={false} title={null} seed={3}
      contentStyle={{ padding: 60, justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <DNT.Pill variant="cyan">Student Number · 30418772</DNT.Pill>
      </div>
      <div style={{ textAlign: 'center' }}>
        <img src="../../assets/logo.svg" alt="Easy Clean" style={{ width: 460, marginBottom: 26 }} />
        <h1 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase',
          letterSpacing: '0.02em', fontSize: 58, color: INK, lineHeight: 1.03 }}>Major Design Project</h1>
        <p style={{ margin: '18px auto 0', maxWidth: 760, fontSize: 21, color: 'var(--ink-700)', lineHeight: 1.5 }}>
          A compact, affordable, water-smart car-cleaning kit designed for teenage P-plate drivers and their first car.</p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 12 }}>
        <DNT.Pill variant="blue">Design &amp; Technology</DNT.Pill>
        <DNT.Pill variant="orange">Major Work Portfolio</DNT.Pill>
      </div>
    </PortfolioPage>
  );
}

/* ============ STANDARD DENSE PAGE (text on blue) ============ */
function StandardDensePage({ title, badge, seed, data = {} }) {
  const cols = data.cols || [{}, {}, {}, {}];
  const highlights = data.highlights || [{}, {}];
  const bottom = data.bottom || [{}, {}, {}];
  return (
    <PortfolioPage {...A3} title={title} badge={badge} seed={seed}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 3fr', gap: 20, flex: 1, minHeight: 0 }}>
        {/* left tall column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, minHeight: 0 }}>
          <ColHeading>{cols[0].h}</ColHeading>
          <Body text={cols[0].text} lines={16} />
          <div style={{ flex: 1 }}></div>
          {data.pie ? <Pie {...data.pie} /> : <ImageSlot label={data.smallLabel || 'Image'} style={{ height: 150 }} />}
        </div>
        {/* right area */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, minHeight: 0 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 18 }}>
            {[1, 2, 3].map(i => (
              <div key={i}><ColHeading>{cols[i] && cols[i].h}</ColHeading><Body text={cols[i] && cols[i].text} lines={8} start={i * 2} /></div>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 18, flex: 1, minHeight: 0 }}>
            {highlights.map((hl, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 6, minHeight: 0 }}>
                <ColHeading>{hl.h}</ColHeading>
                <HighlightBox style={{ flex: 1 }}>{hl.text || ''}</HighlightBox>
              </div>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 18 }}>
            {bottom.map((b, i) => (<div key={i}><Body text={b.text} lines={5} start={i * 3 + 1} /></div>))}
          </div>
        </div>
      </div>
    </PortfolioPage>
  );
}

/* ============ AREAS OF INVESTIGATION (table) ============ */
function InvestigationPage({ title = 'Areas of Investigation', badge, seed, data = {} }) {
  const cols = data.columns || [null, null, null, null];
  const rows = data.rows || Array.from({ length: 6 }).map(() => cols.map(() => ''));
  return (
    <PortfolioPage {...A3} title={title} badge={badge} seed={seed}>
      <div style={{ background: 'var(--paper)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-card)', overflow: 'hidden', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${cols.length},1fr)`, background: 'var(--surface-band)' }}>
          {cols.map((c, i) => (
            <div key={i} style={{ padding: '12px 14px', color: '#fff', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14, textTransform: 'uppercase', minHeight: 44 }}>
              {c || <div style={{ height: 10, width: '70%', background: 'rgba(255,255,255,.55)', borderRadius: 2 }}></div>}
            </div>
          ))}
        </div>
        <div style={{ flex: 1, display: 'grid', gridTemplateRows: `repeat(${rows.length},1fr)` }}>
          {rows.map((r, ri) => (
            <div key={ri} style={{ display: 'grid', gridTemplateColumns: `repeat(${cols.length},1fr)`, borderTop: '1px solid var(--border-table)' }}>
              {r.map((cell, ci) => (
                <div key={ci} style={{ padding: '10px 14px', borderLeft: ci ? '1px solid var(--border-table)' : 'none', fontSize: 13.5, color: INK }}>{cell}</div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </PortfolioPage>
  );
}

/* ============ INTERVIEWS + CRITERIA ============ */
function InterviewsPage({ badge, seed, data = {} }) {
  const people = data.people || [{}, {}, {}];
  return (
    <PortfolioPage {...A3} title={null} seed={seed}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.15fr', gap: 26, flex: 1, minHeight: 0 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, minHeight: 0 }}>
          <SectionTitle badge={false} size={40}>Interviews</SectionTitle>
          {people.map((p, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 6, flex: 1, minHeight: 0 }}>
              <div style={{ textAlign: 'center', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14, color: '#fff', textTransform: 'uppercase', letterSpacing: '.04em' }}>{p.name || 'Name, Occupation'}</div>
              <QuoteBox text={p.quote} style={{ flex: 1 }} />
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, minHeight: 0 }}>
          <SectionTitle badge={badge} size={36}>Criteria to Evaluate Success</SectionTitle>
          <div style={{ background: 'var(--paper)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-card)', padding: 20, flex: 1, minHeight: 0, overflow: 'hidden' }}>
            <ColHeading>Introduction</ColHeading>
            <Body text={data.intro} lines={3} />
            <div style={{ height: 12 }}></div>
            <ColHeading>{(data.criteria && data.criteria.h) || 'Portability'}</ColHeading>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
              <Body text={data.criteria && data.criteria.left} lines={9} />
              <Body text={data.criteria && data.criteria.right} lines={9} start={4} />
            </div>
          </div>
        </div>
      </div>
    </PortfolioPage>
  );
}

/* ============ ACTION, TIME & FINANCE PLANS ============ */
function ActionFinancePage({ title = 'Action, Time and Finance Plans', badge, seed, data = {} }) {
  return (
    <PortfolioPage {...A3} title={title} badge={badge} seed={seed} paper>
      <div style={{ position: 'relative', flex: 1, minHeight: 0 }}>
        <div style={{ position: 'absolute', inset: 14, color: 'var(--slate-300)', fontSize: 14, fontStyle: 'italic' }}>
          {data.note || 'Gantt chart / action plan'}
        </div>
        <HighlightBox label="Summary" style={{ position: 'absolute', right: 12, bottom: 12, width: 360, height: 220 }}>{data.summary || ''}</HighlightBox>
      </div>
    </PortfolioPage>
  );
}

/* ============ EXPLORATION OF EXISTING DESIGNS ============ */
function ExistingDesignsPage({ title = 'Exploration of Existing Designs', badge, seed, data = {} }) {
  const items = data.items || [{}, {}];
  return (
    <PortfolioPage {...A3} title={title} badge={badge} seed={seed} paper>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 30, flex: 1, minHeight: 0 }}>
        {items.map((it, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 10, minHeight: 0 }}>
            <ColHeading>{it.design || 'Design'}</ColHeading>
            <ImageSlot label={it.label || 'Existing product image'} style={{ height: 300 }} />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18, flex: 1, minHeight: 0 }}>
              <div><ColHeading>Key points from design: pos + neg</ColHeading><Body text={it.points} lines={6} /></div>
              <div><ColHeading>What I learnt from</ColHeading><Body text={it.learnt} lines={6} start={3} /></div>
            </div>
          </div>
        ))}
      </div>
    </PortfolioPage>
  );
}

/* ============ SKETCHES ============ */
function SketchesPage({ title = 'Sketches', badge, seed, data = {} }) {
  const items = data.items || [{}, {}, {}, {}];
  return (
    <PortfolioPage {...A3} title={title} badge={badge} seed={seed} paper>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: 22, flex: 1, minHeight: 0 }}>
        {items.map((it, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 6, minHeight: 0 }}>
            <ColHeading>{it.design || 'Design'}</ColHeading>
            <ImageSlot label={it.label || 'Sketch'} style={{ flex: 1 }} />
            <Body text={it.caption} lines={2} start={i} />
          </div>
        ))}
      </div>
    </PortfolioPage>
  );
}

/* ============ BLANK WHITE CANVAS (creativity / testing / practical skills) ============ */
function BlankCanvasPage({ title, badge, seed, data = {} }) {
  return (
    <PortfolioPage {...A3} title={title} badge={badge} seed={seed} paper>
      <div style={{ flex: 1, display: 'grid', placeItems: 'center', color: 'var(--slate-300)', fontSize: 15, fontStyle: 'italic' }}>
        {data.note || 'Paste images, scans and annotations here'}
      </div>
    </PortfolioPage>
  );
}

/* ============ JUSTIFICATION OF TOOLS / MATERIALS ============ */
function JustificationPage({ title = 'Justification of Tools / Materials', badge, seed, data = {} }) {
  const left = data.left || { head: 'Tools', items: [{}, {}, {}] };
  const right = data.right || { head: 'Materials', items: [{}, {}, {}] };
  const Column = ({ col, kind }) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14, minHeight: 0 }}>
      {col.items.map((it, i) => (
        <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 150px', gap: 14, flex: 1, minHeight: 0 }}>
          <div><ColHeading>{it.h || kind}</ColHeading><Body text={it.text} lines={6} start={i * 2} /></div>
          <ImageSlot label={it.label || kind} style={{ alignSelf: 'stretch' }} />
        </div>
      ))}
    </div>
  );
  return (
    <PortfolioPage {...A3} title={null} seed={seed} paper>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 30, flex: 1, minHeight: 0 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, minHeight: 0 }}>
          <SectionTitle badge={false} size={32}>{`Justification of ${left.head}`}</SectionTitle>
          <Column col={left} kind="Tool" />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, minHeight: 0 }}>
          <SectionTitle badge={badge} size={32}>{`Justification of ${right.head}`}</SectionTitle>
          <Column col={right} kind="Material" />
        </div>
      </div>
    </PortfolioPage>
  );
}

/* ---------- page-type registry ---------- */
const PAGE_TYPES = {
  cover: (p) => <CoverPage {...p} />,
  need: (p) => <StandardDensePage title="Identification of the Need" {...p} />,
  investigation: (p) => <InvestigationPage {...p} />,
  interviews: (p) => <InterviewsPage {...p} />,
  criteria: (p) => <StandardDensePage title="Criteria to Evaluate Success" {...p} />,
  action: (p) => <ActionFinancePage {...p} />,
  existing: (p) => <ExistingDesignsPage {...p} />,
  sketches: (p) => <SketchesPage {...p} />,
  creativity: (p) => <BlankCanvasPage title="Further Evidence of Creativity" {...p} />,
  consideration: (p) => <StandardDensePage title="Consideration of Design Factors" {...p} />,
  testing: (p) => <BlankCanvasPage title="Experimentation and Testing" {...p} />,
  justification: (p) => <JustificationPage {...p} />,
  practical: (p) => <BlankCanvasPage title="Evidence of Practical Skills" {...p} />,
  evaluation: (p) => <StandardDensePage title="Project Evaluation" {...p} />,
  impact: (p) => <StandardDensePage title="Impact on Society, Individual and the Environment" titleSize={34} {...p} />,
  final: (p) => <StandardDensePage title="Final Evaluation with Respect to the Project Proposal" titleSize={32} {...p} />,
};

/* ---------- the 40-page plan (data-driven; edit freely) ---------- */
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
  { t: 'final' }, { t: 'final' },
];

function renderPage(entry, i) {
  const fn = PAGE_TYPES[entry.t];
  return fn ? fn({ badge: true, seed: (i * 7 + 3) % 90, data: entry.data || {} }) : null;
}

Object.assign(window, {
  EasyCleanPages: { PAGE_TYPES, PLAN, renderPage,
    CoverPage, StandardDensePage, InvestigationPage, InterviewsPage, ActionFinancePage,
    ExistingDesignsPage, SketchesPage, BlankCanvasPage, JustificationPage },
});
