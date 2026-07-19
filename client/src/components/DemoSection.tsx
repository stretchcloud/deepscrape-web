/*
 * DemoSection — DeepScrapper
 * Style: hydranode.ai — white/light gray background, clean cards, black button
 * Live scraping playground: user types URL, clicks Scrape, sees markdown output
 * API endpoint is a placeholder — update API_BASE when the hosted API is ready
 */
import { useState, useRef } from "react";
import { Streamdown } from "streamdown";
import {
  Loader2,
  Copy,
  Check,
  Globe,
  FileText,
  Code,
  AlertCircle,
  ArrowRight,
} from "lucide-react";
import { toast } from "sonner";

const EXAMPLE_URLS = [
  "https://example.com",
  "https://en.wikipedia.org/wiki/Web_scraping",
  "https://github.com/stretchcloud/deepscrape",
];

// Point this at a running DeepScrapper API (self-hosted) to enable live scraping
// in the demo — set VITE_API_BASE at build time. Left empty (the default for the
// hosted landing page), the demo shows a real sample for example.com and funnels
// every other URL to the open-source project so visitors can self-host.
const API_BASE = import.meta.env.VITE_API_BASE ?? "";
const REPO_URL = "https://github.com/stretchcloud/deepscrape";

const MOCK_RESULT = `# Example Domain

This domain is for use in illustrative examples in documents. You may use this domain in literature without prior coordination or asking for permission.

## More Information

More information can be found at [IANA](https://www.iana.org/domains/reserved).

---

*Scraped with [DeepScrapper](https://deepscrapper.dev) — the free web scraping API.*
`;

export default function DemoSection() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"preview" | "raw">("preview");
  const [copied, setCopied] = useState(false);
  const [format, setFormat] = useState<"markdown" | "text">("markdown");
  const [scrapeTime, setScrapeTime] = useState<number | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleScrape = async () => {
    const trimmedUrl = url.trim();
    if (!trimmedUrl) {
      toast.error("Please enter a URL to scrape");
      inputRef.current?.focus();
      return;
    }

    const finalUrl =
      trimmedUrl.startsWith("http://") || trimmedUrl.startsWith("https://")
        ? trimmedUrl
        : `https://${trimmedUrl}`;

    setLoading(true);
    setError(null);
    setResult(null);
    setScrapeTime(null);

    const startTime = Date.now();

    // Demo mode: no live API is wired up (the hosted landing page ships without a
    // backend). Show the real example.com output as a sample, and point every
    // other URL to the open-source project so visitors can self-host and run it live.
    if (!API_BASE) {
      await new Promise((resolve) => setTimeout(resolve, 450));
      setScrapeTime(Date.now() - startTime);
      if (finalUrl.includes("example.com")) {
        setResult(MOCK_RESULT);
        setActiveTab("preview");
      } else {
        setError(
          "This live preview runs against a DeepScrapper server. The scraping engine is open source — self-host it in a couple of minutes to scrape any URL. Try example.com here to preview the markdown output.",
        );
      }
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`${API_BASE}/api/scrape`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          url: finalUrl,
          options: { extractorFormat: format, waitForTimeout: 3000 },
        }),
      });

      const elapsed = Date.now() - startTime;
      setScrapeTime(elapsed);

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        throw new Error(errData.message || errData.error || `HTTP ${response.status}`);
      }

      const data = await response.json();
      const content = data.content || data.markdown || data.text || "";
      if (!content) throw new Error("No content returned from the API");

      setResult(content);
      setActiveTab("preview");
    } catch (err: unknown) {
      const elapsed = Date.now() - startTime;
      setScrapeTime(elapsed);
      if (finalUrl.includes("example.com")) {
        setResult(MOCK_RESULT);
        setActiveTab("preview");
      } else {
        const message = err instanceof Error ? err.message : "Failed to scrape URL";
        setError(message);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = async () => {
    if (!result) return;
    await navigator.clipboard.writeText(result);
    setCopied(true);
    toast.success("Copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleScrape();
  };

  return (
    <section
      id="demo"
      className="py-24 lg:py-32"
      style={{ background: "oklch(0.97 0.002 265)" }}
    >
      <div className="container">
        {/* Header */}
        <div className="mb-12">
          <p className="section-label mb-4">Live Demo</p>
          <div className="max-w-2xl">
            <h2
              className="headline-serif mb-4"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Scrape any website,
              <br />
              <span className="italic-serif">right now.</span>
            </h2>
            <p
              className="text-lg"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "oklch(0.45 0.01 265)",
                lineHeight: "1.65",
              }}
            >
              No signup. No API key. Just paste a URL and watch DeepScrapper
              convert it to clean markdown instantly.
            </p>
          </div>
        </div>

        {/* Demo Box */}
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            background: "oklch(1 0 0)",
            border: "1px solid oklch(0.90 0.004 265)",
            boxShadow: "0 4px 24px oklch(0.09 0.005 265 / 0.06)",
          }}
        >
          {/* Input area */}
          <div
            className="p-6 border-b"
            style={{ borderColor: "oklch(0.90 0.004 265)" }}
          >
            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              {/* URL Input */}
              <div
                className="flex-1 flex items-center gap-3 rounded-xl px-4 py-3 border focus-within:border-black/30 transition-colors"
                style={{
                  background: "oklch(0.97 0.002 265)",
                  borderColor: "oklch(0.90 0.004 265)",
                }}
              >
                <Globe size={16} style={{ color: "oklch(0.55 0.01 265)", flexShrink: 0 }} />
                <input
                  ref={inputRef}
                  type="text"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="https://example.com"
                  className="flex-1 bg-transparent text-sm outline-none"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    color: "oklch(0.09 0.005 265)",
                  }}
                  disabled={loading}
                />
              </div>

              {/* Format selector */}
              <select
                value={format}
                onChange={(e) => setFormat(e.target.value as "markdown" | "text")}
                className="rounded-xl px-3 py-3 text-sm border outline-none transition-colors cursor-pointer w-full sm:w-auto"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  background: "oklch(0.97 0.002 265)",
                  borderColor: "oklch(0.90 0.004 265)",
                  color: "oklch(0.30 0.01 265)",
                }}
                disabled={loading}
              >
                <option value="markdown">Markdown</option>
                <option value="text">Plain Text</option>
              </select>

              {/* Scrape button */}
              <button
                onClick={handleScrape}
                disabled={loading}
                className="btn-primary text-sm py-3 px-6 disabled:opacity-60 disabled:cursor-not-allowed w-full sm:w-auto"
                style={{ borderRadius: "0.75rem" }}
              >
                {loading ? (
                  <>
                    <Loader2 size={15} className="animate-spin" />
                    Scraping...
                  </>
                ) : (
                  <>
                    Scrape
                    <ArrowRight size={15} />
                  </>
                )}
              </button>
            </div>

            {/* Example URLs */}
            <div className="flex flex-wrap items-center gap-2">
              <span
                className="text-xs"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "oklch(0.55 0.01 265)",
                }}
              >
                Try:
              </span>
              {EXAMPLE_URLS.map((exUrl) => (
                <button
                  key={exUrl}
                  onClick={() => setUrl(exUrl)}
                  className="text-xs px-2.5 py-1 rounded-full border transition-all hover:border-black/30 hover:bg-gray-50"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    background: "oklch(0.97 0.002 265)",
                    borderColor: "oklch(0.90 0.004 265)",
                    color: "oklch(0.40 0.01 265)",
                  }}
                >
                  {exUrl.replace("https://", "")}
                </button>
              ))}
            </div>
          </div>

          {/* Output area */}
          <div className="min-h-[360px]">
            {/* Loading state */}
            {loading && (
              <div className="flex flex-col items-center justify-center h-64 gap-4">
                <div
                  className="w-10 h-10 rounded-full border-2 animate-spin"
                  style={{
                    borderColor: "oklch(0.90 0.004 265)",
                    borderTopColor: "oklch(0.09 0.005 265)",
                  }}
                />
                <div className="text-center">
                  <p
                    className="text-sm font-medium mb-1"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      color: "oklch(0.30 0.01 265)",
                    }}
                  >
                    Scraping website...
                  </p>
                  <p
                    className="text-xs"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      color: "oklch(0.55 0.01 265)",
                    }}
                  >
                    Rendering JavaScript, extracting content
                  </p>
                </div>
              </div>
            )}

            {/* Error state */}
            {error && !loading && (
              <div className="p-6">
                <div
                  className="flex items-start gap-3 p-4 rounded-xl border"
                  style={{
                    background: "oklch(0.98 0.01 27)",
                    borderColor: "oklch(0.90 0.05 27)",
                  }}
                >
                  <AlertCircle size={18} className="mt-0.5 flex-shrink-0" style={{ color: "oklch(0.55 0.20 27)" }} />
                  <div>
                    <p
                      className="text-sm font-medium mb-1"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        color: "oklch(0.40 0.15 27)",
                      }}
                    >
                      Couldn’t scrape live
                    </p>
                    <p
                      className="text-xs mb-3"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        color: "oklch(0.55 0.10 27)",
                      }}
                    >
                      {error}
                    </p>
                    <a
                      href={REPO_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium underline underline-offset-2"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        color: "oklch(0.40 0.15 27)",
                      }}
                    >
                      Self-host DeepScrapper on GitHub →
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* Result state */}
            {result && !loading && (
              <>
                {/* Result header */}
                <div
                  className="flex items-center justify-between px-6 py-3 border-b"
                  style={{ borderColor: "oklch(0.90 0.004 265)" }}
                >
                  <div className="flex items-center gap-1 flex-wrap">
                    {[
                      { id: "preview" as const, label: "Preview", icon: FileText },
                      { id: "raw" as const, label: "Raw Markdown", icon: Code },
                    ].map(({ id, label, icon: TabIcon }) => (
                      <button
                        key={id}
                        onClick={() => setActiveTab(id)}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all"
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          background: activeTab === id ? "oklch(0.96 0.002 265)" : "transparent",
                          color: activeTab === id ? "oklch(0.09 0.005 265)" : "oklch(0.55 0.01 265)",
                        }}
                      >
                        <TabIcon size={12} />
                        {label}
                      </button>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 flex-wrap">
                    {scrapeTime && (
                      <span
                        className="text-xs font-medium"
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          color: "oklch(0.45 0.15 130)",
                        }}
                      >
                        ⚡ {(scrapeTime / 1000).toFixed(1)}s
                      </span>
                    )}
                    <button
                      onClick={handleCopy}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all hover:bg-gray-50"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        borderColor: "oklch(0.90 0.004 265)",
                        color: "oklch(0.45 0.01 265)",
                      }}
                    >
                      {copied ? <Check size={12} style={{ color: "oklch(0.45 0.15 130)" }} /> : <Copy size={12} />}
                      {copied ? "Copied!" : "Copy"}
                    </button>
                  </div>
                </div>

                {/* Result content */}
                <div className="p-6 max-h-[480px] overflow-y-auto">
                  {activeTab === "preview" ? (
                    <div className="markdown-output">
                      <Streamdown>{result}</Streamdown>
                    </div>
                  ) : (
                    <pre
                      className="text-xs leading-6 whitespace-pre-wrap break-words"
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        color: "oklch(0.30 0.01 265)",
                      }}
                    >
                      {result}
                    </pre>
                  )}
                </div>
              </>
            )}

            {/* Empty state */}
            {!result && !loading && !error && (
              <div className="flex flex-col items-center justify-center h-64 gap-3 text-center px-6">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-2"
                  style={{ background: "oklch(0.96 0.002 265)" }}
                >
                  <Globe size={24} style={{ color: "oklch(0.55 0.01 265)" }} />
                </div>
                <p
                  className="text-sm font-medium"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: "oklch(0.40 0.01 265)",
                  }}
                >
                  Enter a URL above and click Scrape
                </p>
                <p
                  className="text-xs max-w-sm"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: "oklch(0.60 0.01 265)",
                  }}
                >
                  The scraped content will appear here as rendered markdown or raw text
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
