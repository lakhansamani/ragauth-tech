type Cell = string | { text: string; highlight?: boolean; yes?: boolean; no?: boolean; partial?: boolean };

const rows: { feature: string; glean: Cell; onyx: Cell; azure: Cell; ragauth: Cell }[] = [
  {
    feature: "Pre-filter at vector layer (not post-filter)",
    glean: { text: "✗", no: true },
    onyx: { text: "✗", no: true },
    azure: { text: "✗", no: true },
    ragauth: { text: "✓", yes: true, highlight: true },
  },
  {
    feature: "Relationship-based access control (OpenFGA)",
    glean: { text: "✗", no: true },
    onyx: { text: "✗", no: true },
    azure: { text: "✗", no: true },
    ragauth: { text: "✓", yes: true },
  },
  {
    feature: "Works for multi-tenant public apps",
    glean: { text: "✗", no: true },
    onyx: { text: "✗", no: true },
    azure: { text: "Partial", partial: true },
    ragauth: { text: "✓", yes: true },
  },
  {
    feature: "ERP / database connectors",
    glean: { text: "✗", no: true },
    onyx: { text: "✗", no: true },
    azure: { text: "✗", no: true },
    ragauth: { text: "✓ roadmap", yes: true },
  },
  {
    feature: "Fully self-hostable",
    glean: { text: "✗", no: true },
    onyx: { text: "✓", yes: true },
    azure: { text: "✗", no: true },
    ragauth: { text: "✓", yes: true },
  },
  {
    feature: "Instant revocation without re-indexing",
    glean: { text: "✗", no: true },
    onyx: { text: "✗", no: true },
    azure: { text: "✗", no: true },
    ragauth: { text: "✓", yes: true },
  },
  {
    feature: "Open source core",
    glean: { text: "✗", no: true },
    onyx: { text: "✓", yes: true },
    azure: { text: "✗", no: true },
    ragauth: { text: "✓", yes: true },
  },
  {
    feature: "Pricing",
    glean: "$50+/user/mo · $60K min",
    onyx: "Free self-host",
    azure: "Usage-based",
    ragauth: { text: "From $0 · no per-user fees", highlight: true },
  },
];

function renderCell(cell: Cell, isRagAuth = false) {
  if (typeof cell === "string") {
    return (
      <span className={`text-sm ${isRagAuth ? "text-[#2a5bd7] font-medium" : "text-[#555]"}`}>
        {cell}
      </span>
    );
  }
  const cls = cell.yes
    ? "text-green-600 font-medium"
    : cell.no
    ? "text-red-400"
    : cell.partial
    ? "text-yellow-600"
    : isRagAuth
    ? "text-[#2a5bd7] font-medium"
    : "text-[#555]";
  return <span className={`text-sm ${cls}`}>{cell.text}</span>;
}

export default function CompetitorTable() {
  return (
    <section className="py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0f1117] tracking-tight mb-4">
            The only pre-filter RAG solution that&apos;s self-hostable
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-[#e5e7eb]">
                <th className="text-left py-4 pr-6 font-mono text-xs text-[#888] uppercase tracking-wider w-1/3">Feature</th>
                <th className="text-center py-4 px-4 font-mono text-xs text-[#888] uppercase tracking-wider">Glean</th>
                <th className="text-center py-4 px-4 font-mono text-xs text-[#888] uppercase tracking-wider">Onyx (OSS)</th>
                <th className="text-center py-4 px-4 font-mono text-xs text-[#888] uppercase tracking-wider">Azure AI Search</th>
                <th className="text-center py-4 px-4 font-mono text-xs text-[#2a5bd7] uppercase tracking-wider font-semibold">RAGAuth</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => {
                const isHighlight =
                  typeof row.ragauth !== "string" && (row.ragauth as { highlight?: boolean }).highlight;
                return (
                  <tr
                    key={i}
                    className={`border-b border-[#f0f0f0] ${isHighlight ? "bg-[#2a5bd7]/5" : "hover:bg-[#f9f9f9]"} transition-colors`}
                  >
                    <td className="py-4 pr-6 text-[#333] leading-snug">{row.feature}</td>
                    <td className="py-4 px-4 text-center">{renderCell(row.glean)}</td>
                    <td className="py-4 px-4 text-center">{renderCell(row.onyx)}</td>
                    <td className="py-4 px-4 text-center">{renderCell(row.azure)}</td>
                    <td className="py-4 px-4 text-center">{renderCell(row.ragauth, true)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
