/*
 * HeroSection — DeepScrapper
 * Style: hydranode.ai — white background, large serif headline, left-aligned text,
 *        right-side isometric illustration, black pill CTAs, lime green accent
 */
import { useEffect, useState } from "react";
import { ArrowRight, Check } from "lucide-react";

const HERO_ILLUSTRATION =
  "https://d2xsxph8kpxj0f.cloudfront.net/118178159/KUP4yi2NEFggeRzgDhAmHM/hero-illustration-v4-4297RafVbAqH7fFhRXSeCw.webp";

const badges = ["No credit card", "No rate limits", "No signup required"];

export default function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      className="overflow-hidden"
      style={{ background: "oklch(1 0 0)" }}
    >
      <div className="container pt-28 pb-0">
        {/* Announcement badge */}
        <div
          className={`transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
        >
          <a
            href="https://github.com/stretchcloud/deepscrape"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mb-8 group"
          >
            <span className="badge-green">
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "oklch(0.55 0.17 130)" }}
              />
              NEW
            </span>
            <span
              className="text-sm font-medium"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "oklch(0.30 0.01 265)",
              }}
            >
              Now 100% free — no credit card required
            </span>
            <ArrowRight
              size={14}
              className="transition-transform group-hover:translate-x-0.5"
              style={{ color: "oklch(0.45 0.01 265)" }}
            />
          </a>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center pb-16">
          {/* Left: Text content */}
          <div
            className={`transition-all duration-600 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          >
            <h1
              className="headline-serif mb-6"
              style={{ fontSize: "clamp(3rem, 6vw, 4.5rem)", lineHeight: "1.05" }}
            >
              Web scraping
              <br />
              should be{" "}
              <span className="italic-serif">free.</span>
            </h1>

            <p
              className="text-lg mb-3 max-w-lg"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "oklch(0.40 0.01 265)",
                lineHeight: "1.65",
              }}
            >
              If the information on the internet is free, then scraping it
              should be free too. DeepScrapper converts any website into clean
              markdown, JSON, or structured data — at zero cost.
            </p>

            <p
              className="text-sm mb-8"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "oklch(0.55 0.01 265)",
              }}
            >
              💡{" "}
              <a
                href="#why-free"
                className="underline transition-colors hover:text-black"
                style={{ textDecorationColor: "oklch(0.77 0.20 130)" }}
              >
                We believe data access should be a right, not a privilege.
              </a>
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-8">
              <a href="#demo" className="btn-primary">
                Start scraping free →
              </a>
              <a
                href="https://github.com/stretchcloud/deepscrape"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                See how it works
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-5">
              {badges.map((badge) => (
                <div key={badge} className="flex items-center gap-1.5">
                  <Check
                    size={14}
                    style={{ color: "oklch(0.55 0.17 130)" }}
                    strokeWidth={2.5}
                  />
                  <span
                    className="text-sm"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      color: "oklch(0.40 0.01 265)",
                    }}
                  >
                    {badge}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Illustration */}
          <div
            className={`relative transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <img
              src={HERO_ILLUSTRATION}
              alt="DeepScrapper converts websites to clean markdown data"
              className="w-full max-w-xl mx-auto lg:mx-0 lg:ml-auto"
              style={{
                filter:
                  "drop-shadow(0 20px 40px oklch(0.09 0.005 265 / 0.08))",
              }}
            />

            {/* Floating badge: active users */}
            <div
              className="hidden sm:flex absolute bottom-8 left-4 lg:-left-4 items-center gap-2 px-4 py-2.5 rounded-full border"
              style={{
                background: "oklch(1 0 0)",
                borderColor: "oklch(0.90 0.004 265)",
                boxShadow: "0 4px 20px oklch(0.09 0.005 265 / 0.08)",
              }}
            >
              <div
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: "oklch(0.55 0.17 130)" }}
              />
              <span
                className="text-sm font-medium"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "oklch(0.09 0.005 265)",
                }}
              >
                1,200+ developers using now
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar — dark section like hydranode */}
      <div className="stats-bar">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {[
              { value: "1,200+", label: "Active users" },
              { value: "11+", label: "API endpoints" },
              { value: "267+", label: "GitHub stars" },
              { value: "100%", label: "Free forever" },
            ].map((stat) => (
              <div key={stat.label} className="py-8 px-6 text-center">
                <div
                  className="text-3xl font-bold mb-1"
                  style={{
                    fontFamily: "'Instrument Serif', serif",
                    color: "oklch(1 0 0)",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-sm"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: "oklch(0.65 0.01 265)",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
