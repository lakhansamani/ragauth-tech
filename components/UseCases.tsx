const cases = [
  {
    tag: "Multi-tenant SaaS",
    headline: "One RAG pipeline, zero tenant isolation",
    problem: "Company A's documents appear in Company B's AI answers.",
    solution: "Tenant ID from JWT scopes retrieval. Cross-tenant access is architecturally impossible.",
  },
  {
    tag: "Healthcare platforms",
    headline: "AI returns another patient's records",
    problem: "A patient asks about their medications and the AI returns another patient's records. HIPAA violation.",
    solution: "Patient identity from JWT maps to their records only. The model never sees another patient's data.",
  },
  {
    tag: "ERP and database AI",
    headline: "Row-level security doesn't travel to the vector store",
    problem: "A sales rep asks about pipeline and sees confidential enterprise deals.",
    solution: "Database ACLs mirrored into OpenFGA tuples at index time. The allow-list reflects exactly what the user sees in the source system.",
  },
  {
    tag: "Legal and compliance",
    headline: "Attorney-client privilege violated by a similarity score",
    problem: "Matter documents from Client A surface in a lawyer's search for Client B.",
    solution: "Matter-level permissions enforced at retrieval. Cross-matter retrieval never happens.",
  },
  {
    tag: "Marketplaces",
    headline: "Seller A sees Seller B's confidential margin data",
    problem: "Seller A asks the AI about pricing strategy and gets Seller B's confidential margin data in context.",
    solution: "Seller identity scopes retrieval to their own catalog. Competitor data is never a search candidate.",
  },
  {
    tag: "Internal knowledge assistants",
    headline: "Engineers get board-level financial projections",
    problem: "An engineer asks the AI about company direction and gets board-level financial projections they aren't cleared for.",
    solution: "Team and role memberships in OpenFGA determine the allow-list. Finance docs never appear in engineering search results.",
  },
];

export default function UseCases() {
  return (
    <section id="use-cases" className="py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0f1117] tracking-tight mb-4">
            Not just for internal tools.
          </h2>
          <p className="text-lg text-[#444] leading-relaxed">
            For any app where users must see different data.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#e5e7eb]">
          {cases.map((c, i) => (
            <div key={i} className="bg-white p-8 flex flex-col gap-4">
              <span className="font-mono text-xs text-[#2a5bd7] border border-[#2a5bd7]/30 bg-[#2a5bd7]/5 px-2.5 py-1 rounded w-fit">
                {c.tag}
              </span>
              <h3 className="font-semibold text-[#0f1117] text-base leading-snug">{c.headline}</h3>
              <div className="space-y-3 text-sm leading-relaxed">
                <div className="flex gap-2">
                  <span className="text-red-500 shrink-0 mt-0.5">✗</span>
                  <p className="text-[#555]">{c.problem}</p>
                </div>
                <div className="flex gap-2">
                  <span className="text-[#2a5bd7] shrink-0 mt-0.5">✓</span>
                  <p className="text-[#333]">{c.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
