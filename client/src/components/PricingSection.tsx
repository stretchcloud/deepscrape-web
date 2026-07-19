/*
 * PricingSection — DeepScrapper
 * Style: hydranode.ai — white/light gray background, comparison table with dark highlight column
 * Mobile: stacked product cards below md; full table with horizontal scroll on md+
 */
import { Check, X } from "lucide-react";

const features = [
  "Free to use",
  "No credit card required",
  "No rate limits",
  "JavaScript rendering",
  "LLM extraction",
  "Batch processing",
  "Web crawling",
  "Markdown output",
  "Structured JSON output",
  "Local LLM support",
  "Open source",
];

type Availability = boolean | string;

const products: {
  name: string;
  highlight: boolean;
  price: string;
  availability: Availability[];
}[] = [
  {
    name: "DeepScrapper",
    highlight: true,
    price: "Free forever",
    availability: [true, true, true, true, true, true, true, true, true, true, true],
  },
  {
    name: "Firecrawl",
    highlight: false,
    price: "From $16/mo",
    availability: [false, false, false, true, true, true, true, true, true, false, false],
  },
  {
    name: "Apify",
    highlight: false,
    price: "From $49/mo",
    availability: [false, false, false, true, false, true, true, true, false, false, false],
  },
];

function AvailIcon({ val, highlight }: { val: Availability; highlight: boolean }) {
  if (typeof val === "string") {
    return (
      <span
        className="text-xs"
        style={{
          fontFamily: "'Inter', sans-serif",
          color: highlight ? "oklch(0.70 0.01 265)" : "oklch(0.55 0.01 265)",
        }}
      >
        {val}
      </span>
    );
  }
  return val ? (
    <Check
      size={16}
      strokeWidth={2.5}
      style={{ color: highlight ? "oklch(0.77 0.20 130)" : "oklch(0.45 0.15 130)" }}
    />
  ) : (
    <X size={16} strokeWidth={2} style={{ color: "oklch(0.75 0.01 265)" }} />
  );
}

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="py-24 lg:py-32"
      style={{ background: "oklch(0.97 0.002 265)" }}
    >
      <div className="container">
        {/* Section header */}
        <div className="mb-14">
          <p className="section-label mb-4">Why DeepScrapper</p>
          <div className="max-w-2xl">
            <h2
              className="headline-serif mb-4"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Better than paid tools.
              <br />
              <span className="italic-serif">Actually free.</span>
            </h2>
            <p
              className="text-lg"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "oklch(0.45 0.01 265)",
                lineHeight: "1.65",
              }}
            >
              Compare DeepScrapper against leading paid scraping APIs. Same features, zero cost.
            </p>
          </div>
        </div>

        {/* ── MOBILE: stacked product cards (< md) ── */}
        <div className="md:hidden space-y-4 mb-8">
          {products.map((product) => (
            <div
              key={product.name}
              className="rounded-2xl overflow-hidden border"
              style={{
                borderColor: product.highlight ? "oklch(0.30 0.005 265)" : "oklch(0.90 0.004 265)",
                background: product.highlight ? "oklch(0.09 0.005 265)" : "oklch(1 0 0)",
              }}
            >
              {/* Product header */}
              <div
                className="px-5 py-4 border-b"
                style={{ borderColor: product.highlight ? "oklch(0.18 0.005 265)" : "oklch(0.92 0.004 265)" }}
              >
                <div
                  className="text-base font-semibold mb-0.5"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: product.highlight ? "oklch(1 0 0)" : "oklch(0.09 0.005 265)",
                  }}
                >
                  {product.name}
                </div>
                <div
                  className="text-sm font-medium"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: product.highlight ? "oklch(0.77 0.20 130)" : "oklch(0.55 0.01 265)",
                  }}
                >
                  {product.price}
                </div>
              </div>
              {/* Feature list */}
              <div className="px-5 py-3 space-y-2">
                {features.map((feature, i) => (
                  <div key={feature} className="flex items-center justify-between py-1.5">
                    <span
                      className="text-sm"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        color: product.highlight ? "oklch(0.70 0.01 265)" : "oklch(0.30 0.01 265)",
                      }}
                    >
                      {feature}
                    </span>
                    <AvailIcon val={product.availability[i]} highlight={product.highlight} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ── DESKTOP: full comparison table (md+) with horizontal scroll safety ── */}
        <div className="hidden md:block overflow-x-auto">
          <div
            className="rounded-2xl overflow-hidden border"
            style={{ borderColor: "oklch(0.90 0.004 265)", minWidth: "560px" }}
          >
            {/* Header row */}
            <div
              className="grid"
              style={{ gridTemplateColumns: "2fr 1fr 1fr 1fr" }}
            >
              <div
                className="p-5 border-r"
                style={{ background: "oklch(1 0 0)", borderColor: "oklch(0.90 0.004 265)" }}
              >
                <span
                  className="text-sm font-medium"
                  style={{ fontFamily: "'Inter', sans-serif", color: "oklch(0.55 0.01 265)" }}
                >
                  Feature
                </span>
              </div>
              {products.map((product) => (
                <div
                  key={product.name}
                  className="p-5 text-center border-r last:border-r-0"
                  style={{
                    background: product.highlight ? "oklch(0.09 0.005 265)" : "oklch(1 0 0)",
                    borderColor: "oklch(0.90 0.004 265)",
                  }}
                >
                  <div
                    className="text-base font-semibold mb-1"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      color: product.highlight ? "oklch(1 0 0)" : "oklch(0.09 0.005 265)",
                    }}
                  >
                    {product.name}
                  </div>
                  <div
                    className="text-sm font-medium"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      color: product.highlight ? "oklch(0.77 0.20 130)" : "oklch(0.55 0.01 265)",
                    }}
                  >
                    {product.price}
                  </div>
                </div>
              ))}
            </div>

            {/* Feature rows */}
            {features.map((feature, i) => (
              <div
                key={feature}
                className="grid border-t"
                style={{
                  gridTemplateColumns: "2fr 1fr 1fr 1fr",
                  borderColor: "oklch(0.90 0.004 265)",
                }}
              >
                <div
                  className="p-4 border-r flex items-center"
                  style={{
                    background: i % 2 === 0 ? "oklch(1 0 0)" : "oklch(0.985 0.001 265)",
                    borderColor: "oklch(0.90 0.004 265)",
                  }}
                >
                  <span
                    className="text-sm"
                    style={{ fontFamily: "'Inter', sans-serif", color: "oklch(0.30 0.01 265)" }}
                  >
                    {feature}
                  </span>
                </div>
                {products.map((product) => (
                  <div
                    key={product.name}
                    className="p-4 flex items-center justify-center border-r last:border-r-0"
                    style={{
                      background: product.highlight
                        ? i % 2 === 0 ? "oklch(0.09 0.005 265)" : "oklch(0.12 0.007 265)"
                        : i % 2 === 0 ? "oklch(1 0 0)" : "oklch(0.985 0.001 265)",
                      borderColor: "oklch(0.90 0.004 265)",
                    }}
                  >
                    <AvailIcon val={product.availability[i]} highlight={product.highlight} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* CTA below table */}
        <div className="mt-10 text-center">
          <a href="#demo" className="btn-primary">
            Start using DeepScrapper free →
          </a>
        </div>
      </div>
    </section>
  );
}
