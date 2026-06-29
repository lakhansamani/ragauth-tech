"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";

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
    <section id="waitlist" aria-labelledby="demo-heading" className="bg-[#2563eb] py-24 px-4 sm:px-6">
      <div className="max-w-xl mx-auto">
        <FadeIn className="mb-10 text-center">
          <h2 id="demo-heading" className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            See RAGAuth in action
          </h2>
          <p className="text-base text-white/75 leading-relaxed">
            Book a 30-minute demo. We&apos;ll walk through your specific use case and answer every question.
            Early customers lock in{" "}
            <strong className="text-white">$129/mo — founding customer rate</strong>.
          </p>
        </FadeIn>

        {status === "success" ? (
          <FadeIn>
            <div role="status" aria-live="polite" className="bg-white/10 border border-white/20 rounded-xl p-8 text-center">
              <p className="text-xl font-semibold text-white mb-2">You&apos;re booked in.</p>
              <p className="text-white/75">Lakhan will reach out within 24 hours to confirm a time.</p>
            </div>
          </FadeIn>
        ) : (
          <FadeIn delay={100}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
              <div>
                <label htmlFor="waitlist-email" className="block font-mono text-[11px] text-white/60 uppercase tracking-widest mb-1.5">
                  Work email <span className="text-white/35">(required)</span>
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
                  className="w-full bg-white/10 border border-white/20 text-white placeholder-white/35 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-white/50 focus:bg-white/15 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="waitlist-company" className="block font-mono text-[11px] text-white/60 uppercase tracking-widest mb-1.5">
                  Company <span className="text-white/35">(optional)</span>
                </label>
                <input
                  id="waitlist-company"
                  type="text"
                  autoComplete="organization"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Acme Corp"
                  className="w-full bg-white/10 border border-white/20 text-white placeholder-white/35 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-white/50 focus:bg-white/15 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="waitlist-usecase" className="block font-mono text-[11px] text-white/60 uppercase tracking-widest mb-1.5">
                  What are you building? <span className="text-white/35">(optional)</span>
                </label>
                <input
                  id="waitlist-usecase"
                  type="text"
                  value={useCase}
                  onChange={(e) => setUseCase(e.target.value)}
                  placeholder="e.g. Multi-tenant SaaS with AI chat"
                  className="w-full bg-white/10 border border-white/20 text-white placeholder-white/35 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-white/50 focus:bg-white/15 transition-colors"
                />
              </div>

              {status === "error" && (
                <p role="alert" className="text-white/90 text-sm bg-red-500/20 border border-red-400/30 rounded-lg px-4 py-3">
                  Something went wrong —{" "}
                  <a href="mailto:lakhan@praalaktech.com" className="underline underline-offset-2">
                    email us directly
                  </a>
                  .
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                aria-disabled={status === "loading"}
                className="bg-white text-[#2563eb] hover:bg-white/90 font-semibold px-6 py-3.5 rounded-lg text-sm transition-colors disabled:opacity-60 disabled:cursor-not-allowed mt-2 cursor-pointer"
              >
                {status === "loading" ? "Sending..." : "Book my demo"}
              </button>
            </form>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
