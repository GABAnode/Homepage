import React from 'react';

export default function Footer() {
  return (
    <footer className="footer" aria-label="Site Footer">
      <div className="container">
        <div className="footer-inner">

          {/* Brand */}
          <div>
            <div className="footer-logo">
              <div
                className="logo-orb"
                aria-hidden="true"
                style={{ width: '18px', height: '18px' }}
              />
              <span>GABAnode Labs</span>
            </div>
            <p className="footer-tagline">
              Systems-focused infrastructure for accessibility, compliance,
              and intelligent automation.
            </p>
          </div>

          {/* Platform */}
          <nav className="footer-nav" aria-label="Platform">
            <h4>Platform</h4>
            <ul>
              <li><a href="#pillars">GABAnode Sentinel</a></li>
              <li><a href="#pillars">Audit Engine</a></li>
              <li><a href="#pillars">Compliance Pipelines</a></li>
            </ul>
          </nav>

          {/* Resources */}
          <nav className="footer-nav" aria-label="Resources">
            <h4>Resources</h4>
            <ul>
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#team">The Lab</a></li>
            </ul>
          </nav>

          {/* Legal */}
          <nav className="footer-nav" aria-label="Legal">
            <h4>Legal</h4>
            <ul>
              <li><a href="/accessibility">Accessibility Statement</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="mailto:systems@gabanodelab.com">Contact</a></li>
            </ul>
          </nav>

        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} GABAnode Lab LLC. All rights reserved.</p>
          <p>
            <a href="/accessibility">Accessibility Statement</a>
            {' · '}
            <a href="mailto:systems@gabanodelab.com">systems@gabanodelab.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
