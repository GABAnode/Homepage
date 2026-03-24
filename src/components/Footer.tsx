import React from 'react';

export default function Footer() {
  return (
    <footer className="footer-section glass-panel">
      <div className="container footer-content">
        <div className="footer-brand">
          <span className="footer-logo">GABAnode Labs</span>
          <p className="footer-tagline">Deterministic pipelines for the modern web.</p>
        </div>
        <nav className="footer-links" aria-label="Footer navigation">
          <a href="#main-content">Back to Top</a>
          <a href="https://linkedin.com/company/gabanodelabs" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </nav>
      </div>
      <div className="footer-bottom container">
        <p>&copy; {new Date().getFullYear()} GABAnode Labs. All rights reserved.</p>
      </div>
    </footer>
  );
}
