const stats = [
  { value: "73%", label: "of enterprises cite security as the #1 AI blocker" },
  { value: "Aug 2026", label: "EU AI Act Article 12 requires AI audit trails" },
  { value: "$9.8B", label: "Enterprise RAG market by 2030" },
  { value: "0", label: "forbidden documents reach your LLM prompt" },
];

export default function ProofStrip() {
  return (
    <section className="bg-[#EFF6FF] border-y border-[#BFDBFE] py-8 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col gap-1 lg:border-r lg:border-[#BFDBFE] lg:px-8 last:border-0 lg:first:pl-0"
            >
              <span className="text-2xl font-bold text-[#1D4ED8] tabular-nums">{stat.value}</span>
              <p className="text-xs text-[#475569] leading-snug">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
