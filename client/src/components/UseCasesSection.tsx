/*
 * UseCasesSection — DeepScrapper
 * Style: hydranode.ai light theme + modern bento grid
 * Layout: Responsive — single col on mobile, 2-col on md, 12-col bento on lg
 */
import { useEffect, useRef, useState } from "react";
import {
  Bot,
  TrendingUp,
  BookOpen,
  Newspaper,
  ShoppingCart,
  FileSearch,
  ArrowUpRight,
  ArrowDown,
  ArrowUp,
  CheckCircle2,
  Clock,
  Search,
  Star,
} from "lucide-react";

/* ─── AI Pipeline steps ─────────────────────────────────────────── */
const pipelineSteps = [
  { label: "Web URL", color: "oklch(0.55 0.01 265)", bg: "oklch(0.20 0.005 265)" },
  { label: "DeepScrapper", color: "oklch(0.77 0.20 130)", bg: "oklch(0.77 0.20 130 / 0.15)" },
  { label: "Markdown", color: "oklch(0.70 0.01 265)", bg: "oklch(0.20 0.005 265)" },
  { label: "Embeddings", color: "oklch(0.65 0.12 265)", bg: "oklch(0.20 0.008 265)" },
  { label: "Vector DB", color: "oklch(0.65 0.12 265)", bg: "oklch(0.20 0.008 265)" },
];

/* ─── E-commerce price rows ─────────────────────────────────────── */
const priceRows = [
  { name: "MacBook Pro 14\"", price: "$1,999", change: -3.2, up: false },
  { name: "Sony WH-1000XM5", price: "$279", change: +8.1, up: true },
  { name: "iPad Air M2", price: "$749", change: -1.5, up: false },
  { name: "AirPods Pro 2", price: "$199", change: 0.0, up: false },
];

/* ─── News feed items ───────────────────────────────────────────── */
const newsItems = [
  { source: "TechCrunch", time: "2m ago", headline: "OpenAI releases GPT-5 with enhanced reasoning capabilities", tag: "AI" },
  { source: "Reuters", time: "14m ago", headline: "Fed signals potential rate cut in Q3 amid cooling inflation", tag: "Finance" },
  { source: "Wired", time: "31m ago", headline: "New EU data act reshapes how companies handle public web data", tag: "Policy" },
  { source: "Bloomberg", time: "1h ago", headline: "Apple's M4 chip production ramps up ahead of WWDC", tag: "Tech" },
];

/* ─── Lead enrichment fields ────────────────────────────────────── */
const leadFields = [
  { label: "Company", value: "Acme Corp" },
  { label: "Industry", value: "SaaS / B2B" },
  { label: "Headcount", value: "250–500" },
  { label: "Tech Stack", value: "React, AWS" },
  { label: "LinkedIn", value: "linkedin.com/…" },
];

/* ─── Animated blinking cursor ──────────────────────────────────── */
function BlinkCursor() {
  const [on, setOn] = useState(true);
  useEffect(() => {
    const t = setInterval(() => setOn((v) => !v), 530);
    return () => clearInterval(t);
  }, []);
  return (
    <span
      className="inline-block w-0.5 h-3.5 ml-0.5 align-middle"
      style={{ background: "oklch(0.55 0.17 130)", opacity: on ? 1 : 0, transition: "opacity 0.1s" }}
    />
  );
}

/* ─── Intersection-aware fade-in ────────────────────────────────── */
function useFadeIn(delay = 0) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return {
    ref,
    style: {
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(18px)",
      transition: `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms`,
    },
  };
}

export default function UseCasesSection() {
  const fade0 = useFadeIn(0);
  const fade1 = useFadeIn(70);
  const fade2 = useFadeIn(140);
  const fade3 = useFadeIn(210);
  const fade4 = useFadeIn(280);
  const fade5 = useFadeIn(350);

  return (
    <section
      id="use-cases"
      className="py-24 lg:py-32"
      style={{ background: "oklch(0.985 0.002 265)" }}
    >
      <div className="container">
        {/* Section header */}
        <div className="mb-12">
          <p className="section-label mb-4">Use Cases</p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <h2
              className="headline-serif"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", maxWidth: "30rem" }}
            >
              Built for every
              <br />
              <span className="italic-serif">data-driven team.</span>
            </h2>
            <p
              className="max-w-sm text-base"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "oklch(0.45 0.01 265)",
                lineHeight: "1.65",
              }}
            >
              From AI engineers to market researchers — DeepScrapper powers the
              workflows that matter most, at zero cost.
            </p>
          </div>
        </div>

        {/* ── BENTO GRID — mobile: 1-col, md: 2-col, lg: 12-col ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-3">

          {/* ── CARD 1: AI & RAG — large dark */}
          <div
            ref={fade0.ref}
            style={fade0.style}
            className="rounded-2xl p-7 flex flex-col gap-5 md:col-span-2 lg:col-span-7"
          >
            <div
              className="rounded-2xl p-7 flex flex-col gap-5 h-full"
              style={{
                background: "oklch(0.09 0.005 265)",
                border: "1px solid oklch(0.16 0.005 265)",
                minHeight: "300px",
              }}
            >
              <div className="flex items-start justify-between">
                <div>
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: "oklch(0.77 0.20 130 / 0.15)" }}
                  >
                    <Bot size={20} style={{ color: "oklch(0.77 0.20 130)" }} />
                  </div>
                  <h3
                    className="text-lg font-semibold mb-1"
                    style={{ fontFamily: "'Inter', sans-serif", color: "oklch(1 0 0)" }}
                  >
                    AI &amp; RAG Pipelines
                  </h3>
                  <p
                    className="text-sm max-w-xs"
                    style={{ fontFamily: "'Inter', sans-serif", color: "oklch(0.55 0.01 265)", lineHeight: "1.6" }}
                  >
                    Feed clean markdown directly into LangChain, LlamaIndex, or any
                    vector database. Perfect for RAG, fine-tuning, and LLM context windows.
                  </p>
                </div>
                <a
                  href="#demo"
                  className="flex-shrink-0 inline-flex items-center gap-1 text-xs font-medium ml-4"
                  style={{ fontFamily: "'Inter', sans-serif", color: "oklch(0.77 0.20 130)" }}
                >
                  Try it <ArrowUpRight size={12} />
                </a>
              </div>

              <div className="mt-auto">
                <p
                  className="text-xs mb-3 font-medium uppercase tracking-widest"
                  style={{ fontFamily: "'Inter', sans-serif", color: "oklch(0.40 0.01 265)" }}
                >
                  Data pipeline
                </p>
                {/* Pipeline — wraps on mobile */}
                <div className="flex items-center gap-1.5 flex-wrap">
                  {pipelineSteps.map((step, i) => (
                    <div key={step.label} className="flex items-center gap-1.5">
                      <span
                        className="px-3 py-1.5 rounded-full text-xs font-medium"
                        style={{
                          background: step.bg,
                          color: step.color,
                          fontFamily: "'Inter', sans-serif",
                          border: "1px solid oklch(1 0 0 / 0.08)",
                        }}
                      >
                        {step.label}
                      </span>
                      {i < pipelineSteps.length - 1 && (
                        <span style={{ color: "oklch(0.40 0.01 265)", fontSize: "10px" }}>→</span>
                      )}
                    </div>
                  ))}
                </div>
                <div className="flex gap-2 mt-3 flex-wrap">
                  {["LangChain", "LlamaIndex", "Pinecone", "Weaviate", "OpenAI"].map((b) => (
                    <span
                      key={b}
                      className="text-xs px-2.5 py-1 rounded-full"
                      style={{
                        background: "oklch(1 0 0 / 0.06)",
                        color: "oklch(0.65 0.01 265)",
                        border: "1px solid oklch(1 0 0 / 0.10)",
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── CARD 2: Lead Enrichment */}
          <div
            ref={fade1.ref}
            style={fade1.style}
            className="rounded-2xl p-6 flex flex-col gap-4 lg:col-span-5"
          >
            <div
              className="rounded-2xl p-6 flex flex-col gap-4 h-full"
              style={{
                background: "oklch(1 0 0)",
                border: "1px solid oklch(0.90 0.004 265)",
                minHeight: "300px",
              }}
            >
              <div>
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                  style={{ background: "oklch(0.96 0.002 265)" }}
                >
                  <TrendingUp size={20} style={{ color: "oklch(0.09 0.005 265)" }} />
                </div>
                <h3
                  className="text-base font-semibold mb-1"
                  style={{ fontFamily: "'Inter', sans-serif", color: "oklch(0.09 0.005 265)" }}
                >
                  Lead Enrichment
                </h3>
                <p
                  className="text-xs"
                  style={{ fontFamily: "'Inter', sans-serif", color: "oklch(0.50 0.01 265)", lineHeight: "1.6" }}
                >
                  Auto-enrich CRM records with company data, tech stack, and social profiles scraped at scale.
                </p>
              </div>

              <div
                className="rounded-xl p-4 mt-auto"
                style={{ background: "oklch(0.975 0.002 265)", border: "1px solid oklch(0.91 0.004 265)" }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                    style={{ background: "oklch(0.09 0.005 265)", color: "oklch(0.77 0.20 130)", fontFamily: "'Inter', sans-serif" }}
                  >
                    A
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold" style={{ fontFamily: "'Inter', sans-serif", color: "oklch(0.09 0.005 265)" }}>
                      acmecorp.com
                    </p>
                    <p className="text-xs" style={{ fontFamily: "'Inter', sans-serif", color: "oklch(0.55 0.01 265)" }}>
                      Enriched just now
                    </p>
                  </div>
                  <span
                    className="ml-auto text-xs px-2 py-0.5 rounded-full font-medium flex-shrink-0"
                    style={{ background: "oklch(0.92 0.06 130)", color: "oklch(0.35 0.15 130)", fontFamily: "'Inter', sans-serif" }}
                  >
                    ✓ Done
                  </span>
                </div>
                <div className="space-y-1.5">
                  {leadFields.map((f) => (
                    <div key={f.label} className="flex items-center justify-between gap-2">
                      <span className="text-xs flex-shrink-0" style={{ fontFamily: "'Inter', sans-serif", color: "oklch(0.55 0.01 265)" }}>
                        {f.label}
                      </span>
                      <div className="flex items-center gap-1.5 min-w-0">
                        <span className="text-xs font-medium truncate" style={{ fontFamily: "'Inter', sans-serif", color: "oklch(0.15 0.005 265)" }}>
                          {f.value}
                        </span>
                        <CheckCircle2 size={11} style={{ color: "oklch(0.55 0.17 130)", flexShrink: 0 }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── CARD 3: News Monitoring */}
          <div
            ref={fade2.ref}
            style={fade2.style}
            className="lg:col-span-4"
          >
            <div
              className="rounded-2xl overflow-hidden flex flex-col"
              style={{
                background: "oklch(1 0 0)",
                border: "1px solid oklch(0.90 0.004 265)",
                minHeight: "320px",
              }}
            >
              <div
                className="px-5 py-4 border-b flex items-center justify-between"
                style={{ borderColor: "oklch(0.92 0.004 265)", background: "oklch(0.975 0.002 265)" }}
              >
                <div className="flex items-center gap-2">
                  <Newspaper size={14} style={{ color: "oklch(0.09 0.005 265)" }} />
                  <span className="text-sm font-semibold" style={{ fontFamily: "'Inter', sans-serif", color: "oklch(0.09 0.005 265)" }}>
                    News Monitor
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: "oklch(0.55 0.17 130)" }} />
                  <span className="text-xs" style={{ fontFamily: "'Inter', sans-serif", color: "oklch(0.55 0.01 265)" }}>Live</span>
                </div>
              </div>

              <div className="px-4 py-3 border-b" style={{ borderColor: "oklch(0.93 0.004 265)" }}>
                <div
                  className="flex items-center gap-2 px-3 py-2 rounded-lg"
                  style={{ background: "oklch(0.96 0.002 265)", border: "1px solid oklch(0.91 0.004 265)" }}
                >
                  <Search size={11} style={{ color: "oklch(0.55 0.01 265)" }} />
                  <span className="text-xs" style={{ fontFamily: "'JetBrains Mono', monospace", color: "oklch(0.55 0.01 265)" }}>
                    "AI regulation"
                  </span>
                  <BlinkCursor />
                </div>
              </div>

              <div className="flex-1">
                {newsItems.map((item, i) => (
                  <div
                    key={i}
                    className="px-4 py-3 border-b"
                    style={{ borderColor: "oklch(0.93 0.004 265)" }}
                  >
                    <div className="flex items-center gap-1.5 mb-1 flex-wrap">
                      <span className="text-xs font-semibold" style={{ fontFamily: "'Inter', sans-serif", color: "oklch(0.35 0.01 265)" }}>
                        {item.source}
                      </span>
                      <span className="text-xs" style={{ fontFamily: "'Inter', sans-serif", color: "oklch(0.65 0.01 265)" }}>
                        · {item.time}
                      </span>
                      <span
                        className="ml-auto text-xs px-1.5 py-0.5 rounded-full"
                        style={{ background: "oklch(0.92 0.06 130)", color: "oklch(0.35 0.15 130)", fontFamily: "'Inter', sans-serif" }}
                      >
                        {item.tag}
                      </span>
                    </div>
                    <p className="text-xs leading-relaxed" style={{ fontFamily: "'Inter', sans-serif", color: "oklch(0.30 0.01 265)" }}>
                      {item.headline}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── CARD 4: E-commerce Intelligence */}
          <div
            ref={fade3.ref}
            style={fade3.style}
            className="lg:col-span-5"
          >
            <div
              className="rounded-2xl overflow-hidden flex flex-col"
              style={{
                background: "oklch(1 0 0)",
                border: "1px solid oklch(0.90 0.004 265)",
                minHeight: "320px",
              }}
            >
              <div
                className="px-5 py-4 border-b flex items-center justify-between"
                style={{ borderColor: "oklch(0.92 0.004 265)", background: "oklch(0.975 0.002 265)" }}
              >
                <div className="flex items-center gap-2">
                  <ShoppingCart size={14} style={{ color: "oklch(0.09 0.005 265)" }} />
                  <span className="text-sm font-semibold" style={{ fontFamily: "'Inter', sans-serif", color: "oklch(0.09 0.005 265)" }}>
                    Price Intelligence
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock size={11} style={{ color: "oklch(0.55 0.01 265)" }} />
                  <span className="text-xs" style={{ fontFamily: "'Inter', sans-serif", color: "oklch(0.55 0.01 265)" }}>
                    Updated 2m ago
                  </span>
                </div>
              </div>

              <div className="flex-1 px-4 py-3">
                <div className="space-y-2">
                  {priceRows.map((row) => (
                    <div
                      key={row.name}
                      className="flex items-center justify-between py-2.5 px-3 rounded-xl"
                      style={{ background: "oklch(0.975 0.002 265)", border: "1px solid oklch(0.92 0.004 265)" }}
                    >
                      <span
                        className="text-xs font-medium flex-1 min-w-0 truncate"
                        style={{ fontFamily: "'Inter', sans-serif", color: "oklch(0.20 0.005 265)" }}
                      >
                        {row.name}
                      </span>
                      <span
                        className="text-xs font-bold mx-3 flex-shrink-0"
                        style={{ fontFamily: "'Inter', sans-serif", color: "oklch(0.09 0.005 265)" }}
                      >
                        {row.price}
                      </span>
                      <div
                        className="flex items-center gap-0.5 text-xs font-medium px-2 py-0.5 rounded-full flex-shrink-0"
                        style={{
                          background: row.up
                            ? "oklch(0.95 0.04 25)"
                            : row.change === 0
                            ? "oklch(0.96 0.002 265)"
                            : "oklch(0.94 0.06 145)",
                          color: row.up
                            ? "oklch(0.50 0.18 25)"
                            : row.change === 0
                            ? "oklch(0.55 0.01 265)"
                            : "oklch(0.35 0.15 145)",
                          fontFamily: "'Inter', sans-serif",
                        }}
                      >
                        {row.up ? <ArrowUp size={9} /> : row.change !== 0 ? <ArrowDown size={9} /> : null}
                        {row.change === 0 ? "—" : `${Math.abs(row.change)}%`}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="px-5 py-3 border-t flex items-center justify-between"
                style={{ borderColor: "oklch(0.92 0.004 265)" }}
              >
                <span className="text-xs" style={{ fontFamily: "'Inter', sans-serif", color: "oklch(0.55 0.01 265)" }}>
                  Tracking 4 of 1,200+ products
                </span>
                <span className="text-xs font-medium" style={{ fontFamily: "'Inter', sans-serif", color: "oklch(0.45 0.15 130)" }}>
                  View all →
                </span>
              </div>
            </div>
          </div>

          {/* ── CARD 5: Academic Research */}
          <div
            ref={fade4.ref}
            style={fade4.style}
            className="lg:col-span-3"
          >
            <div
              className="rounded-2xl p-6 flex flex-col gap-4"
              style={{
                background: "oklch(0.97 0.004 265)",
                border: "1px solid oklch(0.90 0.004 265)",
                minHeight: "320px",
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: "oklch(0.93 0.004 265)" }}
              >
                <BookOpen size={20} style={{ color: "oklch(0.09 0.005 265)" }} />
              </div>
              <div>
                <h3
                  className="text-sm font-semibold mb-1.5"
                  style={{ fontFamily: "'Inter', sans-serif", color: "oklch(0.09 0.005 265)" }}
                >
                  Academic Research
                </h3>
                <p
                  className="text-xs leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif", color: "oklch(0.50 0.01 265)" }}
                >
                  Collect from journals, government datasets, and repositories. Extract citations and metadata at scale.
                </p>
              </div>

              <div className="space-y-2 mt-auto">
                {[
                  { title: "Attention Is All You Need", year: "2017", stars: 5 },
                  { title: "BERT: Pre-training of Deep...", year: "2018", stars: 5 },
                  { title: "GPT-4 Technical Report", year: "2023", stars: 4 },
                ].map((paper) => (
                  <div
                    key={paper.title}
                    className="px-3 py-2 rounded-lg"
                    style={{ background: "oklch(1 0 0)", border: "1px solid oklch(0.91 0.004 265)" }}
                  >
                    <p
                      className="text-xs font-medium truncate mb-0.5"
                      style={{ fontFamily: "'Inter', sans-serif", color: "oklch(0.15 0.005 265)" }}
                    >
                      {paper.title}
                    </p>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs" style={{ fontFamily: "'Inter', sans-serif", color: "oklch(0.55 0.01 265)" }}>
                        {paper.year}
                      </span>
                      <div className="flex gap-0.5 ml-auto">
                        {Array.from({ length: paper.stars }).map((_, i) => (
                          <Star key={i} size={9} fill="oklch(0.77 0.20 130)" style={{ color: "oklch(0.77 0.20 130)" }} />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── CARD 6: Docs Indexing — full-width dark */}
          <div
            ref={fade5.ref}
            style={fade5.style}
            className="md:col-span-2 lg:col-span-12"
          >
            <div
              className="rounded-2xl p-7 flex flex-col lg:flex-row items-start lg:items-center gap-6"
              style={{
                background: "oklch(0.09 0.005 265)",
                border: "1px solid oklch(0.16 0.005 265)",
              }}
            >
              <div className="flex-1">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "oklch(0.77 0.20 130 / 0.15)" }}
                >
                  <FileSearch size={20} style={{ color: "oklch(0.77 0.20 130)" }} />
                </div>
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{ fontFamily: "'Inter', sans-serif", color: "oklch(1 0 0)" }}
                >
                  Documentation Indexing
                </h3>
                <p
                  className="text-sm max-w-lg"
                  style={{ fontFamily: "'Inter', sans-serif", color: "oklch(0.55 0.01 265)", lineHeight: "1.6" }}
                >
                  Crawl and index entire documentation sites, wikis, and knowledge bases. Power internal search
                  engines and AI assistants with always-fresh, structured content.
                </p>
              </div>

              {/* Stats row — wraps on mobile */}
              <div className="flex flex-wrap gap-6 lg:gap-8 flex-shrink-0">
                {[
                  { stat: "50k+", label: "Pages/hour" },
                  { stat: "99.9%", label: "Uptime SLA" },
                  { stat: "<200ms", label: "Avg latency" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <div
                      className="text-2xl font-black mb-1"
                      style={{ fontFamily: "'Instrument Serif', serif", color: "oklch(0.77 0.20 130)" }}
                    >
                      {s.stat}
                    </div>
                    <div className="text-xs" style={{ fontFamily: "'Inter', sans-serif", color: "oklch(0.50 0.01 265)" }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 flex-shrink-0 lg:max-w-xs">
                {["Docs", "Wikis", "Confluence", "Notion", "GitHub", "DevTools"].map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-full"
                    style={{
                      background: "oklch(1 0 0 / 0.07)",
                      color: "oklch(0.65 0.01 265)",
                      border: "1px solid oklch(1 0 0 / 0.10)",
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
        {/* ── END BENTO GRID ─────────────────────────────────────── */}
      </div>
    </section>
  );
}
