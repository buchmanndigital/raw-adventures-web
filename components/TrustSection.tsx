"use client";

import { useBookingLink } from "@/components/BasePathContext";
import { Tx } from "@/components/Tx";

export function TrustSection() {
  const bookingLink = useBookingLink();
  return (
    <section id="trust">
      <div className="trust-inner reveal">
        <Tx k="trust-badge" as="div" className="trust-badge" id="trust-badge" />
        <Tx k="trust-headline" as="h2" className="trust-headline" id="trust-headline" />
        <Tx k="trust-body" as="p" className="trust-body" id="trust-body" />
        <div className="trust-stats">
          <div className="trust-stat">
            <Tx k="ts1n" as="div" className="trust-stat-num" id="ts1n" />
            <Tx k="ts1l" as="div" className="trust-stat-label" id="ts1l" />
          </div>
          <div className="trust-stat">
            <Tx k="ts2n" as="div" className="trust-stat-num" id="ts2n" />
            <Tx k="ts2l" as="div" className="trust-stat-label" id="ts2l" />
          </div>
          <div className="trust-stat">
            <Tx k="ts3n" as="div" className="trust-stat-num" id="ts3n" />
            <Tx k="ts3l" as="div" className="trust-stat-label" id="ts3l" />
          </div>
        </div>
        <a href={bookingLink} className="btn-primary trust-cta" id="trust-cta">
          <Tx k="trust-cta" />
        </a>
      </div>
    </section>
  );
}
