import React from 'react';

export default function BentoGrid() {
  return (
    <main className="bento-container" id="main-content">
      <h1 className="sr-only">GABAnode Labs is a systems-focused lab building infrastructure for accessibility, compliance, and intelligent automation across digital environments to bring structure to complexity.</h1>
      
      <div className="bento-grid">
        {/* Logo Tile */}
        <section className="bento-tile tile-logo hover-float animate-fade-up" style={{ animationDelay: '0.1s' }} aria-label="GABAnode Labs Brand">
          <div className="logo-3d-wrapper">
             <div className="mesh-gradient-bg"></div>
             <span className="logo-text">GABAnode<br/>Labs</span>
          </div>
        </section>

        {/* What */}
        <section className="bento-tile tile-what animate-fade-up" style={{ animationDelay: '0.2s' }} aria-labelledby="what-title">
          <h2 id="what-title">What</h2>
          <p>We design and build infrastructure for accessibility, compliance, and intelligent automation.</p>
        </section>

        {/* Who */}
        <section className="bento-tile tile-who animate-fade-up" style={{ animationDelay: '0.3s' }} aria-labelledby="who-title">
          <h2 id="who-title">Who</h2>
          <p>GABAnode Labs is a systems-focused technology lab.</p>
        </section>

        {/* When */}
        <section className="bento-tile tile-when animate-fade-up" style={{ animationDelay: '0.4s' }} aria-labelledby="when-title">
          <h2 id="when-title">When</h2>
          <p>Now—when fragmented systems, rising complexity, and regulatory pressure demand coherent solutions.</p>
        </section>

        {/* Why */}
        <section className="bento-tile tile-why animate-fade-up" style={{ animationDelay: '0.5s' }} aria-labelledby="why-title">
          <h2 id="why-title">Why</h2>
          <p>Because intelligence is not a feature—it is the result of a well-ordered system.</p>
        </section>

        {/* Where */}
        <section className="bento-tile tile-where animate-fade-up" style={{ animationDelay: '0.6s' }} aria-labelledby="where-title">
          <h2 id="where-title">Where</h2>
          <p>Across digital environments—web, documents, platforms, and integrated systems.</p>
        </section>

        {/* Bios */}
        <article className="bento-tile tile-bio tile-bio-1 animate-fade-up" style={{ animationDelay: '0.7s' }} aria-label="Founder JF">
          <div className="bio-initials">JF</div>
          <p className="bio-desc">Designs system architecture and ensures accessibility, compliance, and real-world execution align.</p>
        </article>
        
        <article className="bento-tile tile-bio tile-bio-2 animate-fade-up" style={{ animationDelay: '0.8s' }} aria-label="Founder KM">
          <div className="bio-initials">KM</div>
          <p className="bio-desc">Coordinates operations and maintains alignment across systems, timelines, and execution.</p>
        </article>
        
        <article className="bento-tile tile-bio tile-bio-3 animate-fade-up" style={{ animationDelay: '0.9s' }} aria-label="Founder AC">
          <div className="bio-initials">AC</div>
          <p className="bio-desc">Shapes how systems are experienced, ensuring clarity, usability, and coherence.</p>
        </article>
        
        <article className="bento-tile tile-bio tile-bio-4 animate-fade-up" style={{ animationDelay: '1.0s' }} aria-label="Founder CL">
          <div className="bio-initials">CL</div>
          <p className="bio-desc">Validates system integrity, ensuring accuracy, compliance, and performance under real conditions.</p>
        </article>

        {/* Contact */}
        <section className="bento-tile tile-contact hover-glow animate-fade-up" style={{ animationDelay: '1.1s' }} aria-label="Contact Information">
          <h2 className="sr-only">Contact Us</h2>
          <a href="mailto:systems@gabanodelabs.com" className="btn btn-primary btn-full">Contact Lab</a>
        </section>
      </div>
    </main>
  );
}
