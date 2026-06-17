export default function Footer() {
  return (
    <footer className="bg-[#060810] border-t border-white/10 py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Main row */}
        <div className="flex flex-col sm:flex-row justify-between gap-10 mb-10">
          {/* Logo + tagline */}
          <div className="flex flex-col gap-2">
            <a href="/" className="font-mono text-white font-semibold text-lg tracking-tight">
              <span className="text-[#2a5bd7] font-bold">RAG</span>Auth
            </a>
            <p className="text-white/40 text-sm leading-relaxed">
              Permission-aware RAG.
              <br />
              Authorizer + Vector DB.
            </p>
          </div>

          {/* Center links */}
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/50">
            <a
              href="https://github.com/authorizerdev/authorizer"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://discord.gg/4KeqMmGc"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Discord
            </a>
            <a
              href="https://blog.authorizer.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Blog
            </a>
            <a
              href="https://authorizer.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Authorizer
            </a>
          </div>

          {/* Right attribution */}
          <div className="text-sm text-white/30 flex flex-col gap-1">
            <span>
              Powered by{" "}
              <a
                href="https://authorizer.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-white transition-colors"
              >
                Authorizer
              </a>
            </span>
            <span>
              Built by{" "}
              <a
                href="https://praalaktech.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-white transition-colors"
              >
                Praalak Tech Solutions
              </a>
            </span>
          </div>
        </div>

        {/* Bottom line */}
        <div className="border-t border-white/10 pt-6">
          <p className="text-white/25 text-xs font-mono">
            © 2026 Praalak Tech Solutions. RAGAuth is open source — MIT licensed.
          </p>
        </div>
      </div>
    </footer>
  );
}
