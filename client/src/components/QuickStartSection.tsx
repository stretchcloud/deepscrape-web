/*
 * QuickStartSection — DeepScrapper
 * Style: hydranode.ai — light gray background, serif headline, numbered steps
 * SaaS positioning: "use our hosted API" — no self-hosting instructions
 */
import { useState } from "react";
import { Copy, Check, ArrowRight } from "lucide-react";
import { toast } from "sonner";

const steps = [
  {
    number: "01",
    title: "No signup required",
    description:
      "DeepScrapper is completely free to use. No account, no API key, no credit card. Just start scraping.",
    code: `# That's it. No setup needed.
# Just make a POST request to our API.`,
  },
  {
    number: "02",
    title: "Make your first request",
    description: "Send a POST request with the URL you want to scrape.",
    code: `curl -X POST https://api.deepscrapper.dev/api/scrape \\
  -H "Content-Type: application/json" \\
  -d '{"url": "https://example.com"}'`,
  },
  {
    number: "03",
    title: "Get clean markdown output",
    description:
      "Receive clean, structured markdown ready for AI pipelines, RAG systems, or any data workflow.",
    code: `{
  "success": true,
  "content": "# Example Domain\\n\\nThis domain...",
  "metadata": {
    "title": "Example Domain",
    "words": 247
  }
}`,
  },
  {
    number: "04",
    title: "Scale with batch & crawl",
    description:
      "Process hundreds of URLs at once or crawl entire websites with our batch and crawl endpoints.",
    code: `# Batch scrape multiple URLs
curl -X POST https://api.deepscrapper.dev/api/batch/scrape \\
  -H "Content-Type: application/json" \\
  -d '{
    "urls": ["https://example.com", "https://example.org"],
    "concurrency": 5
  }'`,
  },
];

function StepCard({
  step,
  index,
}: {
  step: (typeof steps)[0];
  index: number;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(step.code);
    setCopied(true);
    toast.success("Copied!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex gap-5">
      {/* Step number + connector */}
      <div className="flex flex-col items-center">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
          style={{
            fontFamily: "'Inter', sans-serif",
            background: "oklch(0.09 0.005 265)",
            color: "oklch(1 0 0)",
          }}
        >
          {step.number}
        </div>
        {index < steps.length - 1 && (
          <div
            className="w-px flex-1 mt-2"
            style={{ background: "oklch(0.88 0.004 265)" }}
          />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pb-10">
        <h3
          className="text-base font-semibold mb-1"
          style={{
            fontFamily: "'Inter', sans-serif",
            color: "oklch(0.09 0.005 265)",
          }}
        >
          {step.title}
        </h3>
        <p
          className="text-sm mb-4"
          style={{
            fontFamily: "'Inter', sans-serif",
            color: "oklch(0.50 0.01 265)",
          }}
        >
          {step.description}
        </p>
        <div className="relative">
          <button
            onClick={handleCopy}
            className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs border transition-all hover:bg-gray-50 z-10"
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
          </button>
          <div className="code-block">
            <pre className="whitespace-pre-wrap break-words text-xs leading-6 pr-10">
              {step.code}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function QuickStartSection() {
  return (
    <section
      className="py-24 lg:py-32"
      style={{ background: "oklch(0.97 0.002 265)" }}
    >
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Header */}
          <div className="lg:sticky lg:top-24">
            <p className="section-label mb-4">Quick Start</p>
            <h2
              className="headline-serif mb-4"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Up and running
              <br />
              <span className="italic-serif">in 60 seconds.</span>
            </h2>
            <p
              className="text-lg mb-8"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "oklch(0.45 0.01 265)",
                lineHeight: "1.65",
              }}
            >
              No setup. No configuration. No API key. Just send an HTTP request
              and get clean data back instantly.
            </p>

            <div className="flex flex-col gap-3 mb-8">
              {[
                "Zero configuration required",
                "Works with any HTTP client",
                "Supports Python, Node.js, cURL, and more",
                "Scales from 1 URL to millions",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <div
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: "oklch(0.55 0.17 130)" }}
                  />
                  <span
                    className="text-sm"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      color: "oklch(0.40 0.01 265)",
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <a href="#demo" className="btn-primary inline-flex items-center gap-2">
              Try the live demo
              <ArrowRight size={15} />
            </a>
          </div>

          {/* Right: Steps */}
          <div>
            {steps.map((step, i) => (
              <StepCard key={step.number} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
