"use client";

import { useState } from "react";
import { useHashLink } from "@/components/BasePathContext";
import { Tx } from "@/components/Tx";

export function Nav() {
  const h = useHashLink();
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);

  return (
    <>
      <nav>
        <a href="/" className="nav-logo">
          RAW<span>.</span>MOUNTAIN
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
            <a href={h("itinerary")} id="nav-itin">
              <Tx k="nav-itin" />
            </a>
          </li>
          <li>
            <a href={h("faq")} id="nav-faq">
              <Tx k="nav-faq" />
            </a>
          </li>
          <li>
            <a href={h("about")} id="nav-about">
              <Tx k="nav-about" />
            </a>
          </li>
        </ul>
        <a href={h("contact")} className="nav-cta" id="nav-book">
          <Tx k="nav-book" />
        </a>
        <button
          className={`nav-hamburger${menuOpen ? " open" : ""}`}
          aria-label="Menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className={`nav-mobile-menu${menuOpen ? " open" : ""}`}>
        <ul>
          <li>
            <a href={h("why")} onClick={close} id="mob-why">
              <Tx k="mob-why" />
            </a>
          </li>
          <li>
            <a href={h("gallery")} onClick={close} id="mob-gallery">
              <Tx k="mob-gallery" />
            </a>
          </li>
          <li>
            <a href={h("terrain")} onClick={close} id="mob-terrain">
              <Tx k="mob-terrain" />
            </a>
          </li>
          <li>
            <a href={h("pricing")} onClick={close} id="mob-pricing">
              <Tx k="mob-pricing" />
            </a>
          </li>
          <li>
            <a href={h("season")} onClick={close} id="mob-season">
              <Tx k="mob-season" />
            </a>
          </li>
          <li>
            <a href={h("itinerary")} onClick={close} id="mob-itin">
              <Tx k="mob-itin" />
            </a>
          </li>
          <li>
            <a href={h("faq")} onClick={close} id="mob-faq">
              <Tx k="mob-faq" />
            </a>
          </li>
          <li>
            <a href={h("about")} onClick={close} id="mob-about">
              <Tx k="mob-about" />
            </a>
          </li>
          <li>
            <a href={h("contact")} onClick={close} className="mob-cta" id="mob-book">
              <Tx k="mob-book" />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
