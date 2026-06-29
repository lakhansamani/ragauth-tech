import FadeIn from "./FadeIn";

const cases = [
  {
    tag: "Multi-tenant SaaS",
    headline: "Company A's docs appear in Company B's answers",
    problem: "Your single RAG pipeline serves all tenants. Without isolation, a similarity search doesn't know which tenant the user belongs to.",
    solution: "Tenant ID from the user's JWT scopes retrieval. Cross-tenant access is architecturally impossible.",
  },
  {
    tag: "OpenAI & ChatGPT APIs",
    headline: "OpenAI file_search has no access control — yours needs it",
    problem: "An engineer asks your internal GPT about salaries. OpenAI's similarity search returns HR documents because it has no permission layer.",
    solution: "RAGAuth resolves the user's permissions and passes only allowed file IDs to OpenAI's vector search. Forbidden documents are never candidates.",
  },
  {
    tag: "Healthcare platforms",
    headline: "AI returns another patient's records",
    problem: "A patient asks about their medications and the AI returns another patient's records. HIPAA violation, immediately.",
    solution: "Patient identity from the JWT maps to their records only. The model never sees another patient's data.",
  },
  {
    tag: "Legal and compliance",
    headline: "Attorney-client privilege violated by a similarity score",
    problem: "Matter documents from Client A surface in a lawyer's search for Client B.",
    solution: "Matter-level permissions are enforced at retrieval. Cross-matter access never happens.",
  },
  {
    tag: "Internal knowledge assistants",
    headline: "Engineers get board-level financial projections",
    problem: "An engineer asks the AI about company direction and gets board-level docs they aren't cleared for.",
    solution: "Role memberships determine the allow-list. Finance docs never appear in engineering search results.",
  },
  {
    tag: "ERP and CRM AI",
    headline: "A sales rep sees confidential enterprise deals",
    problem: "Row-level security in your database doesn't travel to your vector store.",
    solution: "Database ACLs are mirrored into permissions at index time. The allow-list reflects exactly what the user sees in the source system.",
  },
];

export default function UseCases() {
  return (
    <section id="use-cases" className="py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <FadeIn className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight mb-4">
            Any app where users must see different data.
          </h2>
          <p className="text-lg text-[#64748B] leading-relaxed max-w-2xl mx-auto">
            If your AI product serves more than one user, you have this problem.
          </p>
        </FadeIn>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E2E8F0]">
          {cases.map((c, i) => (
            <FadeIn
              key={i}
              delay={i * 60}
              className="bg-white p-8 flex flex-col gap-4 hover:bg-[#fafbff] transition-colors duration-200"
            >
              <span className="text-[11px] font-mono text-[#2563EB] border border-[#2563EB]/25 bg-[#2563EB]/5 px-2.5 py-1 rounded-full w-fit tracking-wide">
                {c.tag}
              </span>
              <h3 className="font-semibold text-[#0F172A] text-[15px] leading-snug">{c.headline}</h3>
              <div className="space-y-3 text-sm leading-relaxed">
                <div className="flex gap-2.5">
                  <svg className="w-4 h-4 text-red-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <p className="text-[#64748B]">{c.problem}</p>
                </div>
                <div className="flex gap-2.5">
                  <svg className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-[#0F172A]">{c.solution}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
