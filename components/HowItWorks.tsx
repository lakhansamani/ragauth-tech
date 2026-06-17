const steps = [
  {
    num: "01",
    title: "Query with JWT",
    desc: "Every request is authenticated. No anonymous search.",
  },
  {
    num: "02",
    title: "Authorizer resolves allow-list",
    desc: "OpenFGA evaluates teams, roles, tenant ID, direct grants. Returns exact documents this user may see.",
  },
  {
    num: "03",
    title: "Allow-list applied before retrieval",
    desc: "Allow-list becomes a payload filter. Forbidden documents are excluded during graph traversal — not after scoring.",
  },
  {
    num: "04",
    title: "LLM sees only permitted context",
    desc: "Full top-k of allowed chunks. Cannot leak what it never read.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#0a0e1a] py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Pre-filter, not post-filter
          </h2>
          <p className="text-base text-white/60 leading-relaxed">
            Permissions resolved before vectors are scored. The forbidden file was never a candidate.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
          {steps.map((step) => (
            <div key={step.num} className="bg-[#0a0e1a] p-8 flex flex-col gap-4">
              <span className="font-mono text-4xl font-bold text-[#2a5bd7]/40 leading-none">
                {step.num}
              </span>
              <h3 className="font-semibold text-white text-base leading-snug">{step.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Architecture note */}
        <div className="mt-12 border border-white/10 rounded-lg p-6 bg-white/5">
          <p className="font-mono text-xs text-white/50 leading-relaxed">
            <span className="text-[#2a5bd7]">JWT</span>{" → "}
            <span className="text-white/70">Authorizer</span>{" → "}
            <span className="text-white/70">OpenFGA allow-list</span>{" → "}
            <span className="text-white/70">payload filter</span>{" → "}
            <span className="text-white/70">HNSW traversal</span>{" → "}
            <span className="text-white/70">top-k permitted chunks</span>{" → "}
            <span className="text-[#2a5bd7]">LLM prompt</span>
          </p>
          <p className="text-white/30 text-xs mt-2 font-mono">
            Forbidden documents are never scored. They don&apos;t appear in the HNSW graph traversal at all.
          </p>
        </div>
      </div>
    </section>
  );
}
