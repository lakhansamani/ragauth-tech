import FadeIn from "./FadeIn";

const vectorDbs = [
  "Qdrant",
  "pgvector",
  "Pinecone",
  "Weaviate",
  "Chroma",
  "Milvus",
  "Redis Vector",
  "MongoDB Atlas",
  "Elasticsearch",
  "Azure AI Search",
];

export default function WorksWith() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-white border-b border-[#F1F5F9]">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-center text-[11px] font-mono text-[#94A3B8] uppercase tracking-widest mb-8">
            Drop in with your existing stack
          </p>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
            {vectorDbs.map((name) => (
              <span
                key={name}
                className="text-sm font-medium text-[#94A3B8] hover:text-[#2563EB] transition-colors duration-200 cursor-default select-none"
              >
                {name}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
