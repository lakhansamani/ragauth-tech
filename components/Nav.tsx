"use client";

import { useState } from "react";
import Logo from "./Logo";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      aria-label="Main navigation"
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-[#E2E8F0]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <a href="/" aria-label="RAGAuth home">
          <Logo />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 text-sm text-[#475569]">
          <a href="#use-cases" className="hover:text-[#0F172A] transition-colors">Use cases</a>
          <a href="#how-it-works" className="hover:text-[#0F172A] transition-colors">How it works</a>
          <a href="#pricing" className="hover:text-[#0F172A] transition-colors">Pricing</a>
          <a href="#faq" className="hover:text-[#0F172A] transition-colors">FAQ</a>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a
            href="mailto:lakhan@praalaktech.com?subject=RAGAuth Demo Request"
            className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-sm font-semibold px-5 py-3 rounded-lg transition-colors cursor-pointer"
          >
            Book a demo
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#475569] hover:text-[#0F172A] p-2 cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-[#E2E8F0] px-4 py-5 flex flex-col gap-4 text-sm text-[#475569]">
          <a href="#use-cases" onClick={() => setOpen(false)} className="hover:text-[#0F172A] transition-colors py-1">Use cases</a>
          <a href="#how-it-works" onClick={() => setOpen(false)} className="hover:text-[#0F172A] transition-colors py-1">How it works</a>
          <a href="#pricing" onClick={() => setOpen(false)} className="hover:text-[#0F172A] transition-colors py-1">Pricing</a>
          <a href="#faq" onClick={() => setOpen(false)} className="hover:text-[#0F172A] transition-colors py-1">FAQ</a>
          <a
            href="mailto:lakhan@praalaktech.com?subject=RAGAuth Demo Request"
            onClick={() => setOpen(false)}
            className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold px-4 py-2.5 rounded-lg transition-colors text-center mt-1"
          >
            Book a demo
          </a>
        </div>
      )}
    </nav>
  );
}
