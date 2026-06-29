const vectorDbs = [
  "Qdrant", "pgvector", "Pinecone", "Weaviate", "Chroma",
  "Milvus", "Redis Vector", "MongoDB Atlas", "Elasticsearch", "Azure AI Search",
];

const stats = [
  {
    value: "77%",
    label: "of businesses experienced an AI security incident in 2024",
    source: "https://www.cyberhaven.com/resources/report/2025-ai-adoption-risk-report",
  },
  {
    value: "Aug 2026",
    label: "EU AI Act Article 12 — AI audit trails required for high-risk AI",
    source: "https://artificialintelligenceact.eu/article/12/",
  },
  {
    value: "$9.86B",
    label: "RAG market forecast by 2030",
    source: "https://www.marketsandmarkets.com/PressReleases/retrieval-augmented-generation-rag.asp",
  },
  {
    value: "0",
    label: "forbidden documents reach your LLM prompt",
    source: null,
  },
];

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-[#EFF6FF] to-white min-h-[calc(100vh-4rem)] flex flex-col px-4 sm:px-6">
      {/* Main centered content */}
      <div className="flex-1 flex items-center">
        <div className="max-w-4xl mx-auto text-center w-full py-16">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-8">
            <span className="text-[11px] font-mono text-[#2563EB] border border-[#2563EB]/25 bg-[#2563EB]/8 px-3 py-1.5 rounded-full tracking-wide">
              Permission-aware RAG security · Multi-tenant AI
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] font-bold tracking-tight leading-[1.1] text-[#0F172A] mb-6">
            Your AI feature can leak one{" "}
            <span className="text-[#2563EB]">customer&apos;s data</span>{" "}
            to another
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-[#475569] max-w-2xl mx-auto leading-relaxed mb-10">
            RAGAuth sits between your app and your vector database.
            Before any document is searched, we check if the user is allowed to see it.
            Forbidden documents are never candidates — not post-filtered, never there.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-8">
            <a
              href="mailto:lakhan@praalaktech.com?subject=RAGAuth Demo Request"
              aria-label="Book a 30-minute RAGAuth demo"
              className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold px-8 py-3.5 rounded-lg transition-colors text-base w-full sm:w-auto text-center shadow-sm shadow-[#2563EB]/20"
            >
              Book a demo
            </a>
            <a
              href="#how-it-works"
              aria-label="See how RAGAuth works"
              className="border border-[#CBD5E1] hover:border-[#94A3B8] text-[#475569] hover:text-[#0F172A] font-medium px-8 py-3.5 rounded-lg transition-colors text-base w-full sm:w-auto text-center bg-white"
            >
              See how it works
            </a>
          </div>

          {/* Trust micro-copy */}
          <p className="text-xs text-[#94A3B8] font-mono tracking-wide">
            Per project · No per-user fees
          </p>
        </div>
      </div>

      {/* Social proof strip — anchored to bottom of hero */}
      <div className="border-t border-[#BFDBFE]">
        <div className="max-w-6xl mx-auto py-7">
          {/* Integrations */}
          <p className="text-center font-mono text-[10px] text-[#94A3B8] uppercase tracking-widest mb-4">
            Drop in with your existing stack
          </p>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 mb-6">
            {vectorDbs.map((name) => (
              <span
                key={name}
                className="text-sm font-medium text-[#94A3B8] hover:text-[#2563EB] transition-colors duration-200 cursor-default select-none"
              >
                {name}
              </span>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-[#BFDBFE] mb-6" />

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-0">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="flex flex-col gap-1 text-center lg:border-r lg:border-[#BFDBFE] lg:px-6 last:border-0"
              >
                <span className="text-xl font-bold text-[#1D4ED8] tabular-nums">{stat.value}</span>
                <p className="text-[11px] text-[#475569] leading-snug">{stat.label}</p>
                {stat.source && (
                  <a
                    href={stat.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[9px] text-[#CBD5E1] hover:text-[#2563EB] transition-colors mt-0.5"
                    aria-label="View source"
                  >
                    ↗ source
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
