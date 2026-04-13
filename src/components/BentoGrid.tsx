import React from 'react';

/* ── Data ──────────────────────────────────────────────────────────────── */
const STANDARDS = [
  'WCAG 2.2 AA', 'ADA Title II', 'ADA Title III', 'Section 508',
  'PDF/UA', 'EN 301 549', 'HB 21-1110', 'AODA', 'BITV 2.0', 'RGAA 4.1',
];

const PILLARS = [
  {
    icon: '🛡️',
    tag: 'Document Intelligence',
    title: 'GABAnode Sentinel',
    desc: 'AI-powered document analysis and automated accessibility remediation. Sentinel scans, structures, and remediates PDFs and web assets against every major compliance standard — at any volume.',
    link: 'Explore Sentinel',
  },
  {
    icon: '🔍',
    tag: 'Compliance Monitoring',
    title: 'Audit Engine',
    desc: 'Continuous WCAG scanning across web properties and document systems. Generates verified compliance scores, detailed gap reports, and audit-ready documentation — automatically.',
    link: 'Explore Audit Engine',
  },
  {
    icon: '⚙️',
    tag: 'Infrastructure Layer',
    title: 'Compliance Pipelines',
    desc: 'API-first architecture that embeds accessibility verification directly into your document workflows, CMS, and digital infrastructure. Compliance by design — not afterthought.',
    link: 'Explore Pipelines',
  },
];

const STEPS = [
  {
    n: '01', title: 'Connect',
    desc: 'Integrate your document systems, web properties, or digital workflows via API or direct upload. No bespoke build required.',
  },
  {
    n: '02', title: 'Analyze',
    desc: 'GABAnode Sentinel scans every asset, generating compliance scores against WCAG, ADA, Section 508, and all applicable standards.',
  },
  {
    n: '03', title: 'Remediate',
    desc: 'Automated or operator-assisted remediation produces verified, standards-compliant outputs — with a full audit trail on every item.',
  },
  {
    n: '04', title: 'Report',
    desc: 'Receive structured compliance reports and certification-ready documentation, instantly delivered and ready for regulatory review.',
  },
];

const OLD_WAY = [
  'Weeks of manual remediation per document type',
  'Inconsistent results across teams and vendors',
  'No audit trail — compliance is assumed, not proven',
  'Reactive: issues discovered during audits, not before',
  'Impossible economics for addressing large backlogs',
];

const GN_WAY = [
  'Automated, repeatable pipelines across any volume',
  'Verified compliance scores on every output',
  'Full audit trail: every remediation is documented',
  'Proactive monitoring — issues caught before they surface',
  'Enterprise-scale from day one, no manual overhead',
];

const TEAM = [
  {
    initials: 'K.M.',
    title: 'Chief Accessibility Officer',
    creds: ['CPACC', 'ADA-C'],
    desc: 'Former ADA/Web Accessibility Coordinator for the City of Colorado Springs and Equity Manager for Statewide Accessibility at the State of Colorado, where he oversaw HB 21-1110 digital compliance policy across Colorado government. Board member, National ADA Committee (Rocky Mountain Region).',
    accolade: 'Recognized by the U.S. Department of Justice, the National ADA Network, and the Centers for Independent Living.',
  },
  {
    initials: 'C.L.',
    title: 'Chief Development Officer',
    creds: ['AZ-900', 'PL-900'],
    desc: 'Full-lifecycle platform engineer specializing in Azure cloud infrastructure, Microsoft Power Platform, and AI-integrated systems. Shipped four commercial products to market in 2025 via Azure Marketplace and Power Platform Marketplace. Prior roles include TruNorth Dynamics, Traxen AI, and Deep Planet Research.',
    accolade: 'Architect of the cloud infrastructure underpinning GABAnode\'s remediation and pipeline systems.',
  },
  {
    initials: 'J.F.',
    title: 'Chief Security Officer',
    creds: ['W3C Invited Expert', 'OWASP'],
    desc: 'Invited Expert to the W3C, contributing to the development of WCAG 3.0. Doctoral candidate in Computer Science researching Compliance Trap mitigation and secure service delivery in smart-city environments. MSIT and military veteran with 20+ years of operational leadership.',
    accolade: 'Recognized by the City of Colorado Springs and the State of Colorado for work at the intersection of cybersecurity and accessibility.',
  },
  {
    initials: 'Dr. A.C.',
    title: 'Client Advocate',
    creds: ['Clinical Background'],
    desc: 'Brings lived-experience and patient-advocacy perspective to accessible service delivery, grounded in clinical understanding of disability, communication access, and effective accommodation. Bridges the gap between technical compliance outputs and real-world resident impact.',
    accolade: 'Ensures GABAnode\'s systems serve the humans they are designed for — not just the regulators who audit them.',
  },
];

const FAQS = [
  {
    q: 'What compliance standards does GABAnode support?',
    a: 'GABAnode infrastructure validates against all major accessibility standards: WCAG 2.2 AA, ADA Title II and III, Section 508, PDF/UA, EN 301 549, AODA, HB 21-1110, RGAA 4.1, and BITV 2.0. As new regulations are enacted, our compliance engine is updated accordingly.',
  },
  {
    q: 'How does GABAnode Sentinel handle complex or scanned documents?',
    a: 'Sentinel uses AI-powered document analysis with advanced OCR to process any PDF type — digitally-born, scanned, or mixed-layout. It applies intelligent structure tagging, logical reading order determination, and contextual alt text generation regardless of source format or scan quality.',
  },
  {
    q: 'Can GABAnode integrate with existing document workflows or CMS platforms?',
    a: 'Yes. GABAnode is API-first by design. Our infrastructure layer can be embedded into existing IDP stacks, document management systems, CMS platforms, or enterprise workflows — processing assets automatically without disrupting existing operations.',
  },
  {
    q: 'How are compliance scores calculated and validated?',
    a: 'Compliance scores are generated against industry-standard validators and cross-referenced against all applicable ruleset checks — WCAG success criteria, PDF/UA tag validation, and structural accessibility requirements. Every report includes a full breakdown of passed, failed, and advisory checks. No black boxes.',
  },
  {
    q: 'Who is GABAnode built for?',
    a: 'GABAnode is built for organizations that need compliance at scale — municipal governments, healthcare systems, educational institutions, and enterprises managing large document libraries or complex digital environments where manual remediation is not economically viable.',
  },
  {
    q: 'Is document data secure during processing?',
    a: 'Yes. GABAnode operates under a zero-retention architecture by default. Documents are processed in ephemeral, isolated environments and are not retained post-processing. Custom data agreements and audit logging are available for enterprise deployments.',
  },
];

/* ── Component ─────────────────────────────────────────────────────────── */
export default function HomePage() {
  const stdMarquee = [...STANDARDS, ...STANDARDS];

  return (
    <div>
      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="hero" aria-labelledby="hero-heading">
        <div className="container">
          <div className="hero-grid">

            {/* Left — Content */}
            <div className="hero-content animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <div className="hero-pill" role="note" aria-label="Platform status: active">
                <span className="hero-pill-dot" aria-hidden="true" />
                Platform
              </div>

              <h1 id="hero-heading" className="hero-heading">
                The Compliance<br />
                <span className="text-gradient">Infrastructure Layer</span>
              </h1>

              <p className="hero-description">
                GABAnode builds the systems, pipelines, and intelligence that make digital
                accessibility scalable, auditable, and permanent — across every standard that matters.
              </p>

              <div className="hero-actions">
                <a href="#pillars" className="btn btn-primary">Explore the Platform</a>
                <a href="mailto:systems@gabanodelab.com" className="btn btn-ghost">Contact the Lab</a>
              </div>

              <div className="hero-standards" aria-label="Supported compliance standards">
                {STANDARDS.slice(0, 5).map(s => (
                  <span key={s} className="std-tag">{s}</span>
                ))}
              </div>
            </div>

            {/* Right — Visual */}
            <div
              className="hero-visual animate-fade-up"
              style={{ animationDelay: '0.3s' }}
              aria-hidden="true"
            >
              <div className="hero-glow" />
              <div className="hero-card">
                <img
                  src="/images/gn-logo-transparent.png"
                  alt=""
                  width="460"
                  height="340"
                />
                <div className="floating-badge fb-1">
                  <span className="badge-icon" aria-hidden="true">✦</span>
                  WCAG 2.2 · ADA · Section 508
                </div>
                <div className="floating-badge fb-2">
                  <span className="badge-icon" aria-hidden="true">✦</span>
                  Audit-Ready Output
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── STANDARDS STRIP ───────────────────────────────────────────── */}
      <div className="standards-strip" aria-label="Supported compliance frameworks">
        <div className="standards-strip-overflow">
          <div className="standards-track" aria-hidden="true">
            {stdMarquee.map((s, i) => (
              <div key={i} className="std-item">
                <span className="std-diamond" aria-hidden="true">◆</span>
                {s}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── PLATFORM PILLARS ──────────────────────────────────────────── */}
      <section id="pillars" className="section" aria-labelledby="pillars-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-label">The Platform</span>
            <h2 id="pillars-heading" className="section-title">
              Built as a System.<br />Not a Checklist.
            </h2>
            <p className="section-subtitle">
              Three integrated layers that cover every axis of accessibility compliance —
              from documents to digital infrastructure.
            </p>
          </div>

          <div className="pillars-grid">
            {PILLARS.map((p, i) => (
              <article
                key={p.title}
                className="pillar-card animate-fade-up"
                style={{ animationDelay: `${0.1 + i * 0.1}s` }}
                aria-labelledby={`pillar-${i}-title`}
              >
                <span className="pillar-icon" aria-hidden="true">{p.icon}</span>
                <p className="pillar-tag">{p.tag}</p>
                <h3 id={`pillar-${i}-title`} className="pillar-title">{p.title}</h3>
                <p className="pillar-desc">{p.desc}</p>
                <a
                  href="mailto:systems@gabanodelab.com"
                  className="pillar-link"
                  aria-label={`Learn more about ${p.title}`}
                >
                  {p.link} →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON ────────────────────────────────────────────────── */}
      <section className="section section--alt" aria-labelledby="compare-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-label">The Shift</span>
            <h2 id="compare-heading" className="section-title">
              Manual Compliance Is<br />Not a Strategy
            </h2>
            <p className="section-subtitle">
              The gap between where organizations are and where regulators expect them
              to be cannot be closed manually. GABAnode closes it systematically.
            </p>
          </div>

          <div className="compare-grid">
            <div
              className="compare-col compare-col--old"
              role="region"
              aria-label="Status quo: manual compliance"
            >
              <p className="compare-label">
                <span aria-hidden="true">✕</span>&nbsp; The Old Way
              </p>
              <ul className="compare-list">
                {OLD_WAY.map(item => (
                  <li key={item} className="compare-item">
                    <i className="compare-item-icon" aria-hidden="true">✕</i>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="compare-col compare-col--new"
              role="region"
              aria-label="With GABAnode"
            >
              <p className="compare-label">
                <span aria-hidden="true">◆</span>&nbsp; With GABAnode
              </p>
              <ul className="compare-list">
                {GN_WAY.map(item => (
                  <li key={item} className="compare-item">
                    <i className="compare-item-icon" aria-hidden="true">◆</i>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────────────────── */}
      <section id="how-it-works" className="section" aria-labelledby="steps-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-label">How It Works</span>
            <h2 id="steps-heading" className="section-title">
              Compliance as a Pipeline,<br />Not a Project
            </h2>
            <p className="section-subtitle">
              Four steps from fragmented to audit-ready.
            </p>
          </div>

          <div className="steps-grid">
            {STEPS.map((s, i) => (
              <div
                key={s.n}
                className="step-card animate-fade-up"
                style={{ animationDelay: `${0.1 + i * 0.1}s` }}
              >
                <span className="step-number" aria-hidden="true">{s.n}</span>
                <h3 className="step-title">{s.title}</h3>
                <p className="step-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ──────────────────────────────────────────────────────── */}
      <section id="team" className="section section--alt" aria-labelledby="team-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-label">The Lab</span>
            <h2 id="team-heading" className="section-title">
              Practitioners Who Have Operated<br />Inside the Systems We Build For
            </h2>
            <p className="section-subtitle">
              Former government accessibility coordinators, W3C contributors, cloud platform
              engineers, and patient advocates — combined under one infrastructure lab.
            </p>
          </div>

          <div className="team-grid">
            {TEAM.map((m, i) => (
              <article
                key={m.initials}
                className="bio-card animate-fade-up"
                style={{ animationDelay: `${0.1 + i * 0.1}s` }}
                aria-labelledby={`bio-${i}-title`}
              >
                <div className="bio-card-top">
                  <div className="bio-initials-wrap">
                    <span className="bio-initials" aria-hidden="true">{m.initials}</span>
                  </div>
                  <div className="bio-creds" aria-label={`Credentials: ${m.creds.join(', ')}`}>
                    {m.creds.map(c => (
                      <span key={c} className="bio-cred-tag">{c}</span>
                    ))}
                  </div>
                </div>
                <p id={`bio-${i}-title`} className="bio-role">{m.title}</p>
                <p className="bio-desc">{m.desc}</p>
                <p className="bio-accolade" aria-label="Recognition">
                  <span className="bio-accolade-icon" aria-hidden="true">◆</span>
                  {m.accolade}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <section id="faq" className="section" aria-labelledby="faq-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-label">FAQ</span>
            <h2 id="faq-heading" className="section-title">Common Questions</h2>
            <p className="section-subtitle">
              Answers to what compliance teams, IT leads, and procurement officers ask most.
            </p>
          </div>

          <div className="faq-list">
            {FAQS.map((item, i) => (
              <details key={i} className="faq-item">
                <summary className="faq-question">{item.q}</summary>
                <p className="faq-answer">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section className="section" aria-labelledby="cta-heading">
        <div className="container">
          <div className="cta-banner">
            <h2 id="cta-heading" className="cta-heading">
              Ready to make compliance<br />a system, not a project?
            </h2>
            <p className="cta-sub">
              Speak with the lab about your infrastructure needs.
            </p>
            <div className="cta-actions">
              <a href="mailto:systems@gabanodelab.com" className="btn btn-primary">
                Contact the Lab
              </a>
              <a href="#pillars" className="btn btn-ghost">
                Explore the Platform
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
