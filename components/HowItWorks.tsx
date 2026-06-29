import FadeIn from "./FadeIn";

const steps = [
  {
    num: "01",
    title: "Request arrives with a JWT",
    desc: "Every query is authenticated. RAGAuth reads the user identity and claims from their token.",
  },
  {
    num: "02",
    title: "RAGAuth resolves their allow-list",
    desc: "Teams, roles, tenant ID, and direct grants are evaluated. The result is the exact set of documents this user may see.",
  },
  {
    num: "03",
    title: "Allow-list applied before search",
    desc: "The allow-list becomes a filter on the vector search. Forbidden documents are excluded before scoring begins — not after.",
  },
  {
    num: "04",
    title: "LLM sees only permitted context",
    desc: "The model receives the top results from the allowed set only. It cannot reveal what it never received.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#F8FAFC] py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight mb-4">
            Pre-filter, not post-filter
          </h2>
          <p className="text-base text-[#64748B] leading-relaxed max-w-2xl mx-auto">
            Permissions are checked before the vector search runs. A forbidden document was never a candidate.
          </p>
        </FadeIn>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#E2E8F0]">
          {steps.map((step, i) => (
            <FadeIn key={step.num} delay={i * 80} className="bg-[#F8FAFC] p-8 flex flex-col gap-4">
              <span className="font-mono text-4xl font-bold text-[#2563EB]/20 leading-none select-none">
                {step.num}
              </span>
              <h3 className="font-semibold text-[#0F172A] text-[15px] leading-snug">{step.title}</h3>
              <p className="text-[#64748B] text-sm leading-relaxed">{step.desc}</p>
            </FadeIn>
          ))}
        </div>

        {/* Flow trace */}
        <FadeIn delay={400} className="mt-10 border border-[#E2E8F0] rounded-xl p-5 bg-white">
          <p className="font-mono text-[11px] text-[#94A3B8] leading-relaxed tracking-wide">
            <span className="text-[#2563EB] font-semibold">JWT</span>
            {" → "}
            <span className="text-[#475569]">permission check</span>
            {" → "}
            <span className="text-[#475569]">allow-list</span>
            {" → "}
            <span className="text-[#475569]">vector filter</span>
            {" → "}
            <span className="text-[#475569]">top-k results</span>
            {" → "}
            <span className="text-[#2563EB] font-semibold">LLM prompt</span>
          </p>
          <p className="text-[#CBD5E1] text-[11px] mt-2 font-mono">
            Forbidden documents are never scored. They don&apos;t enter the search at all.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
