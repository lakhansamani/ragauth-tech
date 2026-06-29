import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-[#F8FAFC] border-t border-[#E2E8F0] py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Main row */}
        <div className="flex flex-col sm:flex-row justify-between gap-10 mb-10">
          {/* Logo + tagline */}
          <div className="flex flex-col gap-3">
            <Logo />
            <p className="text-[#94A3B8] text-sm leading-relaxed max-w-xs">
              The access control layer for your AI.
              <br />
              Stop data leaks before they happen.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-[#64748B]">
            <a
              href="mailto:lakhan@praalaktech.com?subject=RAGAuth Demo Request"
              className="hover:text-[#0F172A] transition-colors"
            >
              Book a demo
            </a>
            <a href="#pricing" className="hover:text-[#0F172A] transition-colors">
              Pricing
            </a>
            <a
              href="https://discord.gg/4KeqMmGc"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0F172A] transition-colors"
            >
              Discord
            </a>
            <a
              href="https://praalaktech.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0F172A] transition-colors"
            >
              Praalak Tech
            </a>
          </div>

          {/* Contact */}
          <div className="text-sm text-[#94A3B8] flex flex-col gap-1">
            <a
              href="mailto:lakhan@praalaktech.com"
              className="text-[#64748B] hover:text-[#0F172A] transition-colors"
            >
              lakhan@praalaktech.com
            </a>
            <span>Built by Praalak Tech Solutions</span>
          </div>
        </div>

        {/* Bottom line */}
        <div className="border-t border-[#E2E8F0] pt-6">
          <p className="text-[#CBD5E1] text-xs font-mono">
            © 2026 Praalak Tech Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
