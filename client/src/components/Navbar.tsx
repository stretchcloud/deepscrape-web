/*
 * Navbar — DeepScrapper
 * Style: hydranode.ai — white background, centered logo, nav links left/right, black CTA pill
 */
import { useState, useEffect } from "react";
import { Menu, X, Github } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "Live Demo", href: "#demo" },
    { label: "API Docs", href: "#api" },
    { label: "Pricing", href: "#pricing" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-200"
      style={{
        background: "oklch(1 0 0)",
        borderBottom: scrolled
          ? "1px solid oklch(0.90 0.004 265)"
          : "1px solid transparent",
        boxShadow: scrolled ? "0 1px 12px oklch(0.09 0.005 265 / 0.06)" : "none",
      }}
    >
      <div className="container">
        <div className="relative flex items-center justify-between h-16">
          {/* Left nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.slice(0, 2).map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium transition-colors"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "oklch(0.45 0.01 265)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "oklch(0.09 0.005 265)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "oklch(0.45 0.01 265)")}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Center logo */}
          <a
            href={import.meta.env.BASE_URL}
            className="flex items-center gap-2.5 absolute left-1/2 -translate-x-1/2"
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: "oklch(0.09 0.005 265)" }}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <circle cx="9" cy="9" r="2.5" fill="oklch(0.77 0.20 130)" />
                <path d="M9 2.5 L9 5.5 M9 12.5 L9 15.5 M2.5 9 L5.5 9 M12.5 9 L15.5 9"
                  stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M4.7 4.7 L6.8 6.8 M11.2 11.2 L13.3 13.3 M13.3 4.7 L11.2 6.8 M6.8 11.2 L4.7 13.3"
                  stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <span
              className="text-lg font-bold tracking-tight"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "oklch(0.09 0.005 265)",
              }}
            >
              DeepScrapper
            </span>
          </a>

          {/* Right nav */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.slice(2).map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium transition-colors"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "oklch(0.45 0.01 265)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "oklch(0.09 0.005 265)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "oklch(0.45 0.01 265)")}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://github.com/stretchcloud/deepscrape"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium flex items-center gap-1.5 transition-colors"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "oklch(0.45 0.01 265)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "oklch(0.09 0.005 265)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "oklch(0.45 0.01 265)")}
            >
              <Github size={15} />
              GitHub
            </a>
            <a href="#demo" className="btn-primary text-sm py-2 px-5">
              Try Free →
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            style={{ color: "oklch(0.09 0.005 265)" }}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden border-t"
          style={{
            background: "oklch(1 0 0)",
            borderColor: "oklch(0.90 0.004 265)",
          }}
        >
          <div className="container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium py-3 border-b"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "oklch(0.30 0.01 265)",
                  borderColor: "oklch(0.94 0.002 265)",
                }}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://github.com/stretchcloud/deepscrape"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium py-3 flex items-center gap-1.5"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "oklch(0.30 0.01 265)",
              }}
            >
              <Github size={15} />
              GitHub
            </a>
            <a href="#demo" className="btn-primary text-sm text-center mt-2" onClick={() => setMobileOpen(false)}>
              Try Free →
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
