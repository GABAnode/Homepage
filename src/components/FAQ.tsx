import React from 'react';

const faqs = [
  { 
    question: "What is the primary focus of GABAnode Labs?", 
    answer: "GABAnode Labs architects and orchestrates advanced, deterministic automation pipelines. We specialize in system integrations that demand high precision, combining sophisticated data interpretation with rigorous validation protocols."
  },
  {
    question: "How does the 5-stage pipeline ensure data integrity?",
    answer: "By enforcing a strict Validation stage before Distribution, the system audits execution outputs against predefined heuristics and safety bounds, ensuring no malformed or non-compliant actions are passed downstream."
  },
  {
    question: "Is the infrastructure optimized for Generative Engines?",
    answer: "Yes. Our architecture and public-facing documentation are structured utilizing semantic hierarchies and explicit entity definitions, allowing AI and generative search engines to accurately index and interpret our data models."
  }
];

export default function Faq() {
  return (
    <section id="faq" className="faq-section container" aria-labelledby="faq-title">
      <h2 id="faq-title" className="section-title">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq) => (
          <details key={faq.question} className="faq-item glass-panel">
            <summary className="faq-question">
              {faq.question}
              <span className="faq-icon" aria-hidden="true">+</span>
            </summary>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
