import React from 'react';

export default function Navbar() {
  return (
    <header className="navbar glass-panel">
      <div className="container nav-content">
        <a href="/" className="nav-brand" aria-label="GABAnode Labs — Home">
          <div className="logo-orb" aria-hidden="true" />
          <span>GABAnode Labs</span>
        </a>

        <nav aria-label="Main Navigation">
          <ul className="nav-links">
            <li><a href="#pillars">Platform</a></li>
            <li><a href="#how-it-works">Solutions</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li>
              <a
                href="mailto:systems@gabanodelab.com"
                className="btn btn-primary btn-sm"
                aria-label="Request access to GABAnode Labs"
              >
                Request Access
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
