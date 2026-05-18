"use client";

import { Tx } from "@/components/Tx";

export function WhySection() {
  return (
    <section id="why">
      <Tx k="why-label" as="p" className="section-label reveal" />
      <Tx k="why-title" as="h2" className="section-title reveal" />
      <div className="why-grid">
        <Tx k="why-body" as="div" className="why-text reveal" id="why-body" />
        <div className="why-stats reveal">
            <div className="stat-box">
              <div className="stat-number">
                2700<span className="stat-unit">m</span>
              </div>
              <Tx k="stat1" as="div" className="stat-label" id="stat1" />
              <Tx k="stat1d" as="p" className="stat-desc" id="stat1d" />
            </div>
            <div className="stat-box ice">
              <div className="stat-number">
                4000<span className="stat-unit">+</span>
              </div>
              <Tx k="stat2" as="div" className="stat-label" id="stat2" />
              <Tx k="stat2d" as="p" className="stat-desc" id="stat2d" />
            </div>
            <div className="stat-box ice">
              <div className="stat-number">30+</div>
              <Tx k="stat3" as="div" className="stat-label" id="stat3" />
              <Tx k="stat3d" as="p" className="stat-desc" id="stat3d" />
            </div>
            <div className="stat-box">
              <div className="stat-number">7+</div>
              <Tx k="stat4" as="div" className="stat-label" id="stat4" />
              <Tx k="stat4d" as="p" className="stat-desc" id="stat4d" />
            </div>
        </div>
      </div>
    </section>
  );
}
