import React from 'react';

const steps = [
  { id: 'detection', title: '01. Detection', description: 'Real-time observation and ingestion of multimodal environmental signals.' },
  { id: 'interpretation', title: '02. Interpretation', description: 'Semantic parsing and contextual mapping of raw data into structured entities.' },
  { id: 'execution', title: '03. Execution', description: 'Deterministic processing through established logical pathways and models.' },
  { id: 'validation', title: '04. Validation', description: 'Rigorous systemic verification to ensure state compliance and safety protocols.' },
  { id: 'distribution', title: '05. Distribution', description: 'Asynchronous payload delivery to target endpoints and external dependencies.' }
];

export default function ArchitectureDiagram() {
  return (
    <section id="architecture" className="architecture-section container" aria-labelledby="arch-title">
      <h2 id="arch-title" className="section-title">Core System Architecture</h2>
      <p className="section-subtitle">Our 5-stage deterministic pipeline guarantees structural integrity from ingestion to distribution.</p>
      
      <div className="diagram-container">
        {steps.map((step, index) => (
          <div key={step.id} className="diagram-step">
            <div className="diagram-node glass-panel">
              <h3 className="node-title">{step.title}</h3>
              <p className="node-desc">{step.description}</p>
            </div>
            {index < steps.length - 1 && <div className="node-connector" aria-hidden="true" />}
          </div>
        ))}
      </div>
    </section>
  );
}
