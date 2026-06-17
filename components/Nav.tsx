"use client";

import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav aria-label="Main navigation" className="fixed top-0 left-0 right-0 z-50 bg-[#0a0e1a]/95 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 font-mono text-white font-semibold text-lg tracking-tight">
          <span className="text-[#2a5bd7] font-bold">RAG</span>
          <span>Auth</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 text-sm text-white/70">
          <a href="#use-cases" className="hover:text-white transition-colors">Use cases</a>
          <a href="#how-it-works" className="hover:text-white transition-colors">How it works</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a
            href="https://github.com/authorizerdev/authorizer"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1"
          >
            GitHub
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a
            href="#waitlist"
            className="bg-[#2a5bd7] hover:bg-[#1a40a8] text-white text-sm font-medium px-4 py-2 rounded transition-colors"
          >
            Join waitlist
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white/70 hover:text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0a0e1a] border-t border-white/10 px-4 py-4 flex flex-col gap-4 text-sm text-white/70">
          <a href="#use-cases" onClick={() => setOpen(false)} className="hover:text-white transition-colors py-1">Use cases</a>
          <a href="#how-it-works" onClick={() => setOpen(false)} className="hover:text-white transition-colors py-1">How it works</a>
          <a href="#pricing" onClick={() => setOpen(false)} className="hover:text-white transition-colors py-1">Pricing</a>
          <a
            href="https://github.com/authorizerdev/authorizer"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors py-1"
          >
            GitHub ↗
          </a>
          <a
            href="#waitlist"
            onClick={() => setOpen(false)}
            className="bg-[#2a5bd7] hover:bg-[#1a40a8] text-white font-medium px-4 py-2 rounded transition-colors text-center"
          >
            Join waitlist
          </a>
        </div>
      )}
    </nav>
  );
}
