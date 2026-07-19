/*
 * FeaturesSection — DeepScrapper
 * Style: hydranode.ai light theme + modern bento grid
 * Layout: Responsive bento — single column on mobile, 12-col grid on desktop
 * Mobile: All cards stack vertically; bento layout kicks in at lg breakpoint
 */
import { useEffect, useRef, useState } from "react";
import {
  Globe,
  Zap,
  Brain,
  FileText,
  Layers,
  Shield,
  ArrowRight,
  Check,
  Sparkles,
} from "lucide-react";

/* ─── Animated counter ─────────────────────────────────────────── */
function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        let start = 0;
        const step = Math.ceil(target / 60);
        const timer = setInterval(() => {
          start += step;
          if (start >= target) { setCount(target); clearInterval(timer); }
          else setCount(start);
        }, 16);
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);
  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

/* ─── Mini code snippet ─────────────────────────────────────────── */
const codeLines = [
  { indent: 0, tokens: [{ t: "curl ", c: "text-slate-400" }, { t: "-X POST ", c: "text-lime-500" }, { t: "\\", c: "text-slate-500" }] },
  { indent: 1, tokens: [{ t: "https://api.deepscrapper.dev", c: "text-sky-400" }, { t: "/scrape \\", c: "text-slate-400" }] },
  { indent: 1, tokens: [{ t: "-H ", c: "text-slate-400" }, { t: '"Content-Type: application/json"', c: "text-amber-400" }, { t: " \\", c: "text-slate-500" }] },
  { indent: 1, tokens: [{ t: "-d ", c: "text-slate-400" }, { t: "'", c: "text-amber-400" }, { t: "{", c: "text-slate-300" }] },
  { indent: 2, tokens: [{ t: '"url"', c: "text-sky-300" }, { t: ": ", c: "text-slate-400" }, { t: '"https://example.com"', c: "text-lime-400" }] },
  { indent: 1, tokens: [{ t: "}", c: "text-slate-300" }, { t: "'", c: "text-amber-400" }] },
];

/* ─── Output preview lines ──────────────────────────────────────── */
const outputLines = [
  { label: "# Example Domain", color: "text-slate-900", weight: "font-bold" },
  { label: "This domain is for use in illustrative...", color: "text-slate-500", weight: "font-normal" },
  { label: "## More information", color: "text-slate-700", weight: "font-semibold" },
  { label: "- [IANA](https://www.iana.org/domains)", color: "text-lime-600", weight: "font-normal" },
];

/* ─── Feature pills for the large card ─────────────────────────── */
const pills = [
  "JavaScript Rendering",
  "LLM Extraction",
  "Batch Crawling",
  "Anti-Bot Bypass",
  "Async Jobs",
  "Redis Cache",
  "Structured JSON",
  "Local LLM",
];

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="py-24 lg:py-32"
      style={{ background: "oklch(0.985 0.002 265)" }}
    >
      <div className="container">
        {/* Section header */}
        <div className="mb-12">
          <p className="section-label mb-4">Features</p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <h2
              className="headline-serif"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", maxWidth: "28rem" }}
            >
              Stop paying for data
              <br />
              that's already public.
            </h2>
            <p
              className="max-w-sm text-base"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "oklch(0.45 0.01 265)",
                lineHeight: "1.65",
              }}
            >
              Enterprise-grade scraping capabilities — completely free, forever.
              No rate limits, no credit card, no catch.
            </p>
          </div>
        </div>

        {/* ── BENTO GRID — mobile: single col, lg: 12-col grid ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-3">

          {/* ── CARD 1: Large hero — "Any website → clean data" */}
          <div
            className="relative overflow-hidden rounded-2xl p-7 lg:p-8 flex flex-col justify-between md:col-span-2 lg:col-span-8"
            style={{
              minHeight: "320px",
              background: "oklch(0.09 0.005 265)",
              border: "1px solid oklch(0.15 0.005 265)",
            }}
          >
            {/* Background grid pattern */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "linear-gradient(oklch(1 0 0 / 0.08) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 0.08) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />
            {/* Lime glow */}
            <div
              className="absolute -top-16 -right-16 w-64 h-64 rounded-full opacity-20 blur-3xl"
              style={{ background: "oklch(0.77 0.20 130)" }}
            />

            <div className="relative z-10">
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 text-xs font-medium"
                style={{
                  background: "oklch(0.77 0.20 130 / 0.15)",
                  color: "oklch(0.77 0.20 130)",
                  border: "1px solid oklch(0.77 0.20 130 / 0.3)",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                <Sparkles size={12} />
                Powered by Playwright + LLMs
              </div>
              <h3
                className="text-2xl lg:text-3xl font-bold mb-3"
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  color: "oklch(1 0 0)",
                  lineHeight: "1.2",
                }}
              >
                Any website.
                <br />
                <span style={{ color: "oklch(0.77 0.20 130)" }}>Clean data.</span>
              </h3>
              <p
                className="text-sm mb-6 max-w-md"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "oklch(0.60 0.01 265)",
                  lineHeight: "1.6",
                }}
              >
                From static HTML to JavaScript-heavy SPAs — DeepScrapper handles
                it all. Full browser rendering, smart content extraction, and LLM
                post-processing in a single API call.
              </p>

              {/* Feature pills */}
              <div className="flex flex-wrap gap-2">
                {pills.map((p) => (
                  <span
                    key={p}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium"
                    style={{
                      background: "oklch(1 0 0 / 0.07)",
                      color: "oklch(0.75 0.01 265)",
                      border: "1px solid oklch(1 0 0 / 0.10)",
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    <Check size={10} style={{ color: "oklch(0.77 0.20 130)" }} />
                    {p}
                  </span>
                ))}
              </div>
            </div>

            <a
              href="#demo"
              className="relative z-10 mt-6 self-start inline-flex items-center gap-2 text-sm font-medium"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "oklch(0.77 0.20 130)",
              }}
            >
              Try it live <ArrowRight size={14} />
            </a>
          </div>

          {/* ── CARD 2: Stats — "100% Free" */}
          <div
            className="rounded-2xl p-7 flex flex-col justify-between lg:col-span-4"
            style={{
              minHeight: "280px",
              background: "oklch(0.77 0.20 130)",
              border: "1px solid oklch(0.70 0.20 130)",
            }}
          >
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-2"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "oklch(0.25 0.08 130)",
                }}
              >
                Price tag
              </p>
              <div
                className="text-7xl font-black leading-none mb-1"
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  color: "oklch(0.09 0.005 265)",
                }}
              >
                $0
              </div>
              <p
                className="text-sm font-medium"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "oklch(0.25 0.08 130)",
                }}
              >
                Forever. No hidden fees.
              </p>
            </div>

            <div className="space-y-2">
              {["No credit card", "No rate limits", "No signup required"].map((label) => (
                <div key={label} className="flex items-center gap-2">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "oklch(0.09 0.005 265)" }}
                  >
                    <Check size={11} style={{ color: "oklch(0.77 0.20 130)" }} />
                  </div>
                  <span
                    className="text-sm font-medium"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      color: "oklch(0.15 0.05 130)",
                    }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── CARD 3: Code snippet */}
          <div
            className="rounded-2xl overflow-hidden md:col-span-2 lg:col-span-5"
            style={{
              minHeight: "240px",
              background: "oklch(0.12 0.006 265)",
              border: "1px solid oklch(0.20 0.006 265)",
            }}
          >
            {/* Window chrome */}
            <div
              className="flex items-center gap-1.5 px-4 py-3 border-b"
              style={{ borderColor: "oklch(0.20 0.006 265)" }}
            >
              <div className="w-3 h-3 rounded-full" style={{ background: "oklch(0.65 0.20 25)" }} />
              <div className="w-3 h-3 rounded-full" style={{ background: "oklch(0.75 0.18 85)" }} />
              <div className="w-3 h-3 rounded-full" style={{ background: "oklch(0.65 0.18 145)" }} />
              <span
                className="ml-3 text-xs"
                style={{ fontFamily: "'JetBrains Mono', monospace", color: "oklch(0.45 0.01 265)" }}
              >
                scrape.sh
              </span>
            </div>
            {/* Code — overflow-x-auto for mobile */}
            <div className="p-4 overflow-x-auto">
              {codeLines.map((line, i) => (
                <div
                  key={i}
                  className="flex text-xs leading-6 whitespace-nowrap"
                  style={{ fontFamily: "'JetBrains Mono', monospace", paddingLeft: `${line.indent * 12}px` }}
                >
                  {line.tokens.map((tok, j) => (
                    <span key={j} className={tok.c}>{tok.t}</span>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* ── CARD 4: Markdown output preview */}
          <div
            className="rounded-2xl overflow-hidden lg:col-span-4"
            style={{
              minHeight: "240px",
              background: "oklch(1 0 0)",
              border: "1px solid oklch(0.90 0.004 265)",
            }}
          >
            {/* Window chrome */}
            <div
              className="flex items-center justify-between px-4 py-3 border-b"
              style={{ borderColor: "oklch(0.92 0.004 265)", background: "oklch(0.975 0.002 265)" }}
            >
              <div className="flex items-center gap-2">
                <FileText size={13} style={{ color: "oklch(0.55 0.17 130)" }} />
                <span
                  className="text-xs font-medium"
                  style={{ fontFamily: "'JetBrains Mono', monospace", color: "oklch(0.35 0.01 265)" }}
                >
                  output.md
                </span>
              </div>
              <span
                className="text-xs px-2 py-0.5 rounded-full"
                style={{
                  background: "oklch(0.55 0.17 130 / 0.12)",
                  color: "oklch(0.45 0.15 130)",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                Markdown
              </span>
            </div>
            <div className="p-5 space-y-2">
              {outputLines.map((line, i) => (
                <p
                  key={i}
                  className={`text-xs ${line.color} ${line.weight}`}
                  style={{ fontFamily: "'JetBrains Mono', monospace", lineHeight: "1.6" }}
                >
                  {line.label}
                </p>
              ))}
              <div className="mt-3 pt-3 border-t" style={{ borderColor: "oklch(0.92 0.004 265)" }}>
                <div className="flex flex-wrap items-center gap-3 text-xs" style={{ fontFamily: "'Inter', sans-serif", color: "oklch(0.55 0.01 265)" }}>
                  <span>✦ 312 words</span>
                  <span>✦ 4 headings</span>
                  <span>✦ 2 links</span>
                </div>
              </div>
            </div>
          </div>

          {/* ── CARD 5: Requests counter */}
          <div
            className="rounded-2xl p-6 flex flex-col justify-between lg:col-span-3"
            style={{
              minHeight: "240px",
              background: "oklch(1 0 0)",
              border: "1px solid oklch(0.90 0.004 265)",
            }}
          >
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ fontFamily: "'Inter', sans-serif", color: "oklch(0.55 0.01 265)" }}
              >
                API Requests
              </p>
              <div
                className="text-4xl font-black mb-1"
                style={{ fontFamily: "'Instrument Serif', serif", color: "oklch(0.09 0.005 265)" }}
              >
                <Counter target={2400000} suffix="+" />
              </div>
              <p
                className="text-xs"
                style={{ fontFamily: "'Inter', sans-serif", color: "oklch(0.55 0.01 265)" }}
              >
                served this month
              </p>
            </div>
            <div
              className="flex items-center gap-1.5 text-xs font-medium"
              style={{ fontFamily: "'Inter', sans-serif", color: "oklch(0.45 0.15 130)" }}
            >
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: "oklch(0.55 0.17 130)" }} />
              Live &amp; scaling
            </div>
          </div>

          {/* ── CARD 6: JS Rendering */}
          <BentoFeatureCard
            icon={Globe}
            title="JavaScript Rendering"
            description="Full Playwright browser for SPAs, React, Vue & Angular. No more missing content."
            colSpan="lg:col-span-3"
          />

          {/* ── CARD 7: LLM Extraction */}
          <div
            className="rounded-2xl p-6 flex flex-col gap-4 md:col-span-2 lg:col-span-4"
            style={{
              background: "oklch(0.09 0.005 265)",
              border: "1px solid oklch(0.15 0.005 265)",
            }}
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: "oklch(0.77 0.20 130 / 0.15)" }}
            >
              <Brain size={20} style={{ color: "oklch(0.77 0.20 130)" }} />
            </div>
            <div>
              <h3
                className="text-base font-semibold mb-1.5"
                style={{ fontFamily: "'Inter', sans-serif", color: "oklch(1 0 0)" }}
              >
                LLM-Powered Extraction
              </h3>
              <p
                className="text-sm"
                style={{ fontFamily: "'Inter', sans-serif", color: "oklch(0.55 0.01 265)", lineHeight: "1.6" }}
              >
                Use GPT-4, Claude, or local Ollama models to extract structured data with natural language instructions.
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 mt-auto">
              {["GPT-4o", "Claude 3", "Ollama", "Gemini"].map((m) => (
                <span
                  key={m}
                  className="text-xs px-2.5 py-1 rounded-full"
                  style={{
                    background: "oklch(1 0 0 / 0.07)",
                    color: "oklch(0.70 0.01 265)",
                    border: "1px solid oklch(1 0 0 / 0.10)",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {m}
                </span>
              ))}
            </div>
          </div>

          {/* ── CARD 8: Batch crawl */}
          <BentoFeatureCard
            icon={Layers}
            title="Batch & Crawl Mode"
            description="Scrape entire websites recursively, or process hundreds of URLs in parallel."
            colSpan="lg:col-span-3"
          />

          {/* ── CARD 9: Anti-bot */}
          <BentoFeatureCard
            icon={Shield}
            title="Anti-Bot Bypass"
            description="Stealth mode with rotating agents and human-like patterns."
            colSpan="lg:col-span-2"
          />

          {/* ── CARD 10: Async jobs */}
          <BentoFeatureCard
            icon={Zap}
            title="Async Jobs"
            description="Background jobs with BullMQ. Poll or use webhooks."
            colSpan="lg:col-span-2"
          />

          {/* ── CARD 11: Manifesto wide card */}
          <div
            className="rounded-2xl p-7 lg:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 md:col-span-2 lg:col-span-10"
            style={{
              background: "oklch(0.97 0.004 130)",
              border: "1px solid oklch(0.88 0.08 130)",
            }}
          >
            <div className="max-w-xl">
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ fontFamily: "'Inter', sans-serif", color: "oklch(0.45 0.15 130)" }}
              >
                Our Philosophy
              </p>
              <blockquote
                className="text-lg lg:text-xl font-semibold"
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  color: "oklch(0.15 0.05 130)",
                  lineHeight: "1.4",
                }}
              >
                "If the information on the internet is free,
                then scraping it should be free too."
              </blockquote>
            </div>
            <a
              href="https://github.com/stretchcloud/deepscrape"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:opacity-80"
              style={{
                background: "oklch(0.09 0.005 265)",
                color: "oklch(1 0 0)",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              View on GitHub <ArrowRight size={14} />
            </a>
          </div>

        </div>
        {/* ── END BENTO GRID ─────────────────────────────────────── */}
      </div>
    </section>
  );
}

/* ─── Reusable small bento feature card ────────────────────────── */
function BentoFeatureCard({
  icon: Icon,
  title,
  description,
  colSpan,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  colSpan: string;
}) {
  return (
    <div
      className={`rounded-2xl p-6 flex flex-col gap-3 ${colSpan}`}
      style={{
        background: "oklch(1 0 0)",
        border: "1px solid oklch(0.90 0.004 265)",
      }}
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center"
        style={{ background: "oklch(0.96 0.002 265)" }}
      >
        <Icon size={20} style={{ color: "oklch(0.09 0.005 265)" }} />
      </div>
      <div>
        <h3
          className="text-sm font-semibold mb-1"
          style={{ fontFamily: "'Inter', sans-serif", color: "oklch(0.09 0.005 265)" }}
        >
          {title}
        </h3>
        <p
          className="text-xs leading-relaxed"
          style={{ fontFamily: "'Inter', sans-serif", color: "oklch(0.50 0.01 265)" }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
