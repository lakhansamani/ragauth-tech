import FadeIn from "./FadeIn";

const faqs = [
  {
    q: "What is RAGAuth?",
    a: "RAGAuth is a permission-aware RAG (Retrieval-Augmented Generation) security layer that enforces document-level access control before documents are retrieved from the vector store. It resolves user permissions from a JWT at query time, builds an allow-list of permitted document IDs, and injects that filter into the vector retrieval step — so forbidden documents are never scored, never retrieved, and never in the LLM prompt.",
  },
  {
    q: "What is the difference between pre-filter and post-filter RAG?",
    a: "Post-filter RAG retrieves all matching documents first, then removes the ones the user should not see. The problem: forbidden documents already influenced the ranking, and post-filtering is easy to bypass or misconfigure. Pre-filter RAG — what RAGAuth does — applies the permission allow-list before graph traversal begins. Forbidden documents are never candidates. There is no retrieval step where a leak can occur.",
  },
  {
    q: "How does RAGAuth prevent AI data leaks in multi-tenant applications?",
    a: "Every query arrives with a JWT. RAGAuth extracts the user identity, tenant ID, roles, and team memberships from that token, then resolves the exact set of documents this user is permitted to see via the permission engine. That allow-list becomes a payload filter on the vector search. Only matching, permitted documents are traversed. The LLM receives only allowed chunks — it has no mechanism to reference documents it never read.",
  },
  {
    q: "Does RAGAuth work with multi-tenant SaaS applications?",
    a: "Yes. Multi-tenant isolation is the primary use case. Tenant ID is extracted from the JWT and used to scope the allow-list resolution, making cross-tenant document retrieval architecturally impossible rather than just policy-enforced at the application layer.",
  },
  {
    q: "Which vector databases does RAGAuth support?",
    a: "RAGAuth works with Pinecone, Weaviate, Qdrant, pgvector, Chroma, Milvus, Redis Vector, MongoDB Atlas, Elasticsearch, and Azure AI Search. The allow-list filter is applied as a native payload or metadata filter on whichever vector store you use — no changes to your indexing pipeline required.",
  },
  {
    q: "How much does RAGAuth cost?",
    a: "The managed Pro plan is $199/month per project — not per user. There is no per-seat pricing. An early-access founding offer locks in $129/month for the first 3 customers. Enterprise pricing is custom and includes dedicated infrastructure, VPC deployment, SSO, and compliance documentation.",
  },
  {
    q: "Does RAGAuth work with any LLM?",
    a: "Yes. RAGAuth operates at the retrieval layer, before the LLM call. It is LLM-agnostic — it works with OpenAI, Anthropic, Ollama, local models, or any other inference provider. The Pro plan supports BYO LLM so you bring your own API key and model choice.",
  },
  {
    q: "How does RAGAuth handle permission revocation?",
    a: "Because permissions are resolved at query time, revocation is instant. Removing a user's access to a document in the permission engine immediately takes effect on the next query — no re-indexing, no cache invalidation, no async job required. This is a fundamental advantage over systems that bake permissions into index metadata at write time.",
  },
  {
    q: "Is RAGAuth suitable for HIPAA or GDPR compliance?",
    a: "RAGAuth is designed with compliance in mind. The Pro and Enterprise plans include audit log export that is EU AI Act Article 12 ready. The Enterprise plan adds HIPAA and GDPR audit documentation, VPC deployment, and dedicated infrastructure. RAGAuth's pre-filter architecture also satisfies the data minimisation principle — the LLM only ever processes data the user is authorised to see.",
  },
  {
    q: "Can I use RAGAuth with an existing RAG pipeline?",
    a: "Yes. RAGAuth integrates with existing pipelines. It adds a permission resolution step between your JWT-authenticated request and your vector retrieval call. You do not need to rebuild your indexing or embedding pipeline — you add the allow-list filter to the retrieval query. Works with LangChain, LlamaIndex, and direct vector DB SDK calls.",
  },
  {
    q: "How does RAGAuth work with OpenAI APIs and ChatGPT?",
    a: "OpenAI's file_search (vector store) API has no built-in attribute-based access control — it treats all files in a vector store as equally accessible. RAGAuth resolves the user's JWT permissions and derives the list of allowed file IDs before calling the OpenAI API, then passes those IDs as a filter to the vector search. This means OpenAI only searches within the files the user is actually permitted to see.",
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
    <section id="faq" className="py-24 px-4 sm:px-6 bg-[#F8FAFC]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-4xl mx-auto">
        <FadeIn className="text-center mb-14">
          <p className="font-mono text-[11px] text-[#94A3B8] uppercase tracking-widest mb-4">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight mb-4">
            Common questions
          </h2>
          <p className="text-base text-[#64748B] leading-relaxed max-w-xl mx-auto">
            About RAGAuth, permission-aware RAG, and AI data security for multi-tenant applications.
          </p>
        </FadeIn>

        <dl className="divide-y divide-[#E2E8F0]">
          {faqs.map(({ q, a }, i) => (
            <FadeIn key={q} delay={i * 25}>
              <div className="py-8 grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-12">
                <dt className="md:col-span-2 font-semibold text-[#0F172A] text-[15px] leading-snug">
                  {q}
                </dt>
                <dd className="md:col-span-3 text-[#475569] text-sm leading-relaxed">{a}</dd>
              </div>
            </FadeIn>
          ))}
        </dl>
      </div>
    </section>
  );
}
