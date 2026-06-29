"use client";

import { useEffect, useState } from "react";
import FadeIn from "./FadeIn";

const CURRENCIES = [
  { code: "USD", symbol: "$", label: "USD" },
  { code: "INR", symbol: "₹", label: "INR" },
  { code: "EUR", symbol: "€", label: "EUR" },
  { code: "GBP", symbol: "£", label: "GBP" },
] as const;

type CurrencyCode = (typeof CURRENCIES)[number]["code"];

const FALLBACK_RATES: Record<CurrencyCode, number> = {
  USD: 1,
  INR: 84,
  EUR: 0.92,
  GBP: 0.79,
};

const BASE_PRICES_USD = { full: 199, early: 129 };

function formatPrice(amount: number, code: CurrencyCode, symbol: string): string {
  const rounded =
    code === "INR" ? Math.round(amount / 100) * 100 : Math.round(amount);
  return `${symbol}${rounded.toLocaleString()}`;
}

const proFeatures = [
  "Up to 3 projects",
  "Managed Vector DB + permission engine",
  "50 GB document storage",
  "Google Drive + Notion connectors",
  "Audit logs — EU AI Act Article 12 ready",
  "BYO LLM — OpenAI, Ollama, or local",
  "Email support",
];

const enterpriseFeatures = [
  "Everything in Pro",
  "Unlimited projects and storage",
  "VPC or on-premise deployment",
  "SSO / SAML integration",
  "Custom SLA",
  "HIPAA and GDPR audit documentation",
  "ERP and database connectors",
  "Dedicated Slack channel",
];

function Check() {
  return (
    <svg
      className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function Pricing() {
  const [currency, setCurrency] = useState<CurrencyCode>("USD");
  const [rates, setRates] = useState<Record<CurrencyCode, number>>(FALLBACK_RATES);
  const [liveRates, setLiveRates] = useState(false);

  useEffect(() => {
    fetch("/api/rates")
      .then((r) => r.json())
      .then((data) => {
        if (data?.rates) {
          setRates(data.rates);
          setLiveRates(data.live ?? false);
        }
      })
      .catch(() => {});
  }, []);

  const cur = CURRENCIES.find((c) => c.code === currency)!;
  const rate = rates[currency];
  const fullPrice = formatPrice(BASE_PRICES_USD.full * rate, currency, cur.symbol);
  const earlyPrice = formatPrice(BASE_PRICES_USD.early * rate, currency, cur.symbol);

  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <FadeIn className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight mb-3">
            Per project. Not per user.
          </h2>
          <p className="text-base text-[#64748B] leading-relaxed max-w-xl mx-auto mb-6">
            Pay once for the product you&apos;re securing. Scale your users freely.
          </p>

          {/* Currency switcher */}
          <div className="flex flex-col items-center gap-1.5">
            <div className="flex items-center gap-1 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg p-1">
              {CURRENCIES.map((c) => (
                <button
                  key={c.code}
                  onClick={() => setCurrency(c.code)}
                  className={`font-mono text-xs px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
                    currency === c.code
                      ? "bg-[#0F172A] text-white"
                      : "text-[#94A3B8] hover:text-[#0F172A]"
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
            <p className="font-mono text-[10px] text-[#CBD5E1]">
              {liveRates ? "● Live rates" : "○ Approximate rates"}
            </p>
          </div>
        </FadeIn>

        {/* Cards — side by side, equal height */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch max-w-3xl mx-auto">
          {/* Pro */}
          <FadeIn className="bg-[#0F172A] border border-[#2563EB]/50 rounded-2xl p-7 flex flex-col gap-5 relative">
            <div className="absolute -top-3 left-7">
              <span className="font-mono text-[10px] bg-[#2563EB] text-white px-3 py-1 rounded-full tracking-widest uppercase">
                Most popular
              </span>
            </div>

            <div>
              <p className="font-mono text-[10px] text-white/40 uppercase tracking-widest mb-3">Pro</p>
              <div className="flex items-end gap-1.5">
                <span className="text-[2.5rem] font-bold text-white leading-none tabular-nums">{fullPrice}</span>
                <span className="text-white/40 text-sm mb-1">/mo</span>
              </div>
              <p className="font-mono text-xs text-[#60A5FA] mt-1.5">Per project · not per user</p>
              <p className="text-sm text-white/50 mt-2 leading-relaxed">
                Managed hosting. We run it. You own the data.
              </p>
            </div>

            <ul className="flex flex-col gap-2">
              {proFeatures.map((f) => (
                <li key={f} className="flex gap-2 text-[13px] text-white/65 items-start">
                  <Check />
                  {f}
                </li>
              ))}
            </ul>

            <div className="border border-[#2563EB]/25 bg-[#2563EB]/10 rounded-lg px-4 py-3">
              <p className="text-[13px] text-white/65 leading-snug">
                <span className="font-semibold text-white">Early access:</span>{" "}
                first 3 customers lock in {earlyPrice}/mo
              </p>
            </div>

            <a
              href="mailto:lakhan@praalaktech.com?subject=RAGAuth Demo Request"
              className="mt-auto bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold px-5 py-3 rounded-xl text-center text-sm transition-colors"
            >
              Book a demo
            </a>
          </FadeIn>

          {/* Enterprise */}
          <FadeIn delay={100} className="bg-white border border-[#E2E8F0] rounded-2xl p-7 flex flex-col gap-5">
            <div>
              <p className="font-mono text-[10px] text-[#94A3B8] uppercase tracking-widest mb-3">Enterprise</p>
              <div className="flex items-end gap-1.5">
                <span className="text-[2.5rem] font-bold text-[#0F172A] leading-none">Custom</span>
              </div>
              <p className="text-sm text-[#64748B] mt-2 leading-relaxed">
                VPC or on-prem deployment with dedicated support and compliance documentation.
              </p>
            </div>

            <ul className="flex flex-col gap-2">
              {enterpriseFeatures.map((f) => (
                <li key={f} className="flex gap-2 text-[13px] text-[#475569] items-start">
                  <Check />
                  {f}
                </li>
              ))}
            </ul>

            <a
              href="mailto:lakhan@praalaktech.com?subject=RAGAuth Enterprise Enquiry"
              className="mt-auto border border-[#0F172A] text-[#0F172A] hover:bg-[#0F172A] hover:text-white font-semibold px-5 py-3 rounded-xl text-center text-sm transition-colors"
            >
              Contact sales
            </a>
          </FadeIn>
        </div>

        <p className="font-mono text-xs text-[#CBD5E1] mt-8 text-center">
          {currency !== "USD"
            ? `Shown in ${currency} for reference — invoices issued in USD.`
            : "Prices in USD. Switch currency above for local estimates."}
        </p>
      </div>
    </section>
  );
}
