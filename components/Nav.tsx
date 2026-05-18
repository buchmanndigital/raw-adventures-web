"use client";

import { useBookingLink, useHashLink } from "@/components/BasePathContext";
import { Tx } from "@/components/Tx";

export function Nav() {
  const h = useHashLink();
  const bookingLink = useBookingLink();
  return (
    <nav>
      <a href="/" className="nav-logo">
        RAW<span>.</span>ADVENTURES
      </a>
      <ul className="nav-links">
        <li>
          <a href={h("why")} id="nav-why">
            <Tx k="nav-why" />
          </a>
        </li>
        <li>
          <a href={h("terrain")} id="nav-terrain">
            <Tx k="nav-terrain" />
          </a>
        </li>
        <li>
          <a href={h("pricing")} id="nav-pricing">
            <Tx k="nav-pricing" />
          </a>
        </li>
        <li>
          <a href={h("season")} id="nav-season">
            <Tx k="nav-season" />
          </a>
        </li>
        <li>
          <a href={h("faq")}>FAQ</a>
        </li>
        <li>
          <a href={h("about")} id="nav-about">
            <Tx k="nav-about" />
          </a>
        </li>
      </ul>
      <a href={bookingLink} className="nav-cta" id="nav-book">
        <Tx k="nav-book" />
      </a>
    </nav>
  );
}
