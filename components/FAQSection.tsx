const faqs = [
  {
    q: "What is RAGAuth?",
    a: "RAGAuth is a permission-aware RAG (Retrieval-Augmented Generation) security layer that enforces user permissions before documents are retrieved from the vector store — not after. It prevents AI features from leaking one user's data to another by building an OpenFGA-based allow-list that filters at retrieval time, so forbidden documents are never scored, never in the prompt, and impossible to expose.",
  },
  {
    q: "What is the difference between pre-filter and post-filter RAG?",
    a: "Post-filter RAG retrieves all matching documents first, then removes the ones the user shouldn't see. The problem: the forbidden documents already influenced the ranking, and post-filtering is easy to bypass or misconfigure. Pre-filter RAG — what RAGAuth does — applies the permission allow-list before graph traversal, so forbidden documents are never candidates in the first place. There is no retrieval step where a leak can occur.",
  },
  {
    q: "How does RAGAuth prevent AI data leaks?",
    a: "RAGAuth resolves a per-request allow-list from Authorizer and OpenFGA using the user's JWT. This allow-list is injected as a payload filter into the vector retrieval step before any similarity search happens. Only documents the user is explicitly permitted to see are ever traversed. The LLM receives only allowed chunks — it has no mechanism to reference documents it never read.",
  },
  {
    q: "Does RAGAuth work with multi-tenant SaaS applications?",
    a: "Yes. Multi-tenant isolation is the primary use case. Tenant ID is extracted from the JWT and used to scope the OpenFGA allow-list, making cross-tenant document retrieval architecturally impossible rather than just policy-enforced.",
  },
  {
    q: "Is RAGAuth open source?",
    a: "The core RAGAuth engine is open source under the MIT license, built on top of Authorizer (authorizer.dev). You can self-host the full stack with a single Docker Compose command. The managed cloud offering adds hosted infrastructure, connectors, and compliance tooling on top of the open-source core.",
  },
  {
    q: "How much does RAGAuth cost?",
    a: "RAGAuth starts at $0 for self-hosted deployments. The managed Pro plan is $149/month per project — not per user. There is no per-seat pricing. An early-access founding offer locks in $99/month for the first 3 months. Enterprise pricing is custom and includes dedicated infrastructure and compliance documentation.",
  },
  {
    q: "Does RAGAuth work with any LLM?",
    a: "Yes. RAGAuth operates at the retrieval layer, before the LLM call. It is LLM-agnostic — it works with OpenAI, Ollama, local models, or any other inference provider. The Pro plan supports BYO LLM (bring your own LLM API key).",
  },
  {
    q: "How does RAGAuth handle permission revocation?",
    a: "Because permissions are resolved at query time from OpenFGA, revocation is instant. Removing a user's access to a document in OpenFGA immediately takes effect on the next query — no re-indexing or cache invalidation required. This is a fundamental advantage over systems that bake permissions into index metadata.",
  },
  {
    q: "Is RAGAuth suitable for HIPAA or GDPR compliance?",
    a: "RAGAuth is designed with compliance in mind. The Pro and Enterprise plans include audit log export that is EU AI Act Article 12 ready. The Enterprise plan adds HIPAA and GDPR audit documentation, VPC deployment, and dedicated infrastructure. RAGAuth's pre-filter architecture also satisfies the data minimisation principle — the LLM only ever processes data the user is authorised to see.",
  },
  {
    q: "Can I use RAGAuth if I already have an existing RAG pipeline?",
    a: "Yes. RAGAuth is designed to integrate with existing pipelines. It adds a permission resolution step between your JWT-authenticated request and your vector retrieval call. You do not need to rebuild your indexing or embedding pipeline — you add the allow-list filter to the retrieval query.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export default function FAQSection() {
  return (
    <section id="faq" className="py-24 px-4 sm:px-6 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-4xl mx-auto">
        <div className="mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0f1117] tracking-tight mb-4">
            Frequently asked questions
          </h2>
          <p className="text-base text-[#555]">
            Common questions about RAGAuth, permission-aware RAG, and AI data security.
          </p>
        </div>

        <dl className="divide-y divide-[#e5e7eb]">
          {faqs.map(({ q, a }) => (
            <div key={q} className="py-8 grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-12">
              <dt className="md:col-span-2 font-semibold text-[#0f1117] text-base leading-snug">
                {q}
              </dt>
              <dd className="md:col-span-3 text-[#555] text-sm leading-relaxed">{a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
