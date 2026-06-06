"use client";

import { Tx } from "@/components/Tx";

export function PriceWhySection() {
  return (
    <section id="why-price">
      <div className="why-price-grid">
        <div>
          <Tx
            k="price-why-label"
            as="p"
            className="why-price-label"
            id="price-why-label"
          />
          <Tx
            k="price-why-title"
            as="h2"
            className="why-price-title"
            id="price-why-title"
          />
        </div>
        <Tx
          k="price-why-text"
          as="div"
          className="why-price-text"
          id="price-why-text"
        />
      </div>
    </section>
  );
}
