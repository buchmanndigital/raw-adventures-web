"use client";

import { Tx } from "@/components/Tx";

export function Nav() {
  return (
    <nav>
      <a href="#" className="nav-logo">
        RAW<span>.</span>ADVENTURES
      </a>
      <ul className="nav-links">
        <li>
          <a href="#why" id="nav-why">
            <Tx k="nav-why" />
          </a>
        </li>
        <li>
          <a href="#terrain" id="nav-terrain">
            <Tx k="nav-terrain" />
          </a>
        </li>
        <li>
          <a href="#pricing" id="nav-pricing">
            <Tx k="nav-pricing" />
          </a>
        </li>
        <li>
          <a href="#season" id="nav-season">
            <Tx k="nav-season" />
          </a>
        </li>
        <li>
          <a href="#faq">FAQ</a>
        </li>
        <li>
          <a href="#about" id="nav-about">
            <Tx k="nav-about" />
          </a>
        </li>
      </ul>
      <a href="#contact" className="nav-cta" id="nav-book">
        <Tx k="nav-book" />
      </a>
    </nav>
  );
}
