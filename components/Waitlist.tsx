"use client";

import { useState } from "react";

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [useCase, setUseCase] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, company, useCase }),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="waitlist" aria-labelledby="waitlist-heading" className="bg-[#2a5bd7] py-24 px-4 sm:px-6">
      <div className="max-w-xl mx-auto">
        <div className="mb-10 text-center">
          <h2 id="waitlist-heading" className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Be first when managed cloud launches
          </h2>
          <p className="text-base text-white/80 leading-relaxed">
            We&apos;re onboarding early customers now. Founding members lock in{" "}
            <strong className="text-white">$99/mo for the first 3 months</strong>, then standard
            $149/mo. No minimum contract.
          </p>
        </div>

        {status === "success" ? (
          <div role="status" aria-live="polite" className="bg-white/10 border border-white/20 rounded-lg p-8 text-center">
            <p className="text-xl font-semibold text-white mb-2">You&apos;re on the list.</p>
            <p className="text-white/80">Lakhan will be in touch within 48 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
            <div>
              <label htmlFor="waitlist-email" className="block font-mono text-xs text-white/70 uppercase tracking-wider mb-1.5">
                Email <span className="text-white/40">(required)</span>
              </label>
              <input
                id="waitlist-email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                aria-required="true"
                className="w-full bg-white/10 border border-white/20 text-white placeholder-white/40 rounded px-4 py-3 text-sm focus:outline-none focus:border-white/50 focus:bg-white/15 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="waitlist-company" className="block font-mono text-xs text-white/70 uppercase tracking-wider mb-1.5">
                Company <span className="text-white/40">(optional)</span>
              </label>
              <input
                id="waitlist-company"
                type="text"
                autoComplete="organization"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Acme Corp"
                className="w-full bg-white/10 border border-white/20 text-white placeholder-white/40 rounded px-4 py-3 text-sm focus:outline-none focus:border-white/50 focus:bg-white/15 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="waitlist-usecase" className="block font-mono text-xs text-white/70 uppercase tracking-wider mb-1.5">
                What are you building? <span className="text-white/40">(optional)</span>
              </label>
              <input
                id="waitlist-usecase"
                type="text"
                value={useCase}
                onChange={(e) => setUseCase(e.target.value)}
                placeholder="e.g. Multi-tenant SaaS with AI chat"
                className="w-full bg-white/10 border border-white/20 text-white placeholder-white/40 rounded px-4 py-3 text-sm focus:outline-none focus:border-white/50 focus:bg-white/15 transition-colors"
              />
            </div>

            {status === "error" && (
              <p role="alert" className="text-white/90 text-sm bg-red-500/20 border border-red-400/30 rounded px-4 py-3">
                Something went wrong —{" "}
                <a href="mailto:lakhan@authorizer.dev" className="underline">
                  email lakhan@authorizer.dev
                </a>{" "}
                directly.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              aria-disabled={status === "loading"}
              className="bg-white text-[#2a5bd7] hover:bg-white/90 font-semibold px-6 py-3.5 rounded text-sm transition-colors disabled:opacity-60 disabled:cursor-not-allowed mt-2"
            >
              {status === "loading" ? "Joining..." : "Join the waitlist"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
