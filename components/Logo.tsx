export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Filter / gate mark */}
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="fg" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#1D4ED8" />
          </linearGradient>
        </defs>
        <rect width="32" height="32" rx="8" fill="url(#fg)" />
        {/* Left guardrail */}
        <rect x="6" y="7" width="5" height="18" rx="2" fill="white" />
        {/* Right guardrail */}
        <rect x="21" y="7" width="5" height="18" rx="2" fill="white" />
        {/* Data flowing through the channel */}
        <rect x="13" y="10"   width="6" height="2.5" rx="1.25" fill="white" fillOpacity="0.40" />
        <rect x="13" y="14.8" width="6" height="2.5" rx="1.25" fill="white" fillOpacity="0.70" />
        <rect x="13" y="19.5" width="6" height="2.5" rx="1.25" fill="white" fillOpacity="1"    />
      </svg>

      {/* Wordmark — Geist Sans, single family */}
      <span className="text-xl font-bold leading-none select-none tracking-tight">
        <span className="text-[#2563EB]">RAG</span>
        <span className="text-[#0F172A]">Auth</span>
      </span>
    </div>
  );
}
