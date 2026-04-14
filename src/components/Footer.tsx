"use client";

import React, { useState } from 'react';

export default function Footer() {
  const [isAccOpen, setIsAccOpen] = useState(false);
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
              <span>GABAnode Lab</span>
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
              <li>
                <button
                  type="button"
                  className="footer-btn-link"
                  onClick={(e) => { e.preventDefault(); setIsAccOpen(true); }}
                >
                  Accessibility Statement
                </button>
              </li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="mailto:systems@gabanodelab.com">Contact</a></li>
            </ul>
          </nav>

        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} GABAnode Lab LLC. All rights reserved.</p>
          <p>
            <button
              type="button"
              className="footer-btn-link"
              onClick={(e) => { e.preventDefault(); setIsAccOpen(true); }}
            >
              Accessibility Statement
            </button>
            {' · '}
            <a href="mailto:systems@gabanodelab.com">systems@gabanodelab.com</a>
          </p>
        </div>
      </div>
      </div>

      {isAccOpen && (
        <div className="modal-overlay" onClick={() => setIsAccOpen(false)}>
          <div
            className="modal-content glass-panel"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="acc-title"
          >
            <h2 id="acc-title">Accessibility Statement</h2>
            <p>
              GABAnode Lab is committed to ensuring digital accessibility for people with disabilities.
              We are continually improving the user experience for everyone and applying the relevant accessibility standards, including WCAG 2.2 AA.
            </p>
            <p>
              If you have any feedback or encounter any accessibility barriers on our platform, please reach out to us at{' '}
              <a href="mailto:systems@gabanodelab.com">systems@gabanodelab.com</a>.
            </p>
            <button className="btn btn-primary" onClick={() => setIsAccOpen(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </footer>
  );
}
