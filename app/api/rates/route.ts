import { NextResponse } from "next/server";

const FALLBACK = { USD: 1, INR: 84, EUR: 0.92, GBP: 0.79 };

export async function GET() {
  try {
    const res = await fetch(
      "https://api.frankfurter.app/latest?from=USD&to=INR,EUR,GBP",
      { next: { revalidate: 3600 } } // cache for 1 hour
    );
    if (!res.ok) throw new Error("upstream error");
    const data = await res.json();
    return NextResponse.json({ rates: { USD: 1, ...data.rates }, live: true });
  } catch {
    return NextResponse.json({ rates: FALLBACK, live: false });
  }
}
