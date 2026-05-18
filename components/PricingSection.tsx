"use client";

import { useHashLink } from "@/components/BasePathContext";
import { Tx } from "@/components/Tx";
import { useLang } from "@/lib/lang-context";

export function PricingSection() {
  const { t } = useLang();
  const h = useHashLink();
  return (
    <section id="pricing">
      <Tx k="pricing-label" as="p" className="section-label reveal" />
      <Tx k="pricing-title" as="h2" className="section-title reveal" />
      <div className="pricing-wrapper">
        <div className="price-hero reveal">
          <Tx k="price-badge" as="span" className="price-badge" id="price-badge" />
          <div className="price-main">
            <sup>&euro;</sup>1990
          </div>
          <div
            style={{
              fontFamily: "var(--font-barlow-cond), sans-serif",
              fontSize: "0.8rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "var(--accent)",
              marginTop: "-0.3rem",
              marginBottom: "0.3rem",
            }}
            id="price-from"
          >
            <Tx k="price-from" />
          </div>
          <Tx k="price-per" as="div" className="price-per" id="price-per" />
          <ul
            className="price-includes"
            id="price-list"
            dangerouslySetInnerHTML={{ __html: t("price-list") }}
          />
          <div className="not-included">
            <Tx k="not-incl" as="p" id="not-incl" />
          </div>
          <a
            href={h("contact")}
            className="btn-primary"
            style={{ marginTop: "2rem", display: "inline-block" }}
            id="price-cta"
          >
            <Tx k="price-cta" />
          </a>
        </div>
        <div>
          <div className="compare-box reveal">
            <div className="price-compare">
              <Tx k="cmp-title" as="p" className="compare-title" id="cmp-title" />
              <div className="compare-row">
                <div>
                  <Tx k="cmp-others" as="div" className="compare-who" id="cmp-others" />
                  <Tx
                    k="cmp-sub-others"
                    as="div"
                    className="compare-sub"
                    id="cmp-sub-others"
                  />
                </div>
                <div style={{ textAlign: "right" }}>
                  <span className="compare-price theirs">&euro;2,700&ndash;3,300</span>
                  <Tx k="cmp-5days" as="span" className="compare-days" id="cmp-5days" />
                </div>
              </div>
              <div className="compare-row ours-row">
                <div>
                  <div className="compare-who">
                    RAW.ADVENTURES{" "}
                    <Tx k="cmp-best" as="span" className="best-value-tag" id="cmp-best" />
                  </div>
                  <Tx
                    k="cmp-sub-ours"
                    as="div"
                    className="compare-sub ours"
                    id="cmp-sub-ours"
                  />
                </div>
                <div style={{ textAlign: "right" }}>
                  <span className="compare-price ours">&euro;1,990</span>
                  <Tx k="cmp-6days" as="span" className="compare-days" id="cmp-6days" />
                </div>
              </div>
              <div className="value-callout">
                <Tx k="cmp-callout" as="p" id="cmp-callout" />
              </div>
            </div>
          </div>
          <div
            className="reveal"
            style={{
              background: "var(--black)",
              padding: "2.5rem",
              marginTop: "2px",
            }}
          >
            <Tx
              k="flex-label"
              as="p"
              className="section-label"
              style={{ marginBottom: "1rem" }}
              id="flex-label"
            />
            <ul
              style={{
                listStyle: "none",
                fontSize: "0.92rem",
                color: "var(--snow)",
                lineHeight: 1.9,
              }}
              id="flex-list"
              dangerouslySetInnerHTML={{ __html: t("flex-list") }}
            />
          </div>
          <div
            className="reveal"
            style={{
              background: "rgba(111,168,196,0.08)",
              border: "1px solid rgba(111,168,196,0.2)",
              padding: "2.5rem",
              marginTop: "2px",
            }}
          >
            <Tx
              k="flights-label"
              as="p"
              className="section-label"
              style={{ color: "var(--ice)", marginBottom: "0.8rem" }}
              id="flights-label"
            />
            <Tx
              k="flights-body"
              as="p"
              style={{ fontSize: "0.92rem", color: "var(--snow)", lineHeight: 1.7 }}
              id="flights-body"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
