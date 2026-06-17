export default function Hero() {
  return (
    <section className="bg-[#0a0e1a] text-white pt-32 pb-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-8">
          <span className="font-mono text-xs text-[#2a5bd7] border border-[#2a5bd7]/40 bg-[#2a5bd7]/10 px-3 py-1.5 rounded">
            Permission-Aware RAG · Open source core · Self-hostable
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
          Your AI feature can leak one{" "}
          <span className="text-[#2a5bd7]">customer&apos;s data</span>{" "}
          to another
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed mb-10">
          RAGAuth enforces permissions before vectors are scored — not after.
          Forbidden documents are never retrieved, never in the prompt,
          impossible to leak.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
          <a
            href="#waitlist"
            aria-label="Join the RAGAuth waitlist"
            className="bg-[#2a5bd7] hover:bg-[#1a40a8] text-white font-semibold px-8 py-3.5 rounded transition-colors text-base w-full sm:w-auto text-center"
          >
            Join the waitlist
          </a>
          <a
            href="https://github.com/authorizerdev/authorizer"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View RAGAuth on GitHub (opens in new tab)"
            className="border border-white/20 hover:border-white/40 text-white/80 hover:text-white font-medium px-8 py-3.5 rounded transition-colors text-base w-full sm:w-auto text-center"
          >
            View on GitHub →
          </a>
        </div>

        {/* Pricing note */}
        <p className="font-mono text-xs text-white/40">
          Starting at $0 self-hosted. Managed cloud from $149/mo. No per-user pricing.
        </p>
      </div>
    </section>
  );
}
