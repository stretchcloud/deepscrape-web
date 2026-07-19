/*
 * TrustBar — DeepScrapper
 * Style: hydranode.ai — light gray background, "Built with" label, tech stack pills
 */

const techStack = [
  { name: "TypeScript", icon: "TS" },
  { name: "Playwright", icon: "🎭" },
  { name: "Docker", icon: "🐳" },
  { name: "Redis", icon: "⚡" },
  { name: "OpenAI", icon: "🤖" },
  { name: "Ollama", icon: "🦙" },
  { name: "BullMQ", icon: "📬" },
  { name: "Express", icon: "🚀" },
];

export default function TrustBar() {
  return (
    <div
      className="py-5 border-y"
      style={{
        background: "oklch(0.97 0.002 265)",
        borderColor: "oklch(0.90 0.004 265)",
      }}
    >
      <div className="container">
        <div className="flex flex-col sm:flex-row items-center gap-5">
          <span
            className="text-xs whitespace-nowrap flex-shrink-0"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "oklch(0.60 0.01 265)",
            }}
          >
            Built with
          </span>
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border"
                style={{
                  background: "oklch(1 0 0)",
                  borderColor: "oklch(0.90 0.004 265)",
                }}
              >
                <span className="text-sm leading-none">{tech.icon}</span>
                <span
                  className="text-xs"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: "oklch(0.40 0.01 265)",
                  }}
                >
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
          <div className="sm:ml-auto flex items-center gap-2 flex-shrink-0">
            <div
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: "oklch(0.55 0.17 130)" }}
            />
            <span
              className="text-xs font-medium"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "oklch(0.45 0.15 130)",
              }}
            >
              Apache 2.0 License
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
