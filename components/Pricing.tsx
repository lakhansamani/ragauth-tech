const openSourceFeatures = [
  "Full permission-aware RAG engine",
  "OpenFGA relationship model",
  "Permission pre-filter at retrieval layer",
  "Docker compose — one command setup",
  "Community support (Discord)",
];

const proFeatures = [
  "Everything in open source",
  "Up to 3 projects",
  "50GB document storage *",
  "Managed Vector DB + Authorizer",
  "Google Drive + Notion connectors *",
  "Stale embedding sync (webhook-triggered) *",
  "Audit log export (EU AI Act Article 12 ready)",
  "BYO LLM (OpenAI / Ollama / local)",
  "Email support",
];

const enterpriseFeatures = [
  "Everything in Pro",
  "Unlimited projects + storage",
  "VPC / on-prem deployment",
  "SSO / SAML integration",
  "Custom SLA",
  "HIPAA / GDPR audit documentation",
  "ERP + database connectors",
  "Dedicated Slack support",
];

function Check() {
  return <span className="text-[#2a5bd7] shrink-0">✓</span>;
}

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 bg-[#f7f8fa]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0f1117] tracking-tight mb-4">
            Per project. Not per user. No surprises.
          </h2>
          <p className="text-base text-[#555] leading-relaxed">
            Pay for the product you&apos;re securing, not for every person who uses it.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {/* Open Source */}
          <div className="bg-white border border-[#e5e7eb] rounded-lg p-8 flex flex-col gap-6">
            <div>
              <p className="font-mono text-xs text-[#888] uppercase tracking-wider mb-3">Open Source</p>
              <div className="flex items-end gap-2">
                <span className="text-4xl font-bold text-[#0f1117]">$0</span>
              </div>
              <p className="text-sm text-[#666] mt-2 leading-relaxed">
                Self-host on your own infrastructure. MIT-licensed core.
              </p>
            </div>

            <ul className="flex flex-col gap-2.5">
              {openSourceFeatures.map((f) => (
                <li key={f} className="flex gap-2.5 text-sm text-[#444]">
                  <Check />
                  {f}
                </li>
              ))}
            </ul>

            <a
              href="https://github.com/authorizerdev/authorizer"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto border border-[#2a5bd7] text-[#2a5bd7] hover:bg-[#2a5bd7] hover:text-white font-medium px-5 py-3 rounded text-center text-sm transition-colors"
            >
              View on GitHub
            </a>
          </div>

          {/* Pro — featured */}
          <div className="bg-[#0a0e1a] border border-[#2a5bd7] rounded-lg p-8 flex flex-col gap-6 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="font-mono text-xs bg-[#2a5bd7] text-white px-3 py-1 rounded-full">
                Most popular
              </span>
            </div>

            <div>
              <p className="font-mono text-xs text-white/50 uppercase tracking-wider mb-3">Pro</p>
              <div className="flex items-end gap-2">
                <span className="text-4xl font-bold text-white">$149</span>
                <span className="text-white/50 text-sm mb-1">/mo</span>
              </div>
              <p className="font-mono text-xs text-[#2a5bd7] mt-1">Per project. Not per user.</p>
              <p className="text-sm text-white/60 mt-2 leading-relaxed">
                Managed hosting, connectors, and compliance tools. We run it. You own the data.
              </p>
            </div>

            <ul className="flex flex-col gap-2.5">
              {proFeatures.map((f) => (
                <li key={f} className="flex gap-2.5 text-sm text-white/80">
                  <Check />
                  {f}
                </li>
              ))}
            </ul>

            <p className="font-mono text-xs text-white/30 leading-relaxed">
              * Connectors and sync available Q3 2026. Storage overage $5/GB.
            </p>

            {/* Founding offer */}
            <div className="border border-[#2a5bd7]/40 bg-[#2a5bd7]/10 rounded px-4 py-3">
              <p className="text-sm text-[#7aa3f5] leading-snug">
                <span className="font-semibold text-white">Early access:</span>{" "}
                lock in $99/mo for first 3 months →
              </p>
            </div>

            <a
              href="#waitlist"
              className="mt-auto bg-[#2a5bd7] hover:bg-[#1a40a8] text-white font-semibold px-5 py-3 rounded text-center text-sm transition-colors"
            >
              Join waitlist
            </a>
          </div>

          {/* Enterprise */}
          <div className="bg-white border border-[#e5e7eb] rounded-lg p-8 flex flex-col gap-6">
            <div>
              <p className="font-mono text-xs text-[#888] uppercase tracking-wider mb-3">Enterprise</p>
              <div className="flex items-end gap-2">
                <span className="text-4xl font-bold text-[#0f1117]">Custom</span>
              </div>
              <p className="text-sm text-[#666] mt-2 leading-relaxed">
                Dedicated infrastructure, compliance documentation, SLA.
              </p>
            </div>

            <ul className="flex flex-col gap-2.5">
              {enterpriseFeatures.map((f) => (
                <li key={f} className="flex gap-2.5 text-sm text-[#444]">
                  <Check />
                  {f}
                </li>
              ))}
            </ul>

            <a
              href="mailto:lakhan@authorizer.dev"
              className="mt-auto border border-[#0f1117] text-[#0f1117] hover:bg-[#0f1117] hover:text-white font-medium px-5 py-3 rounded text-center text-sm transition-colors"
            >
              Contact sales
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
