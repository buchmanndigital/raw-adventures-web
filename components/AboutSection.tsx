"use client";

import { Tx } from "@/components/Tx";

export function AboutSection() {
  return (
    <section id="about">
      <Tx k="about-label" as="p" className="section-label reveal" id="about-label" />
      <Tx k="about-title" as="h2" className="section-title reveal" id="about-title" />
      <div className="about-grid">
        <div className="about-avatar reveal">
          <div className="about-avatar-placeholder">
            <span className="about-avatar-icon">🏔️</span>
            <span className="about-avatar-name">Ferdi Christ</span>
            <span className="about-avatar-hint">
              Add your photo here. Replace this placeholder
            </span>
          </div>
          <div className="about-tag-row">
            <p
              style={{
                fontFamily: "var(--font-barlow-cond), sans-serif",
                fontSize: "0.72rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                marginBottom: "0.6rem",
                width: "100%",
              }}
            >
              Partner:
            </p>
            {["Lib Tech", "Bent Metal", "ThirtyTwo", "Oakley", "SnowboarderMBM"].map(
              (x) => (
                <span key={x} className="about-tag">
                  {x}
                </span>
              ),
            )}
          </div>
        </div>
        <Tx
          k="about-body"
          as="div"
          className="about-content reveal"
          id="about-body"
        />
      </div>
    </section>
  );
}
