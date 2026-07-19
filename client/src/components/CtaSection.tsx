/*
 * CtaSection + Footer — DeepScrapper
 * Style: hydranode.ai — dark CTA banner with white text, then clean white footer
 */
import { ArrowRight, Github, Twitter } from "lucide-react";

export function CtaSection() {
  return (
    <section
      id="why-free"
      className="py-24 lg:py-32"
      style={{ background: "oklch(0.09 0.005 265)" }}
    >
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <p
            className="text-sm font-medium mb-6 uppercase tracking-widest"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "oklch(0.77 0.20 130)",
            }}
          >
            Our Manifesto
          </p>
          <h2
            className="mb-6"
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              lineHeight: "1.15",
              color: "oklch(1 0 0)",
            }}
          >
            "If the information on the internet is free, then scraping it should
            be free too."
          </h2>
          <p
            className="text-lg mb-10 max-w-2xl mx-auto"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "oklch(0.65 0.01 265)",
              lineHeight: "1.65",
            }}
          >
            We built DeepScrapper because we believe data access should be a
            right, not a privilege. Paid scraping APIs create an unfair barrier
            for indie developers, researchers, and small teams. We're changing
            that — forever.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="#demo" className="btn-primary-inverted">
              Start scraping free →
            </a>
            <a
              href="https://github.com/stretchcloud/deepscrape"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-white"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "oklch(0.65 0.01 265)",
              }}
            >
              <Github size={16} />
              Star on GitHub
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer
      className="border-t py-12"
      style={{
        background: "oklch(1 0 0)",
        borderColor: "oklch(0.90 0.004 265)",
      }}
    >
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-3">
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center"
                style={{ background: "oklch(0.09 0.005 265)" }}
              >
                <svg width="15" height="15" viewBox="0 0 18 18" fill="none">
                  <circle cx="9" cy="9" r="2.5" fill="oklch(0.77 0.20 130)" />
                  <path
                    d="M9 2.5 L9 5.5 M9 12.5 L9 15.5 M2.5 9 L5.5 9 M12.5 9 L15.5 9"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M4.7 4.7 L6.8 6.8 M11.2 11.2 L13.3 13.3 M13.3 4.7 L11.2 6.8 M6.8 11.2 L4.7 13.3"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <span
                className="text-base font-bold"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "oklch(0.09 0.005 265)",
                }}
              >
                DeepScrapper
              </span>
            </div>
            <p
              className="text-sm leading-relaxed mb-4"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "oklch(0.55 0.01 265)",
              }}
            >
              The free web scraping API. Convert any website to clean markdown
              or structured data.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/stretchcloud/deepscrape"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-black"
                style={{ color: "oklch(0.55 0.01 265)" }}
              >
                <Github size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-black"
                style={{ color: "oklch(0.55 0.01 265)" }}
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4
              className="text-sm font-semibold mb-4"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "oklch(0.09 0.005 265)",
              }}
            >
              Product
            </h4>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "Features", href: "#features" },
                { label: "Live Demo", href: "#demo" },
                { label: "API Reference", href: "#api" },
                { label: "Pricing", href: "#pricing" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors hover:text-black"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      color: "oklch(0.55 0.01 265)",
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Developers */}
          <div>
            <h4
              className="text-sm font-semibold mb-4"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "oklch(0.09 0.005 265)",
              }}
            >
              Developers
            </h4>
            <ul className="flex flex-col gap-2.5">
              {[
                {
                  label: "GitHub Repository",
                  href: "https://github.com/stretchcloud/deepscrape",
                },
                {
                  label: "Documentation",
                  href: "https://github.com/stretchcloud/deepscrape#readme",
                },
                { label: "API Docs", href: "#api" },
                { label: "Use Cases", href: "#use-cases" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="text-sm transition-colors hover:text-black"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      color: "oklch(0.55 0.01 265)",
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4
              className="text-sm font-semibold mb-4"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "oklch(0.09 0.005 265)",
              }}
            >
              Company
            </h4>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "About", href: "#why-free" },
                { label: "Blog", href: "#" },
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors hover:text-black"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      color: "oklch(0.55 0.01 265)",
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-8 border-t"
          style={{ borderColor: "oklch(0.90 0.004 265)" }}
        >
          <p
            className="text-sm"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "oklch(0.60 0.01 265)",
            }}
          >
            © {new Date().getFullYear()} DeepScrapper. Free and open source.
          </p>
          <p
            className="text-sm"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "oklch(0.60 0.01 265)",
            }}
          >
            Built with ❤️ for the open web
          </p>
        </div>
      </div>
    </footer>
  );
}

export default CtaSection;
