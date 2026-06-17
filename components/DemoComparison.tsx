export default function DemoComparison() {
  return (
    <section className="py-24 px-4 sm:px-6 bg-[#f7f8fa]">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0f1117] tracking-tight mb-4">
            Same question. Different users. Different answers.
          </h2>
          <p className="text-base text-[#555] leading-relaxed">
            Not &ldquo;access denied.&rdquo; The document simply doesn&apos;t exist in their world — never retrieved, never in the prompt, impossible to leak.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Denied card */}
          <div className="bg-white border border-red-200 rounded-lg overflow-hidden">
            <div className="bg-red-50 border-b border-red-200 px-6 py-3 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-red-400 shrink-0" />
              <span className="font-mono text-xs text-red-600 font-medium">
                alice@acme.com · role: engineering
              </span>
            </div>
            <div className="px-6 py-6 space-y-4">
              <div>
                <p className="text-xs text-[#888] font-mono mb-1.5 uppercase tracking-wider">Query</p>
                <p className="italic text-[#333] text-sm leading-relaxed">
                  &ldquo;What was our Q4 revenue and cash runway?&rdquo;
                </p>
              </div>
              <div>
                <p className="text-xs text-[#888] font-mono mb-1.5 uppercase tracking-wider">Response</p>
                <div className="bg-red-50 border border-red-200 rounded px-4 py-3">
                  <p className="font-mono text-sm text-red-700 leading-relaxed">
                    I don&apos;t have enough information in the knowledge base to answer this question.
                  </p>
                </div>
              </div>
              <div className="pt-1">
                <p className="font-mono text-xs text-red-500">
                  ✗ 0 finance documents retrieved · allow-list empty
                </p>
              </div>
            </div>
          </div>

          {/* Allowed card */}
          <div className="bg-white border border-green-200 rounded-lg overflow-hidden">
            <div className="bg-green-50 border-b border-green-200 px-6 py-3 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-green-400 shrink-0" />
              <span className="font-mono text-xs text-green-700 font-medium">
                carol@acme.com · role: finance
              </span>
            </div>
            <div className="px-6 py-6 space-y-4">
              <div>
                <p className="text-xs text-[#888] font-mono mb-1.5 uppercase tracking-wider">Query</p>
                <p className="italic text-[#333] text-sm leading-relaxed">
                  &ldquo;What was our Q4 revenue and cash runway?&rdquo;
                </p>
              </div>
              <div>
                <p className="text-xs text-[#888] font-mono mb-1.5 uppercase tracking-wider">Response</p>
                <div className="bg-green-50 border border-green-200 rounded px-4 py-3">
                  <p className="font-mono text-sm text-green-800 leading-relaxed">
                    Q4 revenue was $14.2M with a monthly burn of $1.1M — a 26-month runway at current pace.
                  </p>
                </div>
              </div>
              <div className="pt-1">
                <p className="font-mono text-xs text-green-600">
                  ✓ 8 finance documents retrieved · full context returned
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
