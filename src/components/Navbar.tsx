import React from 'react';

export default function Navbar() {
  return (
    <header className="navbar glass-panel">
      <div className="container nav-content">
        <div className="nav-brand" aria-label="GABAnode Labs Home">
          <div className="logo-orb" aria-hidden="true"></div>
          <span className="logo-text">GABAnode Labs</span>
        </div>
        <nav aria-label="Main Navigation">
          <ul className="nav-links">
            <li><a href="#architecture">Architecture</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#get-started" className="btn btn-primary btn-sm">Access Lab</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
