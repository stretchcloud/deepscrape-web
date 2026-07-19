/*
 * ApiSection — DeepScrapper
 * Style: hydranode.ai — white background, serif headline, code blocks with light gray bg
 * Shows API endpoints with curl/Python/Node.js examples
 */
import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { toast } from "sonner";

type Tab = "curl" | "python" | "node";

const endpoints = [
  { method: "POST", path: "/api/scrape", description: "Scrape a single URL to markdown/JSON/text" },
  { method: "POST", path: "/api/extract-schema", description: "Extract structured data using JSON Schema" },
  { method: "POST", path: "/api/summarize", description: "Scrape and generate an AI-powered summary" },
  { method: "POST", path: "/api/batch/scrape", description: "Process multiple URLs concurrently" },
  { method: "GET", path: "/api/batch/scrape/:id/status", description: "Check batch processing status" },
  { method: "GET", path: "/api/batch/scrape/:id/download/zip", description: "Download batch results as ZIP" },
  { method: "POST", path: "/api/crawl", description: "Start a multi-page web crawl" },
  { method: "GET", path: "/api/crawl/:id", description: "Get crawl status and exported files" },
  { method: "DELETE", path: "/api/cache", description: "Clear the scraping cache" },
];

const codeExamples: Record<Tab, string> = {
  curl: `curl -X POST https://api.deepscrapper.dev/api/scrape \\
  -H "Content-Type: application/json" \\
  -d '{
    "url": "https://example.com",
    "options": {
      "extractorFormat": "markdown",
      "waitForTimeout": 3000
    }
  }'`,
  python: `import requests

response = requests.post(
    "https://api.deepscrapper.dev/api/scrape",
    json={
        "url": "https://example.com",
        "options": {
            "extractorFormat": "markdown",
            "waitForTimeout": 3000
        }
    }
)

data = response.json()
print(data["content"])  # Clean markdown output`,
  node: `const response = await fetch(
  "https://api.deepscrapper.dev/api/scrape",
  {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      url: "https://example.com",
      options: {
        extractorFormat: "markdown",
        waitForTimeout: 3000
      }
    })
  }
);

const data = await response.json();
console.log(data.content); // Clean markdown output`,
};

const tabLabels: { id: Tab; label: string }[] = [
  { id: "curl", label: "cURL" },
  { id: "python", label: "Python" },
  { id: "node", label: "Node.js" },
];

const methodColors: Record<string, { bg: string; text: string }> = {
  GET: { bg: "oklch(0.92 0.06 220)", text: "oklch(0.30 0.12 220)" },
  POST: { bg: "oklch(0.92 0.06 130)", text: "oklch(0.30 0.12 130)" },
  DELETE: { bg: "oklch(0.94 0.06 27)", text: "oklch(0.40 0.15 27)" },
};

function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    toast.success("Code copied!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative">
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs border transition-all hover:bg-gray-100 z-10"
        style={{
          fontFamily: "'Inter', sans-serif",
          borderColor: "oklch(0.88 0.004 265)",
          color: "oklch(0.45 0.01 265)",
          background: "oklch(1 0 0)",
        }}
      >
        {copied ? (
          <Check size={11} style={{ color: "oklch(0.45 0.15 130)" }} />
        ) : (
          <Copy size={11} />
        )}
        {copied ? "Copied!" : "Copy"}
      </button>
      <div className="code-block">
        <pre className="whitespace-pre-wrap break-words text-xs leading-6 pr-16">
          {code}
        </pre>
      </div>
    </div>
  );
}

export default function ApiSection() {
  const [activeTab, setActiveTab] = useState<Tab>("curl");

  return (
    <section
      id="api"
      className="py-24 lg:py-32"
      style={{ background: "oklch(1 0 0)" }}
    >
      <div className="container">
        {/* Section header */}
        <div className="mb-14">
          <p className="section-label mb-4">API Reference</p>
          <div className="max-w-2xl">
            <h2
              className="headline-serif mb-4"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Simple API.
              <br />
              <span className="italic-serif">Powerful results.</span>
            </h2>
            <p
              className="text-lg"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "oklch(0.45 0.01 265)",
                lineHeight: "1.65",
              }}
            >
              A clean REST API that integrates in minutes. No SDK required — just HTTP requests.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left: Endpoints list */}
          <div>
            <h3
              className="text-xs font-semibold mb-4 uppercase tracking-wider"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "oklch(0.55 0.01 265)",
              }}
            >
              Endpoints
            </h3>
            <div className="flex flex-col gap-2">
              {endpoints.map((ep) => {
                const colors = methodColors[ep.method] || methodColors.GET;
                return (
                  <div
                    key={ep.path}
                    className="flex items-start gap-3 p-4 rounded-xl border transition-all hover:shadow-sm"
                    style={{
                      background: "oklch(1 0 0)",
                      borderColor: "oklch(0.90 0.004 265)",
                    }}
                  >
                    <span
                      className="text-xs font-bold px-2 py-0.5 rounded-md flex-shrink-0 mt-0.5 min-w-[3rem] text-center"
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        background: colors.bg,
                        color: colors.text,
                      }}
                    >
                      {ep.method}
                    </span>
                    <div className="min-w-0">
                      <code
                        className="text-sm font-medium block mb-0.5 break-all"
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          color: "oklch(0.09 0.005 265)",
                        }}
                      >
                        {ep.path}
                      </code>
                      <p
                        className="text-xs"
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          color: "oklch(0.55 0.01 265)",
                        }}
                      >
                        {ep.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Code examples */}
          <div className="lg:sticky lg:top-24">
            <div className="flex items-center gap-1 mb-4 flex-wrap">
              {tabLabels.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className="px-4 py-2 rounded-lg text-sm font-medium transition-all"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    background:
                      activeTab === id ? "oklch(0.09 0.005 265)" : "transparent",
                    color:
                      activeTab === id ? "oklch(1 0 0)" : "oklch(0.45 0.01 265)",
                    border:
                      activeTab === id
                        ? "none"
                        : "1px solid oklch(0.90 0.004 265)",
                  }}
                >
                  {label}
                </button>
              ))}
            </div>

            <CodeBlock code={codeExamples[activeTab]} />

            {/* Response example */}
            <div className="mt-4">
              <p
                className="text-xs font-medium mb-2 uppercase tracking-wider"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "oklch(0.55 0.01 265)",
                }}
              >
                Response
              </p>
              <div className="code-block">
                <pre className="whitespace-pre-wrap text-xs leading-6">
{`{
  "success": true,
  "url": "https://example.com",
  "content": "# Example Domain\\n\\nThis domain...",
  "metadata": {
    "title": "Example Domain",
    "words": 247,
    "links": 1
  }
}`}
                </pre>
              </div>
            </div>

            <div className="mt-4">
              <a
                href="https://github.com/stretchcloud/deepscrape"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium underline transition-colors hover:text-black"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "oklch(0.45 0.01 265)",
                  textDecorationColor: "oklch(0.77 0.20 130)",
                }}
              >
                View full API documentation on GitHub →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
