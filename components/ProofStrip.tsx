const stats = [
  "Enterprise RAG market $1.94B → $9.86B by 2030",
  "73% of enterprises cite security as #1 AI blocker",
  "Glean: $7.2B valuation, $300M ARR — proof this market is real",
  "EU AI Act Article 12 requires audit trails from August 2026",
];

export default function ProofStrip() {
  return (
    <section className="bg-[#060810] border-y border-white/10 py-6 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex items-start gap-3 py-2 sm:py-0 border-b sm:border-b-0 sm:border-r border-white/10 last:border-0 sm:pr-4 sm:last:pr-0"
            >
              <span className="font-mono text-[#2a5bd7] text-xs mt-0.5 shrink-0">→</span>
              <p className="text-white/60 text-sm leading-snug">{stat}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
